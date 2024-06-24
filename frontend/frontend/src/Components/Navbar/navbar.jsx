import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Images/Rectangle 40.png';

export default function navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-sub'>
        <Link to="/">
        <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <h4 className='navbar-h1'>YUOR BROKER</h4>
        </div>
        
      
      <ul className="navbar-links">
        <div className='li-div1'>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/home">About</Link></li>
          <li><Link to="/home">Rental</Link></li>
        </div>
        <div className='li-div'>
          <div className='li-div-sub'>
            <li><Link to="/login">Login</Link></li>
          </div>
          <div className='li-div-sub1'>
            <li ><Link to="/registation">Sinup</Link></li>
          </div> 
        </div>
        
      </ul>
        
    </div>
  )
}
