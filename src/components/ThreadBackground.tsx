import { useRef, useEffect } from "react";

const ThreadBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const lines = 60;
    const spacing = 28;

    const draw = () => {
      // Gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#0a0f3d");    // Midnight Blue
      gradient.addColorStop(0.5, "#1f3b67");  // Slate Blue
      gradient.addColorStop(1, "#b4d4ee");    // Baby Blue
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw animated thread lines
      for (let i = 0; i < lines; i++) {
        const offset = Math.sin(Date.now() * 0.001 + i) * 20;
        ctx.beginPath();
        ctx.moveTo(i * spacing, 0);
        ctx.lineTo(i * spacing + offset, height);
        ctx.strokeStyle = i % 2 === 0 ? "#00bfff" : "#89c9ff"; // Electric blue & baby blue
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ pointerEvents: "none" }}
    />
  );
};

export default ThreadBackground; 