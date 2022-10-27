import Createyourmvp from "./Createyourmvp"

function MVP({mvps, addNewMvp}){

    let displayMvps= [...mvps]
    displayMvps= displayMvps.map((mvp) => {
        return(
            <div>
                <p>{mvp.name}</p>
                <p>{mvp.position}</p>
                <p>{mvp.year}</p>
            </div>
        )
    })


    return(
        <div>
            <div>{displayMvps}</div>
            <Createyourmvp addNewMvp={addNewMvp}/>
        </div>
        
    )
}
export default MVP;