import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemsList from '../../Componentes/ItemsList/ItemsList';
import GetProducts from '../../UtilidadesJs/GetProduct/GetProduct';

import '../ItemListContainer/ItemListContainer.css';

import Footer from '../../Componentes/Footer/Footer';


function ItemListContainer () {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams ();

  useEffect(() => {

    /*getDocs(q, itemCollection)
      .then(snapshot =>{
        console.log(snapshot.docs.map( doc => { return{ ...doc.data(), id: doc.id }}));
    })*/

    GetProducts(categoryId)
      .then(snapshot => {
        setProducts(snapshot.docs.map( doc => { 
          return{ ...doc.data(), id: doc.id }
        }));;
      })
  },[categoryId]);

  return(
    <>
      <div className='greeting'>
        <p> Productos</p>
        <ItemsList items={products}/>
      </div>

      <Footer/>
    </>
  )
}

export default ItemListContainer