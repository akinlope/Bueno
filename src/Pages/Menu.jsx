import left_plate from "../img/left_plate.jpg";
import middle_plate from "../img/middle_plate.jpg";
import right_plate from "../img/right_plate.jpg";
import Menus from "../Components/Menus";
import { motion } from "framer-motion";
import { fadeInSpring, fadeInUpDown } from "../variants";
import { useEffect } from "react";
import BottomText from "../Components/BottomText";

const plateArr = [
  {
    id: 1,
    img: left_plate,
    margin: "mt-0",
    delay: 0.6,
  },
  {
    id: 2,
    img: middle_plate,
    margin: "mt-8",
    delay: 0.8,
    hidden: "hidden",
  },
  {
    id: 3,
    img: right_plate,
    margin: "mt-16",
    delay: 0.9,
  },
];

const Menu = ({ setLink }) => {
  // to set active link
  useEffect(() => {
    const linked = () => {
      setLink("Menu");
    };
    linked();
  }, [setLink]);

  return (
    <div className="w-screen px-4 md:px-6 lg:px-12">
      {/* Hero section  */}
      <div className="flex flex-col md:flex-row items-center min-h-hero">
        {/* The three images  */}
        <div className="w-full md:w-3/5 flex justify-center mb-10 md:mb-0 md:justify-start space-x-6 mt-10 md:mt-0">
          {plateArr.map(({ id, img, margin, delay, hidden }) => {
            return (
              <motion.div
                className={`rounded-2xl overflow-hidden w-52 h-72 ${margin} ${hidden} md:block`}
                key={id}
                variants={fadeInSpring}
                initial="initial"
                animate="animate"
                custom={delay}
              >
                <img src={img} alt="img" className="h-72 w-96 object-cover" />
              </motion.div>
            );
          })}
        </div>

        {/* Bueno menu text  */}
        <motion.div
          className="w-full mb-10 text-center md:text-left md:mb-0 md:w-2/5"
          variants={fadeInUpDown("up")}
          initial="initial"
          animate="animate"
          custom={0.7}
        >
          <h1 className="text-pureBlue capitalize text-5xl md:text-6xl lg:text-7xl font-bold mb-3 w-56 mx-auto bg-pureWhite">
            bueno
            <br />
            <span className="text-priGreen uppercase">menu</span>
          </h1>
          <p className="text-sm md:text-md pl-0.5 text-priBrown w-56 mx-auto">
            Menu para varias opciones
          </p>
        </motion.div>
      </div>

      {/* The menus component  */}
      <Menus />

      {/* bottom text  */}
      <BottomText text={"your choice. your order. our service"} />
    </div>
  );
};

export default Menu;
