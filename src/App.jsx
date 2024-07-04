import React from 'react'
import Header from './Pages/Header/Header'
import Intro from './Pages/Body/Intro/Intro'
import MajorProjects from './Pages/Body/Projects/MajorProjects.jsx'
import Skills from './Pages/Body/Skills/Skills'
import Contact from './Pages/Body/Contact/Contact'
import ContactForm from './Pages/Body/Contact/ContactForm'
import Footer from './Pages/Footer/Footer'

 const App = () => {
  return (
    <>
    <Header />
    <Intro />
    <MajorProjects />
    <Skills />
    <Contact />
    <ContactForm />
    <Footer />

    </>
  )
}

export default App ;
