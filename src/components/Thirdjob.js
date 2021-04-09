import React, { useState, useEffect } from "react";
import "../styles/Firstjob.css";
import "../styles/Experience.css";
import pf from "../images/thissite.jpg";
import "bootstrap/dist/css/bootstrap.css";

function Firstjob() {
  const [show, setShow] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="project-centerthd"
      style={{ transform: `translateY(-${offsetY * 0.70}px)` }}
    >
      <div className="row bodyprim project">
        <div className="col-lg-4  col-md-12 projectimagewrapper">
          <img className="shadow  project-image" src={pf} />
        </div>
        <div className="col-lg-8 col-md-12 project-info">
          <p className="works__txt">
            <h3 className="works__subheading">About this PortFolio</h3>I have
            been aiming for a minimalistic webpage maximising the (js) effects.
            <div className="works__fat">
              <strong>
                Kaizen-minded and therefore passionate and burnout free.
              </strong>
            </div>
            Designed pages inspire and generate confidence even if the
            competition sells better quality customers tend to have confidence
            in the nicest looking site. <br />
            Design generates profit. <br />
            <div className="project-view">
              <a href="#">View Project</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Firstjob;
