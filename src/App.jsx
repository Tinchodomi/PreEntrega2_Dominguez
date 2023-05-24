import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./TiendaNike/Navbar/Navbar";
import ItemListContainer from "./TiendaNike/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./TiendaNike/ItemDetailContainer/ItemDetailContainer";
import ModoOscuro from "./Clase2/ModoOscuro/ModoOscuro";
//import { CarritoProvider } from "./TiendaNike/Context/ContextCarrito";

function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
          <div>
            <img
              className="fondo"
              src="https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/34650025-e6ae-4bdb-8791-2b4b3f9ffbed___a557edc0961bf27cd51ecfcaca73828e.png"
              alt=""
            />
          </div>
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route path="*" />
          </Routes>
          <ModoOscuro/>
      </BrowserRouter>
    </>
  );
}

export default App;
