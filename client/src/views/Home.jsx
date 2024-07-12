import React from 'react';

//Component import
import ContactForm from '../components/ContactForm';
//css import 
import '../css/Home.css'
const Home = () => {
  return (
    <div>
      {/* Div with hero image and contact form */}
      <div className='hero-container'>
        <div className='hero-text-container'>
          <h2 className='hero-text'>Crites Custom Tile</h2>
          <p className='hero-text'>Serving Jackson County, IN - Bartholomew County, IN - Scottsburg, IN - Austin, IN</p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Home