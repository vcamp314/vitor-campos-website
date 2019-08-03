import React from 'react';
import { CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import SummaryCardLayout from '../../SummaryCardLayout/SummaryCardLayout';
import SummaryCardSkillList from '../../SummaryCardSkillList/SummaryCardSkillList';

import '../SummaryCardContent.css';


const summary = (props) => {
    return (
        <SummaryCardLayout icon={faLaptopCode} iconSize="4x" cardTitle="Other Skills">

            <CardText>I advocate
                <Link className="priority-text" to="/profile" onClick={() => props.onSelectSkill("TDD")}> TDD </Link> methodology and
                <Link className="priority-text" to="/profile" onClick={() => props.onSelectSkill("automated unit testing")}> automated unit testing.</Link>
            </CardText>

            <SummaryCardSkillList
                heading="I test with:"
                skillList={["Jest/Enzyme", "JUnit", "Python Unittest"]}
                onSelectSkill={props.onSelectSkill}
            />

            <SummaryCardSkillList
                heading="Other technologies I use:"
                skillList={["Git", "MySQL", "MSSQL", "JSP", "LINUX", "Multi-threading", "MVC", "OOP"]} 
                onSelectSkill={props.onSelectSkill}
            />
        </SummaryCardLayout>
    );
};

export default summary;