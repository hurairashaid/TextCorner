import "./styles.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "./components/About";

export default function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  function showalert(message, type) {
    setalert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  function changedesign(design) {
    if (design === "red") {
      document.body.style.backgroundColor = "#fc0f03";
      setMode("danger");
    } else if (design === "green") {
      document.body.style.backgroundColor = "#27b50b";
      setMode("success");
    } else if (design === "yellow") {
      document.body.style.backgroundColor = "#c5d11b";
      setMode("warning");
    }
  }
  function changeMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#161716";
      document.title = "Dark Mode";
      showalert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Light Mode";
      showalert("Light Mode Enabled", "success");
    }
  }
  return (
    <>
    <Router>
        <Navbar
          title="Text Corner "
          aboutText="About Myself"
          mode={mode}
          changeMode={changeMode}
          changedesign={changedesign}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/" element={<Textform
                showalert={showalert}
                heading="Enter Your's Text To Analyiz"
                mode={mode}
              />} />
          </Routes>    
        </div>
    </Router>    
    </>
  );
}
