import {addDoc,collection} from 'firebase/firestore'
import { getDb } from '../Firebase_setup/Firebase';

const handleSubmit=(book)=>{
    console.log(book)
    const ref=collection(getDb(),'books');
  
    try{
        addDoc(ref,{
            title:book.title,
            Author:book.Author
        })
    }
    catch(err){
        console.log(err)
    }

}
export default handleSubmit;