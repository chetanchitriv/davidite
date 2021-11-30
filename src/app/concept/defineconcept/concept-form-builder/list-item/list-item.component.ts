import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ConceptFormBuilderComponent } from '../concept-form-builder.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() parent: ConceptFormBuilderComponent;
  @Input() uniqueKey: number;
  @Input() data: any;

  public selfRef: ListItemComponent;
  listItemForm = new FormGroup({
    label: new FormControl(),
    value: new FormControl(),
  });
  constructor() { }

  ngOnInit(): void {
    if(this.data){
      this.renderComponents();
    }
  }

  renderComponents(){
    this.listItemForm.controls.label.setValue(this.data.label);
    this.listItemForm.controls.value.setValue(this.data.value);
  }

  removeComponent(){
    this.parent && this.parent.removeComponent && this.parent.removeComponent(this.uniqueKey);
  }

  getData(){
    return {
      label: this.listItemForm.controls.label.value,
      value: this.listItemForm.controls.value.value
    }
  }

}
