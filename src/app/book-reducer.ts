import * as BookActions from './book-actions';
import {Book} from './share/book';

export interface State {
  books: Book[];
}

const initialState: State = {
  books: []
};

export function reducer(state = initialState, action: BookActions.All): State {
  switch (action.type) {
    case BookActions.ADD_BOOK: {
      return {
        books: [...state.books, action.payload],
      };
    }
    case BookActions.ADD_BOOKS: {
      return {
        books: [...action.payload],
      };
    }
    default: {
      return state;
    }
  }
}
