import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getUserInfo } from '../../features/auth/authSlice';


const DashboardHome = () => {
  const dispatch=useDispatch();
  
  const {userInfo}=useSelector((state)=>state.auth)

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);
  console.log(userInfo)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Welcome, {userInfo.first_name} {userInfo.last_name}
        </h1>
        <p className="text-center text-gray-600 mb-6">
          We are glad to have you back! Here is a quick overview of your dashboard.
        </p>
        <div className="bg-blue-100 p-4 rounded-lg shadow-inner">
          <h2 className="text-xl font-semibold text-blue-800">Your Info</h2>
          <p className="text-gray-700 mt-2">
            <strong>First Name:</strong> {userInfo.first_name}
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Last Name:</strong> {userInfo.last_name}
          </p>
          <p className="text-gray-700 mt-2">
            <strong>Email:</strong> {userInfo.email}
          </p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome