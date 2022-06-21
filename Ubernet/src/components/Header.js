import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

export default function Header() {
  return (

    <div>
      <header>
        <img className='logo' src={logo} alt="Logo Unavailable"/>
        <nav>
          <ul className="nav_links">
          <Link to="/"><li><p className='nav_links_name'>Home</p></li></Link>
          <Link to="/pricing"><li><p className='nav_links_name'>Pricing</p></li></Link>
          <Link to="/contact"><li><p className='nav_links_name'>Contact</p></li></Link>
          </ul>  
        </nav>
        <Link to="/login"><span className="cta"><button>Login / Sign Up</button></span></Link>
      </header>
      <hr style={{color:"#fff"}}/>
    </div>
  )
}
