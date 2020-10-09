import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faLock, faUserShield} from '@fortawesome/free-solid-svg-icons'






function CallOnHotel() {


    return (
        <div className = "displayCards">
            <div className = "cards">   
                <FontAwesomeIcon className = "cards__icons cards__check" icon={faCheck} />     
                <h3 className = "cards__header">Greet Review </h3>          
                <p className = "cards__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse.</p>                
            </div> 
            <div className = "cards">                     
                <FontAwesomeIcon  className = "cards__icons cards__lock" icon={faLock} />    
                <h3 className = "cards__header">Site are safe to use</h3>       
                <p className = "cards__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse.</p>                
            </div> 
            <div className = "cards">                  
                <FontAwesomeIcon className = "cards__icons cards__shield" icon={faUserShield} />
                <h3 className = "cards__header">Safe LoginSite</h3>  
                <p className = "cards__text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse.</p>                
            </div>                
        </div>
    );

}

export default CallOnHotel;