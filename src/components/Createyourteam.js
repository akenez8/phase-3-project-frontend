import react, {useState} from 'react';
import Createyourmvp from "./Createyourmvp.js"

function CreateYourTeam({addNewTeam}){
    const [newTeamName, setNewTeamName] = useState("")
    const [newTeamCity, setNewTeamCity] = useState("")
    const [newTeamRecord, setNewTeamRecord] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const newTeamObj = {
            name: newTeamName,
            city: newTeamCity,
            record: newTeamRecord
        }
        fetch(`http://localhost:9292/teams`, {
            method: `POST`,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newTeamObj)
        })
        .then(res => res.json())
        .then(data => addNewTeam(data))
    }
    

    return(
        <div className="form-container">
            <h1>Create Your Team</h1>
            <form onSubmit = {handleSubmit}>
                <input 
                type="text" 
                placeholder="Team name..." 
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}/>
                <input 
                type="text" 
                placeholder="Team City..."
                value={newTeamCity}
                onChange={(e) => setNewTeamCity(e.target.value)}/>
                <input 
                type="text" 
                placeholder="Team Record..."
                value={newTeamRecord}
                onChange={(e) => setNewTeamRecord(e.target.value)}/>
                {/* <Createyourmvp/> */}
                <button type="submit" className = "newTeamButton">Submit</button>
            </form>
        </div>
    )
}

export default CreateYourTeam