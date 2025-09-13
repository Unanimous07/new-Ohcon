import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  words = ['people', 'animals', 'the environment'];
  currentText = 'people';
  private currentIndex = 0;
  private intervalId?: number;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
  ngOnInit(): void {
    // Component loads instantly without any timers or intervals
  }

  ngAfterViewInit(): void {
    // Only start animation in browser environment
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.startTextRotation();
      }, 1000); // 1 second delay for smooth initial load
    }
  }

  private startTextRotation(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = window.setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
        this.currentText = this.words[this.currentIndex];
      }, 3000); // Change text every 3 seconds
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId && isPlatformBrowser(this.platformId)) {
      clearInterval(this.intervalId);
    }
  }
}
