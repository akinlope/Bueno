import logo from "./img/logo.png";
import { BsSearch } from "react-icons/bs";
import { MdClose, MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInTwo, navVariants, slideIn } from "./variants";
import Nav from "./Components/Nav";

const navArr = [
  {
    id: 0,
    link: "/",
    name: "Home",
  },
  {
    id: 1,
    link: "/menu",
    name: "Menu",
  },
  {
    id: 2,
    link: "/services",
    name: "Services",
  },
  {
    id: 3,
    link: "/shop",
    name: "Shop",
  },
  {
    id: 4,
    link: "/category",
    name: "Category",
  },
  {
    id: 5,
    link: "/search",
    name: "Search",
    extra: "flex items-center justify-center md:hidden",
  },
];

const Navbar = ({ activeLink }) => {
  const [closeNav, setCloseNav] = useState(false);

  const handleNav = () => {
    setCloseNav(!closeNav);
  };

  return (
    <motion.nav
      className="px-4 md:px-6 lg:px-12 py-6 w-screen relative"
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex justify-between items-center relative">
        {/* hamburger and close menu shown only in mobile  */}
        <div className="md:hidden">
          {!closeNav ? (
            <HiOutlineMenuAlt2
              onClick={handleNav}
              className="text-pureBlue text-3xl font-medium cursor-pointer"
            />
          ) : (
            <MdClose
              onClick={handleNav}
              className="text-pureBlue text-3xl font-medium cursor-pointer"
            />
          )}
        </div>

        {/* navbar in smaller devices  */}
        <motion.div
          className="md:hidden w-full bg-pureWhite shadow-3xl absolute top-14 z-50 rounded-bl-xl rounded-br-xl"
          variants={slideIn}
          initial={!closeNav ? "initial" : ""}
          animate={closeNav ? "animate" : ""}
        >
          {navArr.map(({ id, link, name, extra }) => {
            return (
              <motion.li
                className="list-none py-5 text-center"
                variants={fadeInTwo}
                key={id}
                onClick={handleNav}
              >
                <Nav
                  link={link}
                  name={name}
                  extra={extra}
                  activate={activeLink}
                />
              </motion.li>
            );
          })}
        </motion.div>

        {/* logo  */}
        <div className="flex items-center">
          <img className="w-12 md:w-14 lg:w-20" src={logo} alt="logo" />
          <h1 className="md:pt-2 pl-2 text-priGreen font-bold lg:font-extrabold text-base md:text-xl">
            Bueno
          </h1>
        </div>

        {/* large screens nav  */}
        <div className="hidden md:flex items-center md:space-x-6 pt-2">
          {navArr.map(({ id, link, name, extra }) => {
            return (
              <Nav
                link={link}
                name={name}
                extra={extra}
                activate={activeLink}
                key={id}
              />
            );
          })}
        </div>

        {/* search and cart  */}
        <div className="flex items-center md:space-x-4 lg:space-x-6">
          <button className="hidden md:flex bg-priGreen items-center md:px-3 lg:px-6 rounded-lg py-3 text-pureWhite md:text-xs lg:text-base">
            <BsSearch className="mr-3 " />
            <p>Search</p>
          </button>
          <div className="relative bg-pureBlue p-2 lg:p-3 rounded-tr-lg rounded-tl-xl rounded-bl-2xl rounded-br-curve cursor-pointer">
            <MdOutlineShoppingCart className="text-pureWhite md:text-lg lg:text-xl md:text-2xl" />
            <span className="bg-danger text-pureWhite rounded-full text-center top-0.5 right-1 text-xs px-1 lg:px-1.5 lg:py-0.5 absolute">
              3
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
