function Team({team}){
    return(
        <div id= "teamDiv">
        <h4>{team.name}</h4>
        <p><b>City:</b> {team.city}</p>
        <p><b>Record:</b> {team.win_loss_tie}</p>
        <p><b>MVP:</b> Put Team MVP here</p>
        </div>
    )
}

export default Team