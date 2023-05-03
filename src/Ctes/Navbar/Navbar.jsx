
import Car from '../CartWidget/Car'
import './Navbar.css'




const Navbar = () => {
  return (
    <header className='header'>
       <img className='logo' src="https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.35/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg" alt="" /> 
       <nav>
          <ul className='ul'>
            <li className='li'>Hombre</li>
            <li className='li'>Mujer</li>
            <li className='li'>Niño/a</li>
            <li className='li'>Sale</li>
          </ul>
       </nav>
       <Car/> 
       
    </header>
  )
}

export default Navbar
