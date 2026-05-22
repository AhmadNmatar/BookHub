import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment';
import { Quote } from '../models/quote';
@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private apiUrl = `${environment.apiUrl}/quotes`;

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<Quote[]>{
    return this.http.get<Quote[]>(this.apiUrl);
  } 


  getQuoteById(id: number): Observable<Quote> {
  
      return this.http.get<Quote>(
        `${this.apiUrl}/${id}`
      );
  }

  addQuote(quote: Quote): Observable<Quote> {
  
      return this.http.post<Quote>(
        this.apiUrl,
        quote
      );
    }
  
    updateQuote(id: number, quote: Quote): Observable<Quote> {
  
      return this.http.put<Quote>(
        `${this.apiUrl}/${id}`,
        quote
      );
    }
    
  deleteQuote(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }
}
