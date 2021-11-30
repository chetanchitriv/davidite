import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Function } from 'src/app/functions/function';
import { FunctionService } from 'src/app/functions/function.service';

@Component({
  selector: 'app-newfunctiondialog',
  templateUrl: './newfunctiondialog.component.html',
  styleUrls: ['./newfunctiondialog.component.scss']
})
export class NewfunctiondialogComponent implements OnInit {

  createFunctionForm = new FormGroup({
    name: new FormControl(''),
    ftype: new FormControl('')
  });


  fuctionType =["linear","Quadratic","xyz","pqr"]
  constructor(
    public dialogRef: MatDialogRef<NewfunctiondialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Function,
    private functionService: FunctionService
  ) {
    console.log(data);
   }

  ngOnInit(): void {
  }

  createFunction(): void {
    const formValue = this.createFunctionForm.value;
    this.data.name = formValue.name;
    this.data.ftype = formValue.ftype;

    this.functionService.createFunction(this.data)
      .subscribe((data: Function) => {
        this.dialogRef.close(data);
      });
      
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
