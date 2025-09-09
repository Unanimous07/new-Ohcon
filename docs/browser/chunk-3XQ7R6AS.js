import {
  Router
} from "./chunk-H2XSCM4B.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  ɵNgSelectMultipleOption
} from "./chunk-DOIYSES2.js";
import "./chunk-IO2DL3NX.js";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-GIY2C73M.js";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-RABZPDKX.js";

// src/app/pages/resources/resources.component.ts
function ResourcesComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "option", 39);
  }
  if (rf & 2) {
    const suggestion_r4 = ctx.$implicit;
    \u0275\u0275property("value", suggestion_r4);
  }
}
function ResourcesComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ResourcesComponent_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.clearFilters());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 41);
    \u0275\u0275element(2, "path", 42);
    \u0275\u0275elementEnd()();
  }
}
function ResourcesComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43)(1, "div", 44)(2, "h3", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 46);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 47);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 48);
    \u0275\u0275text(9, " Learn More ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(10, "svg", 37);
    \u0275\u0275element(11, "path", 38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const resource_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(resource_r7.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r7.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(resource_r7.description);
  }
}
function ResourcesComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 50);
    \u0275\u0275element(2, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "p", 52);
    \u0275\u0275text(4, "No resources found matching your search criteria.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 53);
    \u0275\u0275listener("click", function ResourcesComponent_div_48_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.clearFilters());
    });
    \u0275\u0275text(6, "Clear filters");
    \u0275\u0275elementEnd()();
  }
}
var _ResourcesComponent = class _ResourcesComponent {
  constructor(router) {
    this.router = router;
    this.searchQuery = "";
    this.filteredResources = [];
    this.resources = [
      {
        title: "One Health Basics",
        type: "Article",
        description: "Introduction to One Health concepts and principles",
        category: "educational"
      },
      {
        title: "Disease Surveillance Guide",
        type: "Guide",
        description: "Comprehensive guide for disease surveillance",
        category: "practical"
      },
      {
        title: "Research Methods",
        type: "Research Paper",
        description: "Research methodologies in One Health",
        category: "educational"
      },
      {
        title: "Community Engagement",
        type: "Workshop",
        description: "Best practices for community engagement",
        category: "training"
      },
      {
        title: "Implementation Toolkit",
        type: "Guide",
        description: "Tools and templates for One Health implementation",
        category: "practical"
      },
      {
        title: "Certification Program",
        type: "Course",
        description: "Professional certification in One Health approaches",
        category: "training"
      }
    ];
    this.filteredResources = this.resources;
  }
  navigateToContact() {
    this.router.navigate(["/contact-us"]);
  }
  onSearch(event) {
    const query = event.target.value.toLowerCase();
    if (!query) {
      this.filteredResources = this.resources;
      return;
    }
    this.filteredResources = this.resources.filter((resource) => resource.title.toLowerCase().includes(query) || resource.description.toLowerCase().includes(query) || resource.type.toLowerCase().includes(query));
  }
  filterByCategory(category) {
    this.searchQuery = "";
    this.filteredResources = this.resources.filter((resource) => resource.category === category);
  }
  clearFilters() {
    this.searchQuery = "";
    this.filteredResources = this.resources;
  }
  getAutocompleteSuggestions() {
    return Array.from(new Set(this.resources.map((resource) => resource.title).filter((title) => title.toLowerCase().includes(this.searchQuery.toLowerCase()))));
  }
};
_ResourcesComponent.\u0275fac = function ResourcesComponent_Factory(t) {
  return new (t || _ResourcesComponent)(\u0275\u0275directiveInject(Router));
};
_ResourcesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResourcesComponent, selectors: [["app-resources"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 58, vars: 5, consts: [[1, "min-h-screen", "bg-gray-50"], [1, "relative", "py-32", "bg-gradient-to-br", "from-blue-900", "to-blue-700", "text-white"], [1, "container", "mx-auto", "px-4", "lg:px-8", "relative", "z-10"], [1, "max-w-4xl", "mx-auto", "text-center"], [1, "heading-xl", "text-white", "mb-6"], [1, "text-body-lg", "text-white/90", "mb-8"], [1, "container", "mx-auto", "px-4", "my-16", "lg:px-8"], [1, "bg-white", "rounded-2xl", "shadow-lg", "p-6", "-mt-8", "relative", "z-10", "max-w-2xl", "mx-auto"], [1, "relative"], ["type", "text", "placeholder", "Search resources...", "list", "suggestions", 1, "w-full", "px-6", "py-4", "border", "border-gray-300", "rounded-xl", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-all", 3, "ngModel", "ngModelChange", "input"], ["id", "suggestions"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors", "aria-label", "Clear search", 3, "click", 4, "ngIf"], [1, "container", "mx-auto", "px-4", "lg:px-8", "py-24", "mt-24"], [1, "grid", "md:grid-cols-3", "gap-8", "mb-16"], ["tabindex", "0", 1, "bg-white", "rounded-2xl", "p-8", "mt-16", "shadow-lg", "hover:shadow-xl", "transition-all", "duration-300", "transform", "hover:-translate-y-1", "cursor-pointer", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200", 3, "click"], [1, "flex", "items-center", "justify-center", "w-16", "h-16", "bg-blue-100", "rounded-xl", "mb-6", "mx-auto"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-20", "h-20", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], [1, "p-8", "mt-20"], [1, "heading-sm", "mb-4"], [1, "text-body", "text-gray-600", "mb-6"], ["tabindex", "0", 1, "resource-card", "cursor-pointer", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200", 3, "click"], [1, "resource-icon", "bg-green-500", "p-12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"], [1, "p-8"], [1, "resource-icon", "bg-purple-500", "p-12"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1.5", "d", "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"], [1, "resource-list"], ["class", "resource-card slide-up", 4, "ngFor", "ngForOf"], ["class", "no-results fade-in", 4, "ngIf"], [1, "mt-24", "bg-white", "rounded-2xl", "shadow-lg", "p-12", "text-center", "max-w-4xl", "mx-auto"], [1, "heading-md", "mb-6"], [1, "text-body-lg", "text-gray-600", "mb-8"], [1, "btn", "btn-primary", "text-lg", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M14 5l7 7m0 0l-7 7m7-7H3"], [3, "value"], ["aria-label", "Clear search", 1, "absolute", "right-4", "top-1/2", "transform", "-translate-y-1/2", "text-gray-400", "hover:text-gray-600", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "resource-card", "slide-up"], [1, "p-6", "flex", "flex-col", "h-full"], [1, "heading-sm", "mb-3"], [1, "type-badge", "bg-blue-100", "text-blue-800", "mb-4"], [1, "text-body", "text-gray-600", "flex-grow"], [1, "btn", "btn-primary", "mt-6", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200"], [1, "no-results", "fade-in"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-16", "h-16", "text-gray-400", "mb-4", "mx-auto"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-body-lg", "mb-4"], [1, "btn", "btn-primary", 3, "click"]], template: function ResourcesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
    \u0275\u0275text(5, "One Health Resources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 5);
    \u0275\u0275text(7, " Access comprehensive educational materials and practical guides for implementing One Health approaches ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ResourcesComponent_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
      return $event;
    });
    \u0275\u0275listener("input", function ResourcesComponent_Template_input_input_11_listener($event) {
      return ctx.onSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "datalist", 10);
    \u0275\u0275template(13, ResourcesComponent_option_13_Template, 1, 1, "option", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ResourcesComponent_button_14_Template, 3, 0, "button", 12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "div", 15);
    \u0275\u0275listener("click", function ResourcesComponent_Template_div_click_17_listener() {
      return ctx.filterByCategory("educational");
    });
    \u0275\u0275elementStart(18, "div", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 17);
    \u0275\u0275element(20, "path", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "svg", 19);
    \u0275\u0275element(22, "path", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "div", 21)(24, "h2", 22);
    \u0275\u0275text(25, "Educational Materials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p", 23);
    \u0275\u0275text(27, "Access a comprehensive collection of articles, research papers, and case studies.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 24);
    \u0275\u0275listener("click", function ResourcesComponent_Template_div_click_28_listener() {
      return ctx.filterByCategory("practical");
    });
    \u0275\u0275elementStart(29, "div", 25);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 19);
    \u0275\u0275element(31, "path", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 27)(33, "h2", 22);
    \u0275\u0275text(34, "Practical Guides");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p", 23);
    \u0275\u0275text(36, "Step-by-step guides and toolkits for implementing One Health approaches.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 24);
    \u0275\u0275listener("click", function ResourcesComponent_Template_div_click_37_listener() {
      return ctx.filterByCategory("training");
    });
    \u0275\u0275elementStart(38, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(39, "svg", 19);
    \u0275\u0275element(40, "path", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(41, "div", 27)(42, "h2", 22);
    \u0275\u0275text(43, "Training Resources");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p", 23);
    \u0275\u0275text(45, "Workshops, webinars, and certification programs.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(46, "div", 30);
    \u0275\u0275template(47, ResourcesComponent_div_47_Template, 12, 3, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, ResourcesComponent_div_48_Template, 7, 0, "div", 32);
    \u0275\u0275elementStart(49, "div", 33)(50, "h2", 34);
    \u0275\u0275text(51, "Need More Information?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p", 35);
    \u0275\u0275text(53, "Contact our team for additional resources or specific inquiries.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 36);
    \u0275\u0275listener("click", function ResourcesComponent_Template_button_click_54_listener() {
      return ctx.navigateToContact();
    });
    \u0275\u0275text(55, " Contact Us ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 37);
    \u0275\u0275element(57, "path", 38);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.getAutocompleteSuggestions());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.searchQuery);
    \u0275\u0275advance(33);
    \u0275\u0275property("ngForOf", ctx.filteredResources);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.filteredResources.length === 0);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NgControlStatus, NgModel], styles: [`

.container[_ngcontent-%COMP%] {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}
.hero-section[_ngcontent-%COMP%] {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(
      135deg,
      #1e40af 0%,
      #3b82f6 100%);
}
.hero-section[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.search-container[_ngcontent-%COMP%] {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: -2rem auto 2rem;
  max-width: 42rem;
  position: relative;
  z-index: 10;
}
.search-input[_ngcontent-%COMP%] {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid transparent;
  border-radius: 0.75rem;
  transition: all 0.3s ease;
  font-size: 1.125rem;
}
.search-input[_ngcontent-%COMP%]:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}
.resource-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.resource-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.resource-icon[_ngcontent-%COMP%] {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.resource-card[_ngcontent-%COMP%]:hover   .resource-icon[_ngcontent-%COMP%] {
  transform: scale(1.1);
}
.resource-list[_ngcontent-%COMP%] {
  display: grid;
  gap: 2rem;
  padding: 2rem 0;
}
@media (min-width: 768px) {
  .resource-list[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .resource-list[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, 1fr);
  }
}
.type-badge[_ngcontent-%COMP%] {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
}
.type-badge[_ngcontent-%COMP%]:hover {
  transform: scale(1.05);
}
.btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
}
.btn[_ngcontent-%COMP%]:hover {
  transform: translateY(-1px);
}
.btn-primary[_ngcontent-%COMP%] {
  background-color: #3b82f6;
  color: white;
}
.btn-primary[_ngcontent-%COMP%]:hover {
  background-color: #2563eb;
}
.fade-in[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fadeIn 0.5s ease-in;
}
.slide-up[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_slideUp 0.5s ease-out;
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes _ngcontent-%COMP%_slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.clear-btn[_ngcontent-%COMP%] {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem;
  color: #6b7280;
  transition: all 0.2s ease;
  border-radius: 9999px;
}
.clear-btn[_ngcontent-%COMP%]:hover {
  background-color: #f3f4f6;
  color: #374151;
}
.no-results[_ngcontent-%COMP%] {
  text-align: center;
  padding: 3rem 0;
  color: #6b7280;
}
@media (max-width: 640px) {
  .container[_ngcontent-%COMP%] {
    padding: 0 1rem;
  }
}
@media (min-width: 641px) and (max-width: 1024px) {
  .container[_ngcontent-%COMP%] {
    padding: 0 2rem;
  }
}
@media (min-width: 1025px) {
  .container[_ngcontent-%COMP%] {
    padding: 0 4rem;
  }
}
/*# sourceMappingURL=resources.component.css.map */`] });
var ResourcesComponent = _ResourcesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResourcesComponent, { className: "ResourcesComponent", filePath: "src\\app\\pages\\resources\\resources.component.ts", lineNumber: 21 });
})();
export {
  ResourcesComponent
};
//# sourceMappingURL=chunk-3XQ7R6AS.js.map
