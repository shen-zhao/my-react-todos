import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const Link = ({active, text, onClick}) => (
    <Button type="primary" onClick={onClick} disabled={active}>{text}</Button>
)

Link.propsType = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

Link.defaultProps = {
    text: 'All'
}

export default Link;