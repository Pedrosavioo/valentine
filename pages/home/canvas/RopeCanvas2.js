"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const RopeCanvas2 = () => {
  const canvasRef = (0, _react.useRef)(null);
  const drawRope = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#444";
    ctx.beginPath();

    // Cordas bem próximas das bordas
    const margin = width * 0.08;
    const startX = margin; // esquerda
    const endX = width - margin; // direita
    const startY = 0;
    const endY = 0;
    const bottomY = height * 0.85;
    ctx.moveTo(startX, startY);

    // Lado esquerdo: curva para baixo
    ctx.bezierCurveTo(startX - 40, height * 0.3,
    // controle esquerdo
    startX - 40, bottomY,
    // controle inferior esquerdo
    width / 2, bottomY // meio inferior
    );

    // Lado direito: curva para cima
    ctx.bezierCurveTo(endX + 40, bottomY,
    // controle inferior direito
    endX + 40, height * 0.3,
    // controle direito
    endX, endY // final superior direito
    );
    ctx.stroke();
  };
  (0, _react.useEffect)(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawRope(ctx, canvas.width, canvas.height);
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
      height: "100%"
    }
  });
};
var _default = exports.default = RopeCanvas2;