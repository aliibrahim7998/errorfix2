import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      {/* <h1>NAv</h1> */}
      <nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/Products">Products</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </>
  );
}

export default Navbar;
