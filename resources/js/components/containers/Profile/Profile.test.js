import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Profile } from './Profile';
import ProfileHeader from '../../components/ProfileContent/ProfileHeader/ProfileHeader';
import ExperienceContent from '../../components/ProfileContent/ExperienceContent/ExperienceContent';
import ProjectsContent from '../../components/ProfileContent/ProjectsContent/ProjectsContent';
import EducationContent from '../../components/ProfileContent/EducationContent/EducationContent';
import FilterModal from '../../components/Filter/FilterControls/FilterModal/FilterModal';
import EmptyResultDisplay from '../../components/ProfileContent/EmptyResultDisplay/EmptyResultDisplay';



configure({adapter: new Adapter()});

describe('<Profile />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Profile onPageSelected={(page) => {return page;}} selectedTags={[]}/>);
    });

    it('should have a <ProfileHeader />', () => {
        expect(wrapper.find(ProfileHeader)).toHaveLength(1);
    });
    it('should have a <FilterModal />', () => {
        expect(wrapper.find(FilterModal)).toHaveLength(1);
    });
    it('should not have a <EmptyResultDisplay /> if a existing filter tag is selected', () => {
        wrapper.setProps({selectedTags: ['PHP']});
        expect(wrapper.find(EmptyResultDisplay)).toHaveLength(0);
    });
    it('should have a <EmptyResultDisplay /> if everything is filtered out: a non-existing filter tag is selected', () => {
        wrapper.setProps({selectedTags: ['sampleTag']});
        expect(wrapper.find(EmptyResultDisplay)).toHaveLength(1);
    });
    it('should have a ExperienceContent', () => {
        expect(wrapper.find(ExperienceContent)).toHaveLength(1);   
    });
    it('should have a ProjectsContent', () => {
        expect(wrapper.find(ProjectsContent)).toHaveLength(1);
    });
    it('should have a EducationContent', () => {
        expect(wrapper.find(EducationContent)).toHaveLength(1);
    });
});

