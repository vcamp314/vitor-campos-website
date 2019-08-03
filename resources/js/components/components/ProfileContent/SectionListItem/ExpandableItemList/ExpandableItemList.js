import React from 'react';

import ExpandableItem from '../../../ExpandableItem/ExpandableItem';
import SectionListItem from '../SectionListItem';
import ToggleableSection from '../../../../components/Filter/ToggleableSection/ToggleableSection';

const expandableItemList = (props) => {

    const getExpandedStateById = (id, expandableItemStates) => {

        const currentExpandedStateObj = expandableItemStates.find(expandedStateObj => {
            return expandedStateObj.id === id;
        });

        return currentExpandedStateObj.isExpanded;
    }

    return (
        <React.Fragment>
            {props.listData.map((listItem, i) => {
                return (

                    <div key={listItem.id}>
                        <ToggleableSection toggleOn={!listItem.filteredOut}>

                            <ExpandableItem
                                heading={listItem.description}
                                id={listItem.id}
                                expandedState={getExpandedStateById(listItem.id, props.expandableItemStates)}
                                toggleExpand={() => props.onToggleExpand(listItem.id)}
                            >
                                <SectionListItem
                                    section={listItem}
                                    listName="details"
                                    expandableItemStates={props.expandableItemStates}
                                    onToggleExpand={props.onToggleExpand}
                                />
                            </ExpandableItem>

                        </ToggleableSection>
                    </div>
                );
            })}
        </React.Fragment>
    );
}

export default expandableItemList;