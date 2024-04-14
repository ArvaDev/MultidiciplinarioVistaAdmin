import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(window.localStorage.getItem('token') || null);

    useEffect (() => {
        const storedToken = window.localStorage.getItem('token'); 
        if (storedToken){
            setToken(storedToken);
        }
    }, []);

    const login = (token) => {
        window.localStorage.setItem('token', token);
        setToken(token);
    };

    const logout = () => {
        window.localStorage.removeItem('token');
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


