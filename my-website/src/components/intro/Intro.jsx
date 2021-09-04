import React from 'react'
import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Era Dula!</h1>
          <h3>Software developer and 3rd year student.</h3>
          <a href="" target="_blank"><button type="submit">CV</button></a>
        </div>
        <a href="#portfolio" className="arrow">
          <img src="assets/arrowDown.png" alt="Arrow Down"/>
        </a>
      </div>
    </div>
  )
}
