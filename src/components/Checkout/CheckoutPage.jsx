
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
const CheckoutPage = () => {
  const location = useLocation();
  const product = location.state?.product;
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form data submitted:', formData);
  };


  return (
    <>
     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
            {product && (
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">Product Summary</h2>
                <div className="flex items-center space-x-4">
                  <img 
                    src={product.image || 'https://via.placeholder.com/20'} 
                    alt=""
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <p className="text-lg"><strong>Name:</strong> {product.name}</p>
                    <p className="text-lg"><strong>Price:</strong> ${product.price}</p>
                  </div>
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {['name', 'email', 'address', 'city', 'state', 'zipCode'].map((field) => (
                  <div key={field} className="flex flex-col">
                    <label className="leading-loose capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="px-4 py-2 border focus:ring-blue-500 focus:border-blue-500 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none"
                      placeholder={`Your ${field}`}
                    />
                  </div>
                ))}
                <div >
                  <Link to="/payment" className="pt-4 flex items-center space-x-4">
                  <button type="submit" className="flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600">
                    Proceed to Payment
                  </button>
                  </Link>
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CheckoutPage;
