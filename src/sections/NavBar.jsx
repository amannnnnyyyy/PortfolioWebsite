import React, { useState } from 'react'
import Contents from '../components/Contents'

const navItems = () =>{
    return (
        <div>
            <ul className='nav-ul'>
                {["Home","About","Services","Contact","Blog","Portfolio","FAQ","Testimonials"].map(
                    (item, index) => (
                        <li key={index} className='nav-li'>
                            <a href={`#${item}`} className='nav-li_a'>{item}</a>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false)
    const name = "Amanuel"
    const [hamburgerIcon, setHamburgerIcon] = useState("/assets/menu.svg")
    const [nightModePic, setNightModePic] = useState("/assets/night.png")


    const toggleHamburger = () => {
        setHamburgerIcon(hamburgerIcon === "/assets/menu.svg"? "/assets/close.svg" : "/assets/menu.svg")
        setIsVisible((isVisible)=>!isVisible)
    }

    const toggleNightMode = () => {
        setNightModePic(nightModePic === "/assets/night.png"? "/assets/day.png" : "/assets/night.png")
        document.body.classList.toggle('dark-mode')
    }

  return (
    <header className='fixed top-0 left-0 right-0 bg-black/90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>

                <a href="/" className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                    {name}
                </a>
               
                <button className='flex gap-5 items-center'>
                    <img className='opacity-90 hover:opacity-100' src={nightModePic} width={90} height={1} alt="day mode" onClick={toggleNightMode}/>
                    <img src={hamburgerIcon} alt="toggle" className='w-6 h-6 opacity-90 hover:opacity-100  sm:hidden' aria-label='toggle menu' onClick={toggleHamburger}/>
                </button>

                <nav className='sm:flex hidden'>

                </nav>
            
                
            </div>
            <Contents visibility = {isVisible}/>
        </div>

    </header>
  )
}

export default NavBar