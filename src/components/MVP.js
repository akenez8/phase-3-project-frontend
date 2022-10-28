import Createyourmvp from "./Createyourmvp"

function MVP({mvps, addNewMvp}){

    let displayMvps= [...mvps]
    displayMvps= displayMvps.map((mvp) => {
        return(
            <div>
                <p className="mvpname"><b>Name: </b>{mvp.name}🏆</p>
                <p className="mvpposition"><b>Position: </b>{mvp.position}</p>
                <p className="mvpyear"><b>MVP Year: </b>{mvp.year}</p>
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