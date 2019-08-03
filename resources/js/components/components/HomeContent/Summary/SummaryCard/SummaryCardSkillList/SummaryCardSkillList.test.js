import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SummaryCardSkillList from './SummaryCardSkillList';


configure({adapter: new Adapter()});

describe('<SummaryCardSkillList />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<SummaryCardSkillList skillList={[]} />);
    });

    it('should not contain any <li /> if there are no items in skillList', () => {
        expect(wrapper.find('li')).toHaveLength(0);
    });
    it('should contain one <li /> if there is one skill', () => {
        wrapper.setProps({skillList: ['sampleSkill']});
        expect(wrapper.find('li')).toHaveLength(1);
    });
    it('should contain 3 <li /> if there are 3 skills', () => {
        wrapper.setProps({skillList: ['sampleSkill1', 'sampleSkill2', 'sampleSkill3']});
        expect(wrapper.find('li')).toHaveLength(3);
    });
});

