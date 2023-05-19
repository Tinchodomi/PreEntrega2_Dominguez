import Item from "../Item/Item";
import "./Itemlist.css";

const Itemlist = ({ productos }) => {
  return (
    <div className="ItemList">
      {productos.map((prod, index) => (
        <Item key={index} {...prod} />
      ))}
    </div>
  );
};

export default Itemlist;
