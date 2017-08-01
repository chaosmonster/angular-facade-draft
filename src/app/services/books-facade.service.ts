import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as BookActions from '../book-actions';
import * as fromRoot from '../reducers';
import {Book} from '../share/book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/let';
import {BookDataService} from './book-data.service';
import 'rxjs/add/operator/do';

@Injectable()
export class BooksFacadeService {

  public books$ = this.store.select(fromRoot.selectBooks)
    .do(() => {
      // this is called multiple times
      console.log('do');
    })
    .let((observable) => {
      // Sander pointed out that the initBooks function would be called every time a new subscriber is added.
      // I found out that the let operator will only be called once? But this doesn't feel right.
      console.log('let');
      this.initBooks();
      // return Observable.defer(() => {
      //   return observable;
      // });
      return observable;
  });



  constructor(private store: Store<fromRoot.State>, private bookDataService: BookDataService) {
  }

  public addBook(book: Book) {
    console.log('addBook');
    this.store.dispatch(new BookActions.AddBook(book));
  }

  public initBooks() {
    console.log('initBooks');
    this.bookDataService.getBooks().subscribe((books: Book[]) => {
      this.store.dispatch(new BookActions.AddBooks(books));
    });
  }
}
