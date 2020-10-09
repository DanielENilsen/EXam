import React from 'react';
import Hotels from "../apiBackend/HotelDisplay";
import ViewMoreSearch from "../SearchForm/ViewMoreSearch";

function ViewALL() { 
    return (
        <div className = "Text">           
            <Hotels />
        </div>
    );
}

export default ViewALL;