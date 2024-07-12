

const PaymentFail = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-50">
            <img 
                src="https://via.placeholder.com/150/ff4444/ffffff?text=Failed" 
                alt="Payment Failed" 
                className="w-32 h-32 mb-6"
            />
            <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Failed!</h1>
            <p className="text-lg text-red-500 mb-4">Oops! Something went wrong. Please try again.</p>
            <button className="px-6 py-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition duration-300">Retry Payment</button>
        </div>
    );
};

export default PaymentFail;
