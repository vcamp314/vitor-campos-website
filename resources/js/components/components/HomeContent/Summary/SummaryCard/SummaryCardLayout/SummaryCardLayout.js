import React from 'react';
import { CardTitle, CardBody, Row, Col } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './SummaryCardLayout.css';

const summaryCardLayout = (props) => {
    return (
        <React.Fragment>
            <Row className="justify-content-center with-padding">
                <Col md="5" className="card-icons"><FontAwesomeIcon icon={props.icon} size={props.iconSize} /></Col>
            </Row>
            <CardBody>
                <CardTitle className="card-titles-spacing"><h4>{props.cardTitle}</h4></CardTitle>
                {props.children}
            </CardBody>
        </React.Fragment>
    );
};

export default summaryCardLayout;