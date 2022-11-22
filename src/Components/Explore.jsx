import { Swiper, SwiperSlide } from "swiper/react";

const Explore = ({ expArr }) => {
  return (
    <Swiper spaceBetween={1} slidesPerView={"auto"}>
      {expArr.map(({ id, bgColor, png, title }) => {
        return (
          <SwiperSlide key={id}>
            <div className="mt-5 w-44">
              <div
                className="rounded-xl h-44 flex items-center justify-center mb-4"
                style={{ backgroundColor: bgColor }}
              >
                <img src={png} alt={png} className="w-24" />
              </div>
              <p className=" text-secBlack text-center font-medium capitalize">{title}</p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Explore;
