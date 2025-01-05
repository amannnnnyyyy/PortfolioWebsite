import React, { useState } from 'react'
import { clientReviews } from '../constants'

const Clients = () => {
    const [showInput, setShowInput] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        review: '',
        position: '',
        image: null,
      });
      const [preview, setPreview] = useState(null);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setFormData({ ...formData, image: file });
          setPreview(URL.createObjectURL(file)); 
        }
      };
    
      const handleSubmit = (e) => {
        let {name,image,review} = formData;
        e.preventDefault();
        clientReviews.push(
            {
                id: clientReviews.length+1,
                name,
                review,
                img: 'assets/review4.png',
                position: 'Client',
            }
        )
    
        setFormData({
          name: '',
          review: '',
          position: '',
          image: null,
        });
        setPreview(null);
        setShowInput(false);
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
            name="name"
            placeholder="Your Name..."
            className="w-full h-12 px-5 py-2 rounded-md border-gray-300 focus:outline-none"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
           <input
           type="text"
           name="position"
           placeholder="Your Job Position..."
           className="w-full h-12 px-5 py-2 rounded-md border-gray-300 focus:outline-none"
           value={formData.position}
           onChange={handleInputChange}
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
            name="review"
            cols={30}
            rows={5}
            placeholder="Write a review..."
            className="w-full px-5 py-2 rounded-md border-gray-300 focus:outline-none"
            value={formData.review}
            onChange={handleInputChange}
            required
          ></textarea>
          {preview && (
            <div className="w-20 h-20 mt-2">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover rounded-md border border-gray-300"
              />
            </div>)}
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