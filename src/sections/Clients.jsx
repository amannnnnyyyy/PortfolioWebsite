import React, { useState } from 'react'
import { clientReviews } from '../constants'

const Clients = () => {
    const [showInput, setShowInput] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Add logic to handle form data submission here
        console.log('Form data:', formData);
    
        // For example, upload the image and data to a server or API
      };

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
        {!showInput &&<button 
            className="absolute left-1/2 transform -translate-x-1/2 mt-10 bg-[url('/assets/add.png')] bg-no-repeat bg-contain w-32 h-10"
        onClick={()=>(setShowInput(true))}></button>}
         {showInput && (
        <form
          className="mt-5 flex flex-col items-center gap-4 w-full max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Your Name..."
            className="w-full h-12 px-5 py-2 rounded-md border-gray-300 focus:outline-none"
            required
          />
           <input
            type="text"
            placeholder="Your Job Position..."
            className="w-full h-12 px-5 py-2 rounded-md border-gray-300 focus:outline-none"
            required
          />
          <input
            type="file"
            name="image"
            accept="image/*"
            className="w-full px-5 py-2 rounded-md border-gray-300 focus:outline-none"
            onChange={handleFileChange}
            required
          />
          <textarea
            cols={30}
            rows={5}
            placeholder="Write a review..."
            className="w-full px-5 py-2 rounded-md border-gray-300 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-sky-700 text-white px-5 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      )}
    </div>        
    </section>
  )
}

export default Clients