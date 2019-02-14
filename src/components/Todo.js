import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

class Todo extends Component {
    render() {
        const props = this.props;
        
        return (
            <li
                onClick={() => props.dispatch(toggleTodo(props.id))}
                style={{
                    textDecoration: props.completed ? 'line-through' : 'none'
                }}>
                {props.text}
            </li>
        );
    }
}

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default connect()(Todo);