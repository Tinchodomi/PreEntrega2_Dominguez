

import './Item.css'

const Item = ({nombre,id,precio,img}) => {
  return (
    <div className='cards'>
        <img className='imagen' src={img} alt={nombre} />
        <h4>{nombre}</h4>
        <p>{precio}</p>
        <p>{id}</p>
        <button className='boton'>Agregar al carrito</button>

    </div>
  )
}

export default Item