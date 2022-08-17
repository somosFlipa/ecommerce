import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '../../Componentes/Footer/Footer';

import CartContext from '../../UtilidadesJs/cardContext/cardContext'
import CartItems from '../../Componentes/CartItems/CartItems';

/* TOASTIFY */
import { notifyBorrasTodo } from '../../UtilidadesJs/Toastify/Toastify';

function Carrito() {

  const cartCtxt = useContext (CartContext)

  return (
    <>
      <div className='cart'>
        {cartCtxt.products.map(p => <CartItems item={p} key={p.id}/>)}
        {cartCtxt.products.length !== 0 ?
          <div className='total-container'>
            <p>Precio total: ${cartCtxt.getTotalPrice()}</p>
            <Link to="/terminarcompra">
              <button>Terminar compra</button>
            </Link>
            <button onClick={() => notifyBorrasTodo(cartCtxt.clear())}>Borrar Carrito</button>
          </div> :
          <>
            <h2>No hay productos en el carrito</h2>
            <button className='button-brown'>
              <Link to="/">Ir al inicio</Link>
            </button>
          </>
        }
        <ToastContainer/>
        
      </div>

      <Footer/>
    </>
  )
}

export default Carrito