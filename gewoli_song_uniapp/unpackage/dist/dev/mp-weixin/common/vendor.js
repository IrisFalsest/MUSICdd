(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__FE5DF50",
    appName: "uView-demo",
    appVersion: "1.5.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.15",
    uniRuntimeVersion: "4.15",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__FE5DF50",
      appName: "uView-demo",
      appVersion: "1.5.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uView-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uView-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uView-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uView-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uView-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!*************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/pages.json ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 32:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
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


/***/ }),

/***/ 33:
/*!********************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/common/request.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _configure = __webpack_require__(/*! ./configure.js */ 34);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var request = /*#__PURE__*/function () {
  function request() {
    (0, _classCallCheck2.default)(this, request);
    this.config = {
      url: _configure.BASEURL,
      // 请求的本域名
      method: 'POST',
      // 设置为json，返回后会对数据进行一次JSON.parse()
      dataType: 'json',
      originalData: false,
      // 是否在拦截器中返回服务端的原始数据
      // 配置请求头信息
      header: {
        'content-type': 'application/json;charset=UTF-8'
      }
    };
  }
  (0, _createClass2.default)(request, [{
    key: "request",
    value: function request(url, data, headerType) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.config.url = _configure.BASEURL + '/' + url;
        _this.config.data = data;
        _this.config.header["content-type"] = headerType || 'application/json;charset=UTF-8';
        _this.config.header.Authorization = 'Bearer ' + uni.getStorageSync('token') || false;
        uni.request(_objectSpread(_objectSpread({}, _this.config), {}, {
          success: function success(res) {
            if (res.data.code == 401) {
              console.error(res.data.msg);
              uni.navigateTo({
                url: '/pages/login/login'
              });
              uni.removeStorageSync("token");
              uni.removeStorageSync("userInfo");
              uni.removeStorageSync("rankingList");
              return;
            }
            if (res.data.code != 200) {
              if (res.data.msg || res.data.message) {
                uni.showToast({
                  title: res.data.msg || res.data.message,
                  duration: 2000,
                  icon: 'none'
                });
              }
              reject(res.data);
              return;
            }
            uni.hideLoading();
            if (_this.config.originalData) {
              resolve(res);
            } else {
              resolve(res.data);
            }
          },
          fail: function fail(error) {
            reject(error);
            uni.hideLoading();
          },
          complete: function complete() {
            uni.hideLoading();
          }
        }));
      });
    }
  }, {
    key: "wxLogin",
    value: function wxLogin(url, data1, headerType, resolve) {
      return new Promise(function (resolve, reject) {
        uni.login({
          provider: 'weixin',
          success: function success(loginRes) {
            uni.request({
              url: _configure.BASEURL + '/user/wxLogin?code=' + loginRes.code,
              method: 'POST',
              header: {
                "Content-Type": 'application/json'
              },
              success: function success(res) {
                var data = res.data;
                uni.setStorageSync('userInfo', data.data.user);
                uni.setStorageSync('token', data.data.token);
                if (url) {
                  uni.reLaunch({
                    url: url
                  });
                }
                // 假设你希望在成功登录后返回某些数据，这里可以是任何你想返回的对象。
                resolve(res);
              },
              fail: function fail(error) {
                reject(error);
              }
            });
          },
          fail: function fail(error) {
            reject(error);
          }
        });
      });
    }
  }, {
    key: "get",
    value: function get(url, data, headerType) {
      this.config.method = 'GET';
      if (headerType == "form") {
        headerType = "application/x-www-form-urlencoded";
      }
      return this.request(url, data, headerType);
    }
  }, {
    key: "post",
    value: function post(url, data, headerType) {
      this.config.method = 'POST';
      if (headerType == "form") {
        headerType = "application/x-www-form-urlencoded";
      }
      return this.request(url, data, headerType);
    }
  }, {
    key: "put",
    value: function put(url, data, headerType) {
      this.config.method = 'PUT';
      if (headerType == "form") {
        headerType = "application/x-www-form-urlencoded";
      }
      return this.request(url, data, headerType);
    }
  }, {
    key: "delete",
    value: function _delete(url, data, headerType) {
      this.config.method = 'DELETE';
      return this.request(url, data, headerType);
    }
  }, {
    key: "upImage",
    value: function upImage(path) {
      return new Promise(function (resolve, reject) {
        uni.uploadFile({
          url: _configure.BASEURL + '/file/ossUploadFile',
          //仅为示例，非真实的接口地址
          filePath: path,
          name: 'file',
          header: {
            "token": uni.getStorageSync('token') || ''
          },
          success: function success(res) {
            var data = res.data;
            if (typeof data == 'string') {
              data = JSON.parse(data);
            }
            if (data.code != 200) {
              uni.showToast({
                title: "上传失败",
                icon: 'none'
              });
              reject(data);
              return;
            }
            resolve(data);
          },
          fail: function fail(error) {
            reject(error);
          },
          complete: function complete() {
            uni.hideLoading();
          }
        });
      });
    }
  }]);
  return request;
}();
var _default = new request();
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 34:
/*!**********************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/common/configure.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BASEURL = void 0;
var BASEURL = "http://127.0.0.1:8090";
// let BASEURL = "http://4mnqf7.natappfree.cc"
exports.BASEURL = BASEURL;

/***/ }),

/***/ 35:
/*!****************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/common/globalDataAudio.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  audioCtx: null,
  timer: null,
  stop: 1,
  // 0播放 1暂停
  initAudioCtx: function initAudioCtx() {
    if (!this.audioCtx) {
      this.audioCtx = uni.createInnerAudioContext();
    }
  },
  destroyAudioCtx: function destroyAudioCtx() {
    if (this.audioCtx) {
      this.audioCtx.destroy();
      this.audioCtx = null;
    }
  },
  hasAudioCtx: function hasAudioCtx() {
    return !!this.audioCtx;
  },
  hasAudioStatus: function hasAudioStatus() {
    if (this.stop == 1) {
      this.stop = 0;
    } else if (this.stop == 0) {
      this.stop = 1;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 350:
/*!********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/util/emitter.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 递归使用 call 方式this指向
 * @param componentName // 需要找的组件的名称
 * @param eventName // 事件名称
 * @param params // 需要传递的参数
 */
function _broadcast(componentName, eventName, params) {
  // 循环子节点找到名称一样的子节点 否则 递归 当前子节点
  this.$children.map(function (child) {
    if (componentName === child.$options.name) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat(params));
    }
  });
}
var _default = {
  methods: {
    /**
     * 派发 (向上查找) (一个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root; //$parent 找到最近的父节点 $root 根节点
      var name = parent.$options.name; // 获取当前组件实例的name
      // 如果当前有节点 && 当前没名称 且 当前名称等于需要传进来的名称的时候就去查找当前的节点
      // 循环出当前名称的一样的组件实例
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.name;
        }
      }
      // 有节点表示当前找到了name一样的实例
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    /**
     * 广播 (向下查找) (广播多个)
     * @param componentName // 需要找的组件的名称
     * @param eventName // 事件名称
     * @param params // 需要传递的参数
     */
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 36:
/*!********************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 37));
var _request = _interopRequireDefault(__webpack_require__(/*! ./libs/request */ 38));
var _queryParams = _interopRequireDefault(__webpack_require__(/*! ./libs/function/queryParams.js */ 42));
var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/function/route.js */ 43));
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFormat.js */ 47));
var _timeFrom = _interopRequireDefault(__webpack_require__(/*! ./libs/function/timeFrom.js */ 48));
var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 49));
var _guid = _interopRequireDefault(__webpack_require__(/*! ./libs/function/guid.js */ 50));
var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/function/color.js */ 51));
var _type2icon = _interopRequireDefault(__webpack_require__(/*! ./libs/function/type2icon.js */ 52));
var _randomArray = _interopRequireDefault(__webpack_require__(/*! ./libs/function/randomArray.js */ 53));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepClone.js */ 40));
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./libs/function/deepMerge.js */ 39));
var _addUnit = _interopRequireDefault(__webpack_require__(/*! ./libs/function/addUnit.js */ 54));
var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 41));
var _random = _interopRequireDefault(__webpack_require__(/*! ./libs/function/random.js */ 55));
var _trim = _interopRequireDefault(__webpack_require__(/*! ./libs/function/trim.js */ 56));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./libs/function/toast.js */ 57));
var _getParent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/getParent.js */ 58));
var _$parent = _interopRequireDefault(__webpack_require__(/*! ./libs/function/$parent.js */ 59));
var _sys = __webpack_require__(/*! ./libs/function/sys.js */ 60);
var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 61));
var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 62));
var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 63));
var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 64));
// 引入全局mixin

// 引入关于是否mixin集成小程序分享的配置
// import wxshare from './libs/mixin/mpShare.js'
// 全局挂载引入http相关请求拦截插件

function wranning(str) {
  // 开发环境进行信息输出,主要是一些报错信息
  // 这个环境的来由是在程序编写时候,点击hx编辑器运行调试代码的时候,详见:
  // 	https://uniapp.dcloud.io/frame?id=%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e5%92%8c%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83
  if (true) {
    console.warn(str);
  }
}

// 尝试判断在根目录的/store中是否有$u.mixin.js，此文件uView默认为需要挂在到全局的vuex的state变量
// HX2.6.11版本,放到try中,控制台依然会警告,暂时不用此方式，
// let vuexStore = {};
// try {
// 	vuexStore = require("@/store/$u.mixin.js");
// } catch (e) {
// 	//TODO handle the exception
// }

// post类型对象参数转为get类型url参数

var $u = {
  queryParams: _queryParams.default,
  route: _route.default,
  timeFormat: _timeFormat.default,
  date: _timeFormat.default,
  // 另名date
  timeFrom: _timeFrom.default,
  colorGradient: _colorGradient.default.colorGradient,
  colorToRgba: _colorGradient.default.colorToRgba,
  guid: _guid.default,
  color: _color.default,
  sys: _sys.sys,
  os: _sys.os,
  type2icon: _type2icon.default,
  randomArray: _randomArray.default,
  wranning: wranning,
  get: _request.default.get,
  post: _request.default.post,
  put: _request.default.put,
  'delete': _request.default.delete,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  test: _test.default,
  random: _random.default,
  deepClone: _deepClone.default,
  deepMerge: _deepMerge.default,
  getParent: _getParent.default,
  $parent: _$parent.default,
  addUnit: _addUnit.default,
  trim: _trim.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: _request.default,
  toast: _toast.default,
  config: _config.default,
  // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default
};

// $u挂载到uni对象上
uni.$u = $u;
var install = function install(Vue) {
  Vue.mixin(_mixin.default);
  if (Vue.prototype.openShare) {
    Vue.mixin(mpShare);
  }
  // Vue.mixin(vuexStore);
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  Vue.filter('date', function (timestamp, format) {
    return (0, _timeFormat.default)(timestamp, format);
  });
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {
    return (0, _timeFrom.default)(timestamp, format);
  });
  Vue.prototype.$u = $u;
};
var _default = {
  install: install
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 37:
/*!*******************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/mixin/mixin.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  methods: {
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {
      var _this = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).exec();
      });
    },
    getParentData: function getParentData() {
      var _this2 = this;
      var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = false;
      // 这里的本质原理是，通过获取父组件实例(也即u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      this.parent = this.$u.$parent.call(this, parentName);
      if (this.parent) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this2.parentData[key] = _this2.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && e.stopPropagation && e.stopPropagation();
    }
  },
  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {
    var _this3 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this3) {
          childrenList.splice(index, 1);
        }
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 38:
/*!*********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/request/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ../function/deepMerge */ 39));
var _test = _interopRequireDefault(__webpack_require__(/*! ../function/test */ 41));
var Request = /*#__PURE__*/function () {
  function Request() {
    var _this = this;
    (0, _classCallCheck2.default)(this, Request);
    this.config = {
      baseUrl: '',
      // 请求的根域名
      // 默认的请求头
      header: {},
      method: 'POST',
      // 设置为json，返回后uni.request会对数据进行一次JSON.parse
      dataType: 'json',
      // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
      responseType: 'text',
      showLoading: true,
      // 是否显示请求中的loading
      loadingText: '请求中...',
      loadingTime: 800,
      // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
      timer: null,
      // 定时器
      originalData: false,
      // 是否在拦截器中返回服务端的原始数据，见文档说明
      loadingMask: true // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
    };

    // 拦截器
    this.interceptor = {
      // 请求前的拦截
      request: null,
      // 请求后的拦截
      response: null
    };

    // get请求
    this.get = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        method: 'GET',
        url: url,
        header: header,
        data: data
      });
    };

    // post请求
    this.post = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'POST',
        header: header,
        data: data
      });
    };

    // put请求，不支持支付宝小程序(HX2.6.15)
    this.put = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'PUT',
        header: header,
        data: data
      });
    };

    // delete请求，不支持支付宝和头条小程序(HX2.6.15)
    this.delete = function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return _this.request({
        url: url,
        method: 'DELETE',
        header: header,
        data: data
      });
    };
  }
  (0, _createClass2.default)(Request, [{
    key: "setConfig",
    value:
    // 设置全局默认配置
    function setConfig(customConfig) {
      // 深度合并对象，否则会造成对象深层属性丢失
      this.config = (0, _deepMerge.default)(this.config, customConfig);
    }

    // 主要请求部分
  }, {
    key: "request",
    value: function request() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // 检查请求拦截
      if (this.interceptor.request && typeof this.interceptor.request === 'function') {
        var tmpConfig = {};
        var interceptorRequest = this.interceptor.request(options);
        if (interceptorRequest === false) {
          // 返回一个处于pending状态中的Promise，来取消原promise，避免进入then()回调
          return new Promise(function () {});
        }
        this.options = interceptorRequest;
      }
      options.dataType = options.dataType || this.config.dataType;
      options.responseType = options.responseType || this.config.responseType;
      options.url = options.url || '';
      options.params = options.params || {};
      options.header = Object.assign({}, this.config.header, options.header);
      options.method = options.method || this.config.method;
      return new Promise(function (resolve, reject) {
        options.complete = function (response) {
          // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
          uni.hideLoading();
          // 清除定时器，如果请求回来了，就无需loading
          clearTimeout(_this2.config.timer);
          _this2.config.timer = null;
          // 判断用户对拦截返回数据的要求，如果originalData为true，返回所有的数据(response)到拦截器，否则只返回response.data
          if (_this2.config.originalData) {
            // 判断是否存在拦截器
            if (_this2.interceptor.response && typeof _this2.interceptor.response === 'function') {
              var resInterceptors = _this2.interceptor.response(response);
              // 如果拦截器不返回false，就将拦截器返回的内容给this.$u.post的then回调
              if (resInterceptors !== false) {
                resolve(resInterceptors);
              } else {
                // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
                reject(response);
              }
            } else {
              // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
              resolve(response);
            }
          } else {
            if (response.statusCode == 200) {
              if (_this2.interceptor.response && typeof _this2.interceptor.response === 'function') {
                var _resInterceptors = _this2.interceptor.response(response.data);
                if (_resInterceptors !== false) {
                  resolve(_resInterceptors);
                } else {
                  reject(response.data);
                }
              } else {
                // 如果不是返回原始数据(originalData=false)，且没有拦截器的情况下，返回纯数据给then回调
                resolve(response.data);
              }
            } else {
              // 不返回原始数据的情况下，服务器状态码不为200，modal弹框提示
              // if(response.errMsg) {
              // 	uni.showModal({
              // 		title: response.errMsg
              // 	});
              // }
              reject(response);
            }
          }
        };

        // 判断用户传递的URL是否/开头,如果不是,加上/，这里使用了uView的test.js验证库的url()方法
        options.url = _test.default.url(options.url) ? options.url : _this2.config.baseUrl + (options.url.indexOf('/') == 0 ? options.url : '/' + options.url);

        // 是否显示loading
        // 加一个是否已有timer定时器的判断，否则有两个同时请求的时候，后者会清除前者的定时器id
        // 而没有清除前者的定时器，导致前者超时，一直显示loading
        if (_this2.config.showLoading && !_this2.config.timer) {
          _this2.config.timer = setTimeout(function () {
            uni.showLoading({
              title: _this2.config.loadingText,
              mask: _this2.config.loadingMask
            });
            _this2.config.timer = null;
          }, _this2.config.loadingTime);
        }
        uni.request(options);
      });
      // .catch(res => {
      // 	// 如果返回reject()，不让其进入this.$u.post().then().catch()后面的catct()
      // 	// 因为很多人都会忘了写后面的catch()，导致报错捕获不到catch
      // 	return new Promise(()=>{});
      // })
    }
  }]);
  return Request;
}();
var _default = new Request();
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 39:
/*!**************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/deepMerge.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _deepClone = _interopRequireDefault(__webpack_require__(/*! ./deepClone */ 40));
// JS对象深度合并
function deepMerge() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = (0, _deepClone.default)(target);
  if ((0, _typeof2.default)(target) !== 'object' || (0, _typeof2.default)(source) !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if ((0, _typeof2.default)(target[prop]) !== 'object') {
        target[prop] = source[prop];
      } else {
        if ((0, _typeof2.default)(source[prop]) !== 'object') {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}
var _default = deepMerge;
exports.default = _default;

/***/ }),

/***/ 393:
/*!*********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/util/province.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var provinceData = [{
  "label": "北京市",
  "value": "11"
}, {
  "label": "天津市",
  "value": "12"
}, {
  "label": "河北省",
  "value": "13"
}, {
  "label": "山西省",
  "value": "14"
}, {
  "label": "内蒙古自治区",
  "value": "15"
}, {
  "label": "辽宁省",
  "value": "21"
}, {
  "label": "吉林省",
  "value": "22"
}, {
  "label": "黑龙江省",
  "value": "23"
}, {
  "label": "上海市",
  "value": "31"
}, {
  "label": "江苏省",
  "value": "32"
}, {
  "label": "浙江省",
  "value": "33"
}, {
  "label": "安徽省",
  "value": "34"
}, {
  "label": "福建省",
  "value": "35"
}, {
  "label": "江西省",
  "value": "36"
}, {
  "label": "山东省",
  "value": "37"
}, {
  "label": "河南省",
  "value": "41"
}, {
  "label": "湖北省",
  "value": "42"
}, {
  "label": "湖南省",
  "value": "43"
}, {
  "label": "广东省",
  "value": "44"
}, {
  "label": "广西壮族自治区",
  "value": "45"
}, {
  "label": "海南省",
  "value": "46"
}, {
  "label": "重庆市",
  "value": "50"
}, {
  "label": "四川省",
  "value": "51"
}, {
  "label": "贵州省",
  "value": "52"
}, {
  "label": "云南省",
  "value": "53"
}, {
  "label": "西藏自治区",
  "value": "54"
}, {
  "label": "陕西省",
  "value": "61"
}, {
  "label": "甘肃省",
  "value": "62"
}, {
  "label": "青海省",
  "value": "63"
}, {
  "label": "宁夏回族自治区",
  "value": "64"
}, {
  "label": "新疆维吾尔自治区",
  "value": "65"
}, {
  "label": "台湾",
  "value": "66"
}, {
  "label": "香港",
  "value": "67"
}, {
  "label": "澳门",
  "value": "68"
}];
var _default = provinceData;
exports.default = _default;

/***/ }),

/***/ 394:
/*!*****************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/util/city.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var cityData = [[{
  "label": "市辖区",
  "value": "1101"
}], [{
  "label": "市辖区",
  "value": "1201"
}], [{
  "label": "石家庄市",
  "value": "1301"
}, {
  "label": "唐山市",
  "value": "1302"
}, {
  "label": "秦皇岛市",
  "value": "1303"
}, {
  "label": "邯郸市",
  "value": "1304"
}, {
  "label": "邢台市",
  "value": "1305"
}, {
  "label": "保定市",
  "value": "1306"
}, {
  "label": "张家口市",
  "value": "1307"
}, {
  "label": "承德市",
  "value": "1308"
}, {
  "label": "沧州市",
  "value": "1309"
}, {
  "label": "廊坊市",
  "value": "1310"
}, {
  "label": "衡水市",
  "value": "1311"
}], [{
  "label": "太原市",
  "value": "1401"
}, {
  "label": "大同市",
  "value": "1402"
}, {
  "label": "阳泉市",
  "value": "1403"
}, {
  "label": "长治市",
  "value": "1404"
}, {
  "label": "晋城市",
  "value": "1405"
}, {
  "label": "朔州市",
  "value": "1406"
}, {
  "label": "晋中市",
  "value": "1407"
}, {
  "label": "运城市",
  "value": "1408"
}, {
  "label": "忻州市",
  "value": "1409"
}, {
  "label": "临汾市",
  "value": "1410"
}, {
  "label": "吕梁市",
  "value": "1411"
}], [{
  "label": "呼和浩特市",
  "value": "1501"
}, {
  "label": "包头市",
  "value": "1502"
}, {
  "label": "乌海市",
  "value": "1503"
}, {
  "label": "赤峰市",
  "value": "1504"
}, {
  "label": "通辽市",
  "value": "1505"
}, {
  "label": "鄂尔多斯市",
  "value": "1506"
}, {
  "label": "呼伦贝尔市",
  "value": "1507"
}, {
  "label": "巴彦淖尔市",
  "value": "1508"
}, {
  "label": "乌兰察布市",
  "value": "1509"
}, {
  "label": "兴安盟",
  "value": "1522"
}, {
  "label": "锡林郭勒盟",
  "value": "1525"
}, {
  "label": "阿拉善盟",
  "value": "1529"
}], [{
  "label": "沈阳市",
  "value": "2101"
}, {
  "label": "大连市",
  "value": "2102"
}, {
  "label": "鞍山市",
  "value": "2103"
}, {
  "label": "抚顺市",
  "value": "2104"
}, {
  "label": "本溪市",
  "value": "2105"
}, {
  "label": "丹东市",
  "value": "2106"
}, {
  "label": "锦州市",
  "value": "2107"
}, {
  "label": "营口市",
  "value": "2108"
}, {
  "label": "阜新市",
  "value": "2109"
}, {
  "label": "辽阳市",
  "value": "2110"
}, {
  "label": "盘锦市",
  "value": "2111"
}, {
  "label": "铁岭市",
  "value": "2112"
}, {
  "label": "朝阳市",
  "value": "2113"
}, {
  "label": "葫芦岛市",
  "value": "2114"
}], [{
  "label": "长春市",
  "value": "2201"
}, {
  "label": "吉林市",
  "value": "2202"
}, {
  "label": "四平市",
  "value": "2203"
}, {
  "label": "辽源市",
  "value": "2204"
}, {
  "label": "通化市",
  "value": "2205"
}, {
  "label": "白山市",
  "value": "2206"
}, {
  "label": "松原市",
  "value": "2207"
}, {
  "label": "白城市",
  "value": "2208"
}, {
  "label": "延边朝鲜族自治州",
  "value": "2224"
}], [{
  "label": "哈尔滨市",
  "value": "2301"
}, {
  "label": "齐齐哈尔市",
  "value": "2302"
}, {
  "label": "鸡西市",
  "value": "2303"
}, {
  "label": "鹤岗市",
  "value": "2304"
}, {
  "label": "双鸭山市",
  "value": "2305"
}, {
  "label": "大庆市",
  "value": "2306"
}, {
  "label": "伊春市",
  "value": "2307"
}, {
  "label": "佳木斯市",
  "value": "2308"
}, {
  "label": "七台河市",
  "value": "2309"
}, {
  "label": "牡丹江市",
  "value": "2310"
}, {
  "label": "黑河市",
  "value": "2311"
}, {
  "label": "绥化市",
  "value": "2312"
}, {
  "label": "大兴安岭地区",
  "value": "2327"
}], [{
  "label": "市辖区",
  "value": "3101"
}], [{
  "label": "南京市",
  "value": "3201"
}, {
  "label": "无锡市",
  "value": "3202"
}, {
  "label": "徐州市",
  "value": "3203"
}, {
  "label": "常州市",
  "value": "3204"
}, {
  "label": "苏州市",
  "value": "3205"
}, {
  "label": "南通市",
  "value": "3206"
}, {
  "label": "连云港市",
  "value": "3207"
}, {
  "label": "淮安市",
  "value": "3208"
}, {
  "label": "盐城市",
  "value": "3209"
}, {
  "label": "扬州市",
  "value": "3210"
}, {
  "label": "镇江市",
  "value": "3211"
}, {
  "label": "泰州市",
  "value": "3212"
}, {
  "label": "宿迁市",
  "value": "3213"
}], [{
  "label": "杭州市",
  "value": "3301"
}, {
  "label": "宁波市",
  "value": "3302"
}, {
  "label": "温州市",
  "value": "3303"
}, {
  "label": "嘉兴市",
  "value": "3304"
}, {
  "label": "湖州市",
  "value": "3305"
}, {
  "label": "绍兴市",
  "value": "3306"
}, {
  "label": "金华市",
  "value": "3307"
}, {
  "label": "衢州市",
  "value": "3308"
}, {
  "label": "舟山市",
  "value": "3309"
}, {
  "label": "台州市",
  "value": "3310"
}, {
  "label": "丽水市",
  "value": "3311"
}], [{
  "label": "合肥市",
  "value": "3401"
}, {
  "label": "芜湖市",
  "value": "3402"
}, {
  "label": "蚌埠市",
  "value": "3403"
}, {
  "label": "淮南市",
  "value": "3404"
}, {
  "label": "马鞍山市",
  "value": "3405"
}, {
  "label": "淮北市",
  "value": "3406"
}, {
  "label": "铜陵市",
  "value": "3407"
}, {
  "label": "安庆市",
  "value": "3408"
}, {
  "label": "黄山市",
  "value": "3410"
}, {
  "label": "滁州市",
  "value": "3411"
}, {
  "label": "阜阳市",
  "value": "3412"
}, {
  "label": "宿州市",
  "value": "3413"
}, {
  "label": "六安市",
  "value": "3415"
}, {
  "label": "亳州市",
  "value": "3416"
}, {
  "label": "池州市",
  "value": "3417"
}, {
  "label": "宣城市",
  "value": "3418"
}], [{
  "label": "福州市",
  "value": "3501"
}, {
  "label": "厦门市",
  "value": "3502"
}, {
  "label": "莆田市",
  "value": "3503"
}, {
  "label": "三明市",
  "value": "3504"
}, {
  "label": "泉州市",
  "value": "3505"
}, {
  "label": "漳州市",
  "value": "3506"
}, {
  "label": "南平市",
  "value": "3507"
}, {
  "label": "龙岩市",
  "value": "3508"
}, {
  "label": "宁德市",
  "value": "3509"
}], [{
  "label": "南昌市",
  "value": "3601"
}, {
  "label": "景德镇市",
  "value": "3602"
}, {
  "label": "萍乡市",
  "value": "3603"
}, {
  "label": "九江市",
  "value": "3604"
}, {
  "label": "新余市",
  "value": "3605"
}, {
  "label": "鹰潭市",
  "value": "3606"
}, {
  "label": "赣州市",
  "value": "3607"
}, {
  "label": "吉安市",
  "value": "3608"
}, {
  "label": "宜春市",
  "value": "3609"
}, {
  "label": "抚州市",
  "value": "3610"
}, {
  "label": "上饶市",
  "value": "3611"
}], [{
  "label": "济南市",
  "value": "3701"
}, {
  "label": "青岛市",
  "value": "3702"
}, {
  "label": "淄博市",
  "value": "3703"
}, {
  "label": "枣庄市",
  "value": "3704"
}, {
  "label": "东营市",
  "value": "3705"
}, {
  "label": "烟台市",
  "value": "3706"
}, {
  "label": "潍坊市",
  "value": "3707"
}, {
  "label": "济宁市",
  "value": "3708"
}, {
  "label": "泰安市",
  "value": "3709"
}, {
  "label": "威海市",
  "value": "3710"
}, {
  "label": "日照市",
  "value": "3711"
}, {
  "label": "莱芜市",
  "value": "3712"
}, {
  "label": "临沂市",
  "value": "3713"
}, {
  "label": "德州市",
  "value": "3714"
}, {
  "label": "聊城市",
  "value": "3715"
}, {
  "label": "滨州市",
  "value": "3716"
}, {
  "label": "菏泽市",
  "value": "3717"
}], [{
  "label": "郑州市",
  "value": "4101"
}, {
  "label": "开封市",
  "value": "4102"
}, {
  "label": "洛阳市",
  "value": "4103"
}, {
  "label": "平顶山市",
  "value": "4104"
}, {
  "label": "安阳市",
  "value": "4105"
}, {
  "label": "鹤壁市",
  "value": "4106"
}, {
  "label": "新乡市",
  "value": "4107"
}, {
  "label": "焦作市",
  "value": "4108"
}, {
  "label": "濮阳市",
  "value": "4109"
}, {
  "label": "许昌市",
  "value": "4110"
}, {
  "label": "漯河市",
  "value": "4111"
}, {
  "label": "三门峡市",
  "value": "4112"
}, {
  "label": "南阳市",
  "value": "4113"
}, {
  "label": "商丘市",
  "value": "4114"
}, {
  "label": "信阳市",
  "value": "4115"
}, {
  "label": "周口市",
  "value": "4116"
}, {
  "label": "驻马店市",
  "value": "4117"
}, {
  "label": "省直辖县级行政区划",
  "value": "4190"
}], [{
  "label": "武汉市",
  "value": "4201"
}, {
  "label": "黄石市",
  "value": "4202"
}, {
  "label": "十堰市",
  "value": "4203"
}, {
  "label": "宜昌市",
  "value": "4205"
}, {
  "label": "襄阳市",
  "value": "4206"
}, {
  "label": "鄂州市",
  "value": "4207"
}, {
  "label": "荆门市",
  "value": "4208"
}, {
  "label": "孝感市",
  "value": "4209"
}, {
  "label": "荆州市",
  "value": "4210"
}, {
  "label": "黄冈市",
  "value": "4211"
}, {
  "label": "咸宁市",
  "value": "4212"
}, {
  "label": "随州市",
  "value": "4213"
}, {
  "label": "恩施土家族苗族自治州",
  "value": "4228"
}, {
  "label": "省直辖县级行政区划",
  "value": "4290"
}], [{
  "label": "长沙市",
  "value": "4301"
}, {
  "label": "株洲市",
  "value": "4302"
}, {
  "label": "湘潭市",
  "value": "4303"
}, {
  "label": "衡阳市",
  "value": "4304"
}, {
  "label": "邵阳市",
  "value": "4305"
}, {
  "label": "岳阳市",
  "value": "4306"
}, {
  "label": "常德市",
  "value": "4307"
}, {
  "label": "张家界市",
  "value": "4308"
}, {
  "label": "益阳市",
  "value": "4309"
}, {
  "label": "郴州市",
  "value": "4310"
}, {
  "label": "永州市",
  "value": "4311"
}, {
  "label": "怀化市",
  "value": "4312"
}, {
  "label": "娄底市",
  "value": "4313"
}, {
  "label": "湘西土家族苗族自治州",
  "value": "4331"
}], [{
  "label": "广州市",
  "value": "4401"
}, {
  "label": "韶关市",
  "value": "4402"
}, {
  "label": "深圳市",
  "value": "4403"
}, {
  "label": "珠海市",
  "value": "4404"
}, {
  "label": "汕头市",
  "value": "4405"
}, {
  "label": "佛山市",
  "value": "4406"
}, {
  "label": "江门市",
  "value": "4407"
}, {
  "label": "湛江市",
  "value": "4408"
}, {
  "label": "茂名市",
  "value": "4409"
}, {
  "label": "肇庆市",
  "value": "4412"
}, {
  "label": "惠州市",
  "value": "4413"
}, {
  "label": "梅州市",
  "value": "4414"
}, {
  "label": "汕尾市",
  "value": "4415"
}, {
  "label": "河源市",
  "value": "4416"
}, {
  "label": "阳江市",
  "value": "4417"
}, {
  "label": "清远市",
  "value": "4418"
}, {
  "label": "东莞市",
  "value": "4419"
}, {
  "label": "中山市",
  "value": "4420"
}, {
  "label": "潮州市",
  "value": "4451"
}, {
  "label": "揭阳市",
  "value": "4452"
}, {
  "label": "云浮市",
  "value": "4453"
}], [{
  "label": "南宁市",
  "value": "4501"
}, {
  "label": "柳州市",
  "value": "4502"
}, {
  "label": "桂林市",
  "value": "4503"
}, {
  "label": "梧州市",
  "value": "4504"
}, {
  "label": "北海市",
  "value": "4505"
}, {
  "label": "防城港市",
  "value": "4506"
}, {
  "label": "钦州市",
  "value": "4507"
}, {
  "label": "贵港市",
  "value": "4508"
}, {
  "label": "玉林市",
  "value": "4509"
}, {
  "label": "百色市",
  "value": "4510"
}, {
  "label": "贺州市",
  "value": "4511"
}, {
  "label": "河池市",
  "value": "4512"
}, {
  "label": "来宾市",
  "value": "4513"
}, {
  "label": "崇左市",
  "value": "4514"
}], [{
  "label": "海口市",
  "value": "4601"
}, {
  "label": "三亚市",
  "value": "4602"
}, {
  "label": "三沙市",
  "value": "4603"
}, {
  "label": "儋州市",
  "value": "4604"
}, {
  "label": "省直辖县级行政区划",
  "value": "4690"
}], [{
  "label": "市辖区",
  "value": "5001"
}, {
  "label": "县",
  "value": "5002"
}], [{
  "label": "成都市",
  "value": "5101"
}, {
  "label": "自贡市",
  "value": "5103"
}, {
  "label": "攀枝花市",
  "value": "5104"
}, {
  "label": "泸州市",
  "value": "5105"
}, {
  "label": "德阳市",
  "value": "5106"
}, {
  "label": "绵阳市",
  "value": "5107"
}, {
  "label": "广元市",
  "value": "5108"
}, {
  "label": "遂宁市",
  "value": "5109"
}, {
  "label": "内江市",
  "value": "5110"
}, {
  "label": "乐山市",
  "value": "5111"
}, {
  "label": "南充市",
  "value": "5113"
}, {
  "label": "眉山市",
  "value": "5114"
}, {
  "label": "宜宾市",
  "value": "5115"
}, {
  "label": "广安市",
  "value": "5116"
}, {
  "label": "达州市",
  "value": "5117"
}, {
  "label": "雅安市",
  "value": "5118"
}, {
  "label": "巴中市",
  "value": "5119"
}, {
  "label": "资阳市",
  "value": "5120"
}, {
  "label": "阿坝藏族羌族自治州",
  "value": "5132"
}, {
  "label": "甘孜藏族自治州",
  "value": "5133"
}, {
  "label": "凉山彝族自治州",
  "value": "5134"
}], [{
  "label": "贵阳市",
  "value": "5201"
}, {
  "label": "六盘水市",
  "value": "5202"
}, {
  "label": "遵义市",
  "value": "5203"
}, {
  "label": "安顺市",
  "value": "5204"
}, {
  "label": "毕节市",
  "value": "5205"
}, {
  "label": "铜仁市",
  "value": "5206"
}, {
  "label": "黔西南布依族苗族自治州",
  "value": "5223"
}, {
  "label": "黔东南苗族侗族自治州",
  "value": "5226"
}, {
  "label": "黔南布依族苗族自治州",
  "value": "5227"
}], [{
  "label": "昆明市",
  "value": "5301"
}, {
  "label": "曲靖市",
  "value": "5303"
}, {
  "label": "玉溪市",
  "value": "5304"
}, {
  "label": "保山市",
  "value": "5305"
}, {
  "label": "昭通市",
  "value": "5306"
}, {
  "label": "丽江市",
  "value": "5307"
}, {
  "label": "普洱市",
  "value": "5308"
}, {
  "label": "临沧市",
  "value": "5309"
}, {
  "label": "楚雄彝族自治州",
  "value": "5323"
}, {
  "label": "红河哈尼族彝族自治州",
  "value": "5325"
}, {
  "label": "文山壮族苗族自治州",
  "value": "5326"
}, {
  "label": "西双版纳傣族自治州",
  "value": "5328"
}, {
  "label": "大理白族自治州",
  "value": "5329"
}, {
  "label": "德宏傣族景颇族自治州",
  "value": "5331"
}, {
  "label": "怒江傈僳族自治州",
  "value": "5333"
}, {
  "label": "迪庆藏族自治州",
  "value": "5334"
}], [{
  "label": "拉萨市",
  "value": "5401"
}, {
  "label": "日喀则市",
  "value": "5402"
}, {
  "label": "昌都市",
  "value": "5403"
}, {
  "label": "林芝市",
  "value": "5404"
}, {
  "label": "山南市",
  "value": "5405"
}, {
  "label": "那曲地区",
  "value": "5424"
}, {
  "label": "阿里地区",
  "value": "5425"
}], [{
  "label": "西安市",
  "value": "6101"
}, {
  "label": "铜川市",
  "value": "6102"
}, {
  "label": "宝鸡市",
  "value": "6103"
}, {
  "label": "咸阳市",
  "value": "6104"
}, {
  "label": "渭南市",
  "value": "6105"
}, {
  "label": "延安市",
  "value": "6106"
}, {
  "label": "汉中市",
  "value": "6107"
}, {
  "label": "榆林市",
  "value": "6108"
}, {
  "label": "安康市",
  "value": "6109"
}, {
  "label": "商洛市",
  "value": "6110"
}], [{
  "label": "兰州市",
  "value": "6201"
}, {
  "label": "嘉峪关市",
  "value": "6202"
}, {
  "label": "金昌市",
  "value": "6203"
}, {
  "label": "白银市",
  "value": "6204"
}, {
  "label": "天水市",
  "value": "6205"
}, {
  "label": "武威市",
  "value": "6206"
}, {
  "label": "张掖市",
  "value": "6207"
}, {
  "label": "平凉市",
  "value": "6208"
}, {
  "label": "酒泉市",
  "value": "6209"
}, {
  "label": "庆阳市",
  "value": "6210"
}, {
  "label": "定西市",
  "value": "6211"
}, {
  "label": "陇南市",
  "value": "6212"
}, {
  "label": "临夏回族自治州",
  "value": "6229"
}, {
  "label": "甘南藏族自治州",
  "value": "6230"
}], [{
  "label": "西宁市",
  "value": "6301"
}, {
  "label": "海东市",
  "value": "6302"
}, {
  "label": "海北藏族自治州",
  "value": "6322"
}, {
  "label": "黄南藏族自治州",
  "value": "6323"
}, {
  "label": "海南藏族自治州",
  "value": "6325"
}, {
  "label": "果洛藏族自治州",
  "value": "6326"
}, {
  "label": "玉树藏族自治州",
  "value": "6327"
}, {
  "label": "海西蒙古族藏族自治州",
  "value": "6328"
}], [{
  "label": "银川市",
  "value": "6401"
}, {
  "label": "石嘴山市",
  "value": "6402"
}, {
  "label": "吴忠市",
  "value": "6403"
}, {
  "label": "固原市",
  "value": "6404"
}, {
  "label": "中卫市",
  "value": "6405"
}], [{
  "label": "乌鲁木齐市",
  "value": "6501"
}, {
  "label": "克拉玛依市",
  "value": "6502"
}, {
  "label": "吐鲁番市",
  "value": "6504"
}, {
  "label": "哈密市",
  "value": "6505"
}, {
  "label": "昌吉回族自治州",
  "value": "6523"
}, {
  "label": "博尔塔拉蒙古自治州",
  "value": "6527"
}, {
  "label": "巴音郭楞蒙古自治州",
  "value": "6528"
}, {
  "label": "阿克苏地区",
  "value": "6529"
}, {
  "label": "克孜勒苏柯尔克孜自治州",
  "value": "6530"
}, {
  "label": "喀什地区",
  "value": "6531"
}, {
  "label": "和田地区",
  "value": "6532"
}, {
  "label": "伊犁哈萨克自治州",
  "value": "6540"
}, {
  "label": "塔城地区",
  "value": "6542"
}, {
  "label": "阿勒泰地区",
  "value": "6543"
}, {
  "label": "自治区直辖县级行政区划",
  "value": "6590"
}], [{
  "label": "台北",
  "value": "6601"
}, {
  "label": "高雄",
  "value": "6602"
}, {
  "label": "基隆",
  "value": "6603"
}, {
  "label": "台中",
  "value": "6604"
}, {
  "label": "台南",
  "value": "6605"
}, {
  "label": "新竹",
  "value": "6606"
}, {
  "label": "嘉义",
  "value": "6607"
}, {
  "label": "宜兰",
  "value": "6608"
}, {
  "label": "桃园",
  "value": "6609"
}, {
  "label": "苗栗",
  "value": "6610"
}, {
  "label": "彰化",
  "value": "6611"
}, {
  "label": "南投",
  "value": "6612"
}, {
  "label": "云林",
  "value": "6613"
}, {
  "label": "屏东",
  "value": "6614"
}, {
  "label": "台东",
  "value": "6615"
}, {
  "label": "花莲",
  "value": "6616"
}, {
  "label": "澎湖",
  "value": "6617"
}], [{
  "label": "香港岛",
  "value": "6701"
}, {
  "label": "九龙",
  "value": "6702"
}, {
  "label": "新界",
  "value": "6703"
}], [{
  "label": "澳门半岛",
  "value": "6801"
}, {
  "label": "氹仔岛",
  "value": "6802"
}, {
  "label": "路环岛",
  "value": "6803"
}, {
  "label": "路氹城",
  "value": "6804"
}]];
var _default = cityData;
exports.default = _default;

/***/ }),

/***/ 395:
/*!*****************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/util/area.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var areaData = [[[{
  "label": "东城区",
  "value": "110101"
}, {
  "label": "西城区",
  "value": "110102"
}, {
  "label": "朝阳区",
  "value": "110105"
}, {
  "label": "丰台区",
  "value": "110106"
}, {
  "label": "石景山区",
  "value": "110107"
}, {
  "label": "海淀区",
  "value": "110108"
}, {
  "label": "门头沟区",
  "value": "110109"
}, {
  "label": "房山区",
  "value": "110111"
}, {
  "label": "通州区",
  "value": "110112"
}, {
  "label": "顺义区",
  "value": "110113"
}, {
  "label": "昌平区",
  "value": "110114"
}, {
  "label": "大兴区",
  "value": "110115"
}, {
  "label": "怀柔区",
  "value": "110116"
}, {
  "label": "平谷区",
  "value": "110117"
}, {
  "label": "密云区",
  "value": "110118"
}, {
  "label": "延庆区",
  "value": "110119"
}]], [[{
  "label": "和平区",
  "value": "120101"
}, {
  "label": "河东区",
  "value": "120102"
}, {
  "label": "河西区",
  "value": "120103"
}, {
  "label": "南开区",
  "value": "120104"
}, {
  "label": "河北区",
  "value": "120105"
}, {
  "label": "红桥区",
  "value": "120106"
}, {
  "label": "东丽区",
  "value": "120110"
}, {
  "label": "西青区",
  "value": "120111"
}, {
  "label": "津南区",
  "value": "120112"
}, {
  "label": "北辰区",
  "value": "120113"
}, {
  "label": "武清区",
  "value": "120114"
}, {
  "label": "宝坻区",
  "value": "120115"
}, {
  "label": "滨海新区",
  "value": "120116"
}, {
  "label": "宁河区",
  "value": "120117"
}, {
  "label": "静海区",
  "value": "120118"
}, {
  "label": "蓟州区",
  "value": "120119"
}]], [[{
  "label": "长安区",
  "value": "130102"
}, {
  "label": "桥西区",
  "value": "130104"
}, {
  "label": "新华区",
  "value": "130105"
}, {
  "label": "井陉矿区",
  "value": "130107"
}, {
  "label": "裕华区",
  "value": "130108"
}, {
  "label": "藁城区",
  "value": "130109"
}, {
  "label": "鹿泉区",
  "value": "130110"
}, {
  "label": "栾城区",
  "value": "130111"
}, {
  "label": "井陉县",
  "value": "130121"
}, {
  "label": "正定县",
  "value": "130123"
}, {
  "label": "行唐县",
  "value": "130125"
}, {
  "label": "灵寿县",
  "value": "130126"
}, {
  "label": "高邑县",
  "value": "130127"
}, {
  "label": "深泽县",
  "value": "130128"
}, {
  "label": "赞皇县",
  "value": "130129"
}, {
  "label": "无极县",
  "value": "130130"
}, {
  "label": "平山县",
  "value": "130131"
}, {
  "label": "元氏县",
  "value": "130132"
}, {
  "label": "赵县",
  "value": "130133"
}, {
  "label": "石家庄高新技术产业开发区",
  "value": "130171"
}, {
  "label": "石家庄循环化工园区",
  "value": "130172"
}, {
  "label": "辛集市",
  "value": "130181"
}, {
  "label": "晋州市",
  "value": "130183"
}, {
  "label": "新乐市",
  "value": "130184"
}], [{
  "label": "路南区",
  "value": "130202"
}, {
  "label": "路北区",
  "value": "130203"
}, {
  "label": "古冶区",
  "value": "130204"
}, {
  "label": "开平区",
  "value": "130205"
}, {
  "label": "丰南区",
  "value": "130207"
}, {
  "label": "丰润区",
  "value": "130208"
}, {
  "label": "曹妃甸区",
  "value": "130209"
}, {
  "label": "滦县",
  "value": "130223"
}, {
  "label": "滦南县",
  "value": "130224"
}, {
  "label": "乐亭县",
  "value": "130225"
}, {
  "label": "迁西县",
  "value": "130227"
}, {
  "label": "玉田县",
  "value": "130229"
}, {
  "label": "唐山市芦台经济技术开发区",
  "value": "130271"
}, {
  "label": "唐山市汉沽管理区",
  "value": "130272"
}, {
  "label": "唐山高新技术产业开发区",
  "value": "130273"
}, {
  "label": "河北唐山海港经济开发区",
  "value": "130274"
}, {
  "label": "遵化市",
  "value": "130281"
}, {
  "label": "迁安市",
  "value": "130283"
}], [{
  "label": "海港区",
  "value": "130302"
}, {
  "label": "山海关区",
  "value": "130303"
}, {
  "label": "北戴河区",
  "value": "130304"
}, {
  "label": "抚宁区",
  "value": "130306"
}, {
  "label": "青龙满族自治县",
  "value": "130321"
}, {
  "label": "昌黎县",
  "value": "130322"
}, {
  "label": "卢龙县",
  "value": "130324"
}, {
  "label": "秦皇岛市经济技术开发区",
  "value": "130371"
}, {
  "label": "北戴河新区",
  "value": "130372"
}], [{
  "label": "邯山区",
  "value": "130402"
}, {
  "label": "丛台区",
  "value": "130403"
}, {
  "label": "复兴区",
  "value": "130404"
}, {
  "label": "峰峰矿区",
  "value": "130406"
}, {
  "label": "肥乡区",
  "value": "130407"
}, {
  "label": "永年区",
  "value": "130408"
}, {
  "label": "临漳县",
  "value": "130423"
}, {
  "label": "成安县",
  "value": "130424"
}, {
  "label": "大名县",
  "value": "130425"
}, {
  "label": "涉县",
  "value": "130426"
}, {
  "label": "磁县",
  "value": "130427"
}, {
  "label": "邱县",
  "value": "130430"
}, {
  "label": "鸡泽县",
  "value": "130431"
}, {
  "label": "广平县",
  "value": "130432"
}, {
  "label": "馆陶县",
  "value": "130433"
}, {
  "label": "魏县",
  "value": "130434"
}, {
  "label": "曲周县",
  "value": "130435"
}, {
  "label": "邯郸经济技术开发区",
  "value": "130471"
}, {
  "label": "邯郸冀南新区",
  "value": "130473"
}, {
  "label": "武安市",
  "value": "130481"
}], [{
  "label": "桥东区",
  "value": "130502"
}, {
  "label": "桥西区",
  "value": "130503"
}, {
  "label": "邢台县",
  "value": "130521"
}, {
  "label": "临城县",
  "value": "130522"
}, {
  "label": "内丘县",
  "value": "130523"
}, {
  "label": "柏乡县",
  "value": "130524"
}, {
  "label": "隆尧县",
  "value": "130525"
}, {
  "label": "任县",
  "value": "130526"
}, {
  "label": "南和县",
  "value": "130527"
}, {
  "label": "宁晋县",
  "value": "130528"
}, {
  "label": "巨鹿县",
  "value": "130529"
}, {
  "label": "新河县",
  "value": "130530"
}, {
  "label": "广宗县",
  "value": "130531"
}, {
  "label": "平乡县",
  "value": "130532"
}, {
  "label": "威县",
  "value": "130533"
}, {
  "label": "清河县",
  "value": "130534"
}, {
  "label": "临西县",
  "value": "130535"
}, {
  "label": "河北邢台经济开发区",
  "value": "130571"
}, {
  "label": "南宫市",
  "value": "130581"
}, {
  "label": "沙河市",
  "value": "130582"
}], [{
  "label": "竞秀区",
  "value": "130602"
}, {
  "label": "莲池区",
  "value": "130606"
}, {
  "label": "满城区",
  "value": "130607"
}, {
  "label": "清苑区",
  "value": "130608"
}, {
  "label": "徐水区",
  "value": "130609"
}, {
  "label": "涞水县",
  "value": "130623"
}, {
  "label": "阜平县",
  "value": "130624"
}, {
  "label": "定兴县",
  "value": "130626"
}, {
  "label": "唐县",
  "value": "130627"
}, {
  "label": "高阳县",
  "value": "130628"
}, {
  "label": "容城县",
  "value": "130629"
}, {
  "label": "涞源县",
  "value": "130630"
}, {
  "label": "望都县",
  "value": "130631"
}, {
  "label": "安新县",
  "value": "130632"
}, {
  "label": "易县",
  "value": "130633"
}, {
  "label": "曲阳县",
  "value": "130634"
}, {
  "label": "蠡县",
  "value": "130635"
}, {
  "label": "顺平县",
  "value": "130636"
}, {
  "label": "博野县",
  "value": "130637"
}, {
  "label": "雄县",
  "value": "130638"
}, {
  "label": "保定高新技术产业开发区",
  "value": "130671"
}, {
  "label": "保定白沟新城",
  "value": "130672"
}, {
  "label": "涿州市",
  "value": "130681"
}, {
  "label": "定州市",
  "value": "130682"
}, {
  "label": "安国市",
  "value": "130683"
}, {
  "label": "高碑店市",
  "value": "130684"
}], [{
  "label": "桥东区",
  "value": "130702"
}, {
  "label": "桥西区",
  "value": "130703"
}, {
  "label": "宣化区",
  "value": "130705"
}, {
  "label": "下花园区",
  "value": "130706"
}, {
  "label": "万全区",
  "value": "130708"
}, {
  "label": "崇礼区",
  "value": "130709"
}, {
  "label": "张北县",
  "value": "130722"
}, {
  "label": "康保县",
  "value": "130723"
}, {
  "label": "沽源县",
  "value": "130724"
}, {
  "label": "尚义县",
  "value": "130725"
}, {
  "label": "蔚县",
  "value": "130726"
}, {
  "label": "阳原县",
  "value": "130727"
}, {
  "label": "怀安县",
  "value": "130728"
}, {
  "label": "怀来县",
  "value": "130730"
}, {
  "label": "涿鹿县",
  "value": "130731"
}, {
  "label": "赤城县",
  "value": "130732"
}, {
  "label": "张家口市高新技术产业开发区",
  "value": "130771"
}, {
  "label": "张家口市察北管理区",
  "value": "130772"
}, {
  "label": "张家口市塞北管理区",
  "value": "130773"
}], [{
  "label": "双桥区",
  "value": "130802"
}, {
  "label": "双滦区",
  "value": "130803"
}, {
  "label": "鹰手营子矿区",
  "value": "130804"
}, {
  "label": "承德县",
  "value": "130821"
}, {
  "label": "兴隆县",
  "value": "130822"
}, {
  "label": "滦平县",
  "value": "130824"
}, {
  "label": "隆化县",
  "value": "130825"
}, {
  "label": "丰宁满族自治县",
  "value": "130826"
}, {
  "label": "宽城满族自治县",
  "value": "130827"
}, {
  "label": "围场满族蒙古族自治县",
  "value": "130828"
}, {
  "label": "承德高新技术产业开发区",
  "value": "130871"
}, {
  "label": "平泉市",
  "value": "130881"
}], [{
  "label": "新华区",
  "value": "130902"
}, {
  "label": "运河区",
  "value": "130903"
}, {
  "label": "沧县",
  "value": "130921"
}, {
  "label": "青县",
  "value": "130922"
}, {
  "label": "东光县",
  "value": "130923"
}, {
  "label": "海兴县",
  "value": "130924"
}, {
  "label": "盐山县",
  "value": "130925"
}, {
  "label": "肃宁县",
  "value": "130926"
}, {
  "label": "南皮县",
  "value": "130927"
}, {
  "label": "吴桥县",
  "value": "130928"
}, {
  "label": "献县",
  "value": "130929"
}, {
  "label": "孟村回族自治县",
  "value": "130930"
}, {
  "label": "河北沧州经济开发区",
  "value": "130971"
}, {
  "label": "沧州高新技术产业开发区",
  "value": "130972"
}, {
  "label": "沧州渤海新区",
  "value": "130973"
}, {
  "label": "泊头市",
  "value": "130981"
}, {
  "label": "任丘市",
  "value": "130982"
}, {
  "label": "黄骅市",
  "value": "130983"
}, {
  "label": "河间市",
  "value": "130984"
}], [{
  "label": "安次区",
  "value": "131002"
}, {
  "label": "广阳区",
  "value": "131003"
}, {
  "label": "固安县",
  "value": "131022"
}, {
  "label": "永清县",
  "value": "131023"
}, {
  "label": "香河县",
  "value": "131024"
}, {
  "label": "大城县",
  "value": "131025"
}, {
  "label": "文安县",
  "value": "131026"
}, {
  "label": "大厂回族自治县",
  "value": "131028"
}, {
  "label": "廊坊经济技术开发区",
  "value": "131071"
}, {
  "label": "霸州市",
  "value": "131081"
}, {
  "label": "三河市",
  "value": "131082"
}], [{
  "label": "桃城区",
  "value": "131102"
}, {
  "label": "冀州区",
  "value": "131103"
}, {
  "label": "枣强县",
  "value": "131121"
}, {
  "label": "武邑县",
  "value": "131122"
}, {
  "label": "武强县",
  "value": "131123"
}, {
  "label": "饶阳县",
  "value": "131124"
}, {
  "label": "安平县",
  "value": "131125"
}, {
  "label": "故城县",
  "value": "131126"
}, {
  "label": "景县",
  "value": "131127"
}, {
  "label": "阜城县",
  "value": "131128"
}, {
  "label": "河北衡水经济开发区",
  "value": "131171"
}, {
  "label": "衡水滨湖新区",
  "value": "131172"
}, {
  "label": "深州市",
  "value": "131182"
}]], [[{
  "label": "小店区",
  "value": "140105"
}, {
  "label": "迎泽区",
  "value": "140106"
}, {
  "label": "杏花岭区",
  "value": "140107"
}, {
  "label": "尖草坪区",
  "value": "140108"
}, {
  "label": "万柏林区",
  "value": "140109"
}, {
  "label": "晋源区",
  "value": "140110"
}, {
  "label": "清徐县",
  "value": "140121"
}, {
  "label": "阳曲县",
  "value": "140122"
}, {
  "label": "娄烦县",
  "value": "140123"
}, {
  "label": "山西转型综合改革示范区",
  "value": "140171"
}, {
  "label": "古交市",
  "value": "140181"
}], [{
  "label": "城区",
  "value": "140202"
}, {
  "label": "矿区",
  "value": "140203"
}, {
  "label": "南郊区",
  "value": "140211"
}, {
  "label": "新荣区",
  "value": "140212"
}, {
  "label": "阳高县",
  "value": "140221"
}, {
  "label": "天镇县",
  "value": "140222"
}, {
  "label": "广灵县",
  "value": "140223"
}, {
  "label": "灵丘县",
  "value": "140224"
}, {
  "label": "浑源县",
  "value": "140225"
}, {
  "label": "左云县",
  "value": "140226"
}, {
  "label": "大同县",
  "value": "140227"
}, {
  "label": "山西大同经济开发区",
  "value": "140271"
}], [{
  "label": "城区",
  "value": "140302"
}, {
  "label": "矿区",
  "value": "140303"
}, {
  "label": "郊区",
  "value": "140311"
}, {
  "label": "平定县",
  "value": "140321"
}, {
  "label": "盂县",
  "value": "140322"
}, {
  "label": "山西阳泉经济开发区",
  "value": "140371"
}], [{
  "label": "城区",
  "value": "140402"
}, {
  "label": "郊区",
  "value": "140411"
}, {
  "label": "长治县",
  "value": "140421"
}, {
  "label": "襄垣县",
  "value": "140423"
}, {
  "label": "屯留县",
  "value": "140424"
}, {
  "label": "平顺县",
  "value": "140425"
}, {
  "label": "黎城县",
  "value": "140426"
}, {
  "label": "壶关县",
  "value": "140427"
}, {
  "label": "长子县",
  "value": "140428"
}, {
  "label": "武乡县",
  "value": "140429"
}, {
  "label": "沁县",
  "value": "140430"
}, {
  "label": "沁源县",
  "value": "140431"
}, {
  "label": "山西长治高新技术产业园区",
  "value": "140471"
}, {
  "label": "潞城市",
  "value": "140481"
}], [{
  "label": "城区",
  "value": "140502"
}, {
  "label": "沁水县",
  "value": "140521"
}, {
  "label": "阳城县",
  "value": "140522"
}, {
  "label": "陵川县",
  "value": "140524"
}, {
  "label": "泽州县",
  "value": "140525"
}, {
  "label": "高平市",
  "value": "140581"
}], [{
  "label": "朔城区",
  "value": "140602"
}, {
  "label": "平鲁区",
  "value": "140603"
}, {
  "label": "山阴县",
  "value": "140621"
}, {
  "label": "应县",
  "value": "140622"
}, {
  "label": "右玉县",
  "value": "140623"
}, {
  "label": "怀仁县",
  "value": "140624"
}, {
  "label": "山西朔州经济开发区",
  "value": "140671"
}], [{
  "label": "榆次区",
  "value": "140702"
}, {
  "label": "榆社县",
  "value": "140721"
}, {
  "label": "左权县",
  "value": "140722"
}, {
  "label": "和顺县",
  "value": "140723"
}, {
  "label": "昔阳县",
  "value": "140724"
}, {
  "label": "寿阳县",
  "value": "140725"
}, {
  "label": "太谷县",
  "value": "140726"
}, {
  "label": "祁县",
  "value": "140727"
}, {
  "label": "平遥县",
  "value": "140728"
}, {
  "label": "灵石县",
  "value": "140729"
}, {
  "label": "介休市",
  "value": "140781"
}], [{
  "label": "盐湖区",
  "value": "140802"
}, {
  "label": "临猗县",
  "value": "140821"
}, {
  "label": "万荣县",
  "value": "140822"
}, {
  "label": "闻喜县",
  "value": "140823"
}, {
  "label": "稷山县",
  "value": "140824"
}, {
  "label": "新绛县",
  "value": "140825"
}, {
  "label": "绛县",
  "value": "140826"
}, {
  "label": "垣曲县",
  "value": "140827"
}, {
  "label": "夏县",
  "value": "140828"
}, {
  "label": "平陆县",
  "value": "140829"
}, {
  "label": "芮城县",
  "value": "140830"
}, {
  "label": "永济市",
  "value": "140881"
}, {
  "label": "河津市",
  "value": "140882"
}], [{
  "label": "忻府区",
  "value": "140902"
}, {
  "label": "定襄县",
  "value": "140921"
}, {
  "label": "五台县",
  "value": "140922"
}, {
  "label": "代县",
  "value": "140923"
}, {
  "label": "繁峙县",
  "value": "140924"
}, {
  "label": "宁武县",
  "value": "140925"
}, {
  "label": "静乐县",
  "value": "140926"
}, {
  "label": "神池县",
  "value": "140927"
}, {
  "label": "五寨县",
  "value": "140928"
}, {
  "label": "岢岚县",
  "value": "140929"
}, {
  "label": "河曲县",
  "value": "140930"
}, {
  "label": "保德县",
  "value": "140931"
}, {
  "label": "偏关县",
  "value": "140932"
}, {
  "label": "五台山风景名胜区",
  "value": "140971"
}, {
  "label": "原平市",
  "value": "140981"
}], [{
  "label": "尧都区",
  "value": "141002"
}, {
  "label": "曲沃县",
  "value": "141021"
}, {
  "label": "翼城县",
  "value": "141022"
}, {
  "label": "襄汾县",
  "value": "141023"
}, {
  "label": "洪洞县",
  "value": "141024"
}, {
  "label": "古县",
  "value": "141025"
}, {
  "label": "安泽县",
  "value": "141026"
}, {
  "label": "浮山县",
  "value": "141027"
}, {
  "label": "吉县",
  "value": "141028"
}, {
  "label": "乡宁县",
  "value": "141029"
}, {
  "label": "大宁县",
  "value": "141030"
}, {
  "label": "隰县",
  "value": "141031"
}, {
  "label": "永和县",
  "value": "141032"
}, {
  "label": "蒲县",
  "value": "141033"
}, {
  "label": "汾西县",
  "value": "141034"
}, {
  "label": "侯马市",
  "value": "141081"
}, {
  "label": "霍州市",
  "value": "141082"
}], [{
  "label": "离石区",
  "value": "141102"
}, {
  "label": "文水县",
  "value": "141121"
}, {
  "label": "交城县",
  "value": "141122"
}, {
  "label": "兴县",
  "value": "141123"
}, {
  "label": "临县",
  "value": "141124"
}, {
  "label": "柳林县",
  "value": "141125"
}, {
  "label": "石楼县",
  "value": "141126"
}, {
  "label": "岚县",
  "value": "141127"
}, {
  "label": "方山县",
  "value": "141128"
}, {
  "label": "中阳县",
  "value": "141129"
}, {
  "label": "交口县",
  "value": "141130"
}, {
  "label": "孝义市",
  "value": "141181"
}, {
  "label": "汾阳市",
  "value": "141182"
}]], [[{
  "label": "新城区",
  "value": "150102"
}, {
  "label": "回民区",
  "value": "150103"
}, {
  "label": "玉泉区",
  "value": "150104"
}, {
  "label": "赛罕区",
  "value": "150105"
}, {
  "label": "土默特左旗",
  "value": "150121"
}, {
  "label": "托克托县",
  "value": "150122"
}, {
  "label": "和林格尔县",
  "value": "150123"
}, {
  "label": "清水河县",
  "value": "150124"
}, {
  "label": "武川县",
  "value": "150125"
}, {
  "label": "呼和浩特金海工业园区",
  "value": "150171"
}, {
  "label": "呼和浩特经济技术开发区",
  "value": "150172"
}], [{
  "label": "东河区",
  "value": "150202"
}, {
  "label": "昆都仑区",
  "value": "150203"
}, {
  "label": "青山区",
  "value": "150204"
}, {
  "label": "石拐区",
  "value": "150205"
}, {
  "label": "白云鄂博矿区",
  "value": "150206"
}, {
  "label": "九原区",
  "value": "150207"
}, {
  "label": "土默特右旗",
  "value": "150221"
}, {
  "label": "固阳县",
  "value": "150222"
}, {
  "label": "达尔罕茂明安联合旗",
  "value": "150223"
}, {
  "label": "包头稀土高新技术产业开发区",
  "value": "150271"
}], [{
  "label": "海勃湾区",
  "value": "150302"
}, {
  "label": "海南区",
  "value": "150303"
}, {
  "label": "乌达区",
  "value": "150304"
}], [{
  "label": "红山区",
  "value": "150402"
}, {
  "label": "元宝山区",
  "value": "150403"
}, {
  "label": "松山区",
  "value": "150404"
}, {
  "label": "阿鲁科尔沁旗",
  "value": "150421"
}, {
  "label": "巴林左旗",
  "value": "150422"
}, {
  "label": "巴林右旗",
  "value": "150423"
}, {
  "label": "林西县",
  "value": "150424"
}, {
  "label": "克什克腾旗",
  "value": "150425"
}, {
  "label": "翁牛特旗",
  "value": "150426"
}, {
  "label": "喀喇沁旗",
  "value": "150428"
}, {
  "label": "宁城县",
  "value": "150429"
}, {
  "label": "敖汉旗",
  "value": "150430"
}], [{
  "label": "科尔沁区",
  "value": "150502"
}, {
  "label": "科尔沁左翼中旗",
  "value": "150521"
}, {
  "label": "科尔沁左翼后旗",
  "value": "150522"
}, {
  "label": "开鲁县",
  "value": "150523"
}, {
  "label": "库伦旗",
  "value": "150524"
}, {
  "label": "奈曼旗",
  "value": "150525"
}, {
  "label": "扎鲁特旗",
  "value": "150526"
}, {
  "label": "通辽经济技术开发区",
  "value": "150571"
}, {
  "label": "霍林郭勒市",
  "value": "150581"
}], [{
  "label": "东胜区",
  "value": "150602"
}, {
  "label": "康巴什区",
  "value": "150603"
}, {
  "label": "达拉特旗",
  "value": "150621"
}, {
  "label": "准格尔旗",
  "value": "150622"
}, {
  "label": "鄂托克前旗",
  "value": "150623"
}, {
  "label": "鄂托克旗",
  "value": "150624"
}, {
  "label": "杭锦旗",
  "value": "150625"
}, {
  "label": "乌审旗",
  "value": "150626"
}, {
  "label": "伊金霍洛旗",
  "value": "150627"
}], [{
  "label": "海拉尔区",
  "value": "150702"
}, {
  "label": "扎赉诺尔区",
  "value": "150703"
}, {
  "label": "阿荣旗",
  "value": "150721"
}, {
  "label": "莫力达瓦达斡尔族自治旗",
  "value": "150722"
}, {
  "label": "鄂伦春自治旗",
  "value": "150723"
}, {
  "label": "鄂温克族自治旗",
  "value": "150724"
}, {
  "label": "陈巴尔虎旗",
  "value": "150725"
}, {
  "label": "新巴尔虎左旗",
  "value": "150726"
}, {
  "label": "新巴尔虎右旗",
  "value": "150727"
}, {
  "label": "满洲里市",
  "value": "150781"
}, {
  "label": "牙克石市",
  "value": "150782"
}, {
  "label": "扎兰屯市",
  "value": "150783"
}, {
  "label": "额尔古纳市",
  "value": "150784"
}, {
  "label": "根河市",
  "value": "150785"
}], [{
  "label": "临河区",
  "value": "150802"
}, {
  "label": "五原县",
  "value": "150821"
}, {
  "label": "磴口县",
  "value": "150822"
}, {
  "label": "乌拉特前旗",
  "value": "150823"
}, {
  "label": "乌拉特中旗",
  "value": "150824"
}, {
  "label": "乌拉特后旗",
  "value": "150825"
}, {
  "label": "杭锦后旗",
  "value": "150826"
}], [{
  "label": "集宁区",
  "value": "150902"
}, {
  "label": "卓资县",
  "value": "150921"
}, {
  "label": "化德县",
  "value": "150922"
}, {
  "label": "商都县",
  "value": "150923"
}, {
  "label": "兴和县",
  "value": "150924"
}, {
  "label": "凉城县",
  "value": "150925"
}, {
  "label": "察哈尔右翼前旗",
  "value": "150926"
}, {
  "label": "察哈尔右翼中旗",
  "value": "150927"
}, {
  "label": "察哈尔右翼后旗",
  "value": "150928"
}, {
  "label": "四子王旗",
  "value": "150929"
}, {
  "label": "丰镇市",
  "value": "150981"
}], [{
  "label": "乌兰浩特市",
  "value": "152201"
}, {
  "label": "阿尔山市",
  "value": "152202"
}, {
  "label": "科尔沁右翼前旗",
  "value": "152221"
}, {
  "label": "科尔沁右翼中旗",
  "value": "152222"
}, {
  "label": "扎赉特旗",
  "value": "152223"
}, {
  "label": "突泉县",
  "value": "152224"
}], [{
  "label": "二连浩特市",
  "value": "152501"
}, {
  "label": "锡林浩特市",
  "value": "152502"
}, {
  "label": "阿巴嘎旗",
  "value": "152522"
}, {
  "label": "苏尼特左旗",
  "value": "152523"
}, {
  "label": "苏尼特右旗",
  "value": "152524"
}, {
  "label": "东乌珠穆沁旗",
  "value": "152525"
}, {
  "label": "西乌珠穆沁旗",
  "value": "152526"
}, {
  "label": "太仆寺旗",
  "value": "152527"
}, {
  "label": "镶黄旗",
  "value": "152528"
}, {
  "label": "正镶白旗",
  "value": "152529"
}, {
  "label": "正蓝旗",
  "value": "152530"
}, {
  "label": "多伦县",
  "value": "152531"
}, {
  "label": "乌拉盖管委会",
  "value": "152571"
}], [{
  "label": "阿拉善左旗",
  "value": "152921"
}, {
  "label": "阿拉善右旗",
  "value": "152922"
}, {
  "label": "额济纳旗",
  "value": "152923"
}, {
  "label": "内蒙古阿拉善经济开发区",
  "value": "152971"
}]], [[{
  "label": "和平区",
  "value": "210102"
}, {
  "label": "沈河区",
  "value": "210103"
}, {
  "label": "大东区",
  "value": "210104"
}, {
  "label": "皇姑区",
  "value": "210105"
}, {
  "label": "铁西区",
  "value": "210106"
}, {
  "label": "苏家屯区",
  "value": "210111"
}, {
  "label": "浑南区",
  "value": "210112"
}, {
  "label": "沈北新区",
  "value": "210113"
}, {
  "label": "于洪区",
  "value": "210114"
}, {
  "label": "辽中区",
  "value": "210115"
}, {
  "label": "康平县",
  "value": "210123"
}, {
  "label": "法库县",
  "value": "210124"
}, {
  "label": "新民市",
  "value": "210181"
}], [{
  "label": "中山区",
  "value": "210202"
}, {
  "label": "西岗区",
  "value": "210203"
}, {
  "label": "沙河口区",
  "value": "210204"
}, {
  "label": "甘井子区",
  "value": "210211"
}, {
  "label": "旅顺口区",
  "value": "210212"
}, {
  "label": "金州区",
  "value": "210213"
}, {
  "label": "普兰店区",
  "value": "210214"
}, {
  "label": "长海县",
  "value": "210224"
}, {
  "label": "瓦房店市",
  "value": "210281"
}, {
  "label": "庄河市",
  "value": "210283"
}], [{
  "label": "铁东区",
  "value": "210302"
}, {
  "label": "铁西区",
  "value": "210303"
}, {
  "label": "立山区",
  "value": "210304"
}, {
  "label": "千山区",
  "value": "210311"
}, {
  "label": "台安县",
  "value": "210321"
}, {
  "label": "岫岩满族自治县",
  "value": "210323"
}, {
  "label": "海城市",
  "value": "210381"
}], [{
  "label": "新抚区",
  "value": "210402"
}, {
  "label": "东洲区",
  "value": "210403"
}, {
  "label": "望花区",
  "value": "210404"
}, {
  "label": "顺城区",
  "value": "210411"
}, {
  "label": "抚顺县",
  "value": "210421"
}, {
  "label": "新宾满族自治县",
  "value": "210422"
}, {
  "label": "清原满族自治县",
  "value": "210423"
}], [{
  "label": "平山区",
  "value": "210502"
}, {
  "label": "溪湖区",
  "value": "210503"
}, {
  "label": "明山区",
  "value": "210504"
}, {
  "label": "南芬区",
  "value": "210505"
}, {
  "label": "本溪满族自治县",
  "value": "210521"
}, {
  "label": "桓仁满族自治县",
  "value": "210522"
}], [{
  "label": "元宝区",
  "value": "210602"
}, {
  "label": "振兴区",
  "value": "210603"
}, {
  "label": "振安区",
  "value": "210604"
}, {
  "label": "宽甸满族自治县",
  "value": "210624"
}, {
  "label": "东港市",
  "value": "210681"
}, {
  "label": "凤城市",
  "value": "210682"
}], [{
  "label": "古塔区",
  "value": "210702"
}, {
  "label": "凌河区",
  "value": "210703"
}, {
  "label": "太和区",
  "value": "210711"
}, {
  "label": "黑山县",
  "value": "210726"
}, {
  "label": "义县",
  "value": "210727"
}, {
  "label": "凌海市",
  "value": "210781"
}, {
  "label": "北镇市",
  "value": "210782"
}], [{
  "label": "站前区",
  "value": "210802"
}, {
  "label": "西市区",
  "value": "210803"
}, {
  "label": "鲅鱼圈区",
  "value": "210804"
}, {
  "label": "老边区",
  "value": "210811"
}, {
  "label": "盖州市",
  "value": "210881"
}, {
  "label": "大石桥市",
  "value": "210882"
}], [{
  "label": "海州区",
  "value": "210902"
}, {
  "label": "新邱区",
  "value": "210903"
}, {
  "label": "太平区",
  "value": "210904"
}, {
  "label": "清河门区",
  "value": "210905"
}, {
  "label": "细河区",
  "value": "210911"
}, {
  "label": "阜新蒙古族自治县",
  "value": "210921"
}, {
  "label": "彰武县",
  "value": "210922"
}], [{
  "label": "白塔区",
  "value": "211002"
}, {
  "label": "文圣区",
  "value": "211003"
}, {
  "label": "宏伟区",
  "value": "211004"
}, {
  "label": "弓长岭区",
  "value": "211005"
}, {
  "label": "太子河区",
  "value": "211011"
}, {
  "label": "辽阳县",
  "value": "211021"
}, {
  "label": "灯塔市",
  "value": "211081"
}], [{
  "label": "双台子区",
  "value": "211102"
}, {
  "label": "兴隆台区",
  "value": "211103"
}, {
  "label": "大洼区",
  "value": "211104"
}, {
  "label": "盘山县",
  "value": "211122"
}], [{
  "label": "银州区",
  "value": "211202"
}, {
  "label": "清河区",
  "value": "211204"
}, {
  "label": "铁岭县",
  "value": "211221"
}, {
  "label": "西丰县",
  "value": "211223"
}, {
  "label": "昌图县",
  "value": "211224"
}, {
  "label": "调兵山市",
  "value": "211281"
}, {
  "label": "开原市",
  "value": "211282"
}], [{
  "label": "双塔区",
  "value": "211302"
}, {
  "label": "龙城区",
  "value": "211303"
}, {
  "label": "朝阳县",
  "value": "211321"
}, {
  "label": "建平县",
  "value": "211322"
}, {
  "label": "喀喇沁左翼蒙古族自治县",
  "value": "211324"
}, {
  "label": "北票市",
  "value": "211381"
}, {
  "label": "凌源市",
  "value": "211382"
}], [{
  "label": "连山区",
  "value": "211402"
}, {
  "label": "龙港区",
  "value": "211403"
}, {
  "label": "南票区",
  "value": "211404"
}, {
  "label": "绥中县",
  "value": "211421"
}, {
  "label": "建昌县",
  "value": "211422"
}, {
  "label": "兴城市",
  "value": "211481"
}]], [[{
  "label": "南关区",
  "value": "220102"
}, {
  "label": "宽城区",
  "value": "220103"
}, {
  "label": "朝阳区",
  "value": "220104"
}, {
  "label": "二道区",
  "value": "220105"
}, {
  "label": "绿园区",
  "value": "220106"
}, {
  "label": "双阳区",
  "value": "220112"
}, {
  "label": "九台区",
  "value": "220113"
}, {
  "label": "农安县",
  "value": "220122"
}, {
  "label": "长春经济技术开发区",
  "value": "220171"
}, {
  "label": "长春净月高新技术产业开发区",
  "value": "220172"
}, {
  "label": "长春高新技术产业开发区",
  "value": "220173"
}, {
  "label": "长春汽车经济技术开发区",
  "value": "220174"
}, {
  "label": "榆树市",
  "value": "220182"
}, {
  "label": "德惠市",
  "value": "220183"
}], [{
  "label": "昌邑区",
  "value": "220202"
}, {
  "label": "龙潭区",
  "value": "220203"
}, {
  "label": "船营区",
  "value": "220204"
}, {
  "label": "丰满区",
  "value": "220211"
}, {
  "label": "永吉县",
  "value": "220221"
}, {
  "label": "吉林经济开发区",
  "value": "220271"
}, {
  "label": "吉林高新技术产业开发区",
  "value": "220272"
}, {
  "label": "吉林中国新加坡食品区",
  "value": "220273"
}, {
  "label": "蛟河市",
  "value": "220281"
}, {
  "label": "桦甸市",
  "value": "220282"
}, {
  "label": "舒兰市",
  "value": "220283"
}, {
  "label": "磐石市",
  "value": "220284"
}], [{
  "label": "铁西区",
  "value": "220302"
}, {
  "label": "铁东区",
  "value": "220303"
}, {
  "label": "梨树县",
  "value": "220322"
}, {
  "label": "伊通满族自治县",
  "value": "220323"
}, {
  "label": "公主岭市",
  "value": "220381"
}, {
  "label": "双辽市",
  "value": "220382"
}], [{
  "label": "龙山区",
  "value": "220402"
}, {
  "label": "西安区",
  "value": "220403"
}, {
  "label": "东丰县",
  "value": "220421"
}, {
  "label": "东辽县",
  "value": "220422"
}], [{
  "label": "东昌区",
  "value": "220502"
}, {
  "label": "二道江区",
  "value": "220503"
}, {
  "label": "通化县",
  "value": "220521"
}, {
  "label": "辉南县",
  "value": "220523"
}, {
  "label": "柳河县",
  "value": "220524"
}, {
  "label": "梅河口市",
  "value": "220581"
}, {
  "label": "集安市",
  "value": "220582"
}], [{
  "label": "浑江区",
  "value": "220602"
}, {
  "label": "江源区",
  "value": "220605"
}, {
  "label": "抚松县",
  "value": "220621"
}, {
  "label": "靖宇县",
  "value": "220622"
}, {
  "label": "长白朝鲜族自治县",
  "value": "220623"
}, {
  "label": "临江市",
  "value": "220681"
}], [{
  "label": "宁江区",
  "value": "220702"
}, {
  "label": "前郭尔罗斯蒙古族自治县",
  "value": "220721"
}, {
  "label": "长岭县",
  "value": "220722"
}, {
  "label": "乾安县",
  "value": "220723"
}, {
  "label": "吉林松原经济开发区",
  "value": "220771"
}, {
  "label": "扶余市",
  "value": "220781"
}], [{
  "label": "洮北区",
  "value": "220802"
}, {
  "label": "镇赉县",
  "value": "220821"
}, {
  "label": "通榆县",
  "value": "220822"
}, {
  "label": "吉林白城经济开发区",
  "value": "220871"
}, {
  "label": "洮南市",
  "value": "220881"
}, {
  "label": "大安市",
  "value": "220882"
}], [{
  "label": "延吉市",
  "value": "222401"
}, {
  "label": "图们市",
  "value": "222402"
}, {
  "label": "敦化市",
  "value": "222403"
}, {
  "label": "珲春市",
  "value": "222404"
}, {
  "label": "龙井市",
  "value": "222405"
}, {
  "label": "和龙市",
  "value": "222406"
}, {
  "label": "汪清县",
  "value": "222424"
}, {
  "label": "安图县",
  "value": "222426"
}]], [[{
  "label": "道里区",
  "value": "230102"
}, {
  "label": "南岗区",
  "value": "230103"
}, {
  "label": "道外区",
  "value": "230104"
}, {
  "label": "平房区",
  "value": "230108"
}, {
  "label": "松北区",
  "value": "230109"
}, {
  "label": "香坊区",
  "value": "230110"
}, {
  "label": "呼兰区",
  "value": "230111"
}, {
  "label": "阿城区",
  "value": "230112"
}, {
  "label": "双城区",
  "value": "230113"
}, {
  "label": "依兰县",
  "value": "230123"
}, {
  "label": "方正县",
  "value": "230124"
}, {
  "label": "宾县",
  "value": "230125"
}, {
  "label": "巴彦县",
  "value": "230126"
}, {
  "label": "木兰县",
  "value": "230127"
}, {
  "label": "通河县",
  "value": "230128"
}, {
  "label": "延寿县",
  "value": "230129"
}, {
  "label": "尚志市",
  "value": "230183"
}, {
  "label": "五常市",
  "value": "230184"
}], [{
  "label": "龙沙区",
  "value": "230202"
}, {
  "label": "建华区",
  "value": "230203"
}, {
  "label": "铁锋区",
  "value": "230204"
}, {
  "label": "昂昂溪区",
  "value": "230205"
}, {
  "label": "富拉尔基区",
  "value": "230206"
}, {
  "label": "碾子山区",
  "value": "230207"
}, {
  "label": "梅里斯达斡尔族区",
  "value": "230208"
}, {
  "label": "龙江县",
  "value": "230221"
}, {
  "label": "依安县",
  "value": "230223"
}, {
  "label": "泰来县",
  "value": "230224"
}, {
  "label": "甘南县",
  "value": "230225"
}, {
  "label": "富裕县",
  "value": "230227"
}, {
  "label": "克山县",
  "value": "230229"
}, {
  "label": "克东县",
  "value": "230230"
}, {
  "label": "拜泉县",
  "value": "230231"
}, {
  "label": "讷河市",
  "value": "230281"
}], [{
  "label": "鸡冠区",
  "value": "230302"
}, {
  "label": "恒山区",
  "value": "230303"
}, {
  "label": "滴道区",
  "value": "230304"
}, {
  "label": "梨树区",
  "value": "230305"
}, {
  "label": "城子河区",
  "value": "230306"
}, {
  "label": "麻山区",
  "value": "230307"
}, {
  "label": "鸡东县",
  "value": "230321"
}, {
  "label": "虎林市",
  "value": "230381"
}, {
  "label": "密山市",
  "value": "230382"
}], [{
  "label": "向阳区",
  "value": "230402"
}, {
  "label": "工农区",
  "value": "230403"
}, {
  "label": "南山区",
  "value": "230404"
}, {
  "label": "兴安区",
  "value": "230405"
}, {
  "label": "东山区",
  "value": "230406"
}, {
  "label": "兴山区",
  "value": "230407"
}, {
  "label": "萝北县",
  "value": "230421"
}, {
  "label": "绥滨县",
  "value": "230422"
}], [{
  "label": "尖山区",
  "value": "230502"
}, {
  "label": "岭东区",
  "value": "230503"
}, {
  "label": "四方台区",
  "value": "230505"
}, {
  "label": "宝山区",
  "value": "230506"
}, {
  "label": "集贤县",
  "value": "230521"
}, {
  "label": "友谊县",
  "value": "230522"
}, {
  "label": "宝清县",
  "value": "230523"
}, {
  "label": "饶河县",
  "value": "230524"
}], [{
  "label": "萨尔图区",
  "value": "230602"
}, {
  "label": "龙凤区",
  "value": "230603"
}, {
  "label": "让胡路区",
  "value": "230604"
}, {
  "label": "红岗区",
  "value": "230605"
}, {
  "label": "大同区",
  "value": "230606"
}, {
  "label": "肇州县",
  "value": "230621"
}, {
  "label": "肇源县",
  "value": "230622"
}, {
  "label": "林甸县",
  "value": "230623"
}, {
  "label": "杜尔伯特蒙古族自治县",
  "value": "230624"
}, {
  "label": "大庆高新技术产业开发区",
  "value": "230671"
}], [{
  "label": "伊春区",
  "value": "230702"
}, {
  "label": "南岔区",
  "value": "230703"
}, {
  "label": "友好区",
  "value": "230704"
}, {
  "label": "西林区",
  "value": "230705"
}, {
  "label": "翠峦区",
  "value": "230706"
}, {
  "label": "新青区",
  "value": "230707"
}, {
  "label": "美溪区",
  "value": "230708"
}, {
  "label": "金山屯区",
  "value": "230709"
}, {
  "label": "五营区",
  "value": "230710"
}, {
  "label": "乌马河区",
  "value": "230711"
}, {
  "label": "汤旺河区",
  "value": "230712"
}, {
  "label": "带岭区",
  "value": "230713"
}, {
  "label": "乌伊岭区",
  "value": "230714"
}, {
  "label": "红星区",
  "value": "230715"
}, {
  "label": "上甘岭区",
  "value": "230716"
}, {
  "label": "嘉荫县",
  "value": "230722"
}, {
  "label": "铁力市",
  "value": "230781"
}], [{
  "label": "向阳区",
  "value": "230803"
}, {
  "label": "前进区",
  "value": "230804"
}, {
  "label": "东风区",
  "value": "230805"
}, {
  "label": "郊区",
  "value": "230811"
}, {
  "label": "桦南县",
  "value": "230822"
}, {
  "label": "桦川县",
  "value": "230826"
}, {
  "label": "汤原县",
  "value": "230828"
}, {
  "label": "同江市",
  "value": "230881"
}, {
  "label": "富锦市",
  "value": "230882"
}, {
  "label": "抚远市",
  "value": "230883"
}], [{
  "label": "新兴区",
  "value": "230902"
}, {
  "label": "桃山区",
  "value": "230903"
}, {
  "label": "茄子河区",
  "value": "230904"
}, {
  "label": "勃利县",
  "value": "230921"
}], [{
  "label": "东安区",
  "value": "231002"
}, {
  "label": "阳明区",
  "value": "231003"
}, {
  "label": "爱民区",
  "value": "231004"
}, {
  "label": "西安区",
  "value": "231005"
}, {
  "label": "林口县",
  "value": "231025"
}, {
  "label": "牡丹江经济技术开发区",
  "value": "231071"
}, {
  "label": "绥芬河市",
  "value": "231081"
}, {
  "label": "海林市",
  "value": "231083"
}, {
  "label": "宁安市",
  "value": "231084"
}, {
  "label": "穆棱市",
  "value": "231085"
}, {
  "label": "东宁市",
  "value": "231086"
}], [{
  "label": "爱辉区",
  "value": "231102"
}, {
  "label": "嫩江县",
  "value": "231121"
}, {
  "label": "逊克县",
  "value": "231123"
}, {
  "label": "孙吴县",
  "value": "231124"
}, {
  "label": "北安市",
  "value": "231181"
}, {
  "label": "五大连池市",
  "value": "231182"
}], [{
  "label": "北林区",
  "value": "231202"
}, {
  "label": "望奎县",
  "value": "231221"
}, {
  "label": "兰西县",
  "value": "231222"
}, {
  "label": "青冈县",
  "value": "231223"
}, {
  "label": "庆安县",
  "value": "231224"
}, {
  "label": "明水县",
  "value": "231225"
}, {
  "label": "绥棱县",
  "value": "231226"
}, {
  "label": "安达市",
  "value": "231281"
}, {
  "label": "肇东市",
  "value": "231282"
}, {
  "label": "海伦市",
  "value": "231283"
}], [{
  "label": "加格达奇区",
  "value": "232701"
}, {
  "label": "松岭区",
  "value": "232702"
}, {
  "label": "新林区",
  "value": "232703"
}, {
  "label": "呼中区",
  "value": "232704"
}, {
  "label": "呼玛县",
  "value": "232721"
}, {
  "label": "塔河县",
  "value": "232722"
}, {
  "label": "漠河县",
  "value": "232723"
}]], [[{
  "label": "黄浦区",
  "value": "310101"
}, {
  "label": "徐汇区",
  "value": "310104"
}, {
  "label": "长宁区",
  "value": "310105"
}, {
  "label": "静安区",
  "value": "310106"
}, {
  "label": "普陀区",
  "value": "310107"
}, {
  "label": "虹口区",
  "value": "310109"
}, {
  "label": "杨浦区",
  "value": "310110"
}, {
  "label": "闵行区",
  "value": "310112"
}, {
  "label": "宝山区",
  "value": "310113"
}, {
  "label": "嘉定区",
  "value": "310114"
}, {
  "label": "浦东新区",
  "value": "310115"
}, {
  "label": "金山区",
  "value": "310116"
}, {
  "label": "松江区",
  "value": "310117"
}, {
  "label": "青浦区",
  "value": "310118"
}, {
  "label": "奉贤区",
  "value": "310120"
}, {
  "label": "崇明区",
  "value": "310151"
}]], [[{
  "label": "玄武区",
  "value": "320102"
}, {
  "label": "秦淮区",
  "value": "320104"
}, {
  "label": "建邺区",
  "value": "320105"
}, {
  "label": "鼓楼区",
  "value": "320106"
}, {
  "label": "浦口区",
  "value": "320111"
}, {
  "label": "栖霞区",
  "value": "320113"
}, {
  "label": "雨花台区",
  "value": "320114"
}, {
  "label": "江宁区",
  "value": "320115"
}, {
  "label": "六合区",
  "value": "320116"
}, {
  "label": "溧水区",
  "value": "320117"
}, {
  "label": "高淳区",
  "value": "320118"
}], [{
  "label": "锡山区",
  "value": "320205"
}, {
  "label": "惠山区",
  "value": "320206"
}, {
  "label": "滨湖区",
  "value": "320211"
}, {
  "label": "梁溪区",
  "value": "320213"
}, {
  "label": "新吴区",
  "value": "320214"
}, {
  "label": "江阴市",
  "value": "320281"
}, {
  "label": "宜兴市",
  "value": "320282"
}], [{
  "label": "鼓楼区",
  "value": "320302"
}, {
  "label": "云龙区",
  "value": "320303"
}, {
  "label": "贾汪区",
  "value": "320305"
}, {
  "label": "泉山区",
  "value": "320311"
}, {
  "label": "铜山区",
  "value": "320312"
}, {
  "label": "丰县",
  "value": "320321"
}, {
  "label": "沛县",
  "value": "320322"
}, {
  "label": "睢宁县",
  "value": "320324"
}, {
  "label": "徐州经济技术开发区",
  "value": "320371"
}, {
  "label": "新沂市",
  "value": "320381"
}, {
  "label": "邳州市",
  "value": "320382"
}], [{
  "label": "天宁区",
  "value": "320402"
}, {
  "label": "钟楼区",
  "value": "320404"
}, {
  "label": "新北区",
  "value": "320411"
}, {
  "label": "武进区",
  "value": "320412"
}, {
  "label": "金坛区",
  "value": "320413"
}, {
  "label": "溧阳市",
  "value": "320481"
}], [{
  "label": "虎丘区",
  "value": "320505"
}, {
  "label": "吴中区",
  "value": "320506"
}, {
  "label": "相城区",
  "value": "320507"
}, {
  "label": "姑苏区",
  "value": "320508"
}, {
  "label": "吴江区",
  "value": "320509"
}, {
  "label": "苏州工业园区",
  "value": "320571"
}, {
  "label": "常熟市",
  "value": "320581"
}, {
  "label": "张家港市",
  "value": "320582"
}, {
  "label": "昆山市",
  "value": "320583"
}, {
  "label": "太仓市",
  "value": "320585"
}], [{
  "label": "崇川区",
  "value": "320602"
}, {
  "label": "港闸区",
  "value": "320611"
}, {
  "label": "通州区",
  "value": "320612"
}, {
  "label": "海安县",
  "value": "320621"
}, {
  "label": "如东县",
  "value": "320623"
}, {
  "label": "南通经济技术开发区",
  "value": "320671"
}, {
  "label": "启东市",
  "value": "320681"
}, {
  "label": "如皋市",
  "value": "320682"
}, {
  "label": "海门市",
  "value": "320684"
}], [{
  "label": "连云区",
  "value": "320703"
}, {
  "label": "海州区",
  "value": "320706"
}, {
  "label": "赣榆区",
  "value": "320707"
}, {
  "label": "东海县",
  "value": "320722"
}, {
  "label": "灌云县",
  "value": "320723"
}, {
  "label": "灌南县",
  "value": "320724"
}, {
  "label": "连云港经济技术开发区",
  "value": "320771"
}, {
  "label": "连云港高新技术产业开发区",
  "value": "320772"
}], [{
  "label": "淮安区",
  "value": "320803"
}, {
  "label": "淮阴区",
  "value": "320804"
}, {
  "label": "清江浦区",
  "value": "320812"
}, {
  "label": "洪泽区",
  "value": "320813"
}, {
  "label": "涟水县",
  "value": "320826"
}, {
  "label": "盱眙县",
  "value": "320830"
}, {
  "label": "金湖县",
  "value": "320831"
}, {
  "label": "淮安经济技术开发区",
  "value": "320871"
}], [{
  "label": "亭湖区",
  "value": "320902"
}, {
  "label": "盐都区",
  "value": "320903"
}, {
  "label": "大丰区",
  "value": "320904"
}, {
  "label": "响水县",
  "value": "320921"
}, {
  "label": "滨海县",
  "value": "320922"
}, {
  "label": "阜宁县",
  "value": "320923"
}, {
  "label": "射阳县",
  "value": "320924"
}, {
  "label": "建湖县",
  "value": "320925"
}, {
  "label": "盐城经济技术开发区",
  "value": "320971"
}, {
  "label": "东台市",
  "value": "320981"
}], [{
  "label": "广陵区",
  "value": "321002"
}, {
  "label": "邗江区",
  "value": "321003"
}, {
  "label": "江都区",
  "value": "321012"
}, {
  "label": "宝应县",
  "value": "321023"
}, {
  "label": "扬州经济技术开发区",
  "value": "321071"
}, {
  "label": "仪征市",
  "value": "321081"
}, {
  "label": "高邮市",
  "value": "321084"
}], [{
  "label": "京口区",
  "value": "321102"
}, {
  "label": "润州区",
  "value": "321111"
}, {
  "label": "丹徒区",
  "value": "321112"
}, {
  "label": "镇江新区",
  "value": "321171"
}, {
  "label": "丹阳市",
  "value": "321181"
}, {
  "label": "扬中市",
  "value": "321182"
}, {
  "label": "句容市",
  "value": "321183"
}], [{
  "label": "海陵区",
  "value": "321202"
}, {
  "label": "高港区",
  "value": "321203"
}, {
  "label": "姜堰区",
  "value": "321204"
}, {
  "label": "泰州医药高新技术产业开发区",
  "value": "321271"
}, {
  "label": "兴化市",
  "value": "321281"
}, {
  "label": "靖江市",
  "value": "321282"
}, {
  "label": "泰兴市",
  "value": "321283"
}], [{
  "label": "宿城区",
  "value": "321302"
}, {
  "label": "宿豫区",
  "value": "321311"
}, {
  "label": "沭阳县",
  "value": "321322"
}, {
  "label": "泗阳县",
  "value": "321323"
}, {
  "label": "泗洪县",
  "value": "321324"
}, {
  "label": "宿迁经济技术开发区",
  "value": "321371"
}]], [[{
  "label": "上城区",
  "value": "330102"
}, {
  "label": "下城区",
  "value": "330103"
}, {
  "label": "江干区",
  "value": "330104"
}, {
  "label": "拱墅区",
  "value": "330105"
}, {
  "label": "西湖区",
  "value": "330106"
}, {
  "label": "滨江区",
  "value": "330108"
}, {
  "label": "萧山区",
  "value": "330109"
}, {
  "label": "余杭区",
  "value": "330110"
}, {
  "label": "富阳区",
  "value": "330111"
}, {
  "label": "临安区",
  "value": "330112"
}, {
  "label": "桐庐县",
  "value": "330122"
}, {
  "label": "淳安县",
  "value": "330127"
}, {
  "label": "建德市",
  "value": "330182"
}], [{
  "label": "海曙区",
  "value": "330203"
}, {
  "label": "江北区",
  "value": "330205"
}, {
  "label": "北仑区",
  "value": "330206"
}, {
  "label": "镇海区",
  "value": "330211"
}, {
  "label": "鄞州区",
  "value": "330212"
}, {
  "label": "奉化区",
  "value": "330213"
}, {
  "label": "象山县",
  "value": "330225"
}, {
  "label": "宁海县",
  "value": "330226"
}, {
  "label": "余姚市",
  "value": "330281"
}, {
  "label": "慈溪市",
  "value": "330282"
}], [{
  "label": "鹿城区",
  "value": "330302"
}, {
  "label": "龙湾区",
  "value": "330303"
}, {
  "label": "瓯海区",
  "value": "330304"
}, {
  "label": "洞头区",
  "value": "330305"
}, {
  "label": "永嘉县",
  "value": "330324"
}, {
  "label": "平阳县",
  "value": "330326"
}, {
  "label": "苍南县",
  "value": "330327"
}, {
  "label": "文成县",
  "value": "330328"
}, {
  "label": "泰顺县",
  "value": "330329"
}, {
  "label": "温州经济技术开发区",
  "value": "330371"
}, {
  "label": "瑞安市",
  "value": "330381"
}, {
  "label": "乐清市",
  "value": "330382"
}], [{
  "label": "南湖区",
  "value": "330402"
}, {
  "label": "秀洲区",
  "value": "330411"
}, {
  "label": "嘉善县",
  "value": "330421"
}, {
  "label": "海盐县",
  "value": "330424"
}, {
  "label": "海宁市",
  "value": "330481"
}, {
  "label": "平湖市",
  "value": "330482"
}, {
  "label": "桐乡市",
  "value": "330483"
}], [{
  "label": "吴兴区",
  "value": "330502"
}, {
  "label": "南浔区",
  "value": "330503"
}, {
  "label": "德清县",
  "value": "330521"
}, {
  "label": "长兴县",
  "value": "330522"
}, {
  "label": "安吉县",
  "value": "330523"
}], [{
  "label": "越城区",
  "value": "330602"
}, {
  "label": "柯桥区",
  "value": "330603"
}, {
  "label": "上虞区",
  "value": "330604"
}, {
  "label": "新昌县",
  "value": "330624"
}, {
  "label": "诸暨市",
  "value": "330681"
}, {
  "label": "嵊州市",
  "value": "330683"
}], [{
  "label": "婺城区",
  "value": "330702"
}, {
  "label": "金东区",
  "value": "330703"
}, {
  "label": "武义县",
  "value": "330723"
}, {
  "label": "浦江县",
  "value": "330726"
}, {
  "label": "磐安县",
  "value": "330727"
}, {
  "label": "兰溪市",
  "value": "330781"
}, {
  "label": "义乌市",
  "value": "330782"
}, {
  "label": "东阳市",
  "value": "330783"
}, {
  "label": "永康市",
  "value": "330784"
}], [{
  "label": "柯城区",
  "value": "330802"
}, {
  "label": "衢江区",
  "value": "330803"
}, {
  "label": "常山县",
  "value": "330822"
}, {
  "label": "开化县",
  "value": "330824"
}, {
  "label": "龙游县",
  "value": "330825"
}, {
  "label": "江山市",
  "value": "330881"
}], [{
  "label": "定海区",
  "value": "330902"
}, {
  "label": "普陀区",
  "value": "330903"
}, {
  "label": "岱山县",
  "value": "330921"
}, {
  "label": "嵊泗县",
  "value": "330922"
}], [{
  "label": "椒江区",
  "value": "331002"
}, {
  "label": "黄岩区",
  "value": "331003"
}, {
  "label": "路桥区",
  "value": "331004"
}, {
  "label": "三门县",
  "value": "331022"
}, {
  "label": "天台县",
  "value": "331023"
}, {
  "label": "仙居县",
  "value": "331024"
}, {
  "label": "温岭市",
  "value": "331081"
}, {
  "label": "临海市",
  "value": "331082"
}, {
  "label": "玉环市",
  "value": "331083"
}], [{
  "label": "莲都区",
  "value": "331102"
}, {
  "label": "青田县",
  "value": "331121"
}, {
  "label": "缙云县",
  "value": "331122"
}, {
  "label": "遂昌县",
  "value": "331123"
}, {
  "label": "松阳县",
  "value": "331124"
}, {
  "label": "云和县",
  "value": "331125"
}, {
  "label": "庆元县",
  "value": "331126"
}, {
  "label": "景宁畲族自治县",
  "value": "331127"
}, {
  "label": "龙泉市",
  "value": "331181"
}]], [[{
  "label": "瑶海区",
  "value": "340102"
}, {
  "label": "庐阳区",
  "value": "340103"
}, {
  "label": "蜀山区",
  "value": "340104"
}, {
  "label": "包河区",
  "value": "340111"
}, {
  "label": "长丰县",
  "value": "340121"
}, {
  "label": "肥东县",
  "value": "340122"
}, {
  "label": "肥西县",
  "value": "340123"
}, {
  "label": "庐江县",
  "value": "340124"
}, {
  "label": "合肥高新技术产业开发区",
  "value": "340171"
}, {
  "label": "合肥经济技术开发区",
  "value": "340172"
}, {
  "label": "合肥新站高新技术产业开发区",
  "value": "340173"
}, {
  "label": "巢湖市",
  "value": "340181"
}], [{
  "label": "镜湖区",
  "value": "340202"
}, {
  "label": "弋江区",
  "value": "340203"
}, {
  "label": "鸠江区",
  "value": "340207"
}, {
  "label": "三山区",
  "value": "340208"
}, {
  "label": "芜湖县",
  "value": "340221"
}, {
  "label": "繁昌县",
  "value": "340222"
}, {
  "label": "南陵县",
  "value": "340223"
}, {
  "label": "无为县",
  "value": "340225"
}, {
  "label": "芜湖经济技术开发区",
  "value": "340271"
}, {
  "label": "安徽芜湖长江大桥经济开发区",
  "value": "340272"
}], [{
  "label": "龙子湖区",
  "value": "340302"
}, {
  "label": "蚌山区",
  "value": "340303"
}, {
  "label": "禹会区",
  "value": "340304"
}, {
  "label": "淮上区",
  "value": "340311"
}, {
  "label": "怀远县",
  "value": "340321"
}, {
  "label": "五河县",
  "value": "340322"
}, {
  "label": "固镇县",
  "value": "340323"
}, {
  "label": "蚌埠市高新技术开发区",
  "value": "340371"
}, {
  "label": "蚌埠市经济开发区",
  "value": "340372"
}], [{
  "label": "大通区",
  "value": "340402"
}, {
  "label": "田家庵区",
  "value": "340403"
}, {
  "label": "谢家集区",
  "value": "340404"
}, {
  "label": "八公山区",
  "value": "340405"
}, {
  "label": "潘集区",
  "value": "340406"
}, {
  "label": "凤台县",
  "value": "340421"
}, {
  "label": "寿县",
  "value": "340422"
}], [{
  "label": "花山区",
  "value": "340503"
}, {
  "label": "雨山区",
  "value": "340504"
}, {
  "label": "博望区",
  "value": "340506"
}, {
  "label": "当涂县",
  "value": "340521"
}, {
  "label": "含山县",
  "value": "340522"
}, {
  "label": "和县",
  "value": "340523"
}], [{
  "label": "杜集区",
  "value": "340602"
}, {
  "label": "相山区",
  "value": "340603"
}, {
  "label": "烈山区",
  "value": "340604"
}, {
  "label": "濉溪县",
  "value": "340621"
}], [{
  "label": "铜官区",
  "value": "340705"
}, {
  "label": "义安区",
  "value": "340706"
}, {
  "label": "郊区",
  "value": "340711"
}, {
  "label": "枞阳县",
  "value": "340722"
}], [{
  "label": "迎江区",
  "value": "340802"
}, {
  "label": "大观区",
  "value": "340803"
}, {
  "label": "宜秀区",
  "value": "340811"
}, {
  "label": "怀宁县",
  "value": "340822"
}, {
  "label": "潜山县",
  "value": "340824"
}, {
  "label": "太湖县",
  "value": "340825"
}, {
  "label": "宿松县",
  "value": "340826"
}, {
  "label": "望江县",
  "value": "340827"
}, {
  "label": "岳西县",
  "value": "340828"
}, {
  "label": "安徽安庆经济开发区",
  "value": "340871"
}, {
  "label": "桐城市",
  "value": "340881"
}], [{
  "label": "屯溪区",
  "value": "341002"
}, {
  "label": "黄山区",
  "value": "341003"
}, {
  "label": "徽州区",
  "value": "341004"
}, {
  "label": "歙县",
  "value": "341021"
}, {
  "label": "休宁县",
  "value": "341022"
}, {
  "label": "黟县",
  "value": "341023"
}, {
  "label": "祁门县",
  "value": "341024"
}], [{
  "label": "琅琊区",
  "value": "341102"
}, {
  "label": "南谯区",
  "value": "341103"
}, {
  "label": "来安县",
  "value": "341122"
}, {
  "label": "全椒县",
  "value": "341124"
}, {
  "label": "定远县",
  "value": "341125"
}, {
  "label": "凤阳县",
  "value": "341126"
}, {
  "label": "苏滁现代产业园",
  "value": "341171"
}, {
  "label": "滁州经济技术开发区",
  "value": "341172"
}, {
  "label": "天长市",
  "value": "341181"
}, {
  "label": "明光市",
  "value": "341182"
}], [{
  "label": "颍州区",
  "value": "341202"
}, {
  "label": "颍东区",
  "value": "341203"
}, {
  "label": "颍泉区",
  "value": "341204"
}, {
  "label": "临泉县",
  "value": "341221"
}, {
  "label": "太和县",
  "value": "341222"
}, {
  "label": "阜南县",
  "value": "341225"
}, {
  "label": "颍上县",
  "value": "341226"
}, {
  "label": "阜阳合肥现代产业园区",
  "value": "341271"
}, {
  "label": "阜阳经济技术开发区",
  "value": "341272"
}, {
  "label": "界首市",
  "value": "341282"
}], [{
  "label": "埇桥区",
  "value": "341302"
}, {
  "label": "砀山县",
  "value": "341321"
}, {
  "label": "萧县",
  "value": "341322"
}, {
  "label": "灵璧县",
  "value": "341323"
}, {
  "label": "泗县",
  "value": "341324"
}, {
  "label": "宿州马鞍山现代产业园区",
  "value": "341371"
}, {
  "label": "宿州经济技术开发区",
  "value": "341372"
}], [{
  "label": "金安区",
  "value": "341502"
}, {
  "label": "裕安区",
  "value": "341503"
}, {
  "label": "叶集区",
  "value": "341504"
}, {
  "label": "霍邱县",
  "value": "341522"
}, {
  "label": "舒城县",
  "value": "341523"
}, {
  "label": "金寨县",
  "value": "341524"
}, {
  "label": "霍山县",
  "value": "341525"
}], [{
  "label": "谯城区",
  "value": "341602"
}, {
  "label": "涡阳县",
  "value": "341621"
}, {
  "label": "蒙城县",
  "value": "341622"
}, {
  "label": "利辛县",
  "value": "341623"
}], [{
  "label": "贵池区",
  "value": "341702"
}, {
  "label": "东至县",
  "value": "341721"
}, {
  "label": "石台县",
  "value": "341722"
}, {
  "label": "青阳县",
  "value": "341723"
}], [{
  "label": "宣州区",
  "value": "341802"
}, {
  "label": "郎溪县",
  "value": "341821"
}, {
  "label": "广德县",
  "value": "341822"
}, {
  "label": "泾县",
  "value": "341823"
}, {
  "label": "绩溪县",
  "value": "341824"
}, {
  "label": "旌德县",
  "value": "341825"
}, {
  "label": "宣城市经济开发区",
  "value": "341871"
}, {
  "label": "宁国市",
  "value": "341881"
}]], [[{
  "label": "鼓楼区",
  "value": "350102"
}, {
  "label": "台江区",
  "value": "350103"
}, {
  "label": "仓山区",
  "value": "350104"
}, {
  "label": "马尾区",
  "value": "350105"
}, {
  "label": "晋安区",
  "value": "350111"
}, {
  "label": "闽侯县",
  "value": "350121"
}, {
  "label": "连江县",
  "value": "350122"
}, {
  "label": "罗源县",
  "value": "350123"
}, {
  "label": "闽清县",
  "value": "350124"
}, {
  "label": "永泰县",
  "value": "350125"
}, {
  "label": "平潭县",
  "value": "350128"
}, {
  "label": "福清市",
  "value": "350181"
}, {
  "label": "长乐市",
  "value": "350182"
}], [{
  "label": "思明区",
  "value": "350203"
}, {
  "label": "海沧区",
  "value": "350205"
}, {
  "label": "湖里区",
  "value": "350206"
}, {
  "label": "集美区",
  "value": "350211"
}, {
  "label": "同安区",
  "value": "350212"
}, {
  "label": "翔安区",
  "value": "350213"
}], [{
  "label": "城厢区",
  "value": "350302"
}, {
  "label": "涵江区",
  "value": "350303"
}, {
  "label": "荔城区",
  "value": "350304"
}, {
  "label": "秀屿区",
  "value": "350305"
}, {
  "label": "仙游县",
  "value": "350322"
}], [{
  "label": "梅列区",
  "value": "350402"
}, {
  "label": "三元区",
  "value": "350403"
}, {
  "label": "明溪县",
  "value": "350421"
}, {
  "label": "清流县",
  "value": "350423"
}, {
  "label": "宁化县",
  "value": "350424"
}, {
  "label": "大田县",
  "value": "350425"
}, {
  "label": "尤溪县",
  "value": "350426"
}, {
  "label": "沙县",
  "value": "350427"
}, {
  "label": "将乐县",
  "value": "350428"
}, {
  "label": "泰宁县",
  "value": "350429"
}, {
  "label": "建宁县",
  "value": "350430"
}, {
  "label": "永安市",
  "value": "350481"
}], [{
  "label": "鲤城区",
  "value": "350502"
}, {
  "label": "丰泽区",
  "value": "350503"
}, {
  "label": "洛江区",
  "value": "350504"
}, {
  "label": "泉港区",
  "value": "350505"
}, {
  "label": "惠安县",
  "value": "350521"
}, {
  "label": "安溪县",
  "value": "350524"
}, {
  "label": "永春县",
  "value": "350525"
}, {
  "label": "德化县",
  "value": "350526"
}, {
  "label": "金门县",
  "value": "350527"
}, {
  "label": "石狮市",
  "value": "350581"
}, {
  "label": "晋江市",
  "value": "350582"
}, {
  "label": "南安市",
  "value": "350583"
}], [{
  "label": "芗城区",
  "value": "350602"
}, {
  "label": "龙文区",
  "value": "350603"
}, {
  "label": "云霄县",
  "value": "350622"
}, {
  "label": "漳浦县",
  "value": "350623"
}, {
  "label": "诏安县",
  "value": "350624"
}, {
  "label": "长泰县",
  "value": "350625"
}, {
  "label": "东山县",
  "value": "350626"
}, {
  "label": "南靖县",
  "value": "350627"
}, {
  "label": "平和县",
  "value": "350628"
}, {
  "label": "华安县",
  "value": "350629"
}, {
  "label": "龙海市",
  "value": "350681"
}], [{
  "label": "延平区",
  "value": "350702"
}, {
  "label": "建阳区",
  "value": "350703"
}, {
  "label": "顺昌县",
  "value": "350721"
}, {
  "label": "浦城县",
  "value": "350722"
}, {
  "label": "光泽县",
  "value": "350723"
}, {
  "label": "松溪县",
  "value": "350724"
}, {
  "label": "政和县",
  "value": "350725"
}, {
  "label": "邵武市",
  "value": "350781"
}, {
  "label": "武夷山市",
  "value": "350782"
}, {
  "label": "建瓯市",
  "value": "350783"
}], [{
  "label": "新罗区",
  "value": "350802"
}, {
  "label": "永定区",
  "value": "350803"
}, {
  "label": "长汀县",
  "value": "350821"
}, {
  "label": "上杭县",
  "value": "350823"
}, {
  "label": "武平县",
  "value": "350824"
}, {
  "label": "连城县",
  "value": "350825"
}, {
  "label": "漳平市",
  "value": "350881"
}], [{
  "label": "蕉城区",
  "value": "350902"
}, {
  "label": "霞浦县",
  "value": "350921"
}, {
  "label": "古田县",
  "value": "350922"
}, {
  "label": "屏南县",
  "value": "350923"
}, {
  "label": "寿宁县",
  "value": "350924"
}, {
  "label": "周宁县",
  "value": "350925"
}, {
  "label": "柘荣县",
  "value": "350926"
}, {
  "label": "福安市",
  "value": "350981"
}, {
  "label": "福鼎市",
  "value": "350982"
}]], [[{
  "label": "东湖区",
  "value": "360102"
}, {
  "label": "西湖区",
  "value": "360103"
}, {
  "label": "青云谱区",
  "value": "360104"
}, {
  "label": "湾里区",
  "value": "360105"
}, {
  "label": "青山湖区",
  "value": "360111"
}, {
  "label": "新建区",
  "value": "360112"
}, {
  "label": "南昌县",
  "value": "360121"
}, {
  "label": "安义县",
  "value": "360123"
}, {
  "label": "进贤县",
  "value": "360124"
}], [{
  "label": "昌江区",
  "value": "360202"
}, {
  "label": "珠山区",
  "value": "360203"
}, {
  "label": "浮梁县",
  "value": "360222"
}, {
  "label": "乐平市",
  "value": "360281"
}], [{
  "label": "安源区",
  "value": "360302"
}, {
  "label": "湘东区",
  "value": "360313"
}, {
  "label": "莲花县",
  "value": "360321"
}, {
  "label": "上栗县",
  "value": "360322"
}, {
  "label": "芦溪县",
  "value": "360323"
}], [{
  "label": "濂溪区",
  "value": "360402"
}, {
  "label": "浔阳区",
  "value": "360403"
}, {
  "label": "柴桑区",
  "value": "360404"
}, {
  "label": "武宁县",
  "value": "360423"
}, {
  "label": "修水县",
  "value": "360424"
}, {
  "label": "永修县",
  "value": "360425"
}, {
  "label": "德安县",
  "value": "360426"
}, {
  "label": "都昌县",
  "value": "360428"
}, {
  "label": "湖口县",
  "value": "360429"
}, {
  "label": "彭泽县",
  "value": "360430"
}, {
  "label": "瑞昌市",
  "value": "360481"
}, {
  "label": "共青城市",
  "value": "360482"
}, {
  "label": "庐山市",
  "value": "360483"
}], [{
  "label": "渝水区",
  "value": "360502"
}, {
  "label": "分宜县",
  "value": "360521"
}], [{
  "label": "月湖区",
  "value": "360602"
}, {
  "label": "余江县",
  "value": "360622"
}, {
  "label": "贵溪市",
  "value": "360681"
}], [{
  "label": "章贡区",
  "value": "360702"
}, {
  "label": "南康区",
  "value": "360703"
}, {
  "label": "赣县区",
  "value": "360704"
}, {
  "label": "信丰县",
  "value": "360722"
}, {
  "label": "大余县",
  "value": "360723"
}, {
  "label": "上犹县",
  "value": "360724"
}, {
  "label": "崇义县",
  "value": "360725"
}, {
  "label": "安远县",
  "value": "360726"
}, {
  "label": "龙南县",
  "value": "360727"
}, {
  "label": "定南县",
  "value": "360728"
}, {
  "label": "全南县",
  "value": "360729"
}, {
  "label": "宁都县",
  "value": "360730"
}, {
  "label": "于都县",
  "value": "360731"
}, {
  "label": "兴国县",
  "value": "360732"
}, {
  "label": "会昌县",
  "value": "360733"
}, {
  "label": "寻乌县",
  "value": "360734"
}, {
  "label": "石城县",
  "value": "360735"
}, {
  "label": "瑞金市",
  "value": "360781"
}], [{
  "label": "吉州区",
  "value": "360802"
}, {
  "label": "青原区",
  "value": "360803"
}, {
  "label": "吉安县",
  "value": "360821"
}, {
  "label": "吉水县",
  "value": "360822"
}, {
  "label": "峡江县",
  "value": "360823"
}, {
  "label": "新干县",
  "value": "360824"
}, {
  "label": "永丰县",
  "value": "360825"
}, {
  "label": "泰和县",
  "value": "360826"
}, {
  "label": "遂川县",
  "value": "360827"
}, {
  "label": "万安县",
  "value": "360828"
}, {
  "label": "安福县",
  "value": "360829"
}, {
  "label": "永新县",
  "value": "360830"
}, {
  "label": "井冈山市",
  "value": "360881"
}], [{
  "label": "袁州区",
  "value": "360902"
}, {
  "label": "奉新县",
  "value": "360921"
}, {
  "label": "万载县",
  "value": "360922"
}, {
  "label": "上高县",
  "value": "360923"
}, {
  "label": "宜丰县",
  "value": "360924"
}, {
  "label": "靖安县",
  "value": "360925"
}, {
  "label": "铜鼓县",
  "value": "360926"
}, {
  "label": "丰城市",
  "value": "360981"
}, {
  "label": "樟树市",
  "value": "360982"
}, {
  "label": "高安市",
  "value": "360983"
}], [{
  "label": "临川区",
  "value": "361002"
}, {
  "label": "东乡区",
  "value": "361003"
}, {
  "label": "南城县",
  "value": "361021"
}, {
  "label": "黎川县",
  "value": "361022"
}, {
  "label": "南丰县",
  "value": "361023"
}, {
  "label": "崇仁县",
  "value": "361024"
}, {
  "label": "乐安县",
  "value": "361025"
}, {
  "label": "宜黄县",
  "value": "361026"
}, {
  "label": "金溪县",
  "value": "361027"
}, {
  "label": "资溪县",
  "value": "361028"
}, {
  "label": "广昌县",
  "value": "361030"
}], [{
  "label": "信州区",
  "value": "361102"
}, {
  "label": "广丰区",
  "value": "361103"
}, {
  "label": "上饶县",
  "value": "361121"
}, {
  "label": "玉山县",
  "value": "361123"
}, {
  "label": "铅山县",
  "value": "361124"
}, {
  "label": "横峰县",
  "value": "361125"
}, {
  "label": "弋阳县",
  "value": "361126"
}, {
  "label": "余干县",
  "value": "361127"
}, {
  "label": "鄱阳县",
  "value": "361128"
}, {
  "label": "万年县",
  "value": "361129"
}, {
  "label": "婺源县",
  "value": "361130"
}, {
  "label": "德兴市",
  "value": "361181"
}]], [[{
  "label": "历下区",
  "value": "370102"
}, {
  "label": "市中区",
  "value": "370103"
}, {
  "label": "槐荫区",
  "value": "370104"
}, {
  "label": "天桥区",
  "value": "370105"
}, {
  "label": "历城区",
  "value": "370112"
}, {
  "label": "长清区",
  "value": "370113"
}, {
  "label": "章丘区",
  "value": "370114"
}, {
  "label": "平阴县",
  "value": "370124"
}, {
  "label": "济阳县",
  "value": "370125"
}, {
  "label": "商河县",
  "value": "370126"
}, {
  "label": "济南高新技术产业开发区",
  "value": "370171"
}], [{
  "label": "市南区",
  "value": "370202"
}, {
  "label": "市北区",
  "value": "370203"
}, {
  "label": "黄岛区",
  "value": "370211"
}, {
  "label": "崂山区",
  "value": "370212"
}, {
  "label": "李沧区",
  "value": "370213"
}, {
  "label": "城阳区",
  "value": "370214"
}, {
  "label": "即墨区",
  "value": "370215"
}, {
  "label": "青岛高新技术产业开发区",
  "value": "370271"
}, {
  "label": "胶州市",
  "value": "370281"
}, {
  "label": "平度市",
  "value": "370283"
}, {
  "label": "莱西市",
  "value": "370285"
}], [{
  "label": "淄川区",
  "value": "370302"
}, {
  "label": "张店区",
  "value": "370303"
}, {
  "label": "博山区",
  "value": "370304"
}, {
  "label": "临淄区",
  "value": "370305"
}, {
  "label": "周村区",
  "value": "370306"
}, {
  "label": "桓台县",
  "value": "370321"
}, {
  "label": "高青县",
  "value": "370322"
}, {
  "label": "沂源县",
  "value": "370323"
}], [{
  "label": "市中区",
  "value": "370402"
}, {
  "label": "薛城区",
  "value": "370403"
}, {
  "label": "峄城区",
  "value": "370404"
}, {
  "label": "台儿庄区",
  "value": "370405"
}, {
  "label": "山亭区",
  "value": "370406"
}, {
  "label": "滕州市",
  "value": "370481"
}], [{
  "label": "东营区",
  "value": "370502"
}, {
  "label": "河口区",
  "value": "370503"
}, {
  "label": "垦利区",
  "value": "370505"
}, {
  "label": "利津县",
  "value": "370522"
}, {
  "label": "广饶县",
  "value": "370523"
}, {
  "label": "东营经济技术开发区",
  "value": "370571"
}, {
  "label": "东营港经济开发区",
  "value": "370572"
}], [{
  "label": "芝罘区",
  "value": "370602"
}, {
  "label": "福山区",
  "value": "370611"
}, {
  "label": "牟平区",
  "value": "370612"
}, {
  "label": "莱山区",
  "value": "370613"
}, {
  "label": "长岛县",
  "value": "370634"
}, {
  "label": "烟台高新技术产业开发区",
  "value": "370671"
}, {
  "label": "烟台经济技术开发区",
  "value": "370672"
}, {
  "label": "龙口市",
  "value": "370681"
}, {
  "label": "莱阳市",
  "value": "370682"
}, {
  "label": "莱州市",
  "value": "370683"
}, {
  "label": "蓬莱市",
  "value": "370684"
}, {
  "label": "招远市",
  "value": "370685"
}, {
  "label": "栖霞市",
  "value": "370686"
}, {
  "label": "海阳市",
  "value": "370687"
}], [{
  "label": "潍城区",
  "value": "370702"
}, {
  "label": "寒亭区",
  "value": "370703"
}, {
  "label": "坊子区",
  "value": "370704"
}, {
  "label": "奎文区",
  "value": "370705"
}, {
  "label": "临朐县",
  "value": "370724"
}, {
  "label": "昌乐县",
  "value": "370725"
}, {
  "label": "潍坊滨海经济技术开发区",
  "value": "370772"
}, {
  "label": "青州市",
  "value": "370781"
}, {
  "label": "诸城市",
  "value": "370782"
}, {
  "label": "寿光市",
  "value": "370783"
}, {
  "label": "安丘市",
  "value": "370784"
}, {
  "label": "高密市",
  "value": "370785"
}, {
  "label": "昌邑市",
  "value": "370786"
}], [{
  "label": "任城区",
  "value": "370811"
}, {
  "label": "兖州区",
  "value": "370812"
}, {
  "label": "微山县",
  "value": "370826"
}, {
  "label": "鱼台县",
  "value": "370827"
}, {
  "label": "金乡县",
  "value": "370828"
}, {
  "label": "嘉祥县",
  "value": "370829"
}, {
  "label": "汶上县",
  "value": "370830"
}, {
  "label": "泗水县",
  "value": "370831"
}, {
  "label": "梁山县",
  "value": "370832"
}, {
  "label": "济宁高新技术产业开发区",
  "value": "370871"
}, {
  "label": "曲阜市",
  "value": "370881"
}, {
  "label": "邹城市",
  "value": "370883"
}], [{
  "label": "泰山区",
  "value": "370902"
}, {
  "label": "岱岳区",
  "value": "370911"
}, {
  "label": "宁阳县",
  "value": "370921"
}, {
  "label": "东平县",
  "value": "370923"
}, {
  "label": "新泰市",
  "value": "370982"
}, {
  "label": "肥城市",
  "value": "370983"
}], [{
  "label": "环翠区",
  "value": "371002"
}, {
  "label": "文登区",
  "value": "371003"
}, {
  "label": "威海火炬高技术产业开发区",
  "value": "371071"
}, {
  "label": "威海经济技术开发区",
  "value": "371072"
}, {
  "label": "威海临港经济技术开发区",
  "value": "371073"
}, {
  "label": "荣成市",
  "value": "371082"
}, {
  "label": "乳山市",
  "value": "371083"
}], [{
  "label": "东港区",
  "value": "371102"
}, {
  "label": "岚山区",
  "value": "371103"
}, {
  "label": "五莲县",
  "value": "371121"
}, {
  "label": "莒县",
  "value": "371122"
}, {
  "label": "日照经济技术开发区",
  "value": "371171"
}, {
  "label": "日照国际海洋城",
  "value": "371172"
}], [{
  "label": "莱城区",
  "value": "371202"
}, {
  "label": "钢城区",
  "value": "371203"
}], [{
  "label": "兰山区",
  "value": "371302"
}, {
  "label": "罗庄区",
  "value": "371311"
}, {
  "label": "河东区",
  "value": "371312"
}, {
  "label": "沂南县",
  "value": "371321"
}, {
  "label": "郯城县",
  "value": "371322"
}, {
  "label": "沂水县",
  "value": "371323"
}, {
  "label": "兰陵县",
  "value": "371324"
}, {
  "label": "费县",
  "value": "371325"
}, {
  "label": "平邑县",
  "value": "371326"
}, {
  "label": "莒南县",
  "value": "371327"
}, {
  "label": "蒙阴县",
  "value": "371328"
}, {
  "label": "临沭县",
  "value": "371329"
}, {
  "label": "临沂高新技术产业开发区",
  "value": "371371"
}, {
  "label": "临沂经济技术开发区",
  "value": "371372"
}, {
  "label": "临沂临港经济开发区",
  "value": "371373"
}], [{
  "label": "德城区",
  "value": "371402"
}, {
  "label": "陵城区",
  "value": "371403"
}, {
  "label": "宁津县",
  "value": "371422"
}, {
  "label": "庆云县",
  "value": "371423"
}, {
  "label": "临邑县",
  "value": "371424"
}, {
  "label": "齐河县",
  "value": "371425"
}, {
  "label": "平原县",
  "value": "371426"
}, {
  "label": "夏津县",
  "value": "371427"
}, {
  "label": "武城县",
  "value": "371428"
}, {
  "label": "德州经济技术开发区",
  "value": "371471"
}, {
  "label": "德州运河经济开发区",
  "value": "371472"
}, {
  "label": "乐陵市",
  "value": "371481"
}, {
  "label": "禹城市",
  "value": "371482"
}], [{
  "label": "东昌府区",
  "value": "371502"
}, {
  "label": "阳谷县",
  "value": "371521"
}, {
  "label": "莘县",
  "value": "371522"
}, {
  "label": "茌平县",
  "value": "371523"
}, {
  "label": "东阿县",
  "value": "371524"
}, {
  "label": "冠县",
  "value": "371525"
}, {
  "label": "高唐县",
  "value": "371526"
}, {
  "label": "临清市",
  "value": "371581"
}], [{
  "label": "滨城区",
  "value": "371602"
}, {
  "label": "沾化区",
  "value": "371603"
}, {
  "label": "惠民县",
  "value": "371621"
}, {
  "label": "阳信县",
  "value": "371622"
}, {
  "label": "无棣县",
  "value": "371623"
}, {
  "label": "博兴县",
  "value": "371625"
}, {
  "label": "邹平县",
  "value": "371626"
}], [{
  "label": "牡丹区",
  "value": "371702"
}, {
  "label": "定陶区",
  "value": "371703"
}, {
  "label": "曹县",
  "value": "371721"
}, {
  "label": "单县",
  "value": "371722"
}, {
  "label": "成武县",
  "value": "371723"
}, {
  "label": "巨野县",
  "value": "371724"
}, {
  "label": "郓城县",
  "value": "371725"
}, {
  "label": "鄄城县",
  "value": "371726"
}, {
  "label": "东明县",
  "value": "371728"
}, {
  "label": "菏泽经济技术开发区",
  "value": "371771"
}, {
  "label": "菏泽高新技术开发区",
  "value": "371772"
}]], [[{
  "label": "中原区",
  "value": "410102"
}, {
  "label": "二七区",
  "value": "410103"
}, {
  "label": "管城回族区",
  "value": "410104"
}, {
  "label": "金水区",
  "value": "410105"
}, {
  "label": "上街区",
  "value": "410106"
}, {
  "label": "惠济区",
  "value": "410108"
}, {
  "label": "中牟县",
  "value": "410122"
}, {
  "label": "郑州经济技术开发区",
  "value": "410171"
}, {
  "label": "郑州高新技术产业开发区",
  "value": "410172"
}, {
  "label": "郑州航空港经济综合实验区",
  "value": "410173"
}, {
  "label": "巩义市",
  "value": "410181"
}, {
  "label": "荥阳市",
  "value": "410182"
}, {
  "label": "新密市",
  "value": "410183"
}, {
  "label": "新郑市",
  "value": "410184"
}, {
  "label": "登封市",
  "value": "410185"
}], [{
  "label": "龙亭区",
  "value": "410202"
}, {
  "label": "顺河回族区",
  "value": "410203"
}, {
  "label": "鼓楼区",
  "value": "410204"
}, {
  "label": "禹王台区",
  "value": "410205"
}, {
  "label": "祥符区",
  "value": "410212"
}, {
  "label": "杞县",
  "value": "410221"
}, {
  "label": "通许县",
  "value": "410222"
}, {
  "label": "尉氏县",
  "value": "410223"
}, {
  "label": "兰考县",
  "value": "410225"
}], [{
  "label": "老城区",
  "value": "410302"
}, {
  "label": "西工区",
  "value": "410303"
}, {
  "label": "瀍河回族区",
  "value": "410304"
}, {
  "label": "涧西区",
  "value": "410305"
}, {
  "label": "吉利区",
  "value": "410306"
}, {
  "label": "洛龙区",
  "value": "410311"
}, {
  "label": "孟津县",
  "value": "410322"
}, {
  "label": "新安县",
  "value": "410323"
}, {
  "label": "栾川县",
  "value": "410324"
}, {
  "label": "嵩县",
  "value": "410325"
}, {
  "label": "汝阳县",
  "value": "410326"
}, {
  "label": "宜阳县",
  "value": "410327"
}, {
  "label": "洛宁县",
  "value": "410328"
}, {
  "label": "伊川县",
  "value": "410329"
}, {
  "label": "洛阳高新技术产业开发区",
  "value": "410371"
}, {
  "label": "偃师市",
  "value": "410381"
}], [{
  "label": "新华区",
  "value": "410402"
}, {
  "label": "卫东区",
  "value": "410403"
}, {
  "label": "石龙区",
  "value": "410404"
}, {
  "label": "湛河区",
  "value": "410411"
}, {
  "label": "宝丰县",
  "value": "410421"
}, {
  "label": "叶县",
  "value": "410422"
}, {
  "label": "鲁山县",
  "value": "410423"
}, {
  "label": "郏县",
  "value": "410425"
}, {
  "label": "平顶山高新技术产业开发区",
  "value": "410471"
}, {
  "label": "平顶山市新城区",
  "value": "410472"
}, {
  "label": "舞钢市",
  "value": "410481"
}, {
  "label": "汝州市",
  "value": "410482"
}], [{
  "label": "文峰区",
  "value": "410502"
}, {
  "label": "北关区",
  "value": "410503"
}, {
  "label": "殷都区",
  "value": "410505"
}, {
  "label": "龙安区",
  "value": "410506"
}, {
  "label": "安阳县",
  "value": "410522"
}, {
  "label": "汤阴县",
  "value": "410523"
}, {
  "label": "滑县",
  "value": "410526"
}, {
  "label": "内黄县",
  "value": "410527"
}, {
  "label": "安阳高新技术产业开发区",
  "value": "410571"
}, {
  "label": "林州市",
  "value": "410581"
}], [{
  "label": "鹤山区",
  "value": "410602"
}, {
  "label": "山城区",
  "value": "410603"
}, {
  "label": "淇滨区",
  "value": "410611"
}, {
  "label": "浚县",
  "value": "410621"
}, {
  "label": "淇县",
  "value": "410622"
}, {
  "label": "鹤壁经济技术开发区",
  "value": "410671"
}], [{
  "label": "红旗区",
  "value": "410702"
}, {
  "label": "卫滨区",
  "value": "410703"
}, {
  "label": "凤泉区",
  "value": "410704"
}, {
  "label": "牧野区",
  "value": "410711"
}, {
  "label": "新乡县",
  "value": "410721"
}, {
  "label": "获嘉县",
  "value": "410724"
}, {
  "label": "原阳县",
  "value": "410725"
}, {
  "label": "延津县",
  "value": "410726"
}, {
  "label": "封丘县",
  "value": "410727"
}, {
  "label": "长垣县",
  "value": "410728"
}, {
  "label": "新乡高新技术产业开发区",
  "value": "410771"
}, {
  "label": "新乡经济技术开发区",
  "value": "410772"
}, {
  "label": "新乡市平原城乡一体化示范区",
  "value": "410773"
}, {
  "label": "卫辉市",
  "value": "410781"
}, {
  "label": "辉县市",
  "value": "410782"
}], [{
  "label": "解放区",
  "value": "410802"
}, {
  "label": "中站区",
  "value": "410803"
}, {
  "label": "马村区",
  "value": "410804"
}, {
  "label": "山阳区",
  "value": "410811"
}, {
  "label": "修武县",
  "value": "410821"
}, {
  "label": "博爱县",
  "value": "410822"
}, {
  "label": "武陟县",
  "value": "410823"
}, {
  "label": "温县",
  "value": "410825"
}, {
  "label": "焦作城乡一体化示范区",
  "value": "410871"
}, {
  "label": "沁阳市",
  "value": "410882"
}, {
  "label": "孟州市",
  "value": "410883"
}], [{
  "label": "华龙区",
  "value": "410902"
}, {
  "label": "清丰县",
  "value": "410922"
}, {
  "label": "南乐县",
  "value": "410923"
}, {
  "label": "范县",
  "value": "410926"
}, {
  "label": "台前县",
  "value": "410927"
}, {
  "label": "濮阳县",
  "value": "410928"
}, {
  "label": "河南濮阳工业园区",
  "value": "410971"
}, {
  "label": "濮阳经济技术开发区",
  "value": "410972"
}], [{
  "label": "魏都区",
  "value": "411002"
}, {
  "label": "建安区",
  "value": "411003"
}, {
  "label": "鄢陵县",
  "value": "411024"
}, {
  "label": "襄城县",
  "value": "411025"
}, {
  "label": "许昌经济技术开发区",
  "value": "411071"
}, {
  "label": "禹州市",
  "value": "411081"
}, {
  "label": "长葛市",
  "value": "411082"
}], [{
  "label": "源汇区",
  "value": "411102"
}, {
  "label": "郾城区",
  "value": "411103"
}, {
  "label": "召陵区",
  "value": "411104"
}, {
  "label": "舞阳县",
  "value": "411121"
}, {
  "label": "临颍县",
  "value": "411122"
}, {
  "label": "漯河经济技术开发区",
  "value": "411171"
}], [{
  "label": "湖滨区",
  "value": "411202"
}, {
  "label": "陕州区",
  "value": "411203"
}, {
  "label": "渑池县",
  "value": "411221"
}, {
  "label": "卢氏县",
  "value": "411224"
}, {
  "label": "河南三门峡经济开发区",
  "value": "411271"
}, {
  "label": "义马市",
  "value": "411281"
}, {
  "label": "灵宝市",
  "value": "411282"
}], [{
  "label": "宛城区",
  "value": "411302"
}, {
  "label": "卧龙区",
  "value": "411303"
}, {
  "label": "南召县",
  "value": "411321"
}, {
  "label": "方城县",
  "value": "411322"
}, {
  "label": "西峡县",
  "value": "411323"
}, {
  "label": "镇平县",
  "value": "411324"
}, {
  "label": "内乡县",
  "value": "411325"
}, {
  "label": "淅川县",
  "value": "411326"
}, {
  "label": "社旗县",
  "value": "411327"
}, {
  "label": "唐河县",
  "value": "411328"
}, {
  "label": "新野县",
  "value": "411329"
}, {
  "label": "桐柏县",
  "value": "411330"
}, {
  "label": "南阳高新技术产业开发区",
  "value": "411371"
}, {
  "label": "南阳市城乡一体化示范区",
  "value": "411372"
}, {
  "label": "邓州市",
  "value": "411381"
}], [{
  "label": "梁园区",
  "value": "411402"
}, {
  "label": "睢阳区",
  "value": "411403"
}, {
  "label": "民权县",
  "value": "411421"
}, {
  "label": "睢县",
  "value": "411422"
}, {
  "label": "宁陵县",
  "value": "411423"
}, {
  "label": "柘城县",
  "value": "411424"
}, {
  "label": "虞城县",
  "value": "411425"
}, {
  "label": "夏邑县",
  "value": "411426"
}, {
  "label": "豫东综合物流产业聚集区",
  "value": "411471"
}, {
  "label": "河南商丘经济开发区",
  "value": "411472"
}, {
  "label": "永城市",
  "value": "411481"
}], [{
  "label": "浉河区",
  "value": "411502"
}, {
  "label": "平桥区",
  "value": "411503"
}, {
  "label": "罗山县",
  "value": "411521"
}, {
  "label": "光山县",
  "value": "411522"
}, {
  "label": "新县",
  "value": "411523"
}, {
  "label": "商城县",
  "value": "411524"
}, {
  "label": "固始县",
  "value": "411525"
}, {
  "label": "潢川县",
  "value": "411526"
}, {
  "label": "淮滨县",
  "value": "411527"
}, {
  "label": "息县",
  "value": "411528"
}, {
  "label": "信阳高新技术产业开发区",
  "value": "411571"
}], [{
  "label": "川汇区",
  "value": "411602"
}, {
  "label": "扶沟县",
  "value": "411621"
}, {
  "label": "西华县",
  "value": "411622"
}, {
  "label": "商水县",
  "value": "411623"
}, {
  "label": "沈丘县",
  "value": "411624"
}, {
  "label": "郸城县",
  "value": "411625"
}, {
  "label": "淮阳县",
  "value": "411626"
}, {
  "label": "太康县",
  "value": "411627"
}, {
  "label": "鹿邑县",
  "value": "411628"
}, {
  "label": "河南周口经济开发区",
  "value": "411671"
}, {
  "label": "项城市",
  "value": "411681"
}], [{
  "label": "驿城区",
  "value": "411702"
}, {
  "label": "西平县",
  "value": "411721"
}, {
  "label": "上蔡县",
  "value": "411722"
}, {
  "label": "平舆县",
  "value": "411723"
}, {
  "label": "正阳县",
  "value": "411724"
}, {
  "label": "确山县",
  "value": "411725"
}, {
  "label": "泌阳县",
  "value": "411726"
}, {
  "label": "汝南县",
  "value": "411727"
}, {
  "label": "遂平县",
  "value": "411728"
}, {
  "label": "新蔡县",
  "value": "411729"
}, {
  "label": "河南驻马店经济开发区",
  "value": "411771"
}], [{
  "label": "济源市",
  "value": "419001"
}]], [[{
  "label": "江岸区",
  "value": "420102"
}, {
  "label": "江汉区",
  "value": "420103"
}, {
  "label": "硚口区",
  "value": "420104"
}, {
  "label": "汉阳区",
  "value": "420105"
}, {
  "label": "武昌区",
  "value": "420106"
}, {
  "label": "青山区",
  "value": "420107"
}, {
  "label": "洪山区",
  "value": "420111"
}, {
  "label": "东西湖区",
  "value": "420112"
}, {
  "label": "汉南区",
  "value": "420113"
}, {
  "label": "蔡甸区",
  "value": "420114"
}, {
  "label": "江夏区",
  "value": "420115"
}, {
  "label": "黄陂区",
  "value": "420116"
}, {
  "label": "新洲区",
  "value": "420117"
}], [{
  "label": "黄石港区",
  "value": "420202"
}, {
  "label": "西塞山区",
  "value": "420203"
}, {
  "label": "下陆区",
  "value": "420204"
}, {
  "label": "铁山区",
  "value": "420205"
}, {
  "label": "阳新县",
  "value": "420222"
}, {
  "label": "大冶市",
  "value": "420281"
}], [{
  "label": "茅箭区",
  "value": "420302"
}, {
  "label": "张湾区",
  "value": "420303"
}, {
  "label": "郧阳区",
  "value": "420304"
}, {
  "label": "郧西县",
  "value": "420322"
}, {
  "label": "竹山县",
  "value": "420323"
}, {
  "label": "竹溪县",
  "value": "420324"
}, {
  "label": "房县",
  "value": "420325"
}, {
  "label": "丹江口市",
  "value": "420381"
}], [{
  "label": "西陵区",
  "value": "420502"
}, {
  "label": "伍家岗区",
  "value": "420503"
}, {
  "label": "点军区",
  "value": "420504"
}, {
  "label": "猇亭区",
  "value": "420505"
}, {
  "label": "夷陵区",
  "value": "420506"
}, {
  "label": "远安县",
  "value": "420525"
}, {
  "label": "兴山县",
  "value": "420526"
}, {
  "label": "秭归县",
  "value": "420527"
}, {
  "label": "长阳土家族自治县",
  "value": "420528"
}, {
  "label": "五峰土家族自治县",
  "value": "420529"
}, {
  "label": "宜都市",
  "value": "420581"
}, {
  "label": "当阳市",
  "value": "420582"
}, {
  "label": "枝江市",
  "value": "420583"
}], [{
  "label": "襄城区",
  "value": "420602"
}, {
  "label": "樊城区",
  "value": "420606"
}, {
  "label": "襄州区",
  "value": "420607"
}, {
  "label": "南漳县",
  "value": "420624"
}, {
  "label": "谷城县",
  "value": "420625"
}, {
  "label": "保康县",
  "value": "420626"
}, {
  "label": "老河口市",
  "value": "420682"
}, {
  "label": "枣阳市",
  "value": "420683"
}, {
  "label": "宜城市",
  "value": "420684"
}], [{
  "label": "梁子湖区",
  "value": "420702"
}, {
  "label": "华容区",
  "value": "420703"
}, {
  "label": "鄂城区",
  "value": "420704"
}], [{
  "label": "东宝区",
  "value": "420802"
}, {
  "label": "掇刀区",
  "value": "420804"
}, {
  "label": "京山县",
  "value": "420821"
}, {
  "label": "沙洋县",
  "value": "420822"
}, {
  "label": "钟祥市",
  "value": "420881"
}], [{
  "label": "孝南区",
  "value": "420902"
}, {
  "label": "孝昌县",
  "value": "420921"
}, {
  "label": "大悟县",
  "value": "420922"
}, {
  "label": "云梦县",
  "value": "420923"
}, {
  "label": "应城市",
  "value": "420981"
}, {
  "label": "安陆市",
  "value": "420982"
}, {
  "label": "汉川市",
  "value": "420984"
}], [{
  "label": "沙市区",
  "value": "421002"
}, {
  "label": "荆州区",
  "value": "421003"
}, {
  "label": "公安县",
  "value": "421022"
}, {
  "label": "监利县",
  "value": "421023"
}, {
  "label": "江陵县",
  "value": "421024"
}, {
  "label": "荆州经济技术开发区",
  "value": "421071"
}, {
  "label": "石首市",
  "value": "421081"
}, {
  "label": "洪湖市",
  "value": "421083"
}, {
  "label": "松滋市",
  "value": "421087"
}], [{
  "label": "黄州区",
  "value": "421102"
}, {
  "label": "团风县",
  "value": "421121"
}, {
  "label": "红安县",
  "value": "421122"
}, {
  "label": "罗田县",
  "value": "421123"
}, {
  "label": "英山县",
  "value": "421124"
}, {
  "label": "浠水县",
  "value": "421125"
}, {
  "label": "蕲春县",
  "value": "421126"
}, {
  "label": "黄梅县",
  "value": "421127"
}, {
  "label": "龙感湖管理区",
  "value": "421171"
}, {
  "label": "麻城市",
  "value": "421181"
}, {
  "label": "武穴市",
  "value": "421182"
}], [{
  "label": "咸安区",
  "value": "421202"
}, {
  "label": "嘉鱼县",
  "value": "421221"
}, {
  "label": "通城县",
  "value": "421222"
}, {
  "label": "崇阳县",
  "value": "421223"
}, {
  "label": "通山县",
  "value": "421224"
}, {
  "label": "赤壁市",
  "value": "421281"
}], [{
  "label": "曾都区",
  "value": "421303"
}, {
  "label": "随县",
  "value": "421321"
}, {
  "label": "广水市",
  "value": "421381"
}], [{
  "label": "恩施市",
  "value": "422801"
}, {
  "label": "利川市",
  "value": "422802"
}, {
  "label": "建始县",
  "value": "422822"
}, {
  "label": "巴东县",
  "value": "422823"
}, {
  "label": "宣恩县",
  "value": "422825"
}, {
  "label": "咸丰县",
  "value": "422826"
}, {
  "label": "来凤县",
  "value": "422827"
}, {
  "label": "鹤峰县",
  "value": "422828"
}], [{
  "label": "仙桃市",
  "value": "429004"
}, {
  "label": "潜江市",
  "value": "429005"
}, {
  "label": "天门市",
  "value": "429006"
}, {
  "label": "神农架林区",
  "value": "429021"
}]], [[{
  "label": "芙蓉区",
  "value": "430102"
}, {
  "label": "天心区",
  "value": "430103"
}, {
  "label": "岳麓区",
  "value": "430104"
}, {
  "label": "开福区",
  "value": "430105"
}, {
  "label": "雨花区",
  "value": "430111"
}, {
  "label": "望城区",
  "value": "430112"
}, {
  "label": "长沙县",
  "value": "430121"
}, {
  "label": "浏阳市",
  "value": "430181"
}, {
  "label": "宁乡市",
  "value": "430182"
}], [{
  "label": "荷塘区",
  "value": "430202"
}, {
  "label": "芦淞区",
  "value": "430203"
}, {
  "label": "石峰区",
  "value": "430204"
}, {
  "label": "天元区",
  "value": "430211"
}, {
  "label": "株洲县",
  "value": "430221"
}, {
  "label": "攸县",
  "value": "430223"
}, {
  "label": "茶陵县",
  "value": "430224"
}, {
  "label": "炎陵县",
  "value": "430225"
}, {
  "label": "云龙示范区",
  "value": "430271"
}, {
  "label": "醴陵市",
  "value": "430281"
}], [{
  "label": "雨湖区",
  "value": "430302"
}, {
  "label": "岳塘区",
  "value": "430304"
}, {
  "label": "湘潭县",
  "value": "430321"
}, {
  "label": "湖南湘潭高新技术产业园区",
  "value": "430371"
}, {
  "label": "湘潭昭山示范区",
  "value": "430372"
}, {
  "label": "湘潭九华示范区",
  "value": "430373"
}, {
  "label": "湘乡市",
  "value": "430381"
}, {
  "label": "韶山市",
  "value": "430382"
}], [{
  "label": "珠晖区",
  "value": "430405"
}, {
  "label": "雁峰区",
  "value": "430406"
}, {
  "label": "石鼓区",
  "value": "430407"
}, {
  "label": "蒸湘区",
  "value": "430408"
}, {
  "label": "南岳区",
  "value": "430412"
}, {
  "label": "衡阳县",
  "value": "430421"
}, {
  "label": "衡南县",
  "value": "430422"
}, {
  "label": "衡山县",
  "value": "430423"
}, {
  "label": "衡东县",
  "value": "430424"
}, {
  "label": "祁东县",
  "value": "430426"
}, {
  "label": "衡阳综合保税区",
  "value": "430471"
}, {
  "label": "湖南衡阳高新技术产业园区",
  "value": "430472"
}, {
  "label": "湖南衡阳松木经济开发区",
  "value": "430473"
}, {
  "label": "耒阳市",
  "value": "430481"
}, {
  "label": "常宁市",
  "value": "430482"
}], [{
  "label": "双清区",
  "value": "430502"
}, {
  "label": "大祥区",
  "value": "430503"
}, {
  "label": "北塔区",
  "value": "430511"
}, {
  "label": "邵东县",
  "value": "430521"
}, {
  "label": "新邵县",
  "value": "430522"
}, {
  "label": "邵阳县",
  "value": "430523"
}, {
  "label": "隆回县",
  "value": "430524"
}, {
  "label": "洞口县",
  "value": "430525"
}, {
  "label": "绥宁县",
  "value": "430527"
}, {
  "label": "新宁县",
  "value": "430528"
}, {
  "label": "城步苗族自治县",
  "value": "430529"
}, {
  "label": "武冈市",
  "value": "430581"
}], [{
  "label": "岳阳楼区",
  "value": "430602"
}, {
  "label": "云溪区",
  "value": "430603"
}, {
  "label": "君山区",
  "value": "430611"
}, {
  "label": "岳阳县",
  "value": "430621"
}, {
  "label": "华容县",
  "value": "430623"
}, {
  "label": "湘阴县",
  "value": "430624"
}, {
  "label": "平江县",
  "value": "430626"
}, {
  "label": "岳阳市屈原管理区",
  "value": "430671"
}, {
  "label": "汨罗市",
  "value": "430681"
}, {
  "label": "临湘市",
  "value": "430682"
}], [{
  "label": "武陵区",
  "value": "430702"
}, {
  "label": "鼎城区",
  "value": "430703"
}, {
  "label": "安乡县",
  "value": "430721"
}, {
  "label": "汉寿县",
  "value": "430722"
}, {
  "label": "澧县",
  "value": "430723"
}, {
  "label": "临澧县",
  "value": "430724"
}, {
  "label": "桃源县",
  "value": "430725"
}, {
  "label": "石门县",
  "value": "430726"
}, {
  "label": "常德市西洞庭管理区",
  "value": "430771"
}, {
  "label": "津市市",
  "value": "430781"
}], [{
  "label": "永定区",
  "value": "430802"
}, {
  "label": "武陵源区",
  "value": "430811"
}, {
  "label": "慈利县",
  "value": "430821"
}, {
  "label": "桑植县",
  "value": "430822"
}], [{
  "label": "资阳区",
  "value": "430902"
}, {
  "label": "赫山区",
  "value": "430903"
}, {
  "label": "南县",
  "value": "430921"
}, {
  "label": "桃江县",
  "value": "430922"
}, {
  "label": "安化县",
  "value": "430923"
}, {
  "label": "益阳市大通湖管理区",
  "value": "430971"
}, {
  "label": "湖南益阳高新技术产业园区",
  "value": "430972"
}, {
  "label": "沅江市",
  "value": "430981"
}], [{
  "label": "北湖区",
  "value": "431002"
}, {
  "label": "苏仙区",
  "value": "431003"
}, {
  "label": "桂阳县",
  "value": "431021"
}, {
  "label": "宜章县",
  "value": "431022"
}, {
  "label": "永兴县",
  "value": "431023"
}, {
  "label": "嘉禾县",
  "value": "431024"
}, {
  "label": "临武县",
  "value": "431025"
}, {
  "label": "汝城县",
  "value": "431026"
}, {
  "label": "桂东县",
  "value": "431027"
}, {
  "label": "安仁县",
  "value": "431028"
}, {
  "label": "资兴市",
  "value": "431081"
}], [{
  "label": "零陵区",
  "value": "431102"
}, {
  "label": "冷水滩区",
  "value": "431103"
}, {
  "label": "祁阳县",
  "value": "431121"
}, {
  "label": "东安县",
  "value": "431122"
}, {
  "label": "双牌县",
  "value": "431123"
}, {
  "label": "道县",
  "value": "431124"
}, {
  "label": "江永县",
  "value": "431125"
}, {
  "label": "宁远县",
  "value": "431126"
}, {
  "label": "蓝山县",
  "value": "431127"
}, {
  "label": "新田县",
  "value": "431128"
}, {
  "label": "江华瑶族自治县",
  "value": "431129"
}, {
  "label": "永州经济技术开发区",
  "value": "431171"
}, {
  "label": "永州市金洞管理区",
  "value": "431172"
}, {
  "label": "永州市回龙圩管理区",
  "value": "431173"
}], [{
  "label": "鹤城区",
  "value": "431202"
}, {
  "label": "中方县",
  "value": "431221"
}, {
  "label": "沅陵县",
  "value": "431222"
}, {
  "label": "辰溪县",
  "value": "431223"
}, {
  "label": "溆浦县",
  "value": "431224"
}, {
  "label": "会同县",
  "value": "431225"
}, {
  "label": "麻阳苗族自治县",
  "value": "431226"
}, {
  "label": "新晃侗族自治县",
  "value": "431227"
}, {
  "label": "芷江侗族自治县",
  "value": "431228"
}, {
  "label": "靖州苗族侗族自治县",
  "value": "431229"
}, {
  "label": "通道侗族自治县",
  "value": "431230"
}, {
  "label": "怀化市洪江管理区",
  "value": "431271"
}, {
  "label": "洪江市",
  "value": "431281"
}], [{
  "label": "娄星区",
  "value": "431302"
}, {
  "label": "双峰县",
  "value": "431321"
}, {
  "label": "新化县",
  "value": "431322"
}, {
  "label": "冷水江市",
  "value": "431381"
}, {
  "label": "涟源市",
  "value": "431382"
}], [{
  "label": "吉首市",
  "value": "433101"
}, {
  "label": "泸溪县",
  "value": "433122"
}, {
  "label": "凤凰县",
  "value": "433123"
}, {
  "label": "花垣县",
  "value": "433124"
}, {
  "label": "保靖县",
  "value": "433125"
}, {
  "label": "古丈县",
  "value": "433126"
}, {
  "label": "永顺县",
  "value": "433127"
}, {
  "label": "龙山县",
  "value": "433130"
}, {
  "label": "湖南吉首经济开发区",
  "value": "433172"
}, {
  "label": "湖南永顺经济开发区",
  "value": "433173"
}]], [[{
  "label": "荔湾区",
  "value": "440103"
}, {
  "label": "越秀区",
  "value": "440104"
}, {
  "label": "海珠区",
  "value": "440105"
}, {
  "label": "天河区",
  "value": "440106"
}, {
  "label": "白云区",
  "value": "440111"
}, {
  "label": "黄埔区",
  "value": "440112"
}, {
  "label": "番禺区",
  "value": "440113"
}, {
  "label": "花都区",
  "value": "440114"
}, {
  "label": "南沙区",
  "value": "440115"
}, {
  "label": "从化区",
  "value": "440117"
}, {
  "label": "增城区",
  "value": "440118"
}], [{
  "label": "武江区",
  "value": "440203"
}, {
  "label": "浈江区",
  "value": "440204"
}, {
  "label": "曲江区",
  "value": "440205"
}, {
  "label": "始兴县",
  "value": "440222"
}, {
  "label": "仁化县",
  "value": "440224"
}, {
  "label": "翁源县",
  "value": "440229"
}, {
  "label": "乳源瑶族自治县",
  "value": "440232"
}, {
  "label": "新丰县",
  "value": "440233"
}, {
  "label": "乐昌市",
  "value": "440281"
}, {
  "label": "南雄市",
  "value": "440282"
}], [{
  "label": "罗湖区",
  "value": "440303"
}, {
  "label": "福田区",
  "value": "440304"
}, {
  "label": "南山区",
  "value": "440305"
}, {
  "label": "宝安区",
  "value": "440306"
}, {
  "label": "龙岗区",
  "value": "440307"
}, {
  "label": "盐田区",
  "value": "440308"
}, {
  "label": "龙华区",
  "value": "440309"
}, {
  "label": "坪山区",
  "value": "440310"
}], [{
  "label": "香洲区",
  "value": "440402"
}, {
  "label": "斗门区",
  "value": "440403"
}, {
  "label": "金湾区",
  "value": "440404"
}], [{
  "label": "龙湖区",
  "value": "440507"
}, {
  "label": "金平区",
  "value": "440511"
}, {
  "label": "濠江区",
  "value": "440512"
}, {
  "label": "潮阳区",
  "value": "440513"
}, {
  "label": "潮南区",
  "value": "440514"
}, {
  "label": "澄海区",
  "value": "440515"
}, {
  "label": "南澳县",
  "value": "440523"
}], [{
  "label": "禅城区",
  "value": "440604"
}, {
  "label": "南海区",
  "value": "440605"
}, {
  "label": "顺德区",
  "value": "440606"
}, {
  "label": "三水区",
  "value": "440607"
}, {
  "label": "高明区",
  "value": "440608"
}], [{
  "label": "蓬江区",
  "value": "440703"
}, {
  "label": "江海区",
  "value": "440704"
}, {
  "label": "新会区",
  "value": "440705"
}, {
  "label": "台山市",
  "value": "440781"
}, {
  "label": "开平市",
  "value": "440783"
}, {
  "label": "鹤山市",
  "value": "440784"
}, {
  "label": "恩平市",
  "value": "440785"
}], [{
  "label": "赤坎区",
  "value": "440802"
}, {
  "label": "霞山区",
  "value": "440803"
}, {
  "label": "坡头区",
  "value": "440804"
}, {
  "label": "麻章区",
  "value": "440811"
}, {
  "label": "遂溪县",
  "value": "440823"
}, {
  "label": "徐闻县",
  "value": "440825"
}, {
  "label": "廉江市",
  "value": "440881"
}, {
  "label": "雷州市",
  "value": "440882"
}, {
  "label": "吴川市",
  "value": "440883"
}], [{
  "label": "茂南区",
  "value": "440902"
}, {
  "label": "电白区",
  "value": "440904"
}, {
  "label": "高州市",
  "value": "440981"
}, {
  "label": "化州市",
  "value": "440982"
}, {
  "label": "信宜市",
  "value": "440983"
}], [{
  "label": "端州区",
  "value": "441202"
}, {
  "label": "鼎湖区",
  "value": "441203"
}, {
  "label": "高要区",
  "value": "441204"
}, {
  "label": "广宁县",
  "value": "441223"
}, {
  "label": "怀集县",
  "value": "441224"
}, {
  "label": "封开县",
  "value": "441225"
}, {
  "label": "德庆县",
  "value": "441226"
}, {
  "label": "四会市",
  "value": "441284"
}], [{
  "label": "惠城区",
  "value": "441302"
}, {
  "label": "惠阳区",
  "value": "441303"
}, {
  "label": "博罗县",
  "value": "441322"
}, {
  "label": "惠东县",
  "value": "441323"
}, {
  "label": "龙门县",
  "value": "441324"
}], [{
  "label": "梅江区",
  "value": "441402"
}, {
  "label": "梅县区",
  "value": "441403"
}, {
  "label": "大埔县",
  "value": "441422"
}, {
  "label": "丰顺县",
  "value": "441423"
}, {
  "label": "五华县",
  "value": "441424"
}, {
  "label": "平远县",
  "value": "441426"
}, {
  "label": "蕉岭县",
  "value": "441427"
}, {
  "label": "兴宁市",
  "value": "441481"
}], [{
  "label": "城区",
  "value": "441502"
}, {
  "label": "海丰县",
  "value": "441521"
}, {
  "label": "陆河县",
  "value": "441523"
}, {
  "label": "陆丰市",
  "value": "441581"
}], [{
  "label": "源城区",
  "value": "441602"
}, {
  "label": "紫金县",
  "value": "441621"
}, {
  "label": "龙川县",
  "value": "441622"
}, {
  "label": "连平县",
  "value": "441623"
}, {
  "label": "和平县",
  "value": "441624"
}, {
  "label": "东源县",
  "value": "441625"
}], [{
  "label": "江城区",
  "value": "441702"
}, {
  "label": "阳东区",
  "value": "441704"
}, {
  "label": "阳西县",
  "value": "441721"
}, {
  "label": "阳春市",
  "value": "441781"
}], [{
  "label": "清城区",
  "value": "441802"
}, {
  "label": "清新区",
  "value": "441803"
}, {
  "label": "佛冈县",
  "value": "441821"
}, {
  "label": "阳山县",
  "value": "441823"
}, {
  "label": "连山壮族瑶族自治县",
  "value": "441825"
}, {
  "label": "连南瑶族自治县",
  "value": "441826"
}, {
  "label": "英德市",
  "value": "441881"
}, {
  "label": "连州市",
  "value": "441882"
}], [{
  "label": "东莞市",
  "value": "441900"
}], [{
  "label": "中山市",
  "value": "442000"
}], [{
  "label": "湘桥区",
  "value": "445102"
}, {
  "label": "潮安区",
  "value": "445103"
}, {
  "label": "饶平县",
  "value": "445122"
}], [{
  "label": "榕城区",
  "value": "445202"
}, {
  "label": "揭东区",
  "value": "445203"
}, {
  "label": "揭西县",
  "value": "445222"
}, {
  "label": "惠来县",
  "value": "445224"
}, {
  "label": "普宁市",
  "value": "445281"
}], [{
  "label": "云城区",
  "value": "445302"
}, {
  "label": "云安区",
  "value": "445303"
}, {
  "label": "新兴县",
  "value": "445321"
}, {
  "label": "郁南县",
  "value": "445322"
}, {
  "label": "罗定市",
  "value": "445381"
}]], [[{
  "label": "兴宁区",
  "value": "450102"
}, {
  "label": "青秀区",
  "value": "450103"
}, {
  "label": "江南区",
  "value": "450105"
}, {
  "label": "西乡塘区",
  "value": "450107"
}, {
  "label": "良庆区",
  "value": "450108"
}, {
  "label": "邕宁区",
  "value": "450109"
}, {
  "label": "武鸣区",
  "value": "450110"
}, {
  "label": "隆安县",
  "value": "450123"
}, {
  "label": "马山县",
  "value": "450124"
}, {
  "label": "上林县",
  "value": "450125"
}, {
  "label": "宾阳县",
  "value": "450126"
}, {
  "label": "横县",
  "value": "450127"
}], [{
  "label": "城中区",
  "value": "450202"
}, {
  "label": "鱼峰区",
  "value": "450203"
}, {
  "label": "柳南区",
  "value": "450204"
}, {
  "label": "柳北区",
  "value": "450205"
}, {
  "label": "柳江区",
  "value": "450206"
}, {
  "label": "柳城县",
  "value": "450222"
}, {
  "label": "鹿寨县",
  "value": "450223"
}, {
  "label": "融安县",
  "value": "450224"
}, {
  "label": "融水苗族自治县",
  "value": "450225"
}, {
  "label": "三江侗族自治县",
  "value": "450226"
}], [{
  "label": "秀峰区",
  "value": "450302"
}, {
  "label": "叠彩区",
  "value": "450303"
}, {
  "label": "象山区",
  "value": "450304"
}, {
  "label": "七星区",
  "value": "450305"
}, {
  "label": "雁山区",
  "value": "450311"
}, {
  "label": "临桂区",
  "value": "450312"
}, {
  "label": "阳朔县",
  "value": "450321"
}, {
  "label": "灵川县",
  "value": "450323"
}, {
  "label": "全州县",
  "value": "450324"
}, {
  "label": "兴安县",
  "value": "450325"
}, {
  "label": "永福县",
  "value": "450326"
}, {
  "label": "灌阳县",
  "value": "450327"
}, {
  "label": "龙胜各族自治县",
  "value": "450328"
}, {
  "label": "资源县",
  "value": "450329"
}, {
  "label": "平乐县",
  "value": "450330"
}, {
  "label": "荔浦县",
  "value": "450331"
}, {
  "label": "恭城瑶族自治县",
  "value": "450332"
}], [{
  "label": "万秀区",
  "value": "450403"
}, {
  "label": "长洲区",
  "value": "450405"
}, {
  "label": "龙圩区",
  "value": "450406"
}, {
  "label": "苍梧县",
  "value": "450421"
}, {
  "label": "藤县",
  "value": "450422"
}, {
  "label": "蒙山县",
  "value": "450423"
}, {
  "label": "岑溪市",
  "value": "450481"
}], [{
  "label": "海城区",
  "value": "450502"
}, {
  "label": "银海区",
  "value": "450503"
}, {
  "label": "铁山港区",
  "value": "450512"
}, {
  "label": "合浦县",
  "value": "450521"
}], [{
  "label": "港口区",
  "value": "450602"
}, {
  "label": "防城区",
  "value": "450603"
}, {
  "label": "上思县",
  "value": "450621"
}, {
  "label": "东兴市",
  "value": "450681"
}], [{
  "label": "钦南区",
  "value": "450702"
}, {
  "label": "钦北区",
  "value": "450703"
}, {
  "label": "灵山县",
  "value": "450721"
}, {
  "label": "浦北县",
  "value": "450722"
}], [{
  "label": "港北区",
  "value": "450802"
}, {
  "label": "港南区",
  "value": "450803"
}, {
  "label": "覃塘区",
  "value": "450804"
}, {
  "label": "平南县",
  "value": "450821"
}, {
  "label": "桂平市",
  "value": "450881"
}], [{
  "label": "玉州区",
  "value": "450902"
}, {
  "label": "福绵区",
  "value": "450903"
}, {
  "label": "容县",
  "value": "450921"
}, {
  "label": "陆川县",
  "value": "450922"
}, {
  "label": "博白县",
  "value": "450923"
}, {
  "label": "兴业县",
  "value": "450924"
}, {
  "label": "北流市",
  "value": "450981"
}], [{
  "label": "右江区",
  "value": "451002"
}, {
  "label": "田阳县",
  "value": "451021"
}, {
  "label": "田东县",
  "value": "451022"
}, {
  "label": "平果县",
  "value": "451023"
}, {
  "label": "德保县",
  "value": "451024"
}, {
  "label": "那坡县",
  "value": "451026"
}, {
  "label": "凌云县",
  "value": "451027"
}, {
  "label": "乐业县",
  "value": "451028"
}, {
  "label": "田林县",
  "value": "451029"
}, {
  "label": "西林县",
  "value": "451030"
}, {
  "label": "隆林各族自治县",
  "value": "451031"
}, {
  "label": "靖西市",
  "value": "451081"
}], [{
  "label": "八步区",
  "value": "451102"
}, {
  "label": "平桂区",
  "value": "451103"
}, {
  "label": "昭平县",
  "value": "451121"
}, {
  "label": "钟山县",
  "value": "451122"
}, {
  "label": "富川瑶族自治县",
  "value": "451123"
}], [{
  "label": "金城江区",
  "value": "451202"
}, {
  "label": "宜州区",
  "value": "451203"
}, {
  "label": "南丹县",
  "value": "451221"
}, {
  "label": "天峨县",
  "value": "451222"
}, {
  "label": "凤山县",
  "value": "451223"
}, {
  "label": "东兰县",
  "value": "451224"
}, {
  "label": "罗城仫佬族自治县",
  "value": "451225"
}, {
  "label": "环江毛南族自治县",
  "value": "451226"
}, {
  "label": "巴马瑶族自治县",
  "value": "451227"
}, {
  "label": "都安瑶族自治县",
  "value": "451228"
}, {
  "label": "大化瑶族自治县",
  "value": "451229"
}], [{
  "label": "兴宾区",
  "value": "451302"
}, {
  "label": "忻城县",
  "value": "451321"
}, {
  "label": "象州县",
  "value": "451322"
}, {
  "label": "武宣县",
  "value": "451323"
}, {
  "label": "金秀瑶族自治县",
  "value": "451324"
}, {
  "label": "合山市",
  "value": "451381"
}], [{
  "label": "江州区",
  "value": "451402"
}, {
  "label": "扶绥县",
  "value": "451421"
}, {
  "label": "宁明县",
  "value": "451422"
}, {
  "label": "龙州县",
  "value": "451423"
}, {
  "label": "大新县",
  "value": "451424"
}, {
  "label": "天等县",
  "value": "451425"
}, {
  "label": "凭祥市",
  "value": "451481"
}]], [[{
  "label": "秀英区",
  "value": "460105"
}, {
  "label": "龙华区",
  "value": "460106"
}, {
  "label": "琼山区",
  "value": "460107"
}, {
  "label": "美兰区",
  "value": "460108"
}], [{
  "label": "海棠区",
  "value": "460202"
}, {
  "label": "吉阳区",
  "value": "460203"
}, {
  "label": "天涯区",
  "value": "460204"
}, {
  "label": "崖州区",
  "value": "460205"
}], [{
  "label": "西沙群岛",
  "value": "460321"
}, {
  "label": "南沙群岛",
  "value": "460322"
}, {
  "label": "中沙群岛的岛礁及其海域",
  "value": "460323"
}], [{
  "label": "儋州市",
  "value": "460400"
}], [{
  "label": "五指山市",
  "value": "469001"
}, {
  "label": "琼海市",
  "value": "469002"
}, {
  "label": "文昌市",
  "value": "469005"
}, {
  "label": "万宁市",
  "value": "469006"
}, {
  "label": "东方市",
  "value": "469007"
}, {
  "label": "定安县",
  "value": "469021"
}, {
  "label": "屯昌县",
  "value": "469022"
}, {
  "label": "澄迈县",
  "value": "469023"
}, {
  "label": "临高县",
  "value": "469024"
}, {
  "label": "白沙黎族自治县",
  "value": "469025"
}, {
  "label": "昌江黎族自治县",
  "value": "469026"
}, {
  "label": "乐东黎族自治县",
  "value": "469027"
}, {
  "label": "陵水黎族自治县",
  "value": "469028"
}, {
  "label": "保亭黎族苗族自治县",
  "value": "469029"
}, {
  "label": "琼中黎族苗族自治县",
  "value": "469030"
}]], [[{
  "label": "万州区",
  "value": "500101"
}, {
  "label": "涪陵区",
  "value": "500102"
}, {
  "label": "渝中区",
  "value": "500103"
}, {
  "label": "大渡口区",
  "value": "500104"
}, {
  "label": "江北区",
  "value": "500105"
}, {
  "label": "沙坪坝区",
  "value": "500106"
}, {
  "label": "九龙坡区",
  "value": "500107"
}, {
  "label": "南岸区",
  "value": "500108"
}, {
  "label": "北碚区",
  "value": "500109"
}, {
  "label": "綦江区",
  "value": "500110"
}, {
  "label": "大足区",
  "value": "500111"
}, {
  "label": "渝北区",
  "value": "500112"
}, {
  "label": "巴南区",
  "value": "500113"
}, {
  "label": "黔江区",
  "value": "500114"
}, {
  "label": "长寿区",
  "value": "500115"
}, {
  "label": "江津区",
  "value": "500116"
}, {
  "label": "合川区",
  "value": "500117"
}, {
  "label": "永川区",
  "value": "500118"
}, {
  "label": "南川区",
  "value": "500119"
}, {
  "label": "璧山区",
  "value": "500120"
}, {
  "label": "铜梁区",
  "value": "500151"
}, {
  "label": "潼南区",
  "value": "500152"
}, {
  "label": "荣昌区",
  "value": "500153"
}, {
  "label": "开州区",
  "value": "500154"
}, {
  "label": "梁平区",
  "value": "500155"
}, {
  "label": "武隆区",
  "value": "500156"
}], [{
  "label": "城口县",
  "value": "500229"
}, {
  "label": "丰都县",
  "value": "500230"
}, {
  "label": "垫江县",
  "value": "500231"
}, {
  "label": "忠县",
  "value": "500233"
}, {
  "label": "云阳县",
  "value": "500235"
}, {
  "label": "奉节县",
  "value": "500236"
}, {
  "label": "巫山县",
  "value": "500237"
}, {
  "label": "巫溪县",
  "value": "500238"
}, {
  "label": "石柱土家族自治县",
  "value": "500240"
}, {
  "label": "秀山土家族苗族自治县",
  "value": "500241"
}, {
  "label": "酉阳土家族苗族自治县",
  "value": "500242"
}, {
  "label": "彭水苗族土家族自治县",
  "value": "500243"
}]], [[{
  "label": "锦江区",
  "value": "510104"
}, {
  "label": "青羊区",
  "value": "510105"
}, {
  "label": "金牛区",
  "value": "510106"
}, {
  "label": "武侯区",
  "value": "510107"
}, {
  "label": "成华区",
  "value": "510108"
}, {
  "label": "龙泉驿区",
  "value": "510112"
}, {
  "label": "青白江区",
  "value": "510113"
}, {
  "label": "新都区",
  "value": "510114"
}, {
  "label": "温江区",
  "value": "510115"
}, {
  "label": "双流区",
  "value": "510116"
}, {
  "label": "郫都区",
  "value": "510117"
}, {
  "label": "金堂县",
  "value": "510121"
}, {
  "label": "大邑县",
  "value": "510129"
}, {
  "label": "蒲江县",
  "value": "510131"
}, {
  "label": "新津县",
  "value": "510132"
}, {
  "label": "都江堰市",
  "value": "510181"
}, {
  "label": "彭州市",
  "value": "510182"
}, {
  "label": "邛崃市",
  "value": "510183"
}, {
  "label": "崇州市",
  "value": "510184"
}, {
  "label": "简阳市",
  "value": "510185"
}], [{
  "label": "自流井区",
  "value": "510302"
}, {
  "label": "贡井区",
  "value": "510303"
}, {
  "label": "大安区",
  "value": "510304"
}, {
  "label": "沿滩区",
  "value": "510311"
}, {
  "label": "荣县",
  "value": "510321"
}, {
  "label": "富顺县",
  "value": "510322"
}], [{
  "label": "东区",
  "value": "510402"
}, {
  "label": "西区",
  "value": "510403"
}, {
  "label": "仁和区",
  "value": "510411"
}, {
  "label": "米易县",
  "value": "510421"
}, {
  "label": "盐边县",
  "value": "510422"
}], [{
  "label": "江阳区",
  "value": "510502"
}, {
  "label": "纳溪区",
  "value": "510503"
}, {
  "label": "龙马潭区",
  "value": "510504"
}, {
  "label": "泸县",
  "value": "510521"
}, {
  "label": "合江县",
  "value": "510522"
}, {
  "label": "叙永县",
  "value": "510524"
}, {
  "label": "古蔺县",
  "value": "510525"
}], [{
  "label": "旌阳区",
  "value": "510603"
}, {
  "label": "罗江区",
  "value": "510604"
}, {
  "label": "中江县",
  "value": "510623"
}, {
  "label": "广汉市",
  "value": "510681"
}, {
  "label": "什邡市",
  "value": "510682"
}, {
  "label": "绵竹市",
  "value": "510683"
}], [{
  "label": "涪城区",
  "value": "510703"
}, {
  "label": "游仙区",
  "value": "510704"
}, {
  "label": "安州区",
  "value": "510705"
}, {
  "label": "三台县",
  "value": "510722"
}, {
  "label": "盐亭县",
  "value": "510723"
}, {
  "label": "梓潼县",
  "value": "510725"
}, {
  "label": "北川羌族自治县",
  "value": "510726"
}, {
  "label": "平武县",
  "value": "510727"
}, {
  "label": "江油市",
  "value": "510781"
}], [{
  "label": "利州区",
  "value": "510802"
}, {
  "label": "昭化区",
  "value": "510811"
}, {
  "label": "朝天区",
  "value": "510812"
}, {
  "label": "旺苍县",
  "value": "510821"
}, {
  "label": "青川县",
  "value": "510822"
}, {
  "label": "剑阁县",
  "value": "510823"
}, {
  "label": "苍溪县",
  "value": "510824"
}], [{
  "label": "船山区",
  "value": "510903"
}, {
  "label": "安居区",
  "value": "510904"
}, {
  "label": "蓬溪县",
  "value": "510921"
}, {
  "label": "射洪县",
  "value": "510922"
}, {
  "label": "大英县",
  "value": "510923"
}], [{
  "label": "市中区",
  "value": "511002"
}, {
  "label": "东兴区",
  "value": "511011"
}, {
  "label": "威远县",
  "value": "511024"
}, {
  "label": "资中县",
  "value": "511025"
}, {
  "label": "内江经济开发区",
  "value": "511071"
}, {
  "label": "隆昌市",
  "value": "511083"
}], [{
  "label": "市中区",
  "value": "511102"
}, {
  "label": "沙湾区",
  "value": "511111"
}, {
  "label": "五通桥区",
  "value": "511112"
}, {
  "label": "金口河区",
  "value": "511113"
}, {
  "label": "犍为县",
  "value": "511123"
}, {
  "label": "井研县",
  "value": "511124"
}, {
  "label": "夹江县",
  "value": "511126"
}, {
  "label": "沐川县",
  "value": "511129"
}, {
  "label": "峨边彝族自治县",
  "value": "511132"
}, {
  "label": "马边彝族自治县",
  "value": "511133"
}, {
  "label": "峨眉山市",
  "value": "511181"
}], [{
  "label": "顺庆区",
  "value": "511302"
}, {
  "label": "高坪区",
  "value": "511303"
}, {
  "label": "嘉陵区",
  "value": "511304"
}, {
  "label": "南部县",
  "value": "511321"
}, {
  "label": "营山县",
  "value": "511322"
}, {
  "label": "蓬安县",
  "value": "511323"
}, {
  "label": "仪陇县",
  "value": "511324"
}, {
  "label": "西充县",
  "value": "511325"
}, {
  "label": "阆中市",
  "value": "511381"
}], [{
  "label": "东坡区",
  "value": "511402"
}, {
  "label": "彭山区",
  "value": "511403"
}, {
  "label": "仁寿县",
  "value": "511421"
}, {
  "label": "洪雅县",
  "value": "511423"
}, {
  "label": "丹棱县",
  "value": "511424"
}, {
  "label": "青神县",
  "value": "511425"
}], [{
  "label": "翠屏区",
  "value": "511502"
}, {
  "label": "南溪区",
  "value": "511503"
}, {
  "label": "宜宾县",
  "value": "511521"
}, {
  "label": "江安县",
  "value": "511523"
}, {
  "label": "长宁县",
  "value": "511524"
}, {
  "label": "高县",
  "value": "511525"
}, {
  "label": "珙县",
  "value": "511526"
}, {
  "label": "筠连县",
  "value": "511527"
}, {
  "label": "兴文县",
  "value": "511528"
}, {
  "label": "屏山县",
  "value": "511529"
}], [{
  "label": "广安区",
  "value": "511602"
}, {
  "label": "前锋区",
  "value": "511603"
}, {
  "label": "岳池县",
  "value": "511621"
}, {
  "label": "武胜县",
  "value": "511622"
}, {
  "label": "邻水县",
  "value": "511623"
}, {
  "label": "华蓥市",
  "value": "511681"
}], [{
  "label": "通川区",
  "value": "511702"
}, {
  "label": "达川区",
  "value": "511703"
}, {
  "label": "宣汉县",
  "value": "511722"
}, {
  "label": "开江县",
  "value": "511723"
}, {
  "label": "大竹县",
  "value": "511724"
}, {
  "label": "渠县",
  "value": "511725"
}, {
  "label": "达州经济开发区",
  "value": "511771"
}, {
  "label": "万源市",
  "value": "511781"
}], [{
  "label": "雨城区",
  "value": "511802"
}, {
  "label": "名山区",
  "value": "511803"
}, {
  "label": "荥经县",
  "value": "511822"
}, {
  "label": "汉源县",
  "value": "511823"
}, {
  "label": "石棉县",
  "value": "511824"
}, {
  "label": "天全县",
  "value": "511825"
}, {
  "label": "芦山县",
  "value": "511826"
}, {
  "label": "宝兴县",
  "value": "511827"
}], [{
  "label": "巴州区",
  "value": "511902"
}, {
  "label": "恩阳区",
  "value": "511903"
}, {
  "label": "通江县",
  "value": "511921"
}, {
  "label": "南江县",
  "value": "511922"
}, {
  "label": "平昌县",
  "value": "511923"
}, {
  "label": "巴中经济开发区",
  "value": "511971"
}], [{
  "label": "雁江区",
  "value": "512002"
}, {
  "label": "安岳县",
  "value": "512021"
}, {
  "label": "乐至县",
  "value": "512022"
}], [{
  "label": "马尔康市",
  "value": "513201"
}, {
  "label": "汶川县",
  "value": "513221"
}, {
  "label": "理县",
  "value": "513222"
}, {
  "label": "茂县",
  "value": "513223"
}, {
  "label": "松潘县",
  "value": "513224"
}, {
  "label": "九寨沟县",
  "value": "513225"
}, {
  "label": "金川县",
  "value": "513226"
}, {
  "label": "小金县",
  "value": "513227"
}, {
  "label": "黑水县",
  "value": "513228"
}, {
  "label": "壤塘县",
  "value": "513230"
}, {
  "label": "阿坝县",
  "value": "513231"
}, {
  "label": "若尔盖县",
  "value": "513232"
}, {
  "label": "红原县",
  "value": "513233"
}], [{
  "label": "康定市",
  "value": "513301"
}, {
  "label": "泸定县",
  "value": "513322"
}, {
  "label": "丹巴县",
  "value": "513323"
}, {
  "label": "九龙县",
  "value": "513324"
}, {
  "label": "雅江县",
  "value": "513325"
}, {
  "label": "道孚县",
  "value": "513326"
}, {
  "label": "炉霍县",
  "value": "513327"
}, {
  "label": "甘孜县",
  "value": "513328"
}, {
  "label": "新龙县",
  "value": "513329"
}, {
  "label": "德格县",
  "value": "513330"
}, {
  "label": "白玉县",
  "value": "513331"
}, {
  "label": "石渠县",
  "value": "513332"
}, {
  "label": "色达县",
  "value": "513333"
}, {
  "label": "理塘县",
  "value": "513334"
}, {
  "label": "巴塘县",
  "value": "513335"
}, {
  "label": "乡城县",
  "value": "513336"
}, {
  "label": "稻城县",
  "value": "513337"
}, {
  "label": "得荣县",
  "value": "513338"
}], [{
  "label": "西昌市",
  "value": "513401"
}, {
  "label": "木里藏族自治县",
  "value": "513422"
}, {
  "label": "盐源县",
  "value": "513423"
}, {
  "label": "德昌县",
  "value": "513424"
}, {
  "label": "会理县",
  "value": "513425"
}, {
  "label": "会东县",
  "value": "513426"
}, {
  "label": "宁南县",
  "value": "513427"
}, {
  "label": "普格县",
  "value": "513428"
}, {
  "label": "布拖县",
  "value": "513429"
}, {
  "label": "金阳县",
  "value": "513430"
}, {
  "label": "昭觉县",
  "value": "513431"
}, {
  "label": "喜德县",
  "value": "513432"
}, {
  "label": "冕宁县",
  "value": "513433"
}, {
  "label": "越西县",
  "value": "513434"
}, {
  "label": "甘洛县",
  "value": "513435"
}, {
  "label": "美姑县",
  "value": "513436"
}, {
  "label": "雷波县",
  "value": "513437"
}]], [[{
  "label": "南明区",
  "value": "520102"
}, {
  "label": "云岩区",
  "value": "520103"
}, {
  "label": "花溪区",
  "value": "520111"
}, {
  "label": "乌当区",
  "value": "520112"
}, {
  "label": "白云区",
  "value": "520113"
}, {
  "label": "观山湖区",
  "value": "520115"
}, {
  "label": "开阳县",
  "value": "520121"
}, {
  "label": "息烽县",
  "value": "520122"
}, {
  "label": "修文县",
  "value": "520123"
}, {
  "label": "清镇市",
  "value": "520181"
}], [{
  "label": "钟山区",
  "value": "520201"
}, {
  "label": "六枝特区",
  "value": "520203"
}, {
  "label": "水城县",
  "value": "520221"
}, {
  "label": "盘州市",
  "value": "520281"
}], [{
  "label": "红花岗区",
  "value": "520302"
}, {
  "label": "汇川区",
  "value": "520303"
}, {
  "label": "播州区",
  "value": "520304"
}, {
  "label": "桐梓县",
  "value": "520322"
}, {
  "label": "绥阳县",
  "value": "520323"
}, {
  "label": "正安县",
  "value": "520324"
}, {
  "label": "道真仡佬族苗族自治县",
  "value": "520325"
}, {
  "label": "务川仡佬族苗族自治县",
  "value": "520326"
}, {
  "label": "凤冈县",
  "value": "520327"
}, {
  "label": "湄潭县",
  "value": "520328"
}, {
  "label": "余庆县",
  "value": "520329"
}, {
  "label": "习水县",
  "value": "520330"
}, {
  "label": "赤水市",
  "value": "520381"
}, {
  "label": "仁怀市",
  "value": "520382"
}], [{
  "label": "西秀区",
  "value": "520402"
}, {
  "label": "平坝区",
  "value": "520403"
}, {
  "label": "普定县",
  "value": "520422"
}, {
  "label": "镇宁布依族苗族自治县",
  "value": "520423"
}, {
  "label": "关岭布依族苗族自治县",
  "value": "520424"
}, {
  "label": "紫云苗族布依族自治县",
  "value": "520425"
}], [{
  "label": "七星关区",
  "value": "520502"
}, {
  "label": "大方县",
  "value": "520521"
}, {
  "label": "黔西县",
  "value": "520522"
}, {
  "label": "金沙县",
  "value": "520523"
}, {
  "label": "织金县",
  "value": "520524"
}, {
  "label": "纳雍县",
  "value": "520525"
}, {
  "label": "威宁彝族回族苗族自治县",
  "value": "520526"
}, {
  "label": "赫章县",
  "value": "520527"
}], [{
  "label": "碧江区",
  "value": "520602"
}, {
  "label": "万山区",
  "value": "520603"
}, {
  "label": "江口县",
  "value": "520621"
}, {
  "label": "玉屏侗族自治县",
  "value": "520622"
}, {
  "label": "石阡县",
  "value": "520623"
}, {
  "label": "思南县",
  "value": "520624"
}, {
  "label": "印江土家族苗族自治县",
  "value": "520625"
}, {
  "label": "德江县",
  "value": "520626"
}, {
  "label": "沿河土家族自治县",
  "value": "520627"
}, {
  "label": "松桃苗族自治县",
  "value": "520628"
}], [{
  "label": "兴义市",
  "value": "522301"
}, {
  "label": "兴仁县",
  "value": "522322"
}, {
  "label": "普安县",
  "value": "522323"
}, {
  "label": "晴隆县",
  "value": "522324"
}, {
  "label": "贞丰县",
  "value": "522325"
}, {
  "label": "望谟县",
  "value": "522326"
}, {
  "label": "册亨县",
  "value": "522327"
}, {
  "label": "安龙县",
  "value": "522328"
}], [{
  "label": "凯里市",
  "value": "522601"
}, {
  "label": "黄平县",
  "value": "522622"
}, {
  "label": "施秉县",
  "value": "522623"
}, {
  "label": "三穗县",
  "value": "522624"
}, {
  "label": "镇远县",
  "value": "522625"
}, {
  "label": "岑巩县",
  "value": "522626"
}, {
  "label": "天柱县",
  "value": "522627"
}, {
  "label": "锦屏县",
  "value": "522628"
}, {
  "label": "剑河县",
  "value": "522629"
}, {
  "label": "台江县",
  "value": "522630"
}, {
  "label": "黎平县",
  "value": "522631"
}, {
  "label": "榕江县",
  "value": "522632"
}, {
  "label": "从江县",
  "value": "522633"
}, {
  "label": "雷山县",
  "value": "522634"
}, {
  "label": "麻江县",
  "value": "522635"
}, {
  "label": "丹寨县",
  "value": "522636"
}], [{
  "label": "都匀市",
  "value": "522701"
}, {
  "label": "福泉市",
  "value": "522702"
}, {
  "label": "荔波县",
  "value": "522722"
}, {
  "label": "贵定县",
  "value": "522723"
}, {
  "label": "瓮安县",
  "value": "522725"
}, {
  "label": "独山县",
  "value": "522726"
}, {
  "label": "平塘县",
  "value": "522727"
}, {
  "label": "罗甸县",
  "value": "522728"
}, {
  "label": "长顺县",
  "value": "522729"
}, {
  "label": "龙里县",
  "value": "522730"
}, {
  "label": "惠水县",
  "value": "522731"
}, {
  "label": "三都水族自治县",
  "value": "522732"
}]], [[{
  "label": "五华区",
  "value": "530102"
}, {
  "label": "盘龙区",
  "value": "530103"
}, {
  "label": "官渡区",
  "value": "530111"
}, {
  "label": "西山区",
  "value": "530112"
}, {
  "label": "东川区",
  "value": "530113"
}, {
  "label": "呈贡区",
  "value": "530114"
}, {
  "label": "晋宁区",
  "value": "530115"
}, {
  "label": "富民县",
  "value": "530124"
}, {
  "label": "宜良县",
  "value": "530125"
}, {
  "label": "石林彝族自治县",
  "value": "530126"
}, {
  "label": "嵩明县",
  "value": "530127"
}, {
  "label": "禄劝彝族苗族自治县",
  "value": "530128"
}, {
  "label": "寻甸回族彝族自治县",
  "value": "530129"
}, {
  "label": "安宁市",
  "value": "530181"
}], [{
  "label": "麒麟区",
  "value": "530302"
}, {
  "label": "沾益区",
  "value": "530303"
}, {
  "label": "马龙县",
  "value": "530321"
}, {
  "label": "陆良县",
  "value": "530322"
}, {
  "label": "师宗县",
  "value": "530323"
}, {
  "label": "罗平县",
  "value": "530324"
}, {
  "label": "富源县",
  "value": "530325"
}, {
  "label": "会泽县",
  "value": "530326"
}, {
  "label": "宣威市",
  "value": "530381"
}], [{
  "label": "红塔区",
  "value": "530402"
}, {
  "label": "江川区",
  "value": "530403"
}, {
  "label": "澄江县",
  "value": "530422"
}, {
  "label": "通海县",
  "value": "530423"
}, {
  "label": "华宁县",
  "value": "530424"
}, {
  "label": "易门县",
  "value": "530425"
}, {
  "label": "峨山彝族自治县",
  "value": "530426"
}, {
  "label": "新平彝族傣族自治县",
  "value": "530427"
}, {
  "label": "元江哈尼族彝族傣族自治县",
  "value": "530428"
}], [{
  "label": "隆阳区",
  "value": "530502"
}, {
  "label": "施甸县",
  "value": "530521"
}, {
  "label": "龙陵县",
  "value": "530523"
}, {
  "label": "昌宁县",
  "value": "530524"
}, {
  "label": "腾冲市",
  "value": "530581"
}], [{
  "label": "昭阳区",
  "value": "530602"
}, {
  "label": "鲁甸县",
  "value": "530621"
}, {
  "label": "巧家县",
  "value": "530622"
}, {
  "label": "盐津县",
  "value": "530623"
}, {
  "label": "大关县",
  "value": "530624"
}, {
  "label": "永善县",
  "value": "530625"
}, {
  "label": "绥江县",
  "value": "530626"
}, {
  "label": "镇雄县",
  "value": "530627"
}, {
  "label": "彝良县",
  "value": "530628"
}, {
  "label": "威信县",
  "value": "530629"
}, {
  "label": "水富县",
  "value": "530630"
}], [{
  "label": "古城区",
  "value": "530702"
}, {
  "label": "玉龙纳西族自治县",
  "value": "530721"
}, {
  "label": "永胜县",
  "value": "530722"
}, {
  "label": "华坪县",
  "value": "530723"
}, {
  "label": "宁蒗彝族自治县",
  "value": "530724"
}], [{
  "label": "思茅区",
  "value": "530802"
}, {
  "label": "宁洱哈尼族彝族自治县",
  "value": "530821"
}, {
  "label": "墨江哈尼族自治县",
  "value": "530822"
}, {
  "label": "景东彝族自治县",
  "value": "530823"
}, {
  "label": "景谷傣族彝族自治县",
  "value": "530824"
}, {
  "label": "镇沅彝族哈尼族拉祜族自治县",
  "value": "530825"
}, {
  "label": "江城哈尼族彝族自治县",
  "value": "530826"
}, {
  "label": "孟连傣族拉祜族佤族自治县",
  "value": "530827"
}, {
  "label": "澜沧拉祜族自治县",
  "value": "530828"
}, {
  "label": "西盟佤族自治县",
  "value": "530829"
}], [{
  "label": "临翔区",
  "value": "530902"
}, {
  "label": "凤庆县",
  "value": "530921"
}, {
  "label": "云县",
  "value": "530922"
}, {
  "label": "永德县",
  "value": "530923"
}, {
  "label": "镇康县",
  "value": "530924"
}, {
  "label": "双江拉祜族佤族布朗族傣族自治县",
  "value": "530925"
}, {
  "label": "耿马傣族佤族自治县",
  "value": "530926"
}, {
  "label": "沧源佤族自治县",
  "value": "530927"
}], [{
  "label": "楚雄市",
  "value": "532301"
}, {
  "label": "双柏县",
  "value": "532322"
}, {
  "label": "牟定县",
  "value": "532323"
}, {
  "label": "南华县",
  "value": "532324"
}, {
  "label": "姚安县",
  "value": "532325"
}, {
  "label": "大姚县",
  "value": "532326"
}, {
  "label": "永仁县",
  "value": "532327"
}, {
  "label": "元谋县",
  "value": "532328"
}, {
  "label": "武定县",
  "value": "532329"
}, {
  "label": "禄丰县",
  "value": "532331"
}], [{
  "label": "个旧市",
  "value": "532501"
}, {
  "label": "开远市",
  "value": "532502"
}, {
  "label": "蒙自市",
  "value": "532503"
}, {
  "label": "弥勒市",
  "value": "532504"
}, {
  "label": "屏边苗族自治县",
  "value": "532523"
}, {
  "label": "建水县",
  "value": "532524"
}, {
  "label": "石屏县",
  "value": "532525"
}, {
  "label": "泸西县",
  "value": "532527"
}, {
  "label": "元阳县",
  "value": "532528"
}, {
  "label": "红河县",
  "value": "532529"
}, {
  "label": "金平苗族瑶族傣族自治县",
  "value": "532530"
}, {
  "label": "绿春县",
  "value": "532531"
}, {
  "label": "河口瑶族自治县",
  "value": "532532"
}], [{
  "label": "文山市",
  "value": "532601"
}, {
  "label": "砚山县",
  "value": "532622"
}, {
  "label": "西畴县",
  "value": "532623"
}, {
  "label": "麻栗坡县",
  "value": "532624"
}, {
  "label": "马关县",
  "value": "532625"
}, {
  "label": "丘北县",
  "value": "532626"
}, {
  "label": "广南县",
  "value": "532627"
}, {
  "label": "富宁县",
  "value": "532628"
}], [{
  "label": "景洪市",
  "value": "532801"
}, {
  "label": "勐海县",
  "value": "532822"
}, {
  "label": "勐腊县",
  "value": "532823"
}], [{
  "label": "大理市",
  "value": "532901"
}, {
  "label": "漾濞彝族自治县",
  "value": "532922"
}, {
  "label": "祥云县",
  "value": "532923"
}, {
  "label": "宾川县",
  "value": "532924"
}, {
  "label": "弥渡县",
  "value": "532925"
}, {
  "label": "南涧彝族自治县",
  "value": "532926"
}, {
  "label": "巍山彝族回族自治县",
  "value": "532927"
}, {
  "label": "永平县",
  "value": "532928"
}, {
  "label": "云龙县",
  "value": "532929"
}, {
  "label": "洱源县",
  "value": "532930"
}, {
  "label": "剑川县",
  "value": "532931"
}, {
  "label": "鹤庆县",
  "value": "532932"
}], [{
  "label": "瑞丽市",
  "value": "533102"
}, {
  "label": "芒市",
  "value": "533103"
}, {
  "label": "梁河县",
  "value": "533122"
}, {
  "label": "盈江县",
  "value": "533123"
}, {
  "label": "陇川县",
  "value": "533124"
}], [{
  "label": "泸水市",
  "value": "533301"
}, {
  "label": "福贡县",
  "value": "533323"
}, {
  "label": "贡山独龙族怒族自治县",
  "value": "533324"
}, {
  "label": "兰坪白族普米族自治县",
  "value": "533325"
}], [{
  "label": "香格里拉市",
  "value": "533401"
}, {
  "label": "德钦县",
  "value": "533422"
}, {
  "label": "维西傈僳族自治县",
  "value": "533423"
}]], [[{
  "label": "城关区",
  "value": "540102"
}, {
  "label": "堆龙德庆区",
  "value": "540103"
}, {
  "label": "林周县",
  "value": "540121"
}, {
  "label": "当雄县",
  "value": "540122"
}, {
  "label": "尼木县",
  "value": "540123"
}, {
  "label": "曲水县",
  "value": "540124"
}, {
  "label": "达孜县",
  "value": "540126"
}, {
  "label": "墨竹工卡县",
  "value": "540127"
}, {
  "label": "格尔木藏青工业园区",
  "value": "540171"
}, {
  "label": "拉萨经济技术开发区",
  "value": "540172"
}, {
  "label": "西藏文化旅游创意园区",
  "value": "540173"
}, {
  "label": "达孜工业园区",
  "value": "540174"
}], [{
  "label": "桑珠孜区",
  "value": "540202"
}, {
  "label": "南木林县",
  "value": "540221"
}, {
  "label": "江孜县",
  "value": "540222"
}, {
  "label": "定日县",
  "value": "540223"
}, {
  "label": "萨迦县",
  "value": "540224"
}, {
  "label": "拉孜县",
  "value": "540225"
}, {
  "label": "昂仁县",
  "value": "540226"
}, {
  "label": "谢通门县",
  "value": "540227"
}, {
  "label": "白朗县",
  "value": "540228"
}, {
  "label": "仁布县",
  "value": "540229"
}, {
  "label": "康马县",
  "value": "540230"
}, {
  "label": "定结县",
  "value": "540231"
}, {
  "label": "仲巴县",
  "value": "540232"
}, {
  "label": "亚东县",
  "value": "540233"
}, {
  "label": "吉隆县",
  "value": "540234"
}, {
  "label": "聂拉木县",
  "value": "540235"
}, {
  "label": "萨嘎县",
  "value": "540236"
}, {
  "label": "岗巴县",
  "value": "540237"
}], [{
  "label": "卡若区",
  "value": "540302"
}, {
  "label": "江达县",
  "value": "540321"
}, {
  "label": "贡觉县",
  "value": "540322"
}, {
  "label": "类乌齐县",
  "value": "540323"
}, {
  "label": "丁青县",
  "value": "540324"
}, {
  "label": "察雅县",
  "value": "540325"
}, {
  "label": "八宿县",
  "value": "540326"
}, {
  "label": "左贡县",
  "value": "540327"
}, {
  "label": "芒康县",
  "value": "540328"
}, {
  "label": "洛隆县",
  "value": "540329"
}, {
  "label": "边坝县",
  "value": "540330"
}], [{
  "label": "巴宜区",
  "value": "540402"
}, {
  "label": "工布江达县",
  "value": "540421"
}, {
  "label": "米林县",
  "value": "540422"
}, {
  "label": "墨脱县",
  "value": "540423"
}, {
  "label": "波密县",
  "value": "540424"
}, {
  "label": "察隅县",
  "value": "540425"
}, {
  "label": "朗县",
  "value": "540426"
}], [{
  "label": "乃东区",
  "value": "540502"
}, {
  "label": "扎囊县",
  "value": "540521"
}, {
  "label": "贡嘎县",
  "value": "540522"
}, {
  "label": "桑日县",
  "value": "540523"
}, {
  "label": "琼结县",
  "value": "540524"
}, {
  "label": "曲松县",
  "value": "540525"
}, {
  "label": "措美县",
  "value": "540526"
}, {
  "label": "洛扎县",
  "value": "540527"
}, {
  "label": "加查县",
  "value": "540528"
}, {
  "label": "隆子县",
  "value": "540529"
}, {
  "label": "错那县",
  "value": "540530"
}, {
  "label": "浪卡子县",
  "value": "540531"
}], [{
  "label": "那曲县",
  "value": "542421"
}, {
  "label": "嘉黎县",
  "value": "542422"
}, {
  "label": "比如县",
  "value": "542423"
}, {
  "label": "聂荣县",
  "value": "542424"
}, {
  "label": "安多县",
  "value": "542425"
}, {
  "label": "申扎县",
  "value": "542426"
}, {
  "label": "索县",
  "value": "542427"
}, {
  "label": "班戈县",
  "value": "542428"
}, {
  "label": "巴青县",
  "value": "542429"
}, {
  "label": "尼玛县",
  "value": "542430"
}, {
  "label": "双湖县",
  "value": "542431"
}], [{
  "label": "普兰县",
  "value": "542521"
}, {
  "label": "札达县",
  "value": "542522"
}, {
  "label": "噶尔县",
  "value": "542523"
}, {
  "label": "日土县",
  "value": "542524"
}, {
  "label": "革吉县",
  "value": "542525"
}, {
  "label": "改则县",
  "value": "542526"
}, {
  "label": "措勤县",
  "value": "542527"
}]], [[{
  "label": "新城区",
  "value": "610102"
}, {
  "label": "碑林区",
  "value": "610103"
}, {
  "label": "莲湖区",
  "value": "610104"
}, {
  "label": "灞桥区",
  "value": "610111"
}, {
  "label": "未央区",
  "value": "610112"
}, {
  "label": "雁塔区",
  "value": "610113"
}, {
  "label": "阎良区",
  "value": "610114"
}, {
  "label": "临潼区",
  "value": "610115"
}, {
  "label": "长安区",
  "value": "610116"
}, {
  "label": "高陵区",
  "value": "610117"
}, {
  "label": "鄠邑区",
  "value": "610118"
}, {
  "label": "蓝田县",
  "value": "610122"
}, {
  "label": "周至县",
  "value": "610124"
}], [{
  "label": "王益区",
  "value": "610202"
}, {
  "label": "印台区",
  "value": "610203"
}, {
  "label": "耀州区",
  "value": "610204"
}, {
  "label": "宜君县",
  "value": "610222"
}], [{
  "label": "渭滨区",
  "value": "610302"
}, {
  "label": "金台区",
  "value": "610303"
}, {
  "label": "陈仓区",
  "value": "610304"
}, {
  "label": "凤翔县",
  "value": "610322"
}, {
  "label": "岐山县",
  "value": "610323"
}, {
  "label": "扶风县",
  "value": "610324"
}, {
  "label": "眉县",
  "value": "610326"
}, {
  "label": "陇县",
  "value": "610327"
}, {
  "label": "千阳县",
  "value": "610328"
}, {
  "label": "麟游县",
  "value": "610329"
}, {
  "label": "凤县",
  "value": "610330"
}, {
  "label": "太白县",
  "value": "610331"
}], [{
  "label": "秦都区",
  "value": "610402"
}, {
  "label": "杨陵区",
  "value": "610403"
}, {
  "label": "渭城区",
  "value": "610404"
}, {
  "label": "三原县",
  "value": "610422"
}, {
  "label": "泾阳县",
  "value": "610423"
}, {
  "label": "乾县",
  "value": "610424"
}, {
  "label": "礼泉县",
  "value": "610425"
}, {
  "label": "永寿县",
  "value": "610426"
}, {
  "label": "彬县",
  "value": "610427"
}, {
  "label": "长武县",
  "value": "610428"
}, {
  "label": "旬邑县",
  "value": "610429"
}, {
  "label": "淳化县",
  "value": "610430"
}, {
  "label": "武功县",
  "value": "610431"
}, {
  "label": "兴平市",
  "value": "610481"
}], [{
  "label": "临渭区",
  "value": "610502"
}, {
  "label": "华州区",
  "value": "610503"
}, {
  "label": "潼关县",
  "value": "610522"
}, {
  "label": "大荔县",
  "value": "610523"
}, {
  "label": "合阳县",
  "value": "610524"
}, {
  "label": "澄城县",
  "value": "610525"
}, {
  "label": "蒲城县",
  "value": "610526"
}, {
  "label": "白水县",
  "value": "610527"
}, {
  "label": "富平县",
  "value": "610528"
}, {
  "label": "韩城市",
  "value": "610581"
}, {
  "label": "华阴市",
  "value": "610582"
}], [{
  "label": "宝塔区",
  "value": "610602"
}, {
  "label": "安塞区",
  "value": "610603"
}, {
  "label": "延长县",
  "value": "610621"
}, {
  "label": "延川县",
  "value": "610622"
}, {
  "label": "子长县",
  "value": "610623"
}, {
  "label": "志丹县",
  "value": "610625"
}, {
  "label": "吴起县",
  "value": "610626"
}, {
  "label": "甘泉县",
  "value": "610627"
}, {
  "label": "富县",
  "value": "610628"
}, {
  "label": "洛川县",
  "value": "610629"
}, {
  "label": "宜川县",
  "value": "610630"
}, {
  "label": "黄龙县",
  "value": "610631"
}, {
  "label": "黄陵县",
  "value": "610632"
}], [{
  "label": "汉台区",
  "value": "610702"
}, {
  "label": "南郑区",
  "value": "610703"
}, {
  "label": "城固县",
  "value": "610722"
}, {
  "label": "洋县",
  "value": "610723"
}, {
  "label": "西乡县",
  "value": "610724"
}, {
  "label": "勉县",
  "value": "610725"
}, {
  "label": "宁强县",
  "value": "610726"
}, {
  "label": "略阳县",
  "value": "610727"
}, {
  "label": "镇巴县",
  "value": "610728"
}, {
  "label": "留坝县",
  "value": "610729"
}, {
  "label": "佛坪县",
  "value": "610730"
}], [{
  "label": "榆阳区",
  "value": "610802"
}, {
  "label": "横山区",
  "value": "610803"
}, {
  "label": "府谷县",
  "value": "610822"
}, {
  "label": "靖边县",
  "value": "610824"
}, {
  "label": "定边县",
  "value": "610825"
}, {
  "label": "绥德县",
  "value": "610826"
}, {
  "label": "米脂县",
  "value": "610827"
}, {
  "label": "佳县",
  "value": "610828"
}, {
  "label": "吴堡县",
  "value": "610829"
}, {
  "label": "清涧县",
  "value": "610830"
}, {
  "label": "子洲县",
  "value": "610831"
}, {
  "label": "神木市",
  "value": "610881"
}], [{
  "label": "汉滨区",
  "value": "610902"
}, {
  "label": "汉阴县",
  "value": "610921"
}, {
  "label": "石泉县",
  "value": "610922"
}, {
  "label": "宁陕县",
  "value": "610923"
}, {
  "label": "紫阳县",
  "value": "610924"
}, {
  "label": "岚皋县",
  "value": "610925"
}, {
  "label": "平利县",
  "value": "610926"
}, {
  "label": "镇坪县",
  "value": "610927"
}, {
  "label": "旬阳县",
  "value": "610928"
}, {
  "label": "白河县",
  "value": "610929"
}], [{
  "label": "商州区",
  "value": "611002"
}, {
  "label": "洛南县",
  "value": "611021"
}, {
  "label": "丹凤县",
  "value": "611022"
}, {
  "label": "商南县",
  "value": "611023"
}, {
  "label": "山阳县",
  "value": "611024"
}, {
  "label": "镇安县",
  "value": "611025"
}, {
  "label": "柞水县",
  "value": "611026"
}]], [[{
  "label": "城关区",
  "value": "620102"
}, {
  "label": "七里河区",
  "value": "620103"
}, {
  "label": "西固区",
  "value": "620104"
}, {
  "label": "安宁区",
  "value": "620105"
}, {
  "label": "红古区",
  "value": "620111"
}, {
  "label": "永登县",
  "value": "620121"
}, {
  "label": "皋兰县",
  "value": "620122"
}, {
  "label": "榆中县",
  "value": "620123"
}, {
  "label": "兰州新区",
  "value": "620171"
}], [{
  "label": "嘉峪关市",
  "value": "620201"
}], [{
  "label": "金川区",
  "value": "620302"
}, {
  "label": "永昌县",
  "value": "620321"
}], [{
  "label": "白银区",
  "value": "620402"
}, {
  "label": "平川区",
  "value": "620403"
}, {
  "label": "靖远县",
  "value": "620421"
}, {
  "label": "会宁县",
  "value": "620422"
}, {
  "label": "景泰县",
  "value": "620423"
}], [{
  "label": "秦州区",
  "value": "620502"
}, {
  "label": "麦积区",
  "value": "620503"
}, {
  "label": "清水县",
  "value": "620521"
}, {
  "label": "秦安县",
  "value": "620522"
}, {
  "label": "甘谷县",
  "value": "620523"
}, {
  "label": "武山县",
  "value": "620524"
}, {
  "label": "张家川回族自治县",
  "value": "620525"
}], [{
  "label": "凉州区",
  "value": "620602"
}, {
  "label": "民勤县",
  "value": "620621"
}, {
  "label": "古浪县",
  "value": "620622"
}, {
  "label": "天祝藏族自治县",
  "value": "620623"
}], [{
  "label": "甘州区",
  "value": "620702"
}, {
  "label": "肃南裕固族自治县",
  "value": "620721"
}, {
  "label": "民乐县",
  "value": "620722"
}, {
  "label": "临泽县",
  "value": "620723"
}, {
  "label": "高台县",
  "value": "620724"
}, {
  "label": "山丹县",
  "value": "620725"
}], [{
  "label": "崆峒区",
  "value": "620802"
}, {
  "label": "泾川县",
  "value": "620821"
}, {
  "label": "灵台县",
  "value": "620822"
}, {
  "label": "崇信县",
  "value": "620823"
}, {
  "label": "华亭县",
  "value": "620824"
}, {
  "label": "庄浪县",
  "value": "620825"
}, {
  "label": "静宁县",
  "value": "620826"
}, {
  "label": "平凉工业园区",
  "value": "620871"
}], [{
  "label": "肃州区",
  "value": "620902"
}, {
  "label": "金塔县",
  "value": "620921"
}, {
  "label": "瓜州县",
  "value": "620922"
}, {
  "label": "肃北蒙古族自治县",
  "value": "620923"
}, {
  "label": "阿克塞哈萨克族自治县",
  "value": "620924"
}, {
  "label": "玉门市",
  "value": "620981"
}, {
  "label": "敦煌市",
  "value": "620982"
}], [{
  "label": "西峰区",
  "value": "621002"
}, {
  "label": "庆城县",
  "value": "621021"
}, {
  "label": "环县",
  "value": "621022"
}, {
  "label": "华池县",
  "value": "621023"
}, {
  "label": "合水县",
  "value": "621024"
}, {
  "label": "正宁县",
  "value": "621025"
}, {
  "label": "宁县",
  "value": "621026"
}, {
  "label": "镇原县",
  "value": "621027"
}], [{
  "label": "安定区",
  "value": "621102"
}, {
  "label": "通渭县",
  "value": "621121"
}, {
  "label": "陇西县",
  "value": "621122"
}, {
  "label": "渭源县",
  "value": "621123"
}, {
  "label": "临洮县",
  "value": "621124"
}, {
  "label": "漳县",
  "value": "621125"
}, {
  "label": "岷县",
  "value": "621126"
}], [{
  "label": "武都区",
  "value": "621202"
}, {
  "label": "成县",
  "value": "621221"
}, {
  "label": "文县",
  "value": "621222"
}, {
  "label": "宕昌县",
  "value": "621223"
}, {
  "label": "康县",
  "value": "621224"
}, {
  "label": "西和县",
  "value": "621225"
}, {
  "label": "礼县",
  "value": "621226"
}, {
  "label": "徽县",
  "value": "621227"
}, {
  "label": "两当县",
  "value": "621228"
}], [{
  "label": "临夏市",
  "value": "622901"
}, {
  "label": "临夏县",
  "value": "622921"
}, {
  "label": "康乐县",
  "value": "622922"
}, {
  "label": "永靖县",
  "value": "622923"
}, {
  "label": "广河县",
  "value": "622924"
}, {
  "label": "和政县",
  "value": "622925"
}, {
  "label": "东乡族自治县",
  "value": "622926"
}, {
  "label": "积石山保安族东乡族撒拉族自治县",
  "value": "622927"
}], [{
  "label": "合作市",
  "value": "623001"
}, {
  "label": "临潭县",
  "value": "623021"
}, {
  "label": "卓尼县",
  "value": "623022"
}, {
  "label": "舟曲县",
  "value": "623023"
}, {
  "label": "迭部县",
  "value": "623024"
}, {
  "label": "玛曲县",
  "value": "623025"
}, {
  "label": "碌曲县",
  "value": "623026"
}, {
  "label": "夏河县",
  "value": "623027"
}]], [[{
  "label": "城东区",
  "value": "630102"
}, {
  "label": "城中区",
  "value": "630103"
}, {
  "label": "城西区",
  "value": "630104"
}, {
  "label": "城北区",
  "value": "630105"
}, {
  "label": "大通回族土族自治县",
  "value": "630121"
}, {
  "label": "湟中县",
  "value": "630122"
}, {
  "label": "湟源县",
  "value": "630123"
}], [{
  "label": "乐都区",
  "value": "630202"
}, {
  "label": "平安区",
  "value": "630203"
}, {
  "label": "民和回族土族自治县",
  "value": "630222"
}, {
  "label": "互助土族自治县",
  "value": "630223"
}, {
  "label": "化隆回族自治县",
  "value": "630224"
}, {
  "label": "循化撒拉族自治县",
  "value": "630225"
}], [{
  "label": "门源回族自治县",
  "value": "632221"
}, {
  "label": "祁连县",
  "value": "632222"
}, {
  "label": "海晏县",
  "value": "632223"
}, {
  "label": "刚察县",
  "value": "632224"
}], [{
  "label": "同仁县",
  "value": "632321"
}, {
  "label": "尖扎县",
  "value": "632322"
}, {
  "label": "泽库县",
  "value": "632323"
}, {
  "label": "河南蒙古族自治县",
  "value": "632324"
}], [{
  "label": "共和县",
  "value": "632521"
}, {
  "label": "同德县",
  "value": "632522"
}, {
  "label": "贵德县",
  "value": "632523"
}, {
  "label": "兴海县",
  "value": "632524"
}, {
  "label": "贵南县",
  "value": "632525"
}], [{
  "label": "玛沁县",
  "value": "632621"
}, {
  "label": "班玛县",
  "value": "632622"
}, {
  "label": "甘德县",
  "value": "632623"
}, {
  "label": "达日县",
  "value": "632624"
}, {
  "label": "久治县",
  "value": "632625"
}, {
  "label": "玛多县",
  "value": "632626"
}], [{
  "label": "玉树市",
  "value": "632701"
}, {
  "label": "杂多县",
  "value": "632722"
}, {
  "label": "称多县",
  "value": "632723"
}, {
  "label": "治多县",
  "value": "632724"
}, {
  "label": "囊谦县",
  "value": "632725"
}, {
  "label": "曲麻莱县",
  "value": "632726"
}], [{
  "label": "格尔木市",
  "value": "632801"
}, {
  "label": "德令哈市",
  "value": "632802"
}, {
  "label": "乌兰县",
  "value": "632821"
}, {
  "label": "都兰县",
  "value": "632822"
}, {
  "label": "天峻县",
  "value": "632823"
}, {
  "label": "大柴旦行政委员会",
  "value": "632857"
}, {
  "label": "冷湖行政委员会",
  "value": "632858"
}, {
  "label": "茫崖行政委员会",
  "value": "632859"
}]], [[{
  "label": "兴庆区",
  "value": "640104"
}, {
  "label": "西夏区",
  "value": "640105"
}, {
  "label": "金凤区",
  "value": "640106"
}, {
  "label": "永宁县",
  "value": "640121"
}, {
  "label": "贺兰县",
  "value": "640122"
}, {
  "label": "灵武市",
  "value": "640181"
}], [{
  "label": "大武口区",
  "value": "640202"
}, {
  "label": "惠农区",
  "value": "640205"
}, {
  "label": "平罗县",
  "value": "640221"
}], [{
  "label": "利通区",
  "value": "640302"
}, {
  "label": "红寺堡区",
  "value": "640303"
}, {
  "label": "盐池县",
  "value": "640323"
}, {
  "label": "同心县",
  "value": "640324"
}, {
  "label": "青铜峡市",
  "value": "640381"
}], [{
  "label": "原州区",
  "value": "640402"
}, {
  "label": "西吉县",
  "value": "640422"
}, {
  "label": "隆德县",
  "value": "640423"
}, {
  "label": "泾源县",
  "value": "640424"
}, {
  "label": "彭阳县",
  "value": "640425"
}], [{
  "label": "沙坡头区",
  "value": "640502"
}, {
  "label": "中宁县",
  "value": "640521"
}, {
  "label": "海原县",
  "value": "640522"
}]], [[{
  "label": "天山区",
  "value": "650102"
}, {
  "label": "沙依巴克区",
  "value": "650103"
}, {
  "label": "新市区",
  "value": "650104"
}, {
  "label": "水磨沟区",
  "value": "650105"
}, {
  "label": "头屯河区",
  "value": "650106"
}, {
  "label": "达坂城区",
  "value": "650107"
}, {
  "label": "米东区",
  "value": "650109"
}, {
  "label": "乌鲁木齐县",
  "value": "650121"
}, {
  "label": "乌鲁木齐经济技术开发区",
  "value": "650171"
}, {
  "label": "乌鲁木齐高新技术产业开发区",
  "value": "650172"
}], [{
  "label": "独山子区",
  "value": "650202"
}, {
  "label": "克拉玛依区",
  "value": "650203"
}, {
  "label": "白碱滩区",
  "value": "650204"
}, {
  "label": "乌尔禾区",
  "value": "650205"
}], [{
  "label": "高昌区",
  "value": "650402"
}, {
  "label": "鄯善县",
  "value": "650421"
}, {
  "label": "托克逊县",
  "value": "650422"
}], [{
  "label": "伊州区",
  "value": "650502"
}, {
  "label": "巴里坤哈萨克自治县",
  "value": "650521"
}, {
  "label": "伊吾县",
  "value": "650522"
}], [{
  "label": "昌吉市",
  "value": "652301"
}, {
  "label": "阜康市",
  "value": "652302"
}, {
  "label": "呼图壁县",
  "value": "652323"
}, {
  "label": "玛纳斯县",
  "value": "652324"
}, {
  "label": "奇台县",
  "value": "652325"
}, {
  "label": "吉木萨尔县",
  "value": "652327"
}, {
  "label": "木垒哈萨克自治县",
  "value": "652328"
}], [{
  "label": "博乐市",
  "value": "652701"
}, {
  "label": "阿拉山口市",
  "value": "652702"
}, {
  "label": "精河县",
  "value": "652722"
}, {
  "label": "温泉县",
  "value": "652723"
}], [{
  "label": "库尔勒市",
  "value": "652801"
}, {
  "label": "轮台县",
  "value": "652822"
}, {
  "label": "尉犁县",
  "value": "652823"
}, {
  "label": "若羌县",
  "value": "652824"
}, {
  "label": "且末县",
  "value": "652825"
}, {
  "label": "焉耆回族自治县",
  "value": "652826"
}, {
  "label": "和静县",
  "value": "652827"
}, {
  "label": "和硕县",
  "value": "652828"
}, {
  "label": "博湖县",
  "value": "652829"
}, {
  "label": "库尔勒经济技术开发区",
  "value": "652871"
}], [{
  "label": "阿克苏市",
  "value": "652901"
}, {
  "label": "温宿县",
  "value": "652922"
}, {
  "label": "库车县",
  "value": "652923"
}, {
  "label": "沙雅县",
  "value": "652924"
}, {
  "label": "新和县",
  "value": "652925"
}, {
  "label": "拜城县",
  "value": "652926"
}, {
  "label": "乌什县",
  "value": "652927"
}, {
  "label": "阿瓦提县",
  "value": "652928"
}, {
  "label": "柯坪县",
  "value": "652929"
}], [{
  "label": "阿图什市",
  "value": "653001"
}, {
  "label": "阿克陶县",
  "value": "653022"
}, {
  "label": "阿合奇县",
  "value": "653023"
}, {
  "label": "乌恰县",
  "value": "653024"
}], [{
  "label": "喀什市",
  "value": "653101"
}, {
  "label": "疏附县",
  "value": "653121"
}, {
  "label": "疏勒县",
  "value": "653122"
}, {
  "label": "英吉沙县",
  "value": "653123"
}, {
  "label": "泽普县",
  "value": "653124"
}, {
  "label": "莎车县",
  "value": "653125"
}, {
  "label": "叶城县",
  "value": "653126"
}, {
  "label": "麦盖提县",
  "value": "653127"
}, {
  "label": "岳普湖县",
  "value": "653128"
}, {
  "label": "伽师县",
  "value": "653129"
}, {
  "label": "巴楚县",
  "value": "653130"
}, {
  "label": "塔什库尔干塔吉克自治县",
  "value": "653131"
}], [{
  "label": "和田市",
  "value": "653201"
}, {
  "label": "和田县",
  "value": "653221"
}, {
  "label": "墨玉县",
  "value": "653222"
}, {
  "label": "皮山县",
  "value": "653223"
}, {
  "label": "洛浦县",
  "value": "653224"
}, {
  "label": "策勒县",
  "value": "653225"
}, {
  "label": "于田县",
  "value": "653226"
}, {
  "label": "民丰县",
  "value": "653227"
}], [{
  "label": "伊宁市",
  "value": "654002"
}, {
  "label": "奎屯市",
  "value": "654003"
}, {
  "label": "霍尔果斯市",
  "value": "654004"
}, {
  "label": "伊宁县",
  "value": "654021"
}, {
  "label": "察布查尔锡伯自治县",
  "value": "654022"
}, {
  "label": "霍城县",
  "value": "654023"
}, {
  "label": "巩留县",
  "value": "654024"
}, {
  "label": "新源县",
  "value": "654025"
}, {
  "label": "昭苏县",
  "value": "654026"
}, {
  "label": "特克斯县",
  "value": "654027"
}, {
  "label": "尼勒克县",
  "value": "654028"
}], [{
  "label": "塔城市",
  "value": "654201"
}, {
  "label": "乌苏市",
  "value": "654202"
}, {
  "label": "额敏县",
  "value": "654221"
}, {
  "label": "沙湾县",
  "value": "654223"
}, {
  "label": "托里县",
  "value": "654224"
}, {
  "label": "裕民县",
  "value": "654225"
}, {
  "label": "和布克赛尔蒙古自治县",
  "value": "654226"
}], [{
  "label": "阿勒泰市",
  "value": "654301"
}, {
  "label": "布尔津县",
  "value": "654321"
}, {
  "label": "富蕴县",
  "value": "654322"
}, {
  "label": "福海县",
  "value": "654323"
}, {
  "label": "哈巴河县",
  "value": "654324"
}, {
  "label": "青河县",
  "value": "654325"
}, {
  "label": "吉木乃县",
  "value": "654326"
}], [{
  "label": "石河子市",
  "value": "659001"
}, {
  "label": "阿拉尔市",
  "value": "659002"
}, {
  "label": "图木舒克市",
  "value": "659003"
}, {
  "label": "五家渠市",
  "value": "659004"
}, {
  "label": "铁门关市",
  "value": "659006"
}]], [[{
  "label": "台北",
  "value": "660101"
}], [{
  "label": "高雄",
  "value": "660201"
}], [{
  "label": "基隆",
  "value": "660301"
}], [{
  "label": "台中",
  "value": "660401"
}], [{
  "label": "台南",
  "value": "660501"
}], [{
  "label": "新竹",
  "value": "660601"
}], [{
  "label": "嘉义",
  "value": "660701"
}], [{
  "label": "宜兰",
  "value": "660801"
}], [{
  "label": "桃园",
  "value": "660901"
}], [{
  "label": "苗栗",
  "value": "661001"
}], [{
  "label": "彰化",
  "value": "661101"
}], [{
  "label": "南投",
  "value": "661201"
}], [{
  "label": "云林",
  "value": "661301"
}], [{
  "label": "屏东",
  "value": "661401"
}], [{
  "label": "台东",
  "value": "661501"
}], [{
  "label": "花莲",
  "value": "661601"
}], [{
  "label": "澎湖",
  "value": "661701"
}]], [[{
  "label": "香港岛",
  "value": "670101"
}], [{
  "label": "九龙",
  "value": "670201"
}], [{
  "label": "新界",
  "value": "670301"
}]], [[{
  "label": "澳门半岛",
  "value": "680101"
}], [{
  "label": "氹仔岛",
  "value": "680201"
}], [{
  "label": "路环岛",
  "value": "680301"
}], [{
  "label": "路氹城",
  "value": "680401"
}]]];
var _default = areaData;
exports.default = _default;

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 40:
/*!**************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/deepClone.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

// 深度克隆
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if ((0, _typeof2.default)(obj) !== "object" && typeof obj !== 'function') {
    //原始类型直接返回
    return obj;
  }
  var o = isArray(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = (0, _typeof2.default)(obj[i]) === "object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}
var _default = deepClone;
exports.default = _default;

/***/ }),

/***/ 41:
/*!*********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/test.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 验证电子邮箱格式
 */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
 * 验证URL格式
 */
function url(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value);
}

/**
 * 验证日期格式
 */
function date(value) {
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
 * 验证ISO类型的日期格式
 */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
 * 验证十进制数字
 */
function number(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}

/**
 * 验证整数
 */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
 * 验证身份证号码
 */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
}

/**
 * 是否车牌号
 */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  } else if (value.length === 8) {
    return xreg.test(value);
  } else {
    return false;
  }
}

/**
 * 金额,只允许2位小数
 */
function amount(value) {
  //金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
 * 中文
 */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
 * 只能输入字母
 */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
function enOrNum(value) {
  //英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
 * 验证一个值范围[min, max]
 */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
 * 验证一个长度范围[min, max]
 */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
 * 是否固定电话
 */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
 * 判断是否为空
 */
function empty(value) {
  switch ((0, _typeof2.default)(value)) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (0 === value || isNaN(value)) return true;
      break;
    case 'object':
      if (null === value || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;
  }
  return false;
}

/**
 * 是否json字符串
 */
function jsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value);
      if ((0, _typeof2.default)(obj) == 'object' && obj) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
 * 是否数组
 */
function array(value) {
  if (typeof Array.isArray === "function") {
    return Array.isArray(value);
  } else {
    return Object.prototype.toString.call(value) === "[object Array]";
  }
}

/**
 * 是否对象
 */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
function code(value) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}
var _default = {
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code
};
exports.default = _default;

/***/ }),

/***/ 42:
/*!****************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/queryParams.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 对象转url参数
 * @param {*} data,对象
 * @param {*} isPrefix,是否自动加上"?"
 */
function queryParams() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';
  var _loop = function _loop(key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push(key + '[' + i + ']=' + value[i]);
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push(key + '=' + _value);
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = "";
          value.forEach(function (_value) {
            commaStr += (commaStr ? "," : "") + _value;
          });
          _result.push(key + '=' + commaStr);
          break;
        default:
          value.forEach(function (_value) {
            _result.push(key + '[]=' + _value);
          });
      }
    } else {
      _result.push(key + '=' + value);
    }
  };
  for (var key in data) {
    var _ret = _loop(key);
    if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}
var _default = queryParams;
exports.default = _default;

/***/ }),

/***/ 43:
/*!**********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/route.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 44));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 46));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
/**
 * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
 * 并且带有路由拦截功能
 */
var Router = /*#__PURE__*/function () {
  function Router() {
    (0, _classCallCheck2.default)(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1,
      // navigateBack页面后退时,回退的层数
      params: {},
      // 传递的参数
      animationType: 'pop-in',
      // 窗口动画,只在APP有效
      animationDuration: 300,
      // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  (0, _createClass2.default)(Router, [{
    key: "addRootPath",
    value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, {
    key: "mixinParam",
    value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&" + query;
      } else {
        // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
        query = uni.$u.queryParams(params);
        return url += query;
      }
    }

    // 对外的方法名称
  }, {
    key: "route",
    value: function () {
      var _route = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var options,
          params,
          mergeConfig,
          isNext,
          _args = arguments;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};
                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }
                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {
                  _context.next = 14;
                  break;
                }
                _context.next = 10;
                return new Promise(function (resolve, reject) {
                  uni.$u.routeIntercept(mergeConfig, resolve);
                });
              case 10:
                isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);
                _context.next = 15;
                break;
              case 14:
                this.openPage(mergeConfig);
              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function route() {
        return _route.apply(this, arguments);
      }
      return route;
    }() // 执行路由跳转
  }, {
    key: "openPage",
    value: function openPage(config) {
      // 解构参数
      var url = config.url,
        type = config.type,
        delta = config.delta,
        animationType = config.animationType,
        animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration
        });
      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url
        });
      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url
        });
      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url
        });
      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta
        });
      }
    }
  }]);
  return Router;
}();
var _default = new Router().route;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 431:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 44));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ 432));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 46));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 433));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 434));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 435));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 436));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 438));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e34) { throw _e34; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e35) { didErr = true; err = _e35; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function n(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var s = n(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) {
              e.hasOwnProperty(t) && (this[t] = e[t]);
            }
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) {
              t[s + i >>> 2] = n[i >>> 2];
            }
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) {
              n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            }
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) {
              n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            }
            return new o.init(n, t);
          }
        },
        h = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        l = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var h = 0; h < c; h += i) {
                this._doProcessBlock(s, h);
              }
              var l = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(l, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = l.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          l.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  r = s,
  i = (n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) {
          a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            p = e[t + 2],
            f = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            I = e[t + 10],
            S = e[t + 11],
            b = e[t + 12],
            k = e[t + 13],
            A = e[t + 14],
            P = e[t + 15],
            T = i[0],
            C = i[1],
            x = i[2],
            O = i[3];
          T = u(T, C, x, O, o, 7, a[0]), O = u(O, T, C, x, c, 12, a[1]), x = u(x, O, T, C, p, 17, a[2]), C = u(C, x, O, T, f, 22, a[3]), T = u(T, C, x, O, g, 7, a[4]), O = u(O, T, C, x, m, 12, a[5]), x = u(x, O, T, C, y, 17, a[6]), C = u(C, x, O, T, _, 22, a[7]), T = u(T, C, x, O, w, 7, a[8]), O = u(O, T, C, x, v, 12, a[9]), x = u(x, O, T, C, I, 17, a[10]), C = u(C, x, O, T, S, 22, a[11]), T = u(T, C, x, O, b, 7, a[12]), O = u(O, T, C, x, k, 12, a[13]), x = u(x, O, T, C, A, 17, a[14]), T = h(T, C = u(C, x, O, T, P, 22, a[15]), x, O, c, 5, a[16]), O = h(O, T, C, x, y, 9, a[17]), x = h(x, O, T, C, S, 14, a[18]), C = h(C, x, O, T, o, 20, a[19]), T = h(T, C, x, O, m, 5, a[20]), O = h(O, T, C, x, I, 9, a[21]), x = h(x, O, T, C, P, 14, a[22]), C = h(C, x, O, T, g, 20, a[23]), T = h(T, C, x, O, v, 5, a[24]), O = h(O, T, C, x, A, 9, a[25]), x = h(x, O, T, C, f, 14, a[26]), C = h(C, x, O, T, w, 20, a[27]), T = h(T, C, x, O, k, 5, a[28]), O = h(O, T, C, x, p, 9, a[29]), x = h(x, O, T, C, _, 14, a[30]), T = l(T, C = h(C, x, O, T, b, 20, a[31]), x, O, m, 4, a[32]), O = l(O, T, C, x, w, 11, a[33]), x = l(x, O, T, C, S, 16, a[34]), C = l(C, x, O, T, A, 23, a[35]), T = l(T, C, x, O, c, 4, a[36]), O = l(O, T, C, x, g, 11, a[37]), x = l(x, O, T, C, _, 16, a[38]), C = l(C, x, O, T, I, 23, a[39]), T = l(T, C, x, O, k, 4, a[40]), O = l(O, T, C, x, o, 11, a[41]), x = l(x, O, T, C, f, 16, a[42]), C = l(C, x, O, T, y, 23, a[43]), T = l(T, C, x, O, v, 4, a[44]), O = l(O, T, C, x, b, 11, a[45]), x = l(x, O, T, C, P, 16, a[46]), T = d(T, C = l(C, x, O, T, p, 23, a[47]), x, O, o, 6, a[48]), O = d(O, T, C, x, _, 10, a[49]), x = d(x, O, T, C, A, 15, a[50]), C = d(C, x, O, T, m, 21, a[51]), T = d(T, C, x, O, b, 6, a[52]), O = d(O, T, C, x, f, 10, a[53]), x = d(x, O, T, C, I, 15, a[54]), C = d(C, x, O, T, c, 21, a[55]), T = d(T, C, x, O, w, 6, a[56]), O = d(O, T, C, x, P, 10, a[57]), x = d(x, O, T, C, y, 15, a[58]), C = d(C, x, O, T, k, 21, a[59]), T = d(T, C, x, O, g, 6, a[60]), O = d(O, T, C, x, S, 10, a[61]), x = d(x, O, T, C, p, 15, a[62]), C = d(C, x, O, T, v, 21, a[63]), i[0] = i[0] + T | 0, i[1] = i[1] + C | 0, i[2] = i[2] + x | 0, i[3] = i[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var h = c[u];
            c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), n(function (e, t) {
    var n;
    e.exports = (n = r, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {
            a[u] ^= 1549556828, c[u] ^= 909522486;
          }
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), n(function (e, t) {
    e.exports = r.HmacMD5;
  })),
  o = n(function (e, t) {
    e.exports = r.enc.Utf8;
  }),
  a = n(function (e, t) {
    var n;
    e.exports = (n = r, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) {
          if (o % 4) {
            var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
              c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
            r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
          }
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) {
            for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
              r.push(s.charAt(o >>> 6 * (3 - a) & 63));
            }
          }
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) {
            r.push(c);
          }
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) {
              r[n.charCodeAt(i)] = i;
            }
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var c = "FUNCTION",
  u = "OBJECT",
  h = "CLIENT_DB",
  l = "pending",
  d = "fulfilled",
  p = "rejected";
function f(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function g(e) {
  return "object" === f(e);
}
function m(e) {
  return "function" == typeof e;
}
function y(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var _ = "REJECTED",
  w = "NOT_PENDING";
var v = /*#__PURE__*/function () {
  function v() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref.createPromise,
      _ref$retryRule = _ref.retryRule,
      t = _ref$retryRule === void 0 ? _ : _ref$retryRule;
    (0, _classCallCheck2.default)(this, v);
    this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t;
  }
  (0, _createClass2.default)(v, [{
    key: "needRetry",
    get: function get() {
      if (!this.status) return !0;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
  }, {
    key: "exec",
    value: function exec() {
      var _this = this;
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then(function (e) {
        return _this.status = d, Promise.resolve(e);
      }, function (e) {
        return _this.status = p, Promise.reject(e);
      }), this.promise) : this.promise;
    }
  }]);
  return v;
}();
function I(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var S = "development" === "development",
  b = "mp-weixin",
  k = "true" === undefined || !0 === undefined,
  A = I([]),
  P = "h5" === b ? "web" : "app-plus" === b ? "app" : b,
  T = I(undefined),
  C = I([]) || [],
  x = true;
var O = "";
try {
  O = (__webpack_require__(/*! uni-stat-config */ 439).default || __webpack_require__(/*! uni-stat-config */ 439)).appid;
} catch (e) {}
var E = {};
function L(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = E, s = e, Object.prototype.hasOwnProperty.call(n, s) || (E[e] = t), E[e];
}
"app" === P && (E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var R = ["invoke", "success", "fail", "complete"],
  U = L("_globalUniCloudInterceptor");
function N(e, t) {
  U[e] || (U[e] = {}), g(t) && Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      s || (s = U[e][t] = []), -1 === s.indexOf(n) && m(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function D(e, t) {
  U[e] || (U[e] = {}), g(t) ? Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete U[e];
}
function M(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function q(e, t) {
  return U[e] && U[e][t] || [];
}
function F(e) {
  N("callObject", e);
}
var K = L("_globalUniCloudListener"),
  j = "response",
  $ = "needLogin",
  B = "refreshToken",
  W = "clientdb",
  H = "cloudfunction",
  z = "cloudobject";
function J(e) {
  return K[e] || (K[e] = []), K[e];
}
function G(e, t) {
  var n = J(e);
  n.includes(t) || n.push(t);
}
function V(e, t) {
  var n = J(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function Y(e, t) {
  var n = J(e);
  for (var _e2 = 0; _e2 < n.length; _e2++) {
    (0, n[_e2])(t);
  }
}
var Q,
  X = !1;
function Z() {
  return Q || (Q = new Promise(function (e) {
    X && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (X = !0, e());
      }
      X || setTimeout(function () {
        t();
      }, 30);
    }();
  }), Q);
}
function ee(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    m(_s2) && (t[_n2] = y(_s2));
  }
  return t;
}
var te = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(te, _Error);
  var _super = _createSuper(te);
  function te(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, te);
    _this2 = _super.call(this, e.message), _this2.errMsg = e.message || e.errMsg || "unknown system error", _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(te, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return te;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
var ne = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  }
};
function se() {
  return {
    token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"),
    tokenExpired: ne.getStorageSync("uni_id_token_expired")
  };
}
function re() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref2.token,
    t = _ref2.tokenExpired;
  e && ne.setStorageSync("uni_id_token", e), t && ne.setStorageSync("uni_id_token_expired", t);
}
var ie, oe;
function ae() {
  return ie || (ie = uni.getSystemInfoSync()), ie;
}
function ce() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
function ue() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (oe) return _objectSpread(_objectSpread({}, oe), {}, {
    locale: e,
    LOCALE: e
  });
  var t = ae(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
  for (var _e3 = 0; _e3 < o.length; _e3++) {
    delete t[o[_e3]];
  }
  return oe = _objectSpread(_objectSpread({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, ce()), t), _objectSpread(_objectSpread({}, oe), {}, {
    locale: e,
    LOCALE: e
  });
}
var he = {
  sign: function sign(e, t) {
    var n = "";
    return Object.keys(e).sort().forEach(function (t) {
      e[t] && (n = n + "&" + t + "=" + e[t]);
    }), n = n.slice(1), i(n, t).toString();
  },
  wrappedRequest: function wrappedRequest(e, t) {
    return new Promise(function (n, s) {
      t(Object.assign(e, {
        complete: function complete(e) {
          e || (e = {}), S && "web" === P && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
          var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
          if (!e.statusCode || e.statusCode >= 400) {
            var _n4 = e.data && e.data.error && e.data.error.code || "SYS_ERR",
              _r = e.data && e.data.error && e.data.error.message || e.errMsg || "request:fail";
            return s(new te({
              code: _n4,
              message: _r,
              requestId: t
            }));
          }
          var r = e.data;
          if (r.error) return s(new te({
            code: r.error.code,
            message: r.error.message,
            requestId: t
          }));
          r.result = r.data, r.requestId = t, delete r.data, n(r);
        }
      }));
    });
  },
  toBase64: function toBase64(e) {
    return a.stringify(o.parse(e));
  }
};
var le = /*#__PURE__*/function () {
  function le(e) {
    var _this3 = this;
    (0, _classCallCheck2.default)(this, le);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), this.config = Object.assign({}, {
      endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({
      createPromise: function createPromise() {
        return _this3.requestAuth(_this3.setupRequest({
          method: "serverless.auth.user.anonymousAuthorize",
          params: "{}"
        }, "auth")).then(function (e) {
          if (!e.result || !e.result.accessToken) throw new te({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          });
          _this3.setAccessToken(e.result.accessToken);
        });
      },
      retryRule: w
    });
  }
  (0, _createClass2.default)(le, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return he.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this4 = this;
      return Promise.resolve().then(function () {
        return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this4.getAccessToken();
          }).then(function () {
            var t = _this4.rebuildRequest(e);
            return _this4.request(t, !0);
          });
        }) : _this4.getAccessToken().then(function () {
          var t = _this4.rebuildRequest(e);
          return _this4.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = he.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAccessToken();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function authorize() {
        return _authorize.apply(this, arguments);
      }
      return authorize;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref3) {
      var _this5 = this;
      var e = _ref3.url,
        t = _ref3.formData,
        n = _ref3.name,
        s = _ref3.filePath,
        r = _ref3.fileType,
        i = _ref3.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
        var e, t, _ref4$fileType, n, _ref4$cloudPathAsReal, s, r, i, o, a, c, u, h, l, d, p, g, m, y, _, _e4, w;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e = _ref4.filePath, t = _ref4.cloudPath, _ref4$fileType = _ref4.fileType, n = _ref4$fileType === void 0 ? "image" : _ref4$fileType, _ref4$cloudPathAsReal = _ref4.cloudPathAsRealPath, s = _ref4$cloudPathAsReal === void 0 ? !1 : _ref4$cloudPathAsReal, r = _ref4.onUploadProgress, i = _ref4.config;
                if (!("string" !== f(t))) {
                  _context2.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context2.next = 5;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context2.next = 7;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                o = i && i.envType || this.config.envType;
                if (!(s && ("/" !== t[0] && (t = "/" + t), t.indexOf("\\") > -1))) {
                  _context2.next = 10;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                });
              case 10:
                _context2.next = 12;
                return this.getOSSUploadOptionsFromPath({
                  env: o,
                  filename: s ? t.split("/").pop() : t,
                  fileId: s ? t : void 0
                });
              case 12:
                a = _context2.sent.result;
                c = "https://" + a.cdnDomain + "/" + a.ossPath;
                u = a.securityToken;
                h = a.accessKeyId;
                l = a.signature;
                d = a.host;
                p = a.ossPath;
                g = a.id;
                m = a.policy;
                y = a.ossCallbackUrl;
                _ = {
                  "Cache-Control": "max-age=2592000",
                  "Content-Disposition": "attachment",
                  OSSAccessKeyId: h,
                  Signature: l,
                  host: d,
                  id: g,
                  key: p,
                  policy: m,
                  success_action_status: 200
                };
                if (u && (_["x-oss-security-token"] = u), y) {
                  _e4 = JSON.stringify({
                    callbackUrl: y,
                    callbackBody: JSON.stringify({
                      fileId: g,
                      spaceId: this.config.spaceId
                    }),
                    callbackBodyType: "application/json"
                  });
                  _.callback = he.toBase64(_e4);
                }
                w = {
                  url: "https://" + a.host,
                  formData: _,
                  fileName: "file",
                  name: "file",
                  filePath: e,
                  fileType: n
                };
                _context2.next = 27;
                return this.uploadFileToOSS(Object.assign({}, w, {
                  onUploadProgress: r
                }));
              case 27:
                if (!y) {
                  _context2.next = 29;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 29:
                _context2.next = 31;
                return this.reportOSSUpload({
                  id: g
                });
              case 31:
                if (!_context2.sent.success) {
                  _context2.next = 33;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 33:
                throw new te({
                  code: "UPLOAD_FAILED",
                  message: "文件上传失败"
                });
              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref5.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new te({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _ref6,
          e,
          t,
          _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref6 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref6.fileList;
                if (!(!Array.isArray(e) || 0 === e.length)) {
                  _context3.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
              case 3:
                t = {
                  method: "serverless.file.resource.info",
                  params: JSON.stringify({
                    id: e.map(function (e) {
                      return e.split("?")[0];
                    }).join(",")
                  })
                };
                _context3.next = 6;
                return this.request(this.setupRequest(t));
              case 6:
                _context3.t0 = _context3.sent.result;
                return _context3.abrupt("return", {
                  fileList: _context3.t0
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return le;
}();
var de = {
  init: function init(e) {
    var t = new le(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var pe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var fe;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(fe || (fe = {}));
var ge = function ge() {},
  me = n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [],
        c = [];
      !function () {
        function t(t) {
          for (var n = e.sqrt(t), s = 2; s <= n; s++) {
            if (!(t % s)) return !1;
          }
          return !0;
        }
        function n(e) {
          return 4294967296 * (e - (0 | e)) | 0;
        }
        for (var s = 2, r = 0; r < 64;) {
          t(s) && (r < 8 && (a[r] = n(e.pow(s, .5))), c[r] = n(e.pow(s, 1 / 3)), r++), s++;
        }
      }();
      var u = [],
        h = o.SHA256 = i.extend({
          _doReset: function _doReset() {
            this._hash = new r.init(a.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(e, t) {
            for (var n = this._hash.words, s = n[0], r = n[1], i = n[2], o = n[3], a = n[4], h = n[5], l = n[6], d = n[7], p = 0; p < 64; p++) {
              if (p < 16) u[p] = 0 | e[t + p];else {
                var f = u[p - 15],
                  g = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                  m = u[p - 2],
                  y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                u[p] = g + u[p - 7] + y + u[p - 16];
              }
              var _ = s & r ^ s & i ^ r & i,
                w = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22),
                v = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & l) + c[p] + u[p];
              d = l, l = h, h = a, a = o + v | 0, o = i, i = r, r = s, s = v + (w + _) | 0;
            }
            n[0] = n[0] + s | 0, n[1] = n[1] + r | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0, n[5] = n[5] + h | 0, n[6] = n[6] + l | 0, n[7] = n[7] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            var t = this._data,
              n = t.words,
              s = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(s / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = s, t.sigBytes = 4 * n.length, this._process(), this._hash;
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      t.SHA256 = i._createHelper(h), t.HmacSHA256 = i._createHmacHelper(h);
    }(Math), n.SHA256);
  }),
  ye = me,
  _e = n(function (e, t) {
    e.exports = r.HmacSHA256;
  });
var we = function we() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new te({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e5, s) {
      return _e5 ? n(_e5) : t(s);
    };
  });
  return e.promise = t, e;
};
function ve(e) {
  return void 0 === e;
}
function Ie(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var Se;
function be(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = _createForOfIteratorHelper(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e6 = _step.value;
      var _t4 = _e6.isMatch,
        _n5 = _e6.genAdapter,
        _s4 = _e6.runtime;
      if (_t4()) return {
        adapter: _n5(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(Se || (Se = {}));
var ke = {
    adapter: null,
    runtime: void 0
  },
  Ae = ["anonymousUuidKey"];
var Pe = /*#__PURE__*/function (_ge) {
  (0, _inherits2.default)(Pe, _ge);
  var _super2 = _createSuper(Pe);
  function Pe() {
    var _this6;
    (0, _classCallCheck2.default)(this, Pe);
    _this6 = _super2.call(this), ke.adapter.root.tcbObject || (ke.adapter.root.tcbObject = {});
    return _this6;
  }
  (0, _createClass2.default)(Pe, [{
    key: "setItem",
    value: function setItem(e, t) {
      ke.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return ke.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete ke.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete ke.adapter.root.tcbObject;
    }
  }]);
  return Pe;
}(ge);
function Te(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new Pe();
    case "none":
      return new Pe();
    default:
      return t.sessionStorage || new Pe();
  }
}
var Ce = /*#__PURE__*/function () {
  function Ce(e) {
    (0, _classCallCheck2.default)(this, Ce);
    if (!this._storage) {
      this._persistence = ke.adapter.primaryStorage || e.persistence, this._storage = Te(this._persistence, ke.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n6 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r2 = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n6,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r2,
        loginTypeKey: _i,
        userInfoKey: _o
      };
    }
  }
  (0, _createClass2.default)(Ce, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Te(e, ke.adapter);
      for (var _e7 in this.keys) {
        var _s6 = this.keys[_e7];
        if (t && Ae.includes(_e7)) continue;
        var _r3 = this._storage.getItem(_s6);
        ve(_r3) || Ie(_r3) || (n.setItem(_s6, _r3), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return Ce;
}();
var xe = {},
  Oe = {};
function Ee(e) {
  return xe[e];
}
var Le = /*#__PURE__*/(0, _createClass2.default)(function Le(e, t) {
  (0, _classCallCheck2.default)(this, Le);
  this.data = t || null, this.name = e;
});
var Re = /*#__PURE__*/function (_Le) {
  (0, _inherits2.default)(Re, _Le);
  var _super3 = _createSuper(Re);
  function Re(e, t) {
    var _this7;
    (0, _classCallCheck2.default)(this, Re);
    _this7 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this7.error = e;
    return _this7;
  }
  return (0, _createClass2.default)(Re);
}(Le);
var Ue = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Re) return console.error(e.error), this;
      var n = "string" == typeof e ? new Le(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e8 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = _createForOfIteratorHelper(_e8),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function Ne(e, t) {
  Ue.on(e, t);
}
function De(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Ue.fire(e, t);
}
function Me(e, t) {
  Ue.off(e, t);
}
var qe = "loginStateChanged",
  Fe = "loginStateExpire",
  Ke = "loginTypeChanged",
  je = "anonymousConverted",
  $e = "refreshAccessToken";
var Be;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(Be || (Be = {}));
var We = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  He = {
    "X-SDK-Version": "1.3.5"
  };
function ze(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e9 in r) {
        o.append(_e9, r[_e9]);
      }
    }(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);
  };
}
function Je() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: _objectSpread(_objectSpread({}, He), {}, {
      "x-seqid": e
    })
  };
}
var Ge = /*#__PURE__*/function () {
  function Ge() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Ge);
    var t;
    this.config = e, this._reqClass = new ke.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = Ee(this.config.env), this._localCache = (t = this.config.env, Oe[t]), ze(this._reqClass, "post", [Je]), ze(this._reqClass, "upload", [Je]), ze(this._reqClass, "download", [Je]);
  }
  (0, _createClass2.default)(Ge, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._reqClass.post(e);
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function post(_x2) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._reqClass.upload(e);
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function upload(_x3) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(e) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._reqClass.download(e);
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function download(_x4) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var e, t;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context7.prev = 1;
                _context7.next = 4;
                return this._refreshAccessTokenPromise;
              case 4:
                e = _context7.sent;
                _context7.next = 10;
                break;
              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                t = _context7.t0;
              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context7.next = 12;
                  break;
                }
                throw t;
              case 12:
                return _context7.abrupt("return", e);
              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this$_cache$keys, e, t, n, s, r, i, o, a, _e10, _e11, _t7, _s8;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                i = this._cache.getStore(n);
                if (i) {
                  _context8.next = 5;
                  break;
                }
                throw new te({
                  message: "未登录CloudBase"
                });
              case 5:
                o = {
                  refresh_token: i
                };
                _context8.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", o);
              case 8:
                a = _context8.sent;
                if (!a.data.code) {
                  _context8.next = 21;
                  break;
                }
                _e10 = a.data.code;
                if (!("SIGN_PARAM_INVALID" === _e10 || "REFRESH_TOKEN_EXPIRED" === _e10 || "INVALID_REFRESH_TOKEN" === _e10)) {
                  _context8.next = 20;
                  break;
                }
                if (!(this._cache.getStore(s) === Be.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e10)) {
                  _context8.next = 19;
                  break;
                }
                _e11 = this._cache.getStore(r);
                _t7 = this._cache.getStore(n);
                _context8.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e11,
                  refresh_token: _t7
                });
              case 17:
                _s8 = _context8.sent;
                return _context8.abrupt("return", (this.setRefreshToken(_s8.refresh_token), this._refreshAccessToken()));
              case 19:
                De(Fe), this._cache.removeStore(n);
              case 20:
                throw new te({
                  code: a.data.code,
                  message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
                });
              case 21:
                if (!a.data.access_token) {
                  _context8.next = 23;
                  break;
                }
                return _context8.abrupt("return", (De($e), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));
              case 23:
                a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
              case 24:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _this$_cache$keys2, e, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;
                if (this._cache.getStore(n)) {
                  _context9.next = 3;
                  break;
                }
                throw new te({
                  message: "refresh token不存在，登录状态异常"
                });
              case 3:
                s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
                _context9.t0 = this._shouldRefreshAccessTokenHook;
                if (!_context9.t0) {
                  _context9.next = 9;
                  break;
                }
                _context9.next = 8;
                return this._shouldRefreshAccessTokenHook(s, r);
              case 8:
                _context9.t0 = !_context9.sent;
              case 9:
                _context9.t1 = _context9.t0;
                if (!_context9.t1) {
                  _context9.next = 12;
                  break;
                }
                i = !1;
              case 12:
                return _context9.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                  accessToken: s,
                  accessTokenExpire: r
                });
              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(e, t, n) {
        var s, r, i, _e12, o, _e13, _e14, a, c, u, h, l, d, p, f, g;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                s = "x-tcb-trace_".concat(this.config.env);
                r = "application/x-www-form-urlencoded";
                i = _objectSpread({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);
                if (!(-1 === We.indexOf(e))) {
                  _context10.next = 10;
                  break;
                }
                _e12 = this._cache.keys.refreshTokenKey;
                _context10.t0 = this._cache.getStore(_e12);
                if (!_context10.t0) {
                  _context10.next = 10;
                  break;
                }
                _context10.next = 9;
                return this.getAccessToken();
              case 9:
                i.access_token = _context10.sent.accessToken;
              case 10:
                if ("storage.uploadFile" === e) {
                  o = new FormData();
                  for (_e13 in o) {
                    o.hasOwnProperty(_e13) && void 0 !== o[_e13] && o.append(_e13, i[_e13]);
                  }
                  r = "multipart/form-data";
                } else {
                  r = "application/json", o = {};
                  for (_e14 in i) {
                    void 0 !== i[_e14] && (o[_e14] = i[_e14]);
                  }
                }
                a = {
                  headers: {
                    "content-type": r
                  }
                };
                n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
                c = this._localCache.getStore(s);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, h = t.inQuery, l = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));
                p = function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var s = /\?/.test(t);
                  var r = "";
                  for (var _e15 in n) {
                    "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e15, "=").concat(encodeURIComponent(n[_e15]));
                  }
                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(pe, "//tcb-api.tencentcloudapi.com/web", d);
                l && (p += l);
                _context10.next = 22;
                return this.post(_objectSpread({
                  url: p,
                  data: o
                }, a));
              case 22:
                f = _context10.sent;
                g = f.header && f.header["x-tcb-trace"];
                if (!(g && this._localCache.setStore(s, g), 200 !== Number(f.status) && 200 !== Number(f.statusCode) || !f.data)) {
                  _context10.next = 26;
                  break;
                }
                throw new te({
                  code: "NETWORK_ERROR",
                  message: "network request error"
                });
              case 26:
                return _context10.abrupt("return", f);
              case 27:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function request(_x5, _x6, _x7) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {
        var t,
          n,
          _n7,
          _args11 = arguments;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                t = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                _context11.next = 3;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 3:
                n = _context11.sent;
                if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === We.indexOf(e))) {
                  _context11.next = 13;
                  break;
                }
                _context11.next = 7;
                return this.refreshAccessToken();
              case 7:
                _context11.next = 9;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 9:
                _n7 = _context11.sent;
                if (!_n7.data.code) {
                  _context11.next = 12;
                  break;
                }
                throw new te({
                  code: _n7.data.code,
                  message: _n7.data.message
                });
              case 12:
                return _context11.abrupt("return", _n7.data);
              case 13:
                if (!n.data.code) {
                  _context11.next = 15;
                  break;
                }
                throw new te({
                  code: n.data.code,
                  message: n.data.message
                });
              case 15:
                return _context11.abrupt("return", n.data);
              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function send(_x8) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
        t = _this$_cache$keys3.accessTokenKey,
        n = _this$_cache$keys3.accessTokenExpireKey,
        s = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return Ge;
}();
var Ve = {};
function Ye(e) {
  return Ve[e];
}
var Qe = /*#__PURE__*/function () {
  function Qe(e) {
    (0, _classCallCheck2.default)(this, Qe);
    this.config = e, this._cache = Ee(e.env), this._request = Ye(e.env);
  }
  (0, _createClass2.default)(Qe, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
        t = _this$_cache$keys4.accessTokenKey,
        n = _this$_cache$keys4.accessTokenExpireKey,
        s = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
        n = _this$_cache$keys5.accessTokenKey,
        s = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _yield$this$_request$, e;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$ = _context12.sent;
                e = _yield$this$_request$.data;
                return _context12.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return Qe;
}();
var Xe = /*#__PURE__*/function () {
  function Xe(e) {
    (0, _classCallCheck2.default)(this, Xe);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = Ee(this._envId), this._request = Ye(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(Xe, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var _yield$this$_request$2, e, t, n;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._request.send("auth.getLinkedUidList", {});
              case 2:
                _yield$this$_request$2 = _context13.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                n = e.users;
                return _context13.abrupt("return", (n.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: n,
                  hasPrimaryUid: t
                }));
              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                t = e.nickName;
                n = e.gender;
                s = e.avatarUrl;
                r = e.province;
                i = e.country;
                o = e.city;
                _context14.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: n,
                  avatarUrl: s,
                  province: r,
                  country: i,
                  city: o
                });
              case 8:
                _yield$this$_request$3 = _context14.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);
              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function update(_x9) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        var _yield$this$_request$4, e;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$4 = _context15.sent;
                e = _yield$this$_request$4.data;
                return _context15.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return Xe;
}();
var Ze = /*#__PURE__*/function () {
  function Ze(e) {
    (0, _classCallCheck2.default)(this, Ze);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = Ee(e);
    var _this$_cache$keys6 = this._cache.keys,
      t = _this$_cache$keys6.refreshTokenKey,
      n = _this$_cache$keys6.accessTokenKey,
      s = _this$_cache$keys6.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new Xe(e);
  }
  (0, _createClass2.default)(Ze, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === Be.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === Be.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === Be.WECHAT || this.loginType === Be.WECHAT_OPEN || this.loginType === Be.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return Ze;
}();
var et = /*#__PURE__*/function (_Qe) {
  (0, _inherits2.default)(et, _Qe);
  var _super4 = _createSuper(et);
  function et() {
    (0, _classCallCheck2.default)(this, et);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(et, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var _this$_cache$keys7, e, t, n, s, r, _e16;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._cache.updatePersistence("local");
                _this$_cache$keys7 = this._cache.keys;
                e = _this$_cache$keys7.anonymousUuidKey;
                t = _this$_cache$keys7.refreshTokenKey;
                n = this._cache.getStore(e) || void 0;
                s = this._cache.getStore(t) || void 0;
                _context16.next = 8;
                return this._request.send("auth.signInAnonymously", {
                  anonymous_uuid: n,
                  refresh_token: s
                });
              case 8:
                r = _context16.sent;
                if (!(r.uuid && r.refresh_token)) {
                  _context16.next = 20;
                  break;
                }
                this._setAnonymousUUID(r.uuid);
                this.setRefreshToken(r.refresh_token);
                _context16.next = 14;
                return this._request.refreshAccessToken();
              case 14:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.ANONYMOUS,
                  persistence: "local"
                });
                _e16 = new Ze(this.config.env);
                _context16.next = 19;
                return _e16.user.refresh();
              case 19:
                return _context16.abrupt("return", _e16);
              case 20:
                throw new te({
                  message: "匿名登录失败"
                });
              case 21:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {
        var _this$_cache$keys8, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _this$_cache$keys8 = this._cache.keys;
                t = _this$_cache$keys8.anonymousUuidKey;
                n = _this$_cache$keys8.refreshTokenKey;
                s = this._cache.getStore(t);
                r = this._cache.getStore(n);
                _context17.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: s,
                  refresh_token: r,
                  ticket: e
                });
              case 7:
                i = _context17.sent;
                if (!i.refresh_token) {
                  _context17.next = 16;
                  break;
                }
                this._clearAnonymousUUID();
                this.setRefreshToken(i.refresh_token);
                _context17.next = 13;
                return this._request.refreshAccessToken();
              case 13:
                De(je, {
                  env: this.config.env
                });
                De(Ke, {
                  loginType: Be.CUSTOM,
                  persistence: "local"
                });
                return _context17.abrupt("return", {
                  credential: {
                    refreshToken: i.refresh_token
                  }
                });
              case 16:
                throw new te({
                  message: "匿名转化失败"
                });
              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function linkAndRetrieveDataWithTicket(_x10) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
        t = _this$_cache$keys9.anonymousUuidKey,
        n = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Be.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return et;
}(Qe);
var tt = /*#__PURE__*/function (_Qe2) {
  (0, _inherits2.default)(tt, _Qe2);
  var _super5 = _createSuper(tt);
  function tt() {
    (0, _classCallCheck2.default)(this, tt);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(tt, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context18.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "ticket must be a string"
                });
              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context18.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });
              case 5:
                n = _context18.sent;
                if (!n.refresh_token) {
                  _context18.next = 15;
                  break;
                }
                this.setRefreshToken(n.refresh_token);
                _context18.next = 10;
                return this._request.refreshAccessToken();
              case 10:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.CUSTOM,
                  persistence: this.config.persistence
                });
                _context18.next = 14;
                return this.refreshUserInfo();
              case 14:
                return _context18.abrupt("return", new Ze(this.config.env));
              case 15:
                throw new te({
                  message: "自定义登录失败"
                });
              case 16:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function signIn(_x11) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return tt;
}(Qe);
var nt = /*#__PURE__*/function (_Qe3) {
  (0, _inherits2.default)(nt, _Qe3);
  var _super6 = _createSuper(nt);
  function nt() {
    (0, _classCallCheck2.default)(this, nt);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(nt, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context19.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "email must be a string"
                });
              case 2:
                n = this._cache.keys.refreshTokenKey;
                _context19.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 5:
                s = _context19.sent;
                r = s.refresh_token;
                i = s.access_token;
                o = s.access_token_expire;
                if (!r) {
                  _context19.next = 22;
                  break;
                }
                this.setRefreshToken(r);
                if (!(i && o)) {
                  _context19.next = 15;
                  break;
                }
                this.setAccessToken(i, o);
                _context19.next = 17;
                break;
              case 15:
                _context19.next = 17;
                return this._request.refreshAccessToken();
              case 17:
                _context19.next = 19;
                return this.refreshUserInfo();
              case 19:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.EMAIL,
                  persistence: this.config.persistence
                });
                return _context19.abrupt("return", new Ze(this.config.env));
              case 22:
                throw s.code ? new te({
                  code: s.code,
                  message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new te({
                  message: "邮箱登录失败"
                });
              case 23:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function signIn(_x12, _x13) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(e) {
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));
              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
      function activate(_x14) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));
              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
      function resetPasswordWithToken(_x15, _x16) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return nt;
}(Qe);
var st = /*#__PURE__*/function (_Qe4) {
  (0, _inherits2.default)(st, _Qe4);
  var _super7 = _createSuper(st);
  function st() {
    (0, _classCallCheck2.default)(this, st);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(st, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context22.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                n = this._cache.keys.refreshTokenKey;
                _context22.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: Be.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 6:
                s = _context22.sent;
                r = s.refresh_token;
                i = s.access_token_expire;
                o = s.access_token;
                if (!r) {
                  _context22.next = 23;
                  break;
                }
                this.setRefreshToken(r);
                if (!(o && i)) {
                  _context22.next = 16;
                  break;
                }
                this.setAccessToken(o, i);
                _context22.next = 18;
                break;
              case 16:
                _context22.next = 18;
                return this._request.refreshAccessToken();
              case 18:
                _context22.next = 20;
                return this.refreshUserInfo();
              case 20:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.USERNAME,
                  persistence: this.config.persistence
                });
                return _context22.abrupt("return", new Ze(this.config.env));
              case 23:
                throw s.code ? new te({
                  code: s.code,
                  message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new te({
                  message: "用户名密码登录失败"
                });
              case 24:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
      function signIn(_x17, _x18) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return st;
}(Qe);
var rt = /*#__PURE__*/function () {
  function rt(e) {
    (0, _classCallCheck2.default)(this, rt);
    this.config = e, this._cache = Ee(e.env), this._request = Ye(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ne(Ke, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(rt, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new et(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new tt(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new nt(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new st(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23() {
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", new et(this.config).signIn());
              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", new nt(this.config).signIn(e, t));
              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
      function signInWithEmailAndPassword(_x19, _x20) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new st(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new et(this.config)), Ne(je, this._onAnonymousConverted);
                _context25.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
              case 3:
                return _context25.abrupt("return", _context25.sent);
              case 4:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
      function linkAndRetrieveDataWithTicket(_x21) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26() {
        var _this$_cache$keys10, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(this.loginType === Be.ANONYMOUS)) {
                  _context26.next = 2;
                  break;
                }
                throw new te({
                  message: "匿名用户不支持登出操作"
                });
              case 2:
                _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);
                if (s) {
                  _context26.next = 5;
                  break;
                }
                return _context26.abrupt("return");
              case 5:
                _context26.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: s
                });
              case 7:
                r = _context26.sent;
                return _context26.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), De(qe), De(Ke, {
                  env: this.config.env,
                  loginType: Be.NULL,
                  persistence: this.config.persistence
                }), r));
              case 9:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27(e, t) {
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));
              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
      function signUpWithEmailAndPassword(_x22, _x23) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));
              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
      function sendPasswordResetEmail(_x24) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;
      Ne(qe, function () {
        var t = _this9.hasLoginState();
        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      Ne(Fe, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      Ne($e, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      Ne(je, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;
      Ne(Ke, function () {
        var t = _this10.hasLoginState();
        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29() {
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this._request.getAccessToken();
              case 2:
                _context29.t0 = _context29.sent.accessToken;
                _context29.t1 = this.config.env;
                return _context29.abrupt("return", {
                  accessToken: _context29.t0,
                  env: _context29.t1
                });
              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new Ze(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30(e) {
        var _yield$this$_request$5, t;
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context30.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                _context30.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });
              case 4:
                _yield$this$_request$5 = _context30.sent;
                t = _yield$this$_request$5.data;
                return _context30.abrupt("return", t && t.isRegistered);
              case 7:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
      function isUsernameRegistered(_x25) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31(e) {
        return _regenerator.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", new tt(this.config).signIn(e));
              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
      function signInWithTicket(_x26) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
        e = _this$_cache$keys11.refreshTokenKey,
        t = _this$_cache$keys11.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return rt;
}();
var it = function it(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        h = _e$data2.fileId,
        l = _e$data2.cosFileId,
        d = e.requestId,
        p = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": l,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: p,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: h,
          requestId: d
        }) : t(new te({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ot = function ot(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  at = function at(_ref7, t) {
    var e = _ref7.fileList;
    if (t = t || we(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t8 = _step3.value;
        if (!_t8 || "string" != typeof _t8) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return Ye(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ct = function ct(_ref8, t) {
    var e = _ref8.fileList;
    t = t || we(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = _createForOfIteratorHelper(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s9 = _step4.value;
        "object" == (0, _typeof2.default)(_s9) ? (_s9.hasOwnProperty("fileID") && _s9.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s9.fileID,
          max_age: _s9.maxAge
        })) : "string" == typeof _s9 ? n.push({
          fileid: _s9
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return Ye(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ut = /*#__PURE__*/function () {
    var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32(_ref9, t) {
      var e, n, s, r;
      return _regenerator.default.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              e = _ref9.fileID;
              _context32.next = 3;
              return ct.call(this, {
                fileList: [{
                  fileID: e,
                  maxAge: 600
                }]
              });
            case 3:
              n = _context32.sent.fileList[0];
              if (!("SUCCESS" !== n.code)) {
                _context32.next = 6;
                break;
              }
              return _context32.abrupt("return", t ? t(n) : new Promise(function (e) {
                e(n);
              }));
            case 6:
              s = Ye(this.config.env);
              r = n.download_url;
              if (!(r = encodeURI(r), !t)) {
                _context32.next = 10;
                break;
              }
              return _context32.abrupt("return", s.download({
                url: r
              }));
            case 10:
              _context32.t0 = t;
              _context32.next = 13;
              return s.download({
                url: r
              });
            case 13:
              _context32.t1 = _context32.sent;
              (0, _context32.t0)(_context32.t1);
            case 15:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, this);
    }));
    return function ut(_x27, _x28) {
      return _ref10.apply(this, arguments);
    };
  }(),
  ht = function ht(_ref11, i) {
    var e = _ref11.name,
      t = _ref11.data,
      n = _ref11.query,
      s = _ref11.parse,
      r = _ref11.search;
    var o = i || we();
    var a;
    try {
      a = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new te({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var c = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: a
    };
    return Ye(this.config.env).send("functions.invokeFunction", c).then(function (e) {
      if (e.code) o(null, e);else {
        var _t9 = e.data.response_data;
        if (s) o(null, {
          result: _t9,
          requestId: e.requestId
        });else try {
          _t9 = JSON.parse(e.data.response_data), o(null, {
            result: _t9,
            requestId: e.requestId
          });
        } catch (e) {
          o(new te({
            message: "response data must be json"
          }));
        }
      }
      return o.promise;
    }).catch(function (e) {
      o(e);
    }), o.promise;
  },
  lt = {
    timeout: 15e3,
    persistence: "session"
  },
  dt = {};
var pt = /*#__PURE__*/function () {
  function pt(e) {
    (0, _classCallCheck2.default)(this, pt);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(pt, [{
    key: "init",
    value: function init(e) {
      switch (ke.adapter || (this.requestClient = new ke.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = _objectSpread(_objectSpread({}, lt), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new pt(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref12.persistence;
      if (this.authObj) return this.authObj;
      var t = e || ke.adapter.primaryStorage || lt.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        xe[t] = new Ce(e), Oe[t] = new Ce(_objectSpread(_objectSpread({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, Ve[n.env] = new Ge(n), this.authObj = new rt(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return Ne.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Me.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return ht.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return at.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return ct.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return ut.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return it.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return ot.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      dt[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33(e, t) {
        var n;
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                n = dt[e];
                if (n) {
                  _context33.next = 3;
                  break;
                }
                throw new te({
                  message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
                });
              case 3:
                _context33.next = 5;
                return n.invoke(t, this);
              case 5:
                return _context33.abrupt("return", _context33.sent);
              case 6:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function invokeExtension(_x29, _x30) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref13 = be(e) || {},
        t = _ref13.adapter,
        n = _ref13.runtime;
      t && (ke.adapter = t), n && (ke.runtime = n);
    }
  }]);
  return pt;
}();
var ft = new pt();
function gt(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) {
    "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  }
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var mt = /*#__PURE__*/function () {
  function mt() {
    (0, _classCallCheck2.default)(this, mt);
  }
  (0, _createClass2.default)(mt, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers;
      return new Promise(function (e, r) {
        ne.request({
          url: gt("https:", t),
          data: n,
          method: "POST",
          header: s,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = ne.uploadFile({
            url: gt("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return mt;
}();
var yt = {
  setItem: function setItem(e, t) {
    ne.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return ne.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    ne.removeStorageSync(e);
  },
  clear: function clear() {
    ne.clearStorageSync();
  }
};
var _t = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: mt,
      localStorage: yt,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
ft.useAdapters(_t);
var wt = ft,
  vt = wt.init;
wt.init = function (e) {
  e.env = e.spaceId;
  var t = vt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      var n;
      t[e] = (n = t[e], function (e) {
        e = e || {};
        var _ee = ee(e),
          t = _ee.success,
          s = _ee.fail,
          r = _ee.complete;
        if (!(t || s || r)) return n.call(this, e);
        n.call(this, e).then(function (e) {
          t && t(e), r && r(e);
        }, function (e) {
          s && s(e), r && r(e);
        });
      }).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var It = wt;
var St = /*#__PURE__*/function (_le) {
  (0, _inherits2.default)(St, _le);
  var _super8 = _createSuper(St);
  function St() {
    (0, _classCallCheck2.default)(this, St);
    return _super8.apply(this, arguments);
  }
  (0, _createClass2.default)(St, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;
      return new Promise(function (e, t) {
        var n = "Anonymous_Access_token";
        _this11.setAccessToken(n), e(n);
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret);
      var r = ue();
      s["x-client-info"] = encodeURIComponent(JSON.stringify(r));
      var _se = se(),
        i = _se.token;
      return s["x-client-token"] = i, {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: JSON.parse(JSON.stringify(s))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref14) {
      var _this12 = this;
      var e = _ref14.url,
        t = _ref14.formData,
        n = _ref14.name,
        s = _ref14.filePath,
        r = _ref14.fileType,
        i = _ref14.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref15) {
      var _this13 = this;
      var e = _ref15.filePath,
        t = _ref15.cloudPath,
        _ref15$fileType = _ref15.fileType,
        n = _ref15$fileType === void 0 ? "image" : _ref15$fileType,
        s = _ref15.onUploadProgress;
      if (!t) throw new te({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        r = t.result.fileUrl;
        var c = {
          url: i,
          formData: o,
          name: a,
          filePath: e,
          fileType: n
        };
        return _this13.uploadFileToOSS(Object.assign({}, c, {
          onUploadProgress: s
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new te({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref16) {
      var e = _ref16.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return e.result;
        throw new te({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref17.fileList,
        t = _ref17.maxAge;
      if (!Array.isArray(e) || 0 === e.length) throw new te({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var n = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e,
          maxAge: t
        })
      };
      return this.request(this.setupRequest(n)).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new te({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return St;
}(le);
var bt = {
    init: function init(e) {
      var t = new St(e),
        n = {
          signInAnonymously: function signInAnonymously() {
            return t.authorize();
          },
          getLoginState: function getLoginState() {
            return Promise.resolve(!1);
          }
        };
      return t.auth = function () {
        return n;
      }, t.customAuth = t.auth, t;
    }
  },
  kt = n(function (e, t) {
    e.exports = r.enc.Hex;
  });
function At() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n = t.data,
    s = t.functionName,
    r = t.method,
    i = t.headers,
    _t$signHeaderKeys = t.signHeaderKeys,
    o = _t$signHeaderKeys === void 0 ? [] : _t$signHeaderKeys,
    a = t.config,
    c = Date.now(),
    u = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = 16 * Math.random() | 0;
      return ("x" === e ? t : 3 & t | 8).toString(16);
    }),
    h = Object.assign({}, i, {
      "x-from-app-id": a.spaceAppId,
      "x-from-env-id": a.spaceId,
      "x-to-env-id": a.spaceId,
      "x-from-instance-id": c,
      "x-from-function-name": s,
      "x-client-timestamp": c,
      "x-alipay-source": "client",
      "x-request-id": u,
      "x-alipay-callid": u,
      "x-trace-id": u
    }),
    l = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o),
    _ref18 = e.split("?") || [],
    _ref19 = (0, _slicedToArray2.default)(_ref18, 2),
    _ref19$ = _ref19[0],
    d = _ref19$ === void 0 ? "" : _ref19$,
    _ref19$2 = _ref19[1],
    p = _ref19$2 === void 0 ? "" : _ref19$2,
    f = function (e) {
      var t = e.signedHeaders.join(";"),
        n = e.signedHeaders.map(function (t) {
          return "".concat(t.toLowerCase(), ":").concat(e.headers[t], "\n");
        }).join(""),
        s = ye(e.body).toString(kt),
        r = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(n, "\n").concat(t, "\n").concat(s, "\n"),
        i = ye(r).toString(kt),
        o = "HMAC-SHA256\n".concat(e.timestamp, "\n").concat(i, "\n"),
        a = _e(o, e.secretKey).toString(kt);
      return "HMAC-SHA256 Credential=".concat(e.secretId, ", SignedHeaders=").concat(t, ", Signature=").concat(a);
    }({
      path: d,
      query: p,
      method: r,
      headers: h,
      timestamp: c,
      body: JSON.stringify(n),
      secretId: a.accessKey,
      secretKey: a.secretKey,
      signedHeaders: l.sort()
    });
  return {
    url: "".concat(a.endpoint).concat(e),
    headers: Object.assign({}, h, {
      Authorization: f
    })
  };
}
function Pt(_ref20) {
  var e = _ref20.url,
    t = _ref20.data,
    _ref20$method = _ref20.method,
    n = _ref20$method === void 0 ? "POST" : _ref20$method,
    _ref20$headers = _ref20.headers,
    s = _ref20$headers === void 0 ? {} : _ref20$headers;
  return new Promise(function (r, i) {
    ne.request({
      url: e,
      method: n,
      data: t,
      header: s,
      dataType: "json",
      complete: function complete() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = s["x-trace-id"] || "";
        if (!e.statusCode || e.statusCode >= 400) {
          var _ref21 = e.data || {},
            _n8 = _ref21.message,
            _s10 = _ref21.errMsg,
            _r4 = _ref21.trace_id;
          return i(new te({
            code: "SYS_ERR",
            message: _n8 || _s10 || "request:fail",
            requestId: _r4 || t
          }));
        }
        r({
          status: e.statusCode,
          data: e.data,
          headers: e.header,
          requestId: t
        });
      }
    });
  });
}
function Tt(e, t) {
  var n = e.path,
    s = e.data,
    _e$method = e.method,
    r = _e$method === void 0 ? "GET" : _e$method,
    _At = At(n, {
      functionName: "",
      data: s,
      method: r,
      headers: {
        "x-alipay-cloud-mode": "oss",
        "x-data-api-type": "oss",
        "x-expire-timestamp": Date.now() + 6e4
      },
      signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
      config: t
    }),
    i = _At.url,
    o = _At.headers;
  return Pt({
    url: i,
    data: s,
    method: r,
    headers: o
  }).then(function (e) {
    var t = e.data || {};
    if (!t.success) throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
    return t.data || {};
  }).catch(function (e) {
    throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
  });
}
function Ct() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = e.trim().replace(/^cloud:\/\//, ""),
    n = t.indexOf("/");
  if (n <= 0) throw new te({
    code: "INVALID_PARAM",
    message: "fileID不合法"
  });
  var s = t.substring(0, n),
    r = t.substring(n + 1);
  return s !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), r;
}
function xt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "cloud://".concat(this.config.spaceId, "/").concat(e.replace(/^\/+/, ""));
}
var Ot = /*#__PURE__*/function () {
  function Ot(e) {
    (0, _classCallCheck2.default)(this, Ot);
    if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), e.endpoint) {
      if ("string" != typeof e.endpoint) throw new Error("endpoint must be string");
      if (!/^https:\/\//.test(e.endpoint)) throw new Error("endpoint must start with https://");
      e.endpoint = e.endpoint.replace(/\/$/, "");
    }
    this.config = Object.assign({}, e, {
      endpoint: e.endpoint || "https://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn")
    });
  }
  (0, _createClass2.default)(Ot, [{
    key: "callFunction",
    value: function callFunction(e) {
      return function (e, t) {
        var n = e.name,
          s = e.data,
          r = "POST",
          _At2 = At("/functions/invokeFunction", {
            functionName: n,
            data: s,
            method: r,
            headers: {
              "x-to-function-name": n
            },
            signHeaderKeys: ["x-to-function-name"],
            config: t
          }),
          i = _At2.url,
          o = _At2.headers;
        return Pt({
          url: i,
          data: s,
          method: r,
          headers: o
        }).then(function (e) {
          return {
            errCode: 0,
            success: !0,
            requestId: e.requestId,
            result: e.data
          };
        }).catch(function (e) {
          throw new te({
            code: e.errCode,
            message: e.errMsg,
            requestId: e.requestId
          });
        });
      }(e, this.config);
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref22) {
      var e = _ref22.url,
        t = _ref22.filePath,
        n = _ref22.fileType,
        s = _ref22.formData,
        r = _ref22.onUploadProgress;
      return new Promise(function (i, o) {
        var a = ne.uploadFile({
          url: e,
          filePath: t,
          fileType: n,
          formData: s,
          name: "file",
          success: function success(e) {
            e && e.statusCode < 400 ? i(e) : o(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            o(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof r && a && "function" == typeof a.onProgressUpdate && a.onProgressUpdate(function (e) {
          r({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34(_ref23) {
        var e, _ref23$cloudPath, t, _ref23$fileType, n, s, r, i, o, a, c;
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                e = _ref23.filePath, _ref23$cloudPath = _ref23.cloudPath, t = _ref23$cloudPath === void 0 ? "" : _ref23$cloudPath, _ref23$fileType = _ref23.fileType, n = _ref23$fileType === void 0 ? "image" : _ref23$fileType, s = _ref23.onUploadProgress;
                if (!("string" !== f(t))) {
                  _context34.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context34.next = 5;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context34.next = 7;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                _context34.next = 9;
                return Tt({
                  path: "/".concat(t.replace(/^\//, ""), "?post_url")
                }, this.config);
              case 9:
                r = _context34.sent;
                i = r.file_id;
                o = r.upload_url;
                a = r.form_data;
                c = a && a.reduce(function (e, t) {
                  return e[t.key] = t.value, e;
                }, {});
                return _context34.abrupt("return", this.uploadFileToOSS({
                  url: o,
                  filePath: e,
                  fileType: n,
                  formData: c,
                  onUploadProgress: s
                }).then(function () {
                  return {
                    fileID: i
                  };
                }));
              case 15:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function uploadFile(_x31) {
        return _uploadFile2.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function () {
      var _getTempFileURL = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35(_ref24) {
        var _this14 = this;
        var e;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                e = _ref24.fileList;
                return _context35.abrupt("return", new Promise(function (t, n) {
                  (!e || e.length < 0) && n(new te({
                    errCode: "INVALID_PARAM",
                    errMsg: "fileList不能为空数组"
                  })), e.length > 50 && n(new te({
                    errCode: "INVALID_PARAM",
                    errMsg: "fileList数组长度不能超过50"
                  }));
                  var s = [];
                  var _iterator5 = _createForOfIteratorHelper(e),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _t10 = _step5.value;
                      "string" !== f(_t10) && n(new te({
                        errCode: "INVALID_PARAM",
                        errMsg: "fileList的元素必须是非空的字符串"
                      }));
                      var _e17 = Ct.call(_this14, _t10);
                      s.push({
                        file_id: _e17,
                        expire: 600
                      });
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                  Tt({
                    path: "/?download_url",
                    data: {
                      file_list: s
                    },
                    method: "POST"
                  }, _this14.config).then(function (e) {
                    var _e$file_list = e.file_list,
                      n = _e$file_list === void 0 ? [] : _e$file_list;
                    t({
                      fileList: n.map(function (e) {
                        return {
                          fileID: xt.call(_this14, e.file_id),
                          tempFileURL: e.download_url
                        };
                      })
                    });
                  }).catch(function (e) {
                    return n(e);
                  });
                }));
              case 2:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35);
      }));
      function getTempFileURL(_x32) {
        return _getTempFileURL.apply(this, arguments);
      }
      return getTempFileURL;
    }()
  }]);
  return Ot;
}();
var Et = {
  init: function init(e) {
    e.provider = "alipay";
    var t = new Ot(e);
    return t.auth = function () {
      return {
        signInAnonymously: function signInAnonymously() {
          return Promise.resolve();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!0);
        }
      };
    }, t;
  }
};
function Lt(_ref25) {
  var e = _ref25.data;
  var t;
  t = ue();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _se2 = se(),
      _e18 = _se2.token;
    _e18 && (n.uniIdToken = _e18);
  }
  return n;
}
function Rt() {
  return _Rt.apply(this, arguments);
}
function _Rt() {
  _Rt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee56() {
    var _this27 = this;
    var _ref67,
      e,
      t,
      _this$__dev__,
      n,
      s,
      r,
      i,
      o,
      a,
      _args6 = arguments;
    return _regenerator.default.wrap(function _callee56$(_context56) {
      while (1) {
        switch (_context56.prev = _context56.next) {
          case 0:
            _ref67 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, e = _ref67.name, t = _ref67.data;
            _context56.next = 3;
            return this.__dev__.initLocalNetwork();
          case 3:
            _this$__dev__ = this.__dev__, n = _this$__dev__.localAddress, s = _this$__dev__.localPort, r = {
              aliyun: "aliyun",
              tencent: "tcb",
              alipay: "alipay"
            }[this.config.provider], i = this.config.spaceId, o = "http://".concat(n, ":").concat(s, "/system/check-function"), a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);
            return _context56.abrupt("return", new Promise(function (t, n) {
              ne.request({
                method: "POST",
                url: o,
                data: {
                  name: e,
                  platform: P,
                  provider: r,
                  spaceId: i
                },
                timeout: 3e3,
                success: function success(e) {
                  t(e);
                },
                fail: function fail() {
                  t({
                    data: {
                      code: "NETWORK_ERROR",
                      message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                    }
                  });
                }
              });
            }).then(function () {
              var _ref68 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                e = _ref68.data;
              var _ref69 = e || {},
                t = _ref69.code,
                n = _ref69.message;
              return {
                code: 0 === t ? 0 : t || "SYS_ERR",
                message: n || "SYS_ERR"
              };
            }).then(function (_ref70) {
              var n = _ref70.code,
                s = _ref70.message;
              if (0 !== n) {
                switch (n) {
                  case "MODULE_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "FUNCTION_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "ACTION_ENCRYPTED":
                    console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                    break;
                  case "NETWORK_ERROR":
                    {
                      var _e30 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
                      throw console.error(_e30), new Error(_e30);
                    }
                  case "SWITCH_TO_CLOUD":
                    break;
                  default:
                    {
                      var _e31 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
                      throw console.error(_e31), new Error(_e31);
                    }
                }
                return _this27._callCloudFunction({
                  name: e,
                  data: t
                });
              }
              return new Promise(function (e, n) {
                var s = Lt.call(_this27, {
                  data: t
                });
                ne.request({
                  method: "POST",
                  url: a,
                  data: {
                    provider: r,
                    platform: P,
                    param: s
                  },
                  success: function success() {
                    var _ref71 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      t = _ref71.statusCode,
                      s = _ref71.data;
                    return !t || t >= 400 ? n(new te({
                      code: s.code || "SYS_ERR",
                      message: s.message || "request:fail"
                    })) : e({
                      result: s
                    });
                  },
                  fail: function fail(e) {
                    n(new te({
                      code: e.code || e.errCode || "SYS_ERR",
                      message: e.message || e.errMsg || "request:fail"
                    }));
                  }
                });
              });
            }));
          case 5:
          case "end":
            return _context56.stop();
        }
      }
    }, _callee56, this);
  }));
  return _Rt.apply(this, arguments);
}
var Ut = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var Nt = /[\\^$.*+?()[\]{}|]/g,
  Dt = RegExp(Nt.source);
function Mt(e, t, n) {
  return e.replace(new RegExp((s = t) && Dt.test(s) ? s.replace(Nt, "\\$&") : s, "g"), n);
  var s;
}
var qt = "none",
  Ft = "request",
  Kt = "response",
  jt = "both";
var $t = /*#__PURE__*/function () {
  function $t() {
    var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref26.secretType,
      t = _ref26.uniCloudIns;
    (0, _classCallCheck2.default)(this, $t);
    this.clientType = "", this.secretType = e || qt, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)($t, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = ae()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36(e) {
        return _regenerator.default.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", this.secretType === qt ? e : this.platformEncryptData(e));
              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));
      function encryptData(_x33) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37(e) {
        var _ref27, t, n;
        return _regenerator.default.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (!(this.secretType === qt)) {
                  _context37.next = 2;
                  break;
                }
                return _context37.abrupt("return", e);
              case 2:
                _ref27 = e || {}, t = _ref27.errCode, n = _ref27.content;
                return _context37.abrupt("return", t || !n ? e : this.secretType === Ft ? n : this.platformDecryptResult(e));
              case 4:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));
      function decryptResult(_x34) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
        var _ref29,
          n,
          _ref29$data,
          s,
          r,
          _args38 = arguments;
        return _regenerator.default.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _ref29 = _args38.length > 0 && _args38[0] !== undefined ? _args38[0] : {}, n = _ref29.name, _ref29$data = _ref29.data, s = _ref29$data === void 0 ? {} : _ref29$data;
                _context38.next = 3;
                return t.prepare();
              case 3:
                _context38.next = 5;
                return t.platformGetSignOption();
              case 5:
                (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context38.sent;
                _context38.next = 8;
                return e({
                  name: n,
                  data: s
                });
              case 8:
                r = _context38.sent;
                _context38.t0 = t.isClientKeyNotFound(r);
                if (!_context38.t0) {
                  _context38.next = 19;
                  break;
                }
                _context38.next = 13;
                return t.prepare({
                  forceUpdate: !0
                });
              case 13:
                _context38.next = 15;
                return t.platformGetSignOption();
              case 15:
                s._uniCloudOptions = _context38.sent;
                _context38.next = 18;
                return e({
                  name: n,
                  data: s
                });
              case 18:
                r = _context38.sent;
              case 19:
                return _context38.abrupt("return", r);
              case 20:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39() {
        var _ref31,
          n,
          _ref31$data,
          s,
          r,
          i,
          _r5,
          _args39 = arguments;
        return _regenerator.default.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _ref31 = _args39.length > 0 && _args39[0] !== undefined ? _args39[0] : {}, n = _ref31.name, _ref31$data = _ref31.data, s = _ref31$data === void 0 ? {} : _ref31$data;
                _context39.next = 3;
                return t.prepare();
              case 3:
                _context39.next = 5;
                return t.encryptData(s);
              case 5:
                r = _context39.sent;
                _context39.next = 8;
                return e({
                  name: n,
                  data: r
                });
              case 8:
                i = _context39.sent;
                if (!t.isClientKeyNotFound(i)) {
                  _context39.next = 21;
                  break;
                }
                _context39.next = 12;
                return t.prepare({
                  forceUpdate: !0
                });
              case 12:
                _context39.next = 14;
                return t.encryptData(s);
              case 14:
                _r5 = _context39.sent;
                _context39.next = 17;
                return t.platformGetSignOption();
              case 17:
                s._uniCloudOptions = _context39.sent;
                _context39.next = 20;
                return e({
                  name: n,
                  data: _r5
                });
              case 20:
                i = _context39.sent;
              case 21:
                _context39.next = 23;
                return t.decryptResult(i.result);
              case 23:
                i.result = _context39.sent;
                return _context39.abrupt("return", i);
              case 25:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39);
      }));
    }
  }]);
  return $t;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function Bt(e) {
  return parseInt(e) === e;
}
function Wt(e) {
  if (!Bt(e.length)) return !1;
  for (var t = 0; t < e.length; t++) {
    if (!Bt(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  }
  return !0;
}
function Ht(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!Wt(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (Bt(e.length) && Wt(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function zt(e) {
  return new Uint8Array(e);
}
function Jt(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var Gt,
  Vt = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return Ht(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  Yt = (Gt = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(Gt[(240 & s) >> 4] + Gt[15 & s]);
      }
      return t.join("");
    }
  }),
  Qt = {
    16: 10,
    24: 12,
    32: 14
  },
  Xt = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  Zt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  en = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  tn = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  nn = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  sn = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  rn = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  on = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  an = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  cn = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  un = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  hn = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  ln = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  dn = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  pn = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function fn(e) {
  for (var t = [], n = 0; n < e.length; n += 4) {
    t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  }
  return t;
}
var gn = /*#__PURE__*/function () {
  function gn(e) {
    (0, _classCallCheck2.default)(this, gn);
    if (!(this instanceof gn)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: Ht(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(gn, [{
    key: "_prepare",
    value: function _prepare() {
      var e = Qt[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) {
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      }
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = fn(this.key);
      for (t = 0; t < r; t++) {
        n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      }
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= Zt[o >> 16 & 255] << 24 ^ Zt[o >> 8 & 255] << 16 ^ Zt[255 & o] << 8 ^ Zt[o >> 24 & 255] ^ Xt[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {
          i[t] ^= i[t - 1];
        } else {
          for (t = 1; t < r / 2; t++) {
            i[t] ^= i[t - 1];
          }
          o = i[r / 2 - 1], i[r / 2] ^= Zt[255 & o] ^ Zt[o >> 8 & 255] << 8 ^ Zt[o >> 16 & 255] << 16 ^ Zt[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) {
            i[t] ^= i[t - 1];
          }
        }
        for (t = 0; t < r && c < s;) {
          u = c >> 2, h = c % 4, this._Ke[u][h] = i[t], this._Kd[e - u][h] = i[t++], c++;
        }
      }
      for (var u = 1; u < e; u++) {
        for (var h = 0; h < 4; h++) {
          o = this._Kd[u][h], this._Kd[u][h] = hn[o >> 24 & 255] ^ ln[o >> 16 & 255] ^ dn[o >> 8 & 255] ^ pn[255 & o];
        }
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = fn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Ke[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = tn[s[r] >> 24 & 255] ^ nn[s[(r + 1) % 4] >> 16 & 255] ^ sn[s[(r + 2) % 4] >> 8 & 255] ^ rn[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        }
        s = n.slice();
      }
      var o,
        a = zt(16);
      for (r = 0; r < 4; r++) {
        o = this._Ke[t][r], a[4 * r] = 255 & (Zt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Zt[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Zt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Zt[255 & s[(r + 3) % 4]] ^ o);
      }
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = fn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Kd[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = on[s[r] >> 24 & 255] ^ an[s[(r + 3) % 4] >> 16 & 255] ^ cn[s[(r + 2) % 4] >> 8 & 255] ^ un[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        }
        s = n.slice();
      }
      var o,
        a = zt(16);
      for (r = 0; r < 4; r++) {
        o = this._Kd[t][r], a[4 * r] = 255 & (en[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (en[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (en[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (en[255 & s[(r + 1) % 4]] ^ o);
      }
      return a;
    }
  }]);
  return gn;
}();
var mn = /*#__PURE__*/function () {
  function mn(e) {
    (0, _classCallCheck2.default)(this, mn);
    if (!(this instanceof mn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new gn(e);
  }
  (0, _createClass2.default)(mn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), Jt(n = this._aes.encrypt(n), t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), Jt(n = this._aes.decrypt(n), t, s);
      }
      return t;
    }
  }]);
  return mn;
}();
var yn = /*#__PURE__*/function () {
  function yn(e, t) {
    (0, _classCallCheck2.default)(this, yn);
    if (!(this instanceof yn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = zt(16);
    this._lastCipherblock = Ht(t, !0), this._aes = new gn(e);
  }
  (0, _createClass2.default)(yn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) {
          n[r] ^= this._lastCipherblock[r];
        }
        this._lastCipherblock = this._aes.encrypt(n), Jt(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) {
          t[s + r] = n[r] ^ this._lastCipherblock[r];
        }
        Jt(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return yn;
}();
var _n = /*#__PURE__*/function () {
  function _n(e, t, n) {
    (0, _classCallCheck2.default)(this, _n);
    if (!(this instanceof _n)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = zt(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = Ht(t, !0), this._aes = new gn(e);
  }
  (0, _createClass2.default)(_n, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = Ht(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Jt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Jt(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = Ht(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Jt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Jt(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return _n;
}();
var wn = /*#__PURE__*/function () {
  function wn(e, t) {
    (0, _classCallCheck2.default)(this, wn);
    if (!(this instanceof wn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = zt(16);
    this._lastPrecipher = Ht(t, !0), this._lastPrecipherIndex = 16, this._aes = new gn(e);
  }
  (0, _createClass2.default)(wn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ht(e, !0), n = 0; n < t.length; n++) {
        16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return wn;
}();
var vn = /*#__PURE__*/function () {
  function vn(e) {
    (0, _classCallCheck2.default)(this, vn);
    if (!(this instanceof vn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = zt(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(vn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) {
        this._counter[t] = e % 256, e = parseInt(e / 256);
      }
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = Ht(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return vn;
}();
var In = /*#__PURE__*/function () {
  function In(e, t) {
    (0, _classCallCheck2.default)(this, In);
    if (!(this instanceof In)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof vn || (t = new vn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new gn(e);
  }
  (0, _createClass2.default)(In, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ht(e, !0), n = 0; n < t.length; n++) {
        16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return In;
}();
var Sn = {
  AES: gn,
  Counter: vn,
  ModeOfOperation: {
    ecb: mn,
    cbc: yn,
    cfb: _n,
    ofb: wn,
    ctr: In
  },
  utils: {
    hex: Yt,
    utf8: Vt
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = Ht(e, !0)).length % 16,
          n = zt(e.length + t);
        Jt(e, n);
        for (var s = e.length; s < n.length; s++) {
          n[s] = t;
        }
        return n;
      },
      strip: function strip(e) {
        if ((e = Ht(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) {
          if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        }
        var r = zt(n);
        return Jt(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: Ht,
    createArray: zt,
    copyArray: Jt
  }
};
function bn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = Sn.utils.utf8.toBytes(n),
    i = Sn.utils.utf8.toBytes(e),
    o = new Sn.ModeOfOperation.cbc(s, r),
    a = Sn.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var kn = {
    code: 2e4,
    message: "System error"
  },
  An = {
    code: 20101,
    message: "Invalid client"
  },
  Pn = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  Tn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function Cn(e) {
  var _ref32 = e || {},
    t = _ref32.errSubject,
    n = _ref32.subject,
    s = _ref32.errCode,
    r = _ref32.errMsg,
    i = _ref32.code,
    o = _ref32.message,
    a = _ref32.cause;
  return new te({
    subject: t || n || "uni-secure-network",
    code: s || i || kn.code,
    message: r || o,
    cause: a
  });
}
var xn,
  On,
  En = null;
var Ln = /*#__PURE__*/function (_$t) {
  (0, _inherits2.default)(Ln, _$t);
  var _super9 = _createSuper(Ln);
  function Ln(e) {
    var _this15;
    (0, _classCallCheck2.default)(this, Ln);
    _this15 = _super9.call(this, e), _this15.clientType = "mp-weixin", _this15.userEncryptKey = null;
    return _this15;
  }
  (0, _createClass2.default)(Ln, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode || !!this.scopedGlobalCache.mpWeixinOpenid;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40() {
        return _regenerator.default.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                if (this.isLogin()) {
                  _context40.next = 7;
                  break;
                }
                if (this.scopedGlobalCache.initPromise) {
                  _context40.next = 3;
                  break;
                }
                throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
              case 3:
                _context40.next = 5;
                return this.scopedGlobalCache.initPromise;
              case 5:
                if (this.isLogin()) {
                  _context40.next = 7;
                  break;
                }
                throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
              case 7:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41() {
        var _this16 = this;
        var e;
        return _regenerator.default.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                if (!this.userEncryptKey) {
                  _context41.next = 2;
                  break;
                }
                return _context41.abrupt("return", this.userEncryptKey);
              case 2:
                if (!(En && En.expireTime)) {
                  _context41.next = 6;
                  break;
                }
                e = Date.now();
                if (!(En.expireTime - e > 0)) {
                  _context41.next = 6;
                  break;
                }
                return _context41.abrupt("return", (this.userEncryptKey = En, this.userEncryptKey));
              case 6:
                return _context41.abrupt("return", new Promise(function (e, t) {
                  uni.getUserCryptoManager().getLatestUserKey({
                    success: function success(t) {
                      En = t, _this16.userEncryptKey = t, e(_this16.userEncryptKey);
                    },
                    fail: function fail(e) {
                      t(Cn(_objectSpread(_objectSpread({}, Pn), {}, {
                        cause: e
                      })));
                    }
                  });
                }));
              case 7:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42() {
        var _yield$this$getUserEn, e, t, n;
        return _regenerator.default.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn = _context42.sent;
                e = _yield$this$getUserEn.encryptKey;
                t = _yield$this$getUserEn.iv;
                n = _yield$this$getUserEn.version;
                return _context42.abrupt("return", {
                  verifyClientSign: bn(JSON.stringify({
                    data: JSON.stringify({}),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ae().platform,
                    timestamp: Date.now()
                  }), e, t),
                  encryptKeyId: n,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                });
              case 7:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee43(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return _regenerator.default.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn2 = _context43.sent;
                t = _yield$this$getUserEn2.encryptKey;
                n = _yield$this$getUserEn2.iv;
                s = _yield$this$getUserEn2.version;
                r = {
                  secretType: this.secretType,
                  encryptKeyId: s,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                };
                return _context43.abrupt("return", this.secretType === Kt ? {
                  content: e,
                  _uniCloudOptions: r
                } : {
                  content: bn(JSON.stringify({
                    data: JSON.stringify(e),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ae().platform,
                    timestamp: Date.now()
                  }), t, n),
                  _uniCloudOptions: r
                });
              case 8:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
      function platformEncryptData(_x35) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee44(e) {
        var t, _yield$this$getUserEn3, n, s;
        return _regenerator.default.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                t = e.content;
                _context44.next = 3;
                return this.getUserEncryptKey();
              case 3:
                _yield$this$getUserEn3 = _context44.sent;
                n = _yield$this$getUserEn3.encryptKey;
                s = _yield$this$getUserEn3.iv;
                return _context44.abrupt("return", JSON.parse(function (e, t, n) {
                  var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                    r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                    i = Sn.utils.utf8.toBytes(n),
                    o = new Sn.ModeOfOperation.cbc(r, i),
                    a = Sn.padding.pkcs7.strip(o.decrypt(s));
                  return Sn.utils.utf8.fromBytes(a);
                }(t, n, s)));
              case 7:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));
      function platformDecryptResult(_x36) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      return !1;
    }
  }]);
  return Ln;
}($t);
function Rn(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop(_s11) {
    var r = t[_s11];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref33.type,
            t = _ref33.data,
            r = _ref33.errCode,
            i = _ref33.errMsg,
            o = _ref33.errSubject,
            a = _ref33.message;
          "success" === e ? n(t) : s(Cn({
            errCode: r,
            errMsg: Tn[r] || i || a,
            errSubject: o
          }));
        }])) : s(Cn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s11 = 0; _s11 < t.length; _s11++) {
    _loop(_s11);
  }
  return n;
}
var Un = /*#__PURE__*/function (_$t2) {
  (0, _inherits2.default)(Un, _$t2);
  var _super10 = _createSuper(Un);
  function Un(e) {
    var _this17;
    (0, _classCallCheck2.default)(this, Un);
    _this17 = _super10.call(this, e), _this17.clientType = "app", _this17.appUtils = _objectSpread({}, Rn(uni.requireNativePlugin("plus"))), _this17.systemInfo = xn || (xn = ae());
    return _this17;
  }
  (0, _createClass2.default)(Un, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee45() {
        return _regenerator.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return this.appUtils.hasClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId
                });
              case 2:
                this._hasClientKey = _context45.sent;
                return _context45.abrupt("return", this._hasClientKey);
              case 4:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee46() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _context46.next = 2;
                return this.appUtils.encryptGetClientKeyPayload({
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$ = _context46.sent;
                e = _yield$this$appUtils$.data;
                t = _yield$this$appUtils$.key;
                _context46.next = 7;
                return this.uniCloudIns.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    redirectTo: "encryption",
                    action: "getAppClientKey",
                    data: e,
                    key: t
                  }
                });
              case 7:
                _context46.t0 = _context46.sent.result;
                if (_context46.t0) {
                  _context46.next = 10;
                  break;
                }
                _context46.t0 = {};
              case 10:
                n = _context46.t0;
                if (!(0 !== n.errCode)) {
                  _context46.next = 13;
                  break;
                }
                throw function (e) {
                  return new te({
                    subject: e.errSubject || "uni-secure-network",
                    code: e.errCode || e.code || kn.code,
                    message: e.errMsg || e.message
                  });
                }(n);
              case 13:
                s = n.clientKey, r = n.key;
                _context46.next = 16;
                return this.appUtils.setClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  clientKey: s,
                  key: r
                });
              case 16:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee47() {
        var _this18 = this;
        var _ref34,
          _ref34$forceUpdate,
          e,
          _args47 = arguments;
        return _regenerator.default.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _ref34 = _args47.length > 0 && _args47[0] !== undefined ? _args47[0] : {}, _ref34$forceUpdate = _ref34.forceUpdate, e = _ref34$forceUpdate === void 0 ? !1 : _ref34$forceUpdate;
                _context47.t1 = !0;
                _context47.next = 4;
                return this.hasClientKey();
              case 4:
                _context47.t2 = _context47.sent;
                _context47.t0 = _context47.t1 !== _context47.t2;
                if (_context47.t0) {
                  _context47.next = 8;
                  break;
                }
                _context47.t0 = e;
              case 8:
                if (!_context47.t0) {
                  _context47.next = 10;
                  break;
                }
                return _context47.abrupt("return", (e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === l || !e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== p || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                  _this18.scopedGlobalCache.initStatus = d;
                }).catch(function (e) {
                  throw _this18.scopedGlobalCache.initStatus = p, e;
                }), this.scopedGlobalCache.initStatus = l), this.scopedGlobalCache.initPromise));
              case 10:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee48() {
        var _ref35,
          _ref35$forceUpdate,
          e,
          _args48 = arguments;
        return _regenerator.default.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _ref35 = _args48.length > 0 && _args48[0] !== undefined ? _args48[0] : {}, _ref35$forceUpdate = _ref35.forceUpdate, e = _ref35$forceUpdate === void 0 ? !1 : _ref35$forceUpdate;
                _context48.next = 3;
                return this.ensureClientKey({
                  forceUpdate: e
                });
              case 3:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee49() {
        var _yield$this$appUtils$2, e, t;
        return _regenerator.default.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                _context49.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$2 = _context49.sent;
                e = _yield$this$appUtils$2.data;
                t = _yield$this$appUtils$2.key;
                return _context49.abrupt("return", {
                  verifyClientSign: e,
                  encryptKeyId: t
                });
              case 6:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee50(e) {
        var _yield$this$appUtils$3, t, n, s;
        return _regenerator.default.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify(e)
                });
              case 2:
                _yield$this$appUtils$3 = _context50.sent;
                t = _yield$this$appUtils$3.data;
                n = _yield$this$appUtils$3.key;
                s = {
                  secretType: this.secretType,
                  encryptKeyId: n
                };
                return _context50.abrupt("return", this.secretType === Kt ? {
                  content: e,
                  _uniCloudOptions: s
                } : {
                  content: t,
                  _uniCloudOptions: s
                });
              case 7:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));
      function platformEncryptData(_x37) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee51(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return _regenerator.default.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                t = e.content;
                _e$_uniCloudOptions = e._uniCloudOptions;
                n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
                s = n.encryptKeyId;
                _context51.next = 6;
                return this.appUtils.decrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: t,
                  key: s
                });
              case 6:
                r = _context51.sent;
                return _context51.abrupt("return", JSON.parse(r.data));
              case 8:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));
      function platformDecryptResult(_x38) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.result || {};
      return 70009 === t.errCode && "uni-secure-network" === t.errSubject;
    }
  }]);
  return Un;
}($t);
function Nn() {
  var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref36.secretType;
  return e === Ft || e === Kt || e === jt;
}
function Dn() {
  var _ref37 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref37.name,
    _ref37$data = _ref37.data,
    t = _ref37$data === void 0 ? {} : _ref37$data;
  return "app" === P && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function Mn() {
  var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref38.provider,
    t = _ref38.spaceId,
    n = _ref38.functionName;
  var _ae = ae(),
    s = _ae.appId,
    r = _ae.uniPlatform,
    i = _ae.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref39.provider,
      t = _ref39.spaceId;
    var n = A;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var h = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!h) return !1;
  if ((c[h] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), Cn(An);
}
function qn(_ref40) {
  var e = _ref40.functionName,
    t = _ref40.result,
    n = _ref40.logPvd;
  if (S && this.__dev__.debugLog && t && t.requestId) {
    var _s12 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s12, "[/").concat(n, "-request]"));
  }
}
function Fn(e) {
  var t = e.callFunction,
    n = function n(_n9) {
      var _this19 = this;
      var s = _n9.name;
      _n9.data = Lt.call(e, {
        data: _n9.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb",
          alipay: "alipay"
        }[this.config.provider],
        i = Nn(_n9),
        o = Dn(_n9),
        a = i || o;
      return t.call(this, _n9).then(function (e) {
        return e.errCode = 0, !a && qn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && qn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref41 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref41$message = _ref41.message,
            e = _ref41$message === void 0 ? "" : _ref41$message,
            _ref41$extraInfo = _ref41.extraInfo,
            t = _ref41$extraInfo === void 0 ? {} : _ref41$extraInfo,
            _ref41$formatter = _ref41.formatter,
            n = _ref41$formatter === void 0 ? [] : _ref41$formatter;
          for (var _s13 = 0; _s13 < n.length; _s13++) {
            var _n$_s = n[_s13],
              _r6 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a = e.match(_r6);
            if (!_a) continue;
            var _c = _i3;
            for (var _e19 = 1; _e19 < _a.length; _e19++) {
              _c = Mt(_c, "{$".concat(_e19, "}"), _a[_e19]);
            }
            for (var _e20 in t) {
              _c = Mt(_c, "{".concat(_e20, "}"), t[_e20]);
            }
            return "replace" === _o3 ? _c : e + _c;
          }
          return e;
        }({
          message: "[".concat(_n9.name, "]: ").concat(e.message),
          formatter: Ut,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, S && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && C ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = Rt), o = Rt) : o = n, o = o.bind(e), Dn(t)) a = n.call(e, t);else if (function (_ref42) {
      var e = _ref42.name,
        _ref42$data = _ref42.data,
        t = _ref42$data === void 0 ? {} : _ref42$data;
      return "mp-weixin" === P && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (Nn(t)) {
      a = new On({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (Mn({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new On({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a.then(function (e) {
      return "undefined" != typeof UTSJSONObject && (e.result = new UTSJSONObject(e.result)), e;
    });
  };
}
On = "mp-weixin" !== P && "app" !== P ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw Cn({
      message: "Platform ".concat(P, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : k ? "mp-weixin" === P ? Ln : Un : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw Cn({
      message: "Platform ".concat(P, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var Kn = Symbol("CLIENT_DB_INTERNAL");
function jn(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Kn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t11 = e[n];
        return "function" == typeof _t11 ? _t11.bind(e) : _t11;
      }
      return t.get(e, n, s);
    }
  });
}
function $n(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var Bn = ["db.Geo", "db.command", "command.aggregate"];
function Wn(e, t) {
  return Bn.indexOf("".concat(e, ".").concat(t)) > -1;
}
function Hn(e) {
  switch (f(e)) {
    case "array":
      return e.map(function (e) {
        return Hn(e);
      });
    case "object":
      return e._internalType === Kn || Object.keys(e).forEach(function (t) {
        e[t] = Hn(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function zn(e) {
  return e && e.content && e.content.$method;
}
var Jn = /*#__PURE__*/function () {
  function Jn(e, t, n) {
    (0, _classCallCheck2.default)(this, Jn);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(Jn, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) {
        e = e.prevStage, t.push(e.content);
      }
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: Hn(e.$param)
          };
        })
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this.toJSON());
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = zn(e),
          _n10 = zn(e.prevStage);
        if ("aggregate" === t && "collection" === _n10 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === zn(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = zn(e),
          _n11 = zn(e.prevStage);
        if ("aggregate" === t && "command" === _n11) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return Gn({
          $method: e,
          $param: Hn(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: Hn(t)
      }), S) {
        var _e21 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t12 = _e21 && _e21.$param;
        _t12 && 1 === _t12.length && "string" == typeof _e21.$param[0] && _e21.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return Jn;
}();
function Gn(e, t, n) {
  return jn(new Jn(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), Wn(s, t) ? Gn({
        $method: t
      }, e, n) : function () {
        return Gn({
          $method: t,
          $param: Hn(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function Vn(_ref43) {
  var e = _ref43.path,
    t = _ref43.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.toJSON());
      }
    }]);
    return _class4;
  }();
}
function Yn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return jn(new e(t), {
    get: function get(e, t) {
      return Wn("db", t) ? Gn({
        $method: t
      }, null, e) : function () {
        return Gn({
          $method: t,
          $param: Hn(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var Qn = /*#__PURE__*/function (_ref44) {
  (0, _inherits2.default)(Qn, _ref44);
  var _super11 = _createSuper(Qn);
  function Qn() {
    (0, _classCallCheck2.default)(this, Qn);
    return _super11.apply(this, arguments);
  }
  (0, _createClass2.default)(Qn, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref45) {
      var _this20 = this;
      var e = _ref45.action,
        t = _ref45.command,
        n = _ref45.multiCommand,
        s = _ref45.queryList;
      function r(e, t) {
        if (n && s) for (var _n12 = 0; _n12 < s.length; _n12++) {
          var _r7 = s[_n12];
          _r7.udb && "function" == typeof _r7.udb.setResult && (t ? _r7.udb.setResult(t) : _r7.udb.setResult(e.result.dataList[_n12]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), M(q(o, "fail"), e).then(function () {
          return M(q(o, "complete"), e);
        }).then(function () {
          return r(null, e), Y(j, {
            type: W,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = M(q(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: h,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e22 = 0; _e22 < u.length; _e22++) {
          var _u$_e = u[_e22],
            _t13 = _u$_e.level,
            _n13 = _u$_e.message,
            _s14 = _u$_e.detail,
            _r8 = console["app" === P && "warn" === _t13 ? "error" : _t13] || console.log;
          var _i4 = "[System Info]" + _n13;
          _s14 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s14)), _r8(_i4);
        }
        if (t) {
          return a(new te({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (re({
          token: s,
          tokenExpired: c
        }), _this20._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this20._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), Y(B, {
          token: s,
          tokenExpired: c
        }));
        var h = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2(_t14) {
          var _h$_t = h[_t14],
            n = _h$_t.prop,
            s = _h$_t.tips;
          if (n in e.result) {
            var _t15 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t15;
              }
            });
          }
        };
        for (var _t14 = 0; _t14 < h.length; _t14++) {
          _loop2(_t14);
        }
        return function (e) {
          return M(q(o, "success"), e).then(function () {
            return M(q(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return Y(j, {
              type: W,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new te({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return Qn;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref46$uniClient = _ref46.uniClient,
      e = _ref46$uniClient === void 0 ? {} : _ref46$uniClient,
      _ref46$isJQL = _ref46.isJQL,
      t = _ref46$isJQL === void 0 ? !1 : _ref46$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t || (this.auth = $n(this._authCallBacks)), this._isJQL = t, Object.assign(this, $n(this._dbCallBacks)), this.env = jn({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = jn({}, {
      get: function get(e, t) {
        return Vn({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = Vn({
      path: [],
      method: "serverDate"
    }), this.RegExp = Vn({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }]);
  return _class5;
}());
var Xn = "token无效，跳转登录页面",
  Zn = "token过期，跳转登录页面",
  es = {
    TOKEN_INVALID_TOKEN_EXPIRED: Zn,
    TOKEN_INVALID_INVALID_CLIENTID: Xn,
    TOKEN_INVALID: Xn,
    TOKEN_INVALID_WRONG_TOKEN: Xn,
    TOKEN_INVALID_ANONYMOUS_USER: Xn
  },
  ts = {
    "uni-id-token-expired": Zn,
    "uni-id-check-token-failed": Xn,
    "uni-id-token-not-exist": Xn,
    "uni-id-check-device-feature-failed": Xn
  };
function ns(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function ss() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(ns(t, e.path)) : !1 === e.needLogin && s.push(ns(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function rs(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function is() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath || "";
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function os() {
  return rs(is());
}
function as() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = rs(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var cs = !!_pages.default.uniIdRouter;
var _ref47 = function () {
    var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref28$pages = _ref28.pages,
      t = _ref28$pages === void 0 ? [] : _ref28$pages,
      _ref28$subPackages = _ref28.subPackages,
      n = _ref28$subPackages === void 0 ? [] : _ref28$subPackages,
      _ref28$uniIdRouter = _ref28.uniIdRouter,
      s = _ref28$uniIdRouter === void 0 ? {} : _ref28$uniIdRouter,
      _ref28$tabBar = _ref28.tabBar,
      r = _ref28$tabBar === void 0 ? {} : _ref28$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _ss = ss(t),
      c = _ss.needLoginPage,
      u = _ss.notNeedLoginPage,
      _ref30 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _ss2 = ss(r, s),
            i = _ss2.needLoginPage,
            o = _ss2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      h = _ref30.needLoginPage,
      l = _ref30.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(h)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(l)),
      loginPageInTabBar: as(i, r)
    };
  }(),
  us = _ref47.loginPage,
  hs = _ref47.routerNeedLogin,
  ls = _ref47.resToLogin,
  ds = _ref47.needLoginPage,
  ps = _ref47.notNeedLoginPage,
  fs = _ref47.loginPageInTabBar;
if (ds.indexOf(us) > -1) throw new Error("Login page [".concat(us, "] should not be \"needLogin\", please check your pages.json"));
function gs(e) {
  var t = os();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e23 = 0; _e23 < r.length; _e23++) {
    var _t16 = r[_e23];
    ".." === _t16 ? i.pop() : "." !== _t16 && i.push(_t16);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function ms(e) {
  var t = rs(gs(e));
  return !(ps.indexOf(t) > -1) && (ds.indexOf(t) > -1 || hs.some(function (t) {
    return function (e, t) {
      return new RegExp(t).test(e);
    }(e, t);
  }));
}
function ys(_ref48) {
  var e = _ref48.redirect;
  var t = rs(e),
    n = rs(us);
  return os() !== n && t !== n;
}
function _s() {
  var _ref49 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref49.api,
    t = _ref49.redirect;
  if (!t || !ys({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(us, t);
  fs ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  }, 0);
}
function ws() {
  var _ref50 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref50.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _se3 = se(),
        e = _se3.token,
        t = _se3.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e24 = "uni-id-token-expired";
          n = {
            errCode: _e24,
            errMsg: ts[_e24]
          };
        }
      } else {
        var _e25 = "uni-id-check-token-failed";
        n = {
          errCode: _e25,
          errMsg: ts[_e25]
        };
      }
      return n;
    }();
  if (ms(e) && n) {
    n.uniIdRedirectUrl = e;
    if (J($).length > 0) return setTimeout(function () {
      Y($, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function vs() {
  !function () {
    var e = is(),
      _ws = ws({
        url: e
      }),
      t = _ws.abortLoginPageJump,
      n = _ws.autoToLoginPage;
    t || n && _s({
      api: "redirectTo",
      redirect: e
    });
  }();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3(_t17) {
    var n = e[_t17];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _ws2 = ws({
            url: e.url
          }),
          t = _ws2.abortLoginPageJump,
          s = _ws2.autoToLoginPage;
        return t ? e : s ? (_s({
          api: n,
          redirect: gs(e.url)
        }), !1) : e;
      }
    });
  };
  for (var _t17 = 0; _t17 < e.length; _t17++) {
    _loop3(_t17);
  }
}
function Is() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref51 = e || {},
            t = _ref51.errCode;
          return t in ts;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref52 = e || {},
            t = _ref52.errCode;
          return t in es;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = J($);
      Z().then(function () {
        var n = is();
        if (n && ys({
          redirect: n
        })) return t.length > 0 ? Y($, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (us && _s({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function Ss(e) {
  !function (e) {
    e.onResponse = function (e) {
      G(j, e);
    }, e.offResponse = function (e) {
      V(j, e);
    };
  }(e), function (e) {
    e.onNeedLogin = function (e) {
      G($, e);
    }, e.offNeedLogin = function (e) {
      V($, e);
    }, cs && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = !0, Z().then(function () {
      vs.call(e);
    }), ls && Is.call(e)));
  }(e), function (e) {
    e.onRefreshToken = function (e) {
      G(B, e);
    }, e.offRefreshToken = function (e) {
      V(B, e);
    };
  }(e);
}
var bs;
var ks = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  As = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function Ps() {
  var e = se().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse((s = t[1], decodeURIComponent(bs(s).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  var s;
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
bs = "function" != typeof atob ? function (e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !As.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t;
  e += "==".slice(2 - (3 & e.length));
  for (var n, s, r = "", i = 0; i < e.length;) {
    t = ks.indexOf(e.charAt(i++)) << 18 | ks.indexOf(e.charAt(i++)) << 12 | (n = ks.indexOf(e.charAt(i++))) << 6 | (s = ks.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
  }
  return r;
} : atob;
var Ts = n(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref53) {
      var s = _ref53.onChooseFile,
        r = _ref53.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t18 = s(e);
          if (void 0 !== _t18) return Promise.resolve(_t18).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) {
              c();
            }
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                provider: u.provider,
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                cloudPathAsRealPath: u.cloudPathAsRealPath,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  Cs = t(Ts);
var xs = "manual";
function Os(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {},
        mixinDatacomError: null
      };
    },
    created: function created() {
      var _this21 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this21[t]);
        }), e;
      }, function (e, t) {
        if (_this21.loadtime === xs) return;
        var n = !1;
        var s = [];
        for (var _r9 = 2; _r9 < e.length; _r9++) {
          e[_r9] !== t[_r9] && (s.push(e[_r9]), n = !0);
        }
        e[0] !== t[0] && (_this21.mixinDatacomPage.current = _this21.pageCurrent), _this21.mixinDatacomPage.size = _this21.pageSize, _this21.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this22 = this;
        var _ref54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref54$getone = _ref54.getone,
          e = _ref54$getone === void 0 ? !1 : _ref54$getone,
          t = _ref54.success,
          n = _ref54.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then(function (n) {
          _this22.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this22.getcount && (_this22.mixinDatacomPage.count = r), _this22.mixinDatacomHasMore = s.length < _this22.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this22.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this22.mixinDatacomLoading = !1, _this22.mixinDatacomErrorMessage = e, _this22.mixinDatacomError = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n14;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n;
        t = t || {}, n = "undefined" != typeof __uniX && __uniX ? e.databaseForJQL(this.spaceInfo) : e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n14 = n).collection.apply(_n14, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var h = t.orderby || this.orderby;
        h && (n = n.orderBy(h));
        var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          p = void 0 !== t.getcount ? t.getcount : this.getcount,
          f = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: p
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return f && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;
      }
    }
  };
}
function Es(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n15 = n,
      s = _n15.customUI,
      r = _n15.loadingOptions,
      i = _n15.errorOptions,
      o = _n15.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        switch (c) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function () {
          var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref55.fn,
            t = _ref55.interceptorName,
            n = _ref55.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee52() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return _regenerator.default.wrap(function _callee52$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      s[_key2] = _args[_key2];
                    }
                    r = n ? n({
                      params: s
                    }) : {};
                    _context52.prev = 2;
                    _context52.next = 5;
                    return M(q(t, "invoke"), _objectSpread({}, r));
                  case 5:
                    _context52.next = 7;
                    return e.apply(void 0, s);
                  case 7:
                    i = _context52.sent;
                    _context52.next = 10;
                    return M(q(t, "success"), _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 10:
                    return _context52.abrupt("return", i);
                  case 13:
                    _context52.prev = 13;
                    _context52.t0 = _context52["catch"](2);
                    o = _context52.t0;
                    _context52.next = 18;
                    return M(q(t, "fail"), _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }));
                  case 18:
                    throw o;
                  case 19:
                    _context52.prev = 19;
                    _context52.next = 22;
                    return M(q(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }) : _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 22:
                    return _context52.finish(19);
                  case 23:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee52, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee54() {
              var l,
                _len3,
                h,
                _key3,
                d,
                p,
                _ref57,
                f,
                g,
                m,
                y,
                _e26,
                _yield,
                _t19,
                _n16,
                _args4 = arguments;
              return _regenerator.default.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      a && uni.showLoading({
                        title: r.title,
                        mask: r.mask
                      });
                      for (_len3 = _args4.length, h = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        h[_key3] = _args4[_key3];
                      }
                      d = {
                        name: t,
                        type: u,
                        data: {
                          method: c,
                          params: h
                        }
                      };
                      "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                        var n = t.data.method,
                          s = e.secretMethods || {},
                          r = s[n] || s["*"];
                        r && (t.secretType = r);
                      }(n, d);
                      p = !1;
                      _context54.prev = 5;
                      _context54.next = 8;
                      return e.callFunction(d);
                    case 8:
                      l = _context54.sent;
                      _context54.next = 14;
                      break;
                    case 11:
                      _context54.prev = 11;
                      _context54.t0 = _context54["catch"](5);
                      p = !0, l = {
                        result: new te(_context54.t0)
                      };
                    case 14:
                      _ref57 = l.result || {}, f = _ref57.errSubject, g = _ref57.errCode, m = _ref57.errMsg, y = _ref57.newToken;
                      if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (re(y), Y(B, _objectSpread({}, y))), g)) {
                        _context54.next = 39;
                        break;
                      }
                      _e26 = m;
                      if (!(p && o)) {
                        _context54.next = 24;
                        break;
                      }
                      _context54.next = 20;
                      return o({
                        objectName: t,
                        methodName: c,
                        params: h,
                        errSubject: f,
                        errCode: g,
                        errMsg: m
                      });
                    case 20:
                      _context54.t1 = _context54.sent.errMsg;
                      if (_context54.t1) {
                        _context54.next = 23;
                        break;
                      }
                      _context54.t1 = m;
                    case 23:
                      _e26 = _context54.t1;
                    case 24:
                      if (!a) {
                        _context54.next = 37;
                        break;
                      }
                      if (!("toast" === i.type)) {
                        _context54.next = 29;
                        break;
                      }
                      uni.showToast({
                        title: _e26,
                        icon: "none"
                      });
                      _context54.next = 37;
                      break;
                    case 29:
                      if (!("modal" !== i.type)) {
                        _context54.next = 31;
                        break;
                      }
                      throw new Error("Invalid errorOptions.type: ".concat(i.type));
                    case 31:
                      _context54.next = 33;
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee53() {
                        var _ref59,
                          e,
                          t,
                          n,
                          s,
                          r,
                          _args2 = arguments;
                        return _regenerator.default.wrap(function _callee53$(_context53) {
                          while (1) {
                            switch (_context53.prev = _context53.next) {
                              case 0:
                                _ref59 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref59.title, t = _ref59.content, n = _ref59.showCancel, s = _ref59.cancelText, r = _ref59.confirmText;
                                return _context53.abrupt("return", new Promise(function (i, o) {
                                  uni.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: n,
                                    cancelText: s,
                                    confirmText: r,
                                    success: function success(e) {
                                      i(e);
                                    },
                                    fail: function fail() {
                                      i({
                                        confirm: !1,
                                        cancel: !0
                                      });
                                    }
                                  });
                                }));
                              case 2:
                              case "end":
                                return _context53.stop();
                            }
                          }
                        }, _callee53);
                      }))({
                        title: "提示",
                        content: _e26,
                        showCancel: i.retry,
                        cancelText: "取消",
                        confirmText: i.retry ? "重试" : "确定"
                      });
                    case 33:
                      _yield = _context54.sent;
                      _t19 = _yield.confirm;
                      if (!(i.retry && _t19)) {
                        _context54.next = 37;
                        break;
                      }
                      return _context54.abrupt("return", s.apply(void 0, h));
                    case 37:
                      _n16 = new te({
                        subject: f,
                        code: g,
                        message: m,
                        requestId: l.requestId
                      });
                      throw _n16.detail = l.result, Y(j, {
                        type: z,
                        content: _n16
                      }), _n16;
                    case 39:
                      return _context54.abrupt("return", (Y(j, {
                        type: z,
                        content: l.result
                      }), l.result));
                    case 40:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, null, [[5, 11]]);
            }));
            function s() {
              return _s15.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref60 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref60.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function Ls(e) {
  return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function Rs() {
  return _Rs.apply(this, arguments);
}
function _Rs() {
  _Rs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee57() {
    var _ref72,
      e,
      _ref72$callLoginByWei,
      t,
      n,
      s,
      r,
      _args7 = arguments;
    return _regenerator.default.wrap(function _callee57$(_context57) {
      while (1) {
        switch (_context57.prev = _context57.next) {
          case 0:
            _ref72 = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, e = _ref72.openid, _ref72$callLoginByWei = _ref72.callLoginByWeixin, t = _ref72$callLoginByWei === void 0 ? !1 : _ref72$callLoginByWei;
            n = Ls(this);
            if (!("mp-weixin" !== P)) {
              _context57.next = 4;
              break;
            }
            throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(P, "`"));
          case 4:
            if (!(e && t)) {
              _context57.next = 6;
              break;
            }
            throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
          case 6:
            if (!e) {
              _context57.next = 8;
              break;
            }
            return _context57.abrupt("return", (n.mpWeixinOpenid = e, {}));
          case 8:
            _context57.next = 10;
            return new Promise(function (e, t) {
              uni.login({
                success: function success(t) {
                  e(t.code);
                },
                fail: function fail(e) {
                  t(new Error(e.errMsg));
                }
              });
            });
          case 10:
            s = _context57.sent;
            r = this.importObject("uni-id-co", {
              customUI: !0
            });
            _context57.next = 14;
            return r.secureNetworkHandshakeByWeixin({
              code: s,
              callLoginByWeixin: t
            });
          case 14:
            n.mpWeixinCode = s;
            return _context57.abrupt("return", {
              code: s
            });
          case 16:
          case "end":
            return _context57.stop();
        }
      }
    }, _callee57, this);
  }));
  return _Rs.apply(this, arguments);
}
function Us(_x39) {
  return _Us.apply(this, arguments);
}
function _Us() {
  _Us = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee58(e) {
    var t;
    return _regenerator.default.wrap(function _callee58$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            t = Ls(this);
            return _context58.abrupt("return", (t.initPromise || (t.initPromise = Rs.call(this, e).then(function (e) {
              return e;
            }).catch(function (e) {
              throw delete t.initPromise, e;
            })), t.initPromise));
          case 2:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee58, this);
  }));
  return _Us.apply(this, arguments);
}
function Ns(e) {
  return function () {
    var _ref61 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref61.openid,
      _ref61$callLoginByWei = _ref61.callLoginByWeixin,
      n = _ref61$callLoginByWei === void 0 ? !1 : _ref61$callLoginByWei;
    return Us.call(e, {
      openid: t,
      callLoginByWeixin: n
    });
  };
}
function Ds(e) {
  var t = {
    getSystemInfo: uni.getSystemInfo,
    getPushClientId: uni.getPushClientId
  };
  return function (n) {
    return new Promise(function (s, r) {
      t[e](_objectSpread(_objectSpread({}, n), {}, {
        success: function success(e) {
          s(e);
        },
        fail: function fail(e) {
          r(e);
        }
      }));
    });
  };
}
var Ms = /*#__PURE__*/function (_ref62) {
  (0, _inherits2.default)(Ms, _ref62);
  var _super12 = _createSuper(Ms);
  function Ms() {
    var _this23;
    (0, _classCallCheck2.default)(this, Ms);
    _this23 = _super12.call(this), _this23._uniPushMessageCallback = _this23._receivePushMessage.bind((0, _assertThisInitialized2.default)(_this23)), _this23._currentMessageId = -1, _this23._payloadQueue = [];
    return _this23;
  }
  (0, _createClass2.default)(Ms, [{
    key: "init",
    value: function init() {
      var _this24 = this;
      return Promise.all([Ds("getSystemInfo")(), Ds("getPushClientId")()]).then(function () {
        var _ref63 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
          _ref64 = (0, _slicedToArray2.default)(_ref63, 2),
          _ref64$ = _ref64[0];
        _ref64$ = _ref64$ === void 0 ? {} : _ref64$;
        var e = _ref64$.appId,
          _ref64$2 = _ref64[1];
        _ref64$2 = _ref64$2 === void 0 ? {} : _ref64$2;
        var t = _ref64$2.cid;
        if (!e) throw new Error("Invalid appId, please check the manifest.json file");
        if (!t) throw new Error("Invalid push client id");
        _this24._appId = e, _this24._pushClientId = t, _this24._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), _this24.emit("open"), _this24._initMessageListener();
      }, function (e) {
        throw _this24.emit("error", e), _this24.close(), e;
      });
    }
  }, {
    key: "open",
    value: function () {
      var _open = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee55() {
        return _regenerator.default.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                return _context55.abrupt("return", this.init());
              case 1:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));
      function open() {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "_isUniCloudSSE",
    value: function _isUniCloudSSE(e) {
      if ("receive" !== e.type) return !1;
      var t = e && e.data && e.data.payload;
      return !(!t || "UNI_CLOUD_SSE" !== t.channel || t.seqId !== this._seqId);
    }
  }, {
    key: "_receivePushMessage",
    value: function _receivePushMessage(e) {
      if (!this._isUniCloudSSE(e)) return;
      var t = e && e.data && e.data.payload,
        n = t.action,
        s = t.messageId,
        r = t.message;
      this._payloadQueue.push({
        action: n,
        messageId: s,
        message: r
      }), this._consumMessage();
    }
  }, {
    key: "_consumMessage",
    value: function _consumMessage() {
      var _this25 = this;
      for (;;) {
        var _e27 = this._payloadQueue.find(function (e) {
          return e.messageId === _this25._currentMessageId + 1;
        });
        if (!_e27) break;
        this._currentMessageId++, this._parseMessagePayload(_e27);
      }
    }
  }, {
    key: "_parseMessagePayload",
    value: function _parseMessagePayload(e) {
      var t = e.action,
        n = e.messageId,
        s = e.message;
      "end" === t ? this._end({
        messageId: n,
        message: s
      }) : "message" === t && this._appendMessage({
        messageId: n,
        message: s
      });
    }
  }, {
    key: "_appendMessage",
    value: function _appendMessage() {
      var _ref65 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref65.messageId,
        t = _ref65.message;
      this.emit("message", t);
    }
  }, {
    key: "_end",
    value: function _end() {
      var _ref66 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref66.messageId,
        t = _ref66.message;
      this.emit("end", t), this.close();
    }
  }, {
    key: "_initMessageListener",
    value: function _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        appId: this._appId,
        pushClientId: this._pushClientId,
        seqId: this._seqId
      };
    }
  }, {
    key: "close",
    value: function close() {
      this._destroy(), this.emit("close");
    }
  }]);
  return Ms;
}( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
    this._callback = {};
  }
  (0, _createClass2.default)(_class6, [{
    key: "addListener",
    value: function addListener(e, t) {
      this._callback[e] || (this._callback[e] = []), this._callback[e].push(t);
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return this.addListener(e, t);
    }
  }, {
    key: "removeListener",
    value: function removeListener(e, t) {
      if (!t) throw new Error('The "listener" argument must be of type function. Received undefined');
      var n = this._callback[e];
      if (!n) return;
      var s = function (e, t) {
        for (var _n17 = e.length - 1; _n17 >= 0; _n17--) {
          if (e[_n17] === t) return _n17;
        }
        return -1;
      }(n, t);
      n.splice(s, 1);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return this.removeListener(e, t);
    }
  }, {
    key: "removeAllListener",
    value: function removeAllListener(e) {
      delete this._callback[e];
    }
  }, {
    key: "emit",
    value: function emit(e) {
      var n = this._callback[e];
      for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        t[_key4 - 1] = arguments[_key4];
      }
      if (n) for (var _e28 = 0; _e28 < n.length; _e28++) {
        n[_e28].apply(n, t);
      }
    }
  }]);
  return _class6;
}());
function qs(_x40, _x41) {
  return _qs.apply(this, arguments);
}
function _qs() {
  _qs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee59(e, t) {
    var n, _e32, s;
    return _regenerator.default.wrap(function _callee59$(_context59) {
      while (1) {
        switch (_context59.prev = _context59.next) {
          case 0:
            n = "http://".concat(e, ":").concat(t, "/system/ping");
            _context59.prev = 1;
            _context59.next = 4;
            return s = {
              url: n,
              timeout: 500
            }, new Promise(function (e, t) {
              ne.request(_objectSpread(_objectSpread({}, s), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });
          case 4:
            _e32 = _context59.sent;
            return _context59.abrupt("return", !(!_e32.data || 0 !== _e32.data.code));
          case 8:
            _context59.prev = 8;
            _context59.t0 = _context59["catch"](1);
            return _context59.abrupt("return", !1);
          case 11:
          case "end":
            return _context59.stop();
        }
      }
    }, _callee59, null, [[1, 8]]);
  }));
  return _qs.apply(this, arguments);
}
function Fs(_x42) {
  return _Fs.apply(this, arguments);
}
function _Fs() {
  _Fs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee61(e) {
    var _ae2, _e33, _t21, t, _t$debugInfo, n, s, _yield2, r, i, o;
    return _regenerator.default.wrap(function _callee61$(_context61) {
      while (1) {
        switch (_context61.prev = _context61.next) {
          case 0:
            if (S) {
              _context61.next = 2;
              break;
            }
            return _context61.abrupt("return", Promise.resolve());
          case 2:
            if ("app" === P) {
              _ae2 = ae(), _e33 = _ae2.osName, _t21 = _ae2.osVersion;
              "ios" === _e33 && function (e) {
                if (!e || "string" != typeof e) return 0;
                var t = e.match(/^(\d+)./);
                return t && t[1] ? parseInt(t[1]) : 0;
              }(_t21) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
            }
            t = e.__dev__;
            if (t.debugInfo) {
              _context61.next = 6;
              break;
            }
            return _context61.abrupt("return");
          case 6:
            _t$debugInfo = t.debugInfo;
            n = _t$debugInfo.address;
            s = _t$debugInfo.servePort;
            _context61.next = 11;
            return function () {
              var _ref73 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee60(e, t) {
                var n, _s16, _r10;
                return _regenerator.default.wrap(function _callee60$(_context60) {
                  while (1) {
                    switch (_context60.prev = _context60.next) {
                      case 0:
                        _s16 = 0;
                      case 1:
                        if (!(_s16 < e.length)) {
                          _context60.next = 11;
                          break;
                        }
                        _r10 = e[_s16];
                        _context60.next = 5;
                        return qs(_r10, t);
                      case 5:
                        if (!_context60.sent) {
                          _context60.next = 8;
                          break;
                        }
                        n = _r10;
                        return _context60.abrupt("break", 11);
                      case 8:
                        _s16++;
                        _context60.next = 1;
                        break;
                      case 11:
                        return _context60.abrupt("return", {
                          address: n,
                          port: t
                        });
                      case 12:
                      case "end":
                        return _context60.stop();
                    }
                  }
                }, _callee60);
              }));
              return function (_x43, _x44) {
                return _ref73.apply(this, arguments);
              };
            }()(n, s);
          case 11:
            _yield2 = _context61.sent;
            r = _yield2.address;
            if (!r) {
              _context61.next = 15;
              break;
            }
            return _context61.abrupt("return", (t.localAddress = r, void (t.localPort = s)));
          case 15:
            i = console["app" === P ? "error" : "warn"];
            o = "";
            if (!("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, o = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === P && (o += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === P.indexOf("mp-") && (o += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t.debugInfo.forceRemote)) {
              _context61.next = 19;
              break;
            }
            throw new Error(o);
          case 19:
            i(o);
          case 20:
          case "end":
            return _context61.stop();
        }
      }
    }, _callee61);
  }));
  return _Fs.apply(this, arguments);
}
function Ks(e) {
  e._initPromiseHub || (e._initPromiseHub = new v({
    createPromise: function createPromise() {
      var t = Promise.resolve();
      var n;
      n = 1, t = new Promise(function (e) {
        setTimeout(function () {
          e();
        }, n);
      });
      var s = e.auth();
      return t.then(function () {
        return s.getLoginState();
      }).then(function (e) {
        return e ? Promise.resolve() : s.signInAnonymously();
      });
    }
  }));
}
var js = {
  tcb: It,
  tencent: It,
  aliyun: de,
  private: bt,
  alipay: Et
};
var $s = new ( /*#__PURE__*/function () {
  function _class7() {
    (0, _classCallCheck2.default)(this, _class7);
  }
  (0, _createClass2.default)(_class7, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = js[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), S && function (e) {
        if (!S) return;
        var t = {};
        e.__dev__ = t, t.debugLog = S && ("web" === P && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === P);
        var n = T;
        n && !n.code && (t.debugInfo = n);
        var s = new v({
          createPromise: function createPromise() {
            return Fs(e);
          }
        });
        t.initLocalNetwork = function () {
          return s.exec();
        };
      }(t), Ks(t), Fn(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = Yn(Qn, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = Yn(Qn, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = Ps, e.chooseAndUploadFile = Cs.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return Os(e);
          }
        }), e.SSEChannel = Ms, e.initSecureNetworkByWeixin = Ns(e), e.importObject = Es(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return n.apply(t, Array.from(arguments));
        }, t[e] = function (e, t) {
          return function (n) {
            var _this26 = this;
            var s = !1;
            if ("callFunction" === t) {
              var _e29 = n && n.type || c;
              s = _e29 !== c;
            }
            var r = "callFunction" === t && !s,
              i = this._initPromiseHub.exec();
            n = n || {};
            var _ee2 = ee(n),
              o = _ee2.success,
              a = _ee2.fail,
              u = _ee2.complete,
              h = i.then(function () {
                return s ? Promise.resolve() : M(q(t, "invoke"), n);
              }).then(function () {
                return e.call(_this26, n);
              }).then(function (e) {
                return s ? Promise.resolve(e) : M(q(t, "success"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return r && Y(j, {
                    type: H,
                    content: e
                  }), Promise.resolve(e);
                });
              }, function (e) {
                return s ? Promise.reject(e) : M(q(t, "fail"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return Y(j, {
                    type: H,
                    content: e
                  }), Promise.reject(e);
                });
              });
            if (!(o || a || u)) return h;
            h.then(function (e) {
              o && o(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            }, function (e) {
              a && a(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            });
          };
        }(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class7;
}())();
(function () {
  var e = C;
  var t = {};
  if (e && 1 === e.length) t = e[0], $s = $s.init(t), $s._isDefault = !0;else {
    var _t20 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    var _n18;
    _n18 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : x ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t20.forEach(function (e) {
      $s[e] = function () {
        return console.error(_n18), Promise.reject(new te({
          code: "SYS_ERR",
          message: _n18
        }));
      };
    });
  }
  Object.assign($s, {
    get mixinDatacom() {
      return Os($s);
    }
  }), Ss($s), $s.addInterceptor = N, $s.removeInterceptor = D, $s.interceptObject = F, S && "web" === P && (window.uniCloud = $s);
})();
var Bs = $s;
exports.default = Bs;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 432:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 433:
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 434:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 432);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 435:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 436:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 435);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 437);
var construct = __webpack_require__(/*! ./construct.js */ 15);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 437:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 438:
/*!******************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/pages.json?{"type":"origin-pages-json"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "easycom": {
    "^u-(.*)": "@/uview-ui/components/u-$1/u-$1.vue"
  },
  "pages": [{
    "path": "pages/identity/identity",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/ranking/ranking",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/upUserInfo/upUserInfo",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/upSong/index",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/login/login",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/singer/singer",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/tabbar/index/index",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/tabbar/shopSing/shopSing",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/tabbar/recording/recording",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/tabbar/goods/goods",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/tabbar/center/index",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/producer/producer",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/address/myAdress",
    "style": {
      "navigationBarTitleText": "我的地址"
    }
  }, {
    "path": "pages/address/edidAdress",
    "style": {
      "navigationBarTitleText": ""
    }
  }, {
    "path": "pages/play/play",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/tabbar/recording/details",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/collection/index",
    "style": {
      "navigationBarTitleText": "收藏列表"
    }
  }, {
    "path": "pages/records/index",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/goodDetails/goodDetails",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/order/submit",
    "style": {
      "navigationBarTitleText": "提交订单"
    }
  }, {
    "path": "pages/order/list",
    "style": {
      "navigationBarTitleText": "订单列表"
    }
  }, {
    "path": "pages/order/orderDetails",
    "style": {
      "navigationBarTitleText": "订单详情"
    }
  }, {
    "path": "pages/order/singOrderList",
    "style": {
      "navigationBarTitleText": "已购买歌曲"
    }
  }, {
    "path": "pages/upUserInfo/centerUpuserInfo",
    "style": {
      "navigationBarTitleText": "用户信息"
    }
  }, {
    "path": "pages/upUserInfo/upExamine",
    "style": {
      "navigationBarTitleText": "签约",
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/mv-play/mv-play",
    "style": {
      "navigationBarTitleText": "mv",
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/canvas/canvas",
    "style": {
      "navigationBarTitleText": "海报"
    }
  }, {
    "path": "pages/Musician/Musician",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/details/details",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/songBuying/songBuying",
    "style": {
      "navigationStyle": "custom"
    }
  }, {
    "path": "pages/agreement/agreement",
    "style": {
      "navigationBarTitleText": "协议"
    }
  }, {
    "path": "pages/leaderboardDetails/leaderboardDetails",
    "style": {
      "navigationStyle": "custom"
    }
  }],
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uView",
    "navigationBarBackgroundColor": "#F8F8F8",
    "backgroundColor": "#F8F8F8"
  },
  "tabBar": {
    "color": "#909399",
    "selectedColor": "#303133",
    "backgroundColor": "#FFFFFF",
    "borderStyle": "black",
    "list": [{
      "pagePath": "pages/tabbar/index/index",
      "iconPath": "static/tabbar/tabbar_1_0.png",
      "selectedIconPath": "static/tabbar/tabbar_1_1.png",
      "text": "首页"
    }, {
      "pagePath": "pages/tabbar/shopSing/shopSing",
      "iconPath": "static/tabbar/tabbar_2_0.png",
      "selectedIconPath": "static/tabbar/tabbar_2_1.png",
      "text": "歌单"
    }, {
      "pagePath": "pages/tabbar/recording/recording",
      "iconPath": "static/tabbar/tabbar_3_0.png",
      "selectedIconPath": "static/tabbar/tabbar_3_1.png",
      "text": ""
    }, {
      "pagePath": "pages/tabbar/goods/goods",
      "iconPath": "static/tabbar/tabbar_4_0.png",
      "selectedIconPath": "static/tabbar/tabbar_4_1.png",
      "text": "商城"
    }, {
      "pagePath": "pages/tabbar/center/index",
      "iconPath": "static/tabbar/tabbar_5_0.png",
      "selectedIconPath": "static/tabbar/tabbar_5_1.png",
      "text": "我的"
    }]
  }
};
exports.default = _default;

/***/ }),

/***/ 439:
/*!*****************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/pages.json?{"type":"stat"} ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": "__UNI__FE5DF50"
};
exports.default = _default;

/***/ }),

/***/ 44:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 45)();
module.exports = runtime;

/***/ }),

/***/ 440:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uni_modules/uni-file-picker/components/uni-file-picker/choose-and-upload-file.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx, uniCloud) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseAndUploadFile = chooseAndUploadFile;
exports.uploadCloudFiles = uploadCloudFiles;
var ERR_MSG_OK = 'chooseAndUploadFile:ok';
var ERR_MSG_FAIL = 'chooseAndUploadFile:fail';
function chooseImage(opts) {
  var count = opts.count,
    _opts$sizeType = opts.sizeType,
    sizeType = _opts$sizeType === void 0 ? ['original', 'compressed'] : _opts$sizeType,
    sourceType = opts.sourceType,
    extension = opts.extension;
  return new Promise(function (resolve, reject) {
    // 微信由于旧接口不再维护，针对微信小程序平台改用chooseMedia接口

    uni.chooseMedia({
      count: count,
      sizeType: sizeType,
      sourceType: sourceType,
      mediaType: ['image'],
      extension: extension,
      success: function success(res) {
        res.tempFiles.forEach(function (item) {
          item.path = item.tempFilePath;
        });
        resolve(normalizeChooseAndUploadFileRes(res, 'image'));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseImage:fail', ERR_MSG_FAIL)
        });
      }
    });
  });
}
function chooseVideo(opts) {
  var count = opts.count,
    camera = opts.camera,
    compressed = opts.compressed,
    maxDuration = opts.maxDuration,
    sourceType = opts.sourceType,
    extension = opts.extension;
  return new Promise(function (resolve, reject) {
    // 微信由于旧接口不再维护，针对微信小程序平台改用chooseMedia接口

    uni.chooseMedia({
      count: count,
      compressed: compressed,
      maxDuration: maxDuration,
      sourceType: sourceType,
      extension: extension,
      mediaType: ['video'],
      success: function success(res) {
        var tempFiles = res.tempFiles;
        resolve(normalizeChooseAndUploadFileRes({
          errMsg: 'chooseVideo:ok',
          tempFiles: tempFiles.map(function (item) {
            return {
              name: item.name || '',
              path: item.tempFilePath,
              thumbTempFilePath: item.thumbTempFilePath,
              size: item.size,
              type: res.tempFile && res.tempFile.type || '',
              width: item.width,
              height: item.height,
              duration: item.duration,
              fileType: 'video',
              cloudPath: ''
            };
          })
        }, 'video'));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseVideo:fail', ERR_MSG_FAIL)
        });
      }
    });
  });
}
function chooseAll(opts) {
  var count = opts.count,
    extension = opts.extension;
  return new Promise(function (resolve, reject) {
    var chooseFile = uni.chooseFile;
    if (typeof wx !== 'undefined' && typeof wx.chooseMessageFile === 'function') {
      chooseFile = wx.chooseMessageFile;
    }
    if (typeof chooseFile !== 'function') {
      return reject({
        errMsg: ERR_MSG_FAIL + ' 请指定 type 类型，该平台仅支持选择 image 或 video。'
      });
    }
    chooseFile({
      type: 'all',
      count: count,
      extension: extension,
      success: function success(res) {
        resolve(normalizeChooseAndUploadFileRes(res));
      },
      fail: function fail(res) {
        reject({
          errMsg: res.errMsg.replace('chooseFile:fail', ERR_MSG_FAIL)
        });
      }
    });
  });
}
function normalizeChooseAndUploadFileRes(res, fileType) {
  res.tempFiles.forEach(function (item, index) {
    if (!item.name) {
      item.name = item.path.substring(item.path.lastIndexOf('/') + 1);
    }
    if (fileType) {
      item.fileType = fileType;
    }
    item.cloudPath = Date.now() + '_' + index + item.name.substring(item.name.lastIndexOf('.'));
  });
  if (!res.tempFilePaths) {
    res.tempFilePaths = res.tempFiles.map(function (file) {
      return file.path;
    });
  }
  return res;
}
function uploadCloudFiles(files) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var _onUploadProgress = arguments.length > 2 ? arguments[2] : undefined;
  files = JSON.parse(JSON.stringify(files));
  var len = files.length;
  var count = 0;
  var self = this;
  return new Promise(function (resolve) {
    while (count < max) {
      next();
    }
    function next() {
      var cur = count++;
      if (cur >= len) {
        !files.find(function (item) {
          return !item.url && !item.errMsg;
        }) && resolve(files);
        return;
      }
      var fileItem = files[cur];
      var index = self.files.findIndex(function (v) {
        return v.uuid === fileItem.uuid;
      });
      fileItem.url = '';
      delete fileItem.errMsg;
      uniCloud.uploadFile({
        filePath: fileItem.path,
        cloudPath: fileItem.cloudPath,
        fileType: fileItem.fileType,
        onUploadProgress: function onUploadProgress(res) {
          res.index = index;
          _onUploadProgress && _onUploadProgress(res);
        }
      }).then(function (res) {
        fileItem.url = res.fileID;
        fileItem.index = index;
        if (cur < len) {
          next();
        }
      }).catch(function (res) {
        fileItem.errMsg = res.errMsg || res.message;
        fileItem.index = index;
        if (cur < len) {
          next();
        }
      });
    }
  });
}
function uploadFiles(choosePromise, _ref) {
  var onChooseFile = _ref.onChooseFile,
    onUploadProgress = _ref.onUploadProgress;
  return choosePromise.then(function (res) {
    if (onChooseFile) {
      var customChooseRes = onChooseFile(res);
      if (typeof customChooseRes !== 'undefined') {
        return Promise.resolve(customChooseRes).then(function (chooseRes) {
          return typeof chooseRes === 'undefined' ? res : chooseRes;
        });
      }
    }
    return res;
  }).then(function (res) {
    if (res === false) {
      return {
        errMsg: ERR_MSG_OK,
        tempFilePaths: [],
        tempFiles: []
      };
    }
    return res;
  });
}
function chooseAndUploadFile() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    type: 'all'
  };
  if (opts.type === 'image') {
    return uploadFiles(chooseImage(opts), opts);
  } else if (opts.type === 'video') {
    return uploadFiles(chooseVideo(opts), opts);
  }
  return uploadFiles(chooseAll(opts), opts);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 431)["default"]))

/***/ }),

/***/ 441:
/*!******************************************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uni_modules/uni-file-picker/components/uni-file-picker/utils.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get_files_and_is_max = exports.get_file_info = exports.get_file_ext = exports.get_file_data = exports.get_extname = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 44));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 46));
/**
 * 获取文件名和后缀
 * @param {String} name
 */
var get_file_ext = function get_file_ext(name) {
  var last_len = name.lastIndexOf('.');
  var len = name.length;
  return {
    name: name.substring(0, last_len),
    ext: name.substring(last_len + 1, len)
  };
};

/**
 * 获取扩展名
 * @param {Array} fileExtname
 */
exports.get_file_ext = get_file_ext;
var get_extname = function get_extname(fileExtname) {
  if (!Array.isArray(fileExtname)) {
    var extname = fileExtname.replace(/(\[|\])/g, '');
    return extname.split(',');
  } else {
    return fileExtname;
  }
  return [];
};

/**
 * 获取文件和检测是否可选
 */
exports.get_extname = get_extname;
var get_files_and_is_max = function get_files_and_is_max(res, _extname) {
  var filePaths = [];
  var files = [];
  if (!_extname || _extname.length === 0) {
    return {
      filePaths: filePaths,
      files: files
    };
  }
  res.tempFiles.forEach(function (v) {
    var fileFullName = get_file_ext(v.name);
    var extname = fileFullName.ext.toLowerCase();
    if (_extname.indexOf(extname) !== -1) {
      files.push(v);
      filePaths.push(v.path);
    }
  });
  if (files.length !== res.tempFiles.length) {
    uni.showToast({
      title: "\u5F53\u524D\u9009\u62E9\u4E86".concat(res.tempFiles.length, "\u4E2A\u6587\u4EF6 \uFF0C").concat(res.tempFiles.length - files.length, " \u4E2A\u6587\u4EF6\u683C\u5F0F\u4E0D\u6B63\u786E"),
      icon: 'none',
      duration: 5000
    });
  }
  return {
    filePaths: filePaths,
    files: files
  };
};

/**
 * 获取图片信息
 * @param {Object} filepath
 */
exports.get_files_and_is_max = get_files_and_is_max;
var get_file_info = function get_file_info(filepath) {
  return new Promise(function (resolve, reject) {
    uni.getImageInfo({
      src: filepath,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};
/**
 * 获取封装数据
 */
exports.get_file_info = get_file_info;
var get_file_data = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(files) {
    var type,
      fileFullName,
      extname,
      filedata,
      imageinfo,
      _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            type = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'image';
            // 最终需要上传数据库的数据
            fileFullName = get_file_ext(files.name);
            extname = fileFullName.ext.toLowerCase();
            filedata = {
              name: files.name,
              uuid: files.uuid,
              extname: extname || '',
              cloudPath: files.cloudPath,
              fileType: files.fileType,
              thumbTempFilePath: files.thumbTempFilePath,
              url: files.path || files.path,
              size: files.size,
              //单位是字节
              image: {},
              path: files.path,
              video: {}
            };
            if (!(type === 'image')) {
              _context.next = 14;
              break;
            }
            _context.next = 7;
            return get_file_info(files.path);
          case 7:
            imageinfo = _context.sent;
            delete filedata.video;
            filedata.image.width = imageinfo.width;
            filedata.image.height = imageinfo.height;
            filedata.image.location = imageinfo.path;
            _context.next = 15;
            break;
          case 14:
            delete filedata.image;
          case 15:
            return _context.abrupt("return", filedata);
          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function get_file_data(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.get_file_data = get_file_data;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 45:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 46:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 47:
/*!***************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/timeFormat.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {
    var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== "[object String]") throw new TypeError('fillString must be String');
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);
    var fillLength = maxLength - str.length,
      times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

// 其他更多是格式化有如下:
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
function timeFormat() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    "y+": date.getFullYear().toString(),
    // 年
    "m+": (date.getMonth() + 1).toString(),
    // 月
    "d+": date.getDate().toString(),
    // 日
    "h+": date.getHours().toString(),
    // 时
    "M+": date.getMinutes().toString(),
    // 分
    "s+": date.getSeconds().toString() // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    }
    ;
  }
  ;
  return fmt;
}
var _default = timeFormat;
exports.default = _default;

/***/ }),

/***/ 48:
/*!*************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/timeFrom.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _timeFormat = _interopRequireDefault(__webpack_require__(/*! ../../libs/function/timeFormat.js */ 47));
/**
 * 时间戳转为多久之前
 * @param String timestamp 时间戳
 * @param String | Boolean format 如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
 * 如果为布尔值false，无论什么时间，都返回多久以前的格式
 */
function timeFrom() {
  var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var timestamp = +new Date(Number(dateTime));
  var timer = (Number(new Date()) - timestamp) / 1000;
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = parseInt(timer / 60) + '分钟前';
      break;
    case timer >= 3600 && timer < 86400:
      tips = parseInt(timer / 3600) + '小时前';
      break;
    case timer >= 86400 && timer < 2592000:
      tips = parseInt(timer / 86400) + '天前';
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = parseInt(timer / (86400 * 30)) + '个月前';
        } else {
          tips = parseInt(timer / (86400 * 365)) + '年前';
        }
      } else {
        tips = (0, _timeFormat.default)(timestamp, format);
      }
  }
  return tips;
}
var _default = timeFrom;
exports.default = _default;

/***/ }),

/***/ 49:
/*!******************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/colorGradient.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 求两个颜色之间的渐变值
 * @param {string} startColor 开始的颜色
 * @param {string} endColor 结束的颜色
 * @param {number} step 颜色等分的份额
 * */
function colorGradient() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); //转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];
  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];
  var sR = (endR - startR) / step; //总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    //计算每一步的hex值 
    var hex = rgbToHex('rgb(' + Math.round(sR * i + startR) + ',' + Math.round(sG * i + startG) + ',' + Math.round(sB * i + startB) + ')');
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {
  var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = sColor.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    //处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(_i, _i + 2)));
    }
    if (!str) {
      return sColorChange;
    } else {
      return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
    }
  } else if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    return arr.map(function (val) {
      return Number(val);
    });
  } else {
    return sColor;
  }
}
;

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? 0 + '' + hex : hex; // 保证每个rgb的值为2位
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  } else if (reg.test(_this)) {
    var aNum = _this.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return _this;
    } else if (aNum.length === 3) {
      var numHex = "#";
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
* JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
* sHex为传入的十六进制的色值
* alpha为rgba的透明度
*/
function colorToRgba(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.3;
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = color.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i3, _i3 + 2)));
    }
    // return sColorChange.join(',')
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')';
  } else {
    return sColor;
  }
}
var _default = {
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba
};
exports.default = _default;

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 50:
/*!*********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/guid.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 本算法来源于简书开源代码，详见：https://www.jianshu.com/p/fdbf293d0a85
 * 全局唯一标识符（uuid，Globally Unique Identifier）,也称作 uuid(Universally Unique IDentifier) 
 * 一般用于多个组件之间,给它一个唯一的标识符,或者v-for循环的时候,如果使用数组的index可能会导致更新列表出现问题
 * 最可能的情况是左滑删除item或者对某条信息流"不喜欢"并去掉它的时候,会导致组件内的数据可能出现错乱
 * v-for的时候,推荐使用后端返回的id而不是循环的index
 * @param {Number} len uuid的长度
 * @param {Boolean} firstU 将返回的首字母置为"u"
 * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
 */
function guid() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;
  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';
    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return 'u' + uuid.join('');
  } else {
    return uuid.join('');
  }
}
var _default = guid;
exports.default = _default;

/***/ }),

/***/ 51:
/*!**********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/color.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: "#2979ff",
  primaryDark: "#2b85e4",
  primaryDisabled: "#a0cfff",
  primaryLight: "#ecf5ff",
  bgColor: "#f3f4f6",
  info: "#909399",
  infoDark: "#82848a",
  infoDisabled: "#c8c9cc",
  infoLight: "#f4f4f5",
  warning: "#ff9900",
  warningDark: "#f29100",
  warningDisabled: "#fcbd71",
  warningLight: "#fdf6ec",
  error: "#fa3534",
  errorDark: "#dd6161",
  errorDisabled: "#fab6b6",
  errorLight: "#fef0f0",
  success: "#19be6b",
  successDark: "#18b566",
  successDisabled: "#71d5a1",
  successLight: "#dbf1e1",
  mainColor: "#303133",
  contentColor: "#606266",
  tipsColor: "#909399",
  lightColor: "#c0c4cc",
  borderColor: "#e4e7ed"
};
var _default = color;
exports.default = _default;

/***/ }),

/***/ 52:
/*!**************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/type2icon.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * 根据主题type值,获取对应的图标
 * @param String type 主题名称,primary|info|error|warning|success
 * @param String fill 是否使用fill填充实体的图标  
 */
function type2icon() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';
  var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';
  }
  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}
var _default = type2icon;
exports.default = _default;

/***/ }),

/***/ 53:
/*!****************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/randomArray.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 打乱数组
function randomArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {
    return Math.random() - 0.5;
  });
}
var _default = randomArray;
exports.default = _default;

/***/ }),

/***/ 54:
/*!************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/addUnit.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addUnit;
var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 41));
// 添加单位，如果有rpx，%，px等单位结尾或者值为auto，直接返回，否则加上rpx单位结尾
function addUnit() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rpx';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/***/ }),

/***/ 540:
/*!****************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/util/async-validator.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uView-demo","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}) && "development" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {
        return typeof e === 'string';
      })) {
        console.warn(type, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var i = 1;
  var f = args[0];
  var len = args.length;
  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }
  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case '%s':
          return String(args[i++]);
        case '%d':
          return Number(args[i++]);
        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }
          break;
        default:
          return x;
      }
    });
    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " " + arg;
    }
    return str;
  }
  return f;
}
function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, errors);
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function (a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}
function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors)
        }) : resolve();
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending["catch"](function (e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields || [];
  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results)
        }) : resolve();
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }
    objArrKeys.forEach(function (key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}
function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }
    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if ((0, _typeof2.default)(value) === 'object' && (0, _typeof2.default)(target[s]) === 'object') {
          target[s] = _extends({}, target[s], {}, value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i'),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    // 修改源码，将字符串数值先转为数值
    return typeof +value === 'number';
  },
  object: function object(value) {
    return (0, _typeof2.default)(value) === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  }
};
/**
 *  Rule for validating the type of a value.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }
  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check
  } else if (ruleType && (0, _typeof2.default)(value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
 *  Rule for validating minimum and maximum allowed values.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);
  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type

  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}
var ENUM = 'enum';
/**
 *  Rule for validating a value exists in an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
 *  Rule for validating a regular expression pattern.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}
var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  "enum": enumerable,
  pattern: pattern$1
};

/**
 *  Performs validation for string types.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'string');
    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
}

/**
 *  Validates a function.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === '') {
      value = undefined;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a boolean.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates the regular expression type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is an integer.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a number is a floating point number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an array.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, 'array');
    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates an object.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
var ENUM$1 = 'enum';
/**
 *  Validates an enumerable list.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Validates a regular expression pattern.
 *
 *  Performs validation when a rule only contains
 *  a pattern property but is not declared as a string type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
}
function date(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      var dateObject;
      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }
      rules.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
}
function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : (0, _typeof2.default)(value);
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}
function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
}

/**
 *  Performs validation for any type.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rules.required(rule, value, source, errors, options);
  }
  callback(errors);
}
var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any
};
function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}
Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if ((0, _typeof2.default)(rules) !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z;
    var item;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;
    if (o === void 0) {
      o = {};
    }
    if (oc === void 0) {
      oc = function oc() {};
    }
    var source = source_;
    var options = o;
    var callback = oc;
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }
      return Promise.resolve();
    }
    function complete(results) {
      var i;
      var errors = [];
      var fields = {};
      function add(e) {
        if (Array.isArray(e)) {
          var _errors;
          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }
      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }
      callback(errors, fields);
    }
    if (options.messages) {
      var messages$1 = this.messages();
      if (messages$1 === messages) {
        messages$1 = newMessages();
      }
      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }
    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        }
        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        if (!rule.validator) {
          return;
        }
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && ((0, _typeof2.default)(rule.fields) === 'object' || (0, _typeof2.default)(rule.defaultField) === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function addFullfield(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key
        });
      }
      function cb(e) {
        if (e === void 0) {
          e = [];
        }
        var errors = e;
        if (!Array.isArray(errors)) {
          errors = [errors];
        }
        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }
        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }
        errors = errors.map(complementError(rule));
        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }
        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }
            return doIt(errors);
          }
          var fieldsSchema = {};
          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }
          fieldsSchema = _extends({}, fieldsSchema, {}, data.rule.fields);
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];
            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }
            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }
            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }
      var res;
      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);
        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || rule.field + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }
      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');
    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }
    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }
    return validators[this.getType(rule)] || false;
  }
};
Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  validators[type] = validator;
};
Schema.warning = warning;
Schema.messages = messages;
var _default = Schema;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/node-libs-browser/mock/process.js */ 541)))

/***/ }),

/***/ 541:
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 542);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ 542:
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 541)))

/***/ }),

/***/ 55:
/*!***********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/random.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  } else {
    return 0;
  }
}
var _default = random;
exports.default = _default;

/***/ }),

/***/ 56:
/*!*********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/trim.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function trim(str) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, "");
  } else if (pos == "left") {
    return str.replace(/^\s*/, '');
  } else if (pos == 'right') {
    return str.replace(/(\s*$)/g, "");
  } else if (pos == 'all') {
    return str.replace(/\s+/g, "");
  } else {
    return str;
  }
}
var _default = trim;
exports.default = _default;

/***/ }),

/***/ 57:
/*!**********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/toast.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function toast(title) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;
  uni.showToast({
    title: title,
    icon: 'none',
    duration: duration
  });
}
var _default = toast;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 58:
/*!**************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/getParent.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getParent;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
function getParent(name, keys) {
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      var _ret = function () {
        var data = {};
        // 判断keys是否数组，如果传过来的是一个数组，那么直接使用数组元素值当做键值去父组件寻找
        if (Array.isArray(keys)) {
          keys.map(function (val) {
            data[val] = parent[val] ? parent[val] : '';
          });
        } else {
          // 历遍传过来的对象参数
          for (var i in keys) {
            // 如果子组件有此值则用，无此值则用父组件的值
            // 判断是否空数组，如果是，则用父组件的值，否则用子组件的值
            if (Array.isArray(keys[i])) {
              if (keys[i].length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else if (keys[i].constructor === Object) {
              // 判断是否对象，如果是对象，且有属性，那么使用子组件的值，否则使用父组件的值
              if (Object.keys(keys[i]).length) {
                data[i] = keys[i];
              } else {
                data[i] = parent[i];
              }
            } else {
              // 只要子组件有传值，即使是false值，也是“传值”了，也需要覆盖父组件的同名参数
              data[i] = keys[i] || keys[i] === false ? keys[i] : parent[i];
            }
          }
        }
        return {
          v: data
        };
      }();
      if ((0, _typeof2.default)(_ret) === "object") return _ret.v;
    }
  }
  return {};
}

/***/ }),

/***/ 59:
/*!************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/$parent.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = $parent;
// 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
// this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
// 这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
// 值(默认为undefined)，就是查找最顶层的$parent
function $parent() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/sys.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.os = os;
exports.sys = sys;
function os() {
  return uni.getSystemInfoSync().platform;
}
;
function sys() {
  return uni.getSystemInfoSync();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 61:
/*!*************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/debounce.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timeout = null;

/**
 * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行 
 * @return null
 */
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}
var _default = debounce;
exports.default = _default;

/***/ }),

/***/ 62:
/*!*************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/function/throttle.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var timer, flag;
/**
 * 节流原理：在一定时间内，只能触发一次
 * 
 * @param {Function} func 要执行的回调函数 
 * @param {Number} wait 延时的时间
 * @param {Boolean} immediate 是否立即执行
 * @return null
 */
function throttle(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else {
    if (!flag) {
      flag = true;
      // 如果是非立即执行，则在wait毫秒内的结束处执行
      timer = setTimeout(function () {
        flag = false;
        typeof func === 'function' && func();
      }, wait);
    }
  }
}
;
var _default = throttle;
exports.default = _default;

/***/ }),

/***/ 620:
/*!********************************************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uni_modules/cc-beautyPoster/components/cc-beautyPoster/uqrcode.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//---------------------------------------------------------------------
// github https://github.com/Sansnn/uQRCode
//---------------------------------------------------------------------

var uQRCode = {};
(function () {
  //---------------------------------------------------------------------
  // QRCode for JavaScript
  //
  // Copyright (c) 2009 Kazuhiko Arase
  //
  // URL: http://www.d-project.com/
  //
  // Licensed under the MIT license:
  //   http://www.opensource.org/licenses/mit-license.php
  //
  // The word "QR Code" is registered trademark of 
  // DENSO WAVE INCORPORATED
  //   http://www.denso-wave.com/qrcode/faqpatent-e.html
  //
  //---------------------------------------------------------------------

  //---------------------------------------------------------------------
  // QR8bitByte
  //---------------------------------------------------------------------

  function QR8bitByte(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data;
  }
  QR8bitByte.prototype = {
    getLength: function getLength(buffer) {
      return this.data.length;
    },
    write: function write(buffer) {
      for (var i = 0; i < this.data.length; i++) {
        // not JIS ...
        buffer.put(this.data.charCodeAt(i), 8);
      }
    }
  };

  //---------------------------------------------------------------------
  // QRCode
  //---------------------------------------------------------------------

  function QRCode(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = new Array();
  }
  QRCode.prototype = {
    addData: function addData(data) {
      var newData = new QR8bitByte(data);
      this.dataList.push(newData);
      this.dataCache = null;
    },
    isDark: function isDark(row, col) {
      if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
        throw new Error(row + "," + col);
      }
      return this.modules[row][col];
    },
    getModuleCount: function getModuleCount() {
      return this.moduleCount;
    },
    make: function make() {
      // Calculate automatically typeNumber if provided is < 1
      if (this.typeNumber < 1) {
        var typeNumber = 1;
        for (typeNumber = 1; typeNumber < 40; typeNumber++) {
          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
          var buffer = new QRBitBuffer();
          var totalDataCount = 0;
          for (var i = 0; i < rsBlocks.length; i++) {
            totalDataCount += rsBlocks[i].dataCount;
          }
          for (var i = 0; i < this.dataList.length; i++) {
            var data = this.dataList[i];
            buffer.put(data.mode, 4);
            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
            data.write(buffer);
          }
          if (buffer.getLengthInBits() <= totalDataCount * 8) break;
        }
        this.typeNumber = typeNumber;
      }
      this.makeImpl(false, this.getBestMaskPattern());
    },
    makeImpl: function makeImpl(test, maskPattern) {
      this.moduleCount = this.typeNumber * 4 + 17;
      this.modules = new Array(this.moduleCount);
      for (var row = 0; row < this.moduleCount; row++) {
        this.modules[row] = new Array(this.moduleCount);
        for (var col = 0; col < this.moduleCount; col++) {
          this.modules[row][col] = null; //(col + row) % 3;
        }
      }

      this.setupPositionProbePattern(0, 0);
      this.setupPositionProbePattern(this.moduleCount - 7, 0);
      this.setupPositionProbePattern(0, this.moduleCount - 7);
      this.setupPositionAdjustPattern();
      this.setupTimingPattern();
      this.setupTypeInfo(test, maskPattern);
      if (this.typeNumber >= 7) {
        this.setupTypeNumber(test);
      }
      if (this.dataCache == null) {
        this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
      }
      this.mapData(this.dataCache, maskPattern);
    },
    setupPositionProbePattern: function setupPositionProbePattern(row, col) {
      for (var r = -1; r <= 7; r++) {
        if (row + r <= -1 || this.moduleCount <= row + r) continue;
        for (var c = -1; c <= 7; c++) {
          if (col + c <= -1 || this.moduleCount <= col + c) continue;
          if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
            this.modules[row + r][col + c] = true;
          } else {
            this.modules[row + r][col + c] = false;
          }
        }
      }
    },
    getBestMaskPattern: function getBestMaskPattern() {
      var minLostPoint = 0;
      var pattern = 0;
      for (var i = 0; i < 8; i++) {
        this.makeImpl(true, i);
        var lostPoint = QRUtil.getLostPoint(this);
        if (i == 0 || minLostPoint > lostPoint) {
          minLostPoint = lostPoint;
          pattern = i;
        }
      }
      return pattern;
    },
    createMovieClip: function createMovieClip(target_mc, instance_name, depth) {
      var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
      var cs = 1;
      this.make();
      for (var row = 0; row < this.modules.length; row++) {
        var y = row * cs;
        for (var col = 0; col < this.modules[row].length; col++) {
          var x = col * cs;
          var dark = this.modules[row][col];
          if (dark) {
            qr_mc.beginFill(0, 100);
            qr_mc.moveTo(x, y);
            qr_mc.lineTo(x + cs, y);
            qr_mc.lineTo(x + cs, y + cs);
            qr_mc.lineTo(x, y + cs);
            qr_mc.endFill();
          }
        }
      }
      return qr_mc;
    },
    setupTimingPattern: function setupTimingPattern() {
      for (var r = 8; r < this.moduleCount - 8; r++) {
        if (this.modules[r][6] != null) {
          continue;
        }
        this.modules[r][6] = r % 2 == 0;
      }
      for (var c = 8; c < this.moduleCount - 8; c++) {
        if (this.modules[6][c] != null) {
          continue;
        }
        this.modules[6][c] = c % 2 == 0;
      }
    },
    setupPositionAdjustPattern: function setupPositionAdjustPattern() {
      var pos = QRUtil.getPatternPosition(this.typeNumber);
      for (var i = 0; i < pos.length; i++) {
        for (var j = 0; j < pos.length; j++) {
          var row = pos[i];
          var col = pos[j];
          if (this.modules[row][col] != null) {
            continue;
          }
          for (var r = -2; r <= 2; r++) {
            for (var c = -2; c <= 2; c++) {
              if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                this.modules[row + r][col + c] = true;
              } else {
                this.modules[row + r][col + c] = false;
              }
            }
          }
        }
      }
    },
    setupTypeNumber: function setupTypeNumber(test) {
      var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
      }
      for (var i = 0; i < 18; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
      }
    },
    setupTypeInfo: function setupTypeInfo(test, maskPattern) {
      var data = this.errorCorrectLevel << 3 | maskPattern;
      var bits = QRUtil.getBCHTypeInfo(data);

      // vertical		
      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 6) {
          this.modules[i][8] = mod;
        } else if (i < 8) {
          this.modules[i + 1][8] = mod;
        } else {
          this.modules[this.moduleCount - 15 + i][8] = mod;
        }
      }

      // horizontal
      for (var i = 0; i < 15; i++) {
        var mod = !test && (bits >> i & 1) == 1;
        if (i < 8) {
          this.modules[8][this.moduleCount - i - 1] = mod;
        } else if (i < 9) {
          this.modules[8][15 - i - 1 + 1] = mod;
        } else {
          this.modules[8][15 - i - 1] = mod;
        }
      }

      // fixed module
      this.modules[this.moduleCount - 8][8] = !test;
    },
    mapData: function mapData(data, maskPattern) {
      var inc = -1;
      var row = this.moduleCount - 1;
      var bitIndex = 7;
      var byteIndex = 0;
      for (var col = this.moduleCount - 1; col > 0; col -= 2) {
        if (col == 6) col--;
        while (true) {
          for (var c = 0; c < 2; c++) {
            if (this.modules[row][col - c] == null) {
              var dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
              }
              var mask = QRUtil.getMask(maskPattern, row, col - c);
              if (mask) {
                dark = !dark;
              }
              this.modules[row][col - c] = dark;
              bitIndex--;
              if (bitIndex == -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || this.moduleCount <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
  };
  QRCode.PAD0 = 0xEC;
  QRCode.PAD1 = 0x11;
  QRCode.createData = function (typeNumber, errorCorrectLevel, dataList) {
    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    var buffer = new QRBitBuffer();
    for (var i = 0; i < dataList.length; i++) {
      var data = dataList[i];
      buffer.put(data.mode, 4);
      buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
      data.write(buffer);
    }

    // calc num max data.
    var totalDataCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
      totalDataCount += rsBlocks[i].dataCount;
    }
    if (buffer.getLengthInBits() > totalDataCount * 8) {
      throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
    }

    // end code
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
      buffer.put(0, 4);
    }

    // padding
    while (buffer.getLengthInBits() % 8 != 0) {
      buffer.putBit(false);
    }

    // padding
    while (true) {
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(QRCode.PAD0, 8);
      if (buffer.getLengthInBits() >= totalDataCount * 8) {
        break;
      }
      buffer.put(QRCode.PAD1, 8);
    }
    return QRCode.createBytes(buffer, rsBlocks);
  };
  QRCode.createBytes = function (buffer, rsBlocks) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for (var r = 0; r < rsBlocks.length; r++) {
      var dcCount = rsBlocks[r].dataCount;
      var ecCount = rsBlocks[r].totalCount - dcCount;
      maxDcCount = Math.max(maxDcCount, dcCount);
      maxEcCount = Math.max(maxEcCount, ecCount);
      dcdata[r] = new Array(dcCount);
      for (var i = 0; i < dcdata[r].length; i++) {
        dcdata[r][i] = 0xff & buffer.buffer[i + offset];
      }
      offset += dcCount;
      var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
      var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
      var modPoly = rawPoly.mod(rsPoly);
      ecdata[r] = new Array(rsPoly.getLength() - 1);
      for (var i = 0; i < ecdata[r].length; i++) {
        var modIndex = i + modPoly.getLength() - ecdata[r].length;
        ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
      }
    }
    var totalCodeCount = 0;
    for (var i = 0; i < rsBlocks.length; i++) {
      totalCodeCount += rsBlocks[i].totalCount;
    }
    var data = new Array(totalCodeCount);
    var index = 0;
    for (var i = 0; i < maxDcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < dcdata[r].length) {
          data[index++] = dcdata[r][i];
        }
      }
    }
    for (var i = 0; i < maxEcCount; i++) {
      for (var r = 0; r < rsBlocks.length; r++) {
        if (i < ecdata[r].length) {
          data[index++] = ecdata[r][i];
        }
      }
    }
    return data;
  };

  //---------------------------------------------------------------------
  // QRMode
  //---------------------------------------------------------------------

  var QRMode = {
    MODE_NUMBER: 1 << 0,
    MODE_ALPHA_NUM: 1 << 1,
    MODE_8BIT_BYTE: 1 << 2,
    MODE_KANJI: 1 << 3
  };

  //---------------------------------------------------------------------
  // QRErrorCorrectLevel
  //---------------------------------------------------------------------

  var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
  };

  //---------------------------------------------------------------------
  // QRMaskPattern
  //---------------------------------------------------------------------

  var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };

  //---------------------------------------------------------------------
  // QRUtil
  //---------------------------------------------------------------------

  var QRUtil = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
    G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
    G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
    getBCHTypeInfo: function getBCHTypeInfo(data) {
      var d = data << 10;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
        d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
      }
      return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    getBCHTypeNumber: function getBCHTypeNumber(data) {
      var d = data << 12;
      while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
        d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
      }
      return data << 12 | d;
    },
    getBCHDigit: function getBCHDigit(data) {
      var digit = 0;
      while (data != 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    },
    getPatternPosition: function getPatternPosition(typeNumber) {
      return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    getMask: function getMask(maskPattern, i, j) {
      switch (maskPattern) {
        case QRMaskPattern.PATTERN000:
          return (i + j) % 2 == 0;
        case QRMaskPattern.PATTERN001:
          return i % 2 == 0;
        case QRMaskPattern.PATTERN010:
          return j % 3 == 0;
        case QRMaskPattern.PATTERN011:
          return (i + j) % 3 == 0;
        case QRMaskPattern.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
        case QRMaskPattern.PATTERN101:
          return i * j % 2 + i * j % 3 == 0;
        case QRMaskPattern.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 == 0;
        case QRMaskPattern.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    },
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(errorCorrectLength) {
      var a = new QRPolynomial([1], 0);
      for (var i = 0; i < errorCorrectLength; i++) {
        a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
      }
      return a;
    },
    getLengthInBits: function getLengthInBits(mode, type) {
      if (1 <= type && type < 10) {
        // 1 - 9

        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 10;
          case QRMode.MODE_ALPHA_NUM:
            return 9;
          case QRMode.MODE_8BIT_BYTE:
            return 8;
          case QRMode.MODE_KANJI:
            return 8;
          default:
            throw new Error("mode:" + mode);
        }
      } else if (type < 27) {
        // 10 - 26

        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 12;
          case QRMode.MODE_ALPHA_NUM:
            return 11;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 10;
          default:
            throw new Error("mode:" + mode);
        }
      } else if (type < 41) {
        // 27 - 40

        switch (mode) {
          case QRMode.MODE_NUMBER:
            return 14;
          case QRMode.MODE_ALPHA_NUM:
            return 13;
          case QRMode.MODE_8BIT_BYTE:
            return 16;
          case QRMode.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + mode);
        }
      } else {
        throw new Error("type:" + type);
      }
    },
    getLostPoint: function getLostPoint(qrCode) {
      var moduleCount = qrCode.getModuleCount();
      var lostPoint = 0;

      // LEVEL1

      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount; col++) {
          var sameCount = 0;
          var dark = qrCode.isDark(row, col);
          for (var r = -1; r <= 1; r++) {
            if (row + r < 0 || moduleCount <= row + r) {
              continue;
            }
            for (var c = -1; c <= 1; c++) {
              if (col + c < 0 || moduleCount <= col + c) {
                continue;
              }
              if (r == 0 && c == 0) {
                continue;
              }
              if (dark == qrCode.isDark(row + r, col + c)) {
                sameCount++;
              }
            }
          }
          if (sameCount > 5) {
            lostPoint += 3 + sameCount - 5;
          }
        }
      }

      // LEVEL2

      for (var row = 0; row < moduleCount - 1; row++) {
        for (var col = 0; col < moduleCount - 1; col++) {
          var count = 0;
          if (qrCode.isDark(row, col)) count++;
          if (qrCode.isDark(row + 1, col)) count++;
          if (qrCode.isDark(row, col + 1)) count++;
          if (qrCode.isDark(row + 1, col + 1)) count++;
          if (count == 0 || count == 4) {
            lostPoint += 3;
          }
        }
      }

      // LEVEL3

      for (var row = 0; row < moduleCount; row++) {
        for (var col = 0; col < moduleCount - 6; col++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
            lostPoint += 40;
          }
        }
      }
      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount - 6; row++) {
          if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
            lostPoint += 40;
          }
        }
      }

      // LEVEL4

      var darkCount = 0;
      for (var col = 0; col < moduleCount; col++) {
        for (var row = 0; row < moduleCount; row++) {
          if (qrCode.isDark(row, col)) {
            darkCount++;
          }
        }
      }
      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
      lostPoint += ratio * 10;
      return lostPoint;
    }
  };

  //---------------------------------------------------------------------
  // QRMath
  //---------------------------------------------------------------------

  var QRMath = {
    glog: function glog(n) {
      if (n < 1) {
        throw new Error("glog(" + n + ")");
      }
      return QRMath.LOG_TABLE[n];
    },
    gexp: function gexp(n) {
      while (n < 0) {
        n += 255;
      }
      while (n >= 256) {
        n -= 255;
      }
      return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
  };
  for (var i = 0; i < 8; i++) {
    QRMath.EXP_TABLE[i] = 1 << i;
  }
  for (var i = 8; i < 256; i++) {
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
  }
  for (var i = 0; i < 255; i++) {
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
  }

  //---------------------------------------------------------------------
  // QRPolynomial
  //---------------------------------------------------------------------

  function QRPolynomial(num, shift) {
    if (num.length == undefined) {
      throw new Error(num.length + "/" + shift);
    }
    var offset = 0;
    while (offset < num.length && num[offset] == 0) {
      offset++;
    }
    this.num = new Array(num.length - offset + shift);
    for (var i = 0; i < num.length - offset; i++) {
      this.num[i] = num[i + offset];
    }
  }
  QRPolynomial.prototype = {
    get: function get(index) {
      return this.num[index];
    },
    getLength: function getLength() {
      return this.num.length;
    },
    multiply: function multiply(e) {
      var num = new Array(this.getLength() + e.getLength() - 1);
      for (var i = 0; i < this.getLength(); i++) {
        for (var j = 0; j < e.getLength(); j++) {
          num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
        }
      }
      return new QRPolynomial(num, 0);
    },
    mod: function mod(e) {
      if (this.getLength() - e.getLength() < 0) {
        return this;
      }
      var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
      var num = new Array(this.getLength());
      for (var i = 0; i < this.getLength(); i++) {
        num[i] = this.get(i);
      }
      for (var i = 0; i < e.getLength(); i++) {
        num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
      }

      // recursive call
      return new QRPolynomial(num, 0).mod(e);
    }
  };

  //---------------------------------------------------------------------
  // QRRSBlock
  //---------------------------------------------------------------------

  function QRRSBlock(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount;
  }
  QRRSBlock.RS_BLOCK_TABLE = [
  // L
  // M
  // Q
  // H

  // 1
  [1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9],
  // 2
  [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16],
  // 3
  [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13],
  // 4		
  [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9],
  // 5
  [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12],
  // 6
  [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15],
  // 7		
  [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14],
  // 8
  [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15],
  // 9
  [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13],
  // 10		
  [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16],
  // 11
  [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13],
  // 12
  [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15],
  // 13
  [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12],
  // 14
  [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13],
  // 15
  [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12],
  // 16
  [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16],
  // 17
  [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15],
  // 18
  [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15],
  // 19
  [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14],
  // 20
  [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16],
  // 21
  [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17],
  // 22
  [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13],
  // 23
  [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16],
  // 24
  [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17],
  // 25
  [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16],
  // 26
  [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17],
  // 27
  [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16],
  // 28
  [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16],
  // 29
  [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16],
  // 30
  [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16],
  // 31
  [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16],
  // 32
  [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16],
  // 33
  [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16],
  // 34
  [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17],
  // 35
  [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16],
  // 36
  [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16],
  // 37
  [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16],
  // 38
  [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16],
  // 39
  [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16],
  // 40
  [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
  QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
    if (rsBlock == undefined) {
      throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
    }
    var length = rsBlock.length / 3;
    var list = new Array();
    for (var i = 0; i < length; i++) {
      var count = rsBlock[i * 3 + 0];
      var totalCount = rsBlock[i * 3 + 1];
      var dataCount = rsBlock[i * 3 + 2];
      for (var j = 0; j < count; j++) {
        list.push(new QRRSBlock(totalCount, dataCount));
      }
    }
    return list;
  };
  QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
    switch (errorCorrectLevel) {
      case QRErrorCorrectLevel.L:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
      case QRErrorCorrectLevel.M:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
      case QRErrorCorrectLevel.Q:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
      case QRErrorCorrectLevel.H:
        return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
      default:
        return undefined;
    }
  };

  //---------------------------------------------------------------------
  // QRBitBuffer
  //---------------------------------------------------------------------

  function QRBitBuffer() {
    this.buffer = new Array();
    this.length = 0;
  }
  QRBitBuffer.prototype = {
    get: function get(index) {
      var bufIndex = Math.floor(index / 8);
      return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    },
    put: function put(num, length) {
      for (var i = 0; i < length; i++) {
        this.putBit((num >>> length - i - 1 & 1) == 1);
      }
    },
    getLengthInBits: function getLengthInBits() {
      return this.length;
    },
    putBit: function putBit(bit) {
      var bufIndex = Math.floor(this.length / 8);
      if (this.buffer.length <= bufIndex) {
        this.buffer.push(0);
      }
      if (bit) {
        this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
      }
      this.length++;
    }
  };

  //---------------------------------------------------------------------
  // Support Chinese
  //---------------------------------------------------------------------
  function utf16To8(text) {
    var result = '';
    var c;
    for (var i = 0; i < text.length; i++) {
      c = text.charCodeAt(i);
      if (c >= 0x0001 && c <= 0x007F) {
        result += text.charAt(i);
      } else if (c > 0x07FF) {
        result += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
        result += String.fromCharCode(0x80 | c >> 6 & 0x3F);
        result += String.fromCharCode(0x80 | c >> 0 & 0x3F);
      } else {
        result += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
        result += String.fromCharCode(0x80 | c >> 0 & 0x3F);
      }
    }
    return result;
  }
  uQRCode = {
    defaults: {
      size: 258,
      margin: 0,
      backgroundColor: '#ffffff',
      foregroundColor: '#000000',
      fileType: 'png',
      // 'jpg', 'png'
      correctLevel: 3,
      typeNumber: -1
    },
    make: function make(options) {
      var defaultOptions = {
        canvasId: options.canvasId,
        componentInstance: options.componentInstance,
        text: options.text,
        size: this.defaults.size,
        margin: this.defaults.margin,
        backgroundColor: this.defaults.backgroundColor,
        foregroundColor: this.defaults.foregroundColor,
        fileType: this.defaults.fileType,
        correctLevel: this.defaults.correctLevel,
        typeNumber: this.defaults.typeNumber
      };
      if (options) {
        for (var i in options) {
          defaultOptions[i] = options[i];
        }
      }
      options = defaultOptions;
      if (!options.canvasId) {
        console.error('uQRCode: Please set canvasId!');
        return;
      }
      function createCanvas() {
        var qrcode = new QRCode(options.typeNumber, options.correctLevel);
        qrcode.addData(utf16To8(options.text));
        qrcode.make();
        var ctx = uni.createCanvasContext(options.canvasId, options.componentInstance);
        ctx.setFillStyle(options.backgroundColor);
        ctx.fillRect(0, 0, options.size, options.size);
        var tileW = (options.size - options.margin * 2) / qrcode.getModuleCount();
        var tileH = tileW;
        for (var row = 0; row < qrcode.getModuleCount(); row++) {
          for (var col = 0; col < qrcode.getModuleCount(); col++) {
            var style = qrcode.isDark(row, col) ? options.foregroundColor : options.backgroundColor;
            ctx.setFillStyle(style);
            var x = Math.round(col * tileW) + options.margin;
            var y = Math.round(row * tileH) + options.margin;
            var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
            var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
            ctx.fillRect(x, y, w, h);
          }
        }
        setTimeout(function () {
          ctx.draw(false, function () {
            setTimeout(function () {
              uni.canvasToTempFilePath({
                canvasId: options.canvasId,
                fileType: options.fileType,
                width: options.size,
                height: options.size,
                destWidth: options.size,
                destHeight: options.size,
                success: function success(res) {
                  options.success && options.success(res.tempFilePath);
                },
                fail: function fail(error) {
                  options.fail && options.fail(error);
                },
                complete: function complete(res) {
                  options.complete && options.complete(res);
                }
              }, options.componentInstance);
            }, options.text.length + 100);
          });
        }, 150);
      }
      createCanvas();
    }
  };
})();
var _default = uQRCode;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 63:
/*!*********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/config/config.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// 此版本发布于2020-12-17
var version = '1.8.3';
var _default = {
  v: version,
  version: version,
  // 主题名称
  type: ['primary', 'success', 'info', 'error', 'warning']
};
exports.default = _default;

/***/ }),

/***/ 64:
/*!*********************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uview-ui/libs/config/zIndex.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */
var _default = {
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965
};
exports.default = _default;

/***/ }),

/***/ 656:
/*!**************************************************************************************************************************!*\
  !*** C:/Users/lenovo/Desktop/gewoli_song_uniapp/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimation = createAnimation;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {
    (0, _classCallCheck2.default)(this, MPAnimation);
    this.options = options;
    // 在iOS10+QQ小程序平台下，传给原生的对象一定是个普通对象而不是Proxy对象，否则会报parameter should be Object instead of ProxyObject的错误
    this.animation = uni.createAnimation(_objectSpread({}, options));
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  (0, _createClass2.default)(MPAnimation, [{
    key: "_nvuePushAnimates",
    value: function _nvuePushAnimates(type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    }
  }, {
    key: "_animateRun",
    value: function _animateRun() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles
        }, config), function (res) {
          resolve();
        });
      });
    }
  }, {
    key: "_nvueNextAnimate",
    value: function _nvueNextAnimate(animates) {
      var _this2 = this;
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {
        var styles = obj.styles,
          config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.animation.step(config);
      return this;
    }
  }, {
    key: "run",
    value: function run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);
    }
  }]);
  return MPAnimation;
}();
var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];
var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {
    var _this$animation;
    (_this$animation = this.animation)[type].apply(_this$animation, arguments);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 87:
/*!***********************************************!*\
  !*** ./node_modules/os-browserify/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

exports.homedir = function () {
	return '/'
};


/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map