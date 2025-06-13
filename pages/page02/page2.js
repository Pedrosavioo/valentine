"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./page2.css");
var _reactRouterDom = require("react-router-dom");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
// Import the CSS file for styling

const Page02 = () => {
  const navigate = (0, _reactRouterDom.useNavigate)();
  function handleClick() {
    navigate("/3");
  }
  return /*#__PURE__*/_react.default.createElement("section", {
    id: "page02",
    className: "default-design"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn",
    onClick: handleClick
  }, "Clique aqui novamente..."), /*#__PURE__*/_react.default.createElement("p", null, "Opss... errou ", /*#__PURE__*/_react.default.createElement("br", null), " Tenta novamente"));
};
var _default = exports.default = Page02;