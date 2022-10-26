import React, {useState} from "react";

function Team({team, updatedRecord, deleteTeam, mvps, headCoaches}){
    
    const[winCount, setWinCount] = useState(team.win)
    const[lossCount, setLossCount] = useState(team.loss)
    const[tieCount, setTieCount] = useState(team.tie)
    const [displayCaptain, setDisplayCaptain] = useState(false)
    const captainClick = () => {
        setDisplayCaptain((prev) => !prev)
    }

    function handleDeleteClick(){
        
        fetch(`http://localhost:9292/teams/${team.id}`,{
            method: "DELETE",
        })
        deleteTeam(team)
    }
    function handleUpdateRecordWin(){
 
        fetch(`http://localhost:9292/teams_win/${team.id}}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                win: team.win += 1
            })            
        }).then(res => res.json())
          .then(data => setWinCount(data.win))
    }
    function handleUpdateRecordLoss(){
        setLossCount(prev => prev += 1)
        fetch(`http://localhost:9292/teams_loss/${team.id}}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                loss: team.loss += 1
            }),            
        }).then(res => res.json())
          .then(data => setLossCount(data.loss))
    }
    function handleUpdateRecordTie(){
        setTieCount(prev => prev += 1)
        fetch(`http://localhost:9292/teams_tie/${team.id}}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                tie: team.tie += 1
            }),            
        }).then(res => res.json())
          .then(data => setTieCount(data.tie))
    }

    return(
        <div id= "teamDiv">
        <h4 onClick = {captainClick}>{team.name}</h4>
        <p><b>City:</b> {team.city}</p>
        <p><b>Record:</b> {`${winCount}-${lossCount}-${tieCount}`}</p>
        <p>{displayCaptain ? `Team Captain: Team Captain ` : false}</p>
        <button className="remove" onClick={handleDeleteClick}>Delete Team</button>
        <button onClick={() => handleUpdateRecordWin()}>Add Win</button>
        <button onClick={() => handleUpdateRecordLoss()}>Add Loss</button>
        <button onClick={() => handleUpdateRecordTie()}>Add Tie</button>
        </div>
    )
}

export default Team