import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const Contents = ({visibility, onLinkClick}) => {
  
  const li_styles = "py-1 hover:text-sky-700  cursor-pointer"

  return (
      <div className='flex justify-end z-30 mr-4 sm:hidden'>
        {visibility && (
        <div className='bg-transparent text-white-800 border border-gray-300 p-2 z-30'>
            <ul className='list-none m-0 p-0'>
                {navLinks.map(({id, name, href}) => <li key={id} className={li_styles}><a href={href} onClick={onLinkClick}>{name}</a></li>)}
            </ul>
        </div>
        )}
  </div>
  )
}

export const NavItems = () =>{
  return (
          <ul className='nav-ul'>
              {navLinks.map(
                  ({id, name, href}) => 
                 ( <li key={id} className='nav-li'>
                      <a href={href} className='nav-li_a py-1 hover:text-sky-700  cursor-pointer'
                          onClick={()=>{}}>
                          {name}
                      </a>
                  </li>))}
          </ul>
  )
}

export default Contents