import React from 'react';

import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ExpandableItemHeading from './ExpandableItemHeading';
import arrowRightImg from './caret-right.svg';
import './ExpandableItemHeading.css';

configure({adapter: new Adapter()});

describe('<ExpandableItem />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<ExpandableItemHeading toggle={() => {}}/>);
    });

    it('should default to collapsed state, with right arrow image', () => {        
        expect(wrapper.find('input').prop('src')).toEqual(arrowRightImg);
    });
});

