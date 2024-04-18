import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContextProvider";
import PrivateRoute from "./router/PrivateRoute";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Socios from "./pages/Socios/Socios";
import Notificaciones from "./pages/Notificationes/Notificaciones";
import RegisterSocios from "./pages/RegisterSocio/RegisterSocio";
import Register from "./pages/Register/Register";
import Stadistic from "./pages/Stadistic/Stadistic"
import NoFound from "./pages/NoFound/NoFound";
export default function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home/estadisticas" element={<PrivateRoute roles={['Admin', "Socio"]}><Stadistic /></PrivateRoute>} />
                    <Route path="/home" element={<PrivateRoute roles={['Admin']} ><Home/></PrivateRoute>} />
                    <Route path="/socios" element={<PrivateRoute roles={['Admin']}><Socios /></PrivateRoute>} />
                    <Route path="/notificaciones" element={<PrivateRoute roles={['Admin']}><Notificaciones /></PrivateRoute>} />
                    <Route path="/registrar-productos" element={<PrivateRoute roles={['Admin']}><Register /></PrivateRoute>} />
                    <Route path="/registrar-socios" element={<PrivateRoute roles={['Admin']}><RegisterSocios /></PrivateRoute>} />
                    <Route path="*" element={<NoFound />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}