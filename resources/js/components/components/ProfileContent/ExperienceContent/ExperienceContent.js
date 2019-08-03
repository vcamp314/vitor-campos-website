import React from "react";

import '../ProfileContent.css';
import ContentLayout from '../ContentLayout/ContentLayout';
import ContentListItemLayout from '../ContentListItemLayout/ContentListItemLayout';
import SectionListItem from '../SectionListItem/SectionListItem';
import ToggleableSection from '../../../components/Filter/ToggleableSection/ToggleableSection';
import { checkMainSectionsFilter } from '../../Filter/FilterUtilities/filter';

const experienceContent = (props) => (

    <ToggleableSection toggleOn={!checkMainSectionsFilter(props.experience)}>

        <ContentLayout sectionTitle="Professional Experience">

            {props.experience.map((experience, i) => {

                return (
                    <div key={experience.id}>
                        <ToggleableSection toggleOn={!experience.filteredOut}>
                            <ContentListItemLayout

                                logo={experience.logo}
                                logoAlt={experience.companyName}
                                url={experience.url}
                                heading={experience.companyName}
                            >

                                <h5>{experience.title}</h5>
                                <span className="Duration">{experience.duration}</span>
                                <span className="Location">{experience.location}</span>
                                <p className="Description">{experience.description}</p>

                                {experience.sections.map((section, i) => {

                                    return (
                                        <div key={section.id}>
                                            <ToggleableSection toggleOn={!section.filteredOut}>
                                                <SectionListItem
                                                    section={section}
                                                    listName="responsibilities"
                                                    expandableItemStates={props.expandableItemStates}
                                                    onToggleExpand={props.onToggleExpand}
                                                />
                                            </ToggleableSection>
                                            <br/>
                                        </div>
                                    );
                                })}
                            </ContentListItemLayout>
                        </ToggleableSection>
                    </div>
                );
            })}
        </ContentLayout>
    </ToggleableSection>


);

export default experienceContent;