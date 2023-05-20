import React from "react";
import { FaEye } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  return (
    <>
      <div className="w-10/12 mx-auto my-10 ">
        <div className="overflow-x-auto w-full">
          <table className="table w-full striped">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Image</th>
                <th>Name</th>
                <th>Sub-Category</th>
                <th>Seller</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Data Row Start */}
              {allToys?.map((toy, index) => (
                <tr key={toy._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="w-12 rounded-full shadow-md">
                        <img src={toy.photo} alt="toy-image" />
                      </div>
                    </div>
                  </td>
                  <td>{toy.name}</td>
                  <td>{toy.subCategory}</td>
                  <td>{toy.sellerName}</td>
                  <td>{toy.price}</td>
                  <td>{toy.quantity}</td>
                  <td>
                    <button className="btn bg-[#ff0099] border-none"> <FaEye className="me-3"></FaEye> View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* Table footer */}
            <tfoot>
              <tr>
                <th>Serial</th>
                <th>Image</th>
                <th>Name</th>
                <th>Sub-Category</th>
                <th>Seller</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllToys;
