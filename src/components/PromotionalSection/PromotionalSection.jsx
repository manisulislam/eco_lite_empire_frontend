
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/images/promotional.jpeg"; // Update with your image path

const PromotionalSection = () => {
  return (
    <div className="relative bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">EXPLORE</h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">Elevate Your Wardrobe, Embrace Timeless Style!</p>
        <p className="text-md md:text-lg lg:text-xl mb-8">Explore our collections today and experience the joy of fashion. Shop now for the epitome of chic sophistication!</p>
        <Link to="/all_product">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            SHOP NOW
          </button>
        </Link>
        
       
      </div>
    </div>
  );
}

export default PromotionalSection;
