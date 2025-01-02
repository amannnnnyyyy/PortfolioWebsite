import React from 'react'
import { clientReviews } from '../constants'

const Clients = () => {
  return (
    <section className='c-space my-20'>
        <h3 className='head-text'>Hear from My Clients</h3>

        <div className='client-container'>
            {clientReviews.map((item)=>(
                <div key={item.id}></div>
            ))}
        </div>
    </section>
  )
}

export default Clients