"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Button.css");
var _reactRedux = require("react-redux");
var _counterSlice = require("../redux/counterSlice");
var _arrowBlack = _interopRequireDefault(require("../assets/arrow-black.svg"));
var _animation = require("../redux/animation");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Import the CSS file for styling

const Button = _ref => {
  let {
    type
  } = _ref;
  const dispatch = (0, _reactRedux.useDispatch)();
  const animation = (0, _reactRedux.useSelector)(state => state.animation.value);
  function handleClick() {
    // Iniciar animação
    dispatch((0, _animation.init)());
    setTimeout(() => {
      dispatch((0, _animation.reset)());
      dispatch((0, _counterSlice.increment)());
    }, 1000);
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, type === "next" ? /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-next"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _arrowBlack.default,
    onClick: () => handleClick()
  })) : /*#__PURE__*/_react.default.createElement("div", {
    className: "btn-prev"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _arrowBlack.default,
    onClick: () => dispatch((0, _counterSlice.decrement)())
  })));
};
var _default = exports.default = Button;