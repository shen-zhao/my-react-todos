import { visiableFilters } from '../actions/index'

const visiableFilter = (state = visiableFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case 'SET_VISIABLE_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default visiableFilter;