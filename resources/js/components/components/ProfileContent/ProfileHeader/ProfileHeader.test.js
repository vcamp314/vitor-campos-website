import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CardText } from 'reactstrap';

import ProfileHeader from './ProfileHeader';
import FilterTagList from '../../Filter/FilterControls/FilterTagList/FilterTagList';



configure({adapter: new Adapter()});

describe('<ProfileHeader />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProfileHeader selectedTags={[]}/>);
    });

    it('should have a <CardText /> if there are no selectedTags', () => {
        expect(wrapper.find(CardText)).toHaveLength(1);
    });
    it('should not have a <FilterTagList /> if there are no selectedTags', () => {
        expect(wrapper.find(FilterTagList)).toHaveLength(0);
    });
    it('should have a <FilterTagList /> if there are any selectedTags', () => {
        wrapper.setProps({selectedTags: ['sampleTag']});
        expect(wrapper.find(FilterTagList)).toHaveLength(1);
    });
    it('should not have a <CardText /> if there are any selectedTags', () => {
        wrapper.setProps({selectedTags: ['sampleTag']});
        expect(wrapper.find(CardText)).toHaveLength(0);
    });
});

