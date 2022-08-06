import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skillsection from './components/Skillsection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Experience from './components/Experience'
function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Experience/>
        <Skillsection/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home