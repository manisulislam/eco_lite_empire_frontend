import { Link } from "react-router-dom"
import { FaHome } from 'react-icons/fa';


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-9xl font-extrabold mb-4 animate-bounce">404</h1>
      <p className="text-3xl font-light mb-8">Oops! Page Not Found</p>
      <Link
        to="/"
        className="flex items-center px-6 py-3 text-lg font-medium bg-white text-blue-600 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        <FaHome className="mr-2" />
        Go to Homepage
      </Link>
    </div>
  )
}

export default NotFound