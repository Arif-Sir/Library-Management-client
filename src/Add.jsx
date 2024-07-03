// import React from 'react';

import { useContext } from "react";
import { Authcontext } from "./Provider/AuthProvider";

const Add = () => {
    const {user} = useContext(Authcontext);
    const handelAdd = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const author = form.author.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const addBooks={name,photo,quantity,category,author,description,rating};
        console.log(addBooks);

    }
    return (
        <div>
            <div className="text-5xl font-semibold italic text-center mt-5 text-amber-500">
                Add your Book
            </div>
           
<div className="flex justify-center items-center  mt-10">
  <form onSubmit={handelAdd} className="bg-gray-300 p-4 max-w">
    <div className="form-control ml-5">
      <div className="flex gap-6">
        <div>
          <div >
            <label className="label">
              <span className="label-text">Books Name</span>
            </label>
            <label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label>
              <input
                type="text"
                name="category"
                placeholder="Choose your type"
                className="input input-bordered"
                required
              />
            </label>
          </div>
        </div>
        <div>
          <div>
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <label>
              <input
                type="text"
                name="author"
                placeholder="Author's Name"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <label>
              <input
                type="text"
                name="description"
                placeholder="Book Description"
                className="input input-bordered"
                required
              />
            </label>
          </div>
          <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <label>
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </label>
      </div>
        </div>
      </div>
      
      <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label>
              <input
                type="number"        
                name="rating"
                min="1"
            max="5"
                placeholder="Rate the book"
                className="input input-bordered w-40"
                required
              />
            </label>
          </div>
    </div>
    <input
      type="submit"
      value="Add Coffee"
      className="btn mt-8 bg-blue-600 mx-40 w-40"
    />
  </form>
</div>
        </div>
    );
};

export default Add;