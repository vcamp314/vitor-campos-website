import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ExpandableItem from './ExpandableItem';
import ExpandableItemHeading from './ExpandableItemHeading/ExpandableItemHeading';
import './ExpandableItem.css';

configure({adapter: new Adapter()});

describe('<ExpandableItem />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ExpandableItem><p>sample children prop</p></ExpandableItem>);
    });
;

    it('should contain one <ExpandableItemHeading />', () => {
        expect(wrapper.find(ExpandableItemHeading)).toHaveLength(1);
    });

    it('should not contain prop children when not expanded (default)', () => {
        expect(wrapper.contains(<p>sample children prop</p>)).toEqual(false);
    });

    it('should contain prop children when expanded', () => {
        wrapper.find(ExpandableItemHeading).find('input').simulate('click');
        expect(wrapper.contains(<p>sample children prop</p>)).toEqual(true);
    });
});

