import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
