import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import megh from "../assets/img/megh1.jpg";
import Pdf from "../assets/pdf/pdf1.pdf";
import './Banner.css'; // Import your CSS file here
import { FaFacebookF, FaLinkedinIn, FaReact } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub , FaJava, FaPython } from "react-icons/fa";
import { Link } from "react-router-dom";

// LeftBanner component
const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Emerging Full Stack Developer.', 'UI-UX Designer.', 'Java Developer'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="left-banner">
      <div className="banner-content">
        <h4 className="banner-subtitle">WELCOME TO MY WORLD</h4>
        <h1 className="banner-title">
          Hi, I'm <span className="name-highlight">MEGHANA TAMRAKAR</span>
        </h1>
        <h2 className="banner-role">
          a <span className="typewriter-text">{text}</span>
          <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="banner-description">
          Looking forward to an opportunity for working in a dynamic, challenging environment, where I can utilize my
          skills for developing my career and for the growth of the organization.
        </p>
      </div>
      {/* Media */}
      <div className="media-section">  
        <div className="social-icons">
        <h4 className="banner-subtitle">Find me on:</h4> 
        <span className="skill-icon">
          <a href="mailto:meghanatamrakar0123@gmail.com">
            <IoMail />
          </a>
        </span>

        <span className="skill-icon">
          <Link to='https://www.facebook.com/deeksha.tamrakar.94'>
            <FaFacebookF />
          </Link>
        </span>
        <span className="skill-icon">
          <Link to='https://github.com/Meghhanaa'>
            <FaGithub />
          </Link>
        </span>
        <span className="skill-icon">
          <Link to='https://www.linkedin.com/in/meghana-tamrakar-64804521b/'>
            <FaLinkedinIn />
          </Link>
        </span>
        <span className="skill-icon">
          <Link to='https://www.instagram.com/itzz_meghana_tamrakar/'>
            <FaInstagram />
          </Link>
        </span>
      </div>   
        {/* <div className="social-icons">
        <h4 className="banner-subtitle">Find me on:</h4> 
          <span className="skill-icon">
            <a href='https://www.facebook.com/deeksha.tamrakar.94' target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </span>
          <span className="skill-icon">
            <a href='https://github.com/Meghhanaa' target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </span>
          <span className="skill-icon">
            <a href='https://www.linkedin.com/in/meghana-tamrakar-64804521b/' target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="skill-icon">
            <a href='https://www.instagram.com/itzz_meghana_tamrakar/' target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </span>
        </div> */}

        <div className="skills-icons">
        <h4 className="banner-subtitle">Have Skills:</h4> 
          <span className="skill-icon">
              {/* <FaReact /> */}
              <Link to='https://react.dev/'>
                <FaReact />
              </Link>
            </span>
            <span className="skill-icon">
              <Link to='https://nodejs.org/en'>
                <FaNodeJs />
              </Link>
            </span>
            <span className="skill-icon">
              <Link to='https://www.python.org'>
                <FaPython />
              </Link>
            </span>
            <span className="skill-icon">
              <Link to='https://www.java.com/en/'>
                <FaJava />
              </Link> 
            </span>
            <span className="skill-icon">
              <Link to='https://dev.mysql.com/doc/'>
                <DiMysql />
              </Link>
              
            </span>
          {/* Add more icons as needed */}
        </div>
      </div>
    </div>
  );
};

// RightBanner component
const RightBanner = () => {
  return (
    <div className="right-banner">
      <img
        className="banner-image"
        src={megh}
        alt="bannerImg"
      />
      <div className="overlay"></div>
      <div className='megh-items'>
        <div className="row">
          <div className="col-sm-4 col-6">
                    <a href={Pdf} target="_blank" rel="noreferrer">
                      <button type="button" className="btn-1 ">
                        Resume
                      </button>
                    </a>
                  </div>
                  <div className="col-sm-5 col-6">
                    <Link to="/contact">
                      <button type="button" className="btn-1">
                        HireMe
                      </button>
                    </Link>
                  </div>
                </div>
        </div>         
    </div>
  );
};

// Banner component
const Banner = () => {
  return (
    <>
      <div className='banner-1'>
      <section id="home" className="banner-section">
          <LeftBanner />
          <RightBanner />
        </section>
      </div>
    </>
  );
};

export default Banner;



// import React from 'react'
// import LeftBanner from './LeftBanner';
// import RightBanner from './RightBanner';
// const Banner = () => {
//   return (
//     <section
//       id="home"
//       className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
//     >
//       <LeftBanner />
//      <RightBanner />
//     </section>
//   );
// }

// export default Banner