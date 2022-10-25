import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import '../App.css';
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import AFC from "./AFC"
import NFC from "./NFC"
import Conference from "./Conference"
import Team from "./Team"
import MVP from "./MVP"
import Createyourteam from "./Createyourteam.js";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AFC" element={<AFC />} />
        <Route path="/NFC" element={<NFC />} />
        <Route path="/Conference" element={<Conference />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/MVP" element={<MVP />} />
        <Route path="/Createyourteam" element={<Createyourteam/>}/>
      </Routes>

    </div>
  );
}

export default App;
