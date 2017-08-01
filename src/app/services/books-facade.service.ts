import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as BookActions from '../book-actions';
import * as fromRoot from '../reducers';
import {Book} from '../share/book';
import 'rxjs/add/observable/defer';
import 'rxjs/add/operator/let';
import {BookDataService} from './book-data.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/concat';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';

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
      // As Ben pointed out this is the correct behavior https://twitter.com/BenLesh/status/892270220701712384
      // So this leaves the question if .let() is a correct place to do a side effect? In my opinon it is okay,
      // because I read multiple times that let() is for middleware and middleware can also include side effects
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
