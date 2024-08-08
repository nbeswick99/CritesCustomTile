import React from 'react'
//Component imports
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import ContactForm from '../components/ContactForm'
//css imports
import '../css/Service.css'
import allImages from '../assets/images/index.js'
const TileFloor = () => {
  const {tileFloorImgs, generalImgs} = allImages
  return (
    <div>
      <div className='bigheader'>
        <Header />
        <Navbar />
      </div>
      {/* Banner image */}
      <img className='banner' id='tile-floor-banner'src={generalImgs[3]} alt="Tile Floor Banner" />
      {/* Blurb and Contact form */}
      <div className='service-container'>
        <div className='service-text-container'>
          <h2 className='service-text'>Tile Floor</h2>
          <p className='service-text'>
          A tile floor is both practical as well as beautiful. 
          Whether it be your kitchen, bathroom or foyer, a tile floor gives you a durable and easy-to-clean surface that stands the wear and tear of daily life. 
          Beyond the functional benefits, tile flooring allows for a wide range in design with many materials, colors and designs to choose from. 
          Whether your looking for a beautiful floor, or a durable solution to busy areas of your home, tile flooring is an excellent option.
          </p>
        </div>
        <ContactForm/>
      </div>
      {/* Gallery Images */}
      <h2 className='gallery-text'>Gallery</h2>
      <div className='gallery-container'>
        <div classname='gallery-row'>
          <img className='gallery-item' id="tileFloor0" src={tileFloorImgs[0]} alt="" />
          <img className='gallery-item' id="tileFloor1" src={tileFloorImgs[1]} alt="" />
          <img className='gallery-item' id="tileFloor2" src={tileFloorImgs[2]} alt="" />
          <img className='gallery-item' id="tileFloor3" src={tileFloorImgs[3]} alt="" />
        </div>
        <div classname='gallery-row'>
          <img className='gallery-item' id="tileFloor4" src={tileFloorImgs[4]} alt="" />
          <img className='gallery-item' id="tileFloor5" src={tileFloorImgs[5]} alt="" />
          <img className='gallery-item' id="tileFloor6" src={tileFloorImgs[6]} alt="" />
          <img className='gallery-item' id="tileFloor7" src={tileFloorImgs[7]} alt="" />
        </div>
      </div>
    </div>
  )
}

export default TileFloor