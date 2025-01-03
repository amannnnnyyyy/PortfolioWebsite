import React, { useRef, useState } from 'react'

const Contact = () => {
    const formRef = useRef();
    const [form,setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
  return (
    <section className='c-space my-20' id='contact'>
       <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen'/> 
            <div className='contact-container'>
                <h3 className='head-text'>Let's talk</h3>
                <p className='text-lg text-white-600 mt-3'>
                    I'm here to help you with your web development needs. 
                    Feel free to reach out to me at 
                    <a href='mailto:amanuelmoha.official@gmail.com' className='text-white-800'>
                        amanuelmoha.official@gmail.com</a> or by phone at 
                        <a href='tel:+251-91-920-2342' className='text-white-800'>
                            +251-91-920-2342</a>. 
                            I'm always here to answer your questions and provide guidance 
                            on your project.
                </p>
                <form action=""></form>
            </div>
            <h3 className='head-text'>
                Contact Me
            </h3>
        </div>
    </section>
  )
}

export default Contact