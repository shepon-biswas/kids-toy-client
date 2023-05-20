import React from "react";
import { Link } from "react-router-dom";

const CategoryToysCard = ({ toy }) => {
  // console.log(toy)
  const {_id, name, photo, price, rating} = toy;
  return (
    <>
      <div className="card  w-96 bg-base-100 shadow-xl">
        <figure>
          <img
          className="w-full h-64 object-cover"
            src={photo}
            alt="toy-image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p><span className="font-bold">Price</span> : ${price}</p>
          <p><span className="font-bold">Ratings:</span> : {rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/toydetails/${_id}`}>
            <button className="btn bg-[#ff0099] border-[#ff0099] w-full">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryToysCard;
