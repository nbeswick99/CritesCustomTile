import React from 'react';
import { useNavigate } from 'react-router-dom';

//image imports
import allImages from '../assets/images/index.js'

//Component import
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';
//css import 
import '../css/Home.css'
import'../css/Service.css'
const Home = () => {
  const {generalImgs} = allImages
  const Navigate = useNavigate();
  return (
    <div>
      <div className='bigheader'>
          <Header />
          <Navbar />
        </div>
      {/* Div with hero image and contact form */}
      <div className='hero-container'>
        <div className='hero-text-container'>
          <h2 className='hero-text'>Crites Custom Tile</h2>
          <p className='hero-text'>Serving Jackson County, IN - Bartholomew County, IN - Scottsburg, IN - Austin, IN</p>
        </div>
        <ContactForm />
      </div>

      {/* Backsplash */}
      <div className='service-container'>
        <img className='service-img'src={generalImgs[1]} alt="Backsplash" />
        <div className='service-text-container'>
          <div className='service-header'>
            <h3 className='service-text'>Backsplash</h3>
            <button className='learn-more' onClick={() => Navigate("/Backsplash")}>Learn More</button>
          </div>
          <p className='service-text'>
            A backsplash isn't just a practical addition to your kitchen or bathroom—it's a canvas for creativity and style. 
            Whether you prefer sleek subway tiles for a modern touch, rustic stone for a cozy feel, or bold patterns that make a statement, the backsplash ties together the entire space. 
            Beyond its aesthetic appeal, it serves a functional purpose by protecting your walls from splashes and spills, making cleanup a breeze. 
            With endless materials, colors, and designs to choose from, your backsplash becomes a reflection of your taste and personality, adding character and charm to any room.
          </p>
        </div>
      </div>

      {/* Shower */}
      <div className='service-container'>
        <div className='service-text-container'>
          <div className='service-header'>
            <h3 className='service-text'>Shower</h3>
            <button className='learn-more' onClick={() => Navigate("/Shower")}>Learn More</button>
          </div>
          <p className='service-text'>
          If you want a little bit of luxury in your bathroom, a tile shower is a great option to choose. With many colors, styles, and textures, there is a tile shower that you are sure to love. 
          Along with being elegant, tiles are durable and moisture resistant maintaining that elegance over time. 
          A tile shower provides a beautiful and long lasting addition to your bathroom.
          </p>
        </div>
        <img className='service-img'src={generalImgs[2]} alt="Backsplash" />
      </div>

      {/* Tile Floor */}
      <div className='service-container'>
        <img className='service-img'src={generalImgs[3]} alt="Backsplash" />
        <div className='service-text-container'>
          <div className='service-header'>
            <h3 className='service-text'>Tile Floor</h3>
            <button className='learn-more' onClick={() => Navigate("/TileFloor")}>Learn More</button>
          </div>
          <p className='service-text'>
            A tile floor is both practical as well as beautiful. 
            Whether it be your kitchen, bathroom or foyer, a tile floor gives you a durable and easy-to-clean surface that stands the wear and tear of daily life. 
            Beyond the functional benefits, tile flooring allows for a wide range in design with many materials, colors and designs to choose from. 
            Whether your looking for a beautiful floor, or a durable solution to busy areas of your home, tile flooring is an excellent option. 
          </p>
        </div>
      </div>

      {/* VinylPlank */}
      {/* <div className='service-container'>
        <div className='service-text-container'>
          <div className='service-header'>
            <h3 className='service-text'>Vinyl Plank Floor</h3>
            <button className='learn-more' onClick={() => Navigate("/VinylPlankFloor")}>Learn More</button>
          </div>
          <p className='service-text'>
            Vinyl plank flooring is an affordable and stylish option for any home or commercial space. 
            Designed to mimic the look and feel of real hardwood with remarkable realism, vinyl planks come in a variety of colors and textures to suit any interior design scheme. 
            Vinyl plank is built to be water resistant making it great for bathrooms and kitchens. 
            It also contains noise reduction technologies to reduce the sound when walked across. 
            vinyl plank flooring provides a versatile and cost-effective solution that elevates the aesthetic and practicality of any room.
          </p>
        </div>
        <img className='service-img'src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/283068566_169667528753627_5469039556488893619_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=4T3MetkzxDEQ7kNvgHt0vrV&_nc_ht=scontent.fosu2-1.fna&oh=00_AYD-aWGGO1Iwd2mngJjcC9s-fZ9KG2f2N8oLkvYJRbktGQ&oe=669A56A2" alt="Backsplash" />
      </div>

      Hardwood flooring
      <div className='service-container'>
        <img className='service-img'src="https://scontent.fosu2-1.fna.fbcdn.net/v/t39.30808-6/310621091_196553146078028_3544292977359623872_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ShRVFMPKln0Q7kNvgG9JWLO&_nc_ht=scontent.fosu2-1.fna&oh=00_AYBab8bwm0UaaZs04efLyJtHuEwlCcUGiw9vXljRn2Sl4Q&oe=669A35D5" alt="Backsplash" />
        <div className='service-text-container'>
          <div className='service-header'>
            <h3 className='service-text'>Hardwood Floor</h3>
            <button className='learn-more' onClick={() => Navigate("/HardwoodFloor")}>Learn More</button>
          </div>
          <p className='service-text'>
            Hardwood flooring is a timeless piece of quality home design. 
            Crafted from natural wood, each plank tells a story through its unique grain patterns and rich hues, adding warmth and sophistication to any space. 
            They provide a solid, stable foundation that ages gracefully, gaining character and charm over time. 
            Whether you prefer the rustic allure of wide planks or the refined look of glossy finishes, hardwood floors elevate the ambiance of a room while increasing the value of your home.
          </p>
        </div>
      </div> */}
      <Footer />
    </div>
  )
}

export default Home