import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Intro from './components/Intro'
import Education from './components/Education'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Intro />} />
          <Route path='/education' element={<Education />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  )
}

export default App
