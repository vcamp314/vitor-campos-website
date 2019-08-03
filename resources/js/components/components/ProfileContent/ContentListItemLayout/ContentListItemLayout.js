import React from 'react';
import { Media } from "reactstrap";

import logo from '../../../Assets/images/logo-emblem.png';
import placeholderLogo from '../../../Assets/images/empty-logo-placeholder.png'
import './ProfileSectionLayout.css';

const listItemLayout = (props) => (

    
        <Media>
            <Media left top href={props.url}>
                <Media object src={props.logo === "" ? placeholderLogo : (props.logo === "site-logo" ? logo : props.logo)} alt={props.logoAlt} />
            </Media>
            <Media body>
                <Media heading>
                    <a href={props.url}>{props.heading}</a>
                </Media>

                {props.children}

            </Media>
        </Media>

);

export default listItemLayout;