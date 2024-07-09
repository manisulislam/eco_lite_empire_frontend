import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {resetPassword,reset} from '../../features/auth/authSlice'
import Spinner from '../Spinner/Spinner';


const ForgotPassword = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const {isError,isSuccess,isLoading, message}=useSelector((state)=>state.auth)

  const [formData, setFormData] = useState({
    email: '',
  });
  const {email}=formData

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    // console.log(formData);

    const userData={
      email,
    }
    dispatch(resetPassword(userData))
    
  };
  useEffect(()=>{
    if(isError){
      console.log(message)
    }
    if(isSuccess ){
      navigate('/')
      alert("An email has been sent for update password.")
    }
    dispatch(reset())
  },[isError, isSuccess,message, dispatch,navigate])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>
        {isLoading && <Spinner/>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Email</label>
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
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
