import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy policy</p>
        </div>
        <div className='flex gap-3'>
            <div className='social-icon'>
               <a href="https://github.com/amannnnnyyyy/"><img src="/assets/github.svg" alt="github" className='ml-3 w-1/2 h-1/2'/></a>
            </div>
            <div className='social-icon'>
               <a href="https://github.com/amannnnnyyyy/"><img src="/assets/twitter.svg" alt="twitter" className='ml-3 w-1/2 h-1/2'/></a>
            </div>
            <div className='social-icon'>
               <a href="https://github.com/amannnnnyyyy/"><img src="/assets/instagram.svg" alt="istagram" className='ml-3 w-1/2 h-1/2'/></a>
            </div>
        </div>
        <p className='text-white-500'>© 2025 Amanuel. All rights reserved.</p>
    </section>
  )
}

export default Footer