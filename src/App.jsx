import React from 'react'
import NavBar from './sections/NavBar'
import Contents from './components/Contents'
import Hero from './sections/Hero'
import About from './sections/About'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <NavBar/>
      <Hero/>
      <About/>
    </main>
  )
}

export default App