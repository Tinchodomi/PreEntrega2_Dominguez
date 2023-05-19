
import './info.css'

const Info = ({nombre,precio}) => {
  return (
    <div className="info">
        <h5>{nombre}</h5>
        <h6>${precio}</h6> 
    </div>
  )
}

export default Info