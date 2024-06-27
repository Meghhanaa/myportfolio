import React from "react";
import "./Jsprojects.css";
import githubImg from "../assets/img/github.png";
import pf3 from "../assets/img/netflix.png"; // Assuming you have this image
// import netflixImg from "../assets/img/netflix.png"; // Import the image
import quiz from "../assets/img/quiz.png";
import visit from "../assets/img/evisit.jpeg";
import bhopal from "../assets/img/bhopal.png";
import rubiks from "../assets/img/rubiks.png";

const ProjectData = [
  {
    id: 1,
    ph: visit, // Use the imported ph module
    codelink: "https://github.com/Meghhanaa/E-VISITORSHUB.git",
  },
  {
    id: 2,
    ph: quiz, // Use the imported ph module
    codelink: "https://github.com/Meghhanaa/Quizlet.git",
  },
  {
    id: 3,
    ph: bhopal, // Use the imported ph module
    codelink: "https://github.com/Meghhanaa/BHOPAL_PROJECT.git",
  },
  {
    id: 4,
    ph: rubiks, // Use the imported ph module
    codelink: "https://github.com/Meghhanaa/RUBIKS.git",
  }
];

const Jsprojects = () => {
  return (
    <div className="jsprojects">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 offset-sm-1">
            <h2 className="megh-name">Projects</h2>
            <br />
            <div className="row megh-data">
              {ProjectData.map((project, i) => (
                <div className="col-sm-6 deek" key={i}>
                  <img src={project.ph} alt="My Image" className="img-js" />
                  <br />
                  <a
                    href={project.codelink} // Use the codelink property
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt="GitHub" />
                  </a>
                </div>
              ))}
            </div>
            <br />
            <h2 className="megh-name">Dashboard | React JS</h2>
            <p className="megh-p">Created a Complete Responsive React Application</p>
            <br />
            <div className="js">
              <div className="row">
                <div className="col-sm-6">
                  {/* Uncomment the following lines if needed */}
                  <img src={pf3} alt="NetFlix Clone Project"  className="img-js" />
                  <br />
                  <a
                    href="https://github.com/Meghhanaa/Netflix-clone.git"
                    className="btn btn-default d-block github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github Code <img src={githubImg} alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jsprojects;


// import React from "react";
// import "./Jsprojects.css";
// import ProjectData from "../Data/Jsprojects.json";
// import githubImg from "../assets/img/github.png";
// import pf3 from "../assets/img/netflix.png";

// const Jsprojects = () => {
//   return (
//     <div className="jsprojects">
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-10 offset-sm-1">
//             <h2 className="megh-name">Projects</h2>
//             <br />
//             <div className="row">
//               {ProjectData.map((project, i) => (
//                 <div className="col-sm-6" key={i}>
//                   <img src={project.projectlink} alt="My Image" width="100%" />
//                   <br />
//                   <a
//                     href={project.codelink}
//                     className="btn btn-default d-block github"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Github Code <img src={githubImg} alt={i} />
//                   </a>
//                 </div>
//               ))}
//             </div>
//             <br />
//             <h2 className="megh-name">Dashboard | React JS </h2>
//             <p className="megh-p">
//               Created a Complete Respnsive React Application
//             </p>
//             <br />
//             <div className="js">
//               <div className="row">
//                 <div className="col-sm-6">
//                   {/* <a
//                     href="https://poojagarva28.github.io/React-Final/"
//                     target="_blank"
//                   > */}
//                     <img src={pf3} alt="NetFlix Clone Project" />
//                   {/* </a> */}
//                   <br />
//                   <a
//                     href="https://github.com/Meghhanaa/Netflix-clone.git"
//                     className="btn btn-default d-block github"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Github Code <img src={githubImg} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <br />
//             {/* <h2 className="megh-name">DOM Manipulation | Javascript </h2>
//             <p className="megh-p">
//               Local Storage / Array methods / Filters / Javascript Events / HTML
//               Forms window Object / Browser APIs
//             </p>
//             <br /> */}
//             {/* <div className="js">
//               <div className="row">
//                 <div className="col-sm-6">
//                   <a href="https://shoplane-by-pooja.glitch.me" target="_blank">
//                     <img src={pf1} alt="Ecommerce Small Project" />
//                   </a>
//                   <br />
//                   <a
//                     href="https://github.com/poojagarva28/shoplane"
//                     className="btn btn-default d-block github"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Github Code <img src={githubImg} />
//                   </a>
//                 </div>
//                 <div className="col-sm-6">
//                   <a
//                     href="https://poojagarva28.github.io/project/"
//                     target="_blank"
//                   >
//                     <img src={pf2} alt="Ecommerce Small Project" />
//                   </a>
//                   <a
//                     href="https://github.com/poojagarva28/project"
//                     className="btn btn-default d-block github"
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Github Code <img src={githubImg} />
//                   </a>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Jsprojects;


