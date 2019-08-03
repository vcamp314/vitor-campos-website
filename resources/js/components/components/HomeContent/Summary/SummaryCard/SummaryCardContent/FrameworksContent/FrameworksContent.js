import React from 'react';
import { CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import { faReact } from '@fortawesome/free-brands-svg-icons';

import SummaryCardLayout from '../../SummaryCardLayout/SummaryCardLayout';
import SummaryCardSkillList from '../../SummaryCardSkillList/SummaryCardSkillList';

import '../SummaryCardContent.css';


const summary = (props) => {
    return (
        <SummaryCardLayout icon={faReact} iconSize="4x" cardTitle="Frameworks">

            <CardText>My favourite frontend framework to use is
                <Link className="priority-text" to="/profile" onClick={() => props.onSelectSkill("React")}> React.</Link>
            </CardText>

            <SummaryCardSkillList
                heading="Frontend frameworks I use:"
                skillList={["Redux", "React Router", "Reactstrap", "Bootstrap", "jQuery"]} 
                onSelectSkill={props.onSelectSkill}
            />

            <SummaryCardSkillList
                heading="Backend frameworks:"
                skillList={["Django", "Laravel", "ASP.NET"]} 
                onSelectSkill={props.onSelectSkill}
            />

        </SummaryCardLayout>
    );
};

export default summary;