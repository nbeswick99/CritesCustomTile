import React from "react";
import {Link} from 'react-router-dom';

//css Import
import '../css/Navbar.css' 

const Navbar = () => {
  
  return (
    <div className="navbar">
      <Link to={"/"}>Home</Link>
      <div className="dropdown ">
      <button className="dropbtn">Services</button>
        <div className="dropdown-content">
          <Link to={"/Backsplash"}>Backsplash</Link>
          <Link to={"/Shower"}>Shower</Link>
          <Link to={"/TileFloor"}>Tile Floor</Link>
          <Link to={"/HardwoodFloor"}>Hardwood Floor</Link>
          <Link to={"/VinylPlank"}>Vinyl Plank Floor</Link>
        </div>
      </div>
      <Link to={"/Contact"}>Contact</Link>
    </div>
  )
};

export default Navbar;