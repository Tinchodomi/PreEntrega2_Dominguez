import Car from "../CartWidget/Car";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {


  return (
    <header className="header">
        <Link to={'/'} className="link_logo">
            <h1  className="h1_logo">Nike</h1>
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
              Sale
            </Link>
          </li>
        </ul>
      </nav>
      <Car />
    </header>
  );
};

export default Navbar;
