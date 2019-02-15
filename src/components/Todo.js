import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { Button } from 'antd';

class Todo extends Component {
    render() {
        const props = this.props;
        
        return (
            <li>
                <span
                    onClick={() => props.dispatch(toggleTodo(props.id))}
                    style={{
                        textDecoration: props.completed ? 'line-through' : 'none',
                        marginRight: '20px'
                    }}>
                    {props.text}
                </span>
                <Button type="primary">编辑</Button>
                <Button type="danger">删除</Button>
            </li>
        );
    }
}

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default connect()(Todo);