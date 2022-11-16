// import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import { BsSearch } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import {HiOutlineMenuAlt2} from "react-icons/hi"

const Navbar = () => {
  return (
    <nav className="px-3 md:px-6 lg:px-12 py-6 w-screen relative">
      <div className="flex justify-between items-center">
        <div className="md:hidden">
          <HiOutlineMenuAlt2 className="text-pureBlue text-3xl font-medium cursor-pointer" />
        </div>
        <div className="flex items-center">
          <img className="w-12 md:w-14 lg:w-20" src={logo} alt="logo" />
          <h1 className="md:pt-2 pl-2 text-priGreen font-bold lg:font-extrabold text-base md:text-xl">
            Bueno
          </h1>
        </div>

        <div className="hidden md:flex items-center md:space-x-6 pt-2">
          <a className="text-priBlack font-bold" href="/">
            Home
          </a>
          <a href="/" className="hover:text-priGreen">
            Menu
          </a>
          <a href="/" className="hover:text-priGreen">
            Service
          </a>
          <a href="/" className="hover:text-priGreen">
            Shop
          </a>
          <a href="/" className="hover:text-priGreen">
            Category
          </a>
        </div>

        <div className="flex items-center md:space-x-4 lg:space-x-6">
          <button className="hidden md:flex bg-priGreen items-center md:px-3 lg:px-6 rounded-lg py-3 text-pureWhite md:text-xs lg:text-base">
            <BsSearch className="mr-3 " />
            <p>Search</p>
          </button>
          <div className="relative bg-pureBlue p-2 lg:p-3 rounded-tr-lg rounded-tl-xl rounded-bl-2xl rounded-br-curve cursor-pointer">
            <MdOutlineShoppingCart className="text-pureWhite md:text-lg lg:text-xl md:text-2xl" />
            <span className="bg-danger text-pureWhite rounded-full text-center top-0.5 right-1 text-xs px-1 lg:px-1.5 lg:py-0.5 absolute">3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
