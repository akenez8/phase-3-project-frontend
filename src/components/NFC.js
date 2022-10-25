import Team from "./Team"

function NFC({teams}){
    let nfcTeams= [...teams]
    nfcTeams= nfcTeams.slice(16)
    const listTeams = nfcTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} />
        )
    })
    return(        
        <div>
          <h1>Choose Your Conference From The NFC</h1> 
          <ul className= "cards">
            {listTeams}
          </ul>

        </div>
        
    )

}
export default NFC