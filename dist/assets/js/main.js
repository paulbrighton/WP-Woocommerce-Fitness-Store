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
jquery__WEBPACK_IMPORTED_MODULE_0___default()('#c-front-page__welcome').unbind('click.smoothScroll').bind('click.smoothScroll', function (event) {
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
});
jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function ($) {
  if ($('body').hasClass('home')) {
    if ($(window).width() < 768) {
      $.confirm({
        title: 'WooCommerce Demo Store!',
        content: 'This is a WordPress custom theme using the Woocommerce plugin for the store features. Contact Paul at <a href="https://www.paulbrighton.com/">YP Digital</a> if you like what you see and for a quote on your next website.',
        useBootstrap: false,
        boxWidth: '75%',
        autoClose: 'close|128000'
      });
    } else {
      $.confirm({
        title: 'WooCommerce Demo Store!',
        content: 'This is a WordPress custom theme using the Woocommerce plugin for the store features. Contact Paul at <a href="https://www.paulbrighton.com/">YP Digital</a> if you like what you see and for a quote on your next website.',
        useBootstrap: false,
        boxWidth: '50%',
        autoClose: 'close|128000'
      });
    }
  }
}); // $.confirm({
//   boxWidth: '75%',
//   useBootstrap: false
// })
// $.confirm({
//   boxWidth: '300px',
//   useBootstrap: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LWNvbmZpcm0vZGlzdC9qcXVlcnktY29uZmlybS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYW9zLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hhbWJ1cmdlci1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zZWFyY2gtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJvIiwibiIsImkiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJyIiwiYSIsInUiLCJzIiwiZiIsImQiLCJsIiwiYiIsInYiLCJ5IiwiZyIsImgiLCJ3IiwiayIsIngiLCJvZmZzZXQiLCJkZWxheSIsImVhc2luZyIsImR1cmF0aW9uIiwiZGlzYWJsZSIsIm9uY2UiLCJzdGFydEV2ZW50IiwidGhyb3R0bGVEZWxheSIsImRlYm91bmNlRGVsYXkiLCJkaXNhYmxlTXV0YXRpb25PYnNlcnZlciIsImoiLCJPIiwiTSIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiUyIsIm1vYmlsZSIsInBob25lIiwidGFibGV0IiwiXyIsImRvY3VtZW50IiwiYWxsIiwid2luZG93IiwiYXRvYiIsImlzU3VwcG9ydGVkIiwiY29uc29sZSIsImluZm8iLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVhZHkiLCJpbml0IiwicmVmcmVzaCIsInJlZnJlc2hIYXJkIiwiYXBwbHkiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiVHlwZUVycm9yIiwibGVhZGluZyIsIm1heFdhaXQiLCJ0cmFpbGluZyIsImNhbmNlbCIsImZsdXNoIiwidmFsdWVPZiIsInJlcGxhY2UiLCJ0ZXN0Iiwic2xpY2UiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiTmFOIiwicGFyc2VJbnQiLCJzZWxmIiwiRnVuY3Rpb24iLCJ0b1N0cmluZyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJEYXRlIiwibm93IiwiZGF0YXNldCIsImFvcyIsImNoaWxkcmVuIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRvY3VtZW50RWxlbWVudCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZW1vdmVkTm9kZXMiLCJBcnJheSIsImFkZGVkTm9kZXMiLCJjb25jYXQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJzdWJzdHIiLCJnZXRBdHRyaWJ1dGUiLCJwb3NpdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJhbmNob3IiLCJhbmNob3JQbGFjZW1lbnQiLCJpc05hTiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwidGFnTmFtZSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRQYXJlbnQiLCJsZWZ0IiwibWFwIiwiZmFjdG9yeSIsIiQiLCJmbiIsImNvbmZpcm0iLCJvcHRpb25zIiwib3B0aW9uMiIsImNvbnRlbnQiLCJ0aXRsZSIsImVhY2giLCIkdGhpcyIsImF0dHIiLCJ3YXJuIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImpjT3B0aW9uIiwiZXh0ZW5kIiwiYnV0dG9ucyIsImtleXMiLCJqY29uZmlybSIsInBsdWdpbkRlZmF1bHRzIiwiZGVmYXVsdEJ1dHRvbnMiLCJkZWZhdWx0cyIsImZpcnN0QnRuIiwiYWN0aW9uIiwibG9jYXRpb24iLCJocmVmIiwiY2xvc2VJY29uIiwiaW5zdGFuY2UiLCJwdXREZWZhdWx0QnV0dG9ucyIsImFsZXJ0IiwiZGlhbG9nIiwiY29uZmlybUtleXMiLCJwbHVnaW5PcHRpb25zIiwiSmNvbmZpcm0iLCJpbnN0YW5jZXMiLCJwdXNoIiwiX2luaXQiLCJ0aGF0IiwibGFzdEZvY3VzZWQiLCJmaW5kIiwiX2lkIiwicm91bmQiLCJyYW5kb20iLCJjb250ZW50UGFyc2VkIiwiY3JlYXRlRWxlbWVudCIsImxhenlPcGVuIiwib3BlbiIsIl9idWlsZEhUTUwiLCJfcGFyc2VBbmltYXRpb24iLCJhbmltYXRpb24iLCJjbG9zZUFuaW1hdGlvbiIsIl9wYXJzZUJnRGlzbWlzc0FuaW1hdGlvbiIsImJhY2tncm91bmREaXNtaXNzQW5pbWF0aW9uIiwiX3BhcnNlQ29sdW1uQ2xhc3MiLCJjb2x1bW5DbGFzcyIsIl9wYXJzZVRoZW1lIiwidGhlbWUiLCJfcGFyc2VUeXBlIiwidHlwZSIsInRlbXBsYXRlIiwiYWRkQ2xhc3MiLCJhbmltYXRpb25QYXJzZWQiLCJiYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvblBhcnNlZCIsInR5cGVQYXJzZWQiLCJ0eXBlQW5pbWF0ZWQiLCJ1c2VCb290c3RyYXAiLCJib290c3RyYXBDbGFzc2VzIiwicm93IiwiY29sdW1uQ2xhc3NQYXJzZWQiLCJjb250YWluZXJGbHVpZCIsImNvbnRhaW5lciIsImNzcyIsImJveFdpZHRoIiwidGl0bGVDbGFzcyIsInRoZW1lUGFyc2VkIiwiYXJpYUxhYmVsIiwiYmdPcGFjaXR5IiwicnRsIiwiJGVsIiwiYXBwZW5kVG8iLCIkamNvbmZpcm1Cb3hDb250YWluZXIiLCIkamNvbmZpcm1Cb3giLCIkYm9keSIsIiRqY29uZmlybUJnIiwiJHRpdGxlIiwiJHRpdGxlQ29udGFpbmVyIiwiJGNvbnRlbnQiLCIkY29udGVudFBhbmUiLCIkaWNvbiIsIiRjbG9zZUljb24iLCIkaG9sZGVyIiwiJGJ0bmMiLCIkc2Nyb2xsUGFuZSIsInNldFN0YXJ0aW5nUG9pbnQiLCJfY29udGVudFJlYWR5IiwiRGVmZXJyZWQiLCJfbW9kYWxSZWFkeSIsIm9mZnNldEJvdHRvbSIsInNldFRpdGxlIiwic2V0SWNvbiIsIl9zZXRCdXR0b25zIiwiX3BhcnNlQ29udGVudCIsImluaXREcmFnZ2FibGUiLCJpc0FqYXgiLCJzaG93TG9hZGluZyIsIndoZW4iLCJ0aGVuIiwiaXNBamF4TG9hZGluZyIsInNldENvbnRlbnQiLCJoaWRlTG9hZGluZyIsIl91cGRhdGVDb250ZW50TWF4SGVpZ2h0Iiwib25Db250ZW50UmVhZHkiLCJhdXRvQ2xvc2UiLCJfc3RhcnRDb3VudERvd24iLCJfd2F0Y2hDb250ZW50IiwiYW5pbWF0aW9uU3BlZWQiLCJhbmltYXRpb25Cb3VuY2UiLCJfZ2V0Q1NTIiwiX3R5cGVQcmVmaXgiLCJzZXRUeXBlIiwib2xkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIl90aGVtZVByZWZpeCIsInNldFRoZW1lIiwicHJldmlvdXMiLCJzcGxpdCIsInRyaW0iLCJqb2luIiwidG9Mb3dlckNhc2UiLCJfYmdEaXNtaXNzUHJlZml4IiwiYmdEaXNtaXNzQW5pbWF0aW9uIiwiY2xvc2VBbmltYXRpb25QYXJzZWQiLCJfYW5pbWF0aW9uUHJlZml4Iiwic2V0QW5pbWF0aW9uIiwid2hpY2giLCJhbmltYXRpb25zIiwiYV9zdHJpbmciLCJzZXRDbG9zZUFuaW1hdGlvbiIsInNldEFuaW1hdGlvblNwZWVkIiwic3BlZWQiLCJzZXRDb2x1bW5DbGFzcyIsImNvbENsYXNzIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJzZXRCb3hXaWR0aCIsIndpZHRoIiwiJHQiLCJyZXNldERyYWciLCJkcmFnZ2FibGUiLCJtb3VzZVgiLCJjbGllbnRYIiwibW91c2VZIiwiY2xpZW50WSIsImlzRHJhZyIsIm1vdmluZ1giLCJpbml0aWFsWCIsIm1vdmluZ1kiLCJpbml0aWFsWSIsInNldERyYWciLCJhbGlnbk1pZGRsZSIsIm91dGVyV2lkdGgiLCJib3hIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImRyYWdVcGRhdGUiLCJkcmFnV2luZG93Qm9yZGVyIiwibGVmdERpc3RhbmNlIiwidG9wRGlzdGFuY2UiLCJkcmFnV2luZG93R2FwIiwiX3Njcm9sbFRvcCIsIkIiLCJib2R5IiwiRCIsImNsaWVudEhlaWdodCIsIl90aW1lciIsImNsZWFySW50ZXJ2YWwiLCJwcmV2Q29udGVudEhlaWdodCIsInNldEludGVydmFsIiwic21vb3RoQ29udGVudCIsImNvbnRlbnRIZWlnaHQiLCJ3aCIsInRvdGFsIiwid2F0Y2hJbnRlcnZhbCIsIl9vdmVyZmxvd0NsYXNzIiwiX2hpbGlnaHRBbmltYXRpbmciLCJoaWdobGlnaHQiLCJoaUxpZ2h0TW9kYWwiLCJwYXJzZUZsb2F0IiwiX2JpbmRFdmVudHMiLCJib3hDbGlja2VkIiwiY2xpY2siLCJidXR0b25OYW1lIiwic2hvdWxkQ2xvc2UiLCJzdHIiLCJiYWNrZ3JvdW5kRGlzbWlzcyIsImJ0blJlc3BvbnNlIiwiY2xvc2UiLCJpc0tleURvd24iLCJyZWFjdE9uS2V5IiwiX2N1YmljX2JlemllciIsImJvdW5jZSIsInRvdGFsX2J1dHRvbnMiLCJidXR0b24iLCJ0ZXh0IiwiYnRuQ2xhc3MiLCJpc0hpZGRlbiIsImlzRGlzYWJsZWQiLCJidXR0b25fZWxlbWVudCIsImh0bWwiLCJwcm9wIiwicmVzIiwib25BY3Rpb24iLCJfc3RvcENvdW50RG93biIsImVsIiwic2V0VGV4dCIsImNsYXNzTmFtZSIsImVuYWJsZSIsInNob3ciLCJoaWRlIiwiYXBwZW5kIiwiY2xvc2VJY29uQ2xhc3MiLCJjbG9zZUh0bWwiLCJzdHJpbmciLCJmb3JjZSIsInByb21pc2UiLCJlcnJvciIsInJlc3BvbnNlIiwidXBkYXRlVGl0bGVDb250YWluZXIiLCJpY29uQ2xhc3MiLCJpY29uIiwic2V0Q29udGVudFByZXBlbmQiLCJwcmVwZW5kIiwic2V0Q29udGVudEFwcGVuZCIsImZvY3VzIiwibG9hZGluZ1NwaW5uZXIiLCJkaXNhYmxlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJhamF4UmVzcG9uc2UiLCJhbHdheXMiLCJkYXRhIiwic3RhdHVzIiwieGhyIiwicmVzb2x2ZSIsImNvbnRlbnRMb2FkZWQiLCJzdWJzdHJpbmciLCJnZXQiLCJkb25lIiwiYXV0b0Nsb3NlSW50ZXJ2YWwiLCIkY2QiLCJvcHQiLCJidXR0b25fa2V5IiwidGltZSIsInNlY29uZHMiLCJjZWlsIiwidHJpZ2dlciIsIl9nZXRLZXkiLCJpbml0aWFsIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZXEiLCJpcyIsImtleUNoYXIiLCJlc2NhcGVLZXkiLCJidXR0b25LZXkiLCJzZXREaWFsb2dDZW50ZXIiLCJfdW53YXRjaENvbnRlbnQiLCJvbkNsb3NlUGF5bG9hZCIsIm9uQ2xvc2UiLCJ1bmJpbmQiLCJsb2FkZWRDbGFzcyIsImNsb3NlVGltZXIiLCJzcGxpY2UiLCJzY3JvbGxUb1ByZXZpb3VzRWxlbWVudCIsImNvbnRhaW5zIiwiJGxmIiwic2Nyb2xsVG9QcmV2aW91c0VsZW1lbnRBbmltYXRlIiwic3QiLCJvdCIsInNjcm9sbFRvIiwiYW5pbWF0ZSIsIm9uRGVzdHJveSIsImlzT3BlbiIsIl9vcGVuIiwiYW5pbWF0ZUZyb21FbGVtZW50IiwibGFzdENsaWNrZWQiLCJpVG9wIiwiaUxlZnQiLCJzb3VyY2VUb3AiLCJzb3VyY2VMZWZ0Iiwid3ciLCJ0YXJnZXRIIiwidGFyZ2V0VyIsImFicyIsIm9uT3BlbkJlZm9yZSIsIm9uT3BlbiIsImlzQ2xvc2VkIiwicGFyZW50IiwidG9nZ2xlIiwib2siLCJrZXlEb3duIiwiJHRhcmdldCIsInRhcmdldCIsInBhc3MiLCJjbG9zZXN0IiwiU2xpY2siLCJpbnN0YW5jZVVpZCIsImVsZW1lbnQiLCJzZXR0aW5ncyIsImRhdGFTZXR0aW5ncyIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhcnJvd3MiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsImRvdHMiLCJkb3RzQ2xhc3MiLCJlZGdlRnJpY3Rpb24iLCJmYWRlIiwiZm9jdXNPblNlbGVjdCIsImZvY3VzT25DaGFuZ2UiLCJpbmZpbml0ZSIsImluaXRpYWxTbGlkZSIsImxhenlMb2FkIiwibW9iaWxlRmlyc3QiLCJwYXVzZU9uSG92ZXIiLCJwYXVzZU9uRm9jdXMiLCJwYXVzZU9uRG90c0hvdmVyIiwicmVzcG9uZFRvIiwicmVzcG9uc2l2ZSIsInJvd3MiLCJzbGlkZSIsInNsaWRlc1BlclJvdyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3dpcGUiLCJzd2lwZVRvU2xpZGUiLCJ0b3VjaE1vdmUiLCJ0b3VjaFRocmVzaG9sZCIsInVzZUNTUyIsInVzZVRyYW5zZm9ybSIsInZhcmlhYmxlV2lkdGgiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsIndhaXRGb3JBbmltYXRlIiwiekluZGV4IiwiaW5pdGlhbHMiLCJhbmltYXRpbmciLCJkcmFnZ2luZyIsImF1dG9QbGF5VGltZXIiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudExlZnQiLCJjdXJyZW50U2xpZGUiLCJkaXJlY3Rpb24iLCIkZG90cyIsImxpc3RXaWR0aCIsImxpc3RIZWlnaHQiLCJsb2FkSW5kZXgiLCIkbmV4dEFycm93IiwiJHByZXZBcnJvdyIsInNjcm9sbGluZyIsInNsaWRlQ291bnQiLCJzbGlkZVdpZHRoIiwiJHNsaWRlVHJhY2siLCIkc2xpZGVzIiwic2xpZGluZyIsInNsaWRlT2Zmc2V0Iiwic3dpcGVMZWZ0Iiwic3dpcGluZyIsIiRsaXN0IiwidG91Y2hPYmplY3QiLCJ0cmFuc2Zvcm1zRW5hYmxlZCIsInVuc2xpY2tlZCIsImFjdGl2ZUJyZWFrcG9pbnQiLCJhbmltVHlwZSIsImFuaW1Qcm9wIiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50U2V0dGluZ3MiLCJjc3NUcmFuc2l0aW9ucyIsImZvY3Vzc2VkIiwiaW50ZXJydXB0ZWQiLCJoaWRkZW4iLCJwYXVzZWQiLCJwb3NpdGlvblByb3AiLCJyb3dDb3VudCIsInNob3VsZENsaWNrIiwiJHNsaWRlciIsIiRzbGlkZXNDYWNoZSIsInRyYW5zZm9ybVR5cGUiLCJ0cmFuc2l0aW9uVHlwZSIsInZpc2liaWxpdHlDaGFuZ2UiLCJ3aW5kb3dUaW1lciIsIm9yaWdpbmFsU2V0dGluZ3MiLCJtb3pIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJhdXRvUGxheSIsInByb3h5IiwiYXV0b1BsYXlDbGVhciIsImF1dG9QbGF5SXRlcmF0b3IiLCJjaGFuZ2VTbGlkZSIsImNsaWNrSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJzZXRQb3NpdGlvbiIsInN3aXBlSGFuZGxlciIsImRyYWdIYW5kbGVyIiwia2V5SGFuZGxlciIsImh0bWxFeHByIiwicmVnaXN0ZXJCcmVha3BvaW50cyIsImFjdGl2YXRlQURBIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0QWZ0ZXIiLCJwcmVwZW5kVG8iLCJkZXRhY2giLCJyZWluaXQiLCJhbmltYXRlSGVpZ2h0IiwidGFyZ2V0SGVpZ2h0IiwiYW5pbWF0ZVNsaWRlIiwidGFyZ2V0TGVmdCIsImNhbGxiYWNrIiwiYW5pbVByb3BzIiwiYW5pbVN0YXJ0Iiwic3RlcCIsImNvbXBsZXRlIiwiYXBwbHlUcmFuc2l0aW9uIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJub3QiLCJzbGljayIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJyZW1vdmVBdHRyIiwiYnVpbGREb3RzIiwiZG90IiwiZ2V0RG90Q291bnQiLCJmaXJzdCIsImJ1aWxkT3V0Iiwid3JhcEFsbCIsIndyYXAiLCJzZXR1cEluZmluaXRlIiwidXBkYXRlRG90cyIsInNldFNsaWRlQ2xhc3NlcyIsImJ1aWxkUm93cyIsIm5ld1NsaWRlcyIsIm51bU9mU2xpZGVzIiwib3JpZ2luYWxTbGlkZXMiLCJzbGlkZXNQZXJTZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFwcGVuZENoaWxkIiwiZW1wdHkiLCJjaGVja1Jlc3BvbnNpdmUiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwiaW5uZXJXaWR0aCIsInVuc2xpY2siLCJldmVudCIsImRvbnRBbmltYXRlIiwiY3VycmVudFRhcmdldCIsImluZGV4T2Zmc2V0IiwidW5ldmVuT2Zmc2V0IiwibWVzc2FnZSIsImNoZWNrTmF2aWdhYmxlIiwibmF2aWdhYmxlcyIsInByZXZOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsImdldE9wdGlvbiIsInNsaWNrR2V0T3B0aW9uIiwib3B0aW9uIiwiaW5kZXhlcyIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsInNsaWRlc1RyYXZlcnNlZCIsInN3aXBlZFNsaWRlIiwiY2VudGVyT2Zmc2V0IiwiZ29UbyIsInNsaWNrR29UbyIsImNyZWF0aW9uIiwiaGFzQ2xhc3MiLCJzZXRQcm9wcyIsInN0YXJ0TG9hZCIsImxvYWRTbGlkZXIiLCJpbml0aWFsaXplRXZlbnRzIiwidXBkYXRlQXJyb3dzIiwiaW5pdEFEQSIsIm51bURvdEdyb3VwcyIsInRhYkNvbnRyb2xJbmRleGVzIiwidmFsIiwic2xpZGVDb250cm9sSW5kZXgiLCJhcmlhQnV0dG9uQ29udHJvbCIsIm1hcHBlZFNsaWRlSW5kZXgiLCJlbmQiLCJpbml0QXJyb3dFdmVudHMiLCJpbml0RG90RXZlbnRzIiwiaW5pdFNsaWRlRXZlbnRzIiwiaW5pdFVJIiwibWF0Y2giLCJrZXlDb2RlIiwibG9hZFJhbmdlIiwiY2xvbmVSYW5nZSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImxvYWRJbWFnZXMiLCJpbWFnZXNTY29wZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVNyY1NldCIsImltYWdlU2l6ZXMiLCJpbWFnZVRvTG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJwcm9ncmVzc2l2ZUxhenlMb2FkIiwibmV4dCIsInNsaWNrTmV4dCIsInBhdXNlIiwic2xpY2tQYXVzZSIsInBsYXkiLCJzbGlja1BsYXkiLCJwb3N0U2xpZGUiLCIkY3VycmVudFNsaWRlIiwicHJldiIsInNsaWNrUHJldiIsInRyeUNvdW50IiwiJGltZ3NUb0xvYWQiLCJpbml0aWFsaXppbmciLCJsYXN0VmlzaWJsZUluZGV4IiwiY3VycmVudEJyZWFrcG9pbnQiLCJyZXNwb25zaXZlU2V0dGluZ3MiLCJzb3J0Iiwid2luZG93RGVsYXkiLCJyZW1vdmVTbGlkZSIsInNsaWNrUmVtb3ZlIiwicmVtb3ZlQmVmb3JlIiwicmVtb3ZlQWxsIiwic2V0Q1NTIiwicG9zaXRpb25Qcm9wcyIsInNldERpbWVuc2lvbnMiLCJwYWRkaW5nIiwic2V0RmFkZSIsInJpZ2h0Iiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJpdGVtIiwiYm9keVN0eWxlIiwic3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwidW5kZWZpbmVkIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYWxsU2xpZGVzIiwicmVtYWluZGVyIiwiZXZlbkNvZWYiLCJpbmZpbml0ZUNvdW50IiwiY2xvbmUiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50cyIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsInN3aXBlRGlyZWN0aW9uIiwieERpc3QiLCJ5RGlzdCIsInN3aXBlQW5nbGUiLCJzdGFydFgiLCJjdXJYIiwic3RhcnRZIiwiY3VyWSIsImF0YW4yIiwiUEkiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInN3aXBlU3RhcnQiLCJzd2lwZU1vdmUiLCJlZGdlV2FzSGl0IiwiY3VyTGVmdCIsInBvc2l0aW9uT2Zmc2V0IiwidmVydGljYWxTd2lwZUxlbmd0aCIsInBhZ2VYIiwicGFnZVkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJhcmdzIiwicmV0Iiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiQU9TIiwiaW5pdENsYXNzTmFtZSIsImFuaW1hdGVkQ2xhc3NOYW1lIiwidXNlQ2xhc3NOYW1lcyIsIm1pcnJvciIsIm9wZW5OYXYiLCJjbG9zZU5hdiIsImdldEVsZW1lbnRCeUlkIiwibG9nIiwibWVudV9idXR0b24iLCJtZW51X2xpbmsiLCJtZW51X2l0ZW0iLCJzaWJsaW5ncyIsImJpbmQiLCJ0YXJnZXRJZCIsIndwIiwiY3VzdG9taXplIiwic2VsZWN0aXZlUmVmcmVzaCIsInBsYWNlbWVudCIsInBhcnRpYWwiLCJ3aWRnZXRJZFBhcnRzIiwiaWRCYXNlIiwic2l0ZU5hdmlnYXRpb24iLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztR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QyxrQkFBRCxDQUF0QjtBQUVBeXFCLGdCQUFjLENBQUNub0IsSUFBZixDQUFvQixHQUFwQixFQUF5QjNCLEVBQXpCLENBQTRCLFlBQTVCLEVBQTBDLFlBQVk7QUFDcERYLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdtQixPQUFSLENBQWdCLElBQWhCLEVBQXNCa0UsV0FBdEIsQ0FBa0MsT0FBbEM7QUFDRCxHQUZEO0FBR0QsQ0FOQSxDQUFEO0FBUUExcUIsNkNBQUMsQ0FBQ3pGLFFBQUQsQ0FBRCxDQUFZWSxLQUFaLENBQWtCLFVBQVU2RSxDQUFWLEVBQWE7QUFDN0IsTUFBSUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVK2dCLFFBQVYsQ0FBbUIsTUFBbkIsQ0FBSixFQUFnQztBQUM5QixRQUFJL2dCLENBQUMsQ0FBQ3ZGLE1BQUQsQ0FBRCxDQUFVdU8sS0FBVixLQUFvQixHQUF4QixFQUE2QjtBQUMzQmhKLE9BQUMsQ0FBQ0UsT0FBRixDQUFVO0FBQ1JJLGFBQUssRUFBRSx5QkFEQztBQUVSRCxlQUFPLEVBQ1AsNk5BSFE7QUFJUjJELG9CQUFZLEVBQUUsS0FKTjtBQUtSTyxnQkFBUSxFQUFFLEtBTEY7QUFNUndDLGlCQUFTLEVBQUU7QUFOSCxPQUFWO0FBUUQsS0FURCxNQVNPO0FBQ0wvRyxPQUFDLENBQUNFLE9BQUYsQ0FBVTtBQUNSSSxhQUFLLEVBQUUseUJBREM7QUFFUkQsZUFBTyxFQUNQLDZOQUhRO0FBSVIyRCxvQkFBWSxFQUFFLEtBSk47QUFLUk8sZ0JBQVEsRUFBRSxLQUxGO0FBTVJ3QyxpQkFBUyxFQUFFO0FBTkgsT0FBVjtBQVFEO0FBQ0Y7QUFDRixDQXRCRCxFLENBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUEsd0IiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuQU9TPXQoKTplLkFPUz10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChvKXtpZihuW29dKXJldHVybiBuW29dLmV4cG9ydHM7dmFyIGk9bltvXT17ZXhwb3J0czp7fSxpZDpvLGxvYWRlZDohMX07cmV0dXJuIGVbb10uY2FsbChpLmV4cG9ydHMsaSxpLmV4cG9ydHMsdCksaS5sb2FkZWQ9ITAsaS5leHBvcnRzfXZhciBuPXt9O3JldHVybiB0Lm09ZSx0LmM9bix0LnA9XCJkaXN0L1wiLHQoMCl9KFtmdW5jdGlvbihlLHQsbil7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19dmFyIGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIG49YXJndW1lbnRzW3RdO2Zvcih2YXIgbyBpbiBuKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLG8pJiYoZVtvXT1uW29dKX1yZXR1cm4gZX0scj1uKDEpLGE9KG8ociksbig2KSksdT1vKGEpLGM9big3KSxzPW8oYyksZj1uKDgpLGQ9byhmKSxsPW4oOSkscD1vKGwpLG09bigxMCksYj1vKG0pLHY9bigxMSkseT1vKHYpLGc9bigxNCksaD1vKGcpLHc9W10saz0hMSx4PXtvZmZzZXQ6MTIwLGRlbGF5OjAsZWFzaW5nOlwiZWFzZVwiLGR1cmF0aW9uOjQwMCxkaXNhYmxlOiExLG9uY2U6ITEsc3RhcnRFdmVudDpcIkRPTUNvbnRlbnRMb2FkZWRcIix0aHJvdHRsZURlbGF5Ojk5LGRlYm91bmNlRGVsYXk6NTAsZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI6ITF9LGo9ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSYmYXJndW1lbnRzWzBdO2lmKGUmJihrPSEwKSxrKXJldHVybiB3PSgwLHkuZGVmYXVsdCkodyx4KSwoMCxiLmRlZmF1bHQpKHcseC5vbmNlKSx3fSxPPWZ1bmN0aW9uKCl7dz0oMCxoLmRlZmF1bHQpKCksaigpfSxNPWZ1bmN0aW9uKCl7dy5mb3JFYWNoKGZ1bmN0aW9uKGUsdCl7ZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1lYXNpbmdcIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIpLGUubm9kZS5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kZWxheVwiKX0pfSxTPWZ1bmN0aW9uKGUpe3JldHVybiBlPT09ITB8fFwibW9iaWxlXCI9PT1lJiZwLmRlZmF1bHQubW9iaWxlKCl8fFwicGhvbmVcIj09PWUmJnAuZGVmYXVsdC5waG9uZSgpfHxcInRhYmxldFwiPT09ZSYmcC5kZWZhdWx0LnRhYmxldCgpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiZlKCk9PT0hMH0sXz1mdW5jdGlvbihlKXt4PWkoeCxlKSx3PSgwLGguZGVmYXVsdCkoKTt2YXIgdD1kb2N1bWVudC5hbGwmJiF3aW5kb3cuYXRvYjtyZXR1cm4gUyh4LmRpc2FibGUpfHx0P00oKTooeC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcnx8ZC5kZWZhdWx0LmlzU3VwcG9ydGVkKCl8fChjb25zb2xlLmluZm8oJ1xcbiAgICAgIGFvczogTXV0YXRpb25PYnNlcnZlciBpcyBub3Qgc3VwcG9ydGVkIG9uIHRoaXMgYnJvd3NlcixcXG4gICAgICBjb2RlIG11dGF0aW9ucyBvYnNlcnZpbmcgaGFzIGJlZW4gZGlzYWJsZWQuXFxuICAgICAgWW91IG1heSBoYXZlIHRvIGNhbGwgXCJyZWZyZXNoSGFyZCgpXCIgYnkgeW91cnNlbGYuXFxuICAgICcpLHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI9ITApLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWVhc2luZ1wiLHguZWFzaW5nKSxkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1kdXJhdGlvblwiLHguZHVyYXRpb24pLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWRlbGF5XCIseC5kZWxheSksXCJET01Db250ZW50TG9hZGVkXCI9PT14LnN0YXJ0RXZlbnQmJltcImNvbXBsZXRlXCIsXCJpbnRlcmFjdGl2ZVwiXS5pbmRleE9mKGRvY3VtZW50LnJlYWR5U3RhdGUpPi0xP2ooITApOlwibG9hZFwiPT09eC5zdGFydEV2ZW50P3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKHguc3RhcnRFdmVudCxmdW5jdGlvbigpe2ooITApfSk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih4LnN0YXJ0RXZlbnQsZnVuY3Rpb24oKXtqKCEwKX0pLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsKDAscy5kZWZhdWx0KShqLHguZGVib3VuY2VEZWxheSwhMCkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwoMCxzLmRlZmF1bHQpKGoseC5kZWJvdW5jZURlbGF5LCEwKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoMCx1LmRlZmF1bHQpKGZ1bmN0aW9uKCl7KDAsYi5kZWZhdWx0KSh3LHgub25jZSl9LHgudGhyb3R0bGVEZWxheSkpLHguZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXJ8fGQuZGVmYXVsdC5yZWFkeShcIltkYXRhLWFvc11cIixPKSx3KX07ZS5leHBvcnRzPXtpbml0Ol8scmVmcmVzaDpqLHJlZnJlc2hIYXJkOk99fSxmdW5jdGlvbihlLHQpe30sLCwsLGZ1bmN0aW9uKGUsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LG4pe2Z1bmN0aW9uIG8odCl7dmFyIG49YixvPXY7cmV0dXJuIGI9dj12b2lkIDAsaz10LGc9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIGs9ZSxoPXNldFRpbWVvdXQoZix0KSxNP28oZSk6Z31mdW5jdGlvbiBhKGUpe3ZhciBuPWUtdyxvPWUtayxpPXQtbjtyZXR1cm4gUz9qKGkseS1vKTppfWZ1bmN0aW9uIGMoZSl7dmFyIG49ZS13LG89ZS1rO3JldHVybiB2b2lkIDA9PT13fHxuPj10fHxuPDB8fFMmJm8+PXl9ZnVuY3Rpb24gZigpe3ZhciBlPU8oKTtyZXR1cm4gYyhlKT9kKGUpOnZvaWQoaD1zZXRUaW1lb3V0KGYsYShlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGg9dm9pZCAwLF8mJmI/byhlKTooYj12PXZvaWQgMCxnKX1mdW5jdGlvbiBsKCl7dm9pZCAwIT09aCYmY2xlYXJUaW1lb3V0KGgpLGs9MCxiPXc9dj1oPXZvaWQgMH1mdW5jdGlvbiBwKCl7cmV0dXJuIHZvaWQgMD09PWg/ZzpkKE8oKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPU8oKSxuPWMoZSk7aWYoYj1hcmd1bWVudHMsdj10aGlzLHc9ZSxuKXtpZih2b2lkIDA9PT1oKXJldHVybiByKHcpO2lmKFMpcmV0dXJuIGg9c2V0VGltZW91dChmLHQpLG8odyl9cmV0dXJuIHZvaWQgMD09PWgmJihoPXNldFRpbWVvdXQoZix0KSksZ312YXIgYix2LHksZyxoLHcsaz0wLE09ITEsUz0hMSxfPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihzKTtyZXR1cm4gdD11KHQpfHwwLGkobikmJihNPSEhbi5sZWFkaW5nLFM9XCJtYXhXYWl0XCJpbiBuLHk9Uz94KHUobi5tYXhXYWl0KXx8MCx0KTp5LF89XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6XyksbS5jYW5jZWw9bCxtLmZsdXNoPXAsbX1mdW5jdGlvbiBvKGUsdCxvKXt2YXIgcj0hMCxhPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihzKTtyZXR1cm4gaShvKSYmKHI9XCJsZWFkaW5nXCJpbiBvPyEhby5sZWFkaW5nOnIsYT1cInRyYWlsaW5nXCJpbiBvPyEhby50cmFpbGluZzphKSxuKGUsdCx7bGVhZGluZzpyLG1heFdhaXQ6dCx0cmFpbGluZzphfSl9ZnVuY3Rpb24gaShlKXt2YXIgdD1cInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiByKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKSl9ZnVuY3Rpb24gYShlKXtyZXR1cm5cInN5bWJvbFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpKXx8cihlKSYmay5jYWxsKGUpPT1kfWZ1bmN0aW9uIHUoZSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGUpcmV0dXJuIGU7aWYoYShlKSlyZXR1cm4gZjtpZihpKGUpKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnZhbHVlT2Y/ZS52YWx1ZU9mKCk6ZTtlPWkodCk/dCtcIlwiOnR9aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIDA9PT1lP2U6K2U7ZT1lLnJlcGxhY2UobCxcIlwiKTt2YXIgbj1tLnRlc3QoZSk7cmV0dXJuIG58fGIudGVzdChlKT92KGUuc2xpY2UoMiksbj8yOjgpOnAudGVzdChlKT9mOitlfXZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHM9XCJFeHBlY3RlZCBhIGZ1bmN0aW9uXCIsZj1OYU4sZD1cIltvYmplY3QgU3ltYm9sXVwiLGw9L15cXHMrfFxccyskL2cscD0vXlstK10weFswLTlhLWZdKyQvaSxtPS9eMGJbMDFdKyQvaSxiPS9eMG9bMC03XSskL2ksdj1wYXJzZUludCx5PVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgdD9cInVuZGVmaW5lZFwiOmModCkpJiZ0JiZ0Lk9iamVjdD09PU9iamVjdCYmdCxnPVwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2Ygc2VsZj9cInVuZGVmaW5lZFwiOmMoc2VsZikpJiZzZWxmJiZzZWxmLk9iamVjdD09PU9iamVjdCYmc2VsZixoPXl8fGd8fEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSx3PU9iamVjdC5wcm90b3R5cGUsaz13LnRvU3RyaW5nLHg9TWF0aC5tYXgsaj1NYXRoLm1pbixPPWZ1bmN0aW9uKCl7cmV0dXJuIGguRGF0ZS5ub3coKX07ZS5leHBvcnRzPW99KS5jYWxsKHQsZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSl9LGZ1bmN0aW9uKGUsdCl7KGZ1bmN0aW9uKHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSx0LG4pe2Z1bmN0aW9uIGkodCl7dmFyIG49YixvPXY7cmV0dXJuIGI9dj12b2lkIDAsTz10LGc9ZS5hcHBseShvLG4pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIE89ZSxoPXNldFRpbWVvdXQoZix0KSxNP2koZSk6Z31mdW5jdGlvbiB1KGUpe3ZhciBuPWUtdyxvPWUtTyxpPXQtbjtyZXR1cm4gUz94KGkseS1vKTppfWZ1bmN0aW9uIHMoZSl7dmFyIG49ZS13LG89ZS1PO3JldHVybiB2b2lkIDA9PT13fHxuPj10fHxuPDB8fFMmJm8+PXl9ZnVuY3Rpb24gZigpe3ZhciBlPWooKTtyZXR1cm4gcyhlKT9kKGUpOnZvaWQoaD1zZXRUaW1lb3V0KGYsdShlKSkpfWZ1bmN0aW9uIGQoZSl7cmV0dXJuIGg9dm9pZCAwLF8mJmI/aShlKTooYj12PXZvaWQgMCxnKX1mdW5jdGlvbiBsKCl7dm9pZCAwIT09aCYmY2xlYXJUaW1lb3V0KGgpLE89MCxiPXc9dj1oPXZvaWQgMH1mdW5jdGlvbiBwKCl7cmV0dXJuIHZvaWQgMD09PWg/ZzpkKGooKSl9ZnVuY3Rpb24gbSgpe3ZhciBlPWooKSxuPXMoZSk7aWYoYj1hcmd1bWVudHMsdj10aGlzLHc9ZSxuKXtpZih2b2lkIDA9PT1oKXJldHVybiByKHcpO2lmKFMpcmV0dXJuIGg9c2V0VGltZW91dChmLHQpLGkodyl9cmV0dXJuIHZvaWQgMD09PWgmJihoPXNldFRpbWVvdXQoZix0KSksZ312YXIgYix2LHksZyxoLHcsTz0wLE09ITEsUz0hMSxfPSEwO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3cgbmV3IFR5cGVFcnJvcihjKTtyZXR1cm4gdD1hKHQpfHwwLG8obikmJihNPSEhbi5sZWFkaW5nLFM9XCJtYXhXYWl0XCJpbiBuLHk9Uz9rKGEobi5tYXhXYWl0KXx8MCx0KTp5LF89XCJ0cmFpbGluZ1wiaW4gbj8hIW4udHJhaWxpbmc6XyksbS5jYW5jZWw9bCxtLmZsdXNoPXAsbX1mdW5jdGlvbiBvKGUpe3ZhciB0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpKX1mdW5jdGlvbiByKGUpe3JldHVyblwic3ltYm9sXCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpfHxpKGUpJiZ3LmNhbGwoZSk9PWZ9ZnVuY3Rpb24gYShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihyKGUpKXJldHVybiBzO2lmKG8oZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9byh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShkLFwiXCIpO3ZhciBuPXAudGVzdChlKTtyZXR1cm4gbnx8bS50ZXN0KGUpP2IoZS5zbGljZSgyKSxuPzI6OCk6bC50ZXN0KGUpP3M6K2V9dmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sYz1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixzPU5hTixmPVwiW29iamVjdCBTeW1ib2xdXCIsZD0vXlxccyt8XFxzKyQvZyxsPS9eWy0rXTB4WzAtOWEtZl0rJC9pLHA9L14wYlswMV0rJC9pLG09L14wb1swLTddKyQvaSxiPXBhcnNlSW50LHY9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6dSh0KSkmJnQmJnQuT2JqZWN0PT09T2JqZWN0JiZ0LHk9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6dShzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGc9dnx8eXx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLGg9T2JqZWN0LnByb3RvdHlwZSx3PWgudG9TdHJpbmcsaz1NYXRoLm1heCx4PU1hdGgubWluLGo9ZnVuY3Rpb24oKXtyZXR1cm4gZy5EYXRlLm5vdygpfTtlLmV4cG9ydHM9bn0pLmNhbGwodCxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3ZhciB0PXZvaWQgMCxvPXZvaWQgMCxpPXZvaWQgMDtmb3IodD0wO3Q8ZS5sZW5ndGg7dCs9MSl7aWYobz1lW3RdLG8uZGF0YXNldCYmby5kYXRhc2V0LmFvcylyZXR1cm4hMDtpZihpPW8uY2hpbGRyZW4mJm4oby5jaGlsZHJlbikpcmV0dXJuITB9cmV0dXJuITF9ZnVuY3Rpb24gbygpe3JldHVybiB3aW5kb3cuTXV0YXRpb25PYnNlcnZlcnx8d2luZG93LldlYktpdE11dGF0aW9uT2JzZXJ2ZXJ8fHdpbmRvdy5Nb3pNdXRhdGlvbk9ic2VydmVyfWZ1bmN0aW9uIGkoKXtyZXR1cm4hIW8oKX1mdW5jdGlvbiByKGUsdCl7dmFyIG49d2luZG93LmRvY3VtZW50LGk9bygpLHI9bmV3IGkoYSk7dT10LHIub2JzZXJ2ZShuLmRvY3VtZW50RWxlbWVudCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITAscmVtb3ZlZE5vZGVzOiEwfSl9ZnVuY3Rpb24gYShlKXtlJiZlLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5hZGRlZE5vZGVzKSxvPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGUucmVtb3ZlZE5vZGVzKSxpPXQuY29uY2F0KG8pO2lmKG4oaSkpcmV0dXJuIHUoKX0pfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciB1PWZ1bmN0aW9uKCl7fTt0LmRlZmF1bHQ9e2lzU3VwcG9ydGVkOmkscmVhZHk6cn19LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9ZnVuY3Rpb24gbygpe3JldHVybiBuYXZpZ2F0b3IudXNlckFnZW50fHxuYXZpZ2F0b3IudmVuZG9yfHx3aW5kb3cub3BlcmF8fFwiXCJ9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciBvPXRbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxuLG8pe3JldHVybiBuJiZlKHQucHJvdG90eXBlLG4pLG8mJmUodCxvKSx0fX0oKSxyPS8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaSxhPS8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzXFwtKXxhaShrb3xybil8YWwoYXZ8Y2F8Y28pfGFtb2l8YW4oZXh8bnl8eXcpfGFwdHV8YXIoY2h8Z28pfGFzKHRlfHVzKXxhdHR3fGF1KGRpfFxcLW18ciB8cyApfGF2YW58YmUoY2t8bGx8bnEpfGJpKGxifHJkKXxibChhY3xheil8YnIoZXx2KXd8YnVtYnxid1xcLShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtXFwtfGNlbGx8Y2h0bXxjbGRjfGNtZFxcLXxjbyhtcHxuZCl8Y3Jhd3xkYShpdHxsbHxuZyl8ZGJ0ZXxkY1xcLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8XFwtZCl8ZWwoNDl8YWkpfGVtKGwyfHVsKXxlcihpY3xrMCl8ZXNsOHxleihbNC03XTB8b3N8d2F8emUpfGZldGN8Zmx5KFxcLXxfKXxnMSB1fGc1NjB8Z2VuZXxnZlxcLTV8Z1xcLW1vfGdvKFxcLnd8b2QpfGdyKGFkfHVuKXxoYWllfGhjaXR8aGRcXC0obXxwfHQpfGhlaVxcLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzXFwtY3xodChjKFxcLXwgfF98YXxnfHB8c3x0KXx0cCl8aHUoYXd8dGMpfGlcXC0oMjB8Z298bWEpfGkyMzB8aWFjKCB8XFwtfFxcLyl8aWJyb3xpZGVhfGlnMDF8aWtvbXxpbTFrfGlubm98aXBhcXxpcmlzfGphKHR8dilhfGpicm98amVtdXxqaWdzfGtkZGl8a2VqaXxrZ3QoIHxcXC8pfGtsb258a3B0IHxrd2NcXC18a3lvKGN8ayl8bGUobm98eGkpfGxnKCBnfFxcLyhrfGx8dSl8NTB8NTR8XFwtW2Etd10pfGxpYnd8bHlueHxtMVxcLXd8bTNnYXxtNTBcXC98bWEodGV8dWl8eG8pfG1jKDAxfDIxfGNhKXxtXFwtY3J8bWUocmN8cmkpfG1pKG84fG9hfHRzKXxtbWVmfG1vKDAxfDAyfGJpfGRlfGRvfHQoXFwtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSlcXC18b258dGZ8d2Z8d2d8d3QpfG5vayg2fGkpfG56cGh8bzJpbXxvcCh0aXx3dil8b3Jhbnxvd2cxfHA4MDB8cGFuKGF8ZHx0KXxwZHhnfHBnKDEzfFxcLShbMS04XXxjKSl8cGhpbHxwaXJlfHBsKGF5fHVjKXxwblxcLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdFxcLWd8cWFcXC1hfHFjKDA3fDEyfDIxfDMyfDYwfFxcLVsyLTddfGlcXC0pfHF0ZWt8cjM4MHxyNjAwfHJha3N8cmltOXxybyh2ZXx6byl8czU1XFwvfHNhKGdlfG1hfG1tfG1zfG55fHZhKXxzYygwMXxoXFwtfG9vfHBcXC0pfHNka1xcL3xzZShjKFxcLXwwfDEpfDQ3fG1jfG5kfHJpKXxzZ2hcXC18c2hhcnxzaWUoXFwtfG0pfHNrXFwtMHxzbCg0NXxpZCl8c20oYWx8YXJ8YjN8aXR8dDUpfHNvKGZ0fG55KXxzcCgwMXxoXFwtfHZcXC18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2xcXC18dGRnXFwtfHRlbChpfG0pfHRpbVxcLXx0XFwtbW98dG8ocGx8c2gpfHRzKDcwfG1cXC18bTN8bTUpfHR4XFwtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118XFwtdil8dm00MHx2b2RhfHZ1bGN8dngoNTJ8NTN8NjB8NjF8NzB8ODB8ODF8ODN8ODV8OTgpfHczYyhcXC18ICl8d2ViY3x3aGl0fHdpKGcgfG5jfG53KXx3bWxifHdvbnV8eDcwMHx5YXNcXC18eW91cnx6ZXRvfHp0ZVxcLS9pLHU9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWlub3xhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsay9pLGM9LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kscz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtuKHRoaXMsZSl9cmV0dXJuIGkoZSxbe2tleTpcInBob25lXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1vKCk7cmV0dXJuISghci50ZXN0KGUpJiYhYS50ZXN0KGUuc3Vic3RyKDAsNCkpKX19LHtrZXk6XCJtb2JpbGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPW8oKTtyZXR1cm4hKCF1LnRlc3QoZSkmJiFjLnRlc3QoZS5zdWJzdHIoMCw0KSkpfX0se2tleTpcInRhYmxldFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubW9iaWxlKCkmJiF0aGlzLnBob25lKCl9fV0pLGV9KCk7dC5kZWZhdWx0PW5ldyBzfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUsdCxuKXt2YXIgbz1lLm5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3Mtb25jZVwiKTt0PmUucG9zaXRpb24/ZS5ub2RlLmNsYXNzTGlzdC5hZGQoXCJhb3MtYW5pbWF0ZVwiKTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbyYmKFwiZmFsc2VcIj09PW98fCFuJiZcInRydWVcIiE9PW8pJiZlLm5vZGUuY2xhc3NMaXN0LnJlbW92ZShcImFvcy1hbmltYXRlXCIpfSxvPWZ1bmN0aW9uKGUsdCl7dmFyIG89d2luZG93LnBhZ2VZT2Zmc2V0LGk9d2luZG93LmlubmVySGVpZ2h0O2UuZm9yRWFjaChmdW5jdGlvbihlLHIpe24oZSxpK28sdCl9KX07dC5kZWZhdWx0PW99LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1uKDEyKSxyPW8oaSksYT1mdW5jdGlvbihlLHQpe3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24oZSxuKXtlLm5vZGUuY2xhc3NMaXN0LmFkZChcImFvcy1pbml0XCIpLGUucG9zaXRpb249KDAsci5kZWZhdWx0KShlLm5vZGUsdC5vZmZzZXQpfSksZX07dC5kZWZhdWx0PWF9LGZ1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1uKDEzKSxyPW8oaSksYT1mdW5jdGlvbihlLHQpe3ZhciBuPTAsbz0wLGk9d2luZG93LmlubmVySGVpZ2h0LGE9e29mZnNldDplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLW9mZnNldFwiKSxhbmNob3I6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1hbmNob3JcIiksYW5jaG9yUGxhY2VtZW50OmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudFwiKX07c3dpdGNoKGEub2Zmc2V0JiYhaXNOYU4oYS5vZmZzZXQpJiYobz1wYXJzZUludChhLm9mZnNldCkpLGEuYW5jaG9yJiZkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEuYW5jaG9yKSYmKGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhLmFuY2hvcilbMF0pLG49KDAsci5kZWZhdWx0KShlKS50b3AsYS5hbmNob3JQbGFjZW1lbnQpe2Nhc2VcInRvcC1ib3R0b21cIjpicmVhaztjYXNlXCJjZW50ZXItYm90dG9tXCI6bis9ZS5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJib3R0b20tYm90dG9tXCI6bis9ZS5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZVwidG9wLWNlbnRlclwiOm4rPWkvMjticmVhaztjYXNlXCJib3R0b20tY2VudGVyXCI6bis9aS8yK2Uub2Zmc2V0SGVpZ2h0O2JyZWFrO2Nhc2VcImNlbnRlci1jZW50ZXJcIjpuKz1pLzIrZS5vZmZzZXRIZWlnaHQvMjticmVhaztjYXNlXCJ0b3AtdG9wXCI6bis9aTticmVhaztjYXNlXCJib3R0b20tdG9wXCI6bis9ZS5vZmZzZXRIZWlnaHQraTticmVhaztjYXNlXCJjZW50ZXItdG9wXCI6bis9ZS5vZmZzZXRIZWlnaHQvMitpfXJldHVybiBhLmFuY2hvclBsYWNlbWVudHx8YS5vZmZzZXR8fGlzTmFOKHQpfHwobz10KSxuK299O3QuZGVmYXVsdD1hfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0wLG49MDtlJiYhaXNOYU4oZS5vZmZzZXRMZWZ0KSYmIWlzTmFOKGUub2Zmc2V0VG9wKTspdCs9ZS5vZmZzZXRMZWZ0LShcIkJPRFlcIiE9ZS50YWdOYW1lP2Uuc2Nyb2xsTGVmdDowKSxuKz1lLm9mZnNldFRvcC0oXCJCT0RZXCIhPWUudGFnTmFtZT9lLnNjcm9sbFRvcDowKSxlPWUub2Zmc2V0UGFyZW50O3JldHVybnt0b3A6bixsZWZ0OnR9fTt0LmRlZmF1bHQ9bn0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgbj1mdW5jdGlvbihlKXtyZXR1cm4gZT1lfHxkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYW9zXVwiKSxBcnJheS5wcm90b3R5cGUubWFwLmNhbGwoZSxmdW5jdGlvbihlKXtyZXR1cm57bm9kZTplfX0pfTt0LmRlZmF1bHQ9bn1dKX0pOyIsIi8qIVxyXG4gKiBqcXVlcnktY29uZmlybSB2My4zLjQgKGh0dHA6Ly9jcmFmdHBpcC5naXRodWIuaW8vanF1ZXJ5LWNvbmZpcm0vKVxyXG4gKiBBdXRob3I6IEJvbmlmYWNlIFBlcmVpcmFcclxuICogV2Vic2l0ZTogd3d3LmNyYWZ0cGlwLmNvbVxyXG4gKiBDb250YWN0OiBoZXlAY3JhZnRwaXAuY29tXHJcbiAqXHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMTkganF1ZXJ5LWNvbmZpcm1cclxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JhZnRwaXAvanF1ZXJ5LWNvbmZpcm0vYmxvYi9tYXN0ZXIvTElDRU5TRSlcclxuICovXHJcbihmdW5jdGlvbihmYWN0b3J5KXtpZih0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kKXtkZWZpbmUoW1wianF1ZXJ5XCJdLGZhY3RvcnkpO31lbHNle2lmKHR5cGVvZiBtb2R1bGU9PT1cIm9iamVjdFwiJiZtb2R1bGUuZXhwb3J0cyl7bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24ocm9vdCxqUXVlcnkpe2lmKGpRdWVyeT09PXVuZGVmaW5lZCl7aWYodHlwZW9mIHdpbmRvdyE9PVwidW5kZWZpbmVkXCIpe2pRdWVyeT1yZXF1aXJlKFwianF1ZXJ5XCIpO31lbHNle2pRdWVyeT1yZXF1aXJlKFwianF1ZXJ5XCIpKHJvb3QpO319ZmFjdG9yeShqUXVlcnkpO3JldHVybiBqUXVlcnk7fTt9ZWxzZXtmYWN0b3J5KGpRdWVyeSk7fX19KGZ1bmN0aW9uKCQpe3ZhciB3PXdpbmRvdzskLmZuLmNvbmZpcm09ZnVuY3Rpb24ob3B0aW9ucyxvcHRpb24yKXtpZih0eXBlb2Ygb3B0aW9ucz09PVwidW5kZWZpbmVkXCIpe29wdGlvbnM9e307fWlmKHR5cGVvZiBvcHRpb25zPT09XCJzdHJpbmdcIil7b3B0aW9ucz17Y29udGVudDpvcHRpb25zLHRpdGxlOihvcHRpb24yKT9vcHRpb24yOmZhbHNlfTt9JCh0aGlzKS5lYWNoKGZ1bmN0aW9uKCl7dmFyICR0aGlzPSQodGhpcyk7aWYoJHRoaXMuYXR0cihcImpjLWF0dGFjaGVkXCIpKXtjb25zb2xlLndhcm4oXCJqQ29uZmlybSBoYXMgYWxyZWFkeSBiZWVuIGF0dGFjaGVkIHRvIHRoaXMgZWxlbWVudCBcIiwkdGhpc1swXSk7cmV0dXJuO30kdGhpcy5vbihcImNsaWNrXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciBqY09wdGlvbj0kLmV4dGVuZCh7fSxvcHRpb25zKTtpZigkdGhpcy5hdHRyKFwiZGF0YS10aXRsZVwiKSl7amNPcHRpb24udGl0bGU9JHRoaXMuYXR0cihcImRhdGEtdGl0bGVcIik7fWlmKCR0aGlzLmF0dHIoXCJkYXRhLWNvbnRlbnRcIikpe2pjT3B0aW9uLmNvbnRlbnQ9JHRoaXMuYXR0cihcImRhdGEtY29udGVudFwiKTt9aWYodHlwZW9mIGpjT3B0aW9uLmJ1dHRvbnM9PT1cInVuZGVmaW5lZFwiKXtqY09wdGlvbi5idXR0b25zPXt9O31qY09wdGlvbltcIiR0YXJnZXRcIl09JHRoaXM7aWYoJHRoaXMuYXR0cihcImhyZWZcIikmJk9iamVjdC5rZXlzKGpjT3B0aW9uLmJ1dHRvbnMpLmxlbmd0aD09PTApe3ZhciBidXR0b25zPSQuZXh0ZW5kKHRydWUse30sdy5qY29uZmlybS5wbHVnaW5EZWZhdWx0cy5kZWZhdWx0QnV0dG9ucywody5qY29uZmlybS5kZWZhdWx0c3x8e30pLmRlZmF1bHRCdXR0b25zfHx7fSk7dmFyIGZpcnN0QnRuPU9iamVjdC5rZXlzKGJ1dHRvbnMpWzBdO2pjT3B0aW9uLmJ1dHRvbnM9YnV0dG9ucztqY09wdGlvbi5idXR0b25zW2ZpcnN0QnRuXS5hY3Rpb249ZnVuY3Rpb24oKXtsb2NhdGlvbi5ocmVmPSR0aGlzLmF0dHIoXCJocmVmXCIpO307fWpjT3B0aW9uLmNsb3NlSWNvbj1mYWxzZTt2YXIgaW5zdGFuY2U9JC5jb25maXJtKGpjT3B0aW9uKTt9KTskdGhpcy5hdHRyKFwiamMtYXR0YWNoZWRcIix0cnVlKTt9KTtyZXR1cm4gJCh0aGlzKTt9OyQuY29uZmlybT1mdW5jdGlvbihvcHRpb25zLG9wdGlvbjIpe2lmKHR5cGVvZiBvcHRpb25zPT09XCJ1bmRlZmluZWRcIil7b3B0aW9ucz17fTt9aWYodHlwZW9mIG9wdGlvbnM9PT1cInN0cmluZ1wiKXtvcHRpb25zPXtjb250ZW50Om9wdGlvbnMsdGl0bGU6KG9wdGlvbjIpP29wdGlvbjI6ZmFsc2V9O312YXIgcHV0RGVmYXVsdEJ1dHRvbnM9IShvcHRpb25zLmJ1dHRvbnM9PT1mYWxzZSk7aWYodHlwZW9mIG9wdGlvbnMuYnV0dG9ucyE9PVwib2JqZWN0XCIpe29wdGlvbnMuYnV0dG9ucz17fTt9aWYoT2JqZWN0LmtleXMob3B0aW9ucy5idXR0b25zKS5sZW5ndGg9PT0wJiZwdXREZWZhdWx0QnV0dG9ucyl7dmFyIGJ1dHRvbnM9JC5leHRlbmQodHJ1ZSx7fSx3Lmpjb25maXJtLnBsdWdpbkRlZmF1bHRzLmRlZmF1bHRCdXR0b25zLCh3Lmpjb25maXJtLmRlZmF1bHRzfHx7fSkuZGVmYXVsdEJ1dHRvbnN8fHt9KTtvcHRpb25zLmJ1dHRvbnM9YnV0dG9uczt9cmV0dXJuIHcuamNvbmZpcm0ob3B0aW9ucyk7fTskLmFsZXJ0PWZ1bmN0aW9uKG9wdGlvbnMsb3B0aW9uMil7aWYodHlwZW9mIG9wdGlvbnM9PT1cInVuZGVmaW5lZFwiKXtvcHRpb25zPXt9O31pZih0eXBlb2Ygb3B0aW9ucz09PVwic3RyaW5nXCIpe29wdGlvbnM9e2NvbnRlbnQ6b3B0aW9ucyx0aXRsZToob3B0aW9uMik/b3B0aW9uMjpmYWxzZX07fXZhciBwdXREZWZhdWx0QnV0dG9ucz0hKG9wdGlvbnMuYnV0dG9ucz09PWZhbHNlKTtpZih0eXBlb2Ygb3B0aW9ucy5idXR0b25zIT09XCJvYmplY3RcIil7b3B0aW9ucy5idXR0b25zPXt9O31pZihPYmplY3Qua2V5cyhvcHRpb25zLmJ1dHRvbnMpLmxlbmd0aD09PTAmJnB1dERlZmF1bHRCdXR0b25zKXt2YXIgYnV0dG9ucz0kLmV4dGVuZCh0cnVlLHt9LHcuamNvbmZpcm0ucGx1Z2luRGVmYXVsdHMuZGVmYXVsdEJ1dHRvbnMsKHcuamNvbmZpcm0uZGVmYXVsdHN8fHt9KS5kZWZhdWx0QnV0dG9uc3x8e30pO3ZhciBmaXJzdEJ0bj1PYmplY3Qua2V5cyhidXR0b25zKVswXTtvcHRpb25zLmJ1dHRvbnNbZmlyc3RCdG5dPWJ1dHRvbnNbZmlyc3RCdG5dO31yZXR1cm4gdy5qY29uZmlybShvcHRpb25zKTt9OyQuZGlhbG9nPWZ1bmN0aW9uKG9wdGlvbnMsb3B0aW9uMil7aWYodHlwZW9mIG9wdGlvbnM9PT1cInVuZGVmaW5lZFwiKXtvcHRpb25zPXt9O31pZih0eXBlb2Ygb3B0aW9ucz09PVwic3RyaW5nXCIpe29wdGlvbnM9e2NvbnRlbnQ6b3B0aW9ucyx0aXRsZToob3B0aW9uMik/b3B0aW9uMjpmYWxzZSxjbG9zZUljb246ZnVuY3Rpb24oKXt9fTt9b3B0aW9ucy5idXR0b25zPXt9O2lmKHR5cGVvZiBvcHRpb25zLmNsb3NlSWNvbj09PVwidW5kZWZpbmVkXCIpe29wdGlvbnMuY2xvc2VJY29uPWZ1bmN0aW9uKCl7fTt9b3B0aW9ucy5jb25maXJtS2V5cz1bMTNdO3JldHVybiB3Lmpjb25maXJtKG9wdGlvbnMpO307dy5qY29uZmlybT1mdW5jdGlvbihvcHRpb25zKXtpZih0eXBlb2Ygb3B0aW9ucz09PVwidW5kZWZpbmVkXCIpe29wdGlvbnM9e307fXZhciBwbHVnaW5PcHRpb25zPSQuZXh0ZW5kKHRydWUse30sdy5qY29uZmlybS5wbHVnaW5EZWZhdWx0cyk7aWYody5qY29uZmlybS5kZWZhdWx0cyl7cGx1Z2luT3B0aW9ucz0kLmV4dGVuZCh0cnVlLHBsdWdpbk9wdGlvbnMsdy5qY29uZmlybS5kZWZhdWx0cyk7fXBsdWdpbk9wdGlvbnM9JC5leHRlbmQodHJ1ZSx7fSxwbHVnaW5PcHRpb25zLG9wdGlvbnMpO3ZhciBpbnN0YW5jZT1uZXcgdy5KY29uZmlybShwbHVnaW5PcHRpb25zKTt3Lmpjb25maXJtLmluc3RhbmNlcy5wdXNoKGluc3RhbmNlKTtyZXR1cm4gaW5zdGFuY2U7fTt3Lkpjb25maXJtPWZ1bmN0aW9uKG9wdGlvbnMpeyQuZXh0ZW5kKHRoaXMsb3B0aW9ucyk7dGhpcy5faW5pdCgpO307dy5KY29uZmlybS5wcm90b3R5cGU9e19pbml0OmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcztpZighdy5qY29uZmlybS5pbnN0YW5jZXMubGVuZ3RoKXt3Lmpjb25maXJtLmxhc3RGb2N1c2VkPSQoXCJib2R5XCIpLmZpbmQoXCI6Zm9jdXNcIik7fXRoaXMuX2lkPU1hdGgucm91bmQoTWF0aC5yYW5kb20oKSo5OTk5OSk7dGhpcy5jb250ZW50UGFyc2VkPSQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7aWYoIXRoaXMubGF6eU9wZW4pe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0Lm9wZW4oKTt9LDApO319LF9idWlsZEhUTUw6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO3RoaXMuX3BhcnNlQW5pbWF0aW9uKHRoaXMuYW5pbWF0aW9uLFwib1wiKTt0aGlzLl9wYXJzZUFuaW1hdGlvbih0aGlzLmNsb3NlQW5pbWF0aW9uLFwiY1wiKTt0aGlzLl9wYXJzZUJnRGlzbWlzc0FuaW1hdGlvbih0aGlzLmJhY2tncm91bmREaXNtaXNzQW5pbWF0aW9uKTt0aGlzLl9wYXJzZUNvbHVtbkNsYXNzKHRoaXMuY29sdW1uQ2xhc3MpO3RoaXMuX3BhcnNlVGhlbWUodGhpcy50aGVtZSk7dGhpcy5fcGFyc2VUeXBlKHRoaXMudHlwZSk7dmFyIHRlbXBsYXRlPSQodGhpcy50ZW1wbGF0ZSk7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS1ib3hcIikuYWRkQ2xhc3ModGhpcy5hbmltYXRpb25QYXJzZWQpLmFkZENsYXNzKHRoaXMuYmFja2dyb3VuZERpc21pc3NBbmltYXRpb25QYXJzZWQpLmFkZENsYXNzKHRoaXMudHlwZVBhcnNlZCk7aWYodGhpcy50eXBlQW5pbWF0ZWQpe3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tYm94XCIpLmFkZENsYXNzKFwiamNvbmZpcm0tdHlwZS1hbmltYXRlZFwiKTt9aWYodGhpcy51c2VCb290c3RyYXApe3RlbXBsYXRlLmZpbmQoXCIuamMtYnMzLXJvd1wiKS5hZGRDbGFzcyh0aGlzLmJvb3RzdHJhcENsYXNzZXMucm93KTt0ZW1wbGF0ZS5maW5kKFwiLmpjLWJzMy1yb3dcIikuYWRkQ2xhc3MoXCJqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyIGp1c3RpZnktY29udGVudC1zbS1jZW50ZXIganVzdGlmeS1jb250ZW50LXhzLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtbGctY2VudGVyXCIpO3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tYm94LWNvbnRhaW5lclwiKS5hZGRDbGFzcyh0aGlzLmNvbHVtbkNsYXNzUGFyc2VkKTtpZih0aGlzLmNvbnRhaW5lckZsdWlkKXt0ZW1wbGF0ZS5maW5kKFwiLmpjLWJzMy1jb250YWluZXJcIikuYWRkQ2xhc3ModGhpcy5ib290c3RyYXBDbGFzc2VzLmNvbnRhaW5lckZsdWlkKTt9ZWxzZXt0ZW1wbGF0ZS5maW5kKFwiLmpjLWJzMy1jb250YWluZXJcIikuYWRkQ2xhc3ModGhpcy5ib290c3RyYXBDbGFzc2VzLmNvbnRhaW5lcik7fX1lbHNle3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tYm94XCIpLmNzcyhcIndpZHRoXCIsdGhpcy5ib3hXaWR0aCk7fWlmKHRoaXMudGl0bGVDbGFzcyl7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS10aXRsZS1jXCIpLmFkZENsYXNzKHRoaXMudGl0bGVDbGFzcyk7fXRlbXBsYXRlLmFkZENsYXNzKHRoaXMudGhlbWVQYXJzZWQpO3ZhciBhcmlhTGFiZWw9XCJqY29uZmlybS1ib3hcIit0aGlzLl9pZDt0ZW1wbGF0ZS5maW5kKFwiLmpjb25maXJtLWJveFwiKS5hdHRyKFwiYXJpYS1sYWJlbGxlZGJ5XCIsYXJpYUxhYmVsKS5hdHRyKFwidGFiaW5kZXhcIiwtMSk7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS1jb250ZW50XCIpLmF0dHIoXCJpZFwiLGFyaWFMYWJlbCk7aWYodGhpcy5iZ09wYWNpdHkhPT1udWxsKXt0ZW1wbGF0ZS5maW5kKFwiLmpjb25maXJtLWJnXCIpLmNzcyhcIm9wYWNpdHlcIix0aGlzLmJnT3BhY2l0eSk7fWlmKHRoaXMucnRsKXt0ZW1wbGF0ZS5hZGRDbGFzcyhcImpjb25maXJtLXJ0bFwiKTt9dGhpcy4kZWw9dGVtcGxhdGUuYXBwZW5kVG8odGhpcy5jb250YWluZXIpO3RoaXMuJGpjb25maXJtQm94Q29udGFpbmVyPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tYm94LWNvbnRhaW5lclwiKTt0aGlzLiRqY29uZmlybUJveD10aGlzLiRib2R5PXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tYm94XCIpO3RoaXMuJGpjb25maXJtQmc9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1iZ1wiKTt0aGlzLiR0aXRsZT10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLXRpdGxlXCIpO3RoaXMuJHRpdGxlQ29udGFpbmVyPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tdGl0bGUtY1wiKTt0aGlzLiRjb250ZW50PXRoaXMuJGVsLmZpbmQoXCJkaXYuamNvbmZpcm0tY29udGVudFwiKTt0aGlzLiRjb250ZW50UGFuZT10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWNvbnRlbnQtcGFuZVwiKTt0aGlzLiRpY29uPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0taWNvbi1jXCIpO3RoaXMuJGNsb3NlSWNvbj10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWNsb3NlSWNvblwiKTt0aGlzLiRob2xkZXI9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1ob2xkZXJcIik7dGhpcy4kYnRuYz10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWJ1dHRvbnNcIik7dGhpcy4kc2Nyb2xsUGFuZT10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLXNjcm9sbHBhbmVcIik7dGhhdC5zZXRTdGFydGluZ1BvaW50KCk7dGhpcy5fY29udGVudFJlYWR5PSQuRGVmZXJyZWQoKTt0aGlzLl9tb2RhbFJlYWR5PSQuRGVmZXJyZWQoKTt0aGlzLiRob2xkZXIuY3NzKHtcInBhZGRpbmctdG9wXCI6dGhpcy5vZmZzZXRUb3AsXCJwYWRkaW5nLWJvdHRvbVwiOnRoaXMub2Zmc2V0Qm90dG9tLH0pO3RoaXMuc2V0VGl0bGUoKTt0aGlzLnNldEljb24oKTt0aGlzLl9zZXRCdXR0b25zKCk7dGhpcy5fcGFyc2VDb250ZW50KCk7dGhpcy5pbml0RHJhZ2dhYmxlKCk7aWYodGhpcy5pc0FqYXgpe3RoaXMuc2hvd0xvYWRpbmcoZmFsc2UpO30kLndoZW4odGhpcy5fY29udGVudFJlYWR5LHRoaXMuX21vZGFsUmVhZHkpLnRoZW4oZnVuY3Rpb24oKXtpZih0aGF0LmlzQWpheExvYWRpbmcpe3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LmlzQWpheExvYWRpbmc9ZmFsc2U7dGhhdC5zZXRDb250ZW50KCk7dGhhdC5zZXRUaXRsZSgpO3RoYXQuc2V0SWNvbigpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LmhpZGVMb2FkaW5nKGZhbHNlKTt0aGF0Ll91cGRhdGVDb250ZW50TWF4SGVpZ2h0KCk7fSwxMDApO2lmKHR5cGVvZiB0aGF0Lm9uQ29udGVudFJlYWR5PT09XCJmdW5jdGlvblwiKXt0aGF0Lm9uQ29udGVudFJlYWR5KCk7fX0sNTApO31lbHNle3RoYXQuX3VwZGF0ZUNvbnRlbnRNYXhIZWlnaHQoKTt0aGF0LnNldFRpdGxlKCk7dGhhdC5zZXRJY29uKCk7aWYodHlwZW9mIHRoYXQub25Db250ZW50UmVhZHk9PT1cImZ1bmN0aW9uXCIpe3RoYXQub25Db250ZW50UmVhZHkoKTt9fWlmKHRoYXQuYXV0b0Nsb3NlKXt0aGF0Ll9zdGFydENvdW50RG93bigpO319KS50aGVuKGZ1bmN0aW9uKCl7dGhhdC5fd2F0Y2hDb250ZW50KCk7fSk7aWYodGhpcy5hbmltYXRpb249PT1cIm5vbmVcIil7dGhpcy5hbmltYXRpb25TcGVlZD0xO3RoaXMuYW5pbWF0aW9uQm91bmNlPTE7fXRoaXMuJGJvZHkuY3NzKHRoaXMuX2dldENTUyh0aGlzLmFuaW1hdGlvblNwZWVkLHRoaXMuYW5pbWF0aW9uQm91bmNlKSk7dGhpcy4kY29udGVudFBhbmUuY3NzKHRoaXMuX2dldENTUyh0aGlzLmFuaW1hdGlvblNwZWVkLDEpKTt0aGlzLiRqY29uZmlybUJnLmNzcyh0aGlzLl9nZXRDU1ModGhpcy5hbmltYXRpb25TcGVlZCwxKSk7dGhpcy4kamNvbmZpcm1Cb3hDb250YWluZXIuY3NzKHRoaXMuX2dldENTUyh0aGlzLmFuaW1hdGlvblNwZWVkLDEpKTt9LF90eXBlUHJlZml4OlwiamNvbmZpcm0tdHlwZS1cIix0eXBlUGFyc2VkOlwiXCIsX3BhcnNlVHlwZTpmdW5jdGlvbih0eXBlKXt0aGlzLnR5cGVQYXJzZWQ9dGhpcy5fdHlwZVByZWZpeCt0eXBlO30sc2V0VHlwZTpmdW5jdGlvbih0eXBlKXt2YXIgb2xkQ2xhc3M9dGhpcy50eXBlUGFyc2VkO3RoaXMuX3BhcnNlVHlwZSh0eXBlKTt0aGlzLiRqY29uZmlybUJveC5yZW1vdmVDbGFzcyhvbGRDbGFzcykuYWRkQ2xhc3ModGhpcy50eXBlUGFyc2VkKTt9LHRoZW1lUGFyc2VkOlwiXCIsX3RoZW1lUHJlZml4OlwiamNvbmZpcm0tXCIsc2V0VGhlbWU6ZnVuY3Rpb24odGhlbWUpe3ZhciBwcmV2aW91cz10aGlzLnRoZW1lO3RoaXMudGhlbWU9dGhlbWV8fHRoaXMudGhlbWU7dGhpcy5fcGFyc2VUaGVtZSh0aGlzLnRoZW1lKTtpZihwcmV2aW91cyl7dGhpcy4kZWwucmVtb3ZlQ2xhc3MocHJldmlvdXMpO310aGlzLiRlbC5hZGRDbGFzcyh0aGlzLnRoZW1lUGFyc2VkKTt0aGlzLnRoZW1lPXRoZW1lO30sX3BhcnNlVGhlbWU6ZnVuY3Rpb24odGhlbWUpe3ZhciB0aGF0PXRoaXM7dGhlbWU9dGhlbWUuc3BsaXQoXCIsXCIpOyQuZWFjaCh0aGVtZSxmdW5jdGlvbihrLGEpe2lmKGEuaW5kZXhPZih0aGF0Ll90aGVtZVByZWZpeCk9PT0tMSl7dGhlbWVba109dGhhdC5fdGhlbWVQcmVmaXgrJC50cmltKGEpO319KTt0aGlzLnRoZW1lUGFyc2VkPXRoZW1lLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7fSxiYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvblBhcnNlZDpcIlwiLF9iZ0Rpc21pc3NQcmVmaXg6XCJqY29uZmlybS1oaWxpZ2h0LVwiLF9wYXJzZUJnRGlzbWlzc0FuaW1hdGlvbjpmdW5jdGlvbihiZ0Rpc21pc3NBbmltYXRpb24pe3ZhciBhbmltYXRpb249YmdEaXNtaXNzQW5pbWF0aW9uLnNwbGl0KFwiLFwiKTt2YXIgdGhhdD10aGlzOyQuZWFjaChhbmltYXRpb24sZnVuY3Rpb24oayxhKXtpZihhLmluZGV4T2YodGhhdC5fYmdEaXNtaXNzUHJlZml4KT09PS0xKXthbmltYXRpb25ba109dGhhdC5fYmdEaXNtaXNzUHJlZml4KyQudHJpbShhKTt9fSk7dGhpcy5iYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvblBhcnNlZD1hbmltYXRpb24uam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTt9LGFuaW1hdGlvblBhcnNlZDpcIlwiLGNsb3NlQW5pbWF0aW9uUGFyc2VkOlwiXCIsX2FuaW1hdGlvblByZWZpeDpcImpjb25maXJtLWFuaW1hdGlvbi1cIixzZXRBbmltYXRpb246ZnVuY3Rpb24oYW5pbWF0aW9uKXt0aGlzLmFuaW1hdGlvbj1hbmltYXRpb258fHRoaXMuYW5pbWF0aW9uO3RoaXMuX3BhcnNlQW5pbWF0aW9uKHRoaXMuYW5pbWF0aW9uLFwib1wiKTt9LF9wYXJzZUFuaW1hdGlvbjpmdW5jdGlvbihhbmltYXRpb24sd2hpY2gpe3doaWNoPXdoaWNofHxcIm9cIjt2YXIgYW5pbWF0aW9ucz1hbmltYXRpb24uc3BsaXQoXCIsXCIpO3ZhciB0aGF0PXRoaXM7JC5lYWNoKGFuaW1hdGlvbnMsZnVuY3Rpb24oayxhKXtpZihhLmluZGV4T2YodGhhdC5fYW5pbWF0aW9uUHJlZml4KT09PS0xKXthbmltYXRpb25zW2tdPXRoYXQuX2FuaW1hdGlvblByZWZpeCskLnRyaW0oYSk7fX0pO3ZhciBhX3N0cmluZz1hbmltYXRpb25zLmpvaW4oXCIgXCIpLnRvTG93ZXJDYXNlKCk7aWYod2hpY2g9PT1cIm9cIil7dGhpcy5hbmltYXRpb25QYXJzZWQ9YV9zdHJpbmc7fWVsc2V7dGhpcy5jbG9zZUFuaW1hdGlvblBhcnNlZD1hX3N0cmluZzt9cmV0dXJuIGFfc3RyaW5nO30sc2V0Q2xvc2VBbmltYXRpb246ZnVuY3Rpb24oY2xvc2VBbmltYXRpb24pe3RoaXMuY2xvc2VBbmltYXRpb249Y2xvc2VBbmltYXRpb258fHRoaXMuY2xvc2VBbmltYXRpb247dGhpcy5fcGFyc2VBbmltYXRpb24odGhpcy5jbG9zZUFuaW1hdGlvbixcImNcIik7fSxzZXRBbmltYXRpb25TcGVlZDpmdW5jdGlvbihzcGVlZCl7dGhpcy5hbmltYXRpb25TcGVlZD1zcGVlZHx8dGhpcy5hbmltYXRpb25TcGVlZDt9LGNvbHVtbkNsYXNzUGFyc2VkOlwiXCIsc2V0Q29sdW1uQ2xhc3M6ZnVuY3Rpb24oY29sQ2xhc3Mpe2lmKCF0aGlzLnVzZUJvb3RzdHJhcCl7Y29uc29sZS53YXJuKFwiY2Fubm90IHNldCBjb2x1bW5DbGFzcywgdXNlQm9vdHN0cmFwIGlzIHNldCB0byBmYWxzZVwiKTtyZXR1cm47fXRoaXMuY29sdW1uQ2xhc3M9Y29sQ2xhc3N8fHRoaXMuY29sdW1uQ2xhc3M7dGhpcy5fcGFyc2VDb2x1bW5DbGFzcyh0aGlzLmNvbHVtbkNsYXNzKTt0aGlzLiRqY29uZmlybUJveENvbnRhaW5lci5hZGRDbGFzcyh0aGlzLmNvbHVtbkNsYXNzUGFyc2VkKTt9LF91cGRhdGVDb250ZW50TWF4SGVpZ2h0OmZ1bmN0aW9uKCl7dmFyIGhlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCktKHRoaXMuJGpjb25maXJtQm94Lm91dGVySGVpZ2h0KCktdGhpcy4kY29udGVudFBhbmUub3V0ZXJIZWlnaHQoKSktKHRoaXMub2Zmc2V0VG9wK3RoaXMub2Zmc2V0Qm90dG9tKTt0aGlzLiRjb250ZW50UGFuZS5jc3Moe1wibWF4LWhlaWdodFwiOmhlaWdodCtcInB4XCJ9KTt9LHNldEJveFdpZHRoOmZ1bmN0aW9uKHdpZHRoKXtpZih0aGlzLnVzZUJvb3RzdHJhcCl7Y29uc29sZS53YXJuKFwiY2Fubm90IHNldCBib3hXaWR0aCwgdXNlQm9vdHN0cmFwIGlzIHNldCB0byB0cnVlXCIpO3JldHVybjt9dGhpcy5ib3hXaWR0aD13aWR0aDt0aGlzLiRqY29uZmlybUJveC5jc3MoXCJ3aWR0aFwiLHdpZHRoKTt9LF9wYXJzZUNvbHVtbkNsYXNzOmZ1bmN0aW9uKGNvbENsYXNzKXtjb2xDbGFzcz1jb2xDbGFzcy50b0xvd2VyQ2FzZSgpO3ZhciBwO3N3aXRjaChjb2xDbGFzcyl7Y2FzZVwieGxcIjpjYXNlXCJ4bGFyZ2VcIjpwPVwiY29sLW1kLTEyXCI7YnJlYWs7Y2FzZVwibFwiOmNhc2VcImxhcmdlXCI6cD1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiO2JyZWFrO2Nhc2VcIm1cIjpjYXNlXCJtZWRpdW1cIjpwPVwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXCI7YnJlYWs7Y2FzZVwic1wiOmNhc2VcInNtYWxsXCI6cD1cImNvbC1tZC00IGNvbC1tZC1vZmZzZXQtNFwiO2JyZWFrO2Nhc2VcInhzXCI6Y2FzZVwieHNtYWxsXCI6cD1cImNvbC1tZC0yIGNvbC1tZC1vZmZzZXQtNVwiO2JyZWFrO2RlZmF1bHQ6cD1jb2xDbGFzczt9dGhpcy5jb2x1bW5DbGFzc1BhcnNlZD1wO30saW5pdERyYWdnYWJsZTpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7dmFyICR0PXRoaXMuJHRpdGxlQ29udGFpbmVyO3RoaXMucmVzZXREcmFnKCk7aWYodGhpcy5kcmFnZ2FibGUpeyR0Lm9uKFwibW91c2Vkb3duXCIsZnVuY3Rpb24oZSl7JHQuYWRkQ2xhc3MoXCJqY29uZmlybS1oYW5kXCIpO3RoYXQubW91c2VYPWUuY2xpZW50WDt0aGF0Lm1vdXNlWT1lLmNsaWVudFk7dGhhdC5pc0RyYWc9dHJ1ZTt9KTskKHdpbmRvdykub24oXCJtb3VzZW1vdmUuXCIrdGhpcy5faWQsZnVuY3Rpb24oZSl7aWYodGhhdC5pc0RyYWcpe3RoYXQubW92aW5nWD1lLmNsaWVudFgtdGhhdC5tb3VzZVgrdGhhdC5pbml0aWFsWDt0aGF0Lm1vdmluZ1k9ZS5jbGllbnRZLXRoYXQubW91c2VZK3RoYXQuaW5pdGlhbFk7dGhhdC5zZXREcmFnKCk7fX0pOyQod2luZG93KS5vbihcIm1vdXNldXAuXCIrdGhpcy5faWQsZnVuY3Rpb24oKXskdC5yZW1vdmVDbGFzcyhcImpjb25maXJtLWhhbmRcIik7aWYodGhhdC5pc0RyYWcpe3RoYXQuaXNEcmFnPWZhbHNlO3RoYXQuaW5pdGlhbFg9dGhhdC5tb3ZpbmdYO3RoYXQuaW5pdGlhbFk9dGhhdC5tb3ZpbmdZO319KTt9fSxyZXNldERyYWc6ZnVuY3Rpb24oKXt0aGlzLmlzRHJhZz1mYWxzZTt0aGlzLmluaXRpYWxYPTA7dGhpcy5pbml0aWFsWT0wO3RoaXMubW92aW5nWD0wO3RoaXMubW92aW5nWT0wO3RoaXMubW91c2VYPTA7dGhpcy5tb3VzZVk9MDt0aGlzLiRqY29uZmlybUJveENvbnRhaW5lci5jc3MoXCJ0cmFuc2Zvcm1cIixcInRyYW5zbGF0ZShcIiswK1wicHgsIFwiKzArXCJweClcIik7fSxzZXREcmFnOmZ1bmN0aW9uKCl7aWYoIXRoaXMuZHJhZ2dhYmxlKXtyZXR1cm47fXRoaXMuYWxpZ25NaWRkbGU9ZmFsc2U7dmFyIGJveFdpZHRoPXRoaXMuJGpjb25maXJtQm94Lm91dGVyV2lkdGgoKTt2YXIgYm94SGVpZ2h0PXRoaXMuJGpjb25maXJtQm94Lm91dGVySGVpZ2h0KCk7dmFyIHdpbmRvd1dpZHRoPSQod2luZG93KS53aWR0aCgpO3ZhciB3aW5kb3dIZWlnaHQ9JCh3aW5kb3cpLmhlaWdodCgpO3ZhciB0aGF0PXRoaXM7dmFyIGRyYWdVcGRhdGU9MTtpZih0aGF0Lm1vdmluZ1glZHJhZ1VwZGF0ZT09PTB8fHRoYXQubW92aW5nWSVkcmFnVXBkYXRlPT09MCl7aWYodGhhdC5kcmFnV2luZG93Qm9yZGVyKXt2YXIgbGVmdERpc3RhbmNlPSh3aW5kb3dXaWR0aC8yKS1ib3hXaWR0aC8yO3ZhciB0b3BEaXN0YW5jZT0od2luZG93SGVpZ2h0LzIpLWJveEhlaWdodC8yO3RvcERpc3RhbmNlLT10aGF0LmRyYWdXaW5kb3dHYXA7bGVmdERpc3RhbmNlLT10aGF0LmRyYWdXaW5kb3dHYXA7aWYobGVmdERpc3RhbmNlK3RoYXQubW92aW5nWDwwKXt0aGF0Lm1vdmluZ1g9LWxlZnREaXN0YW5jZTt9ZWxzZXtpZihsZWZ0RGlzdGFuY2UtdGhhdC5tb3ZpbmdYPDApe3RoYXQubW92aW5nWD1sZWZ0RGlzdGFuY2U7fX1pZih0b3BEaXN0YW5jZSt0aGF0Lm1vdmluZ1k8MCl7dGhhdC5tb3ZpbmdZPS10b3BEaXN0YW5jZTt9ZWxzZXtpZih0b3BEaXN0YW5jZS10aGF0Lm1vdmluZ1k8MCl7dGhhdC5tb3ZpbmdZPXRvcERpc3RhbmNlO319fXRoYXQuJGpjb25maXJtQm94Q29udGFpbmVyLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3RoYXQubW92aW5nWCtcInB4LCBcIit0aGF0Lm1vdmluZ1krXCJweClcIik7fX0sX3Njcm9sbFRvcDpmdW5jdGlvbigpe2lmKHR5cGVvZiBwYWdlWU9mZnNldCE9PVwidW5kZWZpbmVkXCIpe3JldHVybiBwYWdlWU9mZnNldDt9ZWxzZXt2YXIgQj1kb2N1bWVudC5ib2R5O3ZhciBEPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtEPShELmNsaWVudEhlaWdodCk/RDpCO3JldHVybiBELnNjcm9sbFRvcDt9fSxfd2F0Y2hDb250ZW50OmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcztpZih0aGlzLl90aW1lcil7Y2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7fXZhciBwcmV2Q29udGVudEhlaWdodD0wO3RoaXMuX3RpbWVyPXNldEludGVydmFsKGZ1bmN0aW9uKCl7aWYodGhhdC5zbW9vdGhDb250ZW50KXt2YXIgY29udGVudEhlaWdodD10aGF0LiRjb250ZW50Lm91dGVySGVpZ2h0KCl8fDA7aWYoY29udGVudEhlaWdodCE9PXByZXZDb250ZW50SGVpZ2h0KXtwcmV2Q29udGVudEhlaWdodD1jb250ZW50SGVpZ2h0O312YXIgd2g9JCh3aW5kb3cpLmhlaWdodCgpO3ZhciB0b3RhbD10aGF0Lm9mZnNldFRvcCt0aGF0Lm9mZnNldEJvdHRvbSt0aGF0LiRqY29uZmlybUJveC5oZWlnaHQoKS10aGF0LiRjb250ZW50UGFuZS5oZWlnaHQoKSt0aGF0LiRjb250ZW50LmhlaWdodCgpO2lmKHRvdGFsPHdoKXt0aGF0LiRjb250ZW50UGFuZS5hZGRDbGFzcyhcIm5vLXNjcm9sbFwiKTt9ZWxzZXt0aGF0LiRjb250ZW50UGFuZS5yZW1vdmVDbGFzcyhcIm5vLXNjcm9sbFwiKTt9fX0sdGhpcy53YXRjaEludGVydmFsKTt9LF9vdmVyZmxvd0NsYXNzOlwiamNvbmZpcm0tb3ZlcmZsb3dcIixfaGlsaWdodEFuaW1hdGluZzpmYWxzZSxoaWdobGlnaHQ6ZnVuY3Rpb24oKXt0aGlzLmhpTGlnaHRNb2RhbCgpO30saGlMaWdodE1vZGFsOmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpcztpZih0aGlzLl9oaWxpZ2h0QW5pbWF0aW5nKXtyZXR1cm47fXRoYXQuJGJvZHkuYWRkQ2xhc3MoXCJoaWxpZ2h0XCIpO3ZhciBkdXJhdGlvbj1wYXJzZUZsb2F0KHRoYXQuJGJvZHkuY3NzKFwiYW5pbWF0aW9uLWR1cmF0aW9uXCIpKXx8Mjt0aGlzLl9oaWxpZ2h0QW5pbWF0aW5nPXRydWU7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuX2hpbGlnaHRBbmltYXRpbmc9ZmFsc2U7dGhhdC4kYm9keS5yZW1vdmVDbGFzcyhcImhpbGlnaHRcIik7fSxkdXJhdGlvbioxMDAwKTt9LF9iaW5kRXZlbnRzOmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpczt0aGlzLmJveENsaWNrZWQ9ZmFsc2U7dGhpcy4kc2Nyb2xsUGFuZS5jbGljayhmdW5jdGlvbihlKXtpZighdGhhdC5ib3hDbGlja2VkKXt2YXIgYnV0dG9uTmFtZT1mYWxzZTt2YXIgc2hvdWxkQ2xvc2U9ZmFsc2U7dmFyIHN0cjtpZih0eXBlb2YgdGhhdC5iYWNrZ3JvdW5kRGlzbWlzcz09PVwiZnVuY3Rpb25cIil7c3RyPXRoYXQuYmFja2dyb3VuZERpc21pc3MoKTt9ZWxzZXtzdHI9dGhhdC5iYWNrZ3JvdW5kRGlzbWlzczt9aWYodHlwZW9mIHN0cj09PVwic3RyaW5nXCImJnR5cGVvZiB0aGF0LmJ1dHRvbnNbc3RyXSE9PVwidW5kZWZpbmVkXCIpe2J1dHRvbk5hbWU9c3RyO3Nob3VsZENsb3NlPWZhbHNlO31lbHNle2lmKHR5cGVvZiBzdHI9PT1cInVuZGVmaW5lZFwifHwhIShzdHIpPT09dHJ1ZSl7c2hvdWxkQ2xvc2U9dHJ1ZTt9ZWxzZXtzaG91bGRDbG9zZT1mYWxzZTt9fWlmKGJ1dHRvbk5hbWUpe3ZhciBidG5SZXNwb25zZT10aGF0LmJ1dHRvbnNbYnV0dG9uTmFtZV0uYWN0aW9uLmFwcGx5KHRoYXQpO3Nob3VsZENsb3NlPSh0eXBlb2YgYnRuUmVzcG9uc2U9PT1cInVuZGVmaW5lZFwiKXx8ISEoYnRuUmVzcG9uc2UpO31pZihzaG91bGRDbG9zZSl7dGhhdC5jbG9zZSgpO31lbHNle3RoYXQuaGlMaWdodE1vZGFsKCk7fX10aGF0LmJveENsaWNrZWQ9ZmFsc2U7fSk7dGhpcy4kamNvbmZpcm1Cb3guY2xpY2soZnVuY3Rpb24oZSl7dGhhdC5ib3hDbGlja2VkPXRydWU7fSk7dmFyIGlzS2V5RG93bj1mYWxzZTskKHdpbmRvdykub24oXCJqY0tleURvd24uXCIrdGhhdC5faWQsZnVuY3Rpb24oZSl7aWYoIWlzS2V5RG93bil7aXNLZXlEb3duPXRydWU7fX0pOyQod2luZG93KS5vbihcImtleXVwLlwiK3RoYXQuX2lkLGZ1bmN0aW9uKGUpe2lmKGlzS2V5RG93bil7dGhhdC5yZWFjdE9uS2V5KGUpO2lzS2V5RG93bj1mYWxzZTt9fSk7JCh3aW5kb3cpLm9uKFwicmVzaXplLlwiK3RoaXMuX2lkLGZ1bmN0aW9uKCl7dGhhdC5fdXBkYXRlQ29udGVudE1heEhlaWdodCgpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LnJlc2V0RHJhZygpO30sMTAwKTt9KTt9LF9jdWJpY19iZXppZXI6XCIwLjM2LCAwLjU1LCAwLjE5XCIsX2dldENTUzpmdW5jdGlvbihzcGVlZCxib3VuY2Upe3JldHVybntcIi13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvblwiOnNwZWVkLzEwMDArXCJzXCIsXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCI6c3BlZWQvMTAwMCtcInNcIixcIi13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIjpcImN1YmljLWJlemllcihcIit0aGlzLl9jdWJpY19iZXppZXIrXCIsIFwiK2JvdW5jZStcIilcIixcInRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uXCI6XCJjdWJpYy1iZXppZXIoXCIrdGhpcy5fY3ViaWNfYmV6aWVyK1wiLCBcIitib3VuY2UrXCIpXCJ9O30sX3NldEJ1dHRvbnM6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO3ZhciB0b3RhbF9idXR0b25zPTA7aWYodHlwZW9mIHRoaXMuYnV0dG9ucyE9PVwib2JqZWN0XCIpe3RoaXMuYnV0dG9ucz17fTt9JC5lYWNoKHRoaXMuYnV0dG9ucyxmdW5jdGlvbihrZXksYnV0dG9uKXt0b3RhbF9idXR0b25zKz0xO2lmKHR5cGVvZiBidXR0b249PT1cImZ1bmN0aW9uXCIpe3RoYXQuYnV0dG9uc1trZXldPWJ1dHRvbj17YWN0aW9uOmJ1dHRvbn07fXRoYXQuYnV0dG9uc1trZXldLnRleHQ9YnV0dG9uLnRleHR8fGtleTt0aGF0LmJ1dHRvbnNba2V5XS5idG5DbGFzcz1idXR0b24uYnRuQ2xhc3N8fFwiYnRuLWRlZmF1bHRcIjt0aGF0LmJ1dHRvbnNba2V5XS5hY3Rpb249YnV0dG9uLmFjdGlvbnx8ZnVuY3Rpb24oKXt9O3RoYXQuYnV0dG9uc1trZXldLmtleXM9YnV0dG9uLmtleXN8fFtdO3RoYXQuYnV0dG9uc1trZXldLmlzSGlkZGVuPWJ1dHRvbi5pc0hpZGRlbnx8ZmFsc2U7dGhhdC5idXR0b25zW2tleV0uaXNEaXNhYmxlZD1idXR0b24uaXNEaXNhYmxlZHx8ZmFsc2U7JC5lYWNoKHRoYXQuYnV0dG9uc1trZXldLmtleXMsZnVuY3Rpb24oaSxhKXt0aGF0LmJ1dHRvbnNba2V5XS5rZXlzW2ldPWEudG9Mb3dlckNhc2UoKTt9KTt2YXIgYnV0dG9uX2VsZW1lbnQ9JCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG5cIj48L2J1dHRvbj4nKS5odG1sKHRoYXQuYnV0dG9uc1trZXldLnRleHQpLmFkZENsYXNzKHRoYXQuYnV0dG9uc1trZXldLmJ0bkNsYXNzKS5wcm9wKFwiZGlzYWJsZWRcIix0aGF0LmJ1dHRvbnNba2V5XS5pc0Rpc2FibGVkKS5jc3MoXCJkaXNwbGF5XCIsdGhhdC5idXR0b25zW2tleV0uaXNIaWRkZW4/XCJub25lXCI6XCJcIikuY2xpY2soZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciByZXM9dGhhdC5idXR0b25zW2tleV0uYWN0aW9uLmFwcGx5KHRoYXQsW3RoYXQuYnV0dG9uc1trZXldXSk7dGhhdC5vbkFjdGlvbi5hcHBseSh0aGF0LFtrZXksdGhhdC5idXR0b25zW2tleV1dKTt0aGF0Ll9zdG9wQ291bnREb3duKCk7aWYodHlwZW9mIHJlcz09PVwidW5kZWZpbmVkXCJ8fHJlcyl7dGhhdC5jbG9zZSgpO319KTt0aGF0LmJ1dHRvbnNba2V5XS5lbD1idXR0b25fZWxlbWVudDt0aGF0LmJ1dHRvbnNba2V5XS5zZXRUZXh0PWZ1bmN0aW9uKHRleHQpe2J1dHRvbl9lbGVtZW50Lmh0bWwodGV4dCk7fTt0aGF0LmJ1dHRvbnNba2V5XS5hZGRDbGFzcz1mdW5jdGlvbihjbGFzc05hbWUpe2J1dHRvbl9lbGVtZW50LmFkZENsYXNzKGNsYXNzTmFtZSk7fTt0aGF0LmJ1dHRvbnNba2V5XS5yZW1vdmVDbGFzcz1mdW5jdGlvbihjbGFzc05hbWUpe2J1dHRvbl9lbGVtZW50LnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7fTt0aGF0LmJ1dHRvbnNba2V5XS5kaXNhYmxlPWZ1bmN0aW9uKCl7dGhhdC5idXR0b25zW2tleV0uaXNEaXNhYmxlZD10cnVlO2J1dHRvbl9lbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiLHRydWUpO307dGhhdC5idXR0b25zW2tleV0uZW5hYmxlPWZ1bmN0aW9uKCl7dGhhdC5idXR0b25zW2tleV0uaXNEaXNhYmxlZD1mYWxzZTtidXR0b25fZWxlbWVudC5wcm9wKFwiZGlzYWJsZWRcIixmYWxzZSk7fTt0aGF0LmJ1dHRvbnNba2V5XS5zaG93PWZ1bmN0aW9uKCl7dGhhdC5idXR0b25zW2tleV0uaXNIaWRkZW49ZmFsc2U7YnV0dG9uX2VsZW1lbnQuY3NzKFwiZGlzcGxheVwiLFwiXCIpO307dGhhdC5idXR0b25zW2tleV0uaGlkZT1mdW5jdGlvbigpe3RoYXQuYnV0dG9uc1trZXldLmlzSGlkZGVuPXRydWU7YnV0dG9uX2VsZW1lbnQuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTt9O3RoYXRbXCIkX1wiK2tleV09dGhhdFtcIiQkXCIra2V5XT1idXR0b25fZWxlbWVudDt0aGF0LiRidG5jLmFwcGVuZChidXR0b25fZWxlbWVudCk7fSk7aWYodG90YWxfYnV0dG9ucz09PTApe3RoaXMuJGJ0bmMuaGlkZSgpO31pZih0aGlzLmNsb3NlSWNvbj09PW51bGwmJnRvdGFsX2J1dHRvbnM9PT0wKXt0aGlzLmNsb3NlSWNvbj10cnVlO31pZih0aGlzLmNsb3NlSWNvbil7aWYodGhpcy5jbG9zZUljb25DbGFzcyl7dmFyIGNsb3NlSHRtbD0nPGkgY2xhc3M9XCInK3RoaXMuY2xvc2VJY29uQ2xhc3MrJ1wiPjwvaT4nO3RoaXMuJGNsb3NlSWNvbi5odG1sKGNsb3NlSHRtbCk7fXRoaXMuJGNsb3NlSWNvbi5jbGljayhmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIGJ1dHRvbk5hbWU9ZmFsc2U7dmFyIHNob3VsZENsb3NlPWZhbHNlO3ZhciBzdHI7aWYodHlwZW9mIHRoYXQuY2xvc2VJY29uPT09XCJmdW5jdGlvblwiKXtzdHI9dGhhdC5jbG9zZUljb24oKTt9ZWxzZXtzdHI9dGhhdC5jbG9zZUljb247fWlmKHR5cGVvZiBzdHI9PT1cInN0cmluZ1wiJiZ0eXBlb2YgdGhhdC5idXR0b25zW3N0cl0hPT1cInVuZGVmaW5lZFwiKXtidXR0b25OYW1lPXN0cjtzaG91bGRDbG9zZT1mYWxzZTt9ZWxzZXtpZih0eXBlb2Ygc3RyPT09XCJ1bmRlZmluZWRcInx8ISEoc3RyKT09PXRydWUpe3Nob3VsZENsb3NlPXRydWU7fWVsc2V7c2hvdWxkQ2xvc2U9ZmFsc2U7fX1pZihidXR0b25OYW1lKXt2YXIgYnRuUmVzcG9uc2U9dGhhdC5idXR0b25zW2J1dHRvbk5hbWVdLmFjdGlvbi5hcHBseSh0aGF0KTtzaG91bGRDbG9zZT0odHlwZW9mIGJ0blJlc3BvbnNlPT09XCJ1bmRlZmluZWRcIil8fCEhKGJ0blJlc3BvbnNlKTt9aWYoc2hvdWxkQ2xvc2Upe3RoYXQuY2xvc2UoKTt9fSk7dGhpcy4kY2xvc2VJY29uLnNob3coKTt9ZWxzZXt0aGlzLiRjbG9zZUljb24uaGlkZSgpO319LHNldFRpdGxlOmZ1bmN0aW9uKHN0cmluZyxmb3JjZSl7Zm9yY2U9Zm9yY2V8fGZhbHNlO2lmKHR5cGVvZiBzdHJpbmchPT1cInVuZGVmaW5lZFwiKXtpZih0eXBlb2Ygc3RyaW5nPT09XCJzdHJpbmdcIil7dGhpcy50aXRsZT1zdHJpbmc7fWVsc2V7aWYodHlwZW9mIHN0cmluZz09PVwiZnVuY3Rpb25cIil7aWYodHlwZW9mIHN0cmluZy5wcm9taXNlPT09XCJmdW5jdGlvblwiKXtjb25zb2xlLmVycm9yKFwiUHJvbWlzZSB3YXMgcmV0dXJuZWQgZnJvbSB0aXRsZSBmdW5jdGlvbiwgdGhpcyBpcyBub3Qgc3VwcG9ydGVkLlwiKTt9dmFyIHJlc3BvbnNlPXN0cmluZygpO2lmKHR5cGVvZiByZXNwb25zZT09PVwic3RyaW5nXCIpe3RoaXMudGl0bGU9cmVzcG9uc2U7fWVsc2V7dGhpcy50aXRsZT1mYWxzZTt9fWVsc2V7dGhpcy50aXRsZT1mYWxzZTt9fX1pZih0aGlzLmlzQWpheExvYWRpbmcmJiFmb3JjZSl7cmV0dXJuO310aGlzLiR0aXRsZS5odG1sKHRoaXMudGl0bGV8fFwiXCIpO3RoaXMudXBkYXRlVGl0bGVDb250YWluZXIoKTt9LHNldEljb246ZnVuY3Rpb24oaWNvbkNsYXNzLGZvcmNlKXtmb3JjZT1mb3JjZXx8ZmFsc2U7aWYodHlwZW9mIGljb25DbGFzcyE9PVwidW5kZWZpbmVkXCIpe2lmKHR5cGVvZiBpY29uQ2xhc3M9PT1cInN0cmluZ1wiKXt0aGlzLmljb249aWNvbkNsYXNzO31lbHNle2lmKHR5cGVvZiBpY29uQ2xhc3M9PT1cImZ1bmN0aW9uXCIpe3ZhciByZXNwb25zZT1pY29uQ2xhc3MoKTtpZih0eXBlb2YgcmVzcG9uc2U9PT1cInN0cmluZ1wiKXt0aGlzLmljb249cmVzcG9uc2U7fWVsc2V7dGhpcy5pY29uPWZhbHNlO319ZWxzZXt0aGlzLmljb249ZmFsc2U7fX19aWYodGhpcy5pc0FqYXhMb2FkaW5nJiYhZm9yY2Upe3JldHVybjt9dGhpcy4kaWNvbi5odG1sKHRoaXMuaWNvbj8nPGkgY2xhc3M9XCInK3RoaXMuaWNvbisnXCI+PC9pPic6XCJcIik7dGhpcy51cGRhdGVUaXRsZUNvbnRhaW5lcigpO30sdXBkYXRlVGl0bGVDb250YWluZXI6ZnVuY3Rpb24oKXtpZighdGhpcy50aXRsZSYmIXRoaXMuaWNvbil7dGhpcy4kdGl0bGVDb250YWluZXIuaGlkZSgpO31lbHNle3RoaXMuJHRpdGxlQ29udGFpbmVyLnNob3coKTt9fSxzZXRDb250ZW50UHJlcGVuZDpmdW5jdGlvbihjb250ZW50LGZvcmNlKXtpZighY29udGVudCl7cmV0dXJuO310aGlzLmNvbnRlbnRQYXJzZWQucHJlcGVuZChjb250ZW50KTt9LHNldENvbnRlbnRBcHBlbmQ6ZnVuY3Rpb24oY29udGVudCl7aWYoIWNvbnRlbnQpe3JldHVybjt9dGhpcy5jb250ZW50UGFyc2VkLmFwcGVuZChjb250ZW50KTt9LHNldENvbnRlbnQ6ZnVuY3Rpb24oY29udGVudCxmb3JjZSl7Zm9yY2U9ISFmb3JjZTt2YXIgdGhhdD10aGlzO2lmKGNvbnRlbnQpe3RoaXMuY29udGVudFBhcnNlZC5odG1sKFwiXCIpLmFwcGVuZChjb250ZW50KTt9aWYodGhpcy5pc0FqYXhMb2FkaW5nJiYhZm9yY2Upe3JldHVybjt9dGhpcy4kY29udGVudC5odG1sKFwiXCIpO3RoaXMuJGNvbnRlbnQuYXBwZW5kKHRoaXMuY29udGVudFBhcnNlZCk7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuJGJvZHkuZmluZChcImlucHV0W2F1dG9mb2N1c106dmlzaWJsZTpmaXJzdFwiKS5mb2N1cygpO30sMTAwKTt9LGxvYWRpbmdTcGlubmVyOmZhbHNlLHNob3dMb2FkaW5nOmZ1bmN0aW9uKGRpc2FibGVCdXR0b25zKXt0aGlzLmxvYWRpbmdTcGlubmVyPXRydWU7dGhpcy4kamNvbmZpcm1Cb3guYWRkQ2xhc3MoXCJsb2FkaW5nXCIpO2lmKGRpc2FibGVCdXR0b25zKXt0aGlzLiRidG5jLmZpbmQoXCJidXR0b25cIikucHJvcChcImRpc2FibGVkXCIsdHJ1ZSk7fX0saGlkZUxvYWRpbmc6ZnVuY3Rpb24oZW5hYmxlQnV0dG9ucyl7dGhpcy5sb2FkaW5nU3Bpbm5lcj1mYWxzZTt0aGlzLiRqY29uZmlybUJveC5yZW1vdmVDbGFzcyhcImxvYWRpbmdcIik7aWYoZW5hYmxlQnV0dG9ucyl7dGhpcy4kYnRuYy5maW5kKFwiYnV0dG9uXCIpLnByb3AoXCJkaXNhYmxlZFwiLGZhbHNlKTt9fSxhamF4UmVzcG9uc2U6ZmFsc2UsY29udGVudFBhcnNlZDpcIlwiLGlzQWpheDpmYWxzZSxpc0FqYXhMb2FkaW5nOmZhbHNlLF9wYXJzZUNvbnRlbnQ6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO3ZhciBlPVwiJm5ic3A7XCI7aWYodHlwZW9mIHRoaXMuY29udGVudD09PVwiZnVuY3Rpb25cIil7dmFyIHJlcz10aGlzLmNvbnRlbnQuYXBwbHkodGhpcyk7aWYodHlwZW9mIHJlcz09PVwic3RyaW5nXCIpe3RoaXMuY29udGVudD1yZXM7fWVsc2V7aWYodHlwZW9mIHJlcz09PVwib2JqZWN0XCImJnR5cGVvZiByZXMuYWx3YXlzPT09XCJmdW5jdGlvblwiKXt0aGlzLmlzQWpheD10cnVlO3RoaXMuaXNBamF4TG9hZGluZz10cnVlO3Jlcy5hbHdheXMoZnVuY3Rpb24oZGF0YSxzdGF0dXMseGhyKXt0aGF0LmFqYXhSZXNwb25zZT17ZGF0YTpkYXRhLHN0YXR1czpzdGF0dXMseGhyOnhocn07dGhhdC5fY29udGVudFJlYWR5LnJlc29sdmUoZGF0YSxzdGF0dXMseGhyKTtpZih0eXBlb2YgdGhhdC5jb250ZW50TG9hZGVkPT09XCJmdW5jdGlvblwiKXt0aGF0LmNvbnRlbnRMb2FkZWQoZGF0YSxzdGF0dXMseGhyKTt9fSk7dGhpcy5jb250ZW50PWU7fWVsc2V7dGhpcy5jb250ZW50PWU7fX19aWYodHlwZW9mIHRoaXMuY29udGVudD09PVwic3RyaW5nXCImJnRoaXMuY29udGVudC5zdWJzdHIoMCw0KS50b0xvd2VyQ2FzZSgpPT09XCJ1cmw6XCIpe3RoaXMuaXNBamF4PXRydWU7dGhpcy5pc0FqYXhMb2FkaW5nPXRydWU7dmFyIHU9dGhpcy5jb250ZW50LnN1YnN0cmluZyg0LHRoaXMuY29udGVudC5sZW5ndGgpOyQuZ2V0KHUpLmRvbmUoZnVuY3Rpb24oaHRtbCl7dGhhdC5jb250ZW50UGFyc2VkLmh0bWwoaHRtbCk7fSkuYWx3YXlzKGZ1bmN0aW9uKGRhdGEsc3RhdHVzLHhocil7dGhhdC5hamF4UmVzcG9uc2U9e2RhdGE6ZGF0YSxzdGF0dXM6c3RhdHVzLHhocjp4aHJ9O3RoYXQuX2NvbnRlbnRSZWFkeS5yZXNvbHZlKGRhdGEsc3RhdHVzLHhocik7aWYodHlwZW9mIHRoYXQuY29udGVudExvYWRlZD09PVwiZnVuY3Rpb25cIil7dGhhdC5jb250ZW50TG9hZGVkKGRhdGEsc3RhdHVzLHhocik7fX0pO31pZighdGhpcy5jb250ZW50KXt0aGlzLmNvbnRlbnQ9ZTt9aWYoIXRoaXMuaXNBamF4KXt0aGlzLmNvbnRlbnRQYXJzZWQuaHRtbCh0aGlzLmNvbnRlbnQpO3RoaXMuc2V0Q29udGVudCgpO3RoYXQuX2NvbnRlbnRSZWFkeS5yZXNvbHZlKCk7fX0sX3N0b3BDb3VudERvd246ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKHRoaXMuYXV0b0Nsb3NlSW50ZXJ2YWwpO2lmKHRoaXMuJGNkKXt0aGlzLiRjZC5yZW1vdmUoKTt9fSxfc3RhcnRDb3VudERvd246ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO3ZhciBvcHQ9dGhpcy5hdXRvQ2xvc2Uuc3BsaXQoXCJ8XCIpO2lmKG9wdC5sZW5ndGghPT0yKXtjb25zb2xlLmVycm9yKFwiSW52YWxpZCBvcHRpb24gZm9yIGF1dG9DbG9zZS4gZXhhbXBsZSAnY2xvc2V8MTAwMDAnXCIpO3JldHVybiBmYWxzZTt9dmFyIGJ1dHRvbl9rZXk9b3B0WzBdO3ZhciB0aW1lPXBhcnNlSW50KG9wdFsxXSk7aWYodHlwZW9mIHRoaXMuYnV0dG9uc1tidXR0b25fa2V5XT09PVwidW5kZWZpbmVkXCIpe2NvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIGJ1dHRvbiBrZXkgJ1wiK2J1dHRvbl9rZXkrXCInIGZvciBhdXRvQ2xvc2VcIik7cmV0dXJuIGZhbHNlO312YXIgc2Vjb25kcz1NYXRoLmNlaWwodGltZS8xMDAwKTt0aGlzLiRjZD0kKCc8c3BhbiBjbGFzcz1cImNvdW50ZG93blwiPiAoJytzZWNvbmRzK1wiKTwvc3Bhbj5cIikuYXBwZW5kVG8odGhpc1tcIiRfXCIrYnV0dG9uX2tleV0pO3RoaXMuYXV0b0Nsb3NlSW50ZXJ2YWw9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt0aGF0LiRjZC5odG1sKFwiIChcIisoc2Vjb25kcy09MSkrXCIpIFwiKTtpZihzZWNvbmRzPD0wKXt0aGF0W1wiJCRcIitidXR0b25fa2V5XS50cmlnZ2VyKFwiY2xpY2tcIik7dGhhdC5fc3RvcENvdW50RG93bigpO319LDEwMDApO30sX2dldEtleTpmdW5jdGlvbihrZXkpe3N3aXRjaChrZXkpe2Nhc2UgMTkyOnJldHVyblwidGlsZGVcIjtjYXNlIDEzOnJldHVyblwiZW50ZXJcIjtjYXNlIDE2OnJldHVyblwic2hpZnRcIjtjYXNlIDk6cmV0dXJuXCJ0YWJcIjtjYXNlIDIwOnJldHVyblwiY2Fwc2xvY2tcIjtjYXNlIDE3OnJldHVyblwiY3RybFwiO2Nhc2UgOTE6cmV0dXJuXCJ3aW5cIjtjYXNlIDE4OnJldHVyblwiYWx0XCI7Y2FzZSAyNzpyZXR1cm5cImVzY1wiO2Nhc2UgMzI6cmV0dXJuXCJzcGFjZVwiO312YXIgaW5pdGlhbD1TdHJpbmcuZnJvbUNoYXJDb2RlKGtleSk7aWYoL15bQS16MC05XSskLy50ZXN0KGluaXRpYWwpKXtyZXR1cm4gaW5pdGlhbC50b0xvd2VyQ2FzZSgpO31lbHNle3JldHVybiBmYWxzZTt9fSxyZWFjdE9uS2V5OmZ1bmN0aW9uKGUpe3ZhciB0aGF0PXRoaXM7dmFyIGE9JChcIi5qY29uZmlybVwiKTtpZihhLmVxKGEubGVuZ3RoLTEpWzBdIT09dGhpcy4kZWxbMF0pe3JldHVybiBmYWxzZTt9dmFyIGtleT1lLndoaWNoO2lmKHRoaXMuJGNvbnRlbnQuZmluZChcIjppbnB1dFwiKS5pcyhcIjpmb2N1c1wiKSYmLzEzfDMyLy50ZXN0KGtleSkpe3JldHVybiBmYWxzZTt9dmFyIGtleUNoYXI9dGhpcy5fZ2V0S2V5KGtleSk7aWYoa2V5Q2hhcj09PVwiZXNjXCImJnRoaXMuZXNjYXBlS2V5KXtpZih0aGlzLmVzY2FwZUtleT09PXRydWUpe3RoaXMuJHNjcm9sbFBhbmUudHJpZ2dlcihcImNsaWNrXCIpO31lbHNle2lmKHR5cGVvZiB0aGlzLmVzY2FwZUtleT09PVwic3RyaW5nXCJ8fHR5cGVvZiB0aGlzLmVzY2FwZUtleT09PVwiZnVuY3Rpb25cIil7dmFyIGJ1dHRvbktleTtpZih0eXBlb2YgdGhpcy5lc2NhcGVLZXk9PT1cImZ1bmN0aW9uXCIpe2J1dHRvbktleT10aGlzLmVzY2FwZUtleSgpO31lbHNle2J1dHRvbktleT10aGlzLmVzY2FwZUtleTt9aWYoYnV0dG9uS2V5KXtpZih0eXBlb2YgdGhpcy5idXR0b25zW2J1dHRvbktleV09PT1cInVuZGVmaW5lZFwiKXtjb25zb2xlLndhcm4oXCJJbnZhbGlkIGVzY2FwZUtleSwgbm8gYnV0dG9ucyBmb3VuZCB3aXRoIGtleSBcIitidXR0b25LZXkpO31lbHNle3RoaXNbXCIkX1wiK2J1dHRvbktleV0udHJpZ2dlcihcImNsaWNrXCIpO319fX19JC5lYWNoKHRoaXMuYnV0dG9ucyxmdW5jdGlvbihrZXksYnV0dG9uKXtpZihidXR0b24ua2V5cy5pbmRleE9mKGtleUNoYXIpIT09LTEpe3RoYXRbXCIkX1wiK2tleV0udHJpZ2dlcihcImNsaWNrXCIpO319KTt9LHNldERpYWxvZ0NlbnRlcjpmdW5jdGlvbigpe2NvbnNvbGUuaW5mbyhcInNldERpYWxvZ0NlbnRlciBpcyBkZXByZWNhdGVkLCBkaWFsb2dzIGFyZSBjZW50ZXJlZCB3aXRoIENTUzMgdGFibGVzXCIpO30sX3Vud2F0Y2hDb250ZW50OmZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbCh0aGlzLl90aW1lcik7fSxjbG9zZTpmdW5jdGlvbihvbkNsb3NlUGF5bG9hZCl7dmFyIHRoYXQ9dGhpcztpZih0eXBlb2YgdGhpcy5vbkNsb3NlPT09XCJmdW5jdGlvblwiKXt0aGlzLm9uQ2xvc2Uob25DbG9zZVBheWxvYWQpO310aGlzLl91bndhdGNoQ29udGVudCgpOyQod2luZG93KS51bmJpbmQoXCJyZXNpemUuXCIrdGhpcy5faWQpOyQod2luZG93KS51bmJpbmQoXCJrZXl1cC5cIit0aGlzLl9pZCk7JCh3aW5kb3cpLnVuYmluZChcImpjS2V5RG93bi5cIit0aGlzLl9pZCk7aWYodGhpcy5kcmFnZ2FibGUpeyQod2luZG93KS51bmJpbmQoXCJtb3VzZW1vdmUuXCIrdGhpcy5faWQpOyQod2luZG93KS51bmJpbmQoXCJtb3VzZXVwLlwiK3RoaXMuX2lkKTt0aGlzLiR0aXRsZUNvbnRhaW5lci51bmJpbmQoXCJtb3VzZWRvd25cIik7fXRoYXQuJGVsLnJlbW92ZUNsYXNzKHRoYXQubG9hZGVkQ2xhc3MpOyQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwiamNvbmZpcm0tbm8tc2Nyb2xsLVwiK3RoYXQuX2lkKTt0aGF0LiRqY29uZmlybUJveENvbnRhaW5lci5yZW1vdmVDbGFzcyhcImpjb25maXJtLW5vLXRyYW5zaXRpb25cIik7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuJGJvZHkuYWRkQ2xhc3ModGhhdC5jbG9zZUFuaW1hdGlvblBhcnNlZCk7dGhhdC4kamNvbmZpcm1CZy5hZGRDbGFzcyhcImpjb25maXJtLWJnLWhcIik7dmFyIGNsb3NlVGltZXI9KHRoYXQuY2xvc2VBbmltYXRpb249PT1cIm5vbmVcIik/MTp0aGF0LmFuaW1hdGlvblNwZWVkO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LiRlbC5yZW1vdmUoKTt2YXIgbD13Lmpjb25maXJtLmluc3RhbmNlczt2YXIgaT13Lmpjb25maXJtLmluc3RhbmNlcy5sZW5ndGgtMTtmb3IoaTtpPj0wO2ktLSl7aWYody5qY29uZmlybS5pbnN0YW5jZXNbaV0uX2lkPT09dGhhdC5faWQpe3cuamNvbmZpcm0uaW5zdGFuY2VzLnNwbGljZShpLDEpO319aWYoIXcuamNvbmZpcm0uaW5zdGFuY2VzLmxlbmd0aCl7aWYodGhhdC5zY3JvbGxUb1ByZXZpb3VzRWxlbWVudCYmdy5qY29uZmlybS5sYXN0Rm9jdXNlZCYmdy5qY29uZmlybS5sYXN0Rm9jdXNlZC5sZW5ndGgmJiQuY29udGFpbnMoZG9jdW1lbnQsdy5qY29uZmlybS5sYXN0Rm9jdXNlZFswXSkpe3ZhciAkbGY9dy5qY29uZmlybS5sYXN0Rm9jdXNlZDtpZih0aGF0LnNjcm9sbFRvUHJldmlvdXNFbGVtZW50QW5pbWF0ZSl7dmFyIHN0PSQod2luZG93KS5zY3JvbGxUb3AoKTt2YXIgb3Q9dy5qY29uZmlybS5sYXN0Rm9jdXNlZC5vZmZzZXQoKS50b3A7dmFyIHdoPSQod2luZG93KS5oZWlnaHQoKTtpZighKG90PnN0JiZvdDwoc3Qrd2gpKSl7dmFyIHNjcm9sbFRvPShvdC1NYXRoLnJvdW5kKCh3aC8zKSkpOyQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe3Njcm9sbFRvcDpzY3JvbGxUb30sdGhhdC5hbmltYXRpb25TcGVlZCxcInN3aW5nXCIsZnVuY3Rpb24oKXskbGYuZm9jdXMoKTt9KTt9ZWxzZXskbGYuZm9jdXMoKTt9fWVsc2V7JGxmLmZvY3VzKCk7fXcuamNvbmZpcm0ubGFzdEZvY3VzZWQ9ZmFsc2U7fX1pZih0eXBlb2YgdGhhdC5vbkRlc3Ryb3k9PT1cImZ1bmN0aW9uXCIpe3RoYXQub25EZXN0cm95KCk7fX0sY2xvc2VUaW1lciowLjQpO30sNTApO3JldHVybiB0cnVlO30sb3BlbjpmdW5jdGlvbigpe2lmKHRoaXMuaXNPcGVuKCkpe3JldHVybiBmYWxzZTt9dGhpcy5fYnVpbGRIVE1MKCk7dGhpcy5fYmluZEV2ZW50cygpO3RoaXMuX29wZW4oKTtyZXR1cm4gdHJ1ZTt9LHNldFN0YXJ0aW5nUG9pbnQ6ZnVuY3Rpb24oKXt2YXIgZWw9ZmFsc2U7aWYodGhpcy5hbmltYXRlRnJvbUVsZW1lbnQhPT10cnVlJiZ0aGlzLmFuaW1hdGVGcm9tRWxlbWVudCl7ZWw9dGhpcy5hbmltYXRlRnJvbUVsZW1lbnQ7dy5qY29uZmlybS5sYXN0Q2xpY2tlZD1mYWxzZTt9ZWxzZXtpZih3Lmpjb25maXJtLmxhc3RDbGlja2VkJiZ0aGlzLmFuaW1hdGVGcm9tRWxlbWVudD09PXRydWUpe2VsPXcuamNvbmZpcm0ubGFzdENsaWNrZWQ7dy5qY29uZmlybS5sYXN0Q2xpY2tlZD1mYWxzZTt9ZWxzZXtyZXR1cm4gZmFsc2U7fX1pZighZWwpe3JldHVybiBmYWxzZTt9dmFyIG9mZnNldD1lbC5vZmZzZXQoKTt2YXIgaVRvcD1lbC5vdXRlckhlaWdodCgpLzI7dmFyIGlMZWZ0PWVsLm91dGVyV2lkdGgoKS8yO2lUb3AtPXRoaXMuJGpjb25maXJtQm94Lm91dGVySGVpZ2h0KCkvMjtpTGVmdC09dGhpcy4kamNvbmZpcm1Cb3gub3V0ZXJXaWR0aCgpLzI7dmFyIHNvdXJjZVRvcD1vZmZzZXQudG9wK2lUb3A7c291cmNlVG9wPXNvdXJjZVRvcC10aGlzLl9zY3JvbGxUb3AoKTt2YXIgc291cmNlTGVmdD1vZmZzZXQubGVmdCtpTGVmdDt2YXIgd2g9JCh3aW5kb3cpLmhlaWdodCgpLzI7dmFyIHd3PSQod2luZG93KS53aWR0aCgpLzI7dmFyIHRhcmdldEg9d2gtdGhpcy4kamNvbmZpcm1Cb3gub3V0ZXJIZWlnaHQoKS8yO3ZhciB0YXJnZXRXPXd3LXRoaXMuJGpjb25maXJtQm94Lm91dGVyV2lkdGgoKS8yO3NvdXJjZVRvcC09dGFyZ2V0SDtzb3VyY2VMZWZ0LT10YXJnZXRXO2lmKE1hdGguYWJzKHNvdXJjZVRvcCk+d2h8fE1hdGguYWJzKHNvdXJjZUxlZnQpPnd3KXtyZXR1cm4gZmFsc2U7fXRoaXMuJGpjb25maXJtQm94Q29udGFpbmVyLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiK3NvdXJjZUxlZnQrXCJweCwgXCIrc291cmNlVG9wK1wicHgpXCIpO30sX29wZW46ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO2lmKHR5cGVvZiB0aGF0Lm9uT3BlbkJlZm9yZT09PVwiZnVuY3Rpb25cIil7dGhhdC5vbk9wZW5CZWZvcmUoKTt9dGhpcy4kYm9keS5yZW1vdmVDbGFzcyh0aGlzLmFuaW1hdGlvblBhcnNlZCk7dGhpcy4kamNvbmZpcm1CZy5yZW1vdmVDbGFzcyhcImpjb25maXJtLWJnLWhcIik7dGhpcy4kYm9keS5mb2N1cygpO3RoYXQuJGpjb25maXJtQm94Q29udGFpbmVyLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiKzArXCJweCwgXCIrMCtcInB4KVwiKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC4kYm9keS5jc3ModGhhdC5fZ2V0Q1NTKHRoYXQuYW5pbWF0aW9uU3BlZWQsMSkpO3RoYXQuJGJvZHkuY3NzKHtcInRyYW5zaXRpb24tcHJvcGVydHlcIjp0aGF0LiRib2R5LmNzcyhcInRyYW5zaXRpb24tcHJvcGVydHlcIikrXCIsIG1hcmdpblwifSk7dGhhdC4kamNvbmZpcm1Cb3hDb250YWluZXIuYWRkQ2xhc3MoXCJqY29uZmlybS1uby10cmFuc2l0aW9uXCIpO3RoYXQuX21vZGFsUmVhZHkucmVzb2x2ZSgpO2lmKHR5cGVvZiB0aGF0Lm9uT3Blbj09PVwiZnVuY3Rpb25cIil7dGhhdC5vbk9wZW4oKTt9dGhhdC4kZWwuYWRkQ2xhc3ModGhhdC5sb2FkZWRDbGFzcyk7fSx0aGlzLmFuaW1hdGlvblNwZWVkKTt9LGxvYWRlZENsYXNzOlwiamNvbmZpcm0tb3BlblwiLGlzQ2xvc2VkOmZ1bmN0aW9uKCl7cmV0dXJuICF0aGlzLiRlbHx8dGhpcy4kZWwucGFyZW50KCkubGVuZ3RoPT09MDt9LGlzT3BlbjpmdW5jdGlvbigpe3JldHVybiAhdGhpcy5pc0Nsb3NlZCgpO30sdG9nZ2xlOmZ1bmN0aW9uKCl7aWYoIXRoaXMuaXNPcGVuKCkpe3RoaXMub3BlbigpO31lbHNle3RoaXMuY2xvc2UoKTt9fX07dy5qY29uZmlybS5pbnN0YW5jZXM9W107dy5qY29uZmlybS5sYXN0Rm9jdXNlZD1mYWxzZTt3Lmpjb25maXJtLnBsdWdpbkRlZmF1bHRzPXt0ZW1wbGF0ZTonPGRpdiBjbGFzcz1cImpjb25maXJtXCI+PGRpdiBjbGFzcz1cImpjb25maXJtLWJnIGpjb25maXJtLWJnLWhcIj48L2Rpdj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tc2Nyb2xscGFuZVwiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1yb3dcIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tY2VsbFwiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1ob2xkZXJcIj48ZGl2IGNsYXNzPVwiamMtYnMzLWNvbnRhaW5lclwiPjxkaXYgY2xhc3M9XCJqYy1iczMtcm93XCI+PGRpdiBjbGFzcz1cImpjb25maXJtLWJveC1jb250YWluZXIgamNvbmZpcm0tYW5pbWF0ZWRcIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tYm94XCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cImxhYmVsbGVkXCIgdGFiaW5kZXg9XCItMVwiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1jbG9zZUljb25cIj4mdGltZXM7PC9kaXY+PGRpdiBjbGFzcz1cImpjb25maXJtLXRpdGxlLWNcIj48c3BhbiBjbGFzcz1cImpjb25maXJtLWljb24tY1wiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImpjb25maXJtLXRpdGxlXCI+PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJqY29uZmlybS1jb250ZW50LXBhbmVcIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tY29udGVudFwiPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9XCJqY29uZmlybS1idXR0b25zXCI+PC9kaXY+PGRpdiBjbGFzcz1cImpjb25maXJtLWNsZWFyXCI+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+PC9kaXY+Jyx0aXRsZTpcIkhlbGxvXCIsdGl0bGVDbGFzczpcIlwiLHR5cGU6XCJkZWZhdWx0XCIsdHlwZUFuaW1hdGVkOnRydWUsZHJhZ2dhYmxlOnRydWUsZHJhZ1dpbmRvd0dhcDoxNSxkcmFnV2luZG93Qm9yZGVyOnRydWUsYW5pbWF0ZUZyb21FbGVtZW50OnRydWUsYWxpZ25NaWRkbGU6dHJ1ZSxzbW9vdGhDb250ZW50OnRydWUsY29udGVudDpcIkFyZSB5b3Ugc3VyZSB0byBjb250aW51ZT9cIixidXR0b25zOnt9LGRlZmF1bHRCdXR0b25zOntvazp7YWN0aW9uOmZ1bmN0aW9uKCl7fX0sY2xvc2U6e2FjdGlvbjpmdW5jdGlvbigpe319fSxjb250ZW50TG9hZGVkOmZ1bmN0aW9uKCl7fSxpY29uOlwiXCIsbGF6eU9wZW46ZmFsc2UsYmdPcGFjaXR5Om51bGwsdGhlbWU6XCJsaWdodFwiLGFuaW1hdGlvbjpcInNjYWxlXCIsY2xvc2VBbmltYXRpb246XCJzY2FsZVwiLGFuaW1hdGlvblNwZWVkOjQwMCxhbmltYXRpb25Cb3VuY2U6MSxlc2NhcGVLZXk6dHJ1ZSxydGw6ZmFsc2UsY29udGFpbmVyOlwiYm9keVwiLGNvbnRhaW5lckZsdWlkOmZhbHNlLGJhY2tncm91bmREaXNtaXNzOmZhbHNlLGJhY2tncm91bmREaXNtaXNzQW5pbWF0aW9uOlwic2hha2VcIixhdXRvQ2xvc2U6ZmFsc2UsY2xvc2VJY29uOm51bGwsY2xvc2VJY29uQ2xhc3M6ZmFsc2Usd2F0Y2hJbnRlcnZhbDoxMDAsY29sdW1uQ2xhc3M6XCJjb2wtbWQtNCBjb2wtbWQtb2Zmc2V0LTQgY29sLXNtLTYgY29sLXNtLW9mZnNldC0zIGNvbC14cy0xMCBjb2wteHMtb2Zmc2V0LTFcIixib3hXaWR0aDpcIjUwJVwiLHNjcm9sbFRvUHJldmlvdXNFbGVtZW50OnRydWUsc2Nyb2xsVG9QcmV2aW91c0VsZW1lbnRBbmltYXRlOnRydWUsdXNlQm9vdHN0cmFwOnRydWUsb2Zmc2V0VG9wOjQwLG9mZnNldEJvdHRvbTo0MCxib290c3RyYXBDbGFzc2VzOntjb250YWluZXI6XCJjb250YWluZXJcIixjb250YWluZXJGbHVpZDpcImNvbnRhaW5lci1mbHVpZFwiLHJvdzpcInJvd1wifSxvbkNvbnRlbnRSZWFkeTpmdW5jdGlvbigpe30sb25PcGVuQmVmb3JlOmZ1bmN0aW9uKCl7fSxvbk9wZW46ZnVuY3Rpb24oKXt9LG9uQ2xvc2U6ZnVuY3Rpb24oKXt9LG9uRGVzdHJveTpmdW5jdGlvbigpe30sb25BY3Rpb246ZnVuY3Rpb24oKXt9fTt2YXIga2V5RG93bj1mYWxzZTskKHdpbmRvdykub24oXCJrZXlkb3duXCIsZnVuY3Rpb24oZSl7aWYoIWtleURvd24pe3ZhciAkdGFyZ2V0PSQoZS50YXJnZXQpO3ZhciBwYXNzPWZhbHNlO2lmKCR0YXJnZXQuY2xvc2VzdChcIi5qY29uZmlybS1ib3hcIikubGVuZ3RoKXtwYXNzPXRydWU7fWlmKHBhc3MpeyQod2luZG93KS50cmlnZ2VyKFwiamNLZXlEb3duXCIpO31rZXlEb3duPXRydWU7fX0pOyQod2luZG93KS5vbihcImtleXVwXCIsZnVuY3Rpb24oKXtrZXlEb3duPWZhbHNlO30pO3cuamNvbmZpcm0ubGFzdENsaWNrZWQ9ZmFsc2U7JChkb2N1bWVudCkub24oXCJtb3VzZWRvd25cIixcImJ1dHRvbiwgYSwgW2pjLXNvdXJjZV1cIixmdW5jdGlvbigpe3cuamNvbmZpcm0ubGFzdENsaWNrZWQ9JCh0aGlzKTt9KTt9KSk7IiwiLypcbiAgICAgXyBfICAgICAgXyAgICAgICBfXG4gX19ffCAoXykgX19ffCB8IF9fICAoXylfX19cbi8gX198IHwgfC8gX198IHwvIC8gIHwgLyBfX3xcblxcX18gXFwgfCB8IChfX3wgICA8IF8gfCBcXF9fIFxcXG58X19fL198X3xcXF9fX3xffFxcXyhfKS8gfF9fXy9cbiAgICAgICAgICAgICAgICAgICB8X18vXG5cbiBWZXJzaW9uOiAxLjguMVxuICBBdXRob3I6IEtlbiBXaGVlbGVyXG4gV2Vic2l0ZTogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvXG4gICAgRG9jczogaHR0cDovL2tlbndoZWVsZXIuZ2l0aHViLmlvL3NsaWNrXG4gICAgUmVwbzogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGlja1xuICBJc3N1ZXM6IGh0dHA6Ly9naXRodWIuY29tL2tlbndoZWVsZXIvc2xpY2svaXNzdWVzXG5cbiAqL1xuLyogZ2xvYmFsIHdpbmRvdywgZG9jdW1lbnQsIGRlZmluZSwgalF1ZXJ5LCBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCAqL1xuOyhmdW5jdGlvbihmYWN0b3J5KSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICAgICAgZGVmaW5lKFsnanF1ZXJ5J10sIGZhY3RvcnkpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZmFjdG9yeShqUXVlcnkpO1xuICAgIH1cblxufShmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBTbGljayA9IHdpbmRvdy5TbGljayB8fCB7fTtcblxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBpbnN0YW5jZVVpZCA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gU2xpY2soZWxlbWVudCwgc2V0dGluZ3MpIHtcblxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XG5cbiAgICAgICAgICAgIF8uZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXBwZW5kQXJyb3dzOiAkKGVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiBudWxsLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPk5leHQ8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFnaW5nOiBmdW5jdGlvbihzbGlkZXIsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIC8+JykudGV4dChpICsgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzQ2xhc3M6ICdzbGljay1kb3RzJyxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzaW5nOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICBlZGdlRnJpY3Rpb246IDAuMzUsXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9jdXNPbkNoYW5nZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbmRUbzogJ3dpbmRvdycsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogbnVsbCxcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgICAgICAgIHJ0bDogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGU6ICcnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0b3VjaFRocmVzaG9sZDogNSxcbiAgICAgICAgICAgICAgICB1c2VDU1M6IHRydWUsXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhaXRGb3JBbmltYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgXy5pbml0aWFscyA9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvUGxheVRpbWVyOiBudWxsLFxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlOiAwLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcbiAgICAgICAgICAgICAgICAkZG90czogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0V2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkSW5kZXg6IDAsXG4gICAgICAgICAgICAgICAgJG5leHRBcnJvdzogbnVsbCxcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgIHNjcm9sbGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVDb3VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZVRyYWNrOiBudWxsLFxuICAgICAgICAgICAgICAgICRzbGlkZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQ6IDAsXG4gICAgICAgICAgICAgICAgc3dpcGVMZWZ0OiBudWxsLFxuICAgICAgICAgICAgICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICRsaXN0OiBudWxsLFxuICAgICAgICAgICAgICAgIHRvdWNoT2JqZWN0OiB7fSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdW5zbGlja2VkOiBmYWxzZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscyk7XG5cbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVByb3AgPSBudWxsO1xuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xuICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3MgPSBbXTtcbiAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIF8uaGlkZGVuID0gJ2hpZGRlbic7XG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IG51bGw7XG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcbiAgICAgICAgICAgIF8uc2hvdWxkQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgICAgXy4kc2xpZGVyID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9IG51bGw7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAwO1xuICAgICAgICAgICAgXy53aW5kb3dUaW1lciA9IG51bGw7XG5cbiAgICAgICAgICAgIGRhdGFTZXR0aW5ncyA9ICQoZWxlbWVudCkuZGF0YSgnc2xpY2snKSB8fCB7fTtcblxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG5cbiAgICAgICAgICAgIF8ub3JpZ2luYWxTZXR0aW5ncyA9IF8ub3B0aW9ucztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnbW96SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnbW96dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgXy5oaWRkZW4gPSAnd2Via2l0SGlkZGVuJztcbiAgICAgICAgICAgICAgICBfLnZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYXV0b1BsYXkgPSAkLnByb3h5KF8uYXV0b1BsYXksIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xuICAgICAgICAgICAgXy5hdXRvUGxheUl0ZXJhdG9yID0gJC5wcm94eShfLmF1dG9QbGF5SXRlcmF0b3IsIF8pO1xuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSA9ICQucHJveHkoXy5jaGFuZ2VTbGlkZSwgXyk7XG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZWxlY3RIYW5kbGVyID0gJC5wcm94eShfLnNlbGVjdEhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5zZXRQb3NpdGlvbiA9ICQucHJveHkoXy5zZXRQb3NpdGlvbiwgXyk7XG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xuICAgICAgICAgICAgXy5kcmFnSGFuZGxlciA9ICQucHJveHkoXy5kcmFnSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmtleUhhbmRsZXIgPSAkLnByb3h5KF8ua2V5SGFuZGxlciwgXyk7XG5cbiAgICAgICAgICAgIF8uaW5zdGFuY2VVaWQgPSBpbnN0YW5jZVVpZCsrO1xuXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgICAgICAgLy8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKG11c3Qgc3RhcnQgd2l0aCA8KVxuICAgICAgICAgICAgLy8gRXh0cmFjdGVkIGZyb20galF1ZXJ5IHYxLjExIHNvdXJjZVxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcblxuXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcbiAgICAgICAgICAgIF8uaW5pdCh0cnVlKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFNsaWNrO1xuXG4gICAgfSgpKTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAnZmFsc2UnXG4gICAgICAgIH0pLmZpbmQoJ2EsIGlucHV0LCBidXR0b24sIHNlbGVjdCcpLmF0dHIoe1xuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hZGRTbGlkZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0FkZCA9IGZ1bmN0aW9uKG1hcmt1cCwgaW5kZXgsIGFkZEJlZm9yZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICBhZGRCZWZvcmUgPSBpbmRleDtcbiAgICAgICAgICAgIGluZGV4ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udW5sb2FkKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgXy4kc2xpZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEJlZm9yZShfLiRzbGlkZXMuZXEoaW5kZXgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5hcHBlbmQoXy4kc2xpZGVzKTtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlSGVpZ2h0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldEhlaWdodFxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcblxuICAgICAgICB2YXIgYW5pbVByb3BzID0ge30sXG4gICAgICAgICAgICBfID0gdGhpcztcblxuICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gLXRhcmdldExlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8udHJhbnNmb3Jtc0VuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50TGVmdCA9IC0oXy5jdXJyZW50TGVmdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IF8uY3VycmVudExlZnRcbiAgICAgICAgICAgICAgICB9KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogXy5vcHRpb25zLnNwZWVkLFxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXG4gICAgICAgICAgICAgICAgICAgIHN0ZXA6IGZ1bmN0aW9uKG5vdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm93ID0gTWF0aC5jZWlsKG5vdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgwcHgsJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gTWF0aC5jZWlsKHRhcmdldExlZnQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB0YXJnZXRMZWZ0ICsgJ3B4LCAwcHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgwcHgsJyArIHRhcmdldExlZnQgKyAncHgsIDBweCknO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2VGFyZ2V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYXNOYXZGb3IgPSBfLm9wdGlvbnMuYXNOYXZGb3I7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAmJiBhc05hdkZvciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gJChhc05hdkZvcikubm90KF8uJHNsaWRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXNOYXZGb3I7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XG5cbiAgICAgICAgaWYgKCBhc05hdkZvciAhPT0gbnVsbCAmJiB0eXBlb2YgYXNOYXZGb3IgPT09ICdvYmplY3QnICkge1xuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzKS5zbGljaygnZ2V0U2xpY2snKTtcbiAgICAgICAgICAgICAgICBpZighdGFyZ2V0LnVuc2xpY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hcHBseVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gXy50cmFuc2Zvcm1UeXBlICsgJyAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUNsZWFyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoXy5hdXRvUGxheVRpbWVyKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIGlmICggIV8ucGF1c2VkICYmICFfLmludGVycnVwdGVkICYmICFfLmZvY3Vzc2VkICkge1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZGlyZWN0aW9uID0gMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbHNlIGlmICggXy5kaXJlY3Rpb24gPT09IDAgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICggXy5jdXJyZW50U2xpZGUgLSAxID09PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlVG8gKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICkge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgPSAkKF8ub3B0aW9ucy5wcmV2QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ID0gJChfLm9wdGlvbnMubmV4dEFycm93KS5hZGRDbGFzcygnc2xpY2stYXJyb3cnKTtcblxuICAgICAgICAgICAgaWYoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZUNsYXNzKCdzbGljay1oaWRkZW4nKS5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiB0YWJpbmRleCcpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucHJlcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLm5leHRBcnJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kbmV4dEFycm93LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmRBcnJvd3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkKCBfLiRuZXh0QXJyb3cgKVxuXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBkb3Q7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICAgICAgZG90ID0gJCgnPHVsIC8+JykuYWRkQ2xhc3MoXy5vcHRpb25zLmRvdHNDbGFzcyk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPD0gXy5nZXREb3RDb3VudCgpOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QuYXBwZW5kKCQoJzxsaSAvPicpLmFwcGVuZChfLm9wdGlvbnMuY3VzdG9tUGFnaW5nLmNhbGwodGhpcywgXywgaSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kZG90cyA9IGRvdC5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kRG90cyk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuZmluZCgnbGknKS5maXJzdCgpLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkT3V0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlcyA9XG4gICAgICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oIF8ub3B0aW9ucy5zbGlkZSArICc6bm90KC5zbGljay1jbG9uZWQpJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgJChlbGVtZW50KVxuICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JywgaW5kZXgpXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjayA9IChfLnNsaWRlQ291bnQgPT09IDApID9cbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcbiAgICAgICAgICAgIF8uJHNsaWRlcy53cmFwQWxsKCc8ZGl2IGNsYXNzPVwic2xpY2stdHJhY2tcIi8+JykucGFyZW50KCk7XG5cbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2xpY2stbGlzdFwiLz4nKS5wYXJlbnQoKTtcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoJ29wYWNpdHknLCAwKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyKS5ub3QoJ1tzcmNdJykuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcblxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XG5cbiAgICAgICAgXy5idWlsZERvdHMoKTtcblxuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcblxuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKHR5cGVvZiBfLmN1cnJlbnRTbGlkZSA9PT0gJ251bWJlcicgPyBfLmN1cnJlbnRTbGlkZSA6IDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0LmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGEsIGIsIGMsIG5ld1NsaWRlcywgbnVtT2ZTbGlkZXMsIG9yaWdpbmFsU2xpZGVzLHNsaWRlc1BlclNlY3Rpb247XG5cbiAgICAgICAgbmV3U2xpZGVzID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlci5jaGlsZHJlbigpO1xuXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMCkge1xuXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xuICAgICAgICAgICAgbnVtT2ZTbGlkZXMgPSBNYXRoLmNlaWwoXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxTbGlkZXMubGVuZ3RoIC8gc2xpZGVzUGVyU2VjdGlvblxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgZm9yKGEgPSAwOyBhIDwgbnVtT2ZTbGlkZXM7IGErKyl7XG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZm9yKGIgPSAwOyBiIDwgXy5vcHRpb25zLnJvd3M7IGIrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IChhICogc2xpZGVzUGVyU2VjdGlvbiArICgoYiAqIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgYykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTbGlkZXMuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQobmV3U2xpZGVzKTtcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOigxMDAgLyBfLm9wdGlvbnMuc2xpZGVzUGVyUm93KSArICclJyxcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hlY2tSZXNwb25zaXZlID0gZnVuY3Rpb24oaW5pdGlhbCwgZm9yY2VVcGRhdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBicmVha3BvaW50LCB0YXJnZXRCcmVha3BvaW50LCByZXNwb25kVG9XaWR0aCwgdHJpZ2dlckJyZWFrcG9pbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIHNsaWRlcldpZHRoID0gXy4kc2xpZGVyLndpZHRoKCk7XG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xuXG4gICAgICAgIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdzbGlkZXInKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IHNsaWRlcldpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBNYXRoLm1pbih3aW5kb3dXaWR0aCwgc2xpZGVyV2lkdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSAmJlxuICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yIChicmVha3BvaW50IGluIF8uYnJlYWtwb2ludHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50cy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoIDwgXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbmRUb1dpZHRoID4gXy5icmVha3BvaW50c1ticmVha3BvaW50XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldEJyZWFrcG9pbnQgIT09IF8uYWN0aXZlQnJlYWtwb2ludCB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludFNldHRpbmdzW3RhcmdldEJyZWFrcG9pbnRdID09PSAndW5zbGljaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBfLm9yaWdpbmFsU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfLmFjdGl2ZUJyZWFrcG9pbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxuICAgICAgICAgICAgaWYoICFpbml0aWFsICYmIHRyaWdnZXJCcmVha3BvaW50ICE9PSBmYWxzZSApIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignYnJlYWtwb2ludCcsIFtfLCB0cmlnZ2VyQnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoYW5nZVNsaWRlID0gZnVuY3Rpb24oZXZlbnQsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgYSBsaW5rLCBwcmV2ZW50IGRlZmF1bHQgYWN0aW9uLlxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0YXJnZXQgaXMgbm90IHRoZSA8bGk+IGVsZW1lbnQgKGllOiBhIGNoaWxkKSwgZmluZCB0aGUgPGxpPi5cbiAgICAgICAgaWYoISR0YXJnZXQuaXMoJ2xpJykpIHtcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XG4gICAgICAgIH1cblxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcbiAgICAgICAgaW5kZXhPZmZzZXQgPSB1bmV2ZW5PZmZzZXQgPyAwIDogKF8uc2xpZGVDb3VudCAtIF8uY3VycmVudFNsaWRlKSAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xuXG4gICAgICAgICAgICBjYXNlICdwcmV2aW91cyc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmN1cnJlbnRTbGlkZSAtIHNsaWRlT2Zmc2V0LCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdpbmRleCc6XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGF0YS5pbmRleCA9PT0gMCA/IDAgOlxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY2hlY2tOYXZpZ2FibGUoaW5kZXgpLCBmYWxzZSwgZG9udEFuaW1hdGUpO1xuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcblxuICAgICAgICBuYXZpZ2FibGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCk7XG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xuICAgICAgICBpZiAoaW5kZXggPiBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgIGluZGV4ID0gbmF2aWdhYmxlc1tuYXZpZ2FibGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgbiBpbiBuYXZpZ2FibGVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbmF2aWdhYmxlc1tuXSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzICYmIF8uJGRvdHMgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJGRvdHMub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdjbGljay5zbGljaycsIF8uY2xpY2tIYW5kbGVyKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xuXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRsaXN0Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ucmVzaXplKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9mZignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGVhblVwUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG9yaWdpbmFsU2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jbGlja0hhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5zaG91bGRDbGljayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbihyZWZyZXNoKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICBfLmNsZWFuVXBFdmVudHMoKTtcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5kZXRhY2goKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXG4gICAgICAgICAgICAgICAgLmNzcygnZGlzcGxheScsJycpO1xuXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kbmV4dEFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuJylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1zbGljay1pbmRleCcpXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJGxpc3QuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5hcHBlbmQoXy4kc2xpZGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uY2xlYW5VcFJvd3MoKTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stZG90dGVkJyk7XG5cbiAgICAgICAgXy51bnNsaWNrZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZGVzdHJveScsIFtfXSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcblxuICAgICAgICB0cmFuc2l0aW9uW18udHJhbnNpdGlvblR5cGVdID0gJyc7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uYXBwbHlUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGZpbHRlciAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5vZmYoJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snKVxuICAgICAgICAgICAgLm9uKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJywgJyonLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5wYXVzZU9uRm9jdXMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uZm9jdXNzZWQgPSAkc2YuaXMoJzpmb2N1cycpO1xuICAgICAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCAwKTtcblxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldEN1cnJlbnQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tDdXJyZW50U2xpZGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBfLmN1cnJlbnRTbGlkZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0RG90Q291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHZhciBwYWdlclF0eSA9IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VyUXR5ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2UgaWYoIV8ub3B0aW9ucy5hc05hdkZvcikge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVpZ2h0LFxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxuICAgICAgICAgICAgdGFyZ2V0U2xpZGUsXG4gICAgICAgICAgICBjb2VmO1xuXG4gICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICB2ZXJ0aWNhbEhlaWdodCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IChfLnNsaWRlV2lkdGggKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xuICAgICAgICAgICAgICAgIGNvZWYgPSAtMVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0xLjU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29lZiA9IC0yXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAodmVydGljYWxIZWlnaHQgKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIGNvZWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPiBfLnNsaWRlQ291bnQgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCA+IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICgoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC0gXy5zbGlkZUNvdW50KSAqIHZlcnRpY2FsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkgLyAyKSAtICgoXy5zbGlkZVdpZHRoICogXy5zbGlkZUNvdW50KSAvIDIpO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSAtIF8uc2xpZGVXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiBfLnNsaWRlV2lkdGgpICogLTEpICsgXy5zbGlkZU9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiB2ZXJ0aWNhbEhlaWdodCkgKiAtMSkgKyB2ZXJ0aWNhbE9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgfHwgXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykuZXEoc2xpZGVJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRTbGlkZVswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLiRzbGlkZVRyYWNrLndpZHRoKCkgLSB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0IC0gdGFyZ2V0U2xpZGUud2lkdGgoKSkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSB0YXJnZXRTbGlkZVswXSA/IHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgKiAtMSA6IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCArPSAoXy4kbGlzdC53aWR0aCgpIC0gdGFyZ2V0U2xpZGUub3V0ZXJXaWR0aCgpKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0TGVmdDtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBfLm9wdGlvbnNbb3B0aW9uXTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TmF2aWdhYmxlSW5kZXhlcyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSAwLFxuICAgICAgICAgICAgY291bnRlciA9IDAsXG4gICAgICAgICAgICBpbmRleGVzID0gW10sXG4gICAgICAgICAgICBtYXg7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIGNvdW50ZXIgPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgKiAtMTtcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudCAqIDI7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGJyZWFrUG9pbnQpO1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgc2xpZGVzVHJhdmVyc2VkLCBzd2lwZWRTbGlkZSwgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlID8gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlLm9mZnNldExlZnQgLSBjZW50ZXJPZmZzZXQgKyAoJChzbGlkZSkub3V0ZXJXaWR0aCgpIC8gMikgPiAoXy5zd2lwZUxlZnQgKiAtMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVkU2xpZGUgPSBzbGlkZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQgPSBNYXRoLmFicygkKHN3aXBlZFNsaWRlKS5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykgLSBfLmN1cnJlbnRTbGlkZSkgfHwgMTtcblxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nb1RvID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR29UbyA9IGZ1bmN0aW9uKHNsaWRlLCBkb250QW5pbWF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnLFxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChzbGlkZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZG9udEFuaW1hdGUpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY3JlYXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCEkKF8uJHNsaWRlcikuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcblxuICAgICAgICAgICAgJChfLiRzbGlkZXIpLmFkZENsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xuXG4gICAgICAgICAgICBfLmJ1aWxkUm93cygpO1xuICAgICAgICAgICAgXy5idWlsZE91dCgpO1xuICAgICAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICAgICAgXy5zdGFydExvYWQoKTtcbiAgICAgICAgICAgIF8ubG9hZFNsaWRlcigpO1xuICAgICAgICAgICAgXy5pbml0aWFsaXplRXZlbnRzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSh0cnVlKTtcbiAgICAgICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjcmVhdGlvbikge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2luaXQnLCBbX10pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLmluaXRBREEoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFEQSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgbnVtRG90R3JvdXBzID0gTWF0aC5jZWlsKF8uc2xpZGVDb3VudCAvIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpLFxuICAgICAgICAgICAgICAgIHRhYkNvbnRyb2xJbmRleGVzID0gXy5nZXROYXZpZ2FibGVJbmRleGVzKCkuZmlsdGVyKGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCA+PSAwKSAmJiAodmFsIDwgXy5zbGlkZUNvdW50KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXMuYWRkKF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICd0cnVlJyxcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGVDb250cm9sSW5kZXggPSB0YWJDb250cm9sSW5kZXhlcy5pbmRleE9mKGkpO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAndGFicGFuZWwnLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIGksXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgdmFyIGFyaWFCdXR0b25Db250cm9sID0gJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIHNsaWRlQ29udHJvbEluZGV4XG4gICAgICAgICAgICAgICAgICAgaWYgKCQoJyMnICsgYXJpYUJ1dHRvbkNvbnRyb2wpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kZXNjcmliZWRieSc6IGFyaWFCdXR0b25Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuYXR0cigncm9sZScsICd0YWJsaXN0JykuZmluZCgnbGknKS5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkU2xpZGVJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzW2ldO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5maXJzdCgpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWInLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogKGkgKyAxKSArICcgb2YgJyArIG51bURvdEdyb3VwcyxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtc2VsZWN0ZWQnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pLmVxKF8uY3VycmVudFNsaWRlKS5maW5kKCdidXR0b24nKS5hdHRyKHtcbiAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgICAgIH0pLmVuZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaT1fLmN1cnJlbnRTbGlkZSwgbWF4PWkrXy5vcHRpb25zLnNsaWRlc1RvU2hvdzsgaSA8IG1heDsgaSsrKSB7XG4gICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoaSkuYXR0cih7J3RhYmluZGV4JzogJzAnfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8uYWN0aXZhdGVBREEoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdEFycm93RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcbiAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgXy4kbmV4dEFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0RG90RXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnaW5kZXgnXG4gICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5vcHRpb25zLnBhdXNlT25Eb3RzSG92ZXIgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRTbGlkZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5wYXVzZU9uSG92ZXIgKSB7XG5cbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRpYWxpemVFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcblxuICAgICAgICBfLmluaXREb3RFdmVudHMoKTtcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcblxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNobW92ZS5zbGljayBtb3VzZW1vdmUuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoZW5kLnNsaWNrIG1vdXNldXAuc2xpY2snLCB7XG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKF8udmlzaWJpbGl0eUNoYW5nZSwgJC5wcm94eShfLnZpc2liaWxpdHksIF8pKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xuXG4gICAgICAgICQod2luZG93KS5vbigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCAkLnByb3h5KF8ucmVzaXplLCBfKSk7XG5cbiAgICAgICAgJCgnW2RyYWdnYWJsZSE9dHJ1ZV0nLCBfLiRzbGlkZVRyYWNrKS5vbignZHJhZ3N0YXJ0JywgXy5wcmV2ZW50RGVmYXVsdCk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcbiAgICAgICAgJChfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFVJID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnNob3coKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICAgLy9Eb250IHNsaWRlIGlmIHRoZSBjdXJzb3IgaXMgaW5zaWRlIHRoZSBmb3JtIGZpZWxkcyBhbmQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZFxuICAgICAgICBpZighZXZlbnQudGFyZ2V0LnRhZ05hbWUubWF0Y2goJ1RFWFRBUkVBfElOUFVUfFNFTEVDVCcpKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmxhenlMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgbG9hZFJhbmdlLCBjbG9uZVJhbmdlLCByYW5nZVN0YXJ0LCByYW5nZUVuZDtcblxuICAgICAgICBmdW5jdGlvbiBsb2FkSW1hZ2VzKGltYWdlc1Njb3BlKSB7XG5cbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2UgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNyY3NldCcpLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNpemVzICA9ICQodGhpcykuYXR0cignZGF0YS1zaXplcycpIHx8IF8uJHNsaWRlci5hdHRyKCdkYXRhLXNpemVzJyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAwIH0sIDEwMCwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoeyBvcGFjaXR5OiAxIH0sIDIwMCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5zcmMgPSBpbWFnZVNvdXJjZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xuICAgICAgICAgICAgICAgIHJhbmdlRW5kID0gcmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSAyICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSkgKyBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgXy5jdXJyZW50U2xpZGUgOiBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgIHJhbmdlRW5kID0gTWF0aC5jZWlsKHJhbmdlU3RhcnQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZVN0YXJ0ID4gMCkgcmFuZ2VTdGFydC0tO1xuICAgICAgICAgICAgICAgIGlmIChyYW5nZUVuZCA8PSBfLnNsaWRlQ291bnQpIHJhbmdlRW5kKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSByYW5nZUVuZCxcbiAgICAgICAgICAgICAgICAkc2xpZGVzID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZXZTbGlkZSA8IDApIHByZXZTbGlkZSA9IF8uc2xpZGVDb3VudCAtIDE7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xuICAgICAgICAgICAgICAgIGxvYWRSYW5nZSA9IGxvYWRSYW5nZS5hZGQoJHNsaWRlcy5lcShuZXh0U2xpZGUpKTtcbiAgICAgICAgICAgICAgICBwcmV2U2xpZGUtLTtcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRJbWFnZXMobG9hZFJhbmdlKTtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKDAsIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAqIC0xKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubG9hZFNsaWRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jc3Moe1xuICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9KTtcblxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICBfLmluaXRVSSgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdwcm9ncmVzc2l2ZScpIHtcbiAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLm5leHQgPSBTbGljay5wcm90b3R5cGUuc2xpY2tOZXh0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICduZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUub3JpZW50YXRpb25DaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wYXVzZSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BhdXNlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXlDbGVhcigpO1xuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBsYXkgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQbGF5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcbiAgICAgICAgXy5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBvc3RTbGlkZSA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmKCAhXy51bnNsaWNrZWQgKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhZnRlckNoYW5nZScsIFtfLCBpbmRleF0pO1xuXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkY3VycmVudFNsaWRlID0gJChfLiRzbGlkZXMuZ2V0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50U2xpZGUuYXR0cigndGFiaW5kZXgnLCAwKS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXYgPSBTbGljay5wcm90b3R5cGUuc2xpY2tQcmV2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5wcm9ncmVzc2l2ZUxhenlMb2FkID0gZnVuY3Rpb24oIHRyeUNvdW50ICkge1xuXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxuICAgICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgICBpbWFnZVNvdXJjZSxcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxuICAgICAgICAgICAgaW1hZ2VTaXplcyxcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkO1xuXG4gICAgICAgIGlmICggJGltZ3NUb0xvYWQubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XG4gICAgICAgICAgICBpbWFnZVNvdXJjZSA9IGltYWdlLmF0dHIoJ2RhdGEtbGF6eScpO1xuICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSBpbWFnZS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGltYWdlU3JjU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgaW1hZ2VTcmNTZXQgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc2l6ZXMnLCBpbWFnZVNpemVzICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAuYXR0ciggJ3NyYycsIGltYWdlU291cmNlIClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG4gICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGlmICggdHJ5Q291bnQgPCAzICkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAgICAgKiB0cnkgdG8gbG9hZCB0aGUgaW1hZ2UgMyB0aW1lcyxcbiAgICAgICAgICAgICAgICAgICAgICogbGVhdmUgYSBzbGlnaHQgZGVsYXkgc28gd2UgZG9uJ3QgZ2V0XG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCApO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyggJ3NsaWNrLWxvYWRpbmcnIClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcyggJ3NsaWNrLWxhenlsb2FkLWVycm9yJyApO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZEVycm9yJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdhbGxJbWFnZXNMb2FkZWQnLCBbIF8gXSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWZyZXNoID0gZnVuY3Rpb24oIGluaXRpYWxpemluZyApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcblxuICAgICAgICBsYXN0VmlzaWJsZUluZGV4ID0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcblxuICAgICAgICAvLyBpbiBub24taW5maW5pdGUgc2xpZGVycywgd2UgZG9uJ3Qgd2FudCB0byBnbyBwYXN0IHRoZVxuICAgICAgICAvLyBsYXN0IHZpc2libGUgaW5kZXguXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gbGFzdFZpc2libGVJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIGxlc3Mgc2xpZGVzIHRoYW4gdG8gc2hvdywgZ28gdG8gc3RhcnQuXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcblxuICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzLCB7IGN1cnJlbnRTbGlkZTogY3VycmVudFNsaWRlIH0pO1xuXG4gICAgICAgIF8uaW5pdCgpO1xuXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBjdXJyZW50U2xpZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWdpc3RlckJyZWFrcG9pbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmVTZXR0aW5ncyA9IF8ub3B0aW9ucy5yZXNwb25zaXZlIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLnJlc3BvbmRUbyA9IF8ub3B0aW9ucy5yZXNwb25kVG8gfHwgJ3dpbmRvdyc7XG5cbiAgICAgICAgICAgIGZvciAoIGJyZWFrcG9pbnQgaW4gcmVzcG9uc2l2ZVNldHRpbmdzICkge1xuXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2l2ZVNldHRpbmdzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBicmVha3BvaW50cyBhbmQgY3V0IG91dCBhbnkgZXhpc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8uYnJlYWtwb2ludHNbbF0gJiYgXy5icmVha3BvaW50c1tsXSA9PT0gY3VycmVudEJyZWFrcG9pbnQgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludHMucHVzaChjdXJyZW50QnJlYWtwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoIF8ub3B0aW9ucy5tb2JpbGVGaXJzdCApID8gYS1iIDogYi1hO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZWluaXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2tcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oXy5vcHRpb25zLnNsaWRlKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgJiYgXy5jdXJyZW50U2xpZGUgIT09IDApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuXG4gICAgICAgIF8uc2V0UHJvcHMoKTtcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcbiAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcbiAgICAgICAgXy5idWlsZERvdHMoKTtcbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKGZhbHNlLCB0cnVlKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xuXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcbiAgICAgICAgXy5hdXRvUGxheSgpO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpICE9PSBfLndpbmRvd1dpZHRoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XG4gICAgICAgICAgICBfLndpbmRvd0RlbGF5ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XG4gICAgICAgICAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHsgXy5zZXRQb3NpdGlvbigpOyB9XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJlbW92ZUJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gcmVtb3ZlQmVmb3JlID09PSB0cnVlID8gLS1pbmRleCA6IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8IDEgfHwgaW5kZXggPCAwIHx8IGluZGV4ID4gXy5zbGlkZUNvdW50IC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAocmVtb3ZlQWxsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZXEoaW5kZXgpLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldENTUyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9LFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgeCA9IF8ucG9zaXRpb25Qcm9wID09ICdsZWZ0JyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XG5cbiAgICAgICAgcG9zaXRpb25Qcm9wc1tfLnBvc2l0aW9uUHJvcF0gPSBwb3NpdGlvbjtcblxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zaXRpb25Qcm9wcyA9IHt9O1xuICAgICAgICAgICAgaWYgKF8uY3NzVHJhbnNpdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoJzBweCAnICsgXy5vcHRpb25zLmNlbnRlclBhZGRpbmcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kbGlzdC5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmxpc3RXaWR0aCA9IF8uJGxpc3Qud2lkdGgoKTtcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcblxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zbGlkZVdpZHRoID0gTWF0aC5jZWlsKF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKE1hdGguY2VpbCgoXy5zbGlkZVdpZHRoICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoNTAwMCAqIF8uc2xpZGVDb3VudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGgpO1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5oZWlnaHQoTWF0aC5jZWlsKChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvZmZzZXQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlcldpZHRoKHRydWUpIC0gXy4kc2xpZGVzLmZpcnN0KCkud2lkdGgoKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0RmFkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRhcmdldExlZnQ7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy5zbGlkZVdpZHRoICogaW5kZXgpICogLTE7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcbiAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPT09IDEgJiYgXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICAgICAgXy4kbGlzdC5jc3MoJ2hlaWdodCcsIHRhcmdldEhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cbiAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYWNjZXB0cyBhcmd1bWVudHMgaW4gZm9ybWF0IG9mOlxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgY2hhbmdpbmcgYSBzaW5nbGUgb3B0aW9uJ3MgdmFsdWU6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNldCBvZiByZXNwb25zaXZlIG9wdGlvbnM6XG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgJ3Jlc3BvbnNpdmUnLCBbe30sIC4uLl0sIHJlZnJlc2ggKVxuICAgICAgICAgKlxuICAgICAgICAgKiAgLSBmb3IgdXBkYXRpbmcgbXVsdGlwbGUgdmFsdWVzIGF0IG9uY2UgKG5vdCByZXNwb25zaXZlKVxuICAgICAgICAgKiAgICAgLnNsaWNrKFwic2V0T3B0aW9uXCIsIHsgJ29wdGlvbic6IHZhbHVlLCAuLi4gfSwgcmVmcmVzaCApXG4gICAgICAgICAqL1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgbCwgaXRlbSwgb3B0aW9uLCB2YWx1ZSwgcmVmcmVzaCA9IGZhbHNlLCB0eXBlO1xuXG4gICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHJlZnJlc2ggPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICB0eXBlID0gJ211bHRpcGxlJztcblxuICAgICAgICB9IGVsc2UgaWYgKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnc3RyaW5nJyApIHtcblxuICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcbiAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcblxuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHNbMF0gPT09ICdyZXNwb25zaXZlJyAmJiAkLnR5cGUoIGFyZ3VtZW50c1sxXSApID09PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgdHlwZSA9ICdyZXNwb25zaXZlJztcblxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3NpbmdsZSc7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0eXBlID09PSAnc2luZ2xlJyApIHtcblxuICAgICAgICAgICAgXy5vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcblxuXG4gICAgICAgIH0gZWxzZSBpZiAoIHR5cGUgPT09ICdtdWx0aXBsZScgKSB7XG5cbiAgICAgICAgICAgICQuZWFjaCggb3B0aW9uICwgZnVuY3Rpb24oIG9wdCwgdmFsICkge1xuXG4gICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xuXG4gICAgICAgICAgICBmb3IgKCBpdGVtIGluIHZhbHVlICkge1xuXG4gICAgICAgICAgICAgICAgaWYoICQudHlwZSggXy5vcHRpb25zLnJlc3BvbnNpdmUgKSAhPT0gJ2FycmF5JyApIHtcblxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbCA9IF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aC0xO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy5yZXNwb25zaXZlW2xdLmJyZWFrcG9pbnQgPT09IHZhbHVlW2l0ZW1dLmJyZWFrcG9pbnQgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5zcGxpY2UobCwxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCByZWZyZXNoICkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0RGltZW5zaW9ucygpO1xuXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnNldEZhZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzZXRQb3NpdGlvbicsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcblxuICAgICAgICBfLnBvc2l0aW9uUHJvcCA9IF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSA/ICd0b3AnIDogJ2xlZnQnO1xuXG4gICAgICAgIGlmIChfLnBvc2l0aW9uUHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stdmVydGljYWwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuV2Via2l0VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUuTW96VHJhbnNpdGlvbiAhPT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudXNlQ1NTID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xuICAgICAgICAgICAgaWYgKCB0eXBlb2YgXy5vcHRpb25zLnpJbmRleCA9PT0gJ251bWJlcicgKSB7XG4gICAgICAgICAgICAgICAgaWYoIF8ub3B0aW9ucy56SW5kZXggPCAzICkge1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5U3R5bGUuT1RyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ09UcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ09UcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5Nb3pUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdNb3pUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnTW96VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUuTW96UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUud2Via2l0VHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnd2Via2l0VHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3dlYmtpdFRyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnbXNUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdtc1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5tc1RyYW5zZm9ybSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCAmJiBfLmFuaW1UeXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd0cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ3RyYW5zaXRpb24nO1xuICAgICAgICB9XG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcbiAgICB9O1xuXG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0U2xpZGVDbGFzc2VzID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQsIGFsbFNsaWRlcywgaW5kZXhPZmZzZXQsIHJlbWFpbmRlcjtcblxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcbiAgICAgICAgICAgIC5maW5kKCcuc2xpY2stc2xpZGUnKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY3VycmVudCcpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICB2YXIgZXZlbkNvZWYgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICUgMiA9PT0gMCA/IDEgOiAwO1xuXG4gICAgICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNlbnRlck9mZnNldCAmJiBpbmRleCA8PSAoXy5zbGlkZUNvdW50IC0gMSkgLSBjZW50ZXJPZmZzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXggLSBjZW50ZXJPZmZzZXQgKyBldmVuQ29lZiwgaW5kZXggKyBjZW50ZXJPZmZzZXQgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEgKyBldmVuQ29lZiwgaW5kZXhPZmZzZXQgKyBjZW50ZXJPZmZzZXQgKyAyKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gXy5zbGlkZUNvdW50IC0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgICAgIC5lcShpbmRleClcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkge1xuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCwgaW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFsbFNsaWRlcy5sZW5ndGggPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICByZW1haW5kZXIgPSBfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIGluZGV4T2Zmc2V0ID0gXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlID8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIGluZGV4IDogaW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgJiYgKF8uc2xpZGVDb3VudCAtIGluZGV4KSA8IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gcmVtYWluZGVyKSwgaW5kZXhPZmZzZXQgKyByZW1haW5kZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoaW5kZXhPZmZzZXQsIGluZGV4T2Zmc2V0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdvbmRlbWFuZCcgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XG4gICAgICAgICAgICBfLmxhenlMb2FkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldHVwSW5maW5pdGUgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBpLCBzbGlkZUluZGV4LCBpbmZpbml0ZUNvdW50O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5vcHRpb25zLmNlbnRlck1vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgIHNsaWRlSW5kZXggPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZUNvdW50ID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBfLnNsaWRlQ291bnQ7IGkgPiAoXy5zbGlkZUNvdW50IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQpOyBpIC09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGkgLSAxO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCAtIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcmVwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW5maW5pdGVDb3VudCAgKyBfLnNsaWRlQ291bnQ7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIHNsaWRlSW5kZXggKyBfLnNsaWRlQ291bnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXy4kc2xpZGVUcmFjaykuYWRkQ2xhc3MoJ3NsaWNrLWNsb25lZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1jbG9uZWQnKS5maW5kKCdbaWRdJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICcnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW50ZXJydXB0ID0gZnVuY3Rpb24oIHRvZ2dsZSApIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICF0b2dnbGUgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRvZ2dsZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2VsZWN0SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID1cbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5pcygnLnNsaWNrLXNsaWRlJykgP1xuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KSA6XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpLnBhcmVudHMoJy5zbGljay1zbGlkZScpO1xuXG4gICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KHRhcmdldEVsZW1lbnQuYXR0cignZGF0YS1zbGljay1pbmRleCcpKTtcblxuICAgICAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XG5cbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4LCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2xpZGVIYW5kbGVyID0gZnVuY3Rpb24oaW5kZXgsIHN5bmMsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxuICAgICAgICAgICAgXyA9IHRoaXMsIG5hdlRhcmdldDtcblxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcblxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUgJiYgXy5vcHRpb25zLndhaXRGb3JBbmltYXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3luYyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uYXNOYXZGb3IoaW5kZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGFyZ2V0U2xpZGUgPSBpbmRleDtcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XG4gICAgICAgIHNsaWRlTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XG5cbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlICYmIChpbmRleCA8IDAgfHwgaW5kZXggPiBfLmdldERvdENvdW50KCkgKiBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKSkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCAtIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgKyB0YXJnZXRTbGlkZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSB0YXJnZXRTbGlkZSAtIF8uc2xpZGVDb3VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5hbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xuXG4gICAgICAgIG9sZFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xuXG4gICAgICAgIF8uc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hc05hdkZvciApIHtcblxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcbiAgICAgICAgICAgIG5hdlRhcmdldCA9IG5hdlRhcmdldC5zbGljaygnZ2V0U2xpY2snKTtcblxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICAgICAgbmF2VGFyZ2V0LnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XG5cbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZShhbmltU2xpZGUsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLmFuaW1hdGVTbGlkZSh0YXJnZXRMZWZ0LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN0YXJ0TG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5oaWRlKCk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRkb3RzLmhpZGUoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRGlyZWN0aW9uID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XG5cbiAgICAgICAgeERpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCAtIF8udG91Y2hPYmplY3QuY3VyWDtcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcbiAgICAgICAgciA9IE1hdGguYXRhbjIoeURpc3QsIHhEaXN0KTtcblxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XG4gICAgICAgIGlmIChzd2lwZUFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgc3dpcGVBbmdsZSA9IDM2MCAtIE1hdGguYWJzKHN3aXBlQW5nbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDQ1KSAmJiAoc3dpcGVBbmdsZSA+PSAwKSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSAzNjApICYmIChzd2lwZUFuZ2xlID49IDMxNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPj0gMTM1KSAmJiAoc3dpcGVBbmdsZSA8PSAyMjUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnZG93bic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlRW5kID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZUNvdW50LFxuICAgICAgICAgICAgZGlyZWN0aW9uO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgXy5zd2lwaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKF8uc2Nyb2xsaW5nKSB7XG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICBfLnNob3VsZENsaWNrID0gKCBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gMTAgKSA/IGZhbHNlIDogdHJ1ZTtcblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuY3VyWCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPT09IHRydWUgKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZWRnZScsIFtfLCBfLnN3aXBlRGlyZWN0aW9uKCkgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPj0gXy50b3VjaE9iamVjdC5taW5Td2lwZSApIHtcblxuICAgICAgICAgICAgZGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCBkaXJlY3Rpb24gKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBjYXNlICdkb3duJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlICsgXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwJzpcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY2hlY2tOYXZpZ2FibGUoIF8uY3VycmVudFNsaWRlIC0gXy5nZXRTbGlkZUNvdW50KCkgKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnREaXJlY3Rpb24gPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcblxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCBkaXJlY3Rpb24gIT0gJ3ZlcnRpY2FsJyApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBzbGlkZUNvdW50ICk7XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzd2lwZScsIFtfLCBkaXJlY3Rpb24gXSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3RhcnRYICE9PSBfLnRvdWNoT2JqZWN0LmN1clggKSB7XG5cbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggXy5jdXJyZW50U2xpZGUgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICgoXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgfHwgKCdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiBfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IGZhbHNlICYmIGV2ZW50LnR5cGUuaW5kZXhPZignbW91c2UnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgPSBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcy5sZW5ndGggOiAxO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RXaWR0aCAvIF8ub3B0aW9uc1xuICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlID0gXy5saXN0SGVpZ2h0IC8gXy5vcHRpb25zXG4gICAgICAgICAgICAgICAgLnRvdWNoVGhyZXNob2xkO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLmFjdGlvbikge1xuXG4gICAgICAgICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZVN0YXJ0KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbW92ZSc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZU1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIF8uc3dpcGVFbmQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBlZGdlV2FzSGl0ID0gZmFsc2UsXG4gICAgICAgICAgICBjdXJMZWZ0LCBzd2lwZURpcmVjdGlvbiwgc3dpcGVMZW5ndGgsIHBvc2l0aW9uT2Zmc2V0LCB0b3VjaGVzLCB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgPyBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgOiBudWxsO1xuXG4gICAgICAgIGlmICghXy5kcmFnZ2luZyB8fCBfLnNjcm9sbGluZyB8fCB0b3VjaGVzICYmIHRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5jdXJZID0gdG91Y2hlcyAhPT0gdW5kZWZpbmVkID8gdG91Y2hlc1swXS5wYWdlWSA6IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJYIC0gXy50b3VjaE9iamVjdC5zdGFydFgsIDIpKSk7XG5cbiAgICAgICAgdmVydGljYWxTd2lwZUxlbmd0aCA9IE1hdGgucm91bmQoTWF0aC5zcXJ0KFxuICAgICAgICAgICAgTWF0aC5wb3coXy50b3VjaE9iamVjdC5jdXJZIC0gXy50b3VjaE9iamVjdC5zdGFydFksIDIpKSk7XG5cbiAgICAgICAgaWYgKCFfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nICYmICFfLnN3aXBpbmcgJiYgdmVydGljYWxTd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gdmVydGljYWxTd2lwZUxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN3aXBlRGlyZWN0aW9uID0gXy5zd2lwZURpcmVjdGlvbigpO1xuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIF8uc3dpcGluZyA9IHRydWU7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9zaXRpb25PZmZzZXQgPSAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAxIDogLTEpICogKF8udG91Y2hPYmplY3QuY3VyWCA+IF8udG91Y2hPYmplY3Quc3RhcnRYID8gMSA6IC0xKTtcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gXy50b3VjaE9iamVjdC5jdXJZID4gXy50b3VjaE9iamVjdC5zdGFydFkgPyAxIDogLTE7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aDtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKChfLmN1cnJlbnRTbGlkZSA9PT0gMCAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ3JpZ2h0JykgfHwgKF8uY3VycmVudFNsaWRlID49IF8uZ2V0RG90Q291bnQoKSAmJiBzd2lwZURpcmVjdGlvbiA9PT0gJ2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIHN3aXBlTGVuZ3RoID0gXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCAqIF8ub3B0aW9ucy5lZGdlRnJpY3Rpb247XG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyBzd2lwZUxlbmd0aCAqIHBvc2l0aW9uT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgKHN3aXBlTGVuZ3RoICogKF8uJGxpc3QuaGVpZ2h0KCkgLyBfLmxpc3RXaWR0aCkpICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgfHwgXy5vcHRpb25zLnRvdWNoTW92ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5zZXRDU1MoXy5zd2lwZUxlZnQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZVN0YXJ0ID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0b3VjaGVzO1xuXG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFkgPSBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tVbmZpbHRlciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kc2xpZGVzQ2FjaGUgIT09IG51bGwpIHtcblxuICAgICAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcblxuICAgICAgICAgICAgXy5yZWluaXQoKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICAkKCcuc2xpY2stY2xvbmVkJywgXy4kc2xpZGVyKS5yZW1vdmUoKTtcblxuICAgICAgICBpZiAoXy4kZG90cykge1xuICAgICAgICAgICAgXy4kZG90cy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRwcmV2QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay12aXNpYmxlIHNsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICAgICAgLmNzcygnd2lkdGgnLCAnJyk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVuc2xpY2sgPSBmdW5jdGlvbihmcm9tQnJlYWtwb2ludCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3Vuc2xpY2snLCBbXywgZnJvbUJyZWFrcG9pbnRdKTtcbiAgICAgICAgXy5kZXN0cm95KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnVwZGF0ZUFycm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldDtcblxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiZcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcbiAgICAgICAgICAgICFfLm9wdGlvbnMuaW5maW5pdGUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSAxICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLiRkb3RzXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuZW5kKCk7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgIC5lcShNYXRoLmZsb29yKF8uY3VycmVudFNsaWRlIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSlcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudmlzaWJpbGl0eSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcblxuICAgICAgICAgICAgaWYgKCBkb2N1bWVudFtfLmhpZGRlbl0gKSB7XG5cbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIG9wdCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbCA9IF8ubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIHJldDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHQgPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9wdCA9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgcmV0ID0gX1tpXS5zbGlja1tvcHRdLmFwcGx5KF9baV0uc2xpY2ssIGFyZ3MpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF87XG4gICAgfTtcblxufSkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKCcuYy1hY2NvcmRpb24tLWV4cGFuZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgJCgnLmMtYWNjb3JkaW9uX19idG4nKS5odG1sKCc8c3Bhbj48aSBjbGFzcz1cImZhcyBmYS1hbmdsZS1kb3VibGUtZG93biBmYS14c1wiPjwvaT48L3NwYW4+JylcbiAgJCgnLmMtYWNjb3JkaW9uX19ib2R5OnZpc2libGUnKS5zbGlkZVVwKClcbiAgaWYgKCEkKHRoaXMpLm5leHQoKS5pcygnOnZpc2libGUnKSkge1xuICAgICQodGhpcykubmV4dCgpLnNsaWRlRG93bigyMDApXG4gICAgJCh0aGlzKS5maW5kKCcuYy1hY2NvcmRpb25fX2J0bicpLmh0bWwoJzxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS11cCBmYS14c1wiPjwvaT48L3NwYW4+JylcbiAgfVxufSlcbiIsIi8vIG5wbSBpbnN0YWxsIGFvcyAtLXNhdmVcbmltcG9ydCBBT1MgZnJvbSAnYW9zJ1xuXG4vLyBZb3UgY2FuIGFsc28gcGFzcyBhbiBvcHRpb25hbCBzZXR0aW5ncyBvYmplY3Rcbi8vIGJlbG93IGxpc3RlZCBkZWZhdWx0IHNldHRpbmdzXG5BT1MuaW5pdCh7XG4gIC8vIEdsb2JhbCBzZXR0aW5nczpcbiAgZGlzYWJsZTogZmFsc2UsIC8vIGFjY2VwdHMgZm9sbG93aW5nIHZhbHVlczogJ3Bob25lJywgJ3RhYmxldCcsICdtb2JpbGUnLCBib29sZWFuLCBleHByZXNzaW9uIG9yIGZ1bmN0aW9uXG4gIHN0YXJ0RXZlbnQ6ICdET01Db250ZW50TG9hZGVkJywgLy8gbmFtZSBvZiB0aGUgZXZlbnQgZGlzcGF0Y2hlZCBvbiB0aGUgZG9jdW1lbnQsIHRoYXQgQU9TIHNob3VsZCBpbml0aWFsaXplIG9uXG4gIGluaXRDbGFzc05hbWU6ICdhb3MtaW5pdCcsIC8vIGNsYXNzIGFwcGxpZWQgYWZ0ZXIgaW5pdGlhbGl6YXRpb25cbiAgYW5pbWF0ZWRDbGFzc05hbWU6ICdhb3MtYW5pbWF0ZScsIC8vIGNsYXNzIGFwcGxpZWQgb24gYW5pbWF0aW9uXG4gIHVzZUNsYXNzTmFtZXM6IGZhbHNlLCAvLyBpZiB0cnVlLCB3aWxsIGFkZCBjb250ZW50IG9mIGBkYXRhLWFvc2AgYXMgY2xhc3NlcyBvbiBzY3JvbGxcbiAgZGlzYWJsZU11dGF0aW9uT2JzZXJ2ZXI6IGZhbHNlLCAvLyBkaXNhYmxlcyBhdXRvbWF0aWMgbXV0YXRpb25zJyBkZXRlY3Rpb25zIChhZHZhbmNlZClcbiAgZGVib3VuY2VEZWxheTogNTAsIC8vIHRoZSBkZWxheSBvbiBkZWJvdW5jZSB1c2VkIHdoaWxlIHJlc2l6aW5nIHdpbmRvdyAoYWR2YW5jZWQpXG4gIHRocm90dGxlRGVsYXk6IDk5LCAvLyB0aGUgZGVsYXkgb24gdGhyb3R0bGUgdXNlZCB3aGlsZSBzY3JvbGxpbmcgdGhlIHBhZ2UgKGFkdmFuY2VkKVxuXG4gIC8vIFNldHRpbmdzIHRoYXQgY2FuIGJlIG92ZXJyaWRkZW4gb24gcGVyLWVsZW1lbnQgYmFzaXMsIGJ5IGBkYXRhLWFvcy0qYCBhdHRyaWJ1dGVzOlxuICBvZmZzZXQ6IDEyMCwgLy8gb2Zmc2V0IChpbiBweCkgZnJvbSB0aGUgb3JpZ2luYWwgdHJpZ2dlciBwb2ludFxuICBkZWxheTogMCwgLy8gdmFsdWVzIGZyb20gMCB0byAzMDAwLCB3aXRoIHN0ZXAgNTBtc1xuICBkdXJhdGlvbjogNDAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXG4gIGVhc2luZzogJ2Vhc2UnLCAvLyBkZWZhdWx0IGVhc2luZyBmb3IgQU9TIGFuaW1hdGlvbnNcbiAgb25jZTogZmFsc2UsIC8vIHdoZXRoZXIgYW5pbWF0aW9uIHNob3VsZCBoYXBwZW4gb25seSBvbmNlIC0gd2hpbGUgc2Nyb2xsaW5nIGRvd25cbiAgbWlycm9yOiBmYWxzZSwgLy8gd2hldGhlciBlbGVtZW50cyBzaG91bGQgYW5pbWF0ZSBvdXQgd2hpbGUgc2Nyb2xsaW5nIHBhc3QgdGhlbVxuICBhbmNob3JQbGFjZW1lbnQ6ICd0b3AtYm90dG9tJyAvLyBkZWZpbmVzIHdoaWNoIHBvc2l0aW9uIG9mIHRoZSBlbGVtZW50IHJlZ2FyZGluZyB0byB3aW5kb3cgc2hvdWxkIHRyaWdnZXIgdGhlIGFuaW1hdGlvblxuXG59KVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlzT3BlbiA9IDBcbiAgJCgnLm9wZW5idG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlzT3BlbiA9PT0gMCkge1xuICAgICAgb3Blbk5hdigpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlTmF2KClcbiAgICB9XG4gIH0pXG4gICQoJy5jbG9zZWJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBjbG9zZU5hdigpXG4gIH0pXG5cbiAgZnVuY3Rpb24gb3Blbk5hdiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TmF2Jykuc3R5bGUud2lkdGggPSAnMTAwJSdcbiAgICBpc09wZW4gPSAxXG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZU5hdiAoKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TmF2Jykuc3R5bGUud2lkdGggPSAnMCUnXG4gICAgaXNPcGVuID0gMFxuICB9XG59KVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ21vdXNlZW50ZXInLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xuICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoJ29wZW4nKVxuICBjb25zb2xlLmxvZygnbW91c2UgZW50ZXInKVxufSkub24oJ21vdXNlbGVhdmUnLCAnLm1lbnUtaXRlbS1oYXMtY2hpbGRyZW4nLCAoZSkgPT4ge1xuICAkKGUuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ29wZW4nKVxufSlcblxuJCgnLmMtbmF2aWdhdGlvbicpLm9uKCdjbGljaycsICcubWVudSAubWVudS1idXR0b24nLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KClcbiAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICBsZXQgbWVudV9idXR0b24gPSAkKGUuY3VycmVudFRhcmdldClcbiAgbGV0IG1lbnVfbGluayA9IG1lbnVfYnV0dG9uLnBhcmVudCgpXG4gIGxldCBtZW51X2l0ZW0gPSBtZW51X2xpbmsucGFyZW50KClcbiAgaWYgKG1lbnVfaXRlbS5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgbWVudV9pdGVtLmFkZChtZW51X2l0ZW0uZmluZCgnLm1lbnUtaXRlbS5vcGVuJykpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICBtZW51X2xpbmsuYWRkKG1lbnVfaXRlbS5maW5kKCdhJykpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1oaWRlJykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gIH0gZWxzZSB7XG4gICAgbWVudV9pdGVtLnNpYmxpbmdzKCcub3BlbicpLmZpbmQoJz5hPi5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJylcbiAgICBtZW51X2l0ZW0uYWRkQ2xhc3MoJ29wZW4nKVxuICAgIG1lbnVfbGluay5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKVxuICAgIG1lbnVfYnV0dG9uLmZpbmQoJy5tZW51LWJ1dHRvbi1zaG93JykuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG4gIH1cbn0pXG5cbiQoZG9jdW1lbnQpLmNsaWNrKChlKSA9PiB7XG4gIGlmICgkKCcubWVudS1pdGVtLm9wZW4nKS5sZW5ndGgpIHtcbiAgICAkKCcubWVudSA+IC5tZW51LWl0ZW0ub3BlbiA+IGEgPiAubWVudS1idXR0b24nKS50cmlnZ2VyKCdjbGljaycpXG4gIH1cbn0pIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xuXG4vLyBTY3JvbGxzIHRvIGRpdiB3aXRoIGFuIGlkXG5jb25zdCBzcGVlZCA9IDEwMFxuXG4kKCcjYy1mcm9udC1wYWdlX193ZWxjb21lJylcbiAgLnVuYmluZCgnY2xpY2suc21vb3RoU2Nyb2xsJylcbiAgLmJpbmQoJ2NsaWNrLnNtb290aFNjcm9sbCcsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXRJZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykuc3BsaXQoJyMnKVsxXVxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZClcblxuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCh0YXJnZXRFbGVtZW50KS5vZmZzZXQoKS50b3AgfSwgc3BlZWQpXG4gICAgfVxuICB9KVxuIiwiXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgJCgnLmMtc2VhcmNoX19idG4nKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgJCgnLmMtaGVhZGVyLXNlYXJjaC1mb3JtJykudG9nZ2xlKClcbiAgfSlcbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJ1xuXG4kKCcuc2xpZGVyLWRvdHMnKS5zbGljayh7XG4gIGxhenlMb2FkOiAncHJvZ3Jlc3NpdmUnLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgZG90czogdHJ1ZSxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gIGZhZGU6IHRydWUsXG4gIHNwZWVkOiAzMDAwXG59KVxuXG4kKCcuYy1zbGlkZXItLWFycm93cy1pbnNpZGUnKS5zbGljayh7XG4gIGluZmluaXRlOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBmYWRlOiB0cnVlLFxuICBzcGVlZDogMTAwMCxcbiAgbmV4dEFycm93OiAnPGEgY2xhc3M9XCJzbGljay1uZXh0LWluc2lkZVwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9hPicsXG4gIHByZXZBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stcHJldi1pbnNpZGVcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYT4nXG59KVxuXG4kKCcuYy1zbGlkZXItLWFycm93cy1vdXRzaWRlJykuc2xpY2soe1xuICBpbmZpbml0ZTogdHJ1ZSxcbiAgYXJyb3dzOiB0cnVlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgZmFkZTogdHJ1ZSxcbiAgc3BlZWQ6IDEwMDAsXG4gIG5leHRBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0XCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9hPicsXG4gIHByZXZBcnJvdzogJzxhIGNsYXNzPVwic2xpY2stcHJldlwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9hPidcbn0pXG5cbiQoJy5jLXNsaWRlci0tb3ZlcmZsb3cnKS5zbGljayh7XG4gIGNlbnRlck1vZGU6IHRydWUsXG4gIGNlbnRlclBhZGRpbmc6ICc2MHB4JyxcbiAgc2xpZGVzVG9TaG93OiA0LFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgZG90czogZmFsc2UsXG4gIHJlc3BvbnNpdmU6IFtcbiAgICB7XG4gICAgICBicmVha3BvaW50OiAxMjAwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDk2MCxcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGNlbnRlclBhZGRpbmc6ICc2MHB4JyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyB7XG4gICAgLy8gICBicmVha3BvaW50OiA3NjgsXG4gICAgLy8gICBzZXR0aW5nczoge1xuICAgIC8vICAgICBhcnJvd3M6IGZhbHNlLFxuICAgIC8vICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIC8vICAgICBjZW50ZXJQYWRkaW5nOiAnNjBweCcsXG4gICAgLy8gICAgIHNsaWRlc1RvU2hvdzogMVxuICAgIC8vICAgfVxuICAgIC8vIH0sXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogNzAwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDFcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0pXG4gIC5vbignc2V0UG9zaXRpb24nLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrKSB7XG4gICAgc2xpY2suJHNsaWRlcy5jc3MoJ2hlaWdodCcsIHNsaWNrLiRzbGlkZVRyYWNrLmhlaWdodCgpICsgJ3B4Jylcbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hhbWJ1cmdlci1uYXYnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24nXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYW9zJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2xpZGVyJ1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvc2VhcmNoLWZvcm0nXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zY3JvbGwnXG5pbXBvcnQgJ2pxdWVyeS1jb25maXJtJ1xuLy8gaW1wb3J0IHdlYnBhY2tTdHJlYW0gZnJvbSAnd2VicGFjay1zdHJlYW0nXG5cbiQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgJCgnLmMtcG9zdF9fZ2FsbGVyeScpLnNsaWNrKHtcbiAgICBhcnJvd3M6IGZhbHNlLFxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlXG4gIH0pXG5cbiAgJCgnLm1vc3RfcmVjZW50X3dpZGdldCcpLnNsaWNrKClcbiAgaWYgKHdwLmN1c3RvbWl6ZSAmJiB3cC5jdXN0b21pemUuc2VsZWN0aXZlUmVmcmVzaCkge1xuICAgIHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoLmJpbmQoXG4gICAgICAncGFydGlhbC1jb250ZW50LXJlbmRlcmVkJyxcbiAgICAgIChwbGFjZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYWNlbWVudC5wYXJ0aWFsLndpZGdldElkUGFydHMgJiZcbiAgICAgICAgICBwbGFjZW1lbnQucGFydGlhbC53aWRnZXRJZFBhcnRzLmlkQmFzZSA9PT1cbiAgICAgICAgICAgICdfdGhlbWVuYW1lX21vc3RfcmVjZW50X3dpZGdldCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxhY2VtZW50LmNvbnRhaW5lci5maW5kKCcubW9zdF9yZWNlbnRfd2lkZ2V0Jykuc2xpY2soKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICB9XG59KVxuXG4kKGZ1bmN0aW9uICgkKSB7XG4gIHZhciBzaXRlTmF2aWdhdGlvbiA9ICQoJy5uYXZpZ2F0aW9uLW1haW4nKVxuXG4gIHNpdGVOYXZpZ2F0aW9uLmZpbmQoJ2EnKS5vbignZm9jdXMgYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAkKHRoaXMpLnBhcmVudHMoJ2xpJykudG9nZ2xlQ2xhc3MoJ2ZvY3VzJylcbiAgfSlcbn0pXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gIGlmICgkKCdib2R5JykuaGFzQ2xhc3MoJ2hvbWUnKSkge1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgJC5jb25maXJtKHtcbiAgICAgICAgdGl0bGU6ICdXb29Db21tZXJjZSBEZW1vIFN0b3JlIScsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICdUaGlzIGlzIGEgV29yZFByZXNzIGN1c3RvbSB0aGVtZSB1c2luZyB0aGUgV29vY29tbWVyY2UgcGx1Z2luIGZvciB0aGUgc3RvcmUgZmVhdHVyZXMuIENvbnRhY3QgUGF1bCBhdCA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGF1bGJyaWdodG9uLmNvbS9cIj5ZUCBEaWdpdGFsPC9hPiBpZiB5b3UgbGlrZSB3aGF0IHlvdSBzZWUgYW5kIGZvciBhIHF1b3RlIG9uIHlvdXIgbmV4dCB3ZWJzaXRlLicsXG4gICAgICAgIHVzZUJvb3RzdHJhcDogZmFsc2UsXG4gICAgICAgIGJveFdpZHRoOiAnNzUlJyxcbiAgICAgICAgYXV0b0Nsb3NlOiAnY2xvc2V8MTI4MDAwJ1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgJC5jb25maXJtKHtcbiAgICAgICAgdGl0bGU6ICdXb29Db21tZXJjZSBEZW1vIFN0b3JlIScsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICdUaGlzIGlzIGEgV29yZFByZXNzIGN1c3RvbSB0aGVtZSB1c2luZyB0aGUgV29vY29tbWVyY2UgcGx1Z2luIGZvciB0aGUgc3RvcmUgZmVhdHVyZXMuIENvbnRhY3QgUGF1bCBhdCA8YSBocmVmPVwiaHR0cHM6Ly93d3cucGF1bGJyaWdodG9uLmNvbS9cIj5ZUCBEaWdpdGFsPC9hPiBpZiB5b3UgbGlrZSB3aGF0IHlvdSBzZWUgYW5kIGZvciBhIHF1b3RlIG9uIHlvdXIgbmV4dCB3ZWJzaXRlLicsXG4gICAgICAgIHVzZUJvb3RzdHJhcDogZmFsc2UsXG4gICAgICAgIGJveFdpZHRoOiAnNTAlJyxcbiAgICAgICAgYXV0b0Nsb3NlOiAnY2xvc2V8MTI4MDAwJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG5cbi8vICQuY29uZmlybSh7XG4vLyAgIGJveFdpZHRoOiAnNzUlJyxcbi8vICAgdXNlQm9vdHN0cmFwOiBmYWxzZVxuLy8gfSlcblxuLy8gJC5jb25maXJtKHtcbi8vICAgYm94V2lkdGg6ICczMDBweCcsXG4vLyAgIHVzZUJvb3RzdHJhcDogZmFsc2Vcbi8vIH0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwic291cmNlUm9vdCI6IiJ9