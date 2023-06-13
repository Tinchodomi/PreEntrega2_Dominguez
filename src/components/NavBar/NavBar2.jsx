import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="containerNav">
        <Link to={"/"}>
          <Logo />
        </Link>
       
        <Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav>
              <NavLink className="navlink" to={`/categoria/1`}>
                Hombre
              </NavLink>
              <NavLink className="navlink" to={`/categoria/2`}>
                Mujer
              </NavLink>
              <NavLink className="navlink" to={`/categoria/3`}>
                Niños
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Brand>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
