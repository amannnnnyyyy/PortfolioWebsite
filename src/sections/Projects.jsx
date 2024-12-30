import React from 'react'
import { myProjects } from '../constants'

const Projects = () => {
    const currentProject = myProjects[4]
  return (
    <section className='c-space my-20'>
        <p className='head-text'>My Work</p>

        <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
            <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                <div className='absolute top-0 right-0'>
                    <img src={currentProject.spotlight} alt="spotlight" className='w-full h-96 object-cover rounded-xl'/>
                </div>

                <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                    <img src={currentProject.logo} alt="logo" className='w-10 h-10 shadow-sm'/>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Projects