import React from 'react';


const CountryListItem = ({book}) => {
    return (
        <li key={book.id}>
           
            <p>bookName: {book.title}</p>
            <p>BookAuthor: {book.Author}</p>
        </li>
    );
};

export default CountryListItem;