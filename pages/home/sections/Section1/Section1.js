"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _RopeCanvas = _interopRequireDefault(require("../../canvas/RopeCanvas"));
require("./Section1.css");
var _img = _interopRequireDefault(require("../../../../assets/photos/img13.webp"));
var _img2 = _interopRequireDefault(require("../../../../assets/photos/img2.webp"));
var _pin = _interopRequireDefault(require("../../../../assets/pin.webp"));
var _Button = _interopRequireDefault(require("../../../../components/Button"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// Import the CSS file for styling

const Section1 = () => {
  // reducer animation
  const animation = (0, _reactRedux.useSelector)(state => state.animation.value);
  return /*#__PURE__*/_react.default.createElement("section", {
    id: "section-1"
  }, /*#__PURE__*/_react.default.createElement(_RopeCanvas.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-container photo-container-1 ".concat(animation ? "fade-in" : "fade")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _pin.default,
    className: "pin"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: _img.default,
    className: "photo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-container photo-container-2 ".concat(animation ? "fade-in" : "fade")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _pin.default,
    className: "pin"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: _img2.default,
    className: "photo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "content-text"
  }, /*#__PURE__*/_react.default.createElement("p", {
    id: "p1",
    className: animation ? "slide-up" : "fade"
  }, "Amor, Primeiro, me desculpa por ter te feito passar raiva. Mas c\xEA me conhece\u2026 se eu n\xE3o fizesse uma gracinha, n\xE3o seria eu, n\xE9?"), /*#__PURE__*/_react.default.createElement("p", {
    id: "p2",
    className: animation ? "slide-up" : "fade"
  }, "A verdade \xE9 que eu s\xF3 queria deixar esse Dia dos Namorados um pouquinho mais marcante, mesmo que voc\xEA tenha me xingado mentalmente algumas vezes antes de chegar aqui (brincadeira...)"), /*#__PURE__*/_react.default.createElement("p", {
    id: "p3",
    className: animation ? "slide-up" : "fade"
  }, "Sou imensamente grato por ter voc\xEA na minha vida."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p3",
    className: animation ? "slide-up" : "fade"
  }, "Voc\xEA \xE9 minha paz, minha bagun\xE7a boa, minha parceira em tudo."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p4",
    className: animation ? "slide-up" : "fade"
  }, "E mesmo quando eu te deixo brava (o que acontece mais do que deveria), voc\xEA continua aqui. E isso significa o mundo pra mim."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p5",
    className: animation ? "slide-up" : "fade"
  }, "Agora que voc\xEA j\xE1 sobreviveu \xE0 parte da raiva\u2026")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "next"
  }));
};
var _default = exports.default = Section1;