import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// API endpoint example: http://127.0.0.1:8000/api/products/1/

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${id}/`)
            .then(res => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch(err => {
            setError(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <div className="flex">
            <div className="w-1/2">
                <img src={product.image || 'https://via.placeholder.com/150'} 
                alt={product.name}
                 className="w-full h-auto object-cover rounded-lg"
                 onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
                 />
            </div>
            <div className="w-1/2 pl-6 flex flex-col justify-between">
                <div>
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <p className="text-2xl font-semibold mb-4">Price: ${product.price}</p>
                </div>
                <div className="flex items-center space-x-4">
                    <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-16 p-2 border rounded-lg"
                    />
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">Add to Cart</button>
                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ProductDetail;
