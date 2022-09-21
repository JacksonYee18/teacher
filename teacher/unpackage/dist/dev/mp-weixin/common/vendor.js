(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
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
      tokenExpired: 0 };

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
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
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
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
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

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
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

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
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
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
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

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
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
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting/;

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
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

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

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this = this;
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
    } } };


var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

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
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}

function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
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
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function setLocale$1(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

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
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


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
  } };


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
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

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
      bottom: result.screenHeight - safeArea.bottom };

  }
}

function populateParameters(result) {var _result$brand =





  result.brand,brand = _result$brand === void 0 ? '' : _result$brand,_result$model = result.model,model = _result$model === void 0 ? '' : _result$model,_result$system = result.system,system = _result$system === void 0 ? '' : _result$system,_result$language = result.language,language = _result$language === void 0 ? '' : _result$language,theme = result.theme,version = result.version,platform = result.platform,fontSizeSetting = result.fontSizeSetting,SDKVersion = result.SDKVersion,pixelRatio = result.pixelRatio,deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

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
    appId: "",
    appName: "teacher",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.5.3",
    uniRuntimeVersion: "3.5.3",
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
    browserVersion: undefined };


  Object.assign(result, parameters);
}

function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc' };

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
  return getLocale$1 ?
  getLocale$1() :
  defaultLanguage;
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
  } };


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


var getAppBaseInfo = {
  returnValue: function returnValue(result) {var _result =
    result,version = _result.version,language = _result.language,SDKVersion = _result.SDKVersion,theme = _result.theme;

    var _hostName = getHostName(result);

    var hostLanguage = language.replace('_', '-');

    result = sortObject(Object.assign(result, {
      appId: "",
      appName: "teacher",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme }));

  } };


var getDeviceInfo = {
  returnValue: function returnValue(result) {var _result2 =
    result,brand = _result2.brand,model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);

    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model }));

  } };


var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);

    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0 }));

  } };


var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {var
    locationReducedAccuracy = result.locationReducedAccuracy;

    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  } };


// import navigateTo from 'uni-helpers/navigate-to'

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
  getAppAuthorizeSetting: getAppAuthorizeSetting };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
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
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
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

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
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
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

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
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


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
  $emit: $emit });


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

function invokePushCallback(
args)
{
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message) };

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
        data: normalizePushMessage(args.message) });

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
  }var _getApiCallbacks =




  getApiCallbacks(args),success = _getApiCallbacks.success,fail = _getApiCallbacks.fail,complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'unipush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid };

        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '') };

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

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
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
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


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
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
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
      if (Object({"VUE_APP_NAME":"teacher","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
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
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


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

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: '' };

        properties.virtualHostClass = {
          type: null,
          value: '' };

      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

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
    event.detail = typeof event.detail === 'object' ? event.detail : {};
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
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
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

function processEventExtra(vm, extra, event) {
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
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
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

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
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
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
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
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

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
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

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

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


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

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
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

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


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

  return appOptions;
}

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
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
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
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


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
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


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
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


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

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

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
    allowDefault: true });

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
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
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
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
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
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
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
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
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

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
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
/* 3 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
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
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
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
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
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
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
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
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
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
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
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
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
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
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
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
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
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
    } else
    {
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
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
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
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
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
  } else
  {
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
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
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
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
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
    !value._isVue
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
                    if (currentValue !== pre[key]) {
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
        if (Object({"VUE_APP_NAME":"teacher","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
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
        if(Object({"VUE_APP_NAME":"teacher","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"teacher","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
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

  return JSON.parse(JSON.stringify(ret))
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
      if (Object({"VUE_APP_NAME":"teacher","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
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
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent']).call(this.$scope, event, {
        __args__: toArray(arguments, 1)
      });
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** C:/Users/魏凤婷/Desktop/wft/111/teacher/pages.json ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/*!**************************************************************!*\
  !*** C:/Users/魏凤婷/Desktop/wft/111/teacher/static/img/发布.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 17 */
/*!***************************************************************!*\
  !*** C:/Users/魏凤婷/Desktop/wft/111/teacher/static/img/志愿者.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 18 */
/*!**************************************************************!*\
  !*** C:/Users/魏凤婷/Desktop/wft/111/teacher/static/img/打卡.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/*!***************************************************************!*\
  !*** C:/Users/魏凤婷/Desktop/wft/111/teacher/static/img/男头像.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */
/*!****************************************************************!*\
  !*** C:/Users/魏凤婷/Desktop/wft/111/teacher/static/json/data.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var message = [{
  "icon": "static/img/女头像.png",
  "title": "张三",
  "content": "同学请问你什么时候能到岗",
  "time": "18:00" },

{
  "icon": "static/img/男头像.png",
  "title": "王五",
  "content": "同学不好意思，我们已经招满了，你再看看别的",
  "time": "19:00" }];


module.exports = {
  message: message };

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/*!**************************************************************!*\
  !*** C:/Users/魏凤婷/Desktop/wft/111/teacher/static/img/资料.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAADICAYAAADofFQ1AAAAAXNSR0IArs4c6QAAE+JJREFUeF7tnQ2MHOV5x//P3NUhmBS8uwfEDeZu1qAmJEDlVIjWpCbQIqfhI2pwHaIQzFebNqWN3TS+OSzOFTd3JkAqTFWSlq8SILFV1YSmDZiAJSMKCcW1wZGgvtmzgxLi2znj4iS1uZ2n2ruz46+zd3d2531n9r/SyZb9vs/zf37PO/+b3Zl9RxDzlev2LhNHFgA6R4A5CszB5A9fJEACTScgb0F0RBUjAhmRqPJUeWRoQ5w0Uv/kNR0Fd/NiRbQQkIUAcvXH4AwSIIEmEhhVlXWOo8+Wh89fCyyq1BO7ZhM4ec7yWR2dskTgXAfoR+pJwrEkQAJJEZBXFdFDlXF9cPeOoV21ZK3JBHKu1y/AdQDOrCUox5AACRgnsF2Bh8YCv/94So5rAjm39y6BLD1eIP4/CZCAfQREsLY87C86lrJjmkDe9Z4BcIl9pVERCZBA7QRkaxgMfHi68dOaQN71tPYkHEkCJGA7gTDwj3q8H/Uf827fa4CeY3tR1EcCJFAXge+HgX/p4TOOMIFC0VujiqvrCs3BJEACqSCg0LvHgsFlB4s9xASmrgLclopqKJIESKAhAgqsPPiqwQETqN4H0NnpbOJlwIa4chIJpIaAAuXKeHTB7h1DQVX0ARPIub1LBXJXaiqhUBIggYYJHPy2YMoE1nTk3c2beCdgw0w5kQTSRmBvRSsXvF1atXnCBApFb7EqHk9bFdRLAiQQg4BidVjyb5kwgVxP3zdE9KYY4TiVBEggfQS2hYF/1oQJ5F1vJ4Cu9NVAxSRAAnEIRJCLpNC9fIE6znNxAnEuCZBAWgnIkOTdvkFAl6e1BOomARJonIAAz0ve9R4FcE3jYTiTBEggvQT0VSm43kYF5qe3CConARKIQWBH9UxgO/cEjIGQU0kg3QR2V02AXxlOdxOpngRiEaAJxMLHySSQfgI0gfT3kBWQQCwCNIFY+DiZBNJPgCaQ/h6yAhKIRYAmEAsfJ5NA+gnQBNLfQ1ZAArEI0ARi4eNkEkg/AZpA+nvICkggFgGaQCx8nEwC6SdAE0h/D1kBCcQiQBOIhY+TSSD9BGgC6e8hKyCBWARoArHwcTIJpJ8ATSD9PWQFJBCLAE0gFj5OJoH0E6AJpL+HrIAEYhGgCcTCx8kkkH4CNIH095AVkEAsAjSBWPg4mQTST4AmkP4esgISiEWAJtAYvh9DdRgiRQBnNBaCs0jADgI0gWP0QYEyoOtFnBdFdVgr40F40onD2Nq/78C0c/pn5Pf8oigdna5WTSHSeRB8HMAH7GgxVZDAsQnQBA7jo8BGEd0oFV1fHhna0OgC6ur2zq84ukAgvwdgAYBTGo3FeSTQSgI0gV/RfQyR3hOODL7UbOCFM733Rx34ExHcBMXsZsdnPBKIQ4AmAHlaoPeUA/+7cUDWMpdmUAsljkmaQNuagABbVPTucHjw4aShHzAD4LakczMfCRxOoF1N4DEnmrFsdKT/LZNLolD0vqyKO0xqYG4SaD8TUF0RlgZvt6X1uZ7eG0Tkn2zRQx3tR6C9TEDxubDkf9O2NnfNXfFbUVR5xTZd1NMeBNrGBFSjy8ZKQ0/b3FY+Idrm7mRXW7uYwPIw8FfZ3sbc3BXnSFR5zXad1JctAu1gAv8QBv6fpaVtuWLfH4vqt9KilzrTTyDbJqD457Dkfz5tbSr0eH+rghVp00296SSQZRN4Mgz8K9LZFiBf9J6AIrX608q9HXVn1gQEzuXl4PZ/S2tT8653CYBn0qqfutNDIKsmkOqzgP3LJ+969wO4Pj3LqT6lCv2SU5Fvl7f7P61vZrZGF4rL56k61c+tjPQ6kyaQ9rOA/Uv81J4V51Wk8iKAE7K17IEw8CVrNcWtp1D0Fqvi8bhx6p2fRRPIxFnAr84G+lYB+jf1Ntbm8aL65XJp8E6bNZrSlne97wC4PMn8mTOBrJwFHDCBs/t+A+PYAmguyYXRylyR4BO7hv3/aGWOtMbOFb07RbEsSf2ZMgEBSuXAd5MEmESunOs9LsDiJHIlkUOi6OI4G7YkodFUjpzr9UvC3y7NlAlAsTos+beYamCr8ubcW5cIogdaFT/puDSB6YnTBGKuxqyeZs6e3X/i3hP2hVn5gJAmQBOIeahPO/3nYeCf1KrgpuPmXe9fAVxlWkcz8tMEaALNWEdHxFDI42PBwDUtCW5B0FyPt0gE37ZASmwJNAGaQOxFdLQAWb/sNHXPwH+3BF7CQWkCNIHWLDnVa8PS4COtCW4+anVfQu3AT8wria+AJkATiL+KjhIhDZuGxCv86o68e9Z4vBiWzM64YcehnC96D0NxbZwY9c7NzCXCSHHerpK/pV4AaRqf7/HKEOTTpPmoWkUeCYcHEl3oaWGWd/teBnReknozYwIditN3lvyfJQkv6Vx519sK4ENJ521FPgVWjgV+fytipzHmKd39pzjOvucEOD9p/ZkxgXb4Qkq+p/c5iFQfaZaV15MqeAOKPVkpqJE6BOjCxOPq9JxG5sedkxkTaIszgWLfj6D6wbhN53wSOJhAZkygLT4TcL0xALO4hEmgmQQyYwKZvzpQfQT6L/ftbWbzGYsEqgQyYwLI+GWnXLHvDFHdwWVLAs0mkBkTyPodgwW376MK/WGzFwDjkUBmTCDr3x3I9/R9EaKruWRJoNkEMmMCADL9LcKC621UYH6zFwDjkUCWTABZ3U/glO7l3R2OU+JyJYFWEMiUCWR1Z6FCj7dMBdyYsxVHAGNm6OpA9VJHRvcYzLt9TwH6B1yvJNAKAtk6E6gagcoV5dLAk62AZSLm1IMpXjaRmznbg0AWTeB75dLAwqy0L9fjfV0EN2elHtZhH4HMmcDEHVCCz5SH/dQ/3ptnAfYdMFlUlEkTUGDjWOB/LO0Na4OzgF2ABNDonbT3KpZ+cbpMfYNw4pdm3vU0VgGWTlbghrHAT+1e/dk/C5A7wmDgK5Yun8RlzSp6Cx3FPQDmJp08syYA4LXOzujKn70xFCQNtRn5TGwz1QzdNcZYHwY+r3YcBuu00/565vjMGdV9JH+9Ro5NGZZlEwBUN4SlwYubQirBIPmi9xeY/K2QyZeq3jhWGqw+dp2vwwiYeORctk1gEvC/hIH/6bSsttzc3gslkhfSorcRndxteHpqfAxZIyuqpjkyFAYDvTUNNTlo3s2/lt9V2GdSQhK5aQI0gSTW2RE5VKKFY8ND3zOSvMakBdfbrMC5NQ5P7TCaAE3A3OJVfC4s+d80J+Domac2DKnuFXCabdpaoYcmQBNoxbqqPabqirA0eHvtE1o7Mud6fynA37U2i13RaQI0ARtW5GNONGPZ6Ej/WybFFFzvbgW+ZFKDidw0AZqAiXV3RE4Btqjo3eHw4MNJCyq4t35SEVW/D3B50rltyEcToAnYsA4P0iBPC/SecuB/t9XC2v3g38+XJkATaPWx1mj8xxDpPeHI4EuNBphuHg/+Q8kosHQs8L/WbM5ZiJcv9j4BlSuSrKUdbhaqi2f1y0ciulEqur48MrShrskHDe7q6ftYBfpJEVwJ4OxG42R03uv7OvfOf+eNu8oZra+hskxtI0cTOEa7FCgDut4R5xWF7lREOx1xdkYY3zn2nhN3nvzO/83slOh0Eee0qKPjNKle4lM9G4JPQTG7oZXQPpPWR6IrOzorW8qv39HW3yLMzb3tA6Lj10B1lYn20wRMUGdOErCIAE3AomZQCgmYIEATMEGdOUnAIgI0AYuaQSkkYIIATcAEdeYkAYsI0AQsagalkIAJAjQBE9SZkwQsIkATsKgZlEICJgjQBExQZ04SsIgATcCiZlAKCZggQBMwQZ05ScAiAjQBi5pBKSRgggBNwAR15iQBiwjQBCxqBqWQgAkCWTOBNwH8ACKbVLEHqnscZ/JPRLpnP2DtkPlQ5ypA55mAPplT/gsSrZOKPn9Ag+PMjEROQhSdJI4zc+JPcVwV/A5UP2hOa/MzC6Ss0DsFzlZE4wd60/xM9keMpKNLJLoSkM+aUJt2E/ghRF5SlVccxQvl0u2v1wNxYqtv6FVQqRrCx+uZ29hYeRai6xSybmx44Mf1xKh+5xyV8Qsd0QsVmA/gt+uZb9nYXzhONH9029Amy3QZlZPr9i4TB4k/GyONJvBzAGsdOGtHg9v/vVldm+V+5WRHnClDwFXNigtgXfXAjzRatytYtbtZcbvcWz8RIboaQPVnZrPiJhFHgf6xwF+ZRK605ci73tMAfj9J3akxAYFshuij45Vo7dsjQyOthnT63N6ufUCXM66nTp6uoUuhpwow+fdIu8SRUVWMKjAqkJ3VvztaGY06ZecMYPStbYOjrdZZ3ZKqs8O5GiqfVeh5rc7XjPgOnD9spoE3Q5MtMQpu39cU+ldJ6kmFCQjk/k4n6k3ioEoSfjNzVU1rPHIGFXpDM+O2IhZ3G56eKh9IegQbeVuA3nIwcF8rFmMWYxbcvj9VYBDQU2ytjyZAE6hxbcozUwbwco0TOGyKQMHt++iUEVxqIxSaAE2glnX5ZBj4ie69XouotI0pFL01qhMfHFr1ognQBI6zIPVZ573vuXJ0a39bXztu1lFroxHQBGgC0xMQvOhU3v3U6MhXjT4otFkHoC1xbDMCmgBN4KgEqg8IFYn+aHR4aJstB0+WdNhkBDQBmsDRTSCKLo7z2K8sHbCtqOV9v9mbn/Gus9GG249VZdFYaWBtK+pMe8y8690P4Pok67DiPgEFVo4Ffn+Shbdjrnyx9/NQeciC2h8IA9/6+xlMcMq73g+SviXcvAmobghLgxebAN6OOfOuV/0N/GnTtYvgM+Vh/1umddiU38SNQtX6jZsA3x8muwwn7yHQjQBOSDbzUbM9qYI3UP3GZxu/Jm5FB+YrcK4JDEZNgG8DTLQcMPUbx0y1zHo8AkZNIFKct6vkbzmeSP5/cwnM6vHOdQSbmxuV0dJKwKQJ8K5Ag6sm73rfAXC5QQlMbQkBYyag0OvHgsEHLeHQdjJybu8SgTzQdoWz4CMImDEBwU8irXyomZtssLf1EZjcRKXjR1DMrm8mR2eNgBkTAP4+DPwvZg1m2urJu969AP48bbqpt7kEzJiA6rVhafCR5pbCaPUSyBe966DgW7J6wWVsvBET4FUBO1ZRobh8nqrD/RrsaIcxFSZMYE8Y+O8zVjETH0Ig73rVG3VStVEpW9hcAiZM4IUw8H+3uWUwWqMETNyr3qhWzmsNARMmcF8Y+F9oTTmMWi+BXI/3dRHcXO88js8OgcRNgLcK27V4eAuxXf0woYYmYIK6RTlpAhY1w5AUmoAh8LakpQnY0glzOmgC5thbkZkmYEUbjIqgCRjFbz45TcB8D0wroAmY7oDh/DQBww2wID1NwIImmJRAEzBJ347cNAE7+mBMBU3AGHprEtMErGmFGSE0ATPcbcqauAkI5PlyMHCRTRDaWQtvG27n7k/WnrgJTCStYHZ5u/9T4jdLIFfsO0NUd5hVweymCRgxAahcG5YGuJ+A4e7n3FuXCCJuMWa4D6bTGzIB/Od73y1c8uabS39pGkC75u/u7j9hj/PueoXOb1cGrNvg24GJtwSQ+8vBwI1shBkC+WLvaqhwizcz+K3KauZMYAqBQL5QDgbus4pIG4jJ9Xg3iuAf26BUllgDAaMmMPnRpN4rUeXecumO12vQyyExCBTO9N4fdWKZKJbFCMOpGSNg3gQmge6GyGpRPFHB+P9wK/LmrbLqe///7dzrSkUuFsEyBXqaF52RskDAFhM4nOWbUN2WBcBGaxDpBlD94YsEpiVgqwmwZSRAAgkRoAkkBJppSMBWAjQBWztDXSSQEAGaQEKgmYYEbCVAE7C1M9RFAgkRoAkkBJppSMBWAjQBWztDXSSQEAGaQEKgmYYEbCVAE7C1M9RFAgkRoAkkBJppSMBWAjQBWztDXSSQEAGaQEKgmYYEbCVAE7C1M9RFAgkRoAkkBJppSMBWAjQBWztDXSSQEAGaQEKgmYYEbCVAE7C1M9RFAgkRoAkkBJppSMBWAjQBWztDXSSQEAGaQEKgmYYEbCVAE7C1M9RFAgkRqJrAdgBzEsrHNCRAAnYR2C0F19uoAJ9HZ1djqIYEkiKwo3om8CiAa5LKyDwkQAI2EdBXJe/2DQK63CZZ1EICJJAMAQGel0L38gXqOM8lk5JZSIAE7CIgQ1IVlHe9nQC67BJHNSRAAq0mEEEumjCBXE/fN0T0plYnZHwSIAGrCGwLA/+sCRMoFL3FqnjcKnkUQwIk0FoCitVhyb9lwgSANR15d/MmQD/S2qyMTgIkYAmBvRWtXPB2adXmKRMAcm7vUoHcZYlAyiABEmghAYXePRYMLqumOGACJ89ZPquz09kE4MwW5mZoEiABwwQUKFfGowt27xgKDjGBiQ8IXa9fgNsMa2R6EiCBFhJQYOVY4PfvT3HgTGD/PxSK3hpVXN1CDQxNAiRgiMDBbwOmNYHqf+TdvtcAPceQTqYlARJoDYHvh4F/6eGhjzgT2D8g73raGh2MSgIkYIJAGPhHPd6nNYHJMwLvGQCXmBDMnCRAAs0iIFvDYODD00U7pglUJ+Xc3rsEsrRZchiHBEggOQIiWFse9hcdK+NxTWDSCLzbBFjCy4fJNY+ZSCAmge0KPHTwVYCGzwT2T6zeR9DRKUsEznW8szBmezidBFpGQF5VRA9VxvXB3TuGdtWSpqYzgUMDrekouJsXK6KFgCysnijUkohjSIAEWkZgVFXWOY4+Wx4+fy2wqFJPpgZM4NDwuW7vMnFkAaBzBJijk/sVcs/CerrAsSRQMwF5C6IjqhgRyIhElafKI0Mbap5+lIH/D/gL4g0f2x0+AAAAAElFTkSuQmCC"

/***/ }),
/* 38 */
/*!**************************************************************!*\
  !*** C:/Users/魏凤婷/Desktop/wft/111/teacher/static/img/报名.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 39 */
/*!*****************************************************************!*\
  !*** C:/Users/魏凤婷/Desktop/wft/111/teacher/static/img/组织机构图.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 40 */
/*!**************************************************************!*\
  !*** C:/Users/魏凤婷/Desktop/wft/111/teacher/static/img/关于.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map