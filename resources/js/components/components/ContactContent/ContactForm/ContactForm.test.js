import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ContactForm from './ContactForm';

configure({ adapter: new Adapter() });

describe('<ContactForm />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ContactForm ValidSubmitHandler={(value, e) => { return value; }} InvalidSubmitHandler={(value, e) => { return value; }} />);
    });

    it('should contain one input element for name', () => {
        expect(wrapper.find({ name: "name" })).toHaveLength(1);
    });
    it('should contain one input element for email', () => {
        expect(wrapper.find({ name: "email" })).toHaveLength(1);
    });
    it('should contain one input element for email', () => {
        expect(wrapper.find({ name: "message" })).toHaveLength(1);
    });
});

