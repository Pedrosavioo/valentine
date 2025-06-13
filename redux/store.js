"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _counterSlice = _interopRequireDefault(require("./counterSlice"));
var _animation = _interopRequireDefault(require("./animation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const store = exports.store = (0, _toolkit.configureStore)({
  reducer: {
    counter: _counterSlice.default,
    animation: _animation.default
  }
});