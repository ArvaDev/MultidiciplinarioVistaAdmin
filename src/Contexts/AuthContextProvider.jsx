import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Cambiado a token
  const [user, setUser] = useState(null); // Cambiado a user

  useEffect(() => {
    const storedToken = window.localStorage.getItem('token');
    const storedUser = JSON.parse(window.localStorage.getItem('user'));

    if (storedToken) {
      setToken(storedToken);
    }

    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (newToken, userData) => {
    window.localStorage.setItem('token', newToken);
    window.localStorage.setItem('user', JSON.stringify(userData));
    setToken(newToken);
    setUser(userData);
    console.log("token desde auth: ", token); // Cambiado a token
    console.log("data desde auth", user); // Cambiado a user
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};