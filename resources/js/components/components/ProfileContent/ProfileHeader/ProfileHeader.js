import React from 'react';
import { Container, Card, CardHeader, CardBody, CardText } from "reactstrap";

import FilterTagList from '../../Filter/FilterControls/FilterTagList/FilterTagList';

import './ProfileHeader.css';

const profileHeader = (props) => (

    <Container className="header-vertical-padding text-center">
        <Card>
            <CardHeader>Filtering Status:</CardHeader>
            <CardBody>
                {(props.selectedTags.length === 0 ?

                    <React.Fragment>
                        <h4>No Filters Applied</h4>
                        <CardText>Type the name of the skill or technology you are looking for anywhere on this page at any time
                    to filter the content of this page</CardText>

                    </React.Fragment>

                    :

                    <React.Fragment>
                        <h4>Content filtered for: </h4>
                        <FilterTagList selectedTags={props.selectedTags} setToRemoveTag={props.setToRemoveTag} />
                    </React.Fragment>
                )}
            </CardBody>
        </Card>
    </Container>
);

export default profileHeader;