import React, { useRef, useState } from "react";
import "./Contact.css";
import { functions } from "../firebaseConfig.js";
import { httpsCallable } from "firebase/functions";

const Contact = () => {
  const formRef = useRef(null);
  const [done, setDone] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
  
    const emailFunction = httpsCallable(functions, 'sendEmail');
  
    emailFunction({
      email: e.target.user_email.value,
      subject: e.target.user_subject.value,
      message: e.target.user_message.value,
    })
      .then((result) => {
        if (result.data.success) { // Check if the response indicates success
          setDone(true);
          setError(false);
        } else {
          setDone(false);
          setError(true);
          console.error("Error: ", result.data.error); // Log the error message
        }
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
        setDone(false);
        setError(true);
      });
  
    e.target.reset();
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <div className="contactcontent">
              <h2 className="megh-name" data-aos="fade-up">
                Contact
              </h2>
              <br />
              <form onSubmit={sendEmail} ref={formRef}>
                <input
                  data-aos="fade-up"
                  type="text"
                  placeholder="Your Name"
                  className="form-control"
                  name="user_name"
                  required
                />
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      data-aos="fade-up"
                      type="email"
                      placeholder="Your Email"
                      className="form-control"
                      name="user_email"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      data-aos="fade-up"
                      type="text"
                      placeholder="Contact"
                      className="form-control"
                      name="user_contact"
                      pattern="[0-9]{10}"
                      title="Please enter valid number."
                      required
                    />
                  </div>
                </div>
                <input
                  data-aos="fade-up"
                  type="text"
                  placeholder="Subject"
                  className="form-control"
                  name="user_subject"
                  required
                />
                <textarea
                  data-aos="fade-up"
                  name="user_message"
                  rows="4"
                  className="form-control"
                  placeholder="Your Message"
                  required
                ></textarea>
                <br />
                <button
                  data-aos="fade-up"
                  type="submit"
                  className="btn btn-primary"
                >
                  Send
                </button>
                <br />
                <br />
                {done && (
                  <p>problem</p>
                )}
                {error && (
                  <p>AAPKA DIN SHUBH HO! THANKS FOR CONTACTING ME..</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;






// #contact {
//   height: 100vh;
//   background: url("../assets/img/wall-sleek.webp") no-repeat center center fixed, 
//               linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%) -50px 0,
//               linear-gradient(225deg, rgba(255,255,255,0.1) 25%, transparent 25%) -50px 0,
//               linear-gradient(315deg, rgba(255,255,255,0.1) 25%, transparent 25%),
//               linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%);
//   background-size: cover, 100px 100px;
//   animation: moveSlant 20s linear infinite;
//   backdrop-filter: blur(5px);
//   -webkit-backdrop-filter: blur(5px);
// }

// @keyframes moveSlant {
//   0% {
//     background-position: 0% 0%;
//   }
//   100% {
//     background-position: 100% 100%;
//   }
// }
// #contact {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #fff;
//   text-align: center;
// }

// .megh-name{
//   color: #af0236;
//   text-shadow: 2px 2px 4px #000, /* White shadow */
//                -2px -2px 4px #ccc;
// }


// .form-control {
//   background-color: rgb(11, 11, 11) !important;
//   border: 10px !important;
//   border-radius: 0px !important;
//   margin-bottom: 15px;
//   border-bottom: 1px solid rgb(23, 23, 23) !important;
//   color: #fff !important;
//   transition: background-color 0.3s ease; /* Smooth transition for background color */
// }

// .form-control:focus {
//   box-shadow: 0 0 8px 0 #fff !important; /* Glowing effect */
//   border-color: rgba(255, 255, 255, 0.6) !important; /* Lighter border color */
//   background-color: rgba(255, 255, 255, 0.1) !important; /* Slightly lighter background */
// }

// .form-control::placeholder {
//   color: #fff; /* Light grey placeholder text */
//   opacity: 1; /* Full opacity */
// }

// .form-control:focus::placeholder {
//   color: #fff; /* Slightly lighter grey placeholder text on focus */
// }

// #contact .btn {
//   background-color: #fff !important;
//   transition: box-shadow 0.3s ease, transform 0.3s ease; /* Smooth transition for shadow and transform */
// }

// #contact .btn:hover {
//   background-color: #af0236  !important;
//   color: #fff !important;
//   border-color: #fff !important;
//   box-shadow: 0 0 15px 0 rgba(255, 255, 255, 0.6) !important; /* Shadow effect */
//   transform: translateY(-3px); /* Slight lift */
// }


// .contactcontent{
//   color: #fff;
//   border: 2px dashed #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 70vh;
//   min-width: 55vh;
//   margin-top: 20vh;
//   flex-direction: column;
//   text-align: center;
//   padding: 20px;
//   position: relative;
//   backdrop-filter: blur(15px);
//   -webkit-backdrop-filter: blur(25px);
// }

// .contactcontent::before {
//   content: "";
//   position: absolute;
//   top: -25px;
//   left: -25px;
//   width: 50px;
//   height: 50px;
//   background-color: #fff;
//   animation: rotate 3s ease infinite;
// }
// .contactcontent::after {
//   content: "";
//   position: absolute;
//   bottom: -12.5px;
//   right: -12.5px;
//   width: 25px;
//   height: 25px;
//   background-color: #fff;
//   animation: rotate 3s ease infinite;
// }
// @keyframes rotate {
//   25% {
//     transform: rotate(90deg);
//     transform: scale(0.7);
//   }
//   50% {
//     transform: rotate(180deg);
//   }
//   75% {
//     transform: rotate(270deg);
//   }
//   100% {
//     transform: rotate(360deg);
//   }
// }

// @media (max-width: 767px) {
//   #contact {
//     background-size: cover;
//     background-position: cover;
//     /* margin-top: 120px; */
//   }
// }


/* 
.form-control {
  background-color: rgb(77, 76, 76) !important;
  border: 10px !important;
  border-radius: 0px !important;
  margin-bottom: 15px;
  border-bottom: 1px solid rgb(23, 23, 23) !important;
  color: #fff !important;
}
.form-control:focus {
  box-shadow: none !important;
  border-color: rgba(255, 255, 255, 0.2) !important;
}
#contact .btn {
  background-color: #fff !important;
}
#contact .btn:hover {
  background-color: #000 !important;
  color: #fff !important;
  border-color: #fff !important;
}

@media (max-width: 767px) {
  #contact h1 {
    margin-top: 120px;
  }
} */