import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

const Target = (props) => {
  const targetRef = useRef();
  const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')

  useGSAP(()=>{
   // Rotate the target smoothly
   gsap.to(targetRef.current.rotation, {
    duration: 20,
    repeat: -1,
    ease: 'linear',
    y: 2 * Math.PI,
  });

  // Scale animation
  gsap.to(targetRef.current.scale, {
    duration: 2,
    repeat: -1,
    ease: 'linear',
    x: 1.2,
    y: 1.2,
    z: 1.2,
    yoyo: true,
  });

  // Position animation
  gsap.to(targetRef.current.position, {
    y: targetRef.current.position.y + 0.5,
    duration: 2,
    repeat: -1,
    ease: 'linear',
    yoyo: true,
    repeatDelay: 1.5,
  });
  },[])
  return (
    <mesh {...props} ref = {targetRef}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Target