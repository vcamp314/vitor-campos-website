import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Contact } from './Contact';
import Loader from '../../components/ContactContent/Loader/Loader';
import FormSubmitResult from '../../components/ContactContent/FormSubmitResult/FormSubmitResult';
import ContactForm from '../../components/ContactContent/ContactForm/ContactForm';

configure({ adapter: new Adapter() });

describe('<Contact />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Contact onPageSelected={(page) => { return page; }} />);
    });

    it('should have a Loader if isLoading is true', () => {
        wrapper.setState({ isLoading: true });
        expect(wrapper.find(Loader)).toHaveLength(1);
    });
    it('should not have a FormSubmitResult if isLoading is true', () => {
        wrapper.setState({ isLoading: true });
        expect(wrapper.find(FormSubmitResult)).toHaveLength(0);
    });
    it('should not have a ContactForm if isLoading is true', () => {
        wrapper.setState({ isLoading: true });
        expect(wrapper.find(ContactForm)).toHaveLength(0);
    });
    it('should not have a Loader if only messageSubmitted is true', () => {
        wrapper.setState({ messageSubmitted: true });
        expect(wrapper.find(Loader)).toHaveLength(0);
    });
    it('should have a FormSubmitResult if messageSubmitted is true', () => {
        wrapper.setState({ messageSubmitted: true });
        expect(wrapper.find(FormSubmitResult)).toHaveLength(1);
    });
    it('should not have a ContactForm if messageSubmitted is true', () => {
        wrapper.setState({ messageSubmitted: true });
        expect(wrapper.find(ContactForm)).toHaveLength(0);
    });
    it('should not have a Loader by default', () => {
        expect(wrapper.find(Loader)).toHaveLength(0);
    });
    it('should have a FormSubmitResult by default', () => {
        expect(wrapper.find(FormSubmitResult)).toHaveLength(0);
    });
    it('should have a ContactForm by defaul', () => {
        expect(wrapper.find(ContactForm)).toHaveLength(1);
    });
});

