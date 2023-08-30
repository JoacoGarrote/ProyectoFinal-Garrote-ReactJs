import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img
            className="brand-img"
            src="/images/kousynlogoblanco.png"
            alt="Logotipo de la tienda, Kousyn Burgers"
          />
        </Link>
        <ul className="navbar-productos">
          <li className="link-navbar">
            <Link to={`/category/${"Hamburguesas"}`}>Hamburguesas</Link>
          </li>
          <li className="link-navbar">
            <Link to={`/category/${"Entradas"}`}>Entradas</Link>
          </li>
          <li className="link-navbar">
            <Link to={`/category/${"Bebidas"}`}>Bebidas</Link>
          </li>
        </ul>
        <ul className="navbar-about">
          <li className="link-navbar">Sobre nosotros</li>
          <li className="link-navbar">Take away</li>
        </ul>
        <ul>
          <li className="navbar-cart">
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
