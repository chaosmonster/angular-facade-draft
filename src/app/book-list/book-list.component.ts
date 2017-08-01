import {Component, OnInit} from '@angular/core';
import {BooksFacadeService} from '../services/books-facade.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
})
export class BookListComponent implements OnInit {

  public books$;
  public showRaw = false;

  constructor(private booksFacadeService: BooksFacadeService) {
  }

  ngOnInit() {
    this.books$ = this.booksFacadeService.books$;
  }

  addBook() {
    this.booksFacadeService.addBook({
      title: 'some book',
      subtitle: 'some book subtitle',
      isbn: '123456-245678-fghj',
      abstract: 'some abstract',
      numPages: 123,
      author: 'her',
      publisher: {
        name: 'her',
        url: ''
      },
    });
  }
  toggleShowRaw() {
    this.showRaw = !this.showRaw;
  }

}
