import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from './subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  getSubjectsList() {
    return this.http.get<Subject[]>(`${location.origin}/dvp/sub/s`);
  }

  getSubjectById(id){
    return this.http.get(`${location.origin}/dvp/sub/g/${id}`)
  }

  getPartsList() {
    return this.http.get<Subject[]>(`${location.origin}/dvp/part/s`);
  }

getPartById(id){
  return this.http.get<Subject>(`${location.origin}/dvp/part/g/${id}`)
}

  addparts(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Subject[]>(`${location.origin}/dvp/part/new`, data, httpOptions);
  }
  addSubjectsList(data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Subject[]>(`${location.origin}/dvp/sub/m`, data, httpOptions);
  }

  DeleteSubjectsList(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.delete<Subject[]>(`${location.origin}/dvp/sub/r/${id}`,httpOptions);
  }


  DeletePart(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // /dvp/part/r/sbp_XebuAexwd3KNX5ii36VdzD
    return this.http.delete<Subject[]>(`${location.origin}/dvp/part/r/${id}`,httpOptions);
  }


  addEvolutionFunction(data){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Subject[]>(`${location.origin}/dvp/a/mdm/functions`, data, httpOptions);
   }
 

   getEvolutionFunctionList(){
    return this.http.get<Subject[]>(`${location.origin}/dvp/a/mdm/functions/all`);

   }
}


