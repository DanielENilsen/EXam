import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../authcontext/AuthContext";


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(AuthContext);

    return <Route {...rest} render={(props) => (user ? <Component {...rest} {...props} /> : <Redirect to="/register" />)} />;
};

export default ProtectedRoute;
