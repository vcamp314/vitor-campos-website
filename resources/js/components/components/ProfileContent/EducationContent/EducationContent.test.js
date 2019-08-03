import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import EducationContent from './EducationContent';
import ContentLayout from '../ContentLayout/ContentLayout';
import ToggleableSection from '../../../components/Filter/ToggleableSection/ToggleableSection';


configure({adapter: new Adapter()});

describe('<EducationContent />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<EducationContent education={[]} />);
    });
    it('should contain 1 wrapping <ToggleableSection />', () => {
        expect(wrapper.find(ToggleableSection)).toHaveLength(1);
    })
    it('should not contain any <ToggleableSection /> inside the <ContentLayout /> if there are no education entries', () => {
        expect(wrapper.find(ContentLayout).find(ToggleableSection)).toHaveLength(0);
    });
    it('should contain 1 <ToggleableSection /> inside the <ContentLayout /> if there is 1 education entry', () => {
        wrapper.setProps({education: [      {
            "id": "edu01",
            "institute": "University of Waterloo",
            "logo": "https://media.licdn.com/dms/image/C560BAQFI41Ly6leq7Q/company-logo_400_400/0?e=1568246400&v=beta&t=11dWgJr5gr7FOfrRbSGzVI9yG00SUmjTJOUlxRj_u-0",
            "url": "https://uwaterloo.ca/",
            "title": "Bachelor of Applied Science, Honours Mechanical Engineering",
            "location": "Waterloo, Canada",
            "skillsGained":"C++, PLC programming, Matlab",
            "graduationYear": 2012,
            "tags":["C++", "PLC programming","Matlab"]
          }]});
        expect(wrapper.find(ContentLayout).find(ToggleableSection)).toHaveLength(1);
    });
    it('should contain 3 <ToggleableSection /> inside the <ContentLayout /> if there are 3 education entries', () => {
        wrapper.setProps({education: [      {
            "id": "edu01",
            "institute": "University of Waterloo",
            "logo": "https://media.licdn.com/dms/image/C560BAQFI41Ly6leq7Q/company-logo_400_400/0?e=1568246400&v=beta&t=11dWgJr5gr7FOfrRbSGzVI9yG00SUmjTJOUlxRj_u-0",
            "url": "https://uwaterloo.ca/",
            "title": "Bachelor of Applied Science, Honours Mechanical Engineering",
            "location": "Waterloo, Canada",
            "skillsGained":"C++, PLC programming, Matlab",
            "graduationYear": 2012,
            "tags":["C++", "PLC programming","Matlab"]
          },       
          {
            "id": "edu02",
            "institute": "University of Waterloo",
            "logo": "https://media.licdn.com/dms/image/C560BAQFI41Ly6leq7Q/company-logo_400_400/0?e=1568246400&v=beta&t=11dWgJr5gr7FOfrRbSGzVI9yG00SUmjTJOUlxRj_u-0",
            "url": "https://uwaterloo.ca/",
            "title": "Bachelor of Applied Science, Honours Mechanical Engineering",
            "location": "Waterloo, Canada",
            "skillsGained":"C++, PLC programming, Matlab",
            "graduationYear": 2012,
            "tags":["C++", "PLC programming","Matlab"]
          },       
          {
            "id": "edu03",
            "institute": "University of Waterloo",
            "logo": "https://media.licdn.com/dms/image/C560BAQFI41Ly6leq7Q/company-logo_400_400/0?e=1568246400&v=beta&t=11dWgJr5gr7FOfrRbSGzVI9yG00SUmjTJOUlxRj_u-0",
            "url": "https://uwaterloo.ca/",
            "title": "Bachelor of Applied Science, Honours Mechanical Engineering",
            "location": "Waterloo, Canada",
            "skillsGained":"C++, PLC programming, Matlab",
            "graduationYear": 2012,
            "tags":["C++", "PLC programming","Matlab"]
          }]});
        expect(wrapper.find(ContentLayout).find(ToggleableSection)).toHaveLength(3);
    });
});

