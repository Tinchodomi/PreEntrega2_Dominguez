import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  if (cantidadTotal === 0) {
    return (
      <>
        <h2> No hay productos en el carrito</h2>
        <Link to="/"> Ver Productos </Link>
      </>
    );
  }
  return (
    <div className="cartDiv">
      {carrito.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <div className="cartDiv2">

      <h3>Total: ${total} </h3>
      <p>Cantidad total: {cantidadTotal} </p>
      <button className="btnProducto" onClick={() => vaciarCarrito()}>
        {" "}
        Vaciar carrito{" "}
      </button>
      <Link className="btnProducto" to="/checkout">
        {" "}
        Finalizar Compra{" "}
      </Link>
      </div>
    </div>
  );
};

export default Cart;
