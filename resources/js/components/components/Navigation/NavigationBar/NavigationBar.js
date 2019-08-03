import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
     } from 'reactstrap';

import './NavigationBar.css';
import {Page} from '../../../Assets/utilities/PagesEnum';
import Logo from './Logo/Logo';

const navItemPadding = "px-3";


class NavigationBar extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
      this.setState({      
        isOpen: !this.state.isOpen
      });
    }
      
    render() {
      return (
        <div className="px-5">
          <Navbar className="navbar-transparent"  dark expand="md">

            <NavbarBrand href="/"><Logo /></NavbarBrand>
            
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>

              <Nav className="ml-auto nav-masthead" navbar>

                <NavItem className={navItemPadding}>
                  <NavLink className="nav-link"
                            activeClassName="active"   
                            exact to="/" 
                            onClick={() => this.props.selectPage(Page.HOME)}><strong>HOME</strong>
                  </NavLink>
                </NavItem>
                <NavItem className={navItemPadding}>
                  <NavLink className="nav-link"
                            activeClassName="active" 
                            exact to="/profile" 
                            onClick={() => this.props.selectPage(Page.PROFILE)}><strong>PROFILE</strong>
                  </NavLink>
                </NavItem> 
                <NavItem className={navItemPadding}>
                  <a className="nav-link"  href="https://github.com/vcamp314/vitor-campos-website"><strong>GITHUB</strong></a>
                </NavItem>
                <NavItem className={navItemPadding}>
                  <NavLink className="nav-link"
                            activeClassName="active" 
                            exact to="/contact" 
                            onClick={() => this.props.selectPage(Page.CONTACT)}><strong>CONTACT</strong>
                  </NavLink>
                </NavItem>                  
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
      }
}

export default NavigationBar;