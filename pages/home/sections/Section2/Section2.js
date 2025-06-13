"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _RopeCanvas = _interopRequireDefault(require("../../canvas/RopeCanvas"));
require("./Section2.css");
var _img = _interopRequireDefault(require("../../../../assets/photos/img3.webp"));
var _img2 = _interopRequireDefault(require("../../../../assets/photos/img4.webp"));
var _img3 = _interopRequireDefault(require("../../../../assets/photos/img5.webp"));
var _pin = _interopRequireDefault(require("../../../../assets/pin.webp"));
var _Button = _interopRequireDefault(require("../../../../components/Button"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Import the CSS file for styling

const Section2 = () => {
  const animation = (0, _reactRedux.useSelector)(state => state.animation.value);
  return /*#__PURE__*/_react.default.createElement("section", {
    id: "section-2"
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
    className: "content-text"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: animation ? "slide-up" : ""
  }, "Feliz Dia Dos Namorados Meu Amor!")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "next"
  }));
};
var _default = exports.default = Section2;