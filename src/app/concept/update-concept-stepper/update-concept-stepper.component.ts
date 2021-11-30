import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Concept } from '../concept';
import { Subject } from 'src/app/subjects/subject';
import { Part } from 'src/app/parts/part';
import { SubjectService } from 'src/app/subjects/subject.service';
import { PartService } from 'src/app/parts/part.service';
import { ConceptService } from '../concept.service';

@Component({
  selector: 'app-update-concept-stepper',
  templateUrl: './update-concept-stepper.component.html',
  styleUrls: ['./update-concept-stepper.component.scss']
})
export class UpdateConceptStepperComponent implements OnInit {

  isLinear = false;
  secondFormGroup: FormGroup;
  concept: Concept;
  subjects: Subject[];
  parts: Part[];

  showContextForm = new FormGroup({
    subject: new FormControl(),
    part: new FormControl(),
  });

  constructor(
    private _formBuilder: FormBuilder,
    private conceptService: ConceptService,
    private route: ActivatedRoute,
    private subjectService: SubjectService,
    private partService: PartService,
  ) { }

  ngOnInit(): void {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.showSubjects();
    this.showParts();
    this.fetchConceptDetails();
  }

  showSubjects() {
    this.subjectService.getSubjectsList()
      .subscribe((data: Subject[]) => {
        this.subjects = data;
        this.showSubjectValue();
      });
  }

  showParts() {
    this.partService.getPartsList()
      .subscribe((data: Part[]) => {
        this.parts = data;
        this.showPartValue();
      })
  }

  fetchConceptDetails() {
     const id = this.route.snapshot.paramMap.get('id');
    this.conceptService.getConceptDetails(id)
      .subscribe((data: Concept) => {
        this.concept = data[0];
      })
  }

  displaySubjectName(subject: Subject): string {
    return subject && subject.subject_name ? subject.subject_name : '';
  }

  displayPartName(part: Part): string {
    return part && part.part_name ? part.part_name : '';
  }

   showSubjectValue() {
    let preSelectedSubject = localStorage.getItem("dvp-subject");

    if(preSelectedSubject && preSelectedSubject.length){
      preSelectedSubject = JSON.parse(preSelectedSubject);
      this.showContextForm.controls['subject'].setValue(preSelectedSubject);
      this.showContextForm.controls['subject'].disable();
    }
  }

  showPartValue() {
    let preSelectedPart = localStorage.getItem("dvp-part");

    if(preSelectedPart && preSelectedPart.length){
      preSelectedPart = JSON.parse(preSelectedPart);
      this.showContextForm.controls['part'].setValue(preSelectedPart);
      this.showContextForm.controls['part'].disable();
    }
  }
  
}
