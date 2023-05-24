import Car from "../CartWidget/Car";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <Link to={"/"} className="link_logo">
          <Logo />
        </Link>
        <nav>
          <ul className="ul">
            <li className="li">
              <Link className="link" to={"/item/1"}>
                Hombre
              </Link>
            </li>
            <li className="li">
              <Link className="link" to={"/item/2"}>
                Mujer
              </Link>
            </li>
            <li className="li">
              <Link className="link" to={"/item/3"}>
                Niño/a
              </Link>
            </li>
            <li className="li">
              <Link className="link">Destacados</Link>
            </li>
          </ul>
        </nav>
        <Car />
      </header>
      <section>
        <img
          className="fondo"
          src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/34650025-e6ae-4bdb-8791-2b4b3f9ffbed___a557edc0961bf27cd51ecfcaca73828e.png"
          alt=""
        />
      </section>
    </>
  );
};

export default Navbar;
