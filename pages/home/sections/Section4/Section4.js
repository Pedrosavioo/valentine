"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _RopeCanvas = _interopRequireDefault(require("../../canvas/RopeCanvas"));
require("./Section4.css");
var _img = _interopRequireDefault(require("../../../../assets/photos/img10.webp"));
var _img2 = _interopRequireDefault(require("../../../../assets/photos/img11.webp"));
var _img3 = _interopRequireDefault(require("../../../../assets/photos/img12.webp"));
var _pin = _interopRequireDefault(require("../../../../assets/pin.webp"));
var _Button = _interopRequireDefault(require("../../../../components/Button"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Import the CSS file for styling

const Section4 = () => {
  const animation = (0, _reactRedux.useSelector)(state => state.animation.value);
  return /*#__PURE__*/_react.default.createElement("section", {
    id: "section-4"
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
    id: "p1",
    className: animation ? "slide-up" : "fade"
  }, "Te amoooo tantooo! E te admiro mais ainda."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p2",
    className: animation ? "slide-up" : "fade"
  }, "Admiro sua coragem de enfrentar a vida todos os dias, mesmo morando longe de quem voc\xEA ama, lutando pelos seus sonhos, estudando, trabalhando, conquistando cada coisinha com esfor\xE7o.Voc\xEA me enche de orgulho."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p3",
    className: animation ? "slide-up" : "fade"
  }, "Amo teu jeitinho brincalhona e meiga ao mesmo tempo, \xE9 m\xE1gico como voc\xEA consegue me fazer rir mesmo quando o dia t\xE1 pesado."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p4",
    className: animation ? "slide-up" : "fade"
  }, "Amo quando topa qualquer rol\xEA do meu lado, seja a maior aventura ou s\xF3 ficar de bobeira."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p5",
    className: animation ? "slide-up" : "fade"
  }, "E amo demais o quanto voc\xEA se importa com os animais. Qualquer bichinho que voc\xEA v\xEA, voc\xEA cuida, voc\xEA sente\u2026 isso mostra o tamanho do seu cora\xE7\xE3o."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p6",
    className: animation ? "slide-up" : "fade"
  }, "S\xE3o essas (e tantas outras) coisas que me fazem te amar mais a cada dia.")), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "next"
  }));
};
var _default = exports.default = Section4;