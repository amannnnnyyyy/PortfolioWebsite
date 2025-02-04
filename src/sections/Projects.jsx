import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Leva, useControls } from 'leva';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';



const projectCount = myProjects.length;
const Projects = () => {
    // const x = useControls('HackerRoom', {
    //         positionX:{
    //           value: 2.5,
    //           min: -20,
    //           max: 20,
    //           step: 0.1,
    //         },
    //         positionY:{
    //           value: 2.5,
    //           min: -10,
    //           max: 10,
    //           step: 0.1,
    //         },
    //         positionZ:{
    //           value: 2.5,
    //           min: -10,
    //           max: 10,
    //           step: 0.1,
    //         },
    //         rotationX:{
    //           value: 0,
    //           min: -Math.PI,
    //           max: Math.PI,
    //           step: 0.1,
    //         },
    //         rotationY:{
    //           value: 0,
    //           min: -Math.PI,
    //           max: Math.PI,
    //           step: 0.1,
    //         },
    //         rotationZ:{
    //           value: 0,
    //           min: -Math.PI,
    //           max: Math.PI,
    //           step: 0.1,
    //         },
    //         scale:{
    //           value: 1,
    //           min: 0,
    //           max: 5,
    //           step: 0.1,
    //         },
    //     },
    //     );

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)
    const currentProject = myProjects[selectedProjectIndex]

    const handleNavigation = (direction)=>{
            setSelectedProjectIndex((prevIndex)=>{
                if(direction==='prev')
                    return prevIndex===0?projectCount-1:prevIndex-1
                else 
                    return prevIndex===projectCount-1?0:prevIndex+1
            })
        
    }


  return (
    <section className='c-space my-20' id='work'>
        <p className='head-text'>My Work</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                <div className='absolute top-0 right-0'>
                    <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl'/>
                </div>

                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm'/>
                </div>

                <div className='flex flex-col gap-5 text-white-600 my-5'>
                    <p className='text-white text-2xl font-semibold animatedText'>
                        {currentProject.title}
                    </p>
                    <p className='animatedText'>{currentProject.desc}</p>
                    <p className='animatedText'>{currentProject.subdesc}</p>
                </div>

                <div className='flex items-center justify-between flex-wrap gap-5'>
                    <div className='flex items-center gap-3'>
                        {currentProject.tags.map((tag,index) => (
                            <div key={index} className="tech-logo">
                                <img src={tag.path} alt={tag.name} />
                            </div>))}
                    </div>
                    <a className='flex items-center gap-2 cursor-pointer text-white-600' href={currentProject.href} target='_blank'>
                        <p>Check live site</p>
                        <img src="/assets/arrow-up.png" alt="arrow" className='w-3 h-3'/>
                    </a>
                </div>
                <div className='flex justify-between items-center mt-7'>
                    <button className='arrow-btn' onClick={()=>handleNavigation('prev')}>
                        <img src="/assets/left-arrow.png" alt="left-arrow" className='w-4 h-4'/>
                    </button>
                    <button className='arrow-btn' onClick={()=>handleNavigation('next')}>
                        <img src="/assets/right-arrow.png" alt="right-arrow" className='w-4 h-4'/>
                    </button>
                </div>
            </div>
            <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
                {/* <Leva/> */}
                <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} intensity={0.5} color={'#9cdba6'} />
                    <Center>
                        <Suspense fallback={<CanvasLoader/>}>
                            <group scale={2} position={[0,3,0]} rotation={[0,10,0]}>
                                <DemoComputer position={[0.1,-1.9,-1.3]} scale={0.5} rotation={[0,-1.8, -3.1]} index={selectedProjectIndex}/>
                            </group>
                        </Suspense>
                    </Center>
                    <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            enableRotate={false}
                        />
                </Canvas>
            </div>
        </div>
    </section>
  )
}

export default Projects