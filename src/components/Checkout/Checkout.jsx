import React, { useContext } from "react";
import "./Checkout.css";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { getDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  //Validacion de datos

  const manejadorFormulario = (event) => {
    event.preventDefault();
    //Verificamos que los campos esten completos
    if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
      setError("Por favor complete todos los campos");
      return;
    }

    //Validamos que los campos de email coincidan

    if (email !== emailConfirm) {
      setError("Los campos del email no coinciden");
      return;
    }

    //1. creamos el objeto de la orden

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: carrito.reduce(
        (total, producto) => total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        //por cad producto del inventario obtengo una ref y a partir de la ref obtengo el doc
        const productoRef = doc(db, "inventario", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;
        //Data es un metodo que permite acceder a la info del Doc
        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
        //modifico el stock y subo la informacion actualizada
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })

          .catch((error) => {
            console.log("Error al generar la orden", error);
            setError("Se produjo un error al generar la orden");
          });
      })

      .catch((error) => {
        console.error("Error al actualizar el stock", error);
        setError("Se produjo un error al actualizar el stock de productos ");
      });
  };

  return (
    <div className="checkoutDiv">
      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad} : $
              {producto.item.precio * producto.cantidad}
            </p>
          </div>
        ))}

        <hr />

        <div className="formDiv">
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="">Apellido</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="">Telefono</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formDiv">
          <label htmlFor="">EmailConfirm</label>
          <input
            type="email"
            value={emailConfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button className="btnProducto" type="submit">
          {" "}
          Finalizar Compra
        </button>
      </form>

      {ordenId && (
        <strong className="">
          Gracias por tu compra! tu numero de Orden es: {ordenId}
        </strong>
      )}
    </div>
  );
};

export default Checkout;
