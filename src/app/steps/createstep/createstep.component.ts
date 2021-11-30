import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { EvalFunction } from 'src/app/evalfunctions/evalfunction';
import { EvalfunctionService } from 'src/app/evalfunctions/evalfunction.service';
import { NewconditiondialogComponent } from '../newconditiondialog/newconditiondialog.component';

@Component({
  selector: 'app-createstep',
  templateUrl: './createstep.component.html',
  styleUrls: ['./createstep.component.scss']
})
export class CreatestepComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  public hierarchicalData: Object[] = [
    { id: '01', name: 'Local Disk (C:)', expanded: true,
        subChild: [
            {
                id: '01-01', name: 'Program Files',
                subChild: [
                    { id: '01-01-01', name: 'Windows NT' },
                    { id: '01-01-02', name: 'Windows Mail' },
                    { id: '01-01-03', name: 'Windows Photo Viewer' },
                ]
            },
            {
                id: '01-02', name: 'Users', expanded: true,
                subChild: [
                    { id: '01-02-01', name: 'Smith' },
                    { id: '01-02-02', name: 'Public' },
                    { id: '01-02-03', name: 'Admin' },
                ]
            },
            {
                id: '01-03', name: 'Windows',
                subChild: [
                    { id: '01-03-01', name: 'Boot' },
                    { id: '01-03-02', name: 'FileManager' },
                    { id: '01-03-03', name: 'System32' },
                ]
            },
        ]
    },
    {
        id: '02', name: 'Local Disk (D:)',
        subChild: [
            {
                id: '02-01', name: 'Personals',
                subChild: [
                    { id: '02-01-01', name: 'My photo.png' },
                    { id: '02-01-02', name: 'Rental document.docx' },
                    { id: '02-01-03', name: 'Pay slip.pdf' },
                ]
            },
            {
                id: '02-02', name: 'Projects',
                subChild: [
                    { id: '02-02-01', name: 'ASP Application' },
                    { id: '02-02-02', name: 'TypeScript Application' },
                    { id: '02-02-03', name: 'React Application' },
                ]
            },
            {
                id: '02-03', name: 'Office',
                subChild: [
                    { id: '02-03-01', name: 'Work details.docx' },
                    { id: '02-03-02', name: 'Weekly report.docx' },
                    { id: '02-03-03', name: 'Wish list.csv' },
                ]
            },
        ]
    },
    {
        id: '03', name: 'Local Disk (E:)', icon: 'folder',
        subChild: [
            {
                id: '03-01', name: 'Pictures',
                subChild: [
                    { id: '03-01-01', name: 'Wind.jpg' },
                    { id: '03-01-02', name: 'Stone.jpg' },
                    { id: '03-01-03', name: 'Home.jpg' },
                ]
            },
            {
                id: '03-02', name: 'Documents',
                    subChild: [
                    { id: '03-02-01', name: 'Environment Pollution.docx' },
                    { id: '03-02-02', name: 'Global Warming.ppt' },
                    { id: '03-02-03', name: 'Social Network.pdf' },
                ]
            },
            {
                id: '03-03', name: 'Study Materials',
                subChild: [
                    { id: '03-03-01', name: 'UI-Guide.pdf' },
                    { id: '03-03-02', name: 'Tutorials.zip' },
                    { id: '03-03-03', name: 'TypeScript.7z' },
                ]
            },
        ]
    }
];
// Mapping TreeView fields property with data source properties
public field:Object ={ dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild' };

  //for condition form
  selectedTabIndex = 0;
  //for evaluation form
  functions: EvalFunction[];
  panelOpenState = false;    //evalFunction list panel open/collapse
  createEvalStepForm: FormGroup;

  mathEquation:any;
  //for condition form
  createConditionStepForm = new FormGroup({
    type: new FormControl('conditional'),
    name: new FormControl(''),
    description: new FormControl(''),
    evalFunction: new FormControl(''),
    lhs: new FormControl(''),
    rhs: new FormControl(''),
    trueIndex: new FormControl(''),
    falseIndex: new FormControl(''),
    entryDesc: new FormControl(''),
    exitDesc: new FormControl(''),
  });

  constructor(
    private funcService: EvalfunctionService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CreatestepComponent>
    ) { 
      this.createEvalStepForm = this.fb.group({
        type: new FormControl('evaluation'),
        name: new FormControl(''),
        description: new FormControl(''),
        evalFunction: new FormControl(''),
        entryDesc: new FormControl(''),
        exitDesc: new FormControl(''),
        arguments: this.fb.array([]) ,
      });
  }

  ngOnInit(): void {
    this.fillEvalFunctions();
  }
  changeDescription = this.onChangeDescription.bind(this)

  changeEntryDesc = this.onChangeEntryDesc.bind(this)

  changeExitDesc = this.onChangeDescription.bind(this)

  onChangeDescription(latexValue) {
    this.createEvalStepForm.controls.description.setValue(latexValue);
  }

  onChangeEntryDesc(latexValue) {
    this.createEvalStepForm.controls.entryDesc.setValue(latexValue);
  }

  onChangeExitDesc(latexValue) {
    this.createEvalStepForm.controls.exitDesc.setValue(latexValue);
  }

  fillEvalFunctions() {
    this.funcService.getListEvalFunctions()
      .subscribe((data: EvalFunction[]) => {
        this.functions = data;
      });
  }

  displayFunctionName(func: EvalFunction): string {
    return func && func.func_name ? func.func_name : '';
  }

  functionSelected() {
    const selectedFunction: EvalFunction = this.createEvalStepForm.controls.evalFunction.value;
    //clear existing data
    this.panelOpenState = false;
    this.arguments().clear();

    this.funcService.getEvaluationFunction(selectedFunction)
      .subscribe((data: EvalFunction) => {
        const funcDetails = data;

        //push new arguments from slected function
        if(Object.keys(funcDetails.func_args).length === 0 && funcDetails.func_args.constructor === Object) {
          //empty object
          this.addArgument('e');
        } else {
          for(const property in funcDetails.func_args) {
            this.addArgument(property);
          }
        }

        //open collapsable panel
        this.panelOpenState = true;
      });
  }

  functionConditionSelected() {}

  //logic to fill dynamic arguments
  newArgument(key: string): FormGroup {
    return this.fb.group({
      argValue: '',
      argKey: key
    })
  }

  addArgument(key: string) {
    this.arguments().push(this.newArgument(key));
  }

  arguments() : FormArray {
    return this.createEvalStepForm.get("arguments") as FormArray;
  }

  //onTabIndexChange
  onTabIndexChange($event) {
    this.selectedTabIndex = $event;
  }

   onNoClick(): void {
    this.dialogRef.close();
  }

  createEvalStep() {
    this.dialogRef.close(this.createEvalStepForm.value);
  }

  createConditionStep() {
    this.dialogRef.close(this.createConditionStepForm.value);
  }

  openDialogNewCondition(): void {
   
      const dialogRef = this.dialog.open(NewconditiondialogComponent, {
        width: '50%',  
        data: {
         
       "comparator": '',
       "lhs_value":'',
       "rhs_value":'',
        }
       });
  
    dialogRef.afterClosed().subscribe(() => {
     
      
    });
   }

  

}
