import React, { useEffect, useRef } from 'react';

interface SeaweedThreadBackgroundProps {
  rotation?: number; // Optional: allow parent to set rotation
  style?: React.CSSProperties;
  className?: string;
}

const NUM_THREADS = 21;

const SeaweedThreadBackground: React.FC<SeaweedThreadBackgroundProps> = ({ rotation, style, className }) => {
  const threadsRef = useRef<SVGGElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  // Random rotation per mount if not provided
  const randomRotation = useRef(rotation ?? Math.floor(Math.random() * 360));

  useEffect(() => {
    const threads = threadsRef.current;
    if (!threads) return;
    // Clear any existing children (for hot reload)
    while (threads.firstChild) threads.removeChild(threads.firstChild);
    // Create thread groups and paths
    for (let i = 0; i < NUM_THREADS; i++) {
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', 'url(#lg)');
      path.setAttribute('stroke-width', '0.3');
      g.appendChild(path);
      threads.appendChild(g);
    }
    let frame: number;
    function animate() {
      const time = Date.now() / 1000;
      Array.from(threads.children).forEach((g, i) => {
        const angle = Math.sin(time + i * 0.4) * 10;
        const path = g.firstChild as SVGPathElement;
        path.setAttribute('d', makeWavyPath(i));
        (g as SVGGElement).setAttribute('transform', `rotate(${angle}, 500, 500)`);
      });
      frame = requestAnimationFrame(animate);
    }
    function makeWavyPath(offset: number) {
      const amp = 20 + Math.sin(Date.now() / 1000 + offset) * 10;
      const freq = 0.05;
      let d = `M 100 ${100 + offset * 10}`;
      for (let x = 100; x <= 900; x += 20) {
        const y = 100 + offset * 10 + Math.sin((x + offset * 10) * freq + Date.now() / 700) * amp;
        d += ` L ${x} ${y}`;
      }
      return d;
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        transform: `rotate(${randomRotation.current}deg)`,
        ...style,
      }}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="lg" x1="0" x2="0" y1="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="rgba(153, 172, 195, 0.7)" />
          <stop offset="100%" stopColor="rgba(190, 242, 255, 0.3)" />
        </linearGradient>
      </defs>
      <g ref={threadsRef} id="threads" />
    </svg>
  );
};

export default SeaweedThreadBackground; 