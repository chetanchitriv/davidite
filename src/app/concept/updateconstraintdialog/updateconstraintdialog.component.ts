import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constraint } from 'src/app/constraints/constraint';
import { ConstraintService } from 'src/app/constraints/constraint.service';


@Component({
  selector: 'app-updateconstraintdialog',
  templateUrl: './updateconstraintdialog.component.html',
  styleUrls: ['./updateconstraintdialog.component.scss']
})
export class UpdateconstraintdialogComponent implements OnInit {

  updateConstraintForm: FormGroup;
  options: string[] = ['LHS', 'RHS'];
  constructor( public dialogRef: MatDialogRef<UpdateconstraintdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Constraint,
    private constraintService: ConstraintService,
    private fb: FormBuilder,
  ) {
      this.updateConstraintForm = this.fb.group({
        name: new FormControl(''),
        symbol: new FormControl(''),
        comparator:new FormControl(''),
        value:new FormControl(''),
        value_type:new FormControl('')
       
      });
   }

  ngOnInit(): void {
    this.updateConstraintForm.patchValue(this.data.constraint); 
  }
  onChangeSymbol(latexValue){
    this.updateConstraintForm['controls'].symbol.setValue(latexValue);
    //debugger;
  }
  updateConstraint(): void {

    const formValue = this.updateConstraintForm.value;
    this.data.name=formValue.name;
    this.data.symbol = formValue.symbol;
    this.data.comparator = formValue.comparator;
    this.data.value = formValue.value;
    this.data.value_type=formValue.value;
    this.constraintService.updateFunctionConstraint(this.data.constraint.constraint_id,this.data)
      .subscribe((data: Constraint) => {
        this.dialogRef.close(data);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeSymbol = this.onChangeSymbol.bind(this);



}
