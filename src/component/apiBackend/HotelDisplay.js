import React from 'react';
import {headers,BASE_URL} from "./ApiCall";
import  { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import ViewMoreSearch from "../SearchForm/ViewMoreSearch";






function Hotels() { 
    const [allHotel, SetCurrectHotel] = useState([]);
    const url =  BASE_URL + "establishments";
    const hotelFecth = { headers };



    useEffect(() => {
        fetch(url,hotelFecth).then((reponse) => reponse.json()).then((hotelJson) => {
            console.log(hotelJson);
            SetCurrectHotel(hotelJson);
        }).catch((error) => console.log(error));
    }, []);

    const searchFilter = function(e) {
        const name = e.target.value.toLowerCase();    
        const filteredArray = allHotel.filter(function(char) {
        const nametype = char.name.toLowerCase();    
        if (nametype.startsWith(name)) {        
               return true;
        }
        return false;
        });
            
        SetCurrectHotel(filteredArray);
    };   


    return (
        <div className = "boostrapviewMore">
            <ViewMoreSearch searchState={searchFilter} />
        <Container fluid>
            <Row>
                {allHotel.map(hotel => {
                    return (
                        <Col lg={3} className="boxGridHotels">
                            <Card>
                                <Card.Img className = "boxGridHotels__image" src={hotel.image}/>  
                                <Card.Body>                  
                                    <h3 className = "boxGridHotels__header">{hotel.name}</h3>
                                    <p className = "boxGridHotels__text">{hotel.description}</p>   
                                    </Card.Body>                               
                                    <NavLink className = "boxGridHotels__link" to = {`/hotelpage/${hotel.id}`}>See more</NavLink>
                            </Card>
                        </Col>
                    );
                }             
                )}
            </Row>
        </Container>  
        </div>  

    );
}
export default Hotels;
