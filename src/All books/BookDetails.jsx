import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

const BookDetails = () => {
    // const details = useLoaderData();
    // const {image,author,rating,description,category}= details;
    const {name} = useParams();
    const [book,setBook]=useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch('/books.json')
        .then(res=>res.json())
        .then(data =>{
            const foundBook = data.find((book)=> book.name === name);
            setBook(foundBook);
            setLoading(false);
        })
    },[name]);

    if(loading) {
        return <div className="text-center">Loading...</div>
    }
 
    return (
        <div className="card lg:card-side bg-amber-100 shadow-xl m-4">
        <figure><img src={book.image} alt="Album"/></figure>
        <div className="card-body">
          <div>
          <h4 className="">{book.name}</h4>
          <h1 className="text-3xl font-bold mb-3">{book.author}</h1>
          </div>
          <p>{book.description}</p>
          
          <p className="">Categori : <span className="font-bold"> {book.category} </span></p>
          <p>Rateing: <span className="font-bold"> {book.rating} </span></p>
                   
        </div>
      </div>
    );
};

export default BookDetails;

// ------------------------------------- from chat Gpt-----------------------------


// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const BookDetails = () => {
//   const { name } = useParams();
//   const [book, setBook] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Fetch the book data from the JSON file
//     fetch('/books.json')
//       .then((response) => response.json())
//       .then((data) => {
//         // Find the book with the matching name
//         const foundBook = data.find((book) => book.name === name);
//         if (foundBook) {
//           setBook(foundBook);
//         } else {
//           setError('Book not found');
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching book data:', error);
//         setError('Error fetching book data');
//       });
//   }, [name]);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!book) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="card lg:card-side bg-base-100 shadow-xl">
//         <figure>
//           <img src={book.image} alt={book.name} />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">{book.name}</h2>
//           <p>Author: {book.author}</p>
//           <h1>Category: {book.category}</h1>
//           <p>{book.details}</p>
//           <p>{book.description}</p>
//           <p>Rating: {book.rating}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDetails;
