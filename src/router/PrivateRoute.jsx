import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children, roles }) => {

    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const isAuthenticated = !!token && user;
    const userRole = user ? user.roles : null;
    const hasAccess = isAuthenticated && (roles === undefined || roles.includes(userRole[0]));
    return hasAccess ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;