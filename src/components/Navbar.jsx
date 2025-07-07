import React, { useState } from "react";
import "./Navbar.css"; 
import {NavLink} from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons/faBarsStaggered";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);


  return (
    <>
      <nav className="navbar-custom d-lg-flex justify-content-between align-items-center px-5 py-4  d-none">
        <div className="menu-icon mx-5 px-4 mm " onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBarsStaggered} style={{fontSize:"35px"}}/>
        </div>

        <div className="navbar-logo">
         <NavLink to={"/"}><img src="/imagesff/logo-01.webp" alt="Logo" className="headerimg "/></NavLink> 
        </div>
        
        <div className="mx-5 px-4 d-lg-block d-none">
          <NavLink className="text-white px-5" to={"/about"} style={{fontSize:"21px",fontWeight:"bold",textDecoration:"none"}}>ABOUT</NavLink>
          <NavLink to={"/franchise"} style={{textDecoration:"none"}} > <button className="btn btn-light rounded-pill fw-bold px-4 py-3" style={{fontSize:"20px"}}>Franchise With Us</button></NavLink>
        </div>
       
      </nav>
      <nav className="navbar-custom d-flex justify-content-between align-items-center px-5 py-3 d-lg-none">
        
        <div className="navbar-logo ">
         <NavLink to={"/"}><img src="/imagesff/logo-01.webp" alt="Logo" className="headerimg "/></NavLink> 
        </div>
        <div className="menu-icon " onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBarsStaggered} style={{fontSize:"28px"}}/>
        </div>
       
      </nav>

      <div className={`side-menu sidebar ${showMenu ? "active" : ""}`}>
        <div className="close-btn" onClick={toggleMenu}>
          &times;
        </div>
        <NavLink to={"/"}><img src="/imagesff/logo-01.webp" alt="Logo" className="sidebarimg"/></NavLink> 
        <ul className="text-center">
         <NavLink to={"/"} className={({ isActive }) => `${isActive ? "borderbottom": "noborder"}  text-white` } style={{textDecoration:"none"}} onClick={toggleMenu}><li>Home</li></NavLink> 
         <NavLink to={"/about"} className={({ isActive }) => `${isActive ? "borderbottom": "noborder"}  text-white` } style={{textDecoration:"none"}} onClick={toggleMenu}><li>About</li></NavLink> 
         <NavLink to={"/brands"} className={({ isActive }) => `${isActive ? "borderbottom": "noborder"}  text-white` } style={{textDecoration:"none"}} onClick={toggleMenu}><li>Brands</li></NavLink> 
         <NavLink to={"/contact"} className={({ isActive }) => `${isActive ? "borderbottom": "noborder"}  text-white` } style={{textDecoration:"none"}} onClick={toggleMenu}><li>Contact</li></NavLink> 
         <NavLink to={"/press"} className={({ isActive }) => `${isActive ? "borderbottom": "noborder"}  text-white` } style={{textDecoration:"none"}} onClick={toggleMenu}><li>Press Release</li></NavLink> 
         <NavLink to={"/franchise"} className={({ isActive }) => `${isActive ? "borderbottom": "noborder"}  text-white` } style={{textDecoration:"none"}} onClick={toggleMenu}><li>Franchise With Us</li></NavLink> 
        </ul>
      </div>
    </>
  );
};

export default Navbar;

