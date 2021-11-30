import { Component, OnInit, Input } from '@angular/core';
import { ConceptDefnition } from '../concept';
import { FormGroup } from '@angular/forms';
import { ConceptFormService } from './concept-form.service';

@Component({
  selector: 'app-concept-form',
  templateUrl: './concept-form.component.html',
  styleUrls: ['./concept-form.component.scss']
})
export class ConceptFormComponent implements OnInit {
  @Input() conceptsDefinitions: ConceptDefnition[] = [];
  conceptForm: FormGroup;
  constructor(
    private conceptFormService:ConceptFormService
  ) { }

  ngOnInit(): void {
    this.conceptForm = this.conceptFormService.toFormGroup(this.conceptsDefinitions);
  }

}
