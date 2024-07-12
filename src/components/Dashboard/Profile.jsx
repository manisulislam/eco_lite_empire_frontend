

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Your Profile</h1>
        <p className="text-gray-600 mb-8">Manage your account settings and view your orders.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Information</h2>
          <p><span className="font-semibold">Username:</span> JohnDoe123</p>
          <p><span className="font-semibold">Email:</span> johndoe@example.com</p>
          <p><span className="font-semibold">Membership:</span> Premium</p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Edit Profile</button>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order History</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-700">Order #12345</p>
              <p className="text-gray-700">$99.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Order #23456</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Order #34567</p>
              <p className="text-gray-700">$79.99</p>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">View All Orders</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
