import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from '@components/Sections/Hero'
import About from '@components/Sections/About'
import Skills from '@components/Sections/Skills'
import Experience from '@components/Sections/Experience'
import Portfolio from '@components/Sections/Portfolio'
import Insights from '@components/Sections/Insights'

// Home page with all sections
const HomePage: React.FC = () => {
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

// Blog page with insights
const BlogPage: React.FC = () => {
  return (
    <div className="app">
      <Insights />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  )
}

export default App