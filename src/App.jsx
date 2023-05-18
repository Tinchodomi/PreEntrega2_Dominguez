
import './App.css';
import Cards from './Ctes/Card/Cards';
import ItemListContainer from './Ctes/ItemListContainer/ItemListContainer';
import ModoOscuro from './Ctes/ModoOscuro/ModoOscuro';
import Navbar from './Ctes/Navbar/Navbar';
import Promesas from './Ctes/Promesas/Promesas';
import Fetch from './Ctes/Fetch/Fetch';


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
        <ModoOscuro/>
        <Promesas/>
        <Fetch/>
  
    </div>
  );
}

export default App;
