import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Home } from './Home';
import Summary from '../../components/HomeContent/Summary/Summary';


configure({adapter: new Adapter()});

describe('<Home />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Home onPageSelected={(page)=> {return page}}/>);
    });

    it('should contain a <Summary /> component', () => {
        expect(wrapper.find(Summary)).toHaveLength(1);
    });
});