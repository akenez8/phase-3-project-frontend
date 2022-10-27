import React, {useState} from 'react';

function CreateYourTeam({addNewTeam}){
    const [newTeamName, setNewTeamName] = useState("")
    const [newTeamCity, setNewTeamCity] = useState("")
    const [newTeamWin, setNewTeamWin] = useState(0)
    const [newTeamLoss, setNewTeamLoss] = useState(0)
    const [newTeamTie, setNewTeamTie] = useState(0)

    function handleSubmit(e){
        e.preventDefault()
        const newTeamObj = {
            name: newTeamName,
            city: newTeamCity,
            win: newTeamWin,
            loss: newTeamLoss,
            tie: newTeamTie,
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
                placeholder="Team Wins..."
                value={newTeamWin}
                onChange={(e) => setNewTeamWin(e.target.value)}/>
                <input 
                type="text" 
                placeholder="Team Losses..."
                value={newTeamWin}
                onChange={(e) => setNewTeamLoss(e.target.value)}/>
                <input 
                type="text" 
                placeholder="Team Ties..."
                value={newTeamWin}
                onChange={(e) => setNewTeamTie(e.target.value)}/>
                <button type="submit" className = "newTeamButton">Submit</button>
            </form>
        </div>
    )
}

export default CreateYourTeam