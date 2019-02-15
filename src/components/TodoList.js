import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        const props = this.props;

        return (
            <ul>
                {props.todos.map(todo => 
                    <Todo 
                        key={todo.id}
                        {...todo}   
                    >
                    </Todo>
                )}
            </ul>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

export default TodoList;