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
    <div>
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
      <ol>
        {backsplashImgs.map( (eachImg, IDX) => {
          return (
          <li>
            <img className="gallery-item" id={`backsplash${IDX}`} src={eachImg} alt="" />
          </li>
          )})};
      </ol>
    </div>
  )
}

export default Backsplash