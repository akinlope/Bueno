import { AiOutlineCopyrightCircle, AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsTelephone } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import { Link } from "react-router-dom";
// import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-pureBlue">
        <div className="rounded-bl-full bg-pureWhite h-14"></div>
      </div>
      <div className="bg-pureBlue rounded-tr-full h-14"></div>

      <div className=" bg-pureBlue pb-10">
        <p className=" text-4xl text-center text-priGreen font-semibold">
          Bueno.
        </p>

        <div className="flex justify-between px-12 p-7">
          <div className="">
            <p className="text-xl text-priGreen font-medium mb-3">Links</p>
            <div className="space-y-3">
              <li className="list-none text-priGray">
                <Link to={"/"}>Home</Link>{" "}
              </li>
              <li className="list-none text-priGray">
                <Link to={"/menu"}>Menu</Link>{" "}
              </li>
              <li className="list-none text-priGray">
                <Link to={"/service"}>Service</Link>{" "}
              </li>
              <li className="list-none text-priGray">
                <Link to={"/shop"}>Shop</Link>{" "}
              </li>
              <li className="list-none text-priGray">
                <Link to={"/category"}>Category</Link>{" "}
              </li>
            </div>
          </div>

          <div className="">
            <p className="text-xl text-priGreen font-medium mb-3">Contact us</p>
            <div className="space-y-1">
              <div className="flex items-center">
                <AiOutlineMail className="text-4xl pr-4 text-pureWhite opacity-60" />
                <p className="text-priGray">buenofood@gmail.com</p>
              </div>
              <div className="flex items-center">
                <BsTelephone className="text-4xl pr-4 text-pureWhite opacity-60" />
                <p className="text-priGray">+2349120749746</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xl text-priGreen font-medium mb-3">
                Follow us
              </p>
              <div className=" flex items-center text-priGray space-x-4">
                <div className="rounded-full border border-priGray p-2">
                  <a href="https://web.facebook.com/">
                    <GrFacebookOption className=" text-md cursor-pointer" />
                  </a>
                </div>
                <div className="rounded-full border border-priGray p-2">
                  <a href="https://twitter.com/">
                    <GrTwitter className=" text-md cursor-pointer" />
                  </a>
                </div>
                <div className="rounded-full border border-priGray p-2">
                  <a href="https://instagram.com/">
                    <BsInstagram className=" text-md cursor-pointer" />
                  </a>
                </div>
                <div className="rounded-full border border-priGray p-2">
                  <a href="https://pinterest.com/">
                    <FaPinterestP className=" text-md cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-xl text-priGreen font-medium mb-3">Support</p>
            <div className="space-y-3">
              <li className="list-none">
                <Link to={"/faq"} className="text-priGray">
                  FAQ
                </Link>{" "}
              </li>
              <li className="list-none">
                <Link to={"/contact"} className="text-priGray">
                  Contact
                </Link>{" "}
              </li>
              <li className="list-none">
                <Link to={"/reviews"} className="text-priGray">
                  Reviews
                </Link>{" "}
              </li>
            </div>
          </div>

          <div className="">
            <p className="text-xl text-priGreen font-medium mb-3">Location</p>
            <div className="w-20"></div>
          </div>


        </div>
        <p className="text-priGray text-md text-center flex items-center justify-center">
          <AiOutlineCopyrightCircle className="mr-1" /> 2022
        </p>

        <map name="">Google map</map>

      </div>
    </div>
  );
};

export default Footer;
