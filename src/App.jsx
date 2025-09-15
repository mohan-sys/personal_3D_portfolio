import React from 'react'
import Hero from './sections/Hero'
import NavBar from './components/NavBar'
import ShowcaseSection from './sections/ShowcaseSection'
import LogoSection from './sections/LogoShowcase'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import EducationSection from './sections/EducationSection'
import AboutMe from './sections/AboutMe'
import ProjectTitle from './components/ProjectTitle'
import { Analytics } from "@vercel/analytics/react"


const App = () => {
  return (
    <> 
      <Analytics />
        <NavBar />
        <Hero />
        <AboutMe />

        <ExperienceSection />

        <ProjectTitle />
        <ShowcaseSection />
        
        
        {/* <LogoSection /> */}
        <FeatureCards />
        <EducationSection />
        
        <TechStack />
        <Contact />
        <Footer />
    </>
  )
}

export default App