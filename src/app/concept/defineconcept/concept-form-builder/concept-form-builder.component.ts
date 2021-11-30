import { Component, OnInit, ComponentFactoryResolver, ViewChild, Input, Type, ViewContainerRef, ComponentRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdComponentDirective } from '../ad-component.directive';
import { ListItemComponent } from './list-item/list-item.component';
import { Concept, ConceptDefnition } from '../../concept';

@Component({
  selector: 'app-concept-form-builder',
  templateUrl: './concept-form-builder.component.html',
  styleUrls: ['./concept-form-builder.component.scss']
})
export class ConceptFormBuilderComponent implements OnInit {
  @Input() data:any = {};
 // @ViewChild(AdComponentDirective, { static: true }) adComponent: AdComponentDirective;
  @ViewChild("viewContainerRef", { read: ViewContainerRef }) VCR: ViewContainerRef;

  //private listItemComponents = [];
  componentsReferences = Array<ComponentRef<ListItemComponent>>()
  public uniqueKey = 0;

  conceptDefineForm = new FormGroup({
    controlName: new FormControl('', Validators.required),
    controlType: new FormControl('', Validators.required),
  });
  inputTypes = [
    {
      value: "Text",
      label: "Text"
    },
    {
      value: "List",
      label: "List"
    }
  ];
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    if (this.data && this.data.prefills) {
      this.renderForm();
    }
  }

  renderForm(){
    this.data.prefills;
    this.conceptDefineForm.controls.controlName.setValue(this.data.prefills.label);
    this.conceptDefineForm.controls.controlType.setValue(this.data.prefills.type);
    if (this.data.prefills.options && this.data.prefills.options.length){
      this.data.prefills.options.forEach(item => {
        this.loadComponent(item)
      });
    }
  }

  loadComponent(data?:any) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ListItemComponent);
    //const viewComponentRef = this.VCR;
    let componentRef = this.VCR.createComponent(componentFactory);
    componentRef.instance.parent = this;
    componentRef.instance.uniqueKey = ++this.uniqueKey;
    componentRef.instance.data = data;
    this.componentsReferences.push(componentRef);
  }

  removeComponent(uniqueKey) {
    if (this.VCR.length < 1) return;
    let componentRef = this.componentsReferences.find( x => x.instance.uniqueKey == uniqueKey);
    let vcrIndex: number = this.VCR.indexOf(componentRef.hostView);

    this.VCR.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.uniqueKey !== uniqueKey
    );
  }

  onTypeChange(value){
    if(value == "List"){

    }else{
      this.VCR.clear();
      this.componentsReferences.splice(0);
    }
  }

  getData(){
    let condeptDefinition:ConceptDefnition = {
      key: "CONCEPT_DEF_"+ this.data.count,
      label: this.conceptDefineForm.controls.controlName.value,
      type: this.conceptDefineForm.controls.controlType.value,
      required:false,
      isValid: this.validateForm(),
      options : []
    };
    this.componentsReferences.forEach(component => {
      condeptDefinition.options.push(component.instance.getData());
    });
    return condeptDefinition;
  }

  validateForm():boolean{
    if(
      this.conceptDefineForm.controls.controlName.invalid ||
      this.conceptDefineForm.controls.controlName.invalid
    ){
      return true;
    }

    return false;
  }

}
