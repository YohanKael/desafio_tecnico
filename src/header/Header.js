import React from 'react';
import { FaFilter } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
        <div className='HeaderTitle'>
          <h1>Dashboard</h1>
          <h2>Desafio Técnico Frontend</h2>
        </div>
        <div className='HeaderButton'>
          <FaFilter size={"1rem"}/>
          <p>Filtrar</p>
        </div>
      </div>
  )
};

export default Header;