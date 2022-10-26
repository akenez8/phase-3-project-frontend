import Team from "./Team"
import Createyourteam from "./Createyourteam"
function AFC({teams,  deleteTeam, addNewTeam}){

    let afcSouthTeams= [...teams]
    afcSouthTeams= afcSouthTeams.slice(12,16)
    const listAfcSouthTeams = afcSouthTeams.map((team) => {
        return(
            <Team key={team.id} team={team} deleteTeam= {deleteTeam} />
        )
    })

    let afcNorthTeams= [...teams]
    afcNorthTeams= afcNorthTeams.slice(8,12)
    const listAfcNorthTeams = afcNorthTeams.map((team) => {
        return(
            <Team key={team.id} team={team} deleteTeam= {deleteTeam}/>
        )
    })

    let afcWestTeams= [...teams]
    afcWestTeams= afcWestTeams.slice(4,8)
    const listAfcWestTeams = afcWestTeams.map((team) => {
        return(
            <Team key={team.id} team={team} deleteTeam= {deleteTeam}/>
        )
    })

    let afcEastTeams= [...teams]
    afcEastTeams= afcEastTeams.slice(0,4)
    const listAfcEastTeams = afcEastTeams.map((team) => {
        return(
            <Team key={team.id} team={team} deleteTeam= {deleteTeam}/>
        )
    })
    return(        
        <div className="card">
          <h2>Choose Your Conference From The AFC</h2> 
          <ul>
            <div className="cards">
            <h3>AFC East Teams</h3>
            {listAfcEastTeams}
            </div>
            <div className="cards">
            <h3>AFC West Teams</h3>
            {listAfcWestTeams}
            </div>
            <div className="cards">
            <h3>AFC North Teams</h3>
            {listAfcNorthTeams}
            </div>
            <div className="cards">
            <h3>AFC South Teams</h3>
            {listAfcSouthTeams}
            </div>
          </ul>
        <Createyourteam addNewTeam={addNewTeam}/>
        </div>
        
    )

}
export default AFC