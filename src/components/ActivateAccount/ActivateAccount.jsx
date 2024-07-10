import { useNavigate,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {activate,reset} from '../../features/auth/authSlice'
import Spinner from '../Spinner/Spinner';
import { useEffect } from 'react';
import Swal from 'sweetalert2';


const ActivateAccount = () => {

  const {uid, token}=useParams()
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const {isError,isSuccess,isLoading, message}=useSelector((state)=>state.auth)

  const handleSubmit = (e) => {

      e.preventDefault();
      const userData={
        uid,
        token
      }
      dispatch(activate(userData))
      
      
    }
      
    useEffect(()=>{
      if(isError){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: message || 'Something went wrong!',
        });
      }
      if(isSuccess ){
        navigate('/sign_in')
        
      }
      dispatch(reset())
    },[isError, isSuccess,message, dispatch,navigate])
    
  
    
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Activate Account</h2>
        
        <div className="space-y-4">
          
        {isLoading && <Spinner/>}
          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Activate
          </button>
        </div>
      </div>
    </div>
  )
}

export default ActivateAccount