import React, { useState } from "react";
import { BASE_URL, headers } from "../apiBackend/ApiCall"
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";





function HotelCard() {
    let { id } = useParams();
    const options = { headers };
    const fetchUrl = BASE_URL + "establishments/" + id;
    const [hotel, setHotel] = useState([]);
  


    useState(() => {
        fetch(fetchUrl,options) .then((response) => response.json())
        .then((json) => {
            setHotel(json)
            console.log(json)

        })
        .catch((error) => console.log(error));

    }, []);
/*This secluded wilderness cabin is the perfect spot for a restful and cosy getaway.*/
    return (    
            <div className = "hotelSpec">
                <div className = "conteiner">
                    <div className = "row">
                        <div className = "col-xl-6 col-lg-6 hotelCardSpec__firstCol">
                            <img className = "col col-xl-12" src={hotel.image} />
                        </div>
                        <div className = "col-xl-5 col-lg-5 hotelCardSpec__seconCol">
                            <h1 className = "col-xl-10 hotelCardSpec__headerText">{hotel.name}</h1>
                            <div>
                                <p className = "col-xl-12 col-lg-12 hotelCardSpec__description">{hotel.description}</p>
                                <div className = "hotelCardSpec__inner">                                   
                                    <div className = "row">
                                        <h6 className = "hotelCardSpec__info col-sm-3 col-xl-1">Price: {hotel.price} kr</h6>
                                        <h6 className = "hotelCardSpec__info col-sm-3 col-xl-1">Rooms: {hotel.maxGuests}</h6>
                                        {hotel.selfCatering ?(
                                            <h6 className = "hotelCardSpec__info col-sm-3 col-xl-1">Self-catering: Yes</h6>

                                        ):(
                                            <h6 className = "hotelCardSpec__info col-sm-3  col-xl-1">Self-catering: No</h6>

                                        )}                                                                                                             
                                    </div>  
                                   <NavLink className = "hotelCardSpec__link" to = "/admin">See more</NavLink>                                 
                                 </div>  
                            </div>                             
                        </div>                    
                    </div>
                </div>           
            </div>               
       
    );
}


export default HotelCard;



