import React from "react";

import '../ProfileContent.css';
import ContentLayout from '../ContentLayout/ContentLayout';
import ContentListItemLayout from '../ContentListItemLayout/ContentListItemLayout';
import SectionListItem from '../SectionListItem/SectionListItem';
import ToggleableSection from '../../../components/Filter/ToggleableSection/ToggleableSection';
import { checkMainSectionsFilter } from '../../Filter/FilterUtilities/filter';

const projectsContent = (props) => (

    <ToggleableSection toggleOn={!checkMainSectionsFilter(props.projects)}>

        <ContentLayout sectionTitle="Personal Projects">

            {props.projects.map((project, i) => {

                return (
                    <div key={project.id}>
                        <ToggleableSection toggleOn={!project.filteredOut}>
                            <ContentListItemLayout

                                logo={project.logo}
                                logoAlt={project.projectName}
                                url={project.url}
                                heading={project.projectName}
                            >

                                <span className="Location">{project.location}</span>
                                <p className="Description">{project.description}</p>

                                {project.sections.map((section, i) => {

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

export default projectsContent;