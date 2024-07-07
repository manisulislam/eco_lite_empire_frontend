

const ActivateAccount = () => {
    const handleSubmit = () => {
        
        // Add form validation logic here
        console.log("activate account clicked");
        
      };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Activate Account</h2>
        <div className="space-y-4">
          
          
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