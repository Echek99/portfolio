"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState, useEffect } from "react"
import * as THREE from 'three'
import { Environment } from "@react-three/drei"

type GeometryType = 'torus' | 'sphere' | 'torusKnot' | 'capsule' | 'icosahedron'

interface GeometryProps {
  type: GeometryType
  position: [number, number, number]
  args?: number[]
  currentSection: number
  threshold: number
}

const Geometry = ({params} : { params: GeometryProps }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null)
  const opacityRef = useRef(0)

  useFrame((state, delta) => {
    if (!meshRef.current || !materialRef.current) return

    // Rotation animation
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 1

    // Position animation
    const time = state.clock.elapsedTime
    switch (params.type) {
      case 'torus':
        meshRef.current.position.x = Math.cos(time)
        break
      case 'sphere':
      case 'torusKnot':
        meshRef.current.position.z = Math.sin(time)
        break
      case 'capsule':
        meshRef.current.position.y = Math.sin(time)
        break
    }

    // Scale animation
    const targetScale = params.currentSection === params.threshold ? 1 : 0
    const scale = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
    meshRef.current.scale.set(scale, scale, scale)

    // Opacity animation
    const targetOpacity = params.currentSection === params.threshold ? 1 : 0
    opacityRef.current = THREE.MathUtils.lerp(opacityRef.current, targetOpacity, 0.1)
    materialRef.current.opacity = opacityRef.current

    // Emissive animation
    materialRef.current.emissiveIntensity = Math.sin(time) * 0.5 + 0.5
  })

  return (
    <mesh ref={meshRef} position={params.position}>
      {params.type === 'torus' && <torusGeometry args={params.args as [number, number, number, number, number] || [1, 2, 32, 8, Math.PI * 2]} />}
      {params.type === 'sphere' && <sphereGeometry args={params.args as [number, number, number] || [1, 32, 32]} />}
      {params.type === 'torusKnot' && <torusKnotGeometry args={params.args as [number, number, number, number] || [1, 0.2, 100, 16]} />}
      {params.type === 'capsule' && <capsuleGeometry args={params.args as [number, number, number] || [1, 1, 1]} />}
      {params.type === 'icosahedron' && <icosahedronGeometry args={params.args as [number, number] || [1, 0]} />}
      <meshPhysicalMaterial
        ref={materialRef}
        depthWrite={false}
        flatShading
        color={"#777777"}
        emissive={"#000000"}
        emissiveIntensity={1}
        roughness={0}
        metalness={1}
        ior={1}
        reflectivity={1}
        iridescence={1}
        iridescenceIOR={1.3}
        transparent={true}
        clearcoat={0.5}
        opacity={0.1}
      />
    </mesh>
  )
}

const TestSite = () => {

  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = Math.floor(window.scrollY / (window.innerHeight / 2)) % 5
      setCurrentSection(section)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Environment preset="dawn" />
      <pointLight color="#fff" intensity={10} position={[-5, 5, 5]} distance={10} decay={2} />

      <Geometry params={{ type: "torus", position: [0, 0, 0], args: [1.5, 0.2, 16, 100], currentSection: currentSection, threshold: 0 }} />

      <Geometry params={{ type: "sphere", position: [0, 0, 0], args: [1.5, 32, 32], currentSection: currentSection, threshold: 1 }} />

      <Geometry params={{ type: "capsule", position: [0, 0, 0], args: [0.75, 1.5, 20, 20], currentSection: currentSection, threshold: 2 }} />

      <Geometry params={{ type: "torusKnot", position: [0, 0, 0], args: [1, 0.2, 100, 16], currentSection: currentSection, threshold: 3 }} />

      <Geometry params={{ type: "icosahedron", position: [0, 0, 0], args: [1.4, 0], currentSection: currentSection, threshold: 4 }} />
    </>
  )
}

export default function MetalScene() {
  return (
    <div style={{}}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, opacity: 0.7 }}>
        <Canvas camera={{ position: [0, 0, 8.5] }}>
          <TestSite />
        </Canvas>
      </div>
    </div>
  )
}