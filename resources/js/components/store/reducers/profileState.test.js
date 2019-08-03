import reducer from './profileState';
import * as actionTypes from '../actions/actionTypes';
import { initializeExpandedStateData, toggleExpandedStateItem } from '../utilities';

describe('profile reducer', () => {

    let initialState;

    beforeEach(() => {
        initialState = {
            expandableItemStates: initializeExpandedStateData(),
            selectedTags: [],
            modal: true,
            firstView: true
        };
    });

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should store the toggled value of the expanded state of an item upon toggling expansion for that item', () => {
        let ItemID = initialState.expandableItemStates[0].id;
        let ItemInitialExpandedState = initialState.expandableItemStates[0].isExpanded;
        expect(reducer(initialState, 
            {
                type: actionTypes.TOGGLE_EXPAND,
                ItemID: ItemID

            }).expandableItemStates[0].isExpanded).toEqual(!ItemInitialExpandedState);
    });
    it('should store new tag upon adding new tag', () => {
        expect(reducer(initialState, 
            {
                type: actionTypes.ADD_TAG,
                tag: "testTag"

            }).selectedTags[0]).toEqual("testTag");
    });
    it('should store no tags upon removing only tag', () => {
        expect(reducer({
            expandableItemStates: initializeExpandedStateData(),
            selectedTags: ["testTag"],
            modal: true,
            firstView: true
        }, 
            {
                type: actionTypes.REMOVE_TAG,
                tagIndex: 0

            }).selectedTags.length).toEqual(0);
    });
    it('should store no tags upon clearing all tag', () => {
        expect(reducer({
            expandableItemStates: initializeExpandedStateData(),
            selectedTags: ["testTag1", "testTag2", "testTag3"],
            modal: true,
            firstView: true
        }, 
            {
                type: actionTypes.CLEAR_TAGS

            }).selectedTags.length).toEqual(0);
    });
    it('should store toggled value of modal upon toggling modal', () => {
        expect(reducer(initialState, 
            {
                type: actionTypes.TOGGLE_MODAL,

            }).modal).toEqual(!initialState.modal);
    });
    // firstView is used to determine if it is the first time the profile page is being visited
    // This is to present welcome messages on the first time
    it('should store firstView value as false upon setting as viewed', () => {
        expect(reducer(initialState, 
            {
                type: actionTypes.SET_AS_VIEWED,

            }).firstView).toEqual(false);
    });
});