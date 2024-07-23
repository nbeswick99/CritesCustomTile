import React from 'react'
//Component imports
import ContactForm from '../components/ContactForm'
//css imports
import '../css/Service.css'
const TileFloor = () => {
  return (
    <div>
      {/* Banner image */}
      <img className='banner' id='tile-floor-banner'src="https://scontent.fosu2-2.fna.fbcdn.net/v/t39.30808-6/348457766_255967780341897_7711453716991005940_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XSktaJ9iAvIQ7kNvgEXCv61&_nc_ht=scontent.fosu2-2.fna&oh=00_AYCzSvtwIRlgPrAcWEIQpc-8Bn5Tuao77uwPrfzxzid3og&oe=669A5285" alt="Tile Floor Banner" />
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
      <div className='image-gallery-container'>
        <img className='gallery-item' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/288761646_174665798253800_6400174334444935491_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=ZFnA8rnrfOUQ7kNvgHJN7xD&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBtRW5-z9kcTtuuJD2zyWCVfBiluGXcTUs7I5CNhe17_A&oe=669A2F01" alt="" />
        <img className='gallery-item' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/275125846_152919833761730_7744277862122368930_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=5Y_Z82z8txsQ7kNvgF9OrlF&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBaV6YwaEVCo19Jb5-LQuBVZnfw6LMHrPuc61T0O7aEdw&oe=669A3876" alt="" />
        <img className='gallery-item' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/273149164_146700544383659_1020882095174248639_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=WkSByTKJ9goQ7kNvgHTV2Si&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBrQmSp75mpZwjBJmtNQ7mdJi1T-DL5Tl5hDokF8Il2ZQ&oe=669A5A19" alt="" />
      </div>
    </div>
  )
}

export default TileFloor