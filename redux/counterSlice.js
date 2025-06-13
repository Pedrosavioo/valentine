"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = exports.default = exports.decrement = void 0;
var _toolkit = require("@reduxjs/toolkit");
const counterSlice = (0, _toolkit.createSlice)({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  }
});
const {
  increment,
  decrement
} = counterSlice.actions;
exports.decrement = decrement;
exports.increment = increment;
var _default = exports.default = counterSlice.reducer;