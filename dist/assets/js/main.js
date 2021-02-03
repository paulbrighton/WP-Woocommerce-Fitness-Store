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
  if ($('body').hasClass('home') | $('body').hasClass('woocommerce-checkout')) {
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
        autoClose: 'close|10000'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Fvcy9kaXN0L2Fvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanF1ZXJ5LWNvbmZpcm0vZGlzdC9qcXVlcnktY29uZmlybS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvYW9zLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2hhbWJ1cmdlci1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9zZWFyY2gtZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJlIiwidCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJvIiwibiIsImkiLCJpZCIsImxvYWRlZCIsImNhbGwiLCJtIiwiYyIsInAiLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwiYXNzaWduIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJyIiwiYSIsInUiLCJzIiwiZiIsImQiLCJsIiwiYiIsInYiLCJ5IiwiZyIsImgiLCJ3IiwiayIsIngiLCJvZmZzZXQiLCJkZWxheSIsImVhc2luZyIsImR1cmF0aW9uIiwiZGlzYWJsZSIsIm9uY2UiLCJzdGFydEV2ZW50IiwidGhyb3R0bGVEZWxheSIsImRlYm91bmNlRGVsYXkiLCJkaXNhYmxlTXV0YXRpb25PYnNlcnZlciIsImoiLCJPIiwiTSIsImZvckVhY2giLCJub2RlIiwicmVtb3ZlQXR0cmlidXRlIiwiUyIsIm1vYmlsZSIsInBob25lIiwidGFibGV0IiwiXyIsImRvY3VtZW50IiwiYWxsIiwid2luZG93IiwiYXRvYiIsImlzU3VwcG9ydGVkIiwiY29uc29sZSIsImluZm8iLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiaW5kZXhPZiIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVhZHkiLCJpbml0IiwicmVmcmVzaCIsInJlZnJlc2hIYXJkIiwiYXBwbHkiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiVHlwZUVycm9yIiwibGVhZGluZyIsIm1heFdhaXQiLCJ0cmFpbGluZyIsImNhbmNlbCIsImZsdXNoIiwidmFsdWVPZiIsInJlcGxhY2UiLCJ0ZXN0Iiwic2xpY2UiLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwiTmFOIiwicGFyc2VJbnQiLCJzZWxmIiwiRnVuY3Rpb24iLCJ0b1N0cmluZyIsIk1hdGgiLCJtYXgiLCJtaW4iLCJEYXRlIiwibm93IiwiZGF0YXNldCIsImFvcyIsImNoaWxkcmVuIiwiTXV0YXRpb25PYnNlcnZlciIsIldlYktpdE11dGF0aW9uT2JzZXJ2ZXIiLCJNb3pNdXRhdGlvbk9ic2VydmVyIiwib2JzZXJ2ZSIsImRvY3VtZW50RWxlbWVudCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJyZW1vdmVkTm9kZXMiLCJBcnJheSIsImFkZGVkTm9kZXMiLCJjb25jYXQiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidmVuZG9yIiwib3BlcmEiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJrZXkiLCJzdWJzdHIiLCJnZXRBdHRyaWJ1dGUiLCJwb3NpdGlvbiIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInBhZ2VZT2Zmc2V0IiwiaW5uZXJIZWlnaHQiLCJhbmNob3IiLCJhbmNob3JQbGFjZW1lbnQiLCJpc05hTiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b3AiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0VG9wIiwidGFnTmFtZSIsInNjcm9sbExlZnQiLCJzY3JvbGxUb3AiLCJvZmZzZXRQYXJlbnQiLCJsZWZ0IiwibWFwIiwiZmFjdG9yeSIsIiQiLCJmbiIsImNvbmZpcm0iLCJvcHRpb25zIiwib3B0aW9uMiIsImNvbnRlbnQiLCJ0aXRsZSIsImVhY2giLCIkdGhpcyIsImF0dHIiLCJ3YXJuIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImpjT3B0aW9uIiwiZXh0ZW5kIiwiYnV0dG9ucyIsImtleXMiLCJqY29uZmlybSIsInBsdWdpbkRlZmF1bHRzIiwiZGVmYXVsdEJ1dHRvbnMiLCJkZWZhdWx0cyIsImZpcnN0QnRuIiwiYWN0aW9uIiwibG9jYXRpb24iLCJocmVmIiwiY2xvc2VJY29uIiwiaW5zdGFuY2UiLCJwdXREZWZhdWx0QnV0dG9ucyIsImFsZXJ0IiwiZGlhbG9nIiwiY29uZmlybUtleXMiLCJwbHVnaW5PcHRpb25zIiwiSmNvbmZpcm0iLCJpbnN0YW5jZXMiLCJwdXNoIiwiX2luaXQiLCJ0aGF0IiwibGFzdEZvY3VzZWQiLCJmaW5kIiwiX2lkIiwicm91bmQiLCJyYW5kb20iLCJjb250ZW50UGFyc2VkIiwiY3JlYXRlRWxlbWVudCIsImxhenlPcGVuIiwib3BlbiIsIl9idWlsZEhUTUwiLCJfcGFyc2VBbmltYXRpb24iLCJhbmltYXRpb24iLCJjbG9zZUFuaW1hdGlvbiIsIl9wYXJzZUJnRGlzbWlzc0FuaW1hdGlvbiIsImJhY2tncm91bmREaXNtaXNzQW5pbWF0aW9uIiwiX3BhcnNlQ29sdW1uQ2xhc3MiLCJjb2x1bW5DbGFzcyIsIl9wYXJzZVRoZW1lIiwidGhlbWUiLCJfcGFyc2VUeXBlIiwidHlwZSIsInRlbXBsYXRlIiwiYWRkQ2xhc3MiLCJhbmltYXRpb25QYXJzZWQiLCJiYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvblBhcnNlZCIsInR5cGVQYXJzZWQiLCJ0eXBlQW5pbWF0ZWQiLCJ1c2VCb290c3RyYXAiLCJib290c3RyYXBDbGFzc2VzIiwicm93IiwiY29sdW1uQ2xhc3NQYXJzZWQiLCJjb250YWluZXJGbHVpZCIsImNvbnRhaW5lciIsImNzcyIsImJveFdpZHRoIiwidGl0bGVDbGFzcyIsInRoZW1lUGFyc2VkIiwiYXJpYUxhYmVsIiwiYmdPcGFjaXR5IiwicnRsIiwiJGVsIiwiYXBwZW5kVG8iLCIkamNvbmZpcm1Cb3hDb250YWluZXIiLCIkamNvbmZpcm1Cb3giLCIkYm9keSIsIiRqY29uZmlybUJnIiwiJHRpdGxlIiwiJHRpdGxlQ29udGFpbmVyIiwiJGNvbnRlbnQiLCIkY29udGVudFBhbmUiLCIkaWNvbiIsIiRjbG9zZUljb24iLCIkaG9sZGVyIiwiJGJ0bmMiLCIkc2Nyb2xsUGFuZSIsInNldFN0YXJ0aW5nUG9pbnQiLCJfY29udGVudFJlYWR5IiwiRGVmZXJyZWQiLCJfbW9kYWxSZWFkeSIsIm9mZnNldEJvdHRvbSIsInNldFRpdGxlIiwic2V0SWNvbiIsIl9zZXRCdXR0b25zIiwiX3BhcnNlQ29udGVudCIsImluaXREcmFnZ2FibGUiLCJpc0FqYXgiLCJzaG93TG9hZGluZyIsIndoZW4iLCJ0aGVuIiwiaXNBamF4TG9hZGluZyIsInNldENvbnRlbnQiLCJoaWRlTG9hZGluZyIsIl91cGRhdGVDb250ZW50TWF4SGVpZ2h0Iiwib25Db250ZW50UmVhZHkiLCJhdXRvQ2xvc2UiLCJfc3RhcnRDb3VudERvd24iLCJfd2F0Y2hDb250ZW50IiwiYW5pbWF0aW9uU3BlZWQiLCJhbmltYXRpb25Cb3VuY2UiLCJfZ2V0Q1NTIiwiX3R5cGVQcmVmaXgiLCJzZXRUeXBlIiwib2xkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsIl90aGVtZVByZWZpeCIsInNldFRoZW1lIiwicHJldmlvdXMiLCJzcGxpdCIsInRyaW0iLCJqb2luIiwidG9Mb3dlckNhc2UiLCJfYmdEaXNtaXNzUHJlZml4IiwiYmdEaXNtaXNzQW5pbWF0aW9uIiwiY2xvc2VBbmltYXRpb25QYXJzZWQiLCJfYW5pbWF0aW9uUHJlZml4Iiwic2V0QW5pbWF0aW9uIiwid2hpY2giLCJhbmltYXRpb25zIiwiYV9zdHJpbmciLCJzZXRDbG9zZUFuaW1hdGlvbiIsInNldEFuaW1hdGlvblNwZWVkIiwic3BlZWQiLCJzZXRDb2x1bW5DbGFzcyIsImNvbENsYXNzIiwiaGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJzZXRCb3hXaWR0aCIsIndpZHRoIiwiJHQiLCJyZXNldERyYWciLCJkcmFnZ2FibGUiLCJtb3VzZVgiLCJjbGllbnRYIiwibW91c2VZIiwiY2xpZW50WSIsImlzRHJhZyIsIm1vdmluZ1giLCJpbml0aWFsWCIsIm1vdmluZ1kiLCJpbml0aWFsWSIsInNldERyYWciLCJhbGlnbk1pZGRsZSIsIm91dGVyV2lkdGgiLCJib3hIZWlnaHQiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImRyYWdVcGRhdGUiLCJkcmFnV2luZG93Qm9yZGVyIiwibGVmdERpc3RhbmNlIiwidG9wRGlzdGFuY2UiLCJkcmFnV2luZG93R2FwIiwiX3Njcm9sbFRvcCIsIkIiLCJib2R5IiwiRCIsImNsaWVudEhlaWdodCIsIl90aW1lciIsImNsZWFySW50ZXJ2YWwiLCJwcmV2Q29udGVudEhlaWdodCIsInNldEludGVydmFsIiwic21vb3RoQ29udGVudCIsImNvbnRlbnRIZWlnaHQiLCJ3aCIsInRvdGFsIiwid2F0Y2hJbnRlcnZhbCIsIl9vdmVyZmxvd0NsYXNzIiwiX2hpbGlnaHRBbmltYXRpbmciLCJoaWdobGlnaHQiLCJoaUxpZ2h0TW9kYWwiLCJwYXJzZUZsb2F0IiwiX2JpbmRFdmVudHMiLCJib3hDbGlja2VkIiwiY2xpY2siLCJidXR0b25OYW1lIiwic2hvdWxkQ2xvc2UiLCJzdHIiLCJiYWNrZ3JvdW5kRGlzbWlzcyIsImJ0blJlc3BvbnNlIiwiY2xvc2UiLCJpc0tleURvd24iLCJyZWFjdE9uS2V5IiwiX2N1YmljX2JlemllciIsImJvdW5jZSIsInRvdGFsX2J1dHRvbnMiLCJidXR0b24iLCJ0ZXh0IiwiYnRuQ2xhc3MiLCJpc0hpZGRlbiIsImlzRGlzYWJsZWQiLCJidXR0b25fZWxlbWVudCIsImh0bWwiLCJwcm9wIiwicmVzIiwib25BY3Rpb24iLCJfc3RvcENvdW50RG93biIsImVsIiwic2V0VGV4dCIsImNsYXNzTmFtZSIsImVuYWJsZSIsInNob3ciLCJoaWRlIiwiYXBwZW5kIiwiY2xvc2VJY29uQ2xhc3MiLCJjbG9zZUh0bWwiLCJzdHJpbmciLCJmb3JjZSIsInByb21pc2UiLCJlcnJvciIsInJlc3BvbnNlIiwidXBkYXRlVGl0bGVDb250YWluZXIiLCJpY29uQ2xhc3MiLCJpY29uIiwic2V0Q29udGVudFByZXBlbmQiLCJwcmVwZW5kIiwic2V0Q29udGVudEFwcGVuZCIsImZvY3VzIiwibG9hZGluZ1NwaW5uZXIiLCJkaXNhYmxlQnV0dG9ucyIsImVuYWJsZUJ1dHRvbnMiLCJhamF4UmVzcG9uc2UiLCJhbHdheXMiLCJkYXRhIiwic3RhdHVzIiwieGhyIiwicmVzb2x2ZSIsImNvbnRlbnRMb2FkZWQiLCJzdWJzdHJpbmciLCJnZXQiLCJkb25lIiwiYXV0b0Nsb3NlSW50ZXJ2YWwiLCIkY2QiLCJvcHQiLCJidXR0b25fa2V5IiwidGltZSIsInNlY29uZHMiLCJjZWlsIiwidHJpZ2dlciIsIl9nZXRLZXkiLCJpbml0aWFsIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiZXEiLCJpcyIsImtleUNoYXIiLCJlc2NhcGVLZXkiLCJidXR0b25LZXkiLCJzZXREaWFsb2dDZW50ZXIiLCJfdW53YXRjaENvbnRlbnQiLCJvbkNsb3NlUGF5bG9hZCIsIm9uQ2xvc2UiLCJ1bmJpbmQiLCJsb2FkZWRDbGFzcyIsImNsb3NlVGltZXIiLCJzcGxpY2UiLCJzY3JvbGxUb1ByZXZpb3VzRWxlbWVudCIsImNvbnRhaW5zIiwiJGxmIiwic2Nyb2xsVG9QcmV2aW91c0VsZW1lbnRBbmltYXRlIiwic3QiLCJvdCIsInNjcm9sbFRvIiwiYW5pbWF0ZSIsIm9uRGVzdHJveSIsImlzT3BlbiIsIl9vcGVuIiwiYW5pbWF0ZUZyb21FbGVtZW50IiwibGFzdENsaWNrZWQiLCJpVG9wIiwiaUxlZnQiLCJzb3VyY2VUb3AiLCJzb3VyY2VMZWZ0Iiwid3ciLCJ0YXJnZXRIIiwidGFyZ2V0VyIsImFicyIsIm9uT3BlbkJlZm9yZSIsIm9uT3BlbiIsImlzQ2xvc2VkIiwicGFyZW50IiwidG9nZ2xlIiwib2siLCJrZXlEb3duIiwiJHRhcmdldCIsInRhcmdldCIsInBhc3MiLCJjbG9zZXN0IiwiU2xpY2siLCJpbnN0YW5jZVVpZCIsImVsZW1lbnQiLCJzZXR0aW5ncyIsImRhdGFTZXR0aW5ncyIsImFjY2Vzc2liaWxpdHkiLCJhZGFwdGl2ZUhlaWdodCIsImFwcGVuZEFycm93cyIsImFwcGVuZERvdHMiLCJhcnJvd3MiLCJhc05hdkZvciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiY3NzRWFzZSIsImN1c3RvbVBhZ2luZyIsInNsaWRlciIsImRvdHMiLCJkb3RzQ2xhc3MiLCJlZGdlRnJpY3Rpb24iLCJmYWRlIiwiZm9jdXNPblNlbGVjdCIsImZvY3VzT25DaGFuZ2UiLCJpbmZpbml0ZSIsImluaXRpYWxTbGlkZSIsImxhenlMb2FkIiwibW9iaWxlRmlyc3QiLCJwYXVzZU9uSG92ZXIiLCJwYXVzZU9uRm9jdXMiLCJwYXVzZU9uRG90c0hvdmVyIiwicmVzcG9uZFRvIiwicmVzcG9uc2l2ZSIsInJvd3MiLCJzbGlkZSIsInNsaWRlc1BlclJvdyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3dpcGUiLCJzd2lwZVRvU2xpZGUiLCJ0b3VjaE1vdmUiLCJ0b3VjaFRocmVzaG9sZCIsInVzZUNTUyIsInVzZVRyYW5zZm9ybSIsInZhcmlhYmxlV2lkdGgiLCJ2ZXJ0aWNhbCIsInZlcnRpY2FsU3dpcGluZyIsIndhaXRGb3JBbmltYXRlIiwiekluZGV4IiwiaW5pdGlhbHMiLCJhbmltYXRpbmciLCJkcmFnZ2luZyIsImF1dG9QbGF5VGltZXIiLCJjdXJyZW50RGlyZWN0aW9uIiwiY3VycmVudExlZnQiLCJjdXJyZW50U2xpZGUiLCJkaXJlY3Rpb24iLCIkZG90cyIsImxpc3RXaWR0aCIsImxpc3RIZWlnaHQiLCJsb2FkSW5kZXgiLCIkbmV4dEFycm93IiwiJHByZXZBcnJvdyIsInNjcm9sbGluZyIsInNsaWRlQ291bnQiLCJzbGlkZVdpZHRoIiwiJHNsaWRlVHJhY2siLCIkc2xpZGVzIiwic2xpZGluZyIsInNsaWRlT2Zmc2V0Iiwic3dpcGVMZWZ0Iiwic3dpcGluZyIsIiRsaXN0IiwidG91Y2hPYmplY3QiLCJ0cmFuc2Zvcm1zRW5hYmxlZCIsInVuc2xpY2tlZCIsImFjdGl2ZUJyZWFrcG9pbnQiLCJhbmltVHlwZSIsImFuaW1Qcm9wIiwiYnJlYWtwb2ludHMiLCJicmVha3BvaW50U2V0dGluZ3MiLCJjc3NUcmFuc2l0aW9ucyIsImZvY3Vzc2VkIiwiaW50ZXJydXB0ZWQiLCJoaWRkZW4iLCJwYXVzZWQiLCJwb3NpdGlvblByb3AiLCJyb3dDb3VudCIsInNob3VsZENsaWNrIiwiJHNsaWRlciIsIiRzbGlkZXNDYWNoZSIsInRyYW5zZm9ybVR5cGUiLCJ0cmFuc2l0aW9uVHlwZSIsInZpc2liaWxpdHlDaGFuZ2UiLCJ3aW5kb3dUaW1lciIsIm9yaWdpbmFsU2V0dGluZ3MiLCJtb3pIaWRkZW4iLCJ3ZWJraXRIaWRkZW4iLCJhdXRvUGxheSIsInByb3h5IiwiYXV0b1BsYXlDbGVhciIsImF1dG9QbGF5SXRlcmF0b3IiLCJjaGFuZ2VTbGlkZSIsImNsaWNrSGFuZGxlciIsInNlbGVjdEhhbmRsZXIiLCJzZXRQb3NpdGlvbiIsInN3aXBlSGFuZGxlciIsImRyYWdIYW5kbGVyIiwia2V5SGFuZGxlciIsImh0bWxFeHByIiwicmVnaXN0ZXJCcmVha3BvaW50cyIsImFjdGl2YXRlQURBIiwiYWRkU2xpZGUiLCJzbGlja0FkZCIsIm1hcmt1cCIsImluZGV4IiwiYWRkQmVmb3JlIiwidW5sb2FkIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0QWZ0ZXIiLCJwcmVwZW5kVG8iLCJkZXRhY2giLCJyZWluaXQiLCJhbmltYXRlSGVpZ2h0IiwidGFyZ2V0SGVpZ2h0IiwiYW5pbWF0ZVNsaWRlIiwidGFyZ2V0TGVmdCIsImNhbGxiYWNrIiwiYW5pbVByb3BzIiwiYW5pbVN0YXJ0Iiwic3RlcCIsImNvbXBsZXRlIiwiYXBwbHlUcmFuc2l0aW9uIiwiZGlzYWJsZVRyYW5zaXRpb24iLCJnZXROYXZUYXJnZXQiLCJub3QiLCJzbGljayIsInNsaWRlSGFuZGxlciIsInRyYW5zaXRpb24iLCJzbGlkZVRvIiwiYnVpbGRBcnJvd3MiLCJyZW1vdmVBdHRyIiwiYnVpbGREb3RzIiwiZG90IiwiZ2V0RG90Q291bnQiLCJmaXJzdCIsImJ1aWxkT3V0Iiwid3JhcEFsbCIsIndyYXAiLCJzZXR1cEluZmluaXRlIiwidXBkYXRlRG90cyIsInNldFNsaWRlQ2xhc3NlcyIsImJ1aWxkUm93cyIsIm5ld1NsaWRlcyIsIm51bU9mU2xpZGVzIiwib3JpZ2luYWxTbGlkZXMiLCJzbGlkZXNQZXJTZWN0aW9uIiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImFwcGVuZENoaWxkIiwiZW1wdHkiLCJjaGVja1Jlc3BvbnNpdmUiLCJmb3JjZVVwZGF0ZSIsImJyZWFrcG9pbnQiLCJ0YXJnZXRCcmVha3BvaW50IiwicmVzcG9uZFRvV2lkdGgiLCJ0cmlnZ2VyQnJlYWtwb2ludCIsInNsaWRlcldpZHRoIiwiaW5uZXJXaWR0aCIsInVuc2xpY2siLCJldmVudCIsImRvbnRBbmltYXRlIiwiY3VycmVudFRhcmdldCIsImluZGV4T2Zmc2V0IiwidW5ldmVuT2Zmc2V0IiwibWVzc2FnZSIsImNoZWNrTmF2aWdhYmxlIiwibmF2aWdhYmxlcyIsInByZXZOYXZpZ2FibGUiLCJnZXROYXZpZ2FibGVJbmRleGVzIiwiY2xlYW5VcEV2ZW50cyIsIm9mZiIsImludGVycnVwdCIsInZpc2liaWxpdHkiLCJjbGVhblVwU2xpZGVFdmVudHMiLCJvcmllbnRhdGlvbkNoYW5nZSIsInJlc2l6ZSIsImNsZWFuVXBSb3dzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic3RvcFByb3BhZ2F0aW9uIiwiZGVzdHJveSIsImZhZGVTbGlkZSIsInNsaWRlSW5kZXgiLCJvcGFjaXR5IiwiZmFkZVNsaWRlT3V0IiwiZmlsdGVyU2xpZGVzIiwic2xpY2tGaWx0ZXIiLCJmaWx0ZXIiLCJmb2N1c0hhbmRsZXIiLCIkc2YiLCJnZXRDdXJyZW50Iiwic2xpY2tDdXJyZW50U2xpZGUiLCJicmVha1BvaW50IiwiY291bnRlciIsInBhZ2VyUXR5IiwiZ2V0TGVmdCIsInZlcnRpY2FsSGVpZ2h0IiwidmVydGljYWxPZmZzZXQiLCJ0YXJnZXRTbGlkZSIsImNvZWYiLCJmbG9vciIsImdldE9wdGlvbiIsInNsaWNrR2V0T3B0aW9uIiwib3B0aW9uIiwiaW5kZXhlcyIsImdldFNsaWNrIiwiZ2V0U2xpZGVDb3VudCIsInNsaWRlc1RyYXZlcnNlZCIsInN3aXBlZFNsaWRlIiwiY2VudGVyT2Zmc2V0IiwiZ29UbyIsInNsaWNrR29UbyIsImNyZWF0aW9uIiwiaGFzQ2xhc3MiLCJzZXRQcm9wcyIsInN0YXJ0TG9hZCIsImxvYWRTbGlkZXIiLCJpbml0aWFsaXplRXZlbnRzIiwidXBkYXRlQXJyb3dzIiwiaW5pdEFEQSIsIm51bURvdEdyb3VwcyIsInRhYkNvbnRyb2xJbmRleGVzIiwidmFsIiwic2xpZGVDb250cm9sSW5kZXgiLCJhcmlhQnV0dG9uQ29udHJvbCIsIm1hcHBlZFNsaWRlSW5kZXgiLCJlbmQiLCJpbml0QXJyb3dFdmVudHMiLCJpbml0RG90RXZlbnRzIiwiaW5pdFNsaWRlRXZlbnRzIiwiaW5pdFVJIiwibWF0Y2giLCJrZXlDb2RlIiwibG9hZFJhbmdlIiwiY2xvbmVSYW5nZSIsInJhbmdlU3RhcnQiLCJyYW5nZUVuZCIsImxvYWRJbWFnZXMiLCJpbWFnZXNTY29wZSIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJpbWFnZVNyY1NldCIsImltYWdlU2l6ZXMiLCJpbWFnZVRvTG9hZCIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJwcm9ncmVzc2l2ZUxhenlMb2FkIiwibmV4dCIsInNsaWNrTmV4dCIsInBhdXNlIiwic2xpY2tQYXVzZSIsInBsYXkiLCJzbGlja1BsYXkiLCJwb3N0U2xpZGUiLCIkY3VycmVudFNsaWRlIiwicHJldiIsInNsaWNrUHJldiIsInRyeUNvdW50IiwiJGltZ3NUb0xvYWQiLCJpbml0aWFsaXppbmciLCJsYXN0VmlzaWJsZUluZGV4IiwiY3VycmVudEJyZWFrcG9pbnQiLCJyZXNwb25zaXZlU2V0dGluZ3MiLCJzb3J0Iiwid2luZG93RGVsYXkiLCJyZW1vdmVTbGlkZSIsInNsaWNrUmVtb3ZlIiwicmVtb3ZlQmVmb3JlIiwicmVtb3ZlQWxsIiwic2V0Q1NTIiwicG9zaXRpb25Qcm9wcyIsInNldERpbWVuc2lvbnMiLCJwYWRkaW5nIiwic2V0RmFkZSIsInJpZ2h0Iiwic2V0SGVpZ2h0Iiwic2V0T3B0aW9uIiwic2xpY2tTZXRPcHRpb24iLCJpdGVtIiwiYm9keVN0eWxlIiwic3R5bGUiLCJXZWJraXRUcmFuc2l0aW9uIiwidW5kZWZpbmVkIiwiTW96VHJhbnNpdGlvbiIsIm1zVHJhbnNpdGlvbiIsIk9UcmFuc2Zvcm0iLCJwZXJzcGVjdGl2ZVByb3BlcnR5Iiwid2Via2l0UGVyc3BlY3RpdmUiLCJNb3pUcmFuc2Zvcm0iLCJNb3pQZXJzcGVjdGl2ZSIsIndlYmtpdFRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYWxsU2xpZGVzIiwicmVtYWluZGVyIiwiZXZlbkNvZWYiLCJpbmZpbml0ZUNvdW50IiwiY2xvbmUiLCJ0YXJnZXRFbGVtZW50IiwicGFyZW50cyIsInN5bmMiLCJhbmltU2xpZGUiLCJvbGRTbGlkZSIsInNsaWRlTGVmdCIsIm5hdlRhcmdldCIsInN3aXBlRGlyZWN0aW9uIiwieERpc3QiLCJ5RGlzdCIsInN3aXBlQW5nbGUiLCJzdGFydFgiLCJjdXJYIiwic3RhcnRZIiwiY3VyWSIsImF0YW4yIiwiUEkiLCJzd2lwZUVuZCIsInN3aXBlTGVuZ3RoIiwiZWRnZUhpdCIsIm1pblN3aXBlIiwiZmluZ2VyQ291bnQiLCJvcmlnaW5hbEV2ZW50IiwidG91Y2hlcyIsInN3aXBlU3RhcnQiLCJzd2lwZU1vdmUiLCJlZGdlV2FzSGl0IiwiY3VyTGVmdCIsInBvc2l0aW9uT2Zmc2V0IiwidmVydGljYWxTd2lwZUxlbmd0aCIsInBhZ2VYIiwicGFnZVkiLCJzcXJ0IiwicG93IiwidW5maWx0ZXJTbGlkZXMiLCJzbGlja1VuZmlsdGVyIiwiZnJvbUJyZWFrcG9pbnQiLCJhcmdzIiwicmV0Iiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJzbGlkZVVwIiwic2xpZGVEb3duIiwiQU9TIiwiaW5pdENsYXNzTmFtZSIsImFuaW1hdGVkQ2xhc3NOYW1lIiwidXNlQ2xhc3NOYW1lcyIsIm1pcnJvciIsIm9wZW5OYXYiLCJjbG9zZU5hdiIsImdldEVsZW1lbnRCeUlkIiwibG9nIiwibWVudV9idXR0b24iLCJtZW51X2xpbmsiLCJtZW51X2l0ZW0iLCJzaWJsaW5ncyIsImJpbmQiLCJ0YXJnZXRJZCIsIndwIiwiY3VzdG9taXplIiwic2VsZWN0aXZlUmVmcmVzaCIsInBsYWNlbWVudCIsInBhcnRpYWwiLCJ3aWRnZXRJZFBhcnRzIiwiaWRCYXNlIiwic2l0ZU5hdmlnYXRpb24iLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztR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ZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5BT1M9dCgpOmUuQU9TPXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG8pe2lmKG5bb10pcmV0dXJuIG5bb10uZXhwb3J0czt2YXIgaT1uW29dPXtleHBvcnRzOnt9LGlkOm8sbG9hZGVkOiExfTtyZXR1cm4gZVtvXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyx0KSxpLmxvYWRlZD0hMCxpLmV4cG9ydHN9dmFyIG49e307cmV0dXJuIHQubT1lLHQuYz1uLHQucD1cImRpc3QvXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxuKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBvKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX12YXIgaT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgbj1hcmd1bWVudHNbdF07Zm9yKHZhciBvIGluIG4pT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG4sbykmJihlW29dPW5bb10pfXJldHVybiBlfSxyPW4oMSksYT0obyhyKSxuKDYpKSx1PW8oYSksYz1uKDcpLHM9byhjKSxmPW4oOCksZD1vKGYpLGw9big5KSxwPW8obCksbT1uKDEwKSxiPW8obSksdj1uKDExKSx5PW8odiksZz1uKDE0KSxoPW8oZyksdz1bXSxrPSExLHg9e29mZnNldDoxMjAsZGVsYXk6MCxlYXNpbmc6XCJlYXNlXCIsZHVyYXRpb246NDAwLGRpc2FibGU6ITEsb25jZTohMSxzdGFydEV2ZW50OlwiRE9NQ29udGVudExvYWRlZFwiLHRocm90dGxlRGVsYXk6OTksZGVib3VuY2VEZWxheTo1MCxkaXNhYmxlTXV0YXRpb25PYnNlcnZlcjohMX0saj1mdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF07aWYoZSYmKGs9ITApLGspcmV0dXJuIHc9KDAseS5kZWZhdWx0KSh3LHgpLCgwLGIuZGVmYXVsdCkodyx4Lm9uY2UpLHd9LE89ZnVuY3Rpb24oKXt3PSgwLGguZGVmYXVsdCkoKSxqKCl9LE09ZnVuY3Rpb24oKXt3LmZvckVhY2goZnVuY3Rpb24oZSx0KXtlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3NcIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWVhc2luZ1wiKSxlLm5vZGUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hb3MtZHVyYXRpb25cIiksZS5ub2RlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtYW9zLWRlbGF5XCIpfSl9LFM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU9PT0hMHx8XCJtb2JpbGVcIj09PWUmJnAuZGVmYXVsdC5tb2JpbGUoKXx8XCJwaG9uZVwiPT09ZSYmcC5kZWZhdWx0LnBob25lKCl8fFwidGFibGV0XCI9PT1lJiZwLmRlZmF1bHQudGFibGV0KCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKT09PSEwfSxfPWZ1bmN0aW9uKGUpe3g9aSh4LGUpLHc9KDAsaC5kZWZhdWx0KSgpO3ZhciB0PWRvY3VtZW50LmFsbCYmIXdpbmRvdy5hdG9iO3JldHVybiBTKHguZGlzYWJsZSl8fHQ/TSgpOih4LmRpc2FibGVNdXRhdGlvbk9ic2VydmVyfHxkLmRlZmF1bHQuaXNTdXBwb3J0ZWQoKXx8KGNvbnNvbGUuaW5mbygnXFxuICAgICAgYW9zOiBNdXRhdGlvbk9ic2VydmVyIGlzIG5vdCBzdXBwb3J0ZWQgb24gdGhpcyBicm93c2VyLFxcbiAgICAgIGNvZGUgbXV0YXRpb25zIG9ic2VydmluZyBoYXMgYmVlbiBkaXNhYmxlZC5cXG4gICAgICBZb3UgbWF5IGhhdmUgdG8gY2FsbCBcInJlZnJlc2hIYXJkKClcIiBieSB5b3Vyc2VsZi5cXG4gICAgJykseC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcj0hMCksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZWFzaW5nXCIseC5lYXNpbmcpLGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtYW9zLWR1cmF0aW9uXCIseC5kdXJhdGlvbiksZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuc2V0QXR0cmlidXRlKFwiZGF0YS1hb3MtZGVsYXlcIix4LmRlbGF5KSxcIkRPTUNvbnRlbnRMb2FkZWRcIj09PXguc3RhcnRFdmVudCYmW1wiY29tcGxldGVcIixcImludGVyYWN0aXZlXCJdLmluZGV4T2YoZG9jdW1lbnQucmVhZHlTdGF0ZSk+LTE/aighMCk6XCJsb2FkXCI9PT14LnN0YXJ0RXZlbnQ/d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoeC5zdGFydEV2ZW50LGZ1bmN0aW9uKCl7aighMCl9KTpkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHguc3RhcnRFdmVudCxmdW5jdGlvbigpe2ooITApfSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwoMCxzLmRlZmF1bHQpKGoseC5kZWJvdW5jZURlbGF5LCEwKSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcmllbnRhdGlvbmNoYW5nZVwiLCgwLHMuZGVmYXVsdCkoaix4LmRlYm91bmNlRGVsYXksITApKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCgwLHUuZGVmYXVsdCkoZnVuY3Rpb24oKXsoMCxiLmRlZmF1bHQpKHcseC5vbmNlKX0seC50aHJvdHRsZURlbGF5KSkseC5kaXNhYmxlTXV0YXRpb25PYnNlcnZlcnx8ZC5kZWZhdWx0LnJlYWR5KFwiW2RhdGEtYW9zXVwiLE8pLHcpfTtlLmV4cG9ydHM9e2luaXQ6XyxyZWZyZXNoOmoscmVmcmVzaEhhcmQ6T319LGZ1bmN0aW9uKGUsdCl7fSwsLCwsZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbil7ZnVuY3Rpb24gbyh0KXt2YXIgbj1iLG89djtyZXR1cm4gYj12PXZvaWQgMCxrPXQsZz1lLmFwcGx5KG8sbil9ZnVuY3Rpb24gcihlKXtyZXR1cm4gaz1lLGg9c2V0VGltZW91dChmLHQpLE0/byhlKTpnfWZ1bmN0aW9uIGEoZSl7dmFyIG49ZS13LG89ZS1rLGk9dC1uO3JldHVybiBTP2ooaSx5LW8pOml9ZnVuY3Rpb24gYyhlKXt2YXIgbj1lLXcsbz1lLWs7cmV0dXJuIHZvaWQgMD09PXd8fG4+PXR8fG48MHx8UyYmbz49eX1mdW5jdGlvbiBmKCl7dmFyIGU9TygpO3JldHVybiBjKGUpP2QoZSk6dm9pZChoPXNldFRpbWVvdXQoZixhKGUpKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gaD12b2lkIDAsXyYmYj9vKGUpOihiPXY9dm9pZCAwLGcpfWZ1bmN0aW9uIGwoKXt2b2lkIDAhPT1oJiZjbGVhclRpbWVvdXQoaCksaz0wLGI9dz12PWg9dm9pZCAwfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdm9pZCAwPT09aD9nOmQoTygpKX1mdW5jdGlvbiBtKCl7dmFyIGU9TygpLG49YyhlKTtpZihiPWFyZ3VtZW50cyx2PXRoaXMsdz1lLG4pe2lmKHZvaWQgMD09PWgpcmV0dXJuIHIodyk7aWYoUylyZXR1cm4gaD1zZXRUaW1lb3V0KGYsdCksbyh3KX1yZXR1cm4gdm9pZCAwPT09aCYmKGg9c2V0VGltZW91dChmLHQpKSxnfXZhciBiLHYseSxnLGgsdyxrPTAsTT0hMSxTPSExLF89ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKHMpO3JldHVybiB0PXUodCl8fDAsaShuKSYmKE09ISFuLmxlYWRpbmcsUz1cIm1heFdhaXRcImluIG4seT1TP3godShuLm1heFdhaXQpfHwwLHQpOnksXz1cInRyYWlsaW5nXCJpbiBuPyEhbi50cmFpbGluZzpfKSxtLmNhbmNlbD1sLG0uZmx1c2g9cCxtfWZ1bmN0aW9uIG8oZSx0LG8pe3ZhciByPSEwLGE9ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKHMpO3JldHVybiBpKG8pJiYocj1cImxlYWRpbmdcImluIG8/ISFvLmxlYWRpbmc6cixhPVwidHJhaWxpbmdcImluIG8/ISFvLnRyYWlsaW5nOmEpLG4oZSx0LHtsZWFkaW5nOnIsbWF4V2FpdDp0LHRyYWlsaW5nOmF9KX1mdW5jdGlvbiBpKGUpe3ZhciB0PVwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6YyhlKTtyZXR1cm4hIWUmJihcIm9iamVjdFwiPT10fHxcImZ1bmN0aW9uXCI9PXQpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuISFlJiZcIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjpjKGUpKX1mdW5jdGlvbiBhKGUpe3JldHVyblwic3ltYm9sXCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOmMoZSkpfHxyKGUpJiZrLmNhbGwoZSk9PWR9ZnVuY3Rpb24gdShlKXtpZihcIm51bWJlclwiPT10eXBlb2YgZSlyZXR1cm4gZTtpZihhKGUpKXJldHVybiBmO2lmKGkoZSkpe3ZhciB0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGUudmFsdWVPZj9lLnZhbHVlT2YoKTplO2U9aSh0KT90K1wiXCI6dH1pZihcInN0cmluZ1wiIT10eXBlb2YgZSlyZXR1cm4gMD09PWU/ZTorZTtlPWUucmVwbGFjZShsLFwiXCIpO3ZhciBuPW0udGVzdChlKTtyZXR1cm4gbnx8Yi50ZXN0KGUpP3YoZS5zbGljZSgyKSxuPzI6OCk6cC50ZXN0KGUpP2Y6K2V9dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0scz1cIkV4cGVjdGVkIGEgZnVuY3Rpb25cIixmPU5hTixkPVwiW29iamVjdCBTeW1ib2xdXCIsbD0vXlxccyt8XFxzKyQvZyxwPS9eWy0rXTB4WzAtOWEtZl0rJC9pLG09L14wYlswMV0rJC9pLGI9L14wb1swLTddKyQvaSx2PXBhcnNlSW50LHk9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiB0P1widW5kZWZpbmVkXCI6Yyh0KSkmJnQmJnQuT2JqZWN0PT09T2JqZWN0JiZ0LGc9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6YyhzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLGg9eXx8Z3x8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLHc9T2JqZWN0LnByb3RvdHlwZSxrPXcudG9TdHJpbmcseD1NYXRoLm1heCxqPU1hdGgubWluLE89ZnVuY3Rpb24oKXtyZXR1cm4gaC5EYXRlLm5vdygpfTtlLmV4cG9ydHM9b30pLmNhbGwodCxmdW5jdGlvbigpe3JldHVybiB0aGlzfSgpKX0sZnVuY3Rpb24oZSx0KXsoZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsbil7ZnVuY3Rpb24gaSh0KXt2YXIgbj1iLG89djtyZXR1cm4gYj12PXZvaWQgMCxPPXQsZz1lLmFwcGx5KG8sbil9ZnVuY3Rpb24gcihlKXtyZXR1cm4gTz1lLGg9c2V0VGltZW91dChmLHQpLE0/aShlKTpnfWZ1bmN0aW9uIHUoZSl7dmFyIG49ZS13LG89ZS1PLGk9dC1uO3JldHVybiBTP3goaSx5LW8pOml9ZnVuY3Rpb24gcyhlKXt2YXIgbj1lLXcsbz1lLU87cmV0dXJuIHZvaWQgMD09PXd8fG4+PXR8fG48MHx8UyYmbz49eX1mdW5jdGlvbiBmKCl7dmFyIGU9aigpO3JldHVybiBzKGUpP2QoZSk6dm9pZChoPXNldFRpbWVvdXQoZix1KGUpKSl9ZnVuY3Rpb24gZChlKXtyZXR1cm4gaD12b2lkIDAsXyYmYj9pKGUpOihiPXY9dm9pZCAwLGcpfWZ1bmN0aW9uIGwoKXt2b2lkIDAhPT1oJiZjbGVhclRpbWVvdXQoaCksTz0wLGI9dz12PWg9dm9pZCAwfWZ1bmN0aW9uIHAoKXtyZXR1cm4gdm9pZCAwPT09aD9nOmQoaigpKX1mdW5jdGlvbiBtKCl7dmFyIGU9aigpLG49cyhlKTtpZihiPWFyZ3VtZW50cyx2PXRoaXMsdz1lLG4pe2lmKHZvaWQgMD09PWgpcmV0dXJuIHIodyk7aWYoUylyZXR1cm4gaD1zZXRUaW1lb3V0KGYsdCksaSh3KX1yZXR1cm4gdm9pZCAwPT09aCYmKGg9c2V0VGltZW91dChmLHQpKSxnfXZhciBiLHYseSxnLGgsdyxPPTAsTT0hMSxTPSExLF89ITA7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSl0aHJvdyBuZXcgVHlwZUVycm9yKGMpO3JldHVybiB0PWEodCl8fDAsbyhuKSYmKE09ISFuLmxlYWRpbmcsUz1cIm1heFdhaXRcImluIG4seT1TP2soYShuLm1heFdhaXQpfHwwLHQpOnksXz1cInRyYWlsaW5nXCJpbiBuPyEhbi50cmFpbGluZzpfKSxtLmNhbmNlbD1sLG0uZmx1c2g9cCxtfWZ1bmN0aW9uIG8oZSl7dmFyIHQ9XCJ1bmRlZmluZWRcIj09dHlwZW9mIGU/XCJ1bmRlZmluZWRcIjp1KGUpO3JldHVybiEhZSYmKFwib2JqZWN0XCI9PXR8fFwiZnVuY3Rpb25cIj09dCl9ZnVuY3Rpb24gaShlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PShcInVuZGVmaW5lZFwiPT10eXBlb2YgZT9cInVuZGVmaW5lZFwiOnUoZSkpfWZ1bmN0aW9uIHIoZSl7cmV0dXJuXCJzeW1ib2xcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBlP1widW5kZWZpbmVkXCI6dShlKSl8fGkoZSkmJncuY2FsbChlKT09Zn1mdW5jdGlvbiBhKGUpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKHIoZSkpcmV0dXJuIHM7aWYobyhlKSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZS52YWx1ZU9mP2UudmFsdWVPZigpOmU7ZT1vKHQpP3QrXCJcIjp0fWlmKFwic3RyaW5nXCIhPXR5cGVvZiBlKXJldHVybiAwPT09ZT9lOitlO2U9ZS5yZXBsYWNlKGQsXCJcIik7dmFyIG49cC50ZXN0KGUpO3JldHVybiBufHxtLnRlc3QoZSk/YihlLnNsaWNlKDIpLG4/Mjo4KTpsLnRlc3QoZSk/czorZX12YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxjPVwiRXhwZWN0ZWQgYSBmdW5jdGlvblwiLHM9TmFOLGY9XCJbb2JqZWN0IFN5bWJvbF1cIixkPS9eXFxzK3xcXHMrJC9nLGw9L15bLStdMHhbMC05YS1mXSskL2kscD0vXjBiWzAxXSskL2ksbT0vXjBvWzAtN10rJC9pLGI9cGFyc2VJbnQsdj1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHQ/XCJ1bmRlZmluZWRcIjp1KHQpKSYmdCYmdC5PYmplY3Q9PT1PYmplY3QmJnQseT1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/XCJ1bmRlZmluZWRcIjp1KHNlbGYpKSYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsZz12fHx5fHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCksaD1PYmplY3QucHJvdG90eXBlLHc9aC50b1N0cmluZyxrPU1hdGgubWF4LHg9TWF0aC5taW4saj1mdW5jdGlvbigpe3JldHVybiBnLkRhdGUubm93KCl9O2UuZXhwb3J0cz1ufSkuY2FsbCh0LGZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCkpfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7dmFyIHQ9dm9pZCAwLG89dm9pZCAwLGk9dm9pZCAwO2Zvcih0PTA7dDxlLmxlbmd0aDt0Kz0xKXtpZihvPWVbdF0sby5kYXRhc2V0JiZvLmRhdGFzZXQuYW9zKXJldHVybiEwO2lmKGk9by5jaGlsZHJlbiYmbihvLmNoaWxkcmVuKSlyZXR1cm4hMH1yZXR1cm4hMX1mdW5jdGlvbiBvKCl7cmV0dXJuIHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyfHx3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcnx8d2luZG93Lk1vek11dGF0aW9uT2JzZXJ2ZXJ9ZnVuY3Rpb24gaSgpe3JldHVybiEhbygpfWZ1bmN0aW9uIHIoZSx0KXt2YXIgbj13aW5kb3cuZG9jdW1lbnQsaT1vKCkscj1uZXcgaShhKTt1PXQsci5vYnNlcnZlKG4uZG9jdW1lbnRFbGVtZW50LHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMCxyZW1vdmVkTm9kZXM6ITB9KX1mdW5jdGlvbiBhKGUpe2UmJmUuZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlLmFkZGVkTm9kZXMpLG89QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZS5yZW1vdmVkTm9kZXMpLGk9dC5jb25jYXQobyk7aWYobihpKSlyZXR1cm4gdSgpfSl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHU9ZnVuY3Rpb24oKXt9O3QuZGVmYXVsdD17aXNTdXBwb3J0ZWQ6aSxyZWFkeTpyfX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBvKCl7cmV0dXJuIG5hdmlnYXRvci51c2VyQWdlbnR8fG5hdmlnYXRvci52ZW5kb3J8fHdpbmRvdy5vcGVyYXx8XCJcIn1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIG89dFtuXTtvLmVudW1lcmFibGU9by5lbnVtZXJhYmxlfHwhMSxvLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBvJiYoby53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsby5rZXksbyl9fXJldHVybiBmdW5jdGlvbih0LG4sbyl7cmV0dXJuIG4mJmUodC5wcm90b3R5cGUsbiksbyYmZSh0LG8pLHR9fSgpLHI9LyhhbmRyb2lkfGJiXFxkK3xtZWVnbykuK21vYmlsZXxhdmFudGdvfGJhZGFcXC98YmxhY2tiZXJyeXxibGF6ZXJ8Y29tcGFsfGVsYWluZXxmZW5uZWN8aGlwdG9wfGllbW9iaWxlfGlwKGhvbmV8b2QpfGlyaXN8a2luZGxlfGxnZSB8bWFlbW98bWlkcHxtbXB8bW9iaWxlLitmaXJlZm94fG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIGNlfHhkYXx4aWluby9pLGE9LzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2ksdT0vKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2ksYz0vMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe24odGhpcyxlKX1yZXR1cm4gaShlLFt7a2V5OlwicGhvbmVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPW8oKTtyZXR1cm4hKCFyLnRlc3QoZSkmJiFhLnRlc3QoZS5zdWJzdHIoMCw0KSkpfX0se2tleTpcIm1vYmlsZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bygpO3JldHVybiEoIXUudGVzdChlKSYmIWMudGVzdChlLnN1YnN0cigwLDQpKSl9fSx7a2V5OlwidGFibGV0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tb2JpbGUoKSYmIXRoaXMucGhvbmUoKX19XSksZX0oKTt0LmRlZmF1bHQ9bmV3IHN9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSx0LG4pe3ZhciBvPWUubm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1vbmNlXCIpO3Q+ZS5wb3NpdGlvbj9lLm5vZGUuY2xhc3NMaXN0LmFkZChcImFvcy1hbmltYXRlXCIpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBvJiYoXCJmYWxzZVwiPT09b3x8IW4mJlwidHJ1ZVwiIT09bykmJmUubm9kZS5jbGFzc0xpc3QucmVtb3ZlKFwiYW9zLWFuaW1hdGVcIil9LG89ZnVuY3Rpb24oZSx0KXt2YXIgbz13aW5kb3cucGFnZVlPZmZzZXQsaT13aW5kb3cuaW5uZXJIZWlnaHQ7ZS5mb3JFYWNoKGZ1bmN0aW9uKGUscil7bihlLGkrbyx0KX0pfTt0LmRlZmF1bHQ9b30sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPW4oMTIpLHI9byhpKSxhPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihlLG4pe2Uubm9kZS5jbGFzc0xpc3QuYWRkKFwiYW9zLWluaXRcIiksZS5wb3NpdGlvbj0oMCxyLmRlZmF1bHQpKGUubm9kZSx0Lm9mZnNldCl9KSxlfTt0LmRlZmF1bHQ9YX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG8oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBpPW4oMTMpLHI9byhpKSxhPWZ1bmN0aW9uKGUsdCl7dmFyIG49MCxvPTAsaT13aW5kb3cuaW5uZXJIZWlnaHQsYT17b2Zmc2V0OmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hb3Mtb2Zmc2V0XCIpLGFuY2hvcjplLmdldEF0dHJpYnV0ZShcImRhdGEtYW9zLWFuY2hvclwiKSxhbmNob3JQbGFjZW1lbnQ6ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50XCIpfTtzd2l0Y2goYS5vZmZzZXQmJiFpc05hTihhLm9mZnNldCkmJihvPXBhcnNlSW50KGEub2Zmc2V0KSksYS5hbmNob3ImJmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYS5hbmNob3IpJiYoZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGEuYW5jaG9yKVswXSksbj0oMCxyLmRlZmF1bHQpKGUpLnRvcCxhLmFuY2hvclBsYWNlbWVudCl7Y2FzZVwidG9wLWJvdHRvbVwiOmJyZWFrO2Nhc2VcImNlbnRlci1ib3R0b21cIjpuKz1lLm9mZnNldEhlaWdodC8yO2JyZWFrO2Nhc2VcImJvdHRvbS1ib3R0b21cIjpuKz1lLm9mZnNldEhlaWdodDticmVhaztjYXNlXCJ0b3AtY2VudGVyXCI6bis9aS8yO2JyZWFrO2Nhc2VcImJvdHRvbS1jZW50ZXJcIjpuKz1pLzIrZS5vZmZzZXRIZWlnaHQ7YnJlYWs7Y2FzZVwiY2VudGVyLWNlbnRlclwiOm4rPWkvMitlLm9mZnNldEhlaWdodC8yO2JyZWFrO2Nhc2VcInRvcC10b3BcIjpuKz1pO2JyZWFrO2Nhc2VcImJvdHRvbS10b3BcIjpuKz1lLm9mZnNldEhlaWdodCtpO2JyZWFrO2Nhc2VcImNlbnRlci10b3BcIjpuKz1lLm9mZnNldEhlaWdodC8yK2l9cmV0dXJuIGEuYW5jaG9yUGxhY2VtZW50fHxhLm9mZnNldHx8aXNOYU4odCl8fChvPXQpLG4rb307dC5kZWZhdWx0PWF9LGZ1bmN0aW9uKGUsdCl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIG49ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTAsbj0wO2UmJiFpc05hTihlLm9mZnNldExlZnQpJiYhaXNOYU4oZS5vZmZzZXRUb3ApOyl0Kz1lLm9mZnNldExlZnQtKFwiQk9EWVwiIT1lLnRhZ05hbWU/ZS5zY3JvbGxMZWZ0OjApLG4rPWUub2Zmc2V0VG9wLShcIkJPRFlcIiE9ZS50YWdOYW1lP2Uuc2Nyb2xsVG9wOjApLGU9ZS5vZmZzZXRQYXJlbnQ7cmV0dXJue3RvcDpuLGxlZnQ6dH19O3QuZGVmYXVsdD1ufSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBuPWZ1bmN0aW9uKGUpe3JldHVybiBlPWV8fGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hb3NdXCIpLEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChlLGZ1bmN0aW9uKGUpe3JldHVybntub2RlOmV9fSl9O3QuZGVmYXVsdD1ufV0pfSk7IiwiLyohXHJcbiAqIGpxdWVyeS1jb25maXJtIHYzLjMuNCAoaHR0cDovL2NyYWZ0cGlwLmdpdGh1Yi5pby9qcXVlcnktY29uZmlybS8pXHJcbiAqIEF1dGhvcjogQm9uaWZhY2UgUGVyZWlyYVxyXG4gKiBXZWJzaXRlOiB3d3cuY3JhZnRwaXAuY29tXHJcbiAqIENvbnRhY3Q6IGhleUBjcmFmdHBpcC5jb21cclxuICpcclxuICogQ29weXJpZ2h0IDIwMTMtMjAxOSBqcXVlcnktY29uZmlybVxyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmFmdHBpcC9qcXVlcnktY29uZmlybS9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKi9cclxuKGZ1bmN0aW9uKGZhY3Rvcnkpe2lmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXCJqcXVlcnlcIl0sZmFjdG9yeSk7fWVsc2V7aWYodHlwZW9mIG1vZHVsZT09PVwib2JqZWN0XCImJm1vZHVsZS5leHBvcnRzKXttb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihyb290LGpRdWVyeSl7aWYoalF1ZXJ5PT09dW5kZWZpbmVkKXtpZih0eXBlb2Ygd2luZG93IT09XCJ1bmRlZmluZWRcIil7alF1ZXJ5PXJlcXVpcmUoXCJqcXVlcnlcIik7fWVsc2V7alF1ZXJ5PXJlcXVpcmUoXCJqcXVlcnlcIikocm9vdCk7fX1mYWN0b3J5KGpRdWVyeSk7cmV0dXJuIGpRdWVyeTt9O31lbHNle2ZhY3RvcnkoalF1ZXJ5KTt9fX0oZnVuY3Rpb24oJCl7dmFyIHc9d2luZG93OyQuZm4uY29uZmlybT1mdW5jdGlvbihvcHRpb25zLG9wdGlvbjIpe2lmKHR5cGVvZiBvcHRpb25zPT09XCJ1bmRlZmluZWRcIil7b3B0aW9ucz17fTt9aWYodHlwZW9mIG9wdGlvbnM9PT1cInN0cmluZ1wiKXtvcHRpb25zPXtjb250ZW50Om9wdGlvbnMsdGl0bGU6KG9wdGlvbjIpP29wdGlvbjI6ZmFsc2V9O30kKHRoaXMpLmVhY2goZnVuY3Rpb24oKXt2YXIgJHRoaXM9JCh0aGlzKTtpZigkdGhpcy5hdHRyKFwiamMtYXR0YWNoZWRcIikpe2NvbnNvbGUud2FybihcImpDb25maXJtIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNoZWQgdG8gdGhpcyBlbGVtZW50IFwiLCR0aGlzWzBdKTtyZXR1cm47fSR0aGlzLm9uKFwiY2xpY2tcIixmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIGpjT3B0aW9uPSQuZXh0ZW5kKHt9LG9wdGlvbnMpO2lmKCR0aGlzLmF0dHIoXCJkYXRhLXRpdGxlXCIpKXtqY09wdGlvbi50aXRsZT0kdGhpcy5hdHRyKFwiZGF0YS10aXRsZVwiKTt9aWYoJHRoaXMuYXR0cihcImRhdGEtY29udGVudFwiKSl7amNPcHRpb24uY29udGVudD0kdGhpcy5hdHRyKFwiZGF0YS1jb250ZW50XCIpO31pZih0eXBlb2YgamNPcHRpb24uYnV0dG9ucz09PVwidW5kZWZpbmVkXCIpe2pjT3B0aW9uLmJ1dHRvbnM9e307fWpjT3B0aW9uW1wiJHRhcmdldFwiXT0kdGhpcztpZigkdGhpcy5hdHRyKFwiaHJlZlwiKSYmT2JqZWN0LmtleXMoamNPcHRpb24uYnV0dG9ucykubGVuZ3RoPT09MCl7dmFyIGJ1dHRvbnM9JC5leHRlbmQodHJ1ZSx7fSx3Lmpjb25maXJtLnBsdWdpbkRlZmF1bHRzLmRlZmF1bHRCdXR0b25zLCh3Lmpjb25maXJtLmRlZmF1bHRzfHx7fSkuZGVmYXVsdEJ1dHRvbnN8fHt9KTt2YXIgZmlyc3RCdG49T2JqZWN0LmtleXMoYnV0dG9ucylbMF07amNPcHRpb24uYnV0dG9ucz1idXR0b25zO2pjT3B0aW9uLmJ1dHRvbnNbZmlyc3RCdG5dLmFjdGlvbj1mdW5jdGlvbigpe2xvY2F0aW9uLmhyZWY9JHRoaXMuYXR0cihcImhyZWZcIik7fTt9amNPcHRpb24uY2xvc2VJY29uPWZhbHNlO3ZhciBpbnN0YW5jZT0kLmNvbmZpcm0oamNPcHRpb24pO30pOyR0aGlzLmF0dHIoXCJqYy1hdHRhY2hlZFwiLHRydWUpO30pO3JldHVybiAkKHRoaXMpO307JC5jb25maXJtPWZ1bmN0aW9uKG9wdGlvbnMsb3B0aW9uMil7aWYodHlwZW9mIG9wdGlvbnM9PT1cInVuZGVmaW5lZFwiKXtvcHRpb25zPXt9O31pZih0eXBlb2Ygb3B0aW9ucz09PVwic3RyaW5nXCIpe29wdGlvbnM9e2NvbnRlbnQ6b3B0aW9ucyx0aXRsZToob3B0aW9uMik/b3B0aW9uMjpmYWxzZX07fXZhciBwdXREZWZhdWx0QnV0dG9ucz0hKG9wdGlvbnMuYnV0dG9ucz09PWZhbHNlKTtpZih0eXBlb2Ygb3B0aW9ucy5idXR0b25zIT09XCJvYmplY3RcIil7b3B0aW9ucy5idXR0b25zPXt9O31pZihPYmplY3Qua2V5cyhvcHRpb25zLmJ1dHRvbnMpLmxlbmd0aD09PTAmJnB1dERlZmF1bHRCdXR0b25zKXt2YXIgYnV0dG9ucz0kLmV4dGVuZCh0cnVlLHt9LHcuamNvbmZpcm0ucGx1Z2luRGVmYXVsdHMuZGVmYXVsdEJ1dHRvbnMsKHcuamNvbmZpcm0uZGVmYXVsdHN8fHt9KS5kZWZhdWx0QnV0dG9uc3x8e30pO29wdGlvbnMuYnV0dG9ucz1idXR0b25zO31yZXR1cm4gdy5qY29uZmlybShvcHRpb25zKTt9OyQuYWxlcnQ9ZnVuY3Rpb24ob3B0aW9ucyxvcHRpb24yKXtpZih0eXBlb2Ygb3B0aW9ucz09PVwidW5kZWZpbmVkXCIpe29wdGlvbnM9e307fWlmKHR5cGVvZiBvcHRpb25zPT09XCJzdHJpbmdcIil7b3B0aW9ucz17Y29udGVudDpvcHRpb25zLHRpdGxlOihvcHRpb24yKT9vcHRpb24yOmZhbHNlfTt9dmFyIHB1dERlZmF1bHRCdXR0b25zPSEob3B0aW9ucy5idXR0b25zPT09ZmFsc2UpO2lmKHR5cGVvZiBvcHRpb25zLmJ1dHRvbnMhPT1cIm9iamVjdFwiKXtvcHRpb25zLmJ1dHRvbnM9e307fWlmKE9iamVjdC5rZXlzKG9wdGlvbnMuYnV0dG9ucykubGVuZ3RoPT09MCYmcHV0RGVmYXVsdEJ1dHRvbnMpe3ZhciBidXR0b25zPSQuZXh0ZW5kKHRydWUse30sdy5qY29uZmlybS5wbHVnaW5EZWZhdWx0cy5kZWZhdWx0QnV0dG9ucywody5qY29uZmlybS5kZWZhdWx0c3x8e30pLmRlZmF1bHRCdXR0b25zfHx7fSk7dmFyIGZpcnN0QnRuPU9iamVjdC5rZXlzKGJ1dHRvbnMpWzBdO29wdGlvbnMuYnV0dG9uc1tmaXJzdEJ0bl09YnV0dG9uc1tmaXJzdEJ0bl07fXJldHVybiB3Lmpjb25maXJtKG9wdGlvbnMpO307JC5kaWFsb2c9ZnVuY3Rpb24ob3B0aW9ucyxvcHRpb24yKXtpZih0eXBlb2Ygb3B0aW9ucz09PVwidW5kZWZpbmVkXCIpe29wdGlvbnM9e307fWlmKHR5cGVvZiBvcHRpb25zPT09XCJzdHJpbmdcIil7b3B0aW9ucz17Y29udGVudDpvcHRpb25zLHRpdGxlOihvcHRpb24yKT9vcHRpb24yOmZhbHNlLGNsb3NlSWNvbjpmdW5jdGlvbigpe319O31vcHRpb25zLmJ1dHRvbnM9e307aWYodHlwZW9mIG9wdGlvbnMuY2xvc2VJY29uPT09XCJ1bmRlZmluZWRcIil7b3B0aW9ucy5jbG9zZUljb249ZnVuY3Rpb24oKXt9O31vcHRpb25zLmNvbmZpcm1LZXlzPVsxM107cmV0dXJuIHcuamNvbmZpcm0ob3B0aW9ucyk7fTt3Lmpjb25maXJtPWZ1bmN0aW9uKG9wdGlvbnMpe2lmKHR5cGVvZiBvcHRpb25zPT09XCJ1bmRlZmluZWRcIil7b3B0aW9ucz17fTt9dmFyIHBsdWdpbk9wdGlvbnM9JC5leHRlbmQodHJ1ZSx7fSx3Lmpjb25maXJtLnBsdWdpbkRlZmF1bHRzKTtpZih3Lmpjb25maXJtLmRlZmF1bHRzKXtwbHVnaW5PcHRpb25zPSQuZXh0ZW5kKHRydWUscGx1Z2luT3B0aW9ucyx3Lmpjb25maXJtLmRlZmF1bHRzKTt9cGx1Z2luT3B0aW9ucz0kLmV4dGVuZCh0cnVlLHt9LHBsdWdpbk9wdGlvbnMsb3B0aW9ucyk7dmFyIGluc3RhbmNlPW5ldyB3Lkpjb25maXJtKHBsdWdpbk9wdGlvbnMpO3cuamNvbmZpcm0uaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO3JldHVybiBpbnN0YW5jZTt9O3cuSmNvbmZpcm09ZnVuY3Rpb24ob3B0aW9ucyl7JC5leHRlbmQodGhpcyxvcHRpb25zKTt0aGlzLl9pbml0KCk7fTt3Lkpjb25maXJtLnByb3RvdHlwZT17X2luaXQ6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO2lmKCF3Lmpjb25maXJtLmluc3RhbmNlcy5sZW5ndGgpe3cuamNvbmZpcm0ubGFzdEZvY3VzZWQ9JChcImJvZHlcIikuZmluZChcIjpmb2N1c1wiKTt9dGhpcy5faWQ9TWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKjk5OTk5KTt0aGlzLmNvbnRlbnRQYXJzZWQ9JChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtpZighdGhpcy5sYXp5T3Blbil7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQub3BlbigpO30sMCk7fX0sX2J1aWxkSFRNTDpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7dGhpcy5fcGFyc2VBbmltYXRpb24odGhpcy5hbmltYXRpb24sXCJvXCIpO3RoaXMuX3BhcnNlQW5pbWF0aW9uKHRoaXMuY2xvc2VBbmltYXRpb24sXCJjXCIpO3RoaXMuX3BhcnNlQmdEaXNtaXNzQW5pbWF0aW9uKHRoaXMuYmFja2dyb3VuZERpc21pc3NBbmltYXRpb24pO3RoaXMuX3BhcnNlQ29sdW1uQ2xhc3ModGhpcy5jb2x1bW5DbGFzcyk7dGhpcy5fcGFyc2VUaGVtZSh0aGlzLnRoZW1lKTt0aGlzLl9wYXJzZVR5cGUodGhpcy50eXBlKTt2YXIgdGVtcGxhdGU9JCh0aGlzLnRlbXBsYXRlKTt0ZW1wbGF0ZS5maW5kKFwiLmpjb25maXJtLWJveFwiKS5hZGRDbGFzcyh0aGlzLmFuaW1hdGlvblBhcnNlZCkuYWRkQ2xhc3ModGhpcy5iYWNrZ3JvdW5kRGlzbWlzc0FuaW1hdGlvblBhcnNlZCkuYWRkQ2xhc3ModGhpcy50eXBlUGFyc2VkKTtpZih0aGlzLnR5cGVBbmltYXRlZCl7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS1ib3hcIikuYWRkQ2xhc3MoXCJqY29uZmlybS10eXBlLWFuaW1hdGVkXCIpO31pZih0aGlzLnVzZUJvb3RzdHJhcCl7dGVtcGxhdGUuZmluZChcIi5qYy1iczMtcm93XCIpLmFkZENsYXNzKHRoaXMuYm9vdHN0cmFwQ2xhc3Nlcy5yb3cpO3RlbXBsYXRlLmZpbmQoXCIuamMtYnMzLXJvd1wiKS5hZGRDbGFzcyhcImp1c3RpZnktY29udGVudC1tZC1jZW50ZXIganVzdGlmeS1jb250ZW50LXNtLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQteHMtY2VudGVyIGp1c3RpZnktY29udGVudC1sZy1jZW50ZXJcIik7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS1ib3gtY29udGFpbmVyXCIpLmFkZENsYXNzKHRoaXMuY29sdW1uQ2xhc3NQYXJzZWQpO2lmKHRoaXMuY29udGFpbmVyRmx1aWQpe3RlbXBsYXRlLmZpbmQoXCIuamMtYnMzLWNvbnRhaW5lclwiKS5hZGRDbGFzcyh0aGlzLmJvb3RzdHJhcENsYXNzZXMuY29udGFpbmVyRmx1aWQpO31lbHNle3RlbXBsYXRlLmZpbmQoXCIuamMtYnMzLWNvbnRhaW5lclwiKS5hZGRDbGFzcyh0aGlzLmJvb3RzdHJhcENsYXNzZXMuY29udGFpbmVyKTt9fWVsc2V7dGVtcGxhdGUuZmluZChcIi5qY29uZmlybS1ib3hcIikuY3NzKFwid2lkdGhcIix0aGlzLmJveFdpZHRoKTt9aWYodGhpcy50aXRsZUNsYXNzKXt0ZW1wbGF0ZS5maW5kKFwiLmpjb25maXJtLXRpdGxlLWNcIikuYWRkQ2xhc3ModGhpcy50aXRsZUNsYXNzKTt9dGVtcGxhdGUuYWRkQ2xhc3ModGhpcy50aGVtZVBhcnNlZCk7dmFyIGFyaWFMYWJlbD1cImpjb25maXJtLWJveFwiK3RoaXMuX2lkO3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tYm94XCIpLmF0dHIoXCJhcmlhLWxhYmVsbGVkYnlcIixhcmlhTGFiZWwpLmF0dHIoXCJ0YWJpbmRleFwiLC0xKTt0ZW1wbGF0ZS5maW5kKFwiLmpjb25maXJtLWNvbnRlbnRcIikuYXR0cihcImlkXCIsYXJpYUxhYmVsKTtpZih0aGlzLmJnT3BhY2l0eSE9PW51bGwpe3RlbXBsYXRlLmZpbmQoXCIuamNvbmZpcm0tYmdcIikuY3NzKFwib3BhY2l0eVwiLHRoaXMuYmdPcGFjaXR5KTt9aWYodGhpcy5ydGwpe3RlbXBsYXRlLmFkZENsYXNzKFwiamNvbmZpcm0tcnRsXCIpO310aGlzLiRlbD10ZW1wbGF0ZS5hcHBlbmRUbyh0aGlzLmNvbnRhaW5lcik7dGhpcy4kamNvbmZpcm1Cb3hDb250YWluZXI9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1ib3gtY29udGFpbmVyXCIpO3RoaXMuJGpjb25maXJtQm94PXRoaXMuJGJvZHk9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1ib3hcIik7dGhpcy4kamNvbmZpcm1CZz10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWJnXCIpO3RoaXMuJHRpdGxlPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tdGl0bGVcIik7dGhpcy4kdGl0bGVDb250YWluZXI9dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS10aXRsZS1jXCIpO3RoaXMuJGNvbnRlbnQ9dGhpcy4kZWwuZmluZChcImRpdi5qY29uZmlybS1jb250ZW50XCIpO3RoaXMuJGNvbnRlbnRQYW5lPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tY29udGVudC1wYW5lXCIpO3RoaXMuJGljb249dGhpcy4kZWwuZmluZChcIi5qY29uZmlybS1pY29uLWNcIik7dGhpcy4kY2xvc2VJY29uPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tY2xvc2VJY29uXCIpO3RoaXMuJGhvbGRlcj10aGlzLiRlbC5maW5kKFwiLmpjb25maXJtLWhvbGRlclwiKTt0aGlzLiRidG5jPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tYnV0dG9uc1wiKTt0aGlzLiRzY3JvbGxQYW5lPXRoaXMuJGVsLmZpbmQoXCIuamNvbmZpcm0tc2Nyb2xscGFuZVwiKTt0aGF0LnNldFN0YXJ0aW5nUG9pbnQoKTt0aGlzLl9jb250ZW50UmVhZHk9JC5EZWZlcnJlZCgpO3RoaXMuX21vZGFsUmVhZHk9JC5EZWZlcnJlZCgpO3RoaXMuJGhvbGRlci5jc3Moe1wicGFkZGluZy10b3BcIjp0aGlzLm9mZnNldFRvcCxcInBhZGRpbmctYm90dG9tXCI6dGhpcy5vZmZzZXRCb3R0b20sfSk7dGhpcy5zZXRUaXRsZSgpO3RoaXMuc2V0SWNvbigpO3RoaXMuX3NldEJ1dHRvbnMoKTt0aGlzLl9wYXJzZUNvbnRlbnQoKTt0aGlzLmluaXREcmFnZ2FibGUoKTtpZih0aGlzLmlzQWpheCl7dGhpcy5zaG93TG9hZGluZyhmYWxzZSk7fSQud2hlbih0aGlzLl9jb250ZW50UmVhZHksdGhpcy5fbW9kYWxSZWFkeSkudGhlbihmdW5jdGlvbigpe2lmKHRoYXQuaXNBamF4TG9hZGluZyl7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuaXNBamF4TG9hZGluZz1mYWxzZTt0aGF0LnNldENvbnRlbnQoKTt0aGF0LnNldFRpdGxlKCk7dGhhdC5zZXRJY29uKCk7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuaGlkZUxvYWRpbmcoZmFsc2UpO3RoYXQuX3VwZGF0ZUNvbnRlbnRNYXhIZWlnaHQoKTt9LDEwMCk7aWYodHlwZW9mIHRoYXQub25Db250ZW50UmVhZHk9PT1cImZ1bmN0aW9uXCIpe3RoYXQub25Db250ZW50UmVhZHkoKTt9fSw1MCk7fWVsc2V7dGhhdC5fdXBkYXRlQ29udGVudE1heEhlaWdodCgpO3RoYXQuc2V0VGl0bGUoKTt0aGF0LnNldEljb24oKTtpZih0eXBlb2YgdGhhdC5vbkNvbnRlbnRSZWFkeT09PVwiZnVuY3Rpb25cIil7dGhhdC5vbkNvbnRlbnRSZWFkeSgpO319aWYodGhhdC5hdXRvQ2xvc2Upe3RoYXQuX3N0YXJ0Q291bnREb3duKCk7fX0pLnRoZW4oZnVuY3Rpb24oKXt0aGF0Ll93YXRjaENvbnRlbnQoKTt9KTtpZih0aGlzLmFuaW1hdGlvbj09PVwibm9uZVwiKXt0aGlzLmFuaW1hdGlvblNwZWVkPTE7dGhpcy5hbmltYXRpb25Cb3VuY2U9MTt9dGhpcy4kYm9keS5jc3ModGhpcy5fZ2V0Q1NTKHRoaXMuYW5pbWF0aW9uU3BlZWQsdGhpcy5hbmltYXRpb25Cb3VuY2UpKTt0aGlzLiRjb250ZW50UGFuZS5jc3ModGhpcy5fZ2V0Q1NTKHRoaXMuYW5pbWF0aW9uU3BlZWQsMSkpO3RoaXMuJGpjb25maXJtQmcuY3NzKHRoaXMuX2dldENTUyh0aGlzLmFuaW1hdGlvblNwZWVkLDEpKTt0aGlzLiRqY29uZmlybUJveENvbnRhaW5lci5jc3ModGhpcy5fZ2V0Q1NTKHRoaXMuYW5pbWF0aW9uU3BlZWQsMSkpO30sX3R5cGVQcmVmaXg6XCJqY29uZmlybS10eXBlLVwiLHR5cGVQYXJzZWQ6XCJcIixfcGFyc2VUeXBlOmZ1bmN0aW9uKHR5cGUpe3RoaXMudHlwZVBhcnNlZD10aGlzLl90eXBlUHJlZml4K3R5cGU7fSxzZXRUeXBlOmZ1bmN0aW9uKHR5cGUpe3ZhciBvbGRDbGFzcz10aGlzLnR5cGVQYXJzZWQ7dGhpcy5fcGFyc2VUeXBlKHR5cGUpO3RoaXMuJGpjb25maXJtQm94LnJlbW92ZUNsYXNzKG9sZENsYXNzKS5hZGRDbGFzcyh0aGlzLnR5cGVQYXJzZWQpO30sdGhlbWVQYXJzZWQ6XCJcIixfdGhlbWVQcmVmaXg6XCJqY29uZmlybS1cIixzZXRUaGVtZTpmdW5jdGlvbih0aGVtZSl7dmFyIHByZXZpb3VzPXRoaXMudGhlbWU7dGhpcy50aGVtZT10aGVtZXx8dGhpcy50aGVtZTt0aGlzLl9wYXJzZVRoZW1lKHRoaXMudGhlbWUpO2lmKHByZXZpb3VzKXt0aGlzLiRlbC5yZW1vdmVDbGFzcyhwcmV2aW91cyk7fXRoaXMuJGVsLmFkZENsYXNzKHRoaXMudGhlbWVQYXJzZWQpO3RoaXMudGhlbWU9dGhlbWU7fSxfcGFyc2VUaGVtZTpmdW5jdGlvbih0aGVtZSl7dmFyIHRoYXQ9dGhpczt0aGVtZT10aGVtZS5zcGxpdChcIixcIik7JC5lYWNoKHRoZW1lLGZ1bmN0aW9uKGssYSl7aWYoYS5pbmRleE9mKHRoYXQuX3RoZW1lUHJlZml4KT09PS0xKXt0aGVtZVtrXT10aGF0Ll90aGVtZVByZWZpeCskLnRyaW0oYSk7fX0pO3RoaXMudGhlbWVQYXJzZWQ9dGhlbWUuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTt9LGJhY2tncm91bmREaXNtaXNzQW5pbWF0aW9uUGFyc2VkOlwiXCIsX2JnRGlzbWlzc1ByZWZpeDpcImpjb25maXJtLWhpbGlnaHQtXCIsX3BhcnNlQmdEaXNtaXNzQW5pbWF0aW9uOmZ1bmN0aW9uKGJnRGlzbWlzc0FuaW1hdGlvbil7dmFyIGFuaW1hdGlvbj1iZ0Rpc21pc3NBbmltYXRpb24uc3BsaXQoXCIsXCIpO3ZhciB0aGF0PXRoaXM7JC5lYWNoKGFuaW1hdGlvbixmdW5jdGlvbihrLGEpe2lmKGEuaW5kZXhPZih0aGF0Ll9iZ0Rpc21pc3NQcmVmaXgpPT09LTEpe2FuaW1hdGlvbltrXT10aGF0Ll9iZ0Rpc21pc3NQcmVmaXgrJC50cmltKGEpO319KTt0aGlzLmJhY2tncm91bmREaXNtaXNzQW5pbWF0aW9uUGFyc2VkPWFuaW1hdGlvbi5qb2luKFwiIFwiKS50b0xvd2VyQ2FzZSgpO30sYW5pbWF0aW9uUGFyc2VkOlwiXCIsY2xvc2VBbmltYXRpb25QYXJzZWQ6XCJcIixfYW5pbWF0aW9uUHJlZml4OlwiamNvbmZpcm0tYW5pbWF0aW9uLVwiLHNldEFuaW1hdGlvbjpmdW5jdGlvbihhbmltYXRpb24pe3RoaXMuYW5pbWF0aW9uPWFuaW1hdGlvbnx8dGhpcy5hbmltYXRpb247dGhpcy5fcGFyc2VBbmltYXRpb24odGhpcy5hbmltYXRpb24sXCJvXCIpO30sX3BhcnNlQW5pbWF0aW9uOmZ1bmN0aW9uKGFuaW1hdGlvbix3aGljaCl7d2hpY2g9d2hpY2h8fFwib1wiO3ZhciBhbmltYXRpb25zPWFuaW1hdGlvbi5zcGxpdChcIixcIik7dmFyIHRoYXQ9dGhpczskLmVhY2goYW5pbWF0aW9ucyxmdW5jdGlvbihrLGEpe2lmKGEuaW5kZXhPZih0aGF0Ll9hbmltYXRpb25QcmVmaXgpPT09LTEpe2FuaW1hdGlvbnNba109dGhhdC5fYW5pbWF0aW9uUHJlZml4KyQudHJpbShhKTt9fSk7dmFyIGFfc3RyaW5nPWFuaW1hdGlvbnMuam9pbihcIiBcIikudG9Mb3dlckNhc2UoKTtpZih3aGljaD09PVwib1wiKXt0aGlzLmFuaW1hdGlvblBhcnNlZD1hX3N0cmluZzt9ZWxzZXt0aGlzLmNsb3NlQW5pbWF0aW9uUGFyc2VkPWFfc3RyaW5nO31yZXR1cm4gYV9zdHJpbmc7fSxzZXRDbG9zZUFuaW1hdGlvbjpmdW5jdGlvbihjbG9zZUFuaW1hdGlvbil7dGhpcy5jbG9zZUFuaW1hdGlvbj1jbG9zZUFuaW1hdGlvbnx8dGhpcy5jbG9zZUFuaW1hdGlvbjt0aGlzLl9wYXJzZUFuaW1hdGlvbih0aGlzLmNsb3NlQW5pbWF0aW9uLFwiY1wiKTt9LHNldEFuaW1hdGlvblNwZWVkOmZ1bmN0aW9uKHNwZWVkKXt0aGlzLmFuaW1hdGlvblNwZWVkPXNwZWVkfHx0aGlzLmFuaW1hdGlvblNwZWVkO30sY29sdW1uQ2xhc3NQYXJzZWQ6XCJcIixzZXRDb2x1bW5DbGFzczpmdW5jdGlvbihjb2xDbGFzcyl7aWYoIXRoaXMudXNlQm9vdHN0cmFwKXtjb25zb2xlLndhcm4oXCJjYW5ub3Qgc2V0IGNvbHVtbkNsYXNzLCB1c2VCb290c3RyYXAgaXMgc2V0IHRvIGZhbHNlXCIpO3JldHVybjt9dGhpcy5jb2x1bW5DbGFzcz1jb2xDbGFzc3x8dGhpcy5jb2x1bW5DbGFzczt0aGlzLl9wYXJzZUNvbHVtbkNsYXNzKHRoaXMuY29sdW1uQ2xhc3MpO3RoaXMuJGpjb25maXJtQm94Q29udGFpbmVyLmFkZENsYXNzKHRoaXMuY29sdW1uQ2xhc3NQYXJzZWQpO30sX3VwZGF0ZUNvbnRlbnRNYXhIZWlnaHQ6ZnVuY3Rpb24oKXt2YXIgaGVpZ2h0PSQod2luZG93KS5oZWlnaHQoKS0odGhpcy4kamNvbmZpcm1Cb3gub3V0ZXJIZWlnaHQoKS10aGlzLiRjb250ZW50UGFuZS5vdXRlckhlaWdodCgpKS0odGhpcy5vZmZzZXRUb3ArdGhpcy5vZmZzZXRCb3R0b20pO3RoaXMuJGNvbnRlbnRQYW5lLmNzcyh7XCJtYXgtaGVpZ2h0XCI6aGVpZ2h0K1wicHhcIn0pO30sc2V0Qm94V2lkdGg6ZnVuY3Rpb24od2lkdGgpe2lmKHRoaXMudXNlQm9vdHN0cmFwKXtjb25zb2xlLndhcm4oXCJjYW5ub3Qgc2V0IGJveFdpZHRoLCB1c2VCb290c3RyYXAgaXMgc2V0IHRvIHRydWVcIik7cmV0dXJuO310aGlzLmJveFdpZHRoPXdpZHRoO3RoaXMuJGpjb25maXJtQm94LmNzcyhcIndpZHRoXCIsd2lkdGgpO30sX3BhcnNlQ29sdW1uQ2xhc3M6ZnVuY3Rpb24oY29sQ2xhc3Mpe2NvbENsYXNzPWNvbENsYXNzLnRvTG93ZXJDYXNlKCk7dmFyIHA7c3dpdGNoKGNvbENsYXNzKXtjYXNlXCJ4bFwiOmNhc2VcInhsYXJnZVwiOnA9XCJjb2wtbWQtMTJcIjticmVhaztjYXNlXCJsXCI6Y2FzZVwibGFyZ2VcIjpwPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI7YnJlYWs7Y2FzZVwibVwiOmNhc2VcIm1lZGl1bVwiOnA9XCJjb2wtbWQtNiBjb2wtbWQtb2Zmc2V0LTNcIjticmVhaztjYXNlXCJzXCI6Y2FzZVwic21hbGxcIjpwPVwiY29sLW1kLTQgY29sLW1kLW9mZnNldC00XCI7YnJlYWs7Y2FzZVwieHNcIjpjYXNlXCJ4c21hbGxcIjpwPVwiY29sLW1kLTIgY29sLW1kLW9mZnNldC01XCI7YnJlYWs7ZGVmYXVsdDpwPWNvbENsYXNzO310aGlzLmNvbHVtbkNsYXNzUGFyc2VkPXA7fSxpbml0RHJhZ2dhYmxlOmZ1bmN0aW9uKCl7dmFyIHRoYXQ9dGhpczt2YXIgJHQ9dGhpcy4kdGl0bGVDb250YWluZXI7dGhpcy5yZXNldERyYWcoKTtpZih0aGlzLmRyYWdnYWJsZSl7JHQub24oXCJtb3VzZWRvd25cIixmdW5jdGlvbihlKXskdC5hZGRDbGFzcyhcImpjb25maXJtLWhhbmRcIik7dGhhdC5tb3VzZVg9ZS5jbGllbnRYO3RoYXQubW91c2VZPWUuY2xpZW50WTt0aGF0LmlzRHJhZz10cnVlO30pOyQod2luZG93KS5vbihcIm1vdXNlbW92ZS5cIit0aGlzLl9pZCxmdW5jdGlvbihlKXtpZih0aGF0LmlzRHJhZyl7dGhhdC5tb3ZpbmdYPWUuY2xpZW50WC10aGF0Lm1vdXNlWCt0aGF0LmluaXRpYWxYO3RoYXQubW92aW5nWT1lLmNsaWVudFktdGhhdC5tb3VzZVkrdGhhdC5pbml0aWFsWTt0aGF0LnNldERyYWcoKTt9fSk7JCh3aW5kb3cpLm9uKFwibW91c2V1cC5cIit0aGlzLl9pZCxmdW5jdGlvbigpeyR0LnJlbW92ZUNsYXNzKFwiamNvbmZpcm0taGFuZFwiKTtpZih0aGF0LmlzRHJhZyl7dGhhdC5pc0RyYWc9ZmFsc2U7dGhhdC5pbml0aWFsWD10aGF0Lm1vdmluZ1g7dGhhdC5pbml0aWFsWT10aGF0Lm1vdmluZ1k7fX0pO319LHJlc2V0RHJhZzpmdW5jdGlvbigpe3RoaXMuaXNEcmFnPWZhbHNlO3RoaXMuaW5pdGlhbFg9MDt0aGlzLmluaXRpYWxZPTA7dGhpcy5tb3ZpbmdYPTA7dGhpcy5tb3ZpbmdZPTA7dGhpcy5tb3VzZVg9MDt0aGlzLm1vdXNlWT0wO3RoaXMuJGpjb25maXJtQm94Q29udGFpbmVyLmNzcyhcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKFwiKzArXCJweCwgXCIrMCtcInB4KVwiKTt9LHNldERyYWc6ZnVuY3Rpb24oKXtpZighdGhpcy5kcmFnZ2FibGUpe3JldHVybjt9dGhpcy5hbGlnbk1pZGRsZT1mYWxzZTt2YXIgYm94V2lkdGg9dGhpcy4kamNvbmZpcm1Cb3gub3V0ZXJXaWR0aCgpO3ZhciBib3hIZWlnaHQ9dGhpcy4kamNvbmZpcm1Cb3gub3V0ZXJIZWlnaHQoKTt2YXIgd2luZG93V2lkdGg9JCh3aW5kb3cpLndpZHRoKCk7dmFyIHdpbmRvd0hlaWdodD0kKHdpbmRvdykuaGVpZ2h0KCk7dmFyIHRoYXQ9dGhpczt2YXIgZHJhZ1VwZGF0ZT0xO2lmKHRoYXQubW92aW5nWCVkcmFnVXBkYXRlPT09MHx8dGhhdC5tb3ZpbmdZJWRyYWdVcGRhdGU9PT0wKXtpZih0aGF0LmRyYWdXaW5kb3dCb3JkZXIpe3ZhciBsZWZ0RGlzdGFuY2U9KHdpbmRvd1dpZHRoLzIpLWJveFdpZHRoLzI7dmFyIHRvcERpc3RhbmNlPSh3aW5kb3dIZWlnaHQvMiktYm94SGVpZ2h0LzI7dG9wRGlzdGFuY2UtPXRoYXQuZHJhZ1dpbmRvd0dhcDtsZWZ0RGlzdGFuY2UtPXRoYXQuZHJhZ1dpbmRvd0dhcDtpZihsZWZ0RGlzdGFuY2UrdGhhdC5tb3ZpbmdYPDApe3RoYXQubW92aW5nWD0tbGVmdERpc3RhbmNlO31lbHNle2lmKGxlZnREaXN0YW5jZS10aGF0Lm1vdmluZ1g8MCl7dGhhdC5tb3ZpbmdYPWxlZnREaXN0YW5jZTt9fWlmKHRvcERpc3RhbmNlK3RoYXQubW92aW5nWTwwKXt0aGF0Lm1vdmluZ1k9LXRvcERpc3RhbmNlO31lbHNle2lmKHRvcERpc3RhbmNlLXRoYXQubW92aW5nWTwwKXt0aGF0Lm1vdmluZ1k9dG9wRGlzdGFuY2U7fX19dGhhdC4kamNvbmZpcm1Cb3hDb250YWluZXIuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrdGhhdC5tb3ZpbmdYK1wicHgsIFwiK3RoYXQubW92aW5nWStcInB4KVwiKTt9fSxfc2Nyb2xsVG9wOmZ1bmN0aW9uKCl7aWYodHlwZW9mIHBhZ2VZT2Zmc2V0IT09XCJ1bmRlZmluZWRcIil7cmV0dXJuIHBhZ2VZT2Zmc2V0O31lbHNle3ZhciBCPWRvY3VtZW50LmJvZHk7dmFyIEQ9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O0Q9KEQuY2xpZW50SGVpZ2h0KT9EOkI7cmV0dXJuIEQuc2Nyb2xsVG9wO319LF93YXRjaENvbnRlbnQ6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO2lmKHRoaXMuX3RpbWVyKXtjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTt9dmFyIHByZXZDb250ZW50SGVpZ2h0PTA7dGhpcy5fdGltZXI9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtpZih0aGF0LnNtb290aENvbnRlbnQpe3ZhciBjb250ZW50SGVpZ2h0PXRoYXQuJGNvbnRlbnQub3V0ZXJIZWlnaHQoKXx8MDtpZihjb250ZW50SGVpZ2h0IT09cHJldkNvbnRlbnRIZWlnaHQpe3ByZXZDb250ZW50SGVpZ2h0PWNvbnRlbnRIZWlnaHQ7fXZhciB3aD0kKHdpbmRvdykuaGVpZ2h0KCk7dmFyIHRvdGFsPXRoYXQub2Zmc2V0VG9wK3RoYXQub2Zmc2V0Qm90dG9tK3RoYXQuJGpjb25maXJtQm94LmhlaWdodCgpLXRoYXQuJGNvbnRlbnRQYW5lLmhlaWdodCgpK3RoYXQuJGNvbnRlbnQuaGVpZ2h0KCk7aWYodG90YWw8d2gpe3RoYXQuJGNvbnRlbnRQYW5lLmFkZENsYXNzKFwibm8tc2Nyb2xsXCIpO31lbHNle3RoYXQuJGNvbnRlbnRQYW5lLnJlbW92ZUNsYXNzKFwibm8tc2Nyb2xsXCIpO319fSx0aGlzLndhdGNoSW50ZXJ2YWwpO30sX292ZXJmbG93Q2xhc3M6XCJqY29uZmlybS1vdmVyZmxvd1wiLF9oaWxpZ2h0QW5pbWF0aW5nOmZhbHNlLGhpZ2hsaWdodDpmdW5jdGlvbigpe3RoaXMuaGlMaWdodE1vZGFsKCk7fSxoaUxpZ2h0TW9kYWw6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO2lmKHRoaXMuX2hpbGlnaHRBbmltYXRpbmcpe3JldHVybjt9dGhhdC4kYm9keS5hZGRDbGFzcyhcImhpbGlnaHRcIik7dmFyIGR1cmF0aW9uPXBhcnNlRmxvYXQodGhhdC4kYm9keS5jc3MoXCJhbmltYXRpb24tZHVyYXRpb25cIikpfHwyO3RoaXMuX2hpbGlnaHRBbmltYXRpbmc9dHJ1ZTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC5faGlsaWdodEFuaW1hdGluZz1mYWxzZTt0aGF0LiRib2R5LnJlbW92ZUNsYXNzKFwiaGlsaWdodFwiKTt9LGR1cmF0aW9uKjEwMDApO30sX2JpbmRFdmVudHM6ZnVuY3Rpb24oKXt2YXIgdGhhdD10aGlzO3RoaXMuYm94Q2xpY2tlZD1mYWxzZTt0aGlzLiRzY3JvbGxQYW5lLmNsaWNrKGZ1bmN0aW9uKGUpe2lmKCF0aGF0LmJveENsaWNrZWQpe3ZhciBidXR0b25OYW1lPWZhbHNlO3ZhciBzaG91bGRDbG9zZT1mYWxzZTt2YXIgc3RyO2lmKHR5cGVvZiB0aGF0LmJhY2tncm91bmREaXNtaXNzPT09XCJmdW5jdGlvblwiKXtzdHI9dGhhdC5iYWNrZ3JvdW5kRGlzbWlzcygpO31lbHNle3N0cj10aGF0LmJhY2tncm91bmREaXNtaXNzO31pZih0eXBlb2Ygc3RyPT09XCJzdHJpbmdcIiYmdHlwZW9mIHRoYXQuYnV0dG9uc1tzdHJdIT09XCJ1bmRlZmluZWRcIil7YnV0dG9uTmFtZT1zdHI7c2hvdWxkQ2xvc2U9ZmFsc2U7fWVsc2V7aWYodHlwZW9mIHN0cj09PVwidW5kZWZpbmVkXCJ8fCEhKHN0cik9PT10cnVlKXtzaG91bGRDbG9zZT10cnVlO31lbHNle3Nob3VsZENsb3NlPWZhbHNlO319aWYoYnV0dG9uTmFtZSl7dmFyIGJ0blJlc3BvbnNlPXRoYXQuYnV0dG9uc1tidXR0b25OYW1lXS5hY3Rpb24uYXBwbHkodGhhdCk7c2hvdWxkQ2xvc2U9KHR5cGVvZiBidG5SZXNwb25zZT09PVwidW5kZWZpbmVkXCIpfHwhIShidG5SZXNwb25zZSk7fWlmKHNob3VsZENsb3NlKXt0aGF0LmNsb3NlKCk7fWVsc2V7dGhhdC5oaUxpZ2h0TW9kYWwoKTt9fXRoYXQuYm94Q2xpY2tlZD1mYWxzZTt9KTt0aGlzLiRqY29uZmlybUJveC5jbGljayhmdW5jdGlvbihlKXt0aGF0LmJveENsaWNrZWQ9dHJ1ZTt9KTt2YXIgaXNLZXlEb3duPWZhbHNlOyQod2luZG93KS5vbihcImpjS2V5RG93bi5cIit0aGF0Ll9pZCxmdW5jdGlvbihlKXtpZighaXNLZXlEb3duKXtpc0tleURvd249dHJ1ZTt9fSk7JCh3aW5kb3cpLm9uKFwia2V5dXAuXCIrdGhhdC5faWQsZnVuY3Rpb24oZSl7aWYoaXNLZXlEb3duKXt0aGF0LnJlYWN0T25LZXkoZSk7aXNLZXlEb3duPWZhbHNlO319KTskKHdpbmRvdykub24oXCJyZXNpemUuXCIrdGhpcy5faWQsZnVuY3Rpb24oKXt0aGF0Ll91cGRhdGVDb250ZW50TWF4SGVpZ2h0KCk7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQucmVzZXREcmFnKCk7fSwxMDApO30pO30sX2N1YmljX2JlemllcjpcIjAuMzYsIDAuNTUsIDAuMTlcIixfZ2V0Q1NTOmZ1bmN0aW9uKHNwZWVkLGJvdW5jZSl7cmV0dXJue1wiLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uXCI6c3BlZWQvMTAwMCtcInNcIixcInRyYW5zaXRpb24tZHVyYXRpb25cIjpzcGVlZC8xMDAwK1wic1wiLFwiLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvblwiOlwiY3ViaWMtYmV6aWVyKFwiK3RoaXMuX2N1YmljX2JlemllcitcIiwgXCIrYm91bmNlK1wiKVwiLFwidHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb25cIjpcImN1YmljLWJlemllcihcIit0aGlzLl9jdWJpY19iZXppZXIrXCIsIFwiK2JvdW5jZStcIilcIn07fSxfc2V0QnV0dG9uczpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7dmFyIHRvdGFsX2J1dHRvbnM9MDtpZih0eXBlb2YgdGhpcy5idXR0b25zIT09XCJvYmplY3RcIil7dGhpcy5idXR0b25zPXt9O30kLmVhY2godGhpcy5idXR0b25zLGZ1bmN0aW9uKGtleSxidXR0b24pe3RvdGFsX2J1dHRvbnMrPTE7aWYodHlwZW9mIGJ1dHRvbj09PVwiZnVuY3Rpb25cIil7dGhhdC5idXR0b25zW2tleV09YnV0dG9uPXthY3Rpb246YnV0dG9ufTt9dGhhdC5idXR0b25zW2tleV0udGV4dD1idXR0b24udGV4dHx8a2V5O3RoYXQuYnV0dG9uc1trZXldLmJ0bkNsYXNzPWJ1dHRvbi5idG5DbGFzc3x8XCJidG4tZGVmYXVsdFwiO3RoYXQuYnV0dG9uc1trZXldLmFjdGlvbj1idXR0b24uYWN0aW9ufHxmdW5jdGlvbigpe307dGhhdC5idXR0b25zW2tleV0ua2V5cz1idXR0b24ua2V5c3x8W107dGhhdC5idXR0b25zW2tleV0uaXNIaWRkZW49YnV0dG9uLmlzSGlkZGVufHxmYWxzZTt0aGF0LmJ1dHRvbnNba2V5XS5pc0Rpc2FibGVkPWJ1dHRvbi5pc0Rpc2FibGVkfHxmYWxzZTskLmVhY2godGhhdC5idXR0b25zW2tleV0ua2V5cyxmdW5jdGlvbihpLGEpe3RoYXQuYnV0dG9uc1trZXldLmtleXNbaV09YS50b0xvd2VyQ2FzZSgpO30pO3ZhciBidXR0b25fZWxlbWVudD0kKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0blwiPjwvYnV0dG9uPicpLmh0bWwodGhhdC5idXR0b25zW2tleV0udGV4dCkuYWRkQ2xhc3ModGhhdC5idXR0b25zW2tleV0uYnRuQ2xhc3MpLnByb3AoXCJkaXNhYmxlZFwiLHRoYXQuYnV0dG9uc1trZXldLmlzRGlzYWJsZWQpLmNzcyhcImRpc3BsYXlcIix0aGF0LmJ1dHRvbnNba2V5XS5pc0hpZGRlbj9cIm5vbmVcIjpcIlwiKS5jbGljayhmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCk7dmFyIHJlcz10aGF0LmJ1dHRvbnNba2V5XS5hY3Rpb24uYXBwbHkodGhhdCxbdGhhdC5idXR0b25zW2tleV1dKTt0aGF0Lm9uQWN0aW9uLmFwcGx5KHRoYXQsW2tleSx0aGF0LmJ1dHRvbnNba2V5XV0pO3RoYXQuX3N0b3BDb3VudERvd24oKTtpZih0eXBlb2YgcmVzPT09XCJ1bmRlZmluZWRcInx8cmVzKXt0aGF0LmNsb3NlKCk7fX0pO3RoYXQuYnV0dG9uc1trZXldLmVsPWJ1dHRvbl9lbGVtZW50O3RoYXQuYnV0dG9uc1trZXldLnNldFRleHQ9ZnVuY3Rpb24odGV4dCl7YnV0dG9uX2VsZW1lbnQuaHRtbCh0ZXh0KTt9O3RoYXQuYnV0dG9uc1trZXldLmFkZENsYXNzPWZ1bmN0aW9uKGNsYXNzTmFtZSl7YnV0dG9uX2VsZW1lbnQuYWRkQ2xhc3MoY2xhc3NOYW1lKTt9O3RoYXQuYnV0dG9uc1trZXldLnJlbW92ZUNsYXNzPWZ1bmN0aW9uKGNsYXNzTmFtZSl7YnV0dG9uX2VsZW1lbnQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTt9O3RoYXQuYnV0dG9uc1trZXldLmRpc2FibGU9ZnVuY3Rpb24oKXt0aGF0LmJ1dHRvbnNba2V5XS5pc0Rpc2FibGVkPXRydWU7YnV0dG9uX2VsZW1lbnQucHJvcChcImRpc2FibGVkXCIsdHJ1ZSk7fTt0aGF0LmJ1dHRvbnNba2V5XS5lbmFibGU9ZnVuY3Rpb24oKXt0aGF0LmJ1dHRvbnNba2V5XS5pc0Rpc2FibGVkPWZhbHNlO2J1dHRvbl9lbGVtZW50LnByb3AoXCJkaXNhYmxlZFwiLGZhbHNlKTt9O3RoYXQuYnV0dG9uc1trZXldLnNob3c9ZnVuY3Rpb24oKXt0aGF0LmJ1dHRvbnNba2V5XS5pc0hpZGRlbj1mYWxzZTtidXR0b25fZWxlbWVudC5jc3MoXCJkaXNwbGF5XCIsXCJcIik7fTt0aGF0LmJ1dHRvbnNba2V5XS5oaWRlPWZ1bmN0aW9uKCl7dGhhdC5idXR0b25zW2tleV0uaXNIaWRkZW49dHJ1ZTtidXR0b25fZWxlbWVudC5jc3MoXCJkaXNwbGF5XCIsXCJub25lXCIpO307dGhhdFtcIiRfXCIra2V5XT10aGF0W1wiJCRcIitrZXldPWJ1dHRvbl9lbGVtZW50O3RoYXQuJGJ0bmMuYXBwZW5kKGJ1dHRvbl9lbGVtZW50KTt9KTtpZih0b3RhbF9idXR0b25zPT09MCl7dGhpcy4kYnRuYy5oaWRlKCk7fWlmKHRoaXMuY2xvc2VJY29uPT09bnVsbCYmdG90YWxfYnV0dG9ucz09PTApe3RoaXMuY2xvc2VJY29uPXRydWU7fWlmKHRoaXMuY2xvc2VJY29uKXtpZih0aGlzLmNsb3NlSWNvbkNsYXNzKXt2YXIgY2xvc2VIdG1sPSc8aSBjbGFzcz1cIicrdGhpcy5jbG9zZUljb25DbGFzcysnXCI+PC9pPic7dGhpcy4kY2xvc2VJY29uLmh0bWwoY2xvc2VIdG1sKTt9dGhpcy4kY2xvc2VJY29uLmNsaWNrKGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgYnV0dG9uTmFtZT1mYWxzZTt2YXIgc2hvdWxkQ2xvc2U9ZmFsc2U7dmFyIHN0cjtpZih0eXBlb2YgdGhhdC5jbG9zZUljb249PT1cImZ1bmN0aW9uXCIpe3N0cj10aGF0LmNsb3NlSWNvbigpO31lbHNle3N0cj10aGF0LmNsb3NlSWNvbjt9aWYodHlwZW9mIHN0cj09PVwic3RyaW5nXCImJnR5cGVvZiB0aGF0LmJ1dHRvbnNbc3RyXSE9PVwidW5kZWZpbmVkXCIpe2J1dHRvbk5hbWU9c3RyO3Nob3VsZENsb3NlPWZhbHNlO31lbHNle2lmKHR5cGVvZiBzdHI9PT1cInVuZGVmaW5lZFwifHwhIShzdHIpPT09dHJ1ZSl7c2hvdWxkQ2xvc2U9dHJ1ZTt9ZWxzZXtzaG91bGRDbG9zZT1mYWxzZTt9fWlmKGJ1dHRvbk5hbWUpe3ZhciBidG5SZXNwb25zZT10aGF0LmJ1dHRvbnNbYnV0dG9uTmFtZV0uYWN0aW9uLmFwcGx5KHRoYXQpO3Nob3VsZENsb3NlPSh0eXBlb2YgYnRuUmVzcG9uc2U9PT1cInVuZGVmaW5lZFwiKXx8ISEoYnRuUmVzcG9uc2UpO31pZihzaG91bGRDbG9zZSl7dGhhdC5jbG9zZSgpO319KTt0aGlzLiRjbG9zZUljb24uc2hvdygpO31lbHNle3RoaXMuJGNsb3NlSWNvbi5oaWRlKCk7fX0sc2V0VGl0bGU6ZnVuY3Rpb24oc3RyaW5nLGZvcmNlKXtmb3JjZT1mb3JjZXx8ZmFsc2U7aWYodHlwZW9mIHN0cmluZyE9PVwidW5kZWZpbmVkXCIpe2lmKHR5cGVvZiBzdHJpbmc9PT1cInN0cmluZ1wiKXt0aGlzLnRpdGxlPXN0cmluZzt9ZWxzZXtpZih0eXBlb2Ygc3RyaW5nPT09XCJmdW5jdGlvblwiKXtpZih0eXBlb2Ygc3RyaW5nLnByb21pc2U9PT1cImZ1bmN0aW9uXCIpe2NvbnNvbGUuZXJyb3IoXCJQcm9taXNlIHdhcyByZXR1cm5lZCBmcm9tIHRpdGxlIGZ1bmN0aW9uLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO312YXIgcmVzcG9uc2U9c3RyaW5nKCk7aWYodHlwZW9mIHJlc3BvbnNlPT09XCJzdHJpbmdcIil7dGhpcy50aXRsZT1yZXNwb25zZTt9ZWxzZXt0aGlzLnRpdGxlPWZhbHNlO319ZWxzZXt0aGlzLnRpdGxlPWZhbHNlO319fWlmKHRoaXMuaXNBamF4TG9hZGluZyYmIWZvcmNlKXtyZXR1cm47fXRoaXMuJHRpdGxlLmh0bWwodGhpcy50aXRsZXx8XCJcIik7dGhpcy51cGRhdGVUaXRsZUNvbnRhaW5lcigpO30sc2V0SWNvbjpmdW5jdGlvbihpY29uQ2xhc3MsZm9yY2Upe2ZvcmNlPWZvcmNlfHxmYWxzZTtpZih0eXBlb2YgaWNvbkNsYXNzIT09XCJ1bmRlZmluZWRcIil7aWYodHlwZW9mIGljb25DbGFzcz09PVwic3RyaW5nXCIpe3RoaXMuaWNvbj1pY29uQ2xhc3M7fWVsc2V7aWYodHlwZW9mIGljb25DbGFzcz09PVwiZnVuY3Rpb25cIil7dmFyIHJlc3BvbnNlPWljb25DbGFzcygpO2lmKHR5cGVvZiByZXNwb25zZT09PVwic3RyaW5nXCIpe3RoaXMuaWNvbj1yZXNwb25zZTt9ZWxzZXt0aGlzLmljb249ZmFsc2U7fX1lbHNle3RoaXMuaWNvbj1mYWxzZTt9fX1pZih0aGlzLmlzQWpheExvYWRpbmcmJiFmb3JjZSl7cmV0dXJuO310aGlzLiRpY29uLmh0bWwodGhpcy5pY29uPyc8aSBjbGFzcz1cIicrdGhpcy5pY29uKydcIj48L2k+JzpcIlwiKTt0aGlzLnVwZGF0ZVRpdGxlQ29udGFpbmVyKCk7fSx1cGRhdGVUaXRsZUNvbnRhaW5lcjpmdW5jdGlvbigpe2lmKCF0aGlzLnRpdGxlJiYhdGhpcy5pY29uKXt0aGlzLiR0aXRsZUNvbnRhaW5lci5oaWRlKCk7fWVsc2V7dGhpcy4kdGl0bGVDb250YWluZXIuc2hvdygpO319LHNldENvbnRlbnRQcmVwZW5kOmZ1bmN0aW9uKGNvbnRlbnQsZm9yY2Upe2lmKCFjb250ZW50KXtyZXR1cm47fXRoaXMuY29udGVudFBhcnNlZC5wcmVwZW5kKGNvbnRlbnQpO30sc2V0Q29udGVudEFwcGVuZDpmdW5jdGlvbihjb250ZW50KXtpZighY29udGVudCl7cmV0dXJuO310aGlzLmNvbnRlbnRQYXJzZWQuYXBwZW5kKGNvbnRlbnQpO30sc2V0Q29udGVudDpmdW5jdGlvbihjb250ZW50LGZvcmNlKXtmb3JjZT0hIWZvcmNlO3ZhciB0aGF0PXRoaXM7aWYoY29udGVudCl7dGhpcy5jb250ZW50UGFyc2VkLmh0bWwoXCJcIikuYXBwZW5kKGNvbnRlbnQpO31pZih0aGlzLmlzQWpheExvYWRpbmcmJiFmb3JjZSl7cmV0dXJuO310aGlzLiRjb250ZW50Lmh0bWwoXCJcIik7dGhpcy4kY29udGVudC5hcHBlbmQodGhpcy5jb250ZW50UGFyc2VkKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC4kYm9keS5maW5kKFwiaW5wdXRbYXV0b2ZvY3VzXTp2aXNpYmxlOmZpcnN0XCIpLmZvY3VzKCk7fSwxMDApO30sbG9hZGluZ1NwaW5uZXI6ZmFsc2Usc2hvd0xvYWRpbmc6ZnVuY3Rpb24oZGlzYWJsZUJ1dHRvbnMpe3RoaXMubG9hZGluZ1NwaW5uZXI9dHJ1ZTt0aGlzLiRqY29uZmlybUJveC5hZGRDbGFzcyhcImxvYWRpbmdcIik7aWYoZGlzYWJsZUJ1dHRvbnMpe3RoaXMuJGJ0bmMuZmluZChcImJ1dHRvblwiKS5wcm9wKFwiZGlzYWJsZWRcIix0cnVlKTt9fSxoaWRlTG9hZGluZzpmdW5jdGlvbihlbmFibGVCdXR0b25zKXt0aGlzLmxvYWRpbmdTcGlubmVyPWZhbHNlO3RoaXMuJGpjb25maXJtQm94LnJlbW92ZUNsYXNzKFwibG9hZGluZ1wiKTtpZihlbmFibGVCdXR0b25zKXt0aGlzLiRidG5jLmZpbmQoXCJidXR0b25cIikucHJvcChcImRpc2FibGVkXCIsZmFsc2UpO319LGFqYXhSZXNwb25zZTpmYWxzZSxjb250ZW50UGFyc2VkOlwiXCIsaXNBamF4OmZhbHNlLGlzQWpheExvYWRpbmc6ZmFsc2UsX3BhcnNlQ29udGVudDpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7dmFyIGU9XCImbmJzcDtcIjtpZih0eXBlb2YgdGhpcy5jb250ZW50PT09XCJmdW5jdGlvblwiKXt2YXIgcmVzPXRoaXMuY29udGVudC5hcHBseSh0aGlzKTtpZih0eXBlb2YgcmVzPT09XCJzdHJpbmdcIil7dGhpcy5jb250ZW50PXJlczt9ZWxzZXtpZih0eXBlb2YgcmVzPT09XCJvYmplY3RcIiYmdHlwZW9mIHJlcy5hbHdheXM9PT1cImZ1bmN0aW9uXCIpe3RoaXMuaXNBamF4PXRydWU7dGhpcy5pc0FqYXhMb2FkaW5nPXRydWU7cmVzLmFsd2F5cyhmdW5jdGlvbihkYXRhLHN0YXR1cyx4aHIpe3RoYXQuYWpheFJlc3BvbnNlPXtkYXRhOmRhdGEsc3RhdHVzOnN0YXR1cyx4aHI6eGhyfTt0aGF0Ll9jb250ZW50UmVhZHkucmVzb2x2ZShkYXRhLHN0YXR1cyx4aHIpO2lmKHR5cGVvZiB0aGF0LmNvbnRlbnRMb2FkZWQ9PT1cImZ1bmN0aW9uXCIpe3RoYXQuY29udGVudExvYWRlZChkYXRhLHN0YXR1cyx4aHIpO319KTt0aGlzLmNvbnRlbnQ9ZTt9ZWxzZXt0aGlzLmNvbnRlbnQ9ZTt9fX1pZih0eXBlb2YgdGhpcy5jb250ZW50PT09XCJzdHJpbmdcIiYmdGhpcy5jb250ZW50LnN1YnN0cigwLDQpLnRvTG93ZXJDYXNlKCk9PT1cInVybDpcIil7dGhpcy5pc0FqYXg9dHJ1ZTt0aGlzLmlzQWpheExvYWRpbmc9dHJ1ZTt2YXIgdT10aGlzLmNvbnRlbnQuc3Vic3RyaW5nKDQsdGhpcy5jb250ZW50Lmxlbmd0aCk7JC5nZXQodSkuZG9uZShmdW5jdGlvbihodG1sKXt0aGF0LmNvbnRlbnRQYXJzZWQuaHRtbChodG1sKTt9KS5hbHdheXMoZnVuY3Rpb24oZGF0YSxzdGF0dXMseGhyKXt0aGF0LmFqYXhSZXNwb25zZT17ZGF0YTpkYXRhLHN0YXR1czpzdGF0dXMseGhyOnhocn07dGhhdC5fY29udGVudFJlYWR5LnJlc29sdmUoZGF0YSxzdGF0dXMseGhyKTtpZih0eXBlb2YgdGhhdC5jb250ZW50TG9hZGVkPT09XCJmdW5jdGlvblwiKXt0aGF0LmNvbnRlbnRMb2FkZWQoZGF0YSxzdGF0dXMseGhyKTt9fSk7fWlmKCF0aGlzLmNvbnRlbnQpe3RoaXMuY29udGVudD1lO31pZighdGhpcy5pc0FqYXgpe3RoaXMuY29udGVudFBhcnNlZC5odG1sKHRoaXMuY29udGVudCk7dGhpcy5zZXRDb250ZW50KCk7dGhhdC5fY29udGVudFJlYWR5LnJlc29sdmUoKTt9fSxfc3RvcENvdW50RG93bjpmdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwodGhpcy5hdXRvQ2xvc2VJbnRlcnZhbCk7aWYodGhpcy4kY2Qpe3RoaXMuJGNkLnJlbW92ZSgpO319LF9zdGFydENvdW50RG93bjpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7dmFyIG9wdD10aGlzLmF1dG9DbG9zZS5zcGxpdChcInxcIik7aWYob3B0Lmxlbmd0aCE9PTIpe2NvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIG9wdGlvbiBmb3IgYXV0b0Nsb3NlLiBleGFtcGxlICdjbG9zZXwxMDAwMCdcIik7cmV0dXJuIGZhbHNlO312YXIgYnV0dG9uX2tleT1vcHRbMF07dmFyIHRpbWU9cGFyc2VJbnQob3B0WzFdKTtpZih0eXBlb2YgdGhpcy5idXR0b25zW2J1dHRvbl9rZXldPT09XCJ1bmRlZmluZWRcIil7Y29uc29sZS5lcnJvcihcIkludmFsaWQgYnV0dG9uIGtleSAnXCIrYnV0dG9uX2tleStcIicgZm9yIGF1dG9DbG9zZVwiKTtyZXR1cm4gZmFsc2U7fXZhciBzZWNvbmRzPU1hdGguY2VpbCh0aW1lLzEwMDApO3RoaXMuJGNkPSQoJzxzcGFuIGNsYXNzPVwiY291bnRkb3duXCI+ICgnK3NlY29uZHMrXCIpPC9zcGFuPlwiKS5hcHBlbmRUbyh0aGlzW1wiJF9cIitidXR0b25fa2V5XSk7dGhpcy5hdXRvQ2xvc2VJbnRlcnZhbD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe3RoYXQuJGNkLmh0bWwoXCIgKFwiKyhzZWNvbmRzLT0xKStcIikgXCIpO2lmKHNlY29uZHM8PTApe3RoYXRbXCIkJFwiK2J1dHRvbl9rZXldLnRyaWdnZXIoXCJjbGlja1wiKTt0aGF0Ll9zdG9wQ291bnREb3duKCk7fX0sMTAwMCk7fSxfZ2V0S2V5OmZ1bmN0aW9uKGtleSl7c3dpdGNoKGtleSl7Y2FzZSAxOTI6cmV0dXJuXCJ0aWxkZVwiO2Nhc2UgMTM6cmV0dXJuXCJlbnRlclwiO2Nhc2UgMTY6cmV0dXJuXCJzaGlmdFwiO2Nhc2UgOTpyZXR1cm5cInRhYlwiO2Nhc2UgMjA6cmV0dXJuXCJjYXBzbG9ja1wiO2Nhc2UgMTc6cmV0dXJuXCJjdHJsXCI7Y2FzZSA5MTpyZXR1cm5cIndpblwiO2Nhc2UgMTg6cmV0dXJuXCJhbHRcIjtjYXNlIDI3OnJldHVyblwiZXNjXCI7Y2FzZSAzMjpyZXR1cm5cInNwYWNlXCI7fXZhciBpbml0aWFsPVN0cmluZy5mcm9tQ2hhckNvZGUoa2V5KTtpZigvXltBLXowLTldKyQvLnRlc3QoaW5pdGlhbCkpe3JldHVybiBpbml0aWFsLnRvTG93ZXJDYXNlKCk7fWVsc2V7cmV0dXJuIGZhbHNlO319LHJlYWN0T25LZXk6ZnVuY3Rpb24oZSl7dmFyIHRoYXQ9dGhpczt2YXIgYT0kKFwiLmpjb25maXJtXCIpO2lmKGEuZXEoYS5sZW5ndGgtMSlbMF0hPT10aGlzLiRlbFswXSl7cmV0dXJuIGZhbHNlO312YXIga2V5PWUud2hpY2g7aWYodGhpcy4kY29udGVudC5maW5kKFwiOmlucHV0XCIpLmlzKFwiOmZvY3VzXCIpJiYvMTN8MzIvLnRlc3Qoa2V5KSl7cmV0dXJuIGZhbHNlO312YXIga2V5Q2hhcj10aGlzLl9nZXRLZXkoa2V5KTtpZihrZXlDaGFyPT09XCJlc2NcIiYmdGhpcy5lc2NhcGVLZXkpe2lmKHRoaXMuZXNjYXBlS2V5PT09dHJ1ZSl7dGhpcy4kc2Nyb2xsUGFuZS50cmlnZ2VyKFwiY2xpY2tcIik7fWVsc2V7aWYodHlwZW9mIHRoaXMuZXNjYXBlS2V5PT09XCJzdHJpbmdcInx8dHlwZW9mIHRoaXMuZXNjYXBlS2V5PT09XCJmdW5jdGlvblwiKXt2YXIgYnV0dG9uS2V5O2lmKHR5cGVvZiB0aGlzLmVzY2FwZUtleT09PVwiZnVuY3Rpb25cIil7YnV0dG9uS2V5PXRoaXMuZXNjYXBlS2V5KCk7fWVsc2V7YnV0dG9uS2V5PXRoaXMuZXNjYXBlS2V5O31pZihidXR0b25LZXkpe2lmKHR5cGVvZiB0aGlzLmJ1dHRvbnNbYnV0dG9uS2V5XT09PVwidW5kZWZpbmVkXCIpe2NvbnNvbGUud2FybihcIkludmFsaWQgZXNjYXBlS2V5LCBubyBidXR0b25zIGZvdW5kIHdpdGgga2V5IFwiK2J1dHRvbktleSk7fWVsc2V7dGhpc1tcIiRfXCIrYnV0dG9uS2V5XS50cmlnZ2VyKFwiY2xpY2tcIik7fX19fX0kLmVhY2godGhpcy5idXR0b25zLGZ1bmN0aW9uKGtleSxidXR0b24pe2lmKGJ1dHRvbi5rZXlzLmluZGV4T2Yoa2V5Q2hhcikhPT0tMSl7dGhhdFtcIiRfXCIra2V5XS50cmlnZ2VyKFwiY2xpY2tcIik7fX0pO30sc2V0RGlhbG9nQ2VudGVyOmZ1bmN0aW9uKCl7Y29uc29sZS5pbmZvKFwic2V0RGlhbG9nQ2VudGVyIGlzIGRlcHJlY2F0ZWQsIGRpYWxvZ3MgYXJlIGNlbnRlcmVkIHdpdGggQ1NTMyB0YWJsZXNcIik7fSxfdW53YXRjaENvbnRlbnQ6ZnVuY3Rpb24oKXtjbGVhckludGVydmFsKHRoaXMuX3RpbWVyKTt9LGNsb3NlOmZ1bmN0aW9uKG9uQ2xvc2VQYXlsb2FkKXt2YXIgdGhhdD10aGlzO2lmKHR5cGVvZiB0aGlzLm9uQ2xvc2U9PT1cImZ1bmN0aW9uXCIpe3RoaXMub25DbG9zZShvbkNsb3NlUGF5bG9hZCk7fXRoaXMuX3Vud2F0Y2hDb250ZW50KCk7JCh3aW5kb3cpLnVuYmluZChcInJlc2l6ZS5cIit0aGlzLl9pZCk7JCh3aW5kb3cpLnVuYmluZChcImtleXVwLlwiK3RoaXMuX2lkKTskKHdpbmRvdykudW5iaW5kKFwiamNLZXlEb3duLlwiK3RoaXMuX2lkKTtpZih0aGlzLmRyYWdnYWJsZSl7JCh3aW5kb3cpLnVuYmluZChcIm1vdXNlbW92ZS5cIit0aGlzLl9pZCk7JCh3aW5kb3cpLnVuYmluZChcIm1vdXNldXAuXCIrdGhpcy5faWQpO3RoaXMuJHRpdGxlQ29udGFpbmVyLnVuYmluZChcIm1vdXNlZG93blwiKTt9dGhhdC4kZWwucmVtb3ZlQ2xhc3ModGhhdC5sb2FkZWRDbGFzcyk7JChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJqY29uZmlybS1uby1zY3JvbGwtXCIrdGhhdC5faWQpO3RoYXQuJGpjb25maXJtQm94Q29udGFpbmVyLnJlbW92ZUNsYXNzKFwiamNvbmZpcm0tbm8tdHJhbnNpdGlvblwiKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhhdC4kYm9keS5hZGRDbGFzcyh0aGF0LmNsb3NlQW5pbWF0aW9uUGFyc2VkKTt0aGF0LiRqY29uZmlybUJnLmFkZENsYXNzKFwiamNvbmZpcm0tYmctaFwiKTt2YXIgY2xvc2VUaW1lcj0odGhhdC5jbG9zZUFuaW1hdGlvbj09PVwibm9uZVwiKT8xOnRoYXQuYW5pbWF0aW9uU3BlZWQ7c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuJGVsLnJlbW92ZSgpO3ZhciBsPXcuamNvbmZpcm0uaW5zdGFuY2VzO3ZhciBpPXcuamNvbmZpcm0uaW5zdGFuY2VzLmxlbmd0aC0xO2ZvcihpO2k+PTA7aS0tKXtpZih3Lmpjb25maXJtLmluc3RhbmNlc1tpXS5faWQ9PT10aGF0Ll9pZCl7dy5qY29uZmlybS5pbnN0YW5jZXMuc3BsaWNlKGksMSk7fX1pZighdy5qY29uZmlybS5pbnN0YW5jZXMubGVuZ3RoKXtpZih0aGF0LnNjcm9sbFRvUHJldmlvdXNFbGVtZW50JiZ3Lmpjb25maXJtLmxhc3RGb2N1c2VkJiZ3Lmpjb25maXJtLmxhc3RGb2N1c2VkLmxlbmd0aCYmJC5jb250YWlucyhkb2N1bWVudCx3Lmpjb25maXJtLmxhc3RGb2N1c2VkWzBdKSl7dmFyICRsZj13Lmpjb25maXJtLmxhc3RGb2N1c2VkO2lmKHRoYXQuc2Nyb2xsVG9QcmV2aW91c0VsZW1lbnRBbmltYXRlKXt2YXIgc3Q9JCh3aW5kb3cpLnNjcm9sbFRvcCgpO3ZhciBvdD13Lmpjb25maXJtLmxhc3RGb2N1c2VkLm9mZnNldCgpLnRvcDt2YXIgd2g9JCh3aW5kb3cpLmhlaWdodCgpO2lmKCEob3Q+c3QmJm90PChzdCt3aCkpKXt2YXIgc2Nyb2xsVG89KG90LU1hdGgucm91bmQoKHdoLzMpKSk7JChcImh0bWwsIGJvZHlcIikuYW5pbWF0ZSh7c2Nyb2xsVG9wOnNjcm9sbFRvfSx0aGF0LmFuaW1hdGlvblNwZWVkLFwic3dpbmdcIixmdW5jdGlvbigpeyRsZi5mb2N1cygpO30pO31lbHNleyRsZi5mb2N1cygpO319ZWxzZXskbGYuZm9jdXMoKTt9dy5qY29uZmlybS5sYXN0Rm9jdXNlZD1mYWxzZTt9fWlmKHR5cGVvZiB0aGF0Lm9uRGVzdHJveT09PVwiZnVuY3Rpb25cIil7dGhhdC5vbkRlc3Ryb3koKTt9fSxjbG9zZVRpbWVyKjAuNCk7fSw1MCk7cmV0dXJuIHRydWU7fSxvcGVuOmZ1bmN0aW9uKCl7aWYodGhpcy5pc09wZW4oKSl7cmV0dXJuIGZhbHNlO310aGlzLl9idWlsZEhUTUwoKTt0aGlzLl9iaW5kRXZlbnRzKCk7dGhpcy5fb3BlbigpO3JldHVybiB0cnVlO30sc2V0U3RhcnRpbmdQb2ludDpmdW5jdGlvbigpe3ZhciBlbD1mYWxzZTtpZih0aGlzLmFuaW1hdGVGcm9tRWxlbWVudCE9PXRydWUmJnRoaXMuYW5pbWF0ZUZyb21FbGVtZW50KXtlbD10aGlzLmFuaW1hdGVGcm9tRWxlbWVudDt3Lmpjb25maXJtLmxhc3RDbGlja2VkPWZhbHNlO31lbHNle2lmKHcuamNvbmZpcm0ubGFzdENsaWNrZWQmJnRoaXMuYW5pbWF0ZUZyb21FbGVtZW50PT09dHJ1ZSl7ZWw9dy5qY29uZmlybS5sYXN0Q2xpY2tlZDt3Lmpjb25maXJtLmxhc3RDbGlja2VkPWZhbHNlO31lbHNle3JldHVybiBmYWxzZTt9fWlmKCFlbCl7cmV0dXJuIGZhbHNlO312YXIgb2Zmc2V0PWVsLm9mZnNldCgpO3ZhciBpVG9wPWVsLm91dGVySGVpZ2h0KCkvMjt2YXIgaUxlZnQ9ZWwub3V0ZXJXaWR0aCgpLzI7aVRvcC09dGhpcy4kamNvbmZpcm1Cb3gub3V0ZXJIZWlnaHQoKS8yO2lMZWZ0LT10aGlzLiRqY29uZmlybUJveC5vdXRlcldpZHRoKCkvMjt2YXIgc291cmNlVG9wPW9mZnNldC50b3AraVRvcDtzb3VyY2VUb3A9c291cmNlVG9wLXRoaXMuX3Njcm9sbFRvcCgpO3ZhciBzb3VyY2VMZWZ0PW9mZnNldC5sZWZ0K2lMZWZ0O3ZhciB3aD0kKHdpbmRvdykuaGVpZ2h0KCkvMjt2YXIgd3c9JCh3aW5kb3cpLndpZHRoKCkvMjt2YXIgdGFyZ2V0SD13aC10aGlzLiRqY29uZmlybUJveC5vdXRlckhlaWdodCgpLzI7dmFyIHRhcmdldFc9d3ctdGhpcy4kamNvbmZpcm1Cb3gub3V0ZXJXaWR0aCgpLzI7c291cmNlVG9wLT10YXJnZXRIO3NvdXJjZUxlZnQtPXRhcmdldFc7aWYoTWF0aC5hYnMoc291cmNlVG9wKT53aHx8TWF0aC5hYnMoc291cmNlTGVmdCk+d3cpe3JldHVybiBmYWxzZTt9dGhpcy4kamNvbmZpcm1Cb3hDb250YWluZXIuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrc291cmNlTGVmdCtcInB4LCBcIitzb3VyY2VUb3ArXCJweClcIik7fSxfb3BlbjpmdW5jdGlvbigpe3ZhciB0aGF0PXRoaXM7aWYodHlwZW9mIHRoYXQub25PcGVuQmVmb3JlPT09XCJmdW5jdGlvblwiKXt0aGF0Lm9uT3BlbkJlZm9yZSgpO310aGlzLiRib2R5LnJlbW92ZUNsYXNzKHRoaXMuYW5pbWF0aW9uUGFyc2VkKTt0aGlzLiRqY29uZmlybUJnLnJlbW92ZUNsYXNzKFwiamNvbmZpcm0tYmctaFwiKTt0aGlzLiRib2R5LmZvY3VzKCk7dGhhdC4kamNvbmZpcm1Cb3hDb250YWluZXIuY3NzKFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGUoXCIrMCtcInB4LCBcIiswK1wicHgpXCIpO3NldFRpbWVvdXQoZnVuY3Rpb24oKXt0aGF0LiRib2R5LmNzcyh0aGF0Ll9nZXRDU1ModGhhdC5hbmltYXRpb25TcGVlZCwxKSk7dGhhdC4kYm9keS5jc3Moe1widHJhbnNpdGlvbi1wcm9wZXJ0eVwiOnRoYXQuJGJvZHkuY3NzKFwidHJhbnNpdGlvbi1wcm9wZXJ0eVwiKStcIiwgbWFyZ2luXCJ9KTt0aGF0LiRqY29uZmlybUJveENvbnRhaW5lci5hZGRDbGFzcyhcImpjb25maXJtLW5vLXRyYW5zaXRpb25cIik7dGhhdC5fbW9kYWxSZWFkeS5yZXNvbHZlKCk7aWYodHlwZW9mIHRoYXQub25PcGVuPT09XCJmdW5jdGlvblwiKXt0aGF0Lm9uT3BlbigpO310aGF0LiRlbC5hZGRDbGFzcyh0aGF0LmxvYWRlZENsYXNzKTt9LHRoaXMuYW5pbWF0aW9uU3BlZWQpO30sbG9hZGVkQ2xhc3M6XCJqY29uZmlybS1vcGVuXCIsaXNDbG9zZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gIXRoaXMuJGVsfHx0aGlzLiRlbC5wYXJlbnQoKS5sZW5ndGg9PT0wO30saXNPcGVuOmZ1bmN0aW9uKCl7cmV0dXJuICF0aGlzLmlzQ2xvc2VkKCk7fSx0b2dnbGU6ZnVuY3Rpb24oKXtpZighdGhpcy5pc09wZW4oKSl7dGhpcy5vcGVuKCk7fWVsc2V7dGhpcy5jbG9zZSgpO319fTt3Lmpjb25maXJtLmluc3RhbmNlcz1bXTt3Lmpjb25maXJtLmxhc3RGb2N1c2VkPWZhbHNlO3cuamNvbmZpcm0ucGx1Z2luRGVmYXVsdHM9e3RlbXBsYXRlOic8ZGl2IGNsYXNzPVwiamNvbmZpcm1cIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tYmcgamNvbmZpcm0tYmctaFwiPjwvZGl2PjxkaXYgY2xhc3M9XCJqY29uZmlybS1zY3JvbGxwYW5lXCI+PGRpdiBjbGFzcz1cImpjb25maXJtLXJvd1wiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1jZWxsXCI+PGRpdiBjbGFzcz1cImpjb25maXJtLWhvbGRlclwiPjxkaXYgY2xhc3M9XCJqYy1iczMtY29udGFpbmVyXCI+PGRpdiBjbGFzcz1cImpjLWJzMy1yb3dcIj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tYm94LWNvbnRhaW5lciBqY29uZmlybS1hbmltYXRlZFwiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1ib3hcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1sYWJlbGxlZGJ5PVwibGFiZWxsZWRcIiB0YWJpbmRleD1cIi0xXCI+PGRpdiBjbGFzcz1cImpjb25maXJtLWNsb3NlSWNvblwiPiZ0aW1lczs8L2Rpdj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tdGl0bGUtY1wiPjxzcGFuIGNsYXNzPVwiamNvbmZpcm0taWNvbi1jXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwiamNvbmZpcm0tdGl0bGVcIj48L3NwYW4+PC9kaXY+PGRpdiBjbGFzcz1cImpjb25maXJtLWNvbnRlbnQtcGFuZVwiPjxkaXYgY2xhc3M9XCJqY29uZmlybS1jb250ZW50XCI+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImpjb25maXJtLWJ1dHRvbnNcIj48L2Rpdj48ZGl2IGNsYXNzPVwiamNvbmZpcm0tY2xlYXJcIj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj4nLHRpdGxlOlwiSGVsbG9cIix0aXRsZUNsYXNzOlwiXCIsdHlwZTpcImRlZmF1bHRcIix0eXBlQW5pbWF0ZWQ6dHJ1ZSxkcmFnZ2FibGU6dHJ1ZSxkcmFnV2luZG93R2FwOjE1LGRyYWdXaW5kb3dCb3JkZXI6dHJ1ZSxhbmltYXRlRnJvbUVsZW1lbnQ6dHJ1ZSxhbGlnbk1pZGRsZTp0cnVlLHNtb290aENvbnRlbnQ6dHJ1ZSxjb250ZW50OlwiQXJlIHlvdSBzdXJlIHRvIGNvbnRpbnVlP1wiLGJ1dHRvbnM6e30sZGVmYXVsdEJ1dHRvbnM6e29rOnthY3Rpb246ZnVuY3Rpb24oKXt9fSxjbG9zZTp7YWN0aW9uOmZ1bmN0aW9uKCl7fX19LGNvbnRlbnRMb2FkZWQ6ZnVuY3Rpb24oKXt9LGljb246XCJcIixsYXp5T3BlbjpmYWxzZSxiZ09wYWNpdHk6bnVsbCx0aGVtZTpcImxpZ2h0XCIsYW5pbWF0aW9uOlwic2NhbGVcIixjbG9zZUFuaW1hdGlvbjpcInNjYWxlXCIsYW5pbWF0aW9uU3BlZWQ6NDAwLGFuaW1hdGlvbkJvdW5jZToxLGVzY2FwZUtleTp0cnVlLHJ0bDpmYWxzZSxjb250YWluZXI6XCJib2R5XCIsY29udGFpbmVyRmx1aWQ6ZmFsc2UsYmFja2dyb3VuZERpc21pc3M6ZmFsc2UsYmFja2dyb3VuZERpc21pc3NBbmltYXRpb246XCJzaGFrZVwiLGF1dG9DbG9zZTpmYWxzZSxjbG9zZUljb246bnVsbCxjbG9zZUljb25DbGFzczpmYWxzZSx3YXRjaEludGVydmFsOjEwMCxjb2x1bW5DbGFzczpcImNvbC1tZC00IGNvbC1tZC1vZmZzZXQtNCBjb2wtc20tNiBjb2wtc20tb2Zmc2V0LTMgY29sLXhzLTEwIGNvbC14cy1vZmZzZXQtMVwiLGJveFdpZHRoOlwiNTAlXCIsc2Nyb2xsVG9QcmV2aW91c0VsZW1lbnQ6dHJ1ZSxzY3JvbGxUb1ByZXZpb3VzRWxlbWVudEFuaW1hdGU6dHJ1ZSx1c2VCb290c3RyYXA6dHJ1ZSxvZmZzZXRUb3A6NDAsb2Zmc2V0Qm90dG9tOjQwLGJvb3RzdHJhcENsYXNzZXM6e2NvbnRhaW5lcjpcImNvbnRhaW5lclwiLGNvbnRhaW5lckZsdWlkOlwiY29udGFpbmVyLWZsdWlkXCIscm93Olwicm93XCJ9LG9uQ29udGVudFJlYWR5OmZ1bmN0aW9uKCl7fSxvbk9wZW5CZWZvcmU6ZnVuY3Rpb24oKXt9LG9uT3BlbjpmdW5jdGlvbigpe30sb25DbG9zZTpmdW5jdGlvbigpe30sb25EZXN0cm95OmZ1bmN0aW9uKCl7fSxvbkFjdGlvbjpmdW5jdGlvbigpe319O3ZhciBrZXlEb3duPWZhbHNlOyQod2luZG93KS5vbihcImtleWRvd25cIixmdW5jdGlvbihlKXtpZigha2V5RG93bil7dmFyICR0YXJnZXQ9JChlLnRhcmdldCk7dmFyIHBhc3M9ZmFsc2U7aWYoJHRhcmdldC5jbG9zZXN0KFwiLmpjb25maXJtLWJveFwiKS5sZW5ndGgpe3Bhc3M9dHJ1ZTt9aWYocGFzcyl7JCh3aW5kb3cpLnRyaWdnZXIoXCJqY0tleURvd25cIik7fWtleURvd249dHJ1ZTt9fSk7JCh3aW5kb3cpLm9uKFwia2V5dXBcIixmdW5jdGlvbigpe2tleURvd249ZmFsc2U7fSk7dy5qY29uZmlybS5sYXN0Q2xpY2tlZD1mYWxzZTskKGRvY3VtZW50KS5vbihcIm1vdXNlZG93blwiLFwiYnV0dG9uLCBhLCBbamMtc291cmNlXVwiLGZ1bmN0aW9uKCl7dy5qY29uZmlybS5sYXN0Q2xpY2tlZD0kKHRoaXMpO30pO30pKTsiLCIvKlxuICAgICBfIF8gICAgICBfICAgICAgIF9cbiBfX198IChfKSBfX198IHwgX18gIChfKV9fX1xuLyBfX3wgfCB8LyBfX3wgfC8gLyAgfCAvIF9ffFxuXFxfXyBcXCB8IHwgKF9ffCAgIDwgXyB8IFxcX18gXFxcbnxfX18vX3xffFxcX19ffF98XFxfKF8pLyB8X19fL1xuICAgICAgICAgICAgICAgICAgIHxfXy9cblxuIFZlcnNpb246IDEuOC4xXG4gIEF1dGhvcjogS2VuIFdoZWVsZXJcbiBXZWJzaXRlOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW9cbiAgICBEb2NzOiBodHRwOi8va2Vud2hlZWxlci5naXRodWIuaW8vc2xpY2tcbiAgICBSZXBvOiBodHRwOi8vZ2l0aHViLmNvbS9rZW53aGVlbGVyL3NsaWNrXG4gIElzc3VlczogaHR0cDovL2dpdGh1Yi5jb20va2Vud2hlZWxlci9zbGljay9pc3N1ZXNcblxuICovXG4vKiBnbG9iYWwgd2luZG93LCBkb2N1bWVudCwgZGVmaW5lLCBqUXVlcnksIHNldEludGVydmFsLCBjbGVhckludGVydmFsICovXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoJ2pxdWVyeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBmYWN0b3J5KGpRdWVyeSk7XG4gICAgfVxuXG59KGZ1bmN0aW9uKCQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xuXG4gICAgU2xpY2sgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIGluc3RhbmNlVWlkID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xuXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGRhdGFTZXR0aW5ncztcblxuICAgICAgICAgICAgXy5kZWZhdWx0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcHBlbmRBcnJvd3M6ICQoZWxlbWVudCksXG4gICAgICAgICAgICAgICAgYXBwZW5kRG90czogJChlbGVtZW50KSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgYXNOYXZGb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWNrLXByZXZcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiB0eXBlPVwiYnV0dG9uXCI+UHJldmlvdXM8L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzUwcHgnLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdlYXNlJyxcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgLz4nKS50ZXh0KGkgKyAxKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHNDbGFzczogJ3NsaWNrLWRvdHMnLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgICAgIGVkZ2VGcmljdGlvbjogMC4zNSxcbiAgICAgICAgICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBmb2N1c09uQ2hhbmdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwYXVzZU9uRm9jdXM6IHRydWUsXG4gICAgICAgICAgICAgICAgcGF1c2VPbkRvdHNIb3ZlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZTogJycsXG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyUm93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN3aXBlVG9TbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdG91Y2hNb3ZlOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxuICAgICAgICAgICAgICAgIHVzZUNTUzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VUcmFuc2Zvcm06IHRydWUsXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmVydGljYWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBfLmluaXRpYWxzID0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9QbGF5VGltZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdGlvbjogMCxcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGU6IDAsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxuICAgICAgICAgICAgICAgIGxpc3RXaWR0aDogbnVsbCxcbiAgICAgICAgICAgICAgICBsaXN0SGVpZ2h0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcbiAgICAgICAgICAgICAgICAkbmV4dEFycm93OiBudWxsLFxuICAgICAgICAgICAgICAgICRwcmV2QXJyb3c6IG51bGwsXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZUNvdW50OiBudWxsLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXG4gICAgICAgICAgICAgICAgJHNsaWRlczogbnVsbCxcbiAgICAgICAgICAgICAgICBzbGlkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcbiAgICAgICAgICAgICAgICBzd2lwZUxlZnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgc3dpcGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXG4gICAgICAgICAgICAgICAgdG91Y2hPYmplY3Q6IHt9LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcblxuICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID0gbnVsbDtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy5hbmltUHJvcCA9IG51bGw7XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzID0gW107XG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xuICAgICAgICAgICAgXy5jc3NUcmFuc2l0aW9ucyA9IGZhbHNlO1xuICAgICAgICAgICAgXy5mb2N1c3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgXy5oaWRkZW4gPSAnaGlkZGVuJztcbiAgICAgICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gbnVsbDtcbiAgICAgICAgICAgIF8ucm93Q291bnQgPSAxO1xuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XG4gICAgICAgICAgICBfLiRzbGlkZXIgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBudWxsO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSBudWxsO1xuICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XG4gICAgICAgICAgICBfLndpbmRvd1RpbWVyID0gbnVsbDtcblxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xuXG4gICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5kZWZhdWx0cywgc2V0dGluZ3MsIGRhdGFTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcblxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50Lm1vekhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xuICAgICAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy5hdXRvUGxheSA9ICQucHJveHkoXy5hdXRvUGxheSwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5Q2xlYXIgPSAkLnByb3h5KF8uYXV0b1BsYXlDbGVhciwgXyk7XG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XG4gICAgICAgICAgICBfLmNoYW5nZVNsaWRlID0gJC5wcm94eShfLmNoYW5nZVNsaWRlLCBfKTtcbiAgICAgICAgICAgIF8uY2xpY2tIYW5kbGVyID0gJC5wcm94eShfLmNsaWNrSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLnNldFBvc2l0aW9uID0gJC5wcm94eShfLnNldFBvc2l0aW9uLCBfKTtcbiAgICAgICAgICAgIF8uc3dpcGVIYW5kbGVyID0gJC5wcm94eShfLnN3aXBlSGFuZGxlciwgXyk7XG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcbiAgICAgICAgICAgIF8ua2V5SGFuZGxlciA9ICQucHJveHkoXy5rZXlIYW5kbGVyLCBfKTtcblxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XG5cbiAgICAgICAgICAgIC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXG4gICAgICAgICAgICAvLyBFeHRyYWN0ZWQgZnJvbSBqUXVlcnkgdjEuMTEgc291cmNlXG4gICAgICAgICAgICBfLmh0bWxFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qKSQvO1xuXG5cbiAgICAgICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gU2xpY2s7XG5cbiAgICB9KCkpO1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFjdGl2YXRlQURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1hY3RpdmUnKS5hdHRyKHtcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcbiAgICAgICAgfSkuZmluZCgnYSwgaW5wdXQsIGJ1dHRvbiwgc2VsZWN0JykuYXR0cih7XG4gICAgICAgICAgICAndGFiaW5kZXgnOiAnMCdcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFkZFNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrQWRkID0gZnVuY3Rpb24obWFya3VwLCBpbmRleCwgYWRkQmVmb3JlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YoaW5kZXgpID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xuICAgICAgICAgICAgaW5kZXggPSBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCB8fCAoaW5kZXggPj0gXy5zbGlkZUNvdW50KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgXy51bmxvYWQoKTtcblxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhZGRCZWZvcmUpIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QWZ0ZXIoXy4kc2xpZGVzLmVxKGluZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWRkQmVmb3JlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgIF8ucmVpbml0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFuaW1hdGVIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XG4gICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hbmltYXRlU2xpZGUgPSBmdW5jdGlvbih0YXJnZXRMZWZ0LCBjYWxsYmFjaykge1xuXG4gICAgICAgIHZhciBhbmltUHJvcHMgPSB7fSxcbiAgICAgICAgICAgIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAtdGFyZ2V0TGVmdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQsIF8ub3B0aW9ucy5lYXNpbmcsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJCh7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxuICAgICAgICAgICAgICAgIH0pLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBhbmltU3RhcnQ6IHRhcmdldExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfLm9wdGlvbnMuc3BlZWQsXG4gICAgICAgICAgICAgICAgICAgIGVhc2luZzogXy5vcHRpb25zLmVhc2luZyxcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3cgPSBNYXRoLmNlaWwobm93KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4LCAwcHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlKDBweCwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm93ICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSBNYXRoLmNlaWwodGFyZ2V0TGVmdCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBhbmltUHJvcHNbXy5hbmltVHlwZV0gPSAndHJhbnNsYXRlM2QoJyArIHRhcmdldExlZnQgKyAncHgsIDBweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKGFuaW1Qcm9wcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXNhYmxlVHJhbnNpdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZUYXJnZXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBhc05hdkZvciA9IF8ub3B0aW9ucy5hc05hdkZvcjtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xuICAgICAgICAgICAgYXNOYXZGb3IgPSAkKGFzTmF2Rm9yKS5ub3QoXy4kc2xpZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhc05hdkZvcjtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYXNOYXZGb3IgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5nZXROYXZUYXJnZXQoKTtcblxuICAgICAgICBpZiAoIGFzTmF2Rm9yICE9PSBudWxsICYmIHR5cGVvZiBhc05hdkZvciA9PT0gJ29iamVjdCcgKSB7XG4gICAgICAgICAgICBhc05hdkZvci5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xuICAgICAgICAgICAgICAgIGlmKCF0YXJnZXQudW5zbGlja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5zbGlkZUhhbmRsZXIoaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICdvcGFjaXR5ICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGUpLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcblxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XG4gICAgICAgICAgICBfLmF1dG9QbGF5VGltZXIgPSBzZXRJbnRlcnZhbCggXy5hdXRvUGxheUl0ZXJhdG9yLCBfLm9wdGlvbnMuYXV0b3BsYXlTcGVlZCApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5Q2xlYXIgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8uYXV0b1BsYXlUaW1lcikge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5SXRlcmF0b3IgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgaWYgKCAhXy5wYXVzZWQgJiYgIV8uaW50ZXJydXB0ZWQgJiYgIV8uZm9jdXNzZWQgKSB7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcblxuICAgICAgICAgICAgICAgIGlmICggXy5kaXJlY3Rpb24gPT09IDEgJiYgKCBfLmN1cnJlbnRTbGlkZSArIDEgKSA9PT0gKCBfLnNsaWRlQ291bnQgLSAxICkpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcblxuICAgICAgICAgICAgICAgICAgICBzbGlkZVRvID0gXy5jdXJyZW50U2xpZGUgLSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCBfLmN1cnJlbnRTbGlkZSAtIDEgPT09IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpcmVjdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgKSB7XG5cbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cgPSAkKF8ub3B0aW9ucy5uZXh0QXJyb3cpLmFkZENsYXNzKCdzbGljay1hcnJvdycpO1xuXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2staGlkZGVuJykucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gdGFiaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5wcmV2QXJyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXG5cbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYXJpYS1kaXNhYmxlZCc6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkRG90cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIGRvdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xuXG4gICAgICAgICAgICBkb3QgPSAkKCc8dWwgLz4nKS5hZGRDbGFzcyhfLm9wdGlvbnMuZG90c0NsYXNzKTtcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdC5hcHBlbmQoJCgnPGxpIC8+JykuYXBwZW5kKF8ub3B0aW9ucy5jdXN0b21QYWdpbmcuY2FsbCh0aGlzLCBfLCBpKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLiRkb3RzID0gZG90LmFwcGVuZFRvKF8ub3B0aW9ucy5hcHBlbmREb3RzKTtcblxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy4kc2xpZGVzID1cbiAgICAgICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcblxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xuXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgICAkKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBpbmRleClcbiAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTdHlsaW5nJywgJChlbGVtZW50KS5hdHRyKCdzdHlsZScpIHx8ICcnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1zbGlkZXInKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrID0gKF8uc2xpZGVDb3VudCA9PT0gMCkgP1xuICAgICAgICAgICAgJCgnPGRpdiBjbGFzcz1cInNsaWNrLXRyYWNrXCIvPicpLmFwcGVuZFRvKF8uJHNsaWRlcikgOlxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcblxuICAgICAgICBfLiRsaXN0ID0gXy4kc2xpZGVUcmFjay53cmFwKFxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcygnb3BhY2l0eScsIDApO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBfLiRzbGlkZXIpLm5vdCgnW3NyY10nKS5hZGRDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xuXG4gICAgICAgIF8uYnVpbGRBcnJvd3MoKTtcblxuICAgICAgICBfLmJ1aWxkRG90cygpO1xuXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xuXG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kcmFnZ2FibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmJ1aWxkUm93cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgYSwgYiwgYywgbmV3U2xpZGVzLCBudW1PZlNsaWRlcywgb3JpZ2luYWxTbGlkZXMsc2xpZGVzUGVyU2VjdGlvbjtcblxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVyLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAwKSB7XG5cbiAgICAgICAgICAgIHNsaWRlc1BlclNlY3Rpb24gPSBfLm9wdGlvbnMuc2xpZGVzUGVyUm93ICogXy5vcHRpb25zLnJvd3M7XG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNsaWRlcy5sZW5ndGggLyBzbGlkZXNQZXJTZWN0aW9uXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IoYSA9IDA7IGEgPCBudW1PZlNsaWRlczsgYSsrKXtcbiAgICAgICAgICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGMgPSAwOyBjIDwgXy5vcHRpb25zLnNsaWRlc1BlclJvdzsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQob3JpZ2luYWxTbGlkZXMuZ2V0KHRhcmdldCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1NsaWRlcy5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChuZXdTbGlkZXMpO1xuICAgICAgICAgICAgXy4kc2xpZGVyLmNoaWxkcmVuKCkuY2hpbGRyZW4oKS5jaGlsZHJlbigpXG4gICAgICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd3aWR0aCc6KDEwMCAvIF8ub3B0aW9ucy5zbGlkZXNQZXJSb3cpICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xuICAgICAgICB2YXIgc2xpZGVyV2lkdGggPSBfLiRzbGlkZXIud2lkdGgoKTtcbiAgICAgICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgJCh3aW5kb3cpLndpZHRoKCk7XG5cbiAgICAgICAgaWYgKF8ucmVzcG9uZFRvID09PSAnd2luZG93Jykge1xuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSB3aW5kb3dXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gc2xpZGVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5yZXNwb25kVG8gPT09ICdtaW4nKSB7XG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGggJiZcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xuICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRzLmhhc093blByb3BlcnR5KGJyZWFrcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9yaWdpbmFsU2V0dGluZ3MubW9iaWxlRmlyc3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPiBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gXy5hY3RpdmVCcmVha3BvaW50IHx8IGZvcmNlVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5icmVha3BvaW50U2V0dGluZ3NbdGFyZ2V0QnJlYWtwb2ludF0gPT09ICd1bnNsaWNrJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy51bnNsaWNrKHRhcmdldEJyZWFrcG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8ub3JpZ2luYWxTZXR0aW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5nc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluaXRpYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnJlZnJlc2goaW5pdGlhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSBfLm9yaWdpbmFsU2V0dGluZ3M7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8ub3B0aW9ucy5pbml0aWFsU2xpZGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBvbmx5IHRyaWdnZXIgYnJlYWtwb2ludHMgZHVyaW5nIGFuIGFjdHVhbCBicmVhay4gbm90IG9uIGluaXRpYWxpemUuXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdicmVha3BvaW50JywgW18sIHRyaWdnZXJCcmVha3BvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2hhbmdlU2xpZGUgPSBmdW5jdGlvbihldmVudCwgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KSxcbiAgICAgICAgICAgIGluZGV4T2Zmc2V0LCBzbGlkZU9mZnNldCwgdW5ldmVuT2Zmc2V0O1xuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBhIGxpbmssIHByZXZlbnQgZGVmYXVsdCBhY3Rpb24uXG4gICAgICAgIGlmKCR0YXJnZXQuaXMoJ2EnKSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxuICAgICAgICBpZighJHRhcmdldC5pcygnbGknKSkge1xuICAgICAgICAgICAgJHRhcmdldCA9ICR0YXJnZXQuY2xvc2VzdCgnbGknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVuZXZlbk9mZnNldCA9IChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApO1xuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5tZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpb3VzJzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIGluZGV4T2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlIC0gc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICduZXh0JzpcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgKyBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kYXRhLmluZGV4ID09PSAwID8gMCA6XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXggfHwgJHRhcmdldC5pbmRleCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jaGVja05hdmlnYWJsZShpbmRleCksIGZhbHNlLCBkb250QW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgJHRhcmdldC5jaGlsZHJlbigpLnRyaWdnZXIoJ2ZvY3VzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNoZWNrTmF2aWdhYmxlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBuYXZpZ2FibGVzLCBwcmV2TmF2aWdhYmxlO1xuXG4gICAgICAgIG5hdmlnYWJsZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKTtcbiAgICAgICAgcHJldk5hdmlnYWJsZSA9IDA7XG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xuICAgICAgICAgICAgaW5kZXggPSBuYXZpZ2FibGVzW25hdmlnYWJsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBuYXZpZ2FibGVzW25dKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gcHJldk5hdmlnYWJsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByZXZOYXZpZ2FibGUgPSBuYXZpZ2FibGVzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgJiYgXy4kZG90cyAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXG4gICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snLCBfLmNoYW5nZVNsaWRlKVxuICAgICAgICAgICAgICAgIC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vZmYoJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihfLnZpc2liaWxpdHlDaGFuZ2UsIF8udmlzaWJpbGl0eSk7XG5cbiAgICAgICAgXy5jbGVhblVwU2xpZGVFdmVudHMoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJGxpc3Qub2ZmKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9mZignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9mZignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8ub3JpZW50YXRpb25DaGFuZ2UpO1xuXG4gICAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5yZXNpemUpO1xuXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub2ZmKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJGxpc3Qub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpO1xuICAgICAgICBfLiRsaXN0Lm9mZignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBvcmlnaW5hbFNsaWRlcztcblxuICAgICAgICBpZihfLm9wdGlvbnMucm93cyA+IDApIHtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzID0gXy4kc2xpZGVzLmNoaWxkcmVuKCkuY2hpbGRyZW4oKTtcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG4gICAgICAgICAgICBfLiRzbGlkZXIuZW1wdHkoKS5hcHBlbmQob3JpZ2luYWxTbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLnNob3VsZENsaWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xuXG4gICAgICAgIF8uY2xlYW5VcEV2ZW50cygpO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLmRldGFjaCgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lmxlbmd0aCApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCBzbGljay1hcnJvdyBzbGljay1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XG5cbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMucHJldkFycm93ICkpIHtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cubGVuZ3RoICkge1xuXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIGFyaWEtZGlzYWJsZWQgdGFiaW5kZXgnKVxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcblxuICAgICAgICAgICAgaWYgKCBfLmh0bWxFeHByLnRlc3QoIF8ub3B0aW9ucy5uZXh0QXJyb3cgKSkge1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKF8uJHNsaWRlcykge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlIHNsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXNsaWNrLWluZGV4JylcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kbGlzdC5kZXRhY2goKTtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGVyJyk7XG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay1kb3R0ZWQnKTtcblxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XG5cbiAgICAgICAgaWYoIXJlZnJlc2gpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5kaXNhYmxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xuXG4gICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnJztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh0cmFuc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKHNsaWRlSW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcbiAgICAgICAgICAgICAgICB9LCBfLm9wdGlvbnMuc3BlZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZmFkZVNsaWRlT3V0ID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMlxuICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcblxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0ZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gXy4kc2xpZGVzO1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmZpbHRlcihmaWx0ZXIpLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZm9jdXNIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uJHNsaWRlclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXG4gICAgICAgICAgICAub24oJ2ZvY3VzLnNsaWNrIGJsdXIuc2xpY2snLCAnKicsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyICRzZiA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnBhdXNlT25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb2N1c3NlZCA9ICRzZi5pcygnOmZvY3VzJyk7XG4gICAgICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sIDApO1xuXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXREb3RDb3VudCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICB2YXIgYnJlYWtQb2ludCA9IDA7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgdmFyIHBhZ2VyUXR5ID0gMDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGNvdW50ZXIgKyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XG4gICAgICAgIH0gZWxzZSBpZighXy5vcHRpb25zLmFzTmF2Rm9yKSB7XG4gICAgICAgICAgICBwYWdlclF0eSA9IDEgKyBNYXRoLmNlaWwoKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgd2hpbGUgKGJyZWFrUG9pbnQgPCBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICArK3BhZ2VyUXR5O1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhZ2VyUXR5IC0gMTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgdmVydGljYWxIZWlnaHQsXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDAsXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcbiAgICAgICAgICAgIGNvZWY7XG5cbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XG4gICAgICAgIHZlcnRpY2FsSGVpZ2h0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKF8uc2xpZGVXaWR0aCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogLTE7XG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTEuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgIT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzbGlkZUluZGV4ID4gXy5zbGlkZUNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSAqIF8uc2xpZGVXaWR0aCkgKiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPiBfLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogdmVydGljYWxIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSAvIDIpIC0gKChfLnNsaWRlV2lkdGggKiBfLnNsaWRlQ291bnQpIC8gMik7XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ICs9IF8uc2xpZGVXaWR0aCAqIE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpIC0gXy5zbGlkZVdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIF8uc2xpZGVXaWR0aCkgKiAtMSkgKyBfLnNsaWRlT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICgoc2xpZGVJbmRleCAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xKSArIHZlcnRpY2FsT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93IHx8IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXRMZWZ0O1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXRPcHRpb24gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHZXRPcHRpb24gPSBmdW5jdGlvbihvcHRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5nZXROYXZpZ2FibGVJbmRleGVzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IDAsXG4gICAgICAgICAgICBjb3VudGVyID0gMCxcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgICAgICAgIG1heDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgY291bnRlciA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xuICAgICAgICAgICAgbWF4ID0gXy5zbGlkZUNvdW50ICogMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgbWF4KSB7XG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgPyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgOiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGV4ZXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XG5cbiAgICAgICAgY2VudGVyT2Zmc2V0ID0gXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgPyBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKSA6IDA7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5zd2lwZVRvU2xpZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLXNsaWRlJykuZWFjaChmdW5jdGlvbihpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBzd2lwZWRTbGlkZSA9IHNsaWRlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xuXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzVHJhdmVyc2VkO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmdvVG8gPSBTbGljay5wcm90b3R5cGUuc2xpY2tHb1RvID0gZnVuY3Rpb24oc2xpZGUsIGRvbnRBbmltYXRlKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCcsXG4gICAgICAgICAgICAgICAgaW5kZXg6IHBhcnNlSW50KHNsaWRlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkb250QW5pbWF0ZSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbihjcmVhdGlvbikge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuXG4gICAgICAgICAgICAkKF8uJHNsaWRlcikuYWRkQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJyk7XG5cbiAgICAgICAgICAgIF8uYnVpbGRSb3dzKCk7XG4gICAgICAgICAgICBfLmJ1aWxkT3V0KCk7XG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XG4gICAgICAgICAgICBfLnN0YXJ0TG9hZCgpO1xuICAgICAgICAgICAgXy5sb2FkU2xpZGVyKCk7XG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcbiAgICAgICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG4gICAgICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xuICAgICAgICAgICAgXy5mb2N1c0hhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNyZWF0aW9uKSB7XG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uaW5pdEFEQSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG5cbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XG4gICAgICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QURBID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICAgICBudW1Eb3RHcm91cHMgPSBNYXRoLmNlaWwoXy5zbGlkZUNvdW50IC8gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyksXG4gICAgICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAodmFsID49IDApICYmICh2YWwgPCBfLnNsaWRlQ291bnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xuICAgICAgICAgICAgJ2FyaWEtaGlkZGVuJzogJ3RydWUnLFxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKF8uJGRvdHMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5ub3QoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgaSxcbiAgICAgICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogLTFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZUNvbnRyb2xJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICB2YXIgYXJpYUJ1dHRvbkNvbnRyb2wgPSAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcbiAgICAgICAgICAgICAgICAgICBpZiAoJCgnIycgKyBhcmlhQnV0dG9uQ29udHJvbCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogYXJpYUJ1dHRvbkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgXy4kZG90cy5hdHRyKCdyb2xlJywgJ3RhYmxpc3QnKS5maW5kKCdsaScpLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRTbGlkZUluZGV4ID0gdGFiQ29udHJvbEluZGV4ZXNbaV07XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoe1xuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICdwcmVzZW50YXRpb24nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvbicpLmZpcnN0KCkuYXR0cih7XG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdzbGljay1zbGlkZS1jb250cm9sJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1jb250cm9scyc6ICdzbGljay1zbGlkZScgKyBfLmluc3RhbmNlVWlkICsgbWFwcGVkU2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICAnYXJpYS1zZWxlY3RlZCc6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkuZXEoXy5jdXJyZW50U2xpZGUpLmZpbmQoJ2J1dHRvbicpLmF0dHIoe1xuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxuICAgICAgICAgICAgICAgICd0YWJpbmRleCc6ICcwJ1xuICAgICAgICAgICAgfSkuZW5kKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpPV8uY3VycmVudFNsaWRlLCBtYXg9aStfLm9wdGlvbnMuc2xpZGVzVG9TaG93OyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKHsndGFiaW5kZXgnOiAnMCd9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKGkpLnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0QXJyb3dFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy4kcHJldkFycm93XG4gICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXG4gICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAncHJldmlvdXMnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvd1xuICAgICAgICAgICAgICAgLm9mZignY2xpY2suc2xpY2snKVxuICAgICAgICAgICAgICAgLm9uKCdjbGljay5zbGljaycsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXREb3RFdmVudHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cykub24oJ2NsaWNrLnNsaWNrJywge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcbiAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRkb3RzLm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMucGF1c2VPbkRvdHNIb3ZlciA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICQoJ2xpJywgXy4kZG90cylcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLnBhdXNlT25Ib3ZlciApIHtcblxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcbiAgICAgICAgICAgIF8uJGxpc3Qub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuaW5pdGlhbGl6ZUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xuICAgICAgICBfLmluaXRTbGlkZUV2ZW50cygpO1xuXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoc3RhcnQuc2xpY2sgbW91c2Vkb3duLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnc3RhcnQnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ21vdmUnXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGNhbmNlbC5zbGljayBtb3VzZWxlYXZlLnNsaWNrJywge1xuICAgICAgICAgICAgYWN0aW9uOiAnZW5kJ1xuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XG5cbiAgICAgICAgXy4kbGlzdC5vbignY2xpY2suc2xpY2snLCBfLmNsaWNrSGFuZGxlcik7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oXy52aXNpYmlsaXR5Q2hhbmdlLCAkLnByb3h5KF8udmlzaWJpbGl0eSwgXykpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kbGlzdC5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vbignY2xpY2suc2xpY2snLCBfLnNlbGVjdEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdvcmllbnRhdGlvbmNoYW5nZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLm9yaWVudGF0aW9uQ2hhbmdlLCBfKSk7XG5cbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5yZXNpemUsIF8pKTtcblxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ2xvYWQuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsIF8uc2V0UG9zaXRpb24pO1xuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0VUkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cuc2hvdygpO1xuICAgICAgICAgICAgXy4kbmV4dEFycm93LnNob3coKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kZG90cy5zaG93KCk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5rZXlIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG4gICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXG4gICAgICAgIGlmKCFldmVudC50YXJnZXQudGFnTmFtZS5tYXRjaCgnVEVYVEFSRUF8SU5QVVR8U0VMRUNUJykpIHtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ25leHQnIDogICdwcmV2aW91cydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzOSAmJiBfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBfLm9wdGlvbnMucnRsID09PSB0cnVlID8gJ3ByZXZpb3VzJyA6ICduZXh0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubGF6eUxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBsb2FkUmFuZ2UsIGNsb25lUmFuZ2UsIHJhbmdlU3RhcnQsIHJhbmdlRW5kO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcblxuICAgICAgICAgICAgJCgnaW1nW2RhdGEtbGF6eV0nLCBpbWFnZXNTY29wZSkuZWFjaChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIHZhciBpbWFnZSA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU291cmNlID0gJCh0aGlzKS5hdHRyKCdkYXRhLWxhenknKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU2l6ZXMgID0gJCh0aGlzKS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDAgfSwgMTAwLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIGltYWdlU3JjU2V0ICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltYWdlU2l6ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIGltYWdlU291cmNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtbGF6eSBkYXRhLXNyY3NldCBkYXRhLXNpemVzJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbXywgaW1hZ2UsIGltYWdlU291cmNlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCAnZGF0YS1sYXp5JyApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoICdzbGljay1sb2FkaW5nJyApXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcblxuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignbGF6eUxvYWRFcnJvcicsIFsgXywgaW1hZ2UsIGltYWdlU291cmNlIF0pO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8uY3VycmVudFNsaWRlICsgKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyICsgMSk7XG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBNYXRoLm1heCgwLCBfLmN1cnJlbnRTbGlkZSAtIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpKTtcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgcmFuZ2VFbmQgPSBNYXRoLmNlaWwocmFuZ2VTdGFydCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlRW5kIDw9IF8uc2xpZGVDb3VudCkgcmFuZ2VFbmQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxvYWRSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKS5zbGljZShyYW5nZVN0YXJ0LCByYW5nZUVuZCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ2FudGljaXBhdGVkJykge1xuICAgICAgICAgICAgdmFyIHByZXZTbGlkZSA9IHJhbmdlU3RhcnQgLSAxLFxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxuICAgICAgICAgICAgICAgICRzbGlkZXMgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNsaWRlIDwgMCkgcHJldlNsaWRlID0gXy5zbGlkZUNvdW50IC0gMTtcbiAgICAgICAgICAgICAgICBsb2FkUmFuZ2UgPSBsb2FkUmFuZ2UuYWRkKCRzbGlkZXMuZXEocHJldlNsaWRlKSk7XG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xuICAgICAgICAgICAgICAgIHByZXZTbGlkZS0tO1xuICAgICAgICAgICAgICAgIG5leHRTbGlkZSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stY2xvbmVkJykuc2xpY2UoMCwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGNsb25lUmFuZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZShfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICogLTEpO1xuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5sb2FkU2xpZGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIF8uc2V0UG9zaXRpb24oKTtcblxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyh7XG4gICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2stbG9hZGluZycpO1xuXG4gICAgICAgIF8uaW5pdFVJKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xuICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLmNoZWNrUmVzcG9uc2l2ZSgpO1xuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XG4gICAgICAgIF8ucGF1c2VkID0gdHJ1ZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5hdXRvUGxheSgpO1xuICAgICAgICBfLm9wdGlvbnMuYXV0b3BsYXkgPSB0cnVlO1xuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBfLmZvY3Vzc2VkID0gZmFsc2U7XG4gICAgICAgIF8uaW50ZXJydXB0ZWQgPSBmYWxzZTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYoICFfLnVuc2xpY2tlZCApIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XG5cbiAgICAgICAgICAgIF8uYW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuICAgICAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25DaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgJGN1cnJlbnRTbGlkZS5hdHRyKCd0YWJpbmRleCcsIDApLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XG5cbiAgICAgICAgdHJ5Q291bnQgPSB0cnlDb3VudCB8fCAxO1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgICRpbWdzVG9Mb2FkID0gJCggJ2ltZ1tkYXRhLWxhenldJywgXy4kc2xpZGVyICksXG4gICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgIGltYWdlU291cmNlLFxuICAgICAgICAgICAgaW1hZ2VTcmNTZXQsXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQ7XG5cbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIGltYWdlID0gJGltZ3NUb0xvYWQuZmlyc3QoKTtcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XG4gICAgICAgICAgICBpbWFnZVNyY1NldCA9IGltYWdlLmF0dHIoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgICAgICBpbWFnZVNpemVzICA9IGltYWdlLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpO1xuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTcmNTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNpemVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzaXplcycsIGltYWdlU2l6ZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignZGF0YS1sYXp5IGRhdGEtc3Jjc2V0IGRhdGEtc2l6ZXMnKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmFkYXB0aXZlSGVpZ2h0ID09PSB0cnVlICkge1xuICAgICAgICAgICAgICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkZWQnLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxuICAgICAgICAgICAgICAgICAgICAgKiBsZWF2ZSBhIHNsaWdodCBkZWxheSBzbyB3ZSBkb24ndCBnZXRcbiAgICAgICAgICAgICAgICAgICAgICogc2VydmVycyBibG9ja2luZyB0aGUgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCB0cnlDb3VudCArIDEgKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQXR0ciggJ2RhdGEtbGF6eScgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCAnc2xpY2stbGF6eWxvYWQtZXJyb3InICk7XG5cbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcblxuICAgICAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQuc3JjID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcywgY3VycmVudFNsaWRlLCBsYXN0VmlzaWJsZUluZGV4O1xuXG4gICAgICAgIGxhc3RWaXNpYmxlSW5kZXggPSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXG4gICAgICAgIC8vIGxhc3QgdmlzaWJsZSBpbmRleC5cbiAgICAgICAgaWYoICFfLm9wdGlvbnMuaW5maW5pdGUgJiYgKCBfLmN1cnJlbnRTbGlkZSA+IGxhc3RWaXNpYmxlSW5kZXggKSkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cbiAgICAgICAgaWYgKCBfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcblxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XG5cbiAgICAgICAgXy5kZXN0cm95KHRydWUpO1xuXG4gICAgICAgICQuZXh0ZW5kKF8sIF8uaW5pdGlhbHMsIHsgY3VycmVudFNsaWRlOiBjdXJyZW50U2xpZGUgfSk7XG5cbiAgICAgICAgXy5pbml0KCk7XG5cbiAgICAgICAgaWYoICFpbml0aWFsaXppbmcgKSB7XG5cbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGN1cnJlbnRTbGlkZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsIGJyZWFrcG9pbnQsIGN1cnJlbnRCcmVha3BvaW50LCBsLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcblxuICAgICAgICBpZiAoICQudHlwZShyZXNwb25zaXZlU2V0dGluZ3MpID09PSAnYXJyYXknICYmIHJlc3BvbnNpdmVTZXR0aW5ncy5sZW5ndGggKSB7XG5cbiAgICAgICAgICAgIF8ucmVzcG9uZFRvID0gXy5vcHRpb25zLnJlc3BvbmRUbyB8fCAnd2luZG93JztcblxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XG5cbiAgICAgICAgICAgICAgICBsID0gXy5icmVha3BvaW50cy5sZW5ndGgtMTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zaXZlU2V0dGluZ3MuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEJyZWFrcG9pbnQgPSByZXNwb25zaXZlU2V0dGluZ3NbYnJlYWtwb2ludF0uYnJlYWtwb2ludDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGJyZWFrcG9pbnRzIGFuZCBjdXQgb3V0IGFueSBleGlzdGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmVzIHdpdGggdGhlIHNhbWUgYnJlYWtwb2ludCBudW1iZXIsIHdlIGRvbid0IHdhbnQgZHVwZXMuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5icmVha3BvaW50c1tsXSAmJiBfLmJyZWFrcG9pbnRzW2xdID09PSBjdXJyZW50QnJlYWtwb2ludCApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNwbGljZShsLDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5wdXNoKGN1cnJlbnRCcmVha3BvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbY3VycmVudEJyZWFrcG9pbnRdID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLnNldHRpbmdzO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF8uYnJlYWtwb2ludHMuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBfLiRzbGlkZXMgPVxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xuICAgICAgICAgICAgICAgIC5jaGlsZHJlbihfLm9wdGlvbnMuc2xpZGUpXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xuXG4gICAgICAgIF8uc2xpZGVDb3VudCA9IF8uJHNsaWRlcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLmN1cnJlbnRTbGlkZSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5yZWdpc3RlckJyZWFrcG9pbnRzKCk7XG5cbiAgICAgICAgXy5zZXRQcm9wcygpO1xuICAgICAgICBfLnNldHVwSW5maW5pdGUoKTtcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xuICAgICAgICBfLnVwZGF0ZUFycm93cygpO1xuICAgICAgICBfLmluaXRBcnJvd0V2ZW50cygpO1xuICAgICAgICBfLmJ1aWxkRG90cygpO1xuICAgICAgICBfLnVwZGF0ZURvdHMoKTtcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XG4gICAgICAgIF8uaW5pdFNsaWRlRXZlbnRzKCk7XG5cbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcblxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XG5cbiAgICAgICAgXy5wYXVzZWQgPSAhXy5vcHRpb25zLmF1dG9wbGF5O1xuICAgICAgICBfLmF1dG9QbGF5KCk7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3JlSW5pdCcsIFtfXSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgIT09IF8ud2luZG93V2lkdGgpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfLndpbmRvd0RlbGF5KTtcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfLndpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoKTtcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUucmVtb3ZlU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tSZW1vdmUgPSBmdW5jdGlvbihpbmRleCwgcmVtb3ZlQmVmb3JlLCByZW1vdmVBbGwpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmVtb3ZlQmVmb3JlID0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IDAgOiBfLnNsaWRlQ291bnQgLSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAtLWluZGV4IDogaW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDwgMSB8fCBpbmRleCA8IDAgfHwgaW5kZXggPiBfLnNsaWRlQ291bnQgLSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgIGlmIChyZW1vdmVBbGwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5lcShpbmRleCkucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXMgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSk7XG5cbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xuXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XG5cbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XG5cbiAgICAgICAgXy5yZWluaXQoKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0Q1NTID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge30sXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IC1wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB4ID0gXy5wb3NpdGlvblByb3AgPT0gJ2xlZnQnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcbiAgICAgICAgeSA9IF8ucG9zaXRpb25Qcm9wID09ICd0b3AnID8gTWF0aC5jZWlsKHBvc2l0aW9uKSArICdweCcgOiAnMHB4JztcblxuICAgICAgICBwb3NpdGlvblByb3BzW18ucG9zaXRpb25Qcm9wXSA9IHBvc2l0aW9uO1xuXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MocG9zaXRpb25Qcm9wcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XG4gICAgICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICsgeCArICcsICcgKyB5ICsgJyknO1xuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvblByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJywgJyArIHkgKyAnLCAwcHgpJztcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICgnMHB4ICcgKyBfLm9wdGlvbnMuY2VudGVyUGFkZGluZylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uJGxpc3QuaGVpZ2h0KF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IChfLm9wdGlvbnMuY2VudGVyUGFkZGluZyArICcgMHB4JylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIF8ubGlzdFdpZHRoID0gXy4kbGlzdC53aWR0aCgpO1xuICAgICAgICBfLmxpc3RIZWlnaHQgPSBfLiRsaXN0LmhlaWdodCgpO1xuXG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UgJiYgXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2sud2lkdGgoTWF0aC5jZWlsKChfLnNsaWRlV2lkdGggKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aCg1MDAwICogXy5zbGlkZUNvdW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmhlaWdodChNYXRoLmNlaWwoKF8uJHNsaWRlcy5maXJzdCgpLm91dGVySGVpZ2h0KHRydWUpICogXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykubGVuZ3RoKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9mZnNldCA9IF8uJHNsaWRlcy5maXJzdCgpLm91dGVyV2lkdGgodHJ1ZSkgLSBfLiRzbGlkZXMuZmlyc3QoKS53aWR0aCgpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IGZhbHNlKSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS53aWR0aChfLnNsaWRlV2lkdGggLSBvZmZzZXQpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcblxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IHRhcmdldExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDIsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5jc3Moe1xuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdmFyIHRhcmdldEhlaWdodCA9IF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRPcHRpb24gPVxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlja1NldE9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcbiAgICAgICAgICpcbiAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcbiAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXG4gICAgICAgICAqXG4gICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXG4gICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcbiAgICAgICAgICovXG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLCBsLCBpdGVtLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoID0gZmFsc2UsIHR5cGU7XG5cbiAgICAgICAgaWYoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdvYmplY3QnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoICQudHlwZSggYXJndW1lbnRzWzBdICkgPT09ICdzdHJpbmcnICkge1xuXG4gICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgdmFsdWUgPSBhcmd1bWVudHNbMV07XG4gICAgICAgICAgICByZWZyZXNoID0gYXJndW1lbnRzWzJdO1xuXG4gICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XG5cbiAgICAgICAgICAgICAgICB0eXBlID0gJ3Jlc3BvbnNpdmUnO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgYXJndW1lbnRzWzFdICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xuXG4gICAgICAgICAgICBfLm9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuXG5cbiAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcblxuICAgICAgICAgICAgJC5lYWNoKCBvcHRpb24gLCBmdW5jdGlvbiggb3B0LCB2YWwgKSB7XG5cbiAgICAgICAgICAgICAgICBfLm9wdGlvbnNbb3B0XSA9IHZhbDtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlID09PSAncmVzcG9uc2l2ZScgKSB7XG5cbiAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XG5cbiAgICAgICAgICAgICAgICBpZiggJC50eXBlKCBfLm9wdGlvbnMucmVzcG9uc2l2ZSApICE9PSAnYXJyYXknICkge1xuXG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlID0gWyB2YWx1ZVtpdGVtXSBdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBsID0gXy5vcHRpb25zLnJlc3BvbnNpdmUubGVuZ3RoLTE7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXNwb25zaXZlIG9iamVjdCBhbmQgc3BsaWNlIG91dCBkdXBsaWNhdGVzLlxuICAgICAgICAgICAgICAgICAgICB3aGlsZSggbCA+PSAwICkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnNwbGljZShsLDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUucHVzaCggdmFsdWVbaXRlbV0gKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XG5cbiAgICAgICAgICAgIF8udW5sb2FkKCk7XG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UG9zaXRpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XG5cbiAgICAgICAgXy5zZXRIZWlnaHQoKTtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLnNldENTUyhfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8uc2V0RmFkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3NldFBvc2l0aW9uJywgW19dKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0UHJvcHMgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXMsXG4gICAgICAgICAgICBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LnN0eWxlO1xuXG4gICAgICAgIF8ucG9zaXRpb25Qcm9wID0gXy5vcHRpb25zLnZlcnRpY2FsID09PSB0cnVlID8gJ3RvcCcgOiAnbGVmdCc7XG5cbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5Nb3pUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgIGJvZHlTdHlsZS5tc1RyYW5zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmZhZGUgKSB7XG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcbiAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnpJbmRleCA8IDMgKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSAzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5vcHRpb25zLnpJbmRleCA9IF8uZGVmYXVsdHMuekluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnT1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW8tdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLndlYmtpdFBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ01velRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1vei10cmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS5Nb3pQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICd3ZWJraXRUcmFuc2Zvcm0nO1xuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy13ZWJraXQtdHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdtc1RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAnLW1zLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLm1zVHJhbnNmb3JtID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3RyYW5zZm9ybSc7XG4gICAgICAgICAgICBfLnRyYW5zZm9ybVR5cGUgPSAndHJhbnNmb3JtJztcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgXy50cmFuc2Zvcm1zRW5hYmxlZCA9IF8ub3B0aW9ucy51c2VUcmFuc2Zvcm0gJiYgKF8uYW5pbVR5cGUgIT09IG51bGwgJiYgXy5hbmltVHlwZSAhPT0gZmFsc2UpO1xuICAgIH07XG5cblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xuXG4gICAgICAgIGFsbFNsaWRlcyA9IF8uJHNsaWRlclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZSBzbGljay1jZW50ZXIgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIF8uJHNsaWRlc1xuICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgIHZhciBldmVuQ29lZiA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJSAyID09PSAwID8gMSA6IDA7XG5cbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY2VudGVyT2Zmc2V0ICYmIGluZGV4IDw9IChfLnNsaWRlQ291bnQgLSAxKSAtIGNlbnRlck9mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gY2VudGVyT2Zmc2V0ICsgMSArIGV2ZW5Db2VmLCBpbmRleE9mZnNldCArIGNlbnRlck9mZnNldCArIDIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKGFsbFNsaWRlcy5sZW5ndGggLSAxIC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBfLnNsaWRlQ291bnQgLSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXEoXy5vcHRpb25zLnNsaWRlc1RvU2hvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgXy4kc2xpZGVzXG4gICAgICAgICAgICAgICAgLmVxKGluZGV4KVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XG5cbiAgICAgICAgICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxsU2xpZGVzLmxlbmd0aCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XG4gICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUgPyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIGFsbFNsaWRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCwgaW5kZXhPZmZzZXQgKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ29uZGVtYW5kJyB8fCBfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdhbnRpY2lwYXRlZCcpIHtcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc2V0dXBJbmZpbml0ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGksIHNsaWRlSW5kZXgsIGluZmluaXRlQ291bnQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLm9wdGlvbnMuY2VudGVyTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaSA9IF8uc2xpZGVDb3VudDsgaSA+IChfLnNsaWRlQ291bnQgLVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZUluZGV4ID0gaSAtIDE7XG4gICAgICAgICAgICAgICAgICAgICQoXy4kc2xpZGVzW3NsaWRlSW5kZXhdKS5jbG9uZSh0cnVlKS5hdHRyKCdpZCcsICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKS5hZGRDbGFzcygnc2xpY2stY2xvbmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJycpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5pbnRlcnJ1cHQgPSBmdW5jdGlvbiggdG9nZ2xlICkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcztcblxuICAgICAgICBpZiggIXRvZ2dsZSApIHtcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBfLmludGVycnVwdGVkID0gdG9nZ2xlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPVxuICAgICAgICAgICAgJChldmVudC50YXJnZXQpLmlzKCcuc2xpY2stc2xpZGUnKSA/XG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cygnLnNsaWNrLXNsaWRlJyk7XG5cbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xuXG4gICAgICAgIGlmICghaW5kZXgpIGluZGV4ID0gMDtcblxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgpO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0U2xpZGUsIGFuaW1TbGlkZSwgb2xkU2xpZGUsIHNsaWRlTGVmdCwgdGFyZ2V0TGVmdCA9IG51bGwsXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xuXG4gICAgICAgIHN5bmMgPSBzeW5jIHx8IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLmFuaW1hdGluZyA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMud2FpdEZvckFuaW1hdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSAmJiBfLmN1cnJlbnRTbGlkZSA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xuICAgICAgICAgICAgXy5hc05hdkZvcihpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXJnZXRTbGlkZSA9IGluZGV4O1xuICAgICAgICB0YXJnZXRMZWZ0ID0gXy5nZXRMZWZ0KHRhcmdldFNsaWRlKTtcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcblxuICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gXy5zd2lwZUxlZnQgPT09IG51bGwgPyBzbGlkZUxlZnQgOiBfLnN3aXBlTGVmdDtcblxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UgJiYgKGluZGV4IDwgMCB8fCBpbmRleCA+IF8uZ2V0RG90Q291bnQoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpIHtcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xuICAgICAgICAgICAgICAgIGlmIChkb250QW5pbWF0ZSAhPT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHNsaWRlTGVmdCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKF8uYXV0b1BsYXlUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0U2xpZGUgPCAwKSB7XG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gXy5zbGlkZUNvdW50IC0gKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNsaWRlID49IF8uc2xpZGVDb3VudCkge1xuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XG4gICAgICAgIH1cblxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JlZm9yZUNoYW5nZScsIFtfLCBfLmN1cnJlbnRTbGlkZSwgYW5pbVNsaWRlXSk7XG5cbiAgICAgICAgb2xkU2xpZGUgPSBfLmN1cnJlbnRTbGlkZTtcbiAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBhbmltU2xpZGU7XG5cbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXMoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xuXG4gICAgICAgICAgICBuYXZUYXJnZXQgPSBfLmdldE5hdlRhcmdldCgpO1xuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xuXG4gICAgICAgICAgICBpZiAoIG5hdlRhcmdldC5zbGlkZUNvdW50IDw9IG5hdlRhcmdldC5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgXy51cGRhdGVEb3RzKCk7XG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlT3V0KG9sZFNsaWRlKTtcblxuICAgICAgICAgICAgICAgIF8uZmFkZVNsaWRlKGFuaW1TbGlkZSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF8uYW5pbWF0ZUhlaWdodCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF8ucG9zdFNsaWRlKGFuaW1TbGlkZSk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5oaWRlKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHMuaGlkZSgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcblxuICAgICAgICB2YXIgeERpc3QsIHlEaXN0LCByLCBzd2lwZUFuZ2xlLCBfID0gdGhpcztcblxuICAgICAgICB4RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRYIC0gXy50b3VjaE9iamVjdC5jdXJYO1xuICAgICAgICB5RGlzdCA9IF8udG91Y2hPYmplY3Quc3RhcnRZIC0gXy50b3VjaE9iamVjdC5jdXJZO1xuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xuXG4gICAgICAgIHN3aXBlQW5nbGUgPSBNYXRoLnJvdW5kKHIgKiAxODAgLyBNYXRoLlBJKTtcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XG4gICAgICAgICAgICBzd2lwZUFuZ2xlID0gMzYwIC0gTWF0aC5hYnMoc3dpcGVBbmdsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gNDUpICYmIChzd2lwZUFuZ2xlID49IDApKSB7XG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ2xlZnQnIDogJ3JpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlIDw9IDM2MCkgJiYgKHN3aXBlQW5nbGUgPj0gMzE1KSkge1xuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAxMzUpICYmIChzd2lwZUFuZ2xlIDw9IDIyNSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDM1KSAmJiAoc3dpcGVBbmdsZSA8PSAxMzUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1cCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHNsaWRlQ291bnQsXG4gICAgICAgICAgICBkaXJlY3Rpb247XG5cbiAgICAgICAgXy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICBfLnN3aXBpbmcgPSBmYWxzZTtcblxuICAgICAgICBpZiAoXy5zY3JvbGxpbmcpIHtcbiAgICAgICAgICAgIF8uc2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XG4gICAgICAgIF8uc2hvdWxkQ2xpY2sgPSAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPiAxMCApID8gZmFsc2UgOiB0cnVlO1xuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9PT0gdHJ1ZSApIHtcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdlZGdlJywgW18sIF8uc3dpcGVEaXJlY3Rpb24oKSBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+PSBfLnRvdWNoT2JqZWN0Lm1pblN3aXBlICkge1xuXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxuXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlQ291bnQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jaGVja05hdmlnYWJsZSggXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKSApIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIF8uY3VycmVudERpcmVjdGlvbiA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIGRpcmVjdGlvbiAhPSAndmVydGljYWwnICkge1xuXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ3N3aXBlJywgW18sIGRpcmVjdGlvbiBdKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGlmICggXy50b3VjaE9iamVjdC5zdGFydFggIT09IF8udG91Y2hPYmplY3QuY3VyWCApIHtcblxuICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKCBfLmN1cnJlbnRTbGlkZSApO1xuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICB2YXIgXyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKChfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSB8fCAoJ29udG91Y2hlbmQnIGluIGRvY3VtZW50ICYmIF8ub3B0aW9ucy5zd2lwZSA9PT0gZmFsc2UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmRyYWdnYWJsZSA9PT0gZmFsc2UgJiYgZXZlbnQudHlwZS5pbmRleE9mKCdtb3VzZScpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5maW5nZXJDb3VudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XG5cbiAgICAgICAgXy50b3VjaE9iamVjdC5taW5Td2lwZSA9IF8ubGlzdFdpZHRoIC8gXy5vcHRpb25zXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEuYWN0aW9uKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlU3RhcnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdtb3ZlJzpcbiAgICAgICAgICAgICAgICBfLnN3aXBlTW92ZShldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZU1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIGVkZ2VXYXNIaXQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1ckxlZnQsIHN3aXBlRGlyZWN0aW9uLCBzd2lwZUxlbmd0aCwgcG9zaXRpb25PZmZzZXQsIHRvdWNoZXMsIHZlcnRpY2FsU3dpcGVMZW5ndGg7XG5cbiAgICAgICAgdG91Y2hlcyA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCA/IGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyA6IG51bGw7XG5cbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGN1ckxlZnQgPSBfLmdldExlZnQoXy5jdXJyZW50U2xpZGUpO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LmN1clkgPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzWzBdLnBhZ2VZIDogZXZlbnQuY2xpZW50WTtcblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clggLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WCwgMikpKTtcblxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXG4gICAgICAgICAgICBNYXRoLnBvdyhfLnRvdWNoT2JqZWN0LmN1clkgLSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSwgMikpKTtcblxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zY3JvbGxpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XG5cbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBwb3NpdGlvbk9mZnNldCA9IChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/IDEgOiAtMSkgKiAoXy50b3VjaE9iamVjdC5jdXJYID4gXy50b3VjaE9iamVjdC5zdGFydFggPyAxIDogLTEpO1xuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoO1xuXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgc3dpcGVMZW5ndGggPSBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoICogXy5vcHRpb25zLmVkZ2VGcmljdGlvbjtcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0LmVkZ2VIaXQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF8uc3dpcGVMZWZ0ID0gY3VyTGVmdCArIHN3aXBlTGVuZ3RoICogcG9zaXRpb25PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsU3dpcGluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IG51bGw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XG5cbiAgICB9O1xuXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXG4gICAgICAgIHZhciBfID0gdGhpcyxcbiAgICAgICAgICAgIHRvdWNoZXM7XG5cbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgIT09IDEgfHwgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvdWNoZXMgPSBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA9IF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVggOiBldmVudC5jbGllbnRYO1xuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xuXG4gICAgICAgIF8uZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRzbGlkZXNDYWNoZSAhPT0gbnVsbCkge1xuXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xuXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XG5cbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spO1xuXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgICQoJy5zbGljay1jbG9uZWQnLCBfLiRzbGlkZXIpLnJlbW92ZSgpO1xuXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XG4gICAgICAgICAgICBfLiRkb3RzLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF8uJHByZXZBcnJvdyAmJiBfLmh0bWxFeHByLnRlc3QoXy5vcHRpb25zLnByZXZBcnJvdykpIHtcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLiRuZXh0QXJyb3cgJiYgXy5odG1sRXhwci50ZXN0KF8ub3B0aW9ucy5uZXh0QXJyb3cpKSB7XG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBfLiRzbGlkZXNcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stc2xpZGUgc2xpY2stYWN0aXZlIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudW5zbGljayA9IGZ1bmN0aW9uKGZyb21CcmVha3BvaW50KSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcigndW5zbGljaycsIFtfLCBmcm9tQnJlYWtwb2ludF0pO1xuICAgICAgICBfLmRlc3Ryb3koKTtcblxuICAgIH07XG5cbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xuXG4gICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgICAgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJlxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcblxuICAgICAgICAgICAgXy4kcHJldkFycm93LnJlbW92ZUNsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIGlmIChfLmN1cnJlbnRTbGlkZSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93LmFkZENsYXNzKCdzbGljay1kaXNhYmxlZCcpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcblxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS51cGRhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgIF8uJGRvdHNcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5lbmQoKTtcblxuICAgICAgICAgICAgXy4kZG90c1xuICAgICAgICAgICAgICAgIC5maW5kKCdsaScpXG4gICAgICAgICAgICAgICAgLmVxKE1hdGguZmxvb3IoXy5jdXJyZW50U2xpZGUgLyBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgdmFyIF8gPSB0aGlzO1xuXG4gICAgICAgIGlmICggXy5vcHRpb25zLmF1dG9wbGF5ICkge1xuXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcblxuICAgICAgICAgICAgICAgIF8uaW50ZXJydXB0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uc2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxuICAgICAgICAgICAgb3B0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSksXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgcmV0O1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdCA9PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb3B0ID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIF9baV0uc2xpY2sgPSBuZXcgU2xpY2soX1tpXSwgb3B0KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXQgPSBfW2ldLnNsaWNrW29wdF0uYXBwbHkoX1tpXS5zbGljaywgYXJncyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJldCAhPSAndW5kZWZpbmVkJykgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXztcbiAgICB9O1xuXG59KSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoJy5jLWFjY29yZGlvbi0tZXhwYW5kJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAkKCcuYy1hY2NvcmRpb25fX2J0bicpLmh0bWwoJzxzcGFuPjxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvdWJsZS1kb3duIGZhLXhzXCI+PC9pPjwvc3Bhbj4nKVxuICAkKCcuYy1hY2NvcmRpb25fX2JvZHk6dmlzaWJsZScpLnNsaWRlVXAoKVxuICBpZiAoISQodGhpcykubmV4dCgpLmlzKCc6dmlzaWJsZScpKSB7XG4gICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKDIwMClcbiAgICAkKHRoaXMpLmZpbmQoJy5jLWFjY29yZGlvbl9fYnRuJykuaHRtbCgnPHNwYW4+PGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG91YmxlLXVwIGZhLXhzXCI+PC9pPjwvc3Bhbj4nKVxuICB9XG59KVxuIiwiLy8gbnBtIGluc3RhbGwgYW9zIC0tc2F2ZVxuaW1wb3J0IEFPUyBmcm9tICdhb3MnXG5cbi8vIFlvdSBjYW4gYWxzbyBwYXNzIGFuIG9wdGlvbmFsIHNldHRpbmdzIG9iamVjdFxuLy8gYmVsb3cgbGlzdGVkIGRlZmF1bHQgc2V0dGluZ3NcbkFPUy5pbml0KHtcbiAgLy8gR2xvYmFsIHNldHRpbmdzOlxuICBkaXNhYmxlOiBmYWxzZSwgLy8gYWNjZXB0cyBmb2xsb3dpbmcgdmFsdWVzOiAncGhvbmUnLCAndGFibGV0JywgJ21vYmlsZScsIGJvb2xlYW4sIGV4cHJlc3Npb24gb3IgZnVuY3Rpb25cbiAgc3RhcnRFdmVudDogJ0RPTUNvbnRlbnRMb2FkZWQnLCAvLyBuYW1lIG9mIHRoZSBldmVudCBkaXNwYXRjaGVkIG9uIHRoZSBkb2N1bWVudCwgdGhhdCBBT1Mgc2hvdWxkIGluaXRpYWxpemUgb25cbiAgaW5pdENsYXNzTmFtZTogJ2Fvcy1pbml0JywgLy8gY2xhc3MgYXBwbGllZCBhZnRlciBpbml0aWFsaXphdGlvblxuICBhbmltYXRlZENsYXNzTmFtZTogJ2Fvcy1hbmltYXRlJywgLy8gY2xhc3MgYXBwbGllZCBvbiBhbmltYXRpb25cbiAgdXNlQ2xhc3NOYW1lczogZmFsc2UsIC8vIGlmIHRydWUsIHdpbGwgYWRkIGNvbnRlbnQgb2YgYGRhdGEtYW9zYCBhcyBjbGFzc2VzIG9uIHNjcm9sbFxuICBkaXNhYmxlTXV0YXRpb25PYnNlcnZlcjogZmFsc2UsIC8vIGRpc2FibGVzIGF1dG9tYXRpYyBtdXRhdGlvbnMnIGRldGVjdGlvbnMgKGFkdmFuY2VkKVxuICBkZWJvdW5jZURlbGF5OiA1MCwgLy8gdGhlIGRlbGF5IG9uIGRlYm91bmNlIHVzZWQgd2hpbGUgcmVzaXppbmcgd2luZG93IChhZHZhbmNlZClcbiAgdGhyb3R0bGVEZWxheTogOTksIC8vIHRoZSBkZWxheSBvbiB0aHJvdHRsZSB1c2VkIHdoaWxlIHNjcm9sbGluZyB0aGUgcGFnZSAoYWR2YW5jZWQpXG5cbiAgLy8gU2V0dGluZ3MgdGhhdCBjYW4gYmUgb3ZlcnJpZGRlbiBvbiBwZXItZWxlbWVudCBiYXNpcywgYnkgYGRhdGEtYW9zLSpgIGF0dHJpYnV0ZXM6XG4gIG9mZnNldDogMTIwLCAvLyBvZmZzZXQgKGluIHB4KSBmcm9tIHRoZSBvcmlnaW5hbCB0cmlnZ2VyIHBvaW50XG4gIGRlbGF5OiAwLCAvLyB2YWx1ZXMgZnJvbSAwIHRvIDMwMDAsIHdpdGggc3RlcCA1MG1zXG4gIGR1cmF0aW9uOiA0MDAsIC8vIHZhbHVlcyBmcm9tIDAgdG8gMzAwMCwgd2l0aCBzdGVwIDUwbXNcbiAgZWFzaW5nOiAnZWFzZScsIC8vIGRlZmF1bHQgZWFzaW5nIGZvciBBT1MgYW5pbWF0aW9uc1xuICBvbmNlOiBmYWxzZSwgLy8gd2hldGhlciBhbmltYXRpb24gc2hvdWxkIGhhcHBlbiBvbmx5IG9uY2UgLSB3aGlsZSBzY3JvbGxpbmcgZG93blxuICBtaXJyb3I6IGZhbHNlLCAvLyB3aGV0aGVyIGVsZW1lbnRzIHNob3VsZCBhbmltYXRlIG91dCB3aGlsZSBzY3JvbGxpbmcgcGFzdCB0aGVtXG4gIGFuY2hvclBsYWNlbWVudDogJ3RvcC1ib3R0b20nIC8vIGRlZmluZXMgd2hpY2ggcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQgcmVnYXJkaW5nIHRvIHdpbmRvdyBzaG91bGQgdHJpZ2dlciB0aGUgYW5pbWF0aW9uXG5cbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoZnVuY3Rpb24gKCkge1xuICB2YXIgaXNPcGVuID0gMFxuICAkKCcub3BlbmJ0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNPcGVuID09PSAwKSB7XG4gICAgICBvcGVuTmF2KClcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VOYXYoKVxuICAgIH1cbiAgfSlcbiAgJCgnLmNsb3NlYnRuJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlTmF2KClcbiAgfSlcblxuICBmdW5jdGlvbiBvcGVuTmF2ICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlOYXYnKS5zdHlsZS53aWR0aCA9ICcxMDAlJ1xuICAgIGlzT3BlbiA9IDFcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTmF2ICgpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlOYXYnKS5zdHlsZS53aWR0aCA9ICcwJSdcbiAgICBpc09wZW4gPSAwXG4gIH1cbn0pXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbiQoJy5jLW5hdmlnYXRpb24nKS5vbignbW91c2VlbnRlcicsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICQoZS5jdXJyZW50VGFyZ2V0KS5hZGRDbGFzcygnb3BlbicpXG4gIGNvbnNvbGUubG9nKCdtb3VzZSBlbnRlcicpXG59KS5vbignbW91c2VsZWF2ZScsICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbicsIChlKSA9PiB7XG4gICQoZS5jdXJyZW50VGFyZ2V0KS5yZW1vdmVDbGFzcygnb3BlbicpXG59KVxuXG4kKCcuYy1uYXZpZ2F0aW9uJykub24oJ2NsaWNrJywgJy5tZW51IC5tZW51LWJ1dHRvbicsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKVxuICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gIGxldCBtZW51X2J1dHRvbiA9ICQoZS5jdXJyZW50VGFyZ2V0KVxuICBsZXQgbWVudV9saW5rID0gbWVudV9idXR0b24ucGFyZW50KClcbiAgbGV0IG1lbnVfaXRlbSA9IG1lbnVfbGluay5wYXJlbnQoKVxuICBpZiAobWVudV9pdGVtLmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICBtZW51X2l0ZW0uYWRkKG1lbnVfaXRlbS5maW5kKCcubWVudS1pdGVtLm9wZW4nKSkucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgIG1lbnVfbGluay5hZGQobWVudV9pdGVtLmZpbmQoJ2EnKSkuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLWhpZGUnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgfSBlbHNlIHtcbiAgICBtZW51X2l0ZW0uc2libGluZ3MoJy5vcGVuJykuZmluZCgnPmE+Lm1lbnUtYnV0dG9uJykudHJpZ2dlcignY2xpY2snKVxuICAgIG1lbnVfaXRlbS5hZGRDbGFzcygnb3BlbicpXG4gICAgbWVudV9saW5rLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgbWVudV9idXR0b24uZmluZCgnLm1lbnUtYnV0dG9uLXNob3cnKS5hdHRyKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICBtZW51X2J1dHRvbi5maW5kKCcubWVudS1idXR0b24taGlkZScpLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJylcbiAgfVxufSlcblxuJChkb2N1bWVudCkuY2xpY2soKGUpID0+IHtcbiAgaWYgKCQoJy5tZW51LWl0ZW0ub3BlbicpLmxlbmd0aCkge1xuICAgICQoJy5tZW51ID4gLm1lbnUtaXRlbS5vcGVuID4gYSA+IC5tZW51LWJ1dHRvbicpLnRyaWdnZXIoJ2NsaWNrJylcbiAgfVxufSkiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknXG5cbi8vIFNjcm9sbHMgdG8gZGl2IHdpdGggYW4gaWRcbmNvbnN0IHNwZWVkID0gMTAwXG5cbiQoJyNjLWZyb250LXBhZ2VfX3dlbGNvbWUnKVxuICAudW5iaW5kKCdjbGljay5zbW9vdGhTY3JvbGwnKVxuICAuYmluZCgnY2xpY2suc21vb3RoU2Nyb2xsJywgZXZlbnQgPT4ge1xuICAgIGNvbnN0IHRhcmdldElkID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zcGxpdCgnIycpWzFdXG4gICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKVxuXG4gICAgaWYgKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAkKHRhcmdldEVsZW1lbnQpLm9mZnNldCgpLnRvcCB9LCBzcGVlZClcbiAgICB9XG4gIH0pXG4iLCJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAkKCcuYy1zZWFyY2hfX2J0bicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuYy1oZWFkZXItc2VhcmNoLWZvcm0nKS50b2dnbGUoKVxuICB9KVxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnXG5cbiQoJy5zbGlkZXItZG90cycpLnNsaWNrKHtcbiAgbGF6eUxvYWQ6ICdwcm9ncmVzc2l2ZScsXG4gIGluZmluaXRlOiB0cnVlLFxuICBkb3RzOiB0cnVlLFxuICBhcnJvd3M6IGZhbHNlLFxuICBhdXRvcGxheTogdHJ1ZSxcbiAgYXV0b3BsYXlTcGVlZDogMzAwMCxcbiAgZmFkZTogdHJ1ZSxcbiAgc3BlZWQ6IDMwMDBcbn0pXG5cbiQoJy5jLXNsaWRlci0tYXJyb3dzLWluc2lkZScpLnNsaWNrKHtcbiAgaW5maW5pdGU6IHRydWUsXG4gIGFycm93czogdHJ1ZSxcbiAgYXV0b3BsYXk6IHRydWUsXG4gIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXG4gIGZhZGU6IHRydWUsXG4gIHNwZWVkOiAxMDAwLFxuICBuZXh0QXJyb3c6ICc8YSBjbGFzcz1cInNsaWNrLW5leHQtaW5zaWRlXCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+JyxcbiAgcHJldkFycm93OiAnPGEgY2xhc3M9XCJzbGljay1wcmV2LWluc2lkZVwiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIHR5cGU9XCJidXR0b25cIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9hPidcbn0pXG5cbiQoJy5jLXNsaWRlci0tYXJyb3dzLW91dHNpZGUnKS5zbGljayh7XG4gIGluZmluaXRlOiB0cnVlLFxuICBhcnJvd3M6IHRydWUsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBmYWRlOiB0cnVlLFxuICBzcGVlZDogMTAwMCxcbiAgbmV4dEFycm93OiAnPGEgY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2E+JyxcbiAgcHJldkFycm93OiAnPGEgY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2E+J1xufSlcblxuJCgnLmMtc2xpZGVyLS1vdmVyZmxvdycpLnNsaWNrKHtcbiAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxuICBzbGlkZXNUb1Nob3c6IDQsXG4gIGF1dG9wbGF5OiB0cnVlLFxuICBhdXRvcGxheVNwZWVkOiAzMDAwLFxuICBhcnJvd3M6IGZhbHNlLFxuICBkb3RzOiBmYWxzZSxcbiAgcmVzcG9uc2l2ZTogW1xuICAgIHtcbiAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNjBweCcsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgYnJlYWtwb2ludDogOTYwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzYwcHgnLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAvLyAgIHNldHRpbmdzOiB7XG4gICAgLy8gICAgIGFycm93czogZmFsc2UsXG4gICAgLy8gICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgLy8gICAgIGNlbnRlclBhZGRpbmc6ICc2MHB4JyxcbiAgICAvLyAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgLy8gICB9XG4gICAgLy8gfSxcbiAgICB7XG4gICAgICBicmVha3BvaW50OiA3MDAsXG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMVxuICAgICAgfVxuICAgIH1cbiAgXVxufSlcbiAgLm9uKCdzZXRQb3NpdGlvbicsIGZ1bmN0aW9uIChldmVudCwgc2xpY2spIHtcbiAgICBzbGljay4kc2xpZGVzLmNzcygnaGVpZ2h0Jywgc2xpY2suJHNsaWRlVHJhY2suaGVpZ2h0KCkgKyAncHgnKVxufSlcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24vaGFtYnVyZ2VyLW5hdidcbmltcG9ydCAnLi9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbidcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hb3MnXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hY2NvcmRpb24nXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zbGlkZXInXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZWFyY2gtZm9ybSdcbmltcG9ydCAnLi9jb21wb25lbnRzL3Njcm9sbCdcbmltcG9ydCAnanF1ZXJ5LWNvbmZpcm0nXG4vLyBpbXBvcnQgd2VicGFja1N0cmVhbSBmcm9tICd3ZWJwYWNrLXN0cmVhbSdcblxuJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xuICAkKCcuYy1wb3N0X19nYWxsZXJ5Jykuc2xpY2soe1xuICAgIGFycm93czogZmFsc2UsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWVcbiAgfSlcblxuICAkKCcubW9zdF9yZWNlbnRfd2lkZ2V0Jykuc2xpY2soKVxuICBpZiAod3AuY3VzdG9taXplICYmIHdwLmN1c3RvbWl6ZS5zZWxlY3RpdmVSZWZyZXNoKSB7XG4gICAgd3AuY3VzdG9taXplLnNlbGVjdGl2ZVJlZnJlc2guYmluZChcbiAgICAgICdwYXJ0aWFsLWNvbnRlbnQtcmVuZGVyZWQnLFxuICAgICAgKHBsYWNlbWVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxhY2VtZW50LnBhcnRpYWwud2lkZ2V0SWRQYXJ0cyAmJlxuICAgICAgICAgIHBsYWNlbWVudC5wYXJ0aWFsLndpZGdldElkUGFydHMuaWRCYXNlID09PVxuICAgICAgICAgICAgJ190aGVtZW5hbWVfbW9zdF9yZWNlbnRfd2lkZ2V0J1xuICAgICAgICApIHtcbiAgICAgICAgICBwbGFjZW1lbnQuY29udGFpbmVyLmZpbmQoJy5tb3N0X3JlY2VudF93aWRnZXQnKS5zbGljaygpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gIH1cbn0pXG5cbiQoZnVuY3Rpb24gKCQpIHtcbiAgdmFyIHNpdGVOYXZpZ2F0aW9uID0gJCgnLm5hdmlnYXRpb24tbWFpbicpXG5cbiAgc2l0ZU5hdmlnYXRpb24uZmluZCgnYScpLm9uKCdmb2N1cyBibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICQodGhpcykucGFyZW50cygnbGknKS50b2dnbGVDbGFzcygnZm9jdXMnKVxuICB9KVxufSlcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcbiAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnaG9tZScpIHwgJCgnYm9keScpLmhhc0NsYXNzKCd3b29jb21tZXJjZS1jaGVja291dCcpKSB7XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAkLmNvbmZpcm0oe1xuICAgICAgICB0aXRsZTogJ1dvb0NvbW1lcmNlIERlbW8gU3RvcmUhJyxcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgJ1RoaXMgaXMgYSBXb3JkUHJlc3MgY3VzdG9tIHRoZW1lIHVzaW5nIHRoZSBXb29jb21tZXJjZSBwbHVnaW4gZm9yIHRoZSBzdG9yZSBmZWF0dXJlcy4gQ29udGFjdCBQYXVsIGF0IDxhIGhyZWY9XCJodHRwczovL3d3dy5wYXVsYnJpZ2h0b24uY29tL1wiPllQIERpZ2l0YWw8L2E+IGlmIHlvdSBsaWtlIHdoYXQgeW91IHNlZSBhbmQgZm9yIGEgcXVvdGUgb24geW91ciBuZXh0IHdlYnNpdGUuJyxcbiAgICAgICAgdXNlQm9vdHN0cmFwOiBmYWxzZSxcbiAgICAgICAgYm94V2lkdGg6ICc3NSUnLFxuICAgICAgICBhdXRvQ2xvc2U6ICdjbG9zZXwxMjgwMDAnXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICAkLmNvbmZpcm0oe1xuICAgICAgICB0aXRsZTogJ1dvb0NvbW1lcmNlIERlbW8gU3RvcmUhJyxcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgJ1RoaXMgaXMgYSBXb3JkUHJlc3MgY3VzdG9tIHRoZW1lIHVzaW5nIHRoZSBXb29jb21tZXJjZSBwbHVnaW4gZm9yIHRoZSBzdG9yZSBmZWF0dXJlcy4gQ29udGFjdCBQYXVsIGF0IDxhIGhyZWY9XCJodHRwczovL3d3dy5wYXVsYnJpZ2h0b24uY29tL1wiPllQIERpZ2l0YWw8L2E+IGlmIHlvdSBsaWtlIHdoYXQgeW91IHNlZSBhbmQgZm9yIGEgcXVvdGUgb24geW91ciBuZXh0IHdlYnNpdGUuJyxcbiAgICAgICAgdXNlQm9vdHN0cmFwOiBmYWxzZSxcbiAgICAgICAgYm94V2lkdGg6ICc1MCUnLFxuICAgICAgICBhdXRvQ2xvc2U6ICdjbG9zZXwxMDAwMCdcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuXG4vLyAkLmNvbmZpcm0oe1xuLy8gICBib3hXaWR0aDogJzc1JScsXG4vLyAgIHVzZUJvb3RzdHJhcDogZmFsc2Vcbi8vIH0pXG5cbi8vICQuY29uZmlybSh7XG4vLyAgIGJveFdpZHRoOiAnMzAwcHgnLFxuLy8gICB1c2VCb290c3RyYXA6IGZhbHNlXG4vLyB9KVxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==