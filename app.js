"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _page = _interopRequireDefault(require("./pages/page01/page1"));
var _page2 = _interopRequireDefault(require("./pages/page02/page2"));
var _page3 = _interopRequireDefault(require("./pages/page03/page3"));
var _page4 = _interopRequireDefault(require("./pages/page04/page4"));
var _Home = _interopRequireDefault(require("./pages/home/Home"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(_page.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/2",
    element: /*#__PURE__*/React.createElement(_page2.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/3",
    element: /*#__PURE__*/React.createElement(_page3.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/4",
    element: /*#__PURE__*/React.createElement(_page4.default, null)
  }), /*#__PURE__*/React.createElement(_reactRouterDom.Route, {
    path: "/home",
    element: /*#__PURE__*/React.createElement(_Home.default, null)
  })));
}
var _default = exports.default = App;