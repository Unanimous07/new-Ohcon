import { Component, OnInit, OnDestroy, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SEOService } from '../../shared/services/seo.service';

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
  
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private seoService: SEOService
  ) {}
  
  ngOnInit(): void {
    this.seoService.updateSEO({
      title: 'OHCON - One Health Collaborative Network Malawi',
      description: 'OHCON advances One Health principles through integrated solutions connecting human, animal, and environmental health in Malawi. Join our mission to improve community health outcomes.',
      keywords: 'One Health, Malawi, Healthcare, Public Health, Veterinary Medicine, Environmental Health, NGO, Community Health, Disease Prevention',
      url: 'https://ohconmw.org',
      image: 'https://ohconmw.org/assets/images/hero-home.jpg'
    });

    this.seoService.generateStructuredData('Organization', {});
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
