import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '@components/Layout/Navbar'
import Hero from '@components/Sections/Hero'
import About from '@components/Sections/About'
import Skills from '@components/Sections/Skills'
import Experience from '@components/Sections/Experience'
import Portfolio from '@components/Sections/Portfolio'
import Contact from '@components/Sections/Contact'
import Insights from '@components/Sections/Insights'

// Individual Page Components
const HomePage: React.FC = () => {
  return (
    <div className="page">
      <Hero />
    </div>
  )
}

const AboutPage: React.FC = () => {
  return (
    <div className="page">
      <About />
    </div>
  )
}

const SkillsPage: React.FC = () => {
  return (
    <div className="page">
      <Skills />
    </div>
  )
}

const ExperiencePage: React.FC = () => {
  return (
    <div className="page">
      <Experience />
    </div>
  )
}

const PortfolioPage: React.FC = () => {
  return (
    <div className="page">
      <Portfolio />
    </div>
  )
}

const ContactPage: React.FC = () => {
  return (
    <div className="page">
      <Contact />
    </div>
  )
}

const BlogPage: React.FC = () => {
  return (
    <div className="page">
      <Insights />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App