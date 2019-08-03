import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

import * as Actions from '../../store/actions/index';
import { Page } from '../../Assets/utilities/PagesEnum';

import './Footer.css';

const Footer = (props) => (

    <footer className="section footer-classic context-dark bg-image" style={{background: "#282c34"}}>
            <Container className="footer-block">


                <Row>
                    
                    <Col md={{ size: 4, offset: 1 }}> 
                        <div className="footer-text">
                            <p>You can find the source code for this website on <a href="https://github.com/vcamp314/vitor-campos-website">GitHub. </a></p>
                            <p>Please do not hesitate to contact me if you have any questions.</p>
                            
                        </div>
                    
                    </Col>                    
                    <Col md="6">
                        <Row className="justify-content-center">
                            <Col md={{ size: 'auto', offset: 1 }}>
                                <div className="footer-col">
                                    <Row><h5>CONTACT</h5></Row>
                                    <Row>
                                        <Col>
                                        <Link to="/contact" onClick={() => props.onPageSelected(Page.CONTACT)}><FontAwesomeIcon icon={faEnvelope} size="2x"  /></Link> <p></p>
                                            <a href="https://github.com/vcamp314/vitor-campos-website"><FontAwesomeIcon icon={faGithub} size="2x"  /></a>
                                        </Col>

                                    </Row>

                                </div>

   
                            </Col>                            
                            <Col md={{ size: 'auto', offset: 5 }}>
                                <div className="footer-col">
                                    <Row><h5>LINKS</h5></Row>
                                    <Row>
                                        <ul className="list-unstyled">
                                            <li>
                                                <Link to="/" onClick={() => props.onPageSelected(Page.HOME)}>Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/profile" onClick={() => props.onPageSelected(Page.PROFILE)}>Profile</Link>
                                            </li>
                                            <li>
                                                <a href="https://github.com/vcamp314/vitor-campos-website">GitHub</a>
                                            </li>
                                            <li>
                                                <Link to="/contact" onClick={() => props.onPageSelected(Page.CONTACT)}>Contact</Link>
                                            </li>
                                        </ul>
                                    </Row>
                                </div>
                            </Col>
                        </Row>                        
                                                

                    </Col>




                </Row>
                                


            </Container>
            <div className="developed-by text-center py-3" >This site was designed and developed by Vitor R. Campos - 2019</div>




    </footer>


);

const mapStateToProps = state => {

    return {
        currPage: state.header.currentPage
    };
}

const mapDispatchToProps = dispatch => {

    return {
        onPageSelected: (selectedPg) => dispatch(Actions.updatePage(selectedPg))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);