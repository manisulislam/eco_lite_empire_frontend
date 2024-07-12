import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { MdOutlineRateReview } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa6";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`fixed md:relative z-10 ${isOpen ? 'w-64' : 'w-0'} md:w-64 h-full bg-gray-300 text-white transition-width duration-300 ease-in-out shadow-lg`}>
      <button className="block md:hidden p-4 text-gray-800 hover:text-gray-600 transition-colors duration-200" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`${isOpen ? 'block' : 'hidden'} md:block p-4`}>
        <Link to="/" className="block text-gray-800 text-2xl font-bold mb-4 hover:text-gray-600 transition-colors duration-200">
          Eco Elite Empire
        </Link>
        
        <nav>
          <ul>
            <li className="mt-4">
              <Link to="/dashboard" className="flex items-center text-gray-800 text-lg font-semibold hover:text-gray-600 transition-colors duration-200" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Dashboard Home
              </Link>
            </li>
            <li className="mt-4">
              <Link to="/dashboard/profile" className="flex items-center text-gray-800 text-lg font-semibold hover:text-gray-600 transition-colors duration-200" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faUser} className="mr-3" />
                Profile
              </Link>
            </li>
            <li className="mt-4">
              <Link to="/dashboard/order_history" className="flex items-center text-gray-800 text-lg font-semibold hover:text-gray-600 transition-colors duration-200" onClick={toggleSidebar}>
              <FaJediOrder className="mr-3"  />
               Order History
              </Link>
            </li>
            <li className="mt-4">
              <Link to="/dashboard/my_review" className="flex items-center text-gray-800 text-lg font-semibold hover:text-gray-600 transition-colors duration-200" onClick={toggleSidebar}>
              <MdOutlineRateReview className="mr-3" />
                My Review
              </Link>
            </li>
            <li className="mt-4">
              <Link to="/dashboard/settings" className="flex items-center text-gray-800 text-lg font-semibold hover:text-gray-600 transition-colors duration-200" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faCog} className="mr-3" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
