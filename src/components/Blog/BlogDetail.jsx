// api---http://127.0.0.1:8000/api/blogs/1/

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/blogs/${id}/`)
      .then((res) => setBlog(res.data));
  }, [id]);

  // console.log("blog", blog);
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10">
      <div>
        <img
          src={blog.image || 'https://via.placeholder.com/150'}
          alt=""
          className="w-full h-60 object-cover rounded-lg"
          onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
        />
      </div>
      <div className="mt-6">
        <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.content}</p>
        <p className="text-gray-400">Created Date: {new Date(blog.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default BlogDetail