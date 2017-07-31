import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as BookActions from '../book-actions';
import * as fromRoot from '../reducers';
import {Book} from '../share/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/let';
import {BookDataService} from './book-data.service';

@Injectable()
export class BooksFacadeService {

  public books$ = this.store.select(fromRoot.selectBooks).let((observable) => {
    return Observable.defer(() => {
      this.initBooks();
      return observable;
    });
  });

  constructor(private store: Store<fromRoot.State>, private bookDataService: BookDataService) {
  }

  public addBook(book: Book) {
    this.store.dispatch(new BookActions.AddBook(book));
  }

  public initBooks() {
    this.bookDataService.getBooks().subscribe((books: Book[]) => {
      this.store.dispatch(new BookActions.AddBooks(books));
    });
  }
}
