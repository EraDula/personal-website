import React from 'react'
import "./portfolio.scss"

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h1>Title</h1>
                <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                <br></br>
                <h5>Type:</h5>
              </div>
            </div>
            <div className="right">
              <div className="imgContainer">
                <img src="assets/javascriptIcon.png" alt="" />
                <img src="assets/reactIcon.png" alt="" />
                <img src="assets/htmlIcon.png" alt="" />
                <img src="assets/sassIcon.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
