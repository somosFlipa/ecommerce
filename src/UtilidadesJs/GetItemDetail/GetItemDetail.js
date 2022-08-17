import { doc, getDoc, getFirestore } from 'firebase/firestore';

function GetItemDetail(id) {

  const db = getFirestore();

  const itemDet = doc (db, "Items", id);
  

  return getDoc(itemDet)
}

export default GetItemDetail