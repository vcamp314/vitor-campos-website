import * as actionTypes from './actionTypes';

export const toggleExpand = (ItemID) => {
    return {
        type: actionTypes.TOGGLE_EXPAND,
        ItemID: ItemID
    };
};

export const addTag = (tag) => {
    return {
        type: actionTypes.ADD_TAG,
        tag: tag
    };
};

export const removeTag = (tagIndex) => {
    return {
        type: actionTypes.REMOVE_TAG,
        tagIndex: tagIndex
    };
};

export const clearTag = () => {
    return {
        type: actionTypes.CLEAR_TAGS
    };
};

export const toggleModal = () => {
    return {
        type: actionTypes.TOGGLE_MODAL
    };
};

export const setAsViewed = () => {
    return {
        type: actionTypes.SET_AS_VIEWED
    };
};