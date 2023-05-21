import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysCard = ({ toy, setToys, toys }) => {
  const {
    _id,
    name,
    photo,
    sellerName,
    sellerEmail,
    subCategory,
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
        fetch(`https://learning-using-toys-with-joy-server.vercel.app/toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "The Toy has been deleted.", "success");
              const remainingToys = toys.filter(singleToy => singleToy._id !== _id)
              setToys(remainingToys);
            }
          });
      }
    });
  };

  return (
    <>
      <div>
        <div className="grid grid-cols-6 items-center gap-x-3 my-5 rounded-md border border-[#ffcfec]">
          <div className="col-span-2">
            <img
              src={photo}
              alt="toys-image"
              className="rounded-md shadow-2xl p-2"
            />
          </div>
          <div className="col-span-3 space-y-2 p-2">
            <h4 className="text-2xl font-bold">{name}</h4>
            <p className="text-gray-700">{description}</p>
            <div className="flex">
              <span>
                <strong>Seller Name: </strong>
                {sellerName}
              </span>
              <span>
                <strong>Seller Email: </strong>
                {sellerEmail}
              </span>
              <span>
                <strong>Sub-Category: </strong>
                {subCategory}
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
          <div className=" col-span-1 flex flex-col my-3 gap-3 p-5">
            <Link to={`/updatetoy/${_id}`}>
              <button className="w-28 px-5 py-3 flex items-center text-white rounded-md bg-[#ff0099] hover:bg-[#ff00bb]">
                <FaEdit className="me-3"></FaEdit> Edit
              </button>
            </Link>
            <Link>
            <button
              onClick={() => handleDelete(_id)}
              className="w-28 px-5 py-3 flex items-center text-white rounded-md bg-red-600 hover:bg-red-700"
            >
              <FaTrash className="me-3"></FaTrash> Delete
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyToysCard;
