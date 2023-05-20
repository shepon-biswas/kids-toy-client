import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
    const [toy] = useLoaderData();
  return (
    <>
      <div className=" w-10/12 mx-auto">
        {/* Banner Section */}
        <div className="bg-[#FFCCEB] h-48 rounded-md mb-14 flex justify-center items-center">
          <h2 className="uppercase text-2xl font-bold text-center text-[#ff0099]">
            Toy Details
          </h2>
        </div>
        {/* Toy Details Information */}
        <div>
        <div className="grid grid-cols-6 items-center gap-x-3 my-10 rounded-md border border-[#ffcfec]">
          <div className="col-span-2">
            <img
              src="https://i.ibb.co/9ZLfLdp/magna-tiles-educational-toys-for-kids1.jpg"
              alt="toys-image"
              className="rounded-md shadow-md p-2"
            />
          </div>
          <div className="col-span-4 space-y-2 p-2">
            <h4 className="text-2xl font-bold">{toy?.name}</h4>
            <p className="text-gray-700">{toy.description}</p>
            <div className="grid grid-cols-1">
              <span>
                <strong>Seller Name: </strong>
                {toy.sellerName}
              </span>
              <span>
                <strong>Seller Email: </strong>
                {toy.sellerEmail}
              </span>
              <span>
                <strong>Quantity: </strong>
                {toy.quantity}
              </span>
              <span>
                <strong>Price: </strong>
                {toy.price}
              </span>
              <span>
                <strong>Rating: </strong>
                {toy.rating}
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
