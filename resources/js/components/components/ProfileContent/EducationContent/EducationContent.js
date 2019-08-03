import React from "react";

import '../ProfileContent.css';
import ContentLayout from '../ContentLayout/ContentLayout';
import ContentListItemLayout from '../ContentListItemLayout/ContentListItemLayout';
import ToggleableSection from '../../../components/Filter/ToggleableSection/ToggleableSection';
import { checkMainSectionsFilter } from '../../Filter/FilterUtilities/filter';

const educationContent = (props) => (

    <ToggleableSection toggleOn={!checkMainSectionsFilter(props.education)}>

        <ContentLayout sectionTitle="Education">

            {props.education.map((education, i) => {

                return (
                    <div key={education.id}>
                        <ToggleableSection toggleOn={!education.filteredOut}>
                            <ContentListItemLayout

                                logo={education.logo}
                                logoAlt={education.institute}
                                url={education.url}
                                heading={education.institute}
                            >
                                <h5>{education.title}</h5>
                                <span className="Duration"> {"Graduation year: " + education.graduationYear}</span>
                                <span className="Location">{education.location}</span>
                                <p className="Description">Technical skill gained: {education.skillsGained}</p>

                            </ContentListItemLayout>
                        </ToggleableSection>
                    </div>
                );
            })}
        </ContentLayout>
    </ToggleableSection>
);

export default educationContent;