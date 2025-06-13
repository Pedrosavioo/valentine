"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _RopeCanvas = _interopRequireDefault(require("../../canvas/RopeCanvas"));
require("./Section3.css");
var _img = _interopRequireDefault(require("../../../../assets/photos/img6.webp"));
var _img2 = _interopRequireDefault(require("../../../../assets/photos/img7.webp"));
var _img3 = _interopRequireDefault(require("../../../../assets/photos/img8.webp"));
var _img4 = _interopRequireDefault(require("../../../../assets/photos/img9.webp"));
var _pin = _interopRequireDefault(require("../../../../assets/pin.webp"));
var _Button = _interopRequireDefault(require("../../../../components/Button"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Import the CSS file for styling

const Section3 = () => {
  const animation = (0, _reactRedux.useSelector)(state => state.animation.value);
  return /*#__PURE__*/_react.default.createElement("section", {
    id: "section-3"
  }, /*#__PURE__*/_react.default.createElement(_RopeCanvas.default, null), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "prev"
  }), /*#__PURE__*/_react.default.createElement("div", {
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
    className: "photo-container photo-container-3 ".concat(animation ? "fade-in" : "fade")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _pin.default,
    className: "pin"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: _img3.default,
    className: "photo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "photo-container photo-container-4 ".concat(animation ? "fade-in" : "fade")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _pin.default,
    className: "pin"
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: _img4.default,
    className: "photo"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "content-text"
  }, /*#__PURE__*/_react.default.createElement("p", {
    id: "p1",
    className: animation ? "slide-up" : "fade"
  }, "lembro como se fosse hoje, o dia que fui na sua casa pela primeira vez\u2026 a gente nem namorava ainda. Voc\xEA tava dormindo, era teu anivers\xE1rio e a gente te acordou kkkkkkk"), /*#__PURE__*/_react.default.createElement("p", {
    id: "p2",
    className: animation ? "slide-up" : "fade"
  }, "Mesmo com aquela carinha brava porque passamos o dia todo te ignorando, voc\xEA tava linda."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p3",
    className: animation ? "slide-up" : "fade"
  }, "Teve tamb\xE9m aquele dia na festa junina\u2026 a gente ainda mal se falava, mas lembro de segurar a La\xEDs no colo, pequenininha como a Lis."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p4",
    className: animation ? "slide-up" : "fade"
  }, "A gente ali na quadra, morrendo de vergonha um do outro, quase sem coragem de puxar conversa. Sem falar das nossas noites jogando Hago, cada dia uma competi\xE7\xE3o diferente")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "next"
  }));
};
var _default = exports.default = Section3;