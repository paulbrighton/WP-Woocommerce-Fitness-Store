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

/***/ "./node_modules/jquery-confirm/dist/jquery-confirm.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/jquery-confirm/dist/jquery-confirm.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jquery-confirm v3.3.4 (http://craftpip.github.io/jquery-confirm/)
 * Author: Boniface Pereira
 * Website: www.craftpip.com
 * Contact: hey@craftpip.com
 *
 * Copyright 2013-2019 jquery-confirm
 * Licensed under MIT (https://github.com/craftpip/jquery-confirm/blob/master/LICENSE)
 */
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var w = window;

  $.fn.confirm = function (options, option2) {
    if (typeof options === "undefined") {
      options = {};
    }

    if (typeof options === "string") {
      options = {
        content: options,
        title: option2 ? option2 : false
      };
    }

    $(this).each(function () {
      var $this = $(this);

      if ($this.attr("jc-attached")) {
        console.warn("jConfirm has already been attached to this element ", $this[0]);
        return;
      }

      $this.on("click", function (e) {
        e.preventDefault();
        var jcOption = $.extend({}, options);

        if ($this.attr("data-title")) {
          jcOption.title = $this.attr("data-title");
        }

        if ($this.attr("data-content")) {
          jcOption.content = $this.attr("data-content");
        }

        if (typeof jcOption.buttons === "undefined") {
          jcOption.buttons = {};
        }

        jcOption["$target"] = $this;

        if ($this.attr("href") && Object.keys(jcOption.buttons).length === 0) {
          var buttons = $.extend(true, {}, w.jconfirm.pluginDefaults.defaultButtons, (w.jconfirm.defaults || {}).defaultButtons || {});
          var firstBtn = Object.keys(buttons)[0];
          jcOption.buttons = buttons;

          jcOption.buttons[firstBtn].action = function () {
            location.href = $this.attr("href");
          };
        }

        jcOption.closeIcon = false;
        var instance = $.confirm(jcOption);
      });
      $this.attr("jc-attached", true);
    });
    return $(this);
  };

  $.confirm = function (options, option2) {
    if (typeof options === "undefined") {
      options = {};
    }

    if (typeof options === "string") {
      options = {
        content: options,
        title: option2 ? option2 : false
      };
    }

    var putDefaultButtons = !(options.buttons === false);

    if (_typeof(options.buttons) !== "object") {
      options.buttons = {};
    }

    if (Object.keys(options.buttons).length === 0 && putDefaultButtons) {
      var buttons = $.extend(true, {}, w.jconfirm.pluginDefaults.defaultButtons, (w.jconfirm.defaults || {}).defaultButtons || {});
      options.buttons = buttons;
    }

    return w.jconfirm(options);
  };

  $.alert = function (options, option2) {
    if (typeof options === "undefined") {
      options = {};
    }

    if (typeof options === "string") {
      options = {
        content: options,
        title: option2 ? option2 : false
      };
    }

    var putDefaultButtons = !(options.buttons === false);

    if (_typeof(options.buttons) !== "object") {
      options.buttons = {};
    }

    if (Object.keys(options.buttons).length === 0 && putDefaultButtons) {
      var buttons = $.extend(true, {}, w.jconfirm.pluginDefaults.defaultButtons, (w.jconfirm.defaults || {}).defaultButtons || {});
      var firstBtn = Object.keys(buttons)[0];
      options.buttons[firstBtn] = buttons[firstBtn];
    }

    return w.jconfirm(options);
  };

  $.dialog = function (options, option2) {
    if (typeof options === "undefined") {
      options = {};
    }

    if (typeof options === "string") {
      options = {
        content: options,
        title: option2 ? option2 : false,
        closeIcon: function closeIcon() {}
      };
    }

    options.buttons = {};

    if (typeof options.closeIcon === "undefined") {
      options.closeIcon = function () {};
    }

    options.confirmKeys = [13];
    return w.jconfirm(options);
  };

  w.jconfirm = function (options) {
    if (typeof options === "undefined") {
      options = {};
    }

    var pluginOptions = $.extend(true, {}, w.jconfirm.pluginDefaults);

    if (w.jconfirm.defaults) {
      pluginOptions = $.extend(true, pluginOptions, w.jconfirm.defaults);
    }

    pluginOptions = $.extend(true, {}, pluginOptions, options);
    var instance = new w.Jconfirm(pluginOptions);
    w.jconfirm.instances.push(instance);
    return instance;
  };

  w.Jconfirm = function (options) {
    $.extend(this, options);

    this._init();
  };

  w.Jconfirm.prototype = {
    _init: function _init() {
      var that = this;

      if (!w.jconfirm.instances.length) {
        w.jconfirm.lastFocused = $("body").find(":focus");
      }

      this._id = Math.round(Math.random() * 99999);
      this.contentParsed = $(document.createElement("div"));

      if (!this.lazyOpen) {
        setTimeout(function () {
          that.open();
        }, 0);
      }
    },
    _buildHTML: function _buildHTML() {
      var that = this;

      this._parseAnimation(this.animation, "o");

      this._parseAnimation(this.closeAnimation, "c");

      this._parseBgDismissAnimation(this.backgroundDismissAnimation);

      this._parseColumnClass(this.columnClass);

      this._parseTheme(this.theme);

      this._parseType(this.type);

      var template = $(this.template);
      template.find(".jconfirm-box").addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed);

      if (this.typeAnimated) {
        template.find(".jconfirm-box").addClass("jconfirm-type-animated");
      }

      if (this.useBootstrap) {
        template.find(".jc-bs3-row").addClass(this.bootstrapClasses.row);
        template.find(".jc-bs3-row").addClass("justify-content-md-center justify-content-sm-center justify-content-xs-center justify-content-lg-center");
        template.find(".jconfirm-box-container").addClass(this.columnClassParsed);

        if (this.containerFluid) {
          template.find(".jc-bs3-container").addClass(this.bootstrapClasses.containerFluid);
        } else {
          template.find(".jc-bs3-container").addClass(this.bootstrapClasses.container);
        }
      } else {
        template.find(".jconfirm-box").css("width", this.boxWidth);
      }

      if (this.titleClass) {
        template.find(".jconfirm-title-c").addClass(this.titleClass);
      }

      template.addClass(this.themeParsed);
      var ariaLabel = "jconfirm-box" + this._id;
      template.find(".jconfirm-box").attr("aria-labelledby", ariaLabel).attr("tabindex", -1);
      template.find(".jconfirm-content").attr("id", ariaLabel);

      if (this.bgOpacity !== null) {
        template.find(".jconfirm-bg").css("opacity", this.bgOpacity);
      }

      if (this.rtl) {
        template.addClass("jconfirm-rtl");
      }

      this.$el = template.appendTo(this.container);
      this.$jconfirmBoxContainer = this.$el.find(".jconfirm-box-container");
      this.$jconfirmBox = this.$body = this.$el.find(".jconfirm-box");
      this.$jconfirmBg = this.$el.find(".jconfirm-bg");
      this.$title = this.$el.find(".jconfirm-title");
      this.$titleContainer = this.$el.find(".jconfirm-title-c");
      this.$content = this.$el.find("div.jconfirm-content");
      this.$contentPane = this.$el.find(".jconfirm-content-pane");
      this.$icon = this.$el.find(".jconfirm-icon-c");
      this.$closeIcon = this.$el.find(".jconfirm-closeIcon");
      this.$holder = this.$el.find(".jconfirm-holder");
      this.$btnc = this.$el.find(".jconfirm-buttons");
      this.$scrollPane = this.$el.find(".jconfirm-scrollpane");
      that.setStartingPoint();
      this._contentReady = $.Deferred();
      this._modalReady = $.Deferred();
      this.$holder.css({
        "padding-top": this.offsetTop,
        "padding-bottom": this.offsetBottom
      });
      this.setTitle();
      this.setIcon();

      this._setButtons();

      this._parseContent();

      this.initDraggable();

      if (this.isAjax) {
        this.showLoading(false);
      }

      $.when(this._contentReady, this._modalReady).then(function () {
        if (that.isAjaxLoading) {
          setTimeout(function () {
            that.isAjaxLoading = false;
            that.setContent();
            that.setTitle();
            that.setIcon();
            setTimeout(function () {
              that.hideLoading(false);

              that._updateContentMaxHeight();
            }, 100);

            if (typeof that.onContentReady === "function") {
              that.onContentReady();
            }
          }, 50);
        } else {
          that._updateContentMaxHeight();

          that.setTitle();
          that.setIcon();

          if (typeof that.onContentReady === "function") {
            that.onContentReady();
          }
        }

        if (that.autoClose) {
          that._startCountDown();
        }
      }).then(function () {
        that._watchContent();
      });

      if (this.animation === "none") {
        this.animationSpeed = 1;
        this.animationBounce = 1;
      }

      this.$body.css(this._getCSS(this.animationSpeed, this.animationBounce));
      this.$contentPane.css(this._getCSS(this.animationSpeed, 1));
      this.$jconfirmBg.css(this._getCSS(this.animationSpeed, 1));
      this.$jconfirmBoxContainer.css(this._getCSS(this.animationSpeed, 1));
    },
    _typePrefix: "jconfirm-type-",
    typeParsed: "",
    _parseType: function _parseType(type) {
      this.typeParsed = this._typePrefix + type;
    },
    setType: function setType(type) {
      var oldClass = this.typeParsed;

      this._parseType(type);

      this.$jconfirmBox.removeClass(oldClass).addClass(this.typeParsed);
    },
    themeParsed: "",
    _themePrefix: "jconfirm-",
    setTheme: function setTheme(theme) {
      var previous = this.theme;
      this.theme = theme || this.theme;

      this._parseTheme(this.theme);

      if (previous) {
        this.$el.removeClass(previous);
      }

      this.$el.addClass(this.themeParsed);
      this.theme = theme;
    },
    _parseTheme: function _parseTheme(theme) {
      var that = this;
      theme = theme.split(",");
      $.each(theme, function (k, a) {
        if (a.indexOf(that._themePrefix) === -1) {
          theme[k] = that._themePrefix + $.trim(a);
        }
      });
      this.themeParsed = theme.join(" ").toLowerCase();
    },
    backgroundDismissAnimationParsed: "",
    _bgDismissPrefix: "jconfirm-hilight-",
    _parseBgDismissAnimation: function _parseBgDismissAnimation(bgDismissAnimation) {
      var animation = bgDismissAnimation.split(",");
      var that = this;
      $.each(animation, function (k, a) {
        if (a.indexOf(that._bgDismissPrefix) === -1) {
          animation[k] = that._bgDismissPrefix + $.trim(a);
        }
      });
      this.backgroundDismissAnimationParsed = animation.join(" ").toLowerCase();
    },
    animationParsed: "",
    closeAnimationParsed: "",
    _animationPrefix: "jconfirm-animation-",
    setAnimation: function setAnimation(animation) {
      this.animation = animation || this.animation;

      this._parseAnimation(this.animation, "o");
    },
    _parseAnimation: function _parseAnimation(animation, which) {
      which = which || "o";
      var animations = animation.split(",");
      var that = this;
      $.each(animations, function (k, a) {
        if (a.indexOf(that._animationPrefix) === -1) {
          animations[k] = that._animationPrefix + $.trim(a);
        }
      });
      var a_string = animations.join(" ").toLowerCase();

      if (which === "o") {
        this.animationParsed = a_string;
      } else {
        this.closeAnimationParsed = a_string;
      }

      return a_string;
    },
    setCloseAnimation: function setCloseAnimation(closeAnimation) {
      this.closeAnimation = closeAnimation || this.closeAnimation;

      this._parseAnimation(this.closeAnimation, "c");
    },
    setAnimationSpeed: function setAnimationSpeed(speed) {
      this.animationSpeed = speed || this.animationSpeed;
    },
    columnClassParsed: "",
    setColumnClass: function setColumnClass(colClass) {
      if (!this.useBootstrap) {
        console.warn("cannot set columnClass, useBootstrap is set to false");
        return;
      }

      this.columnClass = colClass || this.columnClass;

      this._parseColumnClass(this.columnClass);

      this.$jconfirmBoxContainer.addClass(this.columnClassParsed);
    },
    _updateContentMaxHeight: function _updateContentMaxHeight() {
      var height = $(window).height() - (this.$jconfirmBox.outerHeight() - this.$contentPane.outerHeight()) - (this.offsetTop + this.offsetBottom);
      this.$contentPane.css({
        "max-height": height + "px"
      });
    },
    setBoxWidth: function setBoxWidth(width) {
      if (this.useBootstrap) {
        console.warn("cannot set boxWidth, useBootstrap is set to true");
        return;
      }

      this.boxWidth = width;
      this.$jconfirmBox.css("width", width);
    },
    _parseColumnClass: function _parseColumnClass(colClass) {
      colClass = colClass.toLowerCase();
      var p;

      switch (colClass) {
        case "xl":
        case "xlarge":
          p = "col-md-12";
          break;

        case "l":
        case "large":
          p = "col-md-8 col-md-offset-2";
          break;

        case "m":
        case "medium":
          p = "col-md-6 col-md-offset-3";
          break;

        case "s":
        case "small":
          p = "col-md-4 col-md-offset-4";
          break;

        case "xs":
        case "xsmall":
          p = "col-md-2 col-md-offset-5";
          break;

        default:
          p = colClass;
      }

      this.columnClassParsed = p;
    },
    initDraggable: function initDraggable() {
      var that = this;
      var $t = this.$titleContainer;
      this.resetDrag();

      if (this.draggable) {
        $t.on("mousedown", function (e) {
          $t.addClass("jconfirm-hand");
          that.mouseX = e.clientX;
          that.mouseY = e.clientY;
          that.isDrag = true;
        });
        $(window).on("mousemove." + this._id, function (e) {
          if (that.isDrag) {
            that.movingX = e.clientX - that.mouseX + that.initialX;
            that.movingY = e.clientY - that.mouseY + that.initialY;
            that.setDrag();
          }
        });
        $(window).on("mouseup." + this._id, function () {
          $t.removeClass("jconfirm-hand");

          if (that.isDrag) {
            that.isDrag = false;
            that.initialX = that.movingX;
            that.initialY = that.movingY;
          }
        });
      }
    },
    resetDrag: function resetDrag() {
      this.isDrag = false;
      this.initialX = 0;
      this.initialY = 0;
      this.movingX = 0;
      this.movingY = 0;
      this.mouseX = 0;
      this.mouseY = 0;
      this.$jconfirmBoxContainer.css("transform", "translate(" + 0 + "px, " + 0 + "px)");
    },
    setDrag: function setDrag() {
      if (!this.draggable) {
        return;
      }

      this.alignMiddle = false;
      var boxWidth = this.$jconfirmBox.outerWidth();
      var boxHeight = this.$jconfirmBox.outerHeight();
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var that = this;
      var dragUpdate = 1;

      if (that.movingX % dragUpdate === 0 || that.movingY % dragUpdate === 0) {
        if (that.dragWindowBorder) {
          var leftDistance = windowWidth / 2 - boxWidth / 2;
          var topDistance = windowHeight / 2 - boxHeight / 2;
          topDistance -= that.dragWindowGap;
          leftDistance -= that.dragWindowGap;

          if (leftDistance + that.movingX < 0) {
            that.movingX = -leftDistance;
          } else {
            if (leftDistance - that.movingX < 0) {
              that.movingX = leftDistance;
            }
          }

          if (topDistance + that.movingY < 0) {
            that.movingY = -topDistance;
          } else {
            if (topDistance - that.movingY < 0) {
              that.movingY = topDistance;
            }
          }
        }

        that.$jconfirmBoxContainer.css("transform", "translate(" + that.movingX + "px, " + that.movingY + "px)");
      }
    },
    _scrollTop: function _scrollTop() {
      if (typeof pageYOffset !== "undefined") {
        return pageYOffset;
      } else {
        var B = document.body;
        var D = document.documentElement;
        D = D.clientHeight ? D : B;
        return D.scrollTop;
      }
    },
    _watchContent: function _watchContent() {
      var that = this;

      if (this._timer) {
        clearInterval(this._timer);
      }

      var prevContentHeight = 0;
      this._timer = setInterval(function () {
        if (that.smoothContent) {
          var contentHeight = that.$content.outerHeight() || 0;

          if (contentHeight !== prevContentHeight) {
            prevContentHeight = contentHeight;
          }

          var wh = $(window).height();
          var total = that.offsetTop + that.offsetBottom + that.$jconfirmBox.height() - that.$contentPane.height() + that.$content.height();

          if (total < wh) {
            that.$contentPane.addClass("no-scroll");
          } else {
            that.$contentPane.removeClass("no-scroll");
          }
        }
      }, this.watchInterval);
    },
    _overflowClass: "jconfirm-overflow",
    _hilightAnimating: false,
    highlight: function highlight() {
      this.hiLightModal();
    },
    hiLightModal: function hiLightModal() {
      var that = this;

      if (this._hilightAnimating) {
        return;
      }

      that.$body.addClass("hilight");
      var duration = parseFloat(that.$body.css("animation-duration")) || 2;
      this._hilightAnimating = true;
      setTimeout(function () {
        that._hilightAnimating = false;
        that.$body.removeClass("hilight");
      }, duration * 1000);
    },
    _bindEvents: function _bindEvents() {
      var that = this;
      this.boxClicked = false;
      this.$scrollPane.click(function (e) {
        if (!that.boxClicked) {
          var buttonName = false;
          var shouldClose = false;
          var str;

          if (typeof that.backgroundDismiss === "function") {
            str = that.backgroundDismiss();
          } else {
            str = that.backgroundDismiss;
          }

          if (typeof str === "string" && typeof that.buttons[str] !== "undefined") {
            buttonName = str;
            shouldClose = false;
          } else {
            if (typeof str === "undefined" || !!str === true) {
              shouldClose = true;
            } else {
              shouldClose = false;
            }
          }

          if (buttonName) {
            var btnResponse = that.buttons[buttonName].action.apply(that);
            shouldClose = typeof btnResponse === "undefined" || !!btnResponse;
          }

          if (shouldClose) {
            that.close();
          } else {
            that.hiLightModal();
          }
        }

        that.boxClicked = false;
      });
      this.$jconfirmBox.click(function (e) {
        that.boxClicked = true;
      });
      var isKeyDown = false;
      $(window).on("jcKeyDown." + that._id, function (e) {
        if (!isKeyDown) {
          isKeyDown = true;
        }
      });
      $(window).on("keyup." + that._id, function (e) {
        if (isKeyDown) {
          that.reactOnKey(e);
          isKeyDown = false;
        }
      });
      $(window).on("resize." + this._id, function () {
        that._updateContentMaxHeight();

        setTimeout(function () {
          that.resetDrag();
        }, 100);
      });
    },
    _cubic_bezier: "0.36, 0.55, 0.19",
    _getCSS: function _getCSS(speed, bounce) {
      return {
        "-webkit-transition-duration": speed / 1000 + "s",
        "transition-duration": speed / 1000 + "s",
        "-webkit-transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + bounce + ")",
        "transition-timing-function": "cubic-bezier(" + this._cubic_bezier + ", " + bounce + ")"
      };
    },
    _setButtons: function _setButtons() {
      var that = this;
      var total_buttons = 0;

      if (_typeof(this.buttons) !== "object") {
        this.buttons = {};
      }

      $.each(this.buttons, function (key, button) {
        total_buttons += 1;

        if (typeof button === "function") {
          that.buttons[key] = button = {
            action: button
          };
        }

        that.buttons[key].text = button.text || key;
        that.buttons[key].btnClass = button.btnClass || "btn-default";

        that.buttons[key].action = button.action || function () {};

        that.buttons[key].keys = button.keys || [];
        that.buttons[key].isHidden = button.isHidden || false;
        that.buttons[key].isDisabled = button.isDisabled || false;
        $.each(that.buttons[key].keys, function (i, a) {
          that.buttons[key].keys[i] = a.toLowerCase();
        });
        var button_element = $('<button type="button" class="btn"></button>').html(that.buttons[key].text).addClass(that.buttons[key].btnClass).prop("disabled", that.buttons[key].isDisabled).css("display", that.buttons[key].isHidden ? "none" : "").click(function (e) {
          e.preventDefault();
          var res = that.buttons[key].action.apply(that, [that.buttons[key]]);
          that.onAction.apply(that, [key, that.buttons[key]]);

          that._stopCountDown();

          if (typeof res === "undefined" || res) {
            that.close();
          }
        });
        that.buttons[key].el = button_element;

        that.buttons[key].setText = function (text) {
          button_element.html(text);
        };

        that.buttons[key].addClass = function (className) {
          button_element.addClass(className);
        };

        that.buttons[key].removeClass = function (className) {
          button_element.removeClass(className);
        };

        that.buttons[key].disable = function () {
          that.buttons[key].isDisabled = true;
          button_element.prop("disabled", true);
        };

        that.buttons[key].enable = function () {
          that.buttons[key].isDisabled = false;
          button_element.prop("disabled", false);
        };

        that.buttons[key].show = function () {
          that.buttons[key].isHidden = false;
          button_element.css("display", "");
        };

        that.buttons[key].hide = function () {
          that.buttons[key].isHidden = true;
          button_element.css("display", "none");
        };

        that["$_" + key] = that["$$" + key] = button_element;
        that.$btnc.append(button_element);
      });

      if (total_buttons === 0) {
        this.$btnc.hide();
      }

      if (this.closeIcon === null && total_buttons === 0) {
        this.closeIcon = true;
      }

      if (this.closeIcon) {
        if (this.closeIconClass) {
          var closeHtml = '<i class="' + this.closeIconClass + '"></i>';
          this.$closeIcon.html(closeHtml);
        }

        this.$closeIcon.click(function (e) {
          e.preventDefault();
          var buttonName = false;
          var shouldClose = false;
          var str;

          if (typeof that.closeIcon === "function") {
            str = that.closeIcon();
          } else {
            str = that.closeIcon;
          }

          if (typeof str === "string" && typeof that.buttons[str] !== "undefined") {
            buttonName = str;
            shouldClose = false;
          } else {
            if (typeof str === "undefined" || !!str === true) {
              shouldClose = true;
            } else {
              shouldClose = false;
            }
          }

          if (buttonName) {
            var btnResponse = that.buttons[buttonName].action.apply(that);
            shouldClose = typeof btnResponse === "undefined" || !!btnResponse;
          }

          if (shouldClose) {
            that.close();
          }
        });
        this.$closeIcon.show();
      } else {
        this.$closeIcon.hide();
      }
    },
    setTitle: function setTitle(string, force) {
      force = force || false;

      if (typeof string !== "undefined") {
        if (typeof string === "string") {
          this.title = string;
        } else {
          if (typeof string === "function") {
            if (typeof string.promise === "function") {
              console.error("Promise was returned from title function, this is not supported.");
            }

            var response = string();

            if (typeof response === "string") {
              this.title = response;
            } else {
              this.title = false;
            }
          } else {
            this.title = false;
          }
        }
      }

      if (this.isAjaxLoading && !force) {
        return;
      }

      this.$title.html(this.title || "");
      this.updateTitleContainer();
    },
    setIcon: function setIcon(iconClass, force) {
      force = force || false;

      if (typeof iconClass !== "undefined") {
        if (typeof iconClass === "string") {
          this.icon = iconClass;
        } else {
          if (typeof iconClass === "function") {
            var response = iconClass();

            if (typeof response === "string") {
              this.icon = response;
            } else {
              this.icon = false;
            }
          } else {
            this.icon = false;
          }
        }
      }

      if (this.isAjaxLoading && !force) {
        return;
      }

      this.$icon.html(this.icon ? '<i class="' + this.icon + '"></i>' : "");
      this.updateTitleContainer();
    },
    updateTitleContainer: function updateTitleContainer() {
      if (!this.title && !this.icon) {
        this.$titleContainer.hide();
      } else {
        this.$titleContainer.show();
      }
    },
    setContentPrepend: function setContentPrepend(content, force) {
      if (!content) {
        return;
      }

      this.contentParsed.prepend(content);
    },
    setContentAppend: function setContentAppend(content) {
      if (!content) {
        return;
      }

      this.contentParsed.append(content);
    },
    setContent: function setContent(content, force) {
      force = !!force;
      var that = this;

      if (content) {
        this.contentParsed.html("").append(content);
      }

      if (this.isAjaxLoading && !force) {
        return;
      }

      this.$content.html("");
      this.$content.append(this.contentParsed);
      setTimeout(function () {
        that.$body.find("input[autofocus]:visible:first").focus();
      }, 100);
    },
    loadingSpinner: false,
    showLoading: function showLoading(disableButtons) {
      this.loadingSpinner = true;
      this.$jconfirmBox.addClass("loading");

      if (disableButtons) {
        this.$btnc.find("button").prop("disabled", true);
      }
    },
    hideLoading: function hideLoading(enableButtons) {
      this.loadingSpinner = false;
      this.$jconfirmBox.removeClass("loading");

      if (enableButtons) {
        this.$btnc.find("button").prop("disabled", false);
      }
    },
    ajaxResponse: false,
    contentParsed: "",
    isAjax: false,
    isAjaxLoading: false,
    _parseContent: function _parseContent() {
      var that = this;
      var e = "&nbsp;";

      if (typeof this.content === "function") {
        var res = this.content.apply(this);

        if (typeof res === "string") {
          this.content = res;
        } else {
          if (_typeof(res) === "object" && typeof res.always === "function") {
            this.isAjax = true;
            this.isAjaxLoading = true;
            res.always(function (data, status, xhr) {
              that.ajaxResponse = {
                data: data,
                status: status,
                xhr: xhr
              };

              that._contentReady.resolve(data, status, xhr);

              if (typeof that.contentLoaded === "function") {
                that.contentLoaded(data, status, xhr);
              }
            });
            this.content = e;
          } else {
            this.content = e;
          }
        }
      }

      if (typeof this.content === "string" && this.content.substr(0, 4).toLowerCase() === "url:") {
        this.isAjax = true;
        this.isAjaxLoading = true;
        var u = this.content.substring(4, this.content.length);
        $.get(u).done(function (html) {
          that.contentParsed.html(html);
        }).always(function (data, status, xhr) {
          that.ajaxResponse = {
            data: data,
            status: status,
            xhr: xhr
          };

          that._contentReady.resolve(data, status, xhr);

          if (typeof that.contentLoaded === "function") {
            that.contentLoaded(data, status, xhr);
          }
        });
      }

      if (!this.content) {
        this.content = e;
      }

      if (!this.isAjax) {
        this.contentParsed.html(this.content);
        this.setContent();

        that._contentReady.resolve();
      }
    },
    _stopCountDown: function _stopCountDown() {
      clearInterval(this.autoCloseInterval);

      if (this.$cd) {
        this.$cd.remove();
      }
    },
    _startCountDown: function _startCountDown() {
      var that = this;
      var opt = this.autoClose.split("|");

      if (opt.length !== 2) {
        console.error("Invalid option for autoClose. example 'close|10000'");
        return false;
      }

      var button_key = opt[0];
      var time = parseInt(opt[1]);

      if (typeof this.buttons[button_key] === "undefined") {
        console.error("Invalid button key '" + button_key + "' for autoClose");
        return false;
      }

      var seconds = Math.ceil(time / 1000);
      this.$cd = $('<span class="countdown"> (' + seconds + ")</span>").appendTo(this["$_" + button_key]);
      this.autoCloseInterval = setInterval(function () {
        that.$cd.html(" (" + (seconds -= 1) + ") ");

        if (seconds <= 0) {
          that["$$" + button_key].trigger("click");

          that._stopCountDown();
        }
      }, 1000);
    },
    _getKey: function _getKey(key) {
      switch (key) {
        case 192:
          return "tilde";

        case 13:
          return "enter";

        case 16:
          return "shift";

        case 9:
          return "tab";

        case 20:
          return "capslock";

        case 17:
          return "ctrl";

        case 91:
          return "win";

        case 18:
          return "alt";

        case 27:
          return "esc";

        case 32:
          return "space";
      }

      var initial = String.fromCharCode(key);

      if (/^[A-z0-9]+$/.test(initial)) {
        return initial.toLowerCase();
      } else {
        return false;
      }
    },
    reactOnKey: function reactOnKey(e) {
      var that = this;
      var a = $(".jconfirm");

      if (a.eq(a.length - 1)[0] !== this.$el[0]) {
        return false;
      }

      var key = e.which;

      if (this.$content.find(":input").is(":focus") && /13|32/.test(key)) {
        return false;
      }

      var keyChar = this._getKey(key);

      if (keyChar === "esc" && this.escapeKey) {
        if (this.escapeKey === true) {
          this.$scrollPane.trigger("click");
        } else {
          if (typeof this.escapeKey === "string" || typeof this.escapeKey === "function") {
            var buttonKey;

            if (typeof this.escapeKey === "function") {
              buttonKey = this.escapeKey();
            } else {
              buttonKey = this.escapeKey;
            }

            if (buttonKey) {
              if (typeof this.buttons[buttonKey] === "undefined") {
                console.warn("Invalid escapeKey, no buttons found with key " + buttonKey);
              } else {
                this["$_" + buttonKey].trigger("click");
              }
            }
          }
        }
      }

      $.each(this.buttons, function (key, button) {
        if (button.keys.indexOf(keyChar) !== -1) {
          that["$_" + key].trigger("click");
        }
      });
    },
    setDialogCenter: function setDialogCenter() {
      console.info("setDialogCenter is deprecated, dialogs are centered with CSS3 tables");
    },
    _unwatchContent: function _unwatchContent() {
      clearInterval(this._timer);
    },
    close: function close(onClosePayload) {
      var that = this;

      if (typeof this.onClose === "function") {
        this.onClose(onClosePayload);
      }

      this._unwatchContent();

      $(window).unbind("resize." + this._id);
      $(window).unbind("keyup." + this._id);
      $(window).unbind("jcKeyDown." + this._id);

      if (this.draggable) {
        $(window).unbind("mousemove." + this._id);
        $(window).unbind("mouseup." + this._id);
        this.$titleContainer.unbind("mousedown");
      }

      that.$el.removeClass(that.loadedClass);
      $("body").removeClass("jconfirm-no-scroll-" + that._id);
      that.$jconfirmBoxContainer.removeClass("jconfirm-no-transition");
      setTimeout(function () {
        that.$body.addClass(that.closeAnimationParsed);
        that.$jconfirmBg.addClass("jconfirm-bg-h");
        var closeTimer = that.closeAnimation === "none" ? 1 : that.animationSpeed;
        setTimeout(function () {
          that.$el.remove();
          var l = w.jconfirm.instances;
          var i = w.jconfirm.instances.length - 1;

          for (i; i >= 0; i--) {
            if (w.jconfirm.instances[i]._id === that._id) {
              w.jconfirm.instances.splice(i, 1);
            }
          }

          if (!w.jconfirm.instances.length) {
            if (that.scrollToPreviousElement && w.jconfirm.lastFocused && w.jconfirm.lastFocused.length && $.contains(document, w.jconfirm.lastFocused[0])) {
              var $lf = w.jconfirm.lastFocused;

              if (that.scrollToPreviousElementAnimate) {
                var st = $(window).scrollTop();
                var ot = w.jconfirm.lastFocused.offset().top;
                var wh = $(window).height();

                if (!(ot > st && ot < st + wh)) {
                  var scrollTo = ot - Math.round(wh / 3);
                  $("html, body").animate({
                    scrollTop: scrollTo
                  }, that.animationSpeed, "swing", function () {
                    $lf.focus();
                  });
                } else {
                  $lf.focus();
                }
              } else {
                $lf.focus();
              }

              w.jconfirm.lastFocused = false;
            }
          }

          if (typeof that.onDestroy === "function") {
            that.onDestroy();
          }
        }, closeTimer * 0.4);
      }, 50);
      return true;
    },
    open: function open() {
      if (this.isOpen()) {
        return false;
      }

      this._buildHTML();

      this._bindEvents();

      this._open();

      return true;
    },
    setStartingPoint: function setStartingPoint() {
      var el = false;

      if (this.animateFromElement !== true && this.animateFromElement) {
        el = this.animateFromElement;
        w.jconfirm.lastClicked = false;
      } else {
        if (w.jconfirm.lastClicked && this.animateFromElement === true) {
          el = w.jconfirm.lastClicked;
          w.jconfirm.lastClicked = false;
        } else {
          return false;
        }
      }

      if (!el) {
        return false;
      }

      var offset = el.offset();
      var iTop = el.outerHeight() / 2;
      var iLeft = el.outerWidth() / 2;
      iTop -= this.$jconfirmBox.outerHeight() / 2;
      iLeft -= this.$jconfirmBox.outerWidth() / 2;
      var sourceTop = offset.top + iTop;
      sourceTop = sourceTop - this._scrollTop();
      var sourceLeft = offset.left + iLeft;
      var wh = $(window).height() / 2;
      var ww = $(window).width() / 2;
      var targetH = wh - this.$jconfirmBox.outerHeight() / 2;
      var targetW = ww - this.$jconfirmBox.outerWidth() / 2;
      sourceTop -= targetH;
      sourceLeft -= targetW;

      if (Math.abs(sourceTop) > wh || Math.abs(sourceLeft) > ww) {
        return false;
      }

      this.$jconfirmBoxContainer.css("transform", "translate(" + sourceLeft + "px, " + sourceTop + "px)");
    },
    _open: function _open() {
      var that = this;

      if (typeof that.onOpenBefore === "function") {
        that.onOpenBefore();
      }

      this.$body.removeClass(this.animationParsed);
      this.$jconfirmBg.removeClass("jconfirm-bg-h");
      this.$body.focus();
      that.$jconfirmBoxContainer.css("transform", "translate(" + 0 + "px, " + 0 + "px)");
      setTimeout(function () {
        that.$body.css(that._getCSS(that.animationSpeed, 1));
        that.$body.css({
          "transition-property": that.$body.css("transition-property") + ", margin"
        });
        that.$jconfirmBoxContainer.addClass("jconfirm-no-transition");

        that._modalReady.resolve();

        if (typeof that.onOpen === "function") {
          that.onOpen();
        }

        that.$el.addClass(that.loadedClass);
      }, this.animationSpeed);
    },
    loadedClass: "jconfirm-open",
    isClosed: function isClosed() {
      return !this.$el || this.$el.parent().length === 0;
    },
    isOpen: function isOpen() {
      return !this.isClosed();
    },
    toggle: function toggle() {
      if (!this.isOpen()) {
        this.open();
      } else {
        this.close();
      }
    }
  };
  w.jconfirm.instances = [];
  w.jconfirm.lastFocused = false;
  w.jconfirm.pluginDefaults = {
    template: '<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jconfirm-row"><div class="jconfirm-cell"><div class="jconfirm-holder"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container jconfirm-animated"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div></div></div></div>',
    title: "Hello",
    titleClass: "",
    type: "default",
    typeAnimated: true,
    draggable: true,
    dragWindowGap: 15,
    dragWindowBorder: true,
    animateFromElement: true,
    alignMiddle: true,
    smoothContent: true,
    content: "Are you sure to continue?",
    buttons: {},
    defaultButtons: {
      ok: {
        action: function action() {}
      },
      close: {
        action: function action() {}
      }
    },
    contentLoaded: function contentLoaded() {},
    icon: "",
    lazyOpen: false,
    bgOpacity: null,
    theme: "light",
    animation: "scale",
    closeAnimation: "scale",
    animationSpeed: 400,
    animationBounce: 1,
    escapeKey: true,
    rtl: false,
    container: "body",
    containerFluid: false,
    backgroundDismiss: false,
    backgroundDismissAnimation: "shake",
    autoClose: false,
    closeIcon: null,
    closeIconClass: false,
    watchInterval: 100,
    columnClass: "col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",
    boxWidth: "50%",
    scrollToPreviousElement: true,
    scrollToPreviousElementAnimate: true,
    useBootstrap: true,
    offsetTop: 40,
    offsetBottom: 40,
    bootstrapClasses: {
      container: "container",
      containerFluid: "container-fluid",
      row: "row"
    },
    onContentReady: function onContentReady() {},
    onOpenBefore: function onOpenBefore() {},
    onOpen: function onOpen() {},
    onClose: function onClose() {},
    onDestroy: function onDestroy() {},
    onAction: function onAction() {}
  };
  var keyDown = false;
  $(window).on("keydown", function (e) {
    if (!keyDown) {
      var $target = $(e.target);
      var pass = false;

      if ($target.closest(".jconfirm-box").length) {
        pass = true;
      }

      if (pass) {
        $(window).trigger("jcKeyDown");
      }

      keyDown = true;
    }
  });
  $(window).on("keyup", function () {
    keyDown = false;
  });
  w.jconfirm.lastClicked = false;
  $(document).on("mousedown", "button, a, [jc-source]", function () {
    w.jconfirm.lastClicked = $(this);
  });
});

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

/***/ "./src/assets/js/components/scroll.js":
/*!********************************************!*\
  !*** ./src/assets/js/components/scroll.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
 // Scrolls to div with an id

var speed = 100;
jquery__WEBPACK_IMPORTED_MODULE_0___default()('#c-front-page__welcome').filter(function (i, a) {
  return a.getAttribute('href').startsWith('#c-front-page__welcome') || a.href.startsWith('#c-front-page__welcome');
}).unbind('click.smoothScroll').bind('click.smoothScroll', function (event) {
  var targetId = event.currentTarget.getAttribute('href').split('#')[1];
  var targetElement = document.getElementById(targetId);

  if (targetElement) {
    event.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
      scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(targetElement).offset().top
    }, speed);
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
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3
    }
  }, {
    breakpoint: 960,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 2
    }
  }, // {
  //   breakpoint: 768,
  //   settings: {
  //     arrows: false,
  //     centerMode: true,
  //     centerPadding: '60px',
  //     slidesToShow: 1
  //   }
  // },
  {
    breakpoint: 700,
    settings: {
      arrows: false,
      centerMode: true,
      centerPadding: '40px',
      slidesToShow: 1
    }
  }]
}).on('setPosition', function (event, slick) {
  slick.$slides.css('height', slick.$slideTrack.height() + 'px');
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
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/scroll */ "./src/assets/js/components/scroll.js");
/* harmony import */ var jquery_confirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery-confirm */ "./node_modules/jquery-confirm/dist/jquery-confirm.min.js");
/* harmony import */ var jquery_confirm__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery_confirm__WEBPACK_IMPORTED_MODULE_9__);









 // import webpackStream from 'webpack-stream'

jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-post__gallery').slick({
    arrows: false,
    adaptiveHeight: true
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
}); // $(document).ready(function ($) {
//   if ($('body').hasClass('home')) {
//     $.confirm({
//       title: 'WooCommerce Demo Store!',
//       content:
//         'This is a WordPress custom theme using the Woocommerce plugin for the store features. Contact Paul at <a href="https://www.paulbrighton.com/">YP Digital</a> if you like what you see and for a quote on your next website.',
//       useBootstrap: false,
//       autoClose: 'close|8000'
//     })
//   }
// })

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LWNvbmZpcm0vZGlzdC9qcXVlcnktY29uZmlybS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYW9zLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hhbWJ1cmdlci1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zZWFyY2gtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJvIiwibiIsImkiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJyIiwiYSIsInUiLCJzIiwiZiIsImQiLCJsIiwiYiIsInYiLCJ5IiwiZyIsImgiLCJ3IiwiayIsIngiLCJvZmZzZXQiLCJkZWxheSIsImVhc2luZyIsImR1cmF0aW9uIiwiZGlzYWJsZSIsIm9uY2UiLCJzdGFydEV2ZW50IiwidGhyb3R0bGVEZWxheSIsImRlYm91bmNlRGVsYXkiLCJkaXNhYmxlTXV0YXRpb25PYnNlcnZlciIsImoiLCJPIiwiTSIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiUyIsIm1vYmlsZSIsInBob25lIiwidGFibGV0IiwiXyIsImRvY3VtZW50IiwiYWxsIiwid2luZG93IiwiYXRvYiIsImlzU3VwcG9ydGVkIiwiY29uc29sZSIsImluZm8iLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVhZHkiLCJpbml0IiwicmVmcmVzaCIsInJlZnJlc2hIYXJkIiwiYXBwbHkiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiVHlwZUVycm9yIiwibGVhZGluZyIsIm1heFdhaXQiLCJ0cmFpbGluZyIsImNhbmNlbCIsImZsdXNoIiwidmFsdWVPZiIsInJlcGxhY2UiLCJ0ZXN0Iiwic2xpY2UiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiTmFOIiwicGFyc2VJbnQiLCJzZWxmIiwiRnVuY3Rpb24iLCJ0b1N0cmluZyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJEYXRlIiwibm93IiwiZGF0YXNldCIsImFvcyIsImNoaWxkcmVuIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRvY3VtZW50RWxlbWVudCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZW1vdmVkTm9kZXMiLCJBcnJheSIsImFkZGVkTm9kZXMiLCJjb25jYXQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJzdWJzdHIiLCJnZXRBdHRyaWJ1dGUiLCJwb3NpdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJhbmNob3IiLCJhbmNob3JQbGFjZW1lbnQiLCJpc05hTiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwidGFnTmFtZSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRQYXJlbnQiLCJsZWZ0IiwibWFwIiwiZmFjdG9yeSIsIiQiLCJmbiIsImNvbmZpcm0iLCJvcHRpb25zIiwib3B0aW9uMiIsImNvbnRlbnQiLCJ0aXRsZSIsImVhY2giLCIkdGhpcyIsImF0dHIiLCJ3YXJuIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImpjT3B0aW9uIiwiZXh0ZW5kIiwiYnV0dG9ucyIsImtleXMiLCJqY29uZmlybSIsInBsdWdpbkRlZmF1bHRzIiwiZGVmYXVsdEJ1dHRvbnMiLCJkZWZhdWx0cyIsImZpcnN0QnRuIiwiYWN0aW9uIiwibG9jYXRpb24iLCJocmVmIiwiY2xvc2VJY29uIiwiaW5zdGFuY2UiLCJwdXREZWZhdWx0QnV0dG9ucyIsImFsZXJ0IiwiZGlhbG9nIiwiY29uZmlybUtleXMiLCJwbHVnaW5PcHRpb25zIiwiSmNvbmZpcm0iLCJpbnN0YW5jZXMiLCJwdXNoIiwiX2luaXQiLCJ0aGF0IiwibGFzdEZvY3VzZWQiLCJmaW5kIiwiX2lkIiwicm91bmQiLCJyYW5kb20iLCJjb250ZW50UGFyc2VkIiwiY3JlYXRlRWxlbWVudCIsImxhenlPcGVuIiwib3BlbiIsIl9idWlsZEhUTUwiLCJfcGFyc2VBbmltYXRpb24iLCJhbmltYXRpb24iLCJjbG9zZUFuaW1hdGlvbiIsIl9wYXJzZUJnRGlzbWlzc0FuaW1hdGlvbiIsImJhY2tncm91bmREaXNtaXNzQW5pbWF0aW9uIiwiX3BhcnNlQ29sdW1uQ2xhc3MiLCJjb2x1bW5DbGFzcyIsIl9wYXJzZVRoZW1lIiwidGhlbWUiLCJfcGFyc2VUeXBlIiwidHlwZSIsInRlbXBsYXRlIiwiYWRkQ2xhc3MiLCJhbmltYXRpb25QYXJzZWQiLCJiYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvblBhcnNlZCIsInR5cGVQYXJzZWQiLCJ0eXBlQW5pbWF0ZWQiLCJ1c2VCb290c3RyYXAiLCJib290c3RyYXBDbGFzc2VzIiwicm93IiwiY29sdW1uQ2xhc3NQYXJzZWQiLCJjb250YWluZXJGbHVpZCIsImNvbnRhaW5lciIsImNzcyIsImJveFdpZHRoIiwidGl0bGVDbGFzcyIsInRoZW1lUGFyc2VkIiwiYXJpYUxhYmVsIiwiYmdPcGFjaXR5IiwicnRsIiwiJGVsIiwiYXBwZW5kVG8iLCIkamNvbmZpcm1Cb3hDb250YWluZXIiLCIkamNvbmZpcm1Cb3giLCIkYm9keSIsIiRqY29uZmlybUJnIiwiJHRpdGxlIiwiJHRpdGxlQ29udGFpbmVyIiwiJGNvbnRlbnQiLCIkY29udGVudFBhbmUiLCIkaWNvbiIsIiRjbG9zZUljb24iLCIkaG9sZGVyIiwiJGJ0bmMiLCIkc2Nyb2xsUGFuZSIsInNldFN0YXJ0aW5nUG9pbnQiLCJfY29udGVudFJlYWR5IiwiRGVmZXJyZWQiLCJfbW9kYWxSZWFkeSIsIm9mZnNldEJvdHRvbSIsInNldFRpdGxlIiwic2V0SWNvbiIsIl9zZXRCdXR0b25zIiwiX3BhcnNlQ29udGVudCIsImluaXREcmFnZ2FibGUiLCJpc0FqYXgiLCJzaG93TG9hZGluZyIsIndoZW4iLCJ0aGVuIiwiaXNBamF4TG9hZGluZyIsInNldENvbnRlbnQiLCJoaWRlTG9hZGluZyIsIl91cGRhdGVDb250ZW50TWF4SGVpZ2h0Iiwib25Db250ZW50UmVhZHkiLCJhdXRvQ2xvc2UiLCJfc3RhcnRDb3VudERvd24iLCJfd2F0Y2hDb250ZW50IiwiYW5pbWF0aW9uU3BlZWQiLCJhbmltYXRpb25Cb3VuY2UiLCJfZ2V0Q1NTIiwiX3R5cGVQcmVmaXgiLCJzZXRUeXBlIiwib2xkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIl90aGVtZVByZWZpeCIsInNldFRoZW1lIiwicHJldmlvdXMiLCJzcGxpdCIsInRyaW0iLCJqb2luIiwidG9Mb3dlckNhc2UiLCJfYmdEaXNtaXNzUHJlZml4IiwiYmdEaXNtaXNzQW5pbWF0aW9uIiwiY2xvc2VBbmltYXRpb25QYXJzZWQiLCJfYW5pbWF0aW9uUHJlZml4Iiwic2V0QW5pbWF0aW9uIiwid2hpY2giLCJhbmltYXRpb25zIiwiYV9zdHJpbmciLCJzZXRDbG9zZUFuaW1hdGlvbiIsInNldEFuaW1hdGlvblNwZWVkIiwic3BlZWQiLCJzZXRDb2x1bW5DbGFzcyIsImNvbENsYXNzIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJzZXRCb3hXaWR0aCIsIndpZHRoIiwiJHQiLCJyZXNldERyYWciLCJkcmFnZ2FibGUiLCJtb3VzZVgiLCJjbGllbnRYIiwibW91c2VZIiwiY2xpZW50WSIsImlzRHJhZyIsIm1vdmluZ1giLCJpbml0aWFsWCIsIm1vdmluZ1kiLCJpbml0aWFsWSIsInNldERyYWciLCJhbGlnbk1pZGRsZSIsIm91dGVyV2lkdGgiLCJib3hIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImRyYWdVcGRhdGUiLCJkcmFnV2luZG93Qm9yZGVyIiwibGVmdERpc3RhbmNlIiwidG9wRGlzdGFuY2UiLCJkcmFnV2luZG93R2FwIiwiX3Njcm9sbFRvcCIsIkIiLCJib2R5IiwiRCIsImNsaWVudEhlaWdodCIsIl90aW1lciIsImNsZWFySW50ZXJ2YWwiLCJwcmV2Q29udGVudEhlaWdodCIsInNldEludGVydmFsIiwic21vb3RoQ29udGVudCIsImNvbnRlbnRIZWlnaHQiLCJ3aCIsInRvdGFsIiwid2F0Y2hJbnRlcnZhbCIsIl9vdmVyZmxvd0NsYXNzIiwiX2hpbGlnaHRBbmltYXRpbmciLCJoaWdobGlnaHQiLCJoaUxpZ2h0TW9kYWwiLCJwYXJzZUZsb2F0IiwiX2JpbmRFdmVudHMiLCJib3hDbGlja2VkIiwiY2xpY2siLCJidXR0b25OYW1lIiwic2hvdWxkQ2xvc2UiLCJzdHIiLCJiYWNrZ3JvdW5kRGlzbWlzcyIsImJ0blJlc3BvbnNlIiwiY2xvc2UiLCJpc0tleURvd24iLCJyZWFjdE9uS2V5IiwiX2N1YmljX2JlemllciIsImJvdW5jZSIsInRvdGFsX2J1dHRvbnMiLCJidXR0b24iLCJ0ZXh0IiwiYnRuQ2xhc3MiLCJpc0hpZGRlbiIsImlzRGlzYWJsZWQiLCJidXR0b25fZWxlbWVudCIsImh0bWwiLCJwcm9wIiwicmVzIiwib25BY3Rpb24iLCJfc3RvcENvdW50RG93biIsImVsIiwic2V0VGV4dCIsImNsYXNzTmFtZSIsImVuYWJsZSIsInNob3ciLCJoaWRlIiwiYXBwZW5kIiwiY2xvc2VJY29uQ2xhc3MiLCJjbG9zZUh0bWwiLCJzdHJpbmciLCJmb3JjZSIsInByb21pc2UiLCJlcnJvciIsInJlc3BvbnNlIiwidXBkYXRlVGl0bGVDb250YWluZXIiLCJpY29uQ2xhc3MiLCJpY29uIiwic2V0Q29udGVudFByZXBlbmQiLCJwcmVwZW5kIiwic2V0Q29udGVudEFwcGVuZCIsImZvY3VzIiwibG9hZGluZ1NwaW5uZXIiLCJkaXNhYmxlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJhamF4UmVzcG9uc2UiLCJhbHdheXMiLCJkYXRhIiwic3RhdHVzIiwieGhyIiwicmVzb2x2ZSIsImNvbnRlbnRMb2FkZWQiLCJzdWJzdHJpbmciLCJnZXQiLCJkb25lIiwiYXV0b0Nsb3NlSW50ZXJ2YWwiLCIkY2QiLCJvcHQiLCJidXR0b25fa2V5IiwidGltZSIsInNlY29uZHMiLCJjZWlsIiwidHJpZ2dlciIsIl9nZXRLZXkiLCJpbml0aWFsIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZXEiLCJpcyIsImtleUNoYXIiLCJlc2NhcGVLZXkiLCJidXR0b25LZXkiLCJzZXREaWFsb2dDZW50ZXIiLCJfdW53YXRjaENvbnRlbnQiLCJvbkNsb3NlUGF5bG9hZCIsIm9uQ2xvc2UiLCJ1bmJpbmQiLCJsb2FkZWRDbGFzcyIsImNsb3NlVGltZXIiLCJzcGxpY2UiLCJzY3JvbGxUb1ByZXZpb3VzRWxlbWVudCIsImNvbnRhaW5zIiwiJGxmIiwic2Nyb2xsVG9QcmV2aW91c0VsZW1lbnRBbmltYXRlIiwic3QiLCJvdCIsInNjcm9sbFRvIiwiYW5pbWF0ZSIsIm9uRGVzdHJveSIsImlzT3BlbiIsIl9vcGVuIiwiYW5pbWF0ZUZyb21FbGVtZW50IiwibGFzdENsaWNrZWQiLCJpVG9wIiwiaUxlZnQiLCJzb3VyY2VUb3AiLCJzb3VyY2VMZWZ0Iiwid3ciLCJ0YXJnZXRIIiwidGFyZ2V0VyIsImFicyIsIm9uT3BlbkJlZm9yZSIsIm9uT3BlbiIsImlzQ2xvc2VkIiwicGFyZW50IiwidG9nZ2xlIiwib2siLCJrZXlEb3duIiwiJHRhcmdldCIsInRhcmdldCIsInBhc3MiLCJjbG9zZXN0IiwiU2xpY2siLCJpbnN0YW5jZVVpZCIsImVsZW1lbnQiLCJzZXR0aW5ncyIsImRhdGFTZXR0aW5ncyIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhcnJvd3MiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsImRvdHMiLCJkb3RzQ2xhc3MiLCJlZGdlRnJpY3Rpb24iLCJmYWRlIiwiZm9jdXNPblNlbGVjdCIsImZvY3VzT25DaGFuZ2UiLCJpbmZpbml0ZSIsImluaXRpYWxTbGlkZSIsImxhenlMb2FkIiwibW9iaWxlRmlyc3QiLCJwYXVzZU9uSG92ZXIiLCJwYXVzZU9uRm9jdXMiLCJwYXVzZU9uRG90c0hvdmVyIiwicmVzcG9uZFRvIiwicmVzcG9uc2l2ZSIsInJvd3MiLCJzbGlkZSIsInNsaWRlc1BlclJvdyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3dpcGUiLCJzd2lwZVRvU2xpZGUiLCJ0b3VjaE1vdmUiLCJ0b3VjaFRocmVzaG9sZCIsInVzZUNTUyIsInVzZVRyYW5zZm9ybSIsInZhcmlhYmxlV2lkdGgiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsIndhaXRGb3JBbmltYXRlIiwiekluZGV4IiwiaW5pdGlhbHMiLCJhbmltYXRpbmciLCJkcmFnZ2luZyIsImF1dG9QbGF5VGltZXIiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudExlZnQiLCJjdXJyZW50U2xpZGUiLCJkaXJlY3Rpb24iLCIkZG90cyIsImxpc3RXaWR0aCIsImxpc3RIZWlnaHQiLCJsb2FkSW5kZXgiLCIkbmV4dEFycm93IiwiJHByZXZBcnJvdyIsInNjcm9sbGluZyIsInNsaWRlQ291bnQiLCJzbGlkZVdpZHRoIiwiJHNsaWRlVHJhY2siLCIkc2xpZGVzIiwic2xpZGluZyIsInNsaWRlT2Zmc2V0Iiwic3dpcGVMZWZ0Iiwic3dpcGluZyIsIiRsaXN0IiwidG91Y2hPYmplY3QiLCJ0cmFuc2Zvcm1zRW5hYmxlZCIsInVuc2xpY2tlZCIsImFjdGl2ZUJyZWFrcG9pbnQiLCJhbmltVHlwZSIsImFuaW1Qcm9wIiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50U2V0dGluZ3MiLCJjc3NUcmFuc2l0aW9ucyIsImZvY3Vzc2VkIiwiaW50ZXJydXB0ZWQiLCJoaWRkZW4iLCJwYXVzZWQiLCJwb3NpdGlvblByb3AiLCJyb3dDb3VudCIsInNob3VsZENsaWNrIiwiJHNsaWRlciIsIiRzbGlkZXNDYWNoZSIsInRyYW5zZm9ybVR5cGUiLCJ0cmFuc2l0aW9uVHlwZSIsInZpc2liaWxpdHlDaGFuZ2UiLCJ3aW5kb3dUaW1lciIsIm9yaWdpbmFsU2V0dGluZ3MiLCJtb3pIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJhdXRvUGxheSIsInByb3h5IiwiYXV0b1BsYXlDbGVhciIsImF1dG9QbGF5SXRlcmF0b3IiLCJjaGFuZ2VTbGlkZSIsImNsaWNrSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJzZXRQb3NpdGlvbiIsInN3aXBlSGFuZGxlciIsImRyYWdIYW5kbGVyIiwia2V5SGFuZGxlciIsImh0bWxFeHByIiwicmVnaXN0ZXJCcmVha3BvaW50cyIsImFjdGl2YXRlQURBIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0QWZ0ZXIiLCJwcmVwZW5kVG8iLCJkZXRhY2giLCJyZWluaXQiLCJhbmltYXRlSGVpZ2h0IiwidGFyZ2V0SGVpZ2h0IiwiYW5pbWF0ZVNsaWRlIiwidGFyZ2V0TGVmdCIsImNhbGxiYWNrIiwiYW5pbVByb3BzIiwiYW5pbVN0YXJ0Iiwic3RlcCIsImNvbXBsZXRlIiwiYXBwbHlUcmFuc2l0aW9uIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJub3QiLCJzbGljayIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJyZW1vdmVBdHRyIiwiYnVpbGREb3RzIiwiZG90IiwiZ2V0RG90Q291bnQiLCJmaXJzdCIsImJ1aWxkT3V0Iiwid3JhcEFsbCIsIndyYXAiLCJzZXR1cEluZmluaXRlIiwidXBkYXRlRG90cyIsInNldFNsaWRlQ2xhc3NlcyIsImJ1aWxkUm93cyIsIm5ld1NsaWRlcyIsIm51bU9mU2xpZGVzIiwib3JpZ2luYWxTbGlkZXMiLCJzbGlkZXNQZXJTZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFwcGVuZENoaWxkIiwiZW1wdHkiLCJjaGVja1Jlc3BvbnNpdmUiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwiaW5uZXJXaWR0aCIsInVuc2xpY2siLCJldmVudCIsImRvbnRBbmltYXRlIiwiY3VycmVudFRhcmdldCIsImluZGV4T2Zmc2V0IiwidW5ldmVuT2Zmc2V0IiwibWVzc2FnZSIsImNoZWNrTmF2aWdhYmxlIiwibmF2aWdhYmxlcyIsInByZXZOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsImdldE9wdGlvbiIsInNsaWNrR2V0T3B0aW9uIiwib3B0aW9uIiwiaW5kZXhlcyIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsInNsaWRlc1RyYXZlcnNlZCIsInN3aXBlZFNsaWRlIiwiY2VudGVyT2Zmc2V0IiwiZ29UbyIsInNsaWNrR29UbyIsImNyZWF0aW9uIiwiaGFzQ2xhc3MiLCJzZXRQcm9wcyIsInN0YXJ0TG9hZCIsImxvYWRTbGlkZXIiLCJpbml0aWFsaXplRXZlbnRzIiwidXBkYXRlQXJyb3dzIiwiaW5pdEFEQSIsIm51bURvdEdyb3VwcyIsInRhYkNvbnRyb2xJbmRleGVzIiwidmFsIiwic2xpZGVDb250cm9sSW5kZXgiLCJhcmlhQnV0dG9uQ29udHJvbCIsIm1hcHBlZFNsaWRlSW5kZXgiLCJlbmQiLCJpbml0QXJyb3dFdmVudHMiLCJpbml0RG90RXZlbnRzIiwiaW5pdFNsaWRlRXZlbnRzIiwiaW5pdFVJIiwibWF0Y2giLCJrZXlDb2RlIiwibG9hZFJhbmdlIiwiY2xvbmVSYW5nZSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImxvYWRJbWFnZXMiLCJpbWFnZXNTY29wZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVNyY1NldCIsImltYWdlU2l6ZXMiLCJpbWFnZVRvTG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJwcm9ncmVzc2l2ZUxhenlMb2FkIiwibmV4dCIsInNsaWNrTmV4dCIsInBhdXNlIiwic2xpY2tQYXVzZSIsInBsYXkiLCJzbGlja1BsYXkiLCJwb3N0U2xpZGUiLCIkY3VycmVudFNsaWRlIiwicHJldiIsInNsaWNrUHJldiIsInRyeUNvdW50IiwiJGltZ3NUb0xvYWQiLCJpbml0aWFsaXppbmciLCJsYXN0VmlzaWJsZUluZGV4IiwiY3VycmVudEJyZWFrcG9pbnQiLCJyZXNwb25zaXZlU2V0dGluZ3MiLCJzb3J0Iiwid2luZG93RGVsYXkiLCJyZW1vdmVTbGlkZSIsInNsaWNrUmVtb3ZlIiwicmVtb3ZlQmVmb3JlIiwicmVtb3ZlQWxsIiwic2V0Q1NTIiwicG9zaXRpb25Qcm9wcyIsInNldERpbWVuc2lvbnMiLCJwYWRkaW5nIiwic2V0RmFkZSIsInJpZ2h0Iiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJpdGVtIiwiYm9keVN0eWxlIiwic3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwidW5kZWZpbmVkIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYWxsU2xpZGVzIiwicmVtYWluZGVyIiwiZXZlbkNvZWYiLCJpbmZpbml0ZUNvdW50IiwiY2xvbmUiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50cyIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsInN3aXBlRGlyZWN0aW9uIiwieERpc3QiLCJ5RGlzdCIsInN3aXBlQW5nbGUiLCJzdGFydFgiLCJjdXJYIiwic3RhcnRZIiwiY3VyWSIsImF0YW4yIiwiUEkiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInN3aXBlU3RhcnQiLCJzd2lwZU1vdmUiLCJlZGdlV2FzSGl0IiwiY3VyTGVmdCIsInBvc2l0aW9uT2Zmc2V0IiwidmVydGljYWxTd2lwZUxlbmd0aCIsInBhZ2VYIiwicGFnZVkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJhcmdzIiwicmV0Iiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiQU9TIiwiaW5pdENsYXNzTmFtZSIsImFuaW1hdGVkQ2xhc3NOYW1lIiwidXNlQ2xhc3NOYW1lcyIsIm1pcnJvciIsIm9wZW5OYXYiLCJjbG9zZU5hdiIsImdldEVsZW1lbnRCeUlkIiwibG9nIiwibWVudV9idXR0b24iLCJtZW51X2xpbmsiLCJtZW51X2l0ZW0iLCJzaWJsaW5ncyIsInN0YXJ0c1dpdGgiLCJiaW5kIiwidGFyZ2V0SWQiLCJ3cCIsImN1c3RvbWl6ZSIsInNlbGVjdGl2ZVJlZnJlc2giLCJwbGFjZW1lbnQiLCJwYXJ0aWFsIiwid2lkZ2V0SWRQYXJ0cyIsImlkQmFzZSIsInNpdGVOYXZpZ2F0aW9uIiwidG9nZ2xlQ2xhc3MiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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TUFBaEMsS0FDRSwrQkFISixFQUlFO0FBQ0FILGlCQUFTLENBQUNqbUIsU0FBVixDQUFvQi9CLElBQXBCLENBQXlCLHFCQUF6QixFQUFnRG1aLEtBQWhEO0FBQ0Q7QUFDRixLQVZIO0FBWUQ7QUFDRixDQXJCRDtBQXVCQXpiLDZDQUFDLENBQUMsVUFBVUEsQ0FBVixFQUFhO0FBQ2IsTUFBSTBxQixjQUFjLEdBQUcxcUIsQ0FBQyxDQUFDLGtCQUFELENBQXRCO0FBRUEwcUIsZ0JBQWMsQ0FBQ3BvQixJQUFmLENBQW9CLEdBQXBCLEVBQXlCM0IsRUFBekIsQ0FBNEIsWUFBNUIsRUFBMEMsWUFBWTtBQUNwRFgsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRd21CLE9BQVIsQ0FBZ0IsSUFBaEIsRUFBc0JtRSxXQUF0QixDQUFrQyxPQUFsQztBQUNELEdBRkQ7QUFHRCxDQU5BLENBQUQsQyxDQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREEsd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQU9TPXQoKTplLkFPUz10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChvKXtpZihuW29dKXJldHVybiBuW29dLmV4cG9ydHM7dmFyIGk9bltvXT17ZXhwb3J0czp7fSxpZDpvLGxvYWRlZDohMX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsdCksaS5sb2FkZWQ9ITAsaS5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LnA9XCJkaXN0L1wiLHQoMCl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19dmFyIGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0scj1uKDEpLGE9KG8ociksbig2KSksdT1vKGEpLGM9big3KSxzPW8oYyksZj1uKDgpLGQ9byhmKSxsPW4oOSkscD1vKGwpLG09bigxMCksYj1vKG0pLHY9bigxMSkseT1vKHYpLGc9bigxNCksaD1vKGcpLHc9W10saz0hMSx4PXtvZmZzZXQ6MTIwLGRlbGF5OjAsZWFzaW5nOlwiZWFzZVwiLGR1cmF0aW9uOjQwMCxkaXNhYmxlOiExLG9uY2U6ITEsc3RhcnRFdmVudDpcIkRPTUNvbnRlbnRMb2FkZWRcIix0aHJvdHRsZURlbGF5Ojk5LGRlYm91bmNlRGVsYXk6NTAsZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI6ITF9LGo9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO2lmKGUmJihrPSEwKSxrKXJldHVybiB3PSgwLHkuZGVmYXVsdCkodyx4KSwoMCxiLmRlZmF1bHQpKHcseC5vbmNlKSx3fSxPPWZ1bmN0aW9uKCl7dz0oMCxoLmRlZmF1bHQpKCksaigpfSxNPWZ1bmN0aW9uKCl7dy5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7ZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1lYXNpbmdcIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiKX0pfSxTPWZ1bmN0aW9uKGUpe3JldHVybiBlPT09ITB8fFwibW9iaWxlXCI9PT1lJiZwLmRlZmF1bHQubW9iaWxlKCl8fFwicGhvbmVcIj09PWUmJnAuZGVmYXVsdC5waG9uZSgpfHxcInRhYmxldFwiPT09ZSYmcC5kZWZhdWx0LnRhYmxldCgpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCk9PT0hMH0sXz1mdW5jdGlvbihlKXt4PWkoeCxlKSx3PSgwLGguZGVmYXVsdCkoKTt2YXIgdD1kb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYjtyZXR1cm4gUyh4LmRpc2FibGUpfHx0P00oKTooeC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcnx8ZC5kZWZhdWx0LmlzU3VwcG9ydGVkKCl8fChjb25zb2xlLmluZm8oJ1xcbiAgICAgIGFvczogTXV0YXRpb25PYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgYnJvd3NlcixcXG4gICAgICBjb2RlIG11dGF0aW9ucyBvYnNlcnZpbmcgaGFzIGJlZW4gZGlzYWJsZWQuXFxuICAgICAgWW91IG1heSBoYXZlIHRvIGNhbGwgXCJyZWZyZXNoSGFyZCgpXCIgYnkgeW91cnNlbGYuXFxuICAgICcpLHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI9ITApLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWVhc2luZ1wiLHguZWFzaW5nKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiLHguZHVyYXRpb24pLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWRlbGF5XCIseC5kZWxheSksXCJET01Db250ZW50TG9hZGVkXCI9PT14LnN0YXJ0RXZlbnQmJltcImNvbXBsZXRlXCIsXCJpbnRlcmFjdGl2ZVwiXS5pbmRleE9mKGRvY3VtZW50LnJlYWR5U3RhdGUpPi0xP2ooITApOlwibG9hZFwiPT09eC5zdGFydEV2ZW50P3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKHguc3RhcnRFdmVudCxmdW5jdGlvbigpe2ooITApfSk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih4LnN0YXJ0RXZlbnQsZnVuY3Rpb24oKXtqKCEwKX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKDAscy5kZWZhdWx0KShqLHguZGVib3VuY2VEZWxheSwhMCkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwoMCxzLmRlZmF1bHQpKGoseC5kZWJvdW5jZURlbGF5LCEwKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoMCx1LmRlZmF1bHQpKGZ1bmN0aW9uKCl7KDAsYi5kZWZhdWx0KSh3LHgub25jZSl9LHgudGhyb3R0bGVEZWxheSkpLHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXJ8fGQuZGVmYXVsdC5yZWFkeShcIltkYXRhLWFvc11cIixPKSx3KX07ZS5leHBvcnRzPXtpbml0Ol8scmVmcmVzaDpqLHJlZnJlc2hIYXJkOk99fSxmdW5jdGlvbihlLHQpe30sLCwsLGZ1bmN0aW9uKGUsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LG4pe2Z1bmN0aW9uIG8odCl7dmFyIG49YixvPXY7cmV0dXJuIGI9dj12b2lkIDAsaz10LGc9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIGs9ZSxoPXNldFRpbWVvdXQoZix0KSxNP28oZSk6Z31mdW5jdGlvbiBhKGUpe3ZhciBuPWUtdyxvPWUtayxpPXQtbjtyZXR1cm4gUz9qKGkseS1vKTppfWZ1bmN0aW9uIGMoZSl7dmFyIG49ZS13LG89ZS1rO3JldHVybiB2b2lkIDA9PT13fHxuPj10fHxuPDB8fFMmJm8+PXl9ZnVuY3Rpb24gZigpe3ZhciBlPU8oKTtyZXR1cm4gYyhlKT9kKGUpOnZvaWQoaD1zZXRUaW1lb3V0KGYsYShlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGg9dm9pZCAwLF8mJmI/byhlKTooYj12PXZvaWQgMCxnKX1mdW5jdGlvbiBsKCl7dm9pZCAwIT09aCYmY2xlYXJUaW1lb3V0KGgpLGs9MCxiPXc9dj1oPXZvaWQgMH1mdW5jdGlvbiBwKCl7cmV0dXJuIHZvaWQgMD09PWg/ZzpkKE8oKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPU8oKSxuPWMoZSk7aWYoYj1hcmd1bWVudHMsdj10aGlzLHc9ZSxuKXtpZih2b2lkIDA9PT1oKXJldHVybiByKHcpO2lmKFMpcmV0dXJuIGg9c2V0VGltZW91dChmLHQpLG8odyl9cmV0dXJuIHZvaWQgMD09PWgmJihoPXNldFRpbWVvdXQoZix0KSksZ312YXIgYix2LHksZyxoLHcsaz0wLE09ITEsUz0hMSxfPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihzKTtyZXR1cm4gdD11KHQpfHwwLGkobikmJihNPSEhbi5sZWFkaW5nLFM9XCJtYXhXYWl0XCJpbiBuLHk9Uz94KHUobi5tYXhXYWl0KXx8MCx0KTp5LF89XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6XyksbS5jYW5jZWw9bCxtLmZsdXNoPXAsbX1mdW5jdGlvbiBvKGUsdCxvKXt2YXIgcj0hMCxhPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihzKTtyZXR1cm4gaShvKSYmKHI9XCJsZWFkaW5nXCJpbiBvPyEhby5sZWFkaW5nOnIsYT1cInRyYWlsaW5nXCJpbiBvPyEhby50cmFpbGluZzphKSxuKGUsdCx7bGVhZGluZzpyLG1heFdhaXQ6dCx0cmFpbGluZzphfSl9ZnVuY3Rpb24gaShlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiByKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKSl9ZnVuY3Rpb24gYShlKXtyZXR1cm5cInN5bWJvbFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpKXx8cihlKSYmay5jYWxsKGUpPT1kfWZ1bmN0aW9uIHUoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoYShlKSlyZXR1cm4gZjtpZihpKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPWkodCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UobCxcIlwiKTt2YXIgbj1tLnRlc3QoZSk7cmV0dXJuIG58fGIudGVzdChlKT92KGUuc2xpY2UoMiksbj8yOjgpOnAudGVzdChlKT9mOitlfXZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsZj1OYU4sZD1cIltvYmplY3QgU3ltYm9sXVwiLGw9L15cXHMrfFxccyskL2cscD0vXlstK10weFswLTlhLWZdKyQvaSxtPS9eMGJbMDFdKyQvaSxiPS9eMG9bMC03XSskL2ksdj1wYXJzZUludCx5PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCkpJiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdCxnPVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj9cInVuZGVmaW5lZFwiOmMoc2VsZikpJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixoPXl8fGd8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSx3PU9iamVjdC5wcm90b3R5cGUsaz13LnRvU3RyaW5nLHg9TWF0aC5tYXgsaj1NYXRoLm1pbixPPWZ1bmN0aW9uKCl7cmV0dXJuIGguRGF0ZS5ub3coKX07ZS5leHBvcnRzPW99KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LG4pe2Z1bmN0aW9uIGkodCl7dmFyIG49YixvPXY7cmV0dXJuIGI9dj12b2lkIDAsTz10LGc9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIE89ZSxoPXNldFRpbWVvdXQoZix0KSxNP2koZSk6Z31mdW5jdGlvbiB1KGUpe3ZhciBuPWUtdyxvPWUtTyxpPXQtbjtyZXR1cm4gUz94KGkseS1vKTppfWZ1bmN0aW9uIHMoZSl7dmFyIG49ZS13LG89ZS1PO3JldHVybiB2b2lkIDA9PT13fHxuPj10fHxuPDB8fFMmJm8+PXl9ZnVuY3Rpb24gZigpe3ZhciBlPWooKTtyZXR1cm4gcyhlKT9kKGUpOnZvaWQoaD1zZXRUaW1lb3V0KGYsdShlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGg9dm9pZCAwLF8mJmI/aShlKTooYj12PXZvaWQgMCxnKX1mdW5jdGlvbiBsKCl7dm9pZCAwIT09aCYmY2xlYXJUaW1lb3V0KGgpLE89MCxiPXc9dj1oPXZvaWQgMH1mdW5jdGlvbiBwKCl7cmV0dXJuIHZvaWQgMD09PWg/ZzpkKGooKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPWooKSxuPXMoZSk7aWYoYj1hcmd1bWVudHMsdj10aGlzLHc9ZSxuKXtpZih2b2lkIDA9PT1oKXJldHVybiByKHcpO2lmKFMpcmV0dXJuIGg9c2V0VGltZW91dChmLHQpLGkodyl9cmV0dXJuIHZvaWQgMD09PWgmJihoPXNldFRpbWVvdXQoZix0KSksZ312YXIgYix2LHksZyxoLHcsTz0wLE09ITEsUz0hMSxfPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihjKTtyZXR1cm4gdD1hKHQpfHwwLG8obikmJihNPSEhbi5sZWFkaW5nLFM9XCJtYXhXYWl0XCJpbiBuLHk9Uz9rKGEobi5tYXhXYWl0KXx8MCx0KTp5LF89XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6XyksbS5jYW5jZWw9bCxtLmZsdXNoPXAsbX1mdW5jdGlvbiBvKGUpe3ZhciB0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKX1mdW5jdGlvbiByKGUpe3JldHVyblwic3ltYm9sXCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpfHxpKGUpJiZ3LmNhbGwoZSk9PWZ9ZnVuY3Rpb24gYShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihyKGUpKXJldHVybiBzO2lmKG8oZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9byh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShkLFwiXCIpO3ZhciBuPXAudGVzdChlKTtyZXR1cm4gbnx8bS50ZXN0KGUpP2IoZS5zbGljZSgyKSxuPzI6OCk6bC50ZXN0KGUpP3M6K2V9dmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sYz1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixzPU5hTixmPVwiW29iamVjdCBTeW1ib2xdXCIsZD0vXlxccyt8XFxzKyQvZyxsPS9eWy0rXTB4WzAtOWEtZl0rJC9pLHA9L14wYlswMV0rJC9pLG09L14wb1swLTddKyQvaSxiPXBhcnNlSW50LHY9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6dSh0KSkmJnQmJnQuT2JqZWN0PT09T2JqZWN0JiZ0LHk9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6dShzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGc9dnx8eXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLGg9T2JqZWN0LnByb3RvdHlwZSx3PWgudG9TdHJpbmcsaz1NYXRoLm1heCx4PU1hdGgubWluLGo9ZnVuY3Rpb24oKXtyZXR1cm4gZy5EYXRlLm5vdygpfTtlLmV4cG9ydHM9bn0pLmNhbGwodCxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3ZhciB0PXZvaWQgMCxvPXZvaWQgMCxpPXZvaWQgMDtmb3IodD0wO3Q8ZS5sZW5ndGg7dCs9MSl7aWYobz1lW3RdLG8uZGF0YXNldCYmby5kYXRhc2V0LmFvcylyZXR1cm4hMDtpZihpPW8uY2hpbGRyZW4mJm4oby5jaGlsZHJlbikpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gbygpe3JldHVybiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcnx8d2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyfWZ1bmN0aW9uIGkoKXtyZXR1cm4hIW8oKX1mdW5jdGlvbiByKGUsdCl7dmFyIG49d2luZG93LmRvY3VtZW50LGk9bygpLHI9bmV3IGkoYSk7dT10LHIub2JzZXJ2ZShuLmRvY3VtZW50RWxlbWVudCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITAscmVtb3ZlZE5vZGVzOiEwfSl9ZnVuY3Rpb24gYShlKXtlJiZlLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5hZGRlZE5vZGVzKSxvPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUucmVtb3ZlZE5vZGVzKSxpPXQuY29uY2F0KG8pO2lmKG4oaSkpcmV0dXJuIHUoKX0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciB1PWZ1bmN0aW9uKCl7fTt0LmRlZmF1bHQ9e2lzU3VwcG9ydGVkOmkscmVhZHk6cn19LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gbygpe3JldHVybiBuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmF8fFwiXCJ9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxyPS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaSxhPS8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLHU9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLGM9LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kscz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtuKHRoaXMsZSl9cmV0dXJuIGkoZSxbe2tleTpcInBob25lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1vKCk7cmV0dXJuISghci50ZXN0KGUpJiYhYS50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJtb2JpbGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPW8oKTtyZXR1cm4hKCF1LnRlc3QoZSkmJiFjLnRlc3QoZS5zdWJzdHIoMCw0KSkpfX0se2tleTpcInRhYmxldFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9iaWxlKCkmJiF0aGlzLnBob25lKCl9fV0pLGV9KCk7dC5kZWZhdWx0PW5ldyBzfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1lLm5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3Mtb25jZVwiKTt0PmUucG9zaXRpb24/ZS5ub2RlLmNsYXNzTGlzdC5hZGQoXCJhb3MtYW5pbWF0ZVwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbyYmKFwiZmFsc2VcIj09PW98fCFuJiZcInRydWVcIiE9PW8pJiZlLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFvcy1hbmltYXRlXCIpfSxvPWZ1bmN0aW9uKGUsdCl7dmFyIG89d2luZG93LnBhZ2VZT2Zmc2V0LGk9d2luZG93LmlubmVySGVpZ2h0O2UuZm9yRWFjaChmdW5jdGlvbihlLHIpe24oZSxpK28sdCl9KX07dC5kZWZhdWx0PW99LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1uKDEyKSxyPW8oaSksYT1mdW5jdGlvbihlLHQpe3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSxuKXtlLm5vZGUuY2xhc3NMaXN0LmFkZChcImFvcy1pbml0XCIpLGUucG9zaXRpb249KDAsci5kZWZhdWx0KShlLm5vZGUsdC5vZmZzZXQpfSksZX07dC5kZWZhdWx0PWF9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1uKDEzKSxyPW8oaSksYT1mdW5jdGlvbihlLHQpe3ZhciBuPTAsbz0wLGk9d2luZG93LmlubmVySGVpZ2h0LGE9e29mZnNldDplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLW9mZnNldFwiKSxhbmNob3I6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1hbmNob3JcIiksYW5jaG9yUGxhY2VtZW50OmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudFwiKX07c3dpdGNoKGEub2Zmc2V0JiYhaXNOYU4oYS5vZmZzZXQpJiYobz1wYXJzZUludChhLm9mZnNldCkpLGEuYW5jaG9yJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEuYW5jaG9yKSYmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLmFuY2hvcilbMF0pLG49KDAsci5kZWZhdWx0KShlKS50b3AsYS5hbmNob3JQbGFjZW1lbnQpe2Nhc2VcInRvcC1ib3R0b21cIjpicmVhaztjYXNlXCJjZW50ZXItYm90dG9tXCI6bis9ZS5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJib3R0b20tYm90dG9tXCI6bis9ZS5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZVwidG9wLWNlbnRlclwiOm4rPWkvMjticmVhaztjYXNlXCJib3R0b20tY2VudGVyXCI6bis9aS8yK2Uub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2VcImNlbnRlci1jZW50ZXJcIjpuKz1pLzIrZS5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJ0b3AtdG9wXCI6bis9aTticmVhaztjYXNlXCJib3R0b20tdG9wXCI6bis9ZS5vZmZzZXRIZWlnaHQraTticmVhaztjYXNlXCJjZW50ZXItdG9wXCI6bis9ZS5vZmZzZXRIZWlnaHQvMitpfXJldHVybiBhLmFuY2hvclBsYWNlbWVudHx8YS5vZmZzZXR8fGlzTmFOKHQpfHwobz10KSxuK299O3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtlJiYhaXNOYU4oZS5vZmZzZXRMZWZ0KSYmIWlzTmFOKGUub2Zmc2V0VG9wKTspdCs9ZS5vZmZzZXRMZWZ0LShcIkJPRFlcIiE9ZS50YWdOYW1lP2Uuc2Nyb2xsTGVmdDowKSxuKz1lLm9mZnNldFRvcC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbFRvcDowKSxlPWUub2Zmc2V0UGFyZW50O3JldHVybnt0b3A6bixsZWZ0OnR9fTt0LmRlZmF1bHQ9bn0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlKXtyZXR1cm4gZT1lfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYW9zXVwiKSxBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZSxmdW5jdGlvbihlKXtyZXR1cm57bm9kZTplfX0pfTt0LmRlZmF1bHQ9bn1dKX0pOyIsIi8qIVxyXG4gKiBqcXVlcnktY29uZmlybSB2My4zLjQgKGh0dHA6Ly9jcmFmdHBpcC5naXRodWIuaW8vanF1ZXJ5LWNvbmZpcm0vKVxyXG4gKiBBdXRob3I6IEJvbmlmYWNlIFBlcmVpcmFcclxuICogV2Vic2l0ZTogd3d3LmNyYWZ0cGlwLmNvbVxyXG4gKiBDb250YWN0OiBoZXlAY3JhZnRwaXAuY29tXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMTkganF1ZXJ5LWNvbmZpcm1cclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JhZnRwaXAvanF1ZXJ5LWNvbmZpcm0vYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcbihmdW5jdGlvbihmYWN0b3J5KXtpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW1wianF1ZXJ5XCJdLGZhY3RvcnkpO31lbHNle2lmKHR5cGVvZiBtb2R1bGU9PT1cIm9iamVjdFwiJiZtb2R1bGUuZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24ocm9vdCxqUXVlcnkpe2lmKGpRdWVyeT09PXVuZGVmaW5lZCl7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2pRdWVyeT1yZXF1aXJlKFwianF1ZXJ5XCIpO31lbHNle2pRdWVyeT1yZXF1aXJlKFwianF1ZXJ5XCIpKHJvb3QpO319ZmFjdG9yeShqUXVlcnkpO3JldHVybiBqUXVlcnk7fTt9ZWxzZXtmYWN0b3J5KGpRdWVyeSk7fX19KGZ1bmN0aW9uKCQpe3ZhciB3PXdpbmRvdzskLmZuLmNvbmZpcm09ZnVuY3Rpb24ob3B0aW9ucyxvcHRpb24yKXtpZih0eXBlb2Ygb3B0aW9ucz09PVwidW5kZWZpbmVkXCIpe29wdGlvbnM9e307fWlmKHR5cGVvZiBvcHRpb25zPT09XCJzdHJpbmdcIil7b3B0aW9ucz17Y29udGVudDpvcHRpb25zLHRpdGxlOihvcHRpb24yKT9vcHRpb24yOmZhbHNlfTt9JCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7dmFyICR0aGlzPSQodGhpcyk7aWYoJHRoaXMuYXR0cihcImpjLWF0dGFjaGVkXCIpKXtjb25zb2xlLndhcm4oXCJqQ29uZmlybSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFjaGVkIHRvIHRoaXMgZWxlbWVudCBcIiwkdGhpc1swXSk7cmV0dXJuO30kdGhpcy5vbihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBqY09wdGlvbj0kLmV4dGVuZCh7fSxvcHRpb25zKTtpZigkdGhpcy5hdHRyKFwiZGF0YS10aXRsZVwiKSl7amNPcHRpb24udGl0bGU9JHRoaXMuYXR0cihcImRhdGEtdGl0bGVcIik7fWlmKCR0aGlzLmF0dHIoXCJkYXRhLWNvbnRlbnRcIikpe2pjT3B0aW9uLmNvbnRlbnQ9JHRoaXMuYXR0cihcImRhdGEtY29udGVudFwiKTt9aWYodHlwZW9mIGpjT3B0aW9uLmJ1dHRvbnM9PT1cInVuZGVmaW5lZFwiKXtqY09wdGlvbi5idXR0b25zPXt9O31qY09wdGlvbltcIiR0YXJnZXRcIl09JHRoaXM7aWYoJHRoaXMuYXR0cihcImhyZWZcIikmJk9iamVjdC5rZXlzKGpjT3B0aW9uLmJ1dHRvbnMpLmxlbmd0aD09PTApe3ZhciBidXR0b25zPSQuZXh0ZW5kKHRydWUse30sdy5qY29uZmlybS5wbHVnaW5EZWZhdWx0cy5kZWZhdWx0QnV0dG9ucywody5qY29uZmlybS5kZWZhdWx0c3x8e30pLmRlZmF1bHRCdXR0b25zfHx7fSk7dmFyIGZpcnN0QnRuPU9iamVjdC5rZXlzKGJ1dHRvbnMpWzBdO2pjT3B0aW9uLmJ1dHRvbnM9YnV0dG9ucztqY09wdGlvbi5idXR0b25zW2ZpcnN0QnRuXS5hY3Rpb249ZnVuY3Rpb24oKXtsb2NhdGlvbi5ocmVmPSR0aGlzLmF0dHIoXCJocmVmXCIpO307fWpjT3B0aW9uLmNsb3NlSWNvbj1mYWxzZTt2YXIgaW5zdGFuY2U9JC5jb25maXJtKGpjT3B0aW9uKTt9KTskdGhpcy5hdHRyKFwiamMtYXR0YWNoZWRcIix0cnVlKTt9KTtyZXR1cm4gJCh0aGlzKTt9OyQuY29uZmlybT1mdW5jdGlvbihvcHRpb25zLG9wdGlvbjIpe2lmKHR5cGVvZiBvcHRpb25zPT09XCJ1bmRlZmluZWRcIil7b3B0aW9ucz17fTt9aWYodHlwZW9mIG9wdGlvbnM9PT1cInN0cmluZ1wiKXtvcHRpb25zPXtjb250ZW50Om9wdGlvbnMsdGl0bGU6KG9wdGlvbjIpP29wdGlvbjI6ZmFsc2V9O312YXIgcHV0RGVmYXVsdEJ1dHRvbnM9IShvcHRpb25zLmJ1dHRvbnM9PT1mYWxzZSk7aWYodHlwZW9mIG9wdGlvbnMuYnV0dG9ucyE9PVwib2JqZWN0XCIpe29wdGlvbnMuYnV0dG9ucz17fTt9aWYoT2JqZWN0LmtleXMob3B0aW9ucy5idXR0b25zKS5sZW5ndGg9PT0wJiZwdXREZWZhdWx0QnV0dG9ucyl7dmFyIGJ1dHRvbnM9JC5leHRlbmQodHJ1ZSx7fSx3Lmpjb25maXJtLnBsdWdpbkRlZmF1bHRzLmRlZmF1bHRCdXR0b25zLCh3Lmpjb25maXJtLmRlZmF1bHRzfHx7fSkuZGVmYXVsdEJ1dHRvbnN8fHt9KTtvcHRpb25zLmJ1dHRvbnM9YnV0dG9uczt9cmV0dXJuIHcuamNvbmZpcm0ob3B0aW9ucyk7fTskLmFsZXJ0PWZ1bmN0aW9uKG9wdGlvbnMsb3B0aW9uMil7aWYodHlwZW9mIG9wdGlvbnM9PT1cInVuZGVmaW5lZFwiKXtvcHRpb25zPXt9O31pZih0eXBlb2Ygb3B0aW9ucz09PVwic3RyaW5nXCIpe29wdGlvbnM9e2NvbnRlbnQ6b3B0aW9ucyx0aXRsZToob3B0aW9uMik/b3B0aW9uMjpmYWxzZX07fXZhciBwdXREZWZhdWx0QnV0dG9ucz0hKG9wdGlvbnMuYnV0dG9ucz09PWZhbHNlKTtpZih0eXBlb2Ygb3B0aW9ucy5idXR0b25zIT09XCJvYmplY3RcIil7b3B0aW9ucy5idXR0b25zPXt9O31pZihPYmplY3Qua2V5cyhvcHRpb25zLmJ1dHRvbnMpLmxlbmd0aD09PTAmJnB1dERlZmF1bHRCdXR0b25zKXt2YXIgYnV0dG9ucz0kLmV4dGVuZCh0cnVlLHt9LHcuamNvbmZpcm0ucGx1Z2luRGVmYXVsdHMuZGVmYXVsdEJ1dHRvbnMsKHcuamNvbmZpcm0uZGVmYXVsdHN8fHt9KS5kZWZhdWx0QnV0dG9uc3x8e30pO3ZhciBmaXJzdEJ0bj1PYmplY3Qua2V5cyhidXR0b25zKVswXTtvcHRpb25zLmJ1dHRvbnNbZmlyc3RCdG5dPWJ1dHRvbnNbZmlyc3RCdG5dO31yZXR1cm4gdy5qY29uZmlybShvcHRpb25zKTt9OyQuZGlhbG9nPWZ1bmN0aW9uKG9wdGlvbnMsb3B0aW9uMil7aWYodHlwZW9mIG9wdGlvbnM9PT1cInVuZGVmaW5lZFwiKXtvcHRpb25zPXt9O31pZih0eXBlb2Ygb3B0aW9ucz09PVwic3RyaW5nXCIpe29wdGlvbnM9e2NvbnRlbnQ6b3B0aW9ucyx0aXRsZToob3B0aW9uMik/b3B0aW9uMjpmYWxzZSxjbG9zZUljb246ZnVuY3Rpb24oKXt9fTt9b3B0aW9ucy5idXR0b25zPXt9O2lmKHR5cGVvZiBvcHRpb25zLmNsb3NlSWNvbj09PVwidW5kZWZpbmVkXCIpe29wdGlvbnMuY2xvc2VJY29uPWZ1bmN0aW9uKCl7fTt9b3B0aW9ucy5jb25maXJtS2V5cz1bMTNdO3JldHVybiB3Lmpjb25maXJtKG9wdGlvbnMpO307dy5qY29uZmlybT1mdW5jdGlvbihvcHRpb25zKXtpZih0eXBlb2Ygb3B0aW9ucz09PVwidW5kZWZpbmVkXCIpe29wdGlvbnM9e307fXZhciBwbHVnaW5PcHRpb25zPSQuZXh0ZW5kKHRydWUse30sdy5qY29uZmlybS5wbHVnaW5EZWZhdWx0cyk7aWYody5qY29uZmlybS5kZWZhdWx0cyl7cGx1Z2luT3B0aW9ucz0kLmV4dGVuZCh0cnVlLHBsdWdpbk9wdGlvbnMsdy5qY29uZmlybS5kZWZhdWx0cyk7fXBsdWdpbk9wdGlvbnM9JC5leHRlbmQodHJ1ZSx7fSxwbHVnaW5PcHRpb25zLG9wdGlvbnMpO3ZhciBpbnN0YW5jZT1uZXcgdy5KY29uZmlybShwbHVnaW5PcHRpb25zKTt3Lmpjb25maXJtLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtyZXR1cm4gaW5zdGFuY2U7fTt3Lkpjb25maXJtPWZ1bmN0aW9uKG9wdGlvbnMpeyQuZXh0ZW5kKHRoaXMsb3B0aW9ucyk7dGhpcy5faW5pdCgpO307dy5KY29uZmlybS5wcm90b3R5cGU9e19pbml0OmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcztpZighdy5qY29uZmlybS5pbnN0YW5jZXMubGVuZ3RoKXt3Lmpjb25maXJtLmxhc3RGb2N1c2VkPSQoXCJib2R5XCIpLmZpbmQoXCI6Zm9jdXNcIik7fXRoaXMuX2lkPU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo5OTk5OSk7dGhpcy5jb250ZW50UGFyc2VkPSQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7aWYoIXRoaXMubGF6eU9wZW4pe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0Lm9wZW4oKTt9LDApO319LF9idWlsZEhUTUw6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO3RoaXMuX3BhcnNlQW5pbWF0aW9uKHRoaXMuYW5pbWF0aW9uLFwib1wiKTt0aGlzLl9wYXJzZUFuaW1hdGlvbih0aGlzLmNsb3NlQW5pbWF0aW9uLFwiY1wiKTt0aGlzLl9wYXJzZUJnRGlzbWlzc0FuaW1hdGlvbih0aGlzLmJhY2tncm91bmREaXNtaXNzQW5pbWF0aW9uKTt0aGlzLl9wYXJzZUNvbHVtbkNsYXNzKHRoaXMuY29sdW1uQ2xhc3MpO3RoaXMuX3BhcnNlVGhlbWUodGhpcy50aGVtZSk7dGhpcy5fcGFyc2VUeXBlKHRoaXMudHlwZSk7dmFyIHRlbXBsYXRlPSQodGhpcy50ZW1wbGF0ZSk7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS1ib3hcIikuYWRkQ2xhc3ModGhpcy5hbmltYXRpb25QYXJzZWQpLmFkZENsYXNzKHRoaXMuYmFja2dyb3VuZERpc21pc3NBbmltYXRpb25QYXJzZWQpLmFkZENsYXNzKHRoaXMudHlwZVBhcnNlZCk7aWYodGhpcy50eXBlQW5pbWF0ZWQpe3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tYm94XCIpLmFkZENsYXNzKFwiamNvbmZpcm0tdHlwZS1hbmltYXRlZFwiKTt9aWYodGhpcy51c2VCb290c3RyYXApe3RlbXBsYXRlLmZpbmQoXCIuamMtYnMzLXJvd1wiKS5hZGRDbGFzcyh0aGlzLmJvb3RzdHJhcENsYXNzZXMucm93KTt0ZW1wbGF0ZS5maW5kKFwiLmpjLWJzMy1yb3dcIikuYWRkQ2xhc3MoXCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyIGp1c3RpZnktY29udGVudC1zbS1jZW50ZXIganVzdGlmeS1jb250ZW50LXhzLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbGctY2VudGVyXCIpO3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tYm94LWNvbnRhaW5lclwiKS5hZGRDbGFzcyh0aGlzLmNvbHVtbkNsYXNzUGFyc2VkKTtpZih0aGlzLmNvbnRhaW5lckZsdWlkKXt0ZW1wbGF0ZS5maW5kKFwiLmpjLWJzMy1jb250YWluZXJcIikuYWRkQ2xhc3ModGhpcy5ib290c3RyYXBDbGFzc2VzLmNvbnRhaW5lckZsdWlkKTt9ZWxzZXt0ZW1wbGF0ZS5maW5kKFwiLmpjLWJzMy1jb250YWluZXJcIikuYWRkQ2xhc3ModGhpcy5ib290c3RyYXBDbGFzc2VzLmNvbnRhaW5lcik7fX1lbHNle3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tYm94XCIpLmNzcyhcIndpZHRoXCIsdGhpcy5ib3hXaWR0aCk7fWlmKHRoaXMudGl0bGVDbGFzcyl7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS10aXRsZS1jXCIpLmFkZENsYXNzKHRoaXMudGl0bGVDbGFzcyk7fXRlbXBsYXRlLmFkZENsYXNzKHRoaXMudGhlbWVQYXJzZWQpO3ZhciBhcmlhTGFiZWw9XCJqY29uZmlybS1ib3hcIit0aGlzLl9pZDt0ZW1wbGF0ZS5maW5kKFwiLmpjb25maXJtLWJveFwiKS5hdHRyKFwiYXJpYS1sYWJlbGxlZGJ5XCIsYXJpYUxhYmVsKS5hdHRyKFwidGFiaW5kZXhcIiwtMSk7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS1jb250ZW50XCIpLmF0dHIoXCJpZFwiLGFyaWFMYWJlbCk7aWYodGhpcy5iZ09wYWNpdHkhPT1udWxsKXt0ZW1wbGF0ZS5maW5kKFwiLmpjb25maXJtLWJnXCIpLmNzcyhcIm9wYWNpdHlcIix0aGlzLmJnT3BhY2l0eSk7fWlmKHRoaXMucnRsKXt0ZW1wbGF0ZS5hZGRDbGFzcyhcImpjb25maXJtLXJ0bFwiKTt9dGhpcy4kZWw9dGVtcGxhdGUuYXBwZW5kVG8odGhpcy5jb250YWluZXIpO3RoaXMuJGpjb25maXJtQm94Q29udGFpbmVyPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tYm94LWNvbnRhaW5lclwiKTt0aGlzLiRqY29uZmlybUJveD10aGlzLiRib2R5PXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tYm94XCIpO3RoaXMuJGpjb25maXJtQmc9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1iZ1wiKTt0aGlzLiR0aXRsZT10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLXRpdGxlXCIpO3RoaXMuJHRpdGxlQ29udGFpbmVyPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tdGl0bGUtY1wiKTt0aGlzLiRjb250ZW50PXRoaXMuJGVsLmZpbmQoXCJkaXYuamNvbmZpcm0tY29udGVudFwiKTt0aGlzLiRjb250ZW50UGFuZT10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWNvbnRlbnQtcGFuZVwiKTt0aGlzLiRpY29uPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0taWNvbi1jXCIpO3RoaXMuJGNsb3NlSWNvbj10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWNsb3NlSWNvblwiKTt0aGlzLiRob2xkZXI9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1ob2xkZXJcIik7dGhpcy4kYnRuYz10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWJ1dHRvbnNcIik7dGhpcy4kc2Nyb2xsUGFuZT10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLXNjcm9sbHBhbmVcIik7dGhhdC5zZXRTdGFydGluZ1BvaW50KCk7dGhpcy5fY29udGVudFJlYWR5PSQuRGVmZXJyZWQoKTt0aGlzLl9tb2RhbFJlYWR5PSQuRGVmZXJyZWQoKTt0aGlzLiRob2xkZXIuY3NzKHtcInBhZGRpbmctdG9wXCI6dGhpcy5vZmZzZXRUb3AsXCJwYWRkaW5nLWJvdHRvbVwiOnRoaXMub2Zmc2V0Qm90dG9tLH0pO3RoaXMuc2V0VGl0bGUoKTt0aGlzLnNldEljb24oKTt0aGlzLl9zZXRCdXR0b25zKCk7dGhpcy5fcGFyc2VDb250ZW50KCk7dGhpcy5pbml0RHJhZ2dhYmxlKCk7aWYodGhpcy5pc0FqYXgpe3RoaXMuc2hvd0xvYWRpbmcoZmFsc2UpO30kLndoZW4odGhpcy5fY29udGVudFJlYWR5LHRoaXMuX21vZGFsUmVhZHkpLnRoZW4oZnVuY3Rpb24oKXtpZih0aGF0LmlzQWpheExvYWRpbmcpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LmlzQWpheExvYWRpbmc9ZmFsc2U7dGhhdC5zZXRDb250ZW50KCk7dGhhdC5zZXRUaXRsZSgpO3RoYXQuc2V0SWNvbigpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LmhpZGVMb2FkaW5nKGZhbHNlKTt0aGF0Ll91cGRhdGVDb250ZW50TWF4SGVpZ2h0KCk7fSwxMDApO2lmKHR5cGVvZiB0aGF0Lm9uQ29udGVudFJlYWR5PT09XCJmdW5jdGlvblwiKXt0aGF0Lm9uQ29udGVudFJlYWR5KCk7fX0sNTApO31lbHNle3RoYXQuX3VwZGF0ZUNvbnRlbnRNYXhIZWlnaHQoKTt0aGF0LnNldFRpdGxlKCk7dGhhdC5zZXRJY29uKCk7aWYodHlwZW9mIHRoYXQub25Db250ZW50UmVhZHk9PT1cImZ1bmN0aW9uXCIpe3RoYXQub25Db250ZW50UmVhZHkoKTt9fWlmKHRoYXQuYXV0b0Nsb3NlKXt0aGF0Ll9zdGFydENvdW50RG93bigpO319KS50aGVuKGZ1bmN0aW9uKCl7dGhhdC5fd2F0Y2hDb250ZW50KCk7fSk7aWYodGhpcy5hbmltYXRpb249PT1cIm5vbmVcIil7dGhpcy5hbmltYXRpb25TcGVlZD0xO3RoaXMuYW5pbWF0aW9uQm91bmNlPTE7fXRoaXMuJGJvZHkuY3NzKHRoaXMuX2dldENTUyh0aGlzLmFuaW1hdGlvblNwZWVkLHRoaXMuYW5pbWF0aW9uQm91bmNlKSk7dGhpcy4kY29udGVudFBhbmUuY3NzKHRoaXMuX2dldENTUyh0aGlzLmFuaW1hdGlvblNwZWVkLDEpKTt0aGlzLiRqY29uZmlybUJnLmNzcyh0aGlzLl9nZXRDU1ModGhpcy5hbmltYXRpb25TcGVlZCwxKSk7dGhpcy4kamNvbmZpcm1Cb3hDb250YWluZXIuY3NzKHRoaXMuX2dldENTUyh0aGlzLmFuaW1hdGlvblNwZWVkLDEpKTt9LF90eXBlUHJlZml4OlwiamNvbmZpcm0tdHlwZS1cIix0eXBlUGFyc2VkOlwiXCIsX3BhcnNlVHlwZTpmdW5jdGlvbih0eXBlKXt0aGlzLnR5cGVQYXJzZWQ9dGhpcy5fdHlwZVByZWZpeCt0eXBlO30sc2V0VHlwZTpmdW5jdGlvbih0eXBlKXt2YXIgb2xkQ2xhc3M9dGhpcy50eXBlUGFyc2VkO3RoaXMuX3BhcnNlVHlwZSh0eXBlKTt0aGlzLiRqY29uZmlybUJveC5yZW1vdmVDbGFzcyhvbGRDbGFzcykuYWRkQ2xhc3ModGhpcy50eXBlUGFyc2VkKTt9LHRoZW1lUGFyc2VkOlwiXCIsX3RoZW1lUHJlZml4OlwiamNvbmZpcm0tXCIsc2V0VGhlbWU6ZnVuY3Rpb24odGhlbWUpe3ZhciBwcmV2aW91cz10aGlzLnRoZW1lO3RoaXMudGhlbWU9dGhlbWV8fHRoaXMudGhlbWU7dGhpcy5fcGFyc2VUaGVtZSh0aGlzLnRoZW1lKTtpZihwcmV2aW91cyl7dGhpcy4kZWwucmVtb3ZlQ2xhc3MocHJldmlvdXMpO310aGlzLiRlbC5hZGRDbGFzcyh0aGlzLnRoZW1lUGFyc2VkKTt0aGlzLnRoZW1lPXRoZW1lO30sX3BhcnNlVGhlbWU6ZnVuY3Rpb24odGhlbWUpe3ZhciB0aGF0PXRoaXM7dGhlbWU9dGhlbWUuc3BsaXQoXCIsXCIpOyQuZWFjaCh0aGVtZSxmdW5jdGlvbihrLGEpe2lmKGEuaW5kZXhPZih0aGF0Ll90aGVtZVByZWZpeCk9PT0tMSl7dGhlbWVba109dGhhdC5fdGhlbWVQcmVmaXgrJC50cmltKGEpO319KTt0aGlzLnRoZW1lUGFyc2VkPXRoZW1lLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7fSxiYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvblBhcnNlZDpcIlwiLF9iZ0Rpc21pc3NQcmVmaXg6XCJqY29uZmlybS1oaWxpZ2h0LVwiLF9wYXJzZUJnRGlzbWlzc0FuaW1hdGlvbjpmdW5jdGlvbihiZ0Rpc21pc3NBbmltYXRpb24pe3ZhciBhbmltYXRpb249YmdEaXNtaXNzQW5pbWF0aW9uLnNwbGl0KFwiLFwiKTt2YXIgdGhhdD10aGlzOyQuZWFjaChhbmltYXRpb24sZnVuY3Rpb24oayxhKXtpZihhLmluZGV4T2YodGhhdC5fYmdEaXNtaXNzUHJlZml4KT09PS0xKXthbmltYXRpb25ba109dGhhdC5fYmdEaXNtaXNzUHJlZml4KyQudHJpbShhKTt9fSk7dGhpcy5iYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvblBhcnNlZD1hbmltYXRpb24uam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTt9LGFuaW1hdGlvblBhcnNlZDpcIlwiLGNsb3NlQW5pbWF0aW9uUGFyc2VkOlwiXCIsX2FuaW1hdGlvblByZWZpeDpcImpjb25maXJtLWFuaW1hdGlvbi1cIixzZXRBbmltYXRpb246ZnVuY3Rpb24oYW5pbWF0aW9uKXt0aGlzLmFuaW1hdGlvbj1hbmltYXRpb258fHRoaXMuYW5pbWF0aW9uO3RoaXMuX3BhcnNlQW5pbWF0aW9uKHRoaXMuYW5pbWF0aW9uLFwib1wiKTt9LF9wYXJzZUFuaW1hdGlvbjpmdW5jdGlvbihhbmltYXRpb24sd2hpY2gpe3doaWNoPXdoaWNofHxcIm9cIjt2YXIgYW5pbWF0aW9ucz1hbmltYXRpb24uc3BsaXQoXCIsXCIpO3ZhciB0aGF0PXRoaXM7JC5lYWNoKGFuaW1hdGlvbnMsZnVuY3Rpb24oayxhKXtpZihhLmluZGV4T2YodGhhdC5fYW5pbWF0aW9uUHJlZml4KT09PS0xKXthbmltYXRpb25zW2tdPXRoYXQuX2FuaW1hdGlvblByZWZpeCskLnRyaW0oYSk7fX0pO3ZhciBhX3N0cmluZz1hbmltYXRpb25zLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7aWYod2hpY2g9PT1cIm9cIil7dGhpcy5hbmltYXRpb25QYXJzZWQ9YV9zdHJpbmc7fWVsc2V7dGhpcy5jbG9zZUFuaW1hdGlvblBhcnNlZD1hX3N0cmluZzt9cmV0dXJuIGFfc3RyaW5nO30sc2V0Q2xvc2VBbmltYXRpb246ZnVuY3Rpb24oY2xvc2VBbmltYXRpb24pe3RoaXMuY2xvc2VBbmltYXRpb249Y2xvc2VBbmltYXRpb258fHRoaXMuY2xvc2VBbmltYXRpb247dGhpcy5fcGFyc2VBbmltYXRpb24odGhpcy5jbG9zZUFuaW1hdGlvbixcImNcIik7fSxzZXRBbmltYXRpb25TcGVlZDpmdW5jdGlvbihzcGVlZCl7dGhpcy5hbmltYXRpb25TcGVlZD1zcGVlZHx8dGhpcy5hbmltYXRpb25TcGVlZDt9LGNvbHVtbkNsYXNzUGFyc2VkOlwiXCIsc2V0Q29sdW1uQ2xhc3M6ZnVuY3Rpb24oY29sQ2xhc3Mpe2lmKCF0aGlzLnVzZUJvb3RzdHJhcCl7Y29uc29sZS53YXJuKFwiY2Fubm90IHNldCBjb2x1bW5DbGFzcywgdXNlQm9vdHN0cmFwIGlzIHNldCB0byBmYWxzZVwiKTtyZXR1cm47fXRoaXMuY29sdW1uQ2xhc3M9Y29sQ2xhc3N8fHRoaXMuY29sdW1uQ2xhc3M7dGhpcy5fcGFyc2VDb2x1bW5DbGFzcyh0aGlzLmNvbHVtbkNsYXNzKTt0aGlzLiRqY29uZmlybUJveENvbnRhaW5lci5hZGRDbGFzcyh0aGlzLmNvbHVtbkNsYXNzUGFyc2VkKTt9LF91cGRhdGVDb250ZW50TWF4SGVpZ2h0OmZ1bmN0aW9uKCl7dmFyIGhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCktKHRoaXMuJGpjb25maXJtQm94Lm91dGVySGVpZ2h0KCktdGhpcy4kY29udGVudFBhbmUub3V0ZXJIZWlnaHQoKSktKHRoaXMub2Zmc2V0VG9wK3RoaXMub2Zmc2V0Qm90dG9tKTt0aGlzLiRjb250ZW50UGFuZS5jc3Moe1wibWF4LWhlaWdodFwiOmhlaWdodCtcInB4XCJ9KTt9LHNldEJveFdpZHRoOmZ1bmN0aW9uKHdpZHRoKXtpZih0aGlzLnVzZUJvb3RzdHJhcCl7Y29uc29sZS53YXJuKFwiY2Fubm90IHNldCBib3hXaWR0aCwgdXNlQm9vdHN0cmFwIGlzIHNldCB0byB0cnVlXCIpO3JldHVybjt9dGhpcy5ib3hXaWR0aD13aWR0aDt0aGlzLiRqY29uZmlybUJveC5jc3MoXCJ3aWR0aFwiLHdpZHRoKTt9LF9wYXJzZUNvbHVtbkNsYXNzOmZ1bmN0aW9uKGNvbENsYXNzKXtjb2xDbGFzcz1jb2xDbGFzcy50b0xvd2VyQ2FzZSgpO3ZhciBwO3N3aXRjaChjb2xDbGFzcyl7Y2FzZVwieGxcIjpjYXNlXCJ4bGFyZ2VcIjpwPVwiY29sLW1kLTEyXCI7YnJlYWs7Y2FzZVwibFwiOmNhc2VcImxhcmdlXCI6cD1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiO2JyZWFrO2Nhc2VcIm1cIjpjYXNlXCJtZWRpdW1cIjpwPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXCI7YnJlYWs7Y2FzZVwic1wiOmNhc2VcInNtYWxsXCI6cD1cImNvbC1tZC00IGNvbC1tZC1vZmZzZXQtNFwiO2JyZWFrO2Nhc2VcInhzXCI6Y2FzZVwieHNtYWxsXCI6cD1cImNvbC1tZC0yIGNvbC1tZC1vZmZzZXQtNVwiO2JyZWFrO2RlZmF1bHQ6cD1jb2xDbGFzczt9dGhpcy5jb2x1bW5DbGFzc1BhcnNlZD1wO30saW5pdERyYWdnYWJsZTpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7dmFyICR0PXRoaXMuJHRpdGxlQ29udGFpbmVyO3RoaXMucmVzZXREcmFnKCk7aWYodGhpcy5kcmFnZ2FibGUpeyR0Lm9uKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oZSl7JHQuYWRkQ2xhc3MoXCJqY29uZmlybS1oYW5kXCIpO3RoYXQubW91c2VYPWUuY2xpZW50WDt0aGF0Lm1vdXNlWT1lLmNsaWVudFk7dGhhdC5pc0RyYWc9dHJ1ZTt9KTskKHdpbmRvdykub24oXCJtb3VzZW1vdmUuXCIrdGhpcy5faWQsZnVuY3Rpb24oZSl7aWYodGhhdC5pc0RyYWcpe3RoYXQubW92aW5nWD1lLmNsaWVudFgtdGhhdC5tb3VzZVgrdGhhdC5pbml0aWFsWDt0aGF0Lm1vdmluZ1k9ZS5jbGllbnRZLXRoYXQubW91c2VZK3RoYXQuaW5pdGlhbFk7dGhhdC5zZXREcmFnKCk7fX0pOyQod2luZG93KS5vbihcIm1vdXNldXAuXCIrdGhpcy5faWQsZnVuY3Rpb24oKXskdC5yZW1vdmVDbGFzcyhcImpjb25maXJtLWhhbmRcIik7aWYodGhhdC5pc0RyYWcpe3RoYXQuaXNEcmFnPWZhbHNlO3RoYXQuaW5pdGlhbFg9dGhhdC5tb3ZpbmdYO3RoYXQuaW5pdGlhbFk9dGhhdC5tb3ZpbmdZO319KTt9fSxyZXNldERyYWc6ZnVuY3Rpb24oKXt0aGlzLmlzRHJhZz1mYWxzZTt0aGlzLmluaXRpYWxYPTA7dGhpcy5pbml0aWFsWT0wO3RoaXMubW92aW5nWD0wO3RoaXMubW92aW5nWT0wO3RoaXMubW91c2VYPTA7dGhpcy5tb3VzZVk9MDt0aGlzLiRqY29uZmlybUJveENvbnRhaW5lci5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIiswK1wicHgsIFwiKzArXCJweClcIik7fSxzZXREcmFnOmZ1bmN0aW9uKCl7aWYoIXRoaXMuZHJhZ2dhYmxlKXtyZXR1cm47fXRoaXMuYWxpZ25NaWRkbGU9ZmFsc2U7dmFyIGJveFdpZHRoPXRoaXMuJGpjb25maXJtQm94Lm91dGVyV2lkdGgoKTt2YXIgYm94SGVpZ2h0PXRoaXMuJGpjb25maXJtQm94Lm91dGVySGVpZ2h0KCk7dmFyIHdpbmRvd1dpZHRoPSQod2luZG93KS53aWR0aCgpO3ZhciB3aW5kb3dIZWlnaHQ9JCh3aW5kb3cpLmhlaWdodCgpO3ZhciB0aGF0PXRoaXM7dmFyIGRyYWdVcGRhdGU9MTtpZih0aGF0Lm1vdmluZ1glZHJhZ1VwZGF0ZT09PTB8fHRoYXQubW92aW5nWSVkcmFnVXBkYXRlPT09MCl7aWYodGhhdC5kcmFnV2luZG93Qm9yZGVyKXt2YXIgbGVmdERpc3RhbmNlPSh3aW5kb3dXaWR0aC8yKS1ib3hXaWR0aC8yO3ZhciB0b3BEaXN0YW5jZT0od2luZG93SGVpZ2h0LzIpLWJveEhlaWdodC8yO3RvcERpc3RhbmNlLT10aGF0LmRyYWdXaW5kb3dHYXA7bGVmdERpc3RhbmNlLT10aGF0LmRyYWdXaW5kb3dHYXA7aWYobGVmdERpc3RhbmNlK3RoYXQubW92aW5nWDwwKXt0aGF0Lm1vdmluZ1g9LWxlZnREaXN0YW5jZTt9ZWxzZXtpZihsZWZ0RGlzdGFuY2UtdGhhdC5tb3ZpbmdYPDApe3RoYXQubW92aW5nWD1sZWZ0RGlzdGFuY2U7fX1pZih0b3BEaXN0YW5jZSt0aGF0Lm1vdmluZ1k8MCl7dGhhdC5tb3ZpbmdZPS10b3BEaXN0YW5jZTt9ZWxzZXtpZih0b3BEaXN0YW5jZS10aGF0Lm1vdmluZ1k8MCl7dGhhdC5tb3ZpbmdZPXRvcERpc3RhbmNlO319fXRoYXQuJGpjb25maXJtQm94Q29udGFpbmVyLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoYXQubW92aW5nWCtcInB4LCBcIit0aGF0Lm1vdmluZ1krXCJweClcIik7fX0sX3Njcm9sbFRvcDpmdW5jdGlvbigpe2lmKHR5cGVvZiBwYWdlWU9mZnNldCE9PVwidW5kZWZpbmVkXCIpe3JldHVybiBwYWdlWU9mZnNldDt9ZWxzZXt2YXIgQj1kb2N1bWVudC5ib2R5O3ZhciBEPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtEPShELmNsaWVudEhlaWdodCk/RDpCO3JldHVybiBELnNjcm9sbFRvcDt9fSxfd2F0Y2hDb250ZW50OmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcztpZih0aGlzLl90aW1lcil7Y2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7fXZhciBwcmV2Q29udGVudEhlaWdodD0wO3RoaXMuX3RpbWVyPXNldEludGVydmFsKGZ1bmN0aW9uKCl7aWYodGhhdC5zbW9vdGhDb250ZW50KXt2YXIgY29udGVudEhlaWdodD10aGF0LiRjb250ZW50Lm91dGVySGVpZ2h0KCl8fDA7aWYoY29udGVudEhlaWdodCE9PXByZXZDb250ZW50SGVpZ2h0KXtwcmV2Q29udGVudEhlaWdodD1jb250ZW50SGVpZ2h0O312YXIgd2g9JCh3aW5kb3cpLmhlaWdodCgpO3ZhciB0b3RhbD10aGF0Lm9mZnNldFRvcCt0aGF0Lm9mZnNldEJvdHRvbSt0aGF0LiRqY29uZmlybUJveC5oZWlnaHQoKS10aGF0LiRjb250ZW50UGFuZS5oZWlnaHQoKSt0aGF0LiRjb250ZW50LmhlaWdodCgpO2lmKHRvdGFsPHdoKXt0aGF0LiRjb250ZW50UGFuZS5hZGRDbGFzcyhcIm5vLXNjcm9sbFwiKTt9ZWxzZXt0aGF0LiRjb250ZW50UGFuZS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbFwiKTt9fX0sdGhpcy53YXRjaEludGVydmFsKTt9LF9vdmVyZmxvd0NsYXNzOlwiamNvbmZpcm0tb3ZlcmZsb3dcIixfaGlsaWdodEFuaW1hdGluZzpmYWxzZSxoaWdobGlnaHQ6ZnVuY3Rpb24oKXt0aGlzLmhpTGlnaHRNb2RhbCgpO30saGlMaWdodE1vZGFsOmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcztpZih0aGlzLl9oaWxpZ2h0QW5pbWF0aW5nKXtyZXR1cm47fXRoYXQuJGJvZHkuYWRkQ2xhc3MoXCJoaWxpZ2h0XCIpO3ZhciBkdXJhdGlvbj1wYXJzZUZsb2F0KHRoYXQuJGJvZHkuY3NzKFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIpKXx8Mjt0aGlzLl9oaWxpZ2h0QW5pbWF0aW5nPXRydWU7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuX2hpbGlnaHRBbmltYXRpbmc9ZmFsc2U7dGhhdC4kYm9keS5yZW1vdmVDbGFzcyhcImhpbGlnaHRcIik7fSxkdXJhdGlvbioxMDAwKTt9LF9iaW5kRXZlbnRzOmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpczt0aGlzLmJveENsaWNrZWQ9ZmFsc2U7dGhpcy4kc2Nyb2xsUGFuZS5jbGljayhmdW5jdGlvbihlKXtpZighdGhhdC5ib3hDbGlja2VkKXt2YXIgYnV0dG9uTmFtZT1mYWxzZTt2YXIgc2hvdWxkQ2xvc2U9ZmFsc2U7dmFyIHN0cjtpZih0eXBlb2YgdGhhdC5iYWNrZ3JvdW5kRGlzbWlzcz09PVwiZnVuY3Rpb25cIil7c3RyPXRoYXQuYmFja2dyb3VuZERpc21pc3MoKTt9ZWxzZXtzdHI9dGhhdC5iYWNrZ3JvdW5kRGlzbWlzczt9aWYodHlwZW9mIHN0cj09PVwic3RyaW5nXCImJnR5cGVvZiB0aGF0LmJ1dHRvbnNbc3RyXSE9PVwidW5kZWZpbmVkXCIpe2J1dHRvbk5hbWU9c3RyO3Nob3VsZENsb3NlPWZhbHNlO31lbHNle2lmKHR5cGVvZiBzdHI9PT1cInVuZGVmaW5lZFwifHwhIShzdHIpPT09dHJ1ZSl7c2hvdWxkQ2xvc2U9dHJ1ZTt9ZWxzZXtzaG91bGRDbG9zZT1mYWxzZTt9fWlmKGJ1dHRvbk5hbWUpe3ZhciBidG5SZXNwb25zZT10aGF0LmJ1dHRvbnNbYnV0dG9uTmFtZV0uYWN0aW9uLmFwcGx5KHRoYXQpO3Nob3VsZENsb3NlPSh0eXBlb2YgYnRuUmVzcG9uc2U9PT1cInVuZGVmaW5lZFwiKXx8ISEoYnRuUmVzcG9uc2UpO31pZihzaG91bGRDbG9zZSl7dGhhdC5jbG9zZSgpO31lbHNle3RoYXQuaGlMaWdodE1vZGFsKCk7fX10aGF0LmJveENsaWNrZWQ9ZmFsc2U7fSk7dGhpcy4kamNvbmZpcm1Cb3guY2xpY2soZnVuY3Rpb24oZSl7dGhhdC5ib3hDbGlja2VkPXRydWU7fSk7dmFyIGlzS2V5RG93bj1mYWxzZTskKHdpbmRvdykub24oXCJqY0tleURvd24uXCIrdGhhdC5faWQsZnVuY3Rpb24oZSl7aWYoIWlzS2V5RG93bil7aXNLZXlEb3duPXRydWU7fX0pOyQod2luZG93KS5vbihcImtleXVwLlwiK3RoYXQuX2lkLGZ1bmN0aW9uKGUpe2lmKGlzS2V5RG93bil7dGhhdC5yZWFjdE9uS2V5KGUpO2lzS2V5RG93bj1mYWxzZTt9fSk7JCh3aW5kb3cpLm9uKFwicmVzaXplLlwiK3RoaXMuX2lkLGZ1bmN0aW9uKCl7dGhhdC5fdXBkYXRlQ29udGVudE1heEhlaWdodCgpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LnJlc2V0RHJhZygpO30sMTAwKTt9KTt9LF9jdWJpY19iZXppZXI6XCIwLjM2LCAwLjU1LCAwLjE5XCIsX2dldENTUzpmdW5jdGlvbihzcGVlZCxib3VuY2Upe3JldHVybntcIi13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvblwiOnNwZWVkLzEwMDArXCJzXCIsXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6c3BlZWQvMTAwMCtcInNcIixcIi13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIjpcImN1YmljLWJlemllcihcIit0aGlzLl9jdWJpY19iZXppZXIrXCIsIFwiK2JvdW5jZStcIilcIixcInRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCI6XCJjdWJpYy1iZXppZXIoXCIrdGhpcy5fY3ViaWNfYmV6aWVyK1wiLCBcIitib3VuY2UrXCIpXCJ9O30sX3NldEJ1dHRvbnM6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO3ZhciB0b3RhbF9idXR0b25zPTA7aWYodHlwZW9mIHRoaXMuYnV0dG9ucyE9PVwib2JqZWN0XCIpe3RoaXMuYnV0dG9ucz17fTt9JC5lYWNoKHRoaXMuYnV0dG9ucyxmdW5jdGlvbihrZXksYnV0dG9uKXt0b3RhbF9idXR0b25zKz0xO2lmKHR5cGVvZiBidXR0b249PT1cImZ1bmN0aW9uXCIpe3RoYXQuYnV0dG9uc1trZXldPWJ1dHRvbj17YWN0aW9uOmJ1dHRvbn07fXRoYXQuYnV0dG9uc1trZXldLnRleHQ9YnV0dG9uLnRleHR8fGtleTt0aGF0LmJ1dHRvbnNba2V5XS5idG5DbGFzcz1idXR0b24uYnRuQ2xhc3N8fFwiYnRuLWRlZmF1bHRcIjt0aGF0LmJ1dHRvbnNba2V5XS5hY3Rpb249YnV0dG9uLmFjdGlvbnx8ZnVuY3Rpb24oKXt9O3RoYXQuYnV0dG9uc1trZXldLmtleXM9YnV0dG9uLmtleXN8fFtdO3RoYXQuYnV0dG9uc1trZXldLmlzSGlkZGVuPWJ1dHRvbi5pc0hpZGRlbnx8ZmFsc2U7dGhhdC5idXR0b25zW2tleV0uaXNEaXNhYmxlZD1idXR0b24uaXNEaXNhYmxlZHx8ZmFsc2U7JC5lYWNoKHRoYXQuYnV0dG9uc1trZXldLmtleXMsZnVuY3Rpb24oaSxhKXt0aGF0LmJ1dHRvbnNba2V5XS5rZXlzW2ldPWEudG9Mb3dlckNhc2UoKTt9KTt2YXIgYnV0dG9uX2VsZW1lbnQ9JCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIj48L2J1dHRvbj4nKS5odG1sKHRoYXQuYnV0dG9uc1trZXldLnRleHQpLmFkZENsYXNzKHRoYXQuYnV0dG9uc1trZXldLmJ0bkNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIix0aGF0LmJ1dHRvbnNba2V5XS5pc0Rpc2FibGVkKS5jc3MoXCJkaXNwbGF5XCIsdGhhdC5idXR0b25zW2tleV0uaXNIaWRkZW4/XCJub25lXCI6XCJcIikuY2xpY2soZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciByZXM9dGhhdC5idXR0b25zW2tleV0uYWN0aW9uLmFwcGx5KHRoYXQsW3RoYXQuYnV0dG9uc1trZXldXSk7dGhhdC5vbkFjdGlvbi5hcHBseSh0aGF0LFtrZXksdGhhdC5idXR0b25zW2tleV1dKTt0aGF0Ll9zdG9wQ291bnREb3duKCk7aWYodHlwZW9mIHJlcz09PVwidW5kZWZpbmVkXCJ8fHJlcyl7dGhhdC5jbG9zZSgpO319KTt0aGF0LmJ1dHRvbnNba2V5XS5lbD1idXR0b25fZWxlbWVudDt0aGF0LmJ1dHRvbnNba2V5XS5zZXRUZXh0PWZ1bmN0aW9uKHRleHQpe2J1dHRvbl9lbGVtZW50Lmh0bWwodGV4dCk7fTt0aGF0LmJ1dHRvbnNba2V5XS5hZGRDbGFzcz1mdW5jdGlvbihjbGFzc05hbWUpe2J1dHRvbl9lbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7fTt0aGF0LmJ1dHRvbnNba2V5XS5yZW1vdmVDbGFzcz1mdW5jdGlvbihjbGFzc05hbWUpe2J1dHRvbl9lbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7fTt0aGF0LmJ1dHRvbnNba2V5XS5kaXNhYmxlPWZ1bmN0aW9uKCl7dGhhdC5idXR0b25zW2tleV0uaXNEaXNhYmxlZD10cnVlO2J1dHRvbl9lbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiLHRydWUpO307dGhhdC5idXR0b25zW2tleV0uZW5hYmxlPWZ1bmN0aW9uKCl7dGhhdC5idXR0b25zW2tleV0uaXNEaXNhYmxlZD1mYWxzZTtidXR0b25fZWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIixmYWxzZSk7fTt0aGF0LmJ1dHRvbnNba2V5XS5zaG93PWZ1bmN0aW9uKCl7dGhhdC5idXR0b25zW2tleV0uaXNIaWRkZW49ZmFsc2U7YnV0dG9uX2VsZW1lbnQuY3NzKFwiZGlzcGxheVwiLFwiXCIpO307dGhhdC5idXR0b25zW2tleV0uaGlkZT1mdW5jdGlvbigpe3RoYXQuYnV0dG9uc1trZXldLmlzSGlkZGVuPXRydWU7YnV0dG9uX2VsZW1lbnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTt9O3RoYXRbXCIkX1wiK2tleV09dGhhdFtcIiQkXCIra2V5XT1idXR0b25fZWxlbWVudDt0aGF0LiRidG5jLmFwcGVuZChidXR0b25fZWxlbWVudCk7fSk7aWYodG90YWxfYnV0dG9ucz09PTApe3RoaXMuJGJ0bmMuaGlkZSgpO31pZih0aGlzLmNsb3NlSWNvbj09PW51bGwmJnRvdGFsX2J1dHRvbnM9PT0wKXt0aGlzLmNsb3NlSWNvbj10cnVlO31pZih0aGlzLmNsb3NlSWNvbil7aWYodGhpcy5jbG9zZUljb25DbGFzcyl7dmFyIGNsb3NlSHRtbD0nPGkgY2xhc3M9XCInK3RoaXMuY2xvc2VJY29uQ2xhc3MrJ1wiPjwvaT4nO3RoaXMuJGNsb3NlSWNvbi5odG1sKGNsb3NlSHRtbCk7fXRoaXMuJGNsb3NlSWNvbi5jbGljayhmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIGJ1dHRvbk5hbWU9ZmFsc2U7dmFyIHNob3VsZENsb3NlPWZhbHNlO3ZhciBzdHI7aWYodHlwZW9mIHRoYXQuY2xvc2VJY29uPT09XCJmdW5jdGlvblwiKXtzdHI9dGhhdC5jbG9zZUljb24oKTt9ZWxzZXtzdHI9dGhhdC5jbG9zZUljb247fWlmKHR5cGVvZiBzdHI9PT1cInN0cmluZ1wiJiZ0eXBlb2YgdGhhdC5idXR0b25zW3N0cl0hPT1cInVuZGVmaW5lZFwiKXtidXR0b25OYW1lPXN0cjtzaG91bGRDbG9zZT1mYWxzZTt9ZWxzZXtpZih0eXBlb2Ygc3RyPT09XCJ1bmRlZmluZWRcInx8ISEoc3RyKT09PXRydWUpe3Nob3VsZENsb3NlPXRydWU7fWVsc2V7c2hvdWxkQ2xvc2U9ZmFsc2U7fX1pZihidXR0b25OYW1lKXt2YXIgYnRuUmVzcG9uc2U9dGhhdC5idXR0b25zW2J1dHRvbk5hbWVdLmFjdGlvbi5hcHBseSh0aGF0KTtzaG91bGRDbG9zZT0odHlwZW9mIGJ0blJlc3BvbnNlPT09XCJ1bmRlZmluZWRcIil8fCEhKGJ0blJlc3BvbnNlKTt9aWYoc2hvdWxkQ2xvc2Upe3RoYXQuY2xvc2UoKTt9fSk7dGhpcy4kY2xvc2VJY29uLnNob3coKTt9ZWxzZXt0aGlzLiRjbG9zZUljb24uaGlkZSgpO319LHNldFRpdGxlOmZ1bmN0aW9uKHN0cmluZyxmb3JjZSl7Zm9yY2U9Zm9yY2V8fGZhbHNlO2lmKHR5cGVvZiBzdHJpbmchPT1cInVuZGVmaW5lZFwiKXtpZih0eXBlb2Ygc3RyaW5nPT09XCJzdHJpbmdcIil7dGhpcy50aXRsZT1zdHJpbmc7fWVsc2V7aWYodHlwZW9mIHN0cmluZz09PVwiZnVuY3Rpb25cIil7aWYodHlwZW9mIHN0cmluZy5wcm9taXNlPT09XCJmdW5jdGlvblwiKXtjb25zb2xlLmVycm9yKFwiUHJvbWlzZSB3YXMgcmV0dXJuZWQgZnJvbSB0aXRsZSBmdW5jdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLlwiKTt9dmFyIHJlc3BvbnNlPXN0cmluZygpO2lmKHR5cGVvZiByZXNwb25zZT09PVwic3RyaW5nXCIpe3RoaXMudGl0bGU9cmVzcG9uc2U7fWVsc2V7dGhpcy50aXRsZT1mYWxzZTt9fWVsc2V7dGhpcy50aXRsZT1mYWxzZTt9fX1pZih0aGlzLmlzQWpheExvYWRpbmcmJiFmb3JjZSl7cmV0dXJuO310aGlzLiR0aXRsZS5odG1sKHRoaXMudGl0bGV8fFwiXCIpO3RoaXMudXBkYXRlVGl0bGVDb250YWluZXIoKTt9LHNldEljb246ZnVuY3Rpb24oaWNvbkNsYXNzLGZvcmNlKXtmb3JjZT1mb3JjZXx8ZmFsc2U7aWYodHlwZW9mIGljb25DbGFzcyE9PVwidW5kZWZpbmVkXCIpe2lmKHR5cGVvZiBpY29uQ2xhc3M9PT1cInN0cmluZ1wiKXt0aGlzLmljb249aWNvbkNsYXNzO31lbHNle2lmKHR5cGVvZiBpY29uQ2xhc3M9PT1cImZ1bmN0aW9uXCIpe3ZhciByZXNwb25zZT1pY29uQ2xhc3MoKTtpZih0eXBlb2YgcmVzcG9uc2U9PT1cInN0cmluZ1wiKXt0aGlzLmljb249cmVzcG9uc2U7fWVsc2V7dGhpcy5pY29uPWZhbHNlO319ZWxzZXt0aGlzLmljb249ZmFsc2U7fX19aWYodGhpcy5pc0FqYXhMb2FkaW5nJiYhZm9yY2Upe3JldHVybjt9dGhpcy4kaWNvbi5odG1sKHRoaXMuaWNvbj8nPGkgY2xhc3M9XCInK3RoaXMuaWNvbisnXCI+PC9pPic6XCJcIik7dGhpcy51cGRhdGVUaXRsZUNvbnRhaW5lcigpO30sdXBkYXRlVGl0bGVDb250YWluZXI6ZnVuY3Rpb24oKXtpZighdGhpcy50aXRsZSYmIXRoaXMuaWNvbil7dGhpcy4kdGl0bGVDb250YWluZXIuaGlkZSgpO31lbHNle3RoaXMuJHRpdGxlQ29udGFpbmVyLnNob3coKTt9fSxzZXRDb250ZW50UHJlcGVuZDpmdW5jdGlvbihjb250ZW50LGZvcmNlKXtpZighY29udGVudCl7cmV0dXJuO310aGlzLmNvbnRlbnRQYXJzZWQucHJlcGVuZChjb250ZW50KTt9LHNldENvbnRlbnRBcHBlbmQ6ZnVuY3Rpb24oY29udGVudCl7aWYoIWNvbnRlbnQpe3JldHVybjt9dGhpcy5jb250ZW50UGFyc2VkLmFwcGVuZChjb250ZW50KTt9LHNldENvbnRlbnQ6ZnVuY3Rpb24oY29udGVudCxmb3JjZSl7Zm9yY2U9ISFmb3JjZTt2YXIgdGhhdD10aGlzO2lmKGNvbnRlbnQpe3RoaXMuY29udGVudFBhcnNlZC5odG1sKFwiXCIpLmFwcGVuZChjb250ZW50KTt9aWYodGhpcy5pc0FqYXhMb2FkaW5nJiYhZm9yY2Upe3JldHVybjt9dGhpcy4kY29udGVudC5odG1sKFwiXCIpO3RoaXMuJGNvbnRlbnQuYXBwZW5kKHRoaXMuY29udGVudFBhcnNlZCk7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuJGJvZHkuZmluZChcImlucHV0W2F1dG9mb2N1c106dmlzaWJsZTpmaXJzdFwiKS5mb2N1cygpO30sMTAwKTt9LGxvYWRpbmdTcGlubmVyOmZhbHNlLHNob3dMb2FkaW5nOmZ1bmN0aW9uKGRpc2FibGVCdXR0b25zKXt0aGlzLmxvYWRpbmdTcGlubmVyPXRydWU7dGhpcy4kamNvbmZpcm1Cb3guYWRkQ2xhc3MoXCJsb2FkaW5nXCIpO2lmKGRpc2FibGVCdXR0b25zKXt0aGlzLiRidG5jLmZpbmQoXCJidXR0b25cIikucHJvcChcImRpc2FibGVkXCIsdHJ1ZSk7fX0saGlkZUxvYWRpbmc6ZnVuY3Rpb24oZW5hYmxlQnV0dG9ucyl7dGhpcy5sb2FkaW5nU3Bpbm5lcj1mYWxzZTt0aGlzLiRqY29uZmlybUJveC5yZW1vdmVDbGFzcyhcImxvYWRpbmdcIik7aWYoZW5hYmxlQnV0dG9ucyl7dGhpcy4kYnRuYy5maW5kKFwiYnV0dG9uXCIpLnByb3AoXCJkaXNhYmxlZFwiLGZhbHNlKTt9fSxhamF4UmVzcG9uc2U6ZmFsc2UsY29udGVudFBhcnNlZDpcIlwiLGlzQWpheDpmYWxzZSxpc0FqYXhMb2FkaW5nOmZhbHNlLF9wYXJzZUNvbnRlbnQ6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO3ZhciBlPVwiJm5ic3A7XCI7aWYodHlwZW9mIHRoaXMuY29udGVudD09PVwiZnVuY3Rpb25cIil7dmFyIHJlcz10aGlzLmNvbnRlbnQuYXBwbHkodGhpcyk7aWYodHlwZW9mIHJlcz09PVwic3RyaW5nXCIpe3RoaXMuY29udGVudD1yZXM7fWVsc2V7aWYodHlwZW9mIHJlcz09PVwib2JqZWN0XCImJnR5cGVvZiByZXMuYWx3YXlzPT09XCJmdW5jdGlvblwiKXt0aGlzLmlzQWpheD10cnVlO3RoaXMuaXNBamF4TG9hZGluZz10cnVlO3Jlcy5hbHdheXMoZnVuY3Rpb24oZGF0YSxzdGF0dXMseGhyKXt0aGF0LmFqYXhSZXNwb25zZT17ZGF0YTpkYXRhLHN0YXR1czpzdGF0dXMseGhyOnhocn07dGhhdC5fY29udGVudFJlYWR5LnJlc29sdmUoZGF0YSxzdGF0dXMseGhyKTtpZih0eXBlb2YgdGhhdC5jb250ZW50TG9hZGVkPT09XCJmdW5jdGlvblwiKXt0aGF0LmNvbnRlbnRMb2FkZWQoZGF0YSxzdGF0dXMseGhyKTt9fSk7dGhpcy5jb250ZW50PWU7fWVsc2V7dGhpcy5jb250ZW50PWU7fX19aWYodHlwZW9mIHRoaXMuY29udGVudD09PVwic3RyaW5nXCImJnRoaXMuY29udGVudC5zdWJzdHIoMCw0KS50b0xvd2VyQ2FzZSgpPT09XCJ1cmw6XCIpe3RoaXMuaXNBamF4PXRydWU7dGhpcy5pc0FqYXhMb2FkaW5nPXRydWU7dmFyIHU9dGhpcy5jb250ZW50LnN1YnN0cmluZyg0LHRoaXMuY29udGVudC5sZW5ndGgpOyQuZ2V0KHUpLmRvbmUoZnVuY3Rpb24oaHRtbCl7dGhhdC5jb250ZW50UGFyc2VkLmh0bWwoaHRtbCk7fSkuYWx3YXlzKGZ1bmN0aW9uKGRhdGEsc3RhdHVzLHhocil7dGhhdC5hamF4UmVzcG9uc2U9e2RhdGE6ZGF0YSxzdGF0dXM6c3RhdHVzLHhocjp4aHJ9O3RoYXQuX2NvbnRlbnRSZWFkeS5yZXNvbHZlKGRhdGEsc3RhdHVzLHhocik7aWYodHlwZW9mIHRoYXQuY29udGVudExvYWRlZD09PVwiZnVuY3Rpb25cIil7dGhhdC5jb250ZW50TG9hZGVkKGRhdGEsc3RhdHVzLHhocik7fX0pO31pZighdGhpcy5jb250ZW50KXt0aGlzLmNvbnRlbnQ9ZTt9aWYoIXRoaXMuaXNBamF4KXt0aGlzLmNvbnRlbnRQYXJzZWQuaHRtbCh0aGlzLmNvbnRlbnQpO3RoaXMuc2V0Q29udGVudCgpO3RoYXQuX2NvbnRlbnRSZWFkeS5yZXNvbHZlKCk7fX0sX3N0b3BDb3VudERvd246ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKHRoaXMuYXV0b0Nsb3NlSW50ZXJ2YWwpO2lmKHRoaXMuJGNkKXt0aGlzLiRjZC5yZW1vdmUoKTt9fSxfc3RhcnRDb3VudERvd246ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO3ZhciBvcHQ9dGhpcy5hdXRvQ2xvc2Uuc3BsaXQoXCJ8XCIpO2lmKG9wdC5sZW5ndGghPT0yKXtjb25zb2xlLmVycm9yKFwiSW52YWxpZCBvcHRpb24gZm9yIGF1dG9DbG9zZS4gZXhhbXBsZSAnY2xvc2V8MTAwMDAnXCIpO3JldHVybiBmYWxzZTt9dmFyIGJ1dHRvbl9rZXk9b3B0WzBdO3ZhciB0aW1lPXBhcnNlSW50KG9wdFsxXSk7aWYodHlwZW9mIHRoaXMuYnV0dG9uc1tidXR0b25fa2V5XT09PVwidW5kZWZpbmVkXCIpe2NvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGJ1dHRvbiBrZXkgJ1wiK2J1dHRvbl9rZXkrXCInIGZvciBhdXRvQ2xvc2VcIik7cmV0dXJuIGZhbHNlO312YXIgc2Vjb25kcz1NYXRoLmNlaWwodGltZS8xMDAwKTt0aGlzLiRjZD0kKCc8c3BhbiBjbGFzcz1cImNvdW50ZG93blwiPiAoJytzZWNvbmRzK1wiKTwvc3Bhbj5cIikuYXBwZW5kVG8odGhpc1tcIiRfXCIrYnV0dG9uX2tleV0pO3RoaXMuYXV0b0Nsb3NlSW50ZXJ2YWw9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt0aGF0LiRjZC5odG1sKFwiIChcIisoc2Vjb25kcy09MSkrXCIpIFwiKTtpZihzZWNvbmRzPD0wKXt0aGF0W1wiJCRcIitidXR0b25fa2V5XS50cmlnZ2VyKFwiY2xpY2tcIik7dGhhdC5fc3RvcENvdW50RG93bigpO319LDEwMDApO30sX2dldEtleTpmdW5jdGlvbihrZXkpe3N3aXRjaChrZXkpe2Nhc2UgMTkyOnJldHVyblwidGlsZGVcIjtjYXNlIDEzOnJldHVyblwiZW50ZXJcIjtjYXNlIDE2OnJldHVyblwic2hpZnRcIjtjYXNlIDk6cmV0dXJuXCJ0YWJcIjtjYXNlIDIwOnJldHVyblwiY2Fwc2xvY2tcIjtjYXNlIDE3OnJldHVyblwiY3RybFwiO2Nhc2UgOTE6cmV0dXJuXCJ3aW5cIjtjYXNlIDE4OnJldHVyblwiYWx0XCI7Y2FzZSAyNzpyZXR1cm5cImVzY1wiO2Nhc2UgMzI6cmV0dXJuXCJzcGFjZVwiO312YXIgaW5pdGlhbD1TdHJpbmcuZnJvbUNoYXJDb2RlKGtleSk7aWYoL15bQS16MC05XSskLy50ZXN0KGluaXRpYWwpKXtyZXR1cm4gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO31lbHNle3JldHVybiBmYWxzZTt9fSxyZWFjdE9uS2V5OmZ1bmN0aW9uKGUpe3ZhciB0aGF0PXRoaXM7dmFyIGE9JChcIi5qY29uZmlybVwiKTtpZihhLmVxKGEubGVuZ3RoLTEpWzBdIT09dGhpcy4kZWxbMF0pe3JldHVybiBmYWxzZTt9dmFyIGtleT1lLndoaWNoO2lmKHRoaXMuJGNvbnRlbnQuZmluZChcIjppbnB1dFwiKS5pcyhcIjpmb2N1c1wiKSYmLzEzfDMyLy50ZXN0KGtleSkpe3JldHVybiBmYWxzZTt9dmFyIGtleUNoYXI9dGhpcy5fZ2V0S2V5KGtleSk7aWYoa2V5Q2hhcj09PVwiZXNjXCImJnRoaXMuZXNjYXBlS2V5KXtpZih0aGlzLmVzY2FwZUtleT09PXRydWUpe3RoaXMuJHNjcm9sbFBhbmUudHJpZ2dlcihcImNsaWNrXCIpO31lbHNle2lmKHR5cGVvZiB0aGlzLmVzY2FwZUtleT09PVwic3RyaW5nXCJ8fHR5cGVvZiB0aGlzLmVzY2FwZUtleT09PVwiZnVuY3Rpb25cIil7dmFyIGJ1dHRvbktleTtpZih0eXBlb2YgdGhpcy5lc2NhcGVLZXk9PT1cImZ1bmN0aW9uXCIpe2J1dHRvbktleT10aGlzLmVzY2FwZUtleSgpO31lbHNle2J1dHRvbktleT10aGlzLmVzY2FwZUtleTt9aWYoYnV0dG9uS2V5KXtpZih0eXBlb2YgdGhpcy5idXR0b25zW2J1dHRvbktleV09PT1cInVuZGVmaW5lZFwiKXtjb25zb2xlLndhcm4oXCJJbnZhbGlkIGVzY2FwZUtleSwgbm8gYnV0dG9ucyBmb3VuZCB3aXRoIGtleSBcIitidXR0b25LZXkpO31lbHNle3RoaXNbXCIkX1wiK2J1dHRvbktleV0udHJpZ2dlcihcImNsaWNrXCIpO319fX19JC5lYWNoKHRoaXMuYnV0dG9ucyxmdW5jdGlvbihrZXksYnV0dG9uKXtpZihidXR0b24ua2V5cy5pbmRleE9mKGtleUNoYXIpIT09LTEpe3RoYXRbXCIkX1wiK2tleV0udHJpZ2dlcihcImNsaWNrXCIpO319KTt9LHNldERpYWxvZ0NlbnRlcjpmdW5jdGlvbigpe2NvbnNvbGUuaW5mbyhcInNldERpYWxvZ0NlbnRlciBpcyBkZXByZWNhdGVkLCBkaWFsb2dzIGFyZSBjZW50ZXJlZCB3aXRoIENTUzMgdGFibGVzXCIpO30sX3Vud2F0Y2hDb250ZW50OmZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7fSxjbG9zZTpmdW5jdGlvbihvbkNsb3NlUGF5bG9hZCl7dmFyIHRoYXQ9dGhpcztpZih0eXBlb2YgdGhpcy5vbkNsb3NlPT09XCJmdW5jdGlvblwiKXt0aGlzLm9uQ2xvc2Uob25DbG9zZVBheWxvYWQpO310aGlzLl91bndhdGNoQ29udGVudCgpOyQod2luZG93KS51bmJpbmQoXCJyZXNpemUuXCIrdGhpcy5faWQpOyQod2luZG93KS51bmJpbmQoXCJrZXl1cC5cIit0aGlzLl9pZCk7JCh3aW5kb3cpLnVuYmluZChcImpjS2V5RG93bi5cIit0aGlzLl9pZCk7aWYodGhpcy5kcmFnZ2FibGUpeyQod2luZG93KS51bmJpbmQoXCJtb3VzZW1vdmUuXCIrdGhpcy5faWQpOyQod2luZG93KS51bmJpbmQoXCJtb3VzZXVwLlwiK3RoaXMuX2lkKTt0aGlzLiR0aXRsZUNvbnRhaW5lci51bmJpbmQoXCJtb3VzZWRvd25cIik7fXRoYXQuJGVsLnJlbW92ZUNsYXNzKHRoYXQubG9hZGVkQ2xhc3MpOyQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiamNvbmZpcm0tbm8tc2Nyb2xsLVwiK3RoYXQuX2lkKTt0aGF0LiRqY29uZmlybUJveENvbnRhaW5lci5yZW1vdmVDbGFzcyhcImpjb25maXJtLW5vLXRyYW5zaXRpb25cIik7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuJGJvZHkuYWRkQ2xhc3ModGhhdC5jbG9zZUFuaW1hdGlvblBhcnNlZCk7dGhhdC4kamNvbmZpcm1CZy5hZGRDbGFzcyhcImpjb25maXJtLWJnLWhcIik7dmFyIGNsb3NlVGltZXI9KHRoYXQuY2xvc2VBbmltYXRpb249PT1cIm5vbmVcIik/MTp0aGF0LmFuaW1hdGlvblNwZWVkO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LiRlbC5yZW1vdmUoKTt2YXIgbD13Lmpjb25maXJtLmluc3RhbmNlczt2YXIgaT13Lmpjb25maXJtLmluc3RhbmNlcy5sZW5ndGgtMTtmb3IoaTtpPj0wO2ktLSl7aWYody5qY29uZmlybS5pbnN0YW5jZXNbaV0uX2lkPT09dGhhdC5faWQpe3cuamNvbmZpcm0uaW5zdGFuY2VzLnNwbGljZShpLDEpO319aWYoIXcuamNvbmZpcm0uaW5zdGFuY2VzLmxlbmd0aCl7aWYodGhhdC5zY3JvbGxUb1ByZXZpb3VzRWxlbWVudCYmdy5qY29uZmlybS5sYXN0Rm9jdXNlZCYmdy5qY29uZmlybS5sYXN0Rm9jdXNlZC5sZW5ndGgmJiQuY29udGFpbnMoZG9jdW1lbnQsdy5qY29uZmlybS5sYXN0Rm9jdXNlZFswXSkpe3ZhciAkbGY9dy5qY29uZmlybS5sYXN0Rm9jdXNlZDtpZih0aGF0LnNjcm9sbFRvUHJldmlvdXNFbGVtZW50QW5pbWF0ZSl7dmFyIHN0PSQod2luZG93KS5zY3JvbGxUb3AoKTt2YXIgb3Q9dy5qY29uZmlybS5sYXN0Rm9jdXNlZC5vZmZzZXQoKS50b3A7dmFyIHdoPSQod2luZG93KS5oZWlnaHQoKTtpZighKG90PnN0JiZvdDwoc3Qrd2gpKSl7dmFyIHNjcm9sbFRvPShvdC1NYXRoLnJvdW5kKCh3aC8zKSkpOyQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDpzY3JvbGxUb30sdGhhdC5hbmltYXRpb25TcGVlZCxcInN3aW5nXCIsZnVuY3Rpb24oKXskbGYuZm9jdXMoKTt9KTt9ZWxzZXskbGYuZm9jdXMoKTt9fWVsc2V7JGxmLmZvY3VzKCk7fXcuamNvbmZpcm0ubGFzdEZvY3VzZWQ9ZmFsc2U7fX1pZih0eXBlb2YgdGhhdC5vbkRlc3Ryb3k9PT1cImZ1bmN0aW9uXCIpe3RoYXQub25EZXN0cm95KCk7fX0sY2xvc2VUaW1lciowLjQpO30sNTApO3JldHVybiB0cnVlO30sb3BlbjpmdW5jdGlvbigpe2lmKHRoaXMuaXNPcGVuKCkpe3JldHVybiBmYWxzZTt9dGhpcy5fYnVpbGRIVE1MKCk7dGhpcy5fYmluZEV2ZW50cygpO3RoaXMuX29wZW4oKTtyZXR1cm4gdHJ1ZTt9LHNldFN0YXJ0aW5nUG9pbnQ6ZnVuY3Rpb24oKXt2YXIgZWw9ZmFsc2U7aWYodGhpcy5hbmltYXRlRnJvbUVsZW1lbnQhPT10cnVlJiZ0aGlzLmFuaW1hdGVGcm9tRWxlbWVudCl7ZWw9dGhpcy5hbmltYXRlRnJvbUVsZW1lbnQ7dy5qY29uZmlybS5sYXN0Q2xpY2tlZD1mYWxzZTt9ZWxzZXtpZih3Lmpjb25maXJtLmxhc3RDbGlja2VkJiZ0aGlzLmFuaW1hdGVGcm9tRWxlbWVudD09PXRydWUpe2VsPXcuamNvbmZpcm0ubGFzdENsaWNrZWQ7dy5qY29uZmlybS5sYXN0Q2xpY2tlZD1mYWxzZTt9ZWxzZXtyZXR1cm4gZmFsc2U7fX1pZighZWwpe3JldHVybiBmYWxzZTt9dmFyIG9mZnNldD1lbC5vZmZzZXQoKTt2YXIgaVRvcD1lbC5vdXRlckhlaWdodCgpLzI7dmFyIGlMZWZ0PWVsLm91dGVyV2lkdGgoKS8yO2lUb3AtPXRoaXMuJGpjb25maXJtQm94Lm91dGVySGVpZ2h0KCkvMjtpTGVmdC09dGhpcy4kamNvbmZpcm1Cb3gub3V0ZXJXaWR0aCgpLzI7dmFyIHNvdXJjZVRvcD1vZmZzZXQudG9wK2lUb3A7c291cmNlVG9wPXNvdXJjZVRvcC10aGlzLl9zY3JvbGxUb3AoKTt2YXIgc291cmNlTGVmdD1vZmZzZXQubGVmdCtpTGVmdDt2YXIgd2g9JCh3aW5kb3cpLmhlaWdodCgpLzI7dmFyIHd3PSQod2luZG93KS53aWR0aCgpLzI7dmFyIHRhcmdldEg9d2gtdGhpcy4kamNvbmZpcm1Cb3gub3V0ZXJIZWlnaHQoKS8yO3ZhciB0YXJnZXRXPXd3LXRoaXMuJGpjb25maXJtQm94Lm91dGVyV2lkdGgoKS8yO3NvdXJjZVRvcC09dGFyZ2V0SDtzb3VyY2VMZWZ0LT10YXJnZXRXO2lmKE1hdGguYWJzKHNvdXJjZVRvcCk+d2h8fE1hdGguYWJzKHNvdXJjZUxlZnQpPnd3KXtyZXR1cm4gZmFsc2U7fXRoaXMuJGpjb25maXJtQm94Q29udGFpbmVyLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3NvdXJjZUxlZnQrXCJweCwgXCIrc291cmNlVG9wK1wicHgpXCIpO30sX29wZW46ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO2lmKHR5cGVvZiB0aGF0Lm9uT3BlbkJlZm9yZT09PVwiZnVuY3Rpb25cIil7dGhhdC5vbk9wZW5CZWZvcmUoKTt9dGhpcy4kYm9keS5yZW1vdmVDbGFzcyh0aGlzLmFuaW1hdGlvblBhcnNlZCk7dGhpcy4kamNvbmZpcm1CZy5yZW1vdmVDbGFzcyhcImpjb25maXJtLWJnLWhcIik7dGhpcy4kYm9keS5mb2N1cygpO3RoYXQuJGpjb25maXJtQm94Q29udGFpbmVyLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiKzArXCJweCwgXCIrMCtcInB4KVwiKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC4kYm9keS5jc3ModGhhdC5fZ2V0Q1NTKHRoYXQuYW5pbWF0aW9uU3BlZWQsMSkpO3RoYXQuJGJvZHkuY3NzKHtcInRyYW5zaXRpb24tcHJvcGVydHlcIjp0aGF0LiRib2R5LmNzcyhcInRyYW5zaXRpb24tcHJvcGVydHlcIikrXCIsIG1hcmdpblwifSk7dGhhdC4kamNvbmZpcm1Cb3hDb250YWluZXIuYWRkQ2xhc3MoXCJqY29uZmlybS1uby10cmFuc2l0aW9uXCIpO3RoYXQuX21vZGFsUmVhZHkucmVzb2x2ZSgpO2lmKHR5cGVvZiB0aGF0Lm9uT3Blbj09PVwiZnVuY3Rpb25cIil7dGhhdC5vbk9wZW4oKTt9dGhhdC4kZWwuYWRkQ2xhc3ModGhhdC5sb2FkZWRDbGFzcyk7fSx0aGlzLmFuaW1hdGlvblNwZWVkKTt9LGxvYWRlZENsYXNzOlwiamNvbmZpcm0tb3BlblwiLGlzQ2xvc2VkOmZ1bmN0aW9uKCl7cmV0dXJuICF0aGlzLiRlbHx8dGhpcy4kZWwucGFyZW50KCkubGVuZ3RoPT09MDt9LGlzT3BlbjpmdW5jdGlvbigpe3JldHVybiAhdGhpcy5pc0Nsb3NlZCgpO30sdG9nZ2xlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuaXNPcGVuKCkpe3RoaXMub3BlbigpO31lbHNle3RoaXMuY2xvc2UoKTt9fX07dy5qY29uZmlybS5pbnN0YW5jZXM9W107dy5qY29uZmlybS5sYXN0Rm9jdXNlZD1mYWxzZTt3Lmpjb25maXJtLnBsdWdpbkRlZmF1bHRzPXt0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cImpjb25maXJtXCI+PGRpdiBjbGFzcz1cImpjb25maXJtLWJnIGpjb25maXJtLWJnLWhcIj48L2Rpdj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tc2Nyb2xscGFuZVwiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1yb3dcIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tY2VsbFwiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1ob2xkZXJcIj48ZGl2IGNsYXNzPVwiamMtYnMzLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJqYy1iczMtcm93XCI+PGRpdiBjbGFzcz1cImpjb25maXJtLWJveC1jb250YWluZXIgamNvbmZpcm0tYW5pbWF0ZWRcIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tYm94XCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImxhYmVsbGVkXCIgdGFiaW5kZXg9XCItMVwiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1jbG9zZUljb25cIj4mdGltZXM7PC9kaXY+PGRpdiBjbGFzcz1cImpjb25maXJtLXRpdGxlLWNcIj48c3BhbiBjbGFzcz1cImpjb25maXJtLWljb24tY1wiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImpjb25maXJtLXRpdGxlXCI+PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJqY29uZmlybS1jb250ZW50LXBhbmVcIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tY29udGVudFwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJqY29uZmlybS1idXR0b25zXCI+PC9kaXY+PGRpdiBjbGFzcz1cImpjb25maXJtLWNsZWFyXCI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+Jyx0aXRsZTpcIkhlbGxvXCIsdGl0bGVDbGFzczpcIlwiLHR5cGU6XCJkZWZhdWx0XCIsdHlwZUFuaW1hdGVkOnRydWUsZHJhZ2dhYmxlOnRydWUsZHJhZ1dpbmRvd0dhcDoxNSxkcmFnV2luZG93Qm9yZGVyOnRydWUsYW5pbWF0ZUZyb21FbGVtZW50OnRydWUsYWxpZ25NaWRkbGU6dHJ1ZSxzbW9vdGhDb250ZW50OnRydWUsY29udGVudDpcIkFyZSB5b3Ugc3VyZSB0byBjb250aW51ZT9cIixidXR0b25zOnt9LGRlZmF1bHRCdXR0b25zOntvazp7YWN0aW9uOmZ1bmN0aW9uKCl7fX0sY2xvc2U6e2FjdGlvbjpmdW5jdGlvbigpe319fSxjb250ZW50TG9hZGVkOmZ1bmN0aW9uKCl7fSxpY29uOlwiXCIsbGF6eU9wZW46ZmFsc2UsYmdPcGFjaXR5Om51bGwsdGhlbWU6XCJsaWdodFwiLGFuaW1hdGlvbjpcInNjYWxlXCIsY2xvc2VBbmltYXRpb246XCJzY2FsZVwiLGFuaW1hdGlvblNwZWVkOjQwMCxhbmltYXRpb25Cb3VuY2U6MSxlc2NhcGVLZXk6dHJ1ZSxydGw6ZmFsc2UsY29udGFpbmVyOlwiYm9keVwiLGNvbnRhaW5lckZsdWlkOmZhbHNlLGJhY2tncm91bmREaXNtaXNzOmZhbHNlLGJhY2tncm91bmREaXNtaXNzQW5pbWF0aW9uOlwic2hha2VcIixhdXRvQ2xvc2U6ZmFsc2UsY2xvc2VJY29uOm51bGwsY2xvc2VJY29uQ2xhc3M6ZmFsc2Usd2F0Y2hJbnRlcnZhbDoxMDAsY29sdW1uQ2xhc3M6XCJjb2wtbWQtNCBjb2wtbWQtb2Zmc2V0LTQgY29sLXNtLTYgY29sLXNtLW9mZnNldC0zIGNvbC14cy0xMCBjb2wteHMtb2Zmc2V0LTFcIixib3hXaWR0aDpcIjUwJVwiLHNjcm9sbFRvUHJldmlvdXNFbGVtZW50OnRydWUsc2Nyb2xsVG9QcmV2aW91c0VsZW1lbnRBbmltYXRlOnRydWUsdXNlQm9vdHN0cmFwOnRydWUsb2Zmc2V0VG9wOjQwLG9mZnNldEJvdHRvbTo0MCxib290c3RyYXBDbGFzc2VzOntjb250YWluZXI6XCJjb250YWluZXJcIixjb250YWluZXJGbHVpZDpcImNvbnRhaW5lci1mbHVpZFwiLHJvdzpcInJvd1wifSxvbkNvbnRlbnRSZWFkeTpmdW5jdGlvbigpe30sb25PcGVuQmVmb3JlOmZ1bmN0aW9uKCl7fSxvbk9wZW46ZnVuY3Rpb24oKXt9LG9uQ2xvc2U6ZnVuY3Rpb24oKXt9LG9uRGVzdHJveTpmdW5jdGlvbigpe30sb25BY3Rpb246ZnVuY3Rpb24oKXt9fTt2YXIga2V5RG93bj1mYWxzZTskKHdpbmRvdykub24oXCJrZXlkb3duXCIsZnVuY3Rpb24oZSl7aWYoIWtleURvd24pe3ZhciAkdGFyZ2V0PSQoZS50YXJnZXQpO3ZhciBwYXNzPWZhbHNlO2lmKCR0YXJnZXQuY2xvc2VzdChcIi5qY29uZmlybS1ib3hcIikubGVuZ3RoKXtwYXNzPXRydWU7fWlmKHBhc3MpeyQod2luZG93KS50cmlnZ2VyKFwiamNLZXlEb3duXCIpO31rZXlEb3duPXRydWU7fX0pOyQod2luZG93KS5vbihcImtleXVwXCIsZnVuY3Rpb24oKXtrZXlEb3duPWZhbHNlO30pO3cuamNvbmZpcm0ubGFzdENsaWNrZWQ9ZmFsc2U7JChkb2N1bWVudCkub24oXCJtb3VzZWRvd25cIixcImJ1dHRvbiwgYSwgW2pjLXNvdXJjZV1cIixmdW5jdGlvbigpe3cuamNvbmZpcm0ubGFzdENsaWNrZWQ9JCh0aGlzKTt9KTt9KSk7IiwiLypcbiAgICAgXyBfICAgICAgXyAgICAgICBfXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXG58X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cbiAgICAgICAgICAgICAgICAgICB8X18vXG5cbiBWZXJzaW9uOiAxLjguMVxuICBBdXRob3I6IEtlbiBXaGVlbGVyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXG4gICAgRG9jczogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXG5cbiAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGRlZmluZSwgalF1ZXJ5LCBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCAqL1xuOyhmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cblxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcblxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcblxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XG5cbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbmRUbzogJ3dpbmRvdycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b3VjaFRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcbiAgICAgICAgICAgICAgICAkZG90czogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICRsaXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5zbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscyk7XG5cbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xuICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTtcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcbiAgICAgICAgICAgIF8uc2hvdWxkQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAwO1xuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YSgnc2xpY2snKSB8fCB7fTtcblxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG5cbiAgICAgICAgICAgIF8ub3JpZ2luYWxTZXR0aW5ncyA9IF8ub3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnbW96SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pO1xuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XG5cbiAgICAgICAgICAgIF8uaW5zdGFuY2VVaWQgPSBpbnN0YW5jZVVpZCsrO1xuXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKG11c3Qgc3RhcnQgd2l0aCA8KVxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcblxuXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcbiAgICAgICAgICAgIF8uaW5pdCh0cnVlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsaWNrO1xuXG4gICAgfSgpKTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhZGRCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgXy4kc2xpZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEJlZm9yZShfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodFxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXG4gICAgICAgICAgICBfID0gdGhpcztcblxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50TGVmdCA9IC0oXy5jdXJyZW50TGVmdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IF8uY3VycmVudExlZnRcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHRhcmdldExlZnQgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAmJiBhc05hdkZvciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljaygnZ2V0U2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gXy50cmFuc2Zvcm1UeXBlICsgJyAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5kaXJlY3Rpb24gPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlVG8gKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcblxuICAgICAgICAgICAgaWYoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkKCBfLiRuZXh0QXJyb3cgKVxuXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBkb3Q7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICAgICAgZG90ID0gJCgnPHVsIC8+JykuYWRkQ2xhc3MoXy5vcHRpb25zLmRvdHNDbGFzcyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCQoJzxsaSAvPicpLmFwcGVuZChfLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcywgXywgaSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kZG90cyA9IGRvdC5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kRG90cyk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjayA9IChfLnNsaWRlQ291bnQgPT09IDApID9cbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XG5cbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoJ29wYWNpdHknLCAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyKS5ub3QoJ1tzcmNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcblxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG5cbiAgICAgICAgXy5idWlsZERvdHMoKTtcblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcblxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XG5cbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcblxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xuXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG9yaWdpbmFsU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5zaG91bGRDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZWZyZXNoKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICBfLmNsZWFuVXBFdmVudHMoKTtcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5kZXRhY2goKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJywgJyonLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9jdXNzZWQgPSAkc2YuaXMoJzpmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldEN1cnJlbnQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tDdXJyZW50U2xpZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBfLmN1cnJlbnRTbGlkZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0RG90Q291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHZhciBwYWdlclF0eSA9IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgICAgICAgICAgdGFyZ2V0U2xpZGUsXG4gICAgICAgICAgICBjb2VmO1xuXG4gICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IChfLnNsaWRlV2lkdGggKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xuICAgICAgICAgICAgICAgIGNvZWYgPSAtMVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0xLjU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIGNvZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkgLyAyKSAtICgoXy5zbGlkZVdpZHRoICogXy5zbGlkZUNvdW50KSAvIDIpO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSAtIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiBfLnNsaWRlV2lkdGgpICogLTEpICsgXy5zbGlkZU9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMSkgKyB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCArPSAoXy4kbGlzdC53aWR0aCgpIC0gdGFyZ2V0U2xpZGUub3V0ZXJXaWR0aCgpKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdDtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSAwLFxuICAgICAgICAgICAgY291bnRlciA9IDAsXG4gICAgICAgICAgICBpbmRleGVzID0gW10sXG4gICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudCAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlID8gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyAoJChzbGlkZSkub3V0ZXJXaWR0aCgpIC8gMikgPiAoXy5zd2lwZUxlZnQgKiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicygkKHN3aXBlZFNsaWRlKS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykgLSBfLmN1cnJlbnRTbGlkZSkgfHwgMTtcblxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChzbGlkZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY3JlYXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCEkKF8uJHNsaWRlcikuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcblxuICAgICAgICAgICAgJChfLiRzbGlkZXIpLmFkZENsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xuICAgICAgICAgICAgXy5idWlsZE91dCgpO1xuICAgICAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcbiAgICAgICAgICAgIF8ubG9hZFNsaWRlcigpO1xuICAgICAgICAgICAgXy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSh0cnVlKTtcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcmVhdGlvbikge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2luaXQnLCBbX10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLmluaXRBREEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbnVtRG90R3JvdXBzID0gTWF0aC5jZWlsKF8uc2xpZGVDb3VudCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLFxuICAgICAgICAgICAgICAgIHRhYkNvbnRyb2xJbmRleGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCA+PSAwKSAmJiAodmFsIDwgXy5zbGlkZUNvdW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVDb250cm9sSW5kZXggPSB0YWJDb250cm9sSW5kZXhlcy5pbmRleE9mKGkpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFicGFuZWwnLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgdmFyIGFyaWFCdXR0b25Db250cm9sID0gJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIHNsaWRlQ29udHJvbEluZGV4XG4gICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgYXJpYUJ1dHRvbkNvbnRyb2wpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGFyaWFCdXR0b25Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuYXR0cigncm9sZScsICd0YWJsaXN0JykuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkU2xpZGVJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzW2ldO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5maXJzdCgpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLmVxKF8uY3VycmVudFNsaWRlKS5maW5kKCdidXR0b24nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgICAgIH0pLmVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaT1fLmN1cnJlbnRTbGlkZSwgbWF4PWkrXy5vcHRpb25zLnNsaWRlc1RvU2hvdzsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkuYXR0cih7J3RhYmluZGV4JzogJzAnfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XG5cbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcblxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcbiAgICAgICAgJChfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnRhZ05hbWUubWF0Y2goJ1RFWFRBUkVBfElOUFVUfFNFTEVDVCcpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbG9hZFJhbmdlLCBjbG9uZVJhbmdlLCByYW5nZVN0YXJ0LCByYW5nZUVuZDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XG5cbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNpemVzICA9ICQodGhpcykuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZUVuZCA8PSBfLnNsaWRlQ291bnQpIHJhbmdlRW5kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSByYW5nZUVuZCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTbGlkZSA8IDApIHByZXZTbGlkZSA9IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShuZXh0U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUtLTtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLmluaXRVSSgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xuXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudFNsaWRlID0gJChfLiRzbGlkZXMuZ2V0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUuYXR0cigndGFiaW5kZXgnLCAwKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xuXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSxcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxuICAgICAgICAgICAgaW1hZ2VTaXplcyxcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xuXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xuICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSBpbWFnZS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG4gICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmICggdHJ5Q291bnQgPCAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiB0cnkgdG8gbG9hZCB0aGUgaW1hZ2UgMyB0aW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICogbGVhdmUgYSBzbGlnaHQgZGVsYXkgc28gd2UgZG9uJ3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhbGxJbWFnZXNMb2FkZWQnLCBbIF8gXSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oIGluaXRpYWxpemluZyApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcblxuICAgICAgICBsYXN0VmlzaWJsZUluZGV4ID0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcblxuICAgICAgICAvLyBpbiBub24taW5maW5pdGUgc2xpZGVycywgd2UgZG9uJ3Qgd2FudCB0byBnbyBwYXN0IHRoZVxuICAgICAgICAvLyBsYXN0IHZpc2libGUgaW5kZXguXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gbGFzdFZpc2libGVJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGxlc3Mgc2xpZGVzIHRoYW4gdG8gc2hvdywgZ28gdG8gc3RhcnQuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcblxuICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzLCB7IGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlIH0pO1xuXG4gICAgICAgIF8uaW5pdCgpO1xuXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBjdXJyZW50U2xpZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTZXR0aW5ncyA9IF8ub3B0aW9ucy5yZXNwb25zaXZlIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IF8ub3B0aW9ucy5yZXNwb25kVG8gfHwgJ3dpbmRvdyc7XG5cbiAgICAgICAgICAgIGZvciAoIGJyZWFrcG9pbnQgaW4gcmVzcG9uc2l2ZVNldHRpbmdzICkge1xuXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZVNldHRpbmdzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcbiAgICAgICAgXy5idWlsZERvdHMoKTtcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcbiAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG5cbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcblxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cbiAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlO1xuXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcblxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcblxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XG5cbiAgICAgICAgICAgICQuZWFjaCggb3B0aW9uICwgZnVuY3Rpb24oIG9wdCwgdmFsICkge1xuXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xuXG4gICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNldEZhZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzZXRQb3NpdGlvbicsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd0b3AnIDogJ2xlZnQnO1xuXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy56SW5kZXggPCAzICkge1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ09UcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdNb3pUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUuTW96UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnd2Via2l0VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnbXNUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcblxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgZXZlbkNvZWYgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICUgMiA9PT0gMCA/IDEgOiAwO1xuXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEgKyBldmVuQ29lZiwgaW5kZXhPZmZzZXQgKyBjZW50ZXJPZmZzZXQgKyAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gXy5zbGlkZUNvdW50IC0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbFNsaWRlcy5sZW5ndGggPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4IDogaW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQsIGluZGV4T2Zmc2V0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdvbmRlbWFuZCcgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQpOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5maW5pdGVDb3VudCAgKyBfLnNsaWRlQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggKyBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKS5maW5kKCdbaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRvZ2dsZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2VsZWN0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5pcygnLnNsaWNrLXNsaWRlJykgP1xuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KSA6XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuYXR0cignZGF0YS1zbGljay1pbmRleCcpKTtcblxuICAgICAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24oaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxuICAgICAgICAgICAgXyA9IHRoaXMsIG5hdlRhcmdldDtcblxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XG4gICAgICAgIHNsaWRlTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xuXG4gICAgICAgIG9sZFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcblxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcblxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZShhbmltU2xpZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmFuaW1hdGVTbGlkZSh0YXJnZXRMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN0YXJ0TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5oaWRlKCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XG5cbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcbiAgICAgICAgciA9IE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcblxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGlmIChzd2lwZUFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZG93bic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxuICAgICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgXy5zd2lwaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuY3VyWCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZWRnZScsIFtfLCBfLnN3aXBlRGlyZWN0aW9uKCkgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPj0gXy50b3VjaE9iamVjdC5taW5Td2lwZSApIHtcblxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBkaXJlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZUNvdW50ICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzd2lwZScsIFtfLCBkaXJlY3Rpb24gXSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3RhcnRYICE9PSBfLnRvdWNoT2JqZWN0LmN1clggKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgoXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgfHwgKCdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiBfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgPSBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggOiAxO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RXaWR0aCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xuXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZU1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVFbmQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXG4gICAgICAgICAgICBjdXJMZWZ0LCBzd2lwZURpcmVjdGlvbiwgc3dpcGVMZW5ndGgsIHBvc2l0aW9uT2Zmc2V0LCB0b3VjaGVzLCB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xuXG4gICAgICAgIGlmICghXy5kcmFnZ2luZyB8fCBfLnNjcm9sbGluZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XG5cbiAgICAgICAgdmVydGljYWxTd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG5cbiAgICAgICAgaWYgKCFfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nICYmICFfLnN3aXBpbmcgJiYgdmVydGljYWxTd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gdmVydGljYWxTd2lwZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlRGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc3dpcGluZyA9IHRydWU7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0b3VjaGVzO1xuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcbiAgICAgICAgXy5kZXN0cm95KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgIC5lcShNYXRoLmZsb29yKF8uY3VycmVudFNsaWRlIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHJldDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF87XG4gICAgfTtcblxufSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKCcuYy1hY2NvcmRpb24tLWV4cGFuZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgJCgnLmMtYWNjb3JkaW9uX19idG4nKS5odG1sKCc8c3Bhbj48aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3VibGUtZG93biBmYS14c1wiPjwvaT48L3NwYW4+JylcbiAgJCgnLmMtYWNjb3JkaW9uX19ib2R5OnZpc2libGUnKS5zbGlkZVVwKClcbiAgaWYgKCEkKHRoaXMpLm5leHQoKS5pcygnOnZpc2libGUnKSkge1xuICAgICQodGhpcykubmV4dCgpLnNsaWRlRG93bigyMDApXG4gICAgJCh0aGlzKS5maW5kKCcuYy1hY2NvcmRpb25fX2J0bicpLmh0bWwoJzxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS11cCBmYS14c1wiPjwvaT48L3NwYW4+JylcbiAgfVxufSlcbiIsIi8vIG5wbSBpbnN0YWxsIGFvcyAtLXNhdmVcbmltcG9ydCBBT1MgZnJvbSAnYW9zJ1xuXG4vLyBZb3UgY2FuIGFsc28gcGFzcyBhbiBvcHRpb25hbCBzZXR0aW5ncyBvYmplY3Rcbi8vIGJlbG93IGxpc3RlZCBkZWZhdWx0IHNldHRpbmdzXG5BT1MuaW5pdCh7XG4gIC8vIEdsb2JhbCBzZXR0aW5nczpcbiAgZGlzYWJsZTogZmFsc2UsIC8vIGFjY2VwdHMgZm9sbG93aW5nIHZhbHVlczogJ3Bob25lJywgJ3RhYmxldCcsICdtb2JpbGUnLCBib29sZWFuLCBleHByZXNzaW9uIG9yIGZ1bmN0aW9uXG4gIHN0YXJ0RXZlbnQ6ICdET01Db250ZW50TG9hZGVkJywgLy8gbmFtZSBvZiB0aGUgZXZlbnQgZGlzcGF0Y2hlZCBvbiB0aGUgZG9jdW1lbnQsIHRoYXQgQU9TIHNob3VsZCBpbml0aWFsaXplIG9uXG4gIGluaXRDbGFzc05hbWU6ICdhb3MtaW5pdCcsIC8vIGNsYXNzIGFwcGxpZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgYW5pbWF0ZWRDbGFzc05hbWU6ICdhb3MtYW5pbWF0ZScsIC8vIGNsYXNzIGFwcGxpZWQgb24gYW5pbWF0aW9uXG4gIHVzZUNsYXNzTmFtZXM6IGZhbHNlLCAvLyBpZiB0cnVlLCB3aWxsIGFkZCBjb250ZW50IG9mIGBkYXRhLWFvc2AgYXMgY2xhc3NlcyBvbiBzY3JvbGxcbiAgZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI6IGZhbHNlLCAvLyBkaXNhYmxlcyBhdXRvbWF0aWMgbXV0YXRpb25zJyBkZXRlY3Rpb25zIChhZHZhbmNlZClcbiAgZGVib3VuY2VEZWxheTogNTAsIC8vIHRoZSBkZWxheSBvbiBkZWJvdW5jZSB1c2VkIHdoaWxlIHJlc2l6aW5nIHdpbmRvdyAoYWR2YW5jZWQpXG4gIHRocm90dGxlRGVsYXk6IDk5LCAvLyB0aGUgZGVsYXkgb24gdGhyb3R0bGUgdXNlZCB3aGlsZSBzY3JvbGxpbmcgdGhlIHBhZ2UgKGFkdmFuY2VkKVxuXG4gIC8vIFNldHRpbmdzIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gb24gcGVyLWVsZW1lbnQgYmFzaXMsIGJ5IGBkYXRhLWFvcy0qYCBhdHRyaWJ1dGVzOlxuICBvZmZzZXQ6IDEyMCwgLy8gb2Zmc2V0IChpbiBweCkgZnJvbSB0aGUgb3JpZ2luYWwgdHJpZ2dlciBwb2ludFxuICBkZWxheTogMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xuICBkdXJhdGlvbjogNDAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXG4gIGVhc2luZzogJ2Vhc2UnLCAvLyBkZWZhdWx0IGVhc2luZyBmb3IgQU9TIGFuaW1hdGlvbnNcbiAgb25jZTogZmFsc2UsIC8vIHdoZXRoZXIgYW5pbWF0aW9uIHNob3VsZCBoYXBwZW4gb25seSBvbmNlIC0gd2hpbGUgc2Nyb2xsaW5nIGRvd25cbiAgbWlycm9yOiBmYWxzZSwgLy8gd2hldGhlciBlbGVtZW50cyBzaG91bGQgYW5pbWF0ZSBvdXQgd2hpbGUgc2Nyb2xsaW5nIHBhc3QgdGhlbVxuICBhbmNob3JQbGFjZW1lbnQ6ICd0b3AtYm90dG9tJyAvLyBkZWZpbmVzIHdoaWNoIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHJlZ2FyZGluZyB0byB3aW5kb3cgc2hvdWxkIHRyaWdnZXIgdGhlIGFuaW1hdGlvblxuXG59KVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlzT3BlbiA9IDBcbiAgJCgnLm9wZW5idG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzT3BlbiA9PT0gMCkge1xuICAgICAgb3Blbk5hdigpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlTmF2KClcbiAgICB9XG4gIH0pXG4gICQoJy5jbG9zZWJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBjbG9zZU5hdigpXG4gIH0pXG5cbiAgZnVuY3Rpb24gb3Blbk5hdiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TmF2Jykuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICBpc09wZW4gPSAxXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU5hdiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TmF2Jykuc3R5bGUud2lkdGggPSAnMCUnXG4gICAgaXNPcGVuID0gMFxuICB9XG59KVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ21vdXNlZW50ZXInLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xuICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29wZW4nKVxuICBjb25zb2xlLmxvZygnbW91c2UgZW50ZXInKVxufSkub24oJ21vdXNlbGVhdmUnLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xuICAkKGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ29wZW4nKVxufSlcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdjbGljaycsICcubWVudSAubWVudS1idXR0b24nLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBsZXQgbWVudV9idXR0b24gPSAkKGUuY3VycmVudFRhcmdldClcbiAgbGV0IG1lbnVfbGluayA9IG1lbnVfYnV0dG9uLnBhcmVudCgpXG4gIGxldCBtZW51X2l0ZW0gPSBtZW51X2xpbmsucGFyZW50KClcbiAgaWYgKG1lbnVfaXRlbS5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgbWVudV9pdGVtLmFkZChtZW51X2l0ZW0uZmluZCgnLm1lbnUtaXRlbS5vcGVuJykpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICBtZW51X2xpbmsuYWRkKG1lbnVfaXRlbS5maW5kKCdhJykpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gIH0gZWxzZSB7XG4gICAgbWVudV9pdGVtLnNpYmxpbmdzKCcub3BlbicpLmZpbmQoJz5hPi5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJylcbiAgICBtZW51X2l0ZW0uYWRkQ2xhc3MoJ29wZW4nKVxuICAgIG1lbnVfbGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLmNsaWNrKChlKSA9PiB7XG4gIGlmICgkKCcubWVudS1pdGVtLm9wZW4nKS5sZW5ndGgpIHtcbiAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub3BlbiA+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpXG4gIH1cbn0pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vLyBTY3JvbGxzIHRvIGRpdiB3aXRoIGFuIGlkXG5jb25zdCBzcGVlZCA9IDEwMFxuXG4kKCcjYy1mcm9udC1wYWdlX193ZWxjb21lJylcbiAgLmZpbHRlcigoaSwgYSkgPT4gYS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdGFydHNXaXRoKCcjYy1mcm9udC1wYWdlX193ZWxjb21lJykgfHwgYS5ocmVmLnN0YXJ0c1dpdGgoJyNjLWZyb250LXBhZ2VfX3dlbGNvbWUnKSlcbiAgLnVuYmluZCgnY2xpY2suc21vb3RoU2Nyb2xsJylcbiAgLmJpbmQoJ2NsaWNrLnNtb290aFNjcm9sbCcsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXRJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykuc3BsaXQoJyMnKVsxXVxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZClcblxuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCh0YXJnZXRFbGVtZW50KS5vZmZzZXQoKS50b3AgfSwgc3BlZWQpXG4gICAgfVxuICB9KVxuIiwiXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJCgnLmMtc2VhcmNoX19idG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmMtaGVhZGVyLXNlYXJjaC1mb3JtJykudG9nZ2xlKClcbiAgfSlcbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJ1xuXG4kKCcuc2xpZGVyLWRvdHMnKS5zbGljayh7XG4gIGxhenlMb2FkOiAncHJvZ3Jlc3NpdmUnLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgZG90czogdHJ1ZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gIGZhZGU6IHRydWUsXG4gIHNwZWVkOiAzMDAwXG59KVxuXG4kKCcuYy1zbGlkZXItLWFycm93cy1pbnNpZGUnKS5zbGljayh7XG4gIGluZmluaXRlOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBmYWRlOiB0cnVlLFxuICBzcGVlZDogMTAwMCxcbiAgbmV4dEFycm93OiAnPGEgY2xhc3M9XCJzbGljay1uZXh0LWluc2lkZVwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9hPicsXG4gIHByZXZBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stcHJldi1pbnNpZGVcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYT4nXG59KVxuXG4kKCcuYy1zbGlkZXItLWFycm93cy1vdXRzaWRlJykuc2xpY2soe1xuICBpbmZpbml0ZTogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgZmFkZTogdHJ1ZSxcbiAgc3BlZWQ6IDEwMDAsXG4gIG5leHRBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9hPicsXG4gIHByZXZBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9hPidcbn0pXG5cbiQoJy5jLXNsaWRlci0tb3ZlcmZsb3cnKS5zbGljayh7XG4gIGNlbnRlck1vZGU6IHRydWUsXG4gIGNlbnRlclBhZGRpbmc6ICc2MHB4JyxcbiAgc2xpZGVzVG9TaG93OiA0LFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgZG90czogZmFsc2UsXG4gIHJlc3BvbnNpdmU6IFtcbiAgICB7XG4gICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDk2MCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc2MHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBicmVha3BvaW50OiA3NjgsXG4gICAgLy8gICBzZXR0aW5nczoge1xuICAgIC8vICAgICBhcnJvd3M6IGZhbHNlLFxuICAgIC8vICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIC8vICAgICBjZW50ZXJQYWRkaW5nOiAnNjBweCcsXG4gICAgLy8gICAgIHNsaWRlc1RvU2hvdzogMVxuICAgIC8vICAgfVxuICAgIC8vIH0sXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogNzAwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0pXG4gIC5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrKSB7XG4gICAgc2xpY2suJHNsaWRlcy5jc3MoJ2hlaWdodCcsIHNsaWNrLiRzbGlkZVRyYWNrLmhlaWdodCgpICsgJ3B4Jylcbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hhbWJ1cmdlci1uYXYnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24nXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYW9zJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0nXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zY3JvbGwnXG5pbXBvcnQgJ2pxdWVyeS1jb25maXJtJ1xuLy8gaW1wb3J0IHdlYnBhY2tTdHJlYW0gZnJvbSAnd2VicGFjay1zdHJlYW0nXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgJCgnLmMtcG9zdF9fZ2FsbGVyeScpLnNsaWNrKHtcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gIH0pXG5cbiAgJCgnLm1vc3RfcmVjZW50X3dpZGdldCcpLnNsaWNrKClcbiAgaWYgKHdwLmN1c3RvbWl6ZSAmJiB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaCkge1xuICAgIHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoLmJpbmQoXG4gICAgICAncGFydGlhbC1jb250ZW50LXJlbmRlcmVkJyxcbiAgICAgIChwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYWNlbWVudC5wYXJ0aWFsLndpZGdldElkUGFydHMgJiZcbiAgICAgICAgICBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzLmlkQmFzZSA9PT1cbiAgICAgICAgICAgICdfdGhlbWVuYW1lX21vc3RfcmVjZW50X3dpZGdldCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxhY2VtZW50LmNvbnRhaW5lci5maW5kKCcubW9zdF9yZWNlbnRfd2lkZ2V0Jykuc2xpY2soKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9XG59KVxuXG4kKGZ1bmN0aW9uICgkKSB7XG4gIHZhciBzaXRlTmF2aWdhdGlvbiA9ICQoJy5uYXZpZ2F0aW9uLW1haW4nKVxuXG4gIHNpdGVOYXZpZ2F0aW9uLmZpbmQoJ2EnKS5vbignZm9jdXMgYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnBhcmVudHMoJ2xpJykudG9nZ2xlQ2xhc3MoJ2ZvY3VzJylcbiAgfSlcbn0pXG5cbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4vLyAgIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2hvbWUnKSkge1xuLy8gICAgICQuY29uZmlybSh7XG4vLyAgICAgICB0aXRsZTogJ1dvb0NvbW1lcmNlIERlbW8gU3RvcmUhJyxcbi8vICAgICAgIGNvbnRlbnQ6XG4vLyAgICAgICAgICdUaGlzIGlzIGEgV29yZFByZXNzIGN1c3RvbSB0aGVtZSB1c2luZyB0aGUgV29vY29tbWVyY2UgcGx1Z2luIGZvciB0aGUgc3RvcmUgZmVhdHVyZXMuIENvbnRhY3QgUGF1bCBhdCA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGF1bGJyaWdodG9uLmNvbS9cIj5ZUCBEaWdpdGFsPC9hPiBpZiB5b3UgbGlrZSB3aGF0IHlvdSBzZWUgYW5kIGZvciBhIHF1b3RlIG9uIHlvdXIgbmV4dCB3ZWJzaXRlLicsXG4vLyAgICAgICB1c2VCb290c3RyYXA6IGZhbHNlLFxuLy8gICAgICAgYXV0b0Nsb3NlOiAnY2xvc2V8ODAwMCdcbi8vICAgICB9KVxuLy8gICB9XG4vLyB9KVxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==