import React from "react";
import Threads from "./Threads"; // Adjust path if needed

const ThreadBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Threads
        color={[0.4, 0.6, 1]} // soft blue (adjust as desired)
        amplitude={1}
        distance={0.5}
        enableMouseInteraction={false}
      />
    </div>
  );
};

export default ThreadBackground; 