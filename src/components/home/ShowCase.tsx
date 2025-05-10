import {Search } from "lucide-react";
import { showCase } from "../../data/showCase";

const ShowCase = () => {
  return (
    <section className="flex flex-col items-center py-16 px-6 md:px-20 min-h-screen bg-white dark:bg-black">
      <h2 className="text-yellow-500 text-4xl font-bold mb-2">Looking for inspiration?</h2>
      <hr className="w-20 bg-yellow-400 h-1 border-none mb-10" />

      <div className="max-w-7xl w-full mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {showCase.map((feature, index) => (
          <div
            key={index}
            className="bg-yellow-400/80 dark:bg-[#1f1f1f] rounded-lg  hover:shadow-xl transition-all duration-300  flex flex-col p-2  items-center text-center"
          >
            <img
              src={feature.image}
              alt={`${feature.title} illustration`}
              className="w-full h-60 object-cover  mb-4"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
       
          </div>
        ))}
        
      </div>
      <div className="flex items-center justify-between gap-3 md:gap-5 mt-[150px] bg-white py-2 px-4 md:px-5 rounded-full w-[400px] border-2 border-yellow-400">
          <input
            type="text"
            placeholder="what you like now to cook"
            className="flex-grow bg-transparent border-none outline-none p-2 text-[16px] md:text-[18px]"
          />
          <Search size={25} className="text-gray-600"/>
        </div>
    </section>
  );
};

export default ShowCase;
