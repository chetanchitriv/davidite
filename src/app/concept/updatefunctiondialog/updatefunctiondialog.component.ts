import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Function } from 'src/app/functions/function';
import { FunctionService } from 'src/app/functions/function.service';

@Component({
  selector: 'app-newfunctiondialog',
  templateUrl: './updatefunctiondialog.component.html',
  styleUrls: ['./updatefunctiondialog.component.scss']
})
export class UpdatefunctiondialogComponent implements OnInit {

  createFunctionForm = new FormGroup({
    name: new FormControl(''),
    ftype: new FormControl('')
  });


  fuctionType =["linear","Quadratic","xyz","pqr"]
  constructor(
    public dialogRef: MatDialogRef<UpdatefunctiondialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private functionService: FunctionService
  ) {
    debugger
    console.log(data);
   }

  ngOnInit(): void {
    this.createFunctionForm.patchValue(this.data);
  }

  updateFunction(): void {
    const formValue = this.createFunctionForm.value;
    this.data.name = formValue.name;
    this.data.ftype = formValue.ftype;
debugger
    this.functionService.updateFunction(this.data.func.func_id,this.data)
      .subscribe((data: Function) => {
        this.dialogRef.close(data);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
