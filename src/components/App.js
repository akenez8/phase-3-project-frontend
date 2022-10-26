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

  const [teams, setTeams] = useState([])
  const [mvps, setMvps] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/teams")
    .then((res) => res.json())
    .then((data) => setTeams(data))
  },[])

  useEffect(() => {
    fetch("http://localhost:9292/mvps")
    .then((res) => res.json())
    .then((data) => setMvps(data))
  },[])

  function addNewTeam(newTeamObj){
    setTeams([...teams, newTeamObj])
  }

  function updatedRecord(){
    console.log('updaterecord')
  }

  function deleteTeam(deletedTeam){
    const updatedTeams = teams.filter((team) => team.id !== deletedTeam.id);
    setTeams(updatedTeams); 
  }

  return (
    <div className="body">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/AFC" element={<AFC teams={teams} />} />
        <Route path="/NFC" element={<NFC teams={teams} />} />
        <Route path="/Conference" element={<Conference />} />
        <Route path="/Team" element={<Team updatedRecord={updatedRecord} deleteTeam={deleteTeam} />} />
        <Route path="/MVP" element={<MVP mvps={mvps}/>} />
        <Route path="/Createyourteam" element={<Createyourteam addNewTeam={addNewTeam}/>}/>
      </Routes>

    </div>
  );
}

export default App;
