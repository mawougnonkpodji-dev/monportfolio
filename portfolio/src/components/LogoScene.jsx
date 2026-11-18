import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, ContactShadows, Float, RoundedBox, Text } from '@react-three/drei'

const metal = {
  metalness: 0.78,
  roughness: 0.2,
  clearcoat: 0.7,
  clearcoatRoughness: 0.18,
}

function ReactMark() {
  const rings = [
    [0.15, 0, 0],
    [1.05, 0.2, 0.15],
    [-1.05, -0.15, 0.1],
  ]

  return (
    <group>
      <mesh>
        <sphereGeometry args={[0.2, 40, 40]} />
        <meshPhysicalMaterial color="#e0f2fe" emissive="#7dd3fc" emissiveIntensity={0.45} {...metal} />
      </mesh>
      {rings.map((rotation, index) => (
        <mesh key={index} rotation={rotation}>
          <torusGeometry args={[0.68, 0.055, 28, 100]} />
          <meshPhysicalMaterial color="#38bdf8" emissive="#0369a1" emissiveIntensity={0.4} {...metal} />
        </mesh>
      ))}
    </group>
  )
}

function PythonMark() {
  return (
    <group>
      <mesh position={[0.02, 0.28, 0]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.4, 0.12, 24, 48, Math.PI]} />
        <meshPhysicalMaterial color="#7dd3fc" emissive="#0ea5e9" emissiveIntensity={0.25} {...metal} />
      </mesh>
      <mesh position={[0.4, 0.28, 0]}>
        <sphereGeometry args={[0.18, 28, 28]} />
        <meshPhysicalMaterial color="#bae6fd" {...metal} />
      </mesh>
      <mesh position={[-0.02, -0.28, 0]}>
        <torusGeometry args={[0.4, 0.12, 24, 48, Math.PI]} />
        <meshPhysicalMaterial color="#1d4ed8" emissive="#1e3a8a" emissiveIntensity={0.28} {...metal} />
      </mesh>
      <mesh position={[-0.4, -0.28, 0]}>
        <sphereGeometry args={[0.18, 28, 28]} />
        <meshPhysicalMaterial color="#2563eb" {...metal} />
      </mesh>
    </group>
  )
}

function JavaScriptMark() {
  return (
    <group>
      <RoundedBox args={[1.15, 1.15, 0.28]} radius={0.18} smoothness={5}>
        <meshPhysicalMaterial color="#101826" emissive="#0c4a6e" emissiveIntensity={0.22} {...metal} />
      </RoundedBox>
      <Text
        position={[0, -0.02, 0.2]}
        fontSize={0.46}
        color="#7dd3fc"
        anchorX="center"
        anchorY="middle"
      >
        JS
      </Text>
    </group>
  )
}

function SqlMark() {
  return (
    <group>
      <mesh position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.78, 48]} />
        <meshPhysicalMaterial color="#16324f" emissive="#1d4ed8" emissiveIntensity={0.16} {...metal} />
      </mesh>
      <mesh position={[0, 0.32, 0]}>
        <cylinderGeometry args={[0.44, 0.44, 0.16, 48]} />
        <meshPhysicalMaterial color="#7dd3fc" emissive="#38bdf8" emissiveIntensity={0.25} {...metal} />
      </mesh>
      <mesh position={[0, -0.08, 0]}>
        <cylinderGeometry args={[0.44, 0.44, 0.1, 48]} />
        <meshPhysicalMaterial color="#38bdf8" {...metal} />
      </mesh>
      <mesh position={[0, -0.46, 0]}>
        <cylinderGeometry args={[0.44, 0.44, 0.12, 48]} />
        <meshPhysicalMaterial color="#1d4ed8" {...metal} />
      </mesh>
    </group>
  )
}

function GitMark() {
  const node = (position) => (
    <mesh key={position.join('-')} position={position}>
      <sphereGeometry args={[0.15, 28, 28]} />
      <meshPhysicalMaterial color="#e0f2fe" emissive="#38bdf8" emissiveIntensity={0.22} {...metal} />
    </mesh>
  )

  return (
    <group>
      <mesh position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 0.7, 16]} />
        <meshPhysicalMaterial color="#7dd3fc" {...metal} />
      </mesh>
      <mesh position={[0.28, -0.12, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.045, 0.045, 0.56, 16]} />
        <meshPhysicalMaterial color="#7dd3fc" {...metal} />
      </mesh>
      {node([0, 0.58, 0])}
      {node([0, -0.12, 0])}
      {node([0.56, -0.12, 0])}
    </group>
  )
}

const logos = [
  { name: 'React', Mark: ReactMark, position: [-1.35, 0.72, 0] },
  { name: 'Python', Mark: PythonMark, position: [1.35, 0.68, 0] },
  { name: 'JavaScript', Mark: JavaScriptMark, position: [0, 0.02, 0.25] },
  { name: 'SQL', Mark: SqlMark, position: [-1.2, -1.05, 0] },
  { name: 'Git', Mark: GitMark, position: [1.2, -1.02, 0] },
]

function Mark({ motion, offset, children }) {
  const ref = useRef(null)

  useFrame(({ clock }) => {
    if (!motion || !ref.current) return
    ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.7 + offset) * 0.35
  })

  return <group ref={ref}>{children}</group>
}

function Stage({ motion }) {
  return (
    <group>
      <mesh position={[0, -0.05, -0.8]}>
        <ringGeometry args={[1.85, 1.9, 80]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.45} />
      </mesh>
      {logos.map(({ name, Mark: Logo, position }, index) => (
        <Float
          key={name}
          speed={motion ? 1.4 : 0}
          rotationIntensity={0}
          floatIntensity={motion ? 0.4 : 0}
          floatingRange={[-0.08, 0.08]}
        >
          <group position={position}>
            <Mark motion={motion} offset={index}>
              <Logo />
            </Mark>
            <Billboard position={[0, -0.78, 0]}>
              <Text fontSize={0.18} color="#e0f2fe" anchorX="center" anchorY="middle">
                {name}
              </Text>
            </Billboard>
          </group>
        </Float>
      ))}
    </group>
  )
}

export default function LogoScene() {
  const motion = typeof window === 'undefined'
    ? true
    : !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <Canvas
      camera={{ position: [0, 0.05, 6.6], fov: 34 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[3.5, 4.5, 5]} intensity={1.7} color="#f8fbff" />
      <directionalLight position={[-4, 1.5, 2]} intensity={0.9} color="#7dd3fc" />
      <pointLight position={[0, 0.2, 3.2]} intensity={0.55} color="#60a5fa" />
      <Stage motion={motion} />
      <ContactShadows position={[0, -2.25, 0]} opacity={0.4} scale={9} blur={2.6} far={3.2} color="#020617" />
    </Canvas>
  )
}
