/* import { createContext, useState } from "react";

export const carritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
  console.log(carrito);

  const [carrito, setCarrito] = useState([]);
  const agregarProducto = ({ item, cantidad }) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });

      setCarrito(carritoActualizado);
    }
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((prod) => prod.id !== id);

    setCarrito(carritoActualizado);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };



};
 */