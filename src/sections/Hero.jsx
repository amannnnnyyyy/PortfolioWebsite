import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
// import { Leva, useControls } from 'leva';
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Rings';
import HeroCamera from '../components/HeroCamera';
import Button from '../components/Button';

const Hero = () => {
  const isMobile = useMediaQuery({query: '(max-width: 768px)'})
  const isSmall = useMediaQuery({query: '(max-width: 480px)'})
  const isTablet = useMediaQuery({query: '(min-width: 768px) and (max-width: 1024px)'})

  const sizes = calculateSizes(isSmall, isMobile, isTablet)
  // const x = useControls('HackerRoom', {
  //     positionX:{
  //       value: 2.5,
  //       min: -20,
  //       max: 20,
  //       step: 0.1,
  //     },
  //     positionY:{
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     positionZ:{
  //       value: 2.5,
  //       min: -10,
  //       max: 10,
  //       step: 0.1,
  //     },
  //     rotationX:{
  //       value: 0,
  //       min: -Math.PI,
  //       max: Math.PI,
  //       step: 0.1,
  //     },
  //     rotationY:{
  //       value: 0,
  //       min: -Math.PI,
  //       max: Math.PI,
  //       step: 0.1,
  //     },
  //     rotationZ:{
  //       value: 0,
  //       min: -Math.PI,
  //       max: Math.PI,
  //       step: 0.1,
  //     },
  //     scale:{
  //       value: 1,
  //       min: 0,
  //       max: 5,
  //       step: 0.1,
  //     },
  // },
  // );
  return (
    <section className='min-h-screen w-full flex flex-col relative gap-10' id='home'>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 relative'>
        <p className='sm:text-3xl text-2xl text-white font-medium text-center font-generalsans'>
          Hi, I am Amanuel 
          <span className='waving-hand'>👋</span>
        </p>
        <p className='hero_tag text-gray_gradient bg-black bg-opacity-50 p-2 rounded-md text-center' style={{ fontSize: 'calc(1rem + 1vw)' }}>
          Software Developer <span className='hidden md:inline'>|</span> <br className='md:hidden'></br> ML Engineer
        </p>
      </div>

      <div className='w-full h-full flex justify-center items-center absolute inset-0 z-10 mt-5'>
      {/* <Leva /> */}
      <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            {/* <OrbitControls enableZoom enablePan enableRotate /> */}
            <HeroCamera isMobile={isMobile}>
            <HackerRoom 
                position = {sizes.deskPosition}
                rotation = {[0.2, -3.2, 0]}
                scale = {sizes.deskScale}
            />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Cube position={sizes.cubePosition}/>
              <Rings position={sizes.ringPosition}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} color={'#9cdba6'} />
            
          </Suspense>
        </Canvas>
      </div>
      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href="#about" className='w-fit'>
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </a>
      </div>
    </section>
  );
}

export default Hero;