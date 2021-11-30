import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Term } from 'src/app/terms/term';
import { TermService } from 'src/app/terms/term.service';
import { AddconstraintdialogComponent } from '../addconstraintdialog/addconstraintdialog.component';
import { UpdatetermconstraintdialogComponent } from '../updatetermconstraintdialog/updatetermconstraintdialog.component';

@Component({
  selector: 'app-updatevariabledialog',
  templateUrl: './updatevariabledialog.component.html',
  styleUrls: ['./updatevariabledialog.component.scss']
})
export class UpdatevariabledialogComponent implements OnInit {

  options: string[] = ['LHS', 'RHS'];
  constraints:string[]=['c1','c2','c3'];
  variabletypes: string[] = ['Symbol/Value', 'Constant'];
  mathEquation = "";
  Updatevariableform: FormGroup;
  constructor( public dialog: MatDialog,

    public dialogRef: MatDialogRef<AddconstraintdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Term,
    private termService: TermService,
    private fb: FormBuilder) {
      this.Updatevariableform = this.fb.group({
        name: new FormControl(''),
        symbol: new FormControl(''),
        definition: new FormControl(''),
        value: new FormControl(''),
        symbolConstraints: this.fb.array([
          // this.newSymbolConstraint()
        ]),
      })
    }
     

  ngOnInit(): void {
  }
  onChangeSymbol(latexValue){
    this.Updatevariableform['controls'].symbol.setValue(latexValue);
    //debugger;
  }
  openDialogNewConstraintTerm(): void {
   
    const dialogRef = this.dialog.open(AddconstraintdialogComponent, {
      width: '40%',  
      data: {
       
     "comparator": '',
      "value": '',
      "value_type": "constant",
      "constraints":{
        "symbol": [],
        "coefficient": []
      }
     }
    });

  dialogRef.afterClosed().subscribe(() => {
   
    
  });
 }

 openDialogUpdateConstraints(constraint){
  const dialogRef = this.dialog.open(UpdatetermconstraintdialogComponent, {
    width: '40%',  
    data: {
     
   "comparator": '',
    "value": '',
    "value_type": "constant",
    "constraints":{
      "symbol": [],
      "coefficient": []
    }
   }
  });

dialogRef.afterClosed().subscribe(() => {
 
  
});
 }

 onNoClick(): void {
  this.dialogRef.close();
}

 changeSymbol = this.onChangeSymbol.bind(this);

}
