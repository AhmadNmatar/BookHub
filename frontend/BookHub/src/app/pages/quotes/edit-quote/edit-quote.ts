import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../../../services/quote.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Quote } from '../../../models/quote';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-quote',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-quote.html',
  styleUrl: './edit-quote.css',
})
export class EditQuote implements OnInit{


  constructor(private route: ActivatedRoute,
    private router: Router,
    private quoteService : QuoteService
  ){}
  quoteId! : number;


  quote : Quote = {
    id: 0,
    text: '',
    author: ''
  };

  ngOnInit(): void {

    this.quoteId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.loadQuote();
  };

  loadQuote(){

    this.quoteService.getQuoteById(this.quoteId).subscribe({
      next: data =>{
        this.quote = data;
      },

      error: err => {
        console.error(err);
      }
    });
  };
  updateQuote(){
      this.quoteService.updateQuote(this.quoteId, this.quote).subscribe({
              next: () => {


        this.router.navigate(['/quotes']);
      },

            error: err => {
        console.error(err);
      }
      });
    };

}
