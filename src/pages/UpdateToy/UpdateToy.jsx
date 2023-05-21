import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { _id, name, photo, price, quantity, description } = toy;
  const navigate = useNavigate();

  // console.log(toy)
  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToy = {
      name,
      photo,
      price,
      quantity,
      description,
    };
    console.log(updatedToy);
    // send to toys data to server
    fetch(`http://localhost:5000/toy/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully!!!",
            icon: "success",
            confirmButtonText: "Okay",
          });
          navigate('/mytoys')
        }
      });
  };

  return (
    <>
      <div className="w-10/12 mx-auto">
        {/* Form Title */}
        <div>
          <h2 className="text-2xl font-bold text-center text-[#ff0099] mt-6">
            Update : {name}
          </h2>
        </div>

        <form onSubmit={handleUpdateToy}>
          <div className="bg-[#ffedf8] grid grid-cols-2 gap-x-10 gap-y-5 my-10 p-10 rounded">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-md ">Toy Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
                defaultValue={name}
                placeholder="Enter toy name..."
                className="input input-bordered border-[#ff0099] w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Toy's Photo URL</span>
              </label>
              <input
                required
                name="photo"
                type="url"
                defaultValue={photo}
                placeholder="Paste image url..."
                className="input input-bordered border-[#ff0099] w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                required
                name="price"
                type="text"
                defaultValue={price}
                placeholder="Enter price..."
                className="input input-bordered border-[#ff0099] w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                required
                name="quantity"
                type="text"
                defaultValue={quantity}
                placeholder="Enter quantity..."
                className="input input-bordered border-[#ff0099] w-full"
              />
            </div>
            <div className="form-control w-full col-span-2">
              <label className="label">
                <span className="label-text">Details Description</span>
              </label>
              <textarea
                required
                defaultValue={description}
                className="textarea textarea-bordered border-[#ff0099]"
                placeholder="Describe toy's details information..."
                name="description"
              ></textarea>
            </div>
            <div className="col-span-2">
              <input
                type="submit"
                value={"Update"}
                className="btn w-full bg-[#ff0099] hover:bg-[#ff00bb] border-[#ff0099]"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateToy;
