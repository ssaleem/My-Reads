import * as C from '../constants/action-types';
import * as BooksAPI from '../../utils/BooksAPI';

export function getAllBooks() {
    return function(dispatch) {
        return BooksAPI.getAll()
                .then(books => dispatch({ type: C.BOOKS_LOADED, payload: books }));
    }
}