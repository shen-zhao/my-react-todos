import { combineReducers } from 'redux';
import todos from './todos';
import visiableFilter from './visiableFilter';

const todoApp = combineReducers({
    todos,
    visiableFilter
})

export default todoApp;