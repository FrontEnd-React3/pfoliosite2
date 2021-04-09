import "./App.css";
import "./styles/About.css";
import { motion } from "framer-motion";
import Lead from "./components/Lead";
import About from "./components/Aboutme";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import { Button } from "@material-ui/core";
import MailMe from "./components/Emailme";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Side from "./components/Socialside";
import Navbar2 from "./components/Navbar2";
import "./styles/NavBar2.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-scroll";

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Side />
      <div className="containersection">
        <Lead className="section" />
        <About className="section" />
        <Timeline className="section" />
        <Works className="section" />
        <Skills className="section" id="Skills__section" />

        <MailMe className="section" />
        <Footer className="section" />
      </div>
    </div>
  );
}

export default App;
