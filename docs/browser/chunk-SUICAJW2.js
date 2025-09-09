import {
  RouterModule
} from "./chunk-H2XSCM4B.js";
import "./chunk-IO2DL3NX.js";
import {
  CommonModule,
  isPlatformBrowser
} from "./chunk-GIY2C73M.js";
import {
  PLATFORM_ID,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-RABZPDKX.js";

// src/app/pages/home/home.component.ts
var _HomeComponent = class _HomeComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.words = ["people", "animals", "the environment"];
    this.currentText = "people";
    this.currentIndex = 0;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.startTextRotation();
      }, 1e3);
    }
  }
  startTextRotation() {
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = window.setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
        this.currentText = this.words[this.currentIndex];
      }, 3e3);
    }
  }
  ngOnDestroy() {
    if (this.intervalId && isPlatformBrowser(this.platformId)) {
      clearInterval(this.intervalId);
    }
  }
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(t) {
  return new (t || _HomeComponent)(\u0275\u0275directiveInject(PLATFORM_ID));
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 167, vars: 1, consts: [[1, "relative", "overflow-hidden"], [1, "flex", "h-[80vh]", "lg:h-[90vh]", "w-full", "relative"], ["src", "assets/images/home.jpg", "alt", "OHCON Healthcare", "loading", "eager", "decoding", "async", 1, "object-cover", "w-full", "transform", "scale-105", "motion-safe:animate-subtle-zoom"], [1, "absolute", "inset-0", "bg-gradient-to-b", "from-black/70", "via-black/50", "to-transparent"], [1, "absolute", "top-1/2", "left-1/2", "transform", "-translate-x-1/2", "-translate-y-1/2", "w-full", "max-w-7xl", "px-6", "lg:px-8"], [1, "space-y-6", "lg:space-y-8"], [1, "heading-xl", "text-white", "text-center"], [1, "rotating-text", "text-blue-400", "transition-all", "duration-500", "ease-in-out"], [1, "text-body-lg", "text-white/90", "mx-auto", "text-center"], [1, "flex", "flex-col", "sm:flex-row", "justify-center", "gap-4", "lg:gap-6", "pt-4"], ["href", "/programs", 1, "inline-flex", "items-center", "justify-center", "px-8", "lg:px-10", "py-4", "lg:py-5", "text-lg", "lg:text-xl", "font-semibold", "text-white", "bg-blue-600", "rounded-xl", "hover:bg-blue-700", "transform", "hover:scale-105", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "lg:w-6", "lg:h-6", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 7l5 5m0 0l-5 5m5-5H6"], ["href", "/get-involved", 1, "inline-flex", "items-center", "justify-center", "px-8", "lg:px-10", "py-4", "lg:py-5", "text-lg", "lg:text-xl", "font-semibold", "text-blue-600", "bg-white", "rounded-xl", "hover:bg-gray-50", "transform", "hover:scale-105", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200"], [1, "absolute", "bottom-8", "left-1/2", "transform", "-translate-x-1/2", "motion-safe:animate-bounce"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-white"], [1, "py-16", "lg:py-24", "bg-gray-50"], [1, "container", "mx-auto", "px-4", "lg:px-8", "max-w-7xl"], [1, "max-w-4xl", "mx-auto", "text-center", "mb-20", "lg:mb-28"], [1, "heading-md", "text-gray-900", "mb-6"], [1, "text-body-lg", "text-gray-600"], [1, "text-center", "mb-12", "lg:mb-16"], [1, "heading-lg", "text-gray-900", "mb-4"], [1, "w-24", "h-1", "bg-blue-600", "mx-auto"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "xl:grid-cols-4", "gap-8", "lg:gap-10", "mb-20", "lg:mb-28", "max-w-7xl", "mx-auto"], ["tabindex", "0", 1, "bg-white", "rounded-2xl", "p-6", "lg:p-8", "xl:p-10", "shadow-lg", "hover:shadow-xl", "transition-all", "duration-300", "transform", "hover:-translate-y-2", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200"], [1, "text-center"], [1, "text-3xl", "lg:text-4xl", "xl:text-4xl", "2xl:text-5xl", "font-bold", "text-blue-600", "mb-4", "leading-tight", "break-words"], [1, "card-title", "font-semibold", "text-gray-900", "mb-2", "leading-tight"], [1, "card-text", "text-gray-600"], [1, "text-lg", "lg:text-xl", "xl:text-2xl", "font-semibold", "text-gray-900", "mb-2", "leading-tight"], [1, "text-sm", "lg:text-base", "text-gray-600"], [1, "grid", "md:grid-cols-3", "gap-8", "lg:gap-12", "mb-12", "lg:mb-16", "max-w-6xl", "mx-auto"], [1, "bg-white", "rounded-2xl", "p-8", "lg:p-10", "shadow-lg", "hover:shadow-xl", "transition-all", "duration-300", "transform", "hover:-translate-y-2"], [1, "flex", "items-center", "justify-center", "w-20", "h-20", "lg:w-24", "lg:h-24", "bg-blue-100", "rounded-xl", "mb-8"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-10", "h-10", "lg:w-12", "lg:h-12", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], [1, "heading-sm", "text-gray-900", "mb-4"], [1, "text-body", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 14l-7 7m0 0l-7-7m7 7V3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"], ["href", "/programs", 1, "inline-flex", "items-center", "px-10", "lg:px-12", "py-4", "lg:py-5", "text-lg", "lg:text-xl", "font-medium", "text-white", "bg-blue-600", "rounded-xl", "hover:bg-blue-700", "transform", "hover:scale-105", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "ml-2"], [1, "py-16", "lg:py-24", "bg-white"], [1, "grid", "md:grid-cols-2", "gap-8", "lg:gap-12", "mb-12", "lg:mb-16", "max-w-6xl", "mx-auto"], [1, "bg-gray-50", "rounded-2xl", "p-8", "lg:p-10", "shadow-lg", "hover:shadow-xl", "transition-all", "duration-300", "transform", "hover:-translate-y-2"], [1, "bg-blue-100", "text-blue-600", "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "inline-block", "mb-6"], [1, "heading-sm", "text-gray-900", "mb-6"], [1, "text-body", "text-gray-600", "mb-6"], ["href", "/news", 1, "inline-flex", "items-center", "text-blue-600", "hover:text-blue-700", "font-medium", "text-lg"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 5l7 7-7 7"], [1, "bg-green-100", "text-green-600", "px-4", "py-2", "rounded-full", "text-sm", "font-medium", "inline-block", "mb-6"], ["href", "/resources", 1, "inline-flex", "items-center", "text-blue-600", "hover:text-blue-700", "font-medium", "text-lg"], ["href", "/news", 1, "inline-flex", "items-center", "px-10", "lg:px-12", "py-4", "lg:py-5", "text-lg", "lg:text-xl", "font-medium", "text-blue-600", "bg-blue-50", "rounded-xl", "hover:bg-blue-100", "transform", "hover:scale-105", "transition-all", "duration-300"], [1, "w-24", "h-1", "bg-blue-600", "mx-auto", "mb-6"], [1, "text-body-lg", "text-gray-600", "mx-auto"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-6", "lg:gap-8", "max-w-4xl", "mx-auto"], [1, "text-center", "p-6", "lg:p-8", "bg-white", "rounded-lg", "shadow-sm"], [1, "text-sm", "lg:text-base", "font-medium", "text-gray-600"], [1, "py-16", "lg:py-24", "bg-blue-600", "text-white"], [1, "container", "mx-auto", "px-4", "lg:px-8", "text-center", "max-w-5xl"], [1, "heading-lg", "text-white", "mb-6", "lg:mb-8"], [1, "text-body-lg", "text-white/90", "mb-10", "lg:mb-12", "max-w-3xl", "mx-auto"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "lg:gap-6", "justify-center", "max-w-md", "mx-auto"], ["href", "/contact-us", 1, "bg-white", "text-blue-600", "px-8", "lg:px-10", "py-3", "lg:py-4", "rounded-xl", "text-lg", "font-semibold", "hover:bg-gray-100", "transform", "hover:scale-105", "transition-all", "duration-300", "shadow-lg"], ["href", "/get-involved", 1, "border-2", "border-white", "text-white", "px-8", "lg:px-10", "py-3", "lg:py-4", "rounded-xl", "text-lg", "font-semibold", "hover:bg-white", "hover:text-blue-600", "transform", "hover:scale-105", "transition-all", "duration-300"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2)(3, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "h1", 6);
    \u0275\u0275text(7, " One Health for a resilient Malawi \u2014 ");
    \u0275\u0275elementStart(8, "span", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, ", protected together. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 8);
    \u0275\u0275text(12, " Connecting human, animal, and environmental health through community-led solutions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9)(14, "a", 10);
    \u0275\u0275text(15, " Our Programs ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(16, "svg", 11);
    \u0275\u0275element(17, "path", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(18, "a", 13);
    \u0275\u0275text(19, " Get Involved ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 14);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(21, "svg", 15);
    \u0275\u0275text(22, '\nnd" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /> ');
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "section", 16)(24, "div", 17)(25, "div", 18)(26, "h2", 19);
    \u0275\u0275text(27, "About OHCON");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p", 20);
    \u0275\u0275text(29, " OneHealth collaborative Network (OHCON) is a Malawian NGO implementing practical One Health solutions through school programs, integrated clinics, WASH interventions, AMR stewardship, and policy engagement\u2014working with government, universities, and communities. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 21)(31, "h2", 22);
    \u0275\u0275text(32, "Our Impact");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 24)(35, "div", 25)(36, "div", 26)(37, "div", 27);
    \u0275\u0275text(38, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "h3", 28);
    \u0275\u0275text(40, "One Health Clubs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 29);
    \u0275\u0275text(42, "Launched (pilot target)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 25)(44, "div", 26)(45, "div", 27);
    \u0275\u0275text(46, "300+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "h3", 30);
    \u0275\u0275text(48, "People Reached");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 31);
    \u0275\u0275text(50, "By awareness campaigns (annual target)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 25)(52, "div", 26)(53, "div", 27);
    \u0275\u0275text(54, "30");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "h3", 30);
    \u0275\u0275text(56, "Health & Veterinary Clients");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p", 31);
    \u0275\u0275text(58, "Via joint clinics (pilot target)");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 25)(60, "div", 26)(61, "div", 27);
    \u0275\u0275text(62, "15+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "h3", 30);
    \u0275\u0275text(64, "Professionals Trained");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p", 31);
    \u0275\u0275text(66, "In One Health principles");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(67, "div", 21)(68, "h2", 22);
    \u0275\u0275text(69, "Our Programs");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 32)(72, "div", 33)(73, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(74, "svg", 35);
    \u0275\u0275element(75, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(76, "h3", 37);
    \u0275\u0275text(77, "Education & Youth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "p", 38);
    \u0275\u0275text(79, " One Health clubs, youth ambassadors, accredited courses. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 33)(81, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(82, "svg", 35);
    \u0275\u0275element(83, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(84, "h3", 37);
    \u0275\u0275text(85, "Integrated Clinics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "p", 38);
    \u0275\u0275text(87, " Joint human-animal community outreach for screening & vaccination. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 33)(89, "div", 34);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(90, "svg", 35);
    \u0275\u0275element(91, "path", 40);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(92, "h3", 37);
    \u0275\u0275text(93, "WASH & Environment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p", 38);
    \u0275\u0275text(95, " School latrines, clean water, and animal waste management. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 26)(97, "a", 41);
    \u0275\u0275text(98, " View all programs ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(99, "svg", 42);
    \u0275\u0275element(100, "path", 12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(101, "section", 43)(102, "div", 17)(103, "div", 21)(104, "h2", 22);
    \u0275\u0275text(105, "Latest News & Events");
    \u0275\u0275elementEnd();
    \u0275\u0275element(106, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "div", 44)(108, "div", 45)(109, "div", 46);
    \u0275\u0275text(110, " Event ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "h3", 47);
    \u0275\u0275text(112, "One Health Symposium 2025 \u2014 Registration Open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "p", 48);
    \u0275\u0275text(114, " Join us for our annual symposium bringing together health professionals, researchers, and community leaders to advance One Health principles in Malawi. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "a", 49);
    \u0275\u0275text(116, " Learn more ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(117, "svg", 50);
    \u0275\u0275element(118, "path", 51);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(119, "div", 45)(120, "div", 52);
    \u0275\u0275text(121, " Course ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "h3", 47);
    \u0275\u0275text(123, 'New Accredited "Introduction to One Health" Course Now Live');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "p", 48);
    \u0275\u0275text(125, " Our comprehensive 5-module course is now available with certification. Perfect for health professionals and community champions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "a", 53);
    \u0275\u0275text(127, " Enroll now ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(128, "svg", 50);
    \u0275\u0275element(129, "path", 51);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(130, "div", 26)(131, "a", 54);
    \u0275\u0275text(132, " Read more news & events ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(133, "svg", 42);
    \u0275\u0275element(134, "path", 12);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(135, "section", 16)(136, "div", 17)(137, "div", 21)(138, "h2", 22);
    \u0275\u0275text(139, "Our Partners");
    \u0275\u0275elementEnd();
    \u0275\u0275element(140, "div", 55);
    \u0275\u0275elementStart(141, "p", 56);
    \u0275\u0275text(142, "Working together to advance One Health in Malawi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "div", 57)(144, "div", 58)(145, "p", 59);
    \u0275\u0275text(146, "Ministry of Health");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 58)(148, "p", 59);
    \u0275\u0275text(149, "Universities");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(150, "div", 58)(151, "p", 59);
    \u0275\u0275text(152, "NGO Partners");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(153, "div", 58)(154, "p", 59);
    \u0275\u0275text(155, "International Funders");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(156, "section", 60)(157, "div", 61)(158, "h2", 62);
    \u0275\u0275text(159, " Ready to Join Our Mission? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(160, "p", 63);
    \u0275\u0275text(161, " Partner with us to build a healthier, more resilient Malawi through One Health solutions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "div", 64)(163, "a", 65);
    \u0275\u0275text(164, " Partner with us ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "a", 66);
    \u0275\u0275text(166, " Get Involved ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx.currentText, " ");
  }
}, dependencies: [CommonModule, RouterModule], styles: ["\n\n.rotating-text[_ngcontent-%COMP%] {\n  min-width: 180px;\n  display: inline-block;\n  text-align: left;\n  transition: opacity 0.5s ease-in-out;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 13 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-SUICAJW2.js.map
