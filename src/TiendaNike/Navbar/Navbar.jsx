import Car from "../CartWidget/Car";
import Logo from "../Logo/Logo";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <Link to={"/"} className="link_logo">
        <Logo/>
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
            <Link className="link">
             Destacados
            </Link>
          </li>
        </ul>
      </nav>
      <Car />
    </header>
  );
};

export default Navbar;
