import { Swiper, SwiperSlide } from "swiper/react";

const Explore = ({ expArr }) => {
  return (
    <Swiper spaceBetween={1} slidesPerView={"auto"}>
      {expArr.map(({ id, bgColor, png, title }) => {
        return (
          <SwiperSlide key={id}>
            <div className="mt-5 p-0">
              <div>
                <div className="rounded-xl w-44 h-44 p-5 mb-4" style={{backgroundColor: bgColor}}>
                  <div className=" flex justify-center items-center mt-2">
                    <img src={png} alt={png} className="w-24 h-24" />
                  </div>
                </div>
                <div className="flex justify-center w-44 -mt-2 mb-4">
                  <span className=" text-secBlack font-bold">{title}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Explore;

// return (
//     <div className="mt-5 p-0">
//       <div>
//         <div className="rounded-xl bg-priBlue w-44 h-44 p-5 mb-4">
//           <div className=" flex justify-center mt-2">
//             <img src={burgerpng} alt={burgerpng} className="w-24" />
//           </div>
//         </div>
//         <div className="flex justify-center w-44 -mt-2">
//           <span className=" text-secBlack font-bold">Burger</span>
//         </div>
//       </div>
//     </div>
//   );
