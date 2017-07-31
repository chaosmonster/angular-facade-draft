import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BooksFacadeService} from './services/books-facade.service';
import {StoreModule} from '@ngrx/store';
import {reducers} from './reducers';
import {BookListComponent} from './book-list/book-list.component';
import {BookDataService} from './services/book-data.service';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [
    BooksFacadeService,
    BookDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
