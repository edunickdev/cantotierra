import { images } from "../../../config/statics";

const Contents = () => {
  return (
    <div className="col-span-12 grid grid-cols-12">
      <div className="col-span-6 flex flex-col justify-center items-center px-32">
        <h3 className="text-3xl text-start w-full text-primary font-semibold">Lorem</h3>
        <h2 className="text-4xl font-extrabold py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="col-span-6">
        <img src={images.imagen1} alt={images.imagen1} className="relative object-cover overflow-hidden rounded-full shadow-lg shadow-gray-600 h-[200px] w-[200px] top-5 left-72" />
        <img src={images.imagen2} alt={images.imagen2} className="relative object-cover overflow-hidden rounded-full shadow-lg shadow-gray-600 h-[230px] w-[230px] left-24 -mt-32 z-10" />
        <img src={images.imagen3} alt={images.imagen3} className="relative object-cover overflow-hidden rounded-full shadow-lg shadow-gray-600 h-[270px] w-[270px] left-60 -mt-32 z-[11]" />
        <img src={images.imagen4} alt={images.imagen4} className="relative object-cover overflow-hidden rounded-full shadow-lg shadow-gray-600 h-[300px] w-[300px] left-12 -mt-32 z-[12]" />
      </div>
    </div>
  );
};

export default Contents;
