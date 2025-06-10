import React from 'react'
import Hero from '@components/Sections/Hero'
import About from '@components/Sections/About'
import Skills from '@components/Sections/Skills'
import Experience from '@components/Sections/Experience'
import Portfolio from '@components/Sections/Portfolio'

const App: React.FC = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
    </div>
  )
}

export default App