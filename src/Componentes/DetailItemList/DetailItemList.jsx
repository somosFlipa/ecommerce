import React, { useContext } from 'react';

//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';

import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../UtilidadesJs/cardContext/cardContext';

import './DetailItemList.css';

/* TOASTIFY */
//import { notifyBorrarProducto } from '../../Utils/Toastify/Toastify';
//import { notifyBorrasTodo } from '../../Utils/Toastify/Toastify';



function DetailItemList({ item }) {
 

  const cartContx = useContext(CartContext) ;
  
  function añadirCarrito(cantidadAgregada) {
    cartContx.addProduct({quantity: cantidadAgregada, ...item });
  }

  return (
    <div className='cards-producto'>
        <div className='box-producto'>
            <div className='img-producto'>
                <img className='product-img' src={ item?.img } alt="Imagen del producto" />
            </div>
        </div>

        <div className='info-producto'>
            <div className='nombre-producto'>{ item?.title }</div>
            <div className='footer'>${ item?.price }</div>
            <div>
              <ItemCount initial={1} stock={10} onAdd={añadirCarrito} />

              {cartContx.isInCart(item.id) &&
                  <button>
                      <Link to='/carrito'>
                        Terminar compra ({ cartContx.getCartQuantity() } items)
                      </Link>
                  </button>
              }
              {/*<ToastContainer/>*/}
            </div>
        </div>
    </div>
  )
}
export default DetailItemList