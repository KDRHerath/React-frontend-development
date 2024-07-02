import React, { Fragment} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../Images/Rectangle 40.png';


export default function Navbar() {





  const new_user = (
    <Fragment>
      <div className='li-div-sub'>
        <li><Link to="/login">Login</Link></li>
      </div>
      <div className='li-div-sub1'>
        <li ><Link to="/registation">Sinup</Link></li>
      </div>
      
  </Fragment>
  );

  /*const user = (
    <Fragment>
      <div className='li-div-sub'>
          <li><Link to="/login">Profile</Link></li>
        </div>
        <div className='li-div-sub1'>
          <li ><Link to="/registation">Log-out</Link></li>
        </div> 
      <div/>
  </Fragment>
  )*/
  
  
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
          <li><Link to="/home">Rental </Link></li>
        </div>
        <div className='li-div'>
        {
          new_user

        }
        </div>
        
      </ul>
        
    </div>
  )
}
