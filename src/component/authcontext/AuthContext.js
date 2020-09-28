import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const existingUser = localStorage.getItem("user") || null;
    const existingpassword = localStorage.getItem("password") || null;

    const [user, setUser] = useState(existingUser);
    const [password, setPassword] = useState(existingpassword);

    function registerUser(username,password) {
        localStorage.setItem("user", JSON.stringify(username));
        localStorage.setItem("password", JSON.stringify(password));

        setUser(username);
        setPassword(password);
    }

    function logout() {
        setUser(null);
        setPassword(null)
        localStorage.removeItem("user");
        localStorage.removeItem("password");

    } 
    return <AuthContext.Provider value={{ user, password, registerUser, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
