//import animales1 from '../../components/Media/animales/animales1.jpg'
//import calco1 from '../../components/Media/calcos/calco1.jpg'
//import calco2 from '../../components/Media/calcos/calco2.jpg'
//import cantante3 from '../../components/Media/cantantes/cantante3.jpg'

import { collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore';

function GetProducts(category) {
  /*const myPromise = new Promise((resolve, reject) => {
    const productsList = [
      {
        id: 1,
        title: 'Calcos',
        price: 250,
        category: "calcos",
        img:    calco1
      },
      {
        id: 2,
        title: 'Remera Estampada',
        price: 950,
        category: "remeras",
        img:    cantante3
      },
      {
        id: 3,
        title: 'Calcos',
        price: 250,
        category: "calcos",
        img:    calco2
      },
      {
        id: 4,
        title: 'Remera Estampada',
        price: 950,
        category: "remeras",
        img:    animales1
      }
    ];

    const categoryFiltered = category ? productsList.filter (p => p.category === category ) : productsList;
  });*/
  const db = getFirestore();
  const itemsCollection = collection(db, "Items");

  /* ME TRAE SOLO LO QUE FILTRE EN MI QUERY con el WHERE---- el Limit me trae la cantidad de productos marcados entre () */
  const q = category && query(
    itemsCollection,

    where("category", "==", category),

    limit(4)
    
  );

  //return myPromise;
  return getDocs(q || itemsCollection);
}

export default GetProducts