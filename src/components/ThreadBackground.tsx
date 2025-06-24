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
    const spacing = 20;
    const amplitude = 20;
    const speed = 0.002;
    const useWhiteBackground = false;

    const draw = () => {
      // Clear background (white or transparent)
      ctx.clearRect(0, 0, width, height);
      if (useWhiteBackground) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, width, height);
      }

      const time = Date.now();

      // Draw horizontal threads
      for (let i = 0; i < lines; i++) {
        const y = i * spacing;
        ctx.beginPath();

        for (let x = 0; x <= width; x += 10) {
          const offset = Math.sin(x * 0.01 + time * speed + i) * amplitude;
          const yOffset = y + offset;
          if (x === 0) {
            ctx.moveTo(x, yOffset);
          } else {
            ctx.lineTo(x, yOffset);
          }
        }

        ctx.strokeStyle = i % 2 === 0 ? "#2f70c9" : "#8eaedc"; // Blue and grey-blue
        ctx.lineWidth = 1.2;
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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
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