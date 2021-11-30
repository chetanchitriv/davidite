import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Concept, UIInputConfig, UIOutputConfig } from './concept';

@Injectable({
  providedIn: 'root'
})
export class ConceptService {

  constructor(private http: HttpClient) { }

  searchConcepts(keyword =null) {
    if(keyword)
    return this.http.get<Concept[]>(`${location.origin}/dvp/c/s?sq=${keyword}`);
    else
    return this.http.get<Concept[]>(`${location.origin}/dvp/c/s`);
  }

  getConceptDetails(concept_id: string) {
    return this.http.get<Concept>(`${location.origin}/dvp/c/g/${concept_id}`);
  }

  createNewConcept(concept: Concept) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.put<Concept>(`${location.origin}/dvp/c/new`, concept, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateConcept(concept_id: string ,data: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Concept>(`${location.origin}/dvp/c/m/${concept_id}`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteconcept(concept_id: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.delete(`${location.origin}/dvp/c/r/${concept_id}`,httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  //UI input services
  createUIInputConfig(concept_id: string, data: object){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<UIInputConfig>(`${location.origin}/dvp/c/i/new/${concept_id}`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
   // http://divideite.dev/dvp/c/i/new/de546acc-200b-11eb-8a67-0028f89245b3
  }

  updateUIInputConfig(definition_id: string, data: object){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<UIInputConfig>(`${location.origin}/dvp/c/i/${definition_id}`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUIInputConfig(concept_id: string){
    return this.http.get<UIInputConfig>(`${location.origin}/dvp/c/i/${concept_id}`);
  }

  //UI output services
  createUIOutputConfig(concept_id: string, data: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<UIOutputConfig>(`${location.origin}/dvp/c/o/new/${concept_id}`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
    // http://divideite.dev/dvp/c/i/new/de546acc-200b-11eb-8a67-0028f89245b3
  }

  updateUIOutputConfig(definition_id: string, data: object) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<UIOutputConfig>(`${location.origin}/dvp/c/o/${definition_id}`, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUIOutputConfig(concept_id: string) {
    return this.http.get<UIOutputConfig>(`${location.origin}/dvp/c/o/${concept_id}`);
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
