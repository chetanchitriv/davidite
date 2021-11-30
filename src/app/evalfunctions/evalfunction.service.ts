import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EvalFunction } from './evalfunction';

@Injectable({
  providedIn: 'root'
})
export class EvalfunctionService {

  constructor(private http: HttpClient) { }

  getListEvalFunctions() {
    return this.http.get<EvalFunction[]>(`${location.origin}/dvp/a/mdm/functions/all`);
  }

  getEvaluationFunction(func: EvalFunction) {
    return this.http.get<EvalFunction>(`${location.origin}/dvp/a/mdm/functions/${func.func_id}`);
  }
}
