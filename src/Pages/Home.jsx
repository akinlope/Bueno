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
import Recommends from "../Components/Recommends";
import recArr from "../Temp/Reconmends";
import { useEffect } from "react";
import peoArr from "../Temp/peoples";
import Review from "../Components/Review";
import revArr from "../Temp/Review";
import { Link } from "react-router-dom";
import "swiper/css";
import BottomText from "../Components/BottomText";
import ScrollToTop from "../Components/ScrollToTop";

const Home = ({ setLink }) => {
  // to set active link
  useEffect(() => {
    const linked = () => {
      setLink("Home");
    };
    linked();
  }, [setLink]);

  return (
    <div className="w-screen px-4 md:px-6 lg:px-12 relative">
      <div className="flex-col-reverse md:flex-row flex items-center min-h-hero">
        {/* left div  */}
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

        {/* right div  */}
        <div className="w-full plate pt-10 mb-10 flex justify-center items-center relative md:w-6/12 md:pt-0 md:mb-0">
          <motion.div
            className="max-w-xs md:h-72 lg:h-96 md:w-auto md:max-w-none relative md:pl-10"
            variants={plateVariant}
            initial="initial"
            animate="animate"
          >
            <motion.img
              src={greenPlate}
              className="md:h-full"
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
        <p className="text-priGreen font-medium text-md md:text-lg mb-5">
          Chef's special
        </p>
        <CardNormal chefArr={chefArr} />
      </div>

      {/* Best deal  */}
      <div className=" mt-10">
        <div className="flex items-center justify-between">
          <p className="text-priGreen font-medium text-md md:text-lg">
            Best Deals
          </p>
          <Link to={"/best-deals"} className="text-danger font-medium ">
            see all
          </Link>
        </div>
        <Bestdeals bestArr={bestD} occasion={"bestDeal"} />
      </div>

      {/* Explore categories  */}
      <div className=" mt-10">
        <div className="flex items-center justify-between">
          <p className="text-priGreen font-medium text-md md:text-lg">
            Explore Categories
          </p>
          <Link to={"/categories"} className="text-danger font-medium ">
            see all
          </Link>
        </div>
        <Explore expArr={expArr} />
      </div>

      {/* Holiday special */}
      <div className=" mt-10">
        <div className="flex items-center justify-between">
          <p className="text-priGreen font-medium text-md md:text-lg">
            Holiday special
          </p>
          <Link to={"/holiday-special"} className="text-danger font-medium ">
            see all
          </Link>
        </div>
        <Bestdeals bestArr={bestD} occasion={"holiday"} />
      </div>

      {/* Recommends */}
      <div className="mt-10 recommend">
        <div className="flex items-center justify-between">
          <p className="text-priGreen font-medium text-md md:text-lg">
            Recommends
          </p>
          <Link to={"/recommends"} className="text-danger font-medium ">
            see all
          </Link>
        </div>
        <Recommends recArr={recArr} />
      </div>

      {/* Peoples choice */}
      <div className="mt-10">
        <p className="text-priGreen font-medium text-md md:text-lg mb-5">
          People's choice
        </p>
        <CardNormal chefArr={peoArr} />
      </div>

      {/* Review */}
      <div className="mt-10 review">
        <div className="flex items-center justify-between">
          <p className="text-priGreen font-medium text-md md:text-lg">
            {" "}
            Reviews
          </p>
          <Link to={"/reviews"} className="text-danger font-medium ">
            see all
          </Link>
        </div>
        <Review revArr={revArr} />
      </div>

      {/* bottom text  */}
      <BottomText text={"thanks for your patronage"} />

      {/* scroll to top  */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
