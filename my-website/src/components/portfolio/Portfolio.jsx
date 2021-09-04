import React from 'react'
import "./portfolio.scss"
import { useState } from 'react'

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3) :
      setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : 0)
  }
  // CHANGE DUMMY DATA
  return (
    <div className="portfolio" id="portfolio">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
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
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h1>Title2</h1>
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
      <img src="assets/arrowDown.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrowDown.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
    </div>
  )
}
