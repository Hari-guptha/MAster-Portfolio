import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import './assets/css/style.css'
import AboutSection from './components/AboutSection'
import LineOfWork from './components/LineOfWork'
import Projects from './components/Projects'
import ArtsSection from './components/Arts'
import Contact from './components/Contact'
import Footer from './components/Footer'

import React, { Suspense, lazy } from 'react';


const App = () => {
  return (
    <Suspense fallback={<div>Loading Models...😁</div>}>
      <NavBar />
      <HeroSection />
      <AboutSection/>
      <LineOfWork/>
      <Projects/>
      <ArtsSection/>
      <Contact/>
      <Footer/>
    </Suspense>
  )
}

export default App
