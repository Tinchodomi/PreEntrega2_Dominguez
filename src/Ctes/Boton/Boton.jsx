
import { useRef } from 'react'
import './boton.css'


const Boton = () => {
  
  const ref = useRef(null)

  const agregado = () => {

    if(ref.current){


        ref.current.textContent = 'Agregado!'

    }

  }


  return (
  
    <button onClick={agregado} ref={ref} className='boton'>Agregar al carrito</button>
    
  )
}

export default Boton