import "./ItemListContainer.css";
import Itemlist from "../Itemlist/Itemlist";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProductos;

    funcionProductos(idCategoria)
      .then((respuesta) => {
        setProductos(respuesta);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idCategoria]);

  return (
    <div className="ItemListContainer">
      <Itemlist productos={productos} />
    </div>
  );
};

export default ItemListContainer;
