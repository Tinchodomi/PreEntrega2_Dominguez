
import "./ItemDetail.css";
import Boton from "../../Clase1/Boton/Boton"

const ItemDetail = ({ id, nombre, precio, img }) => {
  return (
    <div className="ItemDetail">
      <img className="ItemDetail_imagen" src={img} alt={nombre} />
      <h4>{nombre}</h4>
      <h6>{precio}</h6>
      <p>ID:{id}</p>
      <Boton/>
    </div>
  );
};

export default ItemDetail;
