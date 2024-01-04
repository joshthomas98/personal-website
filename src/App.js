import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homepage from "./pages/Homepage";
import CodingPortfolio from "./pages/CodingPortfolio";
import Music from "./pages/Music";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";

// import LegRoom from "./pages/LegRoom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Homepage />} />

        <Route path="codingportfolio" element={<CodingPortfolio />} />

        <Route path="music" element={<Music />} />

        <Route path="aboutme" element={<AboutMe />} />

        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
