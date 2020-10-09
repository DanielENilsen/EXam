import React from 'react';
import { NavLink } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'



function AdminHeader () { 
    return(
        <div className = "headerLink">
            <ListGroup className="nav-item">
                 <NavLink ClassName = "nav-link" to ="/addhotel">Add Hotels</NavLink>
            </ListGroup>
            <NavLink ClassName = "nav-link"  to ="/liftofHotel">All Hotels</NavLink>
            <NavLink ClassName = "nav-link"  to ="/massage">Massage</NavLink>                
            <NavLink ClassName = "nav-link"   to ="/addhotel">Add Hotels</NavLink>
        </div>                      

    )

}

export default AdminHeader;