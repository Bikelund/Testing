import React, { Component } from "react";
import propTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo = {todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo}/>
        ));
    }
}

// propTypes
Todos.propTypes = {
    todos: propTypes.array.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
}

export default Todos;