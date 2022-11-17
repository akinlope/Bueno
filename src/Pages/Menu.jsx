import left_plate from "../img/left_plate.jpg";
import middle_plate from "../img/middle_plate.jpg";
import right_plate from "../img/right_plate.jpg";
import Menus from "../Components/Menus";

const plateArr = [
  {
    id: 1,
    img: left_plate,
    margin: "mt-0",
  },
  {
    id: 2,
    img: middle_plate,
    margin: "mt-8",
  },
  {
    id: 3,
    img: right_plate,
    margin: "mt-16",
  },
];

const Menu = () => {
  return (
    <div className="w-screen px-12">
      {/* Hero section  */}
      <div className="flex items-center min-h-hero">
        {/* The three images  */}
        <div className="w-3/5 flex space-x-6">
          {plateArr.map(({ id, img, margin }) => {
            return (
              <div
                className={`rounded-2xl overflow-hidden w-52 h-72 ${margin}`}
                key={id}
              >
                <img src={img} alt="img" className="h-72 w-96  object-cover" />
              </div>
            );
          })}
        </div>

        {/* Bueno menu text  */}
        <div className="w-2/5">
          <h1 className="text-pureBlue capitalize text-7xl font-bold mb-3 w-56 mx-auto bg-pureWhite">
            bueno
            <br />
            <span className="text-priGreen uppercase">menu</span>
          </h1>
          <p className="pl-0.5 text-priBrown w-56 mx-auto">
            Menu para varias opciones
          </p>
        </div>
      </div>

      {/* The menus component  */}
      <Menus />

      {/* bottom text  */}
      <div className="text-center mb-12">
        <p className="capitalize text-priBrown opacity-60">
          your choice. your order. our service
        </p>
      </div>
    </div>
  );
};

export default Menu;
