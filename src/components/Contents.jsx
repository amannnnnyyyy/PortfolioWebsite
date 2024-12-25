import React from 'react'

const Contents = ({visibility}) => {
  const li_styles = "py-1 hover:text-sky-700  cursor-pointer"
  const attributes = ["Home","About","Services","Contact","Blog","Portfolio","FAQ","Testimonials"]

  return (
      <div className='flex justify-end z-30 mr-4'>
        {visibility && (
        <div className='bg-transparent text-white-800 border border-gray-300 p-2 z-30'>
            <ul className='list-none m-0 p-0'>
                {attributes.map(attribute => <li key={attribute} className={li_styles}>{attribute}</li>)}
            </ul>
        </div>
        )}
  </div>
  )
}

export default Contents