import { Component, OnInit } from '@angular/core';
import { Quote } from '../../../models/quote';
import { RouterLink } from '@angular/router';
import { QuoteService } from '../../../services/quote.service';
@Component({
  selector: 'app-quote-list',
  imports: [RouterLink],
  templateUrl: './quote-list.html',
  styleUrl: './quote-list.css',
})
export class QuoteList implements OnInit{

  constructor(private quoteService: QuoteService){}

  quoteList: Quote[] = [];
  
  ngOnInit(): void {
    this.loadQuotes();
  };

  loadQuotes(){
    this.quoteService.getQuotes().subscribe({
      next: data => {
        this.quoteList = data
      },
      error: err => {
        console.error(err);
      }
    });
  };

    deleteQuote(id: number) {
    this.quoteService.deleteQuote(id).subscribe({
      next :() =>{
        this.loadQuotes();
      }
    });
  };

}
