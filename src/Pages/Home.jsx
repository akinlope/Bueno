import Bestdeals from "../Components/Best_Deals";
import CardNormal from "../Components/CardNormal";
import Explore from "../Components/Explore";
import greenPlate from "../img/greenPlate.png";
import leftLeaf from "../img/leftLeaf.png";
import rightLeaf from "../img/rightLeaf.png";
import topLeaf from "../img/topLeaf.png";
import bestD from "../Temp/bestDeal";
import chefArr from "../Temp/chef";
import expArr from "../Temp/explore"
// import holArr from "../Temp/holiday";

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
        <p className="text-priGreen font-medium text-lg">Chef's special</p>
        {/* For esach section of the Cards */}
        <div className="mt-5 p-0">
          <CardNormal chefArr={chefArr} />
        </div>
        <div className=" mt-10">
          <p className="text-priGreen font-medium text-lg">Best Deals</p>
          <Bestdeals bestArr={bestD} />
        </div>
        <div className=" mt-10">
          <p className="text-priGreen font-medium text-lg">Explore Categories</p>
          <Explore expArr={expArr}/>
        </div>
        <div className=" mt-10">
          <p className="text-priGreen font-medium text-lg">Holiday special</p>
          {/* <Explore holArr={holArr}/> */}
        </div>


      </div>



    </div>
  );
};

export default Home;
