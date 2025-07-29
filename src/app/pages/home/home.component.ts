import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ScrollAnimationDirective],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isScrolled = false;

  constructor() { }

  ngOnInit(): void {
    // Initialize any necessary data or services
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Add scroll-based animations or effects if needed
    this.isScrolled = window.scrollY > 50;
  }
}
