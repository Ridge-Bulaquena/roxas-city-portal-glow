import React from "react";
import Threads from "./Threads"; // Adjust path if needed

interface ThreadBackgroundProps {
  color?: [number, number, number];
  amplitude?: number;
  distance?: number;
  rotation?: number; // degrees
  className?: string;
  style?: React.CSSProperties;
}

const ThreadBackground: React.FC<ThreadBackgroundProps> = ({
  color = [0.4, 0.6, 1],
  amplitude = 1,
  distance = 0.5,
  rotation = 0,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full z-0 pointer-events-none ${className}`}
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
        ...style,
      }}
    >
      <Threads
        color={color}
        amplitude={amplitude}
        distance={distance}
        enableMouseInteraction={false}
      />
    </div>
  );
};

export default ThreadBackground; 