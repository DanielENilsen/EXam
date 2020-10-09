import React from 'react';
import { BrowserRouter as Router, Switch,Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SecureAuthSystem } from "../authcontext/AuthContext";
import ProtectedRoute from "../routes/routes";
import ListHotel from '../admin/AdminHotel';
import AddHotel from "../admin/addhotel";
import EdithHotel from "../admin/edithHotel";
import AdminContact from "../admin/adminContact";





function NavBarAdmin() { 
    return (
        <SecureAuthSystem>
            <Router>
                <div className = "headerLink">
                    <NavLink to="/listHotel">All Hotels</NavLink>
                    <NavLink to="/massage">Massage</NavLink>                
                    <NavLink to="/addhotel">Add Hotels</NavLink>                    
                </div>            
            <Switch>             
                <ProtectedRoute path="/listHotel" exact component={ListHotel} />
                <ProtectedRoute path="/addhotel" exact component={AddHotel} />  
                <ProtectedRoute path="/massage" exact component={AdminContact} />  
                <ProtectedRoute path="/admin/hotels/edit/:id" exact component={EdithHotel} /> 
                <Redirect to="/" />
            </Switch>
            </Router>  
        </SecureAuthSystem> 
    );
}

export default NavBarAdmin;