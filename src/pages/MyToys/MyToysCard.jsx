import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const MyToysCard = ({ toy }) => {
  const {
    name,
    photo,
    sellerName,
    sellerEmail,
    rating,
    quantity,
    price,
    description,
  } = toy;

  return (
    <>
      <div>
        <div className="grid grid-cols-9 items-center gap-x-3 my-10 rounded-md border border-[#ffcfec]">
          <div className="col-span-2">
            <img
              src={photo}
              alt="toys-image"
              className="rounded-md shadow-2xl p-2"
            />
          </div>
          <div className="col-span-6 space-y-2 p-2">
            <h4 className="text-2xl font-bold">{name}</h4>
            <p className="text-gray-700">{description}</p>
            <div className="flex justify-between">
              <span>
                <strong>Seller Name: </strong>
                {sellerName}
              </span>
              <span>
                <strong>Seller Email: </strong>
                {sellerEmail}
              </span>
              <span>
                <strong>Quantity: </strong>
                {quantity}
              </span>
              <span>
                <strong>Price: </strong>
                {price}
              </span>
              <span>
                <strong>Rating: </strong>
                {rating}
              </span>
            </div>
          </div>
          <div className="col-span-1">
            <div className=" flex flex-col space-y-5 px-3">
              <button className="btn bg-[#ff0099] border-none"><FaEdit className="me-3"></FaEdit> Edit</button>
              <button className="btn bg-red-600 border-none"> <FaTrash className="me-3"></FaTrash> Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyToysCard;
