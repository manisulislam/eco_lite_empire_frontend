// src/components/Order.jsx
import { useSelector } from "react-redux";

const Order = () => {
  const{shipping}=useSelector((state)=>state.shipping)
  

  console.log(shipping)
  const {name, address, email,city, state, zip_code}=shipping
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-4">Order Completed</h2>
        <p className="text-center text-gray-600 mb-6">Thank you for your purchase!</p>
        <p className="text-gray-800 text-center mb-2">Order Number: <span className="font-medium">123456</span></p>
        <p className="text-gray-800 text-center mb-6">Your order will be shipped to:</p>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <p className="text-gray-600"> {name}</p>
          <p className="text-gray-600"> {email}</p>
          <p className="text-gray-600">{address}</p>
          <p className="text-gray-600"> {city}{state}{zip_code}</p>
        </div>
      </div>
    </div>
  );
};

export default Order;
