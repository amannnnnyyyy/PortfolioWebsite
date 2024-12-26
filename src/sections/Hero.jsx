import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';

const Hero = () => {
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

      <div className='w-full h-full flex justify-center items-center absolute inset-0 z-0'>
        <Canvas className='w-full h-full'  style={{ transform: 'translate(400px,100px)' }}>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <OrbitControls enableZoom enablePan enableRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} color={'#9cdba6'} />
            <HackerRoom scale={0.1} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}

export default Hero;