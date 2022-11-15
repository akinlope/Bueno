import greenPlate from "./img/greenPlate.png";
import leftLeaf from "./img/leftLeaf.png";
import rightLeaf from "./img/rightLeaf.png";
import topLeaf from "./img/topLeaf.png";
import hotSpicy from "./img/hot-spicy.jpg"

const Home = () => {
  return (
    <div className="w-screen mt-16">
      <div className="flex ">
        <div className="ml-32 w-6/12">
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
          <p className="text-priGray mt-5 pr-40 w-auto">
            Back from work or ar work, too tired to cook, not feeling like
            cooking, don't stress we've got you covered, we are just a click
            away.
          </p>

          {/* For the buttons */}
          <div className="mt-5 flex  w-2/3 space-x-20">
            <button className="bg-secBlack p-2 rounded-lg text-pureWhite">
              Check Out Menu
            </button>
            <button className="bg-pureWhite p-2 pl-8 pr-8 rounded-lg text-secBlack border ">
              Order Now
            </button>
          </div>
        </div>

        <div className="mr-32 w-6/12 solid justify-center">
          <img
            src={greenPlate}
            alt=""
            srcset=""
            className="h-96 relative  pl-10"
          />
          {/* <img src={leftLeaf} alt="" className="h-28 w-28 absolute"/>
          <img src={rightLeaf} alt="" className="h-28 w-28 absolute top-0 left-0"/>
          <img src={topLeaf} alt="" className="h-28 w-28 absolute"/> */}
        </div>
      </div>

      <div className="ml-32 mt-20">
        <p className="text-priGreen font-bold text-lg">Chef's special</p>
        {/* For the Cards */}
        <div className="mt-5">
          <div className="rounded-xl shadow-3xl w-40 h-60 p-4">
            <p className="">Heart</p>
            <div className="flex justify-center">
              <img src={hotSpicy} alt="" className="h-20 w-20 rounded-full"/>
            </div>
            <p className="text-sm text-priBlack ">Thunder Spicy burger</p>
            <p className="text-priGray text-xs ">Double carne con queso</p>
            <div className="pt-4 flex space-x-10">
              <span className="text-priBlack">$12.58</span>
              <button>Add</button>
            </div>
          </div>
        </div>

      
      </div>

    </div>
  );
};

export default Home;
