import React, { useEffect, useRef } from "react";

const RopeCanvas = ({ top }) => {
  const canvasRef = useRef(null);

  const drawRopes = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#555";

    const ropeOffset = 30; // distância da borda

    const drawRope = (startX) => {
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

  useEffect(() => {
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

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "120%",
      }}
    />
  );
};

export default RopeCanvas;
