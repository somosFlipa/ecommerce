import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import DetailItemList from '../../Componentes/DetailItemList/DetailItemList';
import GetItemDetail from '../../UtilidadesJs/GetItemDetail/GetItemDetail';
import Loading from '../../Componentes/Loading/Loading';

import './ItemDetailContainer.css';

import Footer from '../../Componentes/Footer/Footer';



function ItemDetailContainer () {

  const [item, setItem] = useState({});
  const { id } = useParams();
  const  [loading, setLoading] = useState (false);

  useEffect(() => {
    setLoading(true)
    GetItemDetail(id)
      .then(snapshot => {
        setItem( {...snapshot.data(), id: snapshot.id});
      })
      .finally(()=>{
        setLoading(false)
      })
  },[id]);

  return(
    <>
      <div className='greeting'>
        <p>Producto Seleccionado</p>
        {loading && <Loading/>}
        <DetailItemList item={item}/>
      </div>

      <Footer/>
    </>
  )
}

export default ItemDetailContainer