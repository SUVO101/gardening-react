import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import PlantGallery from './pages/PlantGallery'
import PlantChecking from './pages/PlantChecking'

function App() {


  return (
    <>
       <div className='container'>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/plantgallery" element={<PlantGallery/>}></Route>
                <Route path="/plantchecker" element={<PlantChecking/>}></Route>
            </Routes>
          <Footer/>
       </div>
    </>
  )
}

export default App
