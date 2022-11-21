import { AiOutlineMail, AiFillTwitterCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
// import { TiSocialTwitterCircular } from "react-icons/ti";
import { SiInstagram } from "react-icons/si";
import { ImPinterest2 } from "react-icons/im";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Footer = () => {
  return (
    <div className="bg-pureWhite">
      <div className="mt-20 bg-pureBlue">
        <div className="flex justify-center pt-5 pb-5 bg-pureWhite rounded-bl-full">
          <p className="text-sm text-priGray ">Thanks for your patronage</p>
        </div>
        <div className="bg-pureWhite h-20"></div>
        <div className="bg-pureBlue rounded-tr-full h-14 z-20 -mt-20"></div>

        <div className=" bg-pureBlue">
          <div className=" flex justify-center">
            <p className=" text-4xl text-priGreen font-semibold">Bueno.</p>
          </div>

          <div className=" w-1/2 flex justify-between p-5">
            <div className=" pl-5">
              <p className=" text-lg text-priGreen font-semibold">Links</p>
              <div>
                <p className=" text-priGray mt-2">Home</p>
                <p className=" text-priGray mt-2">Menu</p>
                <p className=" text-priGray mt-2">Service</p>
                <p className=" text-priGray mt-2">Shop</p>
                <p className=" text-priGray mt-2">Category</p>
              </div>
            </div>
            <div>
              <p className=" text-lg text-priGreen font-semibold">Contact us</p>
              <div className=" flex justify-between mt-2">
                <div className=" flex">
                  <div className=" text-xl pr-4 text-priGray">
                    <AiOutlineMail />
                  </div>
                  <p className=" text-priGray">buenofood@gmail.com</p>
                </div>
              </div>
              <div className=" flex justify-between mt-2">
                <div className=" flex">
                  <div className=" text-xl pr-4 text-priGray">
                    <BsTelephone />
                  </div>
                  <p className=" text-priGray">+2349120749746</p>
                </div>
              </div>

              <div className=" mt-5">
                <p className=" text-lg text-priGreen font-semibold">
                  Follow us
                </p>
                <div className=" flex text-priGray">
                  <CiFacebook className=" text-xl mr-2 cursor-pointer"/>
                  <AiFillTwitterCircle className="text-xl mr-2 cursor-pointer"/>
                  <SiInstagram className="text-xl mr-2 cursor-pointer"/>
                  <ImPinterest2 className="text-xl mr-2 cursor-pointer"/>
                </div>
              </div>
            </div>

            <div>
                <p className=" text-lg text-priGreen font-semibold">Support</p>
                <div>
                    <p className=" text-priGray mt-2">FAQ</p>
                    <p className=" text-priGray mt-2">Contact</p>
                    <p className=" text-priGray mt-2">Review</p>
                </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
