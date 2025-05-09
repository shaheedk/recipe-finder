import { Search } from "lucide-react";
import { assets } from "../../assets/assets";
import "./home.css";
const Hero = () => {
  return (
    <div className="flex flex-col py-10 px-6 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full">
        <div className="l flex flex-col gap-6 text-center ml-2 md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Let's Cook Your <span className="text-yellow-400">Favorite</span>{" "}
            Meal
          </h1>
          <p className="text-gray-700 text-base md:text-lg max-w-xl dark:text-white">
            Discover a world of flavors and elevate your cooking experience.
            Whether you're craving comfort food or gourmet dishes, we help you
            cook it just right.
          </p>
        </div>
        <img
          src={assets.pizza}
          className="w-full h-full md:w-[350px] mb-6 md:mb-0 pizza"
        />
      </div>
      <div className="w-full flex justify-center ">
        <div className="flex items-center justify-between gap-3 md:gap-5 mb-3 bg-white py-2 px-4 md:px-5 rounded-full w-[400px] border-2 border-yellow-400">
          <input
            type="text"
            placeholder="what you like now to cook"
            className="flex-grow bg-transparent border-none outline-none p-2 text-[16px] md:text-[18px]"
          />
          <Search size={25} className="text-gray-600"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
