import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { visiableFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case visiableFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case visiableFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visiableFilter)
})

export default connect(mapStateToProps)(TodoList);