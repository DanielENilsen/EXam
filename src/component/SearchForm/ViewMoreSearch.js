import React from 'react';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ViewMoreSearch() {
    return (
        <div className = "search viewMore">
            <Form>
                <Form.Group className = "viewMore__form">
                     <Form.Control className = "search__input viewMore__input " name = "placeName"  type="text"  placeholder="Find your booking here" />
                </Form.Group>
            </Form>
        </div>
    );
}

export default ViewMoreSearch;