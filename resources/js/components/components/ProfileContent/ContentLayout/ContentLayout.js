import React from 'react';
import { Container, Row, Col } from "reactstrap";

import './ContentLayout.css';

const contentLayout = (props) => (

    <Container className="add-vertical-padding">
        <h2>{props.sectionTitle}</h2>

        <Row>
            <Col>
                {props.children}
            </Col>
        </Row>

    </Container>
);

export default contentLayout;