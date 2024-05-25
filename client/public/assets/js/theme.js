"use strict";

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/* -------------------------------------------------------------------------- */

/*                                    Utils                                   */

/* -------------------------------------------------------------------------- */
var docReady = function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn);
  } else {
    setTimeout(fn, 1);
  }
};

var resize = function resize(fn) {
  return window.addEventListener("resize", fn);
};

var isIterableArray = function isIterableArray(array) {
  return Array.isArray(array) && !!array.length;
};

var camelize = function camelize(str) {
  var text = str.replace(/[-_\s.]+(.)?/g, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
  return "".concat(text.substr(0, 1).toLowerCase()).concat(text.substr(1));
};

var getData = function getData(el, data) {
  try {
    return JSON.parse(el.dataset[camelize(data)]);
  } catch (e) {
    return el.dataset[camelize(data)];
  }
};
/* ----------------------------- Colors function ---------------------------- */

var hexToRgb = function hexToRgb(hexValue) {
  var hex;
  hexValue.indexOf("#") === 0
    ? (hex = hexValue.substring(1))
    : (hex = hexValue); // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")

  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex.replace(shorthandRegex, function (m, r, g, b) {
      return r + r + g + g + b + b;
    })
  );
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
};

var rgbaColor = function rgbaColor() {
  var color =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "#fff";
  var alpha =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
  return "rgba(".concat(hexToRgb(color), ", ").concat(alpha, ")");
};
/* --------------------------------- Colors --------------------------------- */

var colors = {
  primary: "#0091e9",
  secondary: "#002147",
  success: "#00d27a",
  info: "#27bcfd",
  warning: "#FFC928",
  danger: "#EE4D47",
  light: "#F9FAFD",
  dark: "#000",
};
var grays = {
  white: "#fff",
  100: "#f9fafd",
  200: "#edf2f9",
  300: "#d8e2ef",
  400: "#b6c1d2",
  500: "#9da9bb",
  600: "#748194",
  700: "#5e6e82",
  800: "#4d5969",
  900: "#344050",
  1000: "#232e3c",
  1100: "#0b1727",
  black: "#000",
};

var hasClass = function hasClass(el, className) {
  !el && false;
  return el.classList.value.includes(className);
};

var addClass = function addClass(el, className) {
  el.classList.add(className);
};

var getOffset = function getOffset(el) {
  var rect = el.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };
};

var isScrolledIntoView = function isScrolledIntoView(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    // eslint-disable-next-line no-param-reassign
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return {
    all:
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      top + height <= window.pageYOffset + window.innerHeight &&
      left + width <= window.pageXOffset + window.innerWidth,
    partial:
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset,
  };
};

var breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540,
};

var getBreakpoint = function getBreakpoint(el) {
  var classes = el && el.classList.value;
  var breakpoint;

  if (classes) {
    breakpoint =
      breakpoints[
        classes
          .split(" ")
          .filter(function (cls) {
            return cls.includes("navbar-expand-");
          })
          .pop()
          .split("-")
          .pop()
      ];
  }

  return breakpoint;
};
/* --------------------------------- Cookie --------------------------------- */

var setCookie = function setCookie(name, value, expire) {
  var expires = new Date();
  expires.setTime(expires.getTime() + expire);
  document.cookie = ""
    .concat(name, "=")
    .concat(value, ";expires=")
    .concat(expires.toUTCString());
};

var getCookie = function getCookie(name) {
  var keyValue = document.cookie.match("(^|;) ?".concat(name, "=([^;]*)(;|$)"));
  return keyValue ? keyValue[2] : keyValue;
};

var settings = {
  tinymce: {
    theme: "oxide",
  },
  chart: {
    borderColor: "rgba(255, 255, 255, 0.8)",
  },
};
/* -------------------------- Chart Initialization -------------------------- */

var newChart = function newChart(chart, config) {
  var ctx = chart.getContext("2d");
  return new window.Chart(ctx, config);
};
/* ---------------------------------- Store --------------------------------- */

var getItemFromStore = function getItemFromStore(key, defaultValue) {
  var store =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : localStorage;

  try {
    return JSON.parse(store.getItem(key)) || defaultValue;
  } catch (_unused) {
    return store.getItem(key) || defaultValue;
  }
};

var setItemToStore = function setItemToStore(key, payload) {
  var store =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : localStorage;
  return store.setItem(key, payload);
};

var getStoreSpace = function getStoreSpace() {
  var store =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : localStorage;
  return parseFloat(
    (
      escape(encodeURIComponent(JSON.stringify(store))).length /
      (1024 * 1024)
    ).toFixed(2)
  );
};

var utils = {
  docReady: docReady,
  resize: resize,
  isIterableArray: isIterableArray,
  camelize: camelize,
  getData: getData,
  hasClass: hasClass,
  addClass: addClass,
  hexToRgb: hexToRgb,
  rgbaColor: rgbaColor,
  colors: colors,
  grays: grays,
  getOffset: getOffset,
  isScrolledIntoView: isScrolledIntoView,
  getBreakpoint: getBreakpoint,
  setCookie: setCookie,
  getCookie: getCookie,
  newChart: newChart,
  settings: settings,
  getItemFromStore: getItemFromStore,
  setItemToStore: setItemToStore,
  getStoreSpace: getStoreSpace,
};
/* -------------------------------------------------------------------------- */

/*                                  Detector                                  */

/* -------------------------------------------------------------------------- */

var detectorInit = function detectorInit() {
  var _window = window,
    is = _window.is;
  var html = document.querySelector("html");
  is.opera() && addClass(html, "opera");
  is.mobile() && addClass(html, "mobile");
  is.firefox() && addClass(html, "firefox");
  is.safari() && addClass(html, "safari");
  is.ios() && addClass(html, "ios");
  is.iphone() && addClass(html, "iphone");
  is.ipad() && addClass(html, "ipad");
  is.ie() && addClass(html, "ie");
  is.edge() && addClass(html, "edge");
  is.chrome() && addClass(html, "chrome");
  is.mac() && addClass(html, "osx");
  is.windows() && addClass(html, "windows");
  navigator.userAgent.match("CriOS") && addClass(html, "chrome");
};
/*-----------------------------------------------
|   Top navigation opacity on scroll
-----------------------------------------------*/

var navbarInit = function () {
  var Selector = {
    NAVBAR: "[data-navbar-on-scroll]",
    NAVBAR_COLLAPSE: ".navbar-collapse",
    NAVBAR_TOGGLER: ".navbar-toggler",
  };
  var Events = {
    SCROLL: "scroll",
    SHOW_BS_COLLAPSE: "show.bs.collapse",
    HIDE_BS_COLLAPSE: "hide.bs.collapse",
    HIDDEN_BS_COLLAPSE: "hidden.bs.collapse",
  };
  var DataKey = {
    NAVBAR_ON_SCROLL: "navbar-light-on-scroll",
  };

  var navbar = document.querySelector(Selector.NAVBAR);

  if (navbar) {
    var navbarCollapse = navbar.querySelector(Selector.NAVBAR_COLLAPSE);
    var html = document.documentElement;
    var backgroundImage = window.getComputedStyle(navbar).backgroundImage;
    var breakPoint = utils.getBreakpoint(navbar);
    var colorName = utils.getData(navbar, DataKey.NAVBAR_ON_SCROLL) || "light";

    var handleScroll = function () {
      var scrollTop = html.scrollTop;
      var alpha = (scrollTop / window.innerHeight) * 0.35;
      navbar.classList.toggle("backdrop", alpha !== 0);
      alpha = Math.min(alpha, 1);
      navbar.style.backgroundColor = "rgba("
        .concat(utils.hexToRgb(utils.colors[colorName]).join(", "), ", ")
        .concat(alpha, ")");
      navbar.style.backgroundImage =
        alpha > 0 || navbarCollapse.classList.contains("show")
          ? backgroundImage
          : "none";
      navbar.classList.toggle(
        "shadow-transition",
        alpha > 0 || navbarCollapse.classList.contains("show")
      );
    };

    var handleResize = function () {
      if (window.innerWidth > breakPoint) {
        navbar.style.backgroundImage = html.scrollTop
          ? backgroundImage
          : "none";
        navbar.style.transition = "none";
      } else if (
        !navbar
          .querySelector(Selector.NAVBAR_TOGGLER)
          .classList.contains("collapsed")
      ) {
        navbar.classList.add("bg-".concat(colorName), "shadow-transition");
        navbar.style.backgroundImage = backgroundImage;
      }

      navbar.style.transition =
        window.innerWidth <= breakPoint &&
        navbarCollapse.classList.contains("show")
          ? "background-color 0.35s ease"
          : "none";
    };

    var handleCollapseShow = function () {
      navbar.classList.add("bg-".concat(colorName), "shadow-transition");
      navbar.style.backgroundImage = backgroundImage;
      navbar.style.transition = "background-color 0.35s ease";
    };

    var handleCollapseHide = function () {
      navbar.classList.remove("bg-".concat(colorName), "shadow-transition");
      navbar.style.backgroundImage = html.scrollTop ? backgroundImage : "none";
    };

    var handleCollapseHidden = function () {
      navbar.style.transition = "none";
    };

    navbar.addEventListener("click", function (e) {
      if (
        e.target.classList.contains("nav-link") &&
        window.innerWidth < breakPoint
      ) {
        navbar.querySelector(Selector.NAVBAR_TOGGLER).click();
      }
    });

    window.addEventListener(Events.SCROLL, handleScroll);
    window.addEventListener("resize", handleResize);
    navbarCollapse.addEventListener(
      Events.SHOW_BS_COLLAPSE,
      handleCollapseShow
    );
    navbarCollapse.addEventListener(
      Events.HIDE_BS_COLLAPSE,
      handleCollapseHide
    );
    navbarCollapse.addEventListener(
      Events.HIDDEN_BS_COLLAPSE,
      handleCollapseHidden
    );
  }
};

/* -------------------------------------------------------------------------- */

/*                                Scroll To Top                               */

/* -------------------------------------------------------------------------- */

var scrollToTop = function scrollToTop() {
  document
    .querySelectorAll("[data-anchor] > a, [data-scroll-to]")
    .forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        var _utils$getData;

        e.preventDefault();
        var el = e.target;
        var id = utils.getData(el, "scroll-to") || el.getAttribute("href");
        window.scroll({
          top:
            (_utils$getData = utils.getData(el, "offset-top")) !== null &&
            _utils$getData !== void 0
              ? _utils$getData
              : utils.getOffset(document.querySelector(id)).top - 100,
          left: 0,
          behavior: "smooth",
        });
        window.location.hash = id;
      });
    });
}; // /* -------------------------------------------------------------------------- */
// /*                            Theme Initialization                            */
// /* -------------------------------------------------------------------------- */

docReady(navbarInit);
docReady(detectorInit);
docReady(scrollToTop);
//# sourceMappingURL=theme.js.map
