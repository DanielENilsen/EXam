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
      
        <div className = "edithForm">
            <Form onSubmit={handleSubmit(onSubmit)} className= "loginForm">
                <h1 className = "edithForm__header">Add New Hotel</h1>
                <Form.Control className= "loginForm__input" name="name"  placeholder="Hotel Name" ref={register} />
                <Form.Control className= "loginForm__input" name="email" placeholder="Email" ref={register} />
                <Form.Control className= "loginForm__input" name="image" placeholder="Image" ref={register} />
                <Form.Control className= "loginForm__input" name="description" placeholder="Description" ref={register} />
                <Form.Control className= "loginForm__input" name="price" placeholder="Price" ref={register} />
                <Form.Control className= "loginForm__input" name="maxGuests" placeholder="Rooms" ref={register} />
                <Form.Group className = "edithForm__group">
                     <Button className="loginForm__submit" type="submit">Submit</Button> 
                </Form.Group>                       
            </Form>            
        </div>
      
    );
}
export default AddHotel;