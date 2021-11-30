import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';
import { StepSuite } from './steps';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  constructor(private http: HttpClient) { }

  createStepSuite(concept_id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.put(`${location.origin}/dvp/c/solve/ss/new/${concept_id}`, {}, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getStepSuite(conceptId: string) {
    return this.http.get<StepSuite>(`${location.origin}/dvp/c/solve/ss/${conceptId}?steps=True`);
  }

  createNewStepEval(conceptId, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.put(`${location.origin}/dvp/c/solve/st/${conceptId}/1/e`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  createNewStepConditional(conceptId, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.put(`${location.origin}/dvp/c/solve/st/${conceptId}/2/c`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
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
