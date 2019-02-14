let todoId = 0;

export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: todoId++,
        text
    }
}

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const setVisiableFilter = filter => {
    return {
        type: 'SET_VISIABLE_FILTER',
        filter
    }
}

export const visiableFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}