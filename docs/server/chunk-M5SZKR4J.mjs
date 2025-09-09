import './polyfills.server.mjs';
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-JWVHNPZ6.mjs";
import "./chunk-XDIDHDXD.mjs";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-XHNCF4IE.mjs";
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
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YASMSVLX.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/pages/get-involved/get-involved.component.ts
function GetInvolvedComponent_div_19_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", skill_r5, " ");
  }
}
function GetInvolvedComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "h3", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 21);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275template(10, GetInvolvedComponent_div_19_div_1_span_10_Template, 2, 1, "span", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const position_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", position_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(position_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", position_r3.commitment, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", position_r3.skills);
  }
}
function GetInvolvedComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, GetInvolvedComponent_div_19_div_1_Template, 11, 4, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.volunteerPositions);
  }
}
function GetInvolvedComponent_div_20_p_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r6.getErrorMessage("fullName"));
  }
}
function GetInvolvedComponent_div_20_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r7.getErrorMessage("email"));
  }
}
function GetInvolvedComponent_div_20_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r8 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r8.getErrorMessage("phone"));
  }
}
function GetInvolvedComponent_div_20_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pos_r15 = ctx.$implicit;
    \u0275\u0275property("value", pos_r15.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pos_r15.title);
  }
}
function GetInvolvedComponent_div_20_p_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r10.getErrorMessage("position"));
  }
}
function GetInvolvedComponent_div_20_p_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r11.getErrorMessage("experience"));
  }
}
function GetInvolvedComponent_div_20_p_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r12.getErrorMessage("availability"));
  }
}
function GetInvolvedComponent_div_20_p_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r13 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r13.getErrorMessage("motivation"));
  }
}
function GetInvolvedComponent_div_20_div_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "div", 49);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 50);
    \u0275\u0275element(3, "path", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "p", 52);
    \u0275\u0275text(5, "Thank you for your application! We will contact you soon.");
    \u0275\u0275elementEnd()()();
  }
}
var _c0 = (a0) => ({ "border-red-500": a0 });
function GetInvolvedComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "form", 26);
    \u0275\u0275listener("ngSubmit", function GetInvolvedComponent_div_20_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r16 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r16.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 27)(3, "h4", 28);
    \u0275\u0275text(4, "Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29)(6, "div", 19)(7, "label", 30);
    \u0275\u0275text(8, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 31);
    \u0275\u0275template(10, GetInvolvedComponent_div_20_p_10_Template, 2, 1, "p", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 19)(12, "label", 30);
    \u0275\u0275text(13, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "input", 33);
    \u0275\u0275template(15, GetInvolvedComponent_div_20_p_15_Template, 2, 1, "p", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 19)(17, "label", 30);
    \u0275\u0275text(18, "Phone Number");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 34);
    \u0275\u0275template(20, GetInvolvedComponent_div_20_p_20_Template, 2, 1, "p", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 19)(22, "label", 30);
    \u0275\u0275text(23, "Preferred Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 35)(25, "option", 36);
    \u0275\u0275text(26, "Select a position");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, GetInvolvedComponent_div_20_option_27_Template, 2, 2, "option", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, GetInvolvedComponent_div_20_p_28_Template, 2, 1, "p", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 27)(30, "h4", 28);
    \u0275\u0275text(31, "Experience & Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 38)(33, "div", 19)(34, "label", 30);
    \u0275\u0275text(35, "Relevant Experience");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "textarea", 39);
    \u0275\u0275template(37, GetInvolvedComponent_div_20_p_37_Template, 2, 1, "p", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 19)(39, "label", 30);
    \u0275\u0275text(40, "Availability");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "textarea", 40);
    \u0275\u0275template(42, GetInvolvedComponent_div_20_p_42_Template, 2, 1, "p", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 19)(44, "label", 30);
    \u0275\u0275text(45, "Motivation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "textarea", 41);
    \u0275\u0275template(47, GetInvolvedComponent_div_20_p_47_Template, 2, 1, "p", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 42)(49, "button", 43);
    \u0275\u0275listener("click", function GetInvolvedComponent_div_20_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r18 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r18.toggleVolunteerForm());
    });
    \u0275\u0275text(50, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 44);
    \u0275\u0275text(52, " Submit Application ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(53, GetInvolvedComponent_div_20_div_53_Template, 6, 0, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_14_0;
    let tmp_15_0;
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.volunteerForm);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(18, _c0, ((tmp_1_0 = ctx_r1.volunteerForm.get("fullName")) == null ? null : tmp_1_0.touched) && ((tmp_1_0 = ctx_r1.volunteerForm.get("fullName")) == null ? null : tmp_1_0.invalid)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_2_0 = ctx_r1.volunteerForm.get("fullName")) == null ? null : tmp_2_0.touched) && ((tmp_2_0 = ctx_r1.volunteerForm.get("fullName")) == null ? null : tmp_2_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(20, _c0, ((tmp_3_0 = ctx_r1.volunteerForm.get("email")) == null ? null : tmp_3_0.touched) && ((tmp_3_0 = ctx_r1.volunteerForm.get("email")) == null ? null : tmp_3_0.invalid)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_4_0 = ctx_r1.volunteerForm.get("email")) == null ? null : tmp_4_0.touched) && ((tmp_4_0 = ctx_r1.volunteerForm.get("email")) == null ? null : tmp_4_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(22, _c0, ((tmp_5_0 = ctx_r1.volunteerForm.get("phone")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx_r1.volunteerForm.get("phone")) == null ? null : tmp_5_0.invalid)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_6_0 = ctx_r1.volunteerForm.get("phone")) == null ? null : tmp_6_0.touched) && ((tmp_6_0 = ctx_r1.volunteerForm.get("phone")) == null ? null : tmp_6_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(24, _c0, ((tmp_7_0 = ctx_r1.volunteerForm.get("position")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx_r1.volunteerForm.get("position")) == null ? null : tmp_7_0.invalid)));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.volunteerPositions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r1.volunteerForm.get("position")) == null ? null : tmp_9_0.touched) && ((tmp_9_0 = ctx_r1.volunteerForm.get("position")) == null ? null : tmp_9_0.invalid));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(26, _c0, ((tmp_10_0 = ctx_r1.volunteerForm.get("experience")) == null ? null : tmp_10_0.touched) && ((tmp_10_0 = ctx_r1.volunteerForm.get("experience")) == null ? null : tmp_10_0.invalid)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_11_0 = ctx_r1.volunteerForm.get("experience")) == null ? null : tmp_11_0.touched) && ((tmp_11_0 = ctx_r1.volunteerForm.get("experience")) == null ? null : tmp_11_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(28, _c0, ((tmp_12_0 = ctx_r1.volunteerForm.get("availability")) == null ? null : tmp_12_0.touched) && ((tmp_12_0 = ctx_r1.volunteerForm.get("availability")) == null ? null : tmp_12_0.invalid)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_13_0 = ctx_r1.volunteerForm.get("availability")) == null ? null : tmp_13_0.touched) && ((tmp_13_0 = ctx_r1.volunteerForm.get("availability")) == null ? null : tmp_13_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(30, _c0, ((tmp_14_0 = ctx_r1.volunteerForm.get("motivation")) == null ? null : tmp_14_0.touched) && ((tmp_14_0 = ctx_r1.volunteerForm.get("motivation")) == null ? null : tmp_14_0.invalid)));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_15_0 = ctx_r1.volunteerForm.get("motivation")) == null ? null : tmp_15_0.touched) && ((tmp_15_0 = ctx_r1.volunteerForm.get("motivation")) == null ? null : tmp_15_0.invalid));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.volunteerForm.valid);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.submitSuccess);
  }
}
var _GetInvolvedComponent = class _GetInvolvedComponent {
  constructor(fb) {
    this.fb = fb;
    this.volunteerPositions = [
      {
        title: "Community Health Educator",
        description: "Lead workshops and training sessions to educate communities about One Health principles, preventive healthcare, and environmental sustainability.",
        commitment: "4-6 hours/week",
        skills: ["Teaching", "Public Speaking", "Health Education"]
      },
      {
        title: "Research Assistant",
        description: "Support our research team in collecting and analyzing data related to One Health initiatives, helping us understand the intersection of human, animal, and environmental health.",
        commitment: "6-8 hours/week",
        skills: ["Data Analysis", "Research Methods", "Scientific Writing"]
      },
      {
        title: "Community Outreach Coordinator",
        description: "Build relationships with local communities and organizations, organize health awareness campaigns, and coordinate volunteer activities.",
        commitment: "Flexible",
        skills: ["Project Management", "Communication", "Community Relations"]
      },
      {
        title: "Environmental Health Advocate",
        description: "Work on projects that promote environmental sustainability and its connection to public health, including educational programs and community initiatives.",
        commitment: "4-5 hours/week",
        skills: ["Environmental Science", "Advocacy", "Program Development"]
      }
    ];
    this.showVolunteerForm = false;
    this.submitSuccess = false;
    this.volunteerForm = this.fb.group({
      fullName: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern(/^(0?[89][89]\d{7}|\+265[89][89]\d{7}|\+\(265\)[89][89]\d{7})$/)]],
      position: ["", Validators.required],
      experience: ["", [Validators.required, Validators.minLength(50)]],
      availability: ["", [Validators.required, Validators.minLength(20)]],
      motivation: ["", [Validators.required, Validators.minLength(50)]]
    });
  }
  ngOnInit() {
  }
  toggleVolunteerForm() {
    this.showVolunteerForm = !this.showVolunteerForm;
    if (!this.showVolunteerForm) {
      this.volunteerForm.reset();
      this.submitSuccess = false;
    }
  }
  onSubmit() {
    if (this.volunteerForm.valid) {
      console.log("Form submitted:", this.volunteerForm.value);
      this.submitSuccess = true;
      setTimeout(() => {
        this.volunteerForm.reset();
        this.showVolunteerForm = false;
        this.submitSuccess = false;
      }, 3e3);
    } else {
      Object.keys(this.volunteerForm.controls).forEach((key) => {
        const control = this.volunteerForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
  // Helper method to get error message for a form control
  getErrorMessage(fieldName) {
    const control = this.volunteerForm.get(fieldName);
    if (!control)
      return "";
    if (control.hasError("required")) {
      return `${this.formatFieldName(fieldName)} is required`;
    }
    if (control.hasError("email")) {
      return "Please enter a valid email address";
    }
    if (control.hasError("minlength")) {
      const minLength = control.errors?.["minlength"].requiredLength;
      return `${this.formatFieldName(fieldName)} must be at least ${minLength} characters`;
    }
    if (control.hasError("pattern")) {
      if (fieldName === "phone") {
        return "Please enter a valid Malawian phone number (e.g., 998997400, 0998997400, or +265998997400)";
      }
    }
    return "";
  }
  formatFieldName(fieldName) {
    return fieldName.charAt(0).toUpperCase() + fieldName.slice(1).replace(/([A-Z])/g, " $1");
  }
};
_GetInvolvedComponent.\u0275fac = function GetInvolvedComponent_Factory(t) {
  return new (t || _GetInvolvedComponent)(\u0275\u0275directiveInject(FormBuilder));
};
_GetInvolvedComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GetInvolvedComponent, selectors: [["app-get-involved"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 3, consts: [[1, "w-full", "py-16", "lg:py-24", "bg-gray-50"], [1, "container", "mx-auto", "px-4", "lg:px-8"], [1, "max-w-4xl", "mx-auto"], [1, "text-center", "mb-12"], [1, "heading-xl", "mb-6"], [1, "max-w-6xl", "mx-auto"], [1, "text-body-lg", "text-gray-600"], [1, "bg-white", "rounded-2xl", "shadow-lg", "overflow-hidden"], [1, "p-8"], [1, "flex", "justify-between", "items-center", "mb-8"], [1, "heading-md", "text-gray-900", "mb-2"], [1, "text-body", "text-gray-600"], [1, "px-6", "py-3", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "transition-all", "duration-300", "transform", "hover:scale-105", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "font-semibold", 3, "click"], ["class", "mt-6 space-y-4", 4, "ngIf"], ["class", "mt-6", 4, "ngIf"], [1, "mt-6", "space-y-4"], ["class", "p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-all duration-300 hover:shadow-lg group", 4, "ngFor", "ngForOf"], [1, "p-4", "border", "border-gray-200", "rounded-lg", "hover:border-blue-500", "transition-all", "duration-300", "hover:shadow-lg", "group"], [1, "flex", "justify-between", "items-start"], [1, "space-y-2"], [1, "heading-sm", "text-gray-900", "group-hover:text-blue-600", "transition-colors", "duration-300"], [1, "px-3", "py-1", "text-sm", "bg-blue-100", "text-blue-800", "rounded-full", "whitespace-nowrap"], [1, "mt-4", "flex", "flex-wrap", "gap-2"], ["class", "px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors duration-300", 4, "ngFor", "ngForOf"], [1, "px-3", "py-1", "text-sm", "bg-gray-100", "text-gray-700", "rounded-full", "hover:bg-blue-100", "hover:text-blue-800", "transition-colors", "duration-300"], [1, "mt-6"], [1, "space-y-6", 3, "formGroup", "ngSubmit"], [1, "bg-gray-50", "p-4", "rounded-lg", "space-y-4"], [1, "heading-xs", "text-gray-900"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "text-sm", "font-medium", "text-gray-700"], ["type", "text", "formControlName", "fullName", 1, "w-full", "px-3", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300", 3, "ngClass"], ["class", "text-sm text-red-500 mt-1", 4, "ngIf"], ["type", "email", "formControlName", "email", 1, "w-full", "px-3", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300", 3, "ngClass"], ["type", "tel", "formControlName", "phone", "placeholder", "998997400 or 0998997400", 1, "w-full", "px-3", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300", 3, "ngClass"], ["formControlName", "position", 1, "w-full", "px-3", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300", 3, "ngClass"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "space-y-4"], ["formControlName", "experience", "rows", "3", "placeholder", "Tell us about your relevant experience and skills...", 1, "w-full", "px-3", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300", 3, "ngClass"], ["formControlName", "availability", "rows", "2", "placeholder", "Please specify your available days and times...", 1, "w-full", "px-3", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300", 3, "ngClass"], ["formControlName", "motivation", "rows", "3", "placeholder", "Why do you want to volunteer with us? What do you hope to achieve?", 1, "w-full", "px-3", "py-2", "border", "rounded-lg", "focus:ring-2", "focus:ring-blue-500", "focus:border-blue-500", "transition-colors", "duration-300", 3, "ngClass"], [1, "flex", "justify-end", "space-x-4"], ["type", "button", 1, "px-6", "py-2", "border", "border-gray-300", "rounded-lg", "hover:bg-gray-50", "transition-all", "duration-300", "focus:outline-none", "focus:ring-2", "focus:ring-gray-500", "focus:ring-offset-2", 3, "click"], ["type", "submit", 1, "px-6", "py-2", "bg-blue-600", "text-white", "rounded-lg", "hover:bg-blue-700", "transition-all", "duration-300", "transform", "hover:scale-105", "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-offset-2", "disabled:opacity-50", "disabled:cursor-not-allowed", 3, "disabled"], ["class", "mt-6 p-4 bg-green-50 border border-green-200 rounded-lg", 4, "ngIf"], [1, "text-sm", "text-red-500", "mt-1"], [3, "value"], [1, "mt-6", "p-4", "bg-green-50", "border", "border-green-200", "rounded-lg"], [1, "flex", "items-center"], ["fill", "currentColor", "viewBox", "0 0 20 20", 1, "w-5", "h-5", "text-green-400", "mr-2"], ["fill-rule", "evenodd", "d", "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", "clip-rule", "evenodd"], [1, "text-green-700", "font-medium"]], template: function GetInvolvedComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
    \u0275\u0275text(5, " Get Involved ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5)(7, "p", 6);
    \u0275\u0275text(8, " Join our mission to promote One Health initiatives. Your skills and dedication can make a real difference in our community's health and well-being. ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div")(13, "h2", 10);
    \u0275\u0275text(14, "Volunteer Opportunities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 11);
    \u0275\u0275text(16, "Choose from various roles to contribute to our mission");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275listener("click", function GetInvolvedComponent_Template_button_click_17_listener() {
      return ctx.toggleVolunteerForm();
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, GetInvolvedComponent_div_19_Template, 2, 1, "div", 13)(20, GetInvolvedComponent_div_20_Template, 54, 32, "div", 14);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate1(" ", ctx.showVolunteerForm ? "Close Form" : "Apply Now", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.showVolunteerForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.showVolunteerForm);
  }
}, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n/*# sourceMappingURL=get-involved.component.css.map */"] });
var GetInvolvedComponent = _GetInvolvedComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GetInvolvedComponent, { className: "GetInvolvedComponent", filePath: "src\\app\\pages\\get-involved\\get-involved.component.ts", lineNumber: 13 });
})();
export {
  GetInvolvedComponent
};
//# sourceMappingURL=chunk-M5SZKR4J.mjs.map
