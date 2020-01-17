import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#F4F4F4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
        }
    };

    render() {
        const { id, title, completed } = this.props.todo;
        return (
            <>
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={ this.props.markComplete.bind(this, id ) } checked={ completed ? 'checked': '' }/>{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={{ float: 'right' }} className="deleteBtn">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </p>
            </div>
            </>
        )
    }
}

// propTypes
TodoItem.propTypes = {
    todos: propTypes.object/* .isRequired */,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
}


export default TodoItem;