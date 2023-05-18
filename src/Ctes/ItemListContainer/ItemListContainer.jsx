import './ItemListContainer.css'
import Itemlist from '../Itemlist/Itemlist'
import { getProductos } from '../../asyncmock'
import { useEffect, useState } from 'react'



const ItemListContainer = ({running}) => {

  const [productos, setProductos] = useState([])

  useEffect( ()=> {

    getProductos()
      .then(respuesta => {setProductos(respuesta)})
      .catch(error => {console.log(error)})

  }, [] )
  
  
  
  return (
    
    <div>

        <h2 className='running'>{running}</h2>
        <Itemlist productos={productos}/>

    </div>
  )
}

export default ItemListContainer