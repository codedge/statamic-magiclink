/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Links/ListingComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Links/ListingComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['initial-rows', 'columns'],
  data: function data() {
    return {
      rows: this.initialRows
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SendMagicLinkComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SendMagicLinkComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    action: String,
    method: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      error: null,
      errors: {},
      email: ''
    };
  },
  computed: {
    hasErrors: function hasErrors() {
      return this.error || Object.keys(this.errors).length;
    },
    payload: function payload() {
      return {
        email: this.email
      };
    }
  },
  methods: {
    clearErrors: function clearErrors() {
      this.error = null;
      this.errors = {};
    },
    send: function send() {
      var _this = this;

      this.clearErrors();
      this.$axios[this.method](this.action, this.payload).then(function (response) {
        window.location = response.data.redirect;
      })["catch"](function (e) {
        if (e.response && e.response.status === 422) {
          var _e$response$data = e.response.data,
              message = _e$response$data.message,
              errors = _e$response$data.errors;
          _this.error = message;
          _this.errors = errors;

          _this.$toast.error(message);
        } else {
          _this.$toast.error(__('magiclink::web.unable_to_send'));
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SettingsComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SettingsComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    action: String,
    initialAllowedAddresses: Array,
    initialAllowedDomains: Array,
    initialExpireTime: {
      type: Number,
      required: true
    },
    initialEnabled: {
      type: Boolean,
      required: true
    },
    indexUrl: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      allowedAddresses: this.initialAllowedAddresses,
      countAddresses: this.initialAllowedAddresses.length + 1,
      allowedDomains: this.initialAllowedDomains,
      countDomains: this.initialAllowedDomains.length + 1,
      error: null,
      errors: {},
      enabled: this.initialEnabled,
      expireTime: this.initialExpireTime
    };
  },
  computed: {
    hasErrors: function hasErrors() {
      return this.error || Object.keys(this.errors).length;
    },
    payload: function payload() {
      return {
        allowedAddresses: this.allowedAddresses,
        allowedDomains: this.allowedDomains,
        enabled: this.enabled,
        expireTime: this.expireTime
      };
    }
  },
  methods: {
    clearErrors: function clearErrors() {
      this.error = null;
      this.errors = {};
    },
    addAddress: function addAddress() {
      this.countAddresses += 1;
    },
    addDomain: function addDomain() {
      this.countDomains += 1;
    },
    save: function save() {
      var _this = this;

      this.clearErrors();
      this.$axios[this.method](this.action, this.payload).then(function (response) {
        window.location = response.data.redirect;
      })["catch"](function (e) {
        if (e.response && e.response.status === 422) {
          var _e$response$data = e.response.data,
              message = _e$response$data.message,
              errors = _e$response$data.errors;
          _this.error = message;
          _this.errors = errors;

          _this.$toast.error(message);
        } else {
          _this.$toast.error(__('magiclink::cp.unable_to_save'));
        }
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$keys.bindGlobal(['mod+s'], function (e) {
      e.preventDefault();

      _this2.save();
    });
  }
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SendMagicLinkComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SendMagicLinkComponent */ "./resources/js/components/SendMagicLinkComponent.vue");
/* harmony import */ var _components_SettingsComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SettingsComponent */ "./resources/js/components/SettingsComponent.vue");
/* harmony import */ var _components_Links_ListingComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Links/ListingComponent */ "./resources/js/components/Links/ListingComponent.vue");



Statamic.booting(function () {
  Statamic.$components.register('magiclink-settings', _components_SettingsComponent__WEBPACK_IMPORTED_MODULE_1__.default);
  Statamic.$components.register('magiclink-send-link', _components_SendMagicLinkComponent__WEBPACK_IMPORTED_MODULE_0__.default);
  Statamic.$components.register('magiclink-links-listing', _components_Links_ListingComponent__WEBPACK_IMPORTED_MODULE_2__.default);
});

/***/ }),

/***/ "./resources/css/statamic-magiclink.css":
/*!**********************************************!*\
  !*** ./resources/css/statamic-magiclink.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/components/Links/ListingComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Links/ListingComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ListingComponent_vue_vue_type_template_id_5c45418c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListingComponent.vue?vue&type=template&id=5c45418c& */ "./resources/js/components/Links/ListingComponent.vue?vue&type=template&id=5c45418c&");
/* harmony import */ var _ListingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListingComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Links/ListingComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ListingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ListingComponent_vue_vue_type_template_id_5c45418c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ListingComponent_vue_vue_type_template_id_5c45418c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Links/ListingComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SendMagicLinkComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/SendMagicLinkComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SendMagicLinkComponent_vue_vue_type_template_id_56987049___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SendMagicLinkComponent.vue?vue&type=template&id=56987049& */ "./resources/js/components/SendMagicLinkComponent.vue?vue&type=template&id=56987049&");
/* harmony import */ var _SendMagicLinkComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SendMagicLinkComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SendMagicLinkComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SendMagicLinkComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SendMagicLinkComponent_vue_vue_type_template_id_56987049___WEBPACK_IMPORTED_MODULE_0__.render,
  _SendMagicLinkComponent_vue_vue_type_template_id_56987049___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SendMagicLinkComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SettingsComponent.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/SettingsComponent.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsComponent_vue_vue_type_template_id_67fba83f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsComponent.vue?vue&type=template&id=67fba83f& */ "./resources/js/components/SettingsComponent.vue?vue&type=template&id=67fba83f&");
/* harmony import */ var _SettingsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SettingsComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SettingsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SettingsComponent_vue_vue_type_template_id_67fba83f___WEBPACK_IMPORTED_MODULE_0__.render,
  _SettingsComponent_vue_vue_type_template_id_67fba83f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SettingsComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Links/ListingComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Links/ListingComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListingComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Links/ListingComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/SendMagicLinkComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/SendMagicLinkComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMagicLinkComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SendMagicLinkComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SendMagicLinkComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMagicLinkComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/SettingsComponent.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/SettingsComponent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SettingsComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Links/ListingComponent.vue?vue&type=template&id=5c45418c&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Links/ListingComponent.vue?vue&type=template&id=5c45418c& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingComponent_vue_vue_type_template_id_5c45418c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingComponent_vue_vue_type_template_id_5c45418c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListingComponent_vue_vue_type_template_id_5c45418c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ListingComponent.vue?vue&type=template&id=5c45418c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Links/ListingComponent.vue?vue&type=template&id=5c45418c&");


/***/ }),

/***/ "./resources/js/components/SendMagicLinkComponent.vue?vue&type=template&id=56987049&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/SendMagicLinkComponent.vue?vue&type=template&id=56987049& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMagicLinkComponent_vue_vue_type_template_id_56987049___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMagicLinkComponent_vue_vue_type_template_id_56987049___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SendMagicLinkComponent_vue_vue_type_template_id_56987049___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SendMagicLinkComponent.vue?vue&type=template&id=56987049& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SendMagicLinkComponent.vue?vue&type=template&id=56987049&");


/***/ }),

/***/ "./resources/js/components/SettingsComponent.vue?vue&type=template&id=67fba83f&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/SettingsComponent.vue?vue&type=template&id=67fba83f& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsComponent_vue_vue_type_template_id_67fba83f___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsComponent_vue_vue_type_template_id_67fba83f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsComponent_vue_vue_type_template_id_67fba83f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsComponent.vue?vue&type=template&id=67fba83f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SettingsComponent.vue?vue&type=template&id=67fba83f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Links/ListingComponent.vue?vue&type=template&id=5c45418c&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Links/ListingComponent.vue?vue&type=template&id=5c45418c& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("data-list", {
    attrs: { columns: _vm.columns, sort: false, rows: _vm.rows },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var rows = ref.filteredRows
          return _c(
            "div",
            { staticClass: "card p-0" },
            [
              _c("data-list-table", {
                attrs: { rows: rows },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "cell-id",
                      fn: function(ref) {
                        var collection = ref.row
                        return [
                          _c("a", { attrs: { href: collection.show_url } }, [
                            _vm._v(_vm._s(collection.id))
                          ])
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
            ],
            1
          )
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SendMagicLinkComponent.vue?vue&type=template&id=56987049&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SendMagicLinkComponent.vue?vue&type=template&id=56987049& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "publish-fields-container",
        { staticClass: "p-0" },
        [
          _c("form-group", {
            staticClass: "p-0",
            attrs: {
              handle: "email",
              display: _vm.__("magiclink::web.email_address"),
              errors: _vm.errors.email,
              focus: true
            },
            model: {
              value: _vm.email,
              callback: function($$v) {
                _vm.email = $$v
              },
              expression: "email"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "py-2 flex justify-between" }, [
        _c(
          "button",
          {
            staticClass: "btn-primary w-full",
            attrs: { type: "submit" },
            on: { click: _vm.send }
          },
          [_vm._v(_vm._s(_vm.__("magiclink::web.login_magic_link")))]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SettingsComponent.vue?vue&type=template&id=67fba83f&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SettingsComponent.vue?vue&type=template&id=67fba83f& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "mb-1 content" }, [
        _c("h2", { staticClass: "text-base" }, [
          _vm._v("\n            " + _vm._s(_vm.__("General")) + "\n        ")
        ])
      ]),
      _vm._v(" "),
      _c(
        "publish-fields-container",
        { staticClass: "card p-0 mb-3 configure-section" },
        [
          _c("form-group", {
            staticClass: "toggle-fieldtype",
            attrs: {
              fieldtype: "toggle",
              handle: "enabled",
              display: _vm.__("magiclink::cp.settings.ml_enabled"),
              instructions: _vm.__(
                "magiclink::cp.settings.ml_enabled_instructions"
              )
            },
            model: {
              value: _vm.enabled,
              callback: function($$v) {
                _vm.enabled = $$v
              },
              expression: "enabled"
            }
          }),
          _vm._v(" "),
          _c("form-group", {
            staticClass: "border-b",
            attrs: {
              handle: "expireTime",
              display: _vm.__("magiclink::cp.settings.ml_expire_time"),
              errors: _vm.errors.expireTime,
              instructions: _vm.__(
                "magiclink::cp.settings.ml_expire_time_instructions"
              )
            },
            model: {
              value: _vm.expireTime,
              callback: function($$v) {
                _vm.expireTime = $$v
              },
              expression: "expireTime"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mb-1 content" }, [
        _c("h2", { staticClass: "text-base" }, [
          _vm._v("\n            Protected content\n            "),
          _c(
            "button",
            { staticClass: "btn-sm", on: { click: _vm.addAddress } },
            [_vm._v("\n                + Add new address\n            ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "publish-fields-container",
        { staticClass: "card p-0 mb-3 configure-section" },
        _vm._l(_vm.countAddresses, function(a, index) {
          return _c(
            "div",
            [
              _c("form-group", {
                staticClass: "border-b",
                attrs: {
                  handle: "allowedAddresses[]",
                  display: _vm.__(
                    "magiclink::cp.settings.ml_allowed_addresses"
                  ),
                  errors: _vm.errors.allowedAddresses,
                  instructions: _vm.__(
                    "magiclink::cp.settings.ml_allowed_addresses_instructions"
                  )
                },
                model: {
                  value: _vm.allowedAddresses[index],
                  callback: function($$v) {
                    _vm.$set(_vm.allowedAddresses, index, $$v)
                  },
                  expression: "allowedAddresses[index]"
                }
              })
            ],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "mb-1 content" }, [
        _c("h2", { staticClass: "text-base" }, [
          _vm._v(
            "\n            " +
              _vm._s(_vm.__("magiclink::cp.settings.ml_allowed_domains")) +
              "\n            "
          ),
          _c(
            "button",
            { staticClass: "btn-sm", on: { click: _vm.addDomain } },
            [_vm._v("\n                + Add new domain\n            ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "publish-fields-container",
        { staticClass: "card p-0 mb-3 configure-section" },
        _vm._l(_vm.countDomains, function(d, index) {
          return _c(
            "div",
            [
              _c("form-group", {
                staticClass: "border-b",
                attrs: {
                  handle: "allowedDomains[]",
                  display: _vm.__("magiclink::cp.settings.ml_allowed_domains"),
                  errors: _vm.errors.allowedDomains,
                  instructions: _vm.__(
                    "magiclink::cp.settings.ml_allowed_domains_instructions"
                  )
                },
                model: {
                  value: _vm.allowedDomains[index],
                  callback: function($$v) {
                    _vm.$set(_vm.allowedDomains, index, $$v)
                  },
                  expression: "allowedDomains[index]"
                }
              })
            ],
            1
          )
        }),
        0
      ),
      _vm._v(" "),
      _c("div", { staticClass: "py-2 mt-3 border-t flex justify-between" }, [
        _c("a", {
          staticClass: "btn",
          attrs: { href: _vm.indexUrl },
          domProps: { textContent: _vm._s(_vm.__("Cancel")) }
        }),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn-primary",
            attrs: { type: "submit" },
            on: { click: _vm.save }
          },
          [_vm._v(_vm._s(_vm.__("Save")))]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/statamic-magiclink": 0,
/******/ 			"public/css/statamic-magiclink": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/statamic-magiclink"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/statamic-magiclink"], () => (__webpack_require__("./resources/css/statamic-magiclink.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;