import React from 'react';

function SearchForm () { 
    return (
        <div className = "search">
            <input className = "search__input" name = "placeName"  type="text"  placeholder="Find your booking here" />
            <input className = "search__date" name = "dateHolder" type="date"  placeholder="Date" />
            <input className = "search__rooms" name = "roomsHolder"  type="text"  placeholder="Rooms" />
            <input className = "search__Button" name = "placeName"  type="Submit"  value="Search" />
        </div>
    );
}

export default SearchForm;