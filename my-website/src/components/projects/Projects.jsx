import React from "react";
import "./projects.scss";
import { useState } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < 3 ? currentSlide + 1 : 0);
  };

  return (
    <div className="projects" id="projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h1>Personal Website</h1>
                <p>
                  Web app about myself, which I decided to make not only to
                  share about myself but to improve my skills in React. I have
                  also picked up new styling skills by using Sass rather than
                  CSS.
                </p>
                <br></br>
                <h5>Type: Web-app (Available on my GitHub)</h5>
              </div>
            </div>
            <div className="right">
              <div className="imgContainer">
                <img src="assets/javascriptIcon.png" alt="" />
                <img src="assets/reactIcon.png" alt="" />
                <img src="assets/htmlIcon.png" alt="" />
                <img src="assets/sassIcon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h1>Snap-sense</h1>
                <p>
                  A web-app developed as a group project for hospitals (the
                  client) to allow doctors and patients to communicate and
                  recieve updates, notifications and the lastest information
                  from eachother real time using Reacts responsiveness.{" "}
                </p>
                <br></br>
                <h5>Type: Web-app</h5>
              </div>
            </div>
            <div className="right">
              <div className="imgContainer">
                <img src="assets/javascriptIcon.png" alt="" />
                <img src="assets/reactIcon.png" alt="" />
                <img src="assets/htmlIcon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h1>AirBnB-like application</h1>
                <p>
                  An application built as a group which allowed users to select
                  boroughs in London and view available properties, their
                  statistics, where-abouts on a map using Google's API and
                  allowed user's to favourite options to view after for
                  convenience! JavaFX and sceneBuilder were used to build this
                  application.
                </p>
                <br></br>
                <h5>Type: Desktop app</h5>
              </div>
            </div>
            <div className="right">
              <div className="imgContainer">
                <img src="assets/javaIcon.png" alt="" />
                <img src="assets/sceneBuilderIcon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h1>Teacher-Student-Track</h1>
                <p>
                  A web app I built during A-levels for teachers to keep track
                  of their students progress throughout the year, by recording
                  results, displaying graphs and tables, and grading using an
                  automatically generated grade boundary based on relative
                  performance. The graphs displayed used Google's API.{" "}
                </p>
                <br></br>
                <h5>Type: Web-app (Available on my GitHub)</h5>
              </div>
            </div>
            <div className="right">
              <div className="imgContainer">
                <img src="assets/phpIcon.png" alt="" />
                <img src="assets/htmlIcon.png" alt="" />
                <img src="assets/sqlIcon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="assets/arrowDown.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrowDown.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
