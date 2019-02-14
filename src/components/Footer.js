import React from 'react';
import FilterLink from '../containers/FilterLink';
import { visiableFilters } from '../actions';

const Footer = () => (
    <footer>
        <span>show: </span>
        <FilterLink filter={visiableFilters.SHOW_ALL} text="All"/>
        <FilterLink filter={visiableFilters.SHOW_ACTIVE} text="Active"/>
        <FilterLink filter={visiableFilters.SHOW_COMPLETED} text="Completed"/>
    </footer>
);

export default Footer;