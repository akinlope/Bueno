import greenPlate from "../img/greenPlate.png";
import leftLeaf from "../img/leftLeaf.png";
import rightLeaf from "../img/rightLeaf.png";
import topLeaf from "../img/topLeaf.png";
import hotSpicy from "../img/hot-spicy.jpg";
import grilledMean from "../img/pexels-photo-pik-6340916.jpg"
import chicken from "../img/pexels-mariana-silvestre-2833499.jpg"
import salad from "../img/salad.png"
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-screen px-12">
      <div className="flex items-center min-h-hero">
        <div className=" w-6/12">
          <p className="text-7xl font-extrabold text-priBlack">Fastest</p>
          <div className="flex space-x-4">
            <p className="text-7xl font-extrabold text-priGreen">Food</p>
            <p className="text-7xl font-extrabold text-priBlack"> Delivery</p>
          </div>
          <div className="flex space-x-4">
            <p className="text-7xl font-extrabold text-priBlack">& Easy</p>
            <p className="text-7xl font-extrabold text-priGreen">Pickup.</p>
          </div>
          {/* <div className="bg-priGreen"> */}
          <p className="text-priBrown mt-5 pr-40 w-auto">
            Back from work or ar work, too tired to cook, not feeling like
            cooking, don't stress we've got you covered, we are just a click
            away.
          </p>

          {/* For the buttons */}
          <div className="mt-5 flex  w-2/3 space-x-8">
            <button className="bg-secBlack p-3 rounded-lg text-pureWhite">
              Check Out Menu
            </button>
            <button className="bg-pureWhite px-6 rounded-lg text-secBlack border ">
              Order Now
            </button>
          </div>
        </div>

        <div className="w-6/12 flex justify-center relative">
          <img src={greenPlate} alt="plate" className="h-96 relative  pl-10" />
          <img src={leftLeaf} alt="" className="w-32 absolute top-1/4 left-0" />
          <img
            src={rightLeaf}
            alt=""
            className="w-40 absolute top-leafRight right-24"
          />
          <img
            src={topLeaf}
            alt="top leaf"
            className="w-40 absolute top-leafUp left-24"
          />
        </div>
      </div>

      {/* The card holder */}
      <div className=" mt-20">
        <p className="text-priGreen font-bold text-lg">Chef's special</p>
        {/* For the Cards */}
        <div className="mt-5 flex space-x-10 overflow-x-auto overflow-visible p-5">

          {/* card 1 */}
          <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeart className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={hotSpicy} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Thunder Spicy burger</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeartFill className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={grilledMean} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Grilled Meat</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeartFill className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={salad} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Thunder Salad</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeartFill className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={chicken} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Chicken Stream</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div>


          {/* card 5 */}
          {/* <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeart className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={hotSpicy} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Thunder Spicy burger</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div> */}

          {/* card 6 */}
          {/* <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeart className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={hotSpicy} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Thunder Spicy burger</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div> */}
        </div>     
      </div>


      {/* The card holder */}
      <div className=" mt-20">
        <p className="text-priGreen font-bold text-lg">Chef's special</p>
        {/* For the Cards */}
        <div className="mt-5 flex space-x-10 overflow-x-auto overflow-visible p-5">

          {/* card 1 */}
          <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeart className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={hotSpicy} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Thunder Spicy burger</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeartFill className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={grilledMean} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Grilled Meat</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeartFill className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={salad} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Thunder Salad</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeartFill className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={chicken} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Chicken Stream</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div>


          {/* card 5 */}
          {/* <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeart className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={hotSpicy} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Thunder Spicy burger</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div> */}

          {/* card 6 */}
          {/* <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
            <div className="float-right">
              <BsHeart className="text-danger cursor-pointer" />
            </div>
            <div className="flex justify-center mt-5">
              <img src={hotSpicy} alt="" className="h-28 w-28 rounded-full" />
            </div>
            <p className="text-sm text-priBlack mt-4">Thunder Spicy burger</p>
            <p className="text-priGray text-xs mt-2">Double carne con queso</p>
            <div className="mt-4">
              <span className="text-secBlack font-bold flex float-left">$12.58</span>
              <div className=" bg-danger">
                <FaPlus className="float-right text-priGreen mr-2 h-5 w-5 cursor-pointer mb-4" />
              </div>
            </div>
          </div> */}
        </div>     
      </div>
    </div>
  );
};

export default Home;
