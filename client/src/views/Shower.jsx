import React from 'react'
//Component imports
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import ContactForm from '../components/ContactForm'
//css imports
import '../css/Service.css'

const Shower = () => {
  return (
    <div>
      <div className='bigheader'>
        <Header />
        <Navbar />
      </div>
      {/* Banner image */}
      <img className='banner' id='shower-banner' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/348430705_310901787940079_3405793847406322326_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=smoh_dt53QEQ7kNvgGG7duz&_nc_ht=scontent.fosu2-1.fna&oh=00_AYABUEUku5-aQ1grX1AEDuZYlijVe6j09Z6nr7-i7EFtEg&oe=669A5831" alt="Backsplash" />
      {/* Blurb and Contact form */}
      <div className='service-container'>
        <div className='service-text-container'>
          <h2 className='service-text'>Shower</h2>
          <p className='service-text'>
          If you want a little bit of luxury in your bathroom, a tile shower is a great option to choose. With many colors, styles, and textures, there is a tile shower that you are sure to love. 
          Along with being elegant, tiles are durable and moisture resistant maintaining that elegance over time. 
          A tile shower provides a beautiful and long lasting addition to your bathroom.
          </p>
        </div>
        <ContactForm/>
      </div>
      {/* Gallery Images */}
      <div className='image-gallery-container'>
        <img className='gallery-item' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/288761646_174665798253800_6400174334444935491_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=ZFnA8rnrfOUQ7kNvgHJN7xD&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBtRW5-z9kcTtuuJD2zyWCVfBiluGXcTUs7I5CNhe17_A&oe=669A2F01" alt="" />
        <img className='gallery-item' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/275125846_152919833761730_7744277862122368930_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=5Y_Z82z8txsQ7kNvgF9OrlF&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBaV6YwaEVCo19Jb5-LQuBVZnfw6LMHrPuc61T0O7aEdw&oe=669A3876" alt="" />
        <img className='gallery-item' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/273149164_146700544383659_1020882095174248639_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=WkSByTKJ9goQ7kNvgHTV2Si&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBrQmSp75mpZwjBJmtNQ7mdJi1T-DL5Tl5hDokF8Il2ZQ&oe=669A5A19" alt="" />
      </div>
    </div>
  )
}

export default Shower