import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="menu">
      <ul>
        <Link to="/" className="random">
          Random dish
        </Link>
        <Link to="/favourites" className="favourite">
          Favourites
        </Link>
      </ul>
    </header>
  );
}
