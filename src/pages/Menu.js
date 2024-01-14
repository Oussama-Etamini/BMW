import React, { useLayoutEffect, useState } from 'react';
import '../styles/Menu.css';
import MenuItem from '../components/MenuItem';

function Menu() {
  const [menu, setMenuList] = useState([]);

  useLayoutEffect(() => {
    fetch('http://localhost:3001/MenuList')
      .then((res) => res.json())
      .then((res) => {
        setMenuList(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className='menu'>
      <h1 className='menuTitle'>The models</h1>
      <div className='menuList'>
        {menu.map((item, key) => {
          return <MenuItem key={key} data={item}/>;
        })}

      </div>
    </div>
  );
}

export default Menu;
