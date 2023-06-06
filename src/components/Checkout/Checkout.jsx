import React, { useContext } from 'react'
import './Checkout.css'
import { db } from '../../services/config'
import { collection, addDoc } from 'firebase/firestore'
import { useState, } from 'react'
import { CarritoContext } from '../../context/CarritoContext'


const Checkout = () => {

    const {carrito, vaciarCarrito} = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirm, setEmailConfirm] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");
    
    //Validacion de datos

    const manejadorFormulario = (event) =>{

        event.preventDefault();
        //Verificamos que los campos esten completos
        if(!nombre || !apellido || !telefono || !email || !emailConfirm){
            setError('Por favor complete todos los campos')
            return;
        }

        //Validamos que los campos de email coincidan

        if(email !== emailConfirm){

            setError('Los campos del email no coinciden')
            return;

        }

        //1. creamos el objeto de la orden

        const orden = {

            items:  carrito.map(producto => ( {

                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.item.cantidad

            } )),
            total: carrito.reduce((total, producto)=> total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email
        }

        // 2. Guardamos la orden en la base de datos:

        addDoc(collection(db,"ordenes"),orden)
        .then(docRef => {
            setOrdenId(docRef.id)
            vaciarCarrito()
        })

        .catch(error => {
            console.log('Error al generar la orden', error)
            setError('Se produjo un error al generar la orden')
        })

    }
  
    return (
    <div>

        <h2>Checkout</h2>
        <form onSubmit={manejadorFormulario}>

            {carrito.map(producto => (

                <div key={producto.item.id}>
                    <p>
                        {producto.item.nombre} x {producto.cantidad}
                    </p>
                    <p> Precio $: {producto.item.precio}</p>
                </div>

            ))}

            <hr />

            <div>
                <label htmlFor="">Nombre</label>
                <input type="text"  value={nombre} onChange={(e=>setNombre(e.target.value))}/>
            </div>
            <div>
            <label htmlFor="">Apellido</label>
                <input type="text"  value={apellido} onChange={(e=>setApellido(e.target.value))}/>
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="text"  value={telefono} onChange={(e=>setTelefono(e.target.value))}/>
            </div>
            <div>
            <label htmlFor="">Email</label>
                <input type="email"  value={email} onChange={(e=>setEmail(e.target.value))}/>
            </div>
            <div>
            <label htmlFor="">EmailConfirm</label>
                <input type="email"  value={emailConfirm} onChange={(e=>setEmailConfirm(e.target.value))}/>
            </div>
            {
                error && <p style={{color:'red'}}>{error}</p>
            }
            <button type='submit'> Finalizar Compra</button>
        </form>

        {

            ordenId && (

                <strong>Gracias por tu compra! tu numero de Orden es: {ordenId}</strong>
            )

        }
    </div>
  )
}

export default Checkout