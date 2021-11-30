import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Constraint } from 'src/app/constraints/constraint';
import { ConstraintService } from 'src/app/constraints/constraint.service';

@Component({
  selector: 'app-newconstraintdialog',
  templateUrl: './newconstraintdialog.component.html',
  styleUrls: ['./newconstraintdialog.component.scss']
})
export class NewconstraintdialogComponent implements OnInit {
  createConstraintForm: FormGroup;
  options: string[] = ['LHS', 'RHS'];
  constructor( public dialogRef: MatDialogRef<NewconstraintdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Constraint,
    private constraintService: ConstraintService,
    private fb: FormBuilder,
  ) {
      this.createConstraintForm = this.fb.group({
        name: new FormControl(''),
        symbol: new FormControl(''),
        comparator:new FormControl(''),
        value:new FormControl(''),
        value_type:new FormControl('')
       
      });
   }

  ngOnInit(): void {
  }
  onChangeSymbol(latexValue){
    this.createConstraintForm['controls'].symbol.setValue(latexValue);
    //debugger;
  }
  createConstraint(): void {
    const formValue = this.createConstraintForm.value;

    this.data.name = formValue.name;
    this.data.symbol = formValue.symbol;
    this.data.comparator = formValue.comparator;
    this.data.value = formValue.value;
    this.data.value_type=formValue.value;
    this.constraintService.createTermConstraint(this.data)
      .subscribe((data: Constraint) => {
        this.dialogRef.close(data);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeSymbol = this.onChangeSymbol.bind(this);



}
