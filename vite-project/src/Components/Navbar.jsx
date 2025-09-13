import {Link} from "react-router-dom"
export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="logo">React</nav>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
  
}
