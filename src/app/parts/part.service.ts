import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Part } from './part';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  constructor(private http: HttpClient) { }

  getPartsList() {
    return this.http.get<Part[]>(`${location.origin}/dvp/part/s`);
  }
}
