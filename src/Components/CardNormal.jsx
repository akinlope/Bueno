import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsHeart } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const CardNormal = ({ chefArr }) => {
  // console.log(chefArr);
  return (
    <Swiper spaceBetween={50} slidesPerView={"auto"}>
      {chefArr.map(({ id, title, desc, img, price }) => {
        return (
          <SwiperSlide key={id}>
            <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
              <div className="float-right">
                <BsHeart className="text-danger cursor-pointer" />
              </div>
              <div className="flex justify-center mt-5">
                <img
                  src={img}
                  alt={img}
                  className="h-28 w-28 object-cover rounded-full"
                />
              </div>
              <p className="text-sm text-priBlack mt-4">{title}</p>
              <p className="text-priGray text-xs mt-2">{desc}</p>
              <div className="mt-4">
                <span className="text-secBlack font-bold flex float-left">
                  ${price}
                </span>
                <div className=" bg-danger">
                  <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CardNormal;
