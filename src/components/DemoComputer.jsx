import React, {  useEffect, useRef, useState } from 'react';
import { useGLTF  } from '@react-three/drei'
import {useGSAP} from '@gsap/react'
import { VideoTexture } from 'three';
import gsap from 'gsap';

const DemoComputer = (props)=> {
  const group = useRef()
  const {index} = props
  const { nodes, materials } = useGLTF('models/scene.gltf')

 

  const [videoTexture, setVideoTexture] = useState(null);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = `/textures/project/project${index+1}.mp4`;
    video.loop = true;
    video.muted = true;
    video.autoplay = true;
    video.playsInline = true;

    video.oncanplaythrough = () => {
      setVideoTexture(new VideoTexture(video));
      video.play();
    };

    return () => {
      video.pause();
      video.src = '';
    };
  }, [index]);

  useGSAP(()=>{
    gsap.from(group.current?.rotation, {
      y: Math.PI/2,
      duration:1,
      ease:'power3.out'
    })
  },[index])

  if (!videoTexture) {
    return null;
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.None}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials['Material.018']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials['Material.019']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials['Material.014']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials['Material.015']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials['Material.016']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials['Material.017']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials['Material.002']}
        >
          <meshStandardMaterial  map={videoTexture} scale={[-1, 1, 1]}/>
        </mesh>
      </group>
    </group>
  )
}


export default DemoComputer

useGLTF.preload('/scene.gltf')