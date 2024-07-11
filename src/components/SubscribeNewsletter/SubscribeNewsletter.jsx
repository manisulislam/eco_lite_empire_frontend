
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SubscribeNewsletter = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 my-8 mx-12 rounded-md">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">Stay updated with the latest news and special offers!</p>
        <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative w-full md:w-auto">
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-96 pl-10 pr-4 py-3 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubscribeNewsletter;
