import './polyfills.server.mjs';
import "./chunk-TWBZTKS7.mjs";
import {
  ScrollAnimationDirective
} from "./chunk-XDIDHDXD.mjs";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-XHNCF4IE.mjs";
import {
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-YASMSVLX.mjs";
import "./chunk-24VIC3GD.mjs";

// src/app/pages/about-us/about-us.component.ts
function AboutUsComponent_div_189_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275listener("click", function AboutUsComponent_div_189_Template_div_click_0_listener() {
      const restoredCtx = \u0275\u0275restoreView(_r4);
      const member_r2 = restoredCtx.$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openBoardMemberModal(member_r2));
    });
    \u0275\u0275elementStart(1, "div", 117);
    \u0275\u0275element(2, "img", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h3", 119);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 120);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 121);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 122);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", member_r2.image, \u0275\u0275sanitizeUrl)("alt", member_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.organization);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.shortBio);
  }
}
function AboutUsComponent_div_190_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function AboutUsComponent_div_190_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.closeBoardMemberModal());
    });
    \u0275\u0275elementStart(1, "div", 124);
    \u0275\u0275listener("click", function AboutUsComponent_div_190_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(2, "div", 88);
    \u0275\u0275element(3, "img", 125);
    \u0275\u0275elementStart(4, "button", 126);
    \u0275\u0275listener("click", function AboutUsComponent_div_190_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r8 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r8.closeBoardMemberModal());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 127);
    \u0275\u0275element(6, "path", 128);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(7, "div", 129)(8, "h3", 130);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 131);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 132);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 133)(15, "p", 28);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r1.selectedBoardMember.image, \u0275\u0275sanitizeUrl)("alt", ctx_r1.selectedBoardMember.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedBoardMember.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedBoardMember.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.selectedBoardMember.role, " - ", ctx_r1.selectedBoardMember.organization, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedBoardMember.fullBio);
  }
}
var _AboutUsComponent = class _AboutUsComponent {
  constructor() {
    this.selectedBoardMember = null;
    this.boardMembers = [
      {
        name: "Dr. Dagmar Mayer",
        title: "Dr. med. vet., GPCert(SAM), MRCVS",
        role: "Director of Malawi Operations",
        organization: "Worldwide Veterinary Service (WVS)",
        image: "assets/images/board/Dr Dagmar Mayer.jpg",
        shortBio: "Veterinary expert leading operations in Malawi",
        fullBio: "Dr. Dagmar Mayer, Dr. med. vet., GPCert(SAM), MRCVS is the Director of Malawi Operations at Worldwide Veterinary Service (WVS). She brings extensive expertise in veterinary medicine and animal health to advance One Health initiatives across Malawi."
      },
      {
        name: "Dr. Collins Mitambo",
        title: "Head of Division",
        role: "AMR Coordinating Centre",
        organization: "Ministry of Health, Republic of Malawi",
        image: "assets/images/board/Dr Collins Mitambo.jpg",
        shortBio: "Leading antimicrobial resistance coordination",
        fullBio: "Dr Collins Mitambo is the Head of Division for Antimicrobial Resistance Coordinating Centre in the Ministry of Health, Republic of Malawi. He acts as a leader in strategically positioning the work of the AMR Division for animal, human, environment, aquaculture and plant health. He champions AMR leadership across multiple sectors."
      },
      {
        name: "Dr. Vincent Mlotha",
        title: "Senior Lecturer & Deputy Head",
        role: "Department of Food Science",
        organization: "Lilongwe University of Agriculture and Natural Resources (LUANAR)",
        image: "assets/images/board/Dr Vincent Mlotha.jpg",
        shortBio: "Academic leader in food science and nutrition",
        fullBio: "Vincent is a visionary and dynamic academic leader with over 12 years of experience in higher education service delivery, project management, resource mobilization, and collaborative research capabilities. Currently serving as Senior Lecturer and Deputy Head of Department at LUANAR, he drives research agenda and coordinates postgraduate research while managing multi-country collaborative projects in food science and nutrition."
      },
      {
        name: "Florence",
        title: "Board Member",
        role: "Strategic Advisor",
        organization: "OHCON",
        image: "assets/images/board/Florence.jpg",
        shortBio: "Strategic advisor and board member",
        fullBio: "Florence brings valuable expertise and strategic guidance to OHCON's board of directors, contributing to the organization's mission and vision."
      },
      {
        name: "Tadala",
        title: "Board Member",
        role: "Strategic Advisor",
        organization: "OHCON",
        image: "assets/images/board/Tadala.jpg",
        shortBio: "Strategic advisor and board member",
        fullBio: "Tadala serves as a strategic advisor on OHCON's board, providing valuable insights and guidance for the organization's initiatives."
      }
    ];
    this.teamMembers = [
      {
        name: "Master Zambezi",
        role: "Founder & Executive Director",
        image: "assets/images/master.jpg",
        bio: "Leading our organization with over 3 years of healthcare experience and a passion for community health improvement.",
        location: "Lilongwe, Malawi",
        email: "masterzambezi@gmail.com"
      },
      {
        name: "Kelvin Mulera",
        role: "Co-Founder & Publications Director",
        image: "assets/images/kelvin.jpg",
        bio: "Developing and implementing innovative healthcare programs with expertise in scientific research and communication.",
        location: "Lilongwe, Malawi",
        email: "kelvin@renai-labs.com"
      }
    ];
    this.values = [
      {
        title: "Collaboration",
        description: "Working together across disciplines for better health outcomes",
        icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      },
      {
        title: "Excellence",
        description: "Striving for the highest standards in all our initiatives",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Compassion",
        description: "Putting care and empathy at the heart of our work",
        icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      }
    ];
  }
  contactTeamMember(email) {
    window.location.href = `mailto:${email}`;
  }
  openBoardMemberModal(member) {
    this.selectedBoardMember = member;
  }
  closeBoardMemberModal() {
    this.selectedBoardMember = null;
  }
};
_AboutUsComponent.\u0275fac = function AboutUsComponent_Factory(t) {
  return new (t || _AboutUsComponent)();
};
_AboutUsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutUsComponent, selectors: [["app-about-us"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 322, vars: 2, consts: [[1, "min-h-screen", "bg-white"], [1, "relative", "py-32", "bg-gradient-to-br", "from-blue-900", "to-blue-700", "text-white"], [1, "absolute", "inset-0", "bg-black/30"], [1, "container", "mx-auto", "px-4", "lg:px-8", "relative", "z-10"], [1, "max-w-4xl", "mx-auto", "text-center"], [1, "heading-xl", "text-white", "mb-6"], [1, "text-body-lg", "text-white/90", "max-w-4xl", "mx-auto"], [1, "section-clean", "bg-gray-50"], [1, "container-clean"], [1, "grid", "lg:grid-cols-2", "gap-16", "lg:gap-20"], [1, "heading-md", "text-gray-900", "mb-6"], [1, "text-body", "text-gray-600"], [1, "section-clean", "bg-white"], [1, "max-w-4xl", "mx-auto"], [1, "heading-lg", "text-gray-900", "mb-12"], [1, "space-y-6"], [1, "py-24", "lg:py-32", "bg-gradient-to-br", "from-gray-50", "to-white", "rounded-2xl", "mb-12"], [1, "container", "mx-auto", "px-4", "lg:px-8"], [1, "max-w-6xl", "mx-auto"], [1, "text-center", "mb-12", "lg:mb-16"], [1, "text-3xl", "lg:text-4xl", "font-sans", "font-bold", "text-blue-700", "mb-4"], [1, "w-20", "h-1", "bg-blue-600", "mx-auto", "mb-6", "rounded-full"], [1, "max-w-3xl", "mx-auto"], [1, "text-xl", "text-gray-600", "font-medium"], [1, "grid", "lg:grid-cols-2", "gap-12", "lg:gap-16", "items-center"], [1, "order-2", "lg:order-1"], [1, "bg-white", "rounded-xl", "p-8", "shadow-lg", "border-l-4", "border-blue-600", "hover:shadow-xl", "transition", "duration-300"], [1, "text-lg", "font-semibold", "text-gray-900", "mb-3"], [1, "text-gray-700", "leading-relaxed"], [1, "bg-white", "rounded-xl", "p-8", "shadow-lg", "border-l-4", "border-green-500", "hover:shadow-xl", "transition", "duration-300"], [1, "bg-white", "rounded-xl", "p-8", "shadow-lg", "border-l-4", "border-purple-500", "hover:shadow-xl", "transition", "duration-300"], [1, "order-1", "lg:order-2"], [1, "bg-gradient-to-br", "from-blue-600", "to-blue-700", "rounded-2xl", "p-10", "lg:p-12", "text-white", "shadow-xl"], [1, "text-2xl", "lg:text-3xl", "font-bold", "mb-8", "text-center", "tracking-tight"], [1, "space-y-8"], [1, "flex", "items-center", "group"], [1, "w-16", "h-16", "bg-white/20", "rounded-xl", "flex", "items-center", "justify-center", "mr-6", "group-hover:bg-white/30", "transition-colors"], [1, "text-2xl", "font-bold"], [1, "font-semibold", "text-lg"], [1, "text-blue-100"], [1, "mt-8", "pt-6", "border-t", "border-white/20"], [1, "text-center", "text-blue-100", "italic"], [1, "py-20", "bg-gray-50"], [1, "max-w-4xl", "mx-auto", "mb-16"], [1, "heading-lg", "text-gray-900", "mb-6", "md:mb-8"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-3", "gap-8", "max-w-6xl", "mx-auto"], [1, "bg-white", "rounded-2xl", "p-8", "shadow-lg", "hover:shadow-xl", "transition-all", "duration-300", "transform", "hover:-translate-y-1"], [1, "flex", "items-center", "justify-center", "w-16", "h-16", "bg-blue-100", "rounded-xl", "mb-6"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"], [1, "text-xl", "font-semibold", "mb-3", "text-gray-900"], [1, "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"], [1, "text-sm", "sm:text-base", "text-gray-600"], ["scrollAnimation", "", "animationClass", "animate-slide-in-left", "animationDelay", "900ms", 1, "bg-white", "rounded-xl", "sm:rounded-2xl", "p-6", "sm:p-8", "lg:p-10", "shadow-lg", "hover:shadow-xl", "transition-all", "duration-300", "transform", "hover:-translate-y-1"], [1, "flex", "items-center", "justify-center", "w-12", "h-12", "sm:w-16", "sm:h-16", "bg-blue-100", "rounded-lg", "sm:rounded-xl", "mb-4", "sm:mb-6"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "sm:w-8", "sm:h-8", "text-blue-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"], [1, "text-md", "sm:text-xl", "font-semibold", "mb-3"], [1, "py-16", "lg:py-24", "bg-white"], [1, "text-3xl", "lg:text-4xl", "font-bold", "text-gray-900", "mb-4"], [1, "w-20", "h-1", "bg-blue-600", "mx-auto", "mb-8"], [1, "text-lg", "text-gray-600", "leading-relaxed", "mb-12"], [1, "bg-blue-50", "rounded-2xl", "p-8", "mb-8"], [1, "text-xl", "font-semibold", "text-gray-900", "mb-6"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-3", "gap-4", "text-gray-600"], [1, "bg-white", "rounded-lg", "p-4"], [1, "bg-white", "rounded-lg", "p-4", "md:col-span-2", "lg:col-span-1"], ["href", "/contact-us", 1, "inline-flex", "items-center", "px-8", "py-3", "text-lg", "font-semibold", "text-white", "bg-blue-600", "rounded-lg", "hover:bg-blue-700", "transform", "hover:scale-105", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "ml-2"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"], [1, "text-2xl", "sm:text-3xl", "md:text-4xl", "lg:text-5xl", "font-light", "text-gray-900", "mb-6", "md:mb-8"], [1, "text-base", "sm:text-lg", "text-gray-600", "leading-relaxed"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-3", "gap-12", "max-w-6xl", "mx-auto"], ["class", "group cursor-pointer", 3, "click", 4, "ngFor", "ngForOf"], ["class", "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50", "role", "dialog", "aria-modal", "true", "aria-labelledby", "board-member-title", 3, "click", 4, "ngIf"], [1, "py-24", "bg-gradient-to-br", "from-white", "to-blue-50", "rounded-2xl", "mb-12"], [1, "max-w-4xl", "mx-auto", "mb-16", "text-center"], [1, "text-2xl", "sm:text-3xl", "md:text-4xl", "lg:text-5xl", "font-bold", "text-blue-700", "mb-6", "md:mb-8", "tracking-tight"], [1, "text-base", "sm:text-lg", "text-gray-600", "leading-relaxed", "mb-4"], [1, "mb-16"], [1, "text-xl", "sm:text-2xl", "font-bold", "text-blue-700", "mb-6", "md:mb-8", "text-center", "tracking-tight"], [1, "grid", "md:grid-cols-2", "lg:grid-cols-3", "gap-10", "max-w-6xl", "mx-auto"], ["tabindex", "0", "role", "button", 1, "group", "bg-white", "rounded-2xl", "overflow-hidden", "shadow-lg", "hover:shadow-xl", "transition-all", "duration-300", "transform", "hover:-translate-y-1", "border", "border-blue-100", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200", 3, "keydown.enter"], [1, "relative"], ["src", "assets/images/team/Master Zambezi.jpg", "alt", "Executive Director", 1, "w-full", "h-64", "object-cover", "rounded-t-2xl", "group-hover:scale-105", "transition-transform", "duration-500", "border-b-4", "border-blue-600"], [1, "absolute", "inset-0", "bg-gradient-to-t", "from-black/60", "to-transparent", "rounded-t-2xl"], [1, "absolute", "bottom-0", "left-0", "right-0", "p-6"], [1, "text-lg", "sm:text-xl", "font-bold", "text-white", "mb-1", "drop-shadow"], [1, "text-white/90", "text-xs", "sm:text-sm"], [1, "p-6"], ["tabindex", "0", 1, "group", "bg-white", "rounded-2xl", "overflow-hidden", "shadow-lg", "hover:shadow-xl", "transition-all", "duration-300", "transform", "hover:-translate-y-1", "border", "border-blue-100", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200"], ["src", "assets/images/team/Rudo Pirigu.jpg", "alt", "Program Manager Education", 1, "w-full", "h-64", "object-cover", "rounded-t-2xl", "group-hover:scale-105", "transition-transform", "duration-500", "border-b-4", "border-blue-600"], [1, "text-xl", "font-bold", "text-white", "mb-1", "drop-shadow"], [1, "text-white/90", "text-sm"], ["src", "assets/images/team/Zichitina Msekandiana.jpg", "alt", "Program Manager Operations", 1, "w-full", "h-64", "object-cover", "rounded-t-2xl", "group-hover:scale-105", "transition-transform", "duration-500", "border-b-4", "border-blue-600"], ["src", "assets/images/team/Yamikani Hara.jpg", "alt", "M&E Officer", 1, "w-full", "h-64", "object-cover", "rounded-t-2xl", "group-hover:scale-105", "transition-transform", "duration-500", "border-b-4", "border-blue-600"], ["src", "assets/images/team/Kelvin Mulera.jpg", "alt", "Communications Officer", 1, "w-full", "h-64", "object-cover", "rounded-t-2xl", "group-hover:scale-105", "transition-transform", "duration-500", "border-b-4", "border-blue-600"], ["src", "assets/images/team/Connis Chitsulo.jpg", "alt", "Connice Chitsulo - Field Coordinator", 1, "w-full", "h-64", "object-cover", "rounded-t-2xl", "group-hover:scale-105", "transition-transform", "duration-500", "border-b-4", "border-blue-600"], ["src", "assets/images/team/Owen Kulapani.jpg", "alt", "Finance Officer", 1, "w-full", "h-64", "object-cover", "rounded-t-2xl", "group-hover:scale-105", "transition-transform", "duration-500", "border-b-4", "border-blue-600"], [1, "text-center"], [1, "text-2xl", "font-bold", "text-blue-700", "mb-8"], [1, "grid", "md:grid-cols-3", "gap-8", "max-w-4xl", "mx-auto"], [1, "bg-white", "rounded-xl", "p-8", "shadow-lg", "border", "border-blue-100"], [1, "text-lg", "font-bold", "text-blue-600", "mb-3"], [1, "text-center", "mt-12"], ["href", "/contact-us", 1, "inline-flex", "items-center", "px-8", "py-3", "text-lg", "font-semibold", "text-blue-600", "bg-blue-50", "rounded-lg", "hover:bg-blue-100", "transform", "hover:scale-105", "transition-all", "duration-300"], [1, "text-3xl", "lg:text-4xl", "font-bold", "text-gray-900", "mb-6"], [1, "text-lg", "text-gray-600", "mb-8", "leading-relaxed"], [1, "flex", "flex-col", "sm:flex-row", "gap-4", "justify-center"], ["href", "/get-involved", 1, "inline-block", "bg-blue-600", "text-white", "px-8", "py-3", "rounded-lg", "font-semibold", "hover:bg-blue-700", "transform", "hover:scale-105", "transition-all", "duration-300", "shadow-lg", "hover:shadow-xl", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200"], ["href", "/contact-us", 1, "inline-block", "bg-white", "text-blue-600", "border-2", "border-blue-600", "px-8", "py-3", "rounded-lg", "font-semibold", "hover:bg-blue-50", "transform", "hover:scale-105", "transition-all", "duration-300", "focus:outline-none", "focus:ring-4", "focus:ring-blue-200"], [1, "group", "cursor-pointer", 3, "click"], [1, "mb-6"], [1, "w-full", "h-80", "object-cover", "grayscale", "group-hover:grayscale-0", "transition-all", "duration-500", 3, "src", "alt"], [1, "text-lg", "sm:text-xl", "font-medium", "text-gray-900", "mb-2"], [1, "text-sm", "sm:text-base", "text-gray-600", "mb-2"], [1, "text-xs", "sm:text-sm", "text-gray-500", "mb-3", "md:mb-4"], [1, "text-sm", "sm:text-base", "text-gray-600", "leading-relaxed"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "board-member-title", 1, "fixed", "inset-0", "bg-black", "bg-opacity-60", "flex", "items-center", "justify-center", "p-4", "z-50", 3, "click"], ["tabindex", "-1", 1, "bg-white", "rounded-2xl", "max-w-2xl", "w-full", "max-h-[90vh]", "overflow-y-auto", 3, "click"], [1, "w-full", "h-64", "object-cover", 3, "src", "alt"], ["aria-label", "Close dialog", 1, "absolute", "top-4", "right-4", "bg-white", "bg-opacity-90", "hover:bg-opacity-100", "rounded-full", "p-2", "transition-all", "focus:outline-none", "focus:ring-2", "focus:ring-blue-600", 3, "click"], ["fill", "none", "stroke", "currentColor", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-gray-600"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M6 18L18 6M6 6l12 12"], [1, "p-8"], [1, "text-2xl", "font-bold", "text-gray-900", "mb-2"], [1, "text-blue-600", "font-semibold", "mb-1"], [1, "text-gray-600", "mb-4"], [1, "prose", "prose-gray", "max-w-none"]], template: function AboutUsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 1);
    \u0275\u0275element(2, "div", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "h1", 5);
    \u0275\u0275text(6, "About OHCON");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 6);
    \u0275\u0275text(8, " We connect human, animal, and environmental health through community-led programs, evidence-based research, and sustainable partnerships across Malawi. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(9, "section", 7)(10, "div", 8)(11, "div", 9)(12, "div")(13, "h2", 10);
    \u0275\u0275text(14, "Our Mission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 11);
    \u0275\u0275text(16, " To protect and improve the health and livelihoods of Malawians through integrated, community-led One Health solutions that connect human, animal, and environmental well-being. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "h2", 10);
    \u0275\u0275text(19, "Our Vision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 11);
    \u0275\u0275text(21, " A resilient Malawi where people, animals, and ecosystems thrive together\u2014free from preventable diseases and environmental risks, supported by locally owned, multi-sectoral systems. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(22, "section", 12)(23, "div", 8)(24, "div", 13)(25, "h2", 14);
    \u0275\u0275text(26, "Why One Health Matters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 15)(28, "p", 11);
    \u0275\u0275text(29, " Malawi's economy and food security are tightly linked to livestock and natural resources. When animal disease, poor sanitation, or environmental degradation occur, they can quickly threaten human health and livelihoods. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "p", 11);
    \u0275\u0275text(31, " One Health is the collaborative approach that prevents and responds to these cross-sectoral threats\u2014improving outcomes more effectively than isolated programs. ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "section", 16)(33, "div", 17)(34, "div", 18)(35, "div", 19)(36, "h2", 20);
    \u0275\u0275text(37, "Our Story");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "div", 21);
    \u0275\u0275elementStart(39, "div", 22)(40, "p", 23);
    \u0275\u0275text(41, " A journey of passion, collaboration, and unwavering commitment to One Health in Malawi ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "div", 24)(43, "div", 25)(44, "div", 15)(45, "div", 26)(46, "h3", 27);
    \u0275\u0275text(47, "The Beginning (2022)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "p", 28);
    \u0275\u0275text(49, " Founded in 2022, OHCON emerged from a shared vision to address complex health challenges facing Malawi through an integrated One Health approach. Our founders recognized that the health of humans, animals, and the environment are deeply interconnected. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 29)(51, "h3", 27);
    \u0275\u0275text(52, "Our Growth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p", 28);
    \u0275\u0275text(54, " Starting with a small team of passionate healthcare professionals, we've grown into a dynamic organization that collaborates with communities, educational institutions, and healthcare providers across Malawi. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 30)(56, "h3", 27);
    \u0275\u0275text(57, "Looking Forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 28);
    \u0275\u0275text(59, " Today, we continue to expand our reach and impact, working towards our vision of a healthier, more resilient Malawi where One Health principles guide all health-related decisions and actions. ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(60, "div", 31)(61, "div", 32)(62, "h3", 33);
    \u0275\u0275text(63, "Our Impact So Far");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div", 34)(65, "div", 35)(66, "div", 36)(67, "span", 37);
    \u0275\u0275text(68, "15+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div")(70, "p", 38);
    \u0275\u0275text(71, "Professionals Trained");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "p", 39);
    \u0275\u0275text(73, "In One Health principles");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(74, "div", 35)(75, "div", 36)(76, "span", 37);
    \u0275\u0275text(77, "2");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "div")(79, "p", 38);
    \u0275\u0275text(80, "One Health Clubs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "p", 39);
    \u0275\u0275text(82, "Launched across schools");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(83, "div", 35)(84, "div", 36)(85, "span", 37);
    \u0275\u0275text(86, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div")(88, "p", 38);
    \u0275\u0275text(89, "Years of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "p", 39);
    \u0275\u0275text(91, "Dedicated to health innovation");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "div", 40)(93, "p", 41);
    \u0275\u0275text(94, ' "Building a healthier future, one connection at a time" ');
    \u0275\u0275elementEnd()()()()()()()();
    \u0275\u0275elementStart(95, "section", 42)(96, "div", 17)(97, "div", 43)(98, "h2", 44);
    \u0275\u0275text(99, "Our Values");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "div", 45)(101, "div", 46)(102, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(103, "svg", 48);
    \u0275\u0275element(104, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(105, "h3", 50);
    \u0275\u0275text(106, "Collaboration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "p", 51);
    \u0275\u0275text(108, "Working together across sectors to achieve shared One Health goals.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "div", 46)(110, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(111, "svg", 48);
    \u0275\u0275element(112, "path", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(113, "h3", 50);
    \u0275\u0275text(114, "Community-Centered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "p", 51);
    \u0275\u0275text(116, "Putting communities at the heart of our programs and decision-making.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "div", 46)(118, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(119, "svg", 48);
    \u0275\u0275element(120, "path", 53);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(121, "h3", 50);
    \u0275\u0275text(122, "Evidence-Based");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "p", 51);
    \u0275\u0275text(124, "Grounding our work in scientific research and proven best practices.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "div", 46)(126, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(127, "svg", 48);
    \u0275\u0275element(128, "path", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(129, "h3", 50);
    \u0275\u0275text(130, "Equity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "p", 51);
    \u0275\u0275text(132, "Ensuring fair access to health resources and opportunities for all.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "div", 46)(134, "div", 47);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(135, "svg", 48);
    \u0275\u0275element(136, "path", 55)(137, "path", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(138, "h3", 50);
    \u0275\u0275text(139, "Transparency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "p", 57);
    \u0275\u0275text(141, "Operating with openness and accountability in all our activities.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 58)(143, "div", 59);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(144, "svg", 60);
    \u0275\u0275element(145, "path", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(146, "h3", 62);
    \u0275\u0275text(147, "Sustainability");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "p", 57);
    \u0275\u0275text(149, "Building long-term solutions that can be maintained by local communities.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(150, "section", 63)(151, "div", 17)(152, "div", 4)(153, "h2", 64);
    \u0275\u0275text(154, "Governance & Transparency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(155, "div", 65);
    \u0275\u0275elementStart(156, "p", 66);
    \u0275\u0275text(157, " OHCON is governed by a five-member Board representing key areas of expertise. Our governance policies, annual reports, and audited financial statements are available to partners and donors. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "div", 67)(159, "h3", 68);
    \u0275\u0275text(160, "Board Expertise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "div", 69)(162, "div", 70)(163, "strong");
    \u0275\u0275text(164, "Public Health");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "div", 70)(166, "strong");
    \u0275\u0275text(167, "Veterinary Medicine");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(168, "div", 70)(169, "strong");
    \u0275\u0275text(170, "Finance & Fundraising");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "div", 70)(172, "strong");
    \u0275\u0275text(173, "Legal & Government Relations");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "div", 71)(175, "strong");
    \u0275\u0275text(176, "Environmental Science");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(177, "a", 72);
    \u0275\u0275text(178, " Request Governance Documents ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(179, "svg", 73);
    \u0275\u0275element(180, "path", 74);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(181, "section", 42)(182, "div", 17)(183, "div", 43)(184, "h2", 75);
    \u0275\u0275text(185, "Board of Directors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "p", 76);
    \u0275\u0275text(187, " Our board brings together expertise from veterinary medicine, public health, academia, and strategic leadership to guide OHCON's mission. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(188, "div", 77);
    \u0275\u0275template(189, AboutUsComponent_div_189_Template, 12, 6, "div", 78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(190, AboutUsComponent_div_190_Template, 17, 7, "div", 79);
    \u0275\u0275elementStart(191, "section", 80)(192, "div", 17)(193, "div", 81)(194, "h2", 82);
    \u0275\u0275text(195, "Our Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "p", 83);
    \u0275\u0275text(197, " Meet the dedicated professionals driving OHCON's mission across Malawi. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(198, "div", 84)(199, "h3", 85);
    \u0275\u0275text(200, "Leadership Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "div", 86)(202, "div", 87);
    \u0275\u0275listener("keydown.enter", function AboutUsComponent_Template_div_keydown_enter_202_listener() {
      return ctx.openBoardMemberModal(ctx.boardMembers[0]);
    });
    \u0275\u0275elementStart(203, "div", 88);
    \u0275\u0275element(204, "img", 89)(205, "div", 90);
    \u0275\u0275elementStart(206, "div", 91)(207, "h3", 92);
    \u0275\u0275text(208, "Executive Director");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "p", 93);
    \u0275\u0275text(210, "Organizational Leadership");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(211, "div", 94)(212, "p", 51);
    \u0275\u0275text(213, "Leading OHCON's strategic vision and program implementation across Malawi.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(214, "div", 95)(215, "div", 88);
    \u0275\u0275element(216, "img", 96)(217, "div", 90);
    \u0275\u0275elementStart(218, "div", 91)(219, "h3", 97);
    \u0275\u0275text(220, "Program Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "p", 98);
    \u0275\u0275text(222, "Education & Capacity");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(223, "div", 94)(224, "p", 51);
    \u0275\u0275text(225, "Overseeing education programs and capacity building initiatives.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(226, "div", 95)(227, "div", 88);
    \u0275\u0275element(228, "img", 99)(229, "div", 90);
    \u0275\u0275elementStart(230, "div", 91)(231, "h3", 97);
    \u0275\u0275text(232, "Program Manager");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "p", 98);
    \u0275\u0275text(234, "Operations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(235, "div", 94)(236, "p", 51);
    \u0275\u0275text(237, "Managing day-to-day operations and program delivery.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(238, "div", 95)(239, "div", 88);
    \u0275\u0275element(240, "img", 100)(241, "div", 90);
    \u0275\u0275elementStart(242, "div", 91)(243, "h3", 97);
    \u0275\u0275text(244, "M&E Officer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(245, "p", 98);
    \u0275\u0275text(246, "Monitoring & Evaluation");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(247, "div", 94)(248, "p", 51);
    \u0275\u0275text(249, "Ensuring program effectiveness through monitoring and evaluation.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(250, "div", 95)(251, "div", 88);
    \u0275\u0275element(252, "img", 101)(253, "div", 90);
    \u0275\u0275elementStart(254, "div", 91)(255, "h3", 97);
    \u0275\u0275text(256, "Communications Officer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "p", 98);
    \u0275\u0275text(258, "Community Engagement");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(259, "div", 94)(260, "p", 51);
    \u0275\u0275text(261, "Building community connections and managing communications.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(262, "div", 95)(263, "div", 88);
    \u0275\u0275element(264, "img", 102)(265, "div", 90);
    \u0275\u0275elementStart(266, "div", 91)(267, "h3", 92);
    \u0275\u0275text(268, "Field Coordinator");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(269, "p", 93);
    \u0275\u0275text(270, "Community Programs");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(271, "div", 94)(272, "p", 51);
    \u0275\u0275text(273, "Connice leads field operations and coordinates community outreach to ensure program delivery and local partnerships.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(274, "div", 95)(275, "div", 88);
    \u0275\u0275element(276, "img", 103)(277, "div", 90);
    \u0275\u0275elementStart(278, "div", 91)(279, "h3", 97);
    \u0275\u0275text(280, "Finance Officer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(281, "p", 98);
    \u0275\u0275text(282, "Financial Management");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(283, "div", 94)(284, "p", 51);
    \u0275\u0275text(285, "Managing financial operations and ensuring fiscal responsibility.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(286, "div", 104)(287, "h3", 105);
    \u0275\u0275text(288, "Advisory Board");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(289, "div", 106)(290, "div", 107)(291, "h4", 108);
    \u0275\u0275text(292, "Epidemiology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(293, "p", 51);
    \u0275\u0275text(294, "Disease surveillance and outbreak response expertise");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(295, "div", 107)(296, "h4", 108);
    \u0275\u0275text(297, "Policy Development");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "p", 51);
    \u0275\u0275text(299, "Health policy development and advocacy guidance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(300, "div", 107)(301, "h4", 108);
    \u0275\u0275text(302, "Resource Mobilization");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(303, "p", 51);
    \u0275\u0275text(304, "Fundraising strategy and financial planning");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(305, "div", 109)(306, "a", 110);
    \u0275\u0275text(307, " Connect with Our Team ");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(308, "svg", 73);
    \u0275\u0275element(309, "path", 49);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(310, "section", 63)(311, "div", 17)(312, "div", 4)(313, "h2", 111);
    \u0275\u0275text(314, "Join Our Mission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(315, "p", 112);
    \u0275\u0275text(316, " Together, we can create a healthier future for Malawi. Join us in our mission to integrate One Health principles into community well-being. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(317, "div", 113)(318, "a", 114);
    \u0275\u0275text(319, " Get Involved ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(320, "a", 115);
    \u0275\u0275text(321, " Contact Us ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(189);
    \u0275\u0275property("ngForOf", ctx.boardMembers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.selectedBoardMember);
  }
}, dependencies: [CommonModule, NgForOf, NgIf, ScrollAnimationDirective], styles: [`

.bg-pattern[_ngcontent-%COMP%] {
  background-image: url(/assets/backgrounds/OIF.jpg);
  background-size: cover;
  background-repeat: no-repeat;
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
.team-member-card[_ngcontent-%COMP%] {
  transform: translateY(0);
  transition: all 0.3s ease;
}
.team-member-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
}
.team-member-image[_ngcontent-%COMP%] {
  position: relative;
  overflow: hidden;
}
.team-member-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  transition: transform 0.5s ease;
}
.team-member-card[_ngcontent-%COMP%]:hover   .team-member-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  transform: scale(1.05);
}
.team-member-overlay[_ngcontent-%COMP%] {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      to top,
      rgba(0, 0, 0, 0.7) 0%,
      transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.team-member-card[_ngcontent-%COMP%]:hover   .team-member-overlay[_ngcontent-%COMP%] {
  opacity: 1;
}
.value-card[_ngcontent-%COMP%] {
  transform: translateY(0);
  transition: all 0.3s ease;
}
.value-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
}
.value-icon[_ngcontent-%COMP%] {
  transition: all 0.3s ease;
}
.value-card[_ngcontent-%COMP%]:hover   .value-icon[_ngcontent-%COMP%] {
  transform: scale(1.1);
  background-color: #dbeafe;
}
.info-card[_ngcontent-%COMP%] {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}
.info-card[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background:
    linear-gradient(
      90deg,
      #3b82f6,
      #60a5fa);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}
.info-card[_ngcontent-%COMP%]:hover::before {
  transform: scaleX(1);
}
.info-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
@keyframes _ngcontent-%COMP%_fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fade-in[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out forwards;
}
.fade-in-delay-1[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out 0.2s forwards;
  opacity: 0;
}
.fade-in-delay-2[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_fadeIn 0.6s ease-out 0.4s forwards;
  opacity: 0;
}
.modal-backdrop[_ngcontent-%COMP%] {
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
}
.board-member-card[_ngcontent-%COMP%] {
  transform: translateY(0);
  transition: all 0.3s ease;
  cursor: pointer;
}
.board-member-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-8px);
}
.board-member-image[_ngcontent-%COMP%] {
  position: relative;
  overflow: hidden;
}
.board-member-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  transition: transform 0.5s ease;
}
.board-member-card[_ngcontent-%COMP%]:hover   .board-member-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  transform: scale(1.05);
}
@keyframes _ngcontent-%COMP%_modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.modal-content[_ngcontent-%COMP%] {
  animation: _ngcontent-%COMP%_modalFadeIn 0.3s ease-out;
}
@media (max-width: 768px) {
  .team-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  .values-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .board-members-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}
/*# sourceMappingURL=about-us.component.css.map */`] });
var AboutUsComponent = _AboutUsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutUsComponent, { className: "AboutUsComponent", filePath: "src\\app\\pages\\about-us\\about-us.component.ts", lineNumber: 13 });
})();
export {
  AboutUsComponent
};
//# sourceMappingURL=chunk-P62S4OMI.mjs.map
