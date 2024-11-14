import React from 'react'
import '../css/Header.css'
import {useNavigate} from 'react-router-dom'

const Header = () => {

  const Navigate = useNavigate();

  return (
    <div className='header-container'>
      <h1 className='title'>Crites Custom Tile</h1>
      <div className='contact-container'>
        <div className='phone-number'>
          <h3>Phone Number</h3>
          <p>1 (812) 521-0891 </p>
        </div>
        {/* <button className='contact' onClick={() => Navigate("/Contact")}>Contact</button> */}
      </div>
    </div>
  )
}

export default Header