import React, {useState} from "react";

function Createyourmvp({addNewMvp}){
    const [newMvpName, setNewMvpName] = useState("")
    const [newMvpPosition, setNewMvpPosition] = useState("")
    const [newMvpYear, setNewMvpYear] = useState("")

    function handleMvpSubmit(e){
        e.preventDefault()
        const newMvpObj = {
            name: newMvpName,
            position: newMvpPosition,
            year: newMvpYear
        }

        fetch(`http://localhost:9292/mvps`, {
            method: `POST`,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newMvpObj)
        })
        .then(res => res.json())
        .then(data => addNewMvp(data))
    }
    return(
        <div className="form-container">
            <h1>Create Your Team's MVP</h1>
            <form onSubmit={handleMvpSubmit}>
                <input 
                type="text" 
                placeholder="MVP Name..."
                value={newMvpName}
                onChange={(e) => setNewMvpName(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="MVP Position..."
                value={newMvpPosition}
                onChange={(e) => setNewMvpPosition(e.target.value)}
                />
                <input 
                type="text" 
                placeholder="MVP Year..."
                value={newMvpYear}
                onChange={(e) => setNewMvpYear(e.target.value)}
                />
                <button type="submit" className = "newMVPButton">Add New MVP</button>
            </form>
        </div>
    )
}

export default Createyourmvp