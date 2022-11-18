import Bestdeals from "../Components/Best_Deals";
import CardNormal from "../Components/CardNormal";
import Explore from "../Components/Explore";
import greenPlate from "../img/greenPlate.png";
import leftLeaf from "../img/leftLeaf.png";
import rightLeaf from "../img/rightLeaf.png";
import topLeaf from "../img/topLeaf.png";
import bestD from "../Temp/bestDeal";
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
import expArr from "../Temp/explore";
// import holArr from "../Temp/holiday";

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

      {/* Chief special  */}
      <div className=" mt-20">
        <p className="text-priGreen font-medium text-lg">Chef's special</p>
        {/* For each section of the Cards */}
        <div className="mt-5 p-0">
          <CardNormal chefArr={chefArr} />
        </div>
      </div>

      {/* Best deal  */}
      <div className=" mt-10">
        <p className="text-priGreen font-medium text-lg">Best Deals</p>
        <Bestdeals bestArr={bestD} />
      </div>

      {/* Explore categories  */}
      <div className=" mt-10">
        <p className="text-priGreen font-medium text-lg">Explore Categories</p>
        <Explore expArr={expArr} />
      </div>

      {/* Holiday special */}
      <div className=" mt-10">
        <p className="text-priGreen font-medium text-lg">Holiday special</p>
        {/* <Explore holArr={holArr}/> */}
      </div>

      {/* The card holder */}
      {/* <div className=" mt-20">
        <p className="text-priGreen font-medium text-lg">Chef's special</p> */}
      {/* For each section of the Cards */}
      {/* <div className="mt-5 p-0">
          <CardNormal chefArr={chefArr} />
        </div>
        <div className=" mt-10">
          <p className="text-priGreen font-medium text-lg">Best Deals</p>
          <Bestdeals bestArr={bestD} />
        </div>
        <div className=" mt-10">
          <p className="text-priGreen font-medium text-lg">
            Explore Categories
          </p>
          <Explore expArr={expArr} />
        </div>
        <div className=" mt-10">
          <p className="text-priGreen font-medium text-lg">Holiday special</p> */}
      {/* <Explore holArr={holArr}/> */}
      {/* </div>
      </div> */}
    </div>
  );
};

export default Home;
