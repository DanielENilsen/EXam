import React from 'react';
import {headers, BASE_URL} from "../apiBackend/ApiCall";
import  { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
        <div className = "listName">
            <div className = "allHote">
                {allHote.map((hotel) => {
                    return(
                        <li key={hotel.id}><NavLink to={`/admin/hotels/edit/${hotel.id}`}>{hotel.name}</NavLink></li>
                        );
                    })}               
            </div>            
        </div>
    );
}

export default ListHotel;