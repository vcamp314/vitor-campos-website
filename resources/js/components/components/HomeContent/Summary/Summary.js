import React from 'react';
import { Card, CardDeck, Container } from 'reactstrap';

import SummaryHeading from './SummaryHeading/SummaryHeading';

import LanguagesContent from './SummaryCard/SummaryCardContent/LanguagesContent/LanguagesContent';
import FrameworksContent from './SummaryCard/SummaryCardContent/FrameworksContent/FrameworksContent';
import OtherSkillsContent from './SummaryCard/SummaryCardContent/OtherSkillsContent/OtherSkillsContent';


import './Summary.css';


const summary = (props) => {
    return (
        <React.Fragment>

            <SummaryHeading onSelectSkill={props.onSelectSkill}/>

            <Container className="card-deck-container">
                <CardDeck>
                    <Card>
                        <LanguagesContent onSelectSkill={props.onSelectSkill} /> 
                    </Card>
                    <Card>
                        <FrameworksContent onSelectSkill={props.onSelectSkill} />
                    </Card>
                    <Card>
                        <OtherSkillsContent onSelectSkill={props.onSelectSkill} />
                    </Card>
                </CardDeck>
            </Container>
        </React.Fragment>
    );
};

export default summary;