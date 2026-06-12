import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>BMW Motorrad</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/bikes">Bikes</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;