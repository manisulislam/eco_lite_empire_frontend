import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {resetPasswordConfirm,reset} from '../../features/auth/authSlice'
import Spinner from '../Spinner/Spinner';
import { useState,useEffect } from 'react';


const ResetPasswordConfirm = () => {
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
      });

    const {uid, token}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const {isError,isSuccess,isLoading, message}=useSelector((state)=>state.auth)
    const {new_password,re_new_password}=formData

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData={
        uid,
        token,
        new_password,
        re_new_password
        
        
        }
        dispatch(resetPasswordConfirm(userData))
        }
    
    useEffect(()=>{
      if(isError){
        console.log(message)
      }
      if(isSuccess){
        navigate('/')
        alert("successfully Password changed.")
      }
      dispatch(reset())
    },[isError, isSuccess,message, dispatch,navigate])


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Password Confirm</h2>
        {isLoading && <Spinner/>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="new_password" className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              name="new_password"
              id="new_password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mt-1"
              value={new_password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="re_new_password" className="block text-sm font-medium text-gray-700">New Confirm Password</label>
            <input
              type="password"
              name="re_new_password"
              id="re_new_password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mt-1"
              value={re_new_password}
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
  )
}

export default ResetPasswordConfirm