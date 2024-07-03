// import React from 'react';

import { useEffect, useState } from "react";
import SingleBooks from "./SingleBooks";

const AllBooks = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('/books.json')
        .then(res=> res.json())
        .then(data => setBooks(data));
    },[])
    return (
        <div>
            <h2>Our Book List</h2>
            <p>Totall: {books.length}</p>
            <div className="m-6 gap-6 grid lg:grid-cols-3 md:grid-cols-2">
                {
                    books.map(book => <SingleBooks
                    key={book.name}
                    book={book}>

                    </SingleBooks>)
                }
            </div>
        </div>
    );
};

export default AllBooks;