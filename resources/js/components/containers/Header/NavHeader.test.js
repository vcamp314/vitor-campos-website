import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationBar from '../../components/Navigation/NavigationBar/NavigationBar';
import { NavHeader } from './NavHeader';
import { Page } from '../../Assets/utilities/PagesEnum';
import CoverArrow from '../../components/Navigation/CoverArrow/CoverArrow';



configure({adapter: new Adapter()});

describe('<NavHeader />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavHeader/>);
    });

    it('should contain one <NavigationBar />', () => {
        expect(wrapper.find(NavigationBar)).toHaveLength(1);
    });

    it('should contain one arrow if in home page', () => {
        wrapper.setProps({currPage: Page.HOME});
        expect(wrapper.find(CoverArrow)).toHaveLength(1);
    });
    it('should not contain arrow if in profile page', () => {
        wrapper.setProps({currPage: Page.PROFILE});
        expect(wrapper.find(CoverArrow)).toHaveLength(0);
    });
    it('should not contain arrow if in contact page', () => {
        wrapper.setProps({currPage: Page.CONTACT});
        expect(wrapper.find(CoverArrow)).toHaveLength(0);
    });
});

