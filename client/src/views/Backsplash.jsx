import React from 'react'

//Component imports
import ContactForm from '../components/ContactForm'
//css imports
import '../css/Service.css'
const Backsplash = () => {
  return (
    <div>
      {/* Banner image */}
      <img className='banner' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/348432172_622973799746102_718479849634858375_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=gB59-PLqg2oQ7kNvgFezqwC&_nc_ht=scontent.fosu2-1.fna&oh=00_AYCUJR9m3pNz_9taqItzJr1AjiexBUKJ_YhIQsH8AS8RZQ&oe=669A530E" alt="Backsplash" />
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
      <div className='image-gallery-container'>
        <img className='gallery-item' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/288761646_174665798253800_6400174334444935491_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=ZFnA8rnrfOUQ7kNvgHJN7xD&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBtRW5-z9kcTtuuJD2zyWCVfBiluGXcTUs7I5CNhe17_A&oe=669A2F01" alt="" />
        <img className='gallery-item' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/275125846_152919833761730_7744277862122368930_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=5Y_Z82z8txsQ7kNvgF9OrlF&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBaV6YwaEVCo19Jb5-LQuBVZnfw6LMHrPuc61T0O7aEdw&oe=669A3876" alt="" />
        <img className='gallery-item' src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/273149164_146700544383659_1020882095174248639_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=WkSByTKJ9goQ7kNvgHTV2Si&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBrQmSp75mpZwjBJmtNQ7mdJi1T-DL5Tl5hDokF8Il2ZQ&oe=669A5A19" alt="" />
      </div>
    </div>
  )
}

export default Backsplash