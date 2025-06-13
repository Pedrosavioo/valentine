"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
require("./page3.css");
var _reactRouterDom = require("react-router-dom");
// Import the CSS file for styling

const Page03 = () => {
  const navigate = (0, _reactRouterDom.useNavigate)();
  const [time, setTime] = (0, _react.useState)(10);
  const [handleText, setHandleText] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    const timerId = setInterval(() => {
      setTime(prevTime => prevTime - 1); // Atualiza os segundos usando o valor anterior
    }, 1000);
    return () => {
      clearInterval(timerId); // Limpa o intervalo para evitar vazamentos de memória
    };
  }, []);
  (0, _react.useEffect)(() => {
    if (time === 5) {
      setHandleText(false); // Muda para o segundo texto quando 'time' for 5
    }
    if (time === 0) {
      navigate("/4"); // Redireciona para a rota '/2' quando 'time' for 0
    }
  }, [time, navigate]);
  return /*#__PURE__*/React.createElement("section", {
    id: "page03",
    className: "default-design"
  }, handleText ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Achou q eu ia frescar ainda n\xE9??"), /*#__PURE__*/React.createElement("p", null, "Segura a emo\xE7\xE3o e aguarda s\xF3 esses segundinhos"), /*#__PURE__*/React.createElement("p", null, time)) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, "Se prepara amor... Vem uma coisa bosb\xE1stica"), /*#__PURE__*/React.createElement("p", null, time)));
};
var _default = exports.default = Page03;