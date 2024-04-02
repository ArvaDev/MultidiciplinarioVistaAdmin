import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import NoFound from './pages/NoFound/NoFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "*",
    element: <NoFound/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
