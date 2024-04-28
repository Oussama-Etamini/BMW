import React from 'react';
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Back from "../assets/back1.png";
import Login from '../components/Login';
import Register from '../components/Register';
import { useContext } from "react";
import { varF } from '../App';

function Home() {
  const { click , click1 } = useContext(varF);
  const backgroundStyle = {
    background: `url(${Back})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
  };
  console.log(click);
  console.log(click1);
  return (
    <div className="home" style={backgroundStyle}>
      <div className="headerContainer">
        <h1> BMW i5 </h1><br/>
        <p>with dynamism and a helping hand</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>     
      <div id={click ? '' : 'login'}><Login /></div>
      <div id={click1 ? '' : 'register'}><Register /></div>
    </div>
  );
}

export default Home;