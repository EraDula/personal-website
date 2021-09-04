import React from 'react'
import "./about.scss"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <h1>About me.</h1>
        <h2>--------------------</h2>
        <span>Basic description about me</span>
      </div>
      <div className="right">
          <img />
      </div>
      {/* <div className="aboutMeContainer">
        <div className="left"></div>
        <div className="right">
          <div className="profileImage">
            <img src="assets/javascriptIcon.png" alt="" />
          </div>
        </div>
      </div> */}
    </div>
  )
}
