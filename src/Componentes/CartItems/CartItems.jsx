import React, { useContext } from 'react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CartContext from '../../UtilidadesJs/cardContext/cardContext'
import Botonglobito from '../Botonglobito/Botonglobito';

/* TOASTIFY */
import { notifyBorrarProducto } from '../../UtilidadesJs/Toastify/Toastify';
import { notifyAgregar } from '../../UtilidadesJs/Toastify/Toastify';

import "./CartItems.css"

function CartItems({item}) {
    const cartContx = useContext (CartContext);

  return (
    <>
     <div className='cart-items'>
        <div className='cart-img-container'>
          <img src={ item?.img} alt="" />
        </div>

        <p>{ item?.title }</p>

        <p>${ item?.price }</p>

        <button className='btn-mas-carrito'>
          <Botonglobito  isButton onBotonglobito={() => notifyAgregar(cartContx.addProduct({...item, quantity: 1}))} >+</Botonglobito>
        </button>

        <div className='btnca-quantity'>
          <Botonglobito> {item?.quantity} </Botonglobito>
        </div> 

        <button className='btnca-1-carrito'>
          <Botonglobito isButton onBotonglobito={() => notifyBorrarProducto(cartContx.removeProduct(item.id))}>-1</Botonglobito>
        </button>

      </div>
      <ToastContainer/>
    </>
  )
}

export default CartItems