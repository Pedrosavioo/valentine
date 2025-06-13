"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const RopeCanvas = _ref => {
  let {
    top
  } = _ref;
  const canvasRef = (0, _react.useRef)(null);
  const drawRopes = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#555";
    const ropeOffset = 30; // distância da borda

    const drawRope = startX => {
      ctx.beginPath();
      ctx.moveTo(startX, 0);
      const segments = 5;
      const segmentHeight = height / segments;
      for (let i = 0; i < segments; i++) {
        const cp1x = startX + (i % 2 === 0 ? 20 : -20);
        const cp1y = segmentHeight * i + segmentHeight / 2;
        const endX = startX;
        const endY = segmentHeight * (i + 1);
        ctx.quadraticCurveTo(cp1x, cp1y, endX, endY);
      }
      ctx.stroke();
    };
    drawRope(ropeOffset); // corda esquerda
    drawRope(width - ropeOffset); // corda direita
  };
  (0, _react.useEffect)(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawRopes(ctx, canvas.width, canvas.height);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);
  return /*#__PURE__*/_react.default.createElement("canvas", {
    ref: canvasRef,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
      width: "100%",
      height: "120%"
    }
  });
};
var _default = exports.default = RopeCanvas;