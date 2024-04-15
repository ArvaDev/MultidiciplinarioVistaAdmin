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
import NoFound from "./pages/NoFound/NoFound";

function App() {

    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    {/* Rutas protegidas */}
                    <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="socios" element={<PrivateRoute><Socios /></PrivateRoute>} />
                    <Route path="/notificaciones" element={<PrivateRoute roles={['Admin', 'Socio']}><Notificaciones /></PrivateRoute>} />
                    <Route path="registrar-productos" element={<PrivateRoute roles={['Admin']}><Register /></PrivateRoute>} />
                    <Route path="registrar-socios" element={<PrivateRoute roles={['Admin']}><RegisterSocios /></PrivateRoute>} />
                    <Route path="*" element={<NoFound />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;