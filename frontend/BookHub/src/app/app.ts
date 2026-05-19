import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { AddBook } from './pages/books/add-book/add-book';
import { BookList } from './pages/books/book-list/book-list';
import { EditBook } from './pages/books/edit-book/edit-book';
import { DeleteBook } from './pages/books/delete-book/delete-book';
import { QuoteList } from './pages/quotes/quote-list/quote-list';
import { AddQuote } from './pages/quotes/add-quote/add-quote';
import { EditQuote } from './pages/quotes/edit-quote/edit-quote';
import { DeleteQuote } from './pages/quotes/delete-quote/delete-quote';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, AddBook, BookList, EditBook, DeleteBook, QuoteList, AddQuote, EditQuote, DeleteQuote],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BookHub');
}
