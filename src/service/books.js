import { getDocs, collection,onSnapshot } from "firebase/firestore"; 
import { getDb } from "../Firebase_setup/Firebase";

const collection_name='books';

export const findAll=async()=>{
    let res=[]
   const doc_refs=await getDocs(collection(getDb(),collection_name));
   doc_refs.forEach(book => {
    res.push({
        id:book.id,
        ...book.data()
    })
    
   });
   console.log(res);
   
    
    return res;

}
