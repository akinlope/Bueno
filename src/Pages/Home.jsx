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
import Holiday from "../Components/Holiday";
import holArr from "../Temp/holiday";
import Reconmends from "../Components/Reconmends";
import recArr from "../Temp/Reconmends";
import { useEffect } from "react";

const Home = ({ setLink }) => {
  // to set active link
  useEffect(() => {
    const linked = () => {
      setLink("Home");
    };
    linked();
  }, [setLink]);

  return (
    <div className="w-screen px-4 md:px-6 lg:px-12">
      <div className="flex-col-reverse md:flex-row flex items-center min-h-hero">
        <div className="w-full md:w-6/12">
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
              <p className="text-4xl px-4 text-center font-extrabold md:text-left md:px-0 md:text-5xl lg:text-7xl text-priBlack capitalize">
                fastest <br /> <span className="text-priGreen">food</span>{" "}
                delivery <br /> & easy{" "}
                <span className="text-priGreen">pickup.</span>
              </p>
            </motion.div>
          </div>

          <motion.p
            className="text-center w-full text-xs px-5 lg:w-2/3 md:px-0 md:mx-0 md:text-left md:text-sm text-priBrown mt-5"
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
            className="w-full mt-5 flex flex-col items-center justify-center md:flex-row md:justify-start md:space-x-8"
            variants={fadeInUpDown("up")}
            initial="initial"
            animate="animate"
            custom={2}
          >
            <button className="bg-secBlack p-3 rounded-lg text-pureWhite mb-5 md:mb-0">
              Check Out Menu
            </button>
            <button className="bg-pureWhite px-6 py-3 rounded-lg text-secBlack border">
              Order Now
            </button>
          </motion.div>
        </div>

        <div className="w-full pt-10 mb-10 flex justify-center items-center relative md:w-6/12 md:pt-0 md:mb-0">
          <motion.div
            className="max-w-xs md:h-72 lg:h-96 md:w-auto md:max-w-none relative md:pl-10"
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
            className="hidden md:block md:w-24 lg:w-32 absolute top-1/4 left-0"
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
            className="hidden md:block md:w-32 lg:w-40 absolute top-leafRight md:right-10 lg:right-24"
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
            className="hidden md:block md:w-32 lg:w-40 absolute top-leafUp left-24"
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
        {/* <div className="flex items-center justify-between"> */}
        <p className="text-priGreen font-medium text-lg">Chef's special</p>
        {/* <p className="text-danger font-medium">see all</p> */}
        {/* </div> */}
        {/* For each section of the Cards */}
        <div className="mt-5 p-0">
          <CardNormal chefArr={chefArr} />
        </div>
      </div>

      {/* Best deal  */}
      <div className=" mt-10">
        <div className="flex items-center justify-between">
          <p className="text-priGreen font-medium text-lg">Best Deals</p>
          <p className="text-danger font-medium ">see all</p>
        </div>

        <Bestdeals bestArr={bestD} />
      </div>

      {/* Explore categories  */}
      <div className=" mt-10">
        <div className="flex items-center justify-between">
          <p className="text-priGreen font-medium text-lg">
            Explore Categories
          </p>
          <p className="text-danger font-medium">see all</p>
        </div>
        <Explore expArr={expArr} />
      </div>

      {/* Holiday special */}
      <div className=" mt-10">
        <div className="flex items-center justify-between">
          <p className="text-priGreen font-medium text-lg">Holiday special</p>
          <p className="text-danger font-medium">see all</p>
        </div>

        <Holiday holArr={holArr} />
      </div>

      {/* Reconmends */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <p className="text-priGreen font-medium text-lg">Reconmends</p>
          <p className="text-danger font-medium">see all</p>
        </div>
        <Reconmends recArr={recArr} />
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
