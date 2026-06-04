"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 1600 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 22;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 22;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      vel[i * 3]     = (Math.random() - 0.5) * 0.0025;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.0025;
      vel[i * 3 + 2] = 0;
    }
    return [pos, vel];
  }, [count]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  const mat = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: new THREE.Color("#C9A96E"),
        size: 0.038,
        transparent: true,
        opacity: 0.55,
        sizeAttenuation: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    const pos = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      pos[i * 3]     += velocities[i * 3]     + Math.sin(t * 0.25 + i) * 0.0007;
      pos[i * 3 + 1] += velocities[i * 3 + 1] + Math.cos(t * 0.18 + i) * 0.0007;

      if (pos[i * 3]     >  11) pos[i * 3]     = -11;
      if (pos[i * 3]     < -11) pos[i * 3]     =  11;
      if (pos[i * 3 + 1] >  11) pos[i * 3 + 1] = -11;
      if (pos[i * 3 + 1] < -11) pos[i * 3 + 1] =  11;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.z = Math.sin(t * 0.04) * 0.04;

    const mx = (mouse.current.x / size.width  - 0.5) * 0.7;
    const my = -(mouse.current.y / size.height - 0.5) * 0.7;
    mesh.current.position.x += (mx - mesh.current.position.x) * 0.018;
    mesh.current.position.y += (my - mesh.current.position.y) * 0.018;
  });

  return (
    <points
      ref={mesh}
      geometry={geo}
      material={mat}
      onPointerMove={(e) => {
        mouse.current = { x: e.clientX, y: e.clientY };
      }}
    />
  );
}

export default function ParticleField() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 65 }}
      style={{ background: "transparent" }}
      gl={{ antialias: false, alpha: true }}
    >
      <Particles count={isMobile ? 500 : 1600} />
    </Canvas>
  );
}
