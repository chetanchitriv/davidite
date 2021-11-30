import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constraint } from './constraint';

@Injectable({
  providedIn: 'root'
})
export class ConstraintService {

  constructor(private http: HttpClient) { }

  createTermConstraint(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put(`${location.origin}/dvp/tc/new`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateFunctionConstraint(constraint_id: string ,data: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Constraint>(`${location.origin}/dvp/tc/m/${constraint_id}`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getTermConstraintDetails(constraintId: string) {
    return this.http.get(`${location.origin}/dvp/tc/g/${constraintId}`);
  }
  deleteConstraint(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete(`${location.origin}/dvp/tc/r/${id}`,httpOptions).pipe(
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
