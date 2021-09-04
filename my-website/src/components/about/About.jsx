import React from 'react'
import "./about.scss"

export default function About() {
  return (
    <div className="about" id="about">
      <div className="aboutMeBox">
        <h1>About me.</h1>
        <h2>--------------------</h2>
        <span>Hello! I'm Era and I'm a 3rd year student studying Computer Science. As a software devoloper I am particularly interested in web development and have had the most experience in this field too. I enjoy not only the coding element but also the design aspects that come with it. </span>
        <br></br>
        <span>Currently looking for an internship where I can expand my knowledge and add to my skillset. Below are listed technologies I have used starting from the most recent: </span>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>javascript</li>
            <li>React</li>
            <li>Python</li>
            <li>java</li>
          </ul>
      </div>
    </div>
  )
}
