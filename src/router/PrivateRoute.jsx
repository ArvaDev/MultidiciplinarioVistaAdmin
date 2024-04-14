import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContextProvider";

const PrivateRoute = ({ children, roles }) => {
    const { token, user } = useContext(AuthContext);

    const isAuthenticated = !!token && user;
    const userRole = user ? user.role : null;
    const hasAccess = isAuthenticated && (roles === undefined || roles.includes(userRole));

    return hasAccess ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;