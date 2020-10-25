import { createStore } from 'redux';

function reducer (state, action) {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                test: action.test,
            }
        default:
            return state;
    }
}

const initialState = {
    test: [],
};

const store = createStore(reducer, initialState);

export default store;