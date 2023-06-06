import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import './CartItem.css'

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);
  return (
    <div className="divCart">
        <h5> {item.nombre} </h5>
        <img className="imgCart" src={item.img} alt="" />
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio} </p>
        <button onClick={()=> eliminarProducto(item.id)}> Eliminar </button>

    </div>
  )
}

export default CartItem