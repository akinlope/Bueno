import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

const Review = ({ revArr }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={"auto"}>
      {revArr.map(({ id, name, img, dis }) => {
        return (
          <SwiperSlide key={id}>
            <div className="mt-5 px-12 rounded-3xl shadow-3xl flex items-center h-72">
              <div className="bg-danger rounded-full overflow-hidden mr-20">
                <img src={img} alt={img} className="w-32 h-32 object-cover" />
              </div>
              <div className="">
                <p className="font-semibold text-secBlack">{name}</p>
                <p className="text-sm text-priGray mt-3 w-96">{dis}</p>
                <div className="mt-5 flex">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Review;
