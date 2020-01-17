import React from 'react';
import { mount } from 'enzyme';
import Todos from '../Todos';

test('Render todos', () => {
    const wrapper = mount(<Todos 
        delTodo={ jest.fn() } 
        markComplete={ jest.fn() } 
        todos={[{ id: "1", title: "Title", completed: false }]} />);

    expect(wrapper.find('p')).toHaveLength(1);
});