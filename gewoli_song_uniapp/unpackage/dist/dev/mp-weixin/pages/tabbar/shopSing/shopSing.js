(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabbar/shopSing/shopSing"],{

/***/ 122:
/*!**********************************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/main.js?{"page":"pages%2Ftabbar%2FshopSing%2FshopSing"} ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _shopSing = _interopRequireDefault(__webpack_require__(/*! ./pages/tabbar/shopSing/shopSing.vue */ 123));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_shopSing.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 123:
/*!*************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/pages/tabbar/shopSing/shopSing.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shopSing_vue_vue_type_template_id_500cb7d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shopSing.vue?vue&type=template&id=500cb7d7&scoped=true& */ 124);
/* harmony import */ var _shopSing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopSing.vue?vue&type=script&lang=js& */ 126);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _shopSing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _shopSing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _shopSing_vue_vue_type_style_index_0_id_500cb7d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopSing.vue?vue&type=style&index=0&id=500cb7d7&lang=scss&scoped=true& */ 128);
/* harmony import */ var _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _shopSing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shopSing_vue_vue_type_template_id_500cb7d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shopSing_vue_vue_type_template_id_500cb7d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "500cb7d7",
  null,
  false,
  _shopSing_vue_vue_type_template_id_500cb7d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/tabbar/shopSing/shopSing.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 124:
/*!********************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/pages/tabbar/shopSing/shopSing.vue?vue&type=template&id=500cb7d7&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_template_id_500cb7d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shopSing.vue?vue&type=template&id=500cb7d7&scoped=true& */ 125);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_template_id_500cb7d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_template_id_500cb7d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_template_id_500cb7d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_template_id_500cb7d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 125:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Desktop/gewoli_song_uniapp/pages/tabbar/shopSing/shopSing.vue?vue&type=template&id=500cb7d7&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    heads: function () {
      return __webpack_require__.e(/*! import() | components/heads/heads */ "components/heads/heads").then(__webpack_require__.bind(null, /*! @/components/heads/heads.vue */ 324))
    },
    uSearch: function () {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-search/u-search */ "uview-ui/components/u-search/u-search").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-search/u-search.vue */ 331))
    },
    uEmpty: function () {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-empty/u-empty */ "uview-ui/components/u-empty/u-empty").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-empty/u-empty.vue */ 479))
    },
    tTabs: function () {
      return __webpack_require__.e(/*! import() | components/tTabs/tTabs */ "components/tTabs/tTabs").then(__webpack_require__.bind(null, /*! @/components/tTabs/tTabs.vue */ 472))
    },
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 486))
    },
    uTabbar: function () {
      return Promise.all(/*! import() | uview-ui/components/u-tabbar/u-tabbar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uview-ui/components/u-tabbar/u-tabbar")]).then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-tabbar/u-tabbar.vue */ 493))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.isSearch ? _vm.searchList.length : null
  var g1 = _vm.isSearch ? _vm.searchList.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 126:
/*!**************************************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/pages/tabbar/shopSing/shopSing.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shopSing.vue?vue&type=script&lang=js& */ 127);
/* harmony import */ var _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 127:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Desktop/gewoli_song_uniapp/pages/tabbar/shopSing/shopSing.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var PlayBottom = function PlayBottom() {
  __webpack_require__.e(/*! require.ensure | components/PlayBottom */ "components/PlayBottom").then((function () {
    return resolve(__webpack_require__(/*! @/components/PlayBottom.vue */ 500));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  data: function data() {
    return {
      timerId: null,
      //搜索函数防抖
      searchTxt: '',
      isSearch: false,
      searchList: [],
      cIndex: 0,
      scrollTop: 0,
      value: '',
      windowHeight: 0,
      headHeight: 0,
      tabViewHeight: 0,
      tv2Height: 0,
      typeList: [{
        typeName: '不限'
      }],
      songList: [],
      curItem: {},
      timer: null,
      innerAudioContext: null
    };
  },
  components: {
    PlayBottom: PlayBottom
  },
  computed: {
    listHeight: function listHeight() {
      var num = this.windowHeight - this.headHeight - this.tabViewHeight - this.tv2Height - 60;
      return num.toFixed(2);
    },
    tabbar: function tabbar() {
      return getApp().globalData.tabbar;
    },
    userInfo: function userInfo() {
      return uni.getStorageSync('userInfo');
    }
  },
  watch: {
    searchTxt: function searchTxt(newValue, oldValue) {
      if (newValue == '') {
        this.isSearch = false;
      }
    }
  },
  onShow: function onShow() {
    this.$refs.playBottomRef.updatePlayObj();
  },
  onLoad: function onLoad() {
    var _this = this;
    this.getType();
    // this.getList(0)
    uni.getSystemInfo({
      success: function success(res) {
        _this.windowHeight = res.windowHeight; // 窗口高度
      }
    });

    var query = uni.createSelectorQuery().in(this);
    query.select('.head').boundingClientRect(function (data) {
      if (data) {
        _this.headHeight = data.height;
      }
    }).exec();
    query.select('.tabView').boundingClientRect(function (data) {
      if (data) {
        _this.tabViewHeight = data.height;
      }
    }).exec(); // 执行查询
    query.select('.tv2').boundingClientRect(function (data) {
      if (data) {
        _this.tv2Height = data.height;
      }
    }).exec(); // 执行查询
  },
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      title: '歌窝里歌单',
      path: '/pages/tabbar/shopSing/shopSing'
    };
  },
  methods: {
    audition: function audition(item, index, i) {
      clearTimeout(this.$globalDataAudio.timer);
      this.$globalDataAudio.timer = null;
      var audioCtx = this.$globalDataAudio.audioCtx;
      audioCtx.src = item.songFileUrl;
      audioCtx.play();
      this.$globalDataAudio.timer = setTimeout(function () {
        audioCtx.stop();
        // this.innerAudioContext.destroy();
        uni.showModal({
          title: '提示',
          content: '试听结束，购买后可播放',
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击确定');
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      }, 25000);
    },
    open: function open(item) {
      // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
      // this.$refs.popup.open();
      uni.navigateTo({
        url: '/pages/songBuying/songBuying?item=' + JSON.stringify(item)
      });
      this.curItem = item;
    },
    buy: function buy(payMethod) {
      var _this2 = this;
      var that = this;
      console.log(payMethod);
      var item = this.curItem;
      var roleType = uni.getStorageSync('userInfo').roleType;
      var musiciansSignStatus = uni.getStorageSync('userInfo').musiciansSignStatus;
      if (roleType == '2' && musiciansSignStatus !== '3') {
        uni.showToast({
          title: '请签约后购买',
          icon: 'none'
        });
        uni.navigateTo({
          url: '/pages/upUserInfo/upExamine'
        });
        return;
      }
      var postData = {
        userId: uni.getStorageSync('userInfo').id,
        goodsId: item.id,
        phone: uni.getStorageSync('userInfo').reviewPhone,
        payMethod: 1
      };
      // 支付方式，2积分，1微信
      if (payMethod == 2) {
        postData.payMethod = 2;
      } else if (payMethod == 1) {
        postData.payMethod = 1;
      }
      this.$req.put('song/order/payment', postData).then(function (oItem) {
        if (oItem.data.timeStamp) {
          uni.requestPayment({
            provider: 'wxpay',
            timeStamp: oItem.data.timeStamp,
            nonceStr: oItem.data.nonceStr,
            package: 'prepay_id=' + oItem.data.packageStr,
            signType: 'MD5',
            paySign: oItem.data.paySign,
            success: function success(res) {
              uni.showToast({
                title: '支付成功',
                icon: 'none'
              });
              setTimeout(function () {
                _this2.toUrl('/pages/order/singOrderList');
              }, 500);
              that.$refs.popup.close();
            },
            fail: function fail(err) {
              uni.showToast({
                title: '支付失败,请重试',
                icon: 'none'
              });
              that.$refs.popup.close();
            }
          });
        } else {
          _this2.$refs.popup.close();
          if (oItem.code == 500) {
            uni.showToast({
              title: '积分不足',
              icon: 'none'
            });
            return;
          }
          uni.showToast({
            title: '积分支付成功',
            icon: 'none'
          });
          setTimeout(function () {
            _this2.toUrl('/pages/order/singOrderList');
          }, 500);
        }
      });
    },
    //搜索
    search: function search() {
      var _this3 = this;
      if (this.searchTxt == '') {
        return;
      }
      var data = {
        songNameOrProducer: this.searchTxt
      };
      this.$req.get('song/searchSong', data).then(function (res) {
        _this3.searchList = res.data;
        _this3.isSearch = true;
      });
      // clearTimeout(this.timerId);
      // this.timerId = setTimeout(() => {
      // 	if (this.searchTxt) {
      // 		this.isSearch = true;
      // 		this.$req.get('system/song/list', { songName: this.searchTxt }).then((res) => {
      // 			this.searchList = res.rows;
      // 		});
      // 	} else {
      // 		this.isSearch = false;
      // 	}
      // }, 500);
    },
    //播放音乐
    playMp3: function playMp3(item, index, i) {
      if (i == -1) {
        var _encodedList = encodeURIComponent(JSON.stringify(this.searchList));
        this.toUrl("/pages/play/play?list=".concat(_encodedList, "&index=").concat(index));
      }
      // console.log(this.songList[i]);
      // 传递整个songList数组
      var encodedList = encodeURIComponent(JSON.stringify(this.songList[i]));
      this.toUrl("/pages/play/play?list=".concat(encodedList, "&index=").concat(index));
    },
    //收藏
    collection: function collection(data, i, index, v) {
      var _this4 = this;
      //二级数组item 一级数组下标 二级数组下标 一级数组item
      var item = JSON.parse(JSON.stringify(data));
      var url, colNum;
      var postData = {
        songId: item.id,
        userId: this.userInfo.id
      };
      if (!item.isCollect) {
        //未收藏 提交收藏接口
        url = 'userSongCollection/userSongCollection';
        colNum = 1;
      } else {
        //已收藏 提交取消收藏接口
        url = 'userSongCollection/deleteUserSongCollection';
        colNum = 0;
      }
      this.$req.post(url, postData, 'form').then(function (res) {
        if (res.code == 200) {
          v[index].isCollect = colNum;
          _this4.$set(_this4.songList, i, v);
        }
        uni.showToast({
          title: res.msg,
          icon: 'none'
        });
      });
    },
    //获取类型
    getType: function getType() {
      var _this5 = this;
      this.$req.get('system/type/list?pageNum=1&pageSize=99').then(function (res) {
        res.rows.unshift({
          typeName: '不限'
        });
        _this5.typeList = res.rows;
        _this5.songList = JSON.parse(JSON.stringify(res.rows));
        _this5.songList[0] = [];
        res.rows.forEach(function (item, index) {
          _this5.getList(item.id, index);
        });
      });
    },
    getList: function getList(type, index) {
      var _this6 = this;
      var getData = {
        songType: type || 0,
        userId: this.userInfo.id
      };
      this.$req.get('song/acquisitionSong', getData).then(function (res) {
        _this6.$set(_this6.songList, index, res.data);
      });
    },
    changeIndex: function changeIndex(index) {
      this.cIndex = index;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 128:
/*!***********************************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/pages/tabbar/shopSing/shopSing.vue?vue&type=style&index=0&id=500cb7d7&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_style_index_0_id_500cb7d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./shopSing.vue?vue&type=style&index=0&id=500cb7d7&lang=scss&scoped=true& */ 129);
/* harmony import */ var _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_style_index_0_id_500cb7d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_style_index_0_id_500cb7d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_style_index_0_id_500cb7d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_style_index_0_id_500cb7d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HarmonyOS_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_shopSing_vue_vue_type_style_index_0_id_500cb7d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 129:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/lenovo/Desktop/gewoli_song_uniapp/pages/tabbar/shopSing/shopSing.vue?vue&type=style&index=0&id=500cb7d7&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[122,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/shopSing/shopSing.js.map