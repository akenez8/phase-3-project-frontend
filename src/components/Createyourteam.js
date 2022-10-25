function CreateYourTeam(){
    return(
        <div className="form-container">
            <h1>Create Your Team</h1>
            <form>
                <input type="text" placeholder="Listing name..."/>
                <input type="text" placeholder="Description..."/>
                <input type="text" placeholder="Price..."/>
                <input type="text" placeholder="Neighborhood..."/>
                <input type="text" placeholder="Contact Email..."/>
            </form>
        </div>
    )
}

export default CreateYourTeam