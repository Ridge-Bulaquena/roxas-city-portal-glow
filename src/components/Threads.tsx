import React, { useRef, useEffect } from "react";

interface ThreadsProps {
  color?: [number, number, number]; // RGB values between 0-1
  amplitude?: number;
  distance?: number;
  enableMouseInteraction?: boolean;
}

const Threads: React.FC<ThreadsProps> = ({
  color = [0.4, 0.6, 1],
  amplitude = 1,
  distance = 0.5,
  enableMouseInteraction = false
}) => {
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
    const speed = 0.002;

    const draw = () => {
      // Clear background
      ctx.clearRect(0, 0, width, height);

      const time = Date.now();

      // Draw horizontal threads
      for (let i = 0; i < lines; i++) {
        const y = i * spacing;
        ctx.beginPath();

        for (let x = 0; x <= width; x += 10) {
          const offset = Math.sin(x * 0.01 + time * speed + i) * (amplitude * 20);
          const yOffset = y + offset;
          if (x === 0) {
            ctx.moveTo(x, yOffset);
          } else {
            ctx.lineTo(x, yOffset);
          }
        }

        // Use the color prop to create alternating shades
        const [r, g, b] = color;
        const alpha = i % 2 === 0 ? 0.8 : 0.6;
        ctx.strokeStyle = `rgba(${r * 255}, ${g * 255}, ${b * 255}, ${alpha})`;
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
  }, [color, amplitude, distance]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: enableMouseInteraction ? "auto" : "none" }}
    />
  );
};

export default Threads; 