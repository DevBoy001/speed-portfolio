import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutPage from './components/AboutPage'
import ProjectsPage from './components/ProjectPages'
import ContactPage from './components/ContactPage'
import Skills from './components/Skills'

const App = () => {
  return (
     <main>
      <Navigation/>
      <HeroSection/>
      <AboutPage/>
      <ProjectsPage/>
      <Skills/>
      <ContactPage/>
    </main>

  )
}

export default App