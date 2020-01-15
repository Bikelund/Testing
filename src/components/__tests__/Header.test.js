import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from '../layout/Header'

test('Check for input text', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').exists()).toBeTruthy();
});