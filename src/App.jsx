
import './App.css';
import Cards from './Ctes/Card/Cards';
import ItemListContainer from './Ctes/ItemListContainer/ItemListContainer';
import Navbar from './Ctes/Navbar/Navbar';




function App() {
  return (
    <div>
        <p className='p'>3 cuotas sin interes en todo el sitio</p>
        <Navbar/>
        <ItemListContainer running={'Running'}/>
        <div className='style'>
          <Cards/> 
          <Cards/> 
          <Cards/>
        </div>
    </div>
  );
}

export default App;
