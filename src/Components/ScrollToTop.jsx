import { useState } from "react";
import { useEffect } from "react";
import { BsArrowUp } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUpDown } from "../variants";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="rounded-full bg-priGreen text-center p-3 fixed right-12 z-10 bottom-10 cursor-pointer"
          onClick={handleClick}
          variants={fadeInUpDown('up')}
          initial="initial"
          animate="animate"
          exit={"initial"}
        >
          <BsArrowUp className="text-pureWhite" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
