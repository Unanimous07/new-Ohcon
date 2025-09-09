import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-DOIYSES2.js";
import "./chunk-IO2DL3NX.js";
import {
  CommonModule,
  NgIf
} from "./chunk-GIY2C73M.js";
import {
  __async,
  __spreadValues,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵtextInterpolate
} from "./chunk-RABZPDKX.js";

// node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js
var EmailJSResponseStatus = class {
  constructor(_status = 0, _text = "Network Error") {
    this.status = _status;
    this.text = _text;
  }
};

// node_modules/@emailjs/browser/es/utils/createWebStorage/createWebStorage.js
var createWebStorage = () => {
  if (typeof localStorage === "undefined")
    return;
  return {
    get: (key) => Promise.resolve(localStorage.getItem(key)),
    set: (key, value) => Promise.resolve(localStorage.setItem(key, value)),
    remove: (key) => Promise.resolve(localStorage.removeItem(key))
  };
};

// node_modules/@emailjs/browser/es/store/store.js
var store = {
  origin: "https://api.emailjs.com",
  blockHeadless: false,
  storageProvider: createWebStorage()
};

// node_modules/@emailjs/browser/es/utils/buildOptions/buildOptions.js
var buildOptions = (options) => {
  if (!options)
    return {};
  if (typeof options === "string") {
    return {
      publicKey: options
    };
  }
  if (options.toString() === "[object Object]") {
    return options;
  }
  return {};
};

// node_modules/@emailjs/browser/es/methods/init/init.js
var init = (options, origin = "https://api.emailjs.com") => {
  if (!options)
    return;
  const opts = buildOptions(options);
  store.publicKey = opts.publicKey;
  store.blockHeadless = opts.blockHeadless;
  store.storageProvider = opts.storageProvider;
  store.blockList = opts.blockList;
  store.limitRate = opts.limitRate;
  store.origin = opts.origin || origin;
};

// node_modules/@emailjs/browser/es/api/sendPost.js
var sendPost = (_0, _1, ..._2) => __async(void 0, [_0, _1, ..._2], function* (url, data, headers = {}) {
  const response = yield fetch(store.origin + url, {
    method: "POST",
    headers,
    body: data
  });
  const message = yield response.text();
  const responseStatus = new EmailJSResponseStatus(response.status, message);
  if (response.ok) {
    return responseStatus;
  }
  throw responseStatus;
});

// node_modules/@emailjs/browser/es/utils/validateParams/validateParams.js
var validateParams = (publicKey, serviceID, templateID) => {
  if (!publicKey || typeof publicKey !== "string") {
    throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
  }
  if (!serviceID || typeof serviceID !== "string") {
    throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
  }
  if (!templateID || typeof templateID !== "string") {
    throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  }
};

// node_modules/@emailjs/browser/es/utils/validateTemplateParams/validateTemplateParams.js
var validateTemplateParams = (templateParams) => {
  if (templateParams && templateParams.toString() !== "[object Object]") {
    throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  }
};

// node_modules/@emailjs/browser/es/utils/isHeadless/isHeadless.js
var isHeadless = (navigator2) => {
  return navigator2.webdriver || !navigator2.languages || navigator2.languages.length === 0;
};

// node_modules/@emailjs/browser/es/errors/headlessError/headlessError.js
var headlessError = () => {
  return new EmailJSResponseStatus(451, "Unavailable For Headless Browser");
};

// node_modules/@emailjs/browser/es/utils/validateBlockListParams/validateBlockListParams.js
var validateBlockListParams = (list, watchVariable) => {
  if (!Array.isArray(list)) {
    throw "The BlockList list has to be an array";
  }
  if (typeof watchVariable !== "string") {
    throw "The BlockList watchVariable has to be a string";
  }
};

// node_modules/@emailjs/browser/es/utils/isBlockedValueInParams/isBlockedValueInParams.js
var isBlockListDisabled = (options) => {
  return !options.list?.length || !options.watchVariable;
};
var getValue = (data, name) => {
  return data instanceof FormData ? data.get(name) : data[name];
};
var isBlockedValueInParams = (options, params) => {
  if (isBlockListDisabled(options))
    return false;
  validateBlockListParams(options.list, options.watchVariable);
  const value = getValue(params, options.watchVariable);
  if (typeof value !== "string")
    return false;
  return options.list.includes(value);
};

// node_modules/@emailjs/browser/es/errors/blockedEmailError/blockedEmailError.js
var blockedEmailError = () => {
  return new EmailJSResponseStatus(403, "Forbidden");
};

// node_modules/@emailjs/browser/es/utils/validateLimitRateParams/validateLimitRateParams.js
var validateLimitRateParams = (throttle, id) => {
  if (typeof throttle !== "number" || throttle < 0) {
    throw "The LimitRate throttle has to be a positive number";
  }
  if (id && typeof id !== "string") {
    throw "The LimitRate ID has to be a non-empty string";
  }
};

// node_modules/@emailjs/browser/es/utils/isLimitRateHit/isLimitRateHit.js
var getLeftTime = (id, throttle, storage) => __async(void 0, null, function* () {
  const lastTime = Number((yield storage.get(id)) || 0);
  return throttle - Date.now() + lastTime;
});
var isLimitRateHit = (defaultID, options, storage) => __async(void 0, null, function* () {
  if (!options.throttle || !storage) {
    return false;
  }
  validateLimitRateParams(options.throttle, options.id);
  const id = options.id || defaultID;
  const leftTime = yield getLeftTime(id, options.throttle, storage);
  if (leftTime > 0) {
    return true;
  }
  yield storage.set(id, Date.now().toString());
  return false;
});

// node_modules/@emailjs/browser/es/errors/limitRateError/limitRateError.js
var limitRateError = () => {
  return new EmailJSResponseStatus(429, "Too Many Requests");
};

// node_modules/@emailjs/browser/es/methods/send/send.js
var send = (serviceID, templateID, templateParams, options) => __async(void 0, null, function* () {
  const opts = buildOptions(options);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = opts.storageProvider || store.storageProvider;
  const blockList = __spreadValues(__spreadValues({}, store.blockList), opts.blockList);
  const limitRate = __spreadValues(__spreadValues({}, store.limitRate), opts.limitRate);
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  validateParams(publicKey, serviceID, templateID);
  validateTemplateParams(templateParams);
  if (templateParams && isBlockedValueInParams(blockList, templateParams)) {
    return Promise.reject(blockedEmailError());
  }
  if (yield isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  const params = {
    lib_version: "4.4.1",
    user_id: publicKey,
    service_id: serviceID,
    template_id: templateID,
    template_params: templateParams
  };
  return sendPost("/api/v1.0/email/send", JSON.stringify(params), {
    "Content-type": "application/json"
  });
});

// node_modules/@emailjs/browser/es/utils/validateForm/validateForm.js
var validateForm = (form) => {
  if (!form || form.nodeName !== "FORM") {
    throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  }
};

// node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js
var findHTMLForm = (form) => {
  return typeof form === "string" ? document.querySelector(form) : form;
};
var sendForm = (serviceID, templateID, form, options) => __async(void 0, null, function* () {
  const opts = buildOptions(options);
  const publicKey = opts.publicKey || store.publicKey;
  const blockHeadless = opts.blockHeadless || store.blockHeadless;
  const storageProvider = store.storageProvider || opts.storageProvider;
  const blockList = __spreadValues(__spreadValues({}, store.blockList), opts.blockList);
  const limitRate = __spreadValues(__spreadValues({}, store.limitRate), opts.limitRate);
  if (blockHeadless && isHeadless(navigator)) {
    return Promise.reject(headlessError());
  }
  const currentForm = findHTMLForm(form);
  validateParams(publicKey, serviceID, templateID);
  validateForm(currentForm);
  const formData = new FormData(currentForm);
  if (isBlockedValueInParams(blockList, formData)) {
    return Promise.reject(blockedEmailError());
  }
  if (yield isLimitRateHit(location.pathname, limitRate, storageProvider)) {
    return Promise.reject(limitRateError());
  }
  formData.append("lib_version", "4.4.1");
  formData.append("service_id", serviceID);
  formData.append("template_id", templateID);
  formData.append("user_id", publicKey);
  return sendPost("/api/v1.0/email/send-form", formData);
});

// node_modules/@emailjs/browser/es/index.js
var es_default = {
  init,
  send,
  sendForm,
  EmailJSResponseStatus
};

// src/app/shared/services/email.service.ts
var _EmailService = class _EmailService {
  constructor() {
    this.serviceId = "service_ohcon";
    this.templateId = "template_contact";
    this.publicKey = "YOUR_PUBLIC_KEY";
    es_default.init(this.publicKey);
  }
  sendContactEmail(formData) {
    return __async(this, null, function* () {
      try {
        const templateParams = {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          reason: formData.reason,
          message: formData.message,
          to_email: "message@ohconmw.org",
          reply_to: formData.email,
          subject: `New Contact Form Submission - ${formData.reason}`,
          // Additional template variables for better email formatting
          full_name: `${formData.firstName} ${formData.lastName}`,
          contact_reason: this.getReasonDisplayName(formData.reason)
        };
        const response = yield es_default.send(this.serviceId, this.templateId, templateParams);
        console.log("Email sent successfully:", response);
        return response.status === 200;
      } catch (error) {
        console.error("Failed to send email:", error);
        return false;
      }
    });
  }
  getReasonDisplayName(reason) {
    const reasonMap = {
      donate: "Donation Inquiry",
      partner: "Partnership Opportunity",
      volunteer: "Volunteer Application",
      media: "Media Inquiry",
      other: "General Inquiry"
    };
    return reasonMap[reason] || "General Inquiry";
  }
};
_EmailService.\u0275fac = function EmailService_Factory(t) {
  return new (t || _EmailService)();
};
_EmailService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EmailService, factory: _EmailService.\u0275fac, providedIn: "root" });
var EmailService = _EmailService;

// src/app/pages/contact-us/contact-us.component.ts
function ContactUsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 63);
    \u0275\u0275element(3, "path", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 66);
    \u0275\u0275listener("click", function ContactUsComponent_div_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r10 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r10.dismissMessage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 67);
    \u0275\u0275element(8, "path", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.submitMessage);
  }
}
function ContactUsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 62);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 70);
    \u0275\u0275element(3, "path", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 72);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 73);
    \u0275\u0275listener("click", function ContactUsComponent_div_19_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r12 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r12.dismissMessage());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 67);
    \u0275\u0275element(8, "path", 68);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.submitMessage);
  }
}
function ContactUsComponent_p_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.getFieldError("firstName"));
  }
}
function ContactUsComponent_p_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.getFieldError("lastName"));
  }
}
function ContactUsComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r4.getFieldError("email"));
  }
}
function ContactUsComponent_p_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.getFieldError("phone"));
  }
}
function ContactUsComponent_p_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r6.getFieldError("reason"));
  }
}
function ContactUsComponent_p_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 74);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r7.getFieldError("message"));
  }
}
function ContactUsComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Send Message");
    \u0275\u0275elementEnd();
  }
}
function ContactUsComponent_span_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 76);
    \u0275\u0275element(2, "circle", 77)(3, "path", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Sending... ");
    \u0275\u0275elementEnd();
  }
}
var _ContactUsComponent = class _ContactUsComponent {
  constructor(fb, emailService) {
    this.fb = fb;
    this.emailService = emailService;
    this.isSubmitting = false;
    this.isSubmitted = false;
    this.submitMessage = "";
    this.submitError = false;
    this.contactForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2)]],
      lastName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required]],
      reason: ["", [Validators.required]],
      message: ["", [Validators.required, Validators.minLength(10)]]
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (this.contactForm.valid) {
        this.isSubmitting = true;
        this.submitError = false;
        try {
          const formData = this.contactForm.value;
          const success = yield this.emailService.sendContactEmail(formData);
          this.isSubmitting = false;
          if (success) {
            this.isSubmitted = true;
            this.submitError = false;
            this.submitMessage = "Thank you for your message! We've received your inquiry and will get back to you within 24 hours.";
            this.contactForm.reset();
          } else {
            this.submitError = true;
            this.submitMessage = "Sorry, there was an error sending your message. Please try again or contact us directly at message@ohconmw.org.";
          }
        } catch (error) {
          this.isSubmitting = false;
          this.submitError = true;
          this.submitMessage = "Sorry, there was an error sending your message. Please try again or contact us directly at message@ohconmw.org.";
          console.error("Form submission error:", error);
        }
      } else {
        Object.keys(this.contactForm.controls).forEach((key) => {
          this.contactForm.get(key)?.markAsTouched();
        });
      }
    });
  }
  getFieldError(fieldName) {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors["required"]) {
        return `${this.getFieldDisplayName(fieldName)} is required`;
      }
      if (field.errors["email"]) {
        return "Please enter a valid email address";
      }
      if (field.errors["minlength"]) {
        const minLength = field.errors["minlength"].requiredLength;
        return `${this.getFieldDisplayName(fieldName)} must be at least ${minLength} characters`;
      }
    }
    return "";
  }
  getFieldDisplayName(fieldName) {
    const displayNames = {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      phone: "Phone Number",
      reason: "Reason for Contact",
      message: "Message"
    };
    return displayNames[fieldName] || fieldName;
  }
  isFieldInvalid(fieldName) {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }
  dismissMessage() {
    this.isSubmitted = false;
    this.submitMessage = "";
    this.submitError = false;
  }
};
_ContactUsComponent.\u0275fac = function ContactUsComponent_Factory(t) {
  return new (t || _ContactUsComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(EmailService));
};
_ContactUsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactUsComponent, selectors: [["app-contact-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 169, vars: 24, consts: [[1, "min-h-screen", "bg-gray-50"], [1, "relative", "py-32", "bg-gradient-to-br", "from-blue-900", "to-blue-700", "text-white"], [1, "absolute", "inset-0", "bg-black/30"], [1, "container", "mx-auto", "px-4", "lg:px-8", "relative", "z-10"], [1, "max-w-3xl", "mx-auto", "text-center"], [1, "heading-xl", "text-white", "mb-6"], [1, "text-body-lg", "text-white/90", "max-w-3xl", "mx-auto"], [1, "py-24", "bg-white"], [1, "container", "mx-auto", "px-4", "lg:px-8"], [1, "grid", "md:grid-cols-2", "gap-12", "max-w-6xl", "mx-auto"], [1, "space-y-8"], [1, "heading-md", "text-gray-900", "mb-4"], [1, "text-body", "text-gray-600"], ["class", "bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between", 4, "ngIf"], ["class", "bg-red-50 border border-red-200 rounded-lg p-4 flex items-center justify-between", 4, "ngIf"], [1, "space-y-6", 3, "formGroup", "ngSubmit"], [1, "grid", "md:grid-cols-2", "gap-6"], [1, "block", "text-sm", "font-medium", "text-gray-700", "mb-2"], ["type", "text", "formControlName", "firstName", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300"], ["class", "text-red-500 text-sm mt-1", 4, "ngIf"], ["type", "text", "formControlName", "lastName", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300"], ["type", "email", "formControlName", "email", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300"], ["type", "tel", "formControlName", "phone", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300"], ["formControlName", "reason", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300"], ["value", ""], ["value", "donate"], ["value", "partner"], ["value", "volunteer"], ["value", "media"], ["value", "other"], ["rows", "5", "formControlName", "message", "placeholder", "Tell us how we can help you...", 1, "w-full", "px-4", "py-3", "border", "border-gray-300", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300"], ["type", "submit", 1, "w-full", "bg-blue-600", "text-white", "py-3", "px-6", "rounded-lg", "font-semibold", "hover:bg-blue-700", "transform", "hover:scale-105", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl", "disabled:opacity-50", "disabled:cursor-not-allowed", "disabled:transform-none", 3, "disabled"], [4, "ngIf"], ["class", "flex items-center justify-center", 4, "ngIf"], [1, "space-y-6"], [1, "flex", "items-start", "space-x-4"], [1, "flex-shrink-0", "w-12", "h-12", "bg-blue-100", "rounded-lg", "flex", "items-center", "justify-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"], [1, "heading-xs", "text-gray-900", "mb-1"], [1, "text-body-sm", "text-gray-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 11a3 3 0 11-6 0 3 3 0 016 0z"], [1, "pt-6", "border-t", "border-gray-200"], [1, "heading-xs", "text-gray-900", "mb-4"], [1, "flex", "space-x-4"], ["href", "https://web.facebook.com/profile.php?id=61578727957117", 1, "w-10", "h-10", "bg-blue-600", "rounded-lg", "flex", "items-center", "justify-center", "text-white", "hover:bg-blue-700", "transition-colors", "duration-300"], ["fill", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["d", "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"], ["href", "#", 1, "w-10", "h-10", "bg-blue-400", "rounded-lg", "flex", "items-center", "justify-center", "text-white", "hover:bg-blue-500", "transition-colors", "duration-300"], ["d", "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"], ["href", "#", 1, "w-10", "h-10", "bg-pink-600", "rounded-lg", "flex", "items-center", "justify-center", "text-white", "hover:bg-pink-700", "transition-colors", "duration-300"], ["d", "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"], [1, "py-24", "bg-gray-50"], [1, "max-w-3xl", "mx-auto"], [1, "heading-lg", "text-center", "mb-12"], [1, "bg-white", "rounded-lg", "p-6", "shadow-md"], [1, "heading-xs", "text-gray-900", "mb-2"], [1, "bg-green-50", "border", "border-green-200", "rounded-lg", "p-4", "flex", "items-center", "justify-between"], [1, "flex", "items-center"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-green-600", "mr-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], [1, "text-green-800"], [1, "text-green-600", "hover:text-green-800", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "bg-red-50", "border", "border-red-200", "rounded-lg", "p-4", "flex", "items-center", "justify-between"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-red-600", "mr-3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"], [1, "text-red-800"], [1, "text-red-600", "hover:text-red-800", 3, "click"], [1, "text-red-500", "text-sm", "mt-1"], [1, "flex", "items-center", "justify-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "-ml-1", "mr-3", "h-5", "w-5", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function ContactUsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h1", 5);
    \u0275\u0275text(6, " Contact Us ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8, " Get in touch with us to learn more about our One Health initiatives and how you can get involved. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "section", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "div")(14, "h2", 11);
    \u0275\u0275text(15, "Send us a Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 12);
    \u0275\u0275text(17, "We'd love to hear from you. Send us a message and we'll respond as soon as possible.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, ContactUsComponent_div_18_Template, 9, 1, "div", 13)(19, ContactUsComponent_div_19_Template, 9, 1, "div", 14);
    \u0275\u0275elementStart(20, "form", 15);
    \u0275\u0275listener("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_20_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(21, "div", 16)(22, "div")(23, "label", 17);
    \u0275\u0275text(24, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 18);
    \u0275\u0275template(26, ContactUsComponent_p_26_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div")(28, "label", 17);
    \u0275\u0275text(29, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 20);
    \u0275\u0275template(31, ContactUsComponent_p_31_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div")(33, "label", 17);
    \u0275\u0275text(34, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 21);
    \u0275\u0275template(36, ContactUsComponent_p_36_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div")(38, "label", 17);
    \u0275\u0275text(39, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "input", 22);
    \u0275\u0275template(41, ContactUsComponent_p_41_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div")(43, "label", 17);
    \u0275\u0275text(44, "Reason for Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "select", 23)(46, "option", 24);
    \u0275\u0275text(47, "Select a reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 25);
    \u0275\u0275text(49, "Donate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "option", 26);
    \u0275\u0275text(51, "Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "option", 27);
    \u0275\u0275text(53, "Volunteer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "option", 28);
    \u0275\u0275text(55, "Media");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "option", 29);
    \u0275\u0275text(57, "Other");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(58, ContactUsComponent_p_58_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div")(60, "label", 17);
    \u0275\u0275text(61, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "textarea", 30);
    \u0275\u0275template(63, ContactUsComponent_p_63_Template, 2, 1, "p", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 31);
    \u0275\u0275template(65, ContactUsComponent_span_65_Template, 2, 0, "span", 32)(66, ContactUsComponent_span_66_Template, 5, 0, "span", 33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(67, "div", 10)(68, "div")(69, "h2", 11);
    \u0275\u0275text(70, "Get in Touch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p", 12);
    \u0275\u0275text(72, "We're here to help and answer any questions you might have. We look forward to hearing from you.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 34)(74, "div", 35)(75, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(76, "svg", 37);
    \u0275\u0275element(77, "path", 38);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(78, "div")(79, "h3", 39);
    \u0275\u0275text(80, "General Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 12);
    \u0275\u0275text(82, "info@ohconmw.org");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "p", 40);
    \u0275\u0275text(84, "We'll respond within 24 hours");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 35)(86, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(87, "svg", 37);
    \u0275\u0275element(88, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(89, "div")(90, "h3", 39);
    \u0275\u0275text(91, "Media & Press");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "p", 12);
    \u0275\u0275text(93, "media@ohconmw.org");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "p", 40);
    \u0275\u0275text(95, "For media inquiries and press releases");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(96, "div", 35)(97, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(98, "svg", 37);
    \u0275\u0275element(99, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(100, "div")(101, "h3", 39);
    \u0275\u0275text(102, "Partnerships");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p", 12);
    \u0275\u0275text(104, "partnerships@ohconmw.org");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "p", 40);
    \u0275\u0275text(106, "For collaboration and partnership opportunities");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(107, "div", 35)(108, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(109, "svg", 37);
    \u0275\u0275element(110, "path", 43);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(111, "div")(112, "h3", 39);
    \u0275\u0275text(113, "Phone & WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "p", 12);
    \u0275\u0275text(115, "+265 999 769 298");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "p", 40);
    \u0275\u0275text(117, "Monday - Friday, 8am - 5pm");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(118, "div", 35)(119, "div", 36);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(120, "svg", 37);
    \u0275\u0275element(121, "path", 44)(122, "path", 45);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(123, "div")(124, "h3", 39);
    \u0275\u0275text(125, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "p", 12);
    \u0275\u0275text(127, "Lilongwe, Malawi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "p", 40);
    \u0275\u0275text(129, "Central Region");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(130, "div", 46)(131, "h3", 47);
    \u0275\u0275text(132, "Follow Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "div", 48)(134, "a", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(135, "svg", 50);
    \u0275\u0275element(136, "path", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(137, "a", 52);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(138, "svg", 50);
    \u0275\u0275element(139, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(140, "a", 54);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(141, "svg", 50);
    \u0275\u0275element(142, "path", 55);
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(143, "section", 56)(144, "div", 8)(145, "div", 57)(146, "h2", 58);
    \u0275\u0275text(147, "Frequently Asked Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "div", 34)(149, "div", 59)(150, "h3", 60);
    \u0275\u0275text(151, "How can I volunteer with OHCON?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "p", 12);
    \u0275\u0275text(153, 'You can apply to volunteer through our "Get Involved" page. We have various opportunities available for different skill sets and time commitments.');
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(154, "div", 59)(155, "h3", 60);
    \u0275\u0275text(156, "What is One Health?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "p", 12);
    \u0275\u0275text(158, "One Health is an integrated approach that recognizes the interconnection between human, animal, and environmental health. It promotes collaboration across disciplines to achieve optimal health outcomes.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(159, "div", 59)(160, "h3", 60);
    \u0275\u0275text(161, "How can I support OHCON's mission?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "p", 12);
    \u0275\u0275text(163, "You can support us by volunteering, making a donation, spreading awareness about One Health principles, or partnering with us on initiatives.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(164, "div", 59)(165, "h3", 60);
    \u0275\u0275text(166, "Do you offer educational programs?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(167, "p", 12);
    \u0275\u0275text(168, "Yes, we offer various educational programs focused on One Health principles, community health, and professional development for healthcare workers.");
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx.isSubmitted && !ctx.submitError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.submitError);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.contactForm);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("border-red-500", ctx.isFieldInvalid("firstName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("firstName"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-500", ctx.isFieldInvalid("lastName"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("lastName"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-500", ctx.isFieldInvalid("email"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("email"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-500", ctx.isFieldInvalid("phone"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("phone"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-500", ctx.isFieldInvalid("reason"));
    \u0275\u0275advance(13);
    \u0275\u0275property("ngIf", ctx.getFieldError("reason"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("border-red-500", ctx.isFieldInvalid("message"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.getFieldError("message"));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.isSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.isSubmitting);
  }
}, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName], styles: ["\n\n/*# sourceMappingURL=contact-us.component.css.map */"] });
var ContactUsComponent = _ContactUsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactUsComponent, { className: "ContactUsComponent", filePath: "src\\app\\pages\\contact-us\\contact-us.component.ts", lineNumber: 14 });
})();
export {
  ContactUsComponent
};
//# sourceMappingURL=chunk-5LMLVVAA.js.map
