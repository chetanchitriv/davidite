import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Concept } from '../concept/concept';
import { ConceptService } from '../concept/concept.service';
import { Part } from '../parts/part';
import { PartService } from '../parts/part.service';
import { Subject } from '../subjects/subject';
import { SubjectService } from '../subjects/subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subjectsControl = new FormControl();
  partsControl = new FormControl();
  subjects: Subject[];
  parts: Part[];
  concepts: Concept[];

  constructor(
    private router: Router, 
    private subjectService: SubjectService,
    private partService: PartService,
    private conceptService: ConceptService
  ) { }

  ngOnInit(): void {
    this.showSubjects();
    this.showParts();
    this.showConcepts();
  }

  getConcept() {
    this.showSubjects();
    this.showParts();
    this.showConcepts();
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

  showConcepts(keyword = null) {
    this.conceptService.searchConcepts(keyword)
      .subscribe((data:Concept[]) => {
        this.concepts = data || [];

        // if(this.concepts.length) {
        //   document.querySelector('.empty-concepts').classList.add('display-none');
        //   document.querySelector('.concepts-list').classList.remove('display-none');
        // } else {
        //   document.querySelector('.concepts-list').classList.add('display-none');
        //   document.querySelector('.empty-concepts').classList.remove('display-none');
        // }
        console.log(data);
      })
  }

  displaySubjectName(subject: Subject): string {
    return subject && subject.subject_name ? subject.subject_name : '';
  }

  displayPartName(part: Part): string {
    return part && part.part_name ? part.part_name : '';
  }

  deleteConcept(concept_id: string){
    this.conceptService.deleteconcept(concept_id).subscribe((res :any)=>{
      this.getConcept();

    })

  }

  addConcept(): void {
    this.router.navigate(['/create-concept']);
  }

  updateConcept(concept_id: string): void {
    this.router.navigate([`update-concept/${concept_id}`]);
  }

  updateSubject(subject: Subject): void {
    localStorage.setItem('dvp-subject', JSON.stringify(subject));
  }

  updatePart(part: Part): void {
    localStorage.setItem('dvp-part', JSON.stringify(part));
  }

  showSubjectValue() {
    let preSelectedSubject = localStorage.getItem("dvp-subject");

    if(preSelectedSubject && preSelectedSubject.length){
      preSelectedSubject = JSON.parse(preSelectedSubject);
      this.subjectsControl.setValue(preSelectedSubject);
    }
  }

  showPartValue() {
    let preSelectedPart = localStorage.getItem("dvp-part");

    if(preSelectedPart && preSelectedPart.length){
      preSelectedPart = JSON.parse(preSelectedPart);
      this.partsControl.setValue(preSelectedPart);
    }
  }
}
