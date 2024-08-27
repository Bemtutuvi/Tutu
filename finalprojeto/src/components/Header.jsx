import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>Tsuba Store</h1>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/oferta">
            <li>Oferta</li>
          </Link>
          <Link to="/produtos">
            <li>Produtos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
