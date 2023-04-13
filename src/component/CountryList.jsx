import React, { useEffect, useState } from 'react';
import { findAll } from '../service/books';
import CountryListItem from './CountryListItem';

const CountryList = () => {
    const [books,setbooks]=useState([]);
    const fetchData=async()=>{
        const res=await findAll();
        setbooks([...res]);

    }
    useEffect(()=>{
        fetchData();

    },[])
    return (
       <div>
        {
            books.length>0 && books.map((book)=>(
                <CountryListItem book={book}/>
            ))
        }
       </div>
    );
};

export default CountryList;