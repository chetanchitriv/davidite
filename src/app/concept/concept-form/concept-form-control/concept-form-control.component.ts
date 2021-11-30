import { Component, OnInit, Input } from '@angular/core';
import { ConceptDefnition } from '../../concept';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-concept-form-control',
  templateUrl: './concept-form-control.component.html',
  styleUrls: ['./concept-form-control.component.scss']
})
export class ConceptFormControlComponent implements OnInit {
  @Input() definition: ConceptDefnition;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.definition
  }

}
