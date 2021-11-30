import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Term } from './term';

@Injectable({
  providedIn: 'root'
})
export class TermService {

  constructor(private http: HttpClient) { }

  getTermDetails(term_id: string) {
    return this.http.get<Term>(`${location.origin}/dvp/tm/g/${term_id}`);
  }

  createFunctionTerm(term: Term) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Term>(`${location.origin}/dvp/tm/new`, term, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateFunctionTerm(term_id: string ,data: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Term>(`${location.origin}/dvp/tm/m/${term_id}`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  deleteTerm(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete(`${location.origin}/dvp/tm/r/${id}`,httpOptions).pipe(
      catchError(this.handleError)
    );;
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
