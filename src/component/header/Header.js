import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HomePage from "../home/Home";
import Login from "../login/Login";
import Admin from "../admin/Admin";
import ProtectedRoute from "../routes/routes";



function HeaderFrom () { 
    const user = localStorage.getItem("username");    
    console.log(user); 
        
        return( 
            <Router>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>                
      
            <Switch>
                <Route path="/" exact component={HomePage} />  
                <Route path="/login" exact component={Login} />             
                <ProtectedRoute path="/admin" exact component={Admin} />                     
             

            
           
            </Switch>
             </Router>
           

        );
    
    
}

export default HeaderFrom;

/* <div className = "header">                              

                <h1>{this.state.Text}</h1>
                <button onClick={this.chancheState}>{this.state.Text}</button>
            </div>*/