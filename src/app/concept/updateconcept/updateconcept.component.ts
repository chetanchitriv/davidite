import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Function } from 'src/app/functions/function';
import { FunctionService } from 'src/app/functions/function.service';
import { Part } from 'src/app/parts/part';
import { PartService } from 'src/app/parts/part.service';
import { Subject } from 'src/app/subjects/subject';
import { SubjectService } from 'src/app/subjects/subject.service';
import { Term } from 'src/app/terms/term';
import { TermService } from 'src/app/terms/term.service';
import { Concept } from '../concept';
import { ConceptService } from '../concept.service';
import { NewfunctiondialogComponent } from '../newfunctiondialog/newfunctiondialog.component';
import { NewtermdialogComponent } from '../newtermdialog/newtermdialog.component';
import { UpdatetermdialogComponent } from '../updatetermdialog/updatetermdialog.component';
import { UpdatefunctiondialogComponent } from '../updatefunctiondialog/updatefunctiondialog.component';
import { NewconstraintdialogComponent } from '../newconstraintdialog/newconstraintdialog.component';
import { UpdateconstraintdialogComponent } from '../updateconstraintdialog/updateconstraintdialog.component';
import { Constraint } from 'src/app/constraints/constraint';
import { ConstraintService } from 'src/app/constraints/constraint.service';

@Component({
  selector: 'app-updateconcept',
  templateUrl: './updateconcept.component.html',
  styleUrls: ['./updateconcept.component.scss']
})
export class UpdateconceptComponent implements OnInit {

  conceptId: string;
  subjects: Subject[];
  parts: Part[];
  concept: Concept;
  mathEquation: any ="";
  functions: Function[];
  updateConceptForm : FormGroup;
  author_definitions: FormArray;

  changeSymbol = this.onChangeSymbol.bind(this)

  constructor(
    private subjectService: SubjectService,
    private partService: PartService,
    private conceptService: ConceptService,
    private functionService: FunctionService,
    private termService: TermService,
    private constraintService:ConstraintService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.conceptId = this.route.snapshot.paramMap.get('id');
    this.getAndFillConceptData();
    this.initForm();
  }

  initForm(){

    return this.updateConceptForm = this.formBuilder.group({
     subject: ['', [Validators.required]],
     part: ['', [Validators.required]],
     name: ['', [Validators.required]],
     meaning: ['', [Validators.required]],
     symbol: ['', [Validators.required]],
     author_definitions: this.formBuilder.array([ this.createItem() ])
   });

 }

 remove(index) {
  this.author_definitions.removeAt(index);
}
addItem(): void {
  this.author_definitions = this.updateConceptForm.get('author_definitions') as FormArray;
  this.author_definitions.push(this.createItem());
}
getItem(): void {
  this.author_definitions = this.updateConceptForm.get('author_definitions') as FormArray;

  // this.author_definitions = this.updateConceptForm.get('author_definitions') as FormArray;
  // this.author_definitions.push(this.createItem());
}
createItem(): FormGroup {
  return this.formBuilder.group({
    author: ['', []],
    definition: ['', [Validators.required]],
  });
}
 
validate(){
  
  console.log(this.updateConceptForm);
}

  getAndFillConceptData() {
    this.showSubjects();
    this.showParts();
    this.showConcepts();
  }
  getAndFillConceptData1(){
    this.showSubjects();
    this.showParts();
    this.showConcepts1();
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

  showConcepts() {
   
    const id = this.route.snapshot.paramMap.get('id');
    this.conceptService.getConceptDetails(id)
      .subscribe((data: Concept) => {
        this.concept = data;
        this.fillConceptForm(this.concept);
        this.fillFunctionTiles(this.concept);
      });
  }

  fillConceptForm(concept: Concept) {

    concept.author_definitions.forEach((e,i)=>{
      if(i!= 0){
         this.addItem();
      }
    
    })

     this.updateConceptForm.patchValue(concept);
    this.updateConceptForm.controls['name'].setValue(concept.name);
    this.updateConceptForm.controls['symbol'].setValue(concept.symbol);
    // this.updateConceptForm.controls['optionalSymbol'].setValue(concept.symbol);
    this.updateConceptForm.controls['meaning'].setValue(concept.meaning);
    // this.updateConceptForm.controls['definition'].setValue(concept.definition);

    console.log(this.updateConceptForm.value+"...................................................")
  }
  showConcepts1(){
    const id = this.route.snapshot.paramMap.get('id');
    this.conceptService.getConceptDetails(id)
      .subscribe((data: Concept) => {
        this.concept = data;
        this.fillConceptForm1(this.concept);
        this.fillFunctionTiles(this.concept);
      });
  }
  fillConceptForm1(concept: Concept) {

    concept.author_definitions.forEach((e,i)=>{
      if(i!= 0){
         this.getItem();
      }
    
    })

     this.updateConceptForm.patchValue(concept);
    this.updateConceptForm.controls['name'].setValue(concept.name);
    this.updateConceptForm.controls['symbol'].setValue(concept.symbol);
    // this.updateConceptForm.controls['optionalSymbol'].setValue(concept.symbol);
    this.updateConceptForm.controls['meaning'].setValue(concept.meaning);
    // this.updateConceptForm.controls['definition'].setValue(concept.definition);

    console.log(this.updateConceptForm.value+"...................................................")
  }
  fillFunctionTiles(concept: Concept) {

    this.functionService.listConceptFunctions(concept.concept_id)
      .subscribe((data: Function[]) => {
        this.functions = data;

        if(this.functions.length){
          document.querySelector('.empty-container').classList.add('display-none');
          document.querySelector('.function-tiles-container').classList.remove('display-none');

          //fill TERMS and Constraints on each function tile
          for(let func of this.functions) {
            //this.fillFunctionTerms(func);
            //this.fillFunctionConstraints(func);
            this.populateFunctionTiles(func);
          }

        } else {
          document.querySelector('.function-tiles-container').classList.add('display-none');
          document.querySelector('.empty-container').classList.remove('display-none');
        }
      });
  }

  populateFunctionTiles(func: Function) {
    const funObj = func;

    this.functionService.getFunctionDetails(func.func_id)
      .subscribe((data: Function) => {
        console.log(data);
        if(data.terms.length) {
          funObj.terms = data.terms;
          //this.fillFunctionTerms(data);
        }
        if(data.constraints.length) {
          funObj.constraints = data.constraints;
          //this.fillFunctionConstraints(data);
        }
      });
  }

  fillFunctionTerms(func: Function): void {
    if(!(func.terms && func.terms.length)){
      func.termsDetails = [];
      return;
    }

    const funObj = func;
    let responses = [];

    for(let term_id of func.terms) {
      responses.push(this.termService.getTermDetails(term_id));
    }

    forkJoin(responses).subscribe((data: Term[]) => {
      funObj.termsDetails = data;
    });
  }

  fillFunctionConstraints(func: Function): void {
    	
  }

  updateConcept(): void {

    const formValue = this.updateConceptForm.value,
      data: object = {
      "name": formValue.name,
      "meaning": formValue.meaning,     
      "symbol": formValue.symbol,
    };

    this.fireUpdateConcept(formValue);
  }

  fireUpdateConcept(data: object): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.conceptService.updateConcept(id, data)
      .subscribe((data: Concept) => {
        // this.getAndFillConceptData();
        this.getAndFillConceptData1();

        
      });
  }

  showSubjectValue() {
    let preSelectedSubject = localStorage.getItem("dvp-subject");

    if(preSelectedSubject && preSelectedSubject.length){
      preSelectedSubject = JSON.parse(preSelectedSubject);
      this.updateConceptForm.controls['subject'].setValue(preSelectedSubject);
      this.updateConceptForm.controls['subject'].disable();
    }
  }

  showPartValue() {
    let preSelectedPart = localStorage.getItem("dvp-part");

    if(preSelectedPart && preSelectedPart.length){
      preSelectedPart = JSON.parse(preSelectedPart);
      this.updateConceptForm.controls['part'].setValue(preSelectedPart);
      this.updateConceptForm.controls['part'].disable();
    }
  }

  /*
  * Function dialog
   */
   openDialogNewFunction(): void {
    const formValue = this.updateConceptForm.value,
      dialogRef = this.dialog.open(NewfunctiondialogComponent, {
      width: '400px',
      data: {
        "subject_id": this.updateConceptForm.controls.subject.value.subject_id,
        "part_id": this.updateConceptForm.controls.part.value.part_id,
        "concept_id": this.conceptId,
        "name": "",
        "ftype": "",
        "symbol": formValue.symbol,
        "terms": [],
        "author": formValue.author
      }
    });

    dialogRef.afterClosed().subscribe((result: Function) => {
      // this.getAndFillConceptData();
      this.getAndFillConceptData1();
    });
   }



   editDialogNewFunction(func,term): void {
     debugger
    const formValue = this.updateConceptForm.value,
      dialogRef = this.dialog.open(UpdatefunctiondialogComponent, {
      width: '400px',
      data: {
        "func":func,
        "subject_id": this.updateConceptForm.controls.subject.value.subject_id,
        "part_id": this.updateConceptForm.controls.part.value.part_id,
        "concept_id": this.conceptId,
        "name": func.name,
        "ftype": func.ftype,
        "symbol": formValue.symbol,
        "terms": [],
        "author": formValue.author
      }
    });

    dialogRef.afterClosed().subscribe((result: Function) => {
      // this.getAndFillConceptData();
      this.getAndFillConceptData1();
    });
   }
   /**
    * Function term dialog
    */
   openDialogNewFunctionTerm(fun: Function,put=false): void {
      const funObj = fun;
      const dialogRef = this.dialog.open(NewtermdialogComponent, {
        width: '80%',
        data: {
          "subject_id": this.updateConceptForm.controls.subject.value.subject_id,
          "part_id": this.updateConceptForm.controls.part.value.part_id,
          "concept_id": this.conceptId,
          "func_id": fun.func_id,
          "name" : "",
          "symbol": "",
          "definition": "",
          "location": "",
          "constraints":{
            "symbol": [],
            "coefficient": []
          }
        }
      });

    dialogRef.afterClosed().subscribe((result: Term) => {
      //fetch latest data
      // this.getAndFillConceptData();
      this.getAndFillConceptData1();
    });
   }

   openDialogUpdateFunctionTerm(fun: Function,term): void {
    const funObj = fun;
    const dialogRef = this.dialog.open(UpdatetermdialogComponent, {
      width: '80%',
      data: {
        "term":term,
        "subject_id": this.updateConceptForm.controls.subject.value.subject_id,
        "part_id": this.updateConceptForm.controls.part.value.part_id,
        "concept_id": this.conceptId,
        "func_id": fun.func_id,
        "name" : "",
        "symbol": "",
        "definition": "",
        "location": "",
        "constraints":{
          "symbol": [],
          "coefficient": []
        }
      }
    });

  dialogRef.afterClosed().subscribe((result: Term) => {
    //fetch latest data
    // this.getAndFillConceptData();
    this.getAndFillConceptData1();
  });
 }

 openDialogNewFunctionConstraint(fun: Function,put=false): void {
  const funObj = fun;
  const dialogRef = this.dialog.open(NewconstraintdialogComponent, {
    width: '50%',
    data: {
      "subject_id": this.updateConceptForm.controls.subject.value.subject_id,
      "part_id": this.updateConceptForm.controls.part.value.part_id,
      "concept_id": this.conceptId,
      "func_id": fun.func_id,
      "name" : "",
      "symbol": "",
      " comparator": "",
      "value": "",
      "value_type":"",
    }
  }
  )

dialogRef.afterClosed().subscribe((result: Constraint) => {
  //fetch latest data
  // this.getAndFillConceptData();
  this.getAndFillConceptData1();
});
}

openDialogUpdateFunctionConstraint(fun: Function,constraint): void {
const funObj = fun;
const dialogRef = this.dialog.open(UpdateconstraintdialogComponent, {
  width: '50%',
  data: {
    "constraint":constraint,
    "subject_id": this.updateConceptForm.controls.subject.value.subject_id,
    "part_id": this.updateConceptForm.controls.part.value.part_id,
    "concept_id": this.conceptId,
    "func_id": fun.func_id,
    "name" : "",
    "symbol": "",
    " comparator": "",
    "value": "",
    "value_type":"",
    }
  
});

dialogRef.afterClosed().subscribe((result: Constraint) => {
//fetch latest data
// this.getAndFillConceptData();
this.getAndFillConceptData1();
});
}


  onChangeSymbol(latexValue) {
    this.updateConceptForm.controls.symbol.setValue(latexValue);
    //debugger;
  }

  deleteFunction(data){
    debugger
    this.functionService.deleteFunction(data.func_id).subscribe((res :any)=>{
      // this.getAndFillConceptData();
      this.getAndFillConceptData1();

    })

  }
    deleteTerms(data){
      
      this.termService.deleteTerm(data.term_id).subscribe((res :any)=>{
        // this.getAndFillConceptData();
        this.getAndFillConceptData1();
      })
  }
  deleteConstraints(data){
    
    this.constraintService.deleteConstraint(data.constraint_id).subscribe((res :any)=>{
      // this.getAndFillConceptData();
      this.getAndFillConceptData1();
    })
}

 
}
