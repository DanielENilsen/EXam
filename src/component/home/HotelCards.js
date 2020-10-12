import   React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faLock, faUserShield} from '@fortawesome/free-solid-svg-icons';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';



function CallOnHotel() {   
 
    return (
       
        <div className = "displayCards">
        <Container fluid>
            <Row>
                <Col lg={4} className = "boxGridHotels">                     
                <Card.Img className = "boxGridHotels__image edithImage" src={'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
                                   
                    </Col> 
                    <Col lg={4} className = "boxGridHotels"> 
                <Card.Img className = "boxGridHotels__image edithImage" src={'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'} />
                    </Col> 
                    <Col lg={4} className = "boxGridHotels">                  
                <Card.Img className = "boxGridHotels__image edithImage" src={'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} />
                    </Col>                
            </Row>
        </Container> 
        </div>
    );
    

}

export default CallOnHotel;