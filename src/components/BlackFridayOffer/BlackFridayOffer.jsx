import { Link } from "react-router-dom";


const BlackFridayOffer = () => {
  return (
    <div className="bg-black text-red-500 py-8 my-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col space-y-4">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          🎉 Black Friday Sale 🎉
        </div>
        <div className="text-lg md:text-xl lg:text-2xl text-center">
          Up to 50% Off Sitewide - Do not Miss Out!
        </div>
        <Link to="/all_product">
        <button className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:bg-red-600 hover:scale-105">
          Shop Now
        </button>
        </Link>
       
      </div>
    </div>
  );
}

export default BlackFridayOffer;
