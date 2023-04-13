import React, { useState } from 'react';
import{InputBase,Button,Box,makeStyles} from '@material-ui/core'
import handleSubmit from '../handle/handleSubmit';
const useStyle=makeStyles({
    container:{
        display:"flex",
        flexDirection:'column'
    }

})

const AddBooks = () => {
    
    const init={
        title:'',
        Author:''
    }
    const[book,addBook]=useState(init)
    const classes=useStyle()
    const handleBookVal=(e)=>{
        addBook({...book,[e.target.name]:e.target.value})

    }
    const handleClick=async()=>{
        try{
            handleSubmit(book);

        }
        catch(error){
            console.log(error)
        }
        

    }
    return (
        <Box className={classes.container}>
            <InputBase placeholder='title' name="title" onChange={(e)=>handleBookVal(e)}></InputBase>
            <InputBase placeholder='author'name='Author'onChange={(e)=>handleBookVal(e)}></InputBase>
            <Button variant={'contained'} color={'primary'} onClick={(e)=>handleClick(e)}>Submit</Button>

        </Box>
    
    );
};

export default AddBooks;