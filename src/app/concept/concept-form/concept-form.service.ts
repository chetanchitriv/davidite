import { Injectable } from '@angular/core';
import { ConceptDefnition } from '../concept';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConceptFormService {

  constructor() { }

  toFormGroup(definitions: ConceptDefnition[]) {
    const group: any = {};

    definitions.forEach(definition => {
      group[definition.key] = definition.required ? new FormControl('', Validators.required)
        : new FormControl('');
    });
    return new FormGroup(group);
  }
}
