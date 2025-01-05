import React, { useState } from 'react'
import { clientReviews } from '../constants'

const Clients = () => {
    const [showInput, setShowInput] = useState(false);

  return (
    <section className='c-space my-20'>
        <h3 className='head-text'>Hear from My Clients</h3>

        <div className='client-container'>
            {clientReviews.map(({id,name,review,img,position})=>(
                <div key={id} className='client-review'>
                    <div>
                        <p className='text-white font-light'>{review}</p>
                        <div className='client-content'>
                            <div className='flex gap-3 items-center'>
                                <img src={img} alt={name} className='w-12 h-12 rounded-full'/>

                                <div className='flex flex-col'>
                                    <p className='font-semibold text-white-800'>{name}</p>
                                    <p className='text-white-600 md:text-base text-sm font-light'>{position}</p>
                                </div>
                            </div>
                            <div className='flex self-end items-center gap-2'>
                                {Array.from({length:5}).map((_,index)=>(
                                    <img key={index} src="/assets/star.png" alt="start" className='w-5 h-5'/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <div className='relative'>
        <button 
            className="absolute left-1/2 transform -translate-x-1/2 mt-10 bg-[url('/assets/add.png')] bg-no-repeat bg-contain w-32 h-10"
        onClick={()=>(setShowInput(true))}></button>
        {showInput?<div>
            <input type="text" placeholder="Write a review..." className='w-full h-10 px-5 py-2 rounded-md border-gray-300 focus:outline-none'/>
            <button className='bg-sky-700 text-white px-5 py-2 rounded-md'>Submit</button>
    
        </div>:<div></div>}
    </div>        
    </section>
  )
}

export default Clients