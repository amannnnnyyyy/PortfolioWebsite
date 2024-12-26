import { useGSAP } from '@gsap/react'
import { Float, useGLTF, useTexture } from '@react-three/drei'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const Cube = (props) => {
const texture = useTexture("textures/cube.png")

    const {nodes} = useGLTF("/models/cube.glb")
    const [hovered, setHovered] = useState(false)
    const cubeRef = useRef()

    useGSAP(()=>{
        gsap
        .timeline({
            repeat:-1,
            repeatDelay:0.5,
        })
        .to(cubeRef.current.rotation, {
          y: hovered ? '+=2' : `+=${Math.PI*2}`,
          x: hovered ? '+=2' : `-=${Math.PI*2}`,
          duration:2.5,
          stagger: {
            each:0.15,
          }
        });
      }, [])
  return (
    <Float floatIntensity={2}>
        <group position={[8,8,0]} rotation={[2.6,0.8,-1.8]} scale={0.74} dispose={null} {...props}>
        <mesh ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={()=>setHovered(true)}
          >
            <meshMatcapMaterial matcap={texture} toneMapped={false}/>
        </mesh>
      </group>
    </Float>
  )
}

export default Cube