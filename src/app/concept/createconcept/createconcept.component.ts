import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Part } from 'src/app/parts/part';
import { PartService } from 'src/app/parts/part.service';
import { Subject } from 'src/app/subjects/subject';
import { SubjectService } from 'src/app/subjects/subject.service';
import { Concept } from '../concept';
import { ConceptService } from '../concept.service';

@Component({
  selector: 'app-conceptdetail',
  templateUrl: './createconcept.component.html',
  styleUrls: ['./createconcept.component.scss']
})
export class CreateConceptComponent implements OnInit {

  subjects: Subject[];
  parts: Part[];
  mathEquation = "";
  createConceptForm : FormGroup;
  
  changeSymbol = this.onChangeSymbol.bind(this);
   author_definitions: FormArray;
  

  constructor(
    private subjectService: SubjectService,
    private partService: PartService,
    private conceptService: ConceptService,
    private router: Router,
    public dialog: MatDialog,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.showSubjects();
    this.showParts();
    this.initForm();
  }
  remove(index) {
    this.author_definitions.removeAt(index);
  }
  addItem(): void {
    this.author_definitions = this.createConceptForm.get('author_definitions') as FormArray;
    this.author_definitions.push(this.createItem());
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      author: ['', []],
      definition: ['', [Validators.required]],
    });
  }

initForm(){

   return this.createConceptForm = this.formBuilder.group({
    subject: ['', [Validators.required]],
    part: ['', [Validators.required]],
    name: ['', [Validators.required]],
    symbol: ['', [Validators.required]],
    meaning: ['', [Validators.required]],
    author_definitions: this.formBuilder.array([ this.createItem() ])

    // meaning: ['', [Validators.required]],
    // definition: ['', [Validators.required]],
    
  });
  // this.createConceptForm =  new FormGroup({
  //   subject: new FormControl(),
  //   part: new FormControl(),
  //   name: new FormControl(''),
  //   symbol: new FormControl(''),
  //   // optionalSymbol: new FormControl(''),
  //   author: new FormControl(''),
  //   meaning: new FormControl(''),
  //   definition: new FormControl(''),

  //   author_definitions: this.formBuilder.array([ this.createItem() ])
  // });

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

  displaySubjectName(subject: Subject): string {
    return subject && subject.subject_name ? subject.subject_name : '';
  }

  displayPartName(part: Part): string {
    return part && part.part_name ? part.part_name : '';
  }

  onChangeSymbol(latexValue){
    this.createConceptForm['controls'].symbol.setValue(latexValue);
    //debugger;
  }

  createConcept(): void {
    const formValue = this.createConceptForm.value,
      concept: Concept = {
      "subject_id": this.createConceptForm.controls.subject.value.subject_id,
      "part_id": this.createConceptForm.controls.part.value.part_id,
      "name": formValue.name,
      "author_definitions":formValue.author_definitions,
      "meaning": formValue.meaning,
      "symbol": formValue.symbol,
      "functions": [],
      "tables": [],
      "constants": [],
      "p_concept_id": "-"
    };
    this.conceptService.createNewConcept(concept)
      .subscribe((data: Concept) => {
        this.router.navigate([`/update-concept/${data.concept_id}`]);
      });
  }

  showSubjectValue() {
    let preSelectedSubject = localStorage.getItem("dvp-subject");

    if(preSelectedSubject && preSelectedSubject.length){
      preSelectedSubject = JSON.parse(preSelectedSubject);
      this.createConceptForm.controls['subject'].setValue(preSelectedSubject);
      this.createConceptForm.controls['subject'].disable();
    }
  }

  showPartValue() {
    let preSelectedPart = localStorage.getItem("dvp-part");

    if(preSelectedPart && preSelectedPart.length){
      preSelectedPart = JSON.parse(preSelectedPart);
      this.createConceptForm.controls['part'].setValue(preSelectedPart);
      this.createConceptForm.controls['part'].disable();
    }
  }
}
