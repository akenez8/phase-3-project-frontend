import Team from "./Team"

function AFC({teams}){
    let afcTeams= [...teams]
    afcTeams= afcTeams.slice(-0,-16)
    const listTeams = afcTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} />
        )
    })
    return(        
        <div>
          <h1>Choose Your Conference From The AFC</h1> 
          <ul className= "cards">
            {listTeams}
          </ul>

        </div>
        
    )

}
export default AFC