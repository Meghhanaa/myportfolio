import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2 className="megh-name">About Me</h2>
              <p>
              “Passionate about web development and aspiring to become a skilled full stack web developer. Proficient in front-end technologies like React and Scss, and currently learning back-end development with Node.js and Express.js As well as Databases like MySQL. With a keen interest in AI and Machine Learning, I am dedicated to integrating advanced technologies into web solutions. Additionally, I am committed to mastering Java for logical programming and data structures & algorithms. My journey in tech is fueled by continuous learning and a drive to grow in the field of web development.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
