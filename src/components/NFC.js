import Team from "./Team"
import Createyourteam from "./Createyourteam"

function NFC({teams, deleteTeam, addNewTeam, headCoaches,mvps}){


    let nfcSouthTeams= [...teams]
    nfcSouthTeams= nfcSouthTeams.slice(28)
    const listNfcSouthTeams = nfcSouthTeams.map((team) => {
        return(
            <Team key={teams.id} team={team}  deleteTeam={deleteTeam} mvps={mvps} headCoaches={headCoaches} />
        )
    })

    let nfcNorthTeams= [...teams]
    nfcNorthTeams= nfcNorthTeams.slice(24,28)
    const listNfcNorthTeams = nfcNorthTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} deleteTeam={deleteTeam} mvps={mvps} headCoaches={headCoaches}/>
        )
    })

    let nfcWestTeams= [...teams]
    nfcWestTeams= nfcWestTeams.slice(20,24)
    const listNfcWestTeams = nfcWestTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} deleteTeam={deleteTeam} mvps={mvps} headCoaches={headCoaches}/>
        )
    })

    let nfcEastTeams= [...teams]
    nfcEastTeams= nfcEastTeams.slice(16,20)
    const listNfcEastTeams = nfcEastTeams.map((team) => {
        return(
            <Team key={teams.id} team={team}  deleteTeam={deleteTeam}  mvps={mvps} headCoaches={headCoaches}/>
        )
    })
    return(        
        <div className="NfcCard">
          <h2>Choose Your Conference From The NFC</h2> 
          <ul>
            <div className="cards">
            <h3>NFC East Teams</h3>
            {listNfcEastTeams}
            </div>
            <div className="cards">
            <h3>NFC West Teams</h3>
            {listNfcWestTeams}
            </div>
            <div className="cards">
            <h3>NFC North Teams</h3>
            {listNfcNorthTeams}
            </div>
            <div className="cards">
            <h3>NFC South Teams</h3>
            {listNfcSouthTeams}
            </div>
          </ul>
        <Createyourteam addNewTeam={addNewTeam}/>
        </div>
        
    )

}
export default NFC