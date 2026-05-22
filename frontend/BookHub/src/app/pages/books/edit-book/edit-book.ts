import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Book } from '../../../models/book';
import { BookService } from '../../../services/book.service';
@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.css',
})
export class EditBook implements OnInit{

  book: Book = {
    id: 0,
    title: '',
    author: '',
    publishedYear: ''
  };

  bookId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit(): void {

    this.bookId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.loadBook();
  };

  loadBook() {

    this.bookService.getBookById(this.bookId).subscribe({

      next: data => {

        this.book = data;
      },

      error: err => {
        console.error(err);
      }
    });
  };

  updateBook() {

    this.bookService.updateBook(
      this.bookId,
      this.book
    ).subscribe({

      next: () => {

        console.log('Book updated');

        this.router.navigate(['/books']);
      },

      error: err => {
        console.error(err);
      }
    });
  };

}
