import { assets } from "../../assets/assets";
import './home.css'
const Steps= () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full mb-2 px-6 md:px-20 py-10">

     
     <div className="max-w-xl flex flex-col gap-6 text-center ml-2 md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-800">
          Let's Cook Your Favorite Meal
        </h1>
        <p className="text-gray-700 text-base md:text-lg">
          Discover a world of flavors and elevate your cooking experience. Whether you're craving comfort food or gourmet dishes, we help you cook it just right.
        </p>
      </div> 
       <video
  src={assets.pizza}
  className="w-[250px] h-full md:w-[350px] mb-6 md:mb-0 pizza"
  autoPlay
  // loop
  muted
  playsInline
>
  Your browser does not support the video tag.
</video>
    </div>
  );
};

export default Steps;

