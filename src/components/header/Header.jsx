import { Container } from '@mui/material';
import React from 'react'
import "./header.css";
import logo from '../../assets/logo.png'
function Header() {

  return (
    <header className="header">
        <nav className='nav'>
            <div className='left'>
                <img src={logo}></img>
            </div>
            <div className='right'>
                <a href="">What we do</a>
                <a href="">Who we are</a>
                <a href=""> Career</a>
                <a href="">Contact</a>
                <a href="">Search</a>
            </div>
        </nav>
  </header>
  )
}

export default Header