import React, { useRef, useEffect } from "react";
import { Renderer, Camera, Transform, Geometry, Program, Mesh } from "ogl";

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
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Clean up previous renderer if any
    if (rendererRef.current) {
      rendererRef.current.gl.getExtension('WEBGL_lose_context')?.loseContext();
      rendererRef.current = null;
      while (mount.firstChild) mount.removeChild(mount.firstChild);
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const renderer = new Renderer({ dpr: 1, width, height, alpha: true });
    rendererRef.current = renderer;
    mount.appendChild(renderer.gl.canvas);

    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(width / height);
    camera.position.z = 5;

    const scene = new Transform();

    // Thread lines setup
    const lines = 60;
    const spacing = distance * 20;
    const threadMeshes: Mesh[] = [];
    const threadGeometries: Geometry[] = [];
    const threadPrograms: Program[] = [];

    for (let i = 0; i < lines; i++) {
      // Create a horizontal line geometry
      const points = [];
      for (let x = -2; x <= 2; x += 0.04) {
        points.push(x, 0, 0);
      }
      const geometry = new Geometry(gl, {
        position: { size: 3, data: new Float32Array(points) },
      });
      const [r, g, b] = color;
      const threadColor = [r, g, b].map((c, idx) => c * (i % 2 === 0 ? 1 : 0.7));
      const program = new Program(gl, {
        vertex: `
          attribute vec3 position;
          uniform float uTime;
          uniform float uY;
          uniform float uAmplitude;
          varying float vX;
          void main() {
            float offset = sin(position.x * 8.0 + uTime + uY) * uAmplitude;
            vec3 pos = position;
            pos.y += offset;
            pos.y += uY;
            vX = position.x;
            gl_Position = vec4(pos, 1.0);
          }
        `,
        fragment: `
          precision highp float;
          uniform vec3 uColor;
          varying float vX;
          void main() {
            gl_FragColor = vec4(uColor, 0.8);
          }
        `,
        uniforms: {
          uTime: { value: 0 },
          uY: { value: (i - lines / 2) * spacing / 100 },
          uAmplitude: { value: amplitude * 0.12 },
          uColor: { value: threadColor },
        },
        transparent: true,
      });
      const mesh = new Mesh(gl, { geometry, program, mode: gl.LINE_STRIP });
      mesh.setParent(scene);
      threadMeshes.push(mesh);
      threadGeometries.push(geometry);
      threadPrograms.push(program);
    }

    let animationId: number;
    const animate = () => {
      const time = performance.now() * 0.002;
      threadPrograms.forEach((program) => {
        program.uniforms.uTime.value = time;
      });
      renderer.render({ scene, camera });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.perspective(w / h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      threadMeshes.forEach((mesh) => mesh.setParent(null));
      // Geometry and Program do not have dispose methods in ogl
      if (rendererRef.current) {
        rendererRef.current.gl.getExtension('WEBGL_lose_context')?.loseContext();
        rendererRef.current = null;
      }
      while (mount.firstChild) mount.removeChild(mount.firstChild);
    };
  }, [color, amplitude, distance]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: enableMouseInteraction ? "auto" : "none" }}
    />
  );
};

export default Threads; 