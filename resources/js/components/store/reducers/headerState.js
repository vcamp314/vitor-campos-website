import * as actionTypes from '../actions/actionTypes';
import { Page } from '../../Assets/utilities/PagesEnum';

const initialState = {
    currentPage: Page.HOME
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.UPDATE_PAGE:
            return {
                ...state,
                currentPage: action.selectedPage
            };
        default:
            return state;
    }
};

export default reducer;