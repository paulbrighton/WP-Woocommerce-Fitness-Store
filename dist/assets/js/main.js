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
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion__btn').text('+');
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.c-accordion__body:visible').slideUp();

  if (!jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().is(':visible')) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().slideDown(200);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.c-accordion__btn').text('-');
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

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/assets/js/main.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paulbrighton/Sites/yp-digital-framework-3.1/wp-content/themes/yp-digital-fw/src/assets/js/main.js */"./src/assets/js/main.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2suanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9hb3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vaGFtYnVyZ2VyLW5hdi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJvIiwibiIsImkiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJyIiwiYSIsInUiLCJzIiwiZiIsImQiLCJsIiwiYiIsInYiLCJ5IiwiZyIsImgiLCJ3IiwiayIsIngiLCJvZmZzZXQiLCJkZWxheSIsImVhc2luZyIsImR1cmF0aW9uIiwiZGlzYWJsZSIsIm9uY2UiLCJzdGFydEV2ZW50IiwidGhyb3R0bGVEZWxheSIsImRlYm91bmNlRGVsYXkiLCJkaXNhYmxlTXV0YXRpb25PYnNlcnZlciIsImoiLCJPIiwiTSIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiUyIsIm1vYmlsZSIsInBob25lIiwidGFibGV0IiwiXyIsImRvY3VtZW50IiwiYWxsIiwid2luZG93IiwiYXRvYiIsImlzU3VwcG9ydGVkIiwiY29uc29sZSIsImluZm8iLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVhZHkiLCJpbml0IiwicmVmcmVzaCIsInJlZnJlc2hIYXJkIiwiYXBwbHkiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiVHlwZUVycm9yIiwibGVhZGluZyIsIm1heFdhaXQiLCJ0cmFpbGluZyIsImNhbmNlbCIsImZsdXNoIiwidmFsdWVPZiIsInJlcGxhY2UiLCJ0ZXN0Iiwic2xpY2UiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiTmFOIiwicGFyc2VJbnQiLCJzZWxmIiwiRnVuY3Rpb24iLCJ0b1N0cmluZyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJEYXRlIiwibm93IiwiZGF0YXNldCIsImFvcyIsImNoaWxkcmVuIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRvY3VtZW50RWxlbWVudCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZW1vdmVkTm9kZXMiLCJBcnJheSIsImFkZGVkTm9kZXMiLCJjb25jYXQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJzdWJzdHIiLCJnZXRBdHRyaWJ1dGUiLCJwb3NpdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJhbmNob3IiLCJhbmNob3JQbGFjZW1lbnQiLCJpc05hTiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwidGFnTmFtZSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRQYXJlbnQiLCJsZWZ0IiwibWFwIiwiZmFjdG9yeSIsIiQiLCJTbGljayIsImluc3RhbmNlVWlkIiwiZWxlbWVudCIsInNldHRpbmdzIiwiZGF0YVNldHRpbmdzIiwiZGVmYXVsdHMiLCJhY2Nlc3NpYmlsaXR5IiwiYWRhcHRpdmVIZWlnaHQiLCJhcHBlbmRBcnJvd3MiLCJhcHBlbmREb3RzIiwiYXJyb3dzIiwiYXNOYXZGb3IiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImNzc0Vhc2UiLCJjdXN0b21QYWdpbmciLCJzbGlkZXIiLCJ0ZXh0IiwiZG90cyIsImRvdHNDbGFzcyIsImRyYWdnYWJsZSIsImVkZ2VGcmljdGlvbiIsImZhZGUiLCJmb2N1c09uU2VsZWN0IiwiZm9jdXNPbkNoYW5nZSIsImluZmluaXRlIiwiaW5pdGlhbFNsaWRlIiwibGF6eUxvYWQiLCJtb2JpbGVGaXJzdCIsInBhdXNlT25Ib3ZlciIsInBhdXNlT25Gb2N1cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJyZXNwb25kVG8iLCJyZXNwb25zaXZlIiwicm93cyIsInJ0bCIsInNsaWRlIiwic2xpZGVzUGVyUm93Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsInN3aXBlIiwic3dpcGVUb1NsaWRlIiwidG91Y2hNb3ZlIiwidG91Y2hUaHJlc2hvbGQiLCJ1c2VDU1MiLCJ1c2VUcmFuc2Zvcm0iLCJ2YXJpYWJsZVdpZHRoIiwidmVydGljYWwiLCJ2ZXJ0aWNhbFN3aXBpbmciLCJ3YWl0Rm9yQW5pbWF0ZSIsInpJbmRleCIsImluaXRpYWxzIiwiYW5pbWF0aW5nIiwiZHJhZ2dpbmciLCJhdXRvUGxheVRpbWVyIiwiY3VycmVudERpcmVjdGlvbiIsImN1cnJlbnRMZWZ0IiwiY3VycmVudFNsaWRlIiwiZGlyZWN0aW9uIiwiJGRvdHMiLCJsaXN0V2lkdGgiLCJsaXN0SGVpZ2h0IiwibG9hZEluZGV4IiwiJG5leHRBcnJvdyIsIiRwcmV2QXJyb3ciLCJzY3JvbGxpbmciLCJzbGlkZUNvdW50Iiwic2xpZGVXaWR0aCIsIiRzbGlkZVRyYWNrIiwiJHNsaWRlcyIsInNsaWRpbmciLCJzbGlkZU9mZnNldCIsInN3aXBlTGVmdCIsInN3aXBpbmciLCIkbGlzdCIsInRvdWNoT2JqZWN0IiwidHJhbnNmb3Jtc0VuYWJsZWQiLCJ1bnNsaWNrZWQiLCJleHRlbmQiLCJhY3RpdmVCcmVha3BvaW50IiwiYW5pbVR5cGUiLCJhbmltUHJvcCIsImJyZWFrcG9pbnRzIiwiYnJlYWtwb2ludFNldHRpbmdzIiwiY3NzVHJhbnNpdGlvbnMiLCJmb2N1c3NlZCIsImludGVycnVwdGVkIiwiaGlkZGVuIiwicGF1c2VkIiwicG9zaXRpb25Qcm9wIiwicm93Q291bnQiLCJzaG91bGRDbGljayIsIiRzbGlkZXIiLCIkc2xpZGVzQ2FjaGUiLCJ0cmFuc2Zvcm1UeXBlIiwidHJhbnNpdGlvblR5cGUiLCJ2aXNpYmlsaXR5Q2hhbmdlIiwid2luZG93V2lkdGgiLCJ3aW5kb3dUaW1lciIsImRhdGEiLCJvcHRpb25zIiwib3JpZ2luYWxTZXR0aW5ncyIsIm1vekhpZGRlbiIsIndlYmtpdEhpZGRlbiIsImF1dG9QbGF5IiwicHJveHkiLCJhdXRvUGxheUNsZWFyIiwiYXV0b1BsYXlJdGVyYXRvciIsImNoYW5nZVNsaWRlIiwiY2xpY2tIYW5kbGVyIiwic2VsZWN0SGFuZGxlciIsInNldFBvc2l0aW9uIiwic3dpcGVIYW5kbGVyIiwiZHJhZ0hhbmRsZXIiLCJrZXlIYW5kbGVyIiwiaHRtbEV4cHIiLCJyZWdpc3RlckJyZWFrcG9pbnRzIiwiYWN0aXZhdGVBREEiLCJmaW5kIiwiYXR0ciIsImFkZFNsaWRlIiwic2xpY2tBZGQiLCJtYXJrdXAiLCJpbmRleCIsImFkZEJlZm9yZSIsInVubG9hZCIsImFwcGVuZFRvIiwiaW5zZXJ0QmVmb3JlIiwiZXEiLCJpbnNlcnRBZnRlciIsInByZXBlbmRUbyIsImRldGFjaCIsImFwcGVuZCIsImVhY2giLCJyZWluaXQiLCJhbmltYXRlSGVpZ2h0IiwidGFyZ2V0SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJhbmltYXRlIiwiaGVpZ2h0IiwiYW5pbWF0ZVNsaWRlIiwidGFyZ2V0TGVmdCIsImNhbGxiYWNrIiwiYW5pbVByb3BzIiwiYW5pbVN0YXJ0Iiwic3RlcCIsImNlaWwiLCJjc3MiLCJjb21wbGV0ZSIsImFwcGx5VHJhbnNpdGlvbiIsImRpc2FibGVUcmFuc2l0aW9uIiwiZ2V0TmF2VGFyZ2V0Iiwibm90IiwidGFyZ2V0Iiwic2xpY2siLCJzbGlkZUhhbmRsZXIiLCJ0cmFuc2l0aW9uIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2xpZGVUbyIsImJ1aWxkQXJyb3dzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlbW92ZUF0dHIiLCJidWlsZERvdHMiLCJkb3QiLCJnZXREb3RDb3VudCIsImZpcnN0IiwiYnVpbGRPdXQiLCJ3cmFwQWxsIiwicGFyZW50Iiwid3JhcCIsInNldHVwSW5maW5pdGUiLCJ1cGRhdGVEb3RzIiwic2V0U2xpZGVDbGFzc2VzIiwiYnVpbGRSb3dzIiwibmV3U2xpZGVzIiwibnVtT2ZTbGlkZXMiLCJvcmlnaW5hbFNsaWRlcyIsInNsaWRlc1BlclNlY3Rpb24iLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY3JlYXRlRWxlbWVudCIsInJvdyIsImdldCIsImFwcGVuZENoaWxkIiwiZW1wdHkiLCJjaGVja1Jlc3BvbnNpdmUiLCJpbml0aWFsIiwiZm9yY2VVcGRhdGUiLCJicmVha3BvaW50IiwidGFyZ2V0QnJlYWtwb2ludCIsInJlc3BvbmRUb1dpZHRoIiwidHJpZ2dlckJyZWFrcG9pbnQiLCJzbGlkZXJXaWR0aCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInVuc2xpY2siLCJ0cmlnZ2VyIiwiZXZlbnQiLCJkb250QW5pbWF0ZSIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaW5kZXhPZmZzZXQiLCJ1bmV2ZW5PZmZzZXQiLCJpcyIsInByZXZlbnREZWZhdWx0IiwiY2xvc2VzdCIsIm1lc3NhZ2UiLCJjaGVja05hdmlnYWJsZSIsIm5hdmlnYWJsZXMiLCJwcmV2TmF2aWdhYmxlIiwiZ2V0TmF2aWdhYmxlSW5kZXhlcyIsImNsZWFuVXBFdmVudHMiLCJvZmYiLCJpbnRlcnJ1cHQiLCJ2aXNpYmlsaXR5IiwiY2xlYW5VcFNsaWRlRXZlbnRzIiwib3JpZW50YXRpb25DaGFuZ2UiLCJyZXNpemUiLCJjbGVhblVwUm93cyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInN0b3BQcm9wYWdhdGlvbiIsImRlc3Ryb3kiLCJmYWRlU2xpZGUiLCJzbGlkZUluZGV4Iiwib3BhY2l0eSIsImZhZGVTbGlkZU91dCIsImZpbHRlclNsaWRlcyIsInNsaWNrRmlsdGVyIiwiZmlsdGVyIiwiZm9jdXNIYW5kbGVyIiwib24iLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsIm91dGVyV2lkdGgiLCJnZXRPcHRpb24iLCJzbGlja0dldE9wdGlvbiIsIm9wdGlvbiIsImluZGV4ZXMiLCJwdXNoIiwiZ2V0U2xpY2siLCJnZXRTbGlkZUNvdW50Iiwic2xpZGVzVHJhdmVyc2VkIiwic3dpcGVkU2xpZGUiLCJjZW50ZXJPZmZzZXQiLCJhYnMiLCJnb1RvIiwic2xpY2tHb1RvIiwiY3JlYXRpb24iLCJoYXNDbGFzcyIsInNldFByb3BzIiwic3RhcnRMb2FkIiwibG9hZFNsaWRlciIsImluaXRpYWxpemVFdmVudHMiLCJ1cGRhdGVBcnJvd3MiLCJpbml0QURBIiwibnVtRG90R3JvdXBzIiwidGFiQ29udHJvbEluZGV4ZXMiLCJ2YWwiLCJzbGlkZUNvbnRyb2xJbmRleCIsImFyaWFCdXR0b25Db250cm9sIiwibWFwcGVkU2xpZGVJbmRleCIsImVuZCIsImluaXRBcnJvd0V2ZW50cyIsImluaXREb3RFdmVudHMiLCJpbml0U2xpZGVFdmVudHMiLCJhY3Rpb24iLCJpbml0VUkiLCJzaG93IiwibWF0Y2giLCJrZXlDb2RlIiwibG9hZFJhbmdlIiwiY2xvbmVSYW5nZSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImxvYWRJbWFnZXMiLCJpbWFnZXNTY29wZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVNyY1NldCIsImltYWdlU2l6ZXMiLCJpbWFnZVRvTG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJwcm9ncmVzc2l2ZUxhenlMb2FkIiwibmV4dCIsInNsaWNrTmV4dCIsInBhdXNlIiwic2xpY2tQYXVzZSIsInBsYXkiLCJzbGlja1BsYXkiLCJwb3N0U2xpZGUiLCIkY3VycmVudFNsaWRlIiwiZm9jdXMiLCJwcmV2Iiwic2xpY2tQcmV2IiwidHJ5Q291bnQiLCIkaW1nc1RvTG9hZCIsImluaXRpYWxpemluZyIsImxhc3RWaXNpYmxlSW5kZXgiLCJjdXJyZW50QnJlYWtwb2ludCIsInJlc3BvbnNpdmVTZXR0aW5ncyIsInR5cGUiLCJzcGxpY2UiLCJzb3J0Iiwid2luZG93RGVsYXkiLCJyZW1vdmVTbGlkZSIsInNsaWNrUmVtb3ZlIiwicmVtb3ZlQmVmb3JlIiwicmVtb3ZlQWxsIiwic2V0Q1NTIiwicG9zaXRpb25Qcm9wcyIsInNldERpbWVuc2lvbnMiLCJwYWRkaW5nIiwic2V0RmFkZSIsInJpZ2h0Iiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJpdGVtIiwib3B0IiwiYm9keVN0eWxlIiwiYm9keSIsInN0eWxlIiwiV2Via2l0VHJhbnNpdGlvbiIsInVuZGVmaW5lZCIsIk1velRyYW5zaXRpb24iLCJtc1RyYW5zaXRpb24iLCJPVHJhbnNmb3JtIiwicGVyc3BlY3RpdmVQcm9wZXJ0eSIsIndlYmtpdFBlcnNwZWN0aXZlIiwiTW96VHJhbnNmb3JtIiwiTW96UGVyc3BlY3RpdmUiLCJ3ZWJraXRUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsInRyYW5zZm9ybSIsImFsbFNsaWRlcyIsInJlbWFpbmRlciIsImV2ZW5Db2VmIiwiaW5maW5pdGVDb3VudCIsImNsb25lIiwidG9nZ2xlIiwidGFyZ2V0RWxlbWVudCIsInBhcmVudHMiLCJzeW5jIiwiYW5pbVNsaWRlIiwib2xkU2xpZGUiLCJzbGlkZUxlZnQiLCJuYXZUYXJnZXQiLCJoaWRlIiwic3dpcGVEaXJlY3Rpb24iLCJ4RGlzdCIsInlEaXN0Iiwic3dpcGVBbmdsZSIsInN0YXJ0WCIsImN1clgiLCJzdGFydFkiLCJjdXJZIiwiYXRhbjIiLCJyb3VuZCIsIlBJIiwic3dpcGVFbmQiLCJzd2lwZUxlbmd0aCIsImVkZ2VIaXQiLCJtaW5Td2lwZSIsImZpbmdlckNvdW50Iiwib3JpZ2luYWxFdmVudCIsInRvdWNoZXMiLCJzd2lwZVN0YXJ0Iiwic3dpcGVNb3ZlIiwiZWRnZVdhc0hpdCIsImN1ckxlZnQiLCJwb3NpdGlvbk9mZnNldCIsInZlcnRpY2FsU3dpcGVMZW5ndGgiLCJwYWdlWCIsImNsaWVudFgiLCJwYWdlWSIsImNsaWVudFkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJmbiIsImFyZ3MiLCJyZXQiLCJ3ZWJwYWNrUG9seWZpbGwiLCJkZXByZWNhdGUiLCJwYXRocyIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJBT1MiLCJpbml0Q2xhc3NOYW1lIiwiYW5pbWF0ZWRDbGFzc05hbWUiLCJ1c2VDbGFzc05hbWVzIiwibWlycm9yIiwiaXNPcGVuIiwiY2xpY2siLCJvcGVuTmF2IiwiY2xvc2VOYXYiLCJnZXRFbGVtZW50QnlJZCIsImxvZyIsIm1lbnVfYnV0dG9uIiwibWVudV9saW5rIiwibWVudV9pdGVtIiwic2libGluZ3MiLCJ3cCIsImN1c3RvbWl6ZSIsInNlbGVjdGl2ZVJlZnJlc2giLCJiaW5kIiwicGxhY2VtZW50IiwicGFydGlhbCIsIndpZGdldElkUGFydHMiLCJpZEJhc2UiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLENBQUMsVUFBU0EsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyw0Q0FBaUJDLE9BQWpCLE1BQTBCLDBDQUFpQkMsTUFBakIsRUFBMUIsR0FBa0RBLE1BQU0sQ0FBQ0QsT0FBUCxHQUFlRCxDQUFDLEVBQWxFLEdBQXFFLFFBQXNDRyxpQ0FBTyxFQUFELG9DQUFJSCxDQUFKO0FBQUE7QUFBQTtBQUFBLG9HQUE1QyxHQUFtRCxTQUF4SDtBQUEySyxDQUF6TCxDQUEwTCxJQUExTCxFQUErTCxZQUFVO0FBQUMsU0FBTyxVQUFTRCxDQUFULEVBQVc7QUFBQyxhQUFTQyxDQUFULENBQVdJLENBQVgsRUFBYTtBQUFDLFVBQUdDLENBQUMsQ0FBQ0QsQ0FBRCxDQUFKLEVBQVEsT0FBT0MsQ0FBQyxDQUFDRCxDQUFELENBQUQsQ0FBS0gsT0FBWjtBQUFvQixVQUFJSyxDQUFDLEdBQUNELENBQUMsQ0FBQ0QsQ0FBRCxDQUFELEdBQUs7QUFBQ0gsZUFBTyxFQUFDLEVBQVQ7QUFBWU0sVUFBRSxFQUFDSCxDQUFmO0FBQWlCSSxjQUFNLEVBQUMsQ0FBQztBQUF6QixPQUFYO0FBQXVDLGFBQU9ULENBQUMsQ0FBQ0ssQ0FBRCxDQUFELENBQUtLLElBQUwsQ0FBVUgsQ0FBQyxDQUFDTCxPQUFaLEVBQW9CSyxDQUFwQixFQUFzQkEsQ0FBQyxDQUFDTCxPQUF4QixFQUFnQ0QsQ0FBaEMsR0FBbUNNLENBQUMsQ0FBQ0UsTUFBRixHQUFTLENBQUMsQ0FBN0MsRUFBK0NGLENBQUMsQ0FBQ0wsT0FBeEQ7QUFBZ0U7O0FBQUEsUUFBSUksQ0FBQyxHQUFDLEVBQU47QUFBUyxXQUFPTCxDQUFDLENBQUNVLENBQUYsR0FBSVgsQ0FBSixFQUFNQyxDQUFDLENBQUNXLENBQUYsR0FBSU4sQ0FBVixFQUFZTCxDQUFDLENBQUNZLENBQUYsR0FBSSxPQUFoQixFQUF3QlosQ0FBQyxDQUFDLENBQUQsQ0FBaEM7QUFBb0MsR0FBMU0sQ0FBMk0sQ0FBQyxVQUFTRCxDQUFULEVBQVdDLENBQVgsRUFBYUssQ0FBYixFQUFlO0FBQUM7O0FBQWEsYUFBU0QsQ0FBVCxDQUFXTCxDQUFYLEVBQWE7QUFBQyxhQUFPQSxDQUFDLElBQUVBLENBQUMsQ0FBQ2MsVUFBTCxHQUFnQmQsQ0FBaEIsR0FBa0I7QUFBQyxtQkFBUUE7QUFBVCxPQUF6QjtBQUFxQzs7QUFBQSxRQUFJTyxDQUFDLEdBQUNRLE1BQU0sQ0FBQ0MsTUFBUCxJQUFlLFVBQVNoQixDQUFULEVBQVc7QUFBQyxXQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ2dCLFNBQVMsQ0FBQ0MsTUFBeEIsRUFBK0JqQixDQUFDLEVBQWhDLEVBQW1DO0FBQUMsWUFBSUssQ0FBQyxHQUFDVyxTQUFTLENBQUNoQixDQUFELENBQWY7O0FBQW1CLGFBQUksSUFBSUksQ0FBUixJQUFhQyxDQUFiO0FBQWVTLGdCQUFNLENBQUNJLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDVixJQUFoQyxDQUFxQ0osQ0FBckMsRUFBdUNELENBQXZDLE1BQTRDTCxDQUFDLENBQUNLLENBQUQsQ0FBRCxHQUFLQyxDQUFDLENBQUNELENBQUQsQ0FBbEQ7QUFBZjtBQUFzRTs7QUFBQSxhQUFPTCxDQUFQO0FBQVMsS0FBdks7QUFBQSxRQUF3S3FCLENBQUMsR0FBQ2YsQ0FBQyxDQUFDLENBQUQsQ0FBM0s7QUFBQSxRQUErS2dCLENBQUMsSUFBRWpCLENBQUMsQ0FBQ2dCLENBQUQsQ0FBRCxFQUFLZixDQUFDLENBQUMsQ0FBRCxDQUFSLENBQWhMO0FBQUEsUUFBNkxpQixDQUFDLEdBQUNsQixDQUFDLENBQUNpQixDQUFELENBQWhNO0FBQUEsUUFBb01WLENBQUMsR0FBQ04sQ0FBQyxDQUFDLENBQUQsQ0FBdk07QUFBQSxRQUEyTWtCLENBQUMsR0FBQ25CLENBQUMsQ0FBQ08sQ0FBRCxDQUE5TTtBQUFBLFFBQWtOYSxDQUFDLEdBQUNuQixDQUFDLENBQUMsQ0FBRCxDQUFyTjtBQUFBLFFBQXlOb0IsQ0FBQyxHQUFDckIsQ0FBQyxDQUFDb0IsQ0FBRCxDQUE1TjtBQUFBLFFBQWdPRSxDQUFDLEdBQUNyQixDQUFDLENBQUMsQ0FBRCxDQUFuTztBQUFBLFFBQXVPTyxDQUFDLEdBQUNSLENBQUMsQ0FBQ3NCLENBQUQsQ0FBMU87QUFBQSxRQUE4T2hCLENBQUMsR0FBQ0wsQ0FBQyxDQUFDLEVBQUQsQ0FBalA7QUFBQSxRQUFzUHNCLENBQUMsR0FBQ3ZCLENBQUMsQ0FBQ00sQ0FBRCxDQUF6UDtBQUFBLFFBQTZQa0IsQ0FBQyxHQUFDdkIsQ0FBQyxDQUFDLEVBQUQsQ0FBaFE7QUFBQSxRQUFxUXdCLENBQUMsR0FBQ3pCLENBQUMsQ0FBQ3dCLENBQUQsQ0FBeFE7QUFBQSxRQUE0UUUsQ0FBQyxHQUFDekIsQ0FBQyxDQUFDLEVBQUQsQ0FBL1E7QUFBQSxRQUFvUjBCLENBQUMsR0FBQzNCLENBQUMsQ0FBQzBCLENBQUQsQ0FBdlI7QUFBQSxRQUEyUkUsQ0FBQyxHQUFDLEVBQTdSO0FBQUEsUUFBZ1NDLENBQUMsR0FBQyxDQUFDLENBQW5TO0FBQUEsUUFBcVNDLENBQUMsR0FBQztBQUFDQyxZQUFNLEVBQUMsR0FBUjtBQUFZQyxXQUFLLEVBQUMsQ0FBbEI7QUFBb0JDLFlBQU0sRUFBQyxNQUEzQjtBQUFrQ0MsY0FBUSxFQUFDLEdBQTNDO0FBQStDQyxhQUFPLEVBQUMsQ0FBQyxDQUF4RDtBQUEwREMsVUFBSSxFQUFDLENBQUMsQ0FBaEU7QUFBa0VDLGdCQUFVLEVBQUMsa0JBQTdFO0FBQWdHQyxtQkFBYSxFQUFDLEVBQTlHO0FBQWlIQyxtQkFBYSxFQUFDLEVBQS9IO0FBQWtJQyw2QkFBdUIsRUFBQyxDQUFDO0FBQTNKLEtBQXZTO0FBQUEsUUFBcWNDLENBQUMsR0FBQyxTQUFGQSxDQUFFLEdBQVU7QUFBQyxVQUFJOUMsQ0FBQyxHQUFDaUIsU0FBUyxDQUFDQyxNQUFWLEdBQWlCLENBQWpCLElBQW9CLEtBQUssQ0FBTCxLQUFTRCxTQUFTLENBQUMsQ0FBRCxDQUF0QyxJQUEyQ0EsU0FBUyxDQUFDLENBQUQsQ0FBMUQ7QUFBOEQsVUFBR2pCLENBQUMsS0FBR2tDLENBQUMsR0FBQyxDQUFDLENBQU4sQ0FBRCxFQUFVQSxDQUFiLEVBQWUsT0FBT0QsQ0FBQyxHQUFDLENBQUMsR0FBRUgsQ0FBQyxXQUFKLEVBQWNHLENBQWQsRUFBZ0JFLENBQWhCLENBQUYsRUFBcUIsQ0FBQyxHQUFFUCxDQUFDLFdBQUosRUFBY0ssQ0FBZCxFQUFnQkUsQ0FBQyxDQUFDTSxJQUFsQixDQUFyQixFQUE2Q1IsQ0FBcEQ7QUFBc0QsS0FBcmxCO0FBQUEsUUFBc2xCYyxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxHQUFVO0FBQUNkLE9BQUMsR0FBQyxDQUFDLEdBQUVELENBQUMsV0FBSixHQUFGLEVBQWtCYyxDQUFDLEVBQW5CO0FBQXNCLEtBQXpuQjtBQUFBLFFBQTBuQkUsQ0FBQyxHQUFDLFNBQUZBLENBQUUsR0FBVTtBQUFDZixPQUFDLENBQUNnQixPQUFGLENBQVUsVUFBU2pELENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUNELFNBQUMsQ0FBQ2tELElBQUYsQ0FBT0MsZUFBUCxDQUF1QixVQUF2QixHQUFtQ25ELENBQUMsQ0FBQ2tELElBQUYsQ0FBT0MsZUFBUCxDQUF1QixpQkFBdkIsQ0FBbkMsRUFBNkVuRCxDQUFDLENBQUNrRCxJQUFGLENBQU9DLGVBQVAsQ0FBdUIsbUJBQXZCLENBQTdFLEVBQXlIbkQsQ0FBQyxDQUFDa0QsSUFBRixDQUFPQyxlQUFQLENBQXVCLGdCQUF2QixDQUF6SDtBQUFrSyxPQUExTDtBQUE0TCxLQUFuMEI7QUFBQSxRQUFvMEJDLENBQUMsR0FBQyxTQUFGQSxDQUFFLENBQVNwRCxDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLEtBQUcsQ0FBQyxDQUFMLElBQVEsYUFBV0EsQ0FBWCxJQUFjYSxDQUFDLFdBQUQsQ0FBVXdDLE1BQVYsRUFBdEIsSUFBMEMsWUFBVXJELENBQVYsSUFBYWEsQ0FBQyxXQUFELENBQVV5QyxLQUFWLEVBQXZELElBQTBFLGFBQVd0RCxDQUFYLElBQWNhLENBQUMsV0FBRCxDQUFVMEMsTUFBVixFQUF4RixJQUE0RyxjQUFZLE9BQU92RCxDQUFuQixJQUFzQkEsQ0FBQyxPQUFLLENBQUMsQ0FBaEo7QUFBa0osS0FBcCtCO0FBQUEsUUFBcStCd0QsQ0FBQyxHQUFDLFNBQUZBLENBQUUsQ0FBU3hELENBQVQsRUFBVztBQUFDbUMsT0FBQyxHQUFDNUIsQ0FBQyxDQUFDNEIsQ0FBRCxFQUFHbkMsQ0FBSCxDQUFILEVBQVNpQyxDQUFDLEdBQUMsQ0FBQyxHQUFFRCxDQUFDLFdBQUosR0FBWDtBQUEyQixVQUFJL0IsQ0FBQyxHQUFDd0QsUUFBUSxDQUFDQyxHQUFULElBQWMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUE1QjtBQUFpQyxhQUFPUixDQUFDLENBQUNqQixDQUFDLENBQUNLLE9BQUgsQ0FBRCxJQUFjdkMsQ0FBZCxHQUFnQitDLENBQUMsRUFBakIsSUFBcUJiLENBQUMsQ0FBQ1UsdUJBQUYsSUFBMkJuQixDQUFDLFdBQUQsQ0FBVW1DLFdBQVYsRUFBM0IsS0FBcURDLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLG1MQUFiLEdBQWtNNUIsQ0FBQyxDQUFDVSx1QkFBRixHQUEwQixDQUFDLENBQWxSLEdBQXFSWSxRQUFRLENBQUNPLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFlBQS9CLENBQTRDLGlCQUE1QyxFQUE4RDlCLENBQUMsQ0FBQ0csTUFBaEUsQ0FBclIsRUFBNlZtQixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFlBQS9CLENBQTRDLG1CQUE1QyxFQUFnRTlCLENBQUMsQ0FBQ0ksUUFBbEUsQ0FBN1YsRUFBeWFrQixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFlBQS9CLENBQTRDLGdCQUE1QyxFQUE2RDlCLENBQUMsQ0FBQ0UsS0FBL0QsQ0FBemEsRUFBK2UsdUJBQXFCRixDQUFDLENBQUNPLFVBQXZCLElBQW1DLENBQUMsVUFBRCxFQUFZLGFBQVosRUFBMkJ3QixPQUEzQixDQUFtQ1QsUUFBUSxDQUFDVSxVQUE1QyxJQUF3RCxDQUFDLENBQTVGLEdBQThGckIsQ0FBQyxDQUFDLENBQUMsQ0FBRixDQUEvRixHQUFvRyxXQUFTWCxDQUFDLENBQUNPLFVBQVgsR0FBc0JpQixNQUFNLENBQUNTLGdCQUFQLENBQXdCakMsQ0FBQyxDQUFDTyxVQUExQixFQUFxQyxZQUFVO0FBQUNJLFNBQUMsQ0FBQyxDQUFDLENBQUYsQ0FBRDtBQUFNLE9BQXRELENBQXRCLEdBQThFVyxRQUFRLENBQUNXLGdCQUFULENBQTBCakMsQ0FBQyxDQUFDTyxVQUE1QixFQUF1QyxZQUFVO0FBQUNJLFNBQUMsQ0FBQyxDQUFDLENBQUYsQ0FBRDtBQUFNLE9BQXhELENBQWpxQixFQUEydEJhLE1BQU0sQ0FBQ1MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBaUMsQ0FBQyxHQUFFNUMsQ0FBQyxXQUFKLEVBQWNzQixDQUFkLEVBQWdCWCxDQUFDLENBQUNTLGFBQWxCLEVBQWdDLENBQUMsQ0FBakMsQ0FBakMsQ0FBM3RCLEVBQWl5QmUsTUFBTSxDQUFDUyxnQkFBUCxDQUF3QixtQkFBeEIsRUFBNEMsQ0FBQyxHQUFFNUMsQ0FBQyxXQUFKLEVBQWNzQixDQUFkLEVBQWdCWCxDQUFDLENBQUNTLGFBQWxCLEVBQWdDLENBQUMsQ0FBakMsQ0FBNUMsQ0FBanlCLEVBQWszQmUsTUFBTSxDQUFDUyxnQkFBUCxDQUF3QixRQUF4QixFQUFpQyxDQUFDLEdBQUU3QyxDQUFDLFdBQUosRUFBYyxZQUFVO0FBQUMsU0FBQyxHQUFFSyxDQUFDLFdBQUosRUFBY0ssQ0FBZCxFQUFnQkUsQ0FBQyxDQUFDTSxJQUFsQjtBQUF3QixPQUFqRCxFQUFrRE4sQ0FBQyxDQUFDUSxhQUFwRCxDQUFqQyxDQUFsM0IsRUFBdTlCUixDQUFDLENBQUNVLHVCQUFGLElBQTJCbkIsQ0FBQyxXQUFELENBQVUyQyxLQUFWLENBQWdCLFlBQWhCLEVBQTZCdEIsQ0FBN0IsQ0FBbC9CLEVBQWtoQ2QsQ0FBdmlDLENBQVA7QUFBaWpDLEtBQWhtRTs7QUFBaW1FakMsS0FBQyxDQUFDRSxPQUFGLEdBQVU7QUFBQ29FLFVBQUksRUFBQ2QsQ0FBTjtBQUFRZSxhQUFPLEVBQUN6QixDQUFoQjtBQUFrQjBCLGlCQUFXLEVBQUN6QjtBQUE5QixLQUFWO0FBQTJDLEdBQTd0RSxFQUE4dEUsVUFBUy9DLENBQVQsRUFBV0MsQ0FBWCxFQUFhLENBQUUsQ0FBN3VFLE1BQWt2RSxVQUFTRCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLEtBQUMsVUFBU0EsQ0FBVCxFQUFXO0FBQUM7O0FBQWEsZUFBU0ssQ0FBVCxDQUFXTixDQUFYLEVBQWFDLENBQWIsRUFBZUssQ0FBZixFQUFpQjtBQUFDLGlCQUFTRCxDQUFULENBQVdKLENBQVgsRUFBYTtBQUFDLGNBQUlLLENBQUMsR0FBQ3NCLENBQU47QUFBQSxjQUFRdkIsQ0FBQyxHQUFDd0IsQ0FBVjtBQUFZLGlCQUFPRCxDQUFDLEdBQUNDLENBQUMsR0FBQyxLQUFLLENBQVQsRUFBV0ssQ0FBQyxHQUFDakMsQ0FBYixFQUFlOEIsQ0FBQyxHQUFDL0IsQ0FBQyxDQUFDeUUsS0FBRixDQUFRcEUsQ0FBUixFQUFVQyxDQUFWLENBQXhCO0FBQXFDOztBQUFBLGlCQUFTZSxDQUFULENBQVdyQixDQUFYLEVBQWE7QUFBQyxpQkFBT2tDLENBQUMsR0FBQ2xDLENBQUYsRUFBSWdDLENBQUMsR0FBQzBDLFVBQVUsQ0FBQ2pELENBQUQsRUFBR3hCLENBQUgsQ0FBaEIsRUFBc0IrQyxDQUFDLEdBQUMzQyxDQUFDLENBQUNMLENBQUQsQ0FBRixHQUFNK0IsQ0FBcEM7QUFBc0M7O0FBQUEsaUJBQVNULENBQVQsQ0FBV3RCLENBQVgsRUFBYTtBQUFDLGNBQUlNLENBQUMsR0FBQ04sQ0FBQyxHQUFDaUMsQ0FBUjtBQUFBLGNBQVU1QixDQUFDLEdBQUNMLENBQUMsR0FBQ2tDLENBQWQ7QUFBQSxjQUFnQjNCLENBQUMsR0FBQ04sQ0FBQyxHQUFDSyxDQUFwQjtBQUFzQixpQkFBTzhDLENBQUMsR0FBQ04sQ0FBQyxDQUFDdkMsQ0FBRCxFQUFHdUIsQ0FBQyxHQUFDekIsQ0FBTCxDQUFGLEdBQVVFLENBQWxCO0FBQW9COztBQUFBLGlCQUFTSyxDQUFULENBQVdaLENBQVgsRUFBYTtBQUFDLGNBQUlNLENBQUMsR0FBQ04sQ0FBQyxHQUFDaUMsQ0FBUjtBQUFBLGNBQVU1QixDQUFDLEdBQUNMLENBQUMsR0FBQ2tDLENBQWQ7QUFBZ0IsaUJBQU8sS0FBSyxDQUFMLEtBQVNELENBQVQsSUFBWTNCLENBQUMsSUFBRUwsQ0FBZixJQUFrQkssQ0FBQyxHQUFDLENBQXBCLElBQXVCOEMsQ0FBQyxJQUFFL0MsQ0FBQyxJQUFFeUIsQ0FBcEM7QUFBc0M7O0FBQUEsaUJBQVNMLENBQVQsR0FBWTtBQUFDLGNBQUl6QixDQUFDLEdBQUMrQyxDQUFDLEVBQVA7QUFBVSxpQkFBT25DLENBQUMsQ0FBQ1osQ0FBRCxDQUFELEdBQUswQixDQUFDLENBQUMxQixDQUFELENBQU4sR0FBVSxNQUFLZ0MsQ0FBQyxHQUFDMEMsVUFBVSxDQUFDakQsQ0FBRCxFQUFHSCxDQUFDLENBQUN0QixDQUFELENBQUosQ0FBakIsQ0FBakI7QUFBNEM7O0FBQUEsaUJBQVMwQixDQUFULENBQVcxQixDQUFYLEVBQWE7QUFBQyxpQkFBT2dDLENBQUMsR0FBQyxLQUFLLENBQVAsRUFBU3dCLENBQUMsSUFBRTVCLENBQUgsR0FBS3ZCLENBQUMsQ0FBQ0wsQ0FBRCxDQUFOLElBQVc0QixDQUFDLEdBQUNDLENBQUMsR0FBQyxLQUFLLENBQVQsRUFBV0UsQ0FBdEIsQ0FBaEI7QUFBeUM7O0FBQUEsaUJBQVNKLENBQVQsR0FBWTtBQUFDLGVBQUssQ0FBTCxLQUFTSyxDQUFULElBQVkyQyxZQUFZLENBQUMzQyxDQUFELENBQXhCLEVBQTRCRSxDQUFDLEdBQUMsQ0FBOUIsRUFBZ0NOLENBQUMsR0FBQ0ssQ0FBQyxHQUFDSixDQUFDLEdBQUNHLENBQUMsR0FBQyxLQUFLLENBQTdDO0FBQStDOztBQUFBLGlCQUFTbkIsQ0FBVCxHQUFZO0FBQUMsaUJBQU8sS0FBSyxDQUFMLEtBQVNtQixDQUFULEdBQVdELENBQVgsR0FBYUwsQ0FBQyxDQUFDcUIsQ0FBQyxFQUFGLENBQXJCO0FBQTJCOztBQUFBLGlCQUFTcEMsQ0FBVCxHQUFZO0FBQUMsY0FBSVgsQ0FBQyxHQUFDK0MsQ0FBQyxFQUFQO0FBQUEsY0FBVXpDLENBQUMsR0FBQ00sQ0FBQyxDQUFDWixDQUFELENBQWI7O0FBQWlCLGNBQUc0QixDQUFDLEdBQUNYLFNBQUYsRUFBWVksQ0FBQyxHQUFDLElBQWQsRUFBbUJJLENBQUMsR0FBQ2pDLENBQXJCLEVBQXVCTSxDQUExQixFQUE0QjtBQUFDLGdCQUFHLEtBQUssQ0FBTCxLQUFTMEIsQ0FBWixFQUFjLE9BQU9YLENBQUMsQ0FBQ1ksQ0FBRCxDQUFSO0FBQVksZ0JBQUdtQixDQUFILEVBQUssT0FBT3BCLENBQUMsR0FBQzBDLFVBQVUsQ0FBQ2pELENBQUQsRUFBR3hCLENBQUgsQ0FBWixFQUFrQkksQ0FBQyxDQUFDNEIsQ0FBRCxDQUExQjtBQUE4Qjs7QUFBQSxpQkFBTyxLQUFLLENBQUwsS0FBU0QsQ0FBVCxLQUFhQSxDQUFDLEdBQUMwQyxVQUFVLENBQUNqRCxDQUFELEVBQUd4QixDQUFILENBQXpCLEdBQWdDOEIsQ0FBdkM7QUFBeUM7O0FBQUEsWUFBSUgsQ0FBSjtBQUFBLFlBQU1DLENBQU47QUFBQSxZQUFRQyxDQUFSO0FBQUEsWUFBVUMsQ0FBVjtBQUFBLFlBQVlDLENBQVo7QUFBQSxZQUFjQyxDQUFkO0FBQUEsWUFBZ0JDLENBQUMsR0FBQyxDQUFsQjtBQUFBLFlBQW9CYyxDQUFDLEdBQUMsQ0FBQyxDQUF2QjtBQUFBLFlBQXlCSSxDQUFDLEdBQUMsQ0FBQyxDQUE1QjtBQUFBLFlBQThCSSxDQUFDLEdBQUMsQ0FBQyxDQUFqQzs7QUFBbUMsWUFBRyxjQUFZLE9BQU94RCxDQUF0QixFQUF3QixNQUFNLElBQUk0RSxTQUFKLENBQWNwRCxDQUFkLENBQU47QUFBdUIsZUFBT3ZCLENBQUMsR0FBQ3NCLENBQUMsQ0FBQ3RCLENBQUQsQ0FBRCxJQUFNLENBQVIsRUFBVU0sQ0FBQyxDQUFDRCxDQUFELENBQUQsS0FBTzBDLENBQUMsR0FBQyxDQUFDLENBQUMxQyxDQUFDLENBQUN1RSxPQUFOLEVBQWN6QixDQUFDLEdBQUMsYUFBWTlDLENBQTVCLEVBQThCd0IsQ0FBQyxHQUFDc0IsQ0FBQyxHQUFDakIsQ0FBQyxDQUFDWixDQUFDLENBQUNqQixDQUFDLENBQUN3RSxPQUFILENBQUQsSUFBYyxDQUFmLEVBQWlCN0UsQ0FBakIsQ0FBRixHQUFzQjZCLENBQXZELEVBQXlEMEIsQ0FBQyxHQUFDLGNBQWFsRCxDQUFiLEdBQWUsQ0FBQyxDQUFDQSxDQUFDLENBQUN5RSxRQUFuQixHQUE0QnZCLENBQTlGLENBQVYsRUFBMkc3QyxDQUFDLENBQUNxRSxNQUFGLEdBQVNyRCxDQUFwSCxFQUFzSGhCLENBQUMsQ0FBQ3NFLEtBQUYsR0FBUXBFLENBQTlILEVBQWdJRixDQUF2STtBQUF5STs7QUFBQSxlQUFTTixDQUFULENBQVdMLENBQVgsRUFBYUMsQ0FBYixFQUFlSSxDQUFmLEVBQWlCO0FBQUMsWUFBSWdCLENBQUMsR0FBQyxDQUFDLENBQVA7QUFBQSxZQUFTQyxDQUFDLEdBQUMsQ0FBQyxDQUFaO0FBQWMsWUFBRyxjQUFZLE9BQU90QixDQUF0QixFQUF3QixNQUFNLElBQUk0RSxTQUFKLENBQWNwRCxDQUFkLENBQU47QUFBdUIsZUFBT2pCLENBQUMsQ0FBQ0YsQ0FBRCxDQUFELEtBQU9nQixDQUFDLEdBQUMsYUFBWWhCLENBQVosR0FBYyxDQUFDLENBQUNBLENBQUMsQ0FBQ3dFLE9BQWxCLEdBQTBCeEQsQ0FBNUIsRUFBOEJDLENBQUMsR0FBQyxjQUFhakIsQ0FBYixHQUFlLENBQUMsQ0FBQ0EsQ0FBQyxDQUFDMEUsUUFBbkIsR0FBNEJ6RCxDQUFuRSxHQUFzRWhCLENBQUMsQ0FBQ04sQ0FBRCxFQUFHQyxDQUFILEVBQUs7QUFBQzRFLGlCQUFPLEVBQUN4RCxDQUFUO0FBQVd5RCxpQkFBTyxFQUFDN0UsQ0FBbkI7QUFBcUI4RSxrQkFBUSxFQUFDekQ7QUFBOUIsU0FBTCxDQUE5RTtBQUFxSDs7QUFBQSxlQUFTZixDQUFULENBQVdQLENBQVgsRUFBYTtBQUFDLFlBQUlDLENBQUMsR0FBQyxlQUFhLE9BQU9ELENBQXBCLEdBQXNCLFdBQXRCLEdBQWtDWSxDQUFDLENBQUNaLENBQUQsQ0FBekM7QUFBNkMsZUFBTSxDQUFDLENBQUNBLENBQUYsS0FBTSxZQUFVQyxDQUFWLElBQWEsY0FBWUEsQ0FBL0IsQ0FBTjtBQUF3Qzs7QUFBQSxlQUFTb0IsQ0FBVCxDQUFXckIsQ0FBWCxFQUFhO0FBQUMsZUFBTSxDQUFDLENBQUNBLENBQUYsSUFBSyxhQUFXLGVBQWEsT0FBT0EsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0NZLENBQUMsQ0FBQ1osQ0FBRCxDQUE5QyxDQUFYO0FBQThEOztBQUFBLGVBQVNzQixDQUFULENBQVd0QixDQUFYLEVBQWE7QUFBQyxlQUFNLGFBQVcsZUFBYSxPQUFPQSxDQUFwQixHQUFzQixXQUF0QixHQUFrQ1ksQ0FBQyxDQUFDWixDQUFELENBQTlDLEtBQW9EcUIsQ0FBQyxDQUFDckIsQ0FBRCxDQUFELElBQU1rQyxDQUFDLENBQUN4QixJQUFGLENBQU9WLENBQVAsS0FBVzBCLENBQTNFO0FBQTZFOztBQUFBLGVBQVNILENBQVQsQ0FBV3ZCLENBQVgsRUFBYTtBQUFDLFlBQUcsWUFBVSxPQUFPQSxDQUFwQixFQUFzQixPQUFPQSxDQUFQO0FBQVMsWUFBR3NCLENBQUMsQ0FBQ3RCLENBQUQsQ0FBSixFQUFRLE9BQU95QixDQUFQOztBQUFTLFlBQUdsQixDQUFDLENBQUNQLENBQUQsQ0FBSixFQUFRO0FBQUMsY0FBSUMsQ0FBQyxHQUFDLGNBQVksT0FBT0QsQ0FBQyxDQUFDa0YsT0FBckIsR0FBNkJsRixDQUFDLENBQUNrRixPQUFGLEVBQTdCLEdBQXlDbEYsQ0FBL0M7QUFBaURBLFdBQUMsR0FBQ08sQ0FBQyxDQUFDTixDQUFELENBQUQsR0FBS0EsQ0FBQyxHQUFDLEVBQVAsR0FBVUEsQ0FBWjtBQUFjOztBQUFBLFlBQUcsWUFBVSxPQUFPRCxDQUFwQixFQUFzQixPQUFPLE1BQUlBLENBQUosR0FBTUEsQ0FBTixHQUFRLENBQUNBLENBQWhCO0FBQWtCQSxTQUFDLEdBQUNBLENBQUMsQ0FBQ21GLE9BQUYsQ0FBVXhELENBQVYsRUFBWSxFQUFaLENBQUY7QUFBa0IsWUFBSXJCLENBQUMsR0FBQ0ssQ0FBQyxDQUFDeUUsSUFBRixDQUFPcEYsQ0FBUCxDQUFOO0FBQWdCLGVBQU9NLENBQUMsSUFBRXNCLENBQUMsQ0FBQ3dELElBQUYsQ0FBT3BGLENBQVAsQ0FBSCxHQUFhNkIsQ0FBQyxDQUFDN0IsQ0FBQyxDQUFDcUYsS0FBRixDQUFRLENBQVIsQ0FBRCxFQUFZL0UsQ0FBQyxHQUFDLENBQUQsR0FBRyxDQUFoQixDQUFkLEdBQWlDTyxDQUFDLENBQUN1RSxJQUFGLENBQU9wRixDQUFQLElBQVV5QixDQUFWLEdBQVksQ0FBQ3pCLENBQXJEO0FBQXVEOztBQUFBLFVBQUlZLENBQUMsR0FBQyxjQUFZLE9BQU8wRSxNQUFuQixJQUEyQixvQkFBaUJBLE1BQU0sQ0FBQ0MsUUFBeEIsQ0FBM0IsR0FBNEQsVUFBU3ZGLENBQVQsRUFBVztBQUFDLHVCQUFjQSxDQUFkO0FBQWdCLE9BQXhGLEdBQXlGLFVBQVNBLENBQVQsRUFBVztBQUFDLGVBQU9BLENBQUMsSUFBRSxjQUFZLE9BQU9zRixNQUF0QixJQUE4QnRGLENBQUMsQ0FBQ3dGLFdBQUYsS0FBZ0JGLE1BQTlDLElBQXNEdEYsQ0FBQyxLQUFHc0YsTUFBTSxDQUFDbkUsU0FBakUsR0FBMkUsUUFBM0UsV0FBMkZuQixDQUEzRixDQUFQO0FBQW9HLE9BQS9NO0FBQUEsVUFBZ053QixDQUFDLEdBQUMscUJBQWxOO0FBQUEsVUFBd09DLENBQUMsR0FBQ2dFLEdBQTFPO0FBQUEsVUFBOE8vRCxDQUFDLEdBQUMsaUJBQWhQO0FBQUEsVUFBa1FDLENBQUMsR0FBQyxZQUFwUTtBQUFBLFVBQWlSZCxDQUFDLEdBQUMsb0JBQW5SO0FBQUEsVUFBd1NGLENBQUMsR0FBQyxZQUExUztBQUFBLFVBQXVUaUIsQ0FBQyxHQUFDLGFBQXpUO0FBQUEsVUFBdVVDLENBQUMsR0FBQzZELFFBQXpVO0FBQUEsVUFBa1Y1RCxDQUFDLEdBQUMsYUFBVyxlQUFhLE9BQU83QixDQUFwQixHQUFzQixXQUF0QixHQUFrQ1csQ0FBQyxDQUFDWCxDQUFELENBQTlDLEtBQW9EQSxDQUFwRCxJQUF1REEsQ0FBQyxDQUFDYyxNQUFGLEtBQVdBLE1BQWxFLElBQTBFZCxDQUE5WjtBQUFBLFVBQWdhOEIsQ0FBQyxHQUFDLGFBQVcsZUFBYSxPQUFPNEQsSUFBcEIsR0FBeUIsV0FBekIsR0FBcUMvRSxDQUFDLENBQUMrRSxJQUFELENBQWpELEtBQTBEQSxJQUExRCxJQUFnRUEsSUFBSSxDQUFDNUUsTUFBTCxLQUFjQSxNQUE5RSxJQUFzRjRFLElBQXhmO0FBQUEsVUFBNmYzRCxDQUFDLEdBQUNGLENBQUMsSUFBRUMsQ0FBSCxJQUFNNkQsUUFBUSxDQUFDLGFBQUQsQ0FBUixFQUFyZ0I7QUFBQSxVQUEraEIzRCxDQUFDLEdBQUNsQixNQUFNLENBQUNJLFNBQXhpQjtBQUFBLFVBQWtqQmUsQ0FBQyxHQUFDRCxDQUFDLENBQUM0RCxRQUF0akI7QUFBQSxVQUErakIxRCxDQUFDLEdBQUMyRCxJQUFJLENBQUNDLEdBQXRrQjtBQUFBLFVBQTBrQmpELENBQUMsR0FBQ2dELElBQUksQ0FBQ0UsR0FBamxCO0FBQUEsVUFBcWxCakQsQ0FBQyxHQUFDLFNBQUZBLENBQUUsR0FBVTtBQUFDLGVBQU9mLENBQUMsQ0FBQ2lFLElBQUYsQ0FBT0MsR0FBUCxFQUFQO0FBQW9CLE9BQXRuQjs7QUFBdW5CbEcsT0FBQyxDQUFDRSxPQUFGLEdBQVVHLENBQVY7QUFBWSxLQUE3c0UsRUFBK3NFSyxJQUEvc0UsQ0FBb3RFVCxDQUFwdEUsRUFBc3RFLFlBQVU7QUFBQyxhQUFPLElBQVA7QUFBWSxLQUF2QixFQUF0dEU7QUFBaXZFLEdBQWovSSxFQUFrL0ksVUFBU0QsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxLQUFDLFVBQVNBLENBQVQsRUFBVztBQUFDOztBQUFhLGVBQVNLLENBQVQsQ0FBV04sQ0FBWCxFQUFhQyxDQUFiLEVBQWVLLENBQWYsRUFBaUI7QUFBQyxpQkFBU0MsQ0FBVCxDQUFXTixDQUFYLEVBQWE7QUFBQyxjQUFJSyxDQUFDLEdBQUNzQixDQUFOO0FBQUEsY0FBUXZCLENBQUMsR0FBQ3dCLENBQVY7QUFBWSxpQkFBT0QsQ0FBQyxHQUFDQyxDQUFDLEdBQUMsS0FBSyxDQUFULEVBQVdrQixDQUFDLEdBQUM5QyxDQUFiLEVBQWU4QixDQUFDLEdBQUMvQixDQUFDLENBQUN5RSxLQUFGLENBQVFwRSxDQUFSLEVBQVVDLENBQVYsQ0FBeEI7QUFBcUM7O0FBQUEsaUJBQVNlLENBQVQsQ0FBV3JCLENBQVgsRUFBYTtBQUFDLGlCQUFPK0MsQ0FBQyxHQUFDL0MsQ0FBRixFQUFJZ0MsQ0FBQyxHQUFDMEMsVUFBVSxDQUFDakQsQ0FBRCxFQUFHeEIsQ0FBSCxDQUFoQixFQUFzQitDLENBQUMsR0FBQ3pDLENBQUMsQ0FBQ1AsQ0FBRCxDQUFGLEdBQU0rQixDQUFwQztBQUFzQzs7QUFBQSxpQkFBU1IsQ0FBVCxDQUFXdkIsQ0FBWCxFQUFhO0FBQUMsY0FBSU0sQ0FBQyxHQUFDTixDQUFDLEdBQUNpQyxDQUFSO0FBQUEsY0FBVTVCLENBQUMsR0FBQ0wsQ0FBQyxHQUFDK0MsQ0FBZDtBQUFBLGNBQWdCeEMsQ0FBQyxHQUFDTixDQUFDLEdBQUNLLENBQXBCO0FBQXNCLGlCQUFPOEMsQ0FBQyxHQUFDakIsQ0FBQyxDQUFDNUIsQ0FBRCxFQUFHdUIsQ0FBQyxHQUFDekIsQ0FBTCxDQUFGLEdBQVVFLENBQWxCO0FBQW9COztBQUFBLGlCQUFTaUIsQ0FBVCxDQUFXeEIsQ0FBWCxFQUFhO0FBQUMsY0FBSU0sQ0FBQyxHQUFDTixDQUFDLEdBQUNpQyxDQUFSO0FBQUEsY0FBVTVCLENBQUMsR0FBQ0wsQ0FBQyxHQUFDK0MsQ0FBZDtBQUFnQixpQkFBTyxLQUFLLENBQUwsS0FBU2QsQ0FBVCxJQUFZM0IsQ0FBQyxJQUFFTCxDQUFmLElBQWtCSyxDQUFDLEdBQUMsQ0FBcEIsSUFBdUI4QyxDQUFDLElBQUUvQyxDQUFDLElBQUV5QixDQUFwQztBQUFzQzs7QUFBQSxpQkFBU0wsQ0FBVCxHQUFZO0FBQUMsY0FBSXpCLENBQUMsR0FBQzhDLENBQUMsRUFBUDtBQUFVLGlCQUFPdEIsQ0FBQyxDQUFDeEIsQ0FBRCxDQUFELEdBQUswQixDQUFDLENBQUMxQixDQUFELENBQU4sR0FBVSxNQUFLZ0MsQ0FBQyxHQUFDMEMsVUFBVSxDQUFDakQsQ0FBRCxFQUFHRixDQUFDLENBQUN2QixDQUFELENBQUosQ0FBakIsQ0FBakI7QUFBNEM7O0FBQUEsaUJBQVMwQixDQUFULENBQVcxQixDQUFYLEVBQWE7QUFBQyxpQkFBT2dDLENBQUMsR0FBQyxLQUFLLENBQVAsRUFBU3dCLENBQUMsSUFBRTVCLENBQUgsR0FBS3JCLENBQUMsQ0FBQ1AsQ0FBRCxDQUFOLElBQVc0QixDQUFDLEdBQUNDLENBQUMsR0FBQyxLQUFLLENBQVQsRUFBV0UsQ0FBdEIsQ0FBaEI7QUFBeUM7O0FBQUEsaUJBQVNKLENBQVQsR0FBWTtBQUFDLGVBQUssQ0FBTCxLQUFTSyxDQUFULElBQVkyQyxZQUFZLENBQUMzQyxDQUFELENBQXhCLEVBQTRCZSxDQUFDLEdBQUMsQ0FBOUIsRUFBZ0NuQixDQUFDLEdBQUNLLENBQUMsR0FBQ0osQ0FBQyxHQUFDRyxDQUFDLEdBQUMsS0FBSyxDQUE3QztBQUErQzs7QUFBQSxpQkFBU25CLENBQVQsR0FBWTtBQUFDLGlCQUFPLEtBQUssQ0FBTCxLQUFTbUIsQ0FBVCxHQUFXRCxDQUFYLEdBQWFMLENBQUMsQ0FBQ29CLENBQUMsRUFBRixDQUFyQjtBQUEyQjs7QUFBQSxpQkFBU25DLENBQVQsR0FBWTtBQUFDLGNBQUlYLENBQUMsR0FBQzhDLENBQUMsRUFBUDtBQUFBLGNBQVV4QyxDQUFDLEdBQUNrQixDQUFDLENBQUN4QixDQUFELENBQWI7O0FBQWlCLGNBQUc0QixDQUFDLEdBQUNYLFNBQUYsRUFBWVksQ0FBQyxHQUFDLElBQWQsRUFBbUJJLENBQUMsR0FBQ2pDLENBQXJCLEVBQXVCTSxDQUExQixFQUE0QjtBQUFDLGdCQUFHLEtBQUssQ0FBTCxLQUFTMEIsQ0FBWixFQUFjLE9BQU9YLENBQUMsQ0FBQ1ksQ0FBRCxDQUFSO0FBQVksZ0JBQUdtQixDQUFILEVBQUssT0FBT3BCLENBQUMsR0FBQzBDLFVBQVUsQ0FBQ2pELENBQUQsRUFBR3hCLENBQUgsQ0FBWixFQUFrQk0sQ0FBQyxDQUFDMEIsQ0FBRCxDQUExQjtBQUE4Qjs7QUFBQSxpQkFBTyxLQUFLLENBQUwsS0FBU0QsQ0FBVCxLQUFhQSxDQUFDLEdBQUMwQyxVQUFVLENBQUNqRCxDQUFELEVBQUd4QixDQUFILENBQXpCLEdBQWdDOEIsQ0FBdkM7QUFBeUM7O0FBQUEsWUFBSUgsQ0FBSjtBQUFBLFlBQU1DLENBQU47QUFBQSxZQUFRQyxDQUFSO0FBQUEsWUFBVUMsQ0FBVjtBQUFBLFlBQVlDLENBQVo7QUFBQSxZQUFjQyxDQUFkO0FBQUEsWUFBZ0JjLENBQUMsR0FBQyxDQUFsQjtBQUFBLFlBQW9CQyxDQUFDLEdBQUMsQ0FBQyxDQUF2QjtBQUFBLFlBQXlCSSxDQUFDLEdBQUMsQ0FBQyxDQUE1QjtBQUFBLFlBQThCSSxDQUFDLEdBQUMsQ0FBQyxDQUFqQzs7QUFBbUMsWUFBRyxjQUFZLE9BQU94RCxDQUF0QixFQUF3QixNQUFNLElBQUk0RSxTQUFKLENBQWNoRSxDQUFkLENBQU47QUFBdUIsZUFBT1gsQ0FBQyxHQUFDcUIsQ0FBQyxDQUFDckIsQ0FBRCxDQUFELElBQU0sQ0FBUixFQUFVSSxDQUFDLENBQUNDLENBQUQsQ0FBRCxLQUFPMEMsQ0FBQyxHQUFDLENBQUMsQ0FBQzFDLENBQUMsQ0FBQ3VFLE9BQU4sRUFBY3pCLENBQUMsR0FBQyxhQUFZOUMsQ0FBNUIsRUFBOEJ3QixDQUFDLEdBQUNzQixDQUFDLEdBQUNsQixDQUFDLENBQUNaLENBQUMsQ0FBQ2hCLENBQUMsQ0FBQ3dFLE9BQUgsQ0FBRCxJQUFjLENBQWYsRUFBaUI3RSxDQUFqQixDQUFGLEdBQXNCNkIsQ0FBdkQsRUFBeUQwQixDQUFDLEdBQUMsY0FBYWxELENBQWIsR0FBZSxDQUFDLENBQUNBLENBQUMsQ0FBQ3lFLFFBQW5CLEdBQTRCdkIsQ0FBOUYsQ0FBVixFQUEyRzdDLENBQUMsQ0FBQ3FFLE1BQUYsR0FBU3JELENBQXBILEVBQXNIaEIsQ0FBQyxDQUFDc0UsS0FBRixHQUFRcEUsQ0FBOUgsRUFBZ0lGLENBQXZJO0FBQXlJOztBQUFBLGVBQVNOLENBQVQsQ0FBV0wsQ0FBWCxFQUFhO0FBQUMsWUFBSUMsQ0FBQyxHQUFDLGVBQWEsT0FBT0QsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0N1QixDQUFDLENBQUN2QixDQUFELENBQXpDO0FBQTZDLGVBQU0sQ0FBQyxDQUFDQSxDQUFGLEtBQU0sWUFBVUMsQ0FBVixJQUFhLGNBQVlBLENBQS9CLENBQU47QUFBd0M7O0FBQUEsZUFBU00sQ0FBVCxDQUFXUCxDQUFYLEVBQWE7QUFBQyxlQUFNLENBQUMsQ0FBQ0EsQ0FBRixJQUFLLGFBQVcsZUFBYSxPQUFPQSxDQUFwQixHQUFzQixXQUF0QixHQUFrQ3VCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBOUMsQ0FBWDtBQUE4RDs7QUFBQSxlQUFTcUIsQ0FBVCxDQUFXckIsQ0FBWCxFQUFhO0FBQUMsZUFBTSxhQUFXLGVBQWEsT0FBT0EsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0N1QixDQUFDLENBQUN2QixDQUFELENBQTlDLEtBQW9ETyxDQUFDLENBQUNQLENBQUQsQ0FBRCxJQUFNaUMsQ0FBQyxDQUFDdkIsSUFBRixDQUFPVixDQUFQLEtBQVd5QixDQUEzRTtBQUE2RTs7QUFBQSxlQUFTSCxDQUFULENBQVd0QixDQUFYLEVBQWE7QUFBQyxZQUFHLFlBQVUsT0FBT0EsQ0FBcEIsRUFBc0IsT0FBT0EsQ0FBUDtBQUFTLFlBQUdxQixDQUFDLENBQUNyQixDQUFELENBQUosRUFBUSxPQUFPd0IsQ0FBUDs7QUFBUyxZQUFHbkIsQ0FBQyxDQUFDTCxDQUFELENBQUosRUFBUTtBQUFDLGNBQUlDLENBQUMsR0FBQyxjQUFZLE9BQU9ELENBQUMsQ0FBQ2tGLE9BQXJCLEdBQTZCbEYsQ0FBQyxDQUFDa0YsT0FBRixFQUE3QixHQUF5Q2xGLENBQS9DO0FBQWlEQSxXQUFDLEdBQUNLLENBQUMsQ0FBQ0osQ0FBRCxDQUFELEdBQUtBLENBQUMsR0FBQyxFQUFQLEdBQVVBLENBQVo7QUFBYzs7QUFBQSxZQUFHLFlBQVUsT0FBT0QsQ0FBcEIsRUFBc0IsT0FBTyxNQUFJQSxDQUFKLEdBQU1BLENBQU4sR0FBUSxDQUFDQSxDQUFoQjtBQUFrQkEsU0FBQyxHQUFDQSxDQUFDLENBQUNtRixPQUFGLENBQVV6RCxDQUFWLEVBQVksRUFBWixDQUFGO0FBQWtCLFlBQUlwQixDQUFDLEdBQUNPLENBQUMsQ0FBQ3VFLElBQUYsQ0FBT3BGLENBQVAsQ0FBTjtBQUFnQixlQUFPTSxDQUFDLElBQUVLLENBQUMsQ0FBQ3lFLElBQUYsQ0FBT3BGLENBQVAsQ0FBSCxHQUFhNEIsQ0FBQyxDQUFDNUIsQ0FBQyxDQUFDcUYsS0FBRixDQUFRLENBQVIsQ0FBRCxFQUFZL0UsQ0FBQyxHQUFDLENBQUQsR0FBRyxDQUFoQixDQUFkLEdBQWlDcUIsQ0FBQyxDQUFDeUQsSUFBRixDQUFPcEYsQ0FBUCxJQUFVd0IsQ0FBVixHQUFZLENBQUN4QixDQUFyRDtBQUF1RDs7QUFBQSxVQUFJdUIsQ0FBQyxHQUFDLGNBQVksT0FBTytELE1BQW5CLElBQTJCLG9CQUFpQkEsTUFBTSxDQUFDQyxRQUF4QixDQUEzQixHQUE0RCxVQUFTdkYsQ0FBVCxFQUFXO0FBQUMsdUJBQWNBLENBQWQ7QUFBZ0IsT0FBeEYsR0FBeUYsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsZUFBT0EsQ0FBQyxJQUFFLGNBQVksT0FBT3NGLE1BQXRCLElBQThCdEYsQ0FBQyxDQUFDd0YsV0FBRixLQUFnQkYsTUFBOUMsSUFBc0R0RixDQUFDLEtBQUdzRixNQUFNLENBQUNuRSxTQUFqRSxHQUEyRSxRQUEzRSxXQUEyRm5CLENBQTNGLENBQVA7QUFBb0csT0FBL007QUFBQSxVQUFnTlksQ0FBQyxHQUFDLHFCQUFsTjtBQUFBLFVBQXdPWSxDQUFDLEdBQUNpRSxHQUExTztBQUFBLFVBQThPaEUsQ0FBQyxHQUFDLGlCQUFoUDtBQUFBLFVBQWtRQyxDQUFDLEdBQUMsWUFBcFE7QUFBQSxVQUFpUkMsQ0FBQyxHQUFDLG9CQUFuUjtBQUFBLFVBQXdTZCxDQUFDLEdBQUMsWUFBMVM7QUFBQSxVQUF1VEYsQ0FBQyxHQUFDLGFBQXpUO0FBQUEsVUFBdVVpQixDQUFDLEdBQUM4RCxRQUF6VTtBQUFBLFVBQWtWN0QsQ0FBQyxHQUFDLGFBQVcsZUFBYSxPQUFPNUIsQ0FBcEIsR0FBc0IsV0FBdEIsR0FBa0NzQixDQUFDLENBQUN0QixDQUFELENBQTlDLEtBQW9EQSxDQUFwRCxJQUF1REEsQ0FBQyxDQUFDYyxNQUFGLEtBQVdBLE1BQWxFLElBQTBFZCxDQUE5WjtBQUFBLFVBQWdhNkIsQ0FBQyxHQUFDLGFBQVcsZUFBYSxPQUFPNkQsSUFBcEIsR0FBeUIsV0FBekIsR0FBcUNwRSxDQUFDLENBQUNvRSxJQUFELENBQWpELEtBQTBEQSxJQUExRCxJQUFnRUEsSUFBSSxDQUFDNUUsTUFBTCxLQUFjQSxNQUE5RSxJQUFzRjRFLElBQXhmO0FBQUEsVUFBNmY1RCxDQUFDLEdBQUNGLENBQUMsSUFBRUMsQ0FBSCxJQUFNOEQsUUFBUSxDQUFDLGFBQUQsQ0FBUixFQUFyZ0I7QUFBQSxVQUEraEI1RCxDQUFDLEdBQUNqQixNQUFNLENBQUNJLFNBQXhpQjtBQUFBLFVBQWtqQmMsQ0FBQyxHQUFDRCxDQUFDLENBQUM2RCxRQUF0akI7QUFBQSxVQUErakIzRCxDQUFDLEdBQUM0RCxJQUFJLENBQUNDLEdBQXRrQjtBQUFBLFVBQTBrQjVELENBQUMsR0FBQzJELElBQUksQ0FBQ0UsR0FBamxCO0FBQUEsVUFBcWxCbEQsQ0FBQyxHQUFDLFNBQUZBLENBQUUsR0FBVTtBQUFDLGVBQU9mLENBQUMsQ0FBQ2tFLElBQUYsQ0FBT0MsR0FBUCxFQUFQO0FBQW9CLE9BQXRuQjs7QUFBdW5CbEcsT0FBQyxDQUFDRSxPQUFGLEdBQVVJLENBQVY7QUFBWSxLQUF6Z0UsRUFBMmdFSSxJQUEzZ0UsQ0FBZ2hFVCxDQUFoaEUsRUFBa2hFLFlBQVU7QUFBQyxhQUFPLElBQVA7QUFBWSxLQUF2QixFQUFsaEU7QUFBNmlFLEdBQTdpTixFQUE4aU4sVUFBU0QsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQzs7QUFBYSxhQUFTSyxDQUFULENBQVdOLENBQVgsRUFBYTtBQUFDLFVBQUlDLENBQUMsR0FBQyxLQUFLLENBQVg7QUFBQSxVQUFhSSxDQUFDLEdBQUMsS0FBSyxDQUFwQjtBQUFBLFVBQXNCRSxDQUFDLEdBQUMsS0FBSyxDQUE3Qjs7QUFBK0IsV0FBSU4sQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDRCxDQUFDLENBQUNrQixNQUFaLEVBQW1CakIsQ0FBQyxJQUFFLENBQXRCLEVBQXdCO0FBQUMsWUFBR0ksQ0FBQyxHQUFDTCxDQUFDLENBQUNDLENBQUQsQ0FBSCxFQUFPSSxDQUFDLENBQUM4RixPQUFGLElBQVc5RixDQUFDLENBQUM4RixPQUFGLENBQVVDLEdBQS9CLEVBQW1DLE9BQU0sQ0FBQyxDQUFQO0FBQVMsWUFBRzdGLENBQUMsR0FBQ0YsQ0FBQyxDQUFDZ0csUUFBRixJQUFZL0YsQ0FBQyxDQUFDRCxDQUFDLENBQUNnRyxRQUFILENBQWxCLEVBQStCLE9BQU0sQ0FBQyxDQUFQO0FBQVM7O0FBQUEsYUFBTSxDQUFDLENBQVA7QUFBUzs7QUFBQSxhQUFTaEcsQ0FBVCxHQUFZO0FBQUMsYUFBT3NELE1BQU0sQ0FBQzJDLGdCQUFQLElBQXlCM0MsTUFBTSxDQUFDNEMsc0JBQWhDLElBQXdENUMsTUFBTSxDQUFDNkMsbUJBQXRFO0FBQTBGOztBQUFBLGFBQVNqRyxDQUFULEdBQVk7QUFBQyxhQUFNLENBQUMsQ0FBQ0YsQ0FBQyxFQUFUO0FBQVk7O0FBQUEsYUFBU2dCLENBQVQsQ0FBV3JCLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsVUFBSUssQ0FBQyxHQUFDcUQsTUFBTSxDQUFDRixRQUFiO0FBQUEsVUFBc0JsRCxDQUFDLEdBQUNGLENBQUMsRUFBekI7QUFBQSxVQUE0QmdCLENBQUMsR0FBQyxJQUFJZCxDQUFKLENBQU1lLENBQU4sQ0FBOUI7QUFBdUNDLE9BQUMsR0FBQ3RCLENBQUYsRUFBSW9CLENBQUMsQ0FBQ29GLE9BQUYsQ0FBVW5HLENBQUMsQ0FBQ29HLGVBQVosRUFBNEI7QUFBQ0MsaUJBQVMsRUFBQyxDQUFDLENBQVo7QUFBY0MsZUFBTyxFQUFDLENBQUMsQ0FBdkI7QUFBeUJDLG9CQUFZLEVBQUMsQ0FBQztBQUF2QyxPQUE1QixDQUFKO0FBQTJFOztBQUFBLGFBQVN2RixDQUFULENBQVd0QixDQUFYLEVBQWE7QUFBQ0EsT0FBQyxJQUFFQSxDQUFDLENBQUNpRCxPQUFGLENBQVUsVUFBU2pELENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQzZHLEtBQUssQ0FBQzNGLFNBQU4sQ0FBZ0JrRSxLQUFoQixDQUFzQjNFLElBQXRCLENBQTJCVixDQUFDLENBQUMrRyxVQUE3QixDQUFOO0FBQUEsWUFBK0MxRyxDQUFDLEdBQUN5RyxLQUFLLENBQUMzRixTQUFOLENBQWdCa0UsS0FBaEIsQ0FBc0IzRSxJQUF0QixDQUEyQlYsQ0FBQyxDQUFDNkcsWUFBN0IsQ0FBakQ7QUFBQSxZQUE0RnRHLENBQUMsR0FBQ04sQ0FBQyxDQUFDK0csTUFBRixDQUFTM0csQ0FBVCxDQUE5RjtBQUEwRyxZQUFHQyxDQUFDLENBQUNDLENBQUQsQ0FBSixFQUFRLE9BQU9nQixDQUFDLEVBQVI7QUFBVyxPQUFuSixDQUFIO0FBQXdKOztBQUFBUixVQUFNLENBQUNrRyxjQUFQLENBQXNCaEgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ2lILFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUkzRixDQUFDLEdBQUMsYUFBVSxDQUFFLENBQWxCOztBQUFtQnRCLEtBQUMsV0FBRCxHQUFVO0FBQUM0RCxpQkFBVyxFQUFDdEQsQ0FBYjtBQUFlOEQsV0FBSyxFQUFDaEQ7QUFBckIsS0FBVjtBQUFrQyxHQUExdk8sRUFBMnZPLFVBQVNyQixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDOztBQUFhLGFBQVNLLENBQVQsQ0FBV04sQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxVQUFHLEVBQUVELENBQUMsWUFBWUMsQ0FBZixDQUFILEVBQXFCLE1BQU0sSUFBSTJFLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQXlEOztBQUFBLGFBQVN2RSxDQUFULEdBQVk7QUFBQyxhQUFPOEcsU0FBUyxDQUFDQyxTQUFWLElBQXFCRCxTQUFTLENBQUNFLE1BQS9CLElBQXVDMUQsTUFBTSxDQUFDMkQsS0FBOUMsSUFBcUQsRUFBNUQ7QUFBK0Q7O0FBQUF2RyxVQUFNLENBQUNrRyxjQUFQLENBQXNCaEgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ2lILFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUkzRyxDQUFDLEdBQUMsWUFBVTtBQUFDLGVBQVNQLENBQVQsQ0FBV0EsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxhQUFJLElBQUlLLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0wsQ0FBQyxDQUFDaUIsTUFBaEIsRUFBdUJaLENBQUMsRUFBeEIsRUFBMkI7QUFBQyxjQUFJRCxDQUFDLEdBQUNKLENBQUMsQ0FBQ0ssQ0FBRCxDQUFQO0FBQVdELFdBQUMsQ0FBQ2tILFVBQUYsR0FBYWxILENBQUMsQ0FBQ2tILFVBQUYsSUFBYyxDQUFDLENBQTVCLEVBQThCbEgsQ0FBQyxDQUFDbUgsWUFBRixHQUFlLENBQUMsQ0FBOUMsRUFBZ0QsV0FBVW5ILENBQVYsS0FBY0EsQ0FBQyxDQUFDb0gsUUFBRixHQUFXLENBQUMsQ0FBMUIsQ0FBaEQsRUFBNkUxRyxNQUFNLENBQUNrRyxjQUFQLENBQXNCakgsQ0FBdEIsRUFBd0JLLENBQUMsQ0FBQ3FILEdBQTFCLEVBQThCckgsQ0FBOUIsQ0FBN0U7QUFBOEc7QUFBQzs7QUFBQSxhQUFPLFVBQVNKLENBQVQsRUFBV0ssQ0FBWCxFQUFhRCxDQUFiLEVBQWU7QUFBQyxlQUFPQyxDQUFDLElBQUVOLENBQUMsQ0FBQ0MsQ0FBQyxDQUFDa0IsU0FBSCxFQUFhYixDQUFiLENBQUosRUFBb0JELENBQUMsSUFBRUwsQ0FBQyxDQUFDQyxDQUFELEVBQUdJLENBQUgsQ0FBeEIsRUFBOEJKLENBQXJDO0FBQXVDLE9BQTlEO0FBQStELEtBQWhQLEVBQU47QUFBQSxRQUF5UG9CLENBQUMsR0FBQywwVEFBM1A7QUFBQSxRQUFzakJDLENBQUMsR0FBQyx5a0RBQXhqQjtBQUFBLFFBQWtvRUMsQ0FBQyxHQUFDLHFWQUFwb0U7QUFBQSxRQUEwOUVYLENBQUMsR0FBQyx5a0RBQTU5RTtBQUFBLFFBQXNpSVksQ0FBQyxHQUFDLFlBQVU7QUFBQyxlQUFTeEIsQ0FBVCxHQUFZO0FBQUNNLFNBQUMsQ0FBQyxJQUFELEVBQU1OLENBQU4sQ0FBRDtBQUFVOztBQUFBLGFBQU9PLENBQUMsQ0FBQ1AsQ0FBRCxFQUFHLENBQUM7QUFBQzBILFdBQUcsRUFBQyxPQUFMO0FBQWFSLGFBQUssRUFBQyxpQkFBVTtBQUFDLGNBQUlsSCxDQUFDLEdBQUNLLENBQUMsRUFBUDtBQUFVLGlCQUFNLEVBQUUsQ0FBQ2dCLENBQUMsQ0FBQytELElBQUYsQ0FBT3BGLENBQVAsQ0FBRCxJQUFZLENBQUNzQixDQUFDLENBQUM4RCxJQUFGLENBQU9wRixDQUFDLENBQUMySCxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBUCxDQUFmLENBQU47QUFBNEM7QUFBcEYsT0FBRCxFQUF1RjtBQUFDRCxXQUFHLEVBQUMsUUFBTDtBQUFjUixhQUFLLEVBQUMsaUJBQVU7QUFBQyxjQUFJbEgsQ0FBQyxHQUFDSyxDQUFDLEVBQVA7QUFBVSxpQkFBTSxFQUFFLENBQUNrQixDQUFDLENBQUM2RCxJQUFGLENBQU9wRixDQUFQLENBQUQsSUFBWSxDQUFDWSxDQUFDLENBQUN3RSxJQUFGLENBQU9wRixDQUFDLENBQUMySCxNQUFGLENBQVMsQ0FBVCxFQUFXLENBQVgsQ0FBUCxDQUFmLENBQU47QUFBNEM7QUFBckYsT0FBdkYsRUFBOEs7QUFBQ0QsV0FBRyxFQUFDLFFBQUw7QUFBY1IsYUFBSyxFQUFDLGlCQUFVO0FBQUMsaUJBQU8sS0FBSzdELE1BQUwsTUFBZSxDQUFDLEtBQUtDLEtBQUwsRUFBdkI7QUFBb0M7QUFBbkUsT0FBOUssQ0FBSCxDQUFELEVBQXlQdEQsQ0FBaFE7QUFBa1EsS0FBcFMsRUFBeGlJOztBQUErMElDLEtBQUMsV0FBRCxHQUFVLElBQUl1QixDQUFKLEVBQVY7QUFBZ0IsR0FBaDFYLEVBQWkxWCxVQUFTeEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQzs7QUFBYWMsVUFBTSxDQUFDa0csY0FBUCxDQUFzQmhILENBQXRCLEVBQXdCLFlBQXhCLEVBQXFDO0FBQUNpSCxXQUFLLEVBQUMsQ0FBQztBQUFSLEtBQXJDOztBQUFpRCxRQUFJNUcsQ0FBQyxHQUFDLFdBQVNOLENBQVQsRUFBV0MsQ0FBWCxFQUFhSyxFQUFiLEVBQWU7QUFBQyxVQUFJRCxDQUFDLEdBQUNMLENBQUMsQ0FBQ2tELElBQUYsQ0FBTzBFLFlBQVAsQ0FBb0IsZUFBcEIsQ0FBTjtBQUEyQzNILE9BQUMsR0FBQ0QsQ0FBQyxDQUFDNkgsUUFBSixHQUFhN0gsQ0FBQyxDQUFDa0QsSUFBRixDQUFPNEUsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsYUFBckIsQ0FBYixHQUFpRCxlQUFhLE9BQU8xSCxDQUFwQixLQUF3QixZQUFVQSxDQUFWLElBQWEsQ0FBQ0MsRUFBRCxJQUFJLFdBQVNELENBQWxELEtBQXNETCxDQUFDLENBQUNrRCxJQUFGLENBQU80RSxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixhQUF4QixDQUF2RztBQUE4SSxLQUEvTTtBQUFBLFFBQWdOM0gsQ0FBQyxHQUFDLFdBQVNMLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsVUFBSUksQ0FBQyxHQUFDc0QsTUFBTSxDQUFDc0UsV0FBYjtBQUFBLFVBQXlCMUgsQ0FBQyxHQUFDb0QsTUFBTSxDQUFDdUUsV0FBbEM7QUFBOENsSSxPQUFDLENBQUNpRCxPQUFGLENBQVUsVUFBU2pELENBQVQsRUFBV3FCLENBQVgsRUFBYTtBQUFDZixTQUFDLENBQUNOLENBQUQsRUFBR08sQ0FBQyxHQUFDRixDQUFMLEVBQU9KLENBQVAsQ0FBRDtBQUFXLE9BQW5DO0FBQXFDLEtBQW5UOztBQUFvVEEsS0FBQyxXQUFELEdBQVVJLENBQVY7QUFBWSxHQUE3dFksRUFBOHRZLFVBQVNMLENBQVQsRUFBV0MsQ0FBWCxFQUFhSyxDQUFiLEVBQWU7QUFBQzs7QUFBYSxhQUFTRCxDQUFULENBQVdMLENBQVgsRUFBYTtBQUFDLGFBQU9BLENBQUMsSUFBRUEsQ0FBQyxDQUFDYyxVQUFMLEdBQWdCZCxDQUFoQixHQUFrQjtBQUFDLG1CQUFRQTtBQUFULE9BQXpCO0FBQXFDOztBQUFBZSxVQUFNLENBQUNrRyxjQUFQLENBQXNCaEgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ2lILFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUkzRyxDQUFDLEdBQUNELENBQUMsQ0FBQyxFQUFELENBQVA7QUFBQSxRQUFZZSxDQUFDLEdBQUNoQixDQUFDLENBQUNFLENBQUQsQ0FBZjtBQUFBLFFBQW1CZSxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxDQUFTdEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxhQUFPRCxDQUFDLENBQUNpRCxPQUFGLENBQVUsVUFBU2pELENBQVQsRUFBV00sQ0FBWCxFQUFhO0FBQUNOLFNBQUMsQ0FBQ2tELElBQUYsQ0FBTzRFLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQXJCLEdBQWlDL0gsQ0FBQyxDQUFDNkgsUUFBRixHQUFXLENBQUMsR0FBRXhHLENBQUMsV0FBSixFQUFjckIsQ0FBQyxDQUFDa0QsSUFBaEIsRUFBcUJqRCxDQUFDLENBQUNtQyxNQUF2QixDQUE1QztBQUEyRSxPQUFuRyxHQUFxR3BDLENBQTVHO0FBQThHLEtBQWpKOztBQUFrSkMsS0FBQyxXQUFELEdBQVVxQixDQUFWO0FBQVksR0FBNy9ZLEVBQTgvWSxVQUFTdEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWFLLENBQWIsRUFBZTtBQUFDOztBQUFhLGFBQVNELENBQVQsQ0FBV0wsQ0FBWCxFQUFhO0FBQUMsYUFBT0EsQ0FBQyxJQUFFQSxDQUFDLENBQUNjLFVBQUwsR0FBZ0JkLENBQWhCLEdBQWtCO0FBQUMsbUJBQVFBO0FBQVQsT0FBekI7QUFBcUM7O0FBQUFlLFVBQU0sQ0FBQ2tHLGNBQVAsQ0FBc0JoSCxDQUF0QixFQUF3QixZQUF4QixFQUFxQztBQUFDaUgsV0FBSyxFQUFDLENBQUM7QUFBUixLQUFyQzs7QUFBaUQsUUFBSTNHLENBQUMsR0FBQ0QsQ0FBQyxDQUFDLEVBQUQsQ0FBUDtBQUFBLFFBQVllLENBQUMsR0FBQ2hCLENBQUMsQ0FBQ0UsQ0FBRCxDQUFmO0FBQUEsUUFBbUJlLENBQUMsR0FBQyxXQUFTdEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxVQUFJSyxDQUFDLEdBQUMsQ0FBTjtBQUFBLFVBQVFELENBQUMsR0FBQyxDQUFWO0FBQUEsVUFBWUUsQ0FBQyxHQUFDb0QsTUFBTSxDQUFDdUUsV0FBckI7QUFBQSxVQUFpQzVHLENBQUMsR0FBQztBQUFDYyxjQUFNLEVBQUNwQyxDQUFDLENBQUM0SCxZQUFGLENBQWUsaUJBQWYsQ0FBUjtBQUEwQ08sY0FBTSxFQUFDbkksQ0FBQyxDQUFDNEgsWUFBRixDQUFlLGlCQUFmLENBQWpEO0FBQW1GUSx1QkFBZSxFQUFDcEksQ0FBQyxDQUFDNEgsWUFBRixDQUFlLDJCQUFmO0FBQW5HLE9BQW5DOztBQUFtTCxjQUFPdEcsQ0FBQyxDQUFDYyxNQUFGLElBQVUsQ0FBQ2lHLEtBQUssQ0FBQy9HLENBQUMsQ0FBQ2MsTUFBSCxDQUFoQixLQUE2Qi9CLENBQUMsR0FBQ3FGLFFBQVEsQ0FBQ3BFLENBQUMsQ0FBQ2MsTUFBSCxDQUF2QyxHQUFtRGQsQ0FBQyxDQUFDNkcsTUFBRixJQUFVMUUsUUFBUSxDQUFDNkUsZ0JBQVQsQ0FBMEJoSCxDQUFDLENBQUM2RyxNQUE1QixDQUFWLEtBQWdEbkksQ0FBQyxHQUFDeUQsUUFBUSxDQUFDNkUsZ0JBQVQsQ0FBMEJoSCxDQUFDLENBQUM2RyxNQUE1QixFQUFvQyxDQUFwQyxDQUFsRCxDQUFuRCxFQUE2STdILENBQUMsR0FBQyxDQUFDLEdBQUVlLENBQUMsV0FBSixFQUFjckIsQ0FBZCxFQUFpQnVJLEdBQWhLLEVBQW9LakgsQ0FBQyxDQUFDOEcsZUFBN0s7QUFBOEwsYUFBSSxZQUFKO0FBQWlCOztBQUFNLGFBQUksZUFBSjtBQUFvQjlILFdBQUMsSUFBRU4sQ0FBQyxDQUFDd0ksWUFBRixHQUFlLENBQWxCO0FBQW9COztBQUFNLGFBQUksZUFBSjtBQUFvQmxJLFdBQUMsSUFBRU4sQ0FBQyxDQUFDd0ksWUFBTDtBQUFrQjs7QUFBTSxhQUFJLFlBQUo7QUFBaUJsSSxXQUFDLElBQUVDLENBQUMsR0FBQyxDQUFMO0FBQU87O0FBQU0sYUFBSSxlQUFKO0FBQW9CRCxXQUFDLElBQUVDLENBQUMsR0FBQyxDQUFGLEdBQUlQLENBQUMsQ0FBQ3dJLFlBQVQ7QUFBc0I7O0FBQU0sYUFBSSxlQUFKO0FBQW9CbEksV0FBQyxJQUFFQyxDQUFDLEdBQUMsQ0FBRixHQUFJUCxDQUFDLENBQUN3SSxZQUFGLEdBQWUsQ0FBdEI7QUFBd0I7O0FBQU0sYUFBSSxTQUFKO0FBQWNsSSxXQUFDLElBQUVDLENBQUg7QUFBSzs7QUFBTSxhQUFJLFlBQUo7QUFBaUJELFdBQUMsSUFBRU4sQ0FBQyxDQUFDd0ksWUFBRixHQUFlakksQ0FBbEI7QUFBb0I7O0FBQU0sYUFBSSxZQUFKO0FBQWlCRCxXQUFDLElBQUVOLENBQUMsQ0FBQ3dJLFlBQUYsR0FBZSxDQUFmLEdBQWlCakksQ0FBcEI7QUFBcGdCOztBQUEwaEIsYUFBT2UsQ0FBQyxDQUFDOEcsZUFBRixJQUFtQjlHLENBQUMsQ0FBQ2MsTUFBckIsSUFBNkJpRyxLQUFLLENBQUNwSSxDQUFELENBQWxDLEtBQXdDSSxDQUFDLEdBQUNKLENBQTFDLEdBQTZDSyxDQUFDLEdBQUNELENBQXREO0FBQXdELEtBQXh5Qjs7QUFBeXlCSixLQUFDLFdBQUQsR0FBVXFCLENBQVY7QUFBWSxHQUFwN2EsRUFBcTdhLFVBQVN0QixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDOztBQUFhYyxVQUFNLENBQUNrRyxjQUFQLENBQXNCaEgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ2lILFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUk1RyxDQUFDLEdBQUMsV0FBU04sQ0FBVCxFQUFXO0FBQUMsV0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBTixFQUFRSyxDQUFDLEdBQUMsQ0FBZCxFQUFnQk4sQ0FBQyxJQUFFLENBQUNxSSxLQUFLLENBQUNySSxDQUFDLENBQUN5SSxVQUFILENBQVQsSUFBeUIsQ0FBQ0osS0FBSyxDQUFDckksQ0FBQyxDQUFDMEksU0FBSCxDQUEvQztBQUE4RHpJLFNBQUMsSUFBRUQsQ0FBQyxDQUFDeUksVUFBRixJQUFjLFVBQVF6SSxDQUFDLENBQUMySSxPQUFWLEdBQWtCM0ksQ0FBQyxDQUFDNEksVUFBcEIsR0FBK0IsQ0FBN0MsQ0FBSCxFQUFtRHRJLENBQUMsSUFBRU4sQ0FBQyxDQUFDMEksU0FBRixJQUFhLFVBQVExSSxDQUFDLENBQUMySSxPQUFWLEdBQWtCM0ksQ0FBQyxDQUFDNkksU0FBcEIsR0FBOEIsQ0FBM0MsQ0FBdEQsRUFBb0c3SSxDQUFDLEdBQUNBLENBQUMsQ0FBQzhJLFlBQXhHO0FBQTlEOztBQUFtTCxhQUFNO0FBQUNQLFdBQUcsRUFBQ2pJLENBQUw7QUFBT3lJLFlBQUksRUFBQzlJO0FBQVosT0FBTjtBQUFxQixLQUExTjs7QUFBMk5BLEtBQUMsV0FBRCxHQUFVSyxDQUFWO0FBQVksR0FBeHViLEVBQXl1YixVQUFTTixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDOztBQUFhYyxVQUFNLENBQUNrRyxjQUFQLENBQXNCaEgsQ0FBdEIsRUFBd0IsWUFBeEIsRUFBcUM7QUFBQ2lILFdBQUssRUFBQyxDQUFDO0FBQVIsS0FBckM7O0FBQWlELFFBQUk1RyxDQUFDLEdBQUMsU0FBRkEsQ0FBRSxDQUFTTixDQUFULEVBQVc7QUFBQyxhQUFPQSxDQUFDLEdBQUNBLENBQUMsSUFBRXlELFFBQVEsQ0FBQzZFLGdCQUFULENBQTBCLFlBQTFCLENBQUwsRUFBNkN4QixLQUFLLENBQUMzRixTQUFOLENBQWdCNkgsR0FBaEIsQ0FBb0J0SSxJQUFwQixDQUF5QlYsQ0FBekIsRUFBMkIsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsZUFBTTtBQUFDa0QsY0FBSSxFQUFDbEQ7QUFBTixTQUFOO0FBQWUsT0FBdEQsQ0FBcEQ7QUFBNEcsS0FBOUg7O0FBQStIQyxLQUFDLFdBQUQsR0FBVUssQ0FBVjtBQUFZLEdBQWg4YixDQUEzTSxDQUFQO0FBQXFwYyxDQUEvMWMsQ0FBRCxDOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQUUsV0FBUzJJLE9BQVQsRUFBa0I7QUFDaEI7O0FBQ0EsTUFBSSxJQUFKLEVBQWdEO0FBQzVDN0kscUNBQU8sQ0FBQywyQ0FBRCxDQUFELG9DQUFhNkksT0FBYjtBQUFBO0FBQUE7QUFBQSxvR0FBTjtBQUNILEdBRkQsTUFFTyxFQUlOO0FBRUosQ0FWQyxFQVVBLFVBQVNDLENBQVQsRUFBWTtBQUNWOztBQUNBLE1BQUlDLEtBQUssR0FBR3hGLE1BQU0sQ0FBQ3dGLEtBQVAsSUFBZ0IsRUFBNUI7O0FBRUFBLE9BQUssR0FBSSxZQUFXO0FBRWhCLFFBQUlDLFdBQVcsR0FBRyxDQUFsQjs7QUFFQSxhQUFTRCxLQUFULENBQWVFLE9BQWYsRUFBd0JDLFFBQXhCLEVBQWtDO0FBRTlCLFVBQUk5RixDQUFDLEdBQUcsSUFBUjtBQUFBLFVBQWMrRixZQUFkOztBQUVBL0YsT0FBQyxDQUFDZ0csUUFBRixHQUFhO0FBQ1RDLHFCQUFhLEVBQUUsSUFETjtBQUVUQyxzQkFBYyxFQUFFLEtBRlA7QUFHVEMsb0JBQVksRUFBRVQsQ0FBQyxDQUFDRyxPQUFELENBSE47QUFJVE8sa0JBQVUsRUFBRVYsQ0FBQyxDQUFDRyxPQUFELENBSko7QUFLVFEsY0FBTSxFQUFFLElBTEM7QUFNVEMsZ0JBQVEsRUFBRSxJQU5EO0FBT1RDLGlCQUFTLEVBQUUsa0ZBUEY7QUFRVEMsaUJBQVMsRUFBRSwwRUFSRjtBQVNUQyxnQkFBUSxFQUFFLEtBVEQ7QUFVVEMscUJBQWEsRUFBRSxJQVZOO0FBV1RDLGtCQUFVLEVBQUUsS0FYSDtBQVlUQyxxQkFBYSxFQUFFLE1BWk47QUFhVEMsZUFBTyxFQUFFLE1BYkE7QUFjVEMsb0JBQVksRUFBRSxzQkFBU0MsTUFBVCxFQUFpQmhLLENBQWpCLEVBQW9CO0FBQzlCLGlCQUFPMkksQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJzQixJQUE5QixDQUFtQ2pLLENBQUMsR0FBRyxDQUF2QyxDQUFQO0FBQ0gsU0FoQlE7QUFpQlRrSyxZQUFJLEVBQUUsS0FqQkc7QUFrQlRDLGlCQUFTLEVBQUUsWUFsQkY7QUFtQlRDLGlCQUFTLEVBQUUsSUFuQkY7QUFvQlRySSxjQUFNLEVBQUUsUUFwQkM7QUFxQlRzSSxvQkFBWSxFQUFFLElBckJMO0FBc0JUQyxZQUFJLEVBQUUsS0F0Qkc7QUF1QlRDLHFCQUFhLEVBQUUsS0F2Qk47QUF3QlRDLHFCQUFhLEVBQUUsS0F4Qk47QUF5QlRDLGdCQUFRLEVBQUUsSUF6QkQ7QUEwQlRDLG9CQUFZLEVBQUUsQ0ExQkw7QUEyQlRDLGdCQUFRLEVBQUUsVUEzQkQ7QUE0QlRDLG1CQUFXLEVBQUUsS0E1Qko7QUE2QlRDLG9CQUFZLEVBQUUsSUE3Qkw7QUE4QlRDLG9CQUFZLEVBQUUsSUE5Qkw7QUErQlRDLHdCQUFnQixFQUFFLEtBL0JUO0FBZ0NUQyxpQkFBUyxFQUFFLFFBaENGO0FBaUNUQyxrQkFBVSxFQUFFLElBakNIO0FBa0NUQyxZQUFJLEVBQUUsQ0FsQ0c7QUFtQ1RDLFdBQUcsRUFBRSxLQW5DSTtBQW9DVEMsYUFBSyxFQUFFLEVBcENFO0FBcUNUQyxvQkFBWSxFQUFFLENBckNMO0FBc0NUQyxvQkFBWSxFQUFFLENBdENMO0FBdUNUQyxzQkFBYyxFQUFFLENBdkNQO0FBd0NUQyxhQUFLLEVBQUUsR0F4Q0U7QUF5Q1RDLGFBQUssRUFBRSxJQXpDRTtBQTBDVEMsb0JBQVksRUFBRSxLQTFDTDtBQTJDVEMsaUJBQVMsRUFBRSxJQTNDRjtBQTRDVEMsc0JBQWMsRUFBRSxDQTVDUDtBQTZDVEMsY0FBTSxFQUFFLElBN0NDO0FBOENUQyxvQkFBWSxFQUFFLElBOUNMO0FBK0NUQyxxQkFBYSxFQUFFLEtBL0NOO0FBZ0RUQyxnQkFBUSxFQUFFLEtBaEREO0FBaURUQyx1QkFBZSxFQUFFLEtBakRSO0FBa0RUQyxzQkFBYyxFQUFFLElBbERQO0FBbURUQyxjQUFNLEVBQUU7QUFuREMsT0FBYjtBQXNEQWxKLE9BQUMsQ0FBQ21KLFFBQUYsR0FBYTtBQUNUQyxpQkFBUyxFQUFFLEtBREY7QUFFVEMsZ0JBQVEsRUFBRSxLQUZEO0FBR1RDLHFCQUFhLEVBQUUsSUFITjtBQUlUQyx3QkFBZ0IsRUFBRSxDQUpUO0FBS1RDLG1CQUFXLEVBQUUsSUFMSjtBQU1UQyxvQkFBWSxFQUFFLENBTkw7QUFPVEMsaUJBQVMsRUFBRSxDQVBGO0FBUVRDLGFBQUssRUFBRSxJQVJFO0FBU1RDLGlCQUFTLEVBQUUsSUFURjtBQVVUQyxrQkFBVSxFQUFFLElBVkg7QUFXVEMsaUJBQVMsRUFBRSxDQVhGO0FBWVRDLGtCQUFVLEVBQUUsSUFaSDtBQWFUQyxrQkFBVSxFQUFFLElBYkg7QUFjVEMsaUJBQVMsRUFBRSxLQWRGO0FBZVRDLGtCQUFVLEVBQUUsSUFmSDtBQWdCVEMsa0JBQVUsRUFBRSxJQWhCSDtBQWlCVEMsbUJBQVcsRUFBRSxJQWpCSjtBQWtCVEMsZUFBTyxFQUFFLElBbEJBO0FBbUJUQyxlQUFPLEVBQUUsS0FuQkE7QUFvQlRDLG1CQUFXLEVBQUUsQ0FwQko7QUFxQlRDLGlCQUFTLEVBQUUsSUFyQkY7QUFzQlRDLGVBQU8sRUFBRSxLQXRCQTtBQXVCVEMsYUFBSyxFQUFFLElBdkJFO0FBd0JUQyxtQkFBVyxFQUFFLEVBeEJKO0FBeUJUQyx5QkFBaUIsRUFBRSxLQXpCVjtBQTBCVEMsaUJBQVMsRUFBRTtBQTFCRixPQUFiO0FBNkJBbkYsT0FBQyxDQUFDb0YsTUFBRixDQUFTOUssQ0FBVCxFQUFZQSxDQUFDLENBQUNtSixRQUFkO0FBRUFuSixPQUFDLENBQUMrSyxnQkFBRixHQUFxQixJQUFyQjtBQUNBL0ssT0FBQyxDQUFDZ0wsUUFBRixHQUFhLElBQWI7QUFDQWhMLE9BQUMsQ0FBQ2lMLFFBQUYsR0FBYSxJQUFiO0FBQ0FqTCxPQUFDLENBQUNrTCxXQUFGLEdBQWdCLEVBQWhCO0FBQ0FsTCxPQUFDLENBQUNtTCxrQkFBRixHQUF1QixFQUF2QjtBQUNBbkwsT0FBQyxDQUFDb0wsY0FBRixHQUFtQixLQUFuQjtBQUNBcEwsT0FBQyxDQUFDcUwsUUFBRixHQUFhLEtBQWI7QUFDQXJMLE9BQUMsQ0FBQ3NMLFdBQUYsR0FBZ0IsS0FBaEI7QUFDQXRMLE9BQUMsQ0FBQ3VMLE1BQUYsR0FBVyxRQUFYO0FBQ0F2TCxPQUFDLENBQUN3TCxNQUFGLEdBQVcsSUFBWDtBQUNBeEwsT0FBQyxDQUFDeUwsWUFBRixHQUFpQixJQUFqQjtBQUNBekwsT0FBQyxDQUFDK0gsU0FBRixHQUFjLElBQWQ7QUFDQS9ILE9BQUMsQ0FBQzBMLFFBQUYsR0FBYSxDQUFiO0FBQ0ExTCxPQUFDLENBQUMyTCxXQUFGLEdBQWdCLElBQWhCO0FBQ0EzTCxPQUFDLENBQUM0TCxPQUFGLEdBQVlsRyxDQUFDLENBQUNHLE9BQUQsQ0FBYjtBQUNBN0YsT0FBQyxDQUFDNkwsWUFBRixHQUFpQixJQUFqQjtBQUNBN0wsT0FBQyxDQUFDOEwsYUFBRixHQUFrQixJQUFsQjtBQUNBOUwsT0FBQyxDQUFDK0wsY0FBRixHQUFtQixJQUFuQjtBQUNBL0wsT0FBQyxDQUFDZ00sZ0JBQUYsR0FBcUIsa0JBQXJCO0FBQ0FoTSxPQUFDLENBQUNpTSxXQUFGLEdBQWdCLENBQWhCO0FBQ0FqTSxPQUFDLENBQUNrTSxXQUFGLEdBQWdCLElBQWhCO0FBRUFuRyxrQkFBWSxHQUFHTCxDQUFDLENBQUNHLE9BQUQsQ0FBRCxDQUFXc0csSUFBWCxDQUFnQixPQUFoQixLQUE0QixFQUEzQztBQUVBbk0sT0FBQyxDQUFDb00sT0FBRixHQUFZMUcsQ0FBQyxDQUFDb0YsTUFBRixDQUFTLEVBQVQsRUFBYTlLLENBQUMsQ0FBQ2dHLFFBQWYsRUFBeUJGLFFBQXpCLEVBQW1DQyxZQUFuQyxDQUFaO0FBRUEvRixPQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVM0UsWUFBM0I7QUFFQXpILE9BQUMsQ0FBQ3FNLGdCQUFGLEdBQXFCck0sQ0FBQyxDQUFDb00sT0FBdkI7O0FBRUEsVUFBSSxPQUFPbk0sUUFBUSxDQUFDcU0sU0FBaEIsS0FBOEIsV0FBbEMsRUFBK0M7QUFDM0N0TSxTQUFDLENBQUN1TCxNQUFGLEdBQVcsV0FBWDtBQUNBdkwsU0FBQyxDQUFDZ00sZ0JBQUYsR0FBcUIscUJBQXJCO0FBQ0gsT0FIRCxNQUdPLElBQUksT0FBTy9MLFFBQVEsQ0FBQ3NNLFlBQWhCLEtBQWlDLFdBQXJDLEVBQWtEO0FBQ3JEdk0sU0FBQyxDQUFDdUwsTUFBRixHQUFXLGNBQVg7QUFDQXZMLFNBQUMsQ0FBQ2dNLGdCQUFGLEdBQXFCLHdCQUFyQjtBQUNIOztBQUVEaE0sT0FBQyxDQUFDd00sUUFBRixHQUFhOUcsQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDd00sUUFBVixFQUFvQnhNLENBQXBCLENBQWI7QUFDQUEsT0FBQyxDQUFDME0sYUFBRixHQUFrQmhILENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQzBNLGFBQVYsRUFBeUIxTSxDQUF6QixDQUFsQjtBQUNBQSxPQUFDLENBQUMyTSxnQkFBRixHQUFxQmpILENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQzJNLGdCQUFWLEVBQTRCM00sQ0FBNUIsQ0FBckI7QUFDQUEsT0FBQyxDQUFDNE0sV0FBRixHQUFnQmxILENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQzRNLFdBQVYsRUFBdUI1TSxDQUF2QixDQUFoQjtBQUNBQSxPQUFDLENBQUM2TSxZQUFGLEdBQWlCbkgsQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDNk0sWUFBVixFQUF3QjdNLENBQXhCLENBQWpCO0FBQ0FBLE9BQUMsQ0FBQzhNLGFBQUYsR0FBa0JwSCxDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUM4TSxhQUFWLEVBQXlCOU0sQ0FBekIsQ0FBbEI7QUFDQUEsT0FBQyxDQUFDK00sV0FBRixHQUFnQnJILENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQytNLFdBQVYsRUFBdUIvTSxDQUF2QixDQUFoQjtBQUNBQSxPQUFDLENBQUNnTixZQUFGLEdBQWlCdEgsQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDZ04sWUFBVixFQUF3QmhOLENBQXhCLENBQWpCO0FBQ0FBLE9BQUMsQ0FBQ2lOLFdBQUYsR0FBZ0J2SCxDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUNpTixXQUFWLEVBQXVCak4sQ0FBdkIsQ0FBaEI7QUFDQUEsT0FBQyxDQUFDa04sVUFBRixHQUFleEgsQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDa04sVUFBVixFQUFzQmxOLENBQXRCLENBQWY7QUFFQUEsT0FBQyxDQUFDNEYsV0FBRixHQUFnQkEsV0FBVyxFQUEzQixDQTFJOEIsQ0E0STlCO0FBQ0E7QUFDQTs7QUFDQTVGLE9BQUMsQ0FBQ21OLFFBQUYsR0FBYSwyQkFBYjs7QUFHQW5OLE9BQUMsQ0FBQ29OLG1CQUFGOztBQUNBcE4sT0FBQyxDQUFDYyxJQUFGLENBQU8sSUFBUDtBQUVIOztBQUVELFdBQU82RSxLQUFQO0FBRUgsR0E3SlEsRUFBVDs7QUErSkFBLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0IwUCxXQUFoQixHQUE4QixZQUFXO0FBQ3JDLFFBQUlyTixDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDb0ssV0FBRixDQUFja0QsSUFBZCxDQUFtQixlQUFuQixFQUFvQ0MsSUFBcEMsQ0FBeUM7QUFDckMscUJBQWU7QUFEc0IsS0FBekMsRUFFR0QsSUFGSCxDQUVRLDBCQUZSLEVBRW9DQyxJQUZwQyxDQUV5QztBQUNyQyxrQkFBWTtBQUR5QixLQUZ6QztBQU1ILEdBVEQ7O0FBV0E1SCxPQUFLLENBQUNoSSxTQUFOLENBQWdCNlAsUUFBaEIsR0FBMkI3SCxLQUFLLENBQUNoSSxTQUFOLENBQWdCOFAsUUFBaEIsR0FBMkIsVUFBU0MsTUFBVCxFQUFpQkMsS0FBakIsRUFBd0JDLFNBQXhCLEVBQW1DO0FBRXJGLFFBQUk1TixDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFJLE9BQU8yTixLQUFQLEtBQWtCLFNBQXRCLEVBQWlDO0FBQzdCQyxlQUFTLEdBQUdELEtBQVo7QUFDQUEsV0FBSyxHQUFHLElBQVI7QUFDSCxLQUhELE1BR08sSUFBSUEsS0FBSyxHQUFHLENBQVIsSUFBY0EsS0FBSyxJQUFJM04sQ0FBQyxDQUFDa0ssVUFBN0IsRUFBMEM7QUFDN0MsYUFBTyxLQUFQO0FBQ0g7O0FBRURsSyxLQUFDLENBQUM2TixNQUFGOztBQUVBLFFBQUksT0FBT0YsS0FBUCxLQUFrQixRQUF0QixFQUFnQztBQUM1QixVQUFJQSxLQUFLLEtBQUssQ0FBVixJQUFlM04sQ0FBQyxDQUFDcUssT0FBRixDQUFVM00sTUFBVixLQUFxQixDQUF4QyxFQUEyQztBQUN2Q2dJLFNBQUMsQ0FBQ2dJLE1BQUQsQ0FBRCxDQUFVSSxRQUFWLENBQW1COU4sQ0FBQyxDQUFDb0ssV0FBckI7QUFDSCxPQUZELE1BRU8sSUFBSXdELFNBQUosRUFBZTtBQUNsQmxJLFNBQUMsQ0FBQ2dJLE1BQUQsQ0FBRCxDQUFVSyxZQUFWLENBQXVCL04sQ0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhTCxLQUFiLENBQXZCO0FBQ0gsT0FGTSxNQUVBO0FBQ0hqSSxTQUFDLENBQUNnSSxNQUFELENBQUQsQ0FBVU8sV0FBVixDQUFzQmpPLENBQUMsQ0FBQ3FLLE9BQUYsQ0FBVTJELEVBQVYsQ0FBYUwsS0FBYixDQUF0QjtBQUNIO0FBQ0osS0FSRCxNQVFPO0FBQ0gsVUFBSUMsU0FBUyxLQUFLLElBQWxCLEVBQXdCO0FBQ3BCbEksU0FBQyxDQUFDZ0ksTUFBRCxDQUFELENBQVVRLFNBQVYsQ0FBb0JsTyxDQUFDLENBQUNvSyxXQUF0QjtBQUNILE9BRkQsTUFFTztBQUNIMUUsU0FBQyxDQUFDZ0ksTUFBRCxDQUFELENBQVVJLFFBQVYsQ0FBbUI5TixDQUFDLENBQUNvSyxXQUFyQjtBQUNIO0FBQ0o7O0FBRURwSyxLQUFDLENBQUNxSyxPQUFGLEdBQVlySyxDQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLENBQXVCLEtBQUt1SixPQUFMLENBQWFqRSxLQUFwQyxDQUFaOztBQUVBbkksS0FBQyxDQUFDb0ssV0FBRixDQUFjdkgsUUFBZCxDQUF1QixLQUFLdUosT0FBTCxDQUFhakUsS0FBcEMsRUFBMkNnRyxNQUEzQzs7QUFFQW5PLEtBQUMsQ0FBQ29LLFdBQUYsQ0FBY2dFLE1BQWQsQ0FBcUJwTyxDQUFDLENBQUNxSyxPQUF2Qjs7QUFFQXJLLEtBQUMsQ0FBQ3FLLE9BQUYsQ0FBVWdFLElBQVYsQ0FBZSxVQUFTVixLQUFULEVBQWdCOUgsT0FBaEIsRUFBeUI7QUFDcENILE9BQUMsQ0FBQ0csT0FBRCxDQUFELENBQVcwSCxJQUFYLENBQWdCLGtCQUFoQixFQUFvQ0ksS0FBcEM7QUFDSCxLQUZEOztBQUlBM04sS0FBQyxDQUFDNkwsWUFBRixHQUFpQjdMLENBQUMsQ0FBQ3FLLE9BQW5COztBQUVBckssS0FBQyxDQUFDc08sTUFBRjtBQUVILEdBM0NEOztBQTZDQTNJLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0I0USxhQUFoQixHQUFnQyxZQUFXO0FBQ3ZDLFFBQUl2TyxDQUFDLEdBQUcsSUFBUjs7QUFDQSxRQUFJQSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEtBQTJCLENBQTNCLElBQWdDckksQ0FBQyxDQUFDb00sT0FBRixDQUFVbEcsY0FBVixLQUE2QixJQUE3RCxJQUFxRWxHLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBaEcsRUFBdUc7QUFDbkcsVUFBSXlGLFlBQVksR0FBR3hPLENBQUMsQ0FBQ3FLLE9BQUYsQ0FBVTJELEVBQVYsQ0FBYWhPLENBQUMsQ0FBQ3lKLFlBQWYsRUFBNkJnRixXQUE3QixDQUF5QyxJQUF6QyxDQUFuQjs7QUFDQXpPLE9BQUMsQ0FBQzBLLEtBQUYsQ0FBUWdFLE9BQVIsQ0FBZ0I7QUFDWkMsY0FBTSxFQUFFSDtBQURJLE9BQWhCLEVBRUd4TyxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUZiO0FBR0g7QUFDSixHQVJEOztBQVVBNUMsT0FBSyxDQUFDaEksU0FBTixDQUFnQmlSLFlBQWhCLEdBQStCLFVBQVNDLFVBQVQsRUFBcUJDLFFBQXJCLEVBQStCO0FBRTFELFFBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUFBLFFBQ0kvTyxDQUFDLEdBQUcsSUFEUjs7QUFHQUEsS0FBQyxDQUFDdU8sYUFBRjs7QUFFQSxRQUFJdk8sQ0FBQyxDQUFDb00sT0FBRixDQUFVbEUsR0FBVixLQUFrQixJQUFsQixJQUEwQmxJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBckQsRUFBNEQ7QUFDeEQ4RixnQkFBVSxHQUFHLENBQUNBLFVBQWQ7QUFDSDs7QUFDRCxRQUFJN08sQ0FBQyxDQUFDNEssaUJBQUYsS0FBd0IsS0FBNUIsRUFBbUM7QUFDL0IsVUFBSTVLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUIvSSxTQUFDLENBQUNvSyxXQUFGLENBQWNzRSxPQUFkLENBQXNCO0FBQ2xCbkosY0FBSSxFQUFFc0o7QUFEWSxTQUF0QixFQUVHN08sQ0FBQyxDQUFDb00sT0FBRixDQUFVN0QsS0FGYixFQUVvQnZJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXROLE1BRjlCLEVBRXNDZ1EsUUFGdEM7QUFHSCxPQUpELE1BSU87QUFDSDlPLFNBQUMsQ0FBQ29LLFdBQUYsQ0FBY3NFLE9BQWQsQ0FBc0I7QUFDbEIzSixhQUFHLEVBQUU4SjtBQURhLFNBQXRCLEVBRUc3TyxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUZiLEVBRW9CdkksQ0FBQyxDQUFDb00sT0FBRixDQUFVdE4sTUFGOUIsRUFFc0NnUSxRQUZ0QztBQUdIO0FBRUosS0FYRCxNQVdPO0FBRUgsVUFBSTlPLENBQUMsQ0FBQ29MLGNBQUYsS0FBcUIsS0FBekIsRUFBZ0M7QUFDNUIsWUFBSXBMLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxFLEdBQVYsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEJsSSxXQUFDLENBQUN3SixXQUFGLEdBQWdCLENBQUV4SixDQUFDLENBQUN3SixXQUFwQjtBQUNIOztBQUNEOUQsU0FBQyxDQUFDO0FBQ0VzSixtQkFBUyxFQUFFaFAsQ0FBQyxDQUFDd0o7QUFEZixTQUFELENBQUQsQ0FFR2tGLE9BRkgsQ0FFVztBQUNQTSxtQkFBUyxFQUFFSDtBQURKLFNBRlgsRUFJRztBQUNDOVAsa0JBQVEsRUFBRWlCLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTdELEtBRHJCO0FBRUN6SixnQkFBTSxFQUFFa0IsQ0FBQyxDQUFDb00sT0FBRixDQUFVdE4sTUFGbkI7QUFHQ21RLGNBQUksRUFBRSxjQUFTdk0sR0FBVCxFQUFjO0FBQ2hCQSxlQUFHLEdBQUdKLElBQUksQ0FBQzRNLElBQUwsQ0FBVXhNLEdBQVYsQ0FBTjs7QUFDQSxnQkFBSTFDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUJnRyx1QkFBUyxDQUFDL08sQ0FBQyxDQUFDZ0wsUUFBSCxDQUFULEdBQXdCLGVBQ3BCdEksR0FEb0IsR0FDZCxVQURWOztBQUVBMUMsZUFBQyxDQUFDb0ssV0FBRixDQUFjK0UsR0FBZCxDQUFrQkosU0FBbEI7QUFDSCxhQUpELE1BSU87QUFDSEEsdUJBQVMsQ0FBQy9PLENBQUMsQ0FBQ2dMLFFBQUgsQ0FBVCxHQUF3QixtQkFDcEJ0SSxHQURvQixHQUNkLEtBRFY7O0FBRUExQyxlQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCSixTQUFsQjtBQUNIO0FBQ0osV0FkRjtBQWVDSyxrQkFBUSxFQUFFLG9CQUFXO0FBQ2pCLGdCQUFJTixRQUFKLEVBQWM7QUFDVkEsc0JBQVEsQ0FBQzVSLElBQVQ7QUFDSDtBQUNKO0FBbkJGLFNBSkg7QUEwQkgsT0E5QkQsTUE4Qk87QUFFSDhDLFNBQUMsQ0FBQ3FQLGVBQUY7O0FBQ0FSLGtCQUFVLEdBQUd2TSxJQUFJLENBQUM0TSxJQUFMLENBQVVMLFVBQVYsQ0FBYjs7QUFFQSxZQUFJN08sQ0FBQyxDQUFDb00sT0FBRixDQUFVckQsUUFBVixLQUF1QixLQUEzQixFQUFrQztBQUM5QmdHLG1CQUFTLENBQUMvTyxDQUFDLENBQUNnTCxRQUFILENBQVQsR0FBd0IsaUJBQWlCNkQsVUFBakIsR0FBOEIsZUFBdEQ7QUFDSCxTQUZELE1BRU87QUFDSEUsbUJBQVMsQ0FBQy9PLENBQUMsQ0FBQ2dMLFFBQUgsQ0FBVCxHQUF3QixxQkFBcUI2RCxVQUFyQixHQUFrQyxVQUExRDtBQUNIOztBQUNEN08sU0FBQyxDQUFDb0ssV0FBRixDQUFjK0UsR0FBZCxDQUFrQkosU0FBbEI7O0FBRUEsWUFBSUQsUUFBSixFQUFjO0FBQ1Y1TixvQkFBVSxDQUFDLFlBQVc7QUFFbEJsQixhQUFDLENBQUNzUCxpQkFBRjs7QUFFQVIsb0JBQVEsQ0FBQzVSLElBQVQ7QUFDSCxXQUxTLEVBS1A4QyxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUxILENBQVY7QUFNSDtBQUVKO0FBRUo7QUFFSixHQTlFRDs7QUFnRkE1QyxPQUFLLENBQUNoSSxTQUFOLENBQWdCNFIsWUFBaEIsR0FBK0IsWUFBVztBQUV0QyxRQUFJdlAsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJc0csUUFBUSxHQUFHdEcsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUYsUUFEekI7O0FBR0EsUUFBS0EsUUFBUSxJQUFJQSxRQUFRLEtBQUssSUFBOUIsRUFBcUM7QUFDakNBLGNBQVEsR0FBR1osQ0FBQyxDQUFDWSxRQUFELENBQUQsQ0FBWWtKLEdBQVosQ0FBZ0J4UCxDQUFDLENBQUM0TCxPQUFsQixDQUFYO0FBQ0g7O0FBRUQsV0FBT3RGLFFBQVA7QUFFSCxHQVhEOztBQWFBWCxPQUFLLENBQUNoSSxTQUFOLENBQWdCMkksUUFBaEIsR0FBMkIsVUFBU3FILEtBQVQsRUFBZ0I7QUFFdkMsUUFBSTNOLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSXNHLFFBQVEsR0FBR3RHLENBQUMsQ0FBQ3VQLFlBQUYsRUFEZjs7QUFHQSxRQUFLakosUUFBUSxLQUFLLElBQWIsSUFBcUIsUUFBT0EsUUFBUCxNQUFvQixRQUE5QyxFQUF5RDtBQUNyREEsY0FBUSxDQUFDK0gsSUFBVCxDQUFjLFlBQVc7QUFDckIsWUFBSW9CLE1BQU0sR0FBRy9KLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdLLEtBQVIsQ0FBYyxVQUFkLENBQWI7O0FBQ0EsWUFBRyxDQUFDRCxNQUFNLENBQUM1RSxTQUFYLEVBQXNCO0FBQ2xCNEUsZ0JBQU0sQ0FBQ0UsWUFBUCxDQUFvQmhDLEtBQXBCLEVBQTJCLElBQTNCO0FBQ0g7QUFDSixPQUxEO0FBTUg7QUFFSixHQWREOztBQWdCQWhJLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0IwUixlQUFoQixHQUFrQyxVQUFTbEgsS0FBVCxFQUFnQjtBQUU5QyxRQUFJbkksQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJNFAsVUFBVSxHQUFHLEVBRGpCOztBQUdBLFFBQUk1UCxDQUFDLENBQUNvTSxPQUFGLENBQVUvRSxJQUFWLEtBQW1CLEtBQXZCLEVBQThCO0FBQzFCdUksZ0JBQVUsQ0FBQzVQLENBQUMsQ0FBQytMLGNBQUgsQ0FBVixHQUErQi9MLENBQUMsQ0FBQzhMLGFBQUYsR0FBa0IsR0FBbEIsR0FBd0I5TCxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUFsQyxHQUEwQyxLQUExQyxHQUFrRHZJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXZGLE9BQTNGO0FBQ0gsS0FGRCxNQUVPO0FBQ0grSSxnQkFBVSxDQUFDNVAsQ0FBQyxDQUFDK0wsY0FBSCxDQUFWLEdBQStCLGFBQWEvTCxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUF2QixHQUErQixLQUEvQixHQUF1Q3ZJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXZGLE9BQWhGO0FBQ0g7O0FBRUQsUUFBSTdHLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUJySCxPQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCUyxVQUFsQjtBQUNILEtBRkQsTUFFTztBQUNINVAsT0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhN0YsS0FBYixFQUFvQmdILEdBQXBCLENBQXdCUyxVQUF4QjtBQUNIO0FBRUosR0FqQkQ7O0FBbUJBakssT0FBSyxDQUFDaEksU0FBTixDQUFnQjZPLFFBQWhCLEdBQTJCLFlBQVc7QUFFbEMsUUFBSXhNLENBQUMsR0FBRyxJQUFSOztBQUVBQSxLQUFDLENBQUMwTSxhQUFGOztBQUVBLFFBQUsxTSxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE5QixFQUE2QztBQUN6Q3JJLE9BQUMsQ0FBQ3NKLGFBQUYsR0FBa0J1RyxXQUFXLENBQUU3UCxDQUFDLENBQUMyTSxnQkFBSixFQUFzQjNNLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTFGLGFBQWhDLENBQTdCO0FBQ0g7QUFFSixHQVZEOztBQVlBZixPQUFLLENBQUNoSSxTQUFOLENBQWdCK08sYUFBaEIsR0FBZ0MsWUFBVztBQUV2QyxRQUFJMU0sQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDc0osYUFBTixFQUFxQjtBQUNqQndHLG1CQUFhLENBQUM5UCxDQUFDLENBQUNzSixhQUFILENBQWI7QUFDSDtBQUVKLEdBUkQ7O0FBVUEzRCxPQUFLLENBQUNoSSxTQUFOLENBQWdCZ1AsZ0JBQWhCLEdBQW1DLFlBQVc7QUFFMUMsUUFBSTNNLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSStQLE9BQU8sR0FBRy9QLENBQUMsQ0FBQ3lKLFlBQUYsR0FBaUJ6SixDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUR6Qzs7QUFHQSxRQUFLLENBQUN0SSxDQUFDLENBQUN3TCxNQUFILElBQWEsQ0FBQ3hMLENBQUMsQ0FBQ3NMLFdBQWhCLElBQStCLENBQUN0TCxDQUFDLENBQUNxTCxRQUF2QyxFQUFrRDtBQUU5QyxVQUFLckwsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixLQUE1QixFQUFvQztBQUVoQyxZQUFLeEgsQ0FBQyxDQUFDMEosU0FBRixLQUFnQixDQUFoQixJQUF1QjFKLENBQUMsQ0FBQ3lKLFlBQUYsR0FBaUIsQ0FBbkIsS0FBNkJ6SixDQUFDLENBQUNrSyxVQUFGLEdBQWUsQ0FBdEUsRUFBMkU7QUFDdkVsSyxXQUFDLENBQUMwSixTQUFGLEdBQWMsQ0FBZDtBQUNILFNBRkQsTUFJSyxJQUFLMUosQ0FBQyxDQUFDMEosU0FBRixLQUFnQixDQUFyQixFQUF5QjtBQUUxQnFHLGlCQUFPLEdBQUcvUCxDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBckM7O0FBRUEsY0FBS3RJLENBQUMsQ0FBQ3lKLFlBQUYsR0FBaUIsQ0FBakIsS0FBdUIsQ0FBNUIsRUFBZ0M7QUFDNUJ6SixhQUFDLENBQUMwSixTQUFGLEdBQWMsQ0FBZDtBQUNIO0FBRUo7QUFFSjs7QUFFRDFKLE9BQUMsQ0FBQzJQLFlBQUYsQ0FBZ0JJLE9BQWhCO0FBRUg7QUFFSixHQTdCRDs7QUErQkFwSyxPQUFLLENBQUNoSSxTQUFOLENBQWdCcVMsV0FBaEIsR0FBOEIsWUFBVztBQUVyQyxRQUFJaFEsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0YsTUFBVixLQUFxQixJQUF6QixFQUFnQztBQUU1QnJHLE9BQUMsQ0FBQ2dLLFVBQUYsR0FBZXRFLENBQUMsQ0FBQzFGLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTdGLFNBQVgsQ0FBRCxDQUF1QjBKLFFBQXZCLENBQWdDLGFBQWhDLENBQWY7QUFDQWpRLE9BQUMsQ0FBQytKLFVBQUYsR0FBZXJFLENBQUMsQ0FBQzFGLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTVGLFNBQVgsQ0FBRCxDQUF1QnlKLFFBQXZCLENBQWdDLGFBQWhDLENBQWY7O0FBRUEsVUFBSWpRLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTdCLEVBQTRDO0FBRXhDckksU0FBQyxDQUFDZ0ssVUFBRixDQUFha0csV0FBYixDQUF5QixjQUF6QixFQUF5Q0MsVUFBekMsQ0FBb0Qsc0JBQXBEOztBQUNBblEsU0FBQyxDQUFDK0osVUFBRixDQUFhbUcsV0FBYixDQUF5QixjQUF6QixFQUF5Q0MsVUFBekMsQ0FBb0Qsc0JBQXBEOztBQUVBLFlBQUluUSxDQUFDLENBQUNtTixRQUFGLENBQVd2TCxJQUFYLENBQWdCNUIsQ0FBQyxDQUFDb00sT0FBRixDQUFVN0YsU0FBMUIsQ0FBSixFQUEwQztBQUN0Q3ZHLFdBQUMsQ0FBQ2dLLFVBQUYsQ0FBYWtFLFNBQWIsQ0FBdUJsTyxDQUFDLENBQUNvTSxPQUFGLENBQVVqRyxZQUFqQztBQUNIOztBQUVELFlBQUluRyxDQUFDLENBQUNtTixRQUFGLENBQVd2TCxJQUFYLENBQWdCNUIsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUYsU0FBMUIsQ0FBSixFQUEwQztBQUN0Q3hHLFdBQUMsQ0FBQytKLFVBQUYsQ0FBYStELFFBQWIsQ0FBc0I5TixDQUFDLENBQUNvTSxPQUFGLENBQVVqRyxZQUFoQztBQUNIOztBQUVELFlBQUluRyxDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEtBQXVCLElBQTNCLEVBQWlDO0FBQzdCeEgsV0FBQyxDQUFDZ0ssVUFBRixDQUNLaUcsUUFETCxDQUNjLGdCQURkLEVBRUsxQyxJQUZMLENBRVUsZUFGVixFQUUyQixNQUYzQjtBQUdIO0FBRUosT0FuQkQsTUFtQk87QUFFSHZOLFNBQUMsQ0FBQ2dLLFVBQUYsQ0FBYXpGLEdBQWIsQ0FBa0J2RSxDQUFDLENBQUMrSixVQUFwQixFQUVLa0csUUFGTCxDQUVjLGNBRmQsRUFHSzFDLElBSEwsQ0FHVTtBQUNGLDJCQUFpQixNQURmO0FBRUYsc0JBQVk7QUFGVixTQUhWO0FBUUg7QUFFSjtBQUVKLEdBMUNEOztBQTRDQTVILE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0J5UyxTQUFoQixHQUE0QixZQUFXO0FBRW5DLFFBQUlwUSxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQ0lqRCxDQURKO0FBQUEsUUFDT3NULEdBRFA7O0FBR0EsUUFBSXJRLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5GLElBQVYsS0FBbUIsSUFBbkIsSUFBMkJqSCxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF4RCxFQUFzRTtBQUVsRXJJLE9BQUMsQ0FBQzRMLE9BQUYsQ0FBVXFFLFFBQVYsQ0FBbUIsY0FBbkI7O0FBRUFJLFNBQUcsR0FBRzNLLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWXVLLFFBQVosQ0FBcUJqUSxDQUFDLENBQUNvTSxPQUFGLENBQVVsRixTQUEvQixDQUFOOztBQUVBLFdBQUtuSyxDQUFDLEdBQUcsQ0FBVCxFQUFZQSxDQUFDLElBQUlpRCxDQUFDLENBQUNzUSxXQUFGLEVBQWpCLEVBQWtDdlQsQ0FBQyxJQUFJLENBQXZDLEVBQTBDO0FBQ3RDc1QsV0FBRyxDQUFDakMsTUFBSixDQUFXMUksQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZMEksTUFBWixDQUFtQnBPLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXRGLFlBQVYsQ0FBdUI1SixJQUF2QixDQUE0QixJQUE1QixFQUFrQzhDLENBQWxDLEVBQXFDakQsQ0FBckMsQ0FBbkIsQ0FBWDtBQUNIOztBQUVEaUQsT0FBQyxDQUFDMkosS0FBRixHQUFVMEcsR0FBRyxDQUFDdkMsUUFBSixDQUFhOU4sQ0FBQyxDQUFDb00sT0FBRixDQUFVaEcsVUFBdkIsQ0FBVjs7QUFFQXBHLE9BQUMsQ0FBQzJKLEtBQUYsQ0FBUTJELElBQVIsQ0FBYSxJQUFiLEVBQW1CaUQsS0FBbkIsR0FBMkJOLFFBQTNCLENBQW9DLGNBQXBDO0FBRUg7QUFFSixHQXJCRDs7QUF1QkF0SyxPQUFLLENBQUNoSSxTQUFOLENBQWdCNlMsUUFBaEIsR0FBMkIsWUFBVztBQUVsQyxRQUFJeFEsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQ3FLLE9BQUYsR0FDSXJLLENBQUMsQ0FBQzRMLE9BQUYsQ0FDSy9JLFFBREwsQ0FDZTdDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWpFLEtBQVYsR0FBa0IscUJBRGpDLEVBRUs4SCxRQUZMLENBRWMsYUFGZCxDQURKO0FBS0FqUSxLQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNxSyxPQUFGLENBQVUzTSxNQUF6Qjs7QUFFQXNDLEtBQUMsQ0FBQ3FLLE9BQUYsQ0FBVWdFLElBQVYsQ0FBZSxVQUFTVixLQUFULEVBQWdCOUgsT0FBaEIsRUFBeUI7QUFDcENILE9BQUMsQ0FBQ0csT0FBRCxDQUFELENBQ0swSCxJQURMLENBQ1Usa0JBRFYsRUFDOEJJLEtBRDlCLEVBRUt4QixJQUZMLENBRVUsaUJBRlYsRUFFNkJ6RyxDQUFDLENBQUNHLE9BQUQsQ0FBRCxDQUFXMEgsSUFBWCxDQUFnQixPQUFoQixLQUE0QixFQUZ6RDtBQUdILEtBSkQ7O0FBTUF2TixLQUFDLENBQUM0TCxPQUFGLENBQVVxRSxRQUFWLENBQW1CLGNBQW5COztBQUVBalEsS0FBQyxDQUFDb0ssV0FBRixHQUFpQnBLLENBQUMsQ0FBQ2tLLFVBQUYsS0FBaUIsQ0FBbEIsR0FDWnhFLENBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDb0ksUUFBaEMsQ0FBeUM5TixDQUFDLENBQUM0TCxPQUEzQyxDQURZLEdBRVo1TCxDQUFDLENBQUNxSyxPQUFGLENBQVVvRyxPQUFWLENBQWtCLDRCQUFsQixFQUFnREMsTUFBaEQsRUFGSjtBQUlBMVEsS0FBQyxDQUFDMEssS0FBRixHQUFVMUssQ0FBQyxDQUFDb0ssV0FBRixDQUFjdUcsSUFBZCxDQUNOLDJCQURNLEVBQ3VCRCxNQUR2QixFQUFWOztBQUVBMVEsS0FBQyxDQUFDb0ssV0FBRixDQUFjK0UsR0FBZCxDQUFrQixTQUFsQixFQUE2QixDQUE3Qjs7QUFFQSxRQUFJblAsQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUF6QixJQUFpQzNHLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNELFlBQVYsS0FBMkIsSUFBaEUsRUFBc0U7QUFDbEV6SSxPQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUFWLEdBQTJCLENBQTNCO0FBQ0g7O0FBRUQ1QyxLQUFDLENBQUMsZ0JBQUQsRUFBbUIxRixDQUFDLENBQUM0TCxPQUFyQixDQUFELENBQStCNEQsR0FBL0IsQ0FBbUMsT0FBbkMsRUFBNENTLFFBQTVDLENBQXFELGVBQXJEOztBQUVBalEsS0FBQyxDQUFDNFEsYUFBRjs7QUFFQTVRLEtBQUMsQ0FBQ2dRLFdBQUY7O0FBRUFoUSxLQUFDLENBQUNvUSxTQUFGOztBQUVBcFEsS0FBQyxDQUFDNlEsVUFBRjs7QUFHQTdRLEtBQUMsQ0FBQzhRLGVBQUYsQ0FBa0IsT0FBTzlRLENBQUMsQ0FBQ3lKLFlBQVQsS0FBMEIsUUFBMUIsR0FBcUN6SixDQUFDLENBQUN5SixZQUF2QyxHQUFzRCxDQUF4RTs7QUFFQSxRQUFJekosQ0FBQyxDQUFDb00sT0FBRixDQUFVakYsU0FBVixLQUF3QixJQUE1QixFQUFrQztBQUM5Qm5ILE9BQUMsQ0FBQzBLLEtBQUYsQ0FBUXVGLFFBQVIsQ0FBaUIsV0FBakI7QUFDSDtBQUVKLEdBaEREOztBQWtEQXRLLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JvVCxTQUFoQixHQUE0QixZQUFXO0FBRW5DLFFBQUkvUSxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQWNsQyxDQUFkO0FBQUEsUUFBaUJNLENBQWpCO0FBQUEsUUFBb0JoQixDQUFwQjtBQUFBLFFBQXVCNFQsU0FBdkI7QUFBQSxRQUFrQ0MsV0FBbEM7QUFBQSxRQUErQ0MsY0FBL0M7QUFBQSxRQUE4REMsZ0JBQTlEOztBQUVBSCxhQUFTLEdBQUcvUSxRQUFRLENBQUNtUixzQkFBVCxFQUFaO0FBQ0FGLGtCQUFjLEdBQUdsUixDQUFDLENBQUM0TCxPQUFGLENBQVUvSSxRQUFWLEVBQWpCOztBQUVBLFFBQUc3QyxDQUFDLENBQUNvTSxPQUFGLENBQVVuRSxJQUFWLEdBQWlCLENBQXBCLEVBQXVCO0FBRW5Ca0osc0JBQWdCLEdBQUduUixDQUFDLENBQUNvTSxPQUFGLENBQVVoRSxZQUFWLEdBQXlCcEksQ0FBQyxDQUFDb00sT0FBRixDQUFVbkUsSUFBdEQ7QUFDQWdKLGlCQUFXLEdBQUczTyxJQUFJLENBQUM0TSxJQUFMLENBQ1ZnQyxjQUFjLENBQUN4VCxNQUFmLEdBQXdCeVQsZ0JBRGQsQ0FBZDs7QUFJQSxXQUFJclQsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxHQUFHbVQsV0FBZixFQUE0Qm5ULENBQUMsRUFBN0IsRUFBZ0M7QUFDNUIsWUFBSXFLLEtBQUssR0FBR2xJLFFBQVEsQ0FBQ29SLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjs7QUFDQSxhQUFJalQsQ0FBQyxHQUFHLENBQVIsRUFBV0EsQ0FBQyxHQUFHNEIsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkUsSUFBekIsRUFBK0I3SixDQUFDLEVBQWhDLEVBQW9DO0FBQ2hDLGNBQUlrVCxHQUFHLEdBQUdyUixRQUFRLENBQUNvUixhQUFULENBQXVCLEtBQXZCLENBQVY7O0FBQ0EsZUFBSWpVLENBQUMsR0FBRyxDQUFSLEVBQVdBLENBQUMsR0FBRzRDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWhFLFlBQXpCLEVBQXVDaEwsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxnQkFBSXFTLE1BQU0sR0FBSTNSLENBQUMsR0FBR3FULGdCQUFKLElBQXlCL1MsQ0FBQyxHQUFHNEIsQ0FBQyxDQUFDb00sT0FBRixDQUFVaEUsWUFBZixHQUErQmhMLENBQXZELENBQWQ7O0FBQ0EsZ0JBQUk4VCxjQUFjLENBQUNLLEdBQWYsQ0FBbUI5QixNQUFuQixDQUFKLEVBQWdDO0FBQzVCNkIsaUJBQUcsQ0FBQ0UsV0FBSixDQUFnQk4sY0FBYyxDQUFDSyxHQUFmLENBQW1COUIsTUFBbkIsQ0FBaEI7QUFDSDtBQUNKOztBQUNEdEgsZUFBSyxDQUFDcUosV0FBTixDQUFrQkYsR0FBbEI7QUFDSDs7QUFDRE4saUJBQVMsQ0FBQ1EsV0FBVixDQUFzQnJKLEtBQXRCO0FBQ0g7O0FBRURuSSxPQUFDLENBQUM0TCxPQUFGLENBQVU2RixLQUFWLEdBQWtCckQsTUFBbEIsQ0FBeUI0QyxTQUF6Qjs7QUFDQWhSLE9BQUMsQ0FBQzRMLE9BQUYsQ0FBVS9JLFFBQVYsR0FBcUJBLFFBQXJCLEdBQWdDQSxRQUFoQyxHQUNLc00sR0FETCxDQUNTO0FBQ0QsaUJBQVMsTUFBTW5QLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWhFLFlBQWpCLEdBQWlDLEdBRHhDO0FBRUQsbUJBQVc7QUFGVixPQURUO0FBTUg7QUFFSixHQXRDRDs7QUF3Q0F6QyxPQUFLLENBQUNoSSxTQUFOLENBQWdCK1QsZUFBaEIsR0FBa0MsVUFBU0MsT0FBVCxFQUFrQkMsV0FBbEIsRUFBK0I7QUFFN0QsUUFBSTVSLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSTZSLFVBREo7QUFBQSxRQUNnQkMsZ0JBRGhCO0FBQUEsUUFDa0NDLGNBRGxDO0FBQUEsUUFDa0RDLGlCQUFpQixHQUFHLEtBRHRFOztBQUVBLFFBQUlDLFdBQVcsR0FBR2pTLENBQUMsQ0FBQzRMLE9BQUYsQ0FBVXNHLEtBQVYsRUFBbEI7O0FBQ0EsUUFBSWpHLFdBQVcsR0FBRzlMLE1BQU0sQ0FBQ2dTLFVBQVAsSUFBcUJ6TSxDQUFDLENBQUN2RixNQUFELENBQUQsQ0FBVStSLEtBQVYsRUFBdkM7O0FBRUEsUUFBSWxTLENBQUMsQ0FBQytILFNBQUYsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUJnSyxvQkFBYyxHQUFHOUYsV0FBakI7QUFDSCxLQUZELE1BRU8sSUFBSWpNLENBQUMsQ0FBQytILFNBQUYsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDakNnSyxvQkFBYyxHQUFHRSxXQUFqQjtBQUNILEtBRk0sTUFFQSxJQUFJalMsQ0FBQyxDQUFDK0gsU0FBRixLQUFnQixLQUFwQixFQUEyQjtBQUM5QmdLLG9CQUFjLEdBQUd6UCxJQUFJLENBQUNFLEdBQUwsQ0FBU3lKLFdBQVQsRUFBc0JnRyxXQUF0QixDQUFqQjtBQUNIOztBQUVELFFBQUtqUyxDQUFDLENBQUNvTSxPQUFGLENBQVVwRSxVQUFWLElBQ0RoSSxDQUFDLENBQUNvTSxPQUFGLENBQVVwRSxVQUFWLENBQXFCdEssTUFEcEIsSUFFRHNDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXBFLFVBQVYsS0FBeUIsSUFGN0IsRUFFbUM7QUFFL0I4SixzQkFBZ0IsR0FBRyxJQUFuQjs7QUFFQSxXQUFLRCxVQUFMLElBQW1CN1IsQ0FBQyxDQUFDa0wsV0FBckIsRUFBa0M7QUFDOUIsWUFBSWxMLENBQUMsQ0FBQ2tMLFdBQUYsQ0FBY3ROLGNBQWQsQ0FBNkJpVSxVQUE3QixDQUFKLEVBQThDO0FBQzFDLGNBQUk3UixDQUFDLENBQUNxTSxnQkFBRixDQUFtQjFFLFdBQW5CLEtBQW1DLEtBQXZDLEVBQThDO0FBQzFDLGdCQUFJb0ssY0FBYyxHQUFHL1IsQ0FBQyxDQUFDa0wsV0FBRixDQUFjMkcsVUFBZCxDQUFyQixFQUFnRDtBQUM1Q0MsOEJBQWdCLEdBQUc5UixDQUFDLENBQUNrTCxXQUFGLENBQWMyRyxVQUFkLENBQW5CO0FBQ0g7QUFDSixXQUpELE1BSU87QUFDSCxnQkFBSUUsY0FBYyxHQUFHL1IsQ0FBQyxDQUFDa0wsV0FBRixDQUFjMkcsVUFBZCxDQUFyQixFQUFnRDtBQUM1Q0MsOEJBQWdCLEdBQUc5UixDQUFDLENBQUNrTCxXQUFGLENBQWMyRyxVQUFkLENBQW5CO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBRUQsVUFBSUMsZ0JBQWdCLEtBQUssSUFBekIsRUFBK0I7QUFDM0IsWUFBSTlSLENBQUMsQ0FBQytLLGdCQUFGLEtBQXVCLElBQTNCLEVBQWlDO0FBQzdCLGNBQUkrRyxnQkFBZ0IsS0FBSzlSLENBQUMsQ0FBQytLLGdCQUF2QixJQUEyQzZHLFdBQS9DLEVBQTREO0FBQ3hENVIsYUFBQyxDQUFDK0ssZ0JBQUYsR0FDSStHLGdCQURKOztBQUVBLGdCQUFJOVIsQ0FBQyxDQUFDbUwsa0JBQUYsQ0FBcUIyRyxnQkFBckIsTUFBMkMsU0FBL0MsRUFBMEQ7QUFDdEQ5UixlQUFDLENBQUNvUyxPQUFGLENBQVVOLGdCQUFWO0FBQ0gsYUFGRCxNQUVPO0FBQ0g5UixlQUFDLENBQUNvTSxPQUFGLEdBQVkxRyxDQUFDLENBQUNvRixNQUFGLENBQVMsRUFBVCxFQUFhOUssQ0FBQyxDQUFDcU0sZ0JBQWYsRUFDUnJNLENBQUMsQ0FBQ21MLGtCQUFGLENBQ0kyRyxnQkFESixDQURRLENBQVo7O0FBR0Esa0JBQUlILE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNsQjNSLGlCQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVM0UsWUFBM0I7QUFDSDs7QUFDRHpILGVBQUMsQ0FBQ2UsT0FBRixDQUFVNFEsT0FBVjtBQUNIOztBQUNESyw2QkFBaUIsR0FBR0YsZ0JBQXBCO0FBQ0g7QUFDSixTQWpCRCxNQWlCTztBQUNIOVIsV0FBQyxDQUFDK0ssZ0JBQUYsR0FBcUIrRyxnQkFBckI7O0FBQ0EsY0FBSTlSLENBQUMsQ0FBQ21MLGtCQUFGLENBQXFCMkcsZ0JBQXJCLE1BQTJDLFNBQS9DLEVBQTBEO0FBQ3REOVIsYUFBQyxDQUFDb1MsT0FBRixDQUFVTixnQkFBVjtBQUNILFdBRkQsTUFFTztBQUNIOVIsYUFBQyxDQUFDb00sT0FBRixHQUFZMUcsQ0FBQyxDQUFDb0YsTUFBRixDQUFTLEVBQVQsRUFBYTlLLENBQUMsQ0FBQ3FNLGdCQUFmLEVBQ1JyTSxDQUFDLENBQUNtTCxrQkFBRixDQUNJMkcsZ0JBREosQ0FEUSxDQUFaOztBQUdBLGdCQUFJSCxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDbEIzUixlQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVM0UsWUFBM0I7QUFDSDs7QUFDRHpILGFBQUMsQ0FBQ2UsT0FBRixDQUFVNFEsT0FBVjtBQUNIOztBQUNESywyQkFBaUIsR0FBR0YsZ0JBQXBCO0FBQ0g7QUFDSixPQWpDRCxNQWlDTztBQUNILFlBQUk5UixDQUFDLENBQUMrSyxnQkFBRixLQUF1QixJQUEzQixFQUFpQztBQUM3Qi9LLFdBQUMsQ0FBQytLLGdCQUFGLEdBQXFCLElBQXJCO0FBQ0EvSyxXQUFDLENBQUNvTSxPQUFGLEdBQVlwTSxDQUFDLENBQUNxTSxnQkFBZDs7QUFDQSxjQUFJc0YsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ2xCM1IsYUFBQyxDQUFDeUosWUFBRixHQUFpQnpKLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNFLFlBQTNCO0FBQ0g7O0FBQ0R6SCxXQUFDLENBQUNlLE9BQUYsQ0FBVTRRLE9BQVY7O0FBQ0FLLDJCQUFpQixHQUFHRixnQkFBcEI7QUFDSDtBQUNKLE9BN0Q4QixDQStEL0I7OztBQUNBLFVBQUksQ0FBQ0gsT0FBRCxJQUFZSyxpQkFBaUIsS0FBSyxLQUF0QyxFQUE4QztBQUMxQ2hTLFNBQUMsQ0FBQzRMLE9BQUYsQ0FBVXlHLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBQ3JTLENBQUQsRUFBSWdTLGlCQUFKLENBQWhDO0FBQ0g7QUFDSjtBQUVKLEdBdEZEOztBQXdGQXJNLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JpUCxXQUFoQixHQUE4QixVQUFTMEYsS0FBVCxFQUFnQkMsV0FBaEIsRUFBNkI7QUFFdkQsUUFBSXZTLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSXdTLE9BQU8sR0FBRzlNLENBQUMsQ0FBQzRNLEtBQUssQ0FBQ0csYUFBUCxDQURmO0FBQUEsUUFFSUMsV0FGSjtBQUFBLFFBRWlCbkksV0FGakI7QUFBQSxRQUU4Qm9JLFlBRjlCLENBRnVELENBTXZEOzs7QUFDQSxRQUFHSCxPQUFPLENBQUNJLEVBQVIsQ0FBVyxHQUFYLENBQUgsRUFBb0I7QUFDaEJOLFdBQUssQ0FBQ08sY0FBTjtBQUNILEtBVHNELENBV3ZEOzs7QUFDQSxRQUFHLENBQUNMLE9BQU8sQ0FBQ0ksRUFBUixDQUFXLElBQVgsQ0FBSixFQUFzQjtBQUNsQkosYUFBTyxHQUFHQSxPQUFPLENBQUNNLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBVjtBQUNIOztBQUVESCxnQkFBWSxHQUFJM1MsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBekIsS0FBNEMsQ0FBNUQ7QUFDQW9LLGVBQVcsR0FBR0MsWUFBWSxHQUFHLENBQUgsR0FBTyxDQUFDM1MsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDeUosWUFBbEIsSUFBa0N6SixDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUE3RTs7QUFFQSxZQUFRZ0ssS0FBSyxDQUFDbkcsSUFBTixDQUFXNEcsT0FBbkI7QUFFSSxXQUFLLFVBQUw7QUFDSXhJLG1CQUFXLEdBQUdtSSxXQUFXLEtBQUssQ0FBaEIsR0FBb0IxUyxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUE5QixHQUErQ3RJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQVYsR0FBeUJxSyxXQUF0Rjs7QUFDQSxZQUFJMVMsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBN0IsRUFBMkM7QUFDdkNySSxXQUFDLENBQUMyUCxZQUFGLENBQWUzUCxDQUFDLENBQUN5SixZQUFGLEdBQWlCYyxXQUFoQyxFQUE2QyxLQUE3QyxFQUFvRGdJLFdBQXBEO0FBQ0g7O0FBQ0Q7O0FBRUosV0FBSyxNQUFMO0FBQ0loSSxtQkFBVyxHQUFHbUksV0FBVyxLQUFLLENBQWhCLEdBQW9CMVMsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBOUIsR0FBK0NvSyxXQUE3RDs7QUFDQSxZQUFJMVMsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBN0IsRUFBMkM7QUFDdkNySSxXQUFDLENBQUMyUCxZQUFGLENBQWUzUCxDQUFDLENBQUN5SixZQUFGLEdBQWlCYyxXQUFoQyxFQUE2QyxLQUE3QyxFQUFvRGdJLFdBQXBEO0FBQ0g7O0FBQ0Q7O0FBRUosV0FBSyxPQUFMO0FBQ0ksWUFBSTVFLEtBQUssR0FBRzJFLEtBQUssQ0FBQ25HLElBQU4sQ0FBV3dCLEtBQVgsS0FBcUIsQ0FBckIsR0FBeUIsQ0FBekIsR0FDUjJFLEtBQUssQ0FBQ25HLElBQU4sQ0FBV3dCLEtBQVgsSUFBb0I2RSxPQUFPLENBQUM3RSxLQUFSLEtBQWtCM04sQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FEcEQ7O0FBR0F0SSxTQUFDLENBQUMyUCxZQUFGLENBQWUzUCxDQUFDLENBQUNnVCxjQUFGLENBQWlCckYsS0FBakIsQ0FBZixFQUF3QyxLQUF4QyxFQUErQzRFLFdBQS9DOztBQUNBQyxlQUFPLENBQUMzUCxRQUFSLEdBQW1Cd1AsT0FBbkIsQ0FBMkIsT0FBM0I7QUFDQTs7QUFFSjtBQUNJO0FBekJSO0FBNEJILEdBL0NEOztBQWlEQTFNLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JxVixjQUFoQixHQUFpQyxVQUFTckYsS0FBVCxFQUFnQjtBQUU3QyxRQUFJM04sQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJaVQsVUFESjtBQUFBLFFBQ2dCQyxhQURoQjs7QUFHQUQsY0FBVSxHQUFHalQsQ0FBQyxDQUFDbVQsbUJBQUYsRUFBYjtBQUNBRCxpQkFBYSxHQUFHLENBQWhCOztBQUNBLFFBQUl2RixLQUFLLEdBQUdzRixVQUFVLENBQUNBLFVBQVUsQ0FBQ3ZWLE1BQVgsR0FBb0IsQ0FBckIsQ0FBdEIsRUFBK0M7QUFDM0NpUSxXQUFLLEdBQUdzRixVQUFVLENBQUNBLFVBQVUsQ0FBQ3ZWLE1BQVgsR0FBb0IsQ0FBckIsQ0FBbEI7QUFDSCxLQUZELE1BRU87QUFDSCxXQUFLLElBQUlaLENBQVQsSUFBY21XLFVBQWQsRUFBMEI7QUFDdEIsWUFBSXRGLEtBQUssR0FBR3NGLFVBQVUsQ0FBQ25XLENBQUQsQ0FBdEIsRUFBMkI7QUFDdkI2USxlQUFLLEdBQUd1RixhQUFSO0FBQ0E7QUFDSDs7QUFDREEscUJBQWEsR0FBR0QsVUFBVSxDQUFDblcsQ0FBRCxDQUExQjtBQUNIO0FBQ0o7O0FBRUQsV0FBTzZRLEtBQVA7QUFDSCxHQXBCRDs7QUFzQkFoSSxPQUFLLENBQUNoSSxTQUFOLENBQWdCeVYsYUFBaEIsR0FBZ0MsWUFBVztBQUV2QyxRQUFJcFQsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkYsSUFBVixJQUFrQmpILENBQUMsQ0FBQzJKLEtBQUYsS0FBWSxJQUFsQyxFQUF3QztBQUVwQ2pFLE9BQUMsQ0FBQyxJQUFELEVBQU8xRixDQUFDLENBQUMySixLQUFULENBQUQsQ0FDSzBKLEdBREwsQ0FDUyxhQURULEVBQ3dCclQsQ0FBQyxDQUFDNE0sV0FEMUIsRUFFS3lHLEdBRkwsQ0FFUyxrQkFGVCxFQUU2QjNOLENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQ3NULFNBQVYsRUFBcUJ0VCxDQUFyQixFQUF3QixJQUF4QixDQUY3QixFQUdLcVQsR0FITCxDQUdTLGtCQUhULEVBRzZCM04sQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDc1QsU0FBVixFQUFxQnRULENBQXJCLEVBQXdCLEtBQXhCLENBSDdCOztBQUtBLFVBQUlBLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5HLGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDbENqRyxTQUFDLENBQUMySixLQUFGLENBQVEwSixHQUFSLENBQVksZUFBWixFQUE2QnJULENBQUMsQ0FBQ2tOLFVBQS9CO0FBQ0g7QUFDSjs7QUFFRGxOLEtBQUMsQ0FBQzRMLE9BQUYsQ0FBVXlILEdBQVYsQ0FBYyx3QkFBZDs7QUFFQSxRQUFJclQsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0YsTUFBVixLQUFxQixJQUFyQixJQUE2QnJHLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTFELEVBQXdFO0FBQ3BFckksT0FBQyxDQUFDZ0ssVUFBRixJQUFnQmhLLENBQUMsQ0FBQ2dLLFVBQUYsQ0FBYXFKLEdBQWIsQ0FBaUIsYUFBakIsRUFBZ0NyVCxDQUFDLENBQUM0TSxXQUFsQyxDQUFoQjtBQUNBNU0sT0FBQyxDQUFDK0osVUFBRixJQUFnQi9KLENBQUMsQ0FBQytKLFVBQUYsQ0FBYXNKLEdBQWIsQ0FBaUIsYUFBakIsRUFBZ0NyVCxDQUFDLENBQUM0TSxXQUFsQyxDQUFoQjs7QUFFQSxVQUFJNU0sQ0FBQyxDQUFDb00sT0FBRixDQUFVbkcsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQ2pHLFNBQUMsQ0FBQ2dLLFVBQUYsSUFBZ0JoSyxDQUFDLENBQUNnSyxVQUFGLENBQWFxSixHQUFiLENBQWlCLGVBQWpCLEVBQWtDclQsQ0FBQyxDQUFDa04sVUFBcEMsQ0FBaEI7QUFDQWxOLFNBQUMsQ0FBQytKLFVBQUYsSUFBZ0IvSixDQUFDLENBQUMrSixVQUFGLENBQWFzSixHQUFiLENBQWlCLGVBQWpCLEVBQWtDclQsQ0FBQyxDQUFDa04sVUFBcEMsQ0FBaEI7QUFDSDtBQUNKOztBQUVEbE4sS0FBQyxDQUFDMEssS0FBRixDQUFRMkksR0FBUixDQUFZLGtDQUFaLEVBQWdEclQsQ0FBQyxDQUFDZ04sWUFBbEQ7O0FBQ0FoTixLQUFDLENBQUMwSyxLQUFGLENBQVEySSxHQUFSLENBQVksaUNBQVosRUFBK0NyVCxDQUFDLENBQUNnTixZQUFqRDs7QUFDQWhOLEtBQUMsQ0FBQzBLLEtBQUYsQ0FBUTJJLEdBQVIsQ0FBWSw4QkFBWixFQUE0Q3JULENBQUMsQ0FBQ2dOLFlBQTlDOztBQUNBaE4sS0FBQyxDQUFDMEssS0FBRixDQUFRMkksR0FBUixDQUFZLG9DQUFaLEVBQWtEclQsQ0FBQyxDQUFDZ04sWUFBcEQ7O0FBRUFoTixLQUFDLENBQUMwSyxLQUFGLENBQVEySSxHQUFSLENBQVksYUFBWixFQUEyQnJULENBQUMsQ0FBQzZNLFlBQTdCOztBQUVBbkgsS0FBQyxDQUFDekYsUUFBRCxDQUFELENBQVlvVCxHQUFaLENBQWdCclQsQ0FBQyxDQUFDZ00sZ0JBQWxCLEVBQW9DaE0sQ0FBQyxDQUFDdVQsVUFBdEM7O0FBRUF2VCxLQUFDLENBQUN3VCxrQkFBRjs7QUFFQSxRQUFJeFQsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkcsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQ2pHLE9BQUMsQ0FBQzBLLEtBQUYsQ0FBUTJJLEdBQVIsQ0FBWSxlQUFaLEVBQTZCclQsQ0FBQyxDQUFDa04sVUFBL0I7QUFDSDs7QUFFRCxRQUFJbE4sQ0FBQyxDQUFDb00sT0FBRixDQUFVOUUsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQzVCLE9BQUMsQ0FBQzFGLENBQUMsQ0FBQ29LLFdBQUgsQ0FBRCxDQUFpQnZILFFBQWpCLEdBQTRCd1EsR0FBNUIsQ0FBZ0MsYUFBaEMsRUFBK0NyVCxDQUFDLENBQUM4TSxhQUFqRDtBQUNIOztBQUVEcEgsS0FBQyxDQUFDdkYsTUFBRCxDQUFELENBQVVrVCxHQUFWLENBQWMsbUNBQW1DclQsQ0FBQyxDQUFDNEYsV0FBbkQsRUFBZ0U1RixDQUFDLENBQUN5VCxpQkFBbEU7QUFFQS9OLEtBQUMsQ0FBQ3ZGLE1BQUQsQ0FBRCxDQUFVa1QsR0FBVixDQUFjLHdCQUF3QnJULENBQUMsQ0FBQzRGLFdBQXhDLEVBQXFENUYsQ0FBQyxDQUFDMFQsTUFBdkQ7QUFFQWhPLEtBQUMsQ0FBQyxtQkFBRCxFQUFzQjFGLENBQUMsQ0FBQ29LLFdBQXhCLENBQUQsQ0FBc0NpSixHQUF0QyxDQUEwQyxXQUExQyxFQUF1RHJULENBQUMsQ0FBQzZTLGNBQXpEO0FBRUFuTixLQUFDLENBQUN2RixNQUFELENBQUQsQ0FBVWtULEdBQVYsQ0FBYyxzQkFBc0JyVCxDQUFDLENBQUM0RixXQUF0QyxFQUFtRDVGLENBQUMsQ0FBQytNLFdBQXJEO0FBRUgsR0F2REQ7O0FBeURBcEgsT0FBSyxDQUFDaEksU0FBTixDQUFnQjZWLGtCQUFoQixHQUFxQyxZQUFXO0FBRTVDLFFBQUl4VCxDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDMEssS0FBRixDQUFRMkksR0FBUixDQUFZLGtCQUFaLEVBQWdDM04sQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDc1QsU0FBVixFQUFxQnRULENBQXJCLEVBQXdCLElBQXhCLENBQWhDOztBQUNBQSxLQUFDLENBQUMwSyxLQUFGLENBQVEySSxHQUFSLENBQVksa0JBQVosRUFBZ0MzTixDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUNzVCxTQUFWLEVBQXFCdFQsQ0FBckIsRUFBd0IsS0FBeEIsQ0FBaEM7QUFFSCxHQVBEOztBQVNBMkYsT0FBSyxDQUFDaEksU0FBTixDQUFnQmdXLFdBQWhCLEdBQThCLFlBQVc7QUFFckMsUUFBSTNULENBQUMsR0FBRyxJQUFSO0FBQUEsUUFBY2tSLGNBQWQ7O0FBRUEsUUFBR2xSLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5FLElBQVYsR0FBaUIsQ0FBcEIsRUFBdUI7QUFDbkJpSixvQkFBYyxHQUFHbFIsQ0FBQyxDQUFDcUssT0FBRixDQUFVeEgsUUFBVixHQUFxQkEsUUFBckIsRUFBakI7QUFDQXFPLG9CQUFjLENBQUNmLFVBQWYsQ0FBMEIsT0FBMUI7O0FBQ0FuUSxPQUFDLENBQUM0TCxPQUFGLENBQVU2RixLQUFWLEdBQWtCckQsTUFBbEIsQ0FBeUI4QyxjQUF6QjtBQUNIO0FBRUosR0FWRDs7QUFZQXZMLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JrUCxZQUFoQixHQUErQixVQUFTeUYsS0FBVCxFQUFnQjtBQUUzQyxRQUFJdFMsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDMkwsV0FBRixLQUFrQixLQUF0QixFQUE2QjtBQUN6QjJHLFdBQUssQ0FBQ3NCLHdCQUFOO0FBQ0F0QixXQUFLLENBQUN1QixlQUFOO0FBQ0F2QixXQUFLLENBQUNPLGNBQU47QUFDSDtBQUVKLEdBVkQ7O0FBWUFsTixPQUFLLENBQUNoSSxTQUFOLENBQWdCbVcsT0FBaEIsR0FBMEIsVUFBUy9TLE9BQVQsRUFBa0I7QUFFeEMsUUFBSWYsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQzBNLGFBQUY7O0FBRUExTSxLQUFDLENBQUMySyxXQUFGLEdBQWdCLEVBQWhCOztBQUVBM0ssS0FBQyxDQUFDb1QsYUFBRjs7QUFFQTFOLEtBQUMsQ0FBQyxlQUFELEVBQWtCMUYsQ0FBQyxDQUFDNEwsT0FBcEIsQ0FBRCxDQUE4QnVDLE1BQTlCOztBQUVBLFFBQUluTyxDQUFDLENBQUMySixLQUFOLEVBQWE7QUFDVDNKLE9BQUMsQ0FBQzJKLEtBQUYsQ0FBUW5GLE1BQVI7QUFDSDs7QUFFRCxRQUFLeEUsQ0FBQyxDQUFDZ0ssVUFBRixJQUFnQmhLLENBQUMsQ0FBQ2dLLFVBQUYsQ0FBYXRNLE1BQWxDLEVBQTJDO0FBRXZDc0MsT0FBQyxDQUFDZ0ssVUFBRixDQUNLa0csV0FETCxDQUNpQix5Q0FEakIsRUFFS0MsVUFGTCxDQUVnQixvQ0FGaEIsRUFHS2hCLEdBSEwsQ0FHUyxTQUhULEVBR21CLEVBSG5COztBQUtBLFVBQUtuUCxDQUFDLENBQUNtTixRQUFGLENBQVd2TCxJQUFYLENBQWlCNUIsQ0FBQyxDQUFDb00sT0FBRixDQUFVN0YsU0FBM0IsQ0FBTCxFQUE2QztBQUN6Q3ZHLFNBQUMsQ0FBQ2dLLFVBQUYsQ0FBYXhGLE1BQWI7QUFDSDtBQUNKOztBQUVELFFBQUt4RSxDQUFDLENBQUMrSixVQUFGLElBQWdCL0osQ0FBQyxDQUFDK0osVUFBRixDQUFhck0sTUFBbEMsRUFBMkM7QUFFdkNzQyxPQUFDLENBQUMrSixVQUFGLENBQ0ttRyxXQURMLENBQ2lCLHlDQURqQixFQUVLQyxVQUZMLENBRWdCLG9DQUZoQixFQUdLaEIsR0FITCxDQUdTLFNBSFQsRUFHbUIsRUFIbkI7O0FBS0EsVUFBS25QLENBQUMsQ0FBQ21OLFFBQUYsQ0FBV3ZMLElBQVgsQ0FBaUI1QixDQUFDLENBQUNvTSxPQUFGLENBQVU1RixTQUEzQixDQUFMLEVBQTZDO0FBQ3pDeEcsU0FBQyxDQUFDK0osVUFBRixDQUFhdkYsTUFBYjtBQUNIO0FBQ0o7O0FBR0QsUUFBSXhFLENBQUMsQ0FBQ3FLLE9BQU4sRUFBZTtBQUVYckssT0FBQyxDQUFDcUssT0FBRixDQUNLNkYsV0FETCxDQUNpQixtRUFEakIsRUFFS0MsVUFGTCxDQUVnQixhQUZoQixFQUdLQSxVQUhMLENBR2dCLGtCQUhoQixFQUlLOUIsSUFKTCxDQUlVLFlBQVU7QUFDWjNJLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZILElBQVIsQ0FBYSxPQUFiLEVBQXNCN0gsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFReUcsSUFBUixDQUFhLGlCQUFiLENBQXRCO0FBQ0gsT0FOTDs7QUFRQW5NLE9BQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsS0FBS3VKLE9BQUwsQ0FBYWpFLEtBQXBDLEVBQTJDZ0csTUFBM0M7O0FBRUFuTyxPQUFDLENBQUNvSyxXQUFGLENBQWMrRCxNQUFkOztBQUVBbk8sT0FBQyxDQUFDMEssS0FBRixDQUFReUQsTUFBUjs7QUFFQW5PLE9BQUMsQ0FBQzRMLE9BQUYsQ0FBVXdDLE1BQVYsQ0FBaUJwTyxDQUFDLENBQUNxSyxPQUFuQjtBQUNIOztBQUVEckssS0FBQyxDQUFDMlQsV0FBRjs7QUFFQTNULEtBQUMsQ0FBQzRMLE9BQUYsQ0FBVXNFLFdBQVYsQ0FBc0IsY0FBdEI7O0FBQ0FsUSxLQUFDLENBQUM0TCxPQUFGLENBQVVzRSxXQUFWLENBQXNCLG1CQUF0Qjs7QUFDQWxRLEtBQUMsQ0FBQzRMLE9BQUYsQ0FBVXNFLFdBQVYsQ0FBc0IsY0FBdEI7O0FBRUFsUSxLQUFDLENBQUM2SyxTQUFGLEdBQWMsSUFBZDs7QUFFQSxRQUFHLENBQUM5SixPQUFKLEVBQWE7QUFDVGYsT0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixTQUFsQixFQUE2QixDQUFDclMsQ0FBRCxDQUE3QjtBQUNIO0FBRUosR0F4RUQ7O0FBMEVBMkYsT0FBSyxDQUFDaEksU0FBTixDQUFnQjJSLGlCQUFoQixHQUFvQyxVQUFTbkgsS0FBVCxFQUFnQjtBQUVoRCxRQUFJbkksQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJNFAsVUFBVSxHQUFHLEVBRGpCOztBQUdBQSxjQUFVLENBQUM1UCxDQUFDLENBQUMrTCxjQUFILENBQVYsR0FBK0IsRUFBL0I7O0FBRUEsUUFBSS9MLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUJySCxPQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCUyxVQUFsQjtBQUNILEtBRkQsTUFFTztBQUNINVAsT0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhN0YsS0FBYixFQUFvQmdILEdBQXBCLENBQXdCUyxVQUF4QjtBQUNIO0FBRUosR0FiRDs7QUFlQWpLLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JvVyxTQUFoQixHQUE0QixVQUFTQyxVQUFULEVBQXFCbEYsUUFBckIsRUFBK0I7QUFFdkQsUUFBSTlPLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUlBLENBQUMsQ0FBQ29MLGNBQUYsS0FBcUIsS0FBekIsRUFBZ0M7QUFFNUJwTCxPQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFnRyxVQUFiLEVBQXlCN0UsR0FBekIsQ0FBNkI7QUFDekJqRyxjQUFNLEVBQUVsSixDQUFDLENBQUNvTSxPQUFGLENBQVVsRDtBQURPLE9BQTdCOztBQUlBbEosT0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhZ0csVUFBYixFQUF5QnRGLE9BQXpCLENBQWlDO0FBQzdCdUYsZUFBTyxFQUFFO0FBRG9CLE9BQWpDLEVBRUdqVSxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUZiLEVBRW9CdkksQ0FBQyxDQUFDb00sT0FBRixDQUFVdE4sTUFGOUIsRUFFc0NnUSxRQUZ0QztBQUlILEtBVkQsTUFVTztBQUVIOU8sT0FBQyxDQUFDcVAsZUFBRixDQUFrQjJFLFVBQWxCOztBQUVBaFUsT0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhZ0csVUFBYixFQUF5QjdFLEdBQXpCLENBQTZCO0FBQ3pCOEUsZUFBTyxFQUFFLENBRGdCO0FBRXpCL0ssY0FBTSxFQUFFbEosQ0FBQyxDQUFDb00sT0FBRixDQUFVbEQ7QUFGTyxPQUE3Qjs7QUFLQSxVQUFJNEYsUUFBSixFQUFjO0FBQ1Y1TixrQkFBVSxDQUFDLFlBQVc7QUFFbEJsQixXQUFDLENBQUNzUCxpQkFBRixDQUFvQjBFLFVBQXBCOztBQUVBbEYsa0JBQVEsQ0FBQzVSLElBQVQ7QUFDSCxTQUxTLEVBS1A4QyxDQUFDLENBQUNvTSxPQUFGLENBQVU3RCxLQUxILENBQVY7QUFNSDtBQUVKO0FBRUosR0FsQ0Q7O0FBb0NBNUMsT0FBSyxDQUFDaEksU0FBTixDQUFnQnVXLFlBQWhCLEdBQStCLFVBQVNGLFVBQVQsRUFBcUI7QUFFaEQsUUFBSWhVLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUlBLENBQUMsQ0FBQ29MLGNBQUYsS0FBcUIsS0FBekIsRUFBZ0M7QUFFNUJwTCxPQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFnRyxVQUFiLEVBQXlCdEYsT0FBekIsQ0FBaUM7QUFDN0J1RixlQUFPLEVBQUUsQ0FEb0I7QUFFN0IvSyxjQUFNLEVBQUVsSixDQUFDLENBQUNvTSxPQUFGLENBQVVsRCxNQUFWLEdBQW1CO0FBRkUsT0FBakMsRUFHR2xKLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTdELEtBSGIsRUFHb0J2SSxDQUFDLENBQUNvTSxPQUFGLENBQVV0TixNQUg5QjtBQUtILEtBUEQsTUFPTztBQUVIa0IsT0FBQyxDQUFDcVAsZUFBRixDQUFrQjJFLFVBQWxCOztBQUVBaFUsT0FBQyxDQUFDcUssT0FBRixDQUFVMkQsRUFBVixDQUFhZ0csVUFBYixFQUF5QjdFLEdBQXpCLENBQTZCO0FBQ3pCOEUsZUFBTyxFQUFFLENBRGdCO0FBRXpCL0ssY0FBTSxFQUFFbEosQ0FBQyxDQUFDb00sT0FBRixDQUFVbEQsTUFBVixHQUFtQjtBQUZGLE9BQTdCO0FBS0g7QUFFSixHQXRCRDs7QUF3QkF2RCxPQUFLLENBQUNoSSxTQUFOLENBQWdCd1csWUFBaEIsR0FBK0J4TyxLQUFLLENBQUNoSSxTQUFOLENBQWdCeVcsV0FBaEIsR0FBOEIsVUFBU0MsTUFBVCxFQUFpQjtBQUUxRSxRQUFJclUsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSXFVLE1BQU0sS0FBSyxJQUFmLEVBQXFCO0FBRWpCclUsT0FBQyxDQUFDNkwsWUFBRixHQUFpQjdMLENBQUMsQ0FBQ3FLLE9BQW5COztBQUVBckssT0FBQyxDQUFDNk4sTUFBRjs7QUFFQTdOLE9BQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsS0FBS3VKLE9BQUwsQ0FBYWpFLEtBQXBDLEVBQTJDZ0csTUFBM0M7O0FBRUFuTyxPQUFDLENBQUM2TCxZQUFGLENBQWV3SSxNQUFmLENBQXNCQSxNQUF0QixFQUE4QnZHLFFBQTlCLENBQXVDOU4sQ0FBQyxDQUFDb0ssV0FBekM7O0FBRUFwSyxPQUFDLENBQUNzTyxNQUFGO0FBRUg7QUFFSixHQWxCRDs7QUFvQkEzSSxPQUFLLENBQUNoSSxTQUFOLENBQWdCMlcsWUFBaEIsR0FBK0IsWUFBVztBQUV0QyxRQUFJdFUsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQzRMLE9BQUYsQ0FDS3lILEdBREwsQ0FDUyx3QkFEVCxFQUVLa0IsRUFGTCxDQUVRLHdCQUZSLEVBRWtDLEdBRmxDLEVBRXVDLFVBQVNqQyxLQUFULEVBQWdCO0FBRW5EQSxXQUFLLENBQUNzQix3QkFBTjtBQUNBLFVBQUlZLEdBQUcsR0FBRzlPLENBQUMsQ0FBQyxJQUFELENBQVg7QUFFQXhFLGdCQUFVLENBQUMsWUFBVztBQUVsQixZQUFJbEIsQ0FBQyxDQUFDb00sT0FBRixDQUFVdkUsWUFBZCxFQUE2QjtBQUN6QjdILFdBQUMsQ0FBQ3FMLFFBQUYsR0FBYW1KLEdBQUcsQ0FBQzVCLEVBQUosQ0FBTyxRQUFQLENBQWI7O0FBQ0E1UyxXQUFDLENBQUN3TSxRQUFGO0FBQ0g7QUFFSixPQVBTLEVBT1AsQ0FQTyxDQUFWO0FBU0gsS0FoQkQ7QUFpQkgsR0FyQkQ7O0FBdUJBN0csT0FBSyxDQUFDaEksU0FBTixDQUFnQjhXLFVBQWhCLEdBQTZCOU8sS0FBSyxDQUFDaEksU0FBTixDQUFnQitXLGlCQUFoQixHQUFvQyxZQUFXO0FBRXhFLFFBQUkxVSxDQUFDLEdBQUcsSUFBUjs7QUFDQSxXQUFPQSxDQUFDLENBQUN5SixZQUFUO0FBRUgsR0FMRDs7QUFPQTlELE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0IyUyxXQUFoQixHQUE4QixZQUFXO0FBRXJDLFFBQUl0USxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFJMlUsVUFBVSxHQUFHLENBQWpCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQSxRQUFJQyxRQUFRLEdBQUcsQ0FBZjs7QUFFQSxRQUFJN1UsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixJQUEzQixFQUFpQztBQUM3QixVQUFJeEgsQ0FBQyxDQUFDa0ssVUFBRixJQUFnQmxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTlCLEVBQTRDO0FBQ3ZDLFVBQUV3TSxRQUFGO0FBQ0osT0FGRCxNQUVPO0FBQ0gsZUFBT0YsVUFBVSxHQUFHM1UsQ0FBQyxDQUFDa0ssVUFBdEIsRUFBa0M7QUFDOUIsWUFBRTJLLFFBQUY7QUFDQUYsb0JBQVUsR0FBR0MsT0FBTyxHQUFHNVUsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBakM7QUFDQXNNLGlCQUFPLElBQUk1VSxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUFWLElBQTRCdEksQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBdEMsR0FBcURySSxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUEvRCxHQUFnRnRJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXJHO0FBQ0g7QUFDSjtBQUNKLEtBVkQsTUFVTyxJQUFJckksQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUN0Q2tPLGNBQVEsR0FBRzdVLENBQUMsQ0FBQ2tLLFVBQWI7QUFDSCxLQUZNLE1BRUEsSUFBRyxDQUFDbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVOUYsUUFBZCxFQUF3QjtBQUMzQnVPLGNBQVEsR0FBRyxJQUFJdlMsSUFBSSxDQUFDNE0sSUFBTCxDQUFVLENBQUNsUCxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUExQixJQUEwQ3JJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQTlELENBQWY7QUFDSCxLQUZNLE1BRUQ7QUFDRixhQUFPcU0sVUFBVSxHQUFHM1UsQ0FBQyxDQUFDa0ssVUFBdEIsRUFBa0M7QUFDOUIsVUFBRTJLLFFBQUY7QUFDQUYsa0JBQVUsR0FBR0MsT0FBTyxHQUFHNVUsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBakM7QUFDQXNNLGVBQU8sSUFBSTVVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQVYsSUFBNEJ0SSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF0QyxHQUFxRHJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQS9ELEdBQWdGdEksQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBckc7QUFDSDtBQUNKOztBQUVELFdBQU93TSxRQUFRLEdBQUcsQ0FBbEI7QUFFSCxHQWhDRDs7QUFrQ0FsUCxPQUFLLENBQUNoSSxTQUFOLENBQWdCbVgsT0FBaEIsR0FBMEIsVUFBU2QsVUFBVCxFQUFxQjtBQUUzQyxRQUFJaFUsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJNk8sVUFESjtBQUFBLFFBRUlrRyxjQUZKO0FBQUEsUUFHSUMsY0FBYyxHQUFHLENBSHJCO0FBQUEsUUFJSUMsV0FKSjtBQUFBLFFBS0lDLElBTEo7O0FBT0FsVixLQUFDLENBQUN1SyxXQUFGLEdBQWdCLENBQWhCO0FBQ0F3SyxrQkFBYyxHQUFHL1UsQ0FBQyxDQUFDcUssT0FBRixDQUFVa0csS0FBVixHQUFrQjlCLFdBQWxCLENBQThCLElBQTlCLENBQWpCOztBQUVBLFFBQUl6TyxDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEtBQXVCLElBQTNCLEVBQWlDO0FBQzdCLFVBQUl4SCxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE3QixFQUEyQztBQUN2Q3JJLFNBQUMsQ0FBQ3VLLFdBQUYsR0FBaUJ2SyxDQUFDLENBQUNtSyxVQUFGLEdBQWVuSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUExQixHQUEwQyxDQUFDLENBQTNEO0FBQ0E2TSxZQUFJLEdBQUcsQ0FBQyxDQUFSOztBQUVBLFlBQUlsVixDQUFDLENBQUNvTSxPQUFGLENBQVVyRCxRQUFWLEtBQXVCLElBQXZCLElBQStCL0ksQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUE1RCxFQUFrRTtBQUM5RCxjQUFJM0csQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixLQUEyQixDQUEvQixFQUFrQztBQUM5QjZNLGdCQUFJLEdBQUcsQ0FBQyxHQUFSO0FBQ0gsV0FGRCxNQUVPLElBQUlsVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEtBQTJCLENBQS9CLEVBQWtDO0FBQ3JDNk0sZ0JBQUksR0FBRyxDQUFDLENBQVI7QUFDSDtBQUNKOztBQUNERixzQkFBYyxHQUFJRCxjQUFjLEdBQUcvVSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE1QixHQUE0QzZNLElBQTdEO0FBQ0g7O0FBQ0QsVUFBSWxWLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQXpCLEtBQTRDLENBQWhELEVBQW1EO0FBQy9DLFlBQUkwTCxVQUFVLEdBQUdoVSxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUF2QixHQUF3Q3RJLENBQUMsQ0FBQ2tLLFVBQTFDLElBQXdEbEssQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBckYsRUFBbUc7QUFDL0YsY0FBSTJMLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ2tLLFVBQW5CLEVBQStCO0FBQzNCbEssYUFBQyxDQUFDdUssV0FBRixHQUFpQixDQUFDdkssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixJQUEwQjJMLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ2tLLFVBQXpDLENBQUQsSUFBeURsSyxDQUFDLENBQUNtSyxVQUE1RCxHQUEwRSxDQUFDLENBQTNGO0FBQ0E2SywwQkFBYyxHQUFJLENBQUNoVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLElBQTBCMkwsVUFBVSxHQUFHaFUsQ0FBQyxDQUFDa0ssVUFBekMsQ0FBRCxJQUF5RDZLLGNBQTFELEdBQTRFLENBQUMsQ0FBOUY7QUFDSCxXQUhELE1BR087QUFDSC9VLGFBQUMsQ0FBQ3VLLFdBQUYsR0FBa0J2SyxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUExQixHQUE0Q3RJLENBQUMsQ0FBQ21LLFVBQS9DLEdBQTZELENBQUMsQ0FBOUU7QUFDQTZLLDBCQUFjLEdBQUtoVixDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUExQixHQUE0Q3lNLGNBQTdDLEdBQStELENBQUMsQ0FBakY7QUFDSDtBQUNKO0FBQ0o7QUFDSixLQXpCRCxNQXlCTztBQUNILFVBQUlmLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXZCLEdBQXNDckksQ0FBQyxDQUFDa0ssVUFBNUMsRUFBd0Q7QUFDcERsSyxTQUFDLENBQUN1SyxXQUFGLEdBQWdCLENBQUV5SixVQUFVLEdBQUdoVSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF4QixHQUF3Q3JJLENBQUMsQ0FBQ2tLLFVBQTNDLElBQXlEbEssQ0FBQyxDQUFDbUssVUFBM0U7QUFDQTZLLHNCQUFjLEdBQUcsQ0FBRWhCLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXhCLEdBQXdDckksQ0FBQyxDQUFDa0ssVUFBM0MsSUFBeUQ2SyxjQUExRTtBQUNIO0FBQ0o7O0FBRUQsUUFBSS9VLENBQUMsQ0FBQ2tLLFVBQUYsSUFBZ0JsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE5QixFQUE0QztBQUN4Q3JJLE9BQUMsQ0FBQ3VLLFdBQUYsR0FBZ0IsQ0FBaEI7QUFDQXlLLG9CQUFjLEdBQUcsQ0FBakI7QUFDSDs7QUFFRCxRQUFJaFYsQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUF6QixJQUFpQzNHLENBQUMsQ0FBQ2tLLFVBQUYsSUFBZ0JsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUEvRCxFQUE2RTtBQUN6RXJJLE9BQUMsQ0FBQ3VLLFdBQUYsR0FBa0J2SyxDQUFDLENBQUNtSyxVQUFGLEdBQWU3SCxJQUFJLENBQUM2UyxLQUFMLENBQVduVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFyQixDQUFoQixHQUFzRCxDQUF2RCxHQUE4RHJJLENBQUMsQ0FBQ21LLFVBQUYsR0FBZW5LLENBQUMsQ0FBQ2tLLFVBQWxCLEdBQWdDLENBQTdHO0FBQ0gsS0FGRCxNQUVPLElBQUlsSyxDQUFDLENBQUNvTSxPQUFGLENBQVV6RixVQUFWLEtBQXlCLElBQXpCLElBQWlDM0csQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixJQUE1RCxFQUFrRTtBQUNyRXhILE9BQUMsQ0FBQ3VLLFdBQUYsSUFBaUJ2SyxDQUFDLENBQUNtSyxVQUFGLEdBQWU3SCxJQUFJLENBQUM2UyxLQUFMLENBQVduVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXBDLENBQWYsR0FBd0RySSxDQUFDLENBQUNtSyxVQUEzRTtBQUNILEtBRk0sTUFFQSxJQUFJbkssQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUN0QzNHLE9BQUMsQ0FBQ3VLLFdBQUYsR0FBZ0IsQ0FBaEI7QUFDQXZLLE9BQUMsQ0FBQ3VLLFdBQUYsSUFBaUJ2SyxDQUFDLENBQUNtSyxVQUFGLEdBQWU3SCxJQUFJLENBQUM2UyxLQUFMLENBQVduVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXBDLENBQWhDO0FBQ0g7O0FBRUQsUUFBSXJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUI4RixnQkFBVSxHQUFLbUYsVUFBVSxHQUFHaFUsQ0FBQyxDQUFDbUssVUFBaEIsR0FBOEIsQ0FBQyxDQUFoQyxHQUFxQ25LLENBQUMsQ0FBQ3VLLFdBQXBEO0FBQ0gsS0FGRCxNQUVPO0FBQ0hzRSxnQkFBVSxHQUFLbUYsVUFBVSxHQUFHZSxjQUFkLEdBQWdDLENBQUMsQ0FBbEMsR0FBdUNDLGNBQXBEO0FBQ0g7O0FBRUQsUUFBSWhWLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXRELGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFFbEMsVUFBSTlJLENBQUMsQ0FBQ2tLLFVBQUYsSUFBZ0JsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUExQixJQUEwQ3JJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTVFLFFBQVYsS0FBdUIsS0FBckUsRUFBNEU7QUFDeEV5TixtQkFBVyxHQUFHalYsQ0FBQyxDQUFDb0ssV0FBRixDQUFjdkgsUUFBZCxDQUF1QixjQUF2QixFQUF1Q21MLEVBQXZDLENBQTBDZ0csVUFBMUMsQ0FBZDtBQUNILE9BRkQsTUFFTztBQUNIaUIsbUJBQVcsR0FBR2pWLENBQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsY0FBdkIsRUFBdUNtTCxFQUF2QyxDQUEwQ2dHLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQWpFLENBQWQ7QUFDSDs7QUFFRCxVQUFJckksQ0FBQyxDQUFDb00sT0FBRixDQUFVbEUsR0FBVixLQUFrQixJQUF0QixFQUE0QjtBQUN4QixZQUFJK00sV0FBVyxDQUFDLENBQUQsQ0FBZixFQUFvQjtBQUNoQnBHLG9CQUFVLEdBQUcsQ0FBQzdPLENBQUMsQ0FBQ29LLFdBQUYsQ0FBYzhILEtBQWQsS0FBd0IrQyxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVoUSxVQUF2QyxHQUFvRGdRLFdBQVcsQ0FBQy9DLEtBQVosRUFBckQsSUFBNEUsQ0FBQyxDQUExRjtBQUNILFNBRkQsTUFFTztBQUNIckQsb0JBQVUsR0FBSSxDQUFkO0FBQ0g7QUFDSixPQU5ELE1BTU87QUFDSEEsa0JBQVUsR0FBR29HLFdBQVcsQ0FBQyxDQUFELENBQVgsR0FBaUJBLFdBQVcsQ0FBQyxDQUFELENBQVgsQ0FBZWhRLFVBQWYsR0FBNEIsQ0FBQyxDQUE5QyxHQUFrRCxDQUEvRDtBQUNIOztBQUVELFVBQUlqRixDQUFDLENBQUNvTSxPQUFGLENBQVV6RixVQUFWLEtBQXlCLElBQTdCLEVBQW1DO0FBQy9CLFlBQUkzRyxDQUFDLENBQUNrSyxVQUFGLElBQWdCbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBMUIsSUFBMENySSxDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEtBQXVCLEtBQXJFLEVBQTRFO0FBQ3hFeU4scUJBQVcsR0FBR2pWLENBQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsY0FBdkIsRUFBdUNtTCxFQUF2QyxDQUEwQ2dHLFVBQTFDLENBQWQ7QUFDSCxTQUZELE1BRU87QUFDSGlCLHFCQUFXLEdBQUdqVixDQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLENBQXVCLGNBQXZCLEVBQXVDbUwsRUFBdkMsQ0FBMENnRyxVQUFVLEdBQUdoVSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF2QixHQUFzQyxDQUFoRixDQUFkO0FBQ0g7O0FBRUQsWUFBSXJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxFLEdBQVYsS0FBa0IsSUFBdEIsRUFBNEI7QUFDeEIsY0FBSStNLFdBQVcsQ0FBQyxDQUFELENBQWYsRUFBb0I7QUFDaEJwRyxzQkFBVSxHQUFHLENBQUM3TyxDQUFDLENBQUNvSyxXQUFGLENBQWM4SCxLQUFkLEtBQXdCK0MsV0FBVyxDQUFDLENBQUQsQ0FBWCxDQUFlaFEsVUFBdkMsR0FBb0RnUSxXQUFXLENBQUMvQyxLQUFaLEVBQXJELElBQTRFLENBQUMsQ0FBMUY7QUFDSCxXQUZELE1BRU87QUFDSHJELHNCQUFVLEdBQUksQ0FBZDtBQUNIO0FBQ0osU0FORCxNQU1PO0FBQ0hBLG9CQUFVLEdBQUdvRyxXQUFXLENBQUMsQ0FBRCxDQUFYLEdBQWlCQSxXQUFXLENBQUMsQ0FBRCxDQUFYLENBQWVoUSxVQUFmLEdBQTRCLENBQUMsQ0FBOUMsR0FBa0QsQ0FBL0Q7QUFDSDs7QUFFRDRKLGtCQUFVLElBQUksQ0FBQzdPLENBQUMsQ0FBQzBLLEtBQUYsQ0FBUXdILEtBQVIsS0FBa0IrQyxXQUFXLENBQUNHLFVBQVosRUFBbkIsSUFBK0MsQ0FBN0Q7QUFDSDtBQUNKOztBQUVELFdBQU92RyxVQUFQO0FBRUgsR0F6R0Q7O0FBMkdBbEosT0FBSyxDQUFDaEksU0FBTixDQUFnQjBYLFNBQWhCLEdBQTRCMVAsS0FBSyxDQUFDaEksU0FBTixDQUFnQjJYLGNBQWhCLEdBQWlDLFVBQVNDLE1BQVQsRUFBaUI7QUFFMUUsUUFBSXZWLENBQUMsR0FBRyxJQUFSOztBQUVBLFdBQU9BLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW1KLE1BQVYsQ0FBUDtBQUVILEdBTkQ7O0FBUUE1UCxPQUFLLENBQUNoSSxTQUFOLENBQWdCd1YsbUJBQWhCLEdBQXNDLFlBQVc7QUFFN0MsUUFBSW5ULENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSTJVLFVBQVUsR0FBRyxDQURqQjtBQUFBLFFBRUlDLE9BQU8sR0FBRyxDQUZkO0FBQUEsUUFHSVksT0FBTyxHQUFHLEVBSGQ7QUFBQSxRQUlJalQsR0FKSjs7QUFNQSxRQUFJdkMsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixLQUEzQixFQUFrQztBQUM5QmpGLFNBQUcsR0FBR3ZDLENBQUMsQ0FBQ2tLLFVBQVI7QUFDSCxLQUZELE1BRU87QUFDSHlLLGdCQUFVLEdBQUczVSxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUFWLEdBQTJCLENBQUMsQ0FBekM7QUFDQXNNLGFBQU8sR0FBRzVVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQVYsR0FBMkIsQ0FBQyxDQUF0QztBQUNBL0YsU0FBRyxHQUFHdkMsQ0FBQyxDQUFDa0ssVUFBRixHQUFlLENBQXJCO0FBQ0g7O0FBRUQsV0FBT3lLLFVBQVUsR0FBR3BTLEdBQXBCLEVBQXlCO0FBQ3JCaVQsYUFBTyxDQUFDQyxJQUFSLENBQWFkLFVBQWI7QUFDQUEsZ0JBQVUsR0FBR0MsT0FBTyxHQUFHNVUsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBakM7QUFDQXNNLGFBQU8sSUFBSTVVLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQVYsSUFBNEJ0SSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF0QyxHQUFxRHJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQS9ELEdBQWdGdEksQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBckc7QUFDSDs7QUFFRCxXQUFPbU4sT0FBUDtBQUVILEdBeEJEOztBQTBCQTdQLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0IrWCxRQUFoQixHQUEyQixZQUFXO0FBRWxDLFdBQU8sSUFBUDtBQUVILEdBSkQ7O0FBTUEvUCxPQUFLLENBQUNoSSxTQUFOLENBQWdCZ1ksYUFBaEIsR0FBZ0MsWUFBVztBQUV2QyxRQUFJM1YsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJNFYsZUFESjtBQUFBLFFBQ3FCQyxXQURyQjtBQUFBLFFBQ2tDQyxZQURsQzs7QUFHQUEsZ0JBQVksR0FBRzlWLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXpGLFVBQVYsS0FBeUIsSUFBekIsR0FBZ0MzRyxDQUFDLENBQUNtSyxVQUFGLEdBQWU3SCxJQUFJLENBQUM2UyxLQUFMLENBQVduVixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXBDLENBQS9DLEdBQXdGLENBQXZHOztBQUVBLFFBQUlySSxDQUFDLENBQUNvTSxPQUFGLENBQVUzRCxZQUFWLEtBQTJCLElBQS9CLEVBQXFDO0FBQ2pDekksT0FBQyxDQUFDb0ssV0FBRixDQUFja0QsSUFBZCxDQUFtQixjQUFuQixFQUFtQ2UsSUFBbkMsQ0FBd0MsVUFBU1YsS0FBVCxFQUFnQnhGLEtBQWhCLEVBQXVCO0FBQzNELFlBQUlBLEtBQUssQ0FBQ2xELFVBQU4sR0FBbUI2USxZQUFuQixHQUFtQ3BRLENBQUMsQ0FBQ3lDLEtBQUQsQ0FBRCxDQUFTaU4sVUFBVCxLQUF3QixDQUEzRCxHQUFpRXBWLENBQUMsQ0FBQ3dLLFNBQUYsR0FBYyxDQUFDLENBQXBGLEVBQXdGO0FBQ3BGcUwscUJBQVcsR0FBRzFOLEtBQWQ7QUFDQSxpQkFBTyxLQUFQO0FBQ0g7QUFDSixPQUxEOztBQU9BeU4scUJBQWUsR0FBR3RULElBQUksQ0FBQ3lULEdBQUwsQ0FBU3JRLENBQUMsQ0FBQ21RLFdBQUQsQ0FBRCxDQUFldEksSUFBZixDQUFvQixrQkFBcEIsSUFBMEN2TixDQUFDLENBQUN5SixZQUFyRCxLQUFzRSxDQUF4RjtBQUVBLGFBQU9tTSxlQUFQO0FBRUgsS0FaRCxNQVlPO0FBQ0gsYUFBTzVWLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQWpCO0FBQ0g7QUFFSixHQXZCRDs7QUF5QkEzQyxPQUFLLENBQUNoSSxTQUFOLENBQWdCcVksSUFBaEIsR0FBdUJyUSxLQUFLLENBQUNoSSxTQUFOLENBQWdCc1ksU0FBaEIsR0FBNEIsVUFBUzlOLEtBQVQsRUFBZ0JvSyxXQUFoQixFQUE2QjtBQUU1RSxRQUFJdlMsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQzRNLFdBQUYsQ0FBYztBQUNWVCxVQUFJLEVBQUU7QUFDRjRHLGVBQU8sRUFBRSxPQURQO0FBRUZwRixhQUFLLEVBQUV6TCxRQUFRLENBQUNpRyxLQUFEO0FBRmI7QUFESSxLQUFkLEVBS0dvSyxXQUxIO0FBT0gsR0FYRDs7QUFhQTVNLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JtRCxJQUFoQixHQUF1QixVQUFTb1YsUUFBVCxFQUFtQjtBQUV0QyxRQUFJbFcsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSSxDQUFDMEYsQ0FBQyxDQUFDMUYsQ0FBQyxDQUFDNEwsT0FBSCxDQUFELENBQWF1SyxRQUFiLENBQXNCLG1CQUF0QixDQUFMLEVBQWlEO0FBRTdDelEsT0FBQyxDQUFDMUYsQ0FBQyxDQUFDNEwsT0FBSCxDQUFELENBQWFxRSxRQUFiLENBQXNCLG1CQUF0Qjs7QUFFQWpRLE9BQUMsQ0FBQytRLFNBQUY7O0FBQ0EvUSxPQUFDLENBQUN3USxRQUFGOztBQUNBeFEsT0FBQyxDQUFDb1csUUFBRjs7QUFDQXBXLE9BQUMsQ0FBQ3FXLFNBQUY7O0FBQ0FyVyxPQUFDLENBQUNzVyxVQUFGOztBQUNBdFcsT0FBQyxDQUFDdVcsZ0JBQUY7O0FBQ0F2VyxPQUFDLENBQUN3VyxZQUFGOztBQUNBeFcsT0FBQyxDQUFDNlEsVUFBRjs7QUFDQTdRLE9BQUMsQ0FBQzBSLGVBQUYsQ0FBa0IsSUFBbEI7O0FBQ0ExUixPQUFDLENBQUNzVSxZQUFGO0FBRUg7O0FBRUQsUUFBSTRCLFFBQUosRUFBYztBQUNWbFcsT0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixNQUFsQixFQUEwQixDQUFDclMsQ0FBRCxDQUExQjtBQUNIOztBQUVELFFBQUlBLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5HLGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDbENqRyxPQUFDLENBQUN5VyxPQUFGO0FBQ0g7O0FBRUQsUUFBS3pXLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNGLFFBQWYsRUFBMEI7QUFFdEJ6RyxPQUFDLENBQUN3TCxNQUFGLEdBQVcsS0FBWDs7QUFDQXhMLE9BQUMsQ0FBQ3dNLFFBQUY7QUFFSDtBQUVKLEdBcENEOztBQXNDQTdHLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0I4WSxPQUFoQixHQUEwQixZQUFXO0FBQ2pDLFFBQUl6VyxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQ1EwVyxZQUFZLEdBQUdwVSxJQUFJLENBQUM0TSxJQUFMLENBQVVsUCxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFuQyxDQUR2QjtBQUFBLFFBRVFzTyxpQkFBaUIsR0FBRzNXLENBQUMsQ0FBQ21ULG1CQUFGLEdBQXdCa0IsTUFBeEIsQ0FBK0IsVUFBU3VDLEdBQVQsRUFBYztBQUM3RCxhQUFRQSxHQUFHLElBQUksQ0FBUixJQUFlQSxHQUFHLEdBQUc1VyxDQUFDLENBQUNrSyxVQUE5QjtBQUNILEtBRm1CLENBRjVCOztBQU1BbEssS0FBQyxDQUFDcUssT0FBRixDQUFVOUYsR0FBVixDQUFjdkUsQ0FBQyxDQUFDb0ssV0FBRixDQUFja0QsSUFBZCxDQUFtQixlQUFuQixDQUFkLEVBQW1EQyxJQUFuRCxDQUF3RDtBQUNwRCxxQkFBZSxNQURxQztBQUVwRCxrQkFBWTtBQUZ3QyxLQUF4RCxFQUdHRCxJQUhILENBR1EsMEJBSFIsRUFHb0NDLElBSHBDLENBR3lDO0FBQ3JDLGtCQUFZO0FBRHlCLEtBSHpDOztBQU9BLFFBQUl2TixDQUFDLENBQUMySixLQUFGLEtBQVksSUFBaEIsRUFBc0I7QUFDbEIzSixPQUFDLENBQUNxSyxPQUFGLENBQVVtRixHQUFWLENBQWN4UCxDQUFDLENBQUNvSyxXQUFGLENBQWNrRCxJQUFkLENBQW1CLGVBQW5CLENBQWQsRUFBbURlLElBQW5ELENBQXdELFVBQVN0UixDQUFULEVBQVk7QUFDaEUsWUFBSThaLGlCQUFpQixHQUFHRixpQkFBaUIsQ0FBQ2pXLE9BQWxCLENBQTBCM0QsQ0FBMUIsQ0FBeEI7QUFFQTJJLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTZILElBQVIsQ0FBYTtBQUNULGtCQUFRLFVBREM7QUFFVCxnQkFBTSxnQkFBZ0J2TixDQUFDLENBQUM0RixXQUFsQixHQUFnQzdJLENBRjdCO0FBR1Qsc0JBQVksQ0FBQztBQUhKLFNBQWI7O0FBTUEsWUFBSThaLGlCQUFpQixLQUFLLENBQUMsQ0FBM0IsRUFBOEI7QUFDM0IsY0FBSUMsaUJBQWlCLEdBQUcsd0JBQXdCOVcsQ0FBQyxDQUFDNEYsV0FBMUIsR0FBd0NpUixpQkFBaEU7O0FBQ0EsY0FBSW5SLENBQUMsQ0FBQyxNQUFNb1IsaUJBQVAsQ0FBRCxDQUEyQnBaLE1BQS9CLEVBQXVDO0FBQ3JDZ0ksYUFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkgsSUFBUixDQUFhO0FBQ1Qsa0NBQW9CdUo7QUFEWCxhQUFiO0FBR0Q7QUFDSDtBQUNKLE9BakJEOztBQW1CQTlXLE9BQUMsQ0FBQzJKLEtBQUYsQ0FBUTRELElBQVIsQ0FBYSxNQUFiLEVBQXFCLFNBQXJCLEVBQWdDRCxJQUFoQyxDQUFxQyxJQUFyQyxFQUEyQ2UsSUFBM0MsQ0FBZ0QsVUFBU3RSLENBQVQsRUFBWTtBQUN4RCxZQUFJZ2EsZ0JBQWdCLEdBQUdKLGlCQUFpQixDQUFDNVosQ0FBRCxDQUF4QztBQUVBMkksU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkgsSUFBUixDQUFhO0FBQ1Qsa0JBQVE7QUFEQyxTQUFiO0FBSUE3SCxTQUFDLENBQUMsSUFBRCxDQUFELENBQVE0SCxJQUFSLENBQWEsUUFBYixFQUF1QmlELEtBQXZCLEdBQStCaEQsSUFBL0IsQ0FBb0M7QUFDaEMsa0JBQVEsS0FEd0I7QUFFaEMsZ0JBQU0sd0JBQXdCdk4sQ0FBQyxDQUFDNEYsV0FBMUIsR0FBd0M3SSxDQUZkO0FBR2hDLDJCQUFpQixnQkFBZ0JpRCxDQUFDLENBQUM0RixXQUFsQixHQUFnQ21SLGdCQUhqQjtBQUloQyx3QkFBZWhhLENBQUMsR0FBRyxDQUFMLEdBQVUsTUFBVixHQUFtQjJaLFlBSkQ7QUFLaEMsMkJBQWlCLElBTGU7QUFNaEMsc0JBQVk7QUFOb0IsU0FBcEM7QUFTSCxPQWhCRCxFQWdCRzFJLEVBaEJILENBZ0JNaE8sQ0FBQyxDQUFDeUosWUFoQlIsRUFnQnNCNkQsSUFoQnRCLENBZ0IyQixRQWhCM0IsRUFnQnFDQyxJQWhCckMsQ0FnQjBDO0FBQ3RDLHlCQUFpQixNQURxQjtBQUV0QyxvQkFBWTtBQUYwQixPQWhCMUMsRUFtQkd5SixHQW5CSDtBQW9CSDs7QUFFRCxTQUFLLElBQUlqYSxDQUFDLEdBQUNpRCxDQUFDLENBQUN5SixZQUFSLEVBQXNCbEgsR0FBRyxHQUFDeEYsQ0FBQyxHQUFDaUQsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBM0MsRUFBeUR0TCxDQUFDLEdBQUd3RixHQUE3RCxFQUFrRXhGLENBQUMsRUFBbkUsRUFBdUU7QUFDckUsVUFBSWlELENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTdFLGFBQWQsRUFBNkI7QUFDM0J2SCxTQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFqUixDQUFiLEVBQWdCd1EsSUFBaEIsQ0FBcUI7QUFBQyxzQkFBWTtBQUFiLFNBQXJCO0FBQ0QsT0FGRCxNQUVPO0FBQ0x2TixTQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFqUixDQUFiLEVBQWdCb1QsVUFBaEIsQ0FBMkIsVUFBM0I7QUFDRDtBQUNGOztBQUVEblEsS0FBQyxDQUFDcU4sV0FBRjtBQUVILEdBbEVEOztBQW9FQTFILE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JzWixlQUFoQixHQUFrQyxZQUFXO0FBRXpDLFFBQUlqWCxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFJQSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRixNQUFWLEtBQXFCLElBQXJCLElBQTZCckcsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBMUQsRUFBd0U7QUFDcEVySSxPQUFDLENBQUNnSyxVQUFGLENBQ0lxSixHQURKLENBQ1EsYUFEUixFQUVJa0IsRUFGSixDQUVPLGFBRlAsRUFFc0I7QUFDZHhCLGVBQU8sRUFBRTtBQURLLE9BRnRCLEVBSU0vUyxDQUFDLENBQUM0TSxXQUpSOztBQUtBNU0sT0FBQyxDQUFDK0osVUFBRixDQUNJc0osR0FESixDQUNRLGFBRFIsRUFFSWtCLEVBRkosQ0FFTyxhQUZQLEVBRXNCO0FBQ2R4QixlQUFPLEVBQUU7QUFESyxPQUZ0QixFQUlNL1MsQ0FBQyxDQUFDNE0sV0FKUjs7QUFNQSxVQUFJNU0sQ0FBQyxDQUFDb00sT0FBRixDQUFVbkcsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQ2pHLFNBQUMsQ0FBQ2dLLFVBQUYsQ0FBYXVLLEVBQWIsQ0FBZ0IsZUFBaEIsRUFBaUN2VSxDQUFDLENBQUNrTixVQUFuQzs7QUFDQWxOLFNBQUMsQ0FBQytKLFVBQUYsQ0FBYXdLLEVBQWIsQ0FBZ0IsZUFBaEIsRUFBaUN2VSxDQUFDLENBQUNrTixVQUFuQztBQUNIO0FBQ0o7QUFFSixHQXRCRDs7QUF3QkF2SCxPQUFLLENBQUNoSSxTQUFOLENBQWdCdVosYUFBaEIsR0FBZ0MsWUFBVztBQUV2QyxRQUFJbFgsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkYsSUFBVixLQUFtQixJQUFuQixJQUEyQmpILENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXhELEVBQXNFO0FBQ2xFM0MsT0FBQyxDQUFDLElBQUQsRUFBTzFGLENBQUMsQ0FBQzJKLEtBQVQsQ0FBRCxDQUFpQjRLLEVBQWpCLENBQW9CLGFBQXBCLEVBQW1DO0FBQy9CeEIsZUFBTyxFQUFFO0FBRHNCLE9BQW5DLEVBRUcvUyxDQUFDLENBQUM0TSxXQUZMOztBQUlBLFVBQUk1TSxDQUFDLENBQUNvTSxPQUFGLENBQVVuRyxhQUFWLEtBQTRCLElBQWhDLEVBQXNDO0FBQ2xDakcsU0FBQyxDQUFDMkosS0FBRixDQUFRNEssRUFBUixDQUFXLGVBQVgsRUFBNEJ2VSxDQUFDLENBQUNrTixVQUE5QjtBQUNIO0FBQ0o7O0FBRUQsUUFBSWxOLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5GLElBQVYsS0FBbUIsSUFBbkIsSUFBMkJqSCxDQUFDLENBQUNvTSxPQUFGLENBQVV0RSxnQkFBVixLQUErQixJQUExRCxJQUFrRTlILENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQS9GLEVBQTZHO0FBRXpHM0MsT0FBQyxDQUFDLElBQUQsRUFBTzFGLENBQUMsQ0FBQzJKLEtBQVQsQ0FBRCxDQUNLNEssRUFETCxDQUNRLGtCQURSLEVBQzRCN08sQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDc1QsU0FBVixFQUFxQnRULENBQXJCLEVBQXdCLElBQXhCLENBRDVCLEVBRUt1VSxFQUZMLENBRVEsa0JBRlIsRUFFNEI3TyxDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUNzVCxTQUFWLEVBQXFCdFQsQ0FBckIsRUFBd0IsS0FBeEIsQ0FGNUI7QUFJSDtBQUVKLEdBdEJEOztBQXdCQTJGLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0J3WixlQUFoQixHQUFrQyxZQUFXO0FBRXpDLFFBQUluWCxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFLQSxDQUFDLENBQUNvTSxPQUFGLENBQVV4RSxZQUFmLEVBQThCO0FBRTFCNUgsT0FBQyxDQUFDMEssS0FBRixDQUFRNkosRUFBUixDQUFXLGtCQUFYLEVBQStCN08sQ0FBQyxDQUFDK0csS0FBRixDQUFRek0sQ0FBQyxDQUFDc1QsU0FBVixFQUFxQnRULENBQXJCLEVBQXdCLElBQXhCLENBQS9COztBQUNBQSxPQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsa0JBQVgsRUFBK0I3TyxDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUNzVCxTQUFWLEVBQXFCdFQsQ0FBckIsRUFBd0IsS0FBeEIsQ0FBL0I7QUFFSDtBQUVKLEdBWEQ7O0FBYUEyRixPQUFLLENBQUNoSSxTQUFOLENBQWdCNFksZ0JBQWhCLEdBQW1DLFlBQVc7QUFFMUMsUUFBSXZXLENBQUMsR0FBRyxJQUFSOztBQUVBQSxLQUFDLENBQUNpWCxlQUFGOztBQUVBalgsS0FBQyxDQUFDa1gsYUFBRjs7QUFDQWxYLEtBQUMsQ0FBQ21YLGVBQUY7O0FBRUFuWCxLQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsa0NBQVgsRUFBK0M7QUFDM0M2QyxZQUFNLEVBQUU7QUFEbUMsS0FBL0MsRUFFR3BYLENBQUMsQ0FBQ2dOLFlBRkw7O0FBR0FoTixLQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsaUNBQVgsRUFBOEM7QUFDMUM2QyxZQUFNLEVBQUU7QUFEa0MsS0FBOUMsRUFFR3BYLENBQUMsQ0FBQ2dOLFlBRkw7O0FBR0FoTixLQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsOEJBQVgsRUFBMkM7QUFDdkM2QyxZQUFNLEVBQUU7QUFEK0IsS0FBM0MsRUFFR3BYLENBQUMsQ0FBQ2dOLFlBRkw7O0FBR0FoTixLQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsb0NBQVgsRUFBaUQ7QUFDN0M2QyxZQUFNLEVBQUU7QUFEcUMsS0FBakQsRUFFR3BYLENBQUMsQ0FBQ2dOLFlBRkw7O0FBSUFoTixLQUFDLENBQUMwSyxLQUFGLENBQVE2SixFQUFSLENBQVcsYUFBWCxFQUEwQnZVLENBQUMsQ0FBQzZNLFlBQTVCOztBQUVBbkgsS0FBQyxDQUFDekYsUUFBRCxDQUFELENBQVlzVSxFQUFaLENBQWV2VSxDQUFDLENBQUNnTSxnQkFBakIsRUFBbUN0RyxDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUN1VCxVQUFWLEVBQXNCdlQsQ0FBdEIsQ0FBbkM7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkcsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQ2pHLE9BQUMsQ0FBQzBLLEtBQUYsQ0FBUTZKLEVBQVIsQ0FBVyxlQUFYLEVBQTRCdlUsQ0FBQyxDQUFDa04sVUFBOUI7QUFDSDs7QUFFRCxRQUFJbE4sQ0FBQyxDQUFDb00sT0FBRixDQUFVOUUsYUFBVixLQUE0QixJQUFoQyxFQUFzQztBQUNsQzVCLE9BQUMsQ0FBQzFGLENBQUMsQ0FBQ29LLFdBQUgsQ0FBRCxDQUFpQnZILFFBQWpCLEdBQTRCMFIsRUFBNUIsQ0FBK0IsYUFBL0IsRUFBOEN2VSxDQUFDLENBQUM4TSxhQUFoRDtBQUNIOztBQUVEcEgsS0FBQyxDQUFDdkYsTUFBRCxDQUFELENBQVVvVSxFQUFWLENBQWEsbUNBQW1DdlUsQ0FBQyxDQUFDNEYsV0FBbEQsRUFBK0RGLENBQUMsQ0FBQytHLEtBQUYsQ0FBUXpNLENBQUMsQ0FBQ3lULGlCQUFWLEVBQTZCelQsQ0FBN0IsQ0FBL0Q7QUFFQTBGLEtBQUMsQ0FBQ3ZGLE1BQUQsQ0FBRCxDQUFVb1UsRUFBVixDQUFhLHdCQUF3QnZVLENBQUMsQ0FBQzRGLFdBQXZDLEVBQW9ERixDQUFDLENBQUMrRyxLQUFGLENBQVF6TSxDQUFDLENBQUMwVCxNQUFWLEVBQWtCMVQsQ0FBbEIsQ0FBcEQ7QUFFQTBGLEtBQUMsQ0FBQyxtQkFBRCxFQUFzQjFGLENBQUMsQ0FBQ29LLFdBQXhCLENBQUQsQ0FBc0NtSyxFQUF0QyxDQUF5QyxXQUF6QyxFQUFzRHZVLENBQUMsQ0FBQzZTLGNBQXhEO0FBRUFuTixLQUFDLENBQUN2RixNQUFELENBQUQsQ0FBVW9VLEVBQVYsQ0FBYSxzQkFBc0J2VSxDQUFDLENBQUM0RixXQUFyQyxFQUFrRDVGLENBQUMsQ0FBQytNLFdBQXBEO0FBQ0FySCxLQUFDLENBQUMxRixDQUFDLENBQUMrTSxXQUFILENBQUQ7QUFFSCxHQTNDRDs7QUE2Q0FwSCxPQUFLLENBQUNoSSxTQUFOLENBQWdCMFosTUFBaEIsR0FBeUIsWUFBVztBQUVoQyxRQUFJclgsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0YsTUFBVixLQUFxQixJQUFyQixJQUE2QnJHLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTFELEVBQXdFO0FBRXBFckksT0FBQyxDQUFDZ0ssVUFBRixDQUFhc04sSUFBYjs7QUFDQXRYLE9BQUMsQ0FBQytKLFVBQUYsQ0FBYXVOLElBQWI7QUFFSDs7QUFFRCxRQUFJdFgsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkYsSUFBVixLQUFtQixJQUFuQixJQUEyQmpILENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXhELEVBQXNFO0FBRWxFckksT0FBQyxDQUFDMkosS0FBRixDQUFRMk4sSUFBUjtBQUVIO0FBRUosR0FqQkQ7O0FBbUJBM1IsT0FBSyxDQUFDaEksU0FBTixDQUFnQnVQLFVBQWhCLEdBQTZCLFVBQVNvRixLQUFULEVBQWdCO0FBRXpDLFFBQUl0UyxDQUFDLEdBQUcsSUFBUixDQUZ5QyxDQUd4Qzs7O0FBQ0QsUUFBRyxDQUFDc1MsS0FBSyxDQUFDN0MsTUFBTixDQUFhdEssT0FBYixDQUFxQm9TLEtBQXJCLENBQTJCLHVCQUEzQixDQUFKLEVBQXlEO0FBQ3JELFVBQUlqRixLQUFLLENBQUNrRixPQUFOLEtBQWtCLEVBQWxCLElBQXdCeFgsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkcsYUFBVixLQUE0QixJQUF4RCxFQUE4RDtBQUMxRGpHLFNBQUMsQ0FBQzRNLFdBQUYsQ0FBYztBQUNWVCxjQUFJLEVBQUU7QUFDRjRHLG1CQUFPLEVBQUUvUyxDQUFDLENBQUNvTSxPQUFGLENBQVVsRSxHQUFWLEtBQWtCLElBQWxCLEdBQXlCLE1BQXpCLEdBQW1DO0FBRDFDO0FBREksU0FBZDtBQUtILE9BTkQsTUFNTyxJQUFJb0ssS0FBSyxDQUFDa0YsT0FBTixLQUFrQixFQUFsQixJQUF3QnhYLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVW5HLGFBQVYsS0FBNEIsSUFBeEQsRUFBOEQ7QUFDakVqRyxTQUFDLENBQUM0TSxXQUFGLENBQWM7QUFDVlQsY0FBSSxFQUFFO0FBQ0Y0RyxtQkFBTyxFQUFFL1MsQ0FBQyxDQUFDb00sT0FBRixDQUFVbEUsR0FBVixLQUFrQixJQUFsQixHQUF5QixVQUF6QixHQUFzQztBQUQ3QztBQURJLFNBQWQ7QUFLSDtBQUNKO0FBRUosR0FwQkQ7O0FBc0JBdkMsT0FBSyxDQUFDaEksU0FBTixDQUFnQitKLFFBQWhCLEdBQTJCLFlBQVc7QUFFbEMsUUFBSTFILENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSXlYLFNBREo7QUFBQSxRQUNlQyxVQURmO0FBQUEsUUFDMkJDLFVBRDNCO0FBQUEsUUFDdUNDLFFBRHZDOztBQUdBLGFBQVNDLFVBQVQsQ0FBb0JDLFdBQXBCLEVBQWlDO0FBRTdCcFMsT0FBQyxDQUFDLGdCQUFELEVBQW1Cb1MsV0FBbkIsQ0FBRCxDQUFpQ3pKLElBQWpDLENBQXNDLFlBQVc7QUFFN0MsWUFBSTBKLEtBQUssR0FBR3JTLENBQUMsQ0FBQyxJQUFELENBQWI7QUFBQSxZQUNJc1MsV0FBVyxHQUFHdFMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkgsSUFBUixDQUFhLFdBQWIsQ0FEbEI7QUFBQSxZQUVJMEssV0FBVyxHQUFHdlMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkgsSUFBUixDQUFhLGFBQWIsQ0FGbEI7QUFBQSxZQUdJMkssVUFBVSxHQUFJeFMsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkgsSUFBUixDQUFhLFlBQWIsS0FBOEJ2TixDQUFDLENBQUM0TCxPQUFGLENBQVUyQixJQUFWLENBQWUsWUFBZixDQUhoRDtBQUFBLFlBSUk0SyxXQUFXLEdBQUdsWSxRQUFRLENBQUNvUixhQUFULENBQXVCLEtBQXZCLENBSmxCOztBQU1BOEcsbUJBQVcsQ0FBQ0MsTUFBWixHQUFxQixZQUFXO0FBRTVCTCxlQUFLLENBQ0FySixPQURMLENBQ2E7QUFBRXVGLG1CQUFPLEVBQUU7QUFBWCxXQURiLEVBQzZCLEdBRDdCLEVBQ2tDLFlBQVc7QUFFckMsZ0JBQUlnRSxXQUFKLEVBQWlCO0FBQ2JGLG1CQUFLLENBQ0F4SyxJQURMLENBQ1UsUUFEVixFQUNvQjBLLFdBRHBCOztBQUdBLGtCQUFJQyxVQUFKLEVBQWdCO0FBQ1pILHFCQUFLLENBQ0F4SyxJQURMLENBQ1UsT0FEVixFQUNtQjJLLFVBRG5CO0FBRUg7QUFDSjs7QUFFREgsaUJBQUssQ0FDQXhLLElBREwsQ0FDVSxLQURWLEVBQ2lCeUssV0FEakIsRUFFS3RKLE9BRkwsQ0FFYTtBQUFFdUYscUJBQU8sRUFBRTtBQUFYLGFBRmIsRUFFNkIsR0FGN0IsRUFFa0MsWUFBVztBQUNyQzhELG1CQUFLLENBQ0E1SCxVQURMLENBQ2dCLGtDQURoQixFQUVLRCxXQUZMLENBRWlCLGVBRmpCO0FBR0gsYUFOTDs7QUFPQWxRLGFBQUMsQ0FBQzRMLE9BQUYsQ0FBVXlHLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBQ3JTLENBQUQsRUFBSStYLEtBQUosRUFBV0MsV0FBWCxDQUFoQztBQUNILFdBckJMO0FBdUJILFNBekJEOztBQTJCQUcsbUJBQVcsQ0FBQ0UsT0FBWixHQUFzQixZQUFXO0FBRTdCTixlQUFLLENBQ0E1SCxVQURMLENBQ2lCLFdBRGpCLEVBRUtELFdBRkwsQ0FFa0IsZUFGbEIsRUFHS0QsUUFITCxDQUdlLHNCQUhmOztBQUtBalEsV0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixlQUFsQixFQUFtQyxDQUFFclMsQ0FBRixFQUFLK1gsS0FBTCxFQUFZQyxXQUFaLENBQW5DO0FBRUgsU0FURDs7QUFXQUcsbUJBQVcsQ0FBQ0csR0FBWixHQUFrQk4sV0FBbEI7QUFFSCxPQWhERDtBQWtESDs7QUFFRCxRQUFJaFksQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUMvQixVQUFJM0csQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixJQUEzQixFQUFpQztBQUM3Qm1RLGtCQUFVLEdBQUczWCxDQUFDLENBQUN5SixZQUFGLElBQWtCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixHQUF5QixDQUF6QixHQUE2QixDQUEvQyxDQUFiO0FBQ0F1UCxnQkFBUSxHQUFHRCxVQUFVLEdBQUczWCxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUF2QixHQUFzQyxDQUFqRDtBQUNILE9BSEQsTUFHTztBQUNIc1Asa0JBQVUsR0FBR3JWLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWXZDLENBQUMsQ0FBQ3lKLFlBQUYsSUFBa0J6SixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXpCLEdBQTZCLENBQS9DLENBQVosQ0FBYjtBQUNBdVAsZ0JBQVEsR0FBRyxLQUFLNVgsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixHQUF5QixDQUF6QixHQUE2QixDQUFsQyxJQUF1Q3JJLENBQUMsQ0FBQ3lKLFlBQXBEO0FBQ0g7QUFDSixLQVJELE1BUU87QUFDSGtPLGdCQUFVLEdBQUczWCxDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEdBQXFCeEgsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixHQUF5QnJJLENBQUMsQ0FBQ3lKLFlBQWhELEdBQStEekosQ0FBQyxDQUFDeUosWUFBOUU7QUFDQW1PLGNBQVEsR0FBR3RWLElBQUksQ0FBQzRNLElBQUwsQ0FBVXlJLFVBQVUsR0FBRzNYLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQWpDLENBQVg7O0FBQ0EsVUFBSXJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsSUFBdkIsRUFBNkI7QUFDekIsWUFBSXNRLFVBQVUsR0FBRyxDQUFqQixFQUFvQkEsVUFBVTtBQUM5QixZQUFJQyxRQUFRLElBQUk1WCxDQUFDLENBQUNrSyxVQUFsQixFQUE4QjBOLFFBQVE7QUFDekM7QUFDSjs7QUFFREgsYUFBUyxHQUFHelgsQ0FBQyxDQUFDNEwsT0FBRixDQUFVMEIsSUFBVixDQUFlLGNBQWYsRUFBK0J6TCxLQUEvQixDQUFxQzhWLFVBQXJDLEVBQWlEQyxRQUFqRCxDQUFaOztBQUVBLFFBQUk1WCxDQUFDLENBQUNvTSxPQUFGLENBQVUxRSxRQUFWLEtBQXVCLGFBQTNCLEVBQTBDO0FBQ3RDLFVBQUk2USxTQUFTLEdBQUdaLFVBQVUsR0FBRyxDQUE3QjtBQUFBLFVBQ0lhLFNBQVMsR0FBR1osUUFEaEI7QUFBQSxVQUVJdk4sT0FBTyxHQUFHckssQ0FBQyxDQUFDNEwsT0FBRixDQUFVMEIsSUFBVixDQUFlLGNBQWYsQ0FGZDs7QUFJQSxXQUFLLElBQUl2USxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHaUQsQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBOUIsRUFBOEN2TCxDQUFDLEVBQS9DLEVBQW1EO0FBQy9DLFlBQUl3YixTQUFTLEdBQUcsQ0FBaEIsRUFBbUJBLFNBQVMsR0FBR3ZZLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZSxDQUEzQjtBQUNuQnVOLGlCQUFTLEdBQUdBLFNBQVMsQ0FBQ2xULEdBQVYsQ0FBYzhGLE9BQU8sQ0FBQzJELEVBQVIsQ0FBV3VLLFNBQVgsQ0FBZCxDQUFaO0FBQ0FkLGlCQUFTLEdBQUdBLFNBQVMsQ0FBQ2xULEdBQVYsQ0FBYzhGLE9BQU8sQ0FBQzJELEVBQVIsQ0FBV3dLLFNBQVgsQ0FBZCxDQUFaO0FBQ0FELGlCQUFTO0FBQ1RDLGlCQUFTO0FBQ1o7QUFDSjs7QUFFRFgsY0FBVSxDQUFDSixTQUFELENBQVY7O0FBRUEsUUFBSXpYLENBQUMsQ0FBQ2tLLFVBQUYsSUFBZ0JsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE5QixFQUE0QztBQUN4Q3FQLGdCQUFVLEdBQUcxWCxDQUFDLENBQUM0TCxPQUFGLENBQVUwQixJQUFWLENBQWUsY0FBZixDQUFiO0FBQ0F1SyxnQkFBVSxDQUFDSCxVQUFELENBQVY7QUFDSCxLQUhELE1BSUEsSUFBSTFYLENBQUMsQ0FBQ3lKLFlBQUYsSUFBa0J6SixDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUEvQyxFQUE2RDtBQUN6RHFQLGdCQUFVLEdBQUcxWCxDQUFDLENBQUM0TCxPQUFGLENBQVUwQixJQUFWLENBQWUsZUFBZixFQUFnQ3pMLEtBQWhDLENBQXNDLENBQXRDLEVBQXlDN0IsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBbkQsQ0FBYjtBQUNBd1AsZ0JBQVUsQ0FBQ0gsVUFBRCxDQUFWO0FBQ0gsS0FIRCxNQUdPLElBQUkxWCxDQUFDLENBQUN5SixZQUFGLEtBQW1CLENBQXZCLEVBQTBCO0FBQzdCaU8sZ0JBQVUsR0FBRzFYLENBQUMsQ0FBQzRMLE9BQUYsQ0FBVTBCLElBQVYsQ0FBZSxlQUFmLEVBQWdDekwsS0FBaEMsQ0FBc0M3QixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQUMsQ0FBaEUsQ0FBYjtBQUNBd1AsZ0JBQVUsQ0FBQ0gsVUFBRCxDQUFWO0FBQ0g7QUFFSixHQTFHRDs7QUE0R0EvUixPQUFLLENBQUNoSSxTQUFOLENBQWdCMlksVUFBaEIsR0FBNkIsWUFBVztBQUVwQyxRQUFJdFcsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQytNLFdBQUY7O0FBRUEvTSxLQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCO0FBQ2Q4RSxhQUFPLEVBQUU7QUFESyxLQUFsQjs7QUFJQWpVLEtBQUMsQ0FBQzRMLE9BQUYsQ0FBVXNFLFdBQVYsQ0FBc0IsZUFBdEI7O0FBRUFsUSxLQUFDLENBQUNxWCxNQUFGOztBQUVBLFFBQUlyWCxDQUFDLENBQUNvTSxPQUFGLENBQVUxRSxRQUFWLEtBQXVCLGFBQTNCLEVBQTBDO0FBQ3RDMUgsT0FBQyxDQUFDeVksbUJBQUY7QUFDSDtBQUVKLEdBbEJEOztBQW9CQTlTLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0IrYSxJQUFoQixHQUF1Qi9TLEtBQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JnYixTQUFoQixHQUE0QixZQUFXO0FBRTFELFFBQUkzWSxDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDNE0sV0FBRixDQUFjO0FBQ1ZULFVBQUksRUFBRTtBQUNGNEcsZUFBTyxFQUFFO0FBRFA7QUFESSxLQUFkO0FBTUgsR0FWRDs7QUFZQXBOLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0I4VixpQkFBaEIsR0FBb0MsWUFBVztBQUUzQyxRQUFJelQsQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQzBSLGVBQUY7O0FBQ0ExUixLQUFDLENBQUMrTSxXQUFGO0FBRUgsR0FQRDs7QUFTQXBILE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JpYixLQUFoQixHQUF3QmpULEtBQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JrYixVQUFoQixHQUE2QixZQUFXO0FBRTVELFFBQUk3WSxDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDME0sYUFBRjs7QUFDQTFNLEtBQUMsQ0FBQ3dMLE1BQUYsR0FBVyxJQUFYO0FBRUgsR0FQRDs7QUFTQTdGLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JtYixJQUFoQixHQUF1Qm5ULEtBQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JvYixTQUFoQixHQUE0QixZQUFXO0FBRTFELFFBQUkvWSxDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDd00sUUFBRjs7QUFDQXhNLEtBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNGLFFBQVYsR0FBcUIsSUFBckI7QUFDQXpHLEtBQUMsQ0FBQ3dMLE1BQUYsR0FBVyxLQUFYO0FBQ0F4TCxLQUFDLENBQUNxTCxRQUFGLEdBQWEsS0FBYjtBQUNBckwsS0FBQyxDQUFDc0wsV0FBRixHQUFnQixLQUFoQjtBQUVILEdBVkQ7O0FBWUEzRixPQUFLLENBQUNoSSxTQUFOLENBQWdCcWIsU0FBaEIsR0FBNEIsVUFBU3JMLEtBQVQsRUFBZ0I7QUFFeEMsUUFBSTNOLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUksQ0FBQ0EsQ0FBQyxDQUFDNkssU0FBUCxFQUFtQjtBQUVmN0ssT0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixhQUFsQixFQUFpQyxDQUFDclMsQ0FBRCxFQUFJMk4sS0FBSixDQUFqQzs7QUFFQTNOLE9BQUMsQ0FBQ29KLFNBQUYsR0FBYyxLQUFkOztBQUVBLFVBQUlwSixDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE3QixFQUEyQztBQUN2Q3JJLFNBQUMsQ0FBQytNLFdBQUY7QUFDSDs7QUFFRC9NLE9BQUMsQ0FBQ3dLLFNBQUYsR0FBYyxJQUFkOztBQUVBLFVBQUt4SyxDQUFDLENBQUNvTSxPQUFGLENBQVUzRixRQUFmLEVBQTBCO0FBQ3RCekcsU0FBQyxDQUFDd00sUUFBRjtBQUNIOztBQUVELFVBQUl4TSxDQUFDLENBQUNvTSxPQUFGLENBQVVuRyxhQUFWLEtBQTRCLElBQWhDLEVBQXNDO0FBQ2xDakcsU0FBQyxDQUFDeVcsT0FBRjs7QUFFQSxZQUFJelcsQ0FBQyxDQUFDb00sT0FBRixDQUFVN0UsYUFBZCxFQUE2QjtBQUN6QixjQUFJMFIsYUFBYSxHQUFHdlQsQ0FBQyxDQUFDMUYsQ0FBQyxDQUFDcUssT0FBRixDQUFVa0gsR0FBVixDQUFjdlIsQ0FBQyxDQUFDeUosWUFBaEIsQ0FBRCxDQUFyQjtBQUNBd1AsdUJBQWEsQ0FBQzFMLElBQWQsQ0FBbUIsVUFBbkIsRUFBK0IsQ0FBL0IsRUFBa0MyTCxLQUFsQztBQUNIO0FBQ0o7QUFFSjtBQUVKLEdBL0JEOztBQWlDQXZULE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0J3YixJQUFoQixHQUF1QnhULEtBQUssQ0FBQ2hJLFNBQU4sQ0FBZ0J5YixTQUFoQixHQUE0QixZQUFXO0FBRTFELFFBQUlwWixDQUFDLEdBQUcsSUFBUjs7QUFFQUEsS0FBQyxDQUFDNE0sV0FBRixDQUFjO0FBQ1ZULFVBQUksRUFBRTtBQUNGNEcsZUFBTyxFQUFFO0FBRFA7QUFESSxLQUFkO0FBTUgsR0FWRDs7QUFZQXBOLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JrVixjQUFoQixHQUFpQyxVQUFTUCxLQUFULEVBQWdCO0FBRTdDQSxTQUFLLENBQUNPLGNBQU47QUFFSCxHQUpEOztBQU1BbE4sT0FBSyxDQUFDaEksU0FBTixDQUFnQjhhLG1CQUFoQixHQUFzQyxVQUFVWSxRQUFWLEVBQXFCO0FBRXZEQSxZQUFRLEdBQUdBLFFBQVEsSUFBSSxDQUF2Qjs7QUFFQSxRQUFJclosQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJc1osV0FBVyxHQUFHNVQsQ0FBQyxDQUFFLGdCQUFGLEVBQW9CMUYsQ0FBQyxDQUFDNEwsT0FBdEIsQ0FEbkI7QUFBQSxRQUVJbU0sS0FGSjtBQUFBLFFBR0lDLFdBSEo7QUFBQSxRQUlJQyxXQUpKO0FBQUEsUUFLSUMsVUFMSjtBQUFBLFFBTUlDLFdBTko7O0FBUUEsUUFBS21CLFdBQVcsQ0FBQzViLE1BQWpCLEVBQTBCO0FBRXRCcWEsV0FBSyxHQUFHdUIsV0FBVyxDQUFDL0ksS0FBWixFQUFSO0FBQ0F5SCxpQkFBVyxHQUFHRCxLQUFLLENBQUN4SyxJQUFOLENBQVcsV0FBWCxDQUFkO0FBQ0EwSyxpQkFBVyxHQUFHRixLQUFLLENBQUN4SyxJQUFOLENBQVcsYUFBWCxDQUFkO0FBQ0EySyxnQkFBVSxHQUFJSCxLQUFLLENBQUN4SyxJQUFOLENBQVcsWUFBWCxLQUE0QnZOLENBQUMsQ0FBQzRMLE9BQUYsQ0FBVTJCLElBQVYsQ0FBZSxZQUFmLENBQTFDO0FBQ0E0SyxpQkFBVyxHQUFHbFksUUFBUSxDQUFDb1IsYUFBVCxDQUF1QixLQUF2QixDQUFkOztBQUVBOEcsaUJBQVcsQ0FBQ0MsTUFBWixHQUFxQixZQUFXO0FBRTVCLFlBQUlILFdBQUosRUFBaUI7QUFDYkYsZUFBSyxDQUNBeEssSUFETCxDQUNVLFFBRFYsRUFDb0IwSyxXQURwQjs7QUFHQSxjQUFJQyxVQUFKLEVBQWdCO0FBQ1pILGlCQUFLLENBQ0F4SyxJQURMLENBQ1UsT0FEVixFQUNtQjJLLFVBRG5CO0FBRUg7QUFDSjs7QUFFREgsYUFBSyxDQUNBeEssSUFETCxDQUNXLEtBRFgsRUFDa0J5SyxXQURsQixFQUVLN0gsVUFGTCxDQUVnQixrQ0FGaEIsRUFHS0QsV0FITCxDQUdpQixlQUhqQjs7QUFLQSxZQUFLbFEsQ0FBQyxDQUFDb00sT0FBRixDQUFVbEcsY0FBVixLQUE2QixJQUFsQyxFQUF5QztBQUNyQ2xHLFdBQUMsQ0FBQytNLFdBQUY7QUFDSDs7QUFFRC9NLFNBQUMsQ0FBQzRMLE9BQUYsQ0FBVXlHLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBRXJTLENBQUYsRUFBSytYLEtBQUwsRUFBWUMsV0FBWixDQUFoQzs7QUFDQWhZLFNBQUMsQ0FBQ3lZLG1CQUFGO0FBRUgsT0F4QkQ7O0FBMEJBTixpQkFBVyxDQUFDRSxPQUFaLEdBQXNCLFlBQVc7QUFFN0IsWUFBS2dCLFFBQVEsR0FBRyxDQUFoQixFQUFvQjtBQUVoQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNvQm5ZLG9CQUFVLENBQUUsWUFBVztBQUNuQmxCLGFBQUMsQ0FBQ3lZLG1CQUFGLENBQXVCWSxRQUFRLEdBQUcsQ0FBbEM7QUFDSCxXQUZTLEVBRVAsR0FGTyxDQUFWO0FBSUgsU0FYRCxNQVdPO0FBRUh0QixlQUFLLENBQ0E1SCxVQURMLENBQ2lCLFdBRGpCLEVBRUtELFdBRkwsQ0FFa0IsZUFGbEIsRUFHS0QsUUFITCxDQUdlLHNCQUhmOztBQUtBalEsV0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixlQUFsQixFQUFtQyxDQUFFclMsQ0FBRixFQUFLK1gsS0FBTCxFQUFZQyxXQUFaLENBQW5DOztBQUVBaFksV0FBQyxDQUFDeVksbUJBQUY7QUFFSDtBQUVKLE9BMUJEOztBQTRCQU4saUJBQVcsQ0FBQ0csR0FBWixHQUFrQk4sV0FBbEI7QUFFSCxLQWhFRCxNQWdFTztBQUVIaFksT0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixpQkFBbEIsRUFBcUMsQ0FBRXJTLENBQUYsQ0FBckM7QUFFSDtBQUVKLEdBbEZEOztBQW9GQTJGLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JvRCxPQUFoQixHQUEwQixVQUFVd1ksWUFBVixFQUF5QjtBQUUvQyxRQUFJdlosQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUFjeUosWUFBZDtBQUFBLFFBQTRCK1AsZ0JBQTVCOztBQUVBQSxvQkFBZ0IsR0FBR3haLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTVDLENBSitDLENBTS9DO0FBQ0E7O0FBQ0EsUUFBSSxDQUFDckksQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBWCxJQUF5QnhILENBQUMsQ0FBQ3lKLFlBQUYsR0FBaUIrUCxnQkFBOUMsRUFBa0U7QUFDOUR4WixPQUFDLENBQUN5SixZQUFGLEdBQWlCK1AsZ0JBQWpCO0FBQ0gsS0FWOEMsQ0FZL0M7OztBQUNBLFFBQUt4WixDQUFDLENBQUNrSyxVQUFGLElBQWdCbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBL0IsRUFBOEM7QUFDMUNySSxPQUFDLENBQUN5SixZQUFGLEdBQWlCLENBQWpCO0FBRUg7O0FBRURBLGdCQUFZLEdBQUd6SixDQUFDLENBQUN5SixZQUFqQjs7QUFFQXpKLEtBQUMsQ0FBQzhULE9BQUYsQ0FBVSxJQUFWOztBQUVBcE8sS0FBQyxDQUFDb0YsTUFBRixDQUFTOUssQ0FBVCxFQUFZQSxDQUFDLENBQUNtSixRQUFkLEVBQXdCO0FBQUVNLGtCQUFZLEVBQUVBO0FBQWhCLEtBQXhCOztBQUVBekosS0FBQyxDQUFDYyxJQUFGOztBQUVBLFFBQUksQ0FBQ3lZLFlBQUwsRUFBb0I7QUFFaEJ2WixPQUFDLENBQUM0TSxXQUFGLENBQWM7QUFDVlQsWUFBSSxFQUFFO0FBQ0Y0RyxpQkFBTyxFQUFFLE9BRFA7QUFFRnBGLGVBQUssRUFBRWxFO0FBRkw7QUFESSxPQUFkLEVBS0csS0FMSDtBQU9IO0FBRUosR0FyQ0Q7O0FBdUNBOUQsT0FBSyxDQUFDaEksU0FBTixDQUFnQnlQLG1CQUFoQixHQUFzQyxZQUFXO0FBRTdDLFFBQUlwTixDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQWM2UixVQUFkO0FBQUEsUUFBMEI0SCxpQkFBMUI7QUFBQSxRQUE2Q3RiLENBQTdDO0FBQUEsUUFDSXViLGtCQUFrQixHQUFHMVosQ0FBQyxDQUFDb00sT0FBRixDQUFVcEUsVUFBVixJQUF3QixJQURqRDs7QUFHQSxRQUFLdEMsQ0FBQyxDQUFDaVUsSUFBRixDQUFPRCxrQkFBUCxNQUErQixPQUEvQixJQUEwQ0Esa0JBQWtCLENBQUNoYyxNQUFsRSxFQUEyRTtBQUV2RXNDLE9BQUMsQ0FBQytILFNBQUYsR0FBYy9ILENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJFLFNBQVYsSUFBdUIsUUFBckM7O0FBRUEsV0FBTThKLFVBQU4sSUFBb0I2SCxrQkFBcEIsRUFBeUM7QUFFckN2YixTQUFDLEdBQUc2QixDQUFDLENBQUNrTCxXQUFGLENBQWN4TixNQUFkLEdBQXFCLENBQXpCOztBQUVBLFlBQUlnYyxrQkFBa0IsQ0FBQzliLGNBQW5CLENBQWtDaVUsVUFBbEMsQ0FBSixFQUFtRDtBQUMvQzRILDJCQUFpQixHQUFHQyxrQkFBa0IsQ0FBQzdILFVBQUQsQ0FBbEIsQ0FBK0JBLFVBQW5ELENBRCtDLENBRy9DO0FBQ0E7O0FBQ0EsaUJBQU8xVCxDQUFDLElBQUksQ0FBWixFQUFnQjtBQUNaLGdCQUFJNkIsQ0FBQyxDQUFDa0wsV0FBRixDQUFjL00sQ0FBZCxLQUFvQjZCLENBQUMsQ0FBQ2tMLFdBQUYsQ0FBYy9NLENBQWQsTUFBcUJzYixpQkFBN0MsRUFBaUU7QUFDN0R6WixlQUFDLENBQUNrTCxXQUFGLENBQWMwTyxNQUFkLENBQXFCemIsQ0FBckIsRUFBdUIsQ0FBdkI7QUFDSDs7QUFDREEsYUFBQztBQUNKOztBQUVENkIsV0FBQyxDQUFDa0wsV0FBRixDQUFjdUssSUFBZCxDQUFtQmdFLGlCQUFuQjs7QUFDQXpaLFdBQUMsQ0FBQ21MLGtCQUFGLENBQXFCc08saUJBQXJCLElBQTBDQyxrQkFBa0IsQ0FBQzdILFVBQUQsQ0FBbEIsQ0FBK0IvTCxRQUF6RTtBQUVIO0FBRUo7O0FBRUQ5RixPQUFDLENBQUNrTCxXQUFGLENBQWMyTyxJQUFkLENBQW1CLFVBQVMvYixDQUFULEVBQVlNLENBQVosRUFBZTtBQUM5QixlQUFTNEIsQ0FBQyxDQUFDb00sT0FBRixDQUFVekUsV0FBWixHQUE0QjdKLENBQUMsR0FBQ00sQ0FBOUIsR0FBa0NBLENBQUMsR0FBQ04sQ0FBM0M7QUFDSCxPQUZEO0FBSUg7QUFFSixHQXRDRDs7QUF3Q0E2SCxPQUFLLENBQUNoSSxTQUFOLENBQWdCMlEsTUFBaEIsR0FBeUIsWUFBVztBQUVoQyxRQUFJdE8sQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQ3FLLE9BQUYsR0FDSXJLLENBQUMsQ0FBQ29LLFdBQUYsQ0FDS3ZILFFBREwsQ0FDYzdDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWpFLEtBRHhCLEVBRUs4SCxRQUZMLENBRWMsYUFGZCxDQURKO0FBS0FqUSxLQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNxSyxPQUFGLENBQVUzTSxNQUF6Qjs7QUFFQSxRQUFJc0MsQ0FBQyxDQUFDeUosWUFBRixJQUFrQnpKLENBQUMsQ0FBQ2tLLFVBQXBCLElBQWtDbEssQ0FBQyxDQUFDeUosWUFBRixLQUFtQixDQUF6RCxFQUE0RDtBQUN4RHpKLE9BQUMsQ0FBQ3lKLFlBQUYsR0FBaUJ6SixDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBNUM7QUFDSDs7QUFFRCxRQUFJdEksQ0FBQyxDQUFDa0ssVUFBRixJQUFnQmxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTlCLEVBQTRDO0FBQ3hDckksT0FBQyxDQUFDeUosWUFBRixHQUFpQixDQUFqQjtBQUNIOztBQUVEekosS0FBQyxDQUFDb04sbUJBQUY7O0FBRUFwTixLQUFDLENBQUNvVyxRQUFGOztBQUNBcFcsS0FBQyxDQUFDNFEsYUFBRjs7QUFDQTVRLEtBQUMsQ0FBQ2dRLFdBQUY7O0FBQ0FoUSxLQUFDLENBQUN3VyxZQUFGOztBQUNBeFcsS0FBQyxDQUFDaVgsZUFBRjs7QUFDQWpYLEtBQUMsQ0FBQ29RLFNBQUY7O0FBQ0FwUSxLQUFDLENBQUM2USxVQUFGOztBQUNBN1EsS0FBQyxDQUFDa1gsYUFBRjs7QUFDQWxYLEtBQUMsQ0FBQ3dULGtCQUFGOztBQUNBeFQsS0FBQyxDQUFDbVgsZUFBRjs7QUFFQW5YLEtBQUMsQ0FBQzBSLGVBQUYsQ0FBa0IsS0FBbEIsRUFBeUIsSUFBekI7O0FBRUEsUUFBSTFSLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlFLGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDbEM1QixPQUFDLENBQUMxRixDQUFDLENBQUNvSyxXQUFILENBQUQsQ0FBaUJ2SCxRQUFqQixHQUE0QjBSLEVBQTVCLENBQStCLGFBQS9CLEVBQThDdlUsQ0FBQyxDQUFDOE0sYUFBaEQ7QUFDSDs7QUFFRDlNLEtBQUMsQ0FBQzhRLGVBQUYsQ0FBa0IsT0FBTzlRLENBQUMsQ0FBQ3lKLFlBQVQsS0FBMEIsUUFBMUIsR0FBcUN6SixDQUFDLENBQUN5SixZQUF2QyxHQUFzRCxDQUF4RTs7QUFFQXpKLEtBQUMsQ0FBQytNLFdBQUY7O0FBQ0EvTSxLQUFDLENBQUNzVSxZQUFGOztBQUVBdFUsS0FBQyxDQUFDd0wsTUFBRixHQUFXLENBQUN4TCxDQUFDLENBQUNvTSxPQUFGLENBQVUzRixRQUF0Qjs7QUFDQXpHLEtBQUMsQ0FBQ3dNLFFBQUY7O0FBRUF4TSxLQUFDLENBQUM0TCxPQUFGLENBQVV5RyxPQUFWLENBQWtCLFFBQWxCLEVBQTRCLENBQUNyUyxDQUFELENBQTVCO0FBRUgsR0FoREQ7O0FBa0RBMkYsT0FBSyxDQUFDaEksU0FBTixDQUFnQitWLE1BQWhCLEdBQXlCLFlBQVc7QUFFaEMsUUFBSTFULENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUkwRixDQUFDLENBQUN2RixNQUFELENBQUQsQ0FBVStSLEtBQVYsT0FBc0JsUyxDQUFDLENBQUNpTSxXQUE1QixFQUF5QztBQUNyQzlLLGtCQUFZLENBQUNuQixDQUFDLENBQUM4WixXQUFILENBQVo7QUFDQTlaLE9BQUMsQ0FBQzhaLFdBQUYsR0FBZ0IzWixNQUFNLENBQUNlLFVBQVAsQ0FBa0IsWUFBVztBQUN6Q2xCLFNBQUMsQ0FBQ2lNLFdBQUYsR0FBZ0J2RyxDQUFDLENBQUN2RixNQUFELENBQUQsQ0FBVStSLEtBQVYsRUFBaEI7O0FBQ0FsUyxTQUFDLENBQUMwUixlQUFGOztBQUNBLFlBQUksQ0FBQzFSLENBQUMsQ0FBQzZLLFNBQVAsRUFBbUI7QUFBRTdLLFdBQUMsQ0FBQytNLFdBQUY7QUFBa0I7QUFDMUMsT0FKZSxFQUliLEVBSmEsQ0FBaEI7QUFLSDtBQUNKLEdBWkQ7O0FBY0FwSCxPQUFLLENBQUNoSSxTQUFOLENBQWdCb2MsV0FBaEIsR0FBOEJwVSxLQUFLLENBQUNoSSxTQUFOLENBQWdCcWMsV0FBaEIsR0FBOEIsVUFBU3JNLEtBQVQsRUFBZ0JzTSxZQUFoQixFQUE4QkMsU0FBOUIsRUFBeUM7QUFFakcsUUFBSWxhLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUksT0FBTzJOLEtBQVAsS0FBa0IsU0FBdEIsRUFBaUM7QUFDN0JzTSxrQkFBWSxHQUFHdE0sS0FBZjtBQUNBQSxXQUFLLEdBQUdzTSxZQUFZLEtBQUssSUFBakIsR0FBd0IsQ0FBeEIsR0FBNEJqYSxDQUFDLENBQUNrSyxVQUFGLEdBQWUsQ0FBbkQ7QUFDSCxLQUhELE1BR087QUFDSHlELFdBQUssR0FBR3NNLFlBQVksS0FBSyxJQUFqQixHQUF3QixFQUFFdE0sS0FBMUIsR0FBa0NBLEtBQTFDO0FBQ0g7O0FBRUQsUUFBSTNOLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZSxDQUFmLElBQW9CeUQsS0FBSyxHQUFHLENBQTVCLElBQWlDQSxLQUFLLEdBQUczTixDQUFDLENBQUNrSyxVQUFGLEdBQWUsQ0FBNUQsRUFBK0Q7QUFDM0QsYUFBTyxLQUFQO0FBQ0g7O0FBRURsSyxLQUFDLENBQUM2TixNQUFGOztBQUVBLFFBQUlxTSxTQUFTLEtBQUssSUFBbEIsRUFBd0I7QUFDcEJsYSxPQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLEdBQXlCMkIsTUFBekI7QUFDSCxLQUZELE1BRU87QUFDSHhFLE9BQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsS0FBS3VKLE9BQUwsQ0FBYWpFLEtBQXBDLEVBQTJDNkYsRUFBM0MsQ0FBOENMLEtBQTlDLEVBQXFEbkosTUFBckQ7QUFDSDs7QUFFRHhFLEtBQUMsQ0FBQ3FLLE9BQUYsR0FBWXJLLENBQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsS0FBS3VKLE9BQUwsQ0FBYWpFLEtBQXBDLENBQVo7O0FBRUFuSSxLQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLENBQXVCLEtBQUt1SixPQUFMLENBQWFqRSxLQUFwQyxFQUEyQ2dHLE1BQTNDOztBQUVBbk8sS0FBQyxDQUFDb0ssV0FBRixDQUFjZ0UsTUFBZCxDQUFxQnBPLENBQUMsQ0FBQ3FLLE9BQXZCOztBQUVBckssS0FBQyxDQUFDNkwsWUFBRixHQUFpQjdMLENBQUMsQ0FBQ3FLLE9BQW5COztBQUVBckssS0FBQyxDQUFDc08sTUFBRjtBQUVILEdBakNEOztBQW1DQTNJLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0J3YyxNQUFoQixHQUF5QixVQUFTOVYsUUFBVCxFQUFtQjtBQUV4QyxRQUFJckUsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJb2EsYUFBYSxHQUFHLEVBRHBCO0FBQUEsUUFFSXpiLENBRko7QUFBQSxRQUVPTCxDQUZQOztBQUlBLFFBQUkwQixDQUFDLENBQUNvTSxPQUFGLENBQVVsRSxHQUFWLEtBQWtCLElBQXRCLEVBQTRCO0FBQ3hCN0QsY0FBUSxHQUFHLENBQUNBLFFBQVo7QUFDSDs7QUFDRDFGLEtBQUMsR0FBR3FCLENBQUMsQ0FBQ3lMLFlBQUYsSUFBa0IsTUFBbEIsR0FBMkJuSixJQUFJLENBQUM0TSxJQUFMLENBQVU3SyxRQUFWLElBQXNCLElBQWpELEdBQXdELEtBQTVEO0FBQ0EvRixLQUFDLEdBQUcwQixDQUFDLENBQUN5TCxZQUFGLElBQWtCLEtBQWxCLEdBQTBCbkosSUFBSSxDQUFDNE0sSUFBTCxDQUFVN0ssUUFBVixJQUFzQixJQUFoRCxHQUF1RCxLQUEzRDtBQUVBK1YsaUJBQWEsQ0FBQ3BhLENBQUMsQ0FBQ3lMLFlBQUgsQ0FBYixHQUFnQ3BILFFBQWhDOztBQUVBLFFBQUlyRSxDQUFDLENBQUM0SyxpQkFBRixLQUF3QixLQUE1QixFQUFtQztBQUMvQjVLLE9BQUMsQ0FBQ29LLFdBQUYsQ0FBYytFLEdBQWQsQ0FBa0JpTCxhQUFsQjtBQUNILEtBRkQsTUFFTztBQUNIQSxtQkFBYSxHQUFHLEVBQWhCOztBQUNBLFVBQUlwYSxDQUFDLENBQUNvTCxjQUFGLEtBQXFCLEtBQXpCLEVBQWdDO0FBQzVCZ1AscUJBQWEsQ0FBQ3BhLENBQUMsQ0FBQ2dMLFFBQUgsQ0FBYixHQUE0QixlQUFlck0sQ0FBZixHQUFtQixJQUFuQixHQUEwQkwsQ0FBMUIsR0FBOEIsR0FBMUQ7O0FBQ0EwQixTQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCaUwsYUFBbEI7QUFDSCxPQUhELE1BR087QUFDSEEscUJBQWEsQ0FBQ3BhLENBQUMsQ0FBQ2dMLFFBQUgsQ0FBYixHQUE0QixpQkFBaUJyTSxDQUFqQixHQUFxQixJQUFyQixHQUE0QkwsQ0FBNUIsR0FBZ0MsUUFBNUQ7O0FBQ0EwQixTQUFDLENBQUNvSyxXQUFGLENBQWMrRSxHQUFkLENBQWtCaUwsYUFBbEI7QUFDSDtBQUNKO0FBRUosR0EzQkQ7O0FBNkJBelUsT0FBSyxDQUFDaEksU0FBTixDQUFnQjBjLGFBQWhCLEdBQWdDLFlBQVc7QUFFdkMsUUFBSXJhLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUlBLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUIsVUFBSS9JLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXpGLFVBQVYsS0FBeUIsSUFBN0IsRUFBbUM7QUFDL0IzRyxTQUFDLENBQUMwSyxLQUFGLENBQVF5RSxHQUFSLENBQVk7QUFDUm1MLGlCQUFPLEVBQUcsU0FBU3RhLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXhGO0FBRHJCLFNBQVo7QUFHSDtBQUNKLEtBTkQsTUFNTztBQUNINUcsT0FBQyxDQUFDMEssS0FBRixDQUFRaUUsTUFBUixDQUFlM08sQ0FBQyxDQUFDcUssT0FBRixDQUFVa0csS0FBVixHQUFrQjlCLFdBQWxCLENBQThCLElBQTlCLElBQXNDek8sQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBL0Q7O0FBQ0EsVUFBSXJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXpGLFVBQVYsS0FBeUIsSUFBN0IsRUFBbUM7QUFDL0IzRyxTQUFDLENBQUMwSyxLQUFGLENBQVF5RSxHQUFSLENBQVk7QUFDUm1MLGlCQUFPLEVBQUd0YSxDQUFDLENBQUNvTSxPQUFGLENBQVV4RixhQUFWLEdBQTBCO0FBRDVCLFNBQVo7QUFHSDtBQUNKOztBQUVENUcsS0FBQyxDQUFDNEosU0FBRixHQUFjNUosQ0FBQyxDQUFDMEssS0FBRixDQUFRd0gsS0FBUixFQUFkO0FBQ0FsUyxLQUFDLENBQUM2SixVQUFGLEdBQWU3SixDQUFDLENBQUMwSyxLQUFGLENBQVFpRSxNQUFSLEVBQWY7O0FBR0EsUUFBSTNPLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXJELFFBQVYsS0FBdUIsS0FBdkIsSUFBZ0MvSSxDQUFDLENBQUNvTSxPQUFGLENBQVV0RCxhQUFWLEtBQTRCLEtBQWhFLEVBQXVFO0FBQ25FOUksT0FBQyxDQUFDbUssVUFBRixHQUFlN0gsSUFBSSxDQUFDNE0sSUFBTCxDQUFVbFAsQ0FBQyxDQUFDNEosU0FBRixHQUFjNUosQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBbEMsQ0FBZjs7QUFDQXJJLE9BQUMsQ0FBQ29LLFdBQUYsQ0FBYzhILEtBQWQsQ0FBb0I1UCxJQUFJLENBQUM0TSxJQUFMLENBQVdsUCxDQUFDLENBQUNtSyxVQUFGLEdBQWVuSyxDQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLENBQXVCLGNBQXZCLEVBQXVDbkYsTUFBakUsQ0FBcEI7QUFFSCxLQUpELE1BSU8sSUFBSXNDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXRELGFBQVYsS0FBNEIsSUFBaEMsRUFBc0M7QUFDekM5SSxPQUFDLENBQUNvSyxXQUFGLENBQWM4SCxLQUFkLENBQW9CLE9BQU9sUyxDQUFDLENBQUNrSyxVQUE3QjtBQUNILEtBRk0sTUFFQTtBQUNIbEssT0FBQyxDQUFDbUssVUFBRixHQUFlN0gsSUFBSSxDQUFDNE0sSUFBTCxDQUFVbFAsQ0FBQyxDQUFDNEosU0FBWixDQUFmOztBQUNBNUosT0FBQyxDQUFDb0ssV0FBRixDQUFjdUUsTUFBZCxDQUFxQnJNLElBQUksQ0FBQzRNLElBQUwsQ0FBV2xQLENBQUMsQ0FBQ3FLLE9BQUYsQ0FBVWtHLEtBQVYsR0FBa0I5QixXQUFsQixDQUE4QixJQUE5QixJQUFzQ3pPLENBQUMsQ0FBQ29LLFdBQUYsQ0FBY3ZILFFBQWQsQ0FBdUIsY0FBdkIsRUFBdUNuRixNQUF4RixDQUFyQjtBQUNIOztBQUVELFFBQUlrQixNQUFNLEdBQUdvQixDQUFDLENBQUNxSyxPQUFGLENBQVVrRyxLQUFWLEdBQWtCNkUsVUFBbEIsQ0FBNkIsSUFBN0IsSUFBcUNwVixDQUFDLENBQUNxSyxPQUFGLENBQVVrRyxLQUFWLEdBQWtCMkIsS0FBbEIsRUFBbEQ7O0FBQ0EsUUFBSWxTLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXRELGFBQVYsS0FBNEIsS0FBaEMsRUFBdUM5SSxDQUFDLENBQUNvSyxXQUFGLENBQWN2SCxRQUFkLENBQXVCLGNBQXZCLEVBQXVDcVAsS0FBdkMsQ0FBNkNsUyxDQUFDLENBQUNtSyxVQUFGLEdBQWV2TCxNQUE1RDtBQUUxQyxHQXJDRDs7QUF1Q0ErRyxPQUFLLENBQUNoSSxTQUFOLENBQWdCNGMsT0FBaEIsR0FBMEIsWUFBVztBQUVqQyxRQUFJdmEsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJNk8sVUFESjs7QUFHQTdPLEtBQUMsQ0FBQ3FLLE9BQUYsQ0FBVWdFLElBQVYsQ0FBZSxVQUFTVixLQUFULEVBQWdCOUgsT0FBaEIsRUFBeUI7QUFDcENnSixnQkFBVSxHQUFJN08sQ0FBQyxDQUFDbUssVUFBRixHQUFld0QsS0FBaEIsR0FBeUIsQ0FBQyxDQUF2Qzs7QUFDQSxVQUFJM04sQ0FBQyxDQUFDb00sT0FBRixDQUFVbEUsR0FBVixLQUFrQixJQUF0QixFQUE0QjtBQUN4QnhDLFNBQUMsQ0FBQ0csT0FBRCxDQUFELENBQVdzSixHQUFYLENBQWU7QUFDWDlLLGtCQUFRLEVBQUUsVUFEQztBQUVYbVcsZUFBSyxFQUFFM0wsVUFGSTtBQUdYOUosYUFBRyxFQUFFLENBSE07QUFJWG1FLGdCQUFNLEVBQUVsSixDQUFDLENBQUNvTSxPQUFGLENBQVVsRCxNQUFWLEdBQW1CLENBSmhCO0FBS1grSyxpQkFBTyxFQUFFO0FBTEUsU0FBZjtBQU9ILE9BUkQsTUFRTztBQUNIdk8sU0FBQyxDQUFDRyxPQUFELENBQUQsQ0FBV3NKLEdBQVgsQ0FBZTtBQUNYOUssa0JBQVEsRUFBRSxVQURDO0FBRVhrQixjQUFJLEVBQUVzSixVQUZLO0FBR1g5SixhQUFHLEVBQUUsQ0FITTtBQUlYbUUsZ0JBQU0sRUFBRWxKLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxELE1BQVYsR0FBbUIsQ0FKaEI7QUFLWCtLLGlCQUFPLEVBQUU7QUFMRSxTQUFmO0FBT0g7QUFDSixLQW5CRDs7QUFxQkFqVSxLQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFoTyxDQUFDLENBQUN5SixZQUFmLEVBQTZCMEYsR0FBN0IsQ0FBaUM7QUFDN0JqRyxZQUFNLEVBQUVsSixDQUFDLENBQUNvTSxPQUFGLENBQVVsRCxNQUFWLEdBQW1CLENBREU7QUFFN0IrSyxhQUFPLEVBQUU7QUFGb0IsS0FBakM7QUFLSCxHQS9CRDs7QUFpQ0F0TyxPQUFLLENBQUNoSSxTQUFOLENBQWdCOGMsU0FBaEIsR0FBNEIsWUFBVztBQUVuQyxRQUFJemEsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixLQUEyQixDQUEzQixJQUFnQ3JJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxHLGNBQVYsS0FBNkIsSUFBN0QsSUFBcUVsRyxDQUFDLENBQUNvTSxPQUFGLENBQVVyRCxRQUFWLEtBQXVCLEtBQWhHLEVBQXVHO0FBQ25HLFVBQUl5RixZQUFZLEdBQUd4TyxDQUFDLENBQUNxSyxPQUFGLENBQVUyRCxFQUFWLENBQWFoTyxDQUFDLENBQUN5SixZQUFmLEVBQTZCZ0YsV0FBN0IsQ0FBeUMsSUFBekMsQ0FBbkI7O0FBQ0F6TyxPQUFDLENBQUMwSyxLQUFGLENBQVF5RSxHQUFSLENBQVksUUFBWixFQUFzQlgsWUFBdEI7QUFDSDtBQUVKLEdBVEQ7O0FBV0E3SSxPQUFLLENBQUNoSSxTQUFOLENBQWdCK2MsU0FBaEIsR0FDQS9VLEtBQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JnZCxjQUFoQixHQUFpQyxZQUFXO0FBRXhDO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVRLFFBQUkzYSxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQWM3QixDQUFkO0FBQUEsUUFBaUJ5YyxJQUFqQjtBQUFBLFFBQXVCckYsTUFBdkI7QUFBQSxRQUErQjdSLEtBQS9CO0FBQUEsUUFBc0MzQyxPQUFPLEdBQUcsS0FBaEQ7QUFBQSxRQUF1RDRZLElBQXZEOztBQUVBLFFBQUlqVSxDQUFDLENBQUNpVSxJQUFGLENBQVFsYyxTQUFTLENBQUMsQ0FBRCxDQUFqQixNQUEyQixRQUEvQixFQUEwQztBQUV0QzhYLFlBQU0sR0FBSTlYLFNBQVMsQ0FBQyxDQUFELENBQW5CO0FBQ0FzRCxhQUFPLEdBQUd0RCxTQUFTLENBQUMsQ0FBRCxDQUFuQjtBQUNBa2MsVUFBSSxHQUFHLFVBQVA7QUFFSCxLQU5ELE1BTU8sSUFBS2pVLENBQUMsQ0FBQ2lVLElBQUYsQ0FBUWxjLFNBQVMsQ0FBQyxDQUFELENBQWpCLE1BQTJCLFFBQWhDLEVBQTJDO0FBRTlDOFgsWUFBTSxHQUFJOVgsU0FBUyxDQUFDLENBQUQsQ0FBbkI7QUFDQWlHLFdBQUssR0FBR2pHLFNBQVMsQ0FBQyxDQUFELENBQWpCO0FBQ0FzRCxhQUFPLEdBQUd0RCxTQUFTLENBQUMsQ0FBRCxDQUFuQjs7QUFFQSxVQUFLQSxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCLFlBQWpCLElBQWlDaUksQ0FBQyxDQUFDaVUsSUFBRixDQUFRbGMsU0FBUyxDQUFDLENBQUQsQ0FBakIsTUFBMkIsT0FBakUsRUFBMkU7QUFFdkVrYyxZQUFJLEdBQUcsWUFBUDtBQUVILE9BSkQsTUFJTyxJQUFLLE9BQU9sYyxTQUFTLENBQUMsQ0FBRCxDQUFoQixLQUF3QixXQUE3QixFQUEyQztBQUU5Q2tjLFlBQUksR0FBRyxRQUFQO0FBRUg7QUFFSjs7QUFFRCxRQUFLQSxJQUFJLEtBQUssUUFBZCxFQUF5QjtBQUVyQjNaLE9BQUMsQ0FBQ29NLE9BQUYsQ0FBVW1KLE1BQVYsSUFBb0I3UixLQUFwQjtBQUdILEtBTEQsTUFLTyxJQUFLaVcsSUFBSSxLQUFLLFVBQWQsRUFBMkI7QUFFOUJqVSxPQUFDLENBQUMySSxJQUFGLENBQVFrSCxNQUFSLEVBQWlCLFVBQVVzRixHQUFWLEVBQWVqRSxHQUFmLEVBQXFCO0FBRWxDNVcsU0FBQyxDQUFDb00sT0FBRixDQUFVeU8sR0FBVixJQUFpQmpFLEdBQWpCO0FBRUgsT0FKRDtBQU9ILEtBVE0sTUFTQSxJQUFLK0MsSUFBSSxLQUFLLFlBQWQsRUFBNkI7QUFFaEMsV0FBTWlCLElBQU4sSUFBY2xYLEtBQWQsRUFBc0I7QUFFbEIsWUFBSWdDLENBQUMsQ0FBQ2lVLElBQUYsQ0FBUTNaLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXBFLFVBQWxCLE1BQW1DLE9BQXZDLEVBQWlEO0FBRTdDaEksV0FBQyxDQUFDb00sT0FBRixDQUFVcEUsVUFBVixHQUF1QixDQUFFdEUsS0FBSyxDQUFDa1gsSUFBRCxDQUFQLENBQXZCO0FBRUgsU0FKRCxNQUlPO0FBRUh6YyxXQUFDLEdBQUc2QixDQUFDLENBQUNvTSxPQUFGLENBQVVwRSxVQUFWLENBQXFCdEssTUFBckIsR0FBNEIsQ0FBaEMsQ0FGRyxDQUlIOztBQUNBLGlCQUFPUyxDQUFDLElBQUksQ0FBWixFQUFnQjtBQUVaLGdCQUFJNkIsQ0FBQyxDQUFDb00sT0FBRixDQUFVcEUsVUFBVixDQUFxQjdKLENBQXJCLEVBQXdCMFQsVUFBeEIsS0FBdUNuTyxLQUFLLENBQUNrWCxJQUFELENBQUwsQ0FBWS9JLFVBQXZELEVBQW9FO0FBRWhFN1IsZUFBQyxDQUFDb00sT0FBRixDQUFVcEUsVUFBVixDQUFxQjRSLE1BQXJCLENBQTRCemIsQ0FBNUIsRUFBOEIsQ0FBOUI7QUFFSDs7QUFFREEsYUFBQztBQUVKOztBQUVENkIsV0FBQyxDQUFDb00sT0FBRixDQUFVcEUsVUFBVixDQUFxQnlOLElBQXJCLENBQTJCL1IsS0FBSyxDQUFDa1gsSUFBRCxDQUFoQztBQUVIO0FBRUo7QUFFSjs7QUFFRCxRQUFLN1osT0FBTCxFQUFlO0FBRVhmLE9BQUMsQ0FBQzZOLE1BQUY7O0FBQ0E3TixPQUFDLENBQUNzTyxNQUFGO0FBRUg7QUFFSixHQWhHRDs7QUFrR0EzSSxPQUFLLENBQUNoSSxTQUFOLENBQWdCb1AsV0FBaEIsR0FBOEIsWUFBVztBQUVyQyxRQUFJL00sQ0FBQyxHQUFHLElBQVI7O0FBRUFBLEtBQUMsQ0FBQ3FhLGFBQUY7O0FBRUFyYSxLQUFDLENBQUN5YSxTQUFGOztBQUVBLFFBQUl6YSxDQUFDLENBQUNvTSxPQUFGLENBQVUvRSxJQUFWLEtBQW1CLEtBQXZCLEVBQThCO0FBQzFCckgsT0FBQyxDQUFDbWEsTUFBRixDQUFTbmEsQ0FBQyxDQUFDOFUsT0FBRixDQUFVOVUsQ0FBQyxDQUFDeUosWUFBWixDQUFUO0FBQ0gsS0FGRCxNQUVPO0FBQ0h6SixPQUFDLENBQUN1YSxPQUFGO0FBQ0g7O0FBRUR2YSxLQUFDLENBQUM0TCxPQUFGLENBQVV5RyxPQUFWLENBQWtCLGFBQWxCLEVBQWlDLENBQUNyUyxDQUFELENBQWpDO0FBRUgsR0FoQkQ7O0FBa0JBMkYsT0FBSyxDQUFDaEksU0FBTixDQUFnQnlZLFFBQWhCLEdBQTJCLFlBQVc7QUFFbEMsUUFBSXBXLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSThhLFNBQVMsR0FBRzdhLFFBQVEsQ0FBQzhhLElBQVQsQ0FBY0MsS0FEOUI7O0FBR0FoYixLQUFDLENBQUN5TCxZQUFGLEdBQWlCekwsQ0FBQyxDQUFDb00sT0FBRixDQUFVckQsUUFBVixLQUF1QixJQUF2QixHQUE4QixLQUE5QixHQUFzQyxNQUF2RDs7QUFFQSxRQUFJL0ksQ0FBQyxDQUFDeUwsWUFBRixLQUFtQixLQUF2QixFQUE4QjtBQUMxQnpMLE9BQUMsQ0FBQzRMLE9BQUYsQ0FBVXFFLFFBQVYsQ0FBbUIsZ0JBQW5CO0FBQ0gsS0FGRCxNQUVPO0FBQ0hqUSxPQUFDLENBQUM0TCxPQUFGLENBQVVzRSxXQUFWLENBQXNCLGdCQUF0QjtBQUNIOztBQUVELFFBQUk0SyxTQUFTLENBQUNHLGdCQUFWLEtBQStCQyxTQUEvQixJQUNBSixTQUFTLENBQUNLLGFBQVYsS0FBNEJELFNBRDVCLElBRUFKLFNBQVMsQ0FBQ00sWUFBVixLQUEyQkYsU0FGL0IsRUFFMEM7QUFDdEMsVUFBSWxiLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXhELE1BQVYsS0FBcUIsSUFBekIsRUFBK0I7QUFDM0I1SSxTQUFDLENBQUNvTCxjQUFGLEdBQW1CLElBQW5CO0FBQ0g7QUFDSjs7QUFFRCxRQUFLcEwsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0UsSUFBZixFQUFzQjtBQUNsQixVQUFLLE9BQU9ySCxDQUFDLENBQUNvTSxPQUFGLENBQVVsRCxNQUFqQixLQUE0QixRQUFqQyxFQUE0QztBQUN4QyxZQUFJbEosQ0FBQyxDQUFDb00sT0FBRixDQUFVbEQsTUFBVixHQUFtQixDQUF2QixFQUEyQjtBQUN2QmxKLFdBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxELE1BQVYsR0FBbUIsQ0FBbkI7QUFDSDtBQUNKLE9BSkQsTUFJTztBQUNIbEosU0FBQyxDQUFDb00sT0FBRixDQUFVbEQsTUFBVixHQUFtQmxKLENBQUMsQ0FBQ2dHLFFBQUYsQ0FBV2tELE1BQTlCO0FBQ0g7QUFDSjs7QUFFRCxRQUFJNFIsU0FBUyxDQUFDTyxVQUFWLEtBQXlCSCxTQUE3QixFQUF3QztBQUNwQ2xiLE9BQUMsQ0FBQ2dMLFFBQUYsR0FBYSxZQUFiO0FBQ0FoTCxPQUFDLENBQUM4TCxhQUFGLEdBQWtCLGNBQWxCO0FBQ0E5TCxPQUFDLENBQUMrTCxjQUFGLEdBQW1CLGFBQW5CO0FBQ0EsVUFBSStPLFNBQVMsQ0FBQ1EsbUJBQVYsS0FBa0NKLFNBQWxDLElBQStDSixTQUFTLENBQUNTLGlCQUFWLEtBQWdDTCxTQUFuRixFQUE4RmxiLENBQUMsQ0FBQ2dMLFFBQUYsR0FBYSxLQUFiO0FBQ2pHOztBQUNELFFBQUk4UCxTQUFTLENBQUNVLFlBQVYsS0FBMkJOLFNBQS9CLEVBQTBDO0FBQ3RDbGIsT0FBQyxDQUFDZ0wsUUFBRixHQUFhLGNBQWI7QUFDQWhMLE9BQUMsQ0FBQzhMLGFBQUYsR0FBa0IsZ0JBQWxCO0FBQ0E5TCxPQUFDLENBQUMrTCxjQUFGLEdBQW1CLGVBQW5CO0FBQ0EsVUFBSStPLFNBQVMsQ0FBQ1EsbUJBQVYsS0FBa0NKLFNBQWxDLElBQStDSixTQUFTLENBQUNXLGNBQVYsS0FBNkJQLFNBQWhGLEVBQTJGbGIsQ0FBQyxDQUFDZ0wsUUFBRixHQUFhLEtBQWI7QUFDOUY7O0FBQ0QsUUFBSThQLFNBQVMsQ0FBQ1ksZUFBVixLQUE4QlIsU0FBbEMsRUFBNkM7QUFDekNsYixPQUFDLENBQUNnTCxRQUFGLEdBQWEsaUJBQWI7QUFDQWhMLE9BQUMsQ0FBQzhMLGFBQUYsR0FBa0IsbUJBQWxCO0FBQ0E5TCxPQUFDLENBQUMrTCxjQUFGLEdBQW1CLGtCQUFuQjtBQUNBLFVBQUkrTyxTQUFTLENBQUNRLG1CQUFWLEtBQWtDSixTQUFsQyxJQUErQ0osU0FBUyxDQUFDUyxpQkFBVixLQUFnQ0wsU0FBbkYsRUFBOEZsYixDQUFDLENBQUNnTCxRQUFGLEdBQWEsS0FBYjtBQUNqRzs7QUFDRCxRQUFJOFAsU0FBUyxDQUFDYSxXQUFWLEtBQTBCVCxTQUE5QixFQUF5QztBQUNyQ2xiLE9BQUMsQ0FBQ2dMLFFBQUYsR0FBYSxhQUFiO0FBQ0FoTCxPQUFDLENBQUM4TCxhQUFGLEdBQWtCLGVBQWxCO0FBQ0E5TCxPQUFDLENBQUMrTCxjQUFGLEdBQW1CLGNBQW5CO0FBQ0EsVUFBSStPLFNBQVMsQ0FBQ2EsV0FBVixLQUEwQlQsU0FBOUIsRUFBeUNsYixDQUFDLENBQUNnTCxRQUFGLEdBQWEsS0FBYjtBQUM1Qzs7QUFDRCxRQUFJOFAsU0FBUyxDQUFDYyxTQUFWLEtBQXdCVixTQUF4QixJQUFxQ2xiLENBQUMsQ0FBQ2dMLFFBQUYsS0FBZSxLQUF4RCxFQUErRDtBQUMzRGhMLE9BQUMsQ0FBQ2dMLFFBQUYsR0FBYSxXQUFiO0FBQ0FoTCxPQUFDLENBQUM4TCxhQUFGLEdBQWtCLFdBQWxCO0FBQ0E5TCxPQUFDLENBQUMrTCxjQUFGLEdBQW1CLFlBQW5CO0FBQ0g7O0FBQ0QvTCxLQUFDLENBQUM0SyxpQkFBRixHQUFzQjVLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXZELFlBQVYsSUFBMkI3SSxDQUFDLENBQUNnTCxRQUFGLEtBQWUsSUFBZixJQUF1QmhMLENBQUMsQ0FBQ2dMLFFBQUYsS0FBZSxLQUF2RjtBQUNILEdBN0REOztBQWdFQXJGLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JtVCxlQUFoQixHQUFrQyxVQUFTbkQsS0FBVCxFQUFnQjtBQUU5QyxRQUFJM04sQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJOFYsWUFESjtBQUFBLFFBQ2tCK0YsU0FEbEI7QUFBQSxRQUM2Qm5KLFdBRDdCO0FBQUEsUUFDMENvSixTQUQxQzs7QUFHQUQsYUFBUyxHQUFHN2IsQ0FBQyxDQUFDNEwsT0FBRixDQUNQMEIsSUFETyxDQUNGLGNBREUsRUFFUDRDLFdBRk8sQ0FFSyx5Q0FGTCxFQUdQM0MsSUFITyxDQUdGLGFBSEUsRUFHYSxNQUhiLENBQVo7O0FBS0F2TixLQUFDLENBQUNxSyxPQUFGLENBQ0syRCxFQURMLENBQ1FMLEtBRFIsRUFFS3NDLFFBRkwsQ0FFYyxlQUZkOztBQUlBLFFBQUlqUSxDQUFDLENBQUNvTSxPQUFGLENBQVV6RixVQUFWLEtBQXlCLElBQTdCLEVBQW1DO0FBRS9CLFVBQUlvVixRQUFRLEdBQUcvYixDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXpCLEtBQStCLENBQS9CLEdBQW1DLENBQW5DLEdBQXVDLENBQXREO0FBRUF5TixrQkFBWSxHQUFHeFQsSUFBSSxDQUFDNlMsS0FBTCxDQUFXblYsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixHQUF5QixDQUFwQyxDQUFmOztBQUVBLFVBQUlySSxDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEtBQXVCLElBQTNCLEVBQWlDO0FBRTdCLFlBQUltRyxLQUFLLElBQUltSSxZQUFULElBQXlCbkksS0FBSyxJQUFLM04sQ0FBQyxDQUFDa0ssVUFBRixHQUFlLENBQWhCLEdBQXFCNEwsWUFBM0QsRUFBeUU7QUFDckU5VixXQUFDLENBQUNxSyxPQUFGLENBQ0t4SSxLQURMLENBQ1c4TCxLQUFLLEdBQUdtSSxZQUFSLEdBQXVCaUcsUUFEbEMsRUFDNENwTyxLQUFLLEdBQUdtSSxZQUFSLEdBQXVCLENBRG5FLEVBRUs3RixRQUZMLENBRWMsY0FGZCxFQUdLMUMsSUFITCxDQUdVLGFBSFYsRUFHeUIsT0FIekI7QUFLSCxTQU5ELE1BTU87QUFFSG1GLHFCQUFXLEdBQUcxUyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCc0YsS0FBdkM7QUFDQWtPLG1CQUFTLENBQ0poYSxLQURMLENBQ1c2USxXQUFXLEdBQUdvRCxZQUFkLEdBQTZCLENBQTdCLEdBQWlDaUcsUUFENUMsRUFDc0RySixXQUFXLEdBQUdvRCxZQUFkLEdBQTZCLENBRG5GLEVBRUs3RixRQUZMLENBRWMsY0FGZCxFQUdLMUMsSUFITCxDQUdVLGFBSFYsRUFHeUIsT0FIekI7QUFLSDs7QUFFRCxZQUFJSSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUVia08sbUJBQVMsQ0FDSjdOLEVBREwsQ0FDUTZOLFNBQVMsQ0FBQ25lLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJzQyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUR6QyxFQUVLNEgsUUFGTCxDQUVjLGNBRmQ7QUFJSCxTQU5ELE1BTU8sSUFBSXRDLEtBQUssS0FBSzNOLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZSxDQUE3QixFQUFnQztBQUVuQzJSLG1CQUFTLENBQ0o3TixFQURMLENBQ1FoTyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQURsQixFQUVLNEgsUUFGTCxDQUVjLGNBRmQ7QUFJSDtBQUVKOztBQUVEalEsT0FBQyxDQUFDcUssT0FBRixDQUNLMkQsRUFETCxDQUNRTCxLQURSLEVBRUtzQyxRQUZMLENBRWMsY0FGZDtBQUlILEtBNUNELE1BNENPO0FBRUgsVUFBSXRDLEtBQUssSUFBSSxDQUFULElBQWNBLEtBQUssSUFBSzNOLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXJELEVBQW9FO0FBRWhFckksU0FBQyxDQUFDcUssT0FBRixDQUNLeEksS0FETCxDQUNXOEwsS0FEWCxFQUNrQkEsS0FBSyxHQUFHM04sQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFEcEMsRUFFSzRILFFBRkwsQ0FFYyxjQUZkLEVBR0sxQyxJQUhMLENBR1UsYUFIVixFQUd5QixPQUh6QjtBQUtILE9BUEQsTUFPTyxJQUFJc08sU0FBUyxDQUFDbmUsTUFBVixJQUFvQnNDLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQWxDLEVBQWdEO0FBRW5Ed1QsaUJBQVMsQ0FDSjVMLFFBREwsQ0FDYyxjQURkLEVBRUsxQyxJQUZMLENBRVUsYUFGVixFQUV5QixPQUZ6QjtBQUlILE9BTk0sTUFNQTtBQUVIdU8saUJBQVMsR0FBRzliLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXJDO0FBQ0FxSyxtQkFBVyxHQUFHMVMsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixJQUF2QixHQUE4QnhILENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQVYsR0FBeUJzRixLQUF2RCxHQUErREEsS0FBN0U7O0FBRUEsWUFBSTNOLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQVYsSUFBMEJySSxDQUFDLENBQUNvTSxPQUFGLENBQVU5RCxjQUFwQyxJQUF1RHRJLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZXlELEtBQWhCLEdBQXlCM04sQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBN0YsRUFBMkc7QUFFdkd3VCxtQkFBUyxDQUNKaGEsS0FETCxDQUNXNlEsV0FBVyxJQUFJMVMsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBVixHQUF5QnlULFNBQTdCLENBRHRCLEVBQytEcEosV0FBVyxHQUFHb0osU0FEN0UsRUFFSzdMLFFBRkwsQ0FFYyxjQUZkLEVBR0sxQyxJQUhMLENBR1UsYUFIVixFQUd5QixPQUh6QjtBQUtILFNBUEQsTUFPTztBQUVIc08sbUJBQVMsQ0FDSmhhLEtBREwsQ0FDVzZRLFdBRFgsRUFDd0JBLFdBQVcsR0FBRzFTLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBRGhELEVBRUs0SCxRQUZMLENBRWMsY0FGZCxFQUdLMUMsSUFITCxDQUdVLGFBSFYsRUFHeUIsT0FIekI7QUFLSDtBQUVKO0FBRUo7O0FBRUQsUUFBSXZOLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTFFLFFBQVYsS0FBdUIsVUFBdkIsSUFBcUMxSCxDQUFDLENBQUNvTSxPQUFGLENBQVUxRSxRQUFWLEtBQXVCLGFBQWhFLEVBQStFO0FBQzNFMUgsT0FBQyxDQUFDMEgsUUFBRjtBQUNIO0FBQ0osR0FyR0Q7O0FBdUdBL0IsT0FBSyxDQUFDaEksU0FBTixDQUFnQmlULGFBQWhCLEdBQWdDLFlBQVc7QUFFdkMsUUFBSTVRLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSWpELENBREo7QUFBQSxRQUNPaVgsVUFEUDtBQUFBLFFBQ21CZ0ksYUFEbkI7O0FBR0EsUUFBSWhjLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsSUFBdkIsRUFBNkI7QUFDekJySCxPQUFDLENBQUNvTSxPQUFGLENBQVV6RixVQUFWLEdBQXVCLEtBQXZCO0FBQ0g7O0FBRUQsUUFBSTNHLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTVFLFFBQVYsS0FBdUIsSUFBdkIsSUFBK0J4SCxDQUFDLENBQUNvTSxPQUFGLENBQVUvRSxJQUFWLEtBQW1CLEtBQXRELEVBQTZEO0FBRXpEMk0sZ0JBQVUsR0FBRyxJQUFiOztBQUVBLFVBQUloVSxDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE3QixFQUEyQztBQUV2QyxZQUFJckksQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUE3QixFQUFtQztBQUMvQnFWLHVCQUFhLEdBQUdoYyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUFWLEdBQXlCLENBQXpDO0FBQ0gsU0FGRCxNQUVPO0FBQ0gyVCx1QkFBYSxHQUFHaGMsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBMUI7QUFDSDs7QUFFRCxhQUFLdEwsQ0FBQyxHQUFHaUQsQ0FBQyxDQUFDa0ssVUFBWCxFQUF1Qm5OLENBQUMsR0FBSWlELENBQUMsQ0FBQ2tLLFVBQUYsR0FDcEI4UixhQURSLEVBQ3dCamYsQ0FBQyxJQUFJLENBRDdCLEVBQ2dDO0FBQzVCaVgsb0JBQVUsR0FBR2pYLENBQUMsR0FBRyxDQUFqQjtBQUNBMkksV0FBQyxDQUFDMUYsQ0FBQyxDQUFDcUssT0FBRixDQUFVMkosVUFBVixDQUFELENBQUQsQ0FBeUJpSSxLQUF6QixDQUErQixJQUEvQixFQUFxQzFPLElBQXJDLENBQTBDLElBQTFDLEVBQWdELEVBQWhELEVBQ0tBLElBREwsQ0FDVSxrQkFEVixFQUM4QnlHLFVBQVUsR0FBR2hVLENBQUMsQ0FBQ2tLLFVBRDdDLEVBRUtnRSxTQUZMLENBRWVsTyxDQUFDLENBQUNvSyxXQUZqQixFQUU4QjZGLFFBRjlCLENBRXVDLGNBRnZDO0FBR0g7O0FBQ0QsYUFBS2xULENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR2lmLGFBQWEsR0FBSWhjLENBQUMsQ0FBQ2tLLFVBQW5DLEVBQStDbk4sQ0FBQyxJQUFJLENBQXBELEVBQXVEO0FBQ25EaVgsb0JBQVUsR0FBR2pYLENBQWI7QUFDQTJJLFdBQUMsQ0FBQzFGLENBQUMsQ0FBQ3FLLE9BQUYsQ0FBVTJKLFVBQVYsQ0FBRCxDQUFELENBQXlCaUksS0FBekIsQ0FBK0IsSUFBL0IsRUFBcUMxTyxJQUFyQyxDQUEwQyxJQUExQyxFQUFnRCxFQUFoRCxFQUNLQSxJQURMLENBQ1Usa0JBRFYsRUFDOEJ5RyxVQUFVLEdBQUdoVSxDQUFDLENBQUNrSyxVQUQ3QyxFQUVLNEQsUUFGTCxDQUVjOU4sQ0FBQyxDQUFDb0ssV0FGaEIsRUFFNkI2RixRQUY3QixDQUVzQyxjQUZ0QztBQUdIOztBQUNEalEsU0FBQyxDQUFDb0ssV0FBRixDQUFja0QsSUFBZCxDQUFtQixlQUFuQixFQUFvQ0EsSUFBcEMsQ0FBeUMsTUFBekMsRUFBaURlLElBQWpELENBQXNELFlBQVc7QUFDN0QzSSxXQUFDLENBQUMsSUFBRCxDQUFELENBQVE2SCxJQUFSLENBQWEsSUFBYixFQUFtQixFQUFuQjtBQUNILFNBRkQ7QUFJSDtBQUVKO0FBRUosR0ExQ0Q7O0FBNENBNUgsT0FBSyxDQUFDaEksU0FBTixDQUFnQjJWLFNBQWhCLEdBQTRCLFVBQVU0SSxNQUFWLEVBQW1CO0FBRTNDLFFBQUlsYyxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFJLENBQUNrYyxNQUFMLEVBQWM7QUFDVmxjLE9BQUMsQ0FBQ3dNLFFBQUY7QUFDSDs7QUFDRHhNLEtBQUMsQ0FBQ3NMLFdBQUYsR0FBZ0I0USxNQUFoQjtBQUVILEdBVEQ7O0FBV0F2VyxPQUFLLENBQUNoSSxTQUFOLENBQWdCbVAsYUFBaEIsR0FBZ0MsVUFBU3dGLEtBQVQsRUFBZ0I7QUFFNUMsUUFBSXRTLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUltYyxhQUFhLEdBQ2J6VyxDQUFDLENBQUM0TSxLQUFLLENBQUM3QyxNQUFQLENBQUQsQ0FBZ0JtRCxFQUFoQixDQUFtQixjQUFuQixJQUNJbE4sQ0FBQyxDQUFDNE0sS0FBSyxDQUFDN0MsTUFBUCxDQURMLEdBRUkvSixDQUFDLENBQUM0TSxLQUFLLENBQUM3QyxNQUFQLENBQUQsQ0FBZ0IyTSxPQUFoQixDQUF3QixjQUF4QixDQUhSO0FBS0EsUUFBSXpPLEtBQUssR0FBR3pMLFFBQVEsQ0FBQ2lhLGFBQWEsQ0FBQzVPLElBQWQsQ0FBbUIsa0JBQW5CLENBQUQsQ0FBcEI7QUFFQSxRQUFJLENBQUNJLEtBQUwsRUFBWUEsS0FBSyxHQUFHLENBQVI7O0FBRVosUUFBSTNOLENBQUMsQ0FBQ2tLLFVBQUYsSUFBZ0JsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUE5QixFQUE0QztBQUV4Q3JJLE9BQUMsQ0FBQzJQLFlBQUYsQ0FBZWhDLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsSUFBN0I7O0FBQ0E7QUFFSDs7QUFFRDNOLEtBQUMsQ0FBQzJQLFlBQUYsQ0FBZWhDLEtBQWY7QUFFSCxHQXRCRDs7QUF3QkFoSSxPQUFLLENBQUNoSSxTQUFOLENBQWdCZ1MsWUFBaEIsR0FBK0IsVUFBU2hDLEtBQVQsRUFBZ0IwTyxJQUFoQixFQUFzQjlKLFdBQXRCLEVBQW1DO0FBRTlELFFBQUkwQyxXQUFKO0FBQUEsUUFBaUJxSCxTQUFqQjtBQUFBLFFBQTRCQyxRQUE1QjtBQUFBLFFBQXNDQyxTQUF0QztBQUFBLFFBQWlEM04sVUFBVSxHQUFHLElBQTlEO0FBQUEsUUFDSTdPLENBQUMsR0FBRyxJQURSO0FBQUEsUUFDY3ljLFNBRGQ7O0FBR0FKLFFBQUksR0FBR0EsSUFBSSxJQUFJLEtBQWY7O0FBRUEsUUFBSXJjLENBQUMsQ0FBQ29KLFNBQUYsS0FBZ0IsSUFBaEIsSUFBd0JwSixDQUFDLENBQUNvTSxPQUFGLENBQVVuRCxjQUFWLEtBQTZCLElBQXpELEVBQStEO0FBQzNEO0FBQ0g7O0FBRUQsUUFBSWpKLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsSUFBbkIsSUFBMkJySCxDQUFDLENBQUN5SixZQUFGLEtBQW1Ca0UsS0FBbEQsRUFBeUQ7QUFDckQ7QUFDSDs7QUFFRCxRQUFJME8sSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFDaEJyYyxPQUFDLENBQUNzRyxRQUFGLENBQVdxSCxLQUFYO0FBQ0g7O0FBRURzSCxlQUFXLEdBQUd0SCxLQUFkO0FBQ0FrQixjQUFVLEdBQUc3TyxDQUFDLENBQUM4VSxPQUFGLENBQVVHLFdBQVYsQ0FBYjtBQUNBdUgsYUFBUyxHQUFHeGMsQ0FBQyxDQUFDOFUsT0FBRixDQUFVOVUsQ0FBQyxDQUFDeUosWUFBWixDQUFaO0FBRUF6SixLQUFDLENBQUN3SixXQUFGLEdBQWdCeEosQ0FBQyxDQUFDd0ssU0FBRixLQUFnQixJQUFoQixHQUF1QmdTLFNBQXZCLEdBQW1DeGMsQ0FBQyxDQUFDd0ssU0FBckQ7O0FBRUEsUUFBSXhLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTVFLFFBQVYsS0FBdUIsS0FBdkIsSUFBZ0N4SCxDQUFDLENBQUNvTSxPQUFGLENBQVV6RixVQUFWLEtBQXlCLEtBQXpELEtBQW1FZ0gsS0FBSyxHQUFHLENBQVIsSUFBYUEsS0FBSyxHQUFHM04sQ0FBQyxDQUFDc1EsV0FBRixLQUFrQnRRLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQXBILENBQUosRUFBeUk7QUFDckksVUFBSXRJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUI0TixtQkFBVyxHQUFHalYsQ0FBQyxDQUFDeUosWUFBaEI7O0FBQ0EsWUFBSThJLFdBQVcsS0FBSyxJQUFoQixJQUF3QnZTLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXJELEVBQW1FO0FBQy9EckksV0FBQyxDQUFDNE8sWUFBRixDQUFlNE4sU0FBZixFQUEwQixZQUFXO0FBQ2pDeGMsYUFBQyxDQUFDZ1osU0FBRixDQUFZL0QsV0FBWjtBQUNILFdBRkQ7QUFHSCxTQUpELE1BSU87QUFDSGpWLFdBQUMsQ0FBQ2daLFNBQUYsQ0FBWS9ELFdBQVo7QUFDSDtBQUNKOztBQUNEO0FBQ0gsS0FaRCxNQVlPLElBQUlqVixDQUFDLENBQUNvTSxPQUFGLENBQVU1RSxRQUFWLEtBQXVCLEtBQXZCLElBQWdDeEgsQ0FBQyxDQUFDb00sT0FBRixDQUFVekYsVUFBVixLQUF5QixJQUF6RCxLQUFrRWdILEtBQUssR0FBRyxDQUFSLElBQWFBLEtBQUssR0FBSTNOLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQWpILENBQUosRUFBdUk7QUFDMUksVUFBSXRJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9FLElBQVYsS0FBbUIsS0FBdkIsRUFBOEI7QUFDMUI0TixtQkFBVyxHQUFHalYsQ0FBQyxDQUFDeUosWUFBaEI7O0FBQ0EsWUFBSThJLFdBQVcsS0FBSyxJQUFoQixJQUF3QnZTLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXJELEVBQW1FO0FBQy9EckksV0FBQyxDQUFDNE8sWUFBRixDQUFlNE4sU0FBZixFQUEwQixZQUFXO0FBQ2pDeGMsYUFBQyxDQUFDZ1osU0FBRixDQUFZL0QsV0FBWjtBQUNILFdBRkQ7QUFHSCxTQUpELE1BSU87QUFDSGpWLFdBQUMsQ0FBQ2daLFNBQUYsQ0FBWS9ELFdBQVo7QUFDSDtBQUNKOztBQUNEO0FBQ0g7O0FBRUQsUUFBS2pWLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNGLFFBQWYsRUFBMEI7QUFDdEJxSixtQkFBYSxDQUFDOVAsQ0FBQyxDQUFDc0osYUFBSCxDQUFiO0FBQ0g7O0FBRUQsUUFBSTJMLFdBQVcsR0FBRyxDQUFsQixFQUFxQjtBQUNqQixVQUFJalYsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBekIsS0FBNEMsQ0FBaEQsRUFBbUQ7QUFDL0NnVSxpQkFBUyxHQUFHdGMsQ0FBQyxDQUFDa0ssVUFBRixHQUFnQmxLLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTlELGNBQXJEO0FBQ0gsT0FGRCxNQUVPO0FBQ0hnVSxpQkFBUyxHQUFHdGMsQ0FBQyxDQUFDa0ssVUFBRixHQUFlK0ssV0FBM0I7QUFDSDtBQUNKLEtBTkQsTUFNTyxJQUFJQSxXQUFXLElBQUlqVixDQUFDLENBQUNrSyxVQUFyQixFQUFpQztBQUNwQyxVQUFJbEssQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBekIsS0FBNEMsQ0FBaEQsRUFBbUQ7QUFDL0NnVSxpQkFBUyxHQUFHLENBQVo7QUFDSCxPQUZELE1BRU87QUFDSEEsaUJBQVMsR0FBR3JILFdBQVcsR0FBR2pWLENBQUMsQ0FBQ2tLLFVBQTVCO0FBQ0g7QUFDSixLQU5NLE1BTUE7QUFDSG9TLGVBQVMsR0FBR3JILFdBQVo7QUFDSDs7QUFFRGpWLEtBQUMsQ0FBQ29KLFNBQUYsR0FBYyxJQUFkOztBQUVBcEosS0FBQyxDQUFDNEwsT0FBRixDQUFVeUcsT0FBVixDQUFrQixjQUFsQixFQUFrQyxDQUFDclMsQ0FBRCxFQUFJQSxDQUFDLENBQUN5SixZQUFOLEVBQW9CNlMsU0FBcEIsQ0FBbEM7O0FBRUFDLFlBQVEsR0FBR3ZjLENBQUMsQ0FBQ3lKLFlBQWI7QUFDQXpKLEtBQUMsQ0FBQ3lKLFlBQUYsR0FBaUI2UyxTQUFqQjs7QUFFQXRjLEtBQUMsQ0FBQzhRLGVBQUYsQ0FBa0I5USxDQUFDLENBQUN5SixZQUFwQjs7QUFFQSxRQUFLekosQ0FBQyxDQUFDb00sT0FBRixDQUFVOUYsUUFBZixFQUEwQjtBQUV0Qm1XLGVBQVMsR0FBR3pjLENBQUMsQ0FBQ3VQLFlBQUYsRUFBWjtBQUNBa04sZUFBUyxHQUFHQSxTQUFTLENBQUMvTSxLQUFWLENBQWdCLFVBQWhCLENBQVo7O0FBRUEsVUFBSytNLFNBQVMsQ0FBQ3ZTLFVBQVYsSUFBd0J1UyxTQUFTLENBQUNyUSxPQUFWLENBQWtCL0QsWUFBL0MsRUFBOEQ7QUFDMURvVSxpQkFBUyxDQUFDM0wsZUFBVixDQUEwQjlRLENBQUMsQ0FBQ3lKLFlBQTVCO0FBQ0g7QUFFSjs7QUFFRHpKLEtBQUMsQ0FBQzZRLFVBQUY7O0FBQ0E3USxLQUFDLENBQUN3VyxZQUFGOztBQUVBLFFBQUl4VyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRSxJQUFWLEtBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLFVBQUlrTCxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFFdEJ2UyxTQUFDLENBQUNrVSxZQUFGLENBQWVxSSxRQUFmOztBQUVBdmMsU0FBQyxDQUFDK1QsU0FBRixDQUFZdUksU0FBWixFQUF1QixZQUFXO0FBQzlCdGMsV0FBQyxDQUFDZ1osU0FBRixDQUFZc0QsU0FBWjtBQUNILFNBRkQ7QUFJSCxPQVJELE1BUU87QUFDSHRjLFNBQUMsQ0FBQ2daLFNBQUYsQ0FBWXNELFNBQVo7QUFDSDs7QUFDRHRjLE9BQUMsQ0FBQ3VPLGFBQUY7O0FBQ0E7QUFDSDs7QUFFRCxRQUFJZ0UsV0FBVyxLQUFLLElBQWhCLElBQXdCdlMsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFBckQsRUFBbUU7QUFDL0RySSxPQUFDLENBQUM0TyxZQUFGLENBQWVDLFVBQWYsRUFBMkIsWUFBVztBQUNsQzdPLFNBQUMsQ0FBQ2daLFNBQUYsQ0FBWXNELFNBQVo7QUFDSCxPQUZEO0FBR0gsS0FKRCxNQUlPO0FBQ0h0YyxPQUFDLENBQUNnWixTQUFGLENBQVlzRCxTQUFaO0FBQ0g7QUFFSixHQXRIRDs7QUF3SEEzVyxPQUFLLENBQUNoSSxTQUFOLENBQWdCMFksU0FBaEIsR0FBNEIsWUFBVztBQUVuQyxRQUFJclcsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0YsTUFBVixLQUFxQixJQUFyQixJQUE2QnJHLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQTFELEVBQXdFO0FBRXBFckksT0FBQyxDQUFDZ0ssVUFBRixDQUFhMFMsSUFBYjs7QUFDQTFjLE9BQUMsQ0FBQytKLFVBQUYsQ0FBYTJTLElBQWI7QUFFSDs7QUFFRCxRQUFJMWMsQ0FBQyxDQUFDb00sT0FBRixDQUFVbkYsSUFBVixLQUFtQixJQUFuQixJQUEyQmpILENBQUMsQ0FBQ2tLLFVBQUYsR0FBZWxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQXhELEVBQXNFO0FBRWxFckksT0FBQyxDQUFDMkosS0FBRixDQUFRK1MsSUFBUjtBQUVIOztBQUVEMWMsS0FBQyxDQUFDNEwsT0FBRixDQUFVcUUsUUFBVixDQUFtQixlQUFuQjtBQUVILEdBbkJEOztBQXFCQXRLLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JnZixjQUFoQixHQUFpQyxZQUFXO0FBRXhDLFFBQUlDLEtBQUo7QUFBQSxRQUFXQyxLQUFYO0FBQUEsUUFBa0JoZixDQUFsQjtBQUFBLFFBQXFCaWYsVUFBckI7QUFBQSxRQUFpQzljLENBQUMsR0FBRyxJQUFyQzs7QUFFQTRjLFNBQUssR0FBRzVjLENBQUMsQ0FBQzJLLFdBQUYsQ0FBY29TLE1BQWQsR0FBdUIvYyxDQUFDLENBQUMySyxXQUFGLENBQWNxUyxJQUE3QztBQUNBSCxTQUFLLEdBQUc3YyxDQUFDLENBQUMySyxXQUFGLENBQWNzUyxNQUFkLEdBQXVCamQsQ0FBQyxDQUFDMkssV0FBRixDQUFjdVMsSUFBN0M7QUFDQXJmLEtBQUMsR0FBR3lFLElBQUksQ0FBQzZhLEtBQUwsQ0FBV04sS0FBWCxFQUFrQkQsS0FBbEIsQ0FBSjtBQUVBRSxjQUFVLEdBQUd4YSxJQUFJLENBQUM4YSxLQUFMLENBQVd2ZixDQUFDLEdBQUcsR0FBSixHQUFVeUUsSUFBSSxDQUFDK2EsRUFBMUIsQ0FBYjs7QUFDQSxRQUFJUCxVQUFVLEdBQUcsQ0FBakIsRUFBb0I7QUFDaEJBLGdCQUFVLEdBQUcsTUFBTXhhLElBQUksQ0FBQ3lULEdBQUwsQ0FBUytHLFVBQVQsQ0FBbkI7QUFDSDs7QUFFRCxRQUFLQSxVQUFVLElBQUksRUFBZixJQUF1QkEsVUFBVSxJQUFJLENBQXpDLEVBQTZDO0FBQ3pDLGFBQVE5YyxDQUFDLENBQUNvTSxPQUFGLENBQVVsRSxHQUFWLEtBQWtCLEtBQWxCLEdBQTBCLE1BQTFCLEdBQW1DLE9BQTNDO0FBQ0g7O0FBQ0QsUUFBSzRVLFVBQVUsSUFBSSxHQUFmLElBQXdCQSxVQUFVLElBQUksR0FBMUMsRUFBZ0Q7QUFDNUMsYUFBUTljLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWxFLEdBQVYsS0FBa0IsS0FBbEIsR0FBMEIsTUFBMUIsR0FBbUMsT0FBM0M7QUFDSDs7QUFDRCxRQUFLNFUsVUFBVSxJQUFJLEdBQWYsSUFBd0JBLFVBQVUsSUFBSSxHQUExQyxFQUFnRDtBQUM1QyxhQUFROWMsQ0FBQyxDQUFDb00sT0FBRixDQUFVbEUsR0FBVixLQUFrQixLQUFsQixHQUEwQixPQUExQixHQUFvQyxNQUE1QztBQUNIOztBQUNELFFBQUlsSSxDQUFDLENBQUNvTSxPQUFGLENBQVVwRCxlQUFWLEtBQThCLElBQWxDLEVBQXdDO0FBQ3BDLFVBQUs4VCxVQUFVLElBQUksRUFBZixJQUF1QkEsVUFBVSxJQUFJLEdBQXpDLEVBQStDO0FBQzNDLGVBQU8sTUFBUDtBQUNILE9BRkQsTUFFTztBQUNILGVBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBRUQsV0FBTyxVQUFQO0FBRUgsR0FoQ0Q7O0FBa0NBblgsT0FBSyxDQUFDaEksU0FBTixDQUFnQjJmLFFBQWhCLEdBQTJCLFVBQVNoTCxLQUFULEVBQWdCO0FBRXZDLFFBQUl0UyxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQ0lrSyxVQURKO0FBQUEsUUFFSVIsU0FGSjs7QUFJQTFKLEtBQUMsQ0FBQ3FKLFFBQUYsR0FBYSxLQUFiO0FBQ0FySixLQUFDLENBQUN5SyxPQUFGLEdBQVksS0FBWjs7QUFFQSxRQUFJekssQ0FBQyxDQUFDaUssU0FBTixFQUFpQjtBQUNiakssT0FBQyxDQUFDaUssU0FBRixHQUFjLEtBQWQ7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFFRGpLLEtBQUMsQ0FBQ3NMLFdBQUYsR0FBZ0IsS0FBaEI7QUFDQXRMLEtBQUMsQ0FBQzJMLFdBQUYsR0FBa0IzTCxDQUFDLENBQUMySyxXQUFGLENBQWM0UyxXQUFkLEdBQTRCLEVBQTlCLEdBQXFDLEtBQXJDLEdBQTZDLElBQTdEOztBQUVBLFFBQUt2ZCxDQUFDLENBQUMySyxXQUFGLENBQWNxUyxJQUFkLEtBQXVCOUIsU0FBNUIsRUFBd0M7QUFDcEMsYUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBS2xiLENBQUMsQ0FBQzJLLFdBQUYsQ0FBYzZTLE9BQWQsS0FBMEIsSUFBL0IsRUFBc0M7QUFDbEN4ZCxPQUFDLENBQUM0TCxPQUFGLENBQVV5RyxPQUFWLENBQWtCLE1BQWxCLEVBQTBCLENBQUNyUyxDQUFELEVBQUlBLENBQUMsQ0FBQzJjLGNBQUYsRUFBSixDQUExQjtBQUNIOztBQUVELFFBQUszYyxDQUFDLENBQUMySyxXQUFGLENBQWM0UyxXQUFkLElBQTZCdmQsQ0FBQyxDQUFDMkssV0FBRixDQUFjOFMsUUFBaEQsRUFBMkQ7QUFFdkQvVCxlQUFTLEdBQUcxSixDQUFDLENBQUMyYyxjQUFGLEVBQVo7O0FBRUEsY0FBU2pULFNBQVQ7QUFFSSxhQUFLLE1BQUw7QUFDQSxhQUFLLE1BQUw7QUFFSVEsb0JBQVUsR0FDTmxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNELFlBQVYsR0FDSXpJLENBQUMsQ0FBQ2dULGNBQUYsQ0FBa0JoVCxDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDMlYsYUFBRixFQUFuQyxDQURKLEdBRUkzVixDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDMlYsYUFBRixFQUh6QjtBQUtBM1YsV0FBQyxDQUFDdUosZ0JBQUYsR0FBcUIsQ0FBckI7QUFFQTs7QUFFSixhQUFLLE9BQUw7QUFDQSxhQUFLLElBQUw7QUFFSVcsb0JBQVUsR0FDTmxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTNELFlBQVYsR0FDSXpJLENBQUMsQ0FBQ2dULGNBQUYsQ0FBa0JoVCxDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDMlYsYUFBRixFQUFuQyxDQURKLEdBRUkzVixDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDMlYsYUFBRixFQUh6QjtBQUtBM1YsV0FBQyxDQUFDdUosZ0JBQUYsR0FBcUIsQ0FBckI7QUFFQTs7QUFFSjtBQTFCSjs7QUErQkEsVUFBSUcsU0FBUyxJQUFJLFVBQWpCLEVBQThCO0FBRTFCMUosU0FBQyxDQUFDMlAsWUFBRixDQUFnQnpGLFVBQWhCOztBQUNBbEssU0FBQyxDQUFDMkssV0FBRixHQUFnQixFQUFoQjs7QUFDQTNLLFNBQUMsQ0FBQzRMLE9BQUYsQ0FBVXlHLE9BQVYsQ0FBa0IsT0FBbEIsRUFBMkIsQ0FBQ3JTLENBQUQsRUFBSTBKLFNBQUosQ0FBM0I7QUFFSDtBQUVKLEtBM0NELE1BMkNPO0FBRUgsVUFBSzFKLENBQUMsQ0FBQzJLLFdBQUYsQ0FBY29TLE1BQWQsS0FBeUIvYyxDQUFDLENBQUMySyxXQUFGLENBQWNxUyxJQUE1QyxFQUFtRDtBQUUvQ2hkLFNBQUMsQ0FBQzJQLFlBQUYsQ0FBZ0IzUCxDQUFDLENBQUN5SixZQUFsQjs7QUFDQXpKLFNBQUMsQ0FBQzJLLFdBQUYsR0FBZ0IsRUFBaEI7QUFFSDtBQUVKO0FBRUosR0EvRUQ7O0FBaUZBaEYsT0FBSyxDQUFDaEksU0FBTixDQUFnQnFQLFlBQWhCLEdBQStCLFVBQVNzRixLQUFULEVBQWdCO0FBRTNDLFFBQUl0UyxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFLQSxDQUFDLENBQUNvTSxPQUFGLENBQVU1RCxLQUFWLEtBQW9CLEtBQXJCLElBQWdDLGdCQUFnQnZJLFFBQWhCLElBQTRCRCxDQUFDLENBQUNvTSxPQUFGLENBQVU1RCxLQUFWLEtBQW9CLEtBQXBGLEVBQTRGO0FBQ3hGO0FBQ0gsS0FGRCxNQUVPLElBQUl4SSxDQUFDLENBQUNvTSxPQUFGLENBQVVqRixTQUFWLEtBQXdCLEtBQXhCLElBQWlDbUwsS0FBSyxDQUFDcUgsSUFBTixDQUFXalosT0FBWCxDQUFtQixPQUFuQixNQUFnQyxDQUFDLENBQXRFLEVBQXlFO0FBQzVFO0FBQ0g7O0FBRURWLEtBQUMsQ0FBQzJLLFdBQUYsQ0FBYytTLFdBQWQsR0FBNEJwTCxLQUFLLENBQUNxTCxhQUFOLElBQXVCckwsS0FBSyxDQUFDcUwsYUFBTixDQUFvQkMsT0FBcEIsS0FBZ0MxQyxTQUF2RCxHQUN4QjVJLEtBQUssQ0FBQ3FMLGFBQU4sQ0FBb0JDLE9BQXBCLENBQTRCbGdCLE1BREosR0FDYSxDQUR6QztBQUdBc0MsS0FBQyxDQUFDMkssV0FBRixDQUFjOFMsUUFBZCxHQUF5QnpkLENBQUMsQ0FBQzRKLFNBQUYsR0FBYzVKLENBQUMsQ0FBQ29NLE9BQUYsQ0FDbEN6RCxjQURMOztBQUdBLFFBQUkzSSxDQUFDLENBQUNvTSxPQUFGLENBQVVwRCxlQUFWLEtBQThCLElBQWxDLEVBQXdDO0FBQ3BDaEosT0FBQyxDQUFDMkssV0FBRixDQUFjOFMsUUFBZCxHQUF5QnpkLENBQUMsQ0FBQzZKLFVBQUYsR0FBZTdKLENBQUMsQ0FBQ29NLE9BQUYsQ0FDbkN6RCxjQURMO0FBRUg7O0FBRUQsWUFBUTJKLEtBQUssQ0FBQ25HLElBQU4sQ0FBV2lMLE1BQW5CO0FBRUksV0FBSyxPQUFMO0FBQ0lwWCxTQUFDLENBQUM2ZCxVQUFGLENBQWF2TCxLQUFiOztBQUNBOztBQUVKLFdBQUssTUFBTDtBQUNJdFMsU0FBQyxDQUFDOGQsU0FBRixDQUFZeEwsS0FBWjs7QUFDQTs7QUFFSixXQUFLLEtBQUw7QUFDSXRTLFNBQUMsQ0FBQ3NkLFFBQUYsQ0FBV2hMLEtBQVg7O0FBQ0E7QUFaUjtBQWdCSCxHQXJDRDs7QUF1Q0EzTSxPQUFLLENBQUNoSSxTQUFOLENBQWdCbWdCLFNBQWhCLEdBQTRCLFVBQVN4TCxLQUFULEVBQWdCO0FBRXhDLFFBQUl0UyxDQUFDLEdBQUcsSUFBUjtBQUFBLFFBQ0krZCxVQUFVLEdBQUcsS0FEakI7QUFBQSxRQUVJQyxPQUZKO0FBQUEsUUFFYXJCLGNBRmI7QUFBQSxRQUU2QlksV0FGN0I7QUFBQSxRQUUwQ1UsY0FGMUM7QUFBQSxRQUUwREwsT0FGMUQ7QUFBQSxRQUVtRU0sbUJBRm5FOztBQUlBTixXQUFPLEdBQUd0TCxLQUFLLENBQUNxTCxhQUFOLEtBQXdCekMsU0FBeEIsR0FBb0M1SSxLQUFLLENBQUNxTCxhQUFOLENBQW9CQyxPQUF4RCxHQUFrRSxJQUE1RTs7QUFFQSxRQUFJLENBQUM1ZCxDQUFDLENBQUNxSixRQUFILElBQWVySixDQUFDLENBQUNpSyxTQUFqQixJQUE4QjJULE9BQU8sSUFBSUEsT0FBTyxDQUFDbGdCLE1BQVIsS0FBbUIsQ0FBaEUsRUFBbUU7QUFDL0QsYUFBTyxLQUFQO0FBQ0g7O0FBRURzZ0IsV0FBTyxHQUFHaGUsQ0FBQyxDQUFDOFUsT0FBRixDQUFVOVUsQ0FBQyxDQUFDeUosWUFBWixDQUFWO0FBRUF6SixLQUFDLENBQUMySyxXQUFGLENBQWNxUyxJQUFkLEdBQXFCWSxPQUFPLEtBQUsxQyxTQUFaLEdBQXdCMEMsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXTyxLQUFuQyxHQUEyQzdMLEtBQUssQ0FBQzhMLE9BQXRFO0FBQ0FwZSxLQUFDLENBQUMySyxXQUFGLENBQWN1UyxJQUFkLEdBQXFCVSxPQUFPLEtBQUsxQyxTQUFaLEdBQXdCMEMsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXUyxLQUFuQyxHQUEyQy9MLEtBQUssQ0FBQ2dNLE9BQXRFO0FBRUF0ZSxLQUFDLENBQUMySyxXQUFGLENBQWM0UyxXQUFkLEdBQTRCamIsSUFBSSxDQUFDOGEsS0FBTCxDQUFXOWEsSUFBSSxDQUFDaWMsSUFBTCxDQUNuQ2pjLElBQUksQ0FBQ2tjLEdBQUwsQ0FBU3hlLENBQUMsQ0FBQzJLLFdBQUYsQ0FBY3FTLElBQWQsR0FBcUJoZCxDQUFDLENBQUMySyxXQUFGLENBQWNvUyxNQUE1QyxFQUFvRCxDQUFwRCxDQURtQyxDQUFYLENBQTVCO0FBR0FtQix1QkFBbUIsR0FBRzViLElBQUksQ0FBQzhhLEtBQUwsQ0FBVzlhLElBQUksQ0FBQ2ljLElBQUwsQ0FDN0JqYyxJQUFJLENBQUNrYyxHQUFMLENBQVN4ZSxDQUFDLENBQUMySyxXQUFGLENBQWN1UyxJQUFkLEdBQXFCbGQsQ0FBQyxDQUFDMkssV0FBRixDQUFjc1MsTUFBNUMsRUFBb0QsQ0FBcEQsQ0FENkIsQ0FBWCxDQUF0Qjs7QUFHQSxRQUFJLENBQUNqZCxDQUFDLENBQUNvTSxPQUFGLENBQVVwRCxlQUFYLElBQThCLENBQUNoSixDQUFDLENBQUN5SyxPQUFqQyxJQUE0Q3lULG1CQUFtQixHQUFHLENBQXRFLEVBQXlFO0FBQ3JFbGUsT0FBQyxDQUFDaUssU0FBRixHQUFjLElBQWQ7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFFRCxRQUFJakssQ0FBQyxDQUFDb00sT0FBRixDQUFVcEQsZUFBVixLQUE4QixJQUFsQyxFQUF3QztBQUNwQ2hKLE9BQUMsQ0FBQzJLLFdBQUYsQ0FBYzRTLFdBQWQsR0FBNEJXLG1CQUE1QjtBQUNIOztBQUVEdkIsa0JBQWMsR0FBRzNjLENBQUMsQ0FBQzJjLGNBQUYsRUFBakI7O0FBRUEsUUFBSXJLLEtBQUssQ0FBQ3FMLGFBQU4sS0FBd0J6QyxTQUF4QixJQUFxQ2xiLENBQUMsQ0FBQzJLLFdBQUYsQ0FBYzRTLFdBQWQsR0FBNEIsQ0FBckUsRUFBd0U7QUFDcEV2ZCxPQUFDLENBQUN5SyxPQUFGLEdBQVksSUFBWjtBQUNBNkgsV0FBSyxDQUFDTyxjQUFOO0FBQ0g7O0FBRURvTCxrQkFBYyxHQUFHLENBQUNqZSxDQUFDLENBQUNvTSxPQUFGLENBQVVsRSxHQUFWLEtBQWtCLEtBQWxCLEdBQTBCLENBQTFCLEdBQThCLENBQUMsQ0FBaEMsS0FBc0NsSSxDQUFDLENBQUMySyxXQUFGLENBQWNxUyxJQUFkLEdBQXFCaGQsQ0FBQyxDQUFDMkssV0FBRixDQUFjb1MsTUFBbkMsR0FBNEMsQ0FBNUMsR0FBZ0QsQ0FBQyxDQUF2RixDQUFqQjs7QUFDQSxRQUFJL2MsQ0FBQyxDQUFDb00sT0FBRixDQUFVcEQsZUFBVixLQUE4QixJQUFsQyxFQUF3QztBQUNwQ2lWLG9CQUFjLEdBQUdqZSxDQUFDLENBQUMySyxXQUFGLENBQWN1UyxJQUFkLEdBQXFCbGQsQ0FBQyxDQUFDMkssV0FBRixDQUFjc1MsTUFBbkMsR0FBNEMsQ0FBNUMsR0FBZ0QsQ0FBQyxDQUFsRTtBQUNIOztBQUdETSxlQUFXLEdBQUd2ZCxDQUFDLENBQUMySyxXQUFGLENBQWM0UyxXQUE1QjtBQUVBdmQsS0FBQyxDQUFDMkssV0FBRixDQUFjNlMsT0FBZCxHQUF3QixLQUF4Qjs7QUFFQSxRQUFJeGQsQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFBVixLQUF1QixLQUEzQixFQUFrQztBQUM5QixVQUFLeEgsQ0FBQyxDQUFDeUosWUFBRixLQUFtQixDQUFuQixJQUF3QmtULGNBQWMsS0FBSyxPQUE1QyxJQUF5RDNjLENBQUMsQ0FBQ3lKLFlBQUYsSUFBa0J6SixDQUFDLENBQUNzUSxXQUFGLEVBQWxCLElBQXFDcU0sY0FBYyxLQUFLLE1BQXJILEVBQThIO0FBQzFIWSxtQkFBVyxHQUFHdmQsQ0FBQyxDQUFDMkssV0FBRixDQUFjNFMsV0FBZCxHQUE0QnZkLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVWhGLFlBQXBEO0FBQ0FwSCxTQUFDLENBQUMySyxXQUFGLENBQWM2UyxPQUFkLEdBQXdCLElBQXhCO0FBQ0g7QUFDSjs7QUFFRCxRQUFJeGQsQ0FBQyxDQUFDb00sT0FBRixDQUFVckQsUUFBVixLQUF1QixLQUEzQixFQUFrQztBQUM5Qi9JLE9BQUMsQ0FBQ3dLLFNBQUYsR0FBY3dULE9BQU8sR0FBR1QsV0FBVyxHQUFHVSxjQUF0QztBQUNILEtBRkQsTUFFTztBQUNIamUsT0FBQyxDQUFDd0ssU0FBRixHQUFjd1QsT0FBTyxHQUFJVCxXQUFXLElBQUl2ZCxDQUFDLENBQUMwSyxLQUFGLENBQVFpRSxNQUFSLEtBQW1CM08sQ0FBQyxDQUFDNEosU0FBekIsQ0FBWixHQUFtRHFVLGNBQTNFO0FBQ0g7O0FBQ0QsUUFBSWplLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXBELGVBQVYsS0FBOEIsSUFBbEMsRUFBd0M7QUFDcENoSixPQUFDLENBQUN3SyxTQUFGLEdBQWN3VCxPQUFPLEdBQUdULFdBQVcsR0FBR1UsY0FBdEM7QUFDSDs7QUFFRCxRQUFJamUsQ0FBQyxDQUFDb00sT0FBRixDQUFVL0UsSUFBVixLQUFtQixJQUFuQixJQUEyQnJILENBQUMsQ0FBQ29NLE9BQUYsQ0FBVTFELFNBQVYsS0FBd0IsS0FBdkQsRUFBOEQ7QUFDMUQsYUFBTyxLQUFQO0FBQ0g7O0FBRUQsUUFBSTFJLENBQUMsQ0FBQ29KLFNBQUYsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDdEJwSixPQUFDLENBQUN3SyxTQUFGLEdBQWMsSUFBZDtBQUNBLGFBQU8sS0FBUDtBQUNIOztBQUVEeEssS0FBQyxDQUFDbWEsTUFBRixDQUFTbmEsQ0FBQyxDQUFDd0ssU0FBWDtBQUVILEdBNUVEOztBQThFQTdFLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JrZ0IsVUFBaEIsR0FBNkIsVUFBU3ZMLEtBQVQsRUFBZ0I7QUFFekMsUUFBSXRTLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSTRkLE9BREo7O0FBR0E1ZCxLQUFDLENBQUNzTCxXQUFGLEdBQWdCLElBQWhCOztBQUVBLFFBQUl0TCxDQUFDLENBQUMySyxXQUFGLENBQWMrUyxXQUFkLEtBQThCLENBQTlCLElBQW1DMWQsQ0FBQyxDQUFDa0ssVUFBRixJQUFnQmxLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQWpFLEVBQStFO0FBQzNFckksT0FBQyxDQUFDMkssV0FBRixHQUFnQixFQUFoQjtBQUNBLGFBQU8sS0FBUDtBQUNIOztBQUVELFFBQUkySCxLQUFLLENBQUNxTCxhQUFOLEtBQXdCekMsU0FBeEIsSUFBcUM1SSxLQUFLLENBQUNxTCxhQUFOLENBQW9CQyxPQUFwQixLQUFnQzFDLFNBQXpFLEVBQW9GO0FBQ2hGMEMsYUFBTyxHQUFHdEwsS0FBSyxDQUFDcUwsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEIsQ0FBNUIsQ0FBVjtBQUNIOztBQUVENWQsS0FBQyxDQUFDMkssV0FBRixDQUFjb1MsTUFBZCxHQUF1Qi9jLENBQUMsQ0FBQzJLLFdBQUYsQ0FBY3FTLElBQWQsR0FBcUJZLE9BQU8sS0FBSzFDLFNBQVosR0FBd0IwQyxPQUFPLENBQUNPLEtBQWhDLEdBQXdDN0wsS0FBSyxDQUFDOEwsT0FBMUY7QUFDQXBlLEtBQUMsQ0FBQzJLLFdBQUYsQ0FBY3NTLE1BQWQsR0FBdUJqZCxDQUFDLENBQUMySyxXQUFGLENBQWN1UyxJQUFkLEdBQXFCVSxPQUFPLEtBQUsxQyxTQUFaLEdBQXdCMEMsT0FBTyxDQUFDUyxLQUFoQyxHQUF3Qy9MLEtBQUssQ0FBQ2dNLE9BQTFGO0FBRUF0ZSxLQUFDLENBQUNxSixRQUFGLEdBQWEsSUFBYjtBQUVILEdBckJEOztBQXVCQTFELE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0I4Z0IsY0FBaEIsR0FBaUM5WSxLQUFLLENBQUNoSSxTQUFOLENBQWdCK2dCLGFBQWhCLEdBQWdDLFlBQVc7QUFFeEUsUUFBSTFlLENBQUMsR0FBRyxJQUFSOztBQUVBLFFBQUlBLENBQUMsQ0FBQzZMLFlBQUYsS0FBbUIsSUFBdkIsRUFBNkI7QUFFekI3TCxPQUFDLENBQUM2TixNQUFGOztBQUVBN04sT0FBQyxDQUFDb0ssV0FBRixDQUFjdkgsUUFBZCxDQUF1QixLQUFLdUosT0FBTCxDQUFhakUsS0FBcEMsRUFBMkNnRyxNQUEzQzs7QUFFQW5PLE9BQUMsQ0FBQzZMLFlBQUYsQ0FBZWlDLFFBQWYsQ0FBd0I5TixDQUFDLENBQUNvSyxXQUExQjs7QUFFQXBLLE9BQUMsQ0FBQ3NPLE1BQUY7QUFFSDtBQUVKLEdBaEJEOztBQWtCQTNJLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0JrUSxNQUFoQixHQUF5QixZQUFXO0FBRWhDLFFBQUk3TixDQUFDLEdBQUcsSUFBUjs7QUFFQTBGLEtBQUMsQ0FBQyxlQUFELEVBQWtCMUYsQ0FBQyxDQUFDNEwsT0FBcEIsQ0FBRCxDQUE4QnBILE1BQTlCOztBQUVBLFFBQUl4RSxDQUFDLENBQUMySixLQUFOLEVBQWE7QUFDVDNKLE9BQUMsQ0FBQzJKLEtBQUYsQ0FBUW5GLE1BQVI7QUFDSDs7QUFFRCxRQUFJeEUsQ0FBQyxDQUFDZ0ssVUFBRixJQUFnQmhLLENBQUMsQ0FBQ21OLFFBQUYsQ0FBV3ZMLElBQVgsQ0FBZ0I1QixDQUFDLENBQUNvTSxPQUFGLENBQVU3RixTQUExQixDQUFwQixFQUEwRDtBQUN0RHZHLE9BQUMsQ0FBQ2dLLFVBQUYsQ0FBYXhGLE1BQWI7QUFDSDs7QUFFRCxRQUFJeEUsQ0FBQyxDQUFDK0osVUFBRixJQUFnQi9KLENBQUMsQ0FBQ21OLFFBQUYsQ0FBV3ZMLElBQVgsQ0FBZ0I1QixDQUFDLENBQUNvTSxPQUFGLENBQVU1RixTQUExQixDQUFwQixFQUEwRDtBQUN0RHhHLE9BQUMsQ0FBQytKLFVBQUYsQ0FBYXZGLE1BQWI7QUFDSDs7QUFFRHhFLEtBQUMsQ0FBQ3FLLE9BQUYsQ0FDSzZGLFdBREwsQ0FDaUIsc0RBRGpCLEVBRUszQyxJQUZMLENBRVUsYUFGVixFQUV5QixNQUZ6QixFQUdLNEIsR0FITCxDQUdTLE9BSFQsRUFHa0IsRUFIbEI7QUFLSCxHQXZCRDs7QUF5QkF4SixPQUFLLENBQUNoSSxTQUFOLENBQWdCeVUsT0FBaEIsR0FBMEIsVUFBU3VNLGNBQVQsRUFBeUI7QUFFL0MsUUFBSTNlLENBQUMsR0FBRyxJQUFSOztBQUNBQSxLQUFDLENBQUM0TCxPQUFGLENBQVV5RyxPQUFWLENBQWtCLFNBQWxCLEVBQTZCLENBQUNyUyxDQUFELEVBQUkyZSxjQUFKLENBQTdCOztBQUNBM2UsS0FBQyxDQUFDOFQsT0FBRjtBQUVILEdBTkQ7O0FBUUFuTyxPQUFLLENBQUNoSSxTQUFOLENBQWdCNlksWUFBaEIsR0FBK0IsWUFBVztBQUV0QyxRQUFJeFcsQ0FBQyxHQUFHLElBQVI7QUFBQSxRQUNJOFYsWUFESjs7QUFHQUEsZ0JBQVksR0FBR3hULElBQUksQ0FBQzZTLEtBQUwsQ0FBV25WLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVS9ELFlBQVYsR0FBeUIsQ0FBcEMsQ0FBZjs7QUFFQSxRQUFLckksQ0FBQyxDQUFDb00sT0FBRixDQUFVL0YsTUFBVixLQUFxQixJQUFyQixJQUNEckcsQ0FBQyxDQUFDa0ssVUFBRixHQUFlbEssQ0FBQyxDQUFDb00sT0FBRixDQUFVL0QsWUFEeEIsSUFFRCxDQUFDckksQ0FBQyxDQUFDb00sT0FBRixDQUFVNUUsUUFGZixFQUUwQjtBQUV0QnhILE9BQUMsQ0FBQ2dLLFVBQUYsQ0FBYWtHLFdBQWIsQ0FBeUIsZ0JBQXpCLEVBQTJDM0MsSUFBM0MsQ0FBZ0QsZUFBaEQsRUFBaUUsT0FBakU7O0FBQ0F2TixPQUFDLENBQUMrSixVQUFGLENBQWFtRyxXQUFiLENBQXlCLGdCQUF6QixFQUEyQzNDLElBQTNDLENBQWdELGVBQWhELEVBQWlFLE9BQWpFOztBQUVBLFVBQUl2TixDQUFDLENBQUN5SixZQUFGLEtBQW1CLENBQXZCLEVBQTBCO0FBRXRCekosU0FBQyxDQUFDZ0ssVUFBRixDQUFhaUcsUUFBYixDQUFzQixnQkFBdEIsRUFBd0MxQyxJQUF4QyxDQUE2QyxlQUE3QyxFQUE4RCxNQUE5RDs7QUFDQXZOLFNBQUMsQ0FBQytKLFVBQUYsQ0FBYW1HLFdBQWIsQ0FBeUIsZ0JBQXpCLEVBQTJDM0MsSUFBM0MsQ0FBZ0QsZUFBaEQsRUFBaUUsT0FBakU7QUFFSCxPQUxELE1BS08sSUFBSXZOLENBQUMsQ0FBQ3lKLFlBQUYsSUFBa0J6SixDQUFDLENBQUNrSyxVQUFGLEdBQWVsSyxDQUFDLENBQUNvTSxPQUFGLENBQVUvRCxZQUEzQyxJQUEyRHJJLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXpGLFVBQVYsS0FBeUIsS0FBeEYsRUFBK0Y7QUFFbEczRyxTQUFDLENBQUMrSixVQUFGLENBQWFrRyxRQUFiLENBQXNCLGdCQUF0QixFQUF3QzFDLElBQXhDLENBQTZDLGVBQTdDLEVBQThELE1BQTlEOztBQUNBdk4sU0FBQyxDQUFDZ0ssVUFBRixDQUFha0csV0FBYixDQUF5QixnQkFBekIsRUFBMkMzQyxJQUEzQyxDQUFnRCxlQUFoRCxFQUFpRSxPQUFqRTtBQUVILE9BTE0sTUFLQSxJQUFJdk4sQ0FBQyxDQUFDeUosWUFBRixJQUFrQnpKLENBQUMsQ0FBQ2tLLFVBQUYsR0FBZSxDQUFqQyxJQUFzQ2xLLENBQUMsQ0FBQ29NLE9BQUYsQ0FBVXpGLFVBQVYsS0FBeUIsSUFBbkUsRUFBeUU7QUFFNUUzRyxTQUFDLENBQUMrSixVQUFGLENBQWFrRyxRQUFiLENBQXNCLGdCQUF0QixFQUF3QzFDLElBQXhDLENBQTZDLGVBQTdDLEVBQThELE1BQTlEOztBQUNBdk4sU0FBQyxDQUFDZ0ssVUFBRixDQUFha0csV0FBYixDQUF5QixnQkFBekIsRUFBMkMzQyxJQUEzQyxDQUFnRCxlQUFoRCxFQUFpRSxPQUFqRTtBQUVIO0FBRUo7QUFFSixHQWpDRDs7QUFtQ0E1SCxPQUFLLENBQUNoSSxTQUFOLENBQWdCa1QsVUFBaEIsR0FBNkIsWUFBVztBQUVwQyxRQUFJN1EsQ0FBQyxHQUFHLElBQVI7O0FBRUEsUUFBSUEsQ0FBQyxDQUFDMkosS0FBRixLQUFZLElBQWhCLEVBQXNCO0FBRWxCM0osT0FBQyxDQUFDMkosS0FBRixDQUNLMkQsSUFETCxDQUNVLElBRFYsRUFFUzRDLFdBRlQsQ0FFcUIsY0FGckIsRUFHUzhHLEdBSFQ7O0FBS0FoWCxPQUFDLENBQUMySixLQUFGLENBQ0syRCxJQURMLENBQ1UsSUFEVixFQUVLVSxFQUZMLENBRVExTCxJQUFJLENBQUM2UyxLQUFMLENBQVduVixDQUFDLENBQUN5SixZQUFGLEdBQWlCekosQ0FBQyxDQUFDb00sT0FBRixDQUFVOUQsY0FBdEMsQ0FGUixFQUdLMkgsUUFITCxDQUdjLGNBSGQ7QUFLSDtBQUVKLEdBbEJEOztBQW9CQXRLLE9BQUssQ0FBQ2hJLFNBQU4sQ0FBZ0I0VixVQUFoQixHQUE2QixZQUFXO0FBRXBDLFFBQUl2VCxDQUFDLEdBQUcsSUFBUjs7QUFFQSxRQUFLQSxDQUFDLENBQUNvTSxPQUFGLENBQVUzRixRQUFmLEVBQTBCO0FBRXRCLFVBQUt4RyxRQUFRLENBQUNELENBQUMsQ0FBQ3VMLE1BQUgsQ0FBYixFQUEwQjtBQUV0QnZMLFNBQUMsQ0FBQ3NMLFdBQUYsR0FBZ0IsSUFBaEI7QUFFSCxPQUpELE1BSU87QUFFSHRMLFNBQUMsQ0FBQ3NMLFdBQUYsR0FBZ0IsS0FBaEI7QUFFSDtBQUVKO0FBRUosR0FsQkQ7O0FBb0JBNUYsR0FBQyxDQUFDa1osRUFBRixDQUFLbFAsS0FBTCxHQUFhLFlBQVc7QUFDcEIsUUFBSTFQLENBQUMsR0FBRyxJQUFSO0FBQUEsUUFDSTZhLEdBQUcsR0FBR3BkLFNBQVMsQ0FBQyxDQUFELENBRG5CO0FBQUEsUUFFSW9oQixJQUFJLEdBQUd2YixLQUFLLENBQUMzRixTQUFOLENBQWdCa0UsS0FBaEIsQ0FBc0IzRSxJQUF0QixDQUEyQk8sU0FBM0IsRUFBc0MsQ0FBdEMsQ0FGWDtBQUFBLFFBR0lVLENBQUMsR0FBRzZCLENBQUMsQ0FBQ3RDLE1BSFY7QUFBQSxRQUlJWCxDQUpKO0FBQUEsUUFLSStoQixHQUxKOztBQU1BLFNBQUsvaEIsQ0FBQyxHQUFHLENBQVQsRUFBWUEsQ0FBQyxHQUFHb0IsQ0FBaEIsRUFBbUJwQixDQUFDLEVBQXBCLEVBQXdCO0FBQ3BCLFVBQUksUUFBTzhkLEdBQVAsS0FBYyxRQUFkLElBQTBCLE9BQU9BLEdBQVAsSUFBYyxXQUE1QyxFQUNJN2EsQ0FBQyxDQUFDakQsQ0FBRCxDQUFELENBQUsyUyxLQUFMLEdBQWEsSUFBSS9KLEtBQUosQ0FBVTNGLENBQUMsQ0FBQ2pELENBQUQsQ0FBWCxFQUFnQjhkLEdBQWhCLENBQWIsQ0FESixLQUdJaUUsR0FBRyxHQUFHOWUsQ0FBQyxDQUFDakQsQ0FBRCxDQUFELENBQUsyUyxLQUFMLENBQVdtTCxHQUFYLEVBQWdCNVosS0FBaEIsQ0FBc0JqQixDQUFDLENBQUNqRCxDQUFELENBQUQsQ0FBSzJTLEtBQTNCLEVBQWtDbVAsSUFBbEMsQ0FBTjtBQUNKLFVBQUksT0FBT0MsR0FBUCxJQUFjLFdBQWxCLEVBQStCLE9BQU9BLEdBQVA7QUFDbEM7O0FBQ0QsV0FBTzllLENBQVA7QUFDSCxHQWZEO0FBaUJILENBajdGQyxDQUFELEM7Ozs7Ozs7Ozs7O0FDakJEckQsTUFBTSxDQUFDRCxPQUFQLEdBQWlCLFVBQVNDLE1BQVQsRUFBaUI7QUFDakMsTUFBSSxDQUFDQSxNQUFNLENBQUNvaUIsZUFBWixFQUE2QjtBQUM1QnBpQixVQUFNLENBQUNxaUIsU0FBUCxHQUFtQixZQUFXLENBQUUsQ0FBaEM7O0FBQ0FyaUIsVUFBTSxDQUFDc2lCLEtBQVAsR0FBZSxFQUFmLENBRjRCLENBRzVCOztBQUNBLFFBQUksQ0FBQ3RpQixNQUFNLENBQUNrRyxRQUFaLEVBQXNCbEcsTUFBTSxDQUFDa0csUUFBUCxHQUFrQixFQUFsQjtBQUN0QnRGLFVBQU0sQ0FBQ2tHLGNBQVAsQ0FBc0I5RyxNQUF0QixFQUE4QixRQUE5QixFQUF3QztBQUN2Q29ILGdCQUFVLEVBQUUsSUFEMkI7QUFFdkN3TixTQUFHLEVBQUUsZUFBVztBQUNmLGVBQU81VSxNQUFNLENBQUN3QixDQUFkO0FBQ0E7QUFKc0MsS0FBeEM7QUFNQVosVUFBTSxDQUFDa0csY0FBUCxDQUFzQjlHLE1BQXRCLEVBQThCLElBQTlCLEVBQW9DO0FBQ25Db0gsZ0JBQVUsRUFBRSxJQUR1QjtBQUVuQ3dOLFNBQUcsRUFBRSxlQUFXO0FBQ2YsZUFBTzVVLE1BQU0sQ0FBQ0ksQ0FBZDtBQUNBO0FBSmtDLEtBQXBDO0FBTUFKLFVBQU0sQ0FBQ29pQixlQUFQLEdBQXlCLENBQXpCO0FBQ0E7O0FBQ0QsU0FBT3BpQixNQUFQO0FBQ0EsQ0FyQkQsQzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFFQStJLDZDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQjZPLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLFlBQVk7QUFDaEQ3TywrQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJzQixJQUF2QixDQUE0QixHQUE1QjtBQUNBdEIsK0NBQUMsQ0FBQyw0QkFBRCxDQUFELENBQWdDd1osT0FBaEM7O0FBQ0EsTUFBSSxDQUFDeFosNkNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdULElBQVIsR0FBZTlGLEVBQWYsQ0FBa0IsVUFBbEIsQ0FBTCxFQUFvQztBQUNsQ2xOLGlEQUFDLENBQUMsSUFBRCxDQUFELENBQVFnVCxJQUFSLEdBQWV5RyxTQUFmLENBQXlCLEdBQXpCO0FBQ0F6WixpREFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEgsSUFBUixDQUFhLG1CQUFiLEVBQWtDdEcsSUFBbEMsQ0FBdUMsR0FBdkM7QUFDRDtBQUNGLENBUEQsRTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7Q0FHQTtBQUNBOztBQUNBb1ksMENBQUcsQ0FBQ3RlLElBQUosQ0FBUztBQUNQO0FBQ0E5QixTQUFPLEVBQUUsS0FGRjtBQUVTO0FBQ2hCRSxZQUFVLEVBQUUsa0JBSEw7QUFHeUI7QUFDaENtZ0IsZUFBYSxFQUFFLFVBSlI7QUFJb0I7QUFDM0JDLG1CQUFpQixFQUFFLGFBTFo7QUFLMkI7QUFDbENDLGVBQWEsRUFBRSxLQU5SO0FBTWU7QUFDdEJsZ0IseUJBQXVCLEVBQUUsS0FQbEI7QUFPeUI7QUFDaENELGVBQWEsRUFBRSxFQVJSO0FBUVk7QUFDbkJELGVBQWEsRUFBRSxFQVRSO0FBU1k7QUFFbkI7QUFDQVAsUUFBTSxFQUFFLEdBWkQ7QUFZTTtBQUNiQyxPQUFLLEVBQUUsQ0FiQTtBQWFHO0FBQ1ZFLFVBQVEsRUFBRSxHQWRIO0FBY1E7QUFDZkQsUUFBTSxFQUFFLE1BZkQ7QUFlUztBQUNoQkcsTUFBSSxFQUFFLEtBaEJDO0FBZ0JNO0FBQ2J1Z0IsUUFBTSxFQUFFLEtBakJEO0FBaUJRO0FBQ2Y1YSxpQkFBZSxFQUFFLFlBbEJWLENBa0J1Qjs7QUFsQnZCLENBQVQsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFFQWMsNkNBQUMsQ0FBQyxZQUFZO0FBQ1osTUFBSStaLE1BQU0sR0FBRyxDQUFiO0FBQ0EvWiwrQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjZ2EsS0FBZCxDQUFvQixZQUFZO0FBQzlCLFFBQUlELE1BQU0sS0FBSyxDQUFmLEVBQWtCO0FBQ2hCRSxhQUFPO0FBQ1IsS0FGRCxNQUVPO0FBQ0xDLGNBQVE7QUFDVDtBQUNGLEdBTkQ7QUFPQWxhLCtDQUFDLENBQUMsV0FBRCxDQUFELENBQWVnYSxLQUFmLENBQXFCLFlBQVk7QUFDL0JFLFlBQVE7QUFDVCxHQUZEOztBQUlBLFdBQVNELE9BQVQsR0FBb0I7QUFDbEIxZixZQUFRLENBQUM0ZixjQUFULENBQXdCLE9BQXhCLEVBQWlDN0UsS0FBakMsQ0FBdUM5SSxLQUF2QyxHQUErQyxNQUEvQztBQUNBdU4sVUFBTSxHQUFHLENBQVQ7QUFDRDs7QUFFRCxXQUFTRyxRQUFULEdBQXFCO0FBQ25CM2YsWUFBUSxDQUFDNGYsY0FBVCxDQUF3QixPQUF4QixFQUFpQzdFLEtBQWpDLENBQXVDOUksS0FBdkMsR0FBK0MsSUFBL0M7QUFDQXVOLFVBQU0sR0FBRyxDQUFUO0FBQ0Q7QUFDRixDQXRCQSxDQUFELEM7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRUEvWiw2Q0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQjZPLEVBQW5CLENBQXNCLFlBQXRCLEVBQW9DLHlCQUFwQyxFQUErRCxVQUFDL1gsQ0FBRCxFQUFPO0FBQ3BFa0osK0NBQUMsQ0FBQ2xKLENBQUMsQ0FBQ2lXLGFBQUgsQ0FBRCxDQUFtQnhDLFFBQW5CLENBQTRCLE1BQTVCO0FBQ0EzUCxTQUFPLENBQUN3ZixHQUFSLENBQVksYUFBWjtBQUNELENBSEQsRUFHR3ZMLEVBSEgsQ0FHTSxZQUhOLEVBR29CLHlCQUhwQixFQUcrQyxVQUFDL1gsQ0FBRCxFQUFPO0FBQ3BEa0osK0NBQUMsQ0FBQ2xKLENBQUMsQ0FBQ2lXLGFBQUgsQ0FBRCxDQUFtQnZDLFdBQW5CLENBQStCLE1BQS9CO0FBQ0QsQ0FMRDtBQU9BeEssNkNBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUI2TyxFQUFuQixDQUFzQixPQUF0QixFQUErQixvQkFBL0IsRUFBcUQsVUFBQy9YLENBQUQsRUFBTztBQUMxREEsR0FBQyxDQUFDcVcsY0FBRjtBQUNBclcsR0FBQyxDQUFDcVgsZUFBRjtBQUNBLE1BQUlrTSxXQUFXLEdBQUdyYSw2Q0FBQyxDQUFDbEosQ0FBQyxDQUFDaVcsYUFBSCxDQUFuQjtBQUNBLE1BQUl1TixTQUFTLEdBQUdELFdBQVcsQ0FBQ3JQLE1BQVosRUFBaEI7QUFDQSxNQUFJdVAsU0FBUyxHQUFHRCxTQUFTLENBQUN0UCxNQUFWLEVBQWhCOztBQUNBLE1BQUl1UCxTQUFTLENBQUM5SixRQUFWLENBQW1CLE1BQW5CLENBQUosRUFBZ0M7QUFDOUI4SixhQUFTLENBQUMxYixHQUFWLENBQWMwYixTQUFTLENBQUMzUyxJQUFWLENBQWUsaUJBQWYsQ0FBZCxFQUFpRDRDLFdBQWpELENBQTZELE1BQTdEO0FBQ0E4UCxhQUFTLENBQUN6YixHQUFWLENBQWMwYixTQUFTLENBQUMzUyxJQUFWLENBQWUsR0FBZixDQUFkLEVBQW1DQyxJQUFuQyxDQUF3QyxlQUF4QyxFQUF5RCxPQUF6RDtBQUNBd1MsZUFBVyxDQUFDelMsSUFBWixDQUFpQixtQkFBakIsRUFBc0NDLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE9BQTFEO0FBQ0F3UyxlQUFXLENBQUN6UyxJQUFaLENBQWlCLG1CQUFqQixFQUFzQ0MsSUFBdEMsQ0FBMkMsYUFBM0MsRUFBMEQsTUFBMUQ7QUFDRCxHQUxELE1BS087QUFDTDBTLGFBQVMsQ0FBQ0MsUUFBVixDQUFtQixPQUFuQixFQUE0QjVTLElBQTVCLENBQWlDLGlCQUFqQyxFQUFvRCtFLE9BQXBELENBQTRELE9BQTVEO0FBQ0E0TixhQUFTLENBQUNoUSxRQUFWLENBQW1CLE1BQW5CO0FBQ0ErUCxhQUFTLENBQUN6UyxJQUFWLENBQWUsZUFBZixFQUFnQyxNQUFoQztBQUNBd1MsZUFBVyxDQUFDelMsSUFBWixDQUFpQixtQkFBakIsRUFBc0NDLElBQXRDLENBQTJDLGFBQTNDLEVBQTBELE1BQTFEO0FBQ0F3UyxlQUFXLENBQUN6UyxJQUFaLENBQWlCLG1CQUFqQixFQUFzQ0MsSUFBdEMsQ0FBMkMsYUFBM0MsRUFBMEQsT0FBMUQ7QUFDRDtBQUNGLENBbEJEO0FBb0JBN0gsNkNBQUMsQ0FBQ3pGLFFBQUQsQ0FBRCxDQUFZeWYsS0FBWixDQUFrQixVQUFDbGpCLENBQUQsRUFBTztBQUN2QixNQUFJa0osNkNBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCaEksTUFBekIsRUFBaUM7QUFDL0JnSSxpREFBQyxDQUFDLDRDQUFELENBQUQsQ0FBZ0QyTSxPQUFoRCxDQUF3RCxPQUF4RDtBQUNEO0FBQ0YsQ0FKRCxFOzs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUVBM00sNkNBQUMsQ0FBQ3pGLFFBQUQsQ0FBRCxDQUFZWSxLQUFaLENBQWtCLFlBQU07QUFDdEI2RSwrQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JnSyxLQUF0QixDQUE0QjtBQUMxQixjQUFVLEtBRGdCO0FBRTFCLHNCQUFrQjtBQUZRLEdBQTVCO0FBS0FoSywrQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJnSyxLQUF6Qjs7QUFDQSxNQUFJeVEsRUFBRSxDQUFDQyxTQUFILElBQWdCRCxFQUFFLENBQUNDLFNBQUgsQ0FBYUMsZ0JBQWpDLEVBQW1EO0FBQ2pERixNQUFFLENBQUNDLFNBQUgsQ0FBYUMsZ0JBQWIsQ0FBOEJDLElBQTlCLENBQW1DLDBCQUFuQyxFQUErRCxVQUFDQyxTQUFELEVBQWU7QUFDNUUsVUFBSUEsU0FBUyxDQUFDQyxPQUFWLENBQWtCQyxhQUFsQixJQUFtQ0YsU0FBUyxDQUFDQyxPQUFWLENBQWtCQyxhQUFsQixDQUFnQ0MsTUFBaEMsS0FBMkMsK0JBQWxGLEVBQW1IO0FBQ2pISCxpQkFBUyxDQUFDSSxTQUFWLENBQW9CclQsSUFBcEIsQ0FBeUIscUJBQXpCLEVBQWdEb0MsS0FBaEQ7QUFDRDtBQUNGLEtBSkQ7QUFLRDtBQUNGLENBZEQsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQSx3QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5BT1M9dCgpOmUuQU9TPXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgaT1uW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gZVtvXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyx0KSxpLmxvYWRlZD0hMCxpLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cImRpc3QvXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgaT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxyPW4oMSksYT0obyhyKSxuKDYpKSx1PW8oYSksYz1uKDcpLHM9byhjKSxmPW4oOCksZD1vKGYpLGw9big5KSxwPW8obCksbT1uKDEwKSxiPW8obSksdj1uKDExKSx5PW8odiksZz1uKDE0KSxoPW8oZyksdz1bXSxrPSExLHg9e29mZnNldDoxMjAsZGVsYXk6MCxlYXNpbmc6XCJlYXNlXCIsZHVyYXRpb246NDAwLGRpc2FibGU6ITEsb25jZTohMSxzdGFydEV2ZW50OlwiRE9NQ29udGVudExvYWRlZFwiLHRocm90dGxlRGVsYXk6OTksZGVib3VuY2VEZWxheTo1MCxkaXNhYmxlTXV0YXRpb25PYnNlcnZlcjohMX0saj1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07aWYoZSYmKGs9ITApLGspcmV0dXJuIHc9KDAseS5kZWZhdWx0KSh3LHgpLCgwLGIuZGVmYXVsdCkodyx4Lm9uY2UpLHd9LE89ZnVuY3Rpb24oKXt3PSgwLGguZGVmYXVsdCkoKSxqKCl9LE09ZnVuY3Rpb24oKXt3LmZvckVhY2goZnVuY3Rpb24oZSx0KXtlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3NcIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWVhc2luZ1wiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZHVyYXRpb25cIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWRlbGF5XCIpfSl9LFM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT0hMHx8XCJtb2JpbGVcIj09PWUmJnAuZGVmYXVsdC5tb2JpbGUoKXx8XCJwaG9uZVwiPT09ZSYmcC5kZWZhdWx0LnBob25lKCl8fFwidGFibGV0XCI9PT1lJiZwLmRlZmF1bHQudGFibGV0KCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKT09PSEwfSxfPWZ1bmN0aW9uKGUpe3g9aSh4LGUpLHc9KDAsaC5kZWZhdWx0KSgpO3ZhciB0PWRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iO3JldHVybiBTKHguZGlzYWJsZSl8fHQ/TSgpOih4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyfHxkLmRlZmF1bHQuaXNTdXBwb3J0ZWQoKXx8KGNvbnNvbGUuaW5mbygnXFxuICAgICAgYW9zOiBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBicm93c2VyLFxcbiAgICAgIGNvZGUgbXV0YXRpb25zIG9ic2VydmluZyBoYXMgYmVlbiBkaXNhYmxlZC5cXG4gICAgICBZb3UgbWF5IGhhdmUgdG8gY2FsbCBcInJlZnJlc2hIYXJkKClcIiBieSB5b3Vyc2VsZi5cXG4gICAgJykseC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcj0hMCksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIseC5lYXNpbmcpLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIseC5kdXJhdGlvbiksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZGVsYXlcIix4LmRlbGF5KSxcIkRPTUNvbnRlbnRMb2FkZWRcIj09PXguc3RhcnRFdmVudCYmW1wiY29tcGxldGVcIixcImludGVyYWN0aXZlXCJdLmluZGV4T2YoZG9jdW1lbnQucmVhZHlTdGF0ZSk+LTE/aighMCk6XCJsb2FkXCI9PT14LnN0YXJ0RXZlbnQ/d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoeC5zdGFydEV2ZW50LGZ1bmN0aW9uKCl7aighMCl9KTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHguc3RhcnRFdmVudCxmdW5jdGlvbigpe2ooITApfSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoMCxzLmRlZmF1bHQpKGoseC5kZWJvdW5jZURlbGF5LCEwKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCgwLHMuZGVmYXVsdCkoaix4LmRlYm91bmNlRGVsYXksITApKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgwLHUuZGVmYXVsdCkoZnVuY3Rpb24oKXsoMCxiLmRlZmF1bHQpKHcseC5vbmNlKX0seC50aHJvdHRsZURlbGF5KSkseC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcnx8ZC5kZWZhdWx0LnJlYWR5KFwiW2RhdGEtYW9zXVwiLE8pLHcpfTtlLmV4cG9ydHM9e2luaXQ6XyxyZWZyZXNoOmoscmVmcmVzaEhhcmQ6T319LGZ1bmN0aW9uKGUsdCl7fSwsLCwsZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbil7ZnVuY3Rpb24gbyh0KXt2YXIgbj1iLG89djtyZXR1cm4gYj12PXZvaWQgMCxrPXQsZz1lLmFwcGx5KG8sbil9ZnVuY3Rpb24gcihlKXtyZXR1cm4gaz1lLGg9c2V0VGltZW91dChmLHQpLE0/byhlKTpnfWZ1bmN0aW9uIGEoZSl7dmFyIG49ZS13LG89ZS1rLGk9dC1uO3JldHVybiBTP2ooaSx5LW8pOml9ZnVuY3Rpb24gYyhlKXt2YXIgbj1lLXcsbz1lLWs7cmV0dXJuIHZvaWQgMD09PXd8fG4+PXR8fG48MHx8UyYmbz49eX1mdW5jdGlvbiBmKCl7dmFyIGU9TygpO3JldHVybiBjKGUpP2QoZSk6dm9pZChoPXNldFRpbWVvdXQoZixhKGUpKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gaD12b2lkIDAsXyYmYj9vKGUpOihiPXY9dm9pZCAwLGcpfWZ1bmN0aW9uIGwoKXt2b2lkIDAhPT1oJiZjbGVhclRpbWVvdXQoaCksaz0wLGI9dz12PWg9dm9pZCAwfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdm9pZCAwPT09aD9nOmQoTygpKX1mdW5jdGlvbiBtKCl7dmFyIGU9TygpLG49YyhlKTtpZihiPWFyZ3VtZW50cyx2PXRoaXMsdz1lLG4pe2lmKHZvaWQgMD09PWgpcmV0dXJuIHIodyk7aWYoUylyZXR1cm4gaD1zZXRUaW1lb3V0KGYsdCksbyh3KX1yZXR1cm4gdm9pZCAwPT09aCYmKGg9c2V0VGltZW91dChmLHQpKSxnfXZhciBiLHYseSxnLGgsdyxrPTAsTT0hMSxTPSExLF89ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKHMpO3JldHVybiB0PXUodCl8fDAsaShuKSYmKE09ISFuLmxlYWRpbmcsUz1cIm1heFdhaXRcImluIG4seT1TP3godShuLm1heFdhaXQpfHwwLHQpOnksXz1cInRyYWlsaW5nXCJpbiBuPyEhbi50cmFpbGluZzpfKSxtLmNhbmNlbD1sLG0uZmx1c2g9cCxtfWZ1bmN0aW9uIG8oZSx0LG8pe3ZhciByPSEwLGE9ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKHMpO3JldHVybiBpKG8pJiYocj1cImxlYWRpbmdcImluIG8/ISFvLmxlYWRpbmc6cixhPVwidHJhaWxpbmdcImluIG8/ISFvLnRyYWlsaW5nOmEpLG4oZSx0LHtsZWFkaW5nOnIsbWF4V2FpdDp0LHRyYWlsaW5nOmF9KX1mdW5jdGlvbiBpKGUpe3ZhciB0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpKX1mdW5jdGlvbiBhKGUpe3JldHVyblwic3ltYm9sXCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSkpfHxyKGUpJiZrLmNhbGwoZSk9PWR9ZnVuY3Rpb24gdShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihhKGUpKXJldHVybiBmO2lmKGkoZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9aSh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShsLFwiXCIpO3ZhciBuPW0udGVzdChlKTtyZXR1cm4gbnx8Yi50ZXN0KGUpP3YoZS5zbGljZSgyKSxuPzI6OCk6cC50ZXN0KGUpP2Y6K2V9dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scz1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixmPU5hTixkPVwiW29iamVjdCBTeW1ib2xdXCIsbD0vXlxccyt8XFxzKyQvZyxwPS9eWy0rXTB4WzAtOWEtZl0rJC9pLG09L14wYlswMV0rJC9pLGI9L14wb1swLTddKyQvaSx2PXBhcnNlSW50LHk9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Yyh0KSkmJnQmJnQuT2JqZWN0PT09T2JqZWN0JiZ0LGc9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6YyhzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGg9eXx8Z3x8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLHc9T2JqZWN0LnByb3RvdHlwZSxrPXcudG9TdHJpbmcseD1NYXRoLm1heCxqPU1hdGgubWluLE89ZnVuY3Rpb24oKXtyZXR1cm4gaC5EYXRlLm5vdygpfTtlLmV4cG9ydHM9b30pLmNhbGwodCxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbil7ZnVuY3Rpb24gaSh0KXt2YXIgbj1iLG89djtyZXR1cm4gYj12PXZvaWQgMCxPPXQsZz1lLmFwcGx5KG8sbil9ZnVuY3Rpb24gcihlKXtyZXR1cm4gTz1lLGg9c2V0VGltZW91dChmLHQpLE0/aShlKTpnfWZ1bmN0aW9uIHUoZSl7dmFyIG49ZS13LG89ZS1PLGk9dC1uO3JldHVybiBTP3goaSx5LW8pOml9ZnVuY3Rpb24gcyhlKXt2YXIgbj1lLXcsbz1lLU87cmV0dXJuIHZvaWQgMD09PXd8fG4+PXR8fG48MHx8UyYmbz49eX1mdW5jdGlvbiBmKCl7dmFyIGU9aigpO3JldHVybiBzKGUpP2QoZSk6dm9pZChoPXNldFRpbWVvdXQoZix1KGUpKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gaD12b2lkIDAsXyYmYj9pKGUpOihiPXY9dm9pZCAwLGcpfWZ1bmN0aW9uIGwoKXt2b2lkIDAhPT1oJiZjbGVhclRpbWVvdXQoaCksTz0wLGI9dz12PWg9dm9pZCAwfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdm9pZCAwPT09aD9nOmQoaigpKX1mdW5jdGlvbiBtKCl7dmFyIGU9aigpLG49cyhlKTtpZihiPWFyZ3VtZW50cyx2PXRoaXMsdz1lLG4pe2lmKHZvaWQgMD09PWgpcmV0dXJuIHIodyk7aWYoUylyZXR1cm4gaD1zZXRUaW1lb3V0KGYsdCksaSh3KX1yZXR1cm4gdm9pZCAwPT09aCYmKGg9c2V0VGltZW91dChmLHQpKSxnfXZhciBiLHYseSxnLGgsdyxPPTAsTT0hMSxTPSExLF89ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKGMpO3JldHVybiB0PWEodCl8fDAsbyhuKSYmKE09ISFuLmxlYWRpbmcsUz1cIm1heFdhaXRcImluIG4seT1TP2soYShuLm1heFdhaXQpfHwwLHQpOnksXz1cInRyYWlsaW5nXCJpbiBuPyEhbi50cmFpbGluZzpfKSxtLmNhbmNlbD1sLG0uZmx1c2g9cCxtfWZ1bmN0aW9uIG8oZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpO3JldHVybiEhZSYmKFwib2JqZWN0XCI9PXR8fFwiZnVuY3Rpb25cIj09dCl9ZnVuY3Rpb24gaShlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuXCJzeW1ib2xcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKSl8fGkoZSkmJncuY2FsbChlKT09Zn1mdW5jdGlvbiBhKGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKHIoZSkpcmV0dXJuIHM7aWYobyhlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1vKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGQsXCJcIik7dmFyIG49cC50ZXN0KGUpO3JldHVybiBufHxtLnRlc3QoZSk/YihlLnNsaWNlKDIpLG4/Mjo4KTpsLnRlc3QoZSk/czorZX12YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxjPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLHM9TmFOLGY9XCJbb2JqZWN0IFN5bWJvbF1cIixkPS9eXFxzK3xcXHMrJC9nLGw9L15bLStdMHhbMC05YS1mXSskL2kscD0vXjBiWzAxXSskL2ksbT0vXjBvWzAtN10rJC9pLGI9cGFyc2VJbnQsdj1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjp1KHQpKSYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQseT1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/XCJ1bmRlZmluZWRcIjp1KHNlbGYpKSYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsZz12fHx5fHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksaD1PYmplY3QucHJvdG90eXBlLHc9aC50b1N0cmluZyxrPU1hdGgubWF4LHg9TWF0aC5taW4saj1mdW5jdGlvbigpe3JldHVybiBnLkRhdGUubm93KCl9O2UuZXhwb3J0cz1ufSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7dmFyIHQ9dm9pZCAwLG89dm9pZCAwLGk9dm9pZCAwO2Zvcih0PTA7dDxlLmxlbmd0aDt0Kz0xKXtpZihvPWVbdF0sby5kYXRhc2V0JiZvLmRhdGFzZXQuYW9zKXJldHVybiEwO2lmKGk9by5jaGlsZHJlbiYmbihvLmNoaWxkcmVuKSlyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBvKCl7cmV0dXJuIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcnx8d2luZG93Lk1vek11dGF0aW9uT2JzZXJ2ZXJ9ZnVuY3Rpb24gaSgpe3JldHVybiEhbygpfWZ1bmN0aW9uIHIoZSx0KXt2YXIgbj13aW5kb3cuZG9jdW1lbnQsaT1vKCkscj1uZXcgaShhKTt1PXQsci5vYnNlcnZlKG4uZG9jdW1lbnRFbGVtZW50LHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMCxyZW1vdmVkTm9kZXM6ITB9KX1mdW5jdGlvbiBhKGUpe2UmJmUuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLmFkZGVkTm9kZXMpLG89QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5yZW1vdmVkTm9kZXMpLGk9dC5jb25jYXQobyk7aWYobihpKSlyZXR1cm4gdSgpfSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHU9ZnVuY3Rpb24oKXt9O3QuZGVmYXVsdD17aXNTdXBwb3J0ZWQ6aSxyZWFkeTpyfX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBvKCl7cmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYXx8XCJcIn1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLHI9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLGE9LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2ksdT0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2ksYz0vMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe24odGhpcyxlKX1yZXR1cm4gaShlLFt7a2V5OlwicGhvbmVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPW8oKTtyZXR1cm4hKCFyLnRlc3QoZSkmJiFhLnRlc3QoZS5zdWJzdHIoMCw0KSkpfX0se2tleTpcIm1vYmlsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bygpO3JldHVybiEoIXUudGVzdChlKSYmIWMudGVzdChlLnN1YnN0cigwLDQpKSl9fSx7a2V5OlwidGFibGV0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2JpbGUoKSYmIXRoaXMucGhvbmUoKX19XSksZX0oKTt0LmRlZmF1bHQ9bmV3IHN9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPWUubm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1vbmNlXCIpO3Q+ZS5wb3NpdGlvbj9lLm5vZGUuY2xhc3NMaXN0LmFkZChcImFvcy1hbmltYXRlXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBvJiYoXCJmYWxzZVwiPT09b3x8IW4mJlwidHJ1ZVwiIT09bykmJmUubm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYW9zLWFuaW1hdGVcIil9LG89ZnVuY3Rpb24oZSx0KXt2YXIgbz13aW5kb3cucGFnZVlPZmZzZXQsaT13aW5kb3cuaW5uZXJIZWlnaHQ7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUscil7bihlLGkrbyx0KX0pfTt0LmRlZmF1bHQ9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPW4oMTIpLHI9byhpKSxhPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlLG4pe2Uubm9kZS5jbGFzc0xpc3QuYWRkKFwiYW9zLWluaXRcIiksZS5wb3NpdGlvbj0oMCxyLmRlZmF1bHQpKGUubm9kZSx0Lm9mZnNldCl9KSxlfTt0LmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPW4oMTMpLHI9byhpKSxhPWZ1bmN0aW9uKGUsdCl7dmFyIG49MCxvPTAsaT13aW5kb3cuaW5uZXJIZWlnaHQsYT17b2Zmc2V0OmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3Mtb2Zmc2V0XCIpLGFuY2hvcjplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLWFuY2hvclwiKSxhbmNob3JQbGFjZW1lbnQ6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50XCIpfTtzd2l0Y2goYS5vZmZzZXQmJiFpc05hTihhLm9mZnNldCkmJihvPXBhcnNlSW50KGEub2Zmc2V0KSksYS5hbmNob3ImJmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYS5hbmNob3IpJiYoZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEuYW5jaG9yKVswXSksbj0oMCxyLmRlZmF1bHQpKGUpLnRvcCxhLmFuY2hvclBsYWNlbWVudCl7Y2FzZVwidG9wLWJvdHRvbVwiOmJyZWFrO2Nhc2VcImNlbnRlci1ib3R0b21cIjpuKz1lLm9mZnNldEhlaWdodC8yO2JyZWFrO2Nhc2VcImJvdHRvbS1ib3R0b21cIjpuKz1lLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJ0b3AtY2VudGVyXCI6bis9aS8yO2JyZWFrO2Nhc2VcImJvdHRvbS1jZW50ZXJcIjpuKz1pLzIrZS5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZVwiY2VudGVyLWNlbnRlclwiOm4rPWkvMitlLm9mZnNldEhlaWdodC8yO2JyZWFrO2Nhc2VcInRvcC10b3BcIjpuKz1pO2JyZWFrO2Nhc2VcImJvdHRvbS10b3BcIjpuKz1lLm9mZnNldEhlaWdodCtpO2JyZWFrO2Nhc2VcImNlbnRlci10b3BcIjpuKz1lLm9mZnNldEhlaWdodC8yK2l9cmV0dXJuIGEuYW5jaG9yUGxhY2VtZW50fHxhLm9mZnNldHx8aXNOYU4odCl8fChvPXQpLG4rb307dC5kZWZhdWx0PWF9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj0wO2UmJiFpc05hTihlLm9mZnNldExlZnQpJiYhaXNOYU4oZS5vZmZzZXRUb3ApOyl0Kz1lLm9mZnNldExlZnQtKFwiQk9EWVwiIT1lLnRhZ05hbWU/ZS5zY3JvbGxMZWZ0OjApLG4rPWUub2Zmc2V0VG9wLShcIkJPRFlcIiE9ZS50YWdOYW1lP2Uuc2Nyb2xsVG9wOjApLGU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJue3RvcDpuLGxlZnQ6dH19O3QuZGVmYXVsdD1ufSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUpe3JldHVybiBlPWV8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hb3NdXCIpLEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlLGZ1bmN0aW9uKGUpe3JldHVybntub2RlOmV9fSl9O3QuZGVmYXVsdD1ufV0pfSk7IiwiLypcbiAgICAgXyBfICAgICAgXyAgICAgICBfXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXG58X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cbiAgICAgICAgICAgICAgICAgICB8X18vXG5cbiBWZXJzaW9uOiAxLjguMVxuICBBdXRob3I6IEtlbiBXaGVlbGVyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXG4gICAgRG9jczogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXG5cbiAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGRlZmluZSwgalF1ZXJ5LCBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCAqL1xuOyhmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cblxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcblxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcblxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XG5cbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbmRUbzogJ3dpbmRvdycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b3VjaFRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcbiAgICAgICAgICAgICAgICAkZG90czogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICRsaXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5zbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscyk7XG5cbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xuICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTtcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcbiAgICAgICAgICAgIF8uc2hvdWxkQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAwO1xuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YSgnc2xpY2snKSB8fCB7fTtcblxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG5cbiAgICAgICAgICAgIF8ub3JpZ2luYWxTZXR0aW5ncyA9IF8ub3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnbW96SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pO1xuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XG5cbiAgICAgICAgICAgIF8uaW5zdGFuY2VVaWQgPSBpbnN0YW5jZVVpZCsrO1xuXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKG11c3Qgc3RhcnQgd2l0aCA8KVxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcblxuXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcbiAgICAgICAgICAgIF8uaW5pdCh0cnVlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsaWNrO1xuXG4gICAgfSgpKTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhZGRCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgXy4kc2xpZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEJlZm9yZShfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodFxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXG4gICAgICAgICAgICBfID0gdGhpcztcblxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50TGVmdCA9IC0oXy5jdXJyZW50TGVmdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IF8uY3VycmVudExlZnRcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHRhcmdldExlZnQgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAmJiBhc05hdkZvciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljaygnZ2V0U2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gXy50cmFuc2Zvcm1UeXBlICsgJyAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5kaXJlY3Rpb24gPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlVG8gKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcblxuICAgICAgICAgICAgaWYoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkKCBfLiRuZXh0QXJyb3cgKVxuXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBkb3Q7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICAgICAgZG90ID0gJCgnPHVsIC8+JykuYWRkQ2xhc3MoXy5vcHRpb25zLmRvdHNDbGFzcyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCQoJzxsaSAvPicpLmFwcGVuZChfLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcywgXywgaSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kZG90cyA9IGRvdC5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kRG90cyk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjayA9IChfLnNsaWRlQ291bnQgPT09IDApID9cbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XG5cbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoJ29wYWNpdHknLCAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyKS5ub3QoJ1tzcmNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcblxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG5cbiAgICAgICAgXy5idWlsZERvdHMoKTtcblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcblxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XG5cbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcblxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xuXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG9yaWdpbmFsU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5zaG91bGRDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZWZyZXNoKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICBfLmNsZWFuVXBFdmVudHMoKTtcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5kZXRhY2goKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJywgJyonLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9jdXNzZWQgPSAkc2YuaXMoJzpmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldEN1cnJlbnQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tDdXJyZW50U2xpZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBfLmN1cnJlbnRTbGlkZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0RG90Q291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHZhciBwYWdlclF0eSA9IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgICAgICAgICAgdGFyZ2V0U2xpZGUsXG4gICAgICAgICAgICBjb2VmO1xuXG4gICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IChfLnNsaWRlV2lkdGggKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xuICAgICAgICAgICAgICAgIGNvZWYgPSAtMVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0xLjU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIGNvZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkgLyAyKSAtICgoXy5zbGlkZVdpZHRoICogXy5zbGlkZUNvdW50KSAvIDIpO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSAtIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiBfLnNsaWRlV2lkdGgpICogLTEpICsgXy5zbGlkZU9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMSkgKyB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCArPSAoXy4kbGlzdC53aWR0aCgpIC0gdGFyZ2V0U2xpZGUub3V0ZXJXaWR0aCgpKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdDtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSAwLFxuICAgICAgICAgICAgY291bnRlciA9IDAsXG4gICAgICAgICAgICBpbmRleGVzID0gW10sXG4gICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudCAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlID8gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyAoJChzbGlkZSkub3V0ZXJXaWR0aCgpIC8gMikgPiAoXy5zd2lwZUxlZnQgKiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicygkKHN3aXBlZFNsaWRlKS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykgLSBfLmN1cnJlbnRTbGlkZSkgfHwgMTtcblxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChzbGlkZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY3JlYXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCEkKF8uJHNsaWRlcikuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcblxuICAgICAgICAgICAgJChfLiRzbGlkZXIpLmFkZENsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xuICAgICAgICAgICAgXy5idWlsZE91dCgpO1xuICAgICAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcbiAgICAgICAgICAgIF8ubG9hZFNsaWRlcigpO1xuICAgICAgICAgICAgXy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSh0cnVlKTtcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcmVhdGlvbikge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2luaXQnLCBbX10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLmluaXRBREEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbnVtRG90R3JvdXBzID0gTWF0aC5jZWlsKF8uc2xpZGVDb3VudCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLFxuICAgICAgICAgICAgICAgIHRhYkNvbnRyb2xJbmRleGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCA+PSAwKSAmJiAodmFsIDwgXy5zbGlkZUNvdW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVDb250cm9sSW5kZXggPSB0YWJDb250cm9sSW5kZXhlcy5pbmRleE9mKGkpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFicGFuZWwnLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgdmFyIGFyaWFCdXR0b25Db250cm9sID0gJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIHNsaWRlQ29udHJvbEluZGV4XG4gICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgYXJpYUJ1dHRvbkNvbnRyb2wpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGFyaWFCdXR0b25Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuYXR0cigncm9sZScsICd0YWJsaXN0JykuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkU2xpZGVJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzW2ldO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5maXJzdCgpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLmVxKF8uY3VycmVudFNsaWRlKS5maW5kKCdidXR0b24nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgICAgIH0pLmVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaT1fLmN1cnJlbnRTbGlkZSwgbWF4PWkrXy5vcHRpb25zLnNsaWRlc1RvU2hvdzsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkuYXR0cih7J3RhYmluZGV4JzogJzAnfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XG5cbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcblxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcbiAgICAgICAgJChfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnRhZ05hbWUubWF0Y2goJ1RFWFRBUkVBfElOUFVUfFNFTEVDVCcpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbG9hZFJhbmdlLCBjbG9uZVJhbmdlLCByYW5nZVN0YXJ0LCByYW5nZUVuZDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XG5cbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNpemVzICA9ICQodGhpcykuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZUVuZCA8PSBfLnNsaWRlQ291bnQpIHJhbmdlRW5kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSByYW5nZUVuZCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTbGlkZSA8IDApIHByZXZTbGlkZSA9IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShuZXh0U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUtLTtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLmluaXRVSSgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xuXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudFNsaWRlID0gJChfLiRzbGlkZXMuZ2V0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUuYXR0cigndGFiaW5kZXgnLCAwKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xuXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSxcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxuICAgICAgICAgICAgaW1hZ2VTaXplcyxcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xuXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xuICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSBpbWFnZS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG4gICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmICggdHJ5Q291bnQgPCAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiB0cnkgdG8gbG9hZCB0aGUgaW1hZ2UgMyB0aW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICogbGVhdmUgYSBzbGlnaHQgZGVsYXkgc28gd2UgZG9uJ3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhbGxJbWFnZXNMb2FkZWQnLCBbIF8gXSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oIGluaXRpYWxpemluZyApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcblxuICAgICAgICBsYXN0VmlzaWJsZUluZGV4ID0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcblxuICAgICAgICAvLyBpbiBub24taW5maW5pdGUgc2xpZGVycywgd2UgZG9uJ3Qgd2FudCB0byBnbyBwYXN0IHRoZVxuICAgICAgICAvLyBsYXN0IHZpc2libGUgaW5kZXguXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gbGFzdFZpc2libGVJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGxlc3Mgc2xpZGVzIHRoYW4gdG8gc2hvdywgZ28gdG8gc3RhcnQuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcblxuICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzLCB7IGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlIH0pO1xuXG4gICAgICAgIF8uaW5pdCgpO1xuXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBjdXJyZW50U2xpZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTZXR0aW5ncyA9IF8ub3B0aW9ucy5yZXNwb25zaXZlIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IF8ub3B0aW9ucy5yZXNwb25kVG8gfHwgJ3dpbmRvdyc7XG5cbiAgICAgICAgICAgIGZvciAoIGJyZWFrcG9pbnQgaW4gcmVzcG9uc2l2ZVNldHRpbmdzICkge1xuXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZVNldHRpbmdzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcbiAgICAgICAgXy5idWlsZERvdHMoKTtcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcbiAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG5cbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcblxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cbiAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlO1xuXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcblxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcblxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XG5cbiAgICAgICAgICAgICQuZWFjaCggb3B0aW9uICwgZnVuY3Rpb24oIG9wdCwgdmFsICkge1xuXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xuXG4gICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNldEZhZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzZXRQb3NpdGlvbicsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd0b3AnIDogJ2xlZnQnO1xuXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy56SW5kZXggPCAzICkge1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ09UcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdNb3pUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUuTW96UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnd2Via2l0VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnbXNUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcblxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgZXZlbkNvZWYgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICUgMiA9PT0gMCA/IDEgOiAwO1xuXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEgKyBldmVuQ29lZiwgaW5kZXhPZmZzZXQgKyBjZW50ZXJPZmZzZXQgKyAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gXy5zbGlkZUNvdW50IC0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbFNsaWRlcy5sZW5ndGggPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4IDogaW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQsIGluZGV4T2Zmc2V0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdvbmRlbWFuZCcgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQpOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5maW5pdGVDb3VudCAgKyBfLnNsaWRlQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggKyBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKS5maW5kKCdbaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRvZ2dsZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2VsZWN0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5pcygnLnNsaWNrLXNsaWRlJykgP1xuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KSA6XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuYXR0cignZGF0YS1zbGljay1pbmRleCcpKTtcblxuICAgICAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24oaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxuICAgICAgICAgICAgXyA9IHRoaXMsIG5hdlRhcmdldDtcblxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XG4gICAgICAgIHNsaWRlTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xuXG4gICAgICAgIG9sZFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcblxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcblxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZShhbmltU2xpZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmFuaW1hdGVTbGlkZSh0YXJnZXRMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN0YXJ0TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5oaWRlKCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XG5cbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcbiAgICAgICAgciA9IE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcblxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGlmIChzd2lwZUFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZG93bic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxuICAgICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgXy5zd2lwaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuY3VyWCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZWRnZScsIFtfLCBfLnN3aXBlRGlyZWN0aW9uKCkgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPj0gXy50b3VjaE9iamVjdC5taW5Td2lwZSApIHtcblxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBkaXJlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZUNvdW50ICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzd2lwZScsIFtfLCBkaXJlY3Rpb24gXSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3RhcnRYICE9PSBfLnRvdWNoT2JqZWN0LmN1clggKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgoXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgfHwgKCdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiBfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgPSBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggOiAxO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RXaWR0aCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xuXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZU1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVFbmQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXG4gICAgICAgICAgICBjdXJMZWZ0LCBzd2lwZURpcmVjdGlvbiwgc3dpcGVMZW5ndGgsIHBvc2l0aW9uT2Zmc2V0LCB0b3VjaGVzLCB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xuXG4gICAgICAgIGlmICghXy5kcmFnZ2luZyB8fCBfLnNjcm9sbGluZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XG5cbiAgICAgICAgdmVydGljYWxTd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG5cbiAgICAgICAgaWYgKCFfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nICYmICFfLnN3aXBpbmcgJiYgdmVydGljYWxTd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gdmVydGljYWxTd2lwZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlRGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc3dpcGluZyA9IHRydWU7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0b3VjaGVzO1xuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcbiAgICAgICAgXy5kZXN0cm95KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgIC5lcShNYXRoLmZsb29yKF8uY3VycmVudFNsaWRlIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHJldDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF87XG4gICAgfTtcblxufSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKCcuYy1hY2NvcmRpb24tLWV4cGFuZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgJCgnLmMtYWNjb3JkaW9uX19idG4nKS50ZXh0KCcrJylcbiAgJCgnLmMtYWNjb3JkaW9uX19ib2R5OnZpc2libGUnKS5zbGlkZVVwKClcbiAgaWYgKCEkKHRoaXMpLm5leHQoKS5pcygnOnZpc2libGUnKSkge1xuICAgICQodGhpcykubmV4dCgpLnNsaWRlRG93bigyMDApXG4gICAgJCh0aGlzKS5maW5kKCcuYy1hY2NvcmRpb25fX2J0bicpLnRleHQoJy0nKVxuICB9XG59KVxuIiwiLy8gbnBtIGluc3RhbGwgYW9zIC0tc2F2ZVxuaW1wb3J0IEFPUyBmcm9tICdhb3MnXG5cbi8vIFlvdSBjYW4gYWxzbyBwYXNzIGFuIG9wdGlvbmFsIHNldHRpbmdzIG9iamVjdFxuLy8gYmVsb3cgbGlzdGVkIGRlZmF1bHQgc2V0dGluZ3NcbkFPUy5pbml0KHtcbiAgLy8gR2xvYmFsIHNldHRpbmdzOlxuICBkaXNhYmxlOiBmYWxzZSwgLy8gYWNjZXB0cyBmb2xsb3dpbmcgdmFsdWVzOiAncGhvbmUnLCAndGFibGV0JywgJ21vYmlsZScsIGJvb2xlYW4sIGV4cHJlc3Npb24gb3IgZnVuY3Rpb25cbiAgc3RhcnRFdmVudDogJ0RPTUNvbnRlbnRMb2FkZWQnLCAvLyBuYW1lIG9mIHRoZSBldmVudCBkaXNwYXRjaGVkIG9uIHRoZSBkb2N1bWVudCwgdGhhdCBBT1Mgc2hvdWxkIGluaXRpYWxpemUgb25cbiAgaW5pdENsYXNzTmFtZTogJ2Fvcy1pbml0JywgLy8gY2xhc3MgYXBwbGllZCBhZnRlciBpbml0aWFsaXphdGlvblxuICBhbmltYXRlZENsYXNzTmFtZTogJ2Fvcy1hbmltYXRlJywgLy8gY2xhc3MgYXBwbGllZCBvbiBhbmltYXRpb25cbiAgdXNlQ2xhc3NOYW1lczogZmFsc2UsIC8vIGlmIHRydWUsIHdpbGwgYWRkIGNvbnRlbnQgb2YgYGRhdGEtYW9zYCBhcyBjbGFzc2VzIG9uIHNjcm9sbFxuICBkaXNhYmxlTXV0YXRpb25PYnNlcnZlcjogZmFsc2UsIC8vIGRpc2FibGVzIGF1dG9tYXRpYyBtdXRhdGlvbnMnIGRldGVjdGlvbnMgKGFkdmFuY2VkKVxuICBkZWJvdW5jZURlbGF5OiA1MCwgLy8gdGhlIGRlbGF5IG9uIGRlYm91bmNlIHVzZWQgd2hpbGUgcmVzaXppbmcgd2luZG93IChhZHZhbmNlZClcbiAgdGhyb3R0bGVEZWxheTogOTksIC8vIHRoZSBkZWxheSBvbiB0aHJvdHRsZSB1c2VkIHdoaWxlIHNjcm9sbGluZyB0aGUgcGFnZSAoYWR2YW5jZWQpXG5cbiAgLy8gU2V0dGluZ3MgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBvbiBwZXItZWxlbWVudCBiYXNpcywgYnkgYGRhdGEtYW9zLSpgIGF0dHJpYnV0ZXM6XG4gIG9mZnNldDogMTIwLCAvLyBvZmZzZXQgKGluIHB4KSBmcm9tIHRoZSBvcmlnaW5hbCB0cmlnZ2VyIHBvaW50XG4gIGRlbGF5OiAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXG4gIGR1cmF0aW9uOiA0MDAsIC8vIHZhbHVlcyBmcm9tIDAgdG8gMzAwMCwgd2l0aCBzdGVwIDUwbXNcbiAgZWFzaW5nOiAnZWFzZScsIC8vIGRlZmF1bHQgZWFzaW5nIGZvciBBT1MgYW5pbWF0aW9uc1xuICBvbmNlOiBmYWxzZSwgLy8gd2hldGhlciBhbmltYXRpb24gc2hvdWxkIGhhcHBlbiBvbmx5IG9uY2UgLSB3aGlsZSBzY3JvbGxpbmcgZG93blxuICBtaXJyb3I6IGZhbHNlLCAvLyB3aGV0aGVyIGVsZW1lbnRzIHNob3VsZCBhbmltYXRlIG91dCB3aGlsZSBzY3JvbGxpbmcgcGFzdCB0aGVtXG4gIGFuY2hvclBsYWNlbWVudDogJ3RvcC1ib3R0b20nIC8vIGRlZmluZXMgd2hpY2ggcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgcmVnYXJkaW5nIHRvIHdpbmRvdyBzaG91bGQgdHJpZ2dlciB0aGUgYW5pbWF0aW9uXG5cbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoZnVuY3Rpb24gKCkge1xuICB2YXIgaXNPcGVuID0gMFxuICAkKCcub3BlbmJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNPcGVuID09PSAwKSB7XG4gICAgICBvcGVuTmF2KClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VOYXYoKVxuICAgIH1cbiAgfSlcbiAgJCgnLmNsb3NlYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlTmF2KClcbiAgfSlcblxuICBmdW5jdGlvbiBvcGVuTmF2ICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlOYXYnKS5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgIGlzT3BlbiA9IDFcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTmF2ICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlOYXYnKS5zdHlsZS53aWR0aCA9ICcwJSdcbiAgICBpc09wZW4gPSAwXG4gIH1cbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignbW91c2VlbnRlcicsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnb3BlbicpXG4gIGNvbnNvbGUubG9nKCdtb3VzZSBlbnRlcicpXG59KS5vbignbW91c2VsZWF2ZScsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb3BlbicpXG59KVxuXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ2NsaWNrJywgJy5tZW51IC5tZW51LWJ1dHRvbicsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KVxuICBsZXQgbWVudV9saW5rID0gbWVudV9idXR0b24ucGFyZW50KClcbiAgbGV0IG1lbnVfaXRlbSA9IG1lbnVfbGluay5wYXJlbnQoKVxuICBpZiAobWVudV9pdGVtLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICBtZW51X2l0ZW0uYWRkKG1lbnVfaXRlbS5maW5kKCcubWVudS1pdGVtLm9wZW4nKSkucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIG1lbnVfbGluay5hZGQobWVudV9pdGVtLmZpbmQoJ2EnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgfSBlbHNlIHtcbiAgICBtZW51X2l0ZW0uc2libGluZ3MoJy5vcGVuJykuZmluZCgnPmE+Lm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuICAgIG1lbnVfaXRlbS5hZGRDbGFzcygnb3BlbicpXG4gICAgbWVudV9saW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcbiAgfVxufSlcblxuJChkb2N1bWVudCkuY2xpY2soKGUpID0+IHtcbiAgaWYgKCQoJy5tZW51LWl0ZW0ub3BlbicpLmxlbmd0aCkge1xuICAgICQoJy5tZW51ID4gLm1lbnUtaXRlbS5vcGVuID4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJylcbiAgfVxufSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hhbWJ1cmdlci1uYXYnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24nXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYW9zJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uJ1xuLy8gaW1wb3J0IHdlYnBhY2tTdHJlYW0gZnJvbSAnd2VicGFjay1zdHJlYW0nXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgJCgnLmMtcG9zdF9fZ2FsbGVyeScpLnNsaWNrKHtcbiAgICAnYXJyb3dzJzogZmFsc2UsXG4gICAgJ2FkYXB0aXZlSGVpZ2h0JzogdHJ1ZVxuICB9KVxuXG4gICQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpXG4gIGlmICh3cC5jdXN0b21pemUgJiYgd3AuY3VzdG9taXplLnNlbGVjdGl2ZVJlZnJlc2gpIHtcbiAgICB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaC5iaW5kKCdwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWQnLCAocGxhY2VtZW50KSA9PiB7XG4gICAgICBpZiAocGxhY2VtZW50LnBhcnRpYWwud2lkZ2V0SWRQYXJ0cyAmJiBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzLmlkQmFzZSA9PT0gJ190aGVtZW5hbWVfbW9zdF9yZWNlbnRfd2lkZ2V0Jykge1xuICAgICAgICBwbGFjZW1lbnQuY29udGFpbmVyLmZpbmQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJzb3VyY2VSb290IjoiIn0=