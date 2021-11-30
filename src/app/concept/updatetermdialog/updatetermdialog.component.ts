import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConstraintService } from 'src/app/constraints/constraint.service';
import { Term } from 'src/app/terms/term';
import { TermService } from 'src/app/terms/term.service';
import { NewtermdialogComponent } from '../newtermdialog/newtermdialog.component';
import { NewvariabledialogComponent } from '../newvariabledialog/newvariabledialog.component';
import { UpdatevariabledialogComponent } from '../updatevariabledialog/updatevariabledialog.component';

@Component({
  selector: 'app-newtermdialog',
  templateUrl: './updatetermdialog.component.html',
  styleUrls: ['./updatetermdialog.component.scss']
})
export class UpdatetermdialogComponent implements OnInit {
  updateTermForm: FormGroup;
  // selectedOptions: string;
  options: string[] = ['LHS', 'RHS'];
  variables:string[]=['X','Y','Z'];
  variabletypes: string[] = ['Symbol/Value', 'Constant'];
  constrainttypes:string[]=['Value','Coefficient'];
  // selectedoption:string;
  // options: string[] = ['LHS', 'RHS'];
  symbol: '';
  symbolOperators: string[] = ['=', '<', '>', '<=', '>='];
  subsymbolOperators:string[]=['=', '<', '>', '<=', '>='];
  coefficientOperators: string[] = ['=', '<', '>', '<=', '>='];
  mathEquation = "";
 

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpdatetermdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Term,
    private termService: TermService,
    private fb: FormBuilder,
  ) {
    
      this.updateTermForm = this.fb.group({
        name: new FormControl(''),
        symbol: new FormControl(''),
        definition: new FormControl(''),
        location: new FormControl(''),
        symbolConstraints: this.fb.array([
          // this.newSymbolConstraint()
        ]),
        
        // coefficientConstraints: this.fb.array([]),
      });
   }

  ngOnInit(): void {

  }


  openDialogUpdateVariable(variable): void {
    const formValue = this.updateTermForm.value;
  
    const dialogRef = this.dialog.open(UpdatevariabledialogComponent, {
      width: '60%',
      data: {
        "name": formValue.name,
      "symbol": formValue.symbol,
      "definition": '',
      "value": '',
      "value_type": "constant",
      "location":formValue.location,
      "constraints":{
        "symbol": [],
        "coefficient": []
      }
     }
    });

  dialogRef.afterClosed().subscribe((result: Term) => {
   
    
  });
 }


 openDialogNewVariableTerm(): void {
    const formValue = this.updateTermForm.value;
  
    const dialogRef = this.dialog.open(NewvariabledialogComponent, {
      width: '60%',
      data: {
        "name": formValue.name,
      "symbol": formValue.symbol,
      "definition": '',
      "value": '',
      "value_type": "constant",
      "location":formValue.location,
      "constraints":{
        "symbol": [],
        "coefficient": []
      }
     }
    });

  dialogRef.afterClosed().subscribe((result: Term) => {
   
    
  });
 }

  onChangeSymbol(latexValue){
    this.updateTermForm['controls'].symbol.setValue(latexValue);
    //debugger;
  }


  symbolConstraints(): FormArray {
    
    return this.updateTermForm.get('symbolConstraints') as FormArray;
  }

  newSymbolConstraint(): FormGroup {
    const formValue = this.updateTermForm.value;
    return this.fb.group({
      "name": formValue.name,
      "symbol": formValue.symbol,
      "definition": '',
      "value": '',
      "value_type": "constant",
      subSymbolConstraints: this.fb.array([]),
    })
  }

  addSymbolConstraint() {
    
    this.symbolConstraints().push(this.newSymbolConstraint());
  }

 

  newsubSymbolConstraints(): FormGroup {
    const formValue = this.updateTermForm.value;
    return this.fb.group({
      "name": formValue.name,
      "symbol": formValue.symbol,
      "comparator": '',
      "value": '',
      "value_type": "constant"
    })
  }

 

  addsubSymbolConstraints(index): void {
    
    (<FormArray>(<FormGroup>this.symbolConstraints().controls[index]).controls.subSymbolConstraints).push(this.newsubSymbolConstraints());
  }

  coefficientConstraints(): FormArray {
    return this.updateTermForm.get('coefficientConstraints') as FormArray;
  }

  newCoefficientConstraint(): FormGroup {
    const formValue = this.updateTermForm.value;
    return this.fb.group({
      "name": formValue.name,
      "symbol": formValue.symbol,
      "comparator": '',
      "value": '',
      "value_type": "constant"
    })
  }

  addCoefficientConstraint() {
    this.coefficientConstraints().push(this.newCoefficientConstraint());
  }

  updateTerm(): void {
    const formValue = this.updateTermForm.value;

    this.data.name = formValue.name;
    this.data.symbol = formValue.symbol;
    this.data.definition = formValue.definition;
    this.data.location = formValue.side;
    this.data.constraints.symbol = formValue.symbolConstraints;
    this.data.constraints.subsymbol=formValue.subsymbolConstraints;
    this.data.constraints.coefficient = formValue.coefficientConstraints;

    this.termService.createFunctionTerm(this.data)
      .subscribe((data: Term) => {
        this.dialogRef.close(data);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeSymbol = this.onChangeSymbol.bind(this);


}
