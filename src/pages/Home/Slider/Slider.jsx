import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay} from "swiper";

const Slider = () => {
  return (
    <>
      <div className="w-full md:w-10/12 mx-auto">
        <Swiper
            autoplay={{
            delay: 1200,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
            
          }}
          navigation={true}
          effect={"fade"}
          loop={true}
          modules={[Autoplay,Pagination, Navigation]}
          className="mySwiper"
        >
            {/* Slider-1 */}
          <SwiperSlide>
            <div className=" relative rounded">
              <img
                className="object-cover w-full h-[550px] rounded"
                src="https://i.ibb.co/nMsKYvh/slider1.jpg" alt="Slider-1"
              ></img>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#23232301] to-[#ff0099c5] rounded">
              <div className=" absolute bottom-10 left-[15%] text-center w-2/3 mx-auto text-white   ">
                <h4 className="text-4xl font-bold my-3">Play gives children a chance to practice what they are learning.</h4>
                <p className="text-gray-200">-Fred Rogers, TV host and producer</p>
              </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slider-2 */}
          <SwiperSlide>
            <div className=" relative rounded">
              <img
                className="object-cover w-full h-[550px] rounded"
                src="https://i.ibb.co/8gCkSMH/slider2.jpg" alt="Slider-2"
              ></img>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#23232301] to-[#ff0099c5] rounded">
              <div className=" absolute bottom-10 left-[15%] text-center w-2/3 mx-auto text-white   ">
                <h4 className="text-4xl font-bold my-3">Children have always learned and created places for themselves through play.</h4>
                <p className="text-gray-200">-Donna R. Barnes, professor in education</p>
              </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slider-3 */}
          <SwiperSlide>
            <div className=" relative rounded">
              <img
                className="object-cover w-full h-[550px] rounded"
                src="https://i.ibb.co/dbzNC8W/slider3.jpg" alt="Slider-3"
              ></img>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#23232301] to-[#ff0099c5] rounded">
              <div className=" absolute bottom-10 left-[15%] text-center w-2/3 mx-auto text-white   ">
                <h4 className="text-4xl font-bold my-3">When we deny children play, we are denying them the right to understand the world.</h4>
                <p className="text-gray-200">-Erika & Nicholas Christakis, early childhood educator/sociologist and physician</p>
              </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Slider-4 */}
          <SwiperSlide>
            <div className=" relative rounded">
              <img
                className="object-cover w-full h-[550px] rounded"
                src="https://i.ibb.co/Zm6Kkdn/slider4.jpg" alt="Slider-4"
              ></img>
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-[#23232301] to-[#ff0099c5] rounded">
              <div className=" absolute bottom-10 left-[15%] text-center w-2/3 mx-auto text-white   ">
                <h4 className="text-4xl font-bold my-3">Children need the freedom and time to play. Play is not a luxury. Play is a necessity.</h4>
                <p className="text-gray-200">-Kay Redfield Jamison, psychologist and writer</p>
              </div>
              </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </>
  );
};

export default Slider;
