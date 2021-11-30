import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Function } from './function';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(private http: HttpClient) { }

  getFunctionDetails(function_id: string) {
    return this.http.get<Function>(`${location.origin}/dvp/fn/g/${function_id}`);
  }

  listConceptFunctions(concept_id: string) {
    return this.http.get<Function[]>(`${location.origin}/dvp/fn/l/${concept_id}`);
  }

  createFunction(fun: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Function>(`${location.origin}/dvp/fn/new`, fun, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateFunction(function_id: string, fun: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Function>(`${location.origin}/dvp/fn/m/${function_id}`, fun, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }


  deleteFunction(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    console.warn(`${location.origin}/dvp/fn/r/${id}`);
    return this.http.delete(`${location.origin}/dvp/fn/r/${id}`,httpOptions).pipe(
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
