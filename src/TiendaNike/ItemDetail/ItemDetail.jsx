import { useState } from "react";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregar, Set_agregar] = useState(0);
  const Swal = require('sweetalert2')

  const sumar_agregar = (cantidad) => {
    Set_agregar(cantidad);
    console.log(cantidad);
  };

  const menj = () => {
   
        Swal.fire(

          'Sitio en Construccion'
        )

        
    }

  return (
    <div className="ItemDetail">
      <img className="ItemDetail_imagen" src={img} alt={nombre} />
      <h4>{nombre}</h4>
      <h6>{precio}</h6>
      <p>ID:{id}</p>
      {agregar > 0 ? (
        <Link className="terminar" /*to={"/cart"}*/ onClick={menj}>Terminar Compra</Link>
      ) : (
        <ItemCount inicial={1} stock={stock} funcionAgregar={sumar_agregar} />
      )}
    </div>
  );
};

export default ItemDetail;
