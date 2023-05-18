import Imagen from "../Imagen/Imagen"
import Info from "../Info/Info"
import Boton from "../Boton/Boton"
import './cards.css'
import'./cards.css'
import Contador from "../Contador/Contador"

const Cards = () => {
  return (
    
    <div className="cards">
        <Imagen/>
        <Info nombre="Nike crater impact" precio={48500.00}/> 
        <Contador inicial={1} stock={5}/>
        <Boton/>
        
    </div>
  )
}

export default Cards