import reducer from './headerState';
import * as actionTypes from '../actions/actionTypes';
import { Page } from '../../Assets/utilities/PagesEnum';

describe('header reducer', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            currentPage: Page.HOME
        });
    });
    it('should store the new selected page as current page upon page update', () => {
        expect(reducer({
            currentPage: Page.HOME
        }, {
                type: actionTypes.UPDATE_PAGE,
                selectedPage: Page.PROFILE

            })).toEqual({
                currentPage: Page.PROFILE
            });
    });
});