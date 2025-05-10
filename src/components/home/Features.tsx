import { features } from "../../data/features";



    
const Features = () => {
  return (
    <div className="flex flex-col items-center py-10 px-6 md:px-20 min-h-screen">
      <h2 className="text-yellow-500 text-3xl font-semibold ">Features</h2>
      <hr  className="w-20 bg-yellow-400 h-1 border-none"/>

      <div className="py-16 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-yellow-400/70 dark:bg-[#1f1f1f] rounded-lg shadow-md p-6 text-center hover:shadow-lg min-h-[300px] transition-all "
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-38 h-38 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-white text-sm my-2">{feature.description}</p>
           
            </div>
          ))}
        </div>
      </div>
  
</div>
    </div>
  );
};

export default Features;
