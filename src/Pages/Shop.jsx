import { MdFilterList } from "react-icons/md";
import ShopCard from "../Components/ShopCard";
import shopArr from "../Temp/shop";
import { useEffect } from "react";

const Shop = ({ setLink }) => {
  // to set active link
  useEffect(() => {
    const linked = () => {
      setLink("Shop");
    };
    linked();
  }, [setLink]);

  return (
    <div className="w-screen px-4 md:px-6 lg:px-12 relative">
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

      {/* load more button  */}
      <div className="text-center mt-12">
        <button className="text-pureWhite bg-pureBlue rounded-full px-10 py-4 font-regular text-sm">
          Load more
        </button>
      </div>

      {/* bottom text  */}
      <p className="text-center mt-10 text-priGray opacity-60 mb-12">
        Fast food. Fast delivery. Easy pickup
      </p>

      {/* scroll to top  */}
      
    </div>
  );
};

export default Shop;
