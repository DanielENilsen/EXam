import React from 'react';

function SearchForm () { 
    return (
        <div className = "search">
            <input className = "search__input" name = "placeName"  type="text"  placeholder="Find your booking here" />
        </div>
    );
}

export default SearchForm;