import React, { useState } from 'react'

const NavBar = () => {
    const name = "Amanuel"
    const [hamburgerIcon, setHamburgerIcon] = useState("/assets/menu.svg")

    const toggleHamburger = () => {
        setHamburgerIcon(hamburgerIcon === "/assets/menu.svg"? "/assets/close.svg" : "/assets/menu.svg")
    }
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>

                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                    {name}
                </a>
               
                <button onClick={toggleHamburger}>
                    <img src={hamburgerIcon} alt="toggle" className='w-6 h-6'/>
                </button>
                
            </div>

        </div>
    </header>
  )
}

export default NavBar