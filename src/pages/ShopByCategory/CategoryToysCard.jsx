import React from "react";

const CategoryToysCard = ({ toy }) => {
  // console.log(toy)
  const {name, photo, price, rating} = toy;
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
            <button className="btn bg-[#ff0099] border-[#ff0099] w-full">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryToysCard;
