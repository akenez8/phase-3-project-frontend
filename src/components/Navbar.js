import { NavLink } from "react-router-dom";
import Header from "./Header"

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navbar() {
  return (
    <div>
      <Header/>
      <NavLink className="nav" style={{ marginRight: "10px" }} to="/">Home</NavLink>
      <NavLink className="nav" style={{ marginRight: "10px" }} to="/AFC">AFC</NavLink>
      <NavLink className="nav" style={{ marginRight: "10px" }} to="/NFC">NFC</NavLink>
      <NavLink className="nav" style={{ marginRight: "10px" }} to="/Createyourteam"> Create Your Team</NavLink>
    </div>
  );
}

export default Navbar;
