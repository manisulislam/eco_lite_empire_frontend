//  api---http://127.0.0.1:8000/api/blogs/

import { useState, useEffect } from "react"
import axios from 'axios';

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/blogs/")
          .then(res => {
            setBlogs(res.data)
          })
          .catch(err => console.log(err))
      },[])

  
  return (
        <div className="bg-gray-100 min-h-screen p-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Our Blog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map(blog => (
                <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={blog.image || 'https://via.placeholder.com/150'}
                     alt=""
                      className="w-full h-48 object-cover"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/150'}
                      />
                   
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                        <p className="text-gray-600">{blog.content.slice(0, 100)}...</p>
                    </div>
                    <button className="mt-4 mx-auto ml-6 mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        View Details
                        </button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Blog