import React, {useState} from "react";

function Team({team, updatedRecord, deleteTeam}){
    const [displayCaptain, setDisplayCaptain] = useState(false)
    const captainClick = () => {
        setDisplayCaptain((prev) => !prev)
    }
    function handleUpdateRecord(){
        fetch(`http://localhost:9292/teams/win_loss_tie}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(),            
        })
        .then(res => res.json())
        .then(data => updatedRecord(data))
    }
    function handleDeleteClick(){
        fetch(`http://localhost:9292/teams/${team.id}`,{
            method: "DELETE",
        })
        .then((res) => res.json())
        .then(() => deleteTeam(team))
    }
    return(
        <div id= "teamDiv">
        <h4 onClick = {captainClick}>{team.name}</h4>
        <p><b>City:</b> {team.city}</p>
        <p><b>Record:</b> {team.win_loss_tie}</p>
        <button className="update" onClick={handleUpdateRecord}>Update Record</button>
        <p>{displayCaptain ? `Team Captain: Put team Captain Here ` : false}</p>
        <button className="remove" onClick={handleDeleteClick}>Delete Team</button>
        </div>
    )
}

export default Team