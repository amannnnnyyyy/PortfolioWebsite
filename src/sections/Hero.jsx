import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import { Leva, useControls } from 'leva';

const Hero = () => {
  const x = useControls('HackerRoom', {
      positionX:{
        value: 2.5,
        min: -20,
        max: 20,
        step: 0.1,
      },
      positionY:{
        value: 2.5,
        min: -10,
        max: 10,
        step: 0.1,
      },
      positionZ:{
        value: 2.5,
        min: -10,
        max: 10,
        step: 0.1,
      },
      rotationX:{
        value: 0,
        min: -Math.PI,
        max: Math.PI,
        step: 0.1,
      },
      rotationY:{
        value: 0,
        min: -Math.PI,
        max: Math.PI,
        step: 0.1,
      },
      rotationZ:{
        value: 0,
        min: -Math.PI,
        max: Math.PI,
        step: 0.1,
      },
      scale:{
        value: 1,
        min: 0,
        max: 5,
        step: 0.1,
      },
  },
  );
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 relative'>
        <p className='sm:text-3xl text-2xl text-white font-medium text-center font-generalsans'>
          Hi, I am Amanuel 
          <span className='waving-hand'>👋</span>
        </p>
        <p className='hero_tag text-gray_gradient bg-black bg-opacity-50 p-2 rounded-md text-center'>
          Software Developer <span className='hidden sm:inline'>|</span> ML Engineer
        </p>
      </div>

      <div className='w-full h-full flex justify-center items-center absolute inset-0 z-10'>
      <Leva />
      <Canvas className='w-full h-full'  style={{ transform: 'translate(400px,100px)' }}>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <OrbitControls enableZoom enablePan enableRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} color={'#9cdba6'} />
            <HackerRoom 
                position = {[-18, -6.1, -4.9]}
                rotation = {[0.4, -2.7, 0.2]}
                scale = {[0.1,0.1,0.1]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Hero;