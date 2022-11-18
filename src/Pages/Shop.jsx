import { MdFilterList } from "react-icons/md";
import ShopCard from "../Components/ShopCard";
import shopArr from "../Temp/shop";

const Shop = () => {
  return (
    <div className="w-screen px-12">
      {/* title and filter  */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h4 className="font-semibold capitalize text-secBlack text-xl">
            bueno shop
          </h4>
          <p className="text-priGray capitalize text-xs">order as you go</p>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <MdFilterList className="text-danger text-xl" />
            <p className="text-pureBlue font-medium">Filter</p>
          </div>
          <select className="cursor-pointer text-pureBlue">
            <option value="all food">All food</option>
            <option value="burger">Burger</option>
            <option value="chicken">Chicken</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="rice">Rice</option>
          </select>
        </div>
      </div>

      {/* shop design  */}
      <div className="grid grid-cols-5 gap-x-5 gap-y-12">
        <ShopCard shopArr={shopArr} />
      </div>
    </div>
  );
};

export default Shop;
