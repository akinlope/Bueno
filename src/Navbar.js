// import { Link } from "react-router-dom";
import logo from "./img/logo.png";
import { BsSearch } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="px-6 md:px-12 py-6 w-screen relative">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="w-20" src={logo} alt="logo" />
          <h1 className="pt-4 pl-2 text-priGreen font-extrabold text-xl">
            Bueno
          </h1>
        </div>

        <div className="flex items-center space-x-6 pt-4">
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

        <div className="flex items-center space-x-6">
          <button className="bg-priGreen flex items-center px-6 rounded-lg py-3 text-pureWhite">
            <BsSearch className="mr-3" />
            Search
          </button>
          {/* <input type="text" placeholder="search" className="placeholder-pureWhite p-4 bg-priGreen h-10 mt-3 rounded-md border border-priGray outline-priGray border-solid" /> */}
          <div className="relative bg-pureBlue p-3 rounded-tr-lg rounded-tl-xl rounded-bl-2xl rounded-br-curve cursor-pointer">
            <MdOutlineShoppingCart className="text-pureWhite text-2xl" />
            <span className="bg-danger text-pureWhite rounded-full  text-center top-0.5 right-1 text-xs px-1.5 py-0.5 absolute">3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
