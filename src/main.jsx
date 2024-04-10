import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import Socios from './pages/Socios/Socios'
import Notificaciones from './pages/Notificationes/Notificaciones'
import NoFound from './pages/NoFound/NoFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/Register",
    element: <Register/>
  },
  {
    path: "/Home",
    element: <Home/>
  },
  {
    path: "/Home/Socios",
    element: <Socios/>
  },
  {
    path: "/Home/Notificaciones",
    element: <Notificaciones/>
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
