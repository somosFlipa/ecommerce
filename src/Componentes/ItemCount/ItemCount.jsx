import React, { useState } from 'react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/* TOASTIFY */
import { notifyAgregar } from '../../UtilidadesJs/Toastify/Toastify';

import './ItemCount.css';

function ItemCount ({stock, initial, onAdd}) {

  const [count, setCount] = useState(initial);

  function botonMenos() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  
  function agregarBtn() {
    if (count > 1) {
      setCount (count - 1)
    }
  }
  
  return(
    <div className="itemcount">
      <div>
        <button className='btnmym' onClick={() => agregarBtn ()}>-</button>
        <input readOnly value={count} />
        <button className='btnmym' onClick={() => botonMenos()}>+</button>
      </div>

      <button onClick={() => notifyAgregar((count <= stock) && onAdd(count))}>Agregar al carrito</button>
      
      <ToastContainer/>
    </div>
  )
}

export default ItemCount