import React from 'react'
import "./about.scss"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="aboutMeBox">
        <h1>About me.</h1>
        <h2>--------------------</h2>
        <div className="insideBox">
          <div className="left">
            <h2>Interests</h2>
            <h3>Front end</h3>
            <h3>Back end (less experience)</h3>
            <h3>Databases</h3>
            <h3>Designing apps (UI/UX)</h3>
            <h3>Web / app development</h3>
            {/* <span>I'm a 3rd year student studying Computer Science. As a software devoloper I am particularly interested in web development and have had the most experience in this field too. I enjoy not only the coding element but also the design aspects that come with it.</span>
            <br></br>
            <span>Front end development allows me to use my creativity when creating applications and because of that makes it more enjoyable to me than back-end development although I have experience in back-end programming with SQL.</span>
            <br></br>
            <span>To the right is a list of my skills starting from the most recently used: </span> */}
          </div>
          <div className="right">
            <h2>Skillset</h2>
            <div className="skills">
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>SASS</h3>
              <h3>javascript</h3>
              <h3>React</h3>
              <h3>Python</h3>
              <h3>java</h3>
              <h3>SQL</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
