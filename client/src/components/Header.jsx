import React from 'react'
import '../css/Header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <h1 className='title'>Crites Custom Tile</h1>
      <div className='contact-container'>
        <div className='phone-number'>
          <h3>Phone Number</h3>
          <p>1 (812) 521-0891 </p>
        </div>
        <button className='contact'>Contact</button>
      </div>
    </div>
  )
}

export default Header