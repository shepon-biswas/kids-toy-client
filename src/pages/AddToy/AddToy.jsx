import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [selectValue, setSelectValue] = useState();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const subCategory = selectValue;
    const description = form.description.value;

    const toys = {
      name,
      photo,
      sellerName,
      sellerEmail,
      price,
      rating,
      quantity,
      subCategory,
      description
    };
    console.log(toys);
    // send to toys data to server
    fetch(`http://localhost:5000/addtoy`,{
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(toys)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Toy Added Successfully!!!',
          icon: 'success',
          confirmButtonText: 'Okay'
        })
      }
    })


  };
  // handleSelectOptions
  const handleSelectOptions = (event) => {
    const optionValue = event.target.value;
    setSelectValue(optionValue);
  };
  return (
    <>
      <div className="w-10/12 mx-auto">
        {/* Form Title */}
        <div>
          <h2 className="text-2xl font-bold text-center text-[#ff0099] mt-6">
            Add A Toy
          </h2>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="bg-[#ffedf8] grid grid-cols-2 gap-x-10 gap-y-5 my-10 p-10 rounded">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-md ">Toy Name</span>
              </label>
              <input
                required
                name="name"
                type="text"
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
                placeholder="Paste image url..."
                className="input input-bordered border-[#ff0099] w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                required
                defaultValue={user?.displayName}
                name="sellerName"
                type="text"
                placeholder="Seller Name..."
                className="input input-bordered border-[#ff0099] w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                readOnly
                defaultValue={user?.email}
                name="sellerEmail"
                type="text"
                placeholder="Seller Email..."
                className="input input-bordered border-[#ff0099] w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Sub-Category</span>
              </label>
              <select
                required
                onChange={handleSelectOptions}
                className="select select-bordered border-[#ff0099] w-full"
              >
                <option disabled selected>
                  Select a sub category
                </option>
                <option value="math">Math Toys</option>
                <option value="science">Science Toys</option>
                <option value="intelligence">Intelligence Toys</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                required
                name="price"
                type="text"
                placeholder="Enter price..."
                className="input input-bordered border-[#ff0099] w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                required
                name="rating"
                type="text"
                placeholder="Enter rating..."
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
                className="textarea textarea-bordered border-[#ff0099]"
                placeholder="Describe toy's details information..."
                name="description"
              ></textarea>
            </div>
            <div className="col-span-2">
              <input
                type="submit"
                value={"Add A Toy"}
                className="btn w-full bg-[#ff0099] hover:bg-[#ff00bb] border-[#ff0099]"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddToy;
