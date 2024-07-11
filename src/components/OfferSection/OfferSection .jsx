import { Link } from "react-router-dom";


const OfferSection = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Special Offer</h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">Limited Time Only: Get 50% Off on All Items!</p>
        <p className="text-md md:text-lg lg:text-xl mb-8">Do not miss out on this incredible deal. Shop now and elevate your style with our exclusive collections.</p>
        <Link to="/all_product">
          <button className="bg-white text-indigo-500 font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:bg-gray-200 hover:scale-105">
            SHOP NOW
          </button>
        </Link>
        
        
      </div>
    </div>
  );
}

export default OfferSection;
