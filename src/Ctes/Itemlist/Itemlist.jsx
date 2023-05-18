

import Item from '../Item/Item'
import './Itemlist.css'

const Itemlist = ({productos}) => {
  return (
    
    <div className='itemlist_cont' >

        {productos.map((prod,index) => <Item key={index} {...prod}/>)}


    </div>
  )
}

export default Itemlist