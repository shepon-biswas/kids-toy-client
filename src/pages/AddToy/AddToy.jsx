import React from "react";

const AddToy = () => {
  return (
    <>
      <div className="w-10/12 mx-auto">
        {/* Form Title */}
        <div>
          <h2 className="text-2xl font-bold text-center text-[#ff0099] mt-6">
            Add A Toy
          </h2>
        </div>
        <div className="bg-[#ffedf8] grid grid-cols-2 gap-x-10 gap-y-5 my-10 p-10 rounded">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-md ">Toy Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter toy name..."
              className="input input-bordered border-[#ff0099] w-full"
              name="name"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Toy's Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Paste image url..."
              className="input input-bordered border-[#ff0099] w-full"
              name="photo"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              placeholder="Seller Name..."
              className="input input-bordered border-[#ff0099] w-full"
              name="sellerName"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              placeholder="Seller Email..."
              className="input input-bordered border-[#ff0099] w-full"
              name="sellerEmail"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Sub-Category</span>
            </label>
            <select className="select select-bordered border-[#ff0099] w-full">
              <option disabled selected>
                Select a sub-category
              </option>
              <option>Math Toys</option>
              <option>Science Toys</option>
              <option>Intelligence Toys</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="Enter price..."
              className="input input-bordered border-[#ff0099] w-full"
              name="price"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Enter rating..."
              className="input input-bordered border-[#ff0099] w-full"
              name="rating"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Enter quantity..."
              className="input input-bordered border-[#ff0099] w-full"
              name="quantity"
            />
          </div>
          <div className="form-control w-full col-span-2">
            <label className="label">
              <span className="label-text">Details Description</span>
            </label>
            <textarea
              className="textarea textarea-bordered border-[#ff0099]"
              placeholder="Describe toy's details information..."
              name="description"
            ></textarea>
          </div>
          <div className="col-span-2">
            <button className="btn w-full bg-[#ff0099] hover:bg-[#ff00bb] border-[#ff0099]">
              Add A Toy
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToy;
