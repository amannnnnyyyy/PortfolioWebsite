import React from 'react'
import { clientReviews } from '../constants'

const Clients = () => {
  return (
    <section className='c-space my-20' id='contact'>
        <h3 className='head-text'>Hear from My Clients</h3>

        <div className='client-container'>
            {clientReviews.map(({id,name,review,img,position})=>(
                <div key={id} className='client-review'>
                    <div>
                        <p className='text-white font-light'>{review}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Clients