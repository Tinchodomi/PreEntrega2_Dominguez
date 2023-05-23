import React, { useState } from "react";
import './ItemCount.css'
const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);
  const Swal = require("sweetalert2");

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire("Stock máximo");
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="contador">
        <button className="btn" onClick={decrementar}> - </button>
        <p>{contador}</p>
        <button className="btn" onClick={incrementar}> + </button>
      </div>
      <button className="boton" onClick={()=>{funcionAgregar(contador)}}>Agregar al carrito</button>
    </>
  );
};

export default ItemCount;
