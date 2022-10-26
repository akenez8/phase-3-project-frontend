import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import '../App.css';
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import AFC from "./AFC"
import NFC from "./NFC"
import Conference from "./Conference"
import MVP from "./MVP"


function App() {

  const [teams, setTeams] = useState([])
  const [mvps, setMvps] = useState([])
  const [headCoaches, setHeadCoaches] = useState([])

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

  useEffect(() => {
    fetch("http://localhost:9292/headcoaches")
    .then((res) => res.json())
    .then((data) => setHeadCoaches(data))
  },[])

  function addNewTeam(newTeamObj){
    setTeams(prev => [...prev, newTeamObj])
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
        <Route path="/AFC" element={<AFC teams={teams}  deleteTeam={deleteTeam} addNewTeam={addNewTeam}/>} />
        <Route path="/NFC" element={<NFC teams={teams} addNewTeam={addNewTeam}/>} />
        <Route path="/Conference" element={<Conference />} />
        <Route path="/MVP" element={<MVP mvps={mvps}/>} />
      </Routes>

    </div>
  );
}

export default App;
