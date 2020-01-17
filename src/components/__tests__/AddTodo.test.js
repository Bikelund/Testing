import React from 'react';
import { mount, shallow } from 'enzyme';
import AddTodo from '../AddTodo';

test('Check for input text', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper.find('input[type="text"]').exists()).toBeTruthy();
});

test('Check for a submit button', () => {
    const wrapper = shallow(<AddTodo />);
    expect(wrapper.find('input[type="submit"]').exists()).toBeTruthy();
});

test('Empty input field', () => {
    const wrapper = mount(<AddTodo addTodo={jest.fn()} />);

    wrapper.find('input[type="text"]').simulate('change', {
        target: { title: "Banana" }
    });
    
    wrapper.find('form').simulate('submit');

    expect(wrapper.state().title).toBe('');
});