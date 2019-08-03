import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Card } from 'reactstrap';

import Summary from './Summary';
import SummaryHeading from './SummaryHeading/SummaryHeading';
import LanguagesContent from './SummaryCard/SummaryCardContent/LanguagesContent/LanguagesContent';
import FrameworksContent from './SummaryCard/SummaryCardContent/FrameworksContent/FrameworksContent';
import OtherSkillsContent from './SummaryCard/SummaryCardContent/OtherSkillsContent/OtherSkillsContent';



configure({adapter: new Adapter()});

describe('<Summary />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Summary/>);
    });

    //from NavigationBar design:

    it('should contain a <SummaryHeading />', () => {
        expect(wrapper.contains(<SummaryHeading />)).toEqual(true);
    });
    it('should contain 3 <Card />', () => {
        expect(wrapper.find(Card)).toHaveLength(3);
    });
    it('should have a LanguagesContent', () => {
        expect(wrapper.contains(<LanguagesContent />)).toEqual(true);
    });
    it('should have a FrameworksContent', () => {
        expect(wrapper.contains(<FrameworksContent />)).toEqual(true);
    });
    it('should have a OtherSkillsContent', () => {
        expect(wrapper.contains(<OtherSkillsContent />)).toEqual(true);
    });
});

