import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Nav = ({ link, name, extra, activate }) => {
  return (
    <Link
      to={link}
      className={`text-priBlack ${
        activate === name ? "font-bold" : "hover:text-priGreen"
      } ${extra}`}
    >
      {extra && <BsSearch className="mr-3" />}
      {name}
    </Link>
  );
};

export default Nav;
