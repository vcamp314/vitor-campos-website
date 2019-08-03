import React from 'react';
import { Container, Row, Col, FormGroup, Button } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';


const contactForm = (props) => {

    return (
        <Row className="text-center">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
                <Container>
                    <AvForm onValidSubmit={props.ValidSubmitHandler} onInvalidSubmit={props.InvalidSubmitHandler}>
                        <FormGroup>
                            <AvField type="text" name="name" id="name" placeholder="Name" required errorMessage="Please enter your name" />
                        </FormGroup>
                        <FormGroup>
                            <AvField type="email" name="email" id="email" placeholder="Email" validate={{
                                required: { valie: true, errorMessage: 'Please enter your email' },
                                email: { value: true, errorMessage: 'that is not a valid email - Please enter a valid email I can reach you at' }
                            }} />
                        </FormGroup>
                        <FormGroup>
                            <AvField type="textarea" name="message" id="message" placeholder="Message" rows="5" required errorMessage="Please enter your inquiry here" />
                        </FormGroup>
                        <FormGroup>
                            <Col className="text-right">
                                <Button color="primary">Send</Button>
                            </Col>
                        </FormGroup>
                    </AvForm>
                </Container>
            </Col>
        </Row>
    );
};

export default contactForm;