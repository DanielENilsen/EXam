import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers } from "../apiBackend/ApiCall";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";





function AddHotel() {   

    const history = useHistory();
    const { register, handleSubmit } = useForm();

    async function onSubmit(data) {

        const url = BASE_URL + "establishments";      
        const options = { headers, method: "POST", body: JSON.stringify(data)};        

        // send every
        await fetch(url, options).then((r) => r.json()).then((j) => console.log(j)).catch((error) => console.log(error))
        
        history.push("/listHotel");      

    }

    return (
        <div className = "col-lg-5 col-xl-5">
            <Form onSubmit={handleSubmit(onSubmit)} className= "loginForm addNewHOtel">
                <h1 className = "loginForm__header">Add New Hotel</h1>
                <Form.Control className= "loginForm__input" name="name"  placeholder="Hotel Name" ref={register} />
                <Form.Control className= "loginForm__input" name="email" placeholder="Hotel email" ref={register} />
             
               <Button className="loginForm__submit btn btn-secondary" type="submit">Submit</Button>                        
            </Form>            
        </div>
    );
}
export default AddHotel;