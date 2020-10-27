import { createStore } from 'redux';

function reducer (state, action) {
    switch (action.type) {
        case 'SET_APPS':
            return {
                ...state,
                apps: action.apps,
            }
        default:
            return state;
    }
}

const initialState = {
    apps: [],
};

const store = createStore(reducer, initialState);

export default store;