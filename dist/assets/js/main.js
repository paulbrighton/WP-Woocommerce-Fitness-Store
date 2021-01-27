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
/* harmony import */ var jquery_confirm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery-confirm */ "./node_modules/jquery-confirm/dist/jquery-confirm.min.js");
/* harmony import */ var jquery_confirm__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery_confirm__WEBPACK_IMPORTED_MODULE_8__);








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

var h = window.innerHeight;
console.log(h);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LWNvbmZpcm0vZGlzdC9qcXVlcnktY29uZmlybS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYW9zLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hhbWJ1cmdlci1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiZSIsInQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwibyIsIm4iLCJpIiwiaWQiLCJsb2FkZWQiLCJjYWxsIiwibSIsImMiLCJwIiwiX19lc01vZHVsZSIsIk9iamVjdCIsImFzc2lnbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiciIsImEiLCJ1IiwicyIsImYiLCJkIiwibCIsImIiLCJ2IiwieSIsImciLCJoIiwidyIsImsiLCJ4Iiwib2Zmc2V0IiwiZGVsYXkiLCJlYXNpbmciLCJkdXJhdGlvbiIsImRpc2FibGUiLCJvbmNlIiwic3RhcnRFdmVudCIsInRocm90dGxlRGVsYXkiLCJkZWJvdW5jZURlbGF5IiwiZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXIiLCJqIiwiTyIsIk0iLCJmb3JFYWNoIiwibm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsIlMiLCJtb2JpbGUiLCJwaG9uZSIsInRhYmxldCIsIl8iLCJkb2N1bWVudCIsImFsbCIsIndpbmRvdyIsImF0b2IiLCJpc1N1cHBvcnRlZCIsImNvbnNvbGUiLCJpbmZvIiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImluZGV4T2YiLCJyZWFkeVN0YXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlYWR5IiwiaW5pdCIsInJlZnJlc2giLCJyZWZyZXNoSGFyZCIsImFwcGx5Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIlR5cGVFcnJvciIsImxlYWRpbmciLCJtYXhXYWl0IiwidHJhaWxpbmciLCJjYW5jZWwiLCJmbHVzaCIsInZhbHVlT2YiLCJyZXBsYWNlIiwidGVzdCIsInNsaWNlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIk5hTiIsInBhcnNlSW50Iiwic2VsZiIsIkZ1bmN0aW9uIiwidG9TdHJpbmciLCJNYXRoIiwibWF4IiwibWluIiwiRGF0ZSIsIm5vdyIsImRhdGFzZXQiLCJhb3MiLCJjaGlsZHJlbiIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwiTW96TXV0YXRpb25PYnNlcnZlciIsIm9ic2VydmUiLCJkb2N1bWVudEVsZW1lbnQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwicmVtb3ZlZE5vZGVzIiwiQXJyYXkiLCJhZGRlZE5vZGVzIiwiY29uY2F0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInZlbmRvciIsIm9wZXJhIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwia2V5Iiwic3Vic3RyIiwiZ2V0QXR0cmlidXRlIiwicG9zaXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJwYWdlWU9mZnNldCIsImlubmVySGVpZ2h0IiwiYW5jaG9yIiwiYW5jaG9yUGxhY2VtZW50IiwiaXNOYU4iLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9wIiwib2Zmc2V0SGVpZ2h0Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFRvcCIsInRhZ05hbWUiLCJzY3JvbGxMZWZ0Iiwic2Nyb2xsVG9wIiwib2Zmc2V0UGFyZW50IiwibGVmdCIsIm1hcCIsImZhY3RvcnkiLCIkIiwiZm4iLCJjb25maXJtIiwib3B0aW9ucyIsIm9wdGlvbjIiLCJjb250ZW50IiwidGl0bGUiLCJlYWNoIiwiJHRoaXMiLCJhdHRyIiwid2FybiIsIm9uIiwicHJldmVudERlZmF1bHQiLCJqY09wdGlvbiIsImV4dGVuZCIsImJ1dHRvbnMiLCJrZXlzIiwiamNvbmZpcm0iLCJwbHVnaW5EZWZhdWx0cyIsImRlZmF1bHRCdXR0b25zIiwiZGVmYXVsdHMiLCJmaXJzdEJ0biIsImFjdGlvbiIsImxvY2F0aW9uIiwiaHJlZiIsImNsb3NlSWNvbiIsImluc3RhbmNlIiwicHV0RGVmYXVsdEJ1dHRvbnMiLCJhbGVydCIsImRpYWxvZyIsImNvbmZpcm1LZXlzIiwicGx1Z2luT3B0aW9ucyIsIkpjb25maXJtIiwiaW5zdGFuY2VzIiwicHVzaCIsIl9pbml0IiwidGhhdCIsImxhc3RGb2N1c2VkIiwiZmluZCIsIl9pZCIsInJvdW5kIiwicmFuZG9tIiwiY29udGVudFBhcnNlZCIsImNyZWF0ZUVsZW1lbnQiLCJsYXp5T3BlbiIsIm9wZW4iLCJfYnVpbGRIVE1MIiwiX3BhcnNlQW5pbWF0aW9uIiwiYW5pbWF0aW9uIiwiY2xvc2VBbmltYXRpb24iLCJfcGFyc2VCZ0Rpc21pc3NBbmltYXRpb24iLCJiYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvbiIsIl9wYXJzZUNvbHVtbkNsYXNzIiwiY29sdW1uQ2xhc3MiLCJfcGFyc2VUaGVtZSIsInRoZW1lIiwiX3BhcnNlVHlwZSIsInR5cGUiLCJ0ZW1wbGF0ZSIsImFkZENsYXNzIiwiYW5pbWF0aW9uUGFyc2VkIiwiYmFja2dyb3VuZERpc21pc3NBbmltYXRpb25QYXJzZWQiLCJ0eXBlUGFyc2VkIiwidHlwZUFuaW1hdGVkIiwidXNlQm9vdHN0cmFwIiwiYm9vdHN0cmFwQ2xhc3NlcyIsInJvdyIsImNvbHVtbkNsYXNzUGFyc2VkIiwiY29udGFpbmVyRmx1aWQiLCJjb250YWluZXIiLCJjc3MiLCJib3hXaWR0aCIsInRpdGxlQ2xhc3MiLCJ0aGVtZVBhcnNlZCIsImFyaWFMYWJlbCIsImJnT3BhY2l0eSIsInJ0bCIsIiRlbCIsImFwcGVuZFRvIiwiJGpjb25maXJtQm94Q29udGFpbmVyIiwiJGpjb25maXJtQm94IiwiJGJvZHkiLCIkamNvbmZpcm1CZyIsIiR0aXRsZSIsIiR0aXRsZUNvbnRhaW5lciIsIiRjb250ZW50IiwiJGNvbnRlbnRQYW5lIiwiJGljb24iLCIkY2xvc2VJY29uIiwiJGhvbGRlciIsIiRidG5jIiwiJHNjcm9sbFBhbmUiLCJzZXRTdGFydGluZ1BvaW50IiwiX2NvbnRlbnRSZWFkeSIsIkRlZmVycmVkIiwiX21vZGFsUmVhZHkiLCJvZmZzZXRCb3R0b20iLCJzZXRUaXRsZSIsInNldEljb24iLCJfc2V0QnV0dG9ucyIsIl9wYXJzZUNvbnRlbnQiLCJpbml0RHJhZ2dhYmxlIiwiaXNBamF4Iiwic2hvd0xvYWRpbmciLCJ3aGVuIiwidGhlbiIsImlzQWpheExvYWRpbmciLCJzZXRDb250ZW50IiwiaGlkZUxvYWRpbmciLCJfdXBkYXRlQ29udGVudE1heEhlaWdodCIsIm9uQ29udGVudFJlYWR5IiwiYXV0b0Nsb3NlIiwiX3N0YXJ0Q291bnREb3duIiwiX3dhdGNoQ29udGVudCIsImFuaW1hdGlvblNwZWVkIiwiYW5pbWF0aW9uQm91bmNlIiwiX2dldENTUyIsIl90eXBlUHJlZml4Iiwic2V0VHlwZSIsIm9sZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJfdGhlbWVQcmVmaXgiLCJzZXRUaGVtZSIsInByZXZpb3VzIiwic3BsaXQiLCJ0cmltIiwiam9pbiIsInRvTG93ZXJDYXNlIiwiX2JnRGlzbWlzc1ByZWZpeCIsImJnRGlzbWlzc0FuaW1hdGlvbiIsImNsb3NlQW5pbWF0aW9uUGFyc2VkIiwiX2FuaW1hdGlvblByZWZpeCIsInNldEFuaW1hdGlvbiIsIndoaWNoIiwiYW5pbWF0aW9ucyIsImFfc3RyaW5nIiwic2V0Q2xvc2VBbmltYXRpb24iLCJzZXRBbmltYXRpb25TcGVlZCIsInNwZWVkIiwic2V0Q29sdW1uQ2xhc3MiLCJjb2xDbGFzcyIsImhlaWdodCIsIm91dGVySGVpZ2h0Iiwic2V0Qm94V2lkdGgiLCJ3aWR0aCIsIiR0IiwicmVzZXREcmFnIiwiZHJhZ2dhYmxlIiwibW91c2VYIiwiY2xpZW50WCIsIm1vdXNlWSIsImNsaWVudFkiLCJpc0RyYWciLCJtb3ZpbmdYIiwiaW5pdGlhbFgiLCJtb3ZpbmdZIiwiaW5pdGlhbFkiLCJzZXREcmFnIiwiYWxpZ25NaWRkbGUiLCJvdXRlcldpZHRoIiwiYm94SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJkcmFnVXBkYXRlIiwiZHJhZ1dpbmRvd0JvcmRlciIsImxlZnREaXN0YW5jZSIsInRvcERpc3RhbmNlIiwiZHJhZ1dpbmRvd0dhcCIsIl9zY3JvbGxUb3AiLCJCIiwiYm9keSIsIkQiLCJjbGllbnRIZWlnaHQiLCJfdGltZXIiLCJjbGVhckludGVydmFsIiwicHJldkNvbnRlbnRIZWlnaHQiLCJzZXRJbnRlcnZhbCIsInNtb290aENvbnRlbnQiLCJjb250ZW50SGVpZ2h0Iiwid2giLCJ0b3RhbCIsIndhdGNoSW50ZXJ2YWwiLCJfb3ZlcmZsb3dDbGFzcyIsIl9oaWxpZ2h0QW5pbWF0aW5nIiwiaGlnaGxpZ2h0IiwiaGlMaWdodE1vZGFsIiwicGFyc2VGbG9hdCIsIl9iaW5kRXZlbnRzIiwiYm94Q2xpY2tlZCIsImNsaWNrIiwiYnV0dG9uTmFtZSIsInNob3VsZENsb3NlIiwic3RyIiwiYmFja2dyb3VuZERpc21pc3MiLCJidG5SZXNwb25zZSIsImNsb3NlIiwiaXNLZXlEb3duIiwicmVhY3RPbktleSIsIl9jdWJpY19iZXppZXIiLCJib3VuY2UiLCJ0b3RhbF9idXR0b25zIiwiYnV0dG9uIiwidGV4dCIsImJ0bkNsYXNzIiwiaXNIaWRkZW4iLCJpc0Rpc2FibGVkIiwiYnV0dG9uX2VsZW1lbnQiLCJodG1sIiwicHJvcCIsInJlcyIsIm9uQWN0aW9uIiwiX3N0b3BDb3VudERvd24iLCJlbCIsInNldFRleHQiLCJjbGFzc05hbWUiLCJlbmFibGUiLCJzaG93IiwiaGlkZSIsImFwcGVuZCIsImNsb3NlSWNvbkNsYXNzIiwiY2xvc2VIdG1sIiwic3RyaW5nIiwiZm9yY2UiLCJwcm9taXNlIiwiZXJyb3IiLCJyZXNwb25zZSIsInVwZGF0ZVRpdGxlQ29udGFpbmVyIiwiaWNvbkNsYXNzIiwiaWNvbiIsInNldENvbnRlbnRQcmVwZW5kIiwicHJlcGVuZCIsInNldENvbnRlbnRBcHBlbmQiLCJmb2N1cyIsImxvYWRpbmdTcGlubmVyIiwiZGlzYWJsZUJ1dHRvbnMiLCJlbmFibGVCdXR0b25zIiwiYWpheFJlc3BvbnNlIiwiYWx3YXlzIiwiZGF0YSIsInN0YXR1cyIsInhociIsInJlc29sdmUiLCJjb250ZW50TG9hZGVkIiwic3Vic3RyaW5nIiwiZ2V0IiwiZG9uZSIsImF1dG9DbG9zZUludGVydmFsIiwiJGNkIiwib3B0IiwiYnV0dG9uX2tleSIsInRpbWUiLCJzZWNvbmRzIiwiY2VpbCIsInRyaWdnZXIiLCJfZ2V0S2V5IiwiaW5pdGlhbCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImVxIiwiaXMiLCJrZXlDaGFyIiwiZXNjYXBlS2V5IiwiYnV0dG9uS2V5Iiwic2V0RGlhbG9nQ2VudGVyIiwiX3Vud2F0Y2hDb250ZW50Iiwib25DbG9zZVBheWxvYWQiLCJvbkNsb3NlIiwidW5iaW5kIiwibG9hZGVkQ2xhc3MiLCJjbG9zZVRpbWVyIiwic3BsaWNlIiwic2Nyb2xsVG9QcmV2aW91c0VsZW1lbnQiLCJjb250YWlucyIsIiRsZiIsInNjcm9sbFRvUHJldmlvdXNFbGVtZW50QW5pbWF0ZSIsInN0Iiwib3QiLCJzY3JvbGxUbyIsImFuaW1hdGUiLCJvbkRlc3Ryb3kiLCJpc09wZW4iLCJfb3BlbiIsImFuaW1hdGVGcm9tRWxlbWVudCIsImxhc3RDbGlja2VkIiwiaVRvcCIsImlMZWZ0Iiwic291cmNlVG9wIiwic291cmNlTGVmdCIsInd3IiwidGFyZ2V0SCIsInRhcmdldFciLCJhYnMiLCJvbk9wZW5CZWZvcmUiLCJvbk9wZW4iLCJpc0Nsb3NlZCIsInBhcmVudCIsInRvZ2dsZSIsIm9rIiwia2V5RG93biIsIiR0YXJnZXQiLCJ0YXJnZXQiLCJwYXNzIiwiY2xvc2VzdCIsIlNsaWNrIiwiaW5zdGFuY2VVaWQiLCJlbGVtZW50Iiwic2V0dGluZ3MiLCJkYXRhU2V0dGluZ3MiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJhcHBlbmRBcnJvd3MiLCJhcHBlbmREb3RzIiwiYXJyb3dzIiwiYXNOYXZGb3IiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImNzc0Vhc2UiLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJkb3RzIiwiZG90c0NsYXNzIiwiZWRnZUZyaWN0aW9uIiwiZmFkZSIsImZvY3VzT25TZWxlY3QiLCJmb2N1c09uQ2hhbmdlIiwiaW5maW5pdGUiLCJpbml0aWFsU2xpZGUiLCJsYXp5TG9hZCIsIm1vYmlsZUZpcnN0IiwicGF1c2VPbkhvdmVyIiwicGF1c2VPbkZvY3VzIiwicGF1c2VPbkRvdHNIb3ZlciIsInJlc3BvbmRUbyIsInJlc3BvbnNpdmUiLCJyb3dzIiwic2xpZGUiLCJzbGlkZXNQZXJSb3ciLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInN3aXBlIiwic3dpcGVUb1NsaWRlIiwidG91Y2hNb3ZlIiwidG91Y2hUaHJlc2hvbGQiLCJ1c2VDU1MiLCJ1c2VUcmFuc2Zvcm0iLCJ2YXJpYWJsZVdpZHRoIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJ3YWl0Rm9yQW5pbWF0ZSIsInpJbmRleCIsImluaXRpYWxzIiwiYW5pbWF0aW5nIiwiZHJhZ2dpbmciLCJhdXRvUGxheVRpbWVyIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFNsaWRlIiwiZGlyZWN0aW9uIiwiJGRvdHMiLCJsaXN0V2lkdGgiLCJsaXN0SGVpZ2h0IiwibG9hZEluZGV4IiwiJG5leHRBcnJvdyIsIiRwcmV2QXJyb3ciLCJzY3JvbGxpbmciLCJzbGlkZUNvdW50Iiwic2xpZGVXaWR0aCIsIiRzbGlkZVRyYWNrIiwiJHNsaWRlcyIsInNsaWRpbmciLCJzbGlkZU9mZnNldCIsInN3aXBlTGVmdCIsInN3aXBpbmciLCIkbGlzdCIsInRvdWNoT2JqZWN0IiwidHJhbnNmb3Jtc0VuYWJsZWQiLCJ1bnNsaWNrZWQiLCJhY3RpdmVCcmVha3BvaW50IiwiYW5pbVR5cGUiLCJhbmltUHJvcCIsImJyZWFrcG9pbnRzIiwiYnJlYWtwb2ludFNldHRpbmdzIiwiY3NzVHJhbnNpdGlvbnMiLCJmb2N1c3NlZCIsImludGVycnVwdGVkIiwiaGlkZGVuIiwicGF1c2VkIiwicG9zaXRpb25Qcm9wIiwicm93Q291bnQiLCJzaG91bGRDbGljayIsIiRzbGlkZXIiLCIkc2xpZGVzQ2FjaGUiLCJ0cmFuc2Zvcm1UeXBlIiwidHJhbnNpdGlvblR5cGUiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwid2luZG93VGltZXIiLCJvcmlnaW5hbFNldHRpbmdzIiwibW96SGlkZGVuIiwid2Via2l0SGlkZGVuIiwiYXV0b1BsYXkiLCJwcm94eSIsImF1dG9QbGF5Q2xlYXIiLCJhdXRvUGxheUl0ZXJhdG9yIiwiY2hhbmdlU2xpZGUiLCJjbGlja0hhbmRsZXIiLCJzZWxlY3RIYW5kbGVyIiwic2V0UG9zaXRpb24iLCJzd2lwZUhhbmRsZXIiLCJkcmFnSGFuZGxlciIsImtleUhhbmRsZXIiLCJodG1sRXhwciIsInJlZ2lzdGVyQnJlYWtwb2ludHMiLCJhY3RpdmF0ZUFEQSIsImFkZFNsaWRlIiwic2xpY2tBZGQiLCJtYXJrdXAiLCJpbmRleCIsImFkZEJlZm9yZSIsInVubG9hZCIsImluc2VydEJlZm9yZSIsImluc2VydEFmdGVyIiwicHJlcGVuZFRvIiwiZGV0YWNoIiwicmVpbml0IiwiYW5pbWF0ZUhlaWdodCIsInRhcmdldEhlaWdodCIsImFuaW1hdGVTbGlkZSIsInRhcmdldExlZnQiLCJjYWxsYmFjayIsImFuaW1Qcm9wcyIsImFuaW1TdGFydCIsInN0ZXAiLCJjb21wbGV0ZSIsImFwcGx5VHJhbnNpdGlvbiIsImRpc2FibGVUcmFuc2l0aW9uIiwiZ2V0TmF2VGFyZ2V0Iiwibm90Iiwic2xpY2siLCJzbGlkZUhhbmRsZXIiLCJ0cmFuc2l0aW9uIiwic2xpZGVUbyIsImJ1aWxkQXJyb3dzIiwicmVtb3ZlQXR0ciIsImJ1aWxkRG90cyIsImRvdCIsImdldERvdENvdW50IiwiZmlyc3QiLCJidWlsZE91dCIsIndyYXBBbGwiLCJ3cmFwIiwic2V0dXBJbmZpbml0ZSIsInVwZGF0ZURvdHMiLCJzZXRTbGlkZUNsYXNzZXMiLCJidWlsZFJvd3MiLCJuZXdTbGlkZXMiLCJudW1PZlNsaWRlcyIsIm9yaWdpbmFsU2xpZGVzIiwic2xpZGVzUGVyU2VjdGlvbiIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJhcHBlbmRDaGlsZCIsImVtcHR5IiwiY2hlY2tSZXNwb25zaXZlIiwiZm9yY2VVcGRhdGUiLCJicmVha3BvaW50IiwidGFyZ2V0QnJlYWtwb2ludCIsInJlc3BvbmRUb1dpZHRoIiwidHJpZ2dlckJyZWFrcG9pbnQiLCJzbGlkZXJXaWR0aCIsImlubmVyV2lkdGgiLCJ1bnNsaWNrIiwiZXZlbnQiLCJkb250QW5pbWF0ZSIsImN1cnJlbnRUYXJnZXQiLCJpbmRleE9mZnNldCIsInVuZXZlbk9mZnNldCIsIm1lc3NhZ2UiLCJjaGVja05hdmlnYWJsZSIsIm5hdmlnYWJsZXMiLCJwcmV2TmF2aWdhYmxlIiwiZ2V0TmF2aWdhYmxlSW5kZXhlcyIsImNsZWFuVXBFdmVudHMiLCJvZmYiLCJpbnRlcnJ1cHQiLCJ2aXNpYmlsaXR5IiwiY2xlYW5VcFNsaWRlRXZlbnRzIiwib3JpZW50YXRpb25DaGFuZ2UiLCJyZXNpemUiLCJjbGVhblVwUm93cyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImRlc3Ryb3kiLCJmYWRlU2xpZGUiLCJzbGlkZUluZGV4Iiwib3BhY2l0eSIsImZhZGVTbGlkZU91dCIsImZpbHRlclNsaWRlcyIsInNsaWNrRmlsdGVyIiwiZmlsdGVyIiwiZm9jdXNIYW5kbGVyIiwiJHNmIiwiZ2V0Q3VycmVudCIsInNsaWNrQ3VycmVudFNsaWRlIiwiYnJlYWtQb2ludCIsImNvdW50ZXIiLCJwYWdlclF0eSIsImdldExlZnQiLCJ2ZXJ0aWNhbEhlaWdodCIsInZlcnRpY2FsT2Zmc2V0IiwidGFyZ2V0U2xpZGUiLCJjb2VmIiwiZmxvb3IiLCJnZXRPcHRpb24iLCJzbGlja0dldE9wdGlvbiIsIm9wdGlvbiIsImluZGV4ZXMiLCJnZXRTbGljayIsImdldFNsaWRlQ291bnQiLCJzbGlkZXNUcmF2ZXJzZWQiLCJzd2lwZWRTbGlkZSIsImNlbnRlck9mZnNldCIsImdvVG8iLCJzbGlja0dvVG8iLCJjcmVhdGlvbiIsImhhc0NsYXNzIiwic2V0UHJvcHMiLCJzdGFydExvYWQiLCJsb2FkU2xpZGVyIiwiaW5pdGlhbGl6ZUV2ZW50cyIsInVwZGF0ZUFycm93cyIsImluaXRBREEiLCJudW1Eb3RHcm91cHMiLCJ0YWJDb250cm9sSW5kZXhlcyIsInZhbCIsInNsaWRlQ29udHJvbEluZGV4IiwiYXJpYUJ1dHRvbkNvbnRyb2wiLCJtYXBwZWRTbGlkZUluZGV4IiwiZW5kIiwiaW5pdEFycm93RXZlbnRzIiwiaW5pdERvdEV2ZW50cyIsImluaXRTbGlkZUV2ZW50cyIsImluaXRVSSIsIm1hdGNoIiwia2V5Q29kZSIsImxvYWRSYW5nZSIsImNsb25lUmFuZ2UiLCJyYW5nZVN0YXJ0IiwicmFuZ2VFbmQiLCJsb2FkSW1hZ2VzIiwiaW1hZ2VzU2NvcGUiLCJpbWFnZSIsImltYWdlU291cmNlIiwiaW1hZ2VTcmNTZXQiLCJpbWFnZVNpemVzIiwiaW1hZ2VUb0xvYWQiLCJvbmxvYWQiLCJvbmVycm9yIiwic3JjIiwicHJldlNsaWRlIiwibmV4dFNsaWRlIiwicHJvZ3Jlc3NpdmVMYXp5TG9hZCIsIm5leHQiLCJzbGlja05leHQiLCJwYXVzZSIsInNsaWNrUGF1c2UiLCJwbGF5Iiwic2xpY2tQbGF5IiwicG9zdFNsaWRlIiwiJGN1cnJlbnRTbGlkZSIsInByZXYiLCJzbGlja1ByZXYiLCJ0cnlDb3VudCIsIiRpbWdzVG9Mb2FkIiwiaW5pdGlhbGl6aW5nIiwibGFzdFZpc2libGVJbmRleCIsImN1cnJlbnRCcmVha3BvaW50IiwicmVzcG9uc2l2ZVNldHRpbmdzIiwic29ydCIsIndpbmRvd0RlbGF5IiwicmVtb3ZlU2xpZGUiLCJzbGlja1JlbW92ZSIsInJlbW92ZUJlZm9yZSIsInJlbW92ZUFsbCIsInNldENTUyIsInBvc2l0aW9uUHJvcHMiLCJzZXREaW1lbnNpb25zIiwicGFkZGluZyIsInNldEZhZGUiLCJyaWdodCIsInNldEhlaWdodCIsInNldE9wdGlvbiIsInNsaWNrU2V0T3B0aW9uIiwiaXRlbSIsImJvZHlTdHlsZSIsInN0eWxlIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsIk1velRyYW5zaXRpb24iLCJtc1RyYW5zaXRpb24iLCJPVHJhbnNmb3JtIiwicGVyc3BlY3RpdmVQcm9wZXJ0eSIsIndlYmtpdFBlcnNwZWN0aXZlIiwiTW96VHJhbnNmb3JtIiwiTW96UGVyc3BlY3RpdmUiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsImFsbFNsaWRlcyIsInJlbWFpbmRlciIsImV2ZW5Db2VmIiwiaW5maW5pdGVDb3VudCIsImNsb25lIiwidGFyZ2V0RWxlbWVudCIsInBhcmVudHMiLCJzeW5jIiwiYW5pbVNsaWRlIiwib2xkU2xpZGUiLCJzbGlkZUxlZnQiLCJuYXZUYXJnZXQiLCJzd2lwZURpcmVjdGlvbiIsInhEaXN0IiwieURpc3QiLCJzd2lwZUFuZ2xlIiwic3RhcnRYIiwiY3VyWCIsInN0YXJ0WSIsImN1clkiLCJhdGFuMiIsIlBJIiwic3dpcGVFbmQiLCJzd2lwZUxlbmd0aCIsImVkZ2VIaXQiLCJtaW5Td2lwZSIsImZpbmdlckNvdW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJzd2lwZVN0YXJ0Iiwic3dpcGVNb3ZlIiwiZWRnZVdhc0hpdCIsImN1ckxlZnQiLCJwb3NpdGlvbk9mZnNldCIsInZlcnRpY2FsU3dpcGVMZW5ndGgiLCJwYWdlWCIsInBhZ2VZIiwic3FydCIsInBvdyIsInVuZmlsdGVyU2xpZGVzIiwic2xpY2tVbmZpbHRlciIsImZyb21CcmVha3BvaW50IiwiYXJncyIsInJldCIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIiwic2xpZGVVcCIsInNsaWRlRG93biIsIkFPUyIsImluaXRDbGFzc05hbWUiLCJhbmltYXRlZENsYXNzTmFtZSIsInVzZUNsYXNzTmFtZXMiLCJtaXJyb3IiLCJvcGVuTmF2IiwiY2xvc2VOYXYiLCJnZXRFbGVtZW50QnlJZCIsImxvZyIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwibWVudV9pdGVtIiwic2libGluZ3MiLCJ3cCIsImN1c3RvbWl6ZSIsInNlbGVjdGl2ZVJlZnJlc2giLCJiaW5kIiwicGxhY2VtZW50IiwicGFydGlhbCIsIndpZGdldElkUGFydHMiLCJpZEJhc2UiLCJzaXRlTmF2aWdhdGlvbiIsInRvZ2dsZUNsYXNzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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QkFBekIsRUFBZ0RtWixLQUFoRDtBQUNEO0FBQ0YsS0FWSDtBQVlEO0FBQ0YsQ0FyQkQ7QUF1QkF6Yiw2Q0FBQyxDQUFDLFVBQVVBLENBQVYsRUFBYTtBQUNiLE1BQUl3cUIsY0FBYyxHQUFHeHFCLENBQUMsQ0FBQyxrQkFBRCxDQUF0QjtBQUVBd3FCLGdCQUFjLENBQUNsb0IsSUFBZixDQUFvQixHQUFwQixFQUF5QjNCLEVBQXpCLENBQTRCLFlBQTVCLEVBQTBDLFlBQVk7QUFDcERYLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdtQixPQUFSLENBQWdCLElBQWhCLEVBQXNCaUUsV0FBdEIsQ0FBa0MsT0FBbEM7QUFDRCxHQUZEO0FBR0QsQ0FOQSxDQUFELEMsQ0FRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUkzeEIsQ0FBQyxHQUFHMkIsTUFBTSxDQUFDdUUsV0FBZjtBQUNBcEUsT0FBTyxDQUFDK3VCLEdBQVIsQ0FBWTd3QixDQUFaLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBLHdCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkFPUz10KCk6ZS5BT1M9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobyl7aWYobltvXSlyZXR1cm4gbltvXS5leHBvcnRzO3ZhciBpPW5bb109e2V4cG9ydHM6e30saWQ6byxsb2FkZWQ6ITF9O3JldHVybiBlW29dLmNhbGwoaS5leHBvcnRzLGksaS5leHBvcnRzLHQpLGkubG9hZGVkPSEwLGkuZXhwb3J0c312YXIgbj17fTtyZXR1cm4gdC5tPWUsdC5jPW4sdC5wPVwiZGlzdC9cIix0KDApfShbZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fXZhciBpPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciBuPWFyZ3VtZW50c1t0XTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKGVbb109bltvXSl9cmV0dXJuIGV9LHI9bigxKSxhPShvKHIpLG4oNikpLHU9byhhKSxjPW4oNykscz1vKGMpLGY9big4KSxkPW8oZiksbD1uKDkpLHA9byhsKSxtPW4oMTApLGI9byhtKSx2PW4oMTEpLHk9byh2KSxnPW4oMTQpLGg9byhnKSx3PVtdLGs9ITEseD17b2Zmc2V0OjEyMCxkZWxheTowLGVhc2luZzpcImVhc2VcIixkdXJhdGlvbjo0MDAsZGlzYWJsZTohMSxvbmNlOiExLHN0YXJ0RXZlbnQ6XCJET01Db250ZW50TG9hZGVkXCIsdGhyb3R0bGVEZWxheTo5OSxkZWJvdW5jZURlbGF5OjUwLGRpc2FibGVNdXRhdGlvbk9ic2VydmVyOiExfSxqPWZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0mJmFyZ3VtZW50c1swXTtpZihlJiYoaz0hMCksaylyZXR1cm4gdz0oMCx5LmRlZmF1bHQpKHcseCksKDAsYi5kZWZhdWx0KSh3LHgub25jZSksd30sTz1mdW5jdGlvbigpe3c9KDAsaC5kZWZhdWx0KSgpLGooKX0sTT1mdW5jdGlvbigpe3cuZm9yRWFjaChmdW5jdGlvbihlLHQpe2Uubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvc1wiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZGVsYXlcIil9KX0sUz1mdW5jdGlvbihlKXtyZXR1cm4gZT09PSEwfHxcIm1vYmlsZVwiPT09ZSYmcC5kZWZhdWx0Lm1vYmlsZSgpfHxcInBob25lXCI9PT1lJiZwLmRlZmF1bHQucGhvbmUoKXx8XCJ0YWJsZXRcIj09PWUmJnAuZGVmYXVsdC50YWJsZXQoKXx8XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpPT09ITB9LF89ZnVuY3Rpb24oZSl7eD1pKHgsZSksdz0oMCxoLmRlZmF1bHQpKCk7dmFyIHQ9ZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2I7cmV0dXJuIFMoeC5kaXNhYmxlKXx8dD9NKCk6KHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXJ8fGQuZGVmYXVsdC5pc1N1cHBvcnRlZCgpfHwoY29uc29sZS5pbmZvKCdcXG4gICAgICBhb3M6IE11dGF0aW9uT2JzZXJ2ZXIgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXIsXFxuICAgICAgY29kZSBtdXRhdGlvbnMgb2JzZXJ2aW5nIGhhcyBiZWVuIGRpc2FibGVkLlxcbiAgICAgIFlvdSBtYXkgaGF2ZSB0byBjYWxsIFwicmVmcmVzaEhhcmQoKVwiIGJ5IHlvdXJzZWxmLlxcbiAgICAnKSx4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyPSEwKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1lYXNpbmdcIix4LmVhc2luZyksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZHVyYXRpb25cIix4LmR1cmF0aW9uKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiLHguZGVsYXkpLFwiRE9NQ29udGVudExvYWRlZFwiPT09eC5zdGFydEV2ZW50JiZbXCJjb21wbGV0ZVwiLFwiaW50ZXJhY3RpdmVcIl0uaW5kZXhPZihkb2N1bWVudC5yZWFkeVN0YXRlKT4tMT9qKCEwKTpcImxvYWRcIj09PXguc3RhcnRFdmVudD93aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih4LnN0YXJ0RXZlbnQsZnVuY3Rpb24oKXtqKCEwKX0pOmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoeC5zdGFydEV2ZW50LGZ1bmN0aW9uKCl7aighMCl9KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCgwLHMuZGVmYXVsdCkoaix4LmRlYm91bmNlRGVsYXksITApKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsKDAscy5kZWZhdWx0KShqLHguZGVib3VuY2VEZWxheSwhMCkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKDAsdS5kZWZhdWx0KShmdW5jdGlvbigpeygwLGIuZGVmYXVsdCkodyx4Lm9uY2UpfSx4LnRocm90dGxlRGVsYXkpKSx4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyfHxkLmRlZmF1bHQucmVhZHkoXCJbZGF0YS1hb3NdXCIsTyksdyl9O2UuZXhwb3J0cz17aW5pdDpfLHJlZnJlc2g6aixyZWZyZXNoSGFyZDpPfX0sZnVuY3Rpb24oZSx0KXt9LCwsLCxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtmdW5jdGlvbiBvKHQpe3ZhciBuPWIsbz12O3JldHVybiBiPXY9dm9pZCAwLGs9dCxnPWUuYXBwbHkobyxuKX1mdW5jdGlvbiByKGUpe3JldHVybiBrPWUsaD1zZXRUaW1lb3V0KGYsdCksTT9vKGUpOmd9ZnVuY3Rpb24gYShlKXt2YXIgbj1lLXcsbz1lLWssaT10LW47cmV0dXJuIFM/aihpLHktbyk6aX1mdW5jdGlvbiBjKGUpe3ZhciBuPWUtdyxvPWUtaztyZXR1cm4gdm9pZCAwPT09d3x8bj49dHx8bjwwfHxTJiZvPj15fWZ1bmN0aW9uIGYoKXt2YXIgZT1PKCk7cmV0dXJuIGMoZSk/ZChlKTp2b2lkKGg9c2V0VGltZW91dChmLGEoZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBoPXZvaWQgMCxfJiZiP28oZSk6KGI9dj12b2lkIDAsZyl9ZnVuY3Rpb24gbCgpe3ZvaWQgMCE9PWgmJmNsZWFyVGltZW91dChoKSxrPTAsYj13PXY9aD12b2lkIDB9ZnVuY3Rpb24gcCgpe3JldHVybiB2b2lkIDA9PT1oP2c6ZChPKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1PKCksbj1jKGUpO2lmKGI9YXJndW1lbnRzLHY9dGhpcyx3PWUsbil7aWYodm9pZCAwPT09aClyZXR1cm4gcih3KTtpZihTKXJldHVybiBoPXNldFRpbWVvdXQoZix0KSxvKHcpfXJldHVybiB2b2lkIDA9PT1oJiYoaD1zZXRUaW1lb3V0KGYsdCkpLGd9dmFyIGIsdix5LGcsaCx3LGs9MCxNPSExLFM9ITEsXz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3Iocyk7cmV0dXJuIHQ9dSh0KXx8MCxpKG4pJiYoTT0hIW4ubGVhZGluZyxTPVwibWF4V2FpdFwiaW4gbix5PVM/eCh1KG4ubWF4V2FpdCl8fDAsdCk6eSxfPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOl8pLG0uY2FuY2VsPWwsbS5mbHVzaD1wLG19ZnVuY3Rpb24gbyhlLHQsbyl7dmFyIHI9ITAsYT0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3Iocyk7cmV0dXJuIGkobykmJihyPVwibGVhZGluZ1wiaW4gbz8hIW8ubGVhZGluZzpyLGE9XCJ0cmFpbGluZ1wiaW4gbz8hIW8udHJhaWxpbmc6YSksbihlLHQse2xlYWRpbmc6cixtYXhXYWl0OnQsdHJhaWxpbmc6YX0pfWZ1bmN0aW9uIGkoZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpO3JldHVybiEhZSYmKFwib2JqZWN0XCI9PXR8fFwiZnVuY3Rpb25cIj09dCl9ZnVuY3Rpb24gcihlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSkpfWZ1bmN0aW9uIGEoZSl7cmV0dXJuXCJzeW1ib2xcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKSl8fHIoZSkmJmsuY2FsbChlKT09ZH1mdW5jdGlvbiB1KGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKGEoZSkpcmV0dXJuIGY7aWYoaShlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1pKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGwsXCJcIik7dmFyIG49bS50ZXN0KGUpO3JldHVybiBufHxiLnRlc3QoZSk/dihlLnNsaWNlKDIpLG4/Mjo4KTpwLnRlc3QoZSk/ZjorZX12YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxzPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLGY9TmFOLGQ9XCJbb2JqZWN0IFN5bWJvbF1cIixsPS9eXFxzK3xcXHMrJC9nLHA9L15bLStdMHhbMC05YS1mXSskL2ksbT0vXjBiWzAxXSskL2ksYj0vXjBvWzAtN10rJC9pLHY9cGFyc2VJbnQseT1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjpjKHQpKSYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQsZz1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/XCJ1bmRlZmluZWRcIjpjKHNlbGYpKSYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsaD15fHxnfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksdz1PYmplY3QucHJvdG90eXBlLGs9dy50b1N0cmluZyx4PU1hdGgubWF4LGo9TWF0aC5taW4sTz1mdW5jdGlvbigpe3JldHVybiBoLkRhdGUubm93KCl9O2UuZXhwb3J0cz1vfSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpeyhmdW5jdGlvbih0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxuKXtmdW5jdGlvbiBpKHQpe3ZhciBuPWIsbz12O3JldHVybiBiPXY9dm9pZCAwLE89dCxnPWUuYXBwbHkobyxuKX1mdW5jdGlvbiByKGUpe3JldHVybiBPPWUsaD1zZXRUaW1lb3V0KGYsdCksTT9pKGUpOmd9ZnVuY3Rpb24gdShlKXt2YXIgbj1lLXcsbz1lLU8saT10LW47cmV0dXJuIFM/eChpLHktbyk6aX1mdW5jdGlvbiBzKGUpe3ZhciBuPWUtdyxvPWUtTztyZXR1cm4gdm9pZCAwPT09d3x8bj49dHx8bjwwfHxTJiZvPj15fWZ1bmN0aW9uIGYoKXt2YXIgZT1qKCk7cmV0dXJuIHMoZSk/ZChlKTp2b2lkKGg9c2V0VGltZW91dChmLHUoZSkpKX1mdW5jdGlvbiBkKGUpe3JldHVybiBoPXZvaWQgMCxfJiZiP2koZSk6KGI9dj12b2lkIDAsZyl9ZnVuY3Rpb24gbCgpe3ZvaWQgMCE9PWgmJmNsZWFyVGltZW91dChoKSxPPTAsYj13PXY9aD12b2lkIDB9ZnVuY3Rpb24gcCgpe3JldHVybiB2b2lkIDA9PT1oP2c6ZChqKCkpfWZ1bmN0aW9uIG0oKXt2YXIgZT1qKCksbj1zKGUpO2lmKGI9YXJndW1lbnRzLHY9dGhpcyx3PWUsbil7aWYodm9pZCAwPT09aClyZXR1cm4gcih3KTtpZihTKXJldHVybiBoPXNldFRpbWVvdXQoZix0KSxpKHcpfXJldHVybiB2b2lkIDA9PT1oJiYoaD1zZXRUaW1lb3V0KGYsdCkpLGd9dmFyIGIsdix5LGcsaCx3LE89MCxNPSExLFM9ITEsXz0hMDtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoYyk7cmV0dXJuIHQ9YSh0KXx8MCxvKG4pJiYoTT0hIW4ubGVhZGluZyxTPVwibWF4V2FpdFwiaW4gbix5PVM/ayhhKG4ubWF4V2FpdCl8fDAsdCk6eSxfPVwidHJhaWxpbmdcImluIG4/ISFuLnRyYWlsaW5nOl8pLG0uY2FuY2VsPWwsbS5mbHVzaD1wLG19ZnVuY3Rpb24gbyhlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiBpKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKSl9ZnVuY3Rpb24gcihlKXtyZXR1cm5cInN5bWJvbFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKXx8aShlKSYmdy5jYWxsKGUpPT1mfWZ1bmN0aW9uIGEoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYocihlKSlyZXR1cm4gcztpZihvKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPW8odCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UoZCxcIlwiKTt2YXIgbj1wLnRlc3QoZSk7cmV0dXJuIG58fG0udGVzdChlKT9iKGUuc2xpY2UoMiksbj8yOjgpOmwudGVzdChlKT9zOitlfXZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGM9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIscz1OYU4sZj1cIltvYmplY3QgU3ltYm9sXVwiLGQ9L15cXHMrfFxccyskL2csbD0vXlstK10weFswLTlhLWZdKyQvaSxwPS9eMGJbMDFdKyQvaSxtPS9eMG9bMC03XSskL2ksYj1wYXJzZUludCx2PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOnUodCkpJiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdCx5PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj9cInVuZGVmaW5lZFwiOnUoc2VsZikpJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixnPXZ8fHl8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSxoPU9iamVjdC5wcm90b3R5cGUsdz1oLnRvU3RyaW5nLGs9TWF0aC5tYXgseD1NYXRoLm1pbixqPWZ1bmN0aW9uKCl7cmV0dXJuIGcuRGF0ZS5ub3coKX07ZS5leHBvcnRzPW59KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXt2YXIgdD12b2lkIDAsbz12b2lkIDAsaT12b2lkIDA7Zm9yKHQ9MDt0PGUubGVuZ3RoO3QrPTEpe2lmKG89ZVt0XSxvLmRhdGFzZXQmJm8uZGF0YXNldC5hb3MpcmV0dXJuITA7aWYoaT1vLmNoaWxkcmVuJiZuKG8uY2hpbGRyZW4pKXJldHVybiEwfXJldHVybiExfWZ1bmN0aW9uIG8oKXtyZXR1cm4gd2luZG93Lk11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuTW96TXV0YXRpb25PYnNlcnZlcn1mdW5jdGlvbiBpKCl7cmV0dXJuISFvKCl9ZnVuY3Rpb24gcihlLHQpe3ZhciBuPXdpbmRvdy5kb2N1bWVudCxpPW8oKSxyPW5ldyBpKGEpO3U9dCxyLm9ic2VydmUobi5kb2N1bWVudEVsZW1lbnQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwLHJlbW92ZWROb2RlczohMH0pfWZ1bmN0aW9uIGEoZSl7ZSYmZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0PUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUuYWRkZWROb2Rlcyksbz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLnJlbW92ZWROb2RlcyksaT10LmNvbmNhdChvKTtpZihuKGkpKXJldHVybiB1KCl9KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgdT1mdW5jdGlvbigpe307dC5kZWZhdWx0PXtpc1N1cHBvcnRlZDppLHJlYWR5OnJ9fSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIG8oKXtyZXR1cm4gbmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8d2luZG93Lm9wZXJhfHxcIlwifU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgbz10W25dO28uZW51bWVyYWJsZT1vLmVudW1lcmFibGV8fCExLG8uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG8mJihvLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxvLmtleSxvKX19cmV0dXJuIGZ1bmN0aW9uKHQsbixvKXtyZXR1cm4gbiYmZSh0LnByb3RvdHlwZSxuKSxvJiZlKHQsbyksdH19KCkscj0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vL2ksYT0vMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSx1PS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm98YW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGsvaSxjPS8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLHM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7bih0aGlzLGUpfXJldHVybiBpKGUsW3trZXk6XCJwaG9uZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bygpO3JldHVybiEoIXIudGVzdChlKSYmIWEudGVzdChlLnN1YnN0cigwLDQpKSl9fSx7a2V5OlwibW9iaWxlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1vKCk7cmV0dXJuISghdS50ZXN0KGUpJiYhYy50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJ0YWJsZXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1vYmlsZSgpJiYhdGhpcy5waG9uZSgpfX1dKSxlfSgpO3QuZGVmYXVsdD1uZXcgc30sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlLHQsbil7dmFyIG89ZS5ub2RlLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLW9uY2VcIik7dD5lLnBvc2l0aW9uP2Uubm9kZS5jbGFzc0xpc3QuYWRkKFwiYW9zLWFuaW1hdGVcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG8mJihcImZhbHNlXCI9PT1vfHwhbiYmXCJ0cnVlXCIhPT1vKSYmZS5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoXCJhb3MtYW5pbWF0ZVwiKX0sbz1mdW5jdGlvbihlLHQpe3ZhciBvPXdpbmRvdy5wYWdlWU9mZnNldCxpPXdpbmRvdy5pbm5lckhlaWdodDtlLmZvckVhY2goZnVuY3Rpb24oZSxyKXtuKGUsaStvLHQpfSl9O3QuZGVmYXVsdD1vfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9bigxMikscj1vKGkpLGE9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKGUsbil7ZS5ub2RlLmNsYXNzTGlzdC5hZGQoXCJhb3MtaW5pdFwiKSxlLnBvc2l0aW9uPSgwLHIuZGVmYXVsdCkoZS5ub2RlLHQub2Zmc2V0KX0pLGV9O3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9bigxMykscj1vKGkpLGE9ZnVuY3Rpb24oZSx0KXt2YXIgbj0wLG89MCxpPXdpbmRvdy5pbm5lckhlaWdodCxhPXtvZmZzZXQ6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1vZmZzZXRcIiksYW5jaG9yOmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtYW5jaG9yXCIpLGFuY2hvclBsYWNlbWVudDplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnRcIil9O3N3aXRjaChhLm9mZnNldCYmIWlzTmFOKGEub2Zmc2V0KSYmKG89cGFyc2VJbnQoYS5vZmZzZXQpKSxhLmFuY2hvciYmZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLmFuY2hvcikmJihlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYS5hbmNob3IpWzBdKSxuPSgwLHIuZGVmYXVsdCkoZSkudG9wLGEuYW5jaG9yUGxhY2VtZW50KXtjYXNlXCJ0b3AtYm90dG9tXCI6YnJlYWs7Y2FzZVwiY2VudGVyLWJvdHRvbVwiOm4rPWUub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwiYm90dG9tLWJvdHRvbVwiOm4rPWUub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2VcInRvcC1jZW50ZXJcIjpuKz1pLzI7YnJlYWs7Y2FzZVwiYm90dG9tLWNlbnRlclwiOm4rPWkvMitlLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJjZW50ZXItY2VudGVyXCI6bis9aS8yK2Uub2Zmc2V0SGVpZ2h0LzI7YnJlYWs7Y2FzZVwidG9wLXRvcFwiOm4rPWk7YnJlYWs7Y2FzZVwiYm90dG9tLXRvcFwiOm4rPWUub2Zmc2V0SGVpZ2h0K2k7YnJlYWs7Y2FzZVwiY2VudGVyLXRvcFwiOm4rPWUub2Zmc2V0SGVpZ2h0LzIraX1yZXR1cm4gYS5hbmNob3JQbGFjZW1lbnR8fGEub2Zmc2V0fHxpc05hTih0KXx8KG89dCksbitvfTt0LmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7ZSYmIWlzTmFOKGUub2Zmc2V0TGVmdCkmJiFpc05hTihlLm9mZnNldFRvcCk7KXQrPWUub2Zmc2V0TGVmdC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbExlZnQ6MCksbis9ZS5vZmZzZXRUb3AtKFwiQk9EWVwiIT1lLnRhZ05hbWU/ZS5zY3JvbGxUb3A6MCksZT1lLm9mZnNldFBhcmVudDtyZXR1cm57dG9wOm4sbGVmdDp0fX07dC5kZWZhdWx0PW59LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSl7cmV0dXJuIGU9ZXx8ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFvc11cIiksQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGUsZnVuY3Rpb24oZSl7cmV0dXJue25vZGU6ZX19KX07dC5kZWZhdWx0PW59XSl9KTsiLCIvKiFcclxuICoganF1ZXJ5LWNvbmZpcm0gdjMuMy40IChodHRwOi8vY3JhZnRwaXAuZ2l0aHViLmlvL2pxdWVyeS1jb25maXJtLylcclxuICogQXV0aG9yOiBCb25pZmFjZSBQZXJlaXJhXHJcbiAqIFdlYnNpdGU6IHd3dy5jcmFmdHBpcC5jb21cclxuICogQ29udGFjdDogaGV5QGNyYWZ0cGlwLmNvbVxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE5IGpxdWVyeS1jb25maXJtXHJcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL2NyYWZ0cGlwL2pxdWVyeS1jb25maXJtL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXHJcbiAqL1xyXG4oZnVuY3Rpb24oZmFjdG9yeSl7aWYodHlwZW9mIGRlZmluZT09PVwiZnVuY3Rpb25cIiYmZGVmaW5lLmFtZCl7ZGVmaW5lKFtcImpxdWVyeVwiXSxmYWN0b3J5KTt9ZWxzZXtpZih0eXBlb2YgbW9kdWxlPT09XCJvYmplY3RcIiYmbW9kdWxlLmV4cG9ydHMpe21vZHVsZS5leHBvcnRzPWZ1bmN0aW9uKHJvb3QsalF1ZXJ5KXtpZihqUXVlcnk9PT11bmRlZmluZWQpe2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtqUXVlcnk9cmVxdWlyZShcImpxdWVyeVwiKTt9ZWxzZXtqUXVlcnk9cmVxdWlyZShcImpxdWVyeVwiKShyb290KTt9fWZhY3RvcnkoalF1ZXJ5KTtyZXR1cm4galF1ZXJ5O307fWVsc2V7ZmFjdG9yeShqUXVlcnkpO319fShmdW5jdGlvbigkKXt2YXIgdz13aW5kb3c7JC5mbi5jb25maXJtPWZ1bmN0aW9uKG9wdGlvbnMsb3B0aW9uMil7aWYodHlwZW9mIG9wdGlvbnM9PT1cInVuZGVmaW5lZFwiKXtvcHRpb25zPXt9O31pZih0eXBlb2Ygb3B0aW9ucz09PVwic3RyaW5nXCIpe29wdGlvbnM9e2NvbnRlbnQ6b3B0aW9ucyx0aXRsZToob3B0aW9uMik/b3B0aW9uMjpmYWxzZX07fSQodGhpcykuZWFjaChmdW5jdGlvbigpe3ZhciAkdGhpcz0kKHRoaXMpO2lmKCR0aGlzLmF0dHIoXCJqYy1hdHRhY2hlZFwiKSl7Y29uc29sZS53YXJuKFwiakNvbmZpcm0gaGFzIGFscmVhZHkgYmVlbiBhdHRhY2hlZCB0byB0aGlzIGVsZW1lbnQgXCIsJHRoaXNbMF0pO3JldHVybjt9JHRoaXMub24oXCJjbGlja1wiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgamNPcHRpb249JC5leHRlbmQoe30sb3B0aW9ucyk7aWYoJHRoaXMuYXR0cihcImRhdGEtdGl0bGVcIikpe2pjT3B0aW9uLnRpdGxlPSR0aGlzLmF0dHIoXCJkYXRhLXRpdGxlXCIpO31pZigkdGhpcy5hdHRyKFwiZGF0YS1jb250ZW50XCIpKXtqY09wdGlvbi5jb250ZW50PSR0aGlzLmF0dHIoXCJkYXRhLWNvbnRlbnRcIik7fWlmKHR5cGVvZiBqY09wdGlvbi5idXR0b25zPT09XCJ1bmRlZmluZWRcIil7amNPcHRpb24uYnV0dG9ucz17fTt9amNPcHRpb25bXCIkdGFyZ2V0XCJdPSR0aGlzO2lmKCR0aGlzLmF0dHIoXCJocmVmXCIpJiZPYmplY3Qua2V5cyhqY09wdGlvbi5idXR0b25zKS5sZW5ndGg9PT0wKXt2YXIgYnV0dG9ucz0kLmV4dGVuZCh0cnVlLHt9LHcuamNvbmZpcm0ucGx1Z2luRGVmYXVsdHMuZGVmYXVsdEJ1dHRvbnMsKHcuamNvbmZpcm0uZGVmYXVsdHN8fHt9KS5kZWZhdWx0QnV0dG9uc3x8e30pO3ZhciBmaXJzdEJ0bj1PYmplY3Qua2V5cyhidXR0b25zKVswXTtqY09wdGlvbi5idXR0b25zPWJ1dHRvbnM7amNPcHRpb24uYnV0dG9uc1tmaXJzdEJ0bl0uYWN0aW9uPWZ1bmN0aW9uKCl7bG9jYXRpb24uaHJlZj0kdGhpcy5hdHRyKFwiaHJlZlwiKTt9O31qY09wdGlvbi5jbG9zZUljb249ZmFsc2U7dmFyIGluc3RhbmNlPSQuY29uZmlybShqY09wdGlvbik7fSk7JHRoaXMuYXR0cihcImpjLWF0dGFjaGVkXCIsdHJ1ZSk7fSk7cmV0dXJuICQodGhpcyk7fTskLmNvbmZpcm09ZnVuY3Rpb24ob3B0aW9ucyxvcHRpb24yKXtpZih0eXBlb2Ygb3B0aW9ucz09PVwidW5kZWZpbmVkXCIpe29wdGlvbnM9e307fWlmKHR5cGVvZiBvcHRpb25zPT09XCJzdHJpbmdcIil7b3B0aW9ucz17Y29udGVudDpvcHRpb25zLHRpdGxlOihvcHRpb24yKT9vcHRpb24yOmZhbHNlfTt9dmFyIHB1dERlZmF1bHRCdXR0b25zPSEob3B0aW9ucy5idXR0b25zPT09ZmFsc2UpO2lmKHR5cGVvZiBvcHRpb25zLmJ1dHRvbnMhPT1cIm9iamVjdFwiKXtvcHRpb25zLmJ1dHRvbnM9e307fWlmKE9iamVjdC5rZXlzKG9wdGlvbnMuYnV0dG9ucykubGVuZ3RoPT09MCYmcHV0RGVmYXVsdEJ1dHRvbnMpe3ZhciBidXR0b25zPSQuZXh0ZW5kKHRydWUse30sdy5qY29uZmlybS5wbHVnaW5EZWZhdWx0cy5kZWZhdWx0QnV0dG9ucywody5qY29uZmlybS5kZWZhdWx0c3x8e30pLmRlZmF1bHRCdXR0b25zfHx7fSk7b3B0aW9ucy5idXR0b25zPWJ1dHRvbnM7fXJldHVybiB3Lmpjb25maXJtKG9wdGlvbnMpO307JC5hbGVydD1mdW5jdGlvbihvcHRpb25zLG9wdGlvbjIpe2lmKHR5cGVvZiBvcHRpb25zPT09XCJ1bmRlZmluZWRcIil7b3B0aW9ucz17fTt9aWYodHlwZW9mIG9wdGlvbnM9PT1cInN0cmluZ1wiKXtvcHRpb25zPXtjb250ZW50Om9wdGlvbnMsdGl0bGU6KG9wdGlvbjIpP29wdGlvbjI6ZmFsc2V9O312YXIgcHV0RGVmYXVsdEJ1dHRvbnM9IShvcHRpb25zLmJ1dHRvbnM9PT1mYWxzZSk7aWYodHlwZW9mIG9wdGlvbnMuYnV0dG9ucyE9PVwib2JqZWN0XCIpe29wdGlvbnMuYnV0dG9ucz17fTt9aWYoT2JqZWN0LmtleXMob3B0aW9ucy5idXR0b25zKS5sZW5ndGg9PT0wJiZwdXREZWZhdWx0QnV0dG9ucyl7dmFyIGJ1dHRvbnM9JC5leHRlbmQodHJ1ZSx7fSx3Lmpjb25maXJtLnBsdWdpbkRlZmF1bHRzLmRlZmF1bHRCdXR0b25zLCh3Lmpjb25maXJtLmRlZmF1bHRzfHx7fSkuZGVmYXVsdEJ1dHRvbnN8fHt9KTt2YXIgZmlyc3RCdG49T2JqZWN0LmtleXMoYnV0dG9ucylbMF07b3B0aW9ucy5idXR0b25zW2ZpcnN0QnRuXT1idXR0b25zW2ZpcnN0QnRuXTt9cmV0dXJuIHcuamNvbmZpcm0ob3B0aW9ucyk7fTskLmRpYWxvZz1mdW5jdGlvbihvcHRpb25zLG9wdGlvbjIpe2lmKHR5cGVvZiBvcHRpb25zPT09XCJ1bmRlZmluZWRcIil7b3B0aW9ucz17fTt9aWYodHlwZW9mIG9wdGlvbnM9PT1cInN0cmluZ1wiKXtvcHRpb25zPXtjb250ZW50Om9wdGlvbnMsdGl0bGU6KG9wdGlvbjIpP29wdGlvbjI6ZmFsc2UsY2xvc2VJY29uOmZ1bmN0aW9uKCl7fX07fW9wdGlvbnMuYnV0dG9ucz17fTtpZih0eXBlb2Ygb3B0aW9ucy5jbG9zZUljb249PT1cInVuZGVmaW5lZFwiKXtvcHRpb25zLmNsb3NlSWNvbj1mdW5jdGlvbigpe307fW9wdGlvbnMuY29uZmlybUtleXM9WzEzXTtyZXR1cm4gdy5qY29uZmlybShvcHRpb25zKTt9O3cuamNvbmZpcm09ZnVuY3Rpb24ob3B0aW9ucyl7aWYodHlwZW9mIG9wdGlvbnM9PT1cInVuZGVmaW5lZFwiKXtvcHRpb25zPXt9O312YXIgcGx1Z2luT3B0aW9ucz0kLmV4dGVuZCh0cnVlLHt9LHcuamNvbmZpcm0ucGx1Z2luRGVmYXVsdHMpO2lmKHcuamNvbmZpcm0uZGVmYXVsdHMpe3BsdWdpbk9wdGlvbnM9JC5leHRlbmQodHJ1ZSxwbHVnaW5PcHRpb25zLHcuamNvbmZpcm0uZGVmYXVsdHMpO31wbHVnaW5PcHRpb25zPSQuZXh0ZW5kKHRydWUse30scGx1Z2luT3B0aW9ucyxvcHRpb25zKTt2YXIgaW5zdGFuY2U9bmV3IHcuSmNvbmZpcm0ocGx1Z2luT3B0aW9ucyk7dy5qY29uZmlybS5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7cmV0dXJuIGluc3RhbmNlO307dy5KY29uZmlybT1mdW5jdGlvbihvcHRpb25zKXskLmV4dGVuZCh0aGlzLG9wdGlvbnMpO3RoaXMuX2luaXQoKTt9O3cuSmNvbmZpcm0ucHJvdG90eXBlPXtfaW5pdDpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7aWYoIXcuamNvbmZpcm0uaW5zdGFuY2VzLmxlbmd0aCl7dy5qY29uZmlybS5sYXN0Rm9jdXNlZD0kKFwiYm9keVwiKS5maW5kKFwiOmZvY3VzXCIpO310aGlzLl9pZD1NYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqOTk5OTkpO3RoaXMuY29udGVudFBhcnNlZD0kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO2lmKCF0aGlzLmxhenlPcGVuKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC5vcGVuKCk7fSwwKTt9fSxfYnVpbGRIVE1MOmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpczt0aGlzLl9wYXJzZUFuaW1hdGlvbih0aGlzLmFuaW1hdGlvbixcIm9cIik7dGhpcy5fcGFyc2VBbmltYXRpb24odGhpcy5jbG9zZUFuaW1hdGlvbixcImNcIik7dGhpcy5fcGFyc2VCZ0Rpc21pc3NBbmltYXRpb24odGhpcy5iYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvbik7dGhpcy5fcGFyc2VDb2x1bW5DbGFzcyh0aGlzLmNvbHVtbkNsYXNzKTt0aGlzLl9wYXJzZVRoZW1lKHRoaXMudGhlbWUpO3RoaXMuX3BhcnNlVHlwZSh0aGlzLnR5cGUpO3ZhciB0ZW1wbGF0ZT0kKHRoaXMudGVtcGxhdGUpO3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tYm94XCIpLmFkZENsYXNzKHRoaXMuYW5pbWF0aW9uUGFyc2VkKS5hZGRDbGFzcyh0aGlzLmJhY2tncm91bmREaXNtaXNzQW5pbWF0aW9uUGFyc2VkKS5hZGRDbGFzcyh0aGlzLnR5cGVQYXJzZWQpO2lmKHRoaXMudHlwZUFuaW1hdGVkKXt0ZW1wbGF0ZS5maW5kKFwiLmpjb25maXJtLWJveFwiKS5hZGRDbGFzcyhcImpjb25maXJtLXR5cGUtYW5pbWF0ZWRcIik7fWlmKHRoaXMudXNlQm9vdHN0cmFwKXt0ZW1wbGF0ZS5maW5kKFwiLmpjLWJzMy1yb3dcIikuYWRkQ2xhc3ModGhpcy5ib290c3RyYXBDbGFzc2VzLnJvdyk7dGVtcGxhdGUuZmluZChcIi5qYy1iczMtcm93XCIpLmFkZENsYXNzKFwianVzdGlmeS1jb250ZW50LW1kLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtc20tY2VudGVyIGp1c3RpZnktY29udGVudC14cy1jZW50ZXIganVzdGlmeS1jb250ZW50LWxnLWNlbnRlclwiKTt0ZW1wbGF0ZS5maW5kKFwiLmpjb25maXJtLWJveC1jb250YWluZXJcIikuYWRkQ2xhc3ModGhpcy5jb2x1bW5DbGFzc1BhcnNlZCk7aWYodGhpcy5jb250YWluZXJGbHVpZCl7dGVtcGxhdGUuZmluZChcIi5qYy1iczMtY29udGFpbmVyXCIpLmFkZENsYXNzKHRoaXMuYm9vdHN0cmFwQ2xhc3Nlcy5jb250YWluZXJGbHVpZCk7fWVsc2V7dGVtcGxhdGUuZmluZChcIi5qYy1iczMtY29udGFpbmVyXCIpLmFkZENsYXNzKHRoaXMuYm9vdHN0cmFwQ2xhc3Nlcy5jb250YWluZXIpO319ZWxzZXt0ZW1wbGF0ZS5maW5kKFwiLmpjb25maXJtLWJveFwiKS5jc3MoXCJ3aWR0aFwiLHRoaXMuYm94V2lkdGgpO31pZih0aGlzLnRpdGxlQ2xhc3Mpe3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tdGl0bGUtY1wiKS5hZGRDbGFzcyh0aGlzLnRpdGxlQ2xhc3MpO310ZW1wbGF0ZS5hZGRDbGFzcyh0aGlzLnRoZW1lUGFyc2VkKTt2YXIgYXJpYUxhYmVsPVwiamNvbmZpcm0tYm94XCIrdGhpcy5faWQ7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS1ib3hcIikuYXR0cihcImFyaWEtbGFiZWxsZWRieVwiLGFyaWFMYWJlbCkuYXR0cihcInRhYmluZGV4XCIsLTEpO3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tY29udGVudFwiKS5hdHRyKFwiaWRcIixhcmlhTGFiZWwpO2lmKHRoaXMuYmdPcGFjaXR5IT09bnVsbCl7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS1iZ1wiKS5jc3MoXCJvcGFjaXR5XCIsdGhpcy5iZ09wYWNpdHkpO31pZih0aGlzLnJ0bCl7dGVtcGxhdGUuYWRkQ2xhc3MoXCJqY29uZmlybS1ydGxcIik7fXRoaXMuJGVsPXRlbXBsYXRlLmFwcGVuZFRvKHRoaXMuY29udGFpbmVyKTt0aGlzLiRqY29uZmlybUJveENvbnRhaW5lcj10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWJveC1jb250YWluZXJcIik7dGhpcy4kamNvbmZpcm1Cb3g9dGhpcy4kYm9keT10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWJveFwiKTt0aGlzLiRqY29uZmlybUJnPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tYmdcIik7dGhpcy4kdGl0bGU9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS10aXRsZVwiKTt0aGlzLiR0aXRsZUNvbnRhaW5lcj10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLXRpdGxlLWNcIik7dGhpcy4kY29udGVudD10aGlzLiRlbC5maW5kKFwiZGl2Lmpjb25maXJtLWNvbnRlbnRcIik7dGhpcy4kY29udGVudFBhbmU9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1jb250ZW50LXBhbmVcIik7dGhpcy4kaWNvbj10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWljb24tY1wiKTt0aGlzLiRjbG9zZUljb249dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1jbG9zZUljb25cIik7dGhpcy4kaG9sZGVyPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0taG9sZGVyXCIpO3RoaXMuJGJ0bmM9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1idXR0b25zXCIpO3RoaXMuJHNjcm9sbFBhbmU9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1zY3JvbGxwYW5lXCIpO3RoYXQuc2V0U3RhcnRpbmdQb2ludCgpO3RoaXMuX2NvbnRlbnRSZWFkeT0kLkRlZmVycmVkKCk7dGhpcy5fbW9kYWxSZWFkeT0kLkRlZmVycmVkKCk7dGhpcy4kaG9sZGVyLmNzcyh7XCJwYWRkaW5nLXRvcFwiOnRoaXMub2Zmc2V0VG9wLFwicGFkZGluZy1ib3R0b21cIjp0aGlzLm9mZnNldEJvdHRvbSx9KTt0aGlzLnNldFRpdGxlKCk7dGhpcy5zZXRJY29uKCk7dGhpcy5fc2V0QnV0dG9ucygpO3RoaXMuX3BhcnNlQ29udGVudCgpO3RoaXMuaW5pdERyYWdnYWJsZSgpO2lmKHRoaXMuaXNBamF4KXt0aGlzLnNob3dMb2FkaW5nKGZhbHNlKTt9JC53aGVuKHRoaXMuX2NvbnRlbnRSZWFkeSx0aGlzLl9tb2RhbFJlYWR5KS50aGVuKGZ1bmN0aW9uKCl7aWYodGhhdC5pc0FqYXhMb2FkaW5nKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC5pc0FqYXhMb2FkaW5nPWZhbHNlO3RoYXQuc2V0Q29udGVudCgpO3RoYXQuc2V0VGl0bGUoKTt0aGF0LnNldEljb24oKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC5oaWRlTG9hZGluZyhmYWxzZSk7dGhhdC5fdXBkYXRlQ29udGVudE1heEhlaWdodCgpO30sMTAwKTtpZih0eXBlb2YgdGhhdC5vbkNvbnRlbnRSZWFkeT09PVwiZnVuY3Rpb25cIil7dGhhdC5vbkNvbnRlbnRSZWFkeSgpO319LDUwKTt9ZWxzZXt0aGF0Ll91cGRhdGVDb250ZW50TWF4SGVpZ2h0KCk7dGhhdC5zZXRUaXRsZSgpO3RoYXQuc2V0SWNvbigpO2lmKHR5cGVvZiB0aGF0Lm9uQ29udGVudFJlYWR5PT09XCJmdW5jdGlvblwiKXt0aGF0Lm9uQ29udGVudFJlYWR5KCk7fX1pZih0aGF0LmF1dG9DbG9zZSl7dGhhdC5fc3RhcnRDb3VudERvd24oKTt9fSkudGhlbihmdW5jdGlvbigpe3RoYXQuX3dhdGNoQ29udGVudCgpO30pO2lmKHRoaXMuYW5pbWF0aW9uPT09XCJub25lXCIpe3RoaXMuYW5pbWF0aW9uU3BlZWQ9MTt0aGlzLmFuaW1hdGlvbkJvdW5jZT0xO310aGlzLiRib2R5LmNzcyh0aGlzLl9nZXRDU1ModGhpcy5hbmltYXRpb25TcGVlZCx0aGlzLmFuaW1hdGlvbkJvdW5jZSkpO3RoaXMuJGNvbnRlbnRQYW5lLmNzcyh0aGlzLl9nZXRDU1ModGhpcy5hbmltYXRpb25TcGVlZCwxKSk7dGhpcy4kamNvbmZpcm1CZy5jc3ModGhpcy5fZ2V0Q1NTKHRoaXMuYW5pbWF0aW9uU3BlZWQsMSkpO3RoaXMuJGpjb25maXJtQm94Q29udGFpbmVyLmNzcyh0aGlzLl9nZXRDU1ModGhpcy5hbmltYXRpb25TcGVlZCwxKSk7fSxfdHlwZVByZWZpeDpcImpjb25maXJtLXR5cGUtXCIsdHlwZVBhcnNlZDpcIlwiLF9wYXJzZVR5cGU6ZnVuY3Rpb24odHlwZSl7dGhpcy50eXBlUGFyc2VkPXRoaXMuX3R5cGVQcmVmaXgrdHlwZTt9LHNldFR5cGU6ZnVuY3Rpb24odHlwZSl7dmFyIG9sZENsYXNzPXRoaXMudHlwZVBhcnNlZDt0aGlzLl9wYXJzZVR5cGUodHlwZSk7dGhpcy4kamNvbmZpcm1Cb3gucmVtb3ZlQ2xhc3Mob2xkQ2xhc3MpLmFkZENsYXNzKHRoaXMudHlwZVBhcnNlZCk7fSx0aGVtZVBhcnNlZDpcIlwiLF90aGVtZVByZWZpeDpcImpjb25maXJtLVwiLHNldFRoZW1lOmZ1bmN0aW9uKHRoZW1lKXt2YXIgcHJldmlvdXM9dGhpcy50aGVtZTt0aGlzLnRoZW1lPXRoZW1lfHx0aGlzLnRoZW1lO3RoaXMuX3BhcnNlVGhlbWUodGhpcy50aGVtZSk7aWYocHJldmlvdXMpe3RoaXMuJGVsLnJlbW92ZUNsYXNzKHByZXZpb3VzKTt9dGhpcy4kZWwuYWRkQ2xhc3ModGhpcy50aGVtZVBhcnNlZCk7dGhpcy50aGVtZT10aGVtZTt9LF9wYXJzZVRoZW1lOmZ1bmN0aW9uKHRoZW1lKXt2YXIgdGhhdD10aGlzO3RoZW1lPXRoZW1lLnNwbGl0KFwiLFwiKTskLmVhY2godGhlbWUsZnVuY3Rpb24oayxhKXtpZihhLmluZGV4T2YodGhhdC5fdGhlbWVQcmVmaXgpPT09LTEpe3RoZW1lW2tdPXRoYXQuX3RoZW1lUHJlZml4KyQudHJpbShhKTt9fSk7dGhpcy50aGVtZVBhcnNlZD10aGVtZS5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO30sYmFja2dyb3VuZERpc21pc3NBbmltYXRpb25QYXJzZWQ6XCJcIixfYmdEaXNtaXNzUHJlZml4OlwiamNvbmZpcm0taGlsaWdodC1cIixfcGFyc2VCZ0Rpc21pc3NBbmltYXRpb246ZnVuY3Rpb24oYmdEaXNtaXNzQW5pbWF0aW9uKXt2YXIgYW5pbWF0aW9uPWJnRGlzbWlzc0FuaW1hdGlvbi5zcGxpdChcIixcIik7dmFyIHRoYXQ9dGhpczskLmVhY2goYW5pbWF0aW9uLGZ1bmN0aW9uKGssYSl7aWYoYS5pbmRleE9mKHRoYXQuX2JnRGlzbWlzc1ByZWZpeCk9PT0tMSl7YW5pbWF0aW9uW2tdPXRoYXQuX2JnRGlzbWlzc1ByZWZpeCskLnRyaW0oYSk7fX0pO3RoaXMuYmFja2dyb3VuZERpc21pc3NBbmltYXRpb25QYXJzZWQ9YW5pbWF0aW9uLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7fSxhbmltYXRpb25QYXJzZWQ6XCJcIixjbG9zZUFuaW1hdGlvblBhcnNlZDpcIlwiLF9hbmltYXRpb25QcmVmaXg6XCJqY29uZmlybS1hbmltYXRpb24tXCIsc2V0QW5pbWF0aW9uOmZ1bmN0aW9uKGFuaW1hdGlvbil7dGhpcy5hbmltYXRpb249YW5pbWF0aW9ufHx0aGlzLmFuaW1hdGlvbjt0aGlzLl9wYXJzZUFuaW1hdGlvbih0aGlzLmFuaW1hdGlvbixcIm9cIik7fSxfcGFyc2VBbmltYXRpb246ZnVuY3Rpb24oYW5pbWF0aW9uLHdoaWNoKXt3aGljaD13aGljaHx8XCJvXCI7dmFyIGFuaW1hdGlvbnM9YW5pbWF0aW9uLnNwbGl0KFwiLFwiKTt2YXIgdGhhdD10aGlzOyQuZWFjaChhbmltYXRpb25zLGZ1bmN0aW9uKGssYSl7aWYoYS5pbmRleE9mKHRoYXQuX2FuaW1hdGlvblByZWZpeCk9PT0tMSl7YW5pbWF0aW9uc1trXT10aGF0Ll9hbmltYXRpb25QcmVmaXgrJC50cmltKGEpO319KTt2YXIgYV9zdHJpbmc9YW5pbWF0aW9ucy5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO2lmKHdoaWNoPT09XCJvXCIpe3RoaXMuYW5pbWF0aW9uUGFyc2VkPWFfc3RyaW5nO31lbHNle3RoaXMuY2xvc2VBbmltYXRpb25QYXJzZWQ9YV9zdHJpbmc7fXJldHVybiBhX3N0cmluZzt9LHNldENsb3NlQW5pbWF0aW9uOmZ1bmN0aW9uKGNsb3NlQW5pbWF0aW9uKXt0aGlzLmNsb3NlQW5pbWF0aW9uPWNsb3NlQW5pbWF0aW9ufHx0aGlzLmNsb3NlQW5pbWF0aW9uO3RoaXMuX3BhcnNlQW5pbWF0aW9uKHRoaXMuY2xvc2VBbmltYXRpb24sXCJjXCIpO30sc2V0QW5pbWF0aW9uU3BlZWQ6ZnVuY3Rpb24oc3BlZWQpe3RoaXMuYW5pbWF0aW9uU3BlZWQ9c3BlZWR8fHRoaXMuYW5pbWF0aW9uU3BlZWQ7fSxjb2x1bW5DbGFzc1BhcnNlZDpcIlwiLHNldENvbHVtbkNsYXNzOmZ1bmN0aW9uKGNvbENsYXNzKXtpZighdGhpcy51c2VCb290c3RyYXApe2NvbnNvbGUud2FybihcImNhbm5vdCBzZXQgY29sdW1uQ2xhc3MsIHVzZUJvb3RzdHJhcCBpcyBzZXQgdG8gZmFsc2VcIik7cmV0dXJuO310aGlzLmNvbHVtbkNsYXNzPWNvbENsYXNzfHx0aGlzLmNvbHVtbkNsYXNzO3RoaXMuX3BhcnNlQ29sdW1uQ2xhc3ModGhpcy5jb2x1bW5DbGFzcyk7dGhpcy4kamNvbmZpcm1Cb3hDb250YWluZXIuYWRkQ2xhc3ModGhpcy5jb2x1bW5DbGFzc1BhcnNlZCk7fSxfdXBkYXRlQ29udGVudE1heEhlaWdodDpmdW5jdGlvbigpe3ZhciBoZWlnaHQ9JCh3aW5kb3cpLmhlaWdodCgpLSh0aGlzLiRqY29uZmlybUJveC5vdXRlckhlaWdodCgpLXRoaXMuJGNvbnRlbnRQYW5lLm91dGVySGVpZ2h0KCkpLSh0aGlzLm9mZnNldFRvcCt0aGlzLm9mZnNldEJvdHRvbSk7dGhpcy4kY29udGVudFBhbmUuY3NzKHtcIm1heC1oZWlnaHRcIjpoZWlnaHQrXCJweFwifSk7fSxzZXRCb3hXaWR0aDpmdW5jdGlvbih3aWR0aCl7aWYodGhpcy51c2VCb290c3RyYXApe2NvbnNvbGUud2FybihcImNhbm5vdCBzZXQgYm94V2lkdGgsIHVzZUJvb3RzdHJhcCBpcyBzZXQgdG8gdHJ1ZVwiKTtyZXR1cm47fXRoaXMuYm94V2lkdGg9d2lkdGg7dGhpcy4kamNvbmZpcm1Cb3guY3NzKFwid2lkdGhcIix3aWR0aCk7fSxfcGFyc2VDb2x1bW5DbGFzczpmdW5jdGlvbihjb2xDbGFzcyl7Y29sQ2xhc3M9Y29sQ2xhc3MudG9Mb3dlckNhc2UoKTt2YXIgcDtzd2l0Y2goY29sQ2xhc3Mpe2Nhc2VcInhsXCI6Y2FzZVwieGxhcmdlXCI6cD1cImNvbC1tZC0xMlwiO2JyZWFrO2Nhc2VcImxcIjpjYXNlXCJsYXJnZVwiOnA9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIjticmVhaztjYXNlXCJtXCI6Y2FzZVwibWVkaXVtXCI6cD1cImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1wiO2JyZWFrO2Nhc2VcInNcIjpjYXNlXCJzbWFsbFwiOnA9XCJjb2wtbWQtNCBjb2wtbWQtb2Zmc2V0LTRcIjticmVhaztjYXNlXCJ4c1wiOmNhc2VcInhzbWFsbFwiOnA9XCJjb2wtbWQtMiBjb2wtbWQtb2Zmc2V0LTVcIjticmVhaztkZWZhdWx0OnA9Y29sQ2xhc3M7fXRoaXMuY29sdW1uQ2xhc3NQYXJzZWQ9cDt9LGluaXREcmFnZ2FibGU6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO3ZhciAkdD10aGlzLiR0aXRsZUNvbnRhaW5lcjt0aGlzLnJlc2V0RHJhZygpO2lmKHRoaXMuZHJhZ2dhYmxlKXskdC5vbihcIm1vdXNlZG93blwiLGZ1bmN0aW9uKGUpeyR0LmFkZENsYXNzKFwiamNvbmZpcm0taGFuZFwiKTt0aGF0Lm1vdXNlWD1lLmNsaWVudFg7dGhhdC5tb3VzZVk9ZS5jbGllbnRZO3RoYXQuaXNEcmFnPXRydWU7fSk7JCh3aW5kb3cpLm9uKFwibW91c2Vtb3ZlLlwiK3RoaXMuX2lkLGZ1bmN0aW9uKGUpe2lmKHRoYXQuaXNEcmFnKXt0aGF0Lm1vdmluZ1g9ZS5jbGllbnRYLXRoYXQubW91c2VYK3RoYXQuaW5pdGlhbFg7dGhhdC5tb3ZpbmdZPWUuY2xpZW50WS10aGF0Lm1vdXNlWSt0aGF0LmluaXRpYWxZO3RoYXQuc2V0RHJhZygpO319KTskKHdpbmRvdykub24oXCJtb3VzZXVwLlwiK3RoaXMuX2lkLGZ1bmN0aW9uKCl7JHQucmVtb3ZlQ2xhc3MoXCJqY29uZmlybS1oYW5kXCIpO2lmKHRoYXQuaXNEcmFnKXt0aGF0LmlzRHJhZz1mYWxzZTt0aGF0LmluaXRpYWxYPXRoYXQubW92aW5nWDt0aGF0LmluaXRpYWxZPXRoYXQubW92aW5nWTt9fSk7fX0scmVzZXREcmFnOmZ1bmN0aW9uKCl7dGhpcy5pc0RyYWc9ZmFsc2U7dGhpcy5pbml0aWFsWD0wO3RoaXMuaW5pdGlhbFk9MDt0aGlzLm1vdmluZ1g9MDt0aGlzLm1vdmluZ1k9MDt0aGlzLm1vdXNlWD0wO3RoaXMubW91c2VZPTA7dGhpcy4kamNvbmZpcm1Cb3hDb250YWluZXIuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrMCtcInB4LCBcIiswK1wicHgpXCIpO30sc2V0RHJhZzpmdW5jdGlvbigpe2lmKCF0aGlzLmRyYWdnYWJsZSl7cmV0dXJuO310aGlzLmFsaWduTWlkZGxlPWZhbHNlO3ZhciBib3hXaWR0aD10aGlzLiRqY29uZmlybUJveC5vdXRlcldpZHRoKCk7dmFyIGJveEhlaWdodD10aGlzLiRqY29uZmlybUJveC5vdXRlckhlaWdodCgpO3ZhciB3aW5kb3dXaWR0aD0kKHdpbmRvdykud2lkdGgoKTt2YXIgd2luZG93SGVpZ2h0PSQod2luZG93KS5oZWlnaHQoKTt2YXIgdGhhdD10aGlzO3ZhciBkcmFnVXBkYXRlPTE7aWYodGhhdC5tb3ZpbmdYJWRyYWdVcGRhdGU9PT0wfHx0aGF0Lm1vdmluZ1klZHJhZ1VwZGF0ZT09PTApe2lmKHRoYXQuZHJhZ1dpbmRvd0JvcmRlcil7dmFyIGxlZnREaXN0YW5jZT0od2luZG93V2lkdGgvMiktYm94V2lkdGgvMjt2YXIgdG9wRGlzdGFuY2U9KHdpbmRvd0hlaWdodC8yKS1ib3hIZWlnaHQvMjt0b3BEaXN0YW5jZS09dGhhdC5kcmFnV2luZG93R2FwO2xlZnREaXN0YW5jZS09dGhhdC5kcmFnV2luZG93R2FwO2lmKGxlZnREaXN0YW5jZSt0aGF0Lm1vdmluZ1g8MCl7dGhhdC5tb3ZpbmdYPS1sZWZ0RGlzdGFuY2U7fWVsc2V7aWYobGVmdERpc3RhbmNlLXRoYXQubW92aW5nWDwwKXt0aGF0Lm1vdmluZ1g9bGVmdERpc3RhbmNlO319aWYodG9wRGlzdGFuY2UrdGhhdC5tb3ZpbmdZPDApe3RoYXQubW92aW5nWT0tdG9wRGlzdGFuY2U7fWVsc2V7aWYodG9wRGlzdGFuY2UtdGhhdC5tb3ZpbmdZPDApe3RoYXQubW92aW5nWT10b3BEaXN0YW5jZTt9fX10aGF0LiRqY29uZmlybUJveENvbnRhaW5lci5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIit0aGF0Lm1vdmluZ1grXCJweCwgXCIrdGhhdC5tb3ZpbmdZK1wicHgpXCIpO319LF9zY3JvbGxUb3A6ZnVuY3Rpb24oKXtpZih0eXBlb2YgcGFnZVlPZmZzZXQhPT1cInVuZGVmaW5lZFwiKXtyZXR1cm4gcGFnZVlPZmZzZXQ7fWVsc2V7dmFyIEI9ZG9jdW1lbnQuYm9keTt2YXIgRD1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7RD0oRC5jbGllbnRIZWlnaHQpP0Q6QjtyZXR1cm4gRC5zY3JvbGxUb3A7fX0sX3dhdGNoQ29udGVudDpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7aWYodGhpcy5fdGltZXIpe2NsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO312YXIgcHJldkNvbnRlbnRIZWlnaHQ9MDt0aGlzLl90aW1lcj1zZXRJbnRlcnZhbChmdW5jdGlvbigpe2lmKHRoYXQuc21vb3RoQ29udGVudCl7dmFyIGNvbnRlbnRIZWlnaHQ9dGhhdC4kY29udGVudC5vdXRlckhlaWdodCgpfHwwO2lmKGNvbnRlbnRIZWlnaHQhPT1wcmV2Q29udGVudEhlaWdodCl7cHJldkNvbnRlbnRIZWlnaHQ9Y29udGVudEhlaWdodDt9dmFyIHdoPSQod2luZG93KS5oZWlnaHQoKTt2YXIgdG90YWw9dGhhdC5vZmZzZXRUb3ArdGhhdC5vZmZzZXRCb3R0b20rdGhhdC4kamNvbmZpcm1Cb3guaGVpZ2h0KCktdGhhdC4kY29udGVudFBhbmUuaGVpZ2h0KCkrdGhhdC4kY29udGVudC5oZWlnaHQoKTtpZih0b3RhbDx3aCl7dGhhdC4kY29udGVudFBhbmUuYWRkQ2xhc3MoXCJuby1zY3JvbGxcIik7fWVsc2V7dGhhdC4kY29udGVudFBhbmUucmVtb3ZlQ2xhc3MoXCJuby1zY3JvbGxcIik7fX19LHRoaXMud2F0Y2hJbnRlcnZhbCk7fSxfb3ZlcmZsb3dDbGFzczpcImpjb25maXJtLW92ZXJmbG93XCIsX2hpbGlnaHRBbmltYXRpbmc6ZmFsc2UsaGlnaGxpZ2h0OmZ1bmN0aW9uKCl7dGhpcy5oaUxpZ2h0TW9kYWwoKTt9LGhpTGlnaHRNb2RhbDpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7aWYodGhpcy5faGlsaWdodEFuaW1hdGluZyl7cmV0dXJuO310aGF0LiRib2R5LmFkZENsYXNzKFwiaGlsaWdodFwiKTt2YXIgZHVyYXRpb249cGFyc2VGbG9hdCh0aGF0LiRib2R5LmNzcyhcImFuaW1hdGlvbi1kdXJhdGlvblwiKSl8fDI7dGhpcy5faGlsaWdodEFuaW1hdGluZz10cnVlO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0Ll9oaWxpZ2h0QW5pbWF0aW5nPWZhbHNlO3RoYXQuJGJvZHkucmVtb3ZlQ2xhc3MoXCJoaWxpZ2h0XCIpO30sZHVyYXRpb24qMTAwMCk7fSxfYmluZEV2ZW50czpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7dGhpcy5ib3hDbGlja2VkPWZhbHNlO3RoaXMuJHNjcm9sbFBhbmUuY2xpY2soZnVuY3Rpb24oZSl7aWYoIXRoYXQuYm94Q2xpY2tlZCl7dmFyIGJ1dHRvbk5hbWU9ZmFsc2U7dmFyIHNob3VsZENsb3NlPWZhbHNlO3ZhciBzdHI7aWYodHlwZW9mIHRoYXQuYmFja2dyb3VuZERpc21pc3M9PT1cImZ1bmN0aW9uXCIpe3N0cj10aGF0LmJhY2tncm91bmREaXNtaXNzKCk7fWVsc2V7c3RyPXRoYXQuYmFja2dyb3VuZERpc21pc3M7fWlmKHR5cGVvZiBzdHI9PT1cInN0cmluZ1wiJiZ0eXBlb2YgdGhhdC5idXR0b25zW3N0cl0hPT1cInVuZGVmaW5lZFwiKXtidXR0b25OYW1lPXN0cjtzaG91bGRDbG9zZT1mYWxzZTt9ZWxzZXtpZih0eXBlb2Ygc3RyPT09XCJ1bmRlZmluZWRcInx8ISEoc3RyKT09PXRydWUpe3Nob3VsZENsb3NlPXRydWU7fWVsc2V7c2hvdWxkQ2xvc2U9ZmFsc2U7fX1pZihidXR0b25OYW1lKXt2YXIgYnRuUmVzcG9uc2U9dGhhdC5idXR0b25zW2J1dHRvbk5hbWVdLmFjdGlvbi5hcHBseSh0aGF0KTtzaG91bGRDbG9zZT0odHlwZW9mIGJ0blJlc3BvbnNlPT09XCJ1bmRlZmluZWRcIil8fCEhKGJ0blJlc3BvbnNlKTt9aWYoc2hvdWxkQ2xvc2Upe3RoYXQuY2xvc2UoKTt9ZWxzZXt0aGF0LmhpTGlnaHRNb2RhbCgpO319dGhhdC5ib3hDbGlja2VkPWZhbHNlO30pO3RoaXMuJGpjb25maXJtQm94LmNsaWNrKGZ1bmN0aW9uKGUpe3RoYXQuYm94Q2xpY2tlZD10cnVlO30pO3ZhciBpc0tleURvd249ZmFsc2U7JCh3aW5kb3cpLm9uKFwiamNLZXlEb3duLlwiK3RoYXQuX2lkLGZ1bmN0aW9uKGUpe2lmKCFpc0tleURvd24pe2lzS2V5RG93bj10cnVlO319KTskKHdpbmRvdykub24oXCJrZXl1cC5cIit0aGF0Ll9pZCxmdW5jdGlvbihlKXtpZihpc0tleURvd24pe3RoYXQucmVhY3RPbktleShlKTtpc0tleURvd249ZmFsc2U7fX0pOyQod2luZG93KS5vbihcInJlc2l6ZS5cIit0aGlzLl9pZCxmdW5jdGlvbigpe3RoYXQuX3VwZGF0ZUNvbnRlbnRNYXhIZWlnaHQoKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC5yZXNldERyYWcoKTt9LDEwMCk7fSk7fSxfY3ViaWNfYmV6aWVyOlwiMC4zNiwgMC41NSwgMC4xOVwiLF9nZXRDU1M6ZnVuY3Rpb24oc3BlZWQsYm91bmNlKXtyZXR1cm57XCItd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb25cIjpzcGVlZC8xMDAwK1wic1wiLFwidHJhbnNpdGlvbi1kdXJhdGlvblwiOnNwZWVkLzEwMDArXCJzXCIsXCItd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCI6XCJjdWJpYy1iZXppZXIoXCIrdGhpcy5fY3ViaWNfYmV6aWVyK1wiLCBcIitib3VuY2UrXCIpXCIsXCJ0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiOlwiY3ViaWMtYmV6aWVyKFwiK3RoaXMuX2N1YmljX2JlemllcitcIiwgXCIrYm91bmNlK1wiKVwifTt9LF9zZXRCdXR0b25zOmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpczt2YXIgdG90YWxfYnV0dG9ucz0wO2lmKHR5cGVvZiB0aGlzLmJ1dHRvbnMhPT1cIm9iamVjdFwiKXt0aGlzLmJ1dHRvbnM9e307fSQuZWFjaCh0aGlzLmJ1dHRvbnMsZnVuY3Rpb24oa2V5LGJ1dHRvbil7dG90YWxfYnV0dG9ucys9MTtpZih0eXBlb2YgYnV0dG9uPT09XCJmdW5jdGlvblwiKXt0aGF0LmJ1dHRvbnNba2V5XT1idXR0b249e2FjdGlvbjpidXR0b259O310aGF0LmJ1dHRvbnNba2V5XS50ZXh0PWJ1dHRvbi50ZXh0fHxrZXk7dGhhdC5idXR0b25zW2tleV0uYnRuQ2xhc3M9YnV0dG9uLmJ0bkNsYXNzfHxcImJ0bi1kZWZhdWx0XCI7dGhhdC5idXR0b25zW2tleV0uYWN0aW9uPWJ1dHRvbi5hY3Rpb258fGZ1bmN0aW9uKCl7fTt0aGF0LmJ1dHRvbnNba2V5XS5rZXlzPWJ1dHRvbi5rZXlzfHxbXTt0aGF0LmJ1dHRvbnNba2V5XS5pc0hpZGRlbj1idXR0b24uaXNIaWRkZW58fGZhbHNlO3RoYXQuYnV0dG9uc1trZXldLmlzRGlzYWJsZWQ9YnV0dG9uLmlzRGlzYWJsZWR8fGZhbHNlOyQuZWFjaCh0aGF0LmJ1dHRvbnNba2V5XS5rZXlzLGZ1bmN0aW9uKGksYSl7dGhhdC5idXR0b25zW2tleV0ua2V5c1tpXT1hLnRvTG93ZXJDYXNlKCk7fSk7dmFyIGJ1dHRvbl9lbGVtZW50PSQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuXCI+PC9idXR0b24+JykuaHRtbCh0aGF0LmJ1dHRvbnNba2V5XS50ZXh0KS5hZGRDbGFzcyh0aGF0LmJ1dHRvbnNba2V5XS5idG5DbGFzcykucHJvcChcImRpc2FibGVkXCIsdGhhdC5idXR0b25zW2tleV0uaXNEaXNhYmxlZCkuY3NzKFwiZGlzcGxheVwiLHRoYXQuYnV0dG9uc1trZXldLmlzSGlkZGVuP1wibm9uZVwiOlwiXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgcmVzPXRoYXQuYnV0dG9uc1trZXldLmFjdGlvbi5hcHBseSh0aGF0LFt0aGF0LmJ1dHRvbnNba2V5XV0pO3RoYXQub25BY3Rpb24uYXBwbHkodGhhdCxba2V5LHRoYXQuYnV0dG9uc1trZXldXSk7dGhhdC5fc3RvcENvdW50RG93bigpO2lmKHR5cGVvZiByZXM9PT1cInVuZGVmaW5lZFwifHxyZXMpe3RoYXQuY2xvc2UoKTt9fSk7dGhhdC5idXR0b25zW2tleV0uZWw9YnV0dG9uX2VsZW1lbnQ7dGhhdC5idXR0b25zW2tleV0uc2V0VGV4dD1mdW5jdGlvbih0ZXh0KXtidXR0b25fZWxlbWVudC5odG1sKHRleHQpO307dGhhdC5idXR0b25zW2tleV0uYWRkQ2xhc3M9ZnVuY3Rpb24oY2xhc3NOYW1lKXtidXR0b25fZWxlbWVudC5hZGRDbGFzcyhjbGFzc05hbWUpO307dGhhdC5idXR0b25zW2tleV0ucmVtb3ZlQ2xhc3M9ZnVuY3Rpb24oY2xhc3NOYW1lKXtidXR0b25fZWxlbWVudC5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO307dGhhdC5idXR0b25zW2tleV0uZGlzYWJsZT1mdW5jdGlvbigpe3RoYXQuYnV0dG9uc1trZXldLmlzRGlzYWJsZWQ9dHJ1ZTtidXR0b25fZWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIix0cnVlKTt9O3RoYXQuYnV0dG9uc1trZXldLmVuYWJsZT1mdW5jdGlvbigpe3RoYXQuYnV0dG9uc1trZXldLmlzRGlzYWJsZWQ9ZmFsc2U7YnV0dG9uX2VsZW1lbnQucHJvcChcImRpc2FibGVkXCIsZmFsc2UpO307dGhhdC5idXR0b25zW2tleV0uc2hvdz1mdW5jdGlvbigpe3RoYXQuYnV0dG9uc1trZXldLmlzSGlkZGVuPWZhbHNlO2J1dHRvbl9lbGVtZW50LmNzcyhcImRpc3BsYXlcIixcIlwiKTt9O3RoYXQuYnV0dG9uc1trZXldLmhpZGU9ZnVuY3Rpb24oKXt0aGF0LmJ1dHRvbnNba2V5XS5pc0hpZGRlbj10cnVlO2J1dHRvbl9lbGVtZW50LmNzcyhcImRpc3BsYXlcIixcIm5vbmVcIik7fTt0aGF0W1wiJF9cIitrZXldPXRoYXRbXCIkJFwiK2tleV09YnV0dG9uX2VsZW1lbnQ7dGhhdC4kYnRuYy5hcHBlbmQoYnV0dG9uX2VsZW1lbnQpO30pO2lmKHRvdGFsX2J1dHRvbnM9PT0wKXt0aGlzLiRidG5jLmhpZGUoKTt9aWYodGhpcy5jbG9zZUljb249PT1udWxsJiZ0b3RhbF9idXR0b25zPT09MCl7dGhpcy5jbG9zZUljb249dHJ1ZTt9aWYodGhpcy5jbG9zZUljb24pe2lmKHRoaXMuY2xvc2VJY29uQ2xhc3Mpe3ZhciBjbG9zZUh0bWw9JzxpIGNsYXNzPVwiJyt0aGlzLmNsb3NlSWNvbkNsYXNzKydcIj48L2k+Jzt0aGlzLiRjbG9zZUljb24uaHRtbChjbG9zZUh0bWwpO310aGlzLiRjbG9zZUljb24uY2xpY2soZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBidXR0b25OYW1lPWZhbHNlO3ZhciBzaG91bGRDbG9zZT1mYWxzZTt2YXIgc3RyO2lmKHR5cGVvZiB0aGF0LmNsb3NlSWNvbj09PVwiZnVuY3Rpb25cIil7c3RyPXRoYXQuY2xvc2VJY29uKCk7fWVsc2V7c3RyPXRoYXQuY2xvc2VJY29uO31pZih0eXBlb2Ygc3RyPT09XCJzdHJpbmdcIiYmdHlwZW9mIHRoYXQuYnV0dG9uc1tzdHJdIT09XCJ1bmRlZmluZWRcIil7YnV0dG9uTmFtZT1zdHI7c2hvdWxkQ2xvc2U9ZmFsc2U7fWVsc2V7aWYodHlwZW9mIHN0cj09PVwidW5kZWZpbmVkXCJ8fCEhKHN0cik9PT10cnVlKXtzaG91bGRDbG9zZT10cnVlO31lbHNle3Nob3VsZENsb3NlPWZhbHNlO319aWYoYnV0dG9uTmFtZSl7dmFyIGJ0blJlc3BvbnNlPXRoYXQuYnV0dG9uc1tidXR0b25OYW1lXS5hY3Rpb24uYXBwbHkodGhhdCk7c2hvdWxkQ2xvc2U9KHR5cGVvZiBidG5SZXNwb25zZT09PVwidW5kZWZpbmVkXCIpfHwhIShidG5SZXNwb25zZSk7fWlmKHNob3VsZENsb3NlKXt0aGF0LmNsb3NlKCk7fX0pO3RoaXMuJGNsb3NlSWNvbi5zaG93KCk7fWVsc2V7dGhpcy4kY2xvc2VJY29uLmhpZGUoKTt9fSxzZXRUaXRsZTpmdW5jdGlvbihzdHJpbmcsZm9yY2Upe2ZvcmNlPWZvcmNlfHxmYWxzZTtpZih0eXBlb2Ygc3RyaW5nIT09XCJ1bmRlZmluZWRcIil7aWYodHlwZW9mIHN0cmluZz09PVwic3RyaW5nXCIpe3RoaXMudGl0bGU9c3RyaW5nO31lbHNle2lmKHR5cGVvZiBzdHJpbmc9PT1cImZ1bmN0aW9uXCIpe2lmKHR5cGVvZiBzdHJpbmcucHJvbWlzZT09PVwiZnVuY3Rpb25cIil7Y29uc29sZS5lcnJvcihcIlByb21pc2Ugd2FzIHJldHVybmVkIGZyb20gdGl0bGUgZnVuY3Rpb24sIHRoaXMgaXMgbm90IHN1cHBvcnRlZC5cIik7fXZhciByZXNwb25zZT1zdHJpbmcoKTtpZih0eXBlb2YgcmVzcG9uc2U9PT1cInN0cmluZ1wiKXt0aGlzLnRpdGxlPXJlc3BvbnNlO31lbHNle3RoaXMudGl0bGU9ZmFsc2U7fX1lbHNle3RoaXMudGl0bGU9ZmFsc2U7fX19aWYodGhpcy5pc0FqYXhMb2FkaW5nJiYhZm9yY2Upe3JldHVybjt9dGhpcy4kdGl0bGUuaHRtbCh0aGlzLnRpdGxlfHxcIlwiKTt0aGlzLnVwZGF0ZVRpdGxlQ29udGFpbmVyKCk7fSxzZXRJY29uOmZ1bmN0aW9uKGljb25DbGFzcyxmb3JjZSl7Zm9yY2U9Zm9yY2V8fGZhbHNlO2lmKHR5cGVvZiBpY29uQ2xhc3MhPT1cInVuZGVmaW5lZFwiKXtpZih0eXBlb2YgaWNvbkNsYXNzPT09XCJzdHJpbmdcIil7dGhpcy5pY29uPWljb25DbGFzczt9ZWxzZXtpZih0eXBlb2YgaWNvbkNsYXNzPT09XCJmdW5jdGlvblwiKXt2YXIgcmVzcG9uc2U9aWNvbkNsYXNzKCk7aWYodHlwZW9mIHJlc3BvbnNlPT09XCJzdHJpbmdcIil7dGhpcy5pY29uPXJlc3BvbnNlO31lbHNle3RoaXMuaWNvbj1mYWxzZTt9fWVsc2V7dGhpcy5pY29uPWZhbHNlO319fWlmKHRoaXMuaXNBamF4TG9hZGluZyYmIWZvcmNlKXtyZXR1cm47fXRoaXMuJGljb24uaHRtbCh0aGlzLmljb24/JzxpIGNsYXNzPVwiJyt0aGlzLmljb24rJ1wiPjwvaT4nOlwiXCIpO3RoaXMudXBkYXRlVGl0bGVDb250YWluZXIoKTt9LHVwZGF0ZVRpdGxlQ29udGFpbmVyOmZ1bmN0aW9uKCl7aWYoIXRoaXMudGl0bGUmJiF0aGlzLmljb24pe3RoaXMuJHRpdGxlQ29udGFpbmVyLmhpZGUoKTt9ZWxzZXt0aGlzLiR0aXRsZUNvbnRhaW5lci5zaG93KCk7fX0sc2V0Q29udGVudFByZXBlbmQ6ZnVuY3Rpb24oY29udGVudCxmb3JjZSl7aWYoIWNvbnRlbnQpe3JldHVybjt9dGhpcy5jb250ZW50UGFyc2VkLnByZXBlbmQoY29udGVudCk7fSxzZXRDb250ZW50QXBwZW5kOmZ1bmN0aW9uKGNvbnRlbnQpe2lmKCFjb250ZW50KXtyZXR1cm47fXRoaXMuY29udGVudFBhcnNlZC5hcHBlbmQoY29udGVudCk7fSxzZXRDb250ZW50OmZ1bmN0aW9uKGNvbnRlbnQsZm9yY2Upe2ZvcmNlPSEhZm9yY2U7dmFyIHRoYXQ9dGhpcztpZihjb250ZW50KXt0aGlzLmNvbnRlbnRQYXJzZWQuaHRtbChcIlwiKS5hcHBlbmQoY29udGVudCk7fWlmKHRoaXMuaXNBamF4TG9hZGluZyYmIWZvcmNlKXtyZXR1cm47fXRoaXMuJGNvbnRlbnQuaHRtbChcIlwiKTt0aGlzLiRjb250ZW50LmFwcGVuZCh0aGlzLmNvbnRlbnRQYXJzZWQpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LiRib2R5LmZpbmQoXCJpbnB1dFthdXRvZm9jdXNdOnZpc2libGU6Zmlyc3RcIikuZm9jdXMoKTt9LDEwMCk7fSxsb2FkaW5nU3Bpbm5lcjpmYWxzZSxzaG93TG9hZGluZzpmdW5jdGlvbihkaXNhYmxlQnV0dG9ucyl7dGhpcy5sb2FkaW5nU3Bpbm5lcj10cnVlO3RoaXMuJGpjb25maXJtQm94LmFkZENsYXNzKFwibG9hZGluZ1wiKTtpZihkaXNhYmxlQnV0dG9ucyl7dGhpcy4kYnRuYy5maW5kKFwiYnV0dG9uXCIpLnByb3AoXCJkaXNhYmxlZFwiLHRydWUpO319LGhpZGVMb2FkaW5nOmZ1bmN0aW9uKGVuYWJsZUJ1dHRvbnMpe3RoaXMubG9hZGluZ1NwaW5uZXI9ZmFsc2U7dGhpcy4kamNvbmZpcm1Cb3gucmVtb3ZlQ2xhc3MoXCJsb2FkaW5nXCIpO2lmKGVuYWJsZUJ1dHRvbnMpe3RoaXMuJGJ0bmMuZmluZChcImJ1dHRvblwiKS5wcm9wKFwiZGlzYWJsZWRcIixmYWxzZSk7fX0sYWpheFJlc3BvbnNlOmZhbHNlLGNvbnRlbnRQYXJzZWQ6XCJcIixpc0FqYXg6ZmFsc2UsaXNBamF4TG9hZGluZzpmYWxzZSxfcGFyc2VDb250ZW50OmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpczt2YXIgZT1cIiZuYnNwO1wiO2lmKHR5cGVvZiB0aGlzLmNvbnRlbnQ9PT1cImZ1bmN0aW9uXCIpe3ZhciByZXM9dGhpcy5jb250ZW50LmFwcGx5KHRoaXMpO2lmKHR5cGVvZiByZXM9PT1cInN0cmluZ1wiKXt0aGlzLmNvbnRlbnQ9cmVzO31lbHNle2lmKHR5cGVvZiByZXM9PT1cIm9iamVjdFwiJiZ0eXBlb2YgcmVzLmFsd2F5cz09PVwiZnVuY3Rpb25cIil7dGhpcy5pc0FqYXg9dHJ1ZTt0aGlzLmlzQWpheExvYWRpbmc9dHJ1ZTtyZXMuYWx3YXlzKGZ1bmN0aW9uKGRhdGEsc3RhdHVzLHhocil7dGhhdC5hamF4UmVzcG9uc2U9e2RhdGE6ZGF0YSxzdGF0dXM6c3RhdHVzLHhocjp4aHJ9O3RoYXQuX2NvbnRlbnRSZWFkeS5yZXNvbHZlKGRhdGEsc3RhdHVzLHhocik7aWYodHlwZW9mIHRoYXQuY29udGVudExvYWRlZD09PVwiZnVuY3Rpb25cIil7dGhhdC5jb250ZW50TG9hZGVkKGRhdGEsc3RhdHVzLHhocik7fX0pO3RoaXMuY29udGVudD1lO31lbHNle3RoaXMuY29udGVudD1lO319fWlmKHR5cGVvZiB0aGlzLmNvbnRlbnQ9PT1cInN0cmluZ1wiJiZ0aGlzLmNvbnRlbnQuc3Vic3RyKDAsNCkudG9Mb3dlckNhc2UoKT09PVwidXJsOlwiKXt0aGlzLmlzQWpheD10cnVlO3RoaXMuaXNBamF4TG9hZGluZz10cnVlO3ZhciB1PXRoaXMuY29udGVudC5zdWJzdHJpbmcoNCx0aGlzLmNvbnRlbnQubGVuZ3RoKTskLmdldCh1KS5kb25lKGZ1bmN0aW9uKGh0bWwpe3RoYXQuY29udGVudFBhcnNlZC5odG1sKGh0bWwpO30pLmFsd2F5cyhmdW5jdGlvbihkYXRhLHN0YXR1cyx4aHIpe3RoYXQuYWpheFJlc3BvbnNlPXtkYXRhOmRhdGEsc3RhdHVzOnN0YXR1cyx4aHI6eGhyfTt0aGF0Ll9jb250ZW50UmVhZHkucmVzb2x2ZShkYXRhLHN0YXR1cyx4aHIpO2lmKHR5cGVvZiB0aGF0LmNvbnRlbnRMb2FkZWQ9PT1cImZ1bmN0aW9uXCIpe3RoYXQuY29udGVudExvYWRlZChkYXRhLHN0YXR1cyx4aHIpO319KTt9aWYoIXRoaXMuY29udGVudCl7dGhpcy5jb250ZW50PWU7fWlmKCF0aGlzLmlzQWpheCl7dGhpcy5jb250ZW50UGFyc2VkLmh0bWwodGhpcy5jb250ZW50KTt0aGlzLnNldENvbnRlbnQoKTt0aGF0Ll9jb250ZW50UmVhZHkucmVzb2x2ZSgpO319LF9zdG9wQ291bnREb3duOmZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9DbG9zZUludGVydmFsKTtpZih0aGlzLiRjZCl7dGhpcy4kY2QucmVtb3ZlKCk7fX0sX3N0YXJ0Q291bnREb3duOmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpczt2YXIgb3B0PXRoaXMuYXV0b0Nsb3NlLnNwbGl0KFwifFwiKTtpZihvcHQubGVuZ3RoIT09Mil7Y29uc29sZS5lcnJvcihcIkludmFsaWQgb3B0aW9uIGZvciBhdXRvQ2xvc2UuIGV4YW1wbGUgJ2Nsb3NlfDEwMDAwJ1wiKTtyZXR1cm4gZmFsc2U7fXZhciBidXR0b25fa2V5PW9wdFswXTt2YXIgdGltZT1wYXJzZUludChvcHRbMV0pO2lmKHR5cGVvZiB0aGlzLmJ1dHRvbnNbYnV0dG9uX2tleV09PT1cInVuZGVmaW5lZFwiKXtjb25zb2xlLmVycm9yKFwiSW52YWxpZCBidXR0b24ga2V5ICdcIitidXR0b25fa2V5K1wiJyBmb3IgYXV0b0Nsb3NlXCIpO3JldHVybiBmYWxzZTt9dmFyIHNlY29uZHM9TWF0aC5jZWlsKHRpbWUvMTAwMCk7dGhpcy4kY2Q9JCgnPHNwYW4gY2xhc3M9XCJjb3VudGRvd25cIj4gKCcrc2Vjb25kcytcIik8L3NwYW4+XCIpLmFwcGVuZFRvKHRoaXNbXCIkX1wiK2J1dHRvbl9rZXldKTt0aGlzLmF1dG9DbG9zZUludGVydmFsPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dGhhdC4kY2QuaHRtbChcIiAoXCIrKHNlY29uZHMtPTEpK1wiKSBcIik7aWYoc2Vjb25kczw9MCl7dGhhdFtcIiQkXCIrYnV0dG9uX2tleV0udHJpZ2dlcihcImNsaWNrXCIpO3RoYXQuX3N0b3BDb3VudERvd24oKTt9fSwxMDAwKTt9LF9nZXRLZXk6ZnVuY3Rpb24oa2V5KXtzd2l0Y2goa2V5KXtjYXNlIDE5MjpyZXR1cm5cInRpbGRlXCI7Y2FzZSAxMzpyZXR1cm5cImVudGVyXCI7Y2FzZSAxNjpyZXR1cm5cInNoaWZ0XCI7Y2FzZSA5OnJldHVyblwidGFiXCI7Y2FzZSAyMDpyZXR1cm5cImNhcHNsb2NrXCI7Y2FzZSAxNzpyZXR1cm5cImN0cmxcIjtjYXNlIDkxOnJldHVyblwid2luXCI7Y2FzZSAxODpyZXR1cm5cImFsdFwiO2Nhc2UgMjc6cmV0dXJuXCJlc2NcIjtjYXNlIDMyOnJldHVyblwic3BhY2VcIjt9dmFyIGluaXRpYWw9U3RyaW5nLmZyb21DaGFyQ29kZShrZXkpO2lmKC9eW0EtejAtOV0rJC8udGVzdChpbml0aWFsKSl7cmV0dXJuIGluaXRpYWwudG9Mb3dlckNhc2UoKTt9ZWxzZXtyZXR1cm4gZmFsc2U7fX0scmVhY3RPbktleTpmdW5jdGlvbihlKXt2YXIgdGhhdD10aGlzO3ZhciBhPSQoXCIuamNvbmZpcm1cIik7aWYoYS5lcShhLmxlbmd0aC0xKVswXSE9PXRoaXMuJGVsWzBdKXtyZXR1cm4gZmFsc2U7fXZhciBrZXk9ZS53aGljaDtpZih0aGlzLiRjb250ZW50LmZpbmQoXCI6aW5wdXRcIikuaXMoXCI6Zm9jdXNcIikmJi8xM3wzMi8udGVzdChrZXkpKXtyZXR1cm4gZmFsc2U7fXZhciBrZXlDaGFyPXRoaXMuX2dldEtleShrZXkpO2lmKGtleUNoYXI9PT1cImVzY1wiJiZ0aGlzLmVzY2FwZUtleSl7aWYodGhpcy5lc2NhcGVLZXk9PT10cnVlKXt0aGlzLiRzY3JvbGxQYW5lLnRyaWdnZXIoXCJjbGlja1wiKTt9ZWxzZXtpZih0eXBlb2YgdGhpcy5lc2NhcGVLZXk9PT1cInN0cmluZ1wifHx0eXBlb2YgdGhpcy5lc2NhcGVLZXk9PT1cImZ1bmN0aW9uXCIpe3ZhciBidXR0b25LZXk7aWYodHlwZW9mIHRoaXMuZXNjYXBlS2V5PT09XCJmdW5jdGlvblwiKXtidXR0b25LZXk9dGhpcy5lc2NhcGVLZXkoKTt9ZWxzZXtidXR0b25LZXk9dGhpcy5lc2NhcGVLZXk7fWlmKGJ1dHRvbktleSl7aWYodHlwZW9mIHRoaXMuYnV0dG9uc1tidXR0b25LZXldPT09XCJ1bmRlZmluZWRcIil7Y29uc29sZS53YXJuKFwiSW52YWxpZCBlc2NhcGVLZXksIG5vIGJ1dHRvbnMgZm91bmQgd2l0aCBrZXkgXCIrYnV0dG9uS2V5KTt9ZWxzZXt0aGlzW1wiJF9cIitidXR0b25LZXldLnRyaWdnZXIoXCJjbGlja1wiKTt9fX19fSQuZWFjaCh0aGlzLmJ1dHRvbnMsZnVuY3Rpb24oa2V5LGJ1dHRvbil7aWYoYnV0dG9uLmtleXMuaW5kZXhPZihrZXlDaGFyKSE9PS0xKXt0aGF0W1wiJF9cIitrZXldLnRyaWdnZXIoXCJjbGlja1wiKTt9fSk7fSxzZXREaWFsb2dDZW50ZXI6ZnVuY3Rpb24oKXtjb25zb2xlLmluZm8oXCJzZXREaWFsb2dDZW50ZXIgaXMgZGVwcmVjYXRlZCwgZGlhbG9ncyBhcmUgY2VudGVyZWQgd2l0aCBDU1MzIHRhYmxlc1wiKTt9LF91bndhdGNoQ29udGVudDpmdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwodGhpcy5fdGltZXIpO30sY2xvc2U6ZnVuY3Rpb24ob25DbG9zZVBheWxvYWQpe3ZhciB0aGF0PXRoaXM7aWYodHlwZW9mIHRoaXMub25DbG9zZT09PVwiZnVuY3Rpb25cIil7dGhpcy5vbkNsb3NlKG9uQ2xvc2VQYXlsb2FkKTt9dGhpcy5fdW53YXRjaENvbnRlbnQoKTskKHdpbmRvdykudW5iaW5kKFwicmVzaXplLlwiK3RoaXMuX2lkKTskKHdpbmRvdykudW5iaW5kKFwia2V5dXAuXCIrdGhpcy5faWQpOyQod2luZG93KS51bmJpbmQoXCJqY0tleURvd24uXCIrdGhpcy5faWQpO2lmKHRoaXMuZHJhZ2dhYmxlKXskKHdpbmRvdykudW5iaW5kKFwibW91c2Vtb3ZlLlwiK3RoaXMuX2lkKTskKHdpbmRvdykudW5iaW5kKFwibW91c2V1cC5cIit0aGlzLl9pZCk7dGhpcy4kdGl0bGVDb250YWluZXIudW5iaW5kKFwibW91c2Vkb3duXCIpO310aGF0LiRlbC5yZW1vdmVDbGFzcyh0aGF0LmxvYWRlZENsYXNzKTskKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImpjb25maXJtLW5vLXNjcm9sbC1cIit0aGF0Ll9pZCk7dGhhdC4kamNvbmZpcm1Cb3hDb250YWluZXIucmVtb3ZlQ2xhc3MoXCJqY29uZmlybS1uby10cmFuc2l0aW9uXCIpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LiRib2R5LmFkZENsYXNzKHRoYXQuY2xvc2VBbmltYXRpb25QYXJzZWQpO3RoYXQuJGpjb25maXJtQmcuYWRkQ2xhc3MoXCJqY29uZmlybS1iZy1oXCIpO3ZhciBjbG9zZVRpbWVyPSh0aGF0LmNsb3NlQW5pbWF0aW9uPT09XCJub25lXCIpPzE6dGhhdC5hbmltYXRpb25TcGVlZDtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC4kZWwucmVtb3ZlKCk7dmFyIGw9dy5qY29uZmlybS5pbnN0YW5jZXM7dmFyIGk9dy5qY29uZmlybS5pbnN0YW5jZXMubGVuZ3RoLTE7Zm9yKGk7aT49MDtpLS0pe2lmKHcuamNvbmZpcm0uaW5zdGFuY2VzW2ldLl9pZD09PXRoYXQuX2lkKXt3Lmpjb25maXJtLmluc3RhbmNlcy5zcGxpY2UoaSwxKTt9fWlmKCF3Lmpjb25maXJtLmluc3RhbmNlcy5sZW5ndGgpe2lmKHRoYXQuc2Nyb2xsVG9QcmV2aW91c0VsZW1lbnQmJncuamNvbmZpcm0ubGFzdEZvY3VzZWQmJncuamNvbmZpcm0ubGFzdEZvY3VzZWQubGVuZ3RoJiYkLmNvbnRhaW5zKGRvY3VtZW50LHcuamNvbmZpcm0ubGFzdEZvY3VzZWRbMF0pKXt2YXIgJGxmPXcuamNvbmZpcm0ubGFzdEZvY3VzZWQ7aWYodGhhdC5zY3JvbGxUb1ByZXZpb3VzRWxlbWVudEFuaW1hdGUpe3ZhciBzdD0kKHdpbmRvdykuc2Nyb2xsVG9wKCk7dmFyIG90PXcuamNvbmZpcm0ubGFzdEZvY3VzZWQub2Zmc2V0KCkudG9wO3ZhciB3aD0kKHdpbmRvdykuaGVpZ2h0KCk7aWYoIShvdD5zdCYmb3Q8KHN0K3doKSkpe3ZhciBzY3JvbGxUbz0ob3QtTWF0aC5yb3VuZCgod2gvMykpKTskKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtzY3JvbGxUb3A6c2Nyb2xsVG99LHRoYXQuYW5pbWF0aW9uU3BlZWQsXCJzd2luZ1wiLGZ1bmN0aW9uKCl7JGxmLmZvY3VzKCk7fSk7fWVsc2V7JGxmLmZvY3VzKCk7fX1lbHNleyRsZi5mb2N1cygpO313Lmpjb25maXJtLmxhc3RGb2N1c2VkPWZhbHNlO319aWYodHlwZW9mIHRoYXQub25EZXN0cm95PT09XCJmdW5jdGlvblwiKXt0aGF0Lm9uRGVzdHJveSgpO319LGNsb3NlVGltZXIqMC40KTt9LDUwKTtyZXR1cm4gdHJ1ZTt9LG9wZW46ZnVuY3Rpb24oKXtpZih0aGlzLmlzT3BlbigpKXtyZXR1cm4gZmFsc2U7fXRoaXMuX2J1aWxkSFRNTCgpO3RoaXMuX2JpbmRFdmVudHMoKTt0aGlzLl9vcGVuKCk7cmV0dXJuIHRydWU7fSxzZXRTdGFydGluZ1BvaW50OmZ1bmN0aW9uKCl7dmFyIGVsPWZhbHNlO2lmKHRoaXMuYW5pbWF0ZUZyb21FbGVtZW50IT09dHJ1ZSYmdGhpcy5hbmltYXRlRnJvbUVsZW1lbnQpe2VsPXRoaXMuYW5pbWF0ZUZyb21FbGVtZW50O3cuamNvbmZpcm0ubGFzdENsaWNrZWQ9ZmFsc2U7fWVsc2V7aWYody5qY29uZmlybS5sYXN0Q2xpY2tlZCYmdGhpcy5hbmltYXRlRnJvbUVsZW1lbnQ9PT10cnVlKXtlbD13Lmpjb25maXJtLmxhc3RDbGlja2VkO3cuamNvbmZpcm0ubGFzdENsaWNrZWQ9ZmFsc2U7fWVsc2V7cmV0dXJuIGZhbHNlO319aWYoIWVsKXtyZXR1cm4gZmFsc2U7fXZhciBvZmZzZXQ9ZWwub2Zmc2V0KCk7dmFyIGlUb3A9ZWwub3V0ZXJIZWlnaHQoKS8yO3ZhciBpTGVmdD1lbC5vdXRlcldpZHRoKCkvMjtpVG9wLT10aGlzLiRqY29uZmlybUJveC5vdXRlckhlaWdodCgpLzI7aUxlZnQtPXRoaXMuJGpjb25maXJtQm94Lm91dGVyV2lkdGgoKS8yO3ZhciBzb3VyY2VUb3A9b2Zmc2V0LnRvcCtpVG9wO3NvdXJjZVRvcD1zb3VyY2VUb3AtdGhpcy5fc2Nyb2xsVG9wKCk7dmFyIHNvdXJjZUxlZnQ9b2Zmc2V0LmxlZnQraUxlZnQ7dmFyIHdoPSQod2luZG93KS5oZWlnaHQoKS8yO3ZhciB3dz0kKHdpbmRvdykud2lkdGgoKS8yO3ZhciB0YXJnZXRIPXdoLXRoaXMuJGpjb25maXJtQm94Lm91dGVySGVpZ2h0KCkvMjt2YXIgdGFyZ2V0Vz13dy10aGlzLiRqY29uZmlybUJveC5vdXRlcldpZHRoKCkvMjtzb3VyY2VUb3AtPXRhcmdldEg7c291cmNlTGVmdC09dGFyZ2V0VztpZihNYXRoLmFicyhzb3VyY2VUb3ApPndofHxNYXRoLmFicyhzb3VyY2VMZWZ0KT53dyl7cmV0dXJuIGZhbHNlO310aGlzLiRqY29uZmlybUJveENvbnRhaW5lci5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIitzb3VyY2VMZWZ0K1wicHgsIFwiK3NvdXJjZVRvcCtcInB4KVwiKTt9LF9vcGVuOmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcztpZih0eXBlb2YgdGhhdC5vbk9wZW5CZWZvcmU9PT1cImZ1bmN0aW9uXCIpe3RoYXQub25PcGVuQmVmb3JlKCk7fXRoaXMuJGJvZHkucmVtb3ZlQ2xhc3ModGhpcy5hbmltYXRpb25QYXJzZWQpO3RoaXMuJGpjb25maXJtQmcucmVtb3ZlQ2xhc3MoXCJqY29uZmlybS1iZy1oXCIpO3RoaXMuJGJvZHkuZm9jdXMoKTt0aGF0LiRqY29uZmlybUJveENvbnRhaW5lci5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIiswK1wicHgsIFwiKzArXCJweClcIik7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuJGJvZHkuY3NzKHRoYXQuX2dldENTUyh0aGF0LmFuaW1hdGlvblNwZWVkLDEpKTt0aGF0LiRib2R5LmNzcyh7XCJ0cmFuc2l0aW9uLXByb3BlcnR5XCI6dGhhdC4kYm9keS5jc3MoXCJ0cmFuc2l0aW9uLXByb3BlcnR5XCIpK1wiLCBtYXJnaW5cIn0pO3RoYXQuJGpjb25maXJtQm94Q29udGFpbmVyLmFkZENsYXNzKFwiamNvbmZpcm0tbm8tdHJhbnNpdGlvblwiKTt0aGF0Ll9tb2RhbFJlYWR5LnJlc29sdmUoKTtpZih0eXBlb2YgdGhhdC5vbk9wZW49PT1cImZ1bmN0aW9uXCIpe3RoYXQub25PcGVuKCk7fXRoYXQuJGVsLmFkZENsYXNzKHRoYXQubG9hZGVkQ2xhc3MpO30sdGhpcy5hbmltYXRpb25TcGVlZCk7fSxsb2FkZWRDbGFzczpcImpjb25maXJtLW9wZW5cIixpc0Nsb3NlZDpmdW5jdGlvbigpe3JldHVybiAhdGhpcy4kZWx8fHRoaXMuJGVsLnBhcmVudCgpLmxlbmd0aD09PTA7fSxpc09wZW46ZnVuY3Rpb24oKXtyZXR1cm4gIXRoaXMuaXNDbG9zZWQoKTt9LHRvZ2dsZTpmdW5jdGlvbigpe2lmKCF0aGlzLmlzT3BlbigpKXt0aGlzLm9wZW4oKTt9ZWxzZXt0aGlzLmNsb3NlKCk7fX19O3cuamNvbmZpcm0uaW5zdGFuY2VzPVtdO3cuamNvbmZpcm0ubGFzdEZvY3VzZWQ9ZmFsc2U7dy5qY29uZmlybS5wbHVnaW5EZWZhdWx0cz17dGVtcGxhdGU6JzxkaXYgY2xhc3M9XCJqY29uZmlybVwiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1iZyBqY29uZmlybS1iZy1oXCI+PC9kaXY+PGRpdiBjbGFzcz1cImpjb25maXJtLXNjcm9sbHBhbmVcIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tcm93XCI+PGRpdiBjbGFzcz1cImpjb25maXJtLWNlbGxcIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0taG9sZGVyXCI+PGRpdiBjbGFzcz1cImpjLWJzMy1jb250YWluZXJcIj48ZGl2IGNsYXNzPVwiamMtYnMzLXJvd1wiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1ib3gtY29udGFpbmVyIGpjb25maXJtLWFuaW1hdGVkXCI+PGRpdiBjbGFzcz1cImpjb25maXJtLWJveFwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJsYWJlbGxlZFwiIHRhYmluZGV4PVwiLTFcIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tY2xvc2VJY29uXCI+JnRpbWVzOzwvZGl2PjxkaXYgY2xhc3M9XCJqY29uZmlybS10aXRsZS1jXCI+PHNwYW4gY2xhc3M9XCJqY29uZmlybS1pY29uLWNcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJqY29uZmlybS10aXRsZVwiPjwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tY29udGVudC1wYW5lXCI+PGRpdiBjbGFzcz1cImpjb25maXJtLWNvbnRlbnRcIj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tYnV0dG9uc1wiPjwvZGl2PjxkaXYgY2xhc3M9XCJqY29uZmlybS1jbGVhclwiPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PicsdGl0bGU6XCJIZWxsb1wiLHRpdGxlQ2xhc3M6XCJcIix0eXBlOlwiZGVmYXVsdFwiLHR5cGVBbmltYXRlZDp0cnVlLGRyYWdnYWJsZTp0cnVlLGRyYWdXaW5kb3dHYXA6MTUsZHJhZ1dpbmRvd0JvcmRlcjp0cnVlLGFuaW1hdGVGcm9tRWxlbWVudDp0cnVlLGFsaWduTWlkZGxlOnRydWUsc21vb3RoQ29udGVudDp0cnVlLGNvbnRlbnQ6XCJBcmUgeW91IHN1cmUgdG8gY29udGludWU/XCIsYnV0dG9uczp7fSxkZWZhdWx0QnV0dG9uczp7b2s6e2FjdGlvbjpmdW5jdGlvbigpe319LGNsb3NlOnthY3Rpb246ZnVuY3Rpb24oKXt9fX0sY29udGVudExvYWRlZDpmdW5jdGlvbigpe30saWNvbjpcIlwiLGxhenlPcGVuOmZhbHNlLGJnT3BhY2l0eTpudWxsLHRoZW1lOlwibGlnaHRcIixhbmltYXRpb246XCJzY2FsZVwiLGNsb3NlQW5pbWF0aW9uOlwic2NhbGVcIixhbmltYXRpb25TcGVlZDo0MDAsYW5pbWF0aW9uQm91bmNlOjEsZXNjYXBlS2V5OnRydWUscnRsOmZhbHNlLGNvbnRhaW5lcjpcImJvZHlcIixjb250YWluZXJGbHVpZDpmYWxzZSxiYWNrZ3JvdW5kRGlzbWlzczpmYWxzZSxiYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvbjpcInNoYWtlXCIsYXV0b0Nsb3NlOmZhbHNlLGNsb3NlSWNvbjpudWxsLGNsb3NlSWNvbkNsYXNzOmZhbHNlLHdhdGNoSW50ZXJ2YWw6MTAwLGNvbHVtbkNsYXNzOlwiY29sLW1kLTQgY29sLW1kLW9mZnNldC00IGNvbC1zbS02IGNvbC1zbS1vZmZzZXQtMyBjb2wteHMtMTAgY29sLXhzLW9mZnNldC0xXCIsYm94V2lkdGg6XCI1MCVcIixzY3JvbGxUb1ByZXZpb3VzRWxlbWVudDp0cnVlLHNjcm9sbFRvUHJldmlvdXNFbGVtZW50QW5pbWF0ZTp0cnVlLHVzZUJvb3RzdHJhcDp0cnVlLG9mZnNldFRvcDo0MCxvZmZzZXRCb3R0b206NDAsYm9vdHN0cmFwQ2xhc3Nlczp7Y29udGFpbmVyOlwiY29udGFpbmVyXCIsY29udGFpbmVyRmx1aWQ6XCJjb250YWluZXItZmx1aWRcIixyb3c6XCJyb3dcIn0sb25Db250ZW50UmVhZHk6ZnVuY3Rpb24oKXt9LG9uT3BlbkJlZm9yZTpmdW5jdGlvbigpe30sb25PcGVuOmZ1bmN0aW9uKCl7fSxvbkNsb3NlOmZ1bmN0aW9uKCl7fSxvbkRlc3Ryb3k6ZnVuY3Rpb24oKXt9LG9uQWN0aW9uOmZ1bmN0aW9uKCl7fX07dmFyIGtleURvd249ZmFsc2U7JCh3aW5kb3cpLm9uKFwia2V5ZG93blwiLGZ1bmN0aW9uKGUpe2lmKCFrZXlEb3duKXt2YXIgJHRhcmdldD0kKGUudGFyZ2V0KTt2YXIgcGFzcz1mYWxzZTtpZigkdGFyZ2V0LmNsb3Nlc3QoXCIuamNvbmZpcm0tYm94XCIpLmxlbmd0aCl7cGFzcz10cnVlO31pZihwYXNzKXskKHdpbmRvdykudHJpZ2dlcihcImpjS2V5RG93blwiKTt9a2V5RG93bj10cnVlO319KTskKHdpbmRvdykub24oXCJrZXl1cFwiLGZ1bmN0aW9uKCl7a2V5RG93bj1mYWxzZTt9KTt3Lmpjb25maXJtLmxhc3RDbGlja2VkPWZhbHNlOyQoZG9jdW1lbnQpLm9uKFwibW91c2Vkb3duXCIsXCJidXR0b24sIGEsIFtqYy1zb3VyY2VdXCIsZnVuY3Rpb24oKXt3Lmpjb25maXJtLmxhc3RDbGlja2VkPSQodGhpcyk7fSk7fSkpOyIsIi8qXG4gICAgIF8gXyAgICAgIF8gICAgICAgX1xuIF9fX3wgKF8pIF9fX3wgfCBfXyAgKF8pX19fXG4vIF9ffCB8IHwvIF9ffCB8LyAvICB8IC8gX198XG5cXF9fIFxcIHwgfCAoX198ICAgPCBfIHwgXFxfXyBcXFxufF9fXy9ffF98XFxfX198X3xcXF8oXykvIHxfX18vXG4gICAgICAgICAgICAgICAgICAgfF9fL1xuXG4gVmVyc2lvbjogMS44LjFcbiAgQXV0aG9yOiBLZW4gV2hlZWxlclxuIFdlYnNpdGU6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pb1xuICAgIERvY3M6IGh0dHA6Ly9rZW53aGVlbGVyLmdpdGh1Yi5pby9zbGlja1xuICAgIFJlcG86IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2tcbiAgSXNzdWVzOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrL2lzc3Vlc1xuXG4gKi9cbi8qIGdsb2JhbCB3aW5kb3csIGRvY3VtZW50LCBkZWZpbmUsIGpRdWVyeSwgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgKi9cbjsoZnVuY3Rpb24oZmFjdG9yeSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShbJ2pxdWVyeSddLCBmYWN0b3J5KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnanF1ZXJ5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcbiAgICB9XG5cbn0oZnVuY3Rpb24oJCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgU2xpY2sgPSB3aW5kb3cuU2xpY2sgfHwge307XG5cbiAgICBTbGljayA9IChmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgaW5zdGFuY2VVaWQgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIFNsaWNrKGVsZW1lbnQsIHNldHRpbmdzKSB7XG5cbiAgICAgICAgICAgIHZhciBfID0gdGhpcywgZGF0YVNldHRpbmdzO1xuXG4gICAgICAgICAgICBfLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcHBlbmREb3RzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj5QcmV2aW91czwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj5OZXh0PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXG4gICAgICAgICAgICAgICAgY3NzRWFzZTogJ2Vhc2UnLFxuICAgICAgICAgICAgICAgIGN1c3RvbVBhZ2luZzogZnVuY3Rpb24oc2xpZGVyLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAvPicpLnRleHQoaSArIDEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgICAgICAgICAgZWRnZUZyaWN0aW9uOiAwLjM1LFxuICAgICAgICAgICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25DaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICBtb2JpbGVGaXJzdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRG90c0hvdmVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25kVG86ICd3aW5kb3cnLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IG51bGwsXG4gICAgICAgICAgICAgICAgcm93czogMSxcbiAgICAgICAgICAgICAgICBydGw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlOiAnJyxcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJSb3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgICAgICAgICAgc3dpcGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0b3VjaE1vdmU6IHRydWUsXG4gICAgICAgICAgICAgICAgdG91Y2hUaHJlc2hvbGQ6IDUsXG4gICAgICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVzZVRyYW5zZm9ybTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3YWl0Rm9yQW5pbWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIF8uaW5pdGlhbHMgPSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2luZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50RGlyZWN0aW9uOiAwLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogMCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IDEsXG4gICAgICAgICAgICAgICAgJGRvdHM6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdFdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RIZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9hZEluZGV4OiAwLFxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgJHByZXZBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICBzY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlQ291bnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVUcmFjazogbnVsbCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzOiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0OiAwLFxuICAgICAgICAgICAgICAgIHN3aXBlTGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBzd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAkbGlzdDogbnVsbCxcbiAgICAgICAgICAgICAgICB0b3VjaE9iamVjdDoge30sXG4gICAgICAgICAgICAgICAgdHJhbnNmb3Jtc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHVuc2xpY2tlZDogZmFsc2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMpO1xuXG4gICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMgPSBbXTtcbiAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzID0gW107XG4gICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gZmFsc2U7XG4gICAgICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmhpZGRlbiA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgXy5wb3NpdGlvblByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBudWxsO1xuICAgICAgICAgICAgXy5yb3dDb3VudCA9IDE7XG4gICAgICAgICAgICBfLnNob3VsZENsaWNrID0gdHJ1ZTtcbiAgICAgICAgICAgIF8uJHNsaWRlciA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAndmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gMDtcbiAgICAgICAgICAgIF8ud2luZG93VGltZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBkYXRhU2V0dGluZ3MgPSAkKGVsZW1lbnQpLmRhdGEoJ3NsaWNrJykgfHwge307XG5cbiAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLmRlZmF1bHRzLCBzZXR0aW5ncywgZGF0YVNldHRpbmdzKTtcblxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuXG4gICAgICAgICAgICBfLm9yaWdpbmFsU2V0dGluZ3MgPSBfLm9wdGlvbnM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQubW96SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ21vekhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQud2Via2l0SGlkZGVuICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIF8uaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmF1dG9QbGF5ID0gJC5wcm94eShfLmF1dG9QbGF5LCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlDbGVhciA9ICQucHJveHkoXy5hdXRvUGxheUNsZWFyLCBfKTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlJdGVyYXRvciA9ICQucHJveHkoXy5hdXRvUGxheUl0ZXJhdG9yLCBfKTtcbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUgPSAkLnByb3h5KF8uY2hhbmdlU2xpZGUsIF8pO1xuICAgICAgICAgICAgXy5jbGlja0hhbmRsZXIgPSAkLnByb3h5KF8uY2xpY2tIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2VsZWN0SGFuZGxlciA9ICQucHJveHkoXy5zZWxlY3RIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uc2V0UG9zaXRpb24gPSAkLnByb3h5KF8uc2V0UG9zaXRpb24sIF8pO1xuICAgICAgICAgICAgXy5zd2lwZUhhbmRsZXIgPSAkLnByb3h5KF8uc3dpcGVIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8uZHJhZ0hhbmRsZXIgPSAkLnByb3h5KF8uZHJhZ0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5rZXlIYW5kbGVyID0gJC5wcm94eShfLmtleUhhbmRsZXIsIF8pO1xuXG4gICAgICAgICAgICBfLmluc3RhbmNlVWlkID0gaW5zdGFuY2VVaWQrKztcblxuICAgICAgICAgICAgLy8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3NcbiAgICAgICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uIChtdXN0IHN0YXJ0IHdpdGggPClcbiAgICAgICAgICAgIC8vIEV4dHJhY3RlZCBmcm9tIGpRdWVyeSB2MS4xMSBzb3VyY2VcbiAgICAgICAgICAgIF8uaHRtbEV4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSopJC87XG5cblxuICAgICAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG4gICAgICAgICAgICBfLmluaXQodHJ1ZSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBTbGljaztcblxuICAgIH0oKSk7XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWN0aXZhdGVBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWFjdGl2ZScpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ2ZhbHNlJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYWRkU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tBZGQgPSBmdW5jdGlvbihtYXJrdXAsIGluZGV4LCBhZGRCZWZvcmUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgYWRkQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPCAwIHx8IChpbmRleCA+PSBfLnNsaWRlQ291bnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIF8uJHNsaWRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFkZEJlZm9yZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRCZWZvcmUoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5pbnNlcnRBZnRlcihfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChhZGRCZWZvcmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudCkuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0YXJnZXRIZWlnaHRcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVTbGlkZSA9IGZ1bmN0aW9uKHRhcmdldExlZnQsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIGFuaW1Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IC10YXJnZXRMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudExlZnQgPSAtKF8uY3VycmVudExlZnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAkKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiBfLmN1cnJlbnRMZWZ0XG4gICAgICAgICAgICAgICAgfSkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IF8ub3B0aW9ucy5zcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBfLm9wdGlvbnMuZWFzaW5nLFxuICAgICAgICAgICAgICAgICAgICBzdGVwOiBmdW5jdGlvbihub3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdyA9IE1hdGguY2VpbChub3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoMHB4LCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IE1hdGguY2VpbCh0YXJnZXRMZWZ0KTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoMHB4LCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdlRhcmdldCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5vcHRpb25zLmFzTmF2Rm9yO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgJiYgYXNOYXZGb3IgIT09IG51bGwgKSB7XG4gICAgICAgICAgICBhc05hdkZvciA9ICQoYXNOYXZGb3IpLm5vdChfLiRzbGlkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFzTmF2Rm9yO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hc05hdkZvciA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLmdldE5hdlRhcmdldCgpO1xuXG4gICAgICAgIGlmICggYXNOYXZGb3IgIT09IG51bGwgJiYgdHlwZW9mIGFzTmF2Rm9yID09PSAnb2JqZWN0JyApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcykuc2xpY2soJ2dldFNsaWNrJyk7XG4gICAgICAgICAgICAgICAgaWYoIXRhcmdldC51bnNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNsaWRlSGFuZGxlcihpbmRleCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXBwbHlUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9IF8udHJhbnNmb3JtVHlwZSArICcgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJ29wYWNpdHkgJyArIF8ub3B0aW9ucy5zcGVlZCArICdtcyAnICsgXy5vcHRpb25zLmNzc0Vhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXlUaW1lciA9IHNldEludGVydmFsKCBfLmF1dG9QbGF5SXRlcmF0b3IsIF8ub3B0aW9ucy5hdXRvcGxheVNwZWVkICk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlDbGVhciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5hdXRvUGxheVRpbWVyKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlJdGVyYXRvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBpZiAoICFfLnBhdXNlZCAmJiAhXy5pbnRlcnJ1cHRlZCAmJiAhXy5mb2N1c3NlZCApIHtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMSAmJiAoIF8uY3VycmVudFNsaWRlICsgMSApID09PSAoIF8uc2xpZGVDb3VudCAtIDEgKSkge1xuICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoIF8uZGlyZWN0aW9uID09PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlVG8gPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIF8uY3VycmVudFNsaWRlIC0gMSA9PT0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZVRvICk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZEFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93ID0gJChfLm9wdGlvbnMucHJldkFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyA9ICQoXy5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG5cbiAgICAgICAgICAgIGlmKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnByZXBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZCggXy4kbmV4dEFycm93IClcblxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGREb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgZG90O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgICAgIGRvdCA9ICQoJzx1bCAvPicpLmFkZENsYXNzKF8ub3B0aW9ucy5kb3RzQ2xhc3MpO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDw9IF8uZ2V0RG90Q291bnQoKTsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgZG90LmFwcGVuZCgkKCc8bGkgLz4nKS5hcHBlbmQoXy5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsIF8sIGkpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJGRvdHMgPSBkb3QuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZERvdHMpO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmZpbmQoJ2xpJykuZmlyc3QoKS5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZE91dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKCBfLm9wdGlvbnMuc2xpZGUgKyAnOm5vdCguc2xpY2stY2xvbmVkKScpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICQoZWxlbWVudClcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxuICAgICAgICAgICAgICAgIC5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnLCAkKGVsZW1lbnQpLmF0dHIoJ3N0eWxlJykgfHwgJycpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XG4gICAgICAgICAgICAkKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykuYXBwZW5kVG8oXy4kc2xpZGVyKSA6XG4gICAgICAgICAgICBfLiRzbGlkZXMud3JhcEFsbCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLnBhcmVudCgpO1xuXG4gICAgICAgIF8uJGxpc3QgPSBfLiRzbGlkZVRyYWNrLndyYXAoXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInNsaWNrLWxpc3RcIi8+JykucGFyZW50KCk7XG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlIHx8IF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG5cbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG5cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xuXG4gICAgICAgIG5ld1NsaWRlcyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcblxuICAgICAgICAgICAgc2xpZGVzUGVyU2VjdGlvbiA9IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cgKiBfLm9wdGlvbnMucm93cztcbiAgICAgICAgICAgIG51bU9mU2xpZGVzID0gTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGZvcihiID0gMDsgYiA8IF8ub3B0aW9ucy5yb3dzOyBiKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBmb3IoYyA9IDA7IGMgPCBfLm9wdGlvbnMuc2xpZGVzUGVyUm93OyBjKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAoYSAqIHNsaWRlc1BlclNlY3Rpb24gKyAoKGIgKiBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArIGMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuY2hpbGRyZW4oKS5jaGlsZHJlbigpLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXG4gICAgICAgICAgICAgICAgICAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaydcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrUmVzcG9uc2l2ZSA9IGZ1bmN0aW9uKGluaXRpYWwsIGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtwb2ludCwgdGFyZ2V0QnJlYWtwb2ludCwgcmVzcG9uZFRvV2lkdGgsIHRyaWdnZXJCcmVha3BvaW50ID0gZmFsc2U7XG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xuICAgICAgICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnc2xpZGVyJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ21pbicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gTWF0aC5taW4od2luZG93V2lkdGgsIHNsaWRlcldpZHRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnJlc3BvbnNpdmUgJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XG5cbiAgICAgICAgICAgIGZvciAoYnJlYWtwb2ludCBpbiBfLmJyZWFrcG9pbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3JpZ2luYWxTZXR0aW5ncy5tb2JpbGVGaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA8IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5hY3RpdmVCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9IF8ub3JpZ2luYWxTZXR0aW5ncztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG9ubHkgdHJpZ2dlciBicmVha3BvaW50cyBkdXJpbmcgYW4gYWN0dWFsIGJyZWFrLiBub3Qgb24gaW5pdGlhbGl6ZS5cbiAgICAgICAgICAgIGlmKCAhaW5pdGlhbCAmJiB0cmlnZ2VyQnJlYWtwb2ludCAhPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxuICAgICAgICAgICAgaW5kZXhPZmZzZXQsIHNsaWRlT2Zmc2V0LCB1bmV2ZW5PZmZzZXQ7XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cbiAgICAgICAgaWYoJHRhcmdldC5pcygnYScpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIG5vdCB0aGUgPGxpPiBlbGVtZW50IChpZTogYSBjaGlsZCksIGZpbmQgdGhlIDxsaT4uXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XG4gICAgICAgICAgICAkdGFyZ2V0ID0gJHRhcmdldC5jbG9zZXN0KCdsaScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdW5ldmVuT2Zmc2V0ID0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCk7XG4gICAgICAgIGluZGV4T2Zmc2V0ID0gdW5ldmVuT2Zmc2V0ID8gMCA6IChfLnNsaWRlQ291bnQgLSBfLmN1cnJlbnRTbGlkZSkgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLm1lc3NhZ2UpIHtcblxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ25leHQnOlxuICAgICAgICAgICAgICAgIHNsaWRlT2Zmc2V0ID0gaW5kZXhPZmZzZXQgPT09IDAgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSArIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnaW5kZXgnOlxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YS5pbmRleCB8fCAkdGFyZ2V0LmluZGV4KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LmNoaWxkcmVuKCkudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tOYXZpZ2FibGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG5hdmlnYWJsZXMsIHByZXZOYXZpZ2FibGU7XG5cbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xuICAgICAgICBwcmV2TmF2aWdhYmxlID0gMDtcbiAgICAgICAgaWYgKGluZGV4ID4gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gbmF2aWdhYmxlcykge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwcmV2TmF2aWdhYmxlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJldk5hdmlnYWJsZSA9IG5hdmlnYWJsZXNbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9mZignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub2ZmKF8udmlzaWJpbGl0eUNoYW5nZSwgXy52aXNpYmlsaXR5KTtcblxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub2ZmKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5vcmllbnRhdGlvbkNoYW5nZSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vZmYoJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwU2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIG9yaWdpbmFsU2xpZGVzO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXMuY2hpbGRyZW4oKS5jaGlsZHJlbigpO1xuICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMucmVtb3ZlQXR0cignc3R5bGUnKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24ocmVmcmVzaCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgXy5jbGVhblVwRXZlbnRzKCk7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikuZGV0YWNoKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5wcmV2QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLm5leHRBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoXy4kc2xpZGVzKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignc3R5bGUnLCAkKHRoaXMpLmRhdGEoJ29yaWdpbmFsU3R5bGluZycpKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRsaXN0LmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYXBwZW5kKF8uJHNsaWRlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBfLmNsZWFuVXBSb3dzKCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZXInKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgIF8udW5zbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICBpZighcmVmcmVzaCkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2Rlc3Ryb3knLCBbX10pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRpc2FibGVUcmFuc2l0aW9uID0gZnVuY3Rpb24oc2xpZGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0ge307XG5cbiAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICcnO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlID0gZnVuY3Rpb24oc2xpZGVJbmRleCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGVPdXQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVyKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChmaWx0ZXIgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuZmlsdGVyKGZpbHRlcikuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVyXG4gICAgICAgICAgICAub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJylcbiAgICAgICAgICAgIC5vbignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycsICcqJywgZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB2YXIgJHNmID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xuICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcbiAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRDdXJyZW50ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQ3VycmVudFNsaWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICByZXR1cm4gXy5jdXJyZW50U2xpZGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciBicmVha1BvaW50ID0gMDtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIGlmKCFfLm9wdGlvbnMuYXNOYXZGb3IpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gMSArIE1hdGguY2VpbCgoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFnZXJRdHkgLSAxO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRMZWZ0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQsXG4gICAgICAgICAgICB2ZXJ0aWNhbEhlaWdodCxcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgICAgIHRhcmdldFNsaWRlLFxuICAgICAgICAgICAgY29lZjtcblxuICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgdmVydGljYWxIZWlnaHQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoXy5zbGlkZVdpZHRoICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiAtMTtcbiAgICAgICAgICAgICAgICBjb2VmID0gLTFcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMS41O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKHZlcnRpY2FsSGVpZ2h0ICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgKiBjb2VmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID4gXy5zbGlkZUNvdW50ICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSAoc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudCkpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogXy5zbGlkZVdpZHRoKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiBfLnNsaWRlV2lkdGg7XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiB2ZXJ0aWNhbEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIC8gMikgLSAoKF8uc2xpZGVXaWR0aCAqIF8uc2xpZGVDb3VudCkgLyAyKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogXy5zbGlkZVdpZHRoKSAqIC0xKSArIF8uc2xpZGVPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQpICogLTEpICsgdmVydGljYWxPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgKz0gKF8uJGxpc3Qud2lkdGgoKSAtIHRhcmdldFNsaWRlLm91dGVyV2lkdGgoKSkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE9wdGlvbiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dldE9wdGlvbiA9IGZ1bmN0aW9uKG9wdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICByZXR1cm4gXy5vcHRpb25zW29wdGlvbl07XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha1BvaW50ID0gMCxcbiAgICAgICAgICAgIGNvdW50ZXIgPSAwLFxuICAgICAgICAgICAgaW5kZXhlcyA9IFtdLFxuICAgICAgICAgICAgbWF4O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQgKiAyO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBtYXgpIHtcbiAgICAgICAgICAgIGluZGV4ZXMucHVzaChicmVha1BvaW50KTtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5kZXhlcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0U2xpZGVDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCwgc3dpcGVkU2xpZGUsIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSA/IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIDogMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBzbGlkZSkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZS5vZmZzZXRMZWZ0IC0gY2VudGVyT2Zmc2V0ICsgKCQoc2xpZGUpLm91dGVyV2lkdGgoKSAvIDIpID4gKF8uc3dpcGVMZWZ0ICogLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkID0gTWF0aC5hYnMoJChzd2lwZWRTbGlkZSkuYXR0cignZGF0YS1zbGljay1pbmRleCcpIC0gXy5jdXJyZW50U2xpZGUpIHx8IDE7XG5cbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNUcmF2ZXJzZWQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ29UbyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dvVG8gPSBmdW5jdGlvbihzbGlkZSwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICBpbmRleDogcGFyc2VJbnQoc2xpZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRvbnRBbmltYXRlKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKGNyZWF0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICghJChfLiRzbGlkZXIpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG5cbiAgICAgICAgICAgICQoXy4kc2xpZGVyKS5hZGRDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcblxuICAgICAgICAgICAgXy5idWlsZFJvd3MoKTtcbiAgICAgICAgICAgIF8uYnVpbGRPdXQoKTtcbiAgICAgICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgICAgIF8uc3RhcnRMb2FkKCk7XG4gICAgICAgICAgICBfLmxvYWRTbGlkZXIoKTtcbiAgICAgICAgICAgIF8uaW5pdGlhbGl6ZUV2ZW50cygpO1xuICAgICAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUodHJ1ZSk7XG4gICAgICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3JlYXRpb24pIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdpbml0JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5pbml0QURBKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBREEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgICAgIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxcbiAgICAgICAgICAgICAgICB0YWJDb250cm9sSW5kZXhlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpLmZpbHRlcihmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICh2YWwgPj0gMCkgJiYgKHZhbCA8IF8uc2xpZGVDb3VudCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmFkZChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLm5vdChfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKSkuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlQ29udHJvbEluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXMuaW5kZXhPZihpKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYnBhbmVsJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAtMVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlQ29udHJvbEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgIHZhciBhcmlhQnV0dG9uQ29udHJvbCA9ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBzbGlkZUNvbnRyb2xJbmRleFxuICAgICAgICAgICAgICAgICAgIGlmICgkKCcjJyArIGFyaWFCdXR0b25Db250cm9sKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiBhcmlhQnV0dG9uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZFNsaWRlSW5kZXggPSB0YWJDb250cm9sSW5kZXhlc1tpXTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3ByZXNlbnRhdGlvbidcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnYnV0dG9uJykuZmlyc3QoKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFiJyxcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBtYXBwZWRTbGlkZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1sYWJlbCc6IChpICsgMSkgKyAnIG9mICcgKyBudW1Eb3RHcm91cHMsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KS5lcShfLmN1cnJlbnRTbGlkZSkuZmluZCgnYnV0dG9uJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgICAgICB9KS5lbmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGk9Xy5jdXJyZW50U2xpZGUsIG1heD1pK18ub3B0aW9ucy5zbGlkZXNUb1Nob3c7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLmF0dHIoeyd0YWJpbmRleCc6ICcwJ30pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkucmVtb3ZlQXR0cigndGFiaW5kZXgnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmFjdGl2YXRlQURBKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKS5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4J1xuICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8ub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKVxuICAgICAgICAgICAgICAgIC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0U2xpZGVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucGF1c2VPbkhvdmVyICkge1xuXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG5cbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdzdGFydCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnbW92ZSdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihfLnZpc2liaWxpdHlDaGFuZ2UsICQucHJveHkoXy52aXNpYmlsaXR5LCBfKSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykub24oJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ub3JpZW50YXRpb25DaGFuZ2UsIF8pKTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLnJlc2l6ZSwgXykpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub24oJ2RyYWdzdGFydCcsIF8ucHJldmVudERlZmF1bHQpO1xuXG4gICAgICAgICQod2luZG93KS5vbignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG4gICAgICAgICQoXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRVSSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5zaG93KCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmtleUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgIC8vRG9udCBzbGlkZSBpZiB0aGUgY3Vyc29yIGlzIGluc2lkZSB0aGUgZm9ybSBmaWVsZHMgYW5kIGFycm93IGtleXMgYXJlIHByZXNzZWRcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAnbmV4dCcgOiAgJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5ICYmIF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IF8ub3B0aW9ucy5ydGwgPT09IHRydWUgPyAncHJldmlvdXMnIDogJ25leHQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZEltYWdlcyhpbWFnZXNTY29wZSkge1xuXG4gICAgICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIGltYWdlc1Njb3BlKS5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtbGF6eScpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyY1NldCA9ICQodGhpcykuYXR0cignZGF0YS1zcmNzZXQnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3JjJywgaW1hZ2VTb3VyY2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMSB9LCAyMDAsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFtfLCBpbWFnZSwgaW1hZ2VTb3VyY2VdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5jdXJyZW50U2xpZGUgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IE1hdGgubWF4KDAsIF8uY3VycmVudFNsaWRlIC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gMiArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpICsgXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYW5nZVN0YXJ0ID0gXy5vcHRpb25zLmluZmluaXRlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIF8uY3VycmVudFNsaWRlIDogXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICByYW5nZUVuZCA9IE1hdGguY2VpbChyYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VTdGFydCA+IDApIHJhbmdlU3RhcnQtLTtcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZFJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpLnNsaWNlKHJhbmdlU3RhcnQsIHJhbmdlRW5kKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICB2YXIgcHJldlNsaWRlID0gcmFuZ2VTdGFydCAtIDEsXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcmFuZ2VFbmQsXG4gICAgICAgICAgICAgICAgJHNsaWRlcyA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUgPCAwKSBwcmV2U2xpZGUgPSBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShwcmV2U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEobmV4dFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLS07XG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkSW1hZ2VzKGxvYWRSYW5nZSk7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgXy5pbml0VUkoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAncHJvZ3Jlc3NpdmUnKSB7XG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5uZXh0ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrTmV4dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnbmV4dCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm9yaWVudGF0aW9uQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGF1c2UgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQYXVzZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcbiAgICAgICAgXy5wYXVzZWQgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wbGF5ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIF8ub3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wb3N0U2xpZGUgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWZ0ZXJDaGFuZ2UnLCBbXywgaW5kZXhdKTtcblxuICAgICAgICAgICAgXy5hbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmluaXRBREEoKTtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGN1cnJlbnRTbGlkZSA9ICQoXy4kc2xpZGVzLmdldChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUHJldiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJvZ3Jlc3NpdmVMYXp5TG9hZCA9IGZ1bmN0aW9uKCB0cnlDb3VudCApIHtcblxuICAgICAgICB0cnlDb3VudCA9IHRyeUNvdW50IHx8IDE7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJGltZ3NUb0xvYWQgPSAkKCAnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIgKSxcbiAgICAgICAgICAgIGltYWdlLFxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXG4gICAgICAgICAgICBpbWFnZVNyY1NldCxcbiAgICAgICAgICAgIGltYWdlU2l6ZXMsXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcblxuICAgICAgICBpZiAoICRpbWdzVG9Mb2FkLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgaW1hZ2UgPSAkaW1nc1RvTG9hZC5maXJzdCgpO1xuICAgICAgICAgICAgaW1hZ2VTb3VyY2UgPSBpbWFnZS5hdHRyKCdkYXRhLWxhenknKTtcbiAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gaW1hZ2UuYXR0cignZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gaW1hZ2UuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyk7XG4gICAgICAgICAgICBpbWFnZVRvTG9hZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoICdzcmMnLCBpbWFnZVNvdXJjZSApXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRlZCcsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIHRyeUNvdW50IDwgMyApIHtcblxuICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICogdHJ5IHRvIGxvYWQgdGhlIGltYWdlIDMgdGltZXMsXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxuICAgICAgICAgICAgICAgICAgICAgKiBzZXJ2ZXJzIGJsb2NraW5nIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoIHRyeUNvdW50ICsgMSApO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MDAgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYWxsSW1hZ2VzTG9hZGVkJywgWyBfIF0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCBpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBjdXJyZW50U2xpZGUsIGxhc3RWaXNpYmxlSW5kZXg7XG5cbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG5cbiAgICAgICAgLy8gaW4gbm9uLWluZmluaXRlIHNsaWRlcnMsIHdlIGRvbid0IHdhbnQgdG8gZ28gcGFzdCB0aGVcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxuICAgICAgICBpZiggIV8ub3B0aW9ucy5pbmZpbml0ZSAmJiAoIF8uY3VycmVudFNsaWRlID4gbGFzdFZpc2libGVJbmRleCApKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGxhc3RWaXNpYmxlSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBsZXNzIHNsaWRlcyB0aGFuIHRvIHNob3csIGdvIHRvIHN0YXJ0LlxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcblxuICAgICAgICBfLmRlc3Ryb3kodHJ1ZSk7XG5cbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcblxuICAgICAgICBfLmluaXQoKTtcblxuICAgICAgICBpZiggIWluaXRpYWxpemluZyApIHtcblxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVnaXN0ZXJCcmVha3BvaW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYnJlYWtwb2ludCwgY3VycmVudEJyZWFrcG9pbnQsIGwsXG4gICAgICAgICAgICByZXNwb25zaXZlU2V0dGluZ3MgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZSB8fCBudWxsO1xuXG4gICAgICAgIGlmICggJC50eXBlKHJlc3BvbnNpdmVTZXR0aW5ncykgPT09ICdhcnJheScgJiYgcmVzcG9uc2l2ZVNldHRpbmdzLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xuXG4gICAgICAgICAgICBmb3IgKCBicmVha3BvaW50IGluIHJlc3BvbnNpdmVTZXR0aW5ncyApIHtcblxuICAgICAgICAgICAgICAgIGwgPSBfLmJyZWFrcG9pbnRzLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50QnJlYWtwb2ludCA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5icmVha3BvaW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uZXMgd2l0aCB0aGUgc2FtZSBicmVha3BvaW50IG51bWJlciwgd2UgZG9uJ3Qgd2FudCBkdXBlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc3BsaWNlKGwsMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tjdXJyZW50QnJlYWtwb2ludF0gPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uc2V0dGluZ3M7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5icmVha3BvaW50cy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCBfLm9wdGlvbnMubW9iaWxlRmlyc3QgKSA/IGEtYiA6IGItYTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50ICYmIF8uY3VycmVudFNsaWRlICE9PSAwKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcblxuICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgIF8uaW5pdEFycm93RXZlbnRzKCk7XG4gICAgICAgIF8uYnVpbGREb3RzKCk7XG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZShmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICBfLnBhdXNlZCA9ICFfLm9wdGlvbnMuYXV0b3BsYXk7XG4gICAgICAgIF8uYXV0b1BsYXkoKTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigncmVJbml0JywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF8ud2luZG93RGVsYXkpO1xuICAgICAgICAgICAgXy53aW5kb3dEZWxheSA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICAgICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7IF8uc2V0UG9zaXRpb24oKTsgfVxuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZW1vdmVTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1JlbW92ZSA9IGZ1bmN0aW9uKGluZGV4LCByZW1vdmVCZWZvcmUsIHJlbW92ZUFsbCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gMCA6IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIHgsIHk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gLXBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuICAgICAgICB5ID0gXy5wb3NpdGlvblByb3AgPT0gJ3RvcCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xuXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XG5cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKCcgKyB4ICsgJywgJyArIHkgKyAnKSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHggKyAnLCAnICsgeSArICcsIDBweCknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldERpbWVuc2lvbnMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kbGlzdC5oZWlnaHQoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nICsgJyAwcHgnKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XG4gICAgICAgIF8ubGlzdEhlaWdodCA9IF8uJGxpc3QuaGVpZ2h0KCk7XG5cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSAmJiBfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoKTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gZmFsc2UpIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLndpZHRoKF8uc2xpZGVXaWR0aCAtIG9mZnNldCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEZhZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0O1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uc2xpZGVXaWR0aCAqIGluZGV4KSAqIC0xO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLmNzcyh7XG4gICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAxLFxuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0SGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIF8uJGxpc3QuY3NzKCdoZWlnaHQnLCB0YXJnZXRIZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldE9wdGlvbiA9XG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWNrU2V0T3B0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFjY2VwdHMgYXJndW1lbnRzIGluIGZvcm1hdCBvZjpcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2luZ2xlIG9wdGlvbidzIHZhbHVlOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzZXQgb2YgcmVzcG9uc2l2ZSBvcHRpb25zOlxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsICdyZXNwb25zaXZlJywgW3t9LCAuLi5dLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIHVwZGF0aW5nIG11bHRpcGxlIHZhbHVlcyBhdCBvbmNlIChub3QgcmVzcG9uc2l2ZSlcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCB7ICdvcHRpb24nOiB2YWx1ZSwgLi4uIH0sIHJlZnJlc2ggKVxuICAgICAgICAgKi9cblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcblxuICAgICAgICBpZiggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ29iamVjdCcgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgdHlwZSA9ICdtdWx0aXBsZSc7XG5cbiAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ3N0cmluZycgKSB7XG5cbiAgICAgICAgICAgIG9wdGlvbiA9ICBhcmd1bWVudHNbMF07XG4gICAgICAgICAgICB2YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgICAgIGlmICggYXJndW1lbnRzWzBdID09PSAncmVzcG9uc2l2ZScgJiYgJC50eXBlKCBhcmd1bWVudHNbMV0gKSA9PT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmd1bWVudHNbMV0gIT09ICd1bmRlZmluZWQnICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdzaW5nbGUnO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggdHlwZSA9PT0gJ3NpbmdsZScgKSB7XG5cbiAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAnbXVsdGlwbGUnICkge1xuXG4gICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcblxuICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRdID0gdmFsO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdyZXNwb25zaXZlJyApIHtcblxuICAgICAgICAgICAgZm9yICggaXRlbSBpbiB2YWx1ZSApIHtcblxuICAgICAgICAgICAgICAgIGlmKCAkLnR5cGUoIF8ub3B0aW9ucy5yZXNwb25zaXZlICkgIT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUgPSBbIHZhbHVlW2l0ZW1dIF07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGwgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3BvbnNpdmUgb2JqZWN0IGFuZCBzcGxpY2Ugb3V0IGR1cGxpY2F0ZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucmVzcG9uc2l2ZVtsXS5icmVha3BvaW50ID09PSB2YWx1ZVtpdGVtXS5icmVha3BvaW50ICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5wdXNoKCB2YWx1ZVtpdGVtXSApO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggcmVmcmVzaCApIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldERpbWVuc2lvbnMoKTtcblxuICAgICAgICBfLnNldEhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc2V0Q1NTKF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRQcm9wcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlTdHlsZSA9IGRvY3VtZW50LmJvZHkuc3R5bGU7XG5cbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcblxuICAgICAgICBpZiAoXy5wb3NpdGlvblByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLldlYmtpdFRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICAgYm9keVN0eWxlLm1zVHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnVzZUNTUyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuZmFkZSApIHtcbiAgICAgICAgICAgIGlmICggdHlwZW9mIF8ub3B0aW9ucy56SW5kZXggPT09ICdudW1iZXInICkge1xuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IDM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gXy5kZWZhdWx0cy56SW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keVN0eWxlLk9UcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctby10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdPVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUuTW96VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbW96LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ01velRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLXdlYmtpdC10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd3ZWJraXRUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctbXMtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnbXNUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICd0cmFuc2l0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBfLnRyYW5zZm9ybXNFbmFibGVkID0gXy5vcHRpb25zLnVzZVRyYW5zZm9ybSAmJiAoXy5hbmltVHlwZSAhPT0gbnVsbCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSk7XG4gICAgfTtcblxuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFNsaWRlQ2xhc3NlcyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0LCBhbGxTbGlkZXMsIGluZGV4T2Zmc2V0LCByZW1haW5kZXI7XG5cbiAgICAgICAgYWxsU2xpZGVzID0gXy4kc2xpZGVyXG4gICAgICAgICAgICAuZmluZCgnLnNsaWNrLXNsaWRlJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgdmFyIGV2ZW5Db2VmID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAlIDIgPT09IDAgPyAxIDogMDtcblxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIDEpIC0gY2VudGVyT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4IC0gY2VudGVyT2Zmc2V0ICsgZXZlbkNvZWYsIGluZGV4ICsgY2VudGVyT2Zmc2V0ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSBjZW50ZXJPZmZzZXQgKyAxICsgZXZlbkNvZWYsIGluZGV4T2Zmc2V0ICsgY2VudGVyT2Zmc2V0ICsgMilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoYWxsU2xpZGVzLmxlbmd0aCAtIDEgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IF8uc2xpZGVDb3VudCAtIDEpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAuZXEoaW5kZXgpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jZW50ZXInKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykpIHtcblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXgsIGluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxTbGlkZXMubGVuZ3RoIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcmVtYWluZGVyID0gXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4O1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICYmIChfLnNsaWRlQ291bnQgLSBpbmRleCkgPCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIHJlbWFpbmRlciksIGluZGV4T2Zmc2V0ICsgcmVtYWluZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0LCBpbmRleE9mZnNldCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnb25kZW1hbmQnIHx8IF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgXy5sYXp5TG9hZCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXR1cEluZmluaXRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgaSwgc2xpZGVJbmRleCwgaW5maW5pdGVDb3VudDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8ub3B0aW9ucy5jZW50ZXJNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlICYmIF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBzbGlkZUluZGV4ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gXy5zbGlkZUNvdW50OyBpID4gKF8uc2xpZGVDb3VudCAtXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50KTsgaSAtPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGluZmluaXRlQ291bnQgICsgXy5zbGlkZUNvdW50OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4ICsgXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykuZmluZCgnW2lkXScpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmludGVycnVwdCA9IGZ1bmN0aW9uKCB0b2dnbGUgKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhdG9nZ2xlICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0b2dnbGU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNlbGVjdEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9XG4gICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuaXMoJy5zbGljay1zbGlkZScpID9cbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkgOlxuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKTtcblxuICAgICAgICB2YXIgaW5kZXggPSBwYXJzZUludCh0YXJnZXRFbGVtZW50LmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSk7XG5cbiAgICAgICAgaWYgKCFpbmRleCkgaW5kZXggPSAwO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCwgZmFsc2UsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLnNsaWRlSGFuZGxlcihpbmRleCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNsaWRlSGFuZGxlciA9IGZ1bmN0aW9uKGluZGV4LCBzeW5jLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciB0YXJnZXRTbGlkZSwgYW5pbVNsaWRlLCBvbGRTbGlkZSwgc2xpZGVMZWZ0LCB0YXJnZXRMZWZ0ID0gbnVsbCxcbiAgICAgICAgICAgIF8gPSB0aGlzLCBuYXZUYXJnZXQ7XG5cbiAgICAgICAgc3luYyA9IHN5bmMgfHwgZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlICYmIF8ub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlICYmIF8uY3VycmVudFNsaWRlID09PSBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN5bmMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XG4gICAgICAgIHRhcmdldExlZnQgPSBfLmdldExlZnQodGFyZ2V0U2xpZGUpO1xuICAgICAgICBzbGlkZUxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8uY3VycmVudExlZnQgPSBfLnN3aXBlTGVmdCA9PT0gbnVsbCA/IHNsaWRlTGVmdCA6IF8uc3dpcGVMZWZ0O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiAoXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXRTbGlkZSA8IDApIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50ICsgdGFyZ2V0U2xpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2xpZGUgPj0gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGUgLSBfLnNsaWRlQ291bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uYW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYmVmb3JlQ2hhbmdlJywgW18sIF8uY3VycmVudFNsaWRlLCBhbmltU2xpZGVdKTtcblxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IGFuaW1TbGlkZTtcblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXNOYXZGb3IgKSB7XG5cbiAgICAgICAgICAgIG5hdlRhcmdldCA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBuYXZUYXJnZXQuc2xpY2soJ2dldFNsaWNrJyk7XG5cbiAgICAgICAgICAgIGlmICggbmF2VGFyZ2V0LnNsaWRlQ291bnQgPD0gbmF2VGFyZ2V0Lm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgICAgIG5hdlRhcmdldC5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGVPdXQob2xkU2xpZGUpO1xuXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUodGFyZ2V0TGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zdGFydExvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuaGlkZSgpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZURpcmVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciB4RGlzdCwgeURpc3QsIHIsIHN3aXBlQW5nbGUsIF8gPSB0aGlzO1xuXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XG4gICAgICAgIHlEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFkgLSBfLnRvdWNoT2JqZWN0LmN1clk7XG4gICAgICAgIHIgPSBNYXRoLmF0YW4yKHlEaXN0LCB4RGlzdCk7XG5cbiAgICAgICAgc3dpcGVBbmdsZSA9IE1hdGgucm91bmQociAqIDE4MCAvIE1hdGguUEkpO1xuICAgICAgICBpZiAoc3dpcGVBbmdsZSA8IDApIHtcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdyaWdodCcgOiAnbGVmdCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMzUpICYmIChzd2lwZUFuZ2xlIDw9IDEzNSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2Rvd24nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVDb3VudCxcbiAgICAgICAgICAgIGRpcmVjdGlvbjtcblxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgIF8uc3dpcGluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLnNjcm9sbGluZykge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgXy5zaG91bGRDbGljayA9ICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDEwICkgPyBmYWxzZSA6IHRydWU7XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmN1clggPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2VkZ2UnLCBbXywgXy5zd2lwZURpcmVjdGlvbigpIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID49IF8udG91Y2hPYmplY3QubWluU3dpcGUgKSB7XG5cbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICAgICAgc3dpdGNoICggZGlyZWN0aW9uICkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZG93bic6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBjYXNlICd1cCc6XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVDb3VudCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMTtcblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG5cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiggZGlyZWN0aW9uICE9ICd2ZXJ0aWNhbCcgKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVDb3VudCApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc3dpcGUnLCBbXywgZGlyZWN0aW9uIF0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAhPT0gXy50b3VjaE9iamVjdC5jdXJYICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIF8uY3VycmVudFNsaWRlICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoKF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpIHx8ICgnb250b3VjaGVuZCcgaW4gZG9jdW1lbnQgJiYgXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMubGVuZ3RoIDogMTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0V2lkdGggLyBfLm9wdGlvbnNcbiAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdEhlaWdodCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcblxuICAgICAgICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVTdGFydChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVNb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlRW5kKGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgZWRnZVdhc0hpdCA9IGZhbHNlLFxuICAgICAgICAgICAgY3VyTGVmdCwgc3dpcGVEaXJlY3Rpb24sIHN3aXBlTGVuZ3RoLCBwb3NpdGlvbk9mZnNldCwgdG91Y2hlcywgdmVydGljYWxTd2lwZUxlbmd0aDtcblxuICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkID8gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzIDogbnVsbDtcblxuICAgICAgICBpZiAoIV8uZHJhZ2dpbmcgfHwgXy5zY3JvbGxpbmcgfHwgdG91Y2hlcyAmJiB0b3VjaGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VyTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWCAtIF8udG91Y2hPYmplY3Quc3RhcnRYLCAyKSkpO1xuXG4gICAgICAgIHZlcnRpY2FsU3dpcGVMZW5ndGggPSBNYXRoLnJvdW5kKE1hdGguc3FydChcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWSAtIF8udG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xuXG4gICAgICAgIGlmICghXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyAmJiAhXy5zd2lwaW5nICYmIHZlcnRpY2FsU3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IHZlcnRpY2FsU3dpcGVMZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBzd2lwZURpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiA0KSB7XG4gICAgICAgICAgICBfLnN3aXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gMSA6IC0xKSAqIChfLnRvdWNoT2JqZWN0LmN1clggPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbk9mZnNldCA9IF8udG91Y2hPYmplY3QuY3VyWSA+IF8udG91Y2hPYmplY3Quc3RhcnRZID8gMSA6IC0xO1xuICAgICAgICB9XG5cblxuICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICgoXy5jdXJyZW50U2xpZGUgPT09IDAgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdyaWdodCcpIHx8IChfLmN1cnJlbnRTbGlkZSA+PSBfLmdldERvdENvdW50KCkgJiYgc3dpcGVEaXJlY3Rpb24gPT09ICdsZWZ0JykpIHtcbiAgICAgICAgICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggKiBfLm9wdGlvbnMuZWRnZUZyaWN0aW9uO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIChzd2lwZUxlbmd0aCAqIChfLiRsaXN0LmhlaWdodCgpIC8gXy5saXN0V2lkdGgpKSAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlIHx8IF8ub3B0aW9ucy50b3VjaE1vdmUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2V0Q1NTKF8uc3dpcGVMZWZ0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdG91Y2hlcztcblxuICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCAhPT0gMSB8fCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRYID0gXy50b3VjaE9iamVjdC5jdXJYID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIF8udG91Y2hPYmplY3Quc3RhcnRZID0gXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlcy5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuZmlsdGVyU2xpZGVzID0gU2xpY2sucHJvdG90eXBlLnNsaWNrVW5maWx0ZXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJHNsaWRlc0NhY2hlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG5cbiAgICAgICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMpIHtcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kcHJldkFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJG5leHRBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICAgICAgICAgIC5jc3MoJ3dpZHRoJywgJycpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bnNsaWNrID0gZnVuY3Rpb24oZnJvbUJyZWFrcG9pbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCd1bnNsaWNrJywgW18sIGZyb21CcmVha3BvaW50XSk7XG4gICAgICAgIF8uZGVzdHJveSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmXG4gICAgICAgICAgICBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmXG4gICAgICAgICAgICAhXy5vcHRpb25zLmluZmluaXRlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gMSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZURvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmVuZCgpO1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAuZXEoTWF0aC5mbG9vcihfLmN1cnJlbnRTbGlkZSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnZpc2liaWxpdHkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIGlmICggZG9jdW1lbnRbXy5oaWRkZW5dICkge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJC5mbi5zbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBvcHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgICAgICBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGwgPSBfLmxlbmd0aCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICByZXQ7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHQgPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgX1tpXS5zbGljayA9IG5ldyBTbGljayhfW2ldLCBvcHQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldCA9IF9baV0uc2xpY2tbb3B0XS5hcHBseShfW2ldLnNsaWNrLCBhcmdzKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ICE9ICd1bmRlZmluZWQnKSByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfO1xuICAgIH07XG5cbn0pKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJCgnLmMtYWNjb3JkaW9uLS1leHBhbmQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICQoJy5jLWFjY29yZGlvbl9fYnRuJykuaHRtbCgnPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG91YmxlLWRvd24gZmEteHNcIj48L2k+PC9zcGFuPicpXG4gICQoJy5jLWFjY29yZGlvbl9fYm9keTp2aXNpYmxlJykuc2xpZGVVcCgpXG4gIGlmICghJCh0aGlzKS5uZXh0KCkuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAkKHRoaXMpLm5leHQoKS5zbGlkZURvd24oMjAwKVxuICAgICQodGhpcykuZmluZCgnLmMtYWNjb3JkaW9uX19idG4nKS5odG1sKCc8c3Bhbj48aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3VibGUtdXAgZmEteHNcIj48L2k+PC9zcGFuPicpXG4gIH1cbn0pXG4iLCIvLyBucG0gaW5zdGFsbCBhb3MgLS1zYXZlXG5pbXBvcnQgQU9TIGZyb20gJ2FvcydcblxuLy8gWW91IGNhbiBhbHNvIHBhc3MgYW4gb3B0aW9uYWwgc2V0dGluZ3Mgb2JqZWN0XG4vLyBiZWxvdyBsaXN0ZWQgZGVmYXVsdCBzZXR0aW5nc1xuQU9TLmluaXQoe1xuICAvLyBHbG9iYWwgc2V0dGluZ3M6XG4gIGRpc2FibGU6IGZhbHNlLCAvLyBhY2NlcHRzIGZvbGxvd2luZyB2YWx1ZXM6ICdwaG9uZScsICd0YWJsZXQnLCAnbW9iaWxlJywgYm9vbGVhbiwgZXhwcmVzc2lvbiBvciBmdW5jdGlvblxuICBzdGFydEV2ZW50OiAnRE9NQ29udGVudExvYWRlZCcsIC8vIG5hbWUgb2YgdGhlIGV2ZW50IGRpc3BhdGNoZWQgb24gdGhlIGRvY3VtZW50LCB0aGF0IEFPUyBzaG91bGQgaW5pdGlhbGl6ZSBvblxuICBpbml0Q2xhc3NOYW1lOiAnYW9zLWluaXQnLCAvLyBjbGFzcyBhcHBsaWVkIGFmdGVyIGluaXRpYWxpemF0aW9uXG4gIGFuaW1hdGVkQ2xhc3NOYW1lOiAnYW9zLWFuaW1hdGUnLCAvLyBjbGFzcyBhcHBsaWVkIG9uIGFuaW1hdGlvblxuICB1c2VDbGFzc05hbWVzOiBmYWxzZSwgLy8gaWYgdHJ1ZSwgd2lsbCBhZGQgY29udGVudCBvZiBgZGF0YS1hb3NgIGFzIGNsYXNzZXMgb24gc2Nyb2xsXG4gIGRpc2FibGVNdXRhdGlvbk9ic2VydmVyOiBmYWxzZSwgLy8gZGlzYWJsZXMgYXV0b21hdGljIG11dGF0aW9ucycgZGV0ZWN0aW9ucyAoYWR2YW5jZWQpXG4gIGRlYm91bmNlRGVsYXk6IDUwLCAvLyB0aGUgZGVsYXkgb24gZGVib3VuY2UgdXNlZCB3aGlsZSByZXNpemluZyB3aW5kb3cgKGFkdmFuY2VkKVxuICB0aHJvdHRsZURlbGF5OiA5OSwgLy8gdGhlIGRlbGF5IG9uIHRocm90dGxlIHVzZWQgd2hpbGUgc2Nyb2xsaW5nIHRoZSBwYWdlIChhZHZhbmNlZClcblxuICAvLyBTZXR0aW5ncyB0aGF0IGNhbiBiZSBvdmVycmlkZGVuIG9uIHBlci1lbGVtZW50IGJhc2lzLCBieSBgZGF0YS1hb3MtKmAgYXR0cmlidXRlczpcbiAgb2Zmc2V0OiAxMjAsIC8vIG9mZnNldCAoaW4gcHgpIGZyb20gdGhlIG9yaWdpbmFsIHRyaWdnZXIgcG9pbnRcbiAgZGVsYXk6IDAsIC8vIHZhbHVlcyBmcm9tIDAgdG8gMzAwMCwgd2l0aCBzdGVwIDUwbXNcbiAgZHVyYXRpb246IDQwMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xuICBlYXNpbmc6ICdlYXNlJywgLy8gZGVmYXVsdCBlYXNpbmcgZm9yIEFPUyBhbmltYXRpb25zXG4gIG9uY2U6IGZhbHNlLCAvLyB3aGV0aGVyIGFuaW1hdGlvbiBzaG91bGQgaGFwcGVuIG9ubHkgb25jZSAtIHdoaWxlIHNjcm9sbGluZyBkb3duXG4gIG1pcnJvcjogZmFsc2UsIC8vIHdoZXRoZXIgZWxlbWVudHMgc2hvdWxkIGFuaW1hdGUgb3V0IHdoaWxlIHNjcm9sbGluZyBwYXN0IHRoZW1cbiAgYW5jaG9yUGxhY2VtZW50OiAndG9wLWJvdHRvbScgLy8gZGVmaW5lcyB3aGljaCBwb3NpdGlvbiBvZiB0aGUgZWxlbWVudCByZWdhcmRpbmcgdG8gd2luZG93IHNob3VsZCB0cmlnZ2VyIHRoZSBhbmltYXRpb25cblxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJChmdW5jdGlvbiAoKSB7XG4gIHZhciBpc09wZW4gPSAwXG4gICQoJy5vcGVuYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGlmIChpc09wZW4gPT09IDApIHtcbiAgICAgIG9wZW5OYXYoKVxuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZU5hdigpXG4gICAgfVxuICB9KVxuICAkKCcuY2xvc2VidG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VOYXYoKVxuICB9KVxuXG4gIGZ1bmN0aW9uIG9wZW5OYXYgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU5hdicpLnN0eWxlLndpZHRoID0gJzEwMCUnXG4gICAgaXNPcGVuID0gMVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VOYXYgKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU5hdicpLnN0eWxlLndpZHRoID0gJzAlJ1xuICAgIGlzT3BlbiA9IDBcbiAgfVxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdtb3VzZWVudGVyJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdvcGVuJylcbiAgY29uc29sZS5sb2coJ21vdXNlIGVudGVyJylcbn0pLm9uKCdtb3VzZWxlYXZlJywgJy5tZW51LWl0ZW0taGFzLWNoaWxkcmVuJywgKGUpID0+IHtcbiAgJChlLmN1cnJlbnRUYXJnZXQpLnJlbW92ZUNsYXNzKCdvcGVuJylcbn0pXG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignY2xpY2snLCAnLm1lbnUgLm1lbnUtYnV0dG9uJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgbGV0IG1lbnVfYnV0dG9uID0gJChlLmN1cnJlbnRUYXJnZXQpXG4gIGxldCBtZW51X2xpbmsgPSBtZW51X2J1dHRvbi5wYXJlbnQoKVxuICBsZXQgbWVudV9pdGVtID0gbWVudV9saW5rLnBhcmVudCgpXG4gIGlmIChtZW51X2l0ZW0uaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgIG1lbnVfaXRlbS5hZGQobWVudV9pdGVtLmZpbmQoJy5tZW51LWl0ZW0ub3BlbicpKS5yZW1vdmVDbGFzcygnb3BlbicpXG4gICAgbWVudV9saW5rLmFkZChtZW51X2l0ZW0uZmluZCgnYScpKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICB9IGVsc2Uge1xuICAgIG1lbnVfaXRlbS5zaWJsaW5ncygnLm9wZW4nKS5maW5kKCc+YT4ubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpXG4gICAgbWVudV9pdGVtLmFkZENsYXNzKCdvcGVuJylcbiAgICBtZW51X2xpbmsuYXR0cignYXJpYS1leHBhbmRlZCcsICd0cnVlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24tc2hvdycpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuICB9XG59KVxuXG4kKGRvY3VtZW50KS5jbGljaygoZSkgPT4ge1xuICBpZiAoJCgnLm1lbnUtaXRlbS5vcGVuJykubGVuZ3RoKSB7XG4gICAgJCgnLm1lbnUgPiAubWVudS1pdGVtLm9wZW4gPiBhID4gLm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuICB9XG59KSIsIlxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICQoJy5jLXNlYXJjaF9fYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICQoJy5jLWhlYWRlci1zZWFyY2gtZm9ybScpLnRvZ2dsZSgpXG4gIH0pXG59KVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCdcblxuJCgnLnNsaWRlci1kb3RzJykuc2xpY2soe1xuICBsYXp5TG9hZDogJ3Byb2dyZXNzaXZlJyxcbiAgaW5maW5pdGU6IHRydWUsXG4gIGRvdHM6IHRydWUsXG4gIGFycm93czogZmFsc2UsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBmYWRlOiB0cnVlLFxuICBzcGVlZDogMzAwMFxufSlcblxuJCgnLmMtc2xpZGVyLS1hcnJvd3MtaW5zaWRlJykuc2xpY2soe1xuICBpbmZpbml0ZTogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgZmFkZTogdHJ1ZSxcbiAgc3BlZWQ6IDEwMDAsXG4gIG5leHRBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stbmV4dC1pbnNpZGVcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYT4nLFxuICBwcmV2QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLXByZXYtaW5zaWRlXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2E+J1xufSlcblxuJCgnLmMtc2xpZGVyLS1hcnJvd3Mtb3V0c2lkZScpLnNsaWNrKHtcbiAgaW5maW5pdGU6IHRydWUsXG4gIGFycm93czogdHJ1ZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gIGZhZGU6IHRydWUsXG4gIHNwZWVkOiAxMDAwLFxuICBuZXh0QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYT4nLFxuICBwcmV2QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYT4nXG59KVxuXG4kKCcuYy1zbGlkZXItLW92ZXJmbG93Jykuc2xpY2soe1xuICBjZW50ZXJNb2RlOiB0cnVlLFxuICBjZW50ZXJQYWRkaW5nOiAnNjBweCcsXG4gIHNsaWRlc1RvU2hvdzogNCxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gIGFycm93czogZmFsc2UsXG4gIGRvdHM6IGZhbHNlLFxuICByZXNwb25zaXZlOiBbXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc2MHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA5NjAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNjBweCcsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgfVxuICAgIH0sXG4gICAgLy8ge1xuICAgIC8vICAgYnJlYWtwb2ludDogNzY4LFxuICAgIC8vICAgc2V0dGluZ3M6IHtcbiAgICAvLyAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAvLyAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAvLyAgICAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxuICAgIC8vICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAvLyAgIH1cbiAgICAvLyB9LFxuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDcwMCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICB9XG4gICAgfVxuICBdXG59KVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9oYW1idXJnZXItbmF2J1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uJ1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCdcbmltcG9ydCAnLi9jb21wb25lbnRzL2FvcydcbmltcG9ydCAnLi9jb21wb25lbnRzL2FjY29yZGlvbidcbmltcG9ydCAnLi9jb21wb25lbnRzL3NsaWRlcidcbmltcG9ydCAnLi9jb21wb25lbnRzL3NlYXJjaC1mb3JtJ1xuaW1wb3J0ICdqcXVlcnktY29uZmlybSdcbi8vIGltcG9ydCB3ZWJwYWNrU3RyZWFtIGZyb20gJ3dlYnBhY2stc3RyZWFtJ1xuXG4kKGRvY3VtZW50KS5yZWFkeSgoKSA9PiB7XG4gICQoJy5jLXBvc3RfX2dhbGxlcnknKS5zbGljayh7XG4gICAgYXJyb3dzOiBmYWxzZSxcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZVxuICB9KVxuXG4gICQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpXG4gIGlmICh3cC5jdXN0b21pemUgJiYgd3AuY3VzdG9taXplLnNlbGVjdGl2ZVJlZnJlc2gpIHtcbiAgICB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaC5iaW5kKFxuICAgICAgJ3BhcnRpYWwtY29udGVudC1yZW5kZXJlZCcsXG4gICAgICAocGxhY2VtZW50KSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzICYmXG4gICAgICAgICAgcGxhY2VtZW50LnBhcnRpYWwud2lkZ2V0SWRQYXJ0cy5pZEJhc2UgPT09XG4gICAgICAgICAgICAnX3RoZW1lbmFtZV9tb3N0X3JlY2VudF93aWRnZXQnXG4gICAgICAgICkge1xuICAgICAgICAgIHBsYWNlbWVudC5jb250YWluZXIuZmluZCgnLm1vc3RfcmVjZW50X3dpZGdldCcpLnNsaWNrKClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIClcbiAgfVxufSlcblxuJChmdW5jdGlvbiAoJCkge1xuICB2YXIgc2l0ZU5hdmlnYXRpb24gPSAkKCcubmF2aWdhdGlvbi1tYWluJylcblxuICBzaXRlTmF2aWdhdGlvbi5maW5kKCdhJykub24oJ2ZvY3VzIGJsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgJCh0aGlzKS5wYXJlbnRzKCdsaScpLnRvZ2dsZUNsYXNzKCdmb2N1cycpXG4gIH0pXG59KVxuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuLy8gICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCdob21lJykpIHtcbi8vICAgICAkLmNvbmZpcm0oe1xuLy8gICAgICAgdGl0bGU6ICdXb29Db21tZXJjZSBEZW1vIFN0b3JlIScsXG4vLyAgICAgICBjb250ZW50OlxuLy8gICAgICAgICAnVGhpcyBpcyBhIFdvcmRQcmVzcyBjdXN0b20gdGhlbWUgdXNpbmcgdGhlIFdvb2NvbW1lcmNlIHBsdWdpbiBmb3IgdGhlIHN0b3JlIGZlYXR1cmVzLiBDb250YWN0IFBhdWwgYXQgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnBhdWxicmlnaHRvbi5jb20vXCI+WVAgRGlnaXRhbDwvYT4gaWYgeW91IGxpa2Ugd2hhdCB5b3Ugc2VlIGFuZCBmb3IgYSBxdW90ZSBvbiB5b3VyIG5leHQgd2Vic2l0ZS4nLFxuLy8gICAgICAgdXNlQm9vdHN0cmFwOiBmYWxzZSxcbi8vICAgICAgIGF1dG9DbG9zZTogJ2Nsb3NlfDgwMDAnXG4vLyAgICAgfSlcbi8vICAgfVxuLy8gfSlcblxudmFyIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5jb25zb2xlLmxvZyhoKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==