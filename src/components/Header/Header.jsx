import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg'

const Header = () => {
  return (
    <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-16 w-16" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink
              
              to="/"
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              
            >
              About
            </NavLink>
            {/* <NavLink
              to="/services"
              className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              activeClassName="text-gray-900 border-indigo-500"
            >
              Services
            </NavLink> */}
            <NavLink
              to="/contact"
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8 rounded-full" src="user-avatar.jpg" alt="User Avatar" />
          </div>
        </div>
      </div>
    </div>
  </header>
);
};
  
export default Header