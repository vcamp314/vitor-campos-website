import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ExpandableItemList from './ExpandableItemList';
import ToggleableSection from '../../../../components/Filter/ToggleableSection/ToggleableSection';


configure({adapter: new Adapter()});

describe('<ExpandableItemList />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ExpandableItemList listData={[]} 
            expandableItemStates={[
                {id: "1", isExpanded: true},
                {id: "2", isExpanded: true},
                {id: "3", isExpanded: true}
            ]} />);
    });

    it('should not contain any <ToggleableSection /> if there are listData items', () => {
        expect(wrapper.find(ToggleableSection)).toHaveLength(0);
    });
    it('should contain one <ToggleableSection /> if there is one listData item', () => {
        wrapper.setProps({listData: [{id: "1"}]});
        expect(wrapper.find(ToggleableSection)).toHaveLength(1);
    });
    it('should contain 3 <ToggleableSection /> if there are 3 listData items', () => {
        wrapper.setProps({listData: [{id: "1"}, {id: "2"}, {id: "3"}]});
        expect(wrapper.find(ToggleableSection)).toHaveLength(3);
    });
});

