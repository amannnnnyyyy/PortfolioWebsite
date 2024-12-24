import React, { useRef } from 'react'
import {Canvas, useFrame} from "@react-three/fiber"
import {OrbitControls} from "@react-three/drei"

const RotatingCube =()=>{
  const meshRef = useRef()

  useFrame(()=>{
    if (meshRef.current){
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.z += 0.01;
    }
  })
  return(
    <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"#000000"} emissive={"#55525f"} />
    </mesh>
  )
}


const App = () => {
  return (
    <Canvas style={{width:"100vw",height:"100vh",display:"flex", justifyContent:"center", alignItems:"center"}}>
      <OrbitControls enableZoom enablePan enableRotate/>
      <directionalLight position={[1,1,1]} intensity={1.5} color={"#9cdba6"}/>
      <color attach="background" args={["#F0F0F0"]}/>

    <RotatingCube />

    </Canvas>
  )
}

export default App