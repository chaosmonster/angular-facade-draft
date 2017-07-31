import * as fromBook from './book-reducer';

export interface State {
  book: fromBook.State;
}

export const reducers = {
  book: fromBook.reducer
};

export function selectBooks(state: State) {
  return state.book.books;
}
