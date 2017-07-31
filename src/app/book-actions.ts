import {Action} from '@ngrx/store';
import {Book} from './share/book';

export const ADD_BOOK = '[Books] Add Book';
export const ADD_BOOKS = '[Books] Add Books';

export class AddBook implements Action {
  readonly type = ADD_BOOK;

  constructor(public payload: Book) {}
}

export class AddBooks implements Action {
  readonly type = ADD_BOOKS;

  constructor(public payload: Book[]) {}
}

export type All = AddBook | AddBooks;
