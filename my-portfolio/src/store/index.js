import { createStore } from 'redux';

function reducer (state, action) {
    switch (action.type) {
        case 'SET_APPS':
            return {
                ...state,
                apps: action.apps,
            };
        case 'FILTER': {
            return {
                ...state,
                filter: action.value,
            };
        }
        default:
            return state;
    }
}

const initialState = {
    apps: [],
    filter: 'All',
};

const store = createStore(reducer, initialState);

export default store;