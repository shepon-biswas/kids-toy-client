import React from "react";

const Brands = () => {
  return (
    <>
      <div className="w-10/12 mx-auto my-14">
        <div>
          <h2 className="text-2xl font-bold text-center uppercase text-[#ff0099] ">
            Brands we are working with
          </h2>
          <p className="text-center mb-14 text-gray-700 text-md font-semibold">
            Since long we are working with some the most renowned brands
          </p>
        </div>
        {/* Brand Images */}
        <div className="grid grid-cols-5 gap-5">
            <div className="border border-[#ffcceb] shadow-md rounded-md">
                <img className=" w-full h-full object-center p-2" src="https://i.ibb.co/h9vT6GQ/logo1-compact-1.webp" alt="brand image" />
            </div>
            <div className="border border-[#ffcceb] shadow-md rounded-md">
                <img className=" w-full h-full object-center p-2" src="https://i.ibb.co/hVkZVh0/logo5-compact.webp" alt="brand image" />
            </div>
            <div className="border border-[#ffcceb] shadow-md rounded-md">
                <img className=" w-full h-full object-center p-2" src="https://i.ibb.co/NrmDWjr/logo3-compact.webp" alt="brand image" />
            </div>
            <div className="border border-[#ffcceb] shadow-md rounded-md ">
                <img className=" w-full h-full object-center p-2" src="https://i.ibb.co/0KTYrhv/logo2-compact.webp" alt="brand image" />
            </div>
            <div className="border border-[#ffcceb] shadow-md rounded-md">
                <img className=" w-full h-full object-center p-2" src="https://i.ibb.co/h9vT6GQ/logo1-compact-1.webp" alt="brand image" />
            </div>

        </div>
      </div>
    </>
  );
};

export default Brands;
