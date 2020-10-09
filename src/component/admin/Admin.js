import React from 'react';
import AdminHeader from '../adminHeader/adminHeader';
import NavBarAdmin from "../adminHeader/NavBarAdmin";


function Admin() { 
    return(
        <div className = "admin">
            <h1>Welcome to Admin</h1>
            <NavBarAdmin />
                               
        </div>

    );
}

export default Admin;