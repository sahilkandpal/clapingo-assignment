import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  auth: "loading",
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = ({
  children,
}) => {
  const [auth, setAuth] = useState("loading");
  const navigate = useNavigate();

  const verifyUser = () => {
    console.log("verifying...");
    let userData = localStorage.getItem("credentials");
    userData = JSON.parse(userData);
    if (!userData) {
        setAuth("unauthenticated");
        return;
    }
    if(userData.userId && userData.password) setAuth("authenticated");
  };

  const login = (data) => {
    setAuth("loading");
    localStorage.setItem("credentials", data);
    setAuth("authenticated");
    navigate("/dashboard", {replace: true});
  };

  const logout = () => {
    localStorage.removeItem("credentials");
    setAuth("unauthenticated");
    navigate("/login", {replace: true});
  };

  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
