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
            <a href="https://github.com/EraDula" target="_blank"><img src={githubLogo} alt="Logo" className="icon"/></a>
          </div>
          <div className="itemContainer">
            <a href="https://uk.linkedin.com/in/era-dula-95939b196" target="_blank"><img src={linkedinLogo} alt="Logo" className="icon"/></a>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}
