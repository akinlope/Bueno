import { FaPlus } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

const Recommends = ({ recArr }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={"auto"}>
      {recArr.map(({ id, pic, group, title, description, price }) => {
        return (
          <SwiperSlide key={id}>
            <div className="rounded-xl h-56 shadow-3xl mb-4 mt-5 relative flex items-center justify-center">
              <div className="mr-10 w-24 h-24 bg-danger rounded-full overflow-hidden">
                <img src={pic} alt={pic} className="w-24 h-24 object-cover" />
              </div>
              <div className="">
                <div className="flex items-center justify-between">
                  <p className="text-priGray text-md font-semibold opacity-40 uppercase">
                    {group}
                  </p>
                  <BsHeart className="text-danger cursor-pointer" />
                </div>
                <p className="text-sm text-priBlack font-medium mt-4 mb-4">
                  {title}
                </p>
                <p className="text-xs text-priGray mb-4">{description}</p>
                <p className="text-priBlack font-bold text-3xl">
                  ${price.toFixed(2)}
                </p>
                <div className="cursor-pointer absolute p-3 rounded-full shadow-3xl bottom-5 right-5">
                  <FaPlus className="text-priGreen" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Recommends;
