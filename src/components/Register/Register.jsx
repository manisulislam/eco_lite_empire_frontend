import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {register} from '../../features/auth/authSlice'

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    re_password: ''
  });

  const dispatch=useDispatch()
  const {user,isError,isSuccess,isLoading, message}=useSelector((state)=>state.auth)

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const {first_name,last_name,email,password,re_password}=formData

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    if (formData.password !== formData.re_password) {
      alert("Passwords do not match");
      
    }
    else{
      const userData={
        first_name,
        last_name,
        email,
        password
      }
      dispatch(register(userData))
      }
    }
    // Add form submission logic here
 

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md p-8 mt-10 mb-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mt-1"
              value={first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mt-1"
              value={last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mt-1"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mt-1"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="re_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="re_password"
              id="re_password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mt-1"
              value={re_password}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          <p>Already have an account? Please <Link to='/sign_in'><span className='text-green-500'>Sign In</span></Link></p>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
