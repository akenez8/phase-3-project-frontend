import Team from "./Team"

function AFC({teams}){
    let afcSouthTeams= [...teams]
    afcSouthTeams= afcSouthTeams.slice(12,16)
    const listAfcSouthTeams = afcSouthTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} />
        )
    })

    let afcNorthTeams= [...teams]
    afcNorthTeams= afcNorthTeams.slice(8,12)
    const listAfcNorthTeams = afcNorthTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} />
        )
    })

    let afcWestTeams= [...teams]
    afcWestTeams= afcWestTeams.slice(4,8)
    const listAfcWestTeams = afcWestTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} />
        )
    })

    let afcEastTeams= [...teams]
    afcEastTeams= afcEastTeams.slice(0,4)
    const listAfcEastTeams = afcEastTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} />
        )
    })
    return(        
        <div>
          <h1>Choose Your Conference From The NFC</h1> 
          <ul className= "cards">
            <h1>AFC East Teams</h1>
            {listAfcEastTeams}
            <h1>AFC West Teams</h1>
            {listAfcWestTeams}
            <h1>AFC North Teams</h1>
            {listAfcNorthTeams}
            <h1>AFC South Teams</h1>
            {listAfcSouthTeams}
          </ul>

        </div>
        
    )

}
export default AFC