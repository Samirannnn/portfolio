import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const SKIN = "#fbd7b5";       // brighter, fair skin
const HAIR = "#1a0f06";       // dark messy hair
const HAIR_2 = "#2d1a0c";     // slightly lighter strand
const SHIRT = "#f5f5f5";       // white shirt
const SHIRT_DARK = "#d0d0d0";  // shirt shadow / belt accent
const PANTS = "#5a5f66";       // gray trousers
const SHOE = "#0a0a0a";        // black shoes
const TIE = "#0b1f5c";         // deep blue tie
const TIE_KNOT = "#081542";
const EYE = "#ffffff";
const PUPIL = "#3b2a8a";
const MOUTH = "#5a3826";

function PixelBox({
  size,
  position,
  color,
}: {
  size: [number, number, number];
  position: [number, number, number];
  color: string;
}) {
  return (
    <mesh position={position} castShadow receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} flatShading roughness={1} />
    </mesh>
  );
}

function Steve() {
  const root = useRef<THREE.Group>(null);
  const leftArm = useRef<THREE.Group>(null);
  const rightArm = useRef<THREE.Group>(null);
  const head = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (root.current) {
      root.current.position.y = -0.5 + Math.sin(t * 1.5) * 0.05;
      root.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    }
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.6) * 0.1;
    }
    // arms relaxed at sides
    if (leftArm.current) leftArm.current.rotation.set(0, 0, 0);
    if (rightArm.current) rightArm.current.rotation.set(0, 0, 0);
  });

  return (
    <group ref={root} position={[0, -0.5, 0]}>
      <group ref={head} position={[0, 2.5, 0]}>
        <PixelBox size={[2, 2, 2]} position={[0, 1, 0]} color={SKIN} />
        <PixelBox size={[2.02, 0.6, 2.02]} position={[0, 1.7, 0]} color={HAIR} />
        <PixelBox size={[2.02, 0.3, 0.4]} position={[0, 1.25, -0.85]} color={HAIR} />
        <PixelBox size={[0.5, 0.4, 0.05]} position={[-0.45, 1.05, 1.01]} color={EYE} />
        <PixelBox size={[0.5, 0.4, 0.05]} position={[0.45, 1.05, 1.01]} color={EYE} />
        <PixelBox size={[0.25, 0.4, 0.06]} position={[-0.35, 1.05, 1.02]} color={PUPIL} />
        <PixelBox size={[0.25, 0.4, 0.06]} position={[0.55, 1.05, 1.02]} color={PUPIL} />
        <PixelBox size={[0.9, 0.18, 0.05]} position={[0, 0.45, 1.01]} color={MOUTH} />
      </group>

      <PixelBox size={[2, 3, 1]} position={[0, 1, 0]} color={SHIRT} />
      <PixelBox size={[2.02, 0.2, 1.02]} position={[0, -0.4, 0]} color={SHIRT_DARK} />
      {/* Tie */}
      <PixelBox size={[0.5, 0.4, 0.06]} position={[0, 2.3, 0.52]} color={TIE_KNOT} />
      <PixelBox size={[0.7, 2.2, 0.06]} position={[0, 1, 0.52]} color={TIE} />
      <PixelBox size={[0.5, 0.3, 0.06]} position={[0, -0.2, 0.52]} color={TIE_KNOT} />

      <group ref={leftArm} position={[-1.5, 2.4, 0]}>
        <PixelBox size={[1, 3, 1]} position={[0, -1.5, 0]} color={SHIRT} />
        <PixelBox size={[1.02, 0.8, 1.02]} position={[0, -3.4, 0]} color={SKIN} />
      </group>
      <group ref={rightArm} position={[1.5, 2.4, 0]}>
        <PixelBox size={[1, 3, 1]} position={[0, -1.5, 0]} color={SHIRT} />
        <PixelBox size={[1.02, 0.8, 1.02]} position={[0, -3.4, 0]} color={SKIN} />
      </group>

      <group position={[-0.5, -0.5, 0]}>
        <PixelBox size={[1, 3, 1]} position={[0, -1.5, 0]} color={PANTS} />
        <PixelBox size={[1.02, 0.4, 1.02]} position={[0, -3.2, 0]} color={SHOE} />
      </group>
      <group position={[0.5, -0.5, 0]}>
        <PixelBox size={[1, 3, 1]} position={[0, -1.5, 0]} color={PANTS} />
        <PixelBox size={[1.02, 0.4, 1.02]} position={[0, -3.2, 0]} color={SHOE} />
      </group>
    </group>
  );
}

function GrassBlock() {
  return (
    <group position={[0, -4.7, 0]}>
      <mesh receiveShadow>
        <boxGeometry args={[4, 0.8, 4]} />
        <meshStandardMaterial color="#5a3a1f" flatShading roughness={1} />
      </mesh>
      <mesh position={[0, 0.45, 0]}>
        <boxGeometry args={[4.02, 0.2, 4.02]} />
        <meshStandardMaterial color="#4a8a2c" flatShading roughness={1} />
      </mesh>
    </group>
  );
}

export function MinecraftCharacter() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex h-full w-full items-center justify-center text-xs text-white/60">
        Loading character...
      </div>
    );
  }

  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.5, 16], fov: 30 }}
      dpr={[1, 2]}
      gl={{ antialias: false }}
    >
      <color attach="background" args={["transparent"]} />
      <ambientLight intensity={0.7} />
      <directionalLight
        position={[5, 10, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <directionalLight position={[-5, 4, -5]} intensity={0.3} color="#8ab4ff" />
      <group scale={0.7}>
        <Steve />
        <GrassBlock />
      </group>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.9}
      />
    </Canvas>
  );
}

export default MinecraftCharacter;
