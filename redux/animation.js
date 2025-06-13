"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = exports.init = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
const animationSlice = (0, _toolkit.createSlice)({
  name: 'animation',
  initialState: {
    value: false
  },
  reducers: {
    init: state => {
      state.value = true;
    },
    reset: state => {
      state.value = false;
    }
  }
});
const {
  init,
  reset
} = animationSlice.actions;
exports.reset = reset;
exports.init = init;
var _default = exports.default = animationSlice.reducer;