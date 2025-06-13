"use strict";

var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _app = _interopRequireDefault(require("./app"));
require("./index.css");
var _reactRedux = require("react-redux");
var _store = require("./redux/store");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
_client.default.createRoot(document.getElementById("root")).render(/*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
  store: _store.store
}, /*#__PURE__*/_react.default.createElement(_app.default, null))));