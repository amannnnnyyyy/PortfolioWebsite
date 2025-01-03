import React, { useRef, useState } from 'react'

const Contact = () => {
    const formRef = useRef();
    const [form,setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [loading,setLoading] = useState(false)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        setForm({
            name: '',
            email: '',
            message: ''
        })
    }
  return (
    <section className='c-space my-20' id='contact'>
       <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 h-[900px] sm:h-[900px] md:h-[900px] lg:h-[900px]'/> 
            <div className='contact-container'>
                <h3 className='head-text mt-20'>Let's talk</h3>
                <p className='text-lg text-white-600 mt-3'>
                    I'm here to help you with your web development needs. 
                    Feel free to reach out:
                    <a href='mailto:amanuelmoha.official@gmail.com' className='text-white-800'>
                    &nbsp;amanuelmoha.official@gmail.com</a> or by phone at 
                        <a href='tel:+251-91-920-2342' className='text-white-800'>
                        &nbsp;+251-91-920-2342</a>. 
                            I'm always here to answer your questions and provide guidance 
                            on your project.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}
                className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>Full Name</span>
                    
                    <input type="text" name='name' value={form.name} onChange={handleChange}
                    className='field-input' required placeholder='John Doe'/>
                    </label>
                    <label htmlFor="" className='space-y-3'>
                        <span className='field-label'>E-mail</span>
                    
                    <input type="email" name='email' value={form.email} onChange={handleChange}
                    className='field-input' required placeholder='johndoe2012@gmail.com'/>
                    </label>
                    <label htmlFor="" className='space-y-3'>
                        <span className='field-label'>Your message</span>
                    
                    <textarea name='message' value={form.message} onChange={handleChange}
                    className='field-input' required rows={5} placeholder="Hi, I've got a job for you..."/>
                    </label>
                    <button className='field-btn' type='submit' disabled={loading}>
                        {loading? 'Sending...':'Send Message'}
                    </button>
                </form>
            </div>
            
        </div>
    </section>
  )
}

export default Contact