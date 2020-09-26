import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import  {AuthContext}  from "../authcontext/autoCont";





function LoginForm() { 
    const { register, handleSubmit } = useForm();
    const  { registerUser } = useContext(AuthContext);

    const history = useHistory();

    function onSubmit(data) { 
        if(data.username === "Admin" && data.password === "Admin") { 
            localStorage.setItem("username","Admin");
            localStorage.setItem("password","Admin"); 
            registerUser(data.username);
            history.push("/admin");
            
        }
    }     


    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <input name = "username" placeholder="Enter Username" ref={register} type = "text" />
            <input name = "password" placeholder="Enter Username" ref={register} type = "password" />
            <Button type = "submit">Submit</Button>
        </Form>
    )
}


export default LoginForm;