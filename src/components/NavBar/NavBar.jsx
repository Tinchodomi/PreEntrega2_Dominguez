import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom" 
import Logo from "../Logo/Logo"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
          <Logo/>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className='navlink' to={`/categoria/2`}> Hombre </NavLink>
          </li>

          <li>
            <NavLink className='navlink' to={`/categoria/3`}> Mujer </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar