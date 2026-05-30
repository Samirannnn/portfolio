import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Classic Steve palette
const SKIN = "#c08e6d";
const HAIR = "#28170b";
const SHIRT = "#00affa";
const SHIRT_DARK = "#0084c4";
const PANTS = "#2c5797";
const SHOE = "#39200f";
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
      // subtle breathing while seated
      root.current.position.y = -0.5 + Math.sin(t * 1.4) * 0.03;
    }
    if (head.current) {
      // looking down at the laptop with tiny side glances
      head.current.rotation.x = 0.35 + Math.sin(t * 0.6) * 0.04;
      head.current.rotation.y = Math.sin(t * 0.7) * 0.08;
    }
    // typing — alternating tiny arm jitter
    const type = Math.sin(t * 14) * 0.06;
    if (leftArm.current) leftArm.current.rotation.x = -1.35 + type;
    if (rightArm.current) rightArm.current.rotation.x = -1.35 - type;
  });

  // Units: 1 = 4 MC pixels. Head 2x2x2, body 2x3x1, arms/legs 1x3x1.
  return (
    <group ref={root} position={[0, -0.5, 0]}>
      {/* Head pivot at neck */}
      <group ref={head} position={[0, 2.5, 0]}>
        {/* Head */}
        <PixelBox size={[2, 2, 2]} position={[0, 1, 0]} color={SKIN} />
        {/* Hair cap */}
        <PixelBox size={[2.02, 0.6, 2.02]} position={[0, 1.7, 0]} color={HAIR} />
        <PixelBox size={[2.02, 0.3, 0.4]} position={[0, 1.25, -0.85]} color={HAIR} />
        {/* Eyes */}
        <PixelBox size={[0.5, 0.4, 0.05]} position={[-0.45, 1.05, 1.01]} color={EYE} />
        <PixelBox size={[0.5, 0.4, 0.05]} position={[0.45, 1.05, 1.01]} color={EYE} />
        <PixelBox size={[0.25, 0.4, 0.06]} position={[-0.35, 1.05, 1.02]} color={PUPIL} />
        <PixelBox size={[0.25, 0.4, 0.06]} position={[0.55, 1.05, 1.02]} color={PUPIL} />
        {/* Mouth */}
        <PixelBox size={[0.9, 0.18, 0.05]} position={[0, 0.45, 1.01]} color={MOUTH} />
      </group>

      {/* Body */}
      <PixelBox size={[2, 3, 1]} position={[0, 1, 0]} color={SHIRT} />
      {/* Belt accent */}
      <PixelBox size={[2.02, 0.2, 1.02]} position={[0, -0.4, 0]} color={SHIRT_DARK} />

      {/* Arms — pivot at shoulder, rotated forward for typing */}
      <group ref={leftArm} position={[-1.5, 2.4, 0]}>
        <PixelBox size={[1, 3, 1]} position={[0, -1.5, 0]} color={SHIRT} />
        <PixelBox size={[1.02, 0.8, 1.02]} position={[0, -3.4, 0]} color={SKIN} />
      </group>
      <group ref={rightArm} position={[1.5, 2.4, 0]}>
        <PixelBox size={[1, 3, 1]} position={[0, -1.5, 0]} color={SHIRT} />
        <PixelBox size={[1.02, 0.8, 1.02]} position={[0, -3.4, 0]} color={SKIN} />
      </group>

      {/* Legs — seated, thighs forward from hip, shins down */}
      {/* Left thigh + shin */}
      <group position={[-0.5, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <PixelBox size={[1, 1.6, 1]} position={[0, -0.8, 0]} color={PANTS} />
      </group>
      <group position={[-0.5, -0.5, 1.6]}>
        <PixelBox size={[1, 1.6, 1]} position={[0, -0.8, 0]} color={PANTS} />
        <PixelBox size={[1.02, 0.35, 1.2]} position={[0, -1.75, 0.1]} color={SHOE} />
      </group>
      {/* Right thigh + shin */}
      <group position={[0.5, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <PixelBox size={[1, 1.6, 1]} position={[0, -0.8, 0]} color={PANTS} />
      </group>
      <group position={[0.5, -0.5, 1.6]}>
        <PixelBox size={[1, 1.6, 1]} position={[0, -0.8, 0]} color={PANTS} />
        <PixelBox size={[1.02, 0.35, 1.2]} position={[0, -1.75, 0.1]} color={SHOE} />
      </group>
    </group>
  );
}

function DeskSetup() {
  const screenGlow = useRef<THREE.MeshStandardMaterial>(null);
  useFrame((state) => {
    if (screenGlow.current) {
      const t = state.clock.elapsedTime;
      // subtle screen flicker
      screenGlow.current.emissiveIntensity = 0.8 + Math.sin(t * 6) * 0.1;
    }
  });
  const WOOD = "#7a4f2b";
  const WOOD_DARK = "#5a3a1f";
  const LAPTOP = "#2a2a2a";
  return (
    <group>
      {/* Chair seat (behind character, under hips) */}
      <mesh position={[0, -2.3, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 0.4, 2.6]} />
        <meshStandardMaterial color={WOOD} flatShading roughness={1} />
      </mesh>
      {/* Chair back */}
      <mesh position={[0, -0.9, -1.1]} castShadow receiveShadow>
        <boxGeometry args={[2.6, 3, 0.3]} />
        <meshStandardMaterial color={WOOD_DARK} flatShading roughness={1} />
      </mesh>
      {/* Chair legs */}
      {[[-1.1, -1.1], [1.1, -1.1], [-1.1, 1.1], [1.1, 1.1]].map(([x, z], i) => (
        <mesh key={i} position={[x, -3.5, z]} castShadow>
          <boxGeometry args={[0.3, 2, 0.3]} />
          <meshStandardMaterial color={WOOD_DARK} flatShading roughness={1} />
        </mesh>
      ))}

      {/* Desk top */}
      <mesh position={[0, -1.6, 2.6]} castShadow receiveShadow>
        <boxGeometry args={[6, 0.3, 3]} />
        <meshStandardMaterial color={WOOD} flatShading roughness={1} />
      </mesh>
      {/* Desk edge trim */}
      <mesh position={[0, -1.78, 2.6]}>
        <boxGeometry args={[6.05, 0.1, 3.05]} />
        <meshStandardMaterial color={WOOD_DARK} flatShading roughness={1} />
      </mesh>
      {/* Desk legs */}
      {[[-2.7, 1.3], [2.7, 1.3], [-2.7, 3.9], [2.7, 3.9]].map(([x, z], i) => (
        <mesh key={i} position={[x, -3.2, z]} castShadow>
          <boxGeometry args={[0.3, 3, 0.3]} />
          <meshStandardMaterial color={WOOD_DARK} flatShading roughness={1} />
        </mesh>
      ))}

      {/* Laptop base */}
      <mesh position={[0, -1.35, 2.4]} castShadow>
        <boxGeometry args={[2.2, 0.12, 1.5]} />
        <meshStandardMaterial color={LAPTOP} flatShading roughness={0.8} />
      </mesh>
      {/* Keyboard inset */}
      <mesh position={[0, -1.28, 2.55]}>
        <boxGeometry args={[1.9, 0.02, 1.1]} />
        <meshStandardMaterial color="#1a1a1a" flatShading roughness={1} />
      </mesh>
      {/* Laptop screen (tilted back) */}
      <group position={[0, -1.3, 1.65]} rotation={[-Math.PI / 2.4, 0, 0]}>
        <mesh castShadow>
          <boxGeometry args={[2.2, 1.5, 0.1]} />
          <meshStandardMaterial color={LAPTOP} flatShading roughness={0.8} />
        </mesh>
        {/* Glowing display */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[1.95, 1.25, 0.02]} />
          <meshStandardMaterial
            ref={screenGlow}
            color="#0a1f3d"
            emissive="#4ec3ff"
            emissiveIntensity={0.9}
            flatShading
            roughness={0.6}
          />
        </mesh>
      </group>

      {/* Coffee mug */}
      <mesh position={[1.85, -1.25, 2.9]} castShadow>
        <cylinderGeometry args={[0.22, 0.22, 0.5, 8]} />
        <meshStandardMaterial color="#c9a84c" flatShading roughness={0.9} />
      </mesh>
      <mesh position={[1.85, -1.05, 2.9]}>
        <cylinderGeometry args={[0.18, 0.18, 0.04, 8]} />
        <meshStandardMaterial color="#3a2410" flatShading roughness={1} />
      </mesh>

      {/* Floor plate */}
      <mesh position={[0, -4.6, 1]} receiveShadow>
        <boxGeometry args={[10, 0.2, 8]} />
        <meshStandardMaterial color="#2a2230" flatShading roughness={1} />
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
      camera={{ position: [6, 3, 9], fov: 38 }}
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
      <Steve />
      <DeskSetup />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 3.2}
        maxPolarAngle={Math.PI / 2.1}
      />
    </Canvas>
  );
}

export default MinecraftCharacter;