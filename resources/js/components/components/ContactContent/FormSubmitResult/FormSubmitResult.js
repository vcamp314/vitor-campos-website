import React from 'react';
import { Container, Card, CardTitle } from 'reactstrap';

import './FormSubmitResult.css';

const formSubmitResult = (props) => (
    <Container className="results-container text-center">
        <Card>
            <CardTitle className="card-title-padding"><h1>{props.isSuccess ? "Message Successfully Sent!" : "Error"}</h1></CardTitle>

                {props.messages.map((message, i) => {
                    return (
                        <p key={i}>{message}</p>
                    );
                })}
                <div className="card-bottom-padding"></div>
        </Card>
    </Container>
);

export default formSubmitResult;