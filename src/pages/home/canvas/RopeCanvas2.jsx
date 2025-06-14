import React, { useEffect, useRef } from "react";

const RopeCanvas2 = () => {
  const canvasRef = useRef(null);

  const drawRope = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = 6;
    ctx.strokeStyle = "#444";

    ctx.beginPath();

    // Cordas bem próximas das bordas
    const margin = width * 0.08;
    const startX = margin;           // esquerda
    const endX = width - margin;     // direita
    const startY = 0;
    const endY = 0;

    const bottomY = height * 0.85;

    ctx.moveTo(startX, startY);

    // Lado esquerdo: curva para baixo
    ctx.bezierCurveTo(
      startX - 40, height * 0.3,   // controle esquerdo
      startX - 40, bottomY,        // controle inferior esquerdo
      width / 2, bottomY           // meio inferior
    );

    // Lado direito: curva para cima
    ctx.bezierCurveTo(
      endX + 40, bottomY,          // controle inferior direito
      endX + 40, height * 0.3,     // controle direito
      endX, endY                   // final superior direito
    );

    ctx.stroke();
  };

  useEffect(() => {
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

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default RopeCanvas2;
