/*
* filter.js:
* Contains various functions pertaining to filtering including 
* for applying filters, removing filters and making lists of 
* filter tag names for use in the profile page.
*
* To allow for the tree-like structure of the data, with 
* unspecified numbers of nodes and branches, iterative
* method has been employed 
*/

export const applyFilter = (profile, selectedTags) => {

    const keys = Object.keys(profile);
    let filterOutSection;

    if (selectedTags.length === 0) {
        return;
    }

    for (const key of keys) {

        filterOutSection = true;
        setFilteredOutItems(profile[key], filterOutSection, selectedTags);
    }
}
// iterative function
const setFilteredOutItems = (itemList, filterOutSection, selectedTags) => {

    for (let i = 0; i < itemList.length; i++) {

        itemList[i].filteredOut = checkItemTags(selectedTags, itemList[i].tags);
        let childItemListName = getChildItemListName(itemList[i]);

        if (childItemListName !== "") {

            let filterOutChild = itemList[i].filteredOut;
            itemList[i].filteredOut = setFilteredOutItems(itemList[i][childItemListName], filterOutChild, selectedTags);
        }
        filterOutSection = itemList[i].filteredOut ? filterOutSection : false;
    }
    return filterOutSection;
}
// for determining which layer of the data we are on
const getChildItemListName = (parentItem) => {

    if (parentItem.hasOwnProperty('sections')) {
        return 'sections';

    } else if (parentItem.hasOwnProperty('responsibilities')) {
        return 'responsibilities';

    } else if (parentItem.hasOwnProperty('details')) {
        return 'details';
    }

    return "";

}

const checkItemTags = (selectedTags, itemTags) => {

    if (itemTags === undefined) {
        return true;
    }

    for (const flag of selectedTags) {
        if (itemTags.indexOf(flag) > -1) {
            return false;
        }
    }
    return true;
}

export const removeAllFiltering = (profile) => {
    const keys = Object.keys(profile);

    for (const key of keys) {
        removeFilterFromItems(profile[key]);
    }
}
// iterative function
const removeFilterFromItems = (itemList) => {

    for (let i = 0; i < itemList.length; i++) {

        itemList[i].filteredOut = false;

        let childItemListName = getChildItemListName(itemList[i]);
        if (childItemListName !== "") {
            removeFilterFromItems(itemList[i][childItemListName]);
        }
    }
}

export const checkMainSectionsFilter = (profileSection) => {

    let filterOut = true;
    
    for (const item of profileSection) {
        filterOut = item.filteredOut? filterOut : false; 
    }

    return filterOut;
}
// used after applyFilter to confirm if an entire main section such
//  as the education or experience section should not be displayed
export const checkFilterResultsEmpty = (profile) => {
   
    const keys = Object.keys(profile);

    for (const key of keys) {
        if(!checkMainSectionsFilter(profile[key])){
            return false;
        }
    }
    return true;
}
// used for preparing the auto-complete list for possible tags to
// filter by
export const getAllTags = (profile) => {

    var tagList = new Set();
    const keys = Object.keys(profile);

    for (const key of keys) {
        getTagsFromChildItems(profile[key], tagList);
    }
    return [...tagList];
}

const getTagsFromChildItems = (itemList, tagList) => {

    for (let i = 0; i < itemList.length; i++) {

        if(itemList[i].tags !== undefined){
            mergeSets(tagList, itemList[i].tags);
        }

        let childItemListName = getChildItemListName(itemList[i]);
        if (childItemListName !== "") {
            getTagsFromChildItems(itemList[i][childItemListName], tagList);
        }
    }
}

const mergeSets = (set, ...iterables) => {
    for (const iterable of iterables) {
        for (const item of iterable) {
            set.add(item);
        }
    }
}
