
// api---http://127.0.0.1:8000/api/categories/

import { useState, useEffect } from "react"
import axios from 'axios';


const CategorySection = () => {
    const [allCategory, setAllCategory]=useState([])
    
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/categories/`)
        .then(response=>{
            setAllCategory(response.data)
           
        })
        .catch(error=>console.log(error))
    },[])

  return (
    <div className="container mx-auto py-12 px-2">
      <h3 className="text-3xl font-bold text-center mb-8">Our All Categories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {allCategory.map((category) => (
          <div key={category.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <h4 className="text-xl font-semibold mb-4">{category.name}</h4>
            
          </div>
        ))}
      </div>
    </div>
    
  )
}

export default CategorySection