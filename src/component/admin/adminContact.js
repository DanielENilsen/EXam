import React from 'react';
import {headers, BASE_URL} from "../apiBackend/ApiCall";
import  { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons'


function AdminContact() {
        
           
    const [masseage,setMassage] = useState([]);
    const Url = `${BASE_URL}contacts`;
    const masseageFetch = { headers };
    var createStyleRefs = React.createRef();


   

    useEffect(() => {
        fetch(Url,masseageFetch).then((reponse) => reponse.json()).then((hotelJson) => {
            console.log(hotelJson);
            setMassage(hotelJson);
        }).catch((error) => console.log(error));
    }, []);

    
   return (
        <div className = "innerBox">
            <div className = "meassageHotel">                
          
                {masseage.map((massage) => {
                    return (
                       <ul class="list-group meassageHotel__box">
                           <div className = "list-group-item">                               
                                <h3>{massage.name}</h3>
                                <div  className = "meassageHotel__inner">
                                    <h6>{massage.email}</h6>
                                    <p className = "meassageHotel__text">{massage.message}</p>
                                </div>                                   
                            </div>
                        </ul>
                    );
                })} 
            </div>   
       </div>
   );
}
export default AdminContact;



