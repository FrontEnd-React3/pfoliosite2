import React, { useState, useEffect } from "react";
import "../styles/Works.css";
import "../styles/Experience.css";
import "../styles/Works.css";
import Firstjob from "./Firstjob";
import Secondjob from "./Secondjob";
import Thirdjob from "./Thirdjob";
import Aos from "aos";
import "aos/dist/aos.css";

function Works() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="works" className="Parallax" >
      
      <h2 data-aos="fade-up" className="heading">
        Works
      </h2>
      <Firstjob />
      <Secondjob />
      <Thirdjob />
    </div>
  );
}

export default Works;
