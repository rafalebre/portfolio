import React from 'react'
import Hero from '@components/Sections/Hero'
import About from '@components/Sections/About'
import Skills from '@components/Sections/Skills'

const App: React.FC = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App