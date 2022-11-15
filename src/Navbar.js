// import { Link } from "react-router-dom";
import logo from "./img/logo.png";

const Navbar = () => {
  return (
    <nav className="px-6 md:px-12 py-6 w-screen">
      <div className="flex justify-between items-center">
        <div className="flex bg-slate-400">
          <img className="w-20 h-14" src={logo} alt="" />
          <h1 className="pt-4 pl-2 text-priGreen font-extrabold text-xl">
            Bueno
          </h1>
        </div>

        <div className="flex space-x-4 pt-4">
          <a className="text-priBlack font-bold" href="/">
            Home
          </a>
          <a href="/">Menu</a>
          <a href="/">Service</a>
          <a href="/">Shop</a>
          <a href="/">Category</a>
        </div>

        <div className="flex space-x-5  ">
          <input type="text" placeholder="search" className="placeholder-pureWhite p-4 bg-priGreen h-10 mt-3 rounded-md border border-priGray outline-priGray border-solid" />
          <div className="">Search-cart</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
