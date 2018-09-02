import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Word } from './word';
import { WORDS } from './mock-words';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'

})
export class WordService {
    words: Word[];
private baseURL = 'http://localhost:3000/word';
  constructor(private http: HttpClient,
    private messageService: MessageService) { }
  getWords():Observable<Word[]> {

    console.log("Hello World from service   ");
//console.log( this.http.get<Word[]>(this.baseURL
//this.messageService.add('WordService: fetched words');

return this.http.get<Word[]>(this.baseURL).pipe(
      tap(_ => this.log(`words list displayed `)),
      catchError(this.handleError<Word[]>('getWords', []))
    );


}

private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`WordService: ${message}`);
  }
}
