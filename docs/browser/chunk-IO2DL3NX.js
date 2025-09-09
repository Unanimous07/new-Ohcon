import {
  isPlatformBrowser
} from "./chunk-GIY2C73M.js";
import {
  ElementRef,
  PLATFORM_ID,
  ɵɵdefineDirective,
  ɵɵdirectiveInject
} from "./chunk-RABZPDKX.js";

// src/app/shared/directives/scroll-animation.directive.ts
var _ScrollAnimationDirective = class _ScrollAnimationDirective {
  constructor(element, platformId) {
    this.element = element;
    this.platformId = platformId;
    this.animationClass = "animate-fade-in";
    this.threshold = 0.1;
    this.animationDelay = "0ms";
    this.observer = null;
  }
  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.element.nativeElement.style.opacity = "0";
    this.element.nativeElement.style.animationFillMode = "forwards";
    if (this.animationDelay) {
      this.element.nativeElement.style.animationDelay = this.animationDelay;
    }
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.element.nativeElement.classList.add(this.animationClass);
          if (this.observer) {
            this.observer.unobserve(entry.target);
          }
        }
      });
    }, {
      threshold: this.threshold,
      rootMargin: "0px 0px -50px 0px"
    });
    this.observer.observe(this.element.nativeElement);
  }
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
};
_ScrollAnimationDirective.\u0275fac = function ScrollAnimationDirective_Factory(t) {
  return new (t || _ScrollAnimationDirective)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(PLATFORM_ID));
};
_ScrollAnimationDirective.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ScrollAnimationDirective, selectors: [["", "scrollAnimation", ""]], inputs: { animationClass: "animationClass", threshold: "threshold", animationDelay: "animationDelay" }, standalone: true });
var ScrollAnimationDirective = _ScrollAnimationDirective;

export {
  ScrollAnimationDirective
};
//# sourceMappingURL=chunk-IO2DL3NX.js.map
