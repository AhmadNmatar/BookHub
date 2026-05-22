import { Routes } from '@angular/router';


import { BookList } from './pages/books/book-list/book-list';
import { AddBook } from './pages/books/add-book/add-book';
import { QuoteList } from './pages/quotes/quote-list/quote-list';
import { AddQuote } from './pages/quotes/add-quote/add-quote';
import { EditQuote } from './pages/quotes/edit-quote/edit-quote';
import { EditBook } from './pages/books/edit-book/edit-book';
import { Login } from './pages/auth/login/login';
import { SignUp } from './pages/auth/sign-up/sign-up';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  { path: 'login', component: Login },
  { path: 'signup', component: SignUp },
  { path: '', redirectTo: 'login', pathMatch: 'full' },


  { path: 'books', component: BookList, canActivate: [authGuard] },
  { path: 'books/add', component: AddBook, canActivate: [authGuard] },
  { path: 'books/edit/:id', component: EditBook, canActivate: [authGuard] },
  { path: 'quotes', component: QuoteList, canActivate: [authGuard] },
  { path: 'quotes/add', component: AddQuote, canActivate: [authGuard]},
  { path: 'quotes/edit/:id', component: EditQuote, canActivate: [authGuard]},
];