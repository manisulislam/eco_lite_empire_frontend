
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
import Register from './components/Register/Register'
import SignIn from './components/SignIn/SignIn'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import ActivateAccount from './components/ActivateAccount/ActivateAccount'

import { Provider } from 'react-redux'
import {store} from './app/store'
import NotFound from './components/NotFound/NotFound'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import DashboardHome from './components/Dashboard/DashboardHome'
import Profile from './components/Dashboard/Profile'
import Settings from './components/Dashboard/Settings'
import ResetPasswordConfirm from './components/ForgotPassword/ResetPasswordConfirm'
import Cart from './components/Cart/Cart'
import Testimonials from './components/Testimonials/Testimonials'
import AllProductSection from './components/AllProductSection/AllProductSection'

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
        path:"all_product",
        element:<AllProductSection/>
      }
      ,
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
        path:"register",
        element:<Register/>
      }
      ,
      {
        path:"sign_in",
        element:<SignIn/>
      },
      {
        path:"forgot_password",
        element:<ForgotPassword/>
      },
      {
        path:"password/reset/confirm/:uid/:token",
        element:<ResetPasswordConfirm/>
      },
      {
        path:"activate/:uid/:token",
        element:<ActivateAccount/>
      },
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:"testimonials",
        element:<Testimonials/>
      }
      ,
      {
        path:"*",
        element:<NotFound/>
      },
     
    ],
    
  }
  ,
  {
    path:"dashboard",
    element:<DashboardLayout/>,
    children:[
      {
        path:"",
        element:<DashboardHome/>
      },
      {
        path:"profile",
        element:<Profile/>
      },
      {
        path:"settings",
        element:<Settings/>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
