import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (paymentMethod === 'sslcommerz') {
      try {
        const response = await axios.post('http://127.0.0.1:8000//api/sslcommerz/init/', formData);
        window.location.href = response.data.GatewayPageURL;
      } catch (error) {
        console.error('Error initializing payment:', error);
      }
    } else {
      console.log('Payment method:', paymentMethod);
      navigate("/order")
      
    }

  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-6">Payment Method</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block mb-2 text-lg font-medium text-gray-700">Choose Payment Method:</label>
                <select
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>Select a payment method</option>
                  <option value="cod">Cash on Delivery</option>
                  <option value="sslcommerz">Digital Payment (SSLCommerz)</option>
                </select>
              </div>

              {paymentMethod === 'cod' && (
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-2">Cash on Delivery</h2>
                  <p>Please ensure you have the exact amount ready upon delivery.</p>
                </div>
              )}

              {paymentMethod === 'sslcommerz' && (
                <div className="mb-6 p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg shadow-lg">
                  <h2 className="text-xl font-bold mb-2">Digital Payment (SSLCommerz)</h2>
                  <div className="flex flex-col space-y-4">
                    {['name', 'email', 'address', 'city', 'state', 'zipCode'].map((field) => (
                      <div key={field}>
                        <label className="block mb-2 text-sm font-medium capitalize">{field}</label>
                        <input
                          type="text"
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          placeholder={`Your ${field}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 flex items-center space-x-4">
                <button
                  type="submit"
                  className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600"
                >
                  Confirm Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
