
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Updated for React Router v6
import { removeFromCart } from '../../features/cart/cartSlice';
import Swal from 'sweetalert2';
import emptyCart from "../../assets/images/empty_cart.jpg"

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Successfully removed from the cart',
      showConfirmButton: false,
      timer: 2500
    });
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl text-center font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <img
            src={emptyCart}
            alt="Empty Cart"
            className="mx-auto mb-4 w-60 h-60"
          />
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <button
            onClick={handleNavigateHome}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Go to Home Page
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-200"
            >
              <img
                src={item.image || 'https://via.placeholder.com/150'}
                alt={item.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
              />
              <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-2">Price: ${item.price}</p>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
