import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ToggleableSection from './ToggleableSection';

configure({adapter: new Adapter()});

describe('<ToggleableSection />' , () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ToggleableSection><p>test child</p></ToggleableSection>);
    });

    it('should render <p>test child</p> if toggleOn is set to true', () => {
        wrapper.setProps({toggleOn: true});
        expect(wrapper.contains(<p>test child</p>)).toEqual(true);
    });
    it('should not render <p>test child</p> if toggleOn is set to false', () => {
        wrapper.setProps({toggleOn: false});
        expect(wrapper.contains(<p>test child</p>)).toEqual(false);
    });
});

