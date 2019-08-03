import React from 'react';
import { CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

import './SummaryCardSkillList.css';

const summary = (props) => {
    return (
        <React.Fragment>
            <CardSubtitle className="card-subtitles-spacing"><h6>{props.heading}</h6></CardSubtitle>
            <ul className="list-unstyled">
                {props.skillList.map((skill, i) => {
                    return (
                        <li key={i}>
                            <Link to="/profile" onClick={() => props.onSelectSkill(skill)}>{skill}</Link>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    );
};

export default summary;