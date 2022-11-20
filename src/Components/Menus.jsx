const menuArr = [
  {
    id: 1,
    title: "luxury",
  },
  {
    id: 2,
    title: "premium",
  },
  {
    id: 3,
    title: "regular",
  },
  {
    id: 4,
    title: "special",
  },
  {
    id: 5,
    title: "appetizer",
  },
  {
    id: 6,
    title: "family & friends",
  },
];

const Menus = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 mt-8 mb-12">
      {menuArr.map(({ id, title }) => {
        return (
          <div className="w-auto mx-auto lg:mx-0 rounded-2xl shadow-3xl" key={id}>
            <h1 className="bg-pureBlue rounded-tr-2xl rounded-tl-2xl p-4 capitalize text-center text-pureWhite text-lg font-medium">
              {title}
            </h1>
            <div className="rounded-2xl px-4 pt-5 md:pt-10 pb-3 md:pb-6 mt-menu bg-pureWhite">
              {[0, 1, 2, 3, 4, 5, 6].map((items, index) => {
                return (
                  <div
                    className="flex items-center justify-between mb-3 md:mb-3.5"
                    key={index}
                  >
                    <div className="mr-5 md:mr-14 lg:mr-0">
                      <h4 className="uppercase font-semibold mb-1 md:mb-2">
                        food name
                      </h4>
                      <p className="text-xs capitalize text-priBrown">
                        lorem ipsum dolor sit amet, consectuer.
                      </p>
                    </div>
                    <p className="font-bold">$27.99</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menus;
