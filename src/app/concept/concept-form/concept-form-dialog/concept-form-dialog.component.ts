import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConceptDefnition } from '../../concept';

@Component({
  selector: 'app-concept-form-dialog',
  templateUrl: './concept-form-dialog.component.html',
  styleUrls: ['./concept-form-dialog.component.scss']
})
export class ConceptFormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConceptFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConceptDefnition) { }

  ngOnInit(): void {
  }

}
