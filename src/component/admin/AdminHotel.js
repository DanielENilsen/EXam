import React from 'react';
import {headers, BASE_URL} from "../apiBackend/ApiCall";
import  { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

function ListHotel() { 
    const [allHote, SetCurrectHotel] = useState([]);
    const url =  BASE_URL + "establishments";
    const hotelFecth = { headers };

    useEffect(() => {
        fetch(url,hotelFecth).then((reponse) => reponse.json()).then((hotelJson) => {
            console.log(hotelJson);
            SetCurrectHotel(hotelJson);
        }).catch((error) => console.log(error));
    }, []);


    return (
        <div className = "listApp">
       
                           {allHote.map((hotel) => {
                        return(                          
                                <ul class="list-group">
                                    <li  className = "list-group-item listApp__list" key={hotel.id}><NavLink to={`/admin/hotels/edit/${hotel.id}`}>{hotel.name}</NavLink></li>
                                </ul>
                      
                            
                          
                            );
                        })}
                     
        </div>                
     
    );
}

export default ListHotel;