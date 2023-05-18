import { useState, useEffect } from "react";
import "./Contador.css";


const Contador = ({ stock, inicial }) => {
  
  const [contador, setContador] = useState(inicial);
  const [color, setColor] = useState('black')
  const Swal = require('sweetalert2')

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else{

        Swal.fire(

          'Stock máximo'
        )
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  // con useEfect cambiamos el color del + y la cantidad de stock a color rojo cuando se llego al maximo
  useEffect( () => {

    if(contador >= 5){

        setColor('red')
    }


  },[contador])

  return (
    <div className="contador">
      <button onClick={decrementar} className="btn">-</button>
      <p style={{color:color}}>{contador}</p>
      <button style={{color:color}} onClick={incrementar} className="btn">+</button>
    </div>
  );
};

export default Contador;
