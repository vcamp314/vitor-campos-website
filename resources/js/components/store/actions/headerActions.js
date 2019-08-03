import * as actionTypes from './actionTypes';

export const updatePage = (selectedPage) => {
    return {
        type: actionTypes.UPDATE_PAGE,
        selectedPage: selectedPage
    };
};