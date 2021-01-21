/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0);
  }([function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
      }

      return e;
    },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        s = o(c),
        f = n(8),
        d = o(f),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      startEvent: "DOMContentLoaded",
      throttleDelay: 99,
      debounceDelay: 50,
      disableMutationObserver: !1
    },
        j = function j() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e && (k = !0), k) return w = (0, y["default"])(w, x), (0, b["default"])(w, x.once), w;
    },
        O = function O() {
      w = (0, h["default"])(), j();
    },
        M = function M() {
      w.forEach(function (e, t) {
        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
      });
    },
        S = function S(e) {
      return e === !0 || "mobile" === e && p["default"].mobile() || "phone" === e && p["default"].phone() || "tablet" === e && p["default"].tablet() || "function" == typeof e && e() === !0;
    },
        _ = function _(e) {
      x = i(x, e), w = (0, h["default"])();
      var t = document.all && !window.atob;
      return S(x.disable) || t ? M() : (x.disableMutationObserver || d["default"].isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
        j(!0);
      }) : document.addEventListener(x.startEvent, function () {
        j(!0);
      }), window.addEventListener("resize", (0, s["default"])(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s["default"])(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u["default"])(function () {
        (0, b["default"])(w, x.once);
      }, x.throttleDelay)), x.disableMutationObserver || d["default"].ready("[data-aos]", O), w);
    };

    e.exports = {
      init: _,
      refresh: j,
      refreshHard: O
    };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function o(t) {
          var n = b,
              o = v;
          return b = v = void 0, k = t, g = e.apply(o, n);
        }

        function r(e) {
          return k = e, h = setTimeout(f, t), M ? o(e) : g;
        }

        function a(e) {
          var n = e - w,
              o = e - k,
              i = t - n;
          return S ? j(i, y - o) : i;
        }

        function c(e) {
          var n = e - w,
              o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = O();
          return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(O());
        }

        function m() {
          var e = O(),
              n = c(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), o(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            M = !1,
            S = !1,
            _ = !0;

        if ("function" != typeof e) throw new TypeError(s);
        return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e, t, o) {
        var r = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        });
      }

      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);
        return !!e && ("object" == t || "function" == t);
      }

      function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
      }

      function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
      }

      function u(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return f;

        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
      }

      var c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          s = "Expected a function",
          f = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
          g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function O() {
        return h.Date.now();
      };

      e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function i(t) {
          var n = b,
              o = v;
          return b = v = void 0, O = t, g = e.apply(o, n);
        }

        function r(e) {
          return O = e, h = setTimeout(f, t), M ? i(e) : g;
        }

        function u(e) {
          var n = e - w,
              o = e - O,
              i = t - n;
          return S ? x(i, y - o) : i;
        }

        function s(e) {
          var n = e - w,
              o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = j();
          return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(j());
        }

        function m() {
          var e = j(),
              n = s(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), i(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            M = !1,
            S = !1,
            _ = !0;

        if ("function" != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t);
      }

      function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
      }

      function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
      }

      function a(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return s;

        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
      }

      var u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          c = "Expected a function",
          s = NaN,
          f = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
          y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function j() {
        return g.Date.now();
      };

      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = void 0,
          o = void 0,
          i = void 0;

      for (t = 0; t < e.length; t += 1) {
        if (o = e[t], o.dataset && o.dataset.aos) return !0;
        if (i = o.children && n(o.children)) return !0;
      }

      return !1;
    }

    function o() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }

    function i() {
      return !!o();
    }

    function r(e, t) {
      var n = window.document,
          i = o(),
          r = new i(a);
      u = t, r.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }

    function a(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
            o = Array.prototype.slice.call(e.removedNodes),
            i = t.concat(o);
        if (n(i)) return u();
      });
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var u = function u() {};

    t["default"] = {
      isSupported: i,
      ready: r
    };
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        s = function () {
      function e() {
        n(this, e);
      }

      return i(e, [{
        key: "phone",
        value: function value() {
          var e = o();
          return !(!r.test(e) && !a.test(e.substr(0, 4)));
        }
      }, {
        key: "mobile",
        value: function value() {
          var e = o();
          return !(!u.test(e) && !c.test(e.substr(0, 4)));
        }
      }, {
        key: "tablet",
        value: function value() {
          return this.mobile() && !this.phone();
        }
      }]), e;
    }();

    t["default"] = new s();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e, t, _n) {
      var o = e.node.getAttribute("data-aos-once");
      t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !_n && "true" !== o) && e.node.classList.remove("aos-animate");
    },
        o = function o(e, t) {
      var o = window.pageYOffset,
          i = window.innerHeight;
      e.forEach(function (e, r) {
        n(e, i + o, t);
      });
    };

    t["default"] = o;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(12),
        r = o(i),
        a = function a(e, t) {
      return e.forEach(function (e, n) {
        e.node.classList.add("aos-init"), e.position = (0, r["default"])(e.node, t.offset);
      }), e;
    };

    t["default"] = a;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(13),
        r = o(i),
        a = function a(e, t) {
      var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
        offset: e.getAttribute("data-aos-offset"),
        anchor: e.getAttribute("data-aos-anchor"),
        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
      };

      switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r["default"])(e).top, a.anchorPlacement) {
        case "top-bottom":
          break;

        case "center-bottom":
          n += e.offsetHeight / 2;
          break;

        case "bottom-bottom":
          n += e.offsetHeight;
          break;

        case "top-center":
          n += i / 2;
          break;

        case "bottom-center":
          n += i / 2 + e.offsetHeight;
          break;

        case "center-center":
          n += i / 2 + e.offsetHeight / 2;
          break;

        case "top-top":
          n += i;
          break;

        case "bottom-top":
          n += e.offsetHeight + i;
          break;

        case "center-top":
          n += e.offsetHeight / 2 + i;
      }

      return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
    };

    t["default"] = a;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) {
        t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      }

      return {
        top: n,
        left: t
      };
    };

    t["default"] = n;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };

    t["default"] = n;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */

/* global window, document, define, jQuery, setInterval, clearInterval */
;

(function (factory) {
  'use strict';

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  'use strict';

  var Slick = window.Slick || {};

  Slick = function () {
    var instanceUid = 0;

    function Slick(element, settings) {
      var _ = this,
          dataSettings;

      _.defaults = {
        accessibility: true,
        adaptiveHeight: false,
        appendArrows: $(element),
        appendDots: $(element),
        arrows: true,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: false,
        autoplaySpeed: 3000,
        centerMode: false,
        centerPadding: '50px',
        cssEase: 'ease',
        customPaging: function customPaging(slider, i) {
          return $('<button type="button" />').text(i + 1);
        },
        dots: false,
        dotsClass: 'slick-dots',
        draggable: true,
        easing: 'linear',
        edgeFriction: 0.35,
        fade: false,
        focusOnSelect: false,
        focusOnChange: false,
        infinite: true,
        initialSlide: 0,
        lazyLoad: 'ondemand',
        mobileFirst: false,
        pauseOnHover: true,
        pauseOnFocus: true,
        pauseOnDotsHover: false,
        respondTo: 'window',
        responsive: null,
        rows: 1,
        rtl: false,
        slide: '',
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: true,
        swipeToSlide: false,
        touchMove: true,
        touchThreshold: 5,
        useCSS: true,
        useTransform: true,
        variableWidth: false,
        vertical: false,
        verticalSwiping: false,
        waitForAnimate: true,
        zIndex: 1000
      };
      _.initials = {
        animating: false,
        dragging: false,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        scrolling: false,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: false,
        slideOffset: 0,
        swipeLeft: null,
        swiping: false,
        $list: null,
        touchObject: {},
        transformsEnabled: false,
        unslicked: false
      };
      $.extend(_, _.initials);
      _.activeBreakpoint = null;
      _.animType = null;
      _.animProp = null;
      _.breakpoints = [];
      _.breakpointSettings = [];
      _.cssTransitions = false;
      _.focussed = false;
      _.interrupted = false;
      _.hidden = 'hidden';
      _.paused = true;
      _.positionProp = null;
      _.respondTo = null;
      _.rowCount = 1;
      _.shouldClick = true;
      _.$slider = $(element);
      _.$slidesCache = null;
      _.transformType = null;
      _.transitionType = null;
      _.visibilityChange = 'visibilitychange';
      _.windowWidth = 0;
      _.windowTimer = null;
      dataSettings = $(element).data('slick') || {};
      _.options = $.extend({}, _.defaults, settings, dataSettings);
      _.currentSlide = _.options.initialSlide;
      _.originalSettings = _.options;

      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = 'mozHidden';
        _.visibilityChange = 'mozvisibilitychange';
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = 'webkitHidden';
        _.visibilityChange = 'webkitvisibilitychange';
      }

      _.autoPlay = $.proxy(_.autoPlay, _);
      _.autoPlayClear = $.proxy(_.autoPlayClear, _);
      _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
      _.changeSlide = $.proxy(_.changeSlide, _);
      _.clickHandler = $.proxy(_.clickHandler, _);
      _.selectHandler = $.proxy(_.selectHandler, _);
      _.setPosition = $.proxy(_.setPosition, _);
      _.swipeHandler = $.proxy(_.swipeHandler, _);
      _.dragHandler = $.proxy(_.dragHandler, _);
      _.keyHandler = $.proxy(_.keyHandler, _);
      _.instanceUid = instanceUid++; // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source

      _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;

      _.registerBreakpoints();

      _.init(true);
    }

    return Slick;
  }();

  Slick.prototype.activateADA = function () {
    var _ = this;

    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': 'false'
    }).find('a, input, button, select').attr({
      'tabindex': '0'
    });
  };

  Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {
    var _ = this;

    if (typeof index === 'boolean') {
      addBefore = index;
      index = null;
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }

    _.unload();

    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.animateHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.animate({
        height: targetHeight
      }, _.options.speed);
    }
  };

  Slick.prototype.animateSlide = function (targetLeft, callback) {
    var animProps = {},
        _ = this;

    _.animateHeight();

    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = -targetLeft;
    }

    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: targetLeft
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: targetLeft
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = -_.currentLeft;
        }

        $({
          animStart: _.currentLeft
        }).animate({
          animStart: targetLeft
        }, {
          duration: _.options.speed,
          easing: _.options.easing,
          step: function step(now) {
            now = Math.ceil(now);

            if (_.options.vertical === false) {
              animProps[_.animType] = 'translate(' + now + 'px, 0px)';

              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = 'translate(0px,' + now + 'px)';

              _.$slideTrack.css(animProps);
            }
          },
          complete: function complete() {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();

        targetLeft = Math.ceil(targetLeft);

        if (_.options.vertical === false) {
          animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
        } else {
          animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
        }

        _.$slideTrack.css(animProps);

        if (callback) {
          setTimeout(function () {
            _.disableTransition();

            callback.call();
          }, _.options.speed);
        }
      }
    }
  };

  Slick.prototype.getNavTarget = function () {
    var _ = this,
        asNavFor = _.options.asNavFor;

    if (asNavFor && asNavFor !== null) {
      asNavFor = $(asNavFor).not(_.$slider);
    }

    return asNavFor;
  };

  Slick.prototype.asNavFor = function (index) {
    var _ = this,
        asNavFor = _.getNavTarget();

    if (asNavFor !== null && _typeof(asNavFor) === 'object') {
      asNavFor.each(function () {
        var target = $(this).slick('getSlick');

        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  };

  Slick.prototype.applyTransition = function (slide) {
    var _ = this,
        transition = {};

    if (_.options.fade === false) {
      transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
    } else {
      transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
    }

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.autoPlay = function () {
    var _ = this;

    _.autoPlayClear();

    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
    }
  };

  Slick.prototype.autoPlayClear = function () {
    var _ = this;

    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  };

  Slick.prototype.autoPlayIterator = function () {
    var _ = this,
        slideTo = _.currentSlide + _.options.slidesToScroll;

    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = 0;
        } else if (_.direction === 0) {
          slideTo = _.currentSlide - _.options.slidesToScroll;

          if (_.currentSlide - 1 === 0) {
            _.direction = 1;
          }
        }
      }

      _.slideHandler(slideTo);
    }
  };

  Slick.prototype.buildArrows = function () {
    var _ = this;

    if (_.options.arrows === true) {
      _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
      _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }

        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }

        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': 'true',
          'tabindex': '-1'
        });
      }
    }
  };

  Slick.prototype.buildDots = function () {
    var _ = this,
        i,
        dot;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');

      dot = $('<ul />').addClass(_.options.dotsClass);

      for (i = 0; i <= _.getDotCount(); i += 1) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }

      _.$dots = dot.appendTo(_.options.appendDots);

      _.$dots.find('li').first().addClass('slick-active');
    }
  };

  Slick.prototype.buildOut = function () {
    var _ = this;

    _.$slides = _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
    _.slideCount = _.$slides.length;

    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });

    _.$slider.addClass('slick-slider');

    _.$slideTrack = _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent();
    _.$list = _.$slideTrack.wrap('<div class="slick-list"/>').parent();

    _.$slideTrack.css('opacity', 0);

    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = 1;
    }

    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

    _.setupInfinite();

    _.buildArrows();

    _.buildDots();

    _.updateDots();

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  };

  Slick.prototype.buildRows = function () {
    var _ = this,
        a,
        b,
        c,
        newSlides,
        numOfSlides,
        originalSlides,
        slidesPerSection;

    newSlides = document.createDocumentFragment();
    originalSlides = _.$slider.children();

    if (_.options.rows > 0) {
      slidesPerSection = _.options.slidesPerRow * _.options.rows;
      numOfSlides = Math.ceil(originalSlides.length / slidesPerSection);

      for (a = 0; a < numOfSlides; a++) {
        var slide = document.createElement('div');

        for (b = 0; b < _.options.rows; b++) {
          var row = document.createElement('div');

          for (c = 0; c < _.options.slidesPerRow; c++) {
            var target = a * slidesPerSection + (b * _.options.slidesPerRow + c);

            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }

          slide.appendChild(row);
        }

        newSlides.appendChild(slide);
      }

      _.$slider.empty().append(newSlides);

      _.$slider.children().children().children().css({
        'width': 100 / _.options.slidesPerRow + '%',
        'display': 'inline-block'
      });
    }
  };

  Slick.prototype.checkResponsive = function (initial, forceUpdate) {
    var _ = this,
        breakpoint,
        targetBreakpoint,
        respondToWidth,
        triggerBreakpoint = false;

    var sliderWidth = _.$slider.width();

    var windowWidth = window.innerWidth || $(window).width();

    if (_.respondTo === 'window') {
      respondToWidth = windowWidth;
    } else if (_.respondTo === 'slider') {
      respondToWidth = sliderWidth;
    } else if (_.respondTo === 'min') {
      respondToWidth = Math.min(windowWidth, sliderWidth);
    }

    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = null;

      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = _.breakpoints[breakpoint];
            }
          }
        }
      }

      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = targetBreakpoint;

            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

              if (initial === true) {
                _.currentSlide = _.options.initialSlide;
              }

              _.refresh(initial);
            }

            triggerBreakpoint = targetBreakpoint;
          }
        } else {
          _.activeBreakpoint = targetBreakpoint;

          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]);

            if (initial === true) {
              _.currentSlide = _.options.initialSlide;
            }

            _.refresh(initial);
          }

          triggerBreakpoint = targetBreakpoint;
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = null;
          _.options = _.originalSettings;

          if (initial === true) {
            _.currentSlide = _.options.initialSlide;
          }

          _.refresh(initial);

          triggerBreakpoint = targetBreakpoint;
        }
      } // only trigger breakpoints during an actual break. not on initialize.


      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  };

  Slick.prototype.changeSlide = function (event, dontAnimate) {
    var _ = this,
        $target = $(event.currentTarget),
        indexOffset,
        slideOffset,
        unevenOffset; // If target is a link, prevent default action.


    if ($target.is('a')) {
      event.preventDefault();
    } // If target is not the <li> element (ie: a child), find the <li>.


    if (!$target.is('li')) {
      $target = $target.closest('li');
    }

    unevenOffset = _.slideCount % _.options.slidesToScroll !== 0;
    indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

    switch (event.data.message) {
      case 'previous':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }

        break;

      case 'next':
        slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;

        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }

        break;

      case 'index':
        var index = event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll;

        _.slideHandler(_.checkNavigable(index), false, dontAnimate);

        $target.children().trigger('focus');
        break;

      default:
        return;
    }
  };

  Slick.prototype.checkNavigable = function (index) {
    var _ = this,
        navigables,
        prevNavigable;

    navigables = _.getNavigableIndexes();
    prevNavigable = 0;

    if (index > navigables[navigables.length - 1]) {
      index = navigables[navigables.length - 1];
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = prevNavigable;
          break;
        }

        prevNavigable = navigables[n];
      }
    }

    return index;
  };

  Slick.prototype.cleanUpEvents = function () {
    var _ = this;

    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));

      if (_.options.accessibility === true) {
        _.$dots.off('keydown.slick', _.keyHandler);
      }
    }

    _.$slider.off('focus.slick blur.slick');

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
        _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
      }
    }

    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);

    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);

    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);

    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

    _.$list.off('click.slick', _.clickHandler);

    $(document).off(_.visibilityChange, _.visibility);

    _.cleanUpSlideEvents();

    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }

    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
  };

  Slick.prototype.cleanUpSlideEvents = function () {
    var _ = this;

    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));

    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  };

  Slick.prototype.cleanUpRows = function () {
    var _ = this,
        originalSlides;

    if (_.options.rows > 0) {
      originalSlides = _.$slides.children().children();
      originalSlides.removeAttr('style');

      _.$slider.empty().append(originalSlides);
    }
  };

  Slick.prototype.clickHandler = function (event) {
    var _ = this;

    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  };

  Slick.prototype.destroy = function (refresh) {
    var _ = this;

    _.autoPlayClear();

    _.touchObject = {};

    _.cleanUpEvents();

    $('.slick-cloned', _.$slider).detach();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }

    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');

      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }

    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });

      _.$slideTrack.children(this.options.slide).detach();

      _.$slideTrack.detach();

      _.$list.detach();

      _.$slider.append(_.$slides);
    }

    _.cleanUpRows();

    _.$slider.removeClass('slick-slider');

    _.$slider.removeClass('slick-initialized');

    _.$slider.removeClass('slick-dotted');

    _.unslicked = true;

    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  };

  Slick.prototype.disableTransition = function (slide) {
    var _ = this,
        transition = {};

    transition[_.transitionType] = '';

    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  };

  Slick.prototype.fadeSlide = function (slideIndex, callback) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: _.options.zIndex
      });

      _.$slides.eq(slideIndex).animate({
        opacity: 1
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 1,
        zIndex: _.options.zIndex
      });

      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);

          callback.call();
        }, _.options.speed);
      }
    }
  };

  Slick.prototype.fadeSlideOut = function (slideIndex) {
    var _ = this;

    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);

      _.$slides.eq(slideIndex).css({
        opacity: 0,
        zIndex: _.options.zIndex - 2
      });
    }
  };

  Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {
    var _ = this;

    if (filter !== null) {
      _.$slidesCache = _.$slides;

      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.focusHandler = function () {
    var _ = this;

    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*', function (event) {
      event.stopImmediatePropagation();
      var $sf = $(this);
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = $sf.is(':focus');

          _.autoPlay();
        }
      }, 0);
    });
  };

  Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {
    var _ = this;

    return _.currentSlide;
  };

  Slick.prototype.getDotCount = function () {
    var _ = this;

    var breakPoint = 0;
    var counter = 0;
    var pagerQty = 0;

    if (_.options.infinite === true) {
      if (_.slideCount <= _.options.slidesToShow) {
        ++pagerQty;
      } else {
        while (breakPoint < _.slideCount) {
          ++pagerQty;
          breakPoint = counter + _.options.slidesToScroll;
          counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }
      }
    } else if (_.options.centerMode === true) {
      pagerQty = _.slideCount;
    } else if (!_.options.asNavFor) {
      pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = counter + _.options.slidesToScroll;
        counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
      }
    }

    return pagerQty - 1;
  };

  Slick.prototype.getLeft = function (slideIndex) {
    var _ = this,
        targetLeft,
        verticalHeight,
        verticalOffset = 0,
        targetSlide,
        coef;

    _.slideOffset = 0;
    verticalHeight = _.$slides.first().outerHeight(true);

    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = _.slideWidth * _.options.slidesToShow * -1;
        coef = -1;

        if (_.options.vertical === true && _.options.centerMode === true) {
          if (_.options.slidesToShow === 2) {
            coef = -1.5;
          } else if (_.options.slidesToShow === 1) {
            coef = -2;
          }
        }

        verticalOffset = verticalHeight * _.options.slidesToShow * coef;
      }

      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1;
            verticalOffset = (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1;
          } else {
            _.slideOffset = _.slideCount % _.options.slidesToScroll * _.slideWidth * -1;
            verticalOffset = _.slideCount % _.options.slidesToScroll * verticalHeight * -1;
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth;
        verticalOffset = (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight;
      }
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = 0;
      verticalOffset = 0;
    }

    if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
      _.slideOffset = _.slideWidth * Math.floor(_.options.slidesToShow) / 2 - _.slideWidth * _.slideCount / 2;
    } else if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
    } else if (_.options.centerMode === true) {
      _.slideOffset = 0;
      _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
    }

    if (_.options.vertical === false) {
      targetLeft = slideIndex * _.slideWidth * -1 + _.slideOffset;
    } else {
      targetLeft = slideIndex * verticalHeight * -1 + verticalOffset;
    }

    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
      } else {
        targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
      }

      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
        } else {
          targetLeft = 0;
        }
      } else {
        targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
      }

      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
        } else {
          targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
        }

        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
          } else {
            targetLeft = 0;
          }
        } else {
          targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
        }

        targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
      }
    }

    return targetLeft;
  };

  Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {
    var _ = this;

    return _.options[option];
  };

  Slick.prototype.getNavigableIndexes = function () {
    var _ = this,
        breakPoint = 0,
        counter = 0,
        indexes = [],
        max;

    if (_.options.infinite === false) {
      max = _.slideCount;
    } else {
      breakPoint = _.options.slidesToScroll * -1;
      counter = _.options.slidesToScroll * -1;
      max = _.slideCount * 2;
    }

    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = counter + _.options.slidesToScroll;
      counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
    }

    return indexes;
  };

  Slick.prototype.getSlick = function () {
    return this;
  };

  Slick.prototype.getSlideCount = function () {
    var _ = this,
        slidesTraversed,
        swipedSlide,
        centerOffset;

    centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      });

      slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  };

  Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'index',
        index: parseInt(slide)
      }
    }, dontAnimate);
  };

  Slick.prototype.init = function (creation) {
    var _ = this;

    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');

      _.buildRows();

      _.buildOut();

      _.setProps();

      _.startLoad();

      _.loadSlider();

      _.initializeEvents();

      _.updateArrows();

      _.updateDots();

      _.checkResponsive(true);

      _.focusHandler();
    }

    if (creation) {
      _.$slider.trigger('init', [_]);
    }

    if (_.options.accessibility === true) {
      _.initADA();
    }

    if (_.options.autoplay) {
      _.paused = false;

      _.autoPlay();
    }
  };

  Slick.prototype.initADA = function () {
    var _ = this,
        numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
        tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
      return val >= 0 && val < _.slideCount;
    });

    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': 'true',
      'tabindex': '-1'
    }).find('a, input, button, select').attr({
      'tabindex': '-1'
    });

    if (_.$dots !== null) {
      _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
        var slideControlIndex = tabControlIndexes.indexOf(i);
        $(this).attr({
          'role': 'tabpanel',
          'id': 'slick-slide' + _.instanceUid + i,
          'tabindex': -1
        });

        if (slideControlIndex !== -1) {
          var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;

          if ($('#' + ariaButtonControl).length) {
            $(this).attr({
              'aria-describedby': ariaButtonControl
            });
          }
        }
      });

      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        var mappedSlideIndex = tabControlIndexes[i];
        $(this).attr({
          'role': 'presentation'
        });
        $(this).find('button').first().attr({
          'role': 'tab',
          'id': 'slick-slide-control' + _.instanceUid + i,
          'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
          'aria-label': i + 1 + ' of ' + numDotGroups,
          'aria-selected': null,
          'tabindex': '-1'
        });
      }).eq(_.currentSlide).find('button').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      }).end();
    }

    for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
      if (_.options.focusOnChange) {
        _.$slides.eq(i).attr({
          'tabindex': '0'
        });
      } else {
        _.$slides.eq(i).removeAttr('tabindex');
      }
    }

    _.activateADA();
  };

  Slick.prototype.initArrowEvents = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: 'previous'
      }, _.changeSlide);

      _.$nextArrow.off('click.slick').on('click.slick', {
        message: 'next'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$prevArrow.on('keydown.slick', _.keyHandler);

        _.$nextArrow.on('keydown.slick', _.keyHandler);
      }
    }
  };

  Slick.prototype.initDotEvents = function () {
    var _ = this;

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: 'index'
      }, _.changeSlide);

      if (_.options.accessibility === true) {
        _.$dots.on('keydown.slick', _.keyHandler);
      }
    }

    if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initSlideEvents = function () {
    var _ = this;

    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));

      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  };

  Slick.prototype.initializeEvents = function () {
    var _ = this;

    _.initArrowEvents();

    _.initDotEvents();

    _.initSlideEvents();

    _.$list.on('touchstart.slick mousedown.slick', {
      action: 'start'
    }, _.swipeHandler);

    _.$list.on('touchmove.slick mousemove.slick', {
      action: 'move'
    }, _.swipeHandler);

    _.$list.on('touchend.slick mouseup.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: 'end'
    }, _.swipeHandler);

    _.$list.on('click.slick', _.clickHandler);

    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(_.setPosition);
  };

  Slick.prototype.initUI = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();

      _.$nextArrow.show();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  };

  Slick.prototype.keyHandler = function (event) {
    var _ = this; //Dont slide if the cursor is inside the form fields and arrow keys are pressed


    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'next' : 'previous'
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: _.options.rtl === true ? 'previous' : 'next'
          }
        });
      }
    }
  };

  Slick.prototype.lazyLoad = function () {
    var _ = this,
        loadRange,
        cloneRange,
        rangeStart,
        rangeEnd;

    function loadImages(imagesScope) {
      $('img[data-lazy]', imagesScope).each(function () {
        var image = $(this),
            imageSource = $(this).attr('data-lazy'),
            imageSrcSet = $(this).attr('data-srcset'),
            imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
            imageToLoad = document.createElement('img');

        imageToLoad.onload = function () {
          image.animate({
            opacity: 0
          }, 100, function () {
            if (imageSrcSet) {
              image.attr('srcset', imageSrcSet);

              if (imageSizes) {
                image.attr('sizes', imageSizes);
              }
            }

            image.attr('src', imageSource).animate({
              opacity: 1
            }, 200, function () {
              image.removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');
            });

            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        };

        imageToLoad.onerror = function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        };

        imageToLoad.src = imageSource;
      });
    }

    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
        rangeEnd = rangeStart + _.options.slidesToShow + 2;
      } else {
        rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
        rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
      }
    } else {
      rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
      rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);

      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }

    loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

    if (_.options.lazyLoad === 'anticipated') {
      var prevSlide = rangeStart - 1,
          nextSlide = rangeEnd,
          $slides = _.$slider.find('.slick-slide');

      for (var i = 0; i < _.options.slidesToScroll; i++) {
        if (prevSlide < 0) prevSlide = _.slideCount - 1;
        loadRange = loadRange.add($slides.eq(prevSlide));
        loadRange = loadRange.add($slides.eq(nextSlide));
        prevSlide--;
        nextSlide++;
      }
    }

    loadImages(loadRange);

    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-slide');
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
      loadImages(cloneRange);
    }
  };

  Slick.prototype.loadSlider = function () {
    var _ = this;

    _.setPosition();

    _.$slideTrack.css({
      opacity: 1
    });

    _.$slider.removeClass('slick-loading');

    _.initUI();

    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  };

  Slick.prototype.next = Slick.prototype.slickNext = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'next'
      }
    });
  };

  Slick.prototype.orientationChange = function () {
    var _ = this;

    _.checkResponsive();

    _.setPosition();
  };

  Slick.prototype.pause = Slick.prototype.slickPause = function () {
    var _ = this;

    _.autoPlayClear();

    _.paused = true;
  };

  Slick.prototype.play = Slick.prototype.slickPlay = function () {
    var _ = this;

    _.autoPlay();

    _.options.autoplay = true;
    _.paused = false;
    _.focussed = false;
    _.interrupted = false;
  };

  Slick.prototype.postSlide = function (index) {
    var _ = this;

    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);

      _.animating = false;

      if (_.slideCount > _.options.slidesToShow) {
        _.setPosition();
      }

      _.swipeLeft = null;

      if (_.options.autoplay) {
        _.autoPlay();
      }

      if (_.options.accessibility === true) {
        _.initADA();

        if (_.options.focusOnChange) {
          var $currentSlide = $(_.$slides.get(_.currentSlide));
          $currentSlide.attr('tabindex', 0).focus();
        }
      }
    }
  };

  Slick.prototype.prev = Slick.prototype.slickPrev = function () {
    var _ = this;

    _.changeSlide({
      data: {
        message: 'previous'
      }
    });
  };

  Slick.prototype.preventDefault = function (event) {
    event.preventDefault();
  };

  Slick.prototype.progressiveLazyLoad = function (tryCount) {
    tryCount = tryCount || 1;

    var _ = this,
        $imgsToLoad = $('img[data-lazy]', _.$slider),
        image,
        imageSource,
        imageSrcSet,
        imageSizes,
        imageToLoad;

    if ($imgsToLoad.length) {
      image = $imgsToLoad.first();
      imageSource = image.attr('data-lazy');
      imageSrcSet = image.attr('data-srcset');
      imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
      imageToLoad = document.createElement('img');

      imageToLoad.onload = function () {
        if (imageSrcSet) {
          image.attr('srcset', imageSrcSet);

          if (imageSizes) {
            image.attr('sizes', imageSizes);
          }
        }

        image.attr('src', imageSource).removeAttr('data-lazy data-srcset data-sizes').removeClass('slick-loading');

        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }

        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);

        _.progressiveLazyLoad();
      };

      imageToLoad.onerror = function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');

          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

          _.progressiveLazyLoad();
        }
      };

      imageToLoad.src = imageSource;
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  };

  Slick.prototype.refresh = function (initializing) {
    var _ = this,
        currentSlide,
        lastVisibleIndex;

    lastVisibleIndex = _.slideCount - _.options.slidesToShow; // in non-infinite sliders, we don't want to go past the
    // last visible index.

    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = lastVisibleIndex;
    } // if less slides than to show, go to start.


    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    currentSlide = _.currentSlide;

    _.destroy(true);

    $.extend(_, _.initials, {
      currentSlide: currentSlide
    });

    _.init();

    if (!initializing) {
      _.changeSlide({
        data: {
          message: 'index',
          index: currentSlide
        }
      }, false);
    }
  };

  Slick.prototype.registerBreakpoints = function () {
    var _ = this,
        breakpoint,
        currentBreakpoint,
        l,
        responsiveSettings = _.options.responsive || null;

    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = _.options.respondTo || 'window';

      for (breakpoint in responsiveSettings) {
        l = _.breakpoints.length - 1;

        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          currentBreakpoint = responsiveSettings[breakpoint].breakpoint; // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.

          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }

            l--;
          }

          _.breakpoints.push(currentBreakpoint);

          _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;
        }
      }

      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  };

  Slick.prototype.reinit = function () {
    var _ = this;

    _.$slides = _.$slideTrack.children(_.options.slide).addClass('slick-slide');
    _.slideCount = _.$slides.length;

    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = _.currentSlide - _.options.slidesToScroll;
    }

    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = 0;
    }

    _.registerBreakpoints();

    _.setProps();

    _.setupInfinite();

    _.buildArrows();

    _.updateArrows();

    _.initArrowEvents();

    _.buildDots();

    _.updateDots();

    _.initDotEvents();

    _.cleanUpSlideEvents();

    _.initSlideEvents();

    _.checkResponsive(false, true);

    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }

    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

    _.setPosition();

    _.focusHandler();

    _.paused = !_.options.autoplay;

    _.autoPlay();

    _.$slider.trigger('reInit', [_]);
  };

  Slick.prototype.resize = function () {
    var _ = this;

    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = window.setTimeout(function () {
        _.windowWidth = $(window).width();

        _.checkResponsive();

        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50);
    }
  };

  Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {
    var _ = this;

    if (typeof index === 'boolean') {
      removeBefore = index;
      index = removeBefore === true ? 0 : _.slideCount - 1;
    } else {
      index = removeBefore === true ? --index : index;
    }

    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }

    _.unload();

    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }

    _.$slides = _.$slideTrack.children(this.options.slide);

    _.$slideTrack.children(this.options.slide).detach();

    _.$slideTrack.append(_.$slides);

    _.$slidesCache = _.$slides;

    _.reinit();
  };

  Slick.prototype.setCSS = function (position) {
    var _ = this,
        positionProps = {},
        x,
        y;

    if (_.options.rtl === true) {
      position = -position;
    }

    x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
    y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';
    positionProps[_.positionProp] = position;

    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = {};

      if (_.cssTransitions === false) {
        positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';

        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';

        _.$slideTrack.css(positionProps);
      }
    }
  };

  Slick.prototype.setDimensions = function () {
    var _ = this;

    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: '0px ' + _.options.centerPadding
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);

      if (_.options.centerMode === true) {
        _.$list.css({
          padding: _.options.centerPadding + ' 0px'
        });
      }
    }

    _.listWidth = _.$list.width();
    _.listHeight = _.$list.height();

    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);

      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = Math.ceil(_.listWidth);

      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }

    var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();

    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  };

  Slick.prototype.setFade = function () {
    var _ = this,
        targetLeft;

    _.$slides.each(function (index, element) {
      targetLeft = _.slideWidth * index * -1;

      if (_.options.rtl === true) {
        $(element).css({
          position: 'relative',
          right: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      } else {
        $(element).css({
          position: 'relative',
          left: targetLeft,
          top: 0,
          zIndex: _.options.zIndex - 2,
          opacity: 0
        });
      }
    });

    _.$slides.eq(_.currentSlide).css({
      zIndex: _.options.zIndex - 1,
      opacity: 1
    });
  };

  Slick.prototype.setHeight = function () {
    var _ = this;

    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);

      _.$list.css('height', targetHeight);
    }
  };

  Slick.prototype.setOption = Slick.prototype.slickSetOption = function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */
    var _ = this,
        l,
        item,
        option,
        value,
        refresh = false,
        type;

    if ($.type(arguments[0]) === 'object') {
      option = arguments[0];
      refresh = arguments[1];
      type = 'multiple';
    } else if ($.type(arguments[0]) === 'string') {
      option = arguments[0];
      value = arguments[1];
      refresh = arguments[2];

      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = 'responsive';
      } else if (typeof arguments[1] !== 'undefined') {
        type = 'single';
      }
    }

    if (type === 'single') {
      _.options[option] = value;
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = val;
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = [value[item]];
        } else {
          l = _.options.responsive.length - 1; // loop through the responsive object and splice out duplicates.

          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }

            l--;
          }

          _.options.responsive.push(value[item]);
        }
      }
    }

    if (refresh) {
      _.unload();

      _.reinit();
    }
  };

  Slick.prototype.setPosition = function () {
    var _ = this;

    _.setDimensions();

    _.setHeight();

    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }

    _.$slider.trigger('setPosition', [_]);
  };

  Slick.prototype.setProps = function () {
    var _ = this,
        bodyStyle = document.body.style;

    _.positionProp = _.options.vertical === true ? 'top' : 'left';

    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }

    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = true;
      }
    }

    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = 3;
        }
      } else {
        _.options.zIndex = _.defaults.zIndex;
      }
    }

    if (bodyStyle.OTransform !== undefined) {
      _.animType = 'OTransform';
      _.transformType = '-o-transform';
      _.transitionType = 'OTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.MozTransform !== undefined) {
      _.animType = 'MozTransform';
      _.transformType = '-moz-transform';
      _.transitionType = 'MozTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = 'webkitTransform';
      _.transformType = '-webkit-transform';
      _.transitionType = 'webkitTransition';
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
    }

    if (bodyStyle.msTransform !== undefined) {
      _.animType = 'msTransform';
      _.transformType = '-ms-transform';
      _.transitionType = 'msTransition';
      if (bodyStyle.msTransform === undefined) _.animType = false;
    }

    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = 'transform';
      _.transformType = 'transform';
      _.transitionType = 'transition';
    }

    _.transformsEnabled = _.options.useTransform && _.animType !== null && _.animType !== false;
  };

  Slick.prototype.setSlideClasses = function (index) {
    var _ = this,
        centerOffset,
        allSlides,
        indexOffset,
        remainder;

    allSlides = _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');

    _.$slides.eq(index).addClass('slick-current');

    if (_.options.centerMode === true) {
      var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;
      centerOffset = Math.floor(_.options.slidesToShow / 2);

      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset + evenCoef, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = _.options.slidesToShow + index;
          allSlides.slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }

        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }

      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = _.slideCount % _.options.slidesToShow;
        indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }

    if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
      _.lazyLoad();
    }
  };

  Slick.prototype.setupInfinite = function () {
    var _ = this,
        i,
        slideIndex,
        infiniteCount;

    if (_.options.fade === true) {
      _.options.centerMode = false;
    }

    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = null;

      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = _.options.slidesToShow + 1;
        } else {
          infiniteCount = _.options.slidesToShow;
        }

        for (i = _.slideCount; i > _.slideCount - infiniteCount; i -= 1) {
          slideIndex = i - 1;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }

        for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
          slideIndex = i;
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }

        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  };

  Slick.prototype.interrupt = function (toggle) {
    var _ = this;

    if (!toggle) {
      _.autoPlay();
    }

    _.interrupted = toggle;
  };

  Slick.prototype.selectHandler = function (event) {
    var _ = this;

    var targetElement = $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide');
    var index = parseInt(targetElement.attr('data-slick-index'));
    if (!index) index = 0;

    if (_.slideCount <= _.options.slidesToShow) {
      _.slideHandler(index, false, true);

      return;
    }

    _.slideHandler(index);
  };

  Slick.prototype.slideHandler = function (index, sync, dontAnimate) {
    var targetSlide,
        animSlide,
        oldSlide,
        slideLeft,
        targetLeft = null,
        _ = this,
        navTarget;

    sync = sync || false;

    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }

    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }

    if (sync === false) {
      _.asNavFor(index);
    }

    targetSlide = index;
    targetLeft = _.getLeft(targetSlide);
    slideLeft = _.getLeft(_.currentSlide);
    _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = _.currentSlide;

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }

      return;
    }

    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }

    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = _.slideCount - _.slideCount % _.options.slidesToScroll;
      } else {
        animSlide = _.slideCount + targetSlide;
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = 0;
      } else {
        animSlide = targetSlide - _.slideCount;
      }
    } else {
      animSlide = targetSlide;
    }

    _.animating = true;

    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

    oldSlide = _.currentSlide;
    _.currentSlide = animSlide;

    _.setSlideClasses(_.currentSlide);

    if (_.options.asNavFor) {
      navTarget = _.getNavTarget();
      navTarget = navTarget.slick('getSlick');

      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }

    _.updateDots();

    _.updateArrows();

    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);

        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }

      _.animateHeight();

      return;
    }

    if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  };

  Slick.prototype.startLoad = function () {
    var _ = this;

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();

      _.$nextArrow.hide();
    }

    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }

    _.$slider.addClass('slick-loading');
  };

  Slick.prototype.swipeDirection = function () {
    var xDist,
        yDist,
        r,
        swipeAngle,
        _ = this;

    xDist = _.touchObject.startX - _.touchObject.curX;
    yDist = _.touchObject.startY - _.touchObject.curY;
    r = Math.atan2(yDist, xDist);
    swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }

    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }

    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }

    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }

    return 'vertical';
  };

  Slick.prototype.swipeEnd = function (event) {
    var _ = this,
        slideCount,
        direction;

    _.dragging = false;
    _.swiping = false;

    if (_.scrolling) {
      _.scrolling = false;
      return false;
    }

    _.interrupted = false;
    _.shouldClick = _.touchObject.swipeLength > 10 ? false : true;

    if (_.touchObject.curX === undefined) {
      return false;
    }

    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }

    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = _.swipeDirection();

      switch (direction) {
        case 'left':
        case 'down':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
          _.currentDirection = 0;
          break;

        case 'right':
        case 'up':
          slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
          _.currentDirection = 1;
          break;

        default:
      }

      if (direction != 'vertical') {
        _.slideHandler(slideCount);

        _.touchObject = {};

        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);

        _.touchObject = {};
      }
    }
  };

  Slick.prototype.swipeHandler = function (event) {
    var _ = this;

    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }

    _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1;
    _.touchObject.minSwipe = _.listWidth / _.options.touchThreshold;

    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = _.listHeight / _.options.touchThreshold;
    }

    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);

        break;

      case 'move':
        _.swipeMove(event);

        break;

      case 'end':
        _.swipeEnd(event);

        break;
    }
  };

  Slick.prototype.swipeMove = function (event) {
    var _ = this,
        edgeWasHit = false,
        curLeft,
        swipeDirection,
        swipeLength,
        positionOffset,
        touches,
        verticalSwipeLength;

    touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

    if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
      return false;
    }

    curLeft = _.getLeft(_.currentSlide);
    _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
    _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;
    _.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));
    verticalSwipeLength = Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

    if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
      _.scrolling = true;
      return false;
    }

    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = verticalSwipeLength;
    }

    swipeDirection = _.swipeDirection();

    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      _.swiping = true;
      event.preventDefault();
    }

    positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);

    if (_.options.verticalSwiping === true) {
      positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
    }

    swipeLength = _.touchObject.swipeLength;
    _.touchObject.edgeHit = false;

    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
        _.touchObject.edgeHit = true;
      }
    }

    if (_.options.vertical === false) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    } else {
      _.swipeLeft = curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset;
    }

    if (_.options.verticalSwiping === true) {
      _.swipeLeft = curLeft + swipeLength * positionOffset;
    }

    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }

    if (_.animating === true) {
      _.swipeLeft = null;
      return false;
    }

    _.setCSS(_.swipeLeft);
  };

  Slick.prototype.swipeStart = function (event) {
    var _ = this,
        touches;

    _.interrupted = true;

    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = {};
      return false;
    }

    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = event.originalEvent.touches[0];
    }

    _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
    _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;
    _.dragging = true;
  };

  Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {
    var _ = this;

    if (_.$slidesCache !== null) {
      _.unload();

      _.$slideTrack.children(this.options.slide).detach();

      _.$slidesCache.appendTo(_.$slideTrack);

      _.reinit();
    }
  };

  Slick.prototype.unload = function () {
    var _ = this;

    $('.slick-cloned', _.$slider).remove();

    if (_.$dots) {
      _.$dots.remove();
    }

    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }

    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }

    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  };

  Slick.prototype.unslick = function (fromBreakpoint) {
    var _ = this;

    _.$slider.trigger('unslick', [_, fromBreakpoint]);

    _.destroy();
  };

  Slick.prototype.updateArrows = function () {
    var _ = this,
        centerOffset;

    centerOffset = Math.floor(_.options.slidesToShow / 2);

    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');

        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  };

  Slick.prototype.updateDots = function () {
    var _ = this;

    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').end();

      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active');
    }
  };

  Slick.prototype.visibility = function () {
    var _ = this;

    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = true;
      } else {
        _.interrupted = false;
      }
    }
  };

  $.fn.slick = function () {
    var _ = this,
        opt = arguments[0],
        args = Array.prototype.slice.call(arguments, 1),
        l = _.length,
        i,
        ret;

    for (i = 0; i < l; i++) {
      if (_typeof(opt) == 'object' || typeof opt == 'undefined') _[i].slick = new Slick(_[i], opt);else ret = _[i].slick[opt].apply(_[i].slick, args);
      if (typeof ret != 'undefined') return ret;
    }

    return _;
  };
});

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/assets/js/components/accordion.js":
/*!***********************************************!*\
  !*** ./src/assets/js/components/accordion.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion--expand').on('click', function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion__btn').html('<span><i class="fas fa-angle-double-down fa-xs"></i></span>');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion__body:visible').slideUp();

  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().is(':visible')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().slideDown(200);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.c-accordion__btn').html('<span><i class="fas fa-angle-double-up fa-xs"></i></span>');
  }
});

/***/ }),

/***/ "./src/assets/js/components/aos.js":
/*!*****************************************!*\
  !*** ./src/assets/js/components/aos.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
// npm install aos --save
 // You can also pass an optional settings object
// below listed default settings

aos__WEBPACK_IMPORTED_MODULE_0___default.a.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});

/***/ }),

/***/ "./src/assets/js/components/navigation/hamburger-nav.js":
/*!**************************************************************!*\
  !*** ./src/assets/js/components/navigation/hamburger-nav.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  var isOpen = 0;
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.openbtn').click(function () {
    if (isOpen === 0) {
      openNav();
    } else {
      closeNav();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.closebtn').click(function () {
    closeNav();
  });

  function openNav() {
    document.getElementById('myNav').style.width = '100%';
    isOpen = 1;
  }

  function closeNav() {
    document.getElementById('myNav').style.width = '0%';
    isOpen = 0;
  }
});

/***/ }),

/***/ "./src/assets/js/components/navigation/navigation.js":
/*!***********************************************************!*\
  !*** ./src/assets/js/components/navigation/navigation.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('mouseenter', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).addClass('open');
  console.log('mouse enter');
}).on('mouseleave', '.menu-item-has-children', function (e) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget).removeClass('open');
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-navigation').on('click', '.menu .menu-button', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var menu_button = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.currentTarget);
  var menu_link = menu_button.parent();
  var menu_item = menu_link.parent();

  if (menu_item.hasClass('open')) {
    menu_item.add(menu_item.find('.menu-item.open')).removeClass('open');
    menu_link.add(menu_item.find('a')).attr('aria-expanded', 'false');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'false');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'true');
  } else {
    menu_item.siblings('.open').find('>a>.menu-button').trigger('click');
    menu_item.addClass('open');
    menu_link.attr('aria-expanded', 'true');
    menu_button.find('.menu-button-show').attr('aria-hidden', 'true');
    menu_button.find('.menu-button-hide').attr('aria-hidden', 'false');
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).click(function (e) {
  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu-item.open').length) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.menu > .menu-item.open > a > .menu-button').trigger('click');
  }
});

/***/ }),

/***/ "./src/assets/js/components/search-form.js":
/*!*************************************************!*\
  !*** ./src/assets/js/components/search-form.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-search__btn').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-header-search-form').toggle();
  });
});

/***/ }),

/***/ "./src/assets/js/components/slider.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/slider.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider-dots').slick({
  lazyLoad: 'progressive',
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 3000
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-slider--arrows-inside').slick({
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 1000,
  nextArrow: '<a class="slick-next-inside" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></a>',
  prevArrow: '<a class="slick-prev-inside" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></a>'
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-slider--arrows-outside').slick({
  infinite: true,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  speed: 1000,
  nextArrow: '<a class="slick-next" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></a>',
  prevArrow: '<a class="slick-prev" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></a>'
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-slider--overflow').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 3
    }
  }, {
    breakpoint: 480,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }]
});

/***/ }),

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navigation_hamburger_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation/hamburger-nav */ "./src/assets/js/components/navigation/hamburger-nav.js");
/* harmony import */ var _components_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navigation/navigation */ "./src/assets/js/components/navigation/navigation.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_aos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/aos */ "./src/assets/js/components/aos.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accordion */ "./src/assets/js/components/accordion.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slider */ "./src/assets/js/components/slider.js");
/* harmony import */ var _components_search_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search-form */ "./src/assets/js/components/search-form.js");







 // import webpackStream from 'webpack-stream'

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-post__gallery').slick({
    'arrows': false,
    'adaptiveHeight': true
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.most_recent_widget').slick();

  if (wp.customize && wp.customize.selectiveRefresh) {
    wp.customize.selectiveRefresh.bind('partial-content-rendered', function (placement) {
      if (placement.partial.widgetIdParts && placement.partial.widgetIdParts.idBase === '_themename_most_recent_widget') {
        placement.container.find('.most_recent_widget').slick();
      }
    });
  }
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(function ($) {
  var siteNavigation = $('.navigation-main');
  siteNavigation.find('a').on('focus blur', function () {
    $(this).parents('li').toggleClass('focus');
  });
});

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/assets/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paulbrighton/Sites/woo-demo/wp-content/themes/yp-digital-fw/src/assets/js/main.js */"./src/assets/js/main.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9hb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vaGFtYnVyZ2VyLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zZWFyY2gtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJvIiwibiIsImkiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJyIiwiYSIsInUiLCJzIiwiZiIsImQiLCJsIiwiYiIsInYiLCJ5IiwiZyIsImgiLCJ3IiwiayIsIngiLCJvZmZzZXQiLCJkZWxheSIsImVhc2luZyIsImR1cmF0aW9uIiwiZGlzYWJsZSIsIm9uY2UiLCJzdGFydEV2ZW50IiwidGhyb3R0bGVEZWxheSIsImRlYm91bmNlRGVsYXkiLCJkaXNhYmxlTXV0YXRpb25PYnNlcnZlciIsImoiLCJPIiwiTSIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiUyIsIm1vYmlsZSIsInBob25lIiwidGFibGV0IiwiXyIsImRvY3VtZW50IiwiYWxsIiwid2luZG93IiwiYXRvYiIsImlzU3VwcG9ydGVkIiwiY29uc29sZSIsImluZm8iLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVhZHkiLCJpbml0IiwicmVmcmVzaCIsInJlZnJlc2hIYXJkIiwiYXBwbHkiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiVHlwZUVycm9yIiwibGVhZGluZyIsIm1heFdhaXQiLCJ0cmFpbGluZyIsImNhbmNlbCIsImZsdXNoIiwidmFsdWVPZiIsInJlcGxhY2UiLCJ0ZXN0Iiwic2xpY2UiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiTmFOIiwicGFyc2VJbnQiLCJzZWxmIiwiRnVuY3Rpb24iLCJ0b1N0cmluZyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJEYXRlIiwibm93IiwiZGF0YXNldCIsImFvcyIsImNoaWxkcmVuIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRvY3VtZW50RWxlbWVudCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZW1vdmVkTm9kZXMiLCJBcnJheSIsImFkZGVkTm9kZXMiLCJjb25jYXQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJzdWJzdHIiLCJnZXRBdHRyaWJ1dGUiLCJwb3NpdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJhbmNob3IiLCJhbmNob3JQbGFjZW1lbnQiLCJpc05hTiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwidGFnTmFtZSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRQYXJlbnQiLCJsZWZ0IiwibWFwIiwiZmFjdG9yeSIsIiQiLCJTbGljayIsImluc3RhbmNlVWlkIiwiZWxlbWVudCIsInNldHRpbmdzIiwiZGF0YVNldHRpbmdzIiwiZGVmYXVsdHMiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJhcHBlbmRBcnJvd3MiLCJhcHBlbmREb3RzIiwiYXJyb3dzIiwiYXNOYXZGb3IiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImNzc0Vhc2UiLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJ0ZXh0IiwiZG90cyIsImRvdHNDbGFzcyIsImRyYWdnYWJsZSIsImVkZ2VGcmljdGlvbiIsImZhZGUiLCJmb2N1c09uU2VsZWN0IiwiZm9jdXNPbkNoYW5nZSIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJtb2JpbGVGaXJzdCIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25Gb2N1cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJyZXNwb25kVG8iLCJyZXNwb25zaXZlIiwicm93cyIsInJ0bCIsInNsaWRlIiwic2xpZGVzUGVyUm93Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsInN3aXBlIiwic3dpcGVUb1NsaWRlIiwidG91Y2hNb3ZlIiwidG91Y2hUaHJlc2hvbGQiLCJ1c2VDU1MiLCJ1c2VUcmFuc2Zvcm0iLCJ2YXJpYWJsZVdpZHRoIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJ3YWl0Rm9yQW5pbWF0ZSIsInpJbmRleCIsImluaXRpYWxzIiwiYW5pbWF0aW5nIiwiZHJhZ2dpbmciLCJhdXRvUGxheVRpbWVyIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFNsaWRlIiwiZGlyZWN0aW9uIiwiJGRvdHMiLCJsaXN0V2lkdGgiLCJsaXN0SGVpZ2h0IiwibG9hZEluZGV4IiwiJG5leHRBcnJvdyIsIiRwcmV2QXJyb3ciLCJzY3JvbGxpbmciLCJzbGlkZUNvdW50Iiwic2xpZGVXaWR0aCIsIiRzbGlkZVRyYWNrIiwiJHNsaWRlcyIsInNsaWRpbmciLCJzbGlkZU9mZnNldCIsInN3aXBlTGVmdCIsInN3aXBpbmciLCIkbGlzdCIsInRvdWNoT2JqZWN0IiwidHJhbnNmb3Jtc0VuYWJsZWQiLCJ1bnNsaWNrZWQiLCJleHRlbmQiLCJhY3RpdmVCcmVha3BvaW50IiwiYW5pbVR5cGUiLCJhbmltUHJvcCIsImJyZWFrcG9pbnRzIiwiYnJlYWtwb2ludFNldHRpbmdzIiwiY3NzVHJhbnNpdGlvbnMiLCJmb2N1c3NlZCIsImludGVycnVwdGVkIiwiaGlkZGVuIiwicGF1c2VkIiwicG9zaXRpb25Qcm9wIiwicm93Q291bnQiLCJzaG91bGRDbGljayIsIiRzbGlkZXIiLCIkc2xpZGVzQ2FjaGUiLCJ0cmFuc2Zvcm1UeXBlIiwidHJhbnNpdGlvblR5cGUiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dUaW1lciIsImRhdGEiLCJvcHRpb25zIiwib3JpZ2luYWxTZXR0aW5ncyIsIm1vekhpZGRlbiIsIndlYmtpdEhpZGRlbiIsImF1dG9QbGF5IiwicHJveHkiLCJhdXRvUGxheUNsZWFyIiwiYXV0b1BsYXlJdGVyYXRvciIsImNoYW5nZVNsaWRlIiwiY2xpY2tIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsInNldFBvc2l0aW9uIiwic3dpcGVIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJrZXlIYW5kbGVyIiwiaHRtbEV4cHIiLCJyZWdpc3RlckJyZWFrcG9pbnRzIiwiYWN0aXZhdGVBREEiLCJmaW5kIiwiYXR0ciIsImFkZFNsaWRlIiwic2xpY2tBZGQiLCJtYXJrdXAiLCJpbmRleCIsImFkZEJlZm9yZSIsInVubG9hZCIsImFwcGVuZFRvIiwiaW5zZXJ0QmVmb3JlIiwiZXEiLCJpbnNlcnRBZnRlciIsInByZXBlbmRUbyIsImRldGFjaCIsImFwcGVuZCIsImVhY2giLCJyZWluaXQiLCJhbmltYXRlSGVpZ2h0IiwidGFyZ2V0SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJhbmltYXRlIiwiaGVpZ2h0IiwiYW5pbWF0ZVNsaWRlIiwidGFyZ2V0TGVmdCIsImNhbGxiYWNrIiwiYW5pbVByb3BzIiwiYW5pbVN0YXJ0Iiwic3RlcCIsImNlaWwiLCJjc3MiLCJjb21wbGV0ZSIsImFwcGx5VHJhbnNpdGlvbiIsImRpc2FibGVUcmFuc2l0aW9uIiwiZ2V0TmF2VGFyZ2V0Iiwibm90IiwidGFyZ2V0Iiwic2xpY2siLCJzbGlkZUhhbmRsZXIiLCJ0cmFuc2l0aW9uIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2xpZGVUbyIsImJ1aWxkQXJyb3dzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJidWlsZERvdHMiLCJkb3QiLCJnZXREb3RDb3VudCIsImZpcnN0IiwiYnVpbGRPdXQiLCJ3cmFwQWxsIiwicGFyZW50Iiwid3JhcCIsInNldHVwSW5maW5pdGUiLCJ1cGRhdGVEb3RzIiwic2V0U2xpZGVDbGFzc2VzIiwiYnVpbGRSb3dzIiwibmV3U2xpZGVzIiwibnVtT2ZTbGlkZXMiLCJvcmlnaW5hbFNsaWRlcyIsInNsaWRlc1BlclNlY3Rpb24iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY3JlYXRlRWxlbWVudCIsInJvdyIsImdldCIsImFwcGVuZENoaWxkIiwiZW1wdHkiLCJjaGVja1Jlc3BvbnNpdmUiLCJpbml0aWFsIiwiZm9yY2VVcGRhdGUiLCJicmVha3BvaW50IiwidGFyZ2V0QnJlYWtwb2ludCIsInJlc3BvbmRUb1dpZHRoIiwidHJpZ2dlckJyZWFrcG9pbnQiLCJzbGlkZXJXaWR0aCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInVuc2xpY2siLCJ0cmlnZ2VyIiwiZXZlbnQiLCJkb250QW5pbWF0ZSIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXhPZmZzZXQiLCJ1bmV2ZW5PZmZzZXQiLCJpcyIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VzdCIsIm1lc3NhZ2UiLCJjaGVja05hdmlnYWJsZSIsIm5hdmlnYWJsZXMiLCJwcmV2TmF2aWdhYmxlIiwiZ2V0TmF2aWdhYmxlSW5kZXhlcyIsImNsZWFuVXBFdmVudHMiLCJvZmYiLCJpbnRlcnJ1cHQiLCJ2aXNpYmlsaXR5IiwiY2xlYW5VcFNsaWRlRXZlbnRzIiwib3JpZW50YXRpb25DaGFuZ2UiLCJyZXNpemUiLCJjbGVhblVwUm93cyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImRlc3Ryb3kiLCJmYWRlU2xpZGUiLCJzbGlkZUluZGV4Iiwib3BhY2l0eSIsImZhZGVTbGlkZU91dCIsImZpbHRlclNsaWRlcyIsInNsaWNrRmlsdGVyIiwiZmlsdGVyIiwiZm9jdXNIYW5kbGVyIiwib24iLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsIm91dGVyV2lkdGgiLCJnZXRPcHRpb24iLCJzbGlja0dldE9wdGlvbiIsIm9wdGlvbiIsImluZGV4ZXMiLCJwdXNoIiwiZ2V0U2xpY2siLCJnZXRTbGlkZUNvdW50Iiwic2xpZGVzVHJhdmVyc2VkIiwic3dpcGVkU2xpZGUiLCJjZW50ZXJPZmZzZXQiLCJhYnMiLCJnb1RvIiwic2xpY2tHb1RvIiwiY3JlYXRpb24iLCJoYXNDbGFzcyIsInNldFByb3BzIiwic3RhcnRMb2FkIiwibG9hZFNsaWRlciIsImluaXRpYWxpemVFdmVudHMiLCJ1cGRhdGVBcnJvd3MiLCJpbml0QURBIiwibnVtRG90R3JvdXBzIiwidGFiQ29udHJvbEluZGV4ZXMiLCJ2YWwiLCJzbGlkZUNvbnRyb2xJbmRleCIsImFyaWFCdXR0b25Db250cm9sIiwibWFwcGVkU2xpZGVJbmRleCIsImVuZCIsImluaXRBcnJvd0V2ZW50cyIsImluaXREb3RFdmVudHMiLCJpbml0U2xpZGVFdmVudHMiLCJhY3Rpb24iLCJpbml0VUkiLCJzaG93IiwibWF0Y2giLCJrZXlDb2RlIiwibG9hZFJhbmdlIiwiY2xvbmVSYW5nZSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImxvYWRJbWFnZXMiLCJpbWFnZXNTY29wZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVNyY1NldCIsImltYWdlU2l6ZXMiLCJpbWFnZVRvTG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJwcm9ncmVzc2l2ZUxhenlMb2FkIiwibmV4dCIsInNsaWNrTmV4dCIsInBhdXNlIiwic2xpY2tQYXVzZSIsInBsYXkiLCJzbGlja1BsYXkiLCJwb3N0U2xpZGUiLCIkY3VycmVudFNsaWRlIiwiZm9jdXMiLCJwcmV2Iiwic2xpY2tQcmV2IiwidHJ5Q291bnQiLCIkaW1nc1RvTG9hZCIsImluaXRpYWxpemluZyIsImxhc3RWaXNpYmxlSW5kZXgiLCJjdXJyZW50QnJlYWtwb2ludCIsInJlc3BvbnNpdmVTZXR0aW5ncyIsInR5cGUiLCJzcGxpY2UiLCJzb3J0Iiwid2luZG93RGVsYXkiLCJyZW1vdmVTbGlkZSIsInNsaWNrUmVtb3ZlIiwicmVtb3ZlQmVmb3JlIiwicmVtb3ZlQWxsIiwic2V0Q1NTIiwicG9zaXRpb25Qcm9wcyIsInNldERpbWVuc2lvbnMiLCJwYWRkaW5nIiwic2V0RmFkZSIsInJpZ2h0Iiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJpdGVtIiwib3B0IiwiYm9keVN0eWxlIiwiYm9keSIsInN0eWxlIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsIk1velRyYW5zaXRpb24iLCJtc1RyYW5zaXRpb24iLCJPVHJhbnNmb3JtIiwicGVyc3BlY3RpdmVQcm9wZXJ0eSIsIndlYmtpdFBlcnNwZWN0aXZlIiwiTW96VHJhbnNmb3JtIiwiTW96UGVyc3BlY3RpdmUiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsImFsbFNsaWRlcyIsInJlbWFpbmRlciIsImV2ZW5Db2VmIiwiaW5maW5pdGVDb3VudCIsImNsb25lIiwidG9nZ2xlIiwidGFyZ2V0RWxlbWVudCIsInBhcmVudHMiLCJzeW5jIiwiYW5pbVNsaWRlIiwib2xkU2xpZGUiLCJzbGlkZUxlZnQiLCJuYXZUYXJnZXQiLCJoaWRlIiwic3dpcGVEaXJlY3Rpb24iLCJ4RGlzdCIsInlEaXN0Iiwic3dpcGVBbmdsZSIsInN0YXJ0WCIsImN1clgiLCJzdGFydFkiLCJjdXJZIiwiYXRhbjIiLCJyb3VuZCIsIlBJIiwic3dpcGVFbmQiLCJzd2lwZUxlbmd0aCIsImVkZ2VIaXQiLCJtaW5Td2lwZSIsImZpbmdlckNvdW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJzd2lwZVN0YXJ0Iiwic3dpcGVNb3ZlIiwiZWRnZVdhc0hpdCIsImN1ckxlZnQiLCJwb3NpdGlvbk9mZnNldCIsInZlcnRpY2FsU3dpcGVMZW5ndGgiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJmbiIsImFyZ3MiLCJyZXQiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsImh0bWwiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiQU9TIiwiaW5pdENsYXNzTmFtZSIsImFuaW1hdGVkQ2xhc3NOYW1lIiwidXNlQ2xhc3NOYW1lcyIsIm1pcnJvciIsImlzT3BlbiIsImNsaWNrIiwib3Blbk5hdiIsImNsb3NlTmF2IiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2ciLCJtZW51X2J1dHRvbiIsIm1lbnVfbGluayIsIm1lbnVfaXRlbSIsInNpYmxpbmdzIiwid3AiLCJjdXN0b21pemUiLCJzZWxlY3RpdmVSZWZyZXNoIiwiYmluZCIsInBsYWNlbWVudCIsInBhcnRpYWwiLCJ3aWRnZXRJZFBhcnRzIiwiaWRCYXNlIiwiY29udGFpbmVyIiwic2l0ZU5hdmlnYXRpb24iLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLDRDQUFpQkMsT0FBakIsTUFBMEIsMENBQWlCQyxNQUFqQixFQUExQixHQUFrREEsTUFBTSxDQUFDRCxPQUFQLEdBQWVELENBQUMsRUFBbEUsR0FBcUUsUUFBc0NHLGlDQUFPLEVBQUQsb0NB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ZixDQUFvQixHQUFwQixFQUF5QmlILEVBQXpCLENBQTRCLFlBQTVCLEVBQTBDLFlBQVk7QUFDcEQ3TyxLQUFDLENBQUMsSUFBRCxDQUFELENBQVEwVyxPQUFSLENBQWdCLElBQWhCLEVBQXNCMEUsV0FBdEIsQ0FBa0MsT0FBbEM7QUFDRCxHQUZEO0FBR0QsQ0FOQSxDQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLHdCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkFPUz10KCk6ZS5BT1M9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobyl7aWYobltvXSlyZXR1cm4gbltvXS5leHBvcnRzO3ZhciBpPW5bb109e2V4cG9ydHM6e30saWQ6byxsb2FkZWQ6ITF9O3JldHVybiBlW29dLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLHQpLGkubG9hZGVkPSEwLGkuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5wPVwiZGlzdC9cIix0KDApfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBpPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LHI9bigxKSxhPShvKHIpLG4oNikpLHU9byhhKSxjPW4oNykscz1vKGMpLGY9big4KSxkPW8oZiksbD1uKDkpLHA9byhsKSxtPW4oMTApLGI9byhtKSx2PW4oMTEpLHk9byh2KSxnPW4oMTQpLGg9byhnKSx3PVtdLGs9ITEseD17b2Zmc2V0OjEyMCxkZWxheTowLGVhc2luZzpcImVhc2VcIixkdXJhdGlvbjo0MDAsZGlzYWJsZTohMSxvbmNlOiExLHN0YXJ0RXZlbnQ6XCJET01Db250ZW50TG9hZGVkXCIsdGhyb3R0bGVEZWxheTo5OSxkZWJvdW5jZURlbGF5OjUwLGRpc2FibGVNdXRhdGlvbk9ic2VydmVyOiExfSxqPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtpZihlJiYoaz0hMCksaylyZXR1cm4gdz0oMCx5LmRlZmF1bHQpKHcseCksKDAsYi5kZWZhdWx0KSh3LHgub25jZSksd30sTz1mdW5jdGlvbigpe3c9KDAsaC5kZWZhdWx0KSgpLGooKX0sTT1mdW5jdGlvbigpe3cuZm9yRWFjaChmdW5jdGlvbihlLHQpe2Uubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvc1wiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZGVsYXlcIil9KX0sUz1mdW5jdGlvbihlKXtyZXR1cm4gZT09PSEwfHxcIm1vYmlsZVwiPT09ZSYmcC5kZWZhdWx0Lm1vYmlsZSgpfHxcInBob25lXCI9PT1lJiZwLmRlZmF1bHQucGhvbmUoKXx8XCJ0YWJsZXRcIj09PWUmJnAuZGVmYXVsdC50YWJsZXQoKXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpPT09ITB9LF89ZnVuY3Rpb24oZSl7eD1pKHgsZSksdz0oMCxoLmRlZmF1bHQpKCk7dmFyIHQ9ZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2I7cmV0dXJuIFMoeC5kaXNhYmxlKXx8dD9NKCk6KHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXJ8fGQuZGVmYXVsdC5pc1N1cHBvcnRlZCgpfHwoY29uc29sZS5pbmZvKCdcXG4gICAgICBhb3M6IE11dGF0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIsXFxuICAgICAgY29kZSBtdXRhdGlvbnMgb2JzZXJ2aW5nIGhhcyBiZWVuIGRpc2FibGVkLlxcbiAgICAgIFlvdSBtYXkgaGF2ZSB0byBjYWxsIFwicmVmcmVzaEhhcmQoKVwiIGJ5IHlvdXJzZWxmLlxcbiAgICAnKSx4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyPSEwKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1lYXNpbmdcIix4LmVhc2luZyksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZHVyYXRpb25cIix4LmR1cmF0aW9uKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiLHguZGVsYXkpLFwiRE9NQ29udGVudExvYWRlZFwiPT09eC5zdGFydEV2ZW50JiZbXCJjb21wbGV0ZVwiLFwiaW50ZXJhY3RpdmVcIl0uaW5kZXhPZihkb2N1bWVudC5yZWFkeVN0YXRlKT4tMT9qKCEwKTpcImxvYWRcIj09PXguc3RhcnRFdmVudD93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih4LnN0YXJ0RXZlbnQsZnVuY3Rpb24oKXtqKCEwKX0pOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoeC5zdGFydEV2ZW50LGZ1bmN0aW9uKCl7aighMCl9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCgwLHMuZGVmYXVsdCkoaix4LmRlYm91bmNlRGVsYXksITApKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsKDAscy5kZWZhdWx0KShqLHguZGVib3VuY2VEZWxheSwhMCkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKDAsdS5kZWZhdWx0KShmdW5jdGlvbigpeygwLGIuZGVmYXVsdCkodyx4Lm9uY2UpfSx4LnRocm90dGxlRGVsYXkpKSx4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyfHxkLmRlZmF1bHQucmVhZHkoXCJbZGF0YS1hb3NdXCIsTyksdyl9O2UuZXhwb3J0cz17aW5pdDpfLHJlZnJlc2g6aixyZWZyZXNoSGFyZDpPfX0sZnVuY3Rpb24oZSx0KXt9LCwsLCxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtmdW5jdGlvbiBvKHQpe3ZhciBuPWIsbz12O3JldHVybiBiPXY9dm9pZCAwLGs9dCxnPWUuYXBwbHkobyxuKX1mdW5jdGlvbiByKGUpe3JldHVybiBrPWUsaD1zZXRUaW1lb3V0KGYsdCksTT9vKGUpOmd9ZnVuY3Rpb24gYShlKXt2YXIgbj1lLXcsbz1lLWssaT10LW47cmV0dXJuIFM/aihpLHktbyk6aX1mdW5jdGlvbiBjKGUpe3ZhciBuPWUtdyxvPWUtaztyZXR1cm4gdm9pZCAwPT09d3x8bj49dHx8bjwwfHxTJiZvPj15fWZ1bmN0aW9uIGYoKXt2YXIgZT1PKCk7cmV0dXJuIGMoZSk/ZChlKTp2b2lkKGg9c2V0VGltZW91dChmLGEoZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBoPXZvaWQgMCxfJiZiP28oZSk6KGI9dj12b2lkIDAsZyl9ZnVuY3Rpb24gbCgpe3ZvaWQgMCE9PWgmJmNsZWFyVGltZW91dChoKSxrPTAsYj13PXY9aD12b2lkIDB9ZnVuY3Rpb24gcCgpe3JldHVybiB2b2lkIDA9PT1oP2c6ZChPKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1PKCksbj1jKGUpO2lmKGI9YXJndW1lbnRzLHY9dGhpcyx3PWUsbil7aWYodm9pZCAwPT09aClyZXR1cm4gcih3KTtpZihTKXJldHVybiBoPXNldFRpbWVvdXQoZix0KSxvKHcpfXJldHVybiB2b2lkIDA9PT1oJiYoaD1zZXRUaW1lb3V0KGYsdCkpLGd9dmFyIGIsdix5LGcsaCx3LGs9MCxNPSExLFM9ITEsXz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3Iocyk7cmV0dXJuIHQ9dSh0KXx8MCxpKG4pJiYoTT0hIW4ubGVhZGluZyxTPVwibWF4V2FpdFwiaW4gbix5PVM/eCh1KG4ubWF4V2FpdCl8fDAsdCk6eSxfPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOl8pLG0uY2FuY2VsPWwsbS5mbHVzaD1wLG19ZnVuY3Rpb24gbyhlLHQsbyl7dmFyIHI9ITAsYT0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3Iocyk7cmV0dXJuIGkobykmJihyPVwibGVhZGluZ1wiaW4gbz8hIW8ubGVhZGluZzpyLGE9XCJ0cmFpbGluZ1wiaW4gbz8hIW8udHJhaWxpbmc6YSksbihlLHQse2xlYWRpbmc6cixtYXhXYWl0OnQsdHJhaWxpbmc6YX0pfWZ1bmN0aW9uIGkoZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpO3JldHVybiEhZSYmKFwib2JqZWN0XCI9PXR8fFwiZnVuY3Rpb25cIj09dCl9ZnVuY3Rpb24gcihlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSkpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuXCJzeW1ib2xcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKSl8fHIoZSkmJmsuY2FsbChlKT09ZH1mdW5jdGlvbiB1KGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKGEoZSkpcmV0dXJuIGY7aWYoaShlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1pKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGwsXCJcIik7dmFyIG49bS50ZXN0KGUpO3JldHVybiBufHxiLnRlc3QoZSk/dihlLnNsaWNlKDIpLG4/Mjo4KTpwLnRlc3QoZSk/ZjorZX12YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxzPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLGY9TmFOLGQ9XCJbb2JqZWN0IFN5bWJvbF1cIixsPS9eXFxzK3xcXHMrJC9nLHA9L15bLStdMHhbMC05YS1mXSskL2ksbT0vXjBiWzAxXSskL2ksYj0vXjBvWzAtN10rJC9pLHY9cGFyc2VJbnQseT1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpjKHQpKSYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQsZz1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/XCJ1bmRlZmluZWRcIjpjKHNlbGYpKSYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsaD15fHxnfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksdz1PYmplY3QucHJvdG90eXBlLGs9dy50b1N0cmluZyx4PU1hdGgubWF4LGo9TWF0aC5taW4sTz1mdW5jdGlvbigpe3JldHVybiBoLkRhdGUubm93KCl9O2UuZXhwb3J0cz1vfSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtmdW5jdGlvbiBpKHQpe3ZhciBuPWIsbz12O3JldHVybiBiPXY9dm9pZCAwLE89dCxnPWUuYXBwbHkobyxuKX1mdW5jdGlvbiByKGUpe3JldHVybiBPPWUsaD1zZXRUaW1lb3V0KGYsdCksTT9pKGUpOmd9ZnVuY3Rpb24gdShlKXt2YXIgbj1lLXcsbz1lLU8saT10LW47cmV0dXJuIFM/eChpLHktbyk6aX1mdW5jdGlvbiBzKGUpe3ZhciBuPWUtdyxvPWUtTztyZXR1cm4gdm9pZCAwPT09d3x8bj49dHx8bjwwfHxTJiZvPj15fWZ1bmN0aW9uIGYoKXt2YXIgZT1qKCk7cmV0dXJuIHMoZSk/ZChlKTp2b2lkKGg9c2V0VGltZW91dChmLHUoZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBoPXZvaWQgMCxfJiZiP2koZSk6KGI9dj12b2lkIDAsZyl9ZnVuY3Rpb24gbCgpe3ZvaWQgMCE9PWgmJmNsZWFyVGltZW91dChoKSxPPTAsYj13PXY9aD12b2lkIDB9ZnVuY3Rpb24gcCgpe3JldHVybiB2b2lkIDA9PT1oP2c6ZChqKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1qKCksbj1zKGUpO2lmKGI9YXJndW1lbnRzLHY9dGhpcyx3PWUsbil7aWYodm9pZCAwPT09aClyZXR1cm4gcih3KTtpZihTKXJldHVybiBoPXNldFRpbWVvdXQoZix0KSxpKHcpfXJldHVybiB2b2lkIDA9PT1oJiYoaD1zZXRUaW1lb3V0KGYsdCkpLGd9dmFyIGIsdix5LGcsaCx3LE89MCxNPSExLFM9ITEsXz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoYyk7cmV0dXJuIHQ9YSh0KXx8MCxvKG4pJiYoTT0hIW4ubGVhZGluZyxTPVwibWF4V2FpdFwiaW4gbix5PVM/ayhhKG4ubWF4V2FpdCl8fDAsdCk6eSxfPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOl8pLG0uY2FuY2VsPWwsbS5mbHVzaD1wLG19ZnVuY3Rpb24gbyhlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiBpKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKSl9ZnVuY3Rpb24gcihlKXtyZXR1cm5cInN5bWJvbFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKXx8aShlKSYmdy5jYWxsKGUpPT1mfWZ1bmN0aW9uIGEoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYocihlKSlyZXR1cm4gcztpZihvKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPW8odCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UoZCxcIlwiKTt2YXIgbj1wLnRlc3QoZSk7cmV0dXJuIG58fG0udGVzdChlKT9iKGUuc2xpY2UoMiksbj8yOjgpOmwudGVzdChlKT9zOitlfXZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGM9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIscz1OYU4sZj1cIltvYmplY3QgU3ltYm9sXVwiLGQ9L15cXHMrfFxccyskL2csbD0vXlstK10weFswLTlhLWZdKyQvaSxwPS9eMGJbMDFdKyQvaSxtPS9eMG9bMC03XSskL2ksYj1wYXJzZUludCx2PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOnUodCkpJiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdCx5PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj9cInVuZGVmaW5lZFwiOnUoc2VsZikpJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixnPXZ8fHl8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxoPU9iamVjdC5wcm90b3R5cGUsdz1oLnRvU3RyaW5nLGs9TWF0aC5tYXgseD1NYXRoLm1pbixqPWZ1bmN0aW9uKCl7cmV0dXJuIGcuRGF0ZS5ub3coKX07ZS5leHBvcnRzPW59KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXt2YXIgdD12b2lkIDAsbz12b2lkIDAsaT12b2lkIDA7Zm9yKHQ9MDt0PGUubGVuZ3RoO3QrPTEpe2lmKG89ZVt0XSxvLmRhdGFzZXQmJm8uZGF0YXNldC5hb3MpcmV0dXJuITA7aWYoaT1vLmNoaWxkcmVuJiZuKG8uY2hpbGRyZW4pKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIG8oKXtyZXR1cm4gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuTW96TXV0YXRpb25PYnNlcnZlcn1mdW5jdGlvbiBpKCl7cmV0dXJuISFvKCl9ZnVuY3Rpb24gcihlLHQpe3ZhciBuPXdpbmRvdy5kb2N1bWVudCxpPW8oKSxyPW5ldyBpKGEpO3U9dCxyLm9ic2VydmUobi5kb2N1bWVudEVsZW1lbnQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwLHJlbW92ZWROb2RlczohMH0pfWZ1bmN0aW9uIGEoZSl7ZSYmZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUuYWRkZWROb2Rlcyksbz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLnJlbW92ZWROb2RlcyksaT10LmNvbmNhdChvKTtpZihuKGkpKXJldHVybiB1KCl9KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgdT1mdW5jdGlvbigpe307dC5kZWZhdWx0PXtpc1N1cHBvcnRlZDppLHJlYWR5OnJ9fSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIG8oKXtyZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhfHxcIlwifU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCkscj0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2ksYT0vMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSx1PS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaSxjPS8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7bih0aGlzLGUpfXJldHVybiBpKGUsW3trZXk6XCJwaG9uZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bygpO3JldHVybiEoIXIudGVzdChlKSYmIWEudGVzdChlLnN1YnN0cigwLDQpKSl9fSx7a2V5OlwibW9iaWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1vKCk7cmV0dXJuISghdS50ZXN0KGUpJiYhYy50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJ0YWJsZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vYmlsZSgpJiYhdGhpcy5waG9uZSgpfX1dKSxlfSgpO3QuZGVmYXVsdD1uZXcgc30sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlLHQsbil7dmFyIG89ZS5ub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLW9uY2VcIik7dD5lLnBvc2l0aW9uP2Uubm9kZS5jbGFzc0xpc3QuYWRkKFwiYW9zLWFuaW1hdGVcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG8mJihcImZhbHNlXCI9PT1vfHwhbiYmXCJ0cnVlXCIhPT1vKSYmZS5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhb3MtYW5pbWF0ZVwiKX0sbz1mdW5jdGlvbihlLHQpe3ZhciBvPXdpbmRvdy5wYWdlWU9mZnNldCxpPXdpbmRvdy5pbm5lckhlaWdodDtlLmZvckVhY2goZnVuY3Rpb24oZSxyKXtuKGUsaStvLHQpfSl9O3QuZGVmYXVsdD1vfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9bigxMikscj1vKGkpLGE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUsbil7ZS5ub2RlLmNsYXNzTGlzdC5hZGQoXCJhb3MtaW5pdFwiKSxlLnBvc2l0aW9uPSgwLHIuZGVmYXVsdCkoZS5ub2RlLHQub2Zmc2V0KX0pLGV9O3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9bigxMykscj1vKGkpLGE9ZnVuY3Rpb24oZSx0KXt2YXIgbj0wLG89MCxpPXdpbmRvdy5pbm5lckhlaWdodCxhPXtvZmZzZXQ6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1vZmZzZXRcIiksYW5jaG9yOmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtYW5jaG9yXCIpLGFuY2hvclBsYWNlbWVudDplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnRcIil9O3N3aXRjaChhLm9mZnNldCYmIWlzTmFOKGEub2Zmc2V0KSYmKG89cGFyc2VJbnQoYS5vZmZzZXQpKSxhLmFuY2hvciYmZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLmFuY2hvcikmJihlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYS5hbmNob3IpWzBdKSxuPSgwLHIuZGVmYXVsdCkoZSkudG9wLGEuYW5jaG9yUGxhY2VtZW50KXtjYXNlXCJ0b3AtYm90dG9tXCI6YnJlYWs7Y2FzZVwiY2VudGVyLWJvdHRvbVwiOm4rPWUub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwiYm90dG9tLWJvdHRvbVwiOm4rPWUub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2VcInRvcC1jZW50ZXJcIjpuKz1pLzI7YnJlYWs7Y2FzZVwiYm90dG9tLWNlbnRlclwiOm4rPWkvMitlLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJjZW50ZXItY2VudGVyXCI6bis9aS8yK2Uub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwidG9wLXRvcFwiOm4rPWk7YnJlYWs7Y2FzZVwiYm90dG9tLXRvcFwiOm4rPWUub2Zmc2V0SGVpZ2h0K2k7YnJlYWs7Y2FzZVwiY2VudGVyLXRvcFwiOm4rPWUub2Zmc2V0SGVpZ2h0LzIraX1yZXR1cm4gYS5hbmNob3JQbGFjZW1lbnR8fGEub2Zmc2V0fHxpc05hTih0KXx8KG89dCksbitvfTt0LmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7ZSYmIWlzTmFOKGUub2Zmc2V0TGVmdCkmJiFpc05hTihlLm9mZnNldFRvcCk7KXQrPWUub2Zmc2V0TGVmdC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbExlZnQ6MCksbis9ZS5vZmZzZXRUb3AtKFwiQk9EWVwiIT1lLnRhZ05hbWU/ZS5zY3JvbGxUb3A6MCksZT1lLm9mZnNldFBhcmVudDtyZXR1cm57dG9wOm4sbGVmdDp0fX07dC5kZWZhdWx0PW59LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSl7cmV0dXJuIGU9ZXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFvc11cIiksQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGUsZnVuY3Rpb24oZSl7cmV0dXJue25vZGU6ZX19KX07dC5kZWZhdWx0PW59XSl9KTsiLCIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuOC4xXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcblxuICAgICAgICBfLmJ1aWxkRG90cygpO1xuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuXG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcblxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG5cbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xuXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XG5cbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcbiAgICAgICAgICAgIGNvZWY7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICAgICBudW1Eb3RHcm91cHMgPSBNYXRoLmNlaWwoXy5zbGlkZUNvdW50IC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyksXG4gICAgICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcbiAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTbGlkZUluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXNbaV07XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KCkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgbWFwcGVkU2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuZXEoXy5jdXJyZW50U2xpZGUpLmZpbmQoJ2J1dHRvbicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICAgICAgfSkuZW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpPV8uY3VycmVudFNsaWRlLCBtYXg9aStfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHJhbmdlU3RhcnQgLSAxLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEocHJldlNsaWRlKSk7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uaW5pdFVJKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XG5cbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XG5cbiAgICAgICAgdHJ5Q291bnQgPSB0cnlDb3VudCB8fCAxO1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICRpbWdzVG9Mb2FkID0gJCggJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyICksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxuICAgICAgICAgICAgaW1hZ2VTcmNTZXQsXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XG5cbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBpbWFnZVNpemVzICA9IGltYWdlLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG5cbiAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuICAgICAgICBfLmJ1aWxkRG90cygpO1xuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xuICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcblxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xuXG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XG5cbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xuXG4gICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcblxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XG5cbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAncmVzcG9uc2l2ZScgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlID0gWyB2YWx1ZVtpdGVtXSBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXNwb25zaXZlIG9iamVjdCBhbmQgc3BsaWNlIG91dCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgXy5zZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNldENTUyhfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XG5cbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5tc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmZhZGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW8tdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1vei10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy13ZWJraXQtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1zLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgXy50cmFuc2Zvcm1zRW5hYmxlZCA9IF8ub3B0aW9ucy51c2VUcmFuc2Zvcm0gJiYgKF8uYW5pbVR5cGUgIT09IG51bGwgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpO1xuICAgIH07XG5cblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xuXG4gICAgICAgIGFsbFNsaWRlcyA9IF8uJHNsaWRlclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJyB8fCBfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlID49IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XG4gICAgICAgIH1cblxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JlZm9yZUNoYW5nZScsIFtfLCBfLmN1cnJlbnRTbGlkZSwgYW5pbVNsaWRlXSk7XG5cbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBhbmltU2xpZGU7XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xuXG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBfLmdldE5hdlRhcmdldCgpO1xuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xuXG4gICAgICAgICAgICBpZiAoIG5hdlRhcmdldC5zbGlkZUNvdW50IDw9IG5hdlRhcmdldC5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlT3V0KG9sZFNsaWRlKTtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5zY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcblxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXztcbiAgICB9O1xuXG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoJy5jLWFjY29yZGlvbi0tZXhwYW5kJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAkKCcuYy1hY2NvcmRpb25fX2J0bicpLmh0bWwoJzxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1kb3duIGZhLXhzXCI+PC9pPjwvc3Bhbj4nKVxuICAkKCcuYy1hY2NvcmRpb25fX2JvZHk6dmlzaWJsZScpLnNsaWRlVXAoKVxuICBpZiAoISQodGhpcykubmV4dCgpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKDIwMClcbiAgICAkKHRoaXMpLmZpbmQoJy5jLWFjY29yZGlvbl9fYnRuJykuaHRtbCgnPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXVwIGZhLXhzXCI+PC9pPjwvc3Bhbj4nKVxuICB9XG59KVxuIiwiLy8gbnBtIGluc3RhbGwgYW9zIC0tc2F2ZVxuaW1wb3J0IEFPUyBmcm9tICdhb3MnXG5cbi8vIFlvdSBjYW4gYWxzbyBwYXNzIGFuIG9wdGlvbmFsIHNldHRpbmdzIG9iamVjdFxuLy8gYmVsb3cgbGlzdGVkIGRlZmF1bHQgc2V0dGluZ3NcbkFPUy5pbml0KHtcbiAgLy8gR2xvYmFsIHNldHRpbmdzOlxuICBkaXNhYmxlOiBmYWxzZSwgLy8gYWNjZXB0cyBmb2xsb3dpbmcgdmFsdWVzOiAncGhvbmUnLCAndGFibGV0JywgJ21vYmlsZScsIGJvb2xlYW4sIGV4cHJlc3Npb24gb3IgZnVuY3Rpb25cbiAgc3RhcnRFdmVudDogJ0RPTUNvbnRlbnRMb2FkZWQnLCAvLyBuYW1lIG9mIHRoZSBldmVudCBkaXNwYXRjaGVkIG9uIHRoZSBkb2N1bWVudCwgdGhhdCBBT1Mgc2hvdWxkIGluaXRpYWxpemUgb25cbiAgaW5pdENsYXNzTmFtZTogJ2Fvcy1pbml0JywgLy8gY2xhc3MgYXBwbGllZCBhZnRlciBpbml0aWFsaXphdGlvblxuICBhbmltYXRlZENsYXNzTmFtZTogJ2Fvcy1hbmltYXRlJywgLy8gY2xhc3MgYXBwbGllZCBvbiBhbmltYXRpb25cbiAgdXNlQ2xhc3NOYW1lczogZmFsc2UsIC8vIGlmIHRydWUsIHdpbGwgYWRkIGNvbnRlbnQgb2YgYGRhdGEtYW9zYCBhcyBjbGFzc2VzIG9uIHNjcm9sbFxuICBkaXNhYmxlTXV0YXRpb25PYnNlcnZlcjogZmFsc2UsIC8vIGRpc2FibGVzIGF1dG9tYXRpYyBtdXRhdGlvbnMnIGRldGVjdGlvbnMgKGFkdmFuY2VkKVxuICBkZWJvdW5jZURlbGF5OiA1MCwgLy8gdGhlIGRlbGF5IG9uIGRlYm91bmNlIHVzZWQgd2hpbGUgcmVzaXppbmcgd2luZG93IChhZHZhbmNlZClcbiAgdGhyb3R0bGVEZWxheTogOTksIC8vIHRoZSBkZWxheSBvbiB0aHJvdHRsZSB1c2VkIHdoaWxlIHNjcm9sbGluZyB0aGUgcGFnZSAoYWR2YW5jZWQpXG5cbiAgLy8gU2V0dGluZ3MgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBvbiBwZXItZWxlbWVudCBiYXNpcywgYnkgYGRhdGEtYW9zLSpgIGF0dHJpYnV0ZXM6XG4gIG9mZnNldDogMTIwLCAvLyBvZmZzZXQgKGluIHB4KSBmcm9tIHRoZSBvcmlnaW5hbCB0cmlnZ2VyIHBvaW50XG4gIGRlbGF5OiAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXG4gIGR1cmF0aW9uOiA0MDAsIC8vIHZhbHVlcyBmcm9tIDAgdG8gMzAwMCwgd2l0aCBzdGVwIDUwbXNcbiAgZWFzaW5nOiAnZWFzZScsIC8vIGRlZmF1bHQgZWFzaW5nIGZvciBBT1MgYW5pbWF0aW9uc1xuICBvbmNlOiBmYWxzZSwgLy8gd2hldGhlciBhbmltYXRpb24gc2hvdWxkIGhhcHBlbiBvbmx5IG9uY2UgLSB3aGlsZSBzY3JvbGxpbmcgZG93blxuICBtaXJyb3I6IGZhbHNlLCAvLyB3aGV0aGVyIGVsZW1lbnRzIHNob3VsZCBhbmltYXRlIG91dCB3aGlsZSBzY3JvbGxpbmcgcGFzdCB0aGVtXG4gIGFuY2hvclBsYWNlbWVudDogJ3RvcC1ib3R0b20nIC8vIGRlZmluZXMgd2hpY2ggcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgcmVnYXJkaW5nIHRvIHdpbmRvdyBzaG91bGQgdHJpZ2dlciB0aGUgYW5pbWF0aW9uXG5cbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoZnVuY3Rpb24gKCkge1xuICB2YXIgaXNPcGVuID0gMFxuICAkKCcub3BlbmJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNPcGVuID09PSAwKSB7XG4gICAgICBvcGVuTmF2KClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VOYXYoKVxuICAgIH1cbiAgfSlcbiAgJCgnLmNsb3NlYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlTmF2KClcbiAgfSlcblxuICBmdW5jdGlvbiBvcGVuTmF2ICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlOYXYnKS5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgIGlzT3BlbiA9IDFcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTmF2ICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlOYXYnKS5zdHlsZS53aWR0aCA9ICcwJSdcbiAgICBpc09wZW4gPSAwXG4gIH1cbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignbW91c2VlbnRlcicsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnb3BlbicpXG4gIGNvbnNvbGUubG9nKCdtb3VzZSBlbnRlcicpXG59KS5vbignbW91c2VsZWF2ZScsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb3BlbicpXG59KVxuXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ2NsaWNrJywgJy5tZW51IC5tZW51LWJ1dHRvbicsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KVxuICBsZXQgbWVudV9saW5rID0gbWVudV9idXR0b24ucGFyZW50KClcbiAgbGV0IG1lbnVfaXRlbSA9IG1lbnVfbGluay5wYXJlbnQoKVxuICBpZiAobWVudV9pdGVtLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICBtZW51X2l0ZW0uYWRkKG1lbnVfaXRlbS5maW5kKCcubWVudS1pdGVtLm9wZW4nKSkucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIG1lbnVfbGluay5hZGQobWVudV9pdGVtLmZpbmQoJ2EnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgfSBlbHNlIHtcbiAgICBtZW51X2l0ZW0uc2libGluZ3MoJy5vcGVuJykuZmluZCgnPmE+Lm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuICAgIG1lbnVfaXRlbS5hZGRDbGFzcygnb3BlbicpXG4gICAgbWVudV9saW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcbiAgfVxufSlcblxuJChkb2N1bWVudCkuY2xpY2soKGUpID0+IHtcbiAgaWYgKCQoJy5tZW51LWl0ZW0ub3BlbicpLmxlbmd0aCkge1xuICAgICQoJy5tZW51ID4gLm1lbnUtaXRlbS5vcGVuID4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJylcbiAgfVxufSkiLCJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcuYy1zZWFyY2hfX2J0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuYy1oZWFkZXItc2VhcmNoLWZvcm0nKS50b2dnbGUoKVxuICB9KVxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnXG5cbiQoJy5zbGlkZXItZG90cycpLnNsaWNrKHtcbiAgbGF6eUxvYWQ6ICdwcm9ncmVzc2l2ZScsXG4gIGluZmluaXRlOiB0cnVlLFxuICBkb3RzOiB0cnVlLFxuICBhcnJvd3M6IGZhbHNlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgZmFkZTogdHJ1ZSxcbiAgc3BlZWQ6IDMwMDBcbn0pXG5cbiQoJy5jLXNsaWRlci0tYXJyb3dzLWluc2lkZScpLnNsaWNrKHtcbiAgaW5maW5pdGU6IHRydWUsXG4gIGFycm93czogdHJ1ZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gIGZhZGU6IHRydWUsXG4gIHNwZWVkOiAxMDAwLFxuICBuZXh0QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLW5leHQtaW5zaWRlXCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+JyxcbiAgcHJldkFycm93OiAnPGEgY2xhc3M9XCJzbGljay1wcmV2LWluc2lkZVwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9hPidcbn0pXG5cbiQoJy5jLXNsaWRlci0tYXJyb3dzLW91dHNpZGUnKS5zbGljayh7XG4gIGluZmluaXRlOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBmYWRlOiB0cnVlLFxuICBzcGVlZDogMTAwMCxcbiAgbmV4dEFycm93OiAnPGEgY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+JyxcbiAgcHJldkFycm93OiAnPGEgY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2E+J1xufSlcblxuJCgnLmMtc2xpZGVyLS1vdmVyZmxvdycpLnNsaWNrKHtcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxuICBzbGlkZXNUb1Nob3c6IDMsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBhcnJvd3M6IGZhbHNlLFxuICBkb3RzOiB0cnVlLFxuICByZXNwb25zaXZlOiBbXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICB9XG4gICAgfVxuICBdXG59KVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9oYW1idXJnZXItbmF2J1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJ1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCdcbmltcG9ydCAnLi9jb21wb25lbnRzL2FvcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2FjY29yZGlvbidcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlcidcbmltcG9ydCAnLi9jb21wb25lbnRzL3NlYXJjaC1mb3JtJ1xuLy8gaW1wb3J0IHdlYnBhY2tTdHJlYW0gZnJvbSAnd2VicGFjay1zdHJlYW0nXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgJCgnLmMtcG9zdF9fZ2FsbGVyeScpLnNsaWNrKHtcbiAgICAnYXJyb3dzJzogZmFsc2UsXG4gICAgJ2FkYXB0aXZlSGVpZ2h0JzogdHJ1ZVxuICB9KVxuXG4gICQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpXG4gIGlmICh3cC5jdXN0b21pemUgJiYgd3AuY3VzdG9taXplLnNlbGVjdGl2ZVJlZnJlc2gpIHtcbiAgICB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaC5iaW5kKCdwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWQnLCAocGxhY2VtZW50KSA9PiB7XG4gICAgICBpZiAocGxhY2VtZW50LnBhcnRpYWwud2lkZ2V0SWRQYXJ0cyAmJiBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzLmlkQmFzZSA9PT0gJ190aGVtZW5hbWVfbW9zdF9yZWNlbnRfd2lkZ2V0Jykge1xuICAgICAgICBwbGFjZW1lbnQuY29udGFpbmVyLmZpbmQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcblxuJChmdW5jdGlvbiAoJCkge1xuICB2YXIgc2l0ZU5hdmlnYXRpb24gPSAkKCcubmF2aWdhdGlvbi1tYWluJylcbiAgXG4gIHNpdGVOYXZpZ2F0aW9uLmZpbmQoJ2EnKS5vbignZm9jdXMgYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnBhcmVudHMoJ2xpJykudG9nZ2xlQ2xhc3MoJ2ZvY3VzJylcbiAgfSlcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9