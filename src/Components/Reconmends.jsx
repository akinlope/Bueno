import { FaPlus } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

const Reconmends = ({ recArr }) => {
  return (
    <Swiper spaceBetween={200} slidesPerView={"auto"}>
      {recArr.map(({ id, pic, group, title, discription, price }) => {
        return (
          <SwiperSlide key={id}>
            <div>
              <div className="mt-5">
                <div className="rounded-xl shadow-3xl w-96 h-40 p-5 mb-4">
                  <div className="flex -mt-2 ">
                    <div className="pt-8 mr-2 ">
                      <img src={pic} alt={pic} className="w-24 h-20 rounded-full" />
                    </div>
                    <div className="w-80 p-2 pl-4 mt-0">
                      <div className="flex space-x-28">
                        <span className="text-priGray text-sm font-bold">
                          {group}
                        </span>
                        <div className="text-danger cursor-pointer">
                          <BsHeart />
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-sm text-priBlack font-bold">
                          {title}
                        </span>
                      </div>
                      <div className="">
                        <span className="text-xs text-priGray">
                          {discription}
                        </span>
                      </div>
                      <div className="flex space-x-24 mt-2">
                        <span className="text-priBlack font-bold text-3xl">
                          ${price.toFixed(2)}
                        </span>
                        <div className="pt-2 text-priGreen cursor-pointer">
                          <FaPlus />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Reconmends;
