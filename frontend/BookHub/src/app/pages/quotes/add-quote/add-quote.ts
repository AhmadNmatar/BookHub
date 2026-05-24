import { Component } from '@angular/core';
import { Quote } from '../../../models/quote';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QuoteService } from '../../../services/quote.service';
@Component({
  selector: 'app-add-quote',
  standalone: true, 
  imports: [FormsModule],
  templateUrl: './add-quote.html',
  styleUrl: './add-quote.css',
})
export class AddQuote {

  newQuote : Quote = {
    id : 0,
    text : '',
    author : ''
  };
  constructor(private router: Router, private quoteService : QuoteService) {}


  addQuote(){
    
    this.quoteService.addQuote(this.newQuote).subscribe({

    
      next : () => {
         this.router.navigate(['/quotes']);
      },

      error: err => {
        console.error(err);
      }
    });


  };

}
