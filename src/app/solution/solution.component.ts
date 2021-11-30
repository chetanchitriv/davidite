import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements OnInit {
  name = 'Angular';
  productForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]),
    });
  }

  ngOnInit(): void {
  }

  quantities() : FormArray {
    return this.productForm.get("quantities") as FormArray;
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
    })
  }
   
  addQuantity() {
    this.quantities().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.quantities().removeAt(i); 
  }
   
  onSubmit() {
    console.log(this.productForm.value);
  }

}
