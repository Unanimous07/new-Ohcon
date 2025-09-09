import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-RABZPDKX.js";

// src/app/pages/not-found/not-found.component.ts
var _NotFoundComponent = class _NotFoundComponent {
};
_NotFoundComponent.\u0275fac = function NotFoundComponent_Factory(t) {
  return new (t || _NotFoundComponent)();
};
_NotFoundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFoundComponent, selectors: [["app-not-found"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 0, consts: [[1, "flex", "items-center", "justify-center", "min-h-screen", "bg-gray-50", "font-sans", 2, "font-family", "Inter, 'Helvetica Neue', Arial, sans-serif", "font-weight", "400"], [1, "p-12", "rounded-2xl", "shadow-xl", "bg-white", "max-w-md", "mx-auto", "text-center"], [1, "space-y-6"], [1, "text-6xl", "font-sans", "font-medium", "text-blue-600"], [1, "text-2xl", "font-sans", "font-normal", "text-gray-900"], [1, "border-gray-200"], [1, "text-gray-600"], ["href", "/", 1, "inline-block", "bg-blue-600", "text-white", "px-6", "py-3", "rounded-lg", "font-semibold", "hover:bg-blue-700", "transition-colors", "duration-300"]], template: function NotFoundComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
    \u0275\u0275text(4, "404");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 4);
    \u0275\u0275text(6, "Page Not Found");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "hr", 5);
    \u0275\u0275elementStart(8, "p", 6);
    \u0275\u0275text(9, "The page you're looking for doesn't exist or has been moved.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 7);
    \u0275\u0275text(11, " Return Home ");
    \u0275\u0275elementEnd()()()();
  }
}, styles: ["\n\n/*# sourceMappingURL=not-found.component.css.map */"] });
var NotFoundComponent = _NotFoundComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src\\app\\pages\\not-found\\not-found.component.ts", lineNumber: 10 });
})();
export {
  NotFoundComponent
};
//# sourceMappingURL=chunk-NHD5J26B.js.map
