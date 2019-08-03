import profile from '../Assets/data/profile.json';

// Used to initialize the list of items that can be expandable and their expanded state
// from the data, for use in profile page
export const initializeExpandedStateData = () => {

    let expandedStateList = [];

    for (const experience of profile.experience) {

        for (const section of experience.sections) {

            setSectionExpandedState(expandedStateList, section.responsibilities);
        }
    }
    for (const project of profile.projects) {

        for (const section of project.sections) {

            setSectionExpandedState(expandedStateList, section.responsibilities);
        }
    }

    return expandedStateList;

};
//iterative function for setting the initial state of all the nested expandedItems
const setSectionExpandedState = (expandedStateList, itemList) => {

    for (const item of itemList) {

        if (item.hasOwnProperty('details')) {

            expandedStateList.push({

                id: item.id,
                isExpanded: item.isExpanded

            });

            setSectionExpandedState(expandedStateList, item.details);
        }
    }
}
// immutable toggling of an expandable item expanded state in the expandable item list
export const toggleExpandedStateItem = (expandedStateList, itemID) => {
    return expandedStateList.map( (item) => {
        if(item.id !== itemID) {
            return item;
        }
        return {
            ...item,
            isExpanded: !item.isExpanded
        };    
    });
}

export const updateObject = (previousObject, updatedProperties) => {
    return {
        ...previousObject,
        ...updatedProperties
    };
};