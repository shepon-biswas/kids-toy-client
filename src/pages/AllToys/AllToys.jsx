import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";

const AllToys = () => {
    const [searchText ,setSearchText] = useState();
    // const allToys = useLoaderData();
    const [allToys, setAllToys] = useState([])
    // Load all data
    useEffect(() =>{
      fetch(`http://localhost:5000/alltoys`)
      .then(res => res.json())
      .then(data =>{
        setAllToys(data)
      })
    }, [])

    // Handle Search Query
    const handleSearchQuery = ()=>{
      fetch(`http://localhost:5000/searchToy/${searchText}`)
      .then(res => res.json())
      .then(data =>{
        setAllToys(data)
      })
    }


  return (
    <>
      <div className="w-10/12 mx-auto my-10 ">
        {/* Heading */}
        <div className="text-center">
          <h4 className="uppercase text-2xl font-bold text-[#ff0099]">
            All toys
          </h4>
        </div>
        {/* Search Option section */}
        <div className="my-10">
            <div className="input-group justify-center w-full ">
              <input
              onChange={(event)=> setSearchText(event.target.value)}
                type="text"
                placeholder="Search…"
                className="input input-bordered hover:outline-none"
              />
              <button 
              onClick={handleSearchQuery}
              className="btn btn-square bg-[#ff0099] border border-[#ff0099]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        {/* Table Start */}
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
                    <button className="btn bg-[#ff0099] border-none">
                      {" "}
                      <FaEye className="me-3"></FaEye> View Details
                    </button>
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
