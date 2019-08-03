import React from 'react';
import { Container, Row, Col } from 'reactstrap';
 import {Link} from 'react-router-dom';

 import './EmptyResultDisplay.css';


 const emptyResultDisplay = (props) => {
    return (
        <Container>
            <Row >
                <Col className="text-center empty-result-vertical-padding">
                    <h2 >No results found for the selected filters</h2>
                </Col>
                            
            </Row>
            <Row>
                <Col className="text-center"><p className="lead">It seems there are no records 
                    of the skills or technologies you are searching for. It may just not be included here...<br/><br/> 
                    <span>Please do not hesitate to <Link className="contact-link" to="/contact" onClick={props.onContactRequested}><strong>contact me</strong></Link> to 
                    confirm if I have related experience. If I do not have any pertinent experience but I know someone who does, I will be happy to connect you with them.</span></p></Col>                   
            </Row>

        </Container>
    );
  };
  
  export default emptyResultDisplay;