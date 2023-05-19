import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyToysCard = ({ toy }) => {
  const {
    _id,
    name,
    photo,
    sellerName,
    sellerEmail,
    rating,
    quantity,
    price,
    description,
  } = toy;

  //   Handle Delete function
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toy/${_id}`, {
            method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The Toy has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-6 items-center gap-x-3 my-10 rounded-md border border-[#ffcfec]">
          <div className="col-span-2">
            <img
              src={photo}
              alt="toys-image"
              className="rounded-md shadow-2xl p-2"
            />
          </div>
          <div className="col-span-4 space-y-2 p-2">
            <h4 className="text-2xl font-bold">{name}</h4>
            <p className="text-gray-700">{description}</p>
            <div className="grid grid-cols-1">
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
              <div className=" flex items-center justify-between my-3 gap-3">
                <button className="btn bg-[#ff0099] border-none w-1/3 ">
                  <FaEdit className="me-3"></FaEdit> Edit
                </button>
                <button
                  onClick={() => handleDelete(_id)}
                  className="btn bg-red-600 border-none w-1/3 "
                >
                  {" "}
                  <FaTrash className="me-3"></FaTrash> Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyToysCard;
