import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilterTagList from './FilterTagList';
import FilterTag from './FilterTag/FilterTag';


configure({adapter: new Adapter()});

describe('<FilterTagList />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FilterTagList selectedTags={[]} />);
    });

    it('should not contain any <FilterTag /> if there are no selectedTags', () => {
        expect(wrapper.find(FilterTag)).toHaveLength(0);
    });
    it('should contain one <FilterTag /> if there is one selectedTags', () => {
        wrapper.setProps({selectedTags: ['sampleTag']});
        expect(wrapper.find(FilterTag)).toHaveLength(1);
    });
    it('should contain 3 <FilterTag /> if there are 3 selectedTags', () => {
        wrapper.setProps({selectedTags: ['sampleTag1', 'sampleTag2', 'sampleTag3']});
        expect(wrapper.find(FilterTag)).toHaveLength(3);
    });
});

