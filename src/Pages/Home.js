import React, { useState, useEffect } from "react";
import "./Home.css";
import megh from "../assets/img/megh4.jpeg";
// import Pdf from "../assets/pdf/poojagarva.pdf";
import { Link } from "react-router-dom";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import Instagramicon from "../assets/img/socialicons/instagram.png";
import Githubicon from "../assets/img/socialicons/github.png";
import MailIcon from "../assets/img/socialicons/email.png";


const jobProfiles = ["SOFTWARE ENGINEER", "WEB-DEVELOPER", "JAVA-LEARNER"];

const Home = () => {

  const [jobProfile, setJobProfile] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let currentProfile = jobProfiles[index].split("");
    let currentText = "";
    let typingDelay = 170;
    let nextProfileDelay = 4000;

    const typeProfile = () => {
      if (currentProfile.length > 0) {
        currentText += currentProfile.shift();
        setJobProfile(currentText);
        setTimeout(typeProfile, typingDelay);
      } else {
        // Wait before starting to type the next profile
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % jobProfiles.length);
          setJobProfile("");
        }, nextProfileDelay);
      }
    };

    typeProfile();
  }, [index]);


  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              <img
                src={megh}
                data-aos="flip-right"
                alt="Meghana Tamrakar"
                className="img-fluid"
              />
              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/meghana-tamrakar-64804521b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://github.com/Meghhanaa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://www.instagram.com/itzz_meghana_tamrakar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Instagramicon}
                    alt="instagram"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="mailto:meghanatamrakar0123@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={MailIcon}
                    alt="email"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
              </div>
              <div className="bgblack" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1 className="megh-name">MEGHANA TAMRAKAR</h1>
              <div className="profile"><h3>I'M</h3><h2 style={{ color: '#af0236' }}>
                {jobProfile}
                <span className="cursor">|</span>
              </h2></div>
              <br />
              <div className="row">
                <div className="col-sm-4 col-6">
                  <a href="#" target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-primary">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="col-sm-5 col-6">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;




// https://www.youtube.com/watch?v=xidxWceG-wA