import React, { useState } from "react";
import "./Nav.css";
import Home from "../assets/img/home.png";
import About from "../assets/img/about.png";
import Contact from "../assets/img/contact.png";
import Education from "../assets/img/education.png";
import megh from "../assets/img/megh1.jpg";
// import Projects from "../assets/img/portfolio.png";
import Services from "../assets/img/services.png";
import Work from "../assets/img/work.png";
import Jsprojects from "../assets/img/jsprojects.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div id="navigation">
        <div class="container">
          <img src={megh} alt="your photo" class="nav-photo" />
          {/* <ul class="megh-nav">
                <li data-aos="zoom-in">
              <Link to="/myportfolio">Home</Link>
              <span class="nav-tooltip">Home</span>
            </li> 
          </ul> */}
          <ul className="megh-nav">
            <Link to="/myportfolio">
              <li data-aos="zoom-in">
                <img src={Home} alt="home" className="img-1" />
              </li>
            </Link>
            <Link to="/about">
              <li data-aos="zoom-in">
                <img src={About} alt="about" className="img-1"/>
              </li>
            </Link>
            <Link to="/services">
              <li data-aos="zoom-in">
                <img src={Services} alt="services" className="img-1" />
              </li>
            </Link>
            <Link to="/work">
              <li data-aos="zoom-in">
                <img src={Work} alt="work" className="img-1" />
              </li>
            </Link>
            <Link to="/education">
              <li data-aos="zoom-in">
                <img src={Education} alt="education" className="img-1"/>
              </li>
            </Link>
            <Link to="/projects">
              <li data-aos="zoom-in">
                <img src={Jsprojects} alt="jsprojects" className="img-1"/>
              </li>
            </Link>
            {/* <Link to="/portfolio">
              <li data-aos="zoom-in">
                <img src={Projects} alt="portfolio" className="img-1"/>
              </li>
            </Link> */}
            <Link to="/contact">
              <li data-aos="zoom-in">
                <img src={Contact} alt="contact" className="img-1"/>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div id="navigation-mob">
      <div class="container-1">
        <img src={megh} alt="your photo" class="nav-photo1" />
        <h1 data-aos="fade-in">
          <Link to="/myportfolio">Meghana</Link>
        </h1>
      </div>
        <i
          data-aos="fade-in"
          className={visible ? "fa fa-close" : "fa fa-bars"}
          onClick={() => setVisible(!visible)}
        ></i>
        {visible ? (
          <ul
            className="list-unstyled"
            data-aos="slide-down"
            data-aos-duration="700"
            onClick={() => setVisible(!visible)}
          >
          <div className="nav-1">
            <Link to="/myportfolio">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/services">
              <li>What I Do</li>
            </Link>
            <Link to="/work">
              <li>Certifications</li>
            </Link>
            <Link to="/education">
              <li>Education</li>
            </Link>
            <Link to="/projects">
              <li>Projects</li>
            </Link>
            {/* <Link to="/portfolio">
              <li>Portfolio</li>
            </Link> */}
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            </div>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default Nav;
