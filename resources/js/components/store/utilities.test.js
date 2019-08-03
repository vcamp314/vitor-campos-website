import profile from '../Assets/data/profile.json';

import { initializeExpandedStateData, toggleExpandedStateItem } from './utilities';

describe('initializeExpandedStateData', () => {

  it('should have set isExpanded to the value from the data for the first responsibility under the first experience', () => {
    let expandableItemStateList = initializeExpandedStateData();

    let firstExpandableItemState = profile.experience[0].sections[0].responsibilities[0].isExpanded;
    let firstExpandableItemID = profile.experience[0].sections[0].responsibilities[0].id;
    expect(firstExpandableItemState).toEqual(getExpandedStateById(firstExpandableItemID, expandableItemStateList));
  });

});

describe('toggleExpandedStateItem', () => {

    it('should have toggled isExpanded for the given item ID, testing using the first responsibility under the first experience', () => {
        let expandableItemStateList = initializeExpandedStateData();
        let firstExpandableItemID = profile.experience[0].sections[0].responsibilities[0].id;

        let updatedExpandableItemStateList = toggleExpandedStateItem(expandableItemStateList, firstExpandableItemID)

        // check if updated ExpandableItemStateList item is no longer equal to the value from the original
        expect(getExpandedStateById(firstExpandableItemID, updatedExpandableItemStateList)).toEqual(!getExpandedStateById(firstExpandableItemID, expandableItemStateList));
      });
});

const getExpandedStateById = (id, expandableItemStates) => {

    const currentExpandedStateObj = expandableItemStates.find(expandedStateObj => {
        return expandedStateObj.id === id;
    });

    return currentExpandedStateObj.isExpanded;
}
