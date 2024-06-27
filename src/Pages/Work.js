import React from "react";
import "./Work.css";
import work from "../Data/Work.json";

const Work = () => {
  return (
    <>
      <div id="work">
        <div className="container work-02">
          <div className="row">
            <div className="col-sm-11 offset-sm-1 work-data">
              <h2 data-aos="fade-down" className="megh-name">CERTIFICATIONS</h2>
              <br />
              {work.map((item, i) => (
                <div className="workblock" key={i}>
                  <div className="row">
                    <div className="col-sm-5">
                      <h5 data-aos="fade-right">{item.year}</h5>
                    </div>
                    <div className="col-sm-7">
                      <div className="educationright" >
                        <h5>{item.companyname}</h5>
                        <h6 className="position">
                          <i>{item.position}</i>
                        </h6>
                        <h6>{item.desc}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
