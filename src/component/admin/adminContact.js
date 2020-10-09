import React from 'react';
import {headers, BASE_URL} from "../apiBackend/ApiCall";
import  { useState, useEffect } from "react";





function AdminContact() {

    const [masseage,setMassage] = useState([]);
    const Url = `${BASE_URL}contacts`;
    const masseageFetch = { headers };



    useEffect(() => {
        fetch(Url,masseageFetch).then((reponse) => reponse.json()).then((hotelJson) => {
            console.log(hotelJson);
            setMassage(hotelJson);
        }).catch((error) => console.log(error));
    }, []);

    



   return (
       <div >
           <h1>Meassage</h1>
           <div className = "">
               <div>
                   {masseage.map((massage) => {
                       return (
                           <div className = "loginForm addNewHOtel">
                               <h3>{massage.name}</h3>
                           </div>
                       );
                    })} 
               </div>            
               
           </div>

       </div>
   );
}
export default AdminContact;



