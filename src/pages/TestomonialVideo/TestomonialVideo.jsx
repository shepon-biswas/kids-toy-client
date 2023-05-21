import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const TestomonialVideo = () => {
  return (
    <>
      <div className="w-10/12 mx-auto">
      <div>
          <h2 className="text-2xl font-bold text-center uppercase text-[#ff0099] ">
            Our video testomonial
          </h2>
          <p className="text-center mb-14 text-gray-700 text-md font-semibold">Have a look! How joyfully kids are playing around!!!</p>
        </div>
        <div className="my-14 relative">
          <img
            className="h-96 object-cover w-full rounded-lg"
            src="https://i.ibb.co/qYp6mnC/pexels-photo-3662844.jpg"
            alt="kids image"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#23232301] to-[#ff0099c5] rounded">
            <div className=" absolute top-[30%] left-[15%] text-center w-2/3 mx-auto text-white">
              <h4 className="text-4xl font-bold my-5">
                We make your children happier with the best toys
              </h4>
              <a
                className="flex justify-center"
                href="https://www.youtube.com/embed/MIpQKMlZY1g"
              >
                <FaPlayCircle className="text-5xl cursor-pointer hover:text-[#ff0099]"></FaPlayCircle>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestomonialVideo;
