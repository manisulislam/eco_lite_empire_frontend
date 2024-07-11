
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTruck, faUndo, faSearch } from '@fortawesome/free-solid-svg-icons';

const featuresData = [
  {
    icon: faLock,
    title: "Secure Payments",
    description: "Your payment information is processed securely.",
  },
  {
    icon: faTruck,
    title: "Free Shipping",
    description: "Enjoy free shipping on all orders.",
  },
  {
    icon: faUndo,
    title: "Easy Returns",
    description: "Return items easily within 30 days.",
  },
  {
    icon: faSearch,
    title: "Order Tracking",
    description: "Track your order from our warehouse to your door.",
  },
];

const Features = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <FontAwesomeIcon icon={feature.icon} className="text-indigo-500 text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
