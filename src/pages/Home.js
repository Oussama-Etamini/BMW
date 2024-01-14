import React from 'react';
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Back from "../assets/back1.png";
import Login from '../components/Login';
import Register from '../components/Register';

function Home({login}) {
  const backgroundStyle = {
    background: `url(${Back})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover", 
  };
console.log(login);
  return (
    <div className="home" style={backgroundStyle}>
      <div className="headerContainer">
        <h1> BMW i5 </h1><br/>
        <p>with dynamism and a helping hand</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
      <div className='login'><Login /></div>
      <div className='register d-none'><Register /></div>
    </div>
  );
}

export default Home;
