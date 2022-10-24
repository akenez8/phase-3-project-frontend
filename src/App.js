import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar.js"
import Home from "./components/Home.js"
import Division from "./components/Division"
import Conference from "./components/Conference"
import Team from "./components/Team"
import MVP from "./components/MVP"


function App() {
  return (
    <div className="App">
      <header className="header">Header</header>
      <p>TESTTESTTESTTEST</p>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/Division" element={<Division />} />
          <Route exact path="/Conference" element={<Conference />} />
          <Route exact path="/Team" element={<Team />} />
          <Route exact path="/MVP" element={<MVP />} />
        </Routes>
    </div>
  );
}

export default App;
