import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import HackerRoom from '../components/HackerRoom'

const Hero = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl text-white font-medium text-center font-generalsans'>
                Hi, I am Amanuel 
                    <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-gray_gradient'>
                Software Developer <span className='hidden sm:inline'>|</span> ML Engineer
            </p>
        </div>

        <div className='w-full h-full position-absolute inset-0'>
            <Canvas className='w-full h-full'>
                <PerspectiveCamera makeDefault position={[0,0,30]}/>
                <OrbitControls enableZoom enablePan enableRotate/>
                <directionalLight position={[1,1,1]} intensity={1.5} color={'#9cdba6'}/>
                <color attach="background" args={['#F0F0F0']} />
                <HackerRoom/>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero