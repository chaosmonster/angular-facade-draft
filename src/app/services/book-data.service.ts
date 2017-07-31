import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookDataService {
  constructor(private http: Http) {}

  getBooks() {
    return this.http.get('http://localhost:4730/books').map((res) => res.json());
  }
}
