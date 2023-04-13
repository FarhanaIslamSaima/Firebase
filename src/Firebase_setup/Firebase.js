import { initializeApp } from "firebase/app";
import { getFirestore ,collection} from "firebase/firestore"
let db=false;
export const getDb=()=>{
  if(!db){
    const firebaseConfig = {
      apiKey: "AIzaSyDT5AVyMwlfQqrhn-FFiW4clbwDQ8wOONI",
      authDomain: "feisty-rigging-353903.firebaseapp.com",
      projectId: "feisty-rigging-353903",
      storageBucket: "feisty-rigging-353903.appspot.com",
      messagingSenderId: "789003428657",
      appId: "1:789003428657:web:56431b4ab10ae840b84610",
      measurementId: "G-YGP0T6WEL0"
    };
    const app = initializeApp(firebaseConfig);
    db=getFirestore(app)


  }
  return db;


}


  


  