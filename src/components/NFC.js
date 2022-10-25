import Team from "./Team"
import Createyourteam from "./Createyourteam"
function NFC({teams}){
    let nfcSouthTeams= [...teams]
    nfcSouthTeams= nfcSouthTeams.slice(28)
    const listNfcSouthTeams = nfcSouthTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} />
        )
    })

    let nfcNorthTeams= [...teams]
    nfcNorthTeams= nfcNorthTeams.slice(24,28)
    const listNfcNorthTeams = nfcNorthTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} />
        )
    })

    let nfcWestTeams= [...teams]
    nfcWestTeams= nfcWestTeams.slice(20,24)
    const listNfcWestTeams = nfcWestTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} />
        )
    })

    let nfcEastTeams= [...teams]
    nfcEastTeams= nfcEastTeams.slice(16,20)
    const listNfcEastTeams = nfcEastTeams.map((team) => {
        return(
            <Team key={teams.id} team={team} />
        )
    })
    return(        
        <div>
          <h1>Choose Your Conference From The NFC</h1> 
          <ul className= "cards">
            <h1>NFC East Teams</h1>
            {listNfcEastTeams}
            <h1>NFC West Teams</h1>
            {listNfcWestTeams}
            <h1>NFC North Teams</h1>
            {listNfcNorthTeams}
            <h1>NFC South Teams</h1>
            {listNfcSouthTeams}
          </ul>
        <Createyourteam/>
        </div>
        
    )

}
export default NFC