import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Term } from 'src/app/terms/term';
import { TermService } from 'src/app/terms/term.service';

@Component({
  selector: 'app-updatetermconstraintdialog',
  templateUrl: './updatetermconstraintdialog.component.html',
  styleUrls: ['./updatetermconstraintdialog.component.scss']
})
export class UpdatetermconstraintdialogComponent implements OnInit {

  constrainttypes:string[]=['Value','Coefficient'];
  subsymbolOperators:string[]=['=', '<', '>', '<=', '>='];
  updateTermConstraintform: FormGroup;
  constructor(public dialog: MatDialog,

    public dialogRef: MatDialogRef<UpdatetermconstraintdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Term,
    private termService: TermService,
    private fb: FormBuilder) {
    this.updateTermConstraintform = this.fb.group({
      type: new FormControl(''),
      comparator: new FormControl(''),
      value: new FormControl(''),
      
    })
   }

  ngOnInit(): void {
  }
  onChangeSymbol(latexValue){
    this.updateTermConstraintform['controls'].symbol.setValue(latexValue);
    //debugger;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  changeSymbol = this.onChangeSymbol.bind(this);

}
