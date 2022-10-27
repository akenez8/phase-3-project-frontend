import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import '../App.css';
import Navbar from "./Navbar.js"
import Home from "./Home.js"
import AFC from "./AFC"
import NFC from "./NFC"


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
    fetch("http://localhost:9292/headCoaches")
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
        <Route path="/AFC" element={<AFC teams={teams} headCoaches={headCoaches} mvps={mvps} deleteTeam={deleteTeam} addNewTeam={addNewTeam}/>} />
        <Route path="/NFC" element={<NFC teams={teams} headCoaches={headCoaches} mvps={mvps} deleteTeam={deleteTeam} addNewTeam={addNewTeam}/>} />
      </Routes>

    </div>
  );
}

export default App;
