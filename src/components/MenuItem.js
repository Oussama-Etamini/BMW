import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuItem.css';


function MenuItem({ data }) {

  return (
    
    <Link className='link' to={`/Menu/${data.id}`}>
      <div className='menuItem' >
        <div style={{ backgroundImage: `url(${data.image})` }}></div>
        <h1 className="menuTitle">{data.name}</h1>
        <p className="menuList">{data.price} $</p>
      </div>
    </Link>
  );
}

export default MenuItem; 
