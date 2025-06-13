"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./page1.css");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Import the CSS file for styling

const Page01 = () => {
  const navigate = (0, _reactRouterDom.useNavigate)();
  function handleClick() {
    navigate("/2");
  }
  return /*#__PURE__*/_react.default.createElement("section", {
    id: "page01",
    className: "default-design"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn",
    onClick: handleClick
  }, "Clique aqui"));
};
var _default = exports.default = Page01;