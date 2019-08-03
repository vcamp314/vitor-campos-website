import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FormSubmitResult from './FormSubmitResult';


configure({ adapter: new Adapter() });

describe('<FormSubmitResult />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<FormSubmitResult messages={[]} />);
    });

    it('should not contain any <p /> if there are no messages', () => {
        expect(wrapper.find('p')).toHaveLength(0);
    });
    it('should contain one <p /> if there is one message', () => {
        wrapper.setProps({ messages: ['test message'] });
        expect(wrapper.find('p')).toHaveLength(1);
    });
    it('should contain 3 <p /> if there are 3 messages', () => {
        wrapper.setProps({ messages: ['test message 1', 'test message 2', 'test message 3'] });
        expect(wrapper.find('p')).toHaveLength(3);
    });
});

