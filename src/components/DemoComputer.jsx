import React, { useRef, useEffect } from 'react';
import { useGLTF, useTexture } from '@react-three/drei'
import { VideoTexture } from 'three';
import * as THREE from 'three'

const DemoComputer = (props)=> {
  const { nodes, materials } = useGLTF('models/scene.gltf')
  const videoRef = useRef();


  const videoTexture = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      // Ensure the video is loaded and playable
      video.src = '/assets/vid.mp4'; // Replace with your video file path
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.play();

      // Create a THREE.VideoTexture from the video element
      videoTexture.current = new VideoTexture(video);
    
    // Clean up the video element
    return () => {
      video.pause();
      video.src = '';
    };
    }
  }, []);

  return (
    <group {...props} dispose={null}>
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
          material={new THREE.MeshBasicMaterial({ map: videoTexture.current })}
        />
      </group>
    </group>
  )
}


export default DemoComputer

useGLTF.preload('/scene.gltf')