import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/logo10.webp";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  
  const navItems = [
    { text: 'Home', url: '/', isClicked : false},
    { text: 'Menu', url: '/menu',isClicked : false },
    { text: 'About', url: '/about',isClicked : false },
    { text: 'Contact', url: '/contact',isClicked : false },
  ];
  const setActiveItem = (item) => {
    navItems.forEach((navItem) => {
      navItem.isClicked = false;
      if (navItem.text === item.text) {
        navItem.isClicked = true;
    }
  })}
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/"><img src={Logo} /></Link>
        <div className="hiddenLinks" id={openLinks ? "open" : "close"}>
        <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>  
        </div>
      </div>
      <div className="rightSide">
        {navItems.map((item) => {
          return (
            <Link to={item.url} className="navItem" onClick={() => setActiveItem(item)}>
              {item.text}
            </Link>

          )
        })
        }
        <button onClick={toggleNavbar}><i className="fa-sharp fa-solid fa-bars btt"></i></button>
      </div>
      <button id='btt'>Sign up<div class="arrow-wrapper"><div class="arrow"></div>
    </div></button>
    </div>
  );
}

export default Navbar

// import React from 'react'

// function Navbar() {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Navbar</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Link</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="#">Action</a>
//           <a class="dropdown-item" href="#">Another action</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
     
//     </ul>
    
//   </div>
// </nav>
//     </div>

//   )
// }

// export default Navbar