function Team({team}){
    return(
        <div>
        <h4>{team.name}</h4>
        <p>{team.city}</p>
        <p>{team.win_loss_tie}</p>
        </div>
    )
}

export default Team