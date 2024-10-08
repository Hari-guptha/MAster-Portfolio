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
    <Suspense fallback={<div style={{textAlign:"center",marginTop:"10%"}}><h4 style={{color:"white",textAlign:"center",fontSize:"14px",fontWeight:"300"}}>Hey there! Just a moment—loading the model to deliver an awesome experience. Thanks for your patience!</h4></div>}>
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
