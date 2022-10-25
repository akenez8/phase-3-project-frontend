import React from "react";

function Createyourmvp(){
    return(
        <div className="form-container">
            <h1>Create Your Team's MVP</h1>
            <form>
                <input type="text" placeholder="MVP name..."/>
                <input type="text" placeholder="MVP City..."/>
                <input type="text" placeholder="Team Record..."/>
            </form>
        </div>
    )
}

export default Createyourmvp