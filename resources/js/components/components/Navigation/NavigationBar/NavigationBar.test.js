import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationBar from './NavigationBar';

import { NavbarBrand, NavItem } from 'reactstrap';

configure({adapter: new Adapter()});

describe('<NavigationBar />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationBar/>);
    });

    //from NavigationBar design:

    it('should contain one <NavbarBrand />', () => {
        expect(wrapper.find(NavbarBrand)).toHaveLength(1);
    });

    it('should contain four <NavItem />', () => {
        expect(wrapper.find(NavItem)).toHaveLength(4);
    });

    it('should have a link for Home', () => {
        expect(wrapper.contains(<strong>HOME</strong>)).toEqual(true);
    });
    it('should have a link for Profile', () => {
        expect(wrapper.contains(<strong>PROFILE</strong>)).toEqual(true);
    });
    it('should have a link for GitHub', () => {
        expect(wrapper.contains(<strong>GITHUB</strong>)).toEqual(true);
    });
    it('should have a link for Contact', () => {
        expect(wrapper.contains(<strong>CONTACT</strong>)).toEqual(true);
    });
});

