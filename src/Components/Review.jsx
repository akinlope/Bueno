import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import img from "../img/pexels-guilherme-almeida-1858175.jpg"

const Review = ({ revArr }) => {
  console.log(revArr);
  return (
    <Swiper spaceBetween={50} slidesPerView={"auto"}>
      {revArr.map(({ id, name, img, dis }) => {
        return (
          <SwiperSlide key={id}>
            <>
            <div className="mt-5 w-1/2 h-56 rounded-xl shadow-3xl ">
              <div className="flex justify-between">
                <div className=" w-40 flex justify-center items-center h-56">
                  <img src={img} alt={img} className="w-32 h-32 rounded-full" />
                </div>
                <div className="pr-5 pl-5 w-96  ">
                  <p className="mt-10 font-bold text-secBlack">{name}</p>
                  <p className="text-sm text-priGray mt-3">{dis}</p>
                  <div className="mt-5 flex">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                </div>
              </div>
            </div>
            </>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default Review;
