import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Term } from 'src/app/terms/term';
import { TermService } from 'src/app/terms/term.service';
import { AddconstraintdialogComponent } from '../addconstraintdialog/addconstraintdialog.component';

@Component({
  selector: 'app-newvariabledialog',
  templateUrl: './newvariabledialog.component.html',
  styleUrls: ['./newvariabledialog.component.scss']
})
export class NewvariabledialogComponent implements OnInit {
  options: string[] = ['LHS', 'RHS'];
  variabletypes: string[] = ['Symbol/Value', 'Constant'];
  mathEquation = "";
  addvariableform: FormGroup;
  constructor( public dialog: MatDialog,

    public dialogRef: MatDialogRef<AddconstraintdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Term,
    private termService: TermService,
    private fb: FormBuilder) {
      this.addvariableform = this.fb.group({
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
    this.addvariableform['controls'].symbol.setValue(latexValue);
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
 onNoClick(): void {
  this.dialogRef.close();
}

 changeSymbol = this.onChangeSymbol.bind(this);

}
