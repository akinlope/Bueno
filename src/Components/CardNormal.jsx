import { Swiper, SwiperSlide } from "swiper/react";
import { BsHeart } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const CardNormal = ({ chefArr }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={"auto"}>
      {chefArr.map(({ id, title, desc, img, price }) => {
        return (
          <SwiperSlide key={id}>
            <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4 relative">
              <div className="float-right">
                <BsHeart className="text-danger cursor-pointer" />
              </div>
              <div className="relative flex items-center justify-center mt-8 mb-6">
                <div className="bg-secBlue w-28 h-28 rounded-full blur-lg absolute"></div>
                <div className="w-32 h-32 rounded-full z-10 bg-danger overflow-hidden -mt-2">
                  <img src={img} alt={img} className="w-32 h-32 object-cover" />
                </div>
              </div>
              <p className="text-sm text-priBlack mt-3 font-medium">{title}</p>
              <p className="text-priGray text-xs mt-2">{desc}</p>
              <div className="mt-2">
                <span className="text-secBlack font-bold flex float-left">
                  ${price}
                </span>
              </div>

              <div className=" absolute p-3 rounded-full shadow-3xl bottom-4 right-4">
                    <FaPlus className="float-right text-priGreen  cursor-pointer text-lg " />
                  </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CardNormal;
