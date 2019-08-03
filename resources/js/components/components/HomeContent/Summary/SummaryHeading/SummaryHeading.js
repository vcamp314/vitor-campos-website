import React from 'react';
import { Container, Row, Col } from 'reactstrap';
 import {Link} from 'react-router-dom';

 import './SummaryHeading.css';


 const summaryHeading = (props) => {
    return (
        <Container className="summary-header">
            <Row>
                
            </Row>
            <Row>
                <Col className="text-center"><p className="lead"> <span>I am a process-oriented individual with
                    a go-getter attitude and a track record of taking <Link className="initiative-link" to="/profile" onClick={() => props.onSelectSkill("Initiative")}><strong>initiative</strong></Link>.</span> <br/>
                    I am currently based in Toronto, Canada but am looking to relocate to Tokyo,
                    Japan and am on the lookout for job opportunities in that area.</p></Col>                   
            </Row>

        </Container>
    );
  };
  
  export default summaryHeading;