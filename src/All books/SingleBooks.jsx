/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

const SingleBooks = ({book}) => {
    const {image,name,author,rating,details,description,category}=book;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{author}</p>
    <h1>Catagori : {category}</h1>
    <p>{details}</p>
    <p>{description}</p>
    <p>Rateing: {rating}</p>
    <div className="card-actions">
        <Link to={`/viewdetails/${name}`}>
        <button className="btn btn-primary">View details</button>
        </Link>
      
    </div>
  </div>
</div>
    );
};

export default SingleBooks;