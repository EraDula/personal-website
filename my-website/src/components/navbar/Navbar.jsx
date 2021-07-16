import React from 'react'
import "./navbar.scss"
import githubLogo from '../../images/githubLogo.png';
import linkedinLogo from '../../images/linkedinLogo.png';

export default function Navbar() {
  return (
    <div className="navbar" id="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Era Dula.</a>
          <div className="itemContainer">
            <img src={githubLogo} alt="Logo" className="icon"/>
          </div>
          <div className="itemContainer">
            <img src={linkedinLogo} alt="Logo" className="icon"/>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}
