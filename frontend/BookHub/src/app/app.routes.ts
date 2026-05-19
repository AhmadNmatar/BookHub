import { Routes } from '@angular/router';


import { BookList } from './pages/books/book-list/book-list';
import { AddBook } from './pages/books/add-book/add-book';
import { QuoteList } from './pages/quotes/quote-list/quote-list';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BookList },
  { path: 'books/add', component: AddBook },
  { path: 'quotes', component: QuoteList }
];