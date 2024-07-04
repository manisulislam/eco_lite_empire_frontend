import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.jpeg"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4  gap-8">
      <div className="flex justify-center md:justify-start pl-8">
        <img src={logo} alt="Company Logo" className="h-32 w-auto ml-8-"  />
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-4">Company</h3>
        <ul>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-300">About us</Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-300">Vision</Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-300">Tech</Link>
          </li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-4">Legals</h3>
        <ul>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-300">Privacy</Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-300">Terms and condition</Link>
          </li>
        </ul>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-xl font-bold mb-4">Follow us</h3>
        <ul>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-300">Facebook</Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-300">Twitter</Link>
          </li>
          <li className="mb-2">
            <Link to="/" className="hover:text-gray-300">Instagram</Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-700 mt-8 pt-6 text-center">
      <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer