import { Directive, ElementRef, Input, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[scrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  @Input() animationClass: string = 'animate-fade-in';
  @Input() threshold: number = 0.1;
  @Input() animationDelay: string = '0ms';

  private observer: IntersectionObserver | null = null;

  constructor(
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    // Only run in browser environment
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    // Set initial styles
    this.element.nativeElement.style.opacity = '0';
    this.element.nativeElement.style.animationFillMode = 'forwards';
    
    if (this.animationDelay) {
      this.element.nativeElement.style.animationDelay = this.animationDelay;
    }

    // Create and start the observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add animation class
            this.element.nativeElement.classList.add(this.animationClass);
            
            // Cleanup
            if (this.observer) {
              this.observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: this.threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}
