import React, {useState} from "react";

function Team({team}){
    const [displayCaptain, setDisplayCaptain] = useState(false)
    const captainClick = () => {
        setDisplayCaptain((prev) => !prev)
    }
    return(
        <div id= "teamDiv">
        <h4 onClick = {captainClick}>{team.name}</h4>
        <p><b>City:</b> {team.city}</p>
        <p><b>Record:</b> {team.win_loss_tie}</p>
        <p>{displayCaptain ? `Team Captain: Put team Captain Here ` : false}</p>
        </div>
    )
}

export default Team