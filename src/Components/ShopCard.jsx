import { BsHeartFill } from "react-icons/bs";
import hotSpicy from "../img/hot-spicy.jpg";

const ShopCard = () => {
  return (
    <div className="rounded-2xl border border-priGray py-6 px-4">
      <div className="float-right">
        <BsHeartFill className="text-danger" />
      </div>
      <div className="relative flex items-center justify-center mt-8 mb-6">
        <div className="bg-secBlue w-28 h-28 rounded-full blur-lg absolute"></div>
        <div className="w-32 h-32 rounded-full z-10 bg-danger overflow-hidden">
          <img src={hotSpicy} alt="food" className="w-32 h-32 object-cover" />
        </div>
      </div>
      <div className="text-pureBlue capitalize font-medium">
        thunder spicy burger
      </div>
    </div>
  );
};

export default ShopCard;
