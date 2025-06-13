"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Section5.css");
var _imgGpt = _interopRequireDefault(require("../../../../assets/img-gpt.png"));
var _Button = _interopRequireDefault(require("../../../../components/Button"));
var _RopeCanvas = _interopRequireDefault(require("../../canvas/RopeCanvas2"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Import the CSS file for styling

const Section5 = () => {
  const animation = (0, _reactRedux.useSelector)(state => state.animation.value);
  return /*#__PURE__*/_react.default.createElement("section", {
    id: "section-5"
  }, /*#__PURE__*/_react.default.createElement(_RopeCanvas.default, null), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "prev"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "content-text"
  }, /*#__PURE__*/_react.default.createElement("p", {
    id: "p1",
    className: "fade1"
  }, "Quero que voc\xEA saiba que sou completamente teu, em cada detalhe."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p2",
    className: "fade2"
  }, "Te amo demais e quero viver o futuro ao seu lado, em cada passo, em cada sonho."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p3",
    className: "fade3"
  }, "Prometo seguir te fazendo sorrir, te apoiando, e amando cada detalhizinho seu"), /*#__PURE__*/_react.default.createElement("p", {
    id: "p4",
    className: "fade4"
  }, "A melhor parte de pensar no amanh\xE3 \xE9 saber que voc\xEA faz parte dele."), /*#__PURE__*/_react.default.createElement("p", {
    id: "p5",
    className: "fade5"
  }, "TE AMOOO MEU AMOR!")), /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement("p", {
    className: "fade"
  }, "Feito com \u2764\uFE0F para a garota mais especial desse mundoo!!!")), /*#__PURE__*/_react.default.createElement("img", {
    src: _imgGpt.default,
    id: "img-bike",
    className: "fade"
  }));
};
var _default = exports.default = Section5;