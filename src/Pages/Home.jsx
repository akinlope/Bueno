import CardNormal from "../Components/CardNormal";
import greenPlate from "../img/greenPlate.png";
import leftLeaf from "../img/leftLeaf.png";
import rightLeaf from "../img/rightLeaf.png";
import topLeaf from "../img/topLeaf.png";
import chefArr from "../Temp/chef";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUpDown,
  leafMove,
  leafVariants,
  plateVariant,
  rotatePlate,
  slideAcross,
} from "../variants";

const Home = () => {
  return (
    <div className="w-screen px-12">
      <div className="flex items-center min-h-hero">
        <div className=" w-6/12">
          <div className="relative">
            <motion.div
              variants={slideAcross}
              animate="animate"
              className="absolute bg-priGreen h-full"
            ></motion.div>
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              custom={1.5}
            >
              <p className="text-7xl font-extrabold text-priBlack">Fastest</p>
              <div className="flex space-x-4">
                <p className="text-7xl font-extrabold text-priGreen">Food</p>
                <p className="text-7xl font-extrabold text-priBlack">
                  {" "}
                  Delivery
                </p>
              </div>
              <div className="flex space-x-4">
                <p className="text-7xl font-extrabold text-priBlack">& Easy</p>
                <p className="text-7xl font-extrabold text-priGreen">Pickup.</p>
              </div>
            </motion.div>
          </div>

          <motion.p
            className="text-priBrown mt-5 pr-40 w-auto"
            variants={fadeInUpDown("down")}
            initial="initial"
            animate="animate"
            custom={1.7}
          >
            Back from work or ar work, too tired to cook, not feeling like
            cooking, don't stress we've got you covered, we are just a click
            away.
          </motion.p>

          {/* For the buttons */}
          <motion.div
            className="mt-5 flex  w-2/3 space-x-8"
            variants={fadeInUpDown("up")}
            initial="initial"
            animate="animate"
            custom={2}
          >
            <button className="bg-secBlack p-3 rounded-lg text-pureWhite">
              Check Out Menu
            </button>
            <button className="bg-pureWhite px-6 rounded-lg text-secBlack border ">
              Order Now
            </button>
          </motion.div>
        </div>

        <div className="w-6/12 flex justify-center relative">
          <motion.div
            className="h-96 relative  pl-10"
            variants={plateVariant}
            initial="initial"
            animate="animate"
          >
            <motion.img
              src={greenPlate}
              className="h-full"
              alt="plate"
              variants={rotatePlate}
            />
          </motion.div>

          {/* first leaf  */}
          <motion.div
            className="w-32 absolute top-1/4 left-0"
            custom={1.3}
            variants={leafVariants}
            initial="initial"
            animate="animate"
          >
            <motion.img
              src={leftLeaf}
              alt="left leaf"
              variants={leafMove}
              custom={1.1}
            />
          </motion.div>

          {/* second leaf  */}
          <motion.div
            className="w-40 absolute top-leafRight right-24"
            custom={1.7}
            variants={leafVariants}
            initial="initial"
            animate="animate"
          >
            <motion.img
              src={rightLeaf}
              alt="right leaf"
              variants={leafMove}
              custom={1.5}
            />
          </motion.div>

          {/* third leaf  */}
          <motion.div
            className="w-40 absolute top-leafUp left-24"
            custom={1.5}
            variants={leafVariants}
            initial="initial"
            animate="animate"
          >
            <motion.img
              src={topLeaf}
              alt="top leaf"
              variants={leafMove}
              custom={1.3}
            />
          </motion.div>
        </div>
      </div>

      {/* The card holder */}
      <div className=" mt-20">
        <p className="text-priGreen font-medium text-lg">Chef's special</p>
        {/* For the Cards */}
        <div className="mt-5 p-5">
          <CardNormal chefArr={chefArr} />
        </div>
      </div>

      {/* The card holder */}
      {/* <div className=" mt-20">
        <p className="text-priGreen font-bold text-lg">Chef's special</p> */}
      {/* For the Cards */}
      {/* <div className="mt-5 flex space-x-10 overflow-x-auto overflow-visible p-5"> */}

      {/* card 1 */}
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

      {/* card 2 */}
      {/* <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
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
          </div> */}

      {/* card 3 */}
      {/* <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
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
          </div> */}

      {/* card 4 */}
      {/* <div className="rounded-xl shadow-3xl w-56 h-72 p-5 mb-4">
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
          </div> */}

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
      {/* </div>      */}
      {/* </div> */}
    </div>
  );
};

export default Home;
