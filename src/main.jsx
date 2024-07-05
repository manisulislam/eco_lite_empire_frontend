
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import ProductDetail from './components/AllProductSection/ProductDetail'
import BlogDetail from './components/Blog/BlogDetail'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"products/:id",
        element:<ProductDetail/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"blog",
        element:<Blog/>
      },
      {
        path:"blog/:id",
        element:<BlogDetail/>
      },
      {
        path:"*",
        element:<h1>Error 404</h1>
      },
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
   
  </React.StrictMode>,
)
