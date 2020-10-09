import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../authcontext/AuthContext";


function LogOut() { 
    const { logout } = useContext(AuthContext);
    const history = useHistory();

    function LogUserOut() {
        logout();
        history.push("/");
    }
    return (
        <>
            <button  className = "logoutButton" onClick = {LogUserOut}>Logout</button>
        </>
    );
}

export default LogOut;