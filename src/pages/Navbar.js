import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/favourites" className="favourites">
        Favourites
      </Link>
      <ul>
        <li className="home">
          <Link to="/">Home</Link>
        </li>
        <li className="login">
          <Link to="/login">Login</Link>
        </li>
        <li className="signup">
          <Link to="/SignUp">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}
