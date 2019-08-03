import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilterModal from './FilterModal';
import FilterTagList from '../FilterTagList/FilterTagList';


configure({adapter: new Adapter()});


describe('<FilterModal />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FilterModal autoCompleteList={["sample", "sample2"]} firstView={true}/>);
    });

    it('should have a <FilterTagList />', () => {
        expect(wrapper.find(FilterTagList)).toHaveLength(1);
    });
    it('should at first (firstView = true) have more than one <p /> to explain the use of the profile page', () => {
        expect(wrapper.find('p').length).toBeGreaterThan(1);
    });
    it('should have only one <p /> for subsequent views of the modal (firstView = false)', () => {
        wrapper.setProps({firstView: false});
        expect(wrapper.find('p')).toHaveLength(1);
    });
    it('should have a submit button', () => {
        expect(wrapper.find({type: 'submit'})).toHaveLength(1);
    });
    it('should have a secondary clear button', () => {
        expect(wrapper.find({color: 'secondary'})).toHaveLength(1);
    });

});

