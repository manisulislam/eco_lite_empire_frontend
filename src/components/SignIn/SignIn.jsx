import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {login,reset} from '../../features/auth/authSlice'
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const {user,isError,isSuccess,isLoading, message}=useSelector((state)=>state.auth)
  const {email,password}=formData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData={
     
      email,
      password
      
    }
    dispatch(login(userData))
    }
    
    useEffect(()=>{
      if(isError){
        console.log(message)
      }
      if(isSuccess || user){
        navigate('/')
        alert("successfully log in.")
      }
      dispatch(reset())
    },[isError, isSuccess,user,message, dispatch,navigate])
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        {isLoading && <Spinner/>}
        <form onSubmit={handleSubmit} className="space-y-4">
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
          <p>Forgot password? <Link to="/forgot_password"><span className='hover:text-green-500'>Reset Password</span></Link></p>
          <p>You have not an account. Please <Link to='/register'><span className='text-green-500'>Register</span></Link></p>
         
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
