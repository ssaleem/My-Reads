import * as C from '../constants/action-types';

const initialState = {
    books: [],
    searchResults: []
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case C.BOOKS_LOADED:
            return {...state, books: action.payload }
        default:
            return state;
    }

}

export default rootReducer;