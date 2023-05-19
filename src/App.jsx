import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./TiendaNike/Navbar/Navbar";
import ItemListContainer from "./TiendaNike/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./TiendaNike/ItemDetailContainer/ItemDetailContainer";
import ModoOscuro from "./TiendaNike/ModoOscuro/ModoOscuro";

function App() {
  
  
  
  
  
  
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
          <Route path="/" element={<ItemListContainer />} />
        </Routes>
        <ModoOscuro/>
      </BrowserRouter>
    </>
  );
}

export default App;
