import React from "react";

const Gallery = () => {
  return (
    <>
      <div className="w-10/12  mx-auto my-14">
        <div>
            <h2 className="text-2xl font-bold text-center uppercase text-[#ff0099] mb-14">Explore Our Memories</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-3 cursor-pointer">
          <div>
            <img
              className="w-full h-72 object-cover"
              src="https://i.ibb.co/hf7ZY4B/Gear-Go-Cube.webp"
              alt="toy image"
            />
          </div>
          <div>
            <img
              className="w-full h-72 object-cover"
              src="https://i.ibb.co/sW2hkrD/gallery.jpg"
              alt="toy image"
            />
          </div>
          <div>
            <img
              className="w-full h-72 object-cover"
              src="https://i.ibb.co/8dCvzvt/pexels-photo-11015643.jpg"
              alt="toy image"
            />
          </div>
          <div>
            <img
              className="w-full h-72 object-cover"
              src="https://i.ibb.co/9WCHcG9/istockphoto-1182187147-612x612.jpg"
              alt="toy image"
            />
          </div>
          <div>
            <img
              className="w-full h-72 object-cover"
              src="https://i.ibb.co/52Jrx7w/360-F-276538808-0-LLBts-Etri-Uhw-LHppvtp-JKg-Ua-DIl-R9b-H.webp"
              alt="toy image"
            />
          </div>
          <div>
            <img
              className="w-full h-72 object-cover"
              src="https://i.ibb.co/Zf1Dvzh/istockphoto-939438514-612x612.jpg"
              alt="toy image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
