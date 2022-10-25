import { NavLink } from "react-router-dom";
import Header from "./Header"

function Navbar() {
  return (
    <div>
      <Header/>
      <NavLink className="nav" style={{ marginRight: "10px" }} to="/">Home</NavLink>
      <NavLink className="nav" style={{ marginRight: "10px" }} to="/AFC">AFC</NavLink>
      <NavLink className="nav" style={{ marginRight: "10px" }} to="/NFC">NFC</NavLink>
    </div>
  );
}

export default Navbar;
