import left_plate from '../img/left_plate.jpg'
import middle_plate from '../img/middle_plate.jpg'
import right_plate from '../img/right_plate.jpg'

const Menu = () => {
  return (
    <div className="w-screen px-12">
      <div className="flex items-center min-h-hero">
        {/* The three images  */}
        <div className="w-3/5 flex space-x-6">
            <div className="rounded-2xl overflow-hidden w-52 h-72 bg-danger">
                <img src={left_plate} alt="orange plate" className='h-72 w-96  object-cover' />
            </div>
            <div className="rounded-2xl overflow-hidden w-52 h-72 bg-danger">
                <img src={middle_plate} alt="middle_plate" className='h-72 w-96  object-cover' />
            </div>
            <div className="rounded-2xl overflow-hidden w-52 h-72 bg-danger">
                <img src={right_plate} alt="right_plate" className='h-72 w-96  object-cover' />
            </div>
        </div>

        {/* Bueno menu text  */}
        <div className="w-2/5 bg-danger">
          <h1 className="text-pureBlue capitalize text-7xl font-bold mb-3">
            bueno<br /><span className="text-priGreen uppercase">menu</span>
          </h1>
          <p className="pl-0.5 text-priBrown">Menu para varias opciones</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
