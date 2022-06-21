import React from 'react';
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div>
      <header>
        <img className='logo' src={logo} alt="Logo Unavailable"/>
        <nav>
          <ul className="nav_links">
            <li><p className='nav_links_name'>Home Page</p></li>
            <li><p className='nav_links_name'>Pricing</p></li>
            <li><p className='nav_links_name'>Contact</p></li>
          </ul>  
        </nav>
        <span className="cta"><button>Login / Sign Up</button></span>
      </header>
      <hr style={{color:"#fff"}}/>
    </div>
  )
}
