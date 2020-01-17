import React from 'react';
import { mount, shallow } from 'enzyme';
import axios from 'axios';
import App from '../../App';

axios.delete = jest.fn(() => {
    return Promise.resolve();
});

test('Check for a container', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.container').exists()).toBeTruthy();
});

test('Check for a clear button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.clearBtn').exists()).toBeTruthy();
});

test('Clicking on clear will remove all todos', () => {
    const wrapper = shallow(<App />);

    wrapper.setState([{ title: "Title", completed: false }]);
    wrapper.find('.clearBtn').simulate('click');
    
    expect(wrapper.state('todos')).toHaveLength(0);
});

test('Mark a todo as done', () => {
    const fn = jest.fn();
    const wrapper = mount(<App markComplete={ fn } />);

    wrapper.setState(
        {
            todos: [{ id: "1", completed: false }]
        }
    );

    wrapper.instance().markComplete("1");
    wrapper.update();

    expect(wrapper.state().todos[0].completed).toEqual(true);
});

test('Check if there are 10 todos', async () => {
    const wrapper = shallow(<App />);

    await axios('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => wrapper.setState({ todos: res.data }));

    expect(wrapper.state().todos).toHaveLength(10);
});

function flushPromises() {
    return new Promise(resolve => setImmediate(resolve));
}

test('Delete todo', async () => {
    const wrapper = mount(<App />);

    wrapper.setState(
        {
            todos: [{ id: "1", title: "Title", completed: false }, { title: "Title", completed: false }, { title: "Title", completed: false }]
        }
    );

    wrapper.instance().delTodo("1");

    await flushPromises();
    
    expect(wrapper.state('todos')).toHaveLength(2);
});