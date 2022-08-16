import React from 'react';
import { FaFilter } from 'react-icons/fa';
import './Header.css';

const Header = ({chartsInfo, handleDropdownChange}) => {
  return (
    <div className='Header'>
      <div className='HeaderTitle'>
        <h1>Dashboard</h1>
        <h2>Desafio Técnico Frontend</h2>
      </div>
      <div className='dropdown'>
        <div className='HeaderButton'>
          <FaFilter size={"1rem"} />
          <p>Filtrar</p>
        </div>
        <div className='dropdown-content'>
          {chartsInfo.map((info, i) => <DropDownItem key={i} title={info.options.title.text} show={info.show} handleDropdownChange={handleDropdownChange}/>)}
        </div>
      </div>
    </div>
  )
};

const DropDownItem = ({title, show, handleDropdownChange}) => {
  return (
  <label className="container">
    <input type="checkbox" defaultChecked={show} onChange={() => handleDropdownChange(title)}/>
    <span className="checkmark"></span>
    {title}
  </label>
  )
}
export default Header;