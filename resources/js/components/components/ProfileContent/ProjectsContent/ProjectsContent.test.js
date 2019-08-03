import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProjectsContent from './ProjectsContent';
import ContentLayout from '../ContentLayout/ContentLayout';
import ToggleableSection from '../../../components/Filter/ToggleableSection/ToggleableSection';
import ContentListItemLayout from '../ContentListItemLayout/ContentListItemLayout';


configure({ adapter: new Adapter() });

describe('<ProjectsContent />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ProjectsContent projects={[]} />);
    });
    it('should contain 1 wrapping <ToggleableSection />', () => {
        expect(wrapper.find(ToggleableSection)).toHaveLength(1);
    })
    it('should not contain any <ToggleableSection /> inside the <ContentLayout /> if there are no projects entries', () => {
        expect(wrapper.find(ContentLayout).find(ToggleableSection)).toHaveLength(0);
    });
    it('should contain 1 <ToggleableSection /> inside the <ContentLayout /> if there is 1 projects entry', () => {
        wrapper.setProps({
            projects: [
                {
                    "id": "exp002",
                    "companyName": "Excapsa Services Inc.",
                    "logo": "http://gambling.li/images/excapsa-logo.jpg",
                    "url": "",
                    "title": "Software Intern",
                    "location": "Toronto, Canada",
                    "duration": "2006: June to Sept.",
                    "description": "Developed software plugins",
                    "tags": ["LINUX"],
                    "sections": []
                }]
        });
        expect(wrapper.find(ContentLayout).find(ToggleableSection)).toHaveLength(1);
    });
    it('should contain 3 <ToggleableSection /> inside the <ContentLayout /> if there are 3 projects entries', () => {
        wrapper.setProps({
            projects: [
                {
                    "id": "exp002",
                    "companyName": "Excapsa Services Inc.",
                    "logo": "http://gambling.li/images/excapsa-logo.jpg",
                    "url": "",
                    "title": "Software Intern",
                    "location": "Toronto, Canada",
                    "duration": "2006: June to Sept.",
                    "description": "Developed software plugins",
                    "tags": ["LINUX"],
                    "sections": []
                },
                {
                    "id": "exp003",
                    "companyName": "Excapsa Services Inc.",
                    "logo": "http://gambling.li/images/excapsa-logo.jpg",
                    "url": "",
                    "title": "Software Intern",
                    "location": "Toronto, Canada",
                    "duration": "2006: June to Sept.",
                    "description": "Developed software plugins",
                    "tags": ["LINUX"],
                    "sections": []
                },
                {
                    "id": "exp004",
                    "companyName": "Excapsa Services Inc.",
                    "logo": "http://gambling.li/images/excapsa-logo.jpg",
                    "url": "",
                    "title": "Software Intern",
                    "location": "Toronto, Canada",
                    "duration": "2006: June to Sept.",
                    "description": "Developed software plugins",
                    "tags": ["LINUX"],
                    "sections": []
                }]
        });
        expect(wrapper.find(ContentLayout).find(ToggleableSection)).toHaveLength(3);
    });
    it('should contain 1 <ToggleableSection /> inside the <ContentListItemLayout /> if there is 1 projects entry with 1 section', () => {
        wrapper.setProps({
            projects: [
                {
                    "id": "exp002",
                    "companyName": "Excapsa Services Inc.",
                    "logo": "http://gambling.li/images/excapsa-logo.jpg",
                    "url": "",
                    "title": "Software Intern",
                    "location": "Toronto, Canada",
                    "duration": "2006: June to Sept.",
                    "description": "Developed software plugins",
                    "tags": ["LINUX"],
                    "sections": [
                        {
                            "id": "sec04",
                            "tags": ["Initiative"],
                            "responsibilities": []
                        }
                    ]
                }]
        });
        expect(wrapper.find(ContentListItemLayout).find(ToggleableSection)).toHaveLength(1);
    });
});

