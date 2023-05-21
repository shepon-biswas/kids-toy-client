import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TestomonialSlider = () => {
  return (
    <>
      <div className="w-10/12 mx-auto my-14">
        <div>
          <h2 className="text-2xl font-bold text-center uppercase text-[#ff0099] ">
            What They Say
          </h2>
          <p className="text-center mb-14 text-gray-700 text-md font-semibold">Have a look! What our valueable client says about our services.</p>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
            {/* SLider One */}
          <SwiperSlide>
            <div className=" relative rounded-lg bg-[#ffcceb]">
              <div>
                <div className="flex items-center justify-center p-6 gap-5">
                  <img
                    className="w-24 h-24 rounded-full"
                    src="https://i.ibb.co/fYJsVHX/pexels-photo-6497112.jpg"
                    alt="user iamge"
                  />
                  <h4 className="font-bold text-[#ff0099]">Branden Malika</h4>
                </div>
                <div className="px-10 pb-5">
                  <h4 className=" my-3">
                    "The customer service at this toy shop is exceptional. They
                    went above and beyond to help me find the perfect toy. I
                    appreciate the focus on sustainable and eco-friendly toys at
                    this shop. It's so important for our kids' future".
                  </h4>
                  <p className="text-[#ff00bb] text-center">
                    -CTO, TV host and producer
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </SwiperSlide>
            {/* SLider Two */}
          <SwiperSlide>
            <div className=" relative rounded-lg bg-[#ffcceb]">
              <div>
                <div className="flex items-center justify-center p-6 gap-5">
                  <img
                    className="w-24 h-24 rounded-full"
                    src="https://i.ibb.co/GCk9ZGN/pexels-photo-3936894.jpg"
                    alt="user iamge"
                  />
                  <h4 className="font-bold text-[#ff0099]">Rossey D.Costa</h4>
                </div>
                <div className="px-10 pb-5">
                  <h4 className=" my-3">
                    "The customer service at this toy shop is exceptional. They
                    went above and beyond to help me find the perfect toy. I
                    appreciate the focus on sustainable and eco-friendly toys at
                    this shop. It's so important for our kids' future".
                  </h4>
                  <p className="text-[#ff00bb] text-center">
                    -CTO, TV host and producer
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </SwiperSlide>
            {/* SLider Three */}
          <SwiperSlide>
            <div className=" relative rounded-lg bg-[#ffcceb]">
              <div>
                <div className="flex items-center justify-center p-6 gap-5">
                  <img
                    className="w-24 h-24 rounded-full"
                    src="https://i.ibb.co/D5YXGJv/pexels-photo-7077368.jpg"
                    alt="user iamge"
                  />
                  <h4 className="font-bold text-[#ff0099]">Emily Modregz</h4>
                </div>
                <div className="px-10 pb-5">
                  <h4 className=" my-3">
                    "The customer service at this toy shop is exceptional. They
                    went above and beyond to help me find the perfect toy. I
                    appreciate the focus on sustainable and eco-friendly toys at
                    this shop. It's so important for our kids' future".
                  </h4>
                  <p className="text-[#ff00bb] text-center">
                    -CTO, TV host and producer
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </SwiperSlide>
            {/* SLider Four */}
          <SwiperSlide>
            <div className=" relative rounded-lg bg-[#ffcceb]">
              <div>
                <div className="flex items-center justify-center p-6 gap-5">
                  <img
                    className="w-24 h-24 rounded-full"
                    src="https://i.ibb.co/51HB9VX/pexels-photo-6497112.jpg"
                    alt="user iamge"
                  />
                  <h4 className="font-bold text-[#ff0099]">Santa Maria</h4>
                </div>
                <div className="px-10 pb-5">
                  <h4 className=" my-3">
                    "The customer service at this toy shop is exceptional. They
                    went above and beyond to help me find the perfect toy. I
                    appreciate the focus on sustainable and eco-friendly toys at
                    this shop. It's so important for our kids' future".
                  </h4>
                  <p className="text-[#ff00bb] text-center">
                    -CTO, TV host and producer
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </>
  );
};

export default TestomonialSlider;
