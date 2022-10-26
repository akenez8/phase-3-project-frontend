import { NavLink } from "react-router-dom";
import Header from "./Header"


function Navbar() {
  return (
    <div>
      <Header/>
      <NavLink className="nav" to="/">Home</NavLink>
      <NavLink className="nav" to="/AFC">AFC</NavLink>
      <NavLink className="nav" to="/NFC">NFC</NavLink>
    </div>
  );
}

export default Navbar;
