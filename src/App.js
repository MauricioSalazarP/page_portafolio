import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);
  const [showContent, setShowContent] = useState(false); // Estado adicional para controlar la visibilidad del contenido


  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
      setShowContent(true); 
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
      {showContent && (
        <>
        <Navbar />
        <ScrollToTop />
          <Routes>
          <Route path="/page_portafolio/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/page_portafolio/"/>} />
          
        </Routes>   
      <Footer />
      </>
      )}
      </div>
    </Router>
  );
}

export default App;
