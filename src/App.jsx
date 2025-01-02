import React from 'react'
import NavBar from './sections/NavBar'
import Contents from './components/Contents'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Clients/>
    </main>
  )
}

export default App