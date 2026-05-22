import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Book } from '../../../models/book';
import { BookService } from '../../../services/book.service';
@Component({
  selector: 'app-book-list',
  imports: [RouterLink],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit { // OnInit tell angular to run this code whenever component is open or loaded
 booksList: Book[] = [];

  constructor(private bookService: BookService) {} //Check if I need to add router

  ngOnInit(): void {

    this.loadBooks();
  }

  loadBooks() {

    this.bookService.getBooks().subscribe({
      next: data => {

        this.booksList = data;
      },

      error: err => {
        console.error(err);
      }
    });
  };

  deleteBook(id: number) {

    this.bookService.deleteBook(id).subscribe({
      next: () => {

        this.loadBooks();
      },

      error: err => {
        console.error(err);
      }
    });
  };
}
