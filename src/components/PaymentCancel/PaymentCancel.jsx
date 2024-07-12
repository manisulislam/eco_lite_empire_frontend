

const PaymentCancel = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50">
            <img 
                src="https://via.placeholder.com/150/FFBB33/ffffff?text=Cancelled" 
                alt="Payment Cancelled" 
                className="w-32 h-32 mb-6"
            />
            <h1 className="text-3xl font-bold text-yellow-600 mb-4">Payment Cancelled</h1>
            <p className="text-lg text-yellow-500 mb-4">Your payment was cancelled. If you have any questions, please contact us.</p>
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">Go to Homepage</button>
        </div>
    );
};

export default PaymentCancel;
