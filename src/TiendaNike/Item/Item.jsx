

import "./Item.css";
import Boton from "../../Clase1/Boton/Boton"
import { Link } from "react-router-dom";

const Item = ({ nombre, id, precio, img }) => {
  return (
    <div className="item">
      <img className="item__imagen" src={img} alt={nombre} />
      <h4 className="nombre">{nombre}</h4>
      <h6 className="precio">{precio}</h6>
      <p className="id">ID:{id}</p>
      <Boton/>
      <Link className="detalles" to={`/item/${id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;



