import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout, reset} from "../../features/auth/authSlice"
import { BsCart3 } from "react-icons/bs";
import DiscountOffer from '../DiscountOffer/DiscountOffer';

const Header = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const {user}=useSelector((state)=>state.auth)

  const handleLogOut=()=>{
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (

    <>
    <DiscountOffer/>
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


          <div className="flex justify-center p-4">
            <form  className="w-full max-w-lg flex">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                Search
              </button>
            </form>
         </div>

            <NavLink
              
              to="/"
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
              
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
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
              
            >
              Contact
            </NavLink>
            <NavLink
              to="/blog"
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
              
            >
              Blog
            </NavLink>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 ">
          {user ? 
              <>
              
              <NavLink
              to="/cart"
              className="text-black-500 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
              
            >
               <BsCart3 />
             
            </NavLink>
              <NavLink
              to="/dashboard"
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
              
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/"
              onClick={handleLogOut}
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
              
            >
              Logout
            </NavLink>

              </>
            
          :
            <>
            <NavLink
              to="/sign_in"
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 mr-2  text-sm font-medium"
              
            >
              Sign In
            </NavLink>
            <NavLink
              to="/register"
              className="text-green-500 hover:text-gray-700 inline-flex items-center px-1 pt-1  text-sm font-medium"
              
            >
              Register
            </NavLink>
            
            </>
          }
          
            

          </div>
        </div>
      </div>
    </div>
  </header>
    </>
);
};
  
export default Header