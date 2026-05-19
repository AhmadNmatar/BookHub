import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../../models/book';
@Component({
  selector: 'app-book-list',
  imports: [RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
    books: Book[] = [];

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    // temporary fake data (later from API)
    this.books = [
      { id: 1, title: 'Clean Code', author: 'Robert Martin', publishedYear: '2008-08-01' },
      { id: 2, title: 'Angular Basics', author: 'John Doe', publishedYear: '2022-01-10' }
    ];
  }

  deleteBook(id: number) {
    this.books = this.books.filter(b => b.id !== id);
  }
}
