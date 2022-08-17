import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CartContext from '../../UtilidadesJs/cardContext/cardContext';
//import ItemCount from '../ItemCount/ItemCount';

import Botonglobito from "../Botonglobito/Botonglobito";

/* TOASTIFY */
import { notifyAgregar } from '../../UtilidadesJs/Toastify/Toastify';
import { notifyBorrarProducto } from '../../UtilidadesJs/Toastify/Toastify';

import './Product.css';

function Product({ item }) {

  const cartContx = useContext (CartContext)

  return (
    <div className='cards-productos-catalogo'>
      <div className='box-productos-catalogo'>
        <div className='img-productos-catalogo'>
          <img className='productos-catalogo-img' src={ item?.img } alt="Imagen del producto" />
        </div>
        <div className='nombre-productos-catalogo'>{ item?.title }</div>
        <div className='footer-catalogo'>${ item?.price }</div>
        <div className='btn-categoria-item'>
          <Link to={"/item/" + item?.id}>Saber Más!</Link>
        </div >

        <button className='btn-menos-globito'>
          <Botonglobito isButton onBotonglobito={() => notifyBorrarProducto(cartContx.removeProduct(item.id))}>-1</Botonglobito>
        </button>
        
        <button className='btn-mas-globito'>
          <Botonglobito  isButton onBotonglobito={() => notifyAgregar(cartContx.addProduct({...item, quantity: 1}))} >+</Botonglobito>
        </button>

      </div>
      <ToastContainer/>
    </div>
  )
}

export default Product