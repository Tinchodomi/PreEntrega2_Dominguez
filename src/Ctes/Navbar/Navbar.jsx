
import Car from '../CartWidget/Car'

import './Navbar.css'




const Navbar = () => {
  
  const logo = "https://nikearprod.vtexassets.com/assets/vtex/assets-builder/nikearprod.store/2.0.35/icons/Assets_for_off%20platform/swoosh___33f7ffaf2fc124733c2c4a60a12a1160.svg"
  
 

  return (
    <header className='header'>
       <img className='logo' src={logo} alt="" /> 
       <nav>
          <ul className='ul'>
            <li className='li'>Men</li>
            <li className='li'>Women</li>
            <li className='li'>Kids</li>
            <li className='li'>Sale</li>
            <li className='li'>Contact</li>
          </ul>
       </nav>
       <Car/> 
    </header>
  )
}

export default Navbar
