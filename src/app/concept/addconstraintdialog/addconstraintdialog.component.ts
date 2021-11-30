import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Term } from 'src/app/terms/term';
import { TermService } from 'src/app/terms/term.service';

@Component({
  selector: 'app-addconstraintdialog',
  templateUrl: './addconstraintdialog.component.html',
  styleUrls: ['./addconstraintdialog.component.scss']
})
export class AddconstraintdialogComponent implements OnInit {
  constrainttypes:string[]=['Value','Coefficient'];
  subsymbolOperators:string[]=['=', '<', '>', '<=', '>='];
  addConstraintform: FormGroup;
  constructor(public dialog: MatDialog,

    public dialogRef: MatDialogRef<AddconstraintdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Term,
    private termService: TermService,
    private fb: FormBuilder) {
    this.addConstraintform = this.fb.group({
      type: new FormControl(''),
      comparator: new FormControl(''),
      value: new FormControl(''),
      
    })
   }

  ngOnInit(): void {
  }
  onChangeSymbol(latexValue){
    this.addConstraintform['controls'].symbol.setValue(latexValue);
    //debugger;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  changeSymbol = this.onChangeSymbol.bind(this);

}
