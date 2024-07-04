
// api---http://127.0.0.1:8000/api/products/
import { useState, useEffect } from "react"
import axios from 'axios';

const AllProductSection = () => {
    const [allProducts, setAllProducts]=useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/products/')
        .then(res=>{
            setAllProducts(res.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div className="container mx-auto py-12 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Our All Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition transform hover:scale-105"
          >
            <img
              src={product.image || 'https://via.placeholder.com/150'}
              alt={product.name}
              className="w-full h-64 object-cover mb-4 rounded"
              onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
            />
            <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
            <p className="text-lg text-gray-700 mb-2">Price: ${product.price} TK</p>
            <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllProductSection