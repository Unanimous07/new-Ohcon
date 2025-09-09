import {
  AnimationDriver,
  AnimationEngine,
  AnimationRendererFactory,
  AnimationStyleNormalizer,
  NoopAnimationDriver,
  WebAnimationsDriver,
  WebAnimationsStyleNormalizer
} from "./chunk-OG6OQCQU.js";
import {
  BrowserModule,
  DomRendererFactory2,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  withComponentInputBinding
} from "./chunk-H2XSCM4B.js";
import {
  FormsModule
} from "./chunk-DOIYSES2.js";
import {
  CommonModule,
  DOCUMENT,
  NgIf,
  isPlatformBrowser
} from "./chunk-GIY2C73M.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  Inject,
  Injectable,
  NgModule,
  NgZone,
  PLATFORM_ID,
  RendererFactory2,
  RuntimeError,
  filter,
  importProvidersFrom,
  inject,
  makeEnvironmentProviders,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-RABZPDKX.js";

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var _InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer, inject(ChangeDetectionScheduler, {
      optional: true
    }));
  }
  ngOnDestroy() {
    this.flush();
  }
};
_InjectableAnimationEngine.\u0275fac = function InjectableAnimationEngine_Factory(t) {
  return new (t || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
};
_InjectableAnimationEngine.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _InjectableAnimationEngine,
  factory: _InjectableAnimationEngine.\u0275fac
});
var InjectableAnimationEngine = _InjectableAnimationEngine;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var _BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
};
_BrowserAnimationsModule.\u0275fac = function BrowserAnimationsModule_Factory(t) {
  return new (t || _BrowserAnimationsModule)();
};
_BrowserAnimationsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _BrowserAnimationsModule
});
_BrowserAnimationsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: BROWSER_ANIMATIONS_PROVIDERS,
  imports: [BrowserModule]
});
var BrowserAnimationsModule = _BrowserAnimationsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var _NoopAnimationsModule = class _NoopAnimationsModule {
};
_NoopAnimationsModule.\u0275fac = function NoopAnimationsModule_Factory(t) {
  return new (t || _NoopAnimationsModule)();
};
_NoopAnimationsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NoopAnimationsModule
});
_NoopAnimationsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
  imports: [BrowserModule]
});
var NoopAnimationsModule = _NoopAnimationsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadComponent: () => import("./chunk-SUICAJW2.js").then((m) => m.HomeComponent) },
  { path: "about-us", loadComponent: () => import("./chunk-YPQ64Y2R.js").then((m) => m.AboutUsComponent) },
  { path: "programs", loadComponent: () => import("./chunk-Z755ZVBY.js").then((m) => m.ProgramsComponent) },
  { path: "news", loadComponent: () => import("./chunk-NKGWUVNP.js").then((m) => m.NewsComponent) },
  { path: "resources", loadComponent: () => import("./chunk-3XQ7R6AS.js").then((m) => m.ResourcesComponent) },
  { path: "get-involved", loadComponent: () => import("./chunk-MUJTYZNK.js").then((m) => m.GetInvolvedComponent) },
  { path: "contact-us", loadComponent: () => import("./chunk-5LMLVVAA.js").then((m) => m.ContactUsComponent) },
  { path: "404", loadComponent: () => import("./chunk-NHD5J26B.js").then((m) => m.NotFoundComponent) },
  { path: "**", redirectTo: "/404" }
];

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var _AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-IGIMD7IZ.js");
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc, this.scheduler);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
};
_AsyncAnimationRendererFactory.\u0275fac = function AsyncAnimationRendererFactory_Factory(t) {
  \u0275\u0275invalidFactory();
};
_AsyncAnimationRendererFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsyncAnimationRendererFactory,
  factory: _AsyncAnimationRendererFactory.\u0275fac
});
var AsyncAnimationRendererFactory = _AsyncAnimationRendererFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style, value, flags) {
    this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(el, style, flags) {
    this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideAnimations(),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync()
  ]
};

// src/app/app.component.ts
function AppComponent__svg_svg_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "path", 52);
    \u0275\u0275elementEnd();
  }
}
function AppComponent__svg_svg_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 51);
    \u0275\u0275element(1, "path", 53);
    \u0275\u0275elementEnd();
  }
}
var _c0 = () => ({ exact: true });
var _AppComponent = class _AppComponent {
  constructor(router, platformId) {
    this.router = router;
    this.platformId = platformId;
    this.title = "ohcon2";
    this.isNavOpen = false;
    this.logo = "assets/images/logo.png";
  }
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = this.isNavOpen ? "hidden" : "";
    }
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PLATFORM_ID));
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 142, vars: 37, consts: [[1, "fixed", "top-0", "w-full", "bg-black/95", "backdrop-blur-sm", "z-50", "shadow-lg"], [1, "container", "mx-auto", "px-2", "md:px-3", "lg:px-4", "xl:px-6"], [1, "flex", "justify-between", "items-center", "h-16", "md:h-18", "lg:h-20"], [1, "flex", "items-center", "group", "flex-shrink-0", 3, "routerLink"], ["alt", "OHCON Logo", 1, "h-10", "md:h-12", "lg:h-14", "xl:h-16", "w-auto", "transform", "group-hover:scale-105", "transition-transform", "duration-300", 3, "src"], [1, "hidden", "md:flex", "items-center", "space-x-2", "md:space-x-3", "lg:space-x-6", "xl:space-x-8"], ["routerLinkActive", "text-blue-400", 1, "relative", "text-white", "hover:text-blue-400", "transition-colors", "duration-300", "group", "py-2", "px-1", "md:px-2", "text-xs", "md:text-sm", "lg:text-base", "whitespace-nowrap", 3, "routerLink", "routerLinkActiveOptions"], [1, "absolute", "bottom-0", "left-0", "w-full", "h-0.5", "bg-blue-400", "transform", "scale-x-0", "group-hover:scale-x-100", "transition-transform", "duration-300"], ["routerLinkActive", "text-blue-400", 1, "relative", "text-white", "hover:text-blue-400", "transition-colors", "duration-300", "group", "py-2", "px-1", "md:px-2", "text-xs", "md:text-sm", "lg:text-base", "whitespace-nowrap", 3, "routerLink"], [1, "hidden", "lg:inline"], [1, "lg:hidden"], [1, "bg-blue-600", "text-white", "px-2", "py-1.5", "md:px-3", "md:py-2", "lg:px-6", "lg:py-2.5", "xl:px-8", "xl:py-3", "rounded-lg", "hover:bg-blue-700", "transform", "hover:scale-105", "transition-all", "duration-300", "shadow-md", "hover:shadow-lg", "text-xs", "md:text-sm", "lg:text-base", "whitespace-nowrap", "font-medium", 3, "routerLink"], [1, "md:hidden", "text-white", "p-1.5", "md:p-2", "rounded-lg", "hover:bg-gray-800", "transition-colors", "duration-300", "flex-shrink-0", 3, "click"], ["class", "h-5 w-5 md:h-6 md:w-6", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 4, "ngIf"], [1, "md:hidden", "transform", "transition-all", "duration-300", "ease-in-out", "origin-top"], [1, "px-2", "pt-2", "pb-3", "space-y-2"], ["routerLinkActive", "bg-gray-800", 1, "block", "text-white", "hover:bg-gray-800", "px-4", "py-3", "rounded-lg", "transition-colors", "duration-300", "flex", "items-center", "space-x-2", 3, "routerLink", "routerLinkActiveOptions", "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"], ["routerLinkActive", "bg-gray-800", 1, "block", "text-white", "hover:bg-gray-800", "px-4", "py-3", "rounded-lg", "transition-colors", "duration-300", "flex", "items-center", "space-x-2", 3, "routerLink", "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "block", "bg-blue-600", "text-white", "px-4", "py-3", "rounded-lg", "hover:bg-blue-700", "transition-all", "duration-300", "mt-4", "flex", "items-center", "space-x-2", "transform", "hover:scale-[1.02]", 3, "routerLink", "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"], [1, "pt-16", "min-h-screen"], [1, "bg-black", "text-white", "py-8"], [1, "container", "mx-auto", "px-4"], [1, "grid", "grid-cols-1", "md:grid-cols-4", "gap-8"], [1, "text-lg", "font-semibold", "mb-4"], [1, "text-gray-400"], [1, "space-y-2"], [1, "text-gray-400", "hover:text-white", "transition-colors", "duration-300", 3, "routerLink"], [1, "text-gray-400", "hover:text-white", "transition-colors", "duration-300"], ["href", "mailto:info@ohcon.org", 1, "flex", "items-center", "space-x-2"], ["href", "tel:+265999769298", 1, "flex", "items-center", "space-x-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], [1, "text-gray-400", "hover:text-white", "transition-colors", "duration-300", "flex", "items-center", "space-x-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "flex", "space-x-4"], ["href", "https://web.facebook.com/profile.php?id=61578727957117", "target", "_blank", "rel", "noopener noreferrer", 1, "text-gray-400", "hover:text-white", "transition-colors", "duration-300"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "h-6", "w-6"], ["d", "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"], ["href", "https://twitter.com", "target", "_blank", "rel", "noopener noreferrer", 1, "text-gray-400", "hover:text-white", "transition-colors", "duration-300"], ["d", "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"], ["href", "https://instagram.com", "target", "_blank", "rel", "noopener noreferrer", 1, "text-gray-400", "hover:text-white", "transition-colors", "duration-300"], ["d", "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"], [1, "mt-8", "pt-8", "border-t", "border-gray-800", "text-center", "text-sm", "text-gray-400"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-5", "w-5", "md:h-6", "md:w-6"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 6h16M4 12h16M4 18h16"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"]], template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
    \u0275\u0275element(4, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "a", 6);
    \u0275\u0275text(7, " Home ");
    \u0275\u0275element(8, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 8);
    \u0275\u0275text(10, " Programs ");
    \u0275\u0275element(11, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 8);
    \u0275\u0275text(13, " News ");
    \u0275\u0275element(14, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 8);
    \u0275\u0275text(16, " Resources ");
    \u0275\u0275element(17, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 8)(19, "span", 9);
    \u0275\u0275text(20, "About Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 10);
    \u0275\u0275text(22, "About");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 8)(25, "span", 9);
    \u0275\u0275text(26, "Contact Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 10);
    \u0275\u0275text(28, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "a", 11)(31, "span", 9);
    \u0275\u0275text(32, "Get Involved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 10);
    \u0275\u0275text(34, "Join Us");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "button", 12);
    \u0275\u0275listener("click", function AppComponent_Template_button_click_35_listener() {
      return ctx.toggleNav();
    });
    \u0275\u0275template(36, AppComponent__svg_svg_36_Template, 2, 0, "svg", 13)(37, AppComponent__svg_svg_37_Template, 2, 0, "svg", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 14)(39, "div", 15)(40, "a", 16);
    \u0275\u0275listener("click", function AppComponent_Template_a_click_40_listener() {
      return ctx.toggleNav();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 17);
    \u0275\u0275element(42, "path", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "span");
    \u0275\u0275text(44, "Home");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "a", 19);
    \u0275\u0275listener("click", function AppComponent_Template_a_click_45_listener() {
      return ctx.toggleNav();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 17);
    \u0275\u0275element(47, "path", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "Programs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "a", 19);
    \u0275\u0275listener("click", function AppComponent_Template_a_click_50_listener() {
      return ctx.toggleNav();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(51, "svg", 17);
    \u0275\u0275element(52, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "News");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "a", 19);
    \u0275\u0275listener("click", function AppComponent_Template_a_click_55_listener() {
      return ctx.toggleNav();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(56, "svg", 17);
    \u0275\u0275element(57, "path", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59, "Resources");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "a", 19);
    \u0275\u0275listener("click", function AppComponent_Template_a_click_60_listener() {
      return ctx.toggleNav();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(61, "svg", 17);
    \u0275\u0275element(62, "path", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64, "About Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "a", 19);
    \u0275\u0275listener("click", function AppComponent_Template_a_click_65_listener() {
      return ctx.toggleNav();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(66, "svg", 17);
    \u0275\u0275element(67, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69, "Contact Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "a", 25);
    \u0275\u0275listener("click", function AppComponent_Template_a_click_70_listener() {
      return ctx.toggleNav();
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(71, "svg", 17);
    \u0275\u0275element(72, "path", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74, "Get Involved");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(75, "main", 27);
    \u0275\u0275element(76, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "footer", 28)(78, "div", 29)(79, "div", 30)(80, "div")(81, "h3", 31);
    \u0275\u0275text(82, "About OHCON");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "p", 32);
    \u0275\u0275text(84, "Advancing public health and community wellbeing through integrated One Health principles in Malawi.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div")(86, "h3", 31);
    \u0275\u0275text(87, "Quick Links");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "ul", 33)(89, "li")(90, "a", 34);
    \u0275\u0275text(91, "Programs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "li")(93, "a", 34);
    \u0275\u0275text(94, "News");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "li")(96, "a", 34);
    \u0275\u0275text(97, "Resources");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "li")(99, "a", 34);
    \u0275\u0275text(100, "About Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "li")(102, "a", 34);
    \u0275\u0275text(103, "Contact Us");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(104, "div")(105, "h3", 31);
    \u0275\u0275text(106, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "ul", 33)(108, "li", 35)(109, "a", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(110, "svg", 17);
    \u0275\u0275element(111, "path", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(112, "span");
    \u0275\u0275text(113, "info@ohconmw.org");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(114, "li", 35)(115, "a", 37);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(116, "svg", 17);
    \u0275\u0275element(117, "path", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(118, "span");
    \u0275\u0275text(119, "+265 999 769 298");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(120, "li", 39);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(121, "svg", 17);
    \u0275\u0275element(122, "path", 40)(123, "path", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(124, "span");
    \u0275\u0275text(125, "Lilongwe, Malawi");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(126, "div")(127, "h3", 31);
    \u0275\u0275text(128, "Follow Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "div", 42)(130, "a", 43);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(131, "svg", 44);
    \u0275\u0275element(132, "path", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(133, "a", 46);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(134, "svg", 44);
    \u0275\u0275element(135, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(136, "a", 48);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(137, "svg", 44);
    \u0275\u0275element(138, "path", 49);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(139, "div", 50)(140, "p");
    \u0275\u0275text(141, " \xA92024 Ohcon All Rights Reserved. ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "");
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx.logo, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "")("routerLinkActiveOptions", \u0275\u0275pureFunction0(35, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/programs");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/news");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/resources");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/about-us");
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", "/contact-us");
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", "/get-involved");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx.isNavOpen);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isNavOpen);
    \u0275\u0275advance();
    \u0275\u0275classProp("scale-y-100", ctx.isNavOpen)("opacity-100", ctx.isNavOpen)("scale-y-0", !ctx.isNavOpen)("opacity-0", !ctx.isNavOpen)("h-0", !ctx.isNavOpen);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", "")("routerLinkActiveOptions", \u0275\u0275pureFunction0(36, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", "/programs");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", "/news");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", "/resources");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", "/about-us");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", "/contact-us");
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", "/get-involved");
    \u0275\u0275advance(20);
    \u0275\u0275property("routerLink", "/programs");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/news");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/resources");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/about-us");
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", "/contact-us");
  }
}, dependencies: [CommonModule, NgIf, RouterOutlet, RouterLink, RouterLinkActive], styles: ["\n\n/*# sourceMappingURL=app.component.css.map */"] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 13 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v17.2.1
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.2.1
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
