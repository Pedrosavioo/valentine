"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
require("./page4.css");
var _reactRouterDom = require("react-router-dom");
var _img = _interopRequireDefault(require("../../assets/img1.jpg"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Import the CSS file for styling

const Page04 = () => {
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [time, setTime] = (0, _react.useState)(0);
  const [handleText, setHandleText] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    const timerId = setInterval(() => {
      setTime(prevTime => prevTime + 1); // Atualiza os segundos usando o valor anterior
    }, 1000);
    return () => {
      clearInterval(timerId); // Limpa o intervalo para evitar vazamentos de memória
    };
  }, []);
  (0, _react.useEffect)(() => {
    if (time === 5) {
      setHandleText(false);
    }
  }, [time]);
  return /*#__PURE__*/React.createElement("section", {
    id: "page04",
    className: "default-design",
    style: {
      backgroundImage: "url(".concat(_img.default, ")")
    }
  }, handleText ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "hehehehehehehe")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Agora \xE9 s\xE9rio chega de gracinha, clica ali no avan\xE7ar pfv"), /*#__PURE__*/React.createElement("button", {
    className: "btn",
    onClick: () => navigate("/home")
  }, "Avan\xE7ar ")));
};
var _default = exports.default = Page04;