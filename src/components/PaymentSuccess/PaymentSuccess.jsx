

const PaymentSuccess = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-green-50">
            <img 
                src="https://via.placeholder.com/150/00C851/ffffff?text=Success" 
                alt="Payment Success" 
                className="w-32 h-32 mb-6"
            />
            <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
            <p className="text-lg text-green-500 mb-4">Thank you for your purchase. Your payment has been successfully processed.</p>
            <button className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300">Continue Shopping</button>
        </div>
    );
};

export default PaymentSuccess;
