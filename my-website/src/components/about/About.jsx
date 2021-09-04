import React from 'react'
import "./about.scss"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <h1>About me.</h1>
        <h2>--------------------</h2>
        <span>Hello! I'm Era and I'm a 3rd year student studying Computer Science. As a software devoloper I am particularly interested in web development and have had the most experience with them too. I enjoy not only the coding element but also the design aspects that come with it. That being said I also have experience in backend programming using languages such as SQL. In the near future I would like to work on a mobile application to expand my knowledge with not only technologies but the problems that could come with it.  </span>
        <br></br>
        <span>Currently looking for an internship where I can expand my knowledge and add to my skillset. Below are listed recent technologies I have used: </span>
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
