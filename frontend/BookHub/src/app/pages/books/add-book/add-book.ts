import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../../../models/book';
import { BookService } from '../../../services/book.service';

@Component({
  selector: 'app-add-book',
  standalone: true, // what is standalone?
  imports: [FormsModule],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {


  book: Book = {
      id :0,
      title: '',
      author: '',
      publishedYear: ''
  };

  constructor(private router: Router, private bookService: BookService) {}

  addBook() {


    this.bookService.addBook(this.book).subscribe({

    
      next : () => {
         this.router.navigate(['/books']);
      },

      error: err => {
        console.error(err);
      }
    });
  };
}
