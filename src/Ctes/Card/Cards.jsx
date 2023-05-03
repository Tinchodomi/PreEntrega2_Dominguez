import Imagen from "../Imagen/Imagen"
import Info from "../Info/Info"
import Boton from "../Boton/Boton"
import './cards.css'
import'./cards.css'

const Cards = () => {
  return (
    
    <div className="cards">
        <Imagen/>
        <Info/> 
        <Boton/>
    </div>
  )
}

export default Cards