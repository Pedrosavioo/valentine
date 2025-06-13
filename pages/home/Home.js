"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./Home.css");
var _Section = _interopRequireDefault(require("./sections/Section1/Section1"));
var _reactRedux = require("react-redux");
var _Section2 = _interopRequireDefault(require("./sections/Section2/Section2"));
var _Section3 = _interopRequireDefault(require("./sections/Section3/Section3"));
var _Section4 = _interopRequireDefault(require("./sections/Section4/Section4"));
var _Section5 = _interopRequireDefault(require("./sections/Section5/Section5"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Home = () => {
  const count = (0, _reactRedux.useSelector)(state => state.counter.value);
  return /*#__PURE__*/React.createElement("section", {
    id: "home"
  }, count === 0 && /*#__PURE__*/React.createElement(_Section.default, null), count === 1 && /*#__PURE__*/React.createElement(_Section2.default, null), count === 2 && /*#__PURE__*/React.createElement(_Section3.default, null), count === 3 && /*#__PURE__*/React.createElement(_Section4.default, null), count === 4 && /*#__PURE__*/React.createElement(_Section5.default, null));
};
var _default = exports.default = Home;