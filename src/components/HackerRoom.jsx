import React,{useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const HackerRoom = () => {
    const meshRef = useRef()

    useFrame(() => {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    })

  return (
    <mesh ref={meshRef} rotation={[0,0,0]} position={[0,0,0]}>
        <cylinderGeometry args={[1, 1, 2, 32]}></cylinderGeometry>
        <meshStandardMaterial color='hotpink' emissive='hotpink'></meshStandardMaterial>
    </mesh>
  )
}

export default HackerRoom