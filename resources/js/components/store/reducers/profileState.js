import * as actionTypes from '../actions/actionTypes';
import { initializeExpandedStateData, toggleExpandedStateItem } from '../utilities';

const initialState = {
    expandableItemStates: initializeExpandedStateData(),
    selectedTags: [],
    modal: true,
    firstView: true
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.TOGGLE_EXPAND:
            return {
                ...state,
                expandableItemStates: toggleExpandedStateItem(state.expandableItemStates, action.ItemID)
            };
        case actionTypes.ADD_TAG:
            return {
                ...state,
                selectedTags: state.selectedTags.concat(action.tag)
            };
        case actionTypes.REMOVE_TAG:
            const updatedSelectedTags = state.selectedTags.filter((tag, index) => index !== action.tagIndex);
            return {
                ...state,
                selectedTags: updatedSelectedTags
            };
        case actionTypes.CLEAR_TAGS:
            return {
                ...state,
                selectedTags: []
            };
        case actionTypes.TOGGLE_MODAL:
            return {
                ...state,
                modal: !state.modal
            };
        case actionTypes.SET_AS_VIEWED:
            return {
                ...state,
                firstView: false
            };
        default:
            return state;
    }
};

export default reducer;