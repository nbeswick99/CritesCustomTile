import React from 'react'

//Component imports
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
//css imports
import '../css/Service.css'

//Image imports 
import backSplashHero from'../assets/images/general/backSplashHero.jpg'
import allImages from '../assets/images/index.js'
const Backsplash = () => {
  const {backsplashImgs} = allImages
  return ( 
    <div className='service-wrapper'>
      <div className='bigheader'>
        <Header />
        <Navbar />
      </div>
      {/* Banner image */}
      <img className='banner' src={backSplashHero} alt="Backsplash" />
      {/* Blurb and Contact form */}
      <div className='service-container'>
        <div className='service-text-container'>
          <h2 className='service-text'>Backsplash</h2>
          <p className='service-text'>
            A backsplash isn't just a practical addition to your kitchen or bathroom—it's a canvas for creativity and style. 
            Whether you prefer sleek subway tiles for a modern touch, rustic stone for a cozy feel, or bold patterns that make a statement, the backsplash ties together the entire space. 
            Beyond its aesthetic appeal, it serves a functional purpose by protecting your walls from splashes and spills, making cleanup a breeze. 
            With endless materials, colors, and designs to choose from, your backsplash becomes a reflection of your taste and personality, adding character and charm to any room.
          </p>
        </div>
        <ContactForm/>
      </div>
      {/* Gallery Images */}
      <h2 className='gallery-text'>Gallery</h2>
      <div className='gallery-container'>
        <div classname='gallery-row'>
          <img className='gallery-item' id="backsplash0" src={backsplashImgs[0]} alt="" />
          <img className='gallery-item' id="backsplash1" src={backsplashImgs[1]} alt="" />
          <img className='gallery-item' id="backsplash2" src={backsplashImgs[2]} alt="" />
          <img className='gallery-item' id="backsplash3" src={backsplashImgs[3]} alt="" />
        </div>
        <div classname='gallery-row'>
          <img className='gallery-item' id="backsplash4" src={backsplashImgs[4]} alt="" />
          <img className='gallery-item' id="backsplash5" src={backsplashImgs[5]} alt="" />
          <img className='gallery-item' id="backsplash6" src={backsplashImgs[6]} alt="" />
          <img className='gallery-item' id="backsplash7" src={backsplashImgs[7]} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Backsplash