import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();
    const [form,setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [loading,setLoading] = useState(false)

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)

        try{
        await emailjs.send('service_nxibmbn','template_m8pajts',{
            from_name: form.name,
            to_name: 'Amanuel Moha',
            from_email: form.email,
            to_email: 'amanuelmoha.official@gmail.com',
            message: form.message
        },'O0_ZffSiSuHudavRI')
        setForm({
            name: '',
            email: '',
            message: ''
        })

        setLoading(false);
        alert('Your message has been sent successfully. I will get back to you shortly.')
    }catch(e){
        setLoading(false);
        console.error(e)
        alert('Failed to send your message. Please try again later.')
    }
        
    }
  return (
    <section className='c-space my-20' id='contact'>
       <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 h-[980px] sm:h-[900px] md:h-[900px] lg:h-[900px]'/> 
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
                    <button className='field-btn hover:bg-green-500 hover:text-black' type='submit' disabled={loading}>
                        {loading? 'Sending...':'Send Message'}

                        <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow'/>
                    </button>
                    
                </form>
            </div>
            
        </div>
    </section>
  )
}

export default Contact