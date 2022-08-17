import React, { useContext, useState } from 'react'

import CartContext from '../../UtilidadesJs/cardContext/cardContext';

import { addDoc, collection, getFirestore } from  "firebase/firestore"
import { Link } from 'react-router-dom';

import Loading from "../../Componentes/Loading/Loading"

import Footer from '../../Componentes/Footer/Footer';

/* TOASTIFY */
//import { notifyCompra } from '../../Utils/Toastify/Toastify';

const TerminarCompra = () => {
    const db = getFirestore();

    const [load, setLoad] = useState(false)

    const [ orderID, setOrderID] = useState()

    const {getTotalPrice, products, clear} = useContext(CartContext)

    const [buyer , setBuyer] = useState({
        Nombre:"",
        Email:"",
        Telefono:""
    });

    const {Nombre, Email, Telefono} = buyer

    const botonCambio = (e) =>{
        setBuyer(({...buyer, [e.target.name]:e.target.value}));
    }

    const generarOrden = async (data) => {
        setLoad(true)
        try{
            const col = collection(db, "Orders");
            const order = await addDoc(col, data);
            setOrderID(order.id)
            clear()
            setLoad(false)
                
        }

        catch(error){
            console.log(error);
        }
    }

    const botonEnviar = (e) => {
        e.preventDefault()
        //console.log("buyer", buyer)

        const date = new Date ()
        //console.log("date", date)

        const items = products.map(e=> {return {id:e.id ,title:e.title , price:e.price}})

        const total = getTotalPrice()

        const data = {buyer, items, date, total}

        console.log("data", data)

        generarOrden(data)
    }

    

  return (
    <>
        <h1> Finalizar compra </h1>

        { load ? <Loading/>
           : (!orderID &&
                <div>
                    <h2> Datos de la Facturación </h2>
                
                    <form onSubmit={botonEnviar}>
                        <input type="text" name="Nombre" placeholder="Nombre y Apellido Completo" value={Nombre} onChange={botonCambio} required/>
                    
                        <input type="number" name="Telefono" placeholder="Telefono" value={Telefono} onChange={botonCambio} required/>
                
                        <input type="email" name="Email" placeholder="Email" value={Email} onChange={botonCambio} required/>
                    
                        <input className="btn-finalizar-compra" type="submit" value="finalizar compra"/>
                    </form>
                </div>
            )
        }
        
        <div>
            {
                orderID &&(
                    <div>
                        <h2>Compra Finalizada con Exito</h2>
                        <p>{`Su código de compra es: ${orderID}`}</p>
                        <Link to="/"><h5>Volver al inicio</h5></Link>
                    </div>
                )
            }
        </div>

        <Footer/>
    </>
  )
}

export default TerminarCompra