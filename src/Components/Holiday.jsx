// import holArr from "../Temp/holiday";
import { FaPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react"

const Holiday = ({ holArr }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={"auto"}>
      {holArr.map(({ id, order, save, pic, oldPrice, newPrice }) => {
        return (
          <SwiperSlide key={id}>
            <>
              <div className="mt-5 p-0 relative">
                <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
                  <div className="flex space-x-20">
                    <p className="pt-2 text-sm text-secBlack font-semibold">
                      Order {order}
                    </p>
                    <div className="rounded-full w-16 h-16 justify-center absolute -top-5 right-0 bg-priGreen">
                      <p className="text-xs  break-words p-4 text-center text-pureWhite ">
                        Save {save}%
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-5">
                    <img
                      src={pic}
                      alt={pic}
                      className="h-28 w-28 rounded-full"
                    />
                  </div>
                  <p className="text-sm text-priBlack mt-3">
                    Thunder Spicy burger
                  </p>
                  <p className="text-priGray text-xs mt-2">
                    Double carne con queso
                  </p>
                  <div className="mt-4 flex space-x-7">
                    <span className="text-sm text-danger font-bold line-through">
                      ${oldPrice.toFixed(2)}
                    </span>

                    <span className="text-secBlack font-bold ">
                      ${newPrice.toFixed(2)}
                    </span>
                    <FaPlus className="float-right text-danger  h-5 w-5 cursor-pointer mb-4" />
                  </div>
                </div>
              </div>
            </>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
  //
};
 
export default Holiday;
