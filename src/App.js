import "./App.css";
import { motion } from "framer-motion";
import Lead from "./components/Lead";
import About from "./components/Aboutme";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import { Button } from "@material-ui/core";
import MailMe from "./components/Emailme";
import Footer from "./components/Footer";
import Map from "./components/Map";
import Navbar2 from "./components/Navbar2";
import "./styles/NavBar2.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { InfoData, InfoDataTwo } from './InfoData';

function App() {
  return (
    <div className="App">
      <motion.div
        className="title"
        initial={{ position: "relative", top: -250 }}
        animate={{ top: -10 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
        default={{ duration: 18 }}
      ></motion.div>
      <Router>
        <Navbar2 />

        <Lead />
        <About />
        <Timeline />
        <Skills />
        <MailMe />
        <Footer />
        <Map />
      </Router>
    </div>
  );
}

export default App;
