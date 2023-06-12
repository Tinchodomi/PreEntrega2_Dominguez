import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CarritoContext);
  return (
    <div className="contenedorItemcart">
      <img className="contenedorImg" src={item.img} alt="" />

      <div className="contenedorCart2">
        <h2> {item.nombre} </h2>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio * cantidad} </p>
        <button
          className="btnProducto"
          onClick={() => eliminarProducto(item.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
