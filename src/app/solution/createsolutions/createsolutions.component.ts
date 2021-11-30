import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SolutionService } from '../solution.service';
import { SolutionSuite } from '../solutions';

@Component({
  selector: 'app-createsolutions',
  templateUrl: './createsolutions.component.html',
  styleUrls: ['./createsolutions.component.scss']
})
export class CreatesolutionsComponent implements OnInit {
  createSolutionsForm: FormGroup;
  selectedType: string;
  types: string[] = ['Default', 'Optional', 'Different', 'Use other Solutions'];
  functions = new FormControl();

  functionList: string[] = ['Coblus Dogus', 'Another Function', 'Another Function', 'Another Function', 'Another Function', 'Another Function'];


  constructor( public dialogRef: MatDialogRef<CreatesolutionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SolutionSuite,
    private solutionService: SolutionService,
    private fb: FormBuilder,
  ) {
      this.createSolutionsForm = this.fb.group({
        name: new FormControl(''),
        description: new FormControl(''),
        functions:new FormControl(''),
        // solution:new FormControl(''),
      
       
      });
   }

  ngOnInit(): void {
  }
 
  createSolution(): void {
    const formValue = this.createSolutionsForm.value;

    this.data.name = formValue.name;
    this.data.description = formValue.symbol;
    this.data.type = formValue.type;
    this.data.solution = formValue.solution;
    
    this.solutionService.createSolutionSuite(this.data)
      .subscribe((data: SolutionSuite) => {
        this.dialogRef.close(data);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

 

}
