import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Box, Torus } from '@react-three/drei'
import * as THREE from 'three'

function FloatingGeometry({ position, scale = 1, speed = 1 }: { 
  position: [number, number, number]
  scale?: number
  speed?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshStandardMaterial 
        color="#8B5CF6" 
        wireframe 
        transparent 
        opacity={0.6}
        emissive="#8B5CF6"
        emissiveIntensity={0.2}
      />
    </mesh>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00FFFF" transparent opacity={0.6} />
    </points>
  )
}

export default function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} color="#8B5CF6" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00FFFF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8B5CF6" />
      
      <Particles />
      
      <FloatingGeometry position={[-3, 2, 0]} scale={0.8} speed={0.8} />
      <FloatingGeometry position={[3, -1, -2]} scale={1.2} speed={1.2} />
      <FloatingGeometry position={[0, 3, -3]} scale={0.6} speed={1.5} />
      <FloatingGeometry position={[-2, -2, 2]} scale={1} speed={0.6} />
      
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[3, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#00FFFF" 
          transparent 
          opacity={0.3}
          emissive="#00FFFF"
          emissiveIntensity={0.1}
        />
      </mesh>
    </>
  )
}