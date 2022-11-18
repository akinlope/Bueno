import { BsHeart } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const ShopCard = ({ shopArr }) => {
  return (
    <>
      {shopArr.map(({ id, title, desc, img, price }) => {
        return (
          <div
            className="rounded-2xl shadow-3xl py-4 px-4 relative"
            key={id}
          >
            <div className="float-right">
              <BsHeart className="text-danger" />
            </div>
            <div className="relative flex items-center justify-center mt-8 mb-6">
              <div className="bg-secBlue w-28 h-28 rounded-full blur-lg absolute"></div>
              <div className="w-32 h-32 rounded-full z-10 bg-danger overflow-hidden">
                <img src={img} alt="img" className="w-32 h-32 object-cover" />
              </div>
            </div>
            <p className="text-pureBlue capitalize font-medium">{title}</p>
            <p className="text-priBrown text-xs capitalize mt-2"> {desc}</p>
            <p className="text-pureBlue font-bold text-xl mt-2">${price}</p>
            <div className="rounded-full absolute shadow-3xl right-3 bottom-4 p-4 cursor-pointer">
              <FaPlus className="text-priGreen text-lg" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ShopCard;
