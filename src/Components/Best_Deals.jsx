import { FaPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

const Bestdeals = ({ bestArr, occasion }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={"auto"}>
      {bestArr.map(
        ({ id, order, save, pic, oldPrice, newPrice, description, title }) => {
          return (
            <SwiperSlide key={id}>
              <>
                <div className="mt-5 p-0 relative">
                  <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
                    <div className="flex ">
                      <p className=" text-sm text-secBlack font-semibold">
                        Order {order}
                      </p>
                      <div
                        className={`rounded-full w-16 h-16 justify-center absolute -top-5 right-0 ${
                          occasion === "bestDeal" ? "bg-danger" : "bg-priGreen"
                        }`}
                      >
                        <p className="text-xs font-semibold break-words p-4 text-center text-pureWhite ">
                          Save {save}%
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center mt-5">
                      <img
                        src={pic}
                        alt={pic}
                        className="h-28 w-28 object-cover rounded-full"
                      />
                    </div>
                    <p className="text-sm text-priBlack mt-4 font-medium">
                      {title}
                    </p>
                    <p className="text-priGray text-xs mt-2">{description}</p>
                    <div className="mt-5 flex items-center justify-between w-2/3">
                      <span className="text-sm text-danger font-bold line-through">
                        ${oldPrice.toFixed(2)}
                      </span>

                      <span className="text-secBlack font-bold ">
                        ${newPrice.toFixed(2)}
                      </span>
                    </div>

                    <div className="p-3 absolute shadow-3xl rounded-full bottom-4 right-8">
                      <FaPlus
                        className={`float-right cursor-pointer text-lg ${
                          occasion === "bestDeal"
                            ? "text-priGreen"
                            : "text-danger"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
  //
};

export default Bestdeals;
