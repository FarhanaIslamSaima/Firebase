import { getDocs, collection,onSnapshot } from "firebase/firestore"; 
import { getDb } from "../Firebase_setup/Firebase";

const collection_name='books';

export const findAll=async()=>{
    let res=[]
    const col_ref=collection(getDb(),'books')
    onSnapshot(col_ref,(snapshot)=>{
        let books=[];
        snapshot.docs.forEach((doc)=>{
            books.push({...doc.data(),id:doc.id})
        })
        console.log(books)
    })
   
    
    return res;

}
