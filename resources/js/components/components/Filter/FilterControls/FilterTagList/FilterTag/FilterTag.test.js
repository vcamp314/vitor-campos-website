import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FilterTag from './FilterTag';


configure({adapter: new Adapter()});

const mockOnRemoveFilterSelected = () => {};

describe('<FilterTagList />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FilterTag tagname="tagName" onRemoveFilterSelected={mockOnRemoveFilterSelected}/>);
    });

    it('should contain a <span /> for the close button', () => {
        expect(wrapper.find({className: 'close-button'})).toHaveLength(1);
    });
});

