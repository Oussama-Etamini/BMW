import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo10.webp';
import '../styles/Navbar.css';
import { varF } from '../App';

function Navbar(){
  const {setClick , setClick1} = useContext(varF);
  const [openLinks, setOpenLinks] = useState(false);
  const location = useLocation();
  const [navItems, setNavItems] = useState([
    { text: 'Home', url: '/', isClicked: false },
    { text: 'Menu', url: '/menu', isClicked: false },
    { text: 'About', url: '/about', isClicked: false },
    { text: 'Contact', url: '/contact', isClicked: false },
  ]);
  const setActiveItem = () => {
    navItems.map((navItem) => {
      navItem.isClicked = false
    });
  }
  useEffect(() => {
    //todo : drt useEffect 7it khdmt b useLocation li kat3ref achmen url nta fih bash t3tih isClicked = true 
    const updatedNavItems = navItems.map((navItem) => (
      {...navItem,isClicked: navItem.url === location.pathname}
      ));
      setNavItems(updatedNavItems);
    },[location.pathname]);
    const toggleNavbar = () => {
    setOpenLinks((prevOpenLinks) => !prevOpenLinks);
  };
    const handelClick = () => {
    // ! window.location.reload(click);
    setClick1(false);
    setClick(true);
  };
  const handelLogo = () => {
    window.location.reload();
  }
  
  return (
    <div className="navbar">
      <div className="leftSide"onClick={handelLogo}>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="hiddenLinks" id={openLinks ? 'open' : 'close'}>
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        {navItems.map((item) => (
          <Link
            key={item.url}
            to={item.url}
            className={`navItem ${item.isClicked ? 'active' : ''}`}
            onClick={() => setActiveItem()}
          >
            {item.text}
          </Link>
        ))}
        <button onClick={toggleNavbar}>
          <i className="fa-sharp fa-solid fa-bars btt"></i>
        </button>
      </div>
      <Link to="/"><button id='btt' onClick={()=>handelClick()}>Sign up<div className="arrow-wrapper"><div className="arrow"></div></div></button></Link>     
    </div>
  );
}
export default Navbar;