import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const ReactLogo=(props)=> {
  const { nodes, materials } = useGLTF('models/react.glb')
  return (
    <Float dispose={null}>
      <group {...props} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </Float>
  )
}

export default ReactLogo;

useGLTF.preload('models/react.glb')