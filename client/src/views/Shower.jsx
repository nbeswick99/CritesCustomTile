import React from 'react'
//Component imports
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import ContactForm from '../components/ContactForm'
//css imports
import '../css/Service.css'
//image imports
import allImages from '../assets/images/index.js'

const Shower = () => {
  const {generalImgs, showerImgs} = allImages
  return (
    <div>
      <div className='bigheader'>
        <Header />
        <Navbar />
      </div>
      {/* Banner image */}
      <img className='banner' id='shower-banner' src={generalImgs[2]} alt="Backsplash" />
      {/* Blurb and Contact form */}
      <div className='service-container' id='service-page'>
        <div className='service-text-container'>
          <h2 className='service-text'>Shower</h2>
          <p className='service-text'>
          If you want a little bit of luxury in your bathroom, a tile shower is a great option to choose. With many colors, styles, and textures, there is a tile shower that you are sure to love. 
          Along with being elegant, tiles are durable and moisture resistant maintaining that elegance over time. 
          Tile showers can also be made with custom niches and benches to perfectly fit your needs.
          A tile shower provides a beautiful and long lasting addition to your bathroom. 
          </p>
        </div>
        <ContactForm/>
      </div>
      {/* Gallery Images */}
      <h2 className='gallery-text'>Gallery</h2>
      <div className='gallery-container'>
        <div classname='gallery-row'>
          <img className='gallery-item' id="shower0" src={showerImgs[0]} alt="" />
          <img className='gallery-item' id="shower1" src={showerImgs[1]} alt="" />
          <img className='gallery-item' id="shower2" src={showerImgs[2]} alt="" />
          <img className='gallery-item' id="shower3" src={showerImgs[3]} alt="" />
        </div>
        <div classname='gallery-row'>
          <img className='gallery-item' id="shower4" src={showerImgs[4]} alt="" />
          <img className='gallery-item' id="shower5" src={showerImgs[5]} alt="" />
          <img className='gallery-item' id="shower6" src={showerImgs[6]} alt="" />
          <img className='gallery-item' id="shower7" src={showerImgs[9]} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Shower