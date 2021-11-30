import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AdComponentDirective } from './ad-component.directive';
import { ConceptFormBuilderComponent } from './concept-form-builder/concept-form-builder.component';
import { ConceptDefnition, Concept, UIInputConfig } from '../concept';
import { Router, ActivatedRoute } from '@angular/router';
import { ConceptFormDialogComponent } from '../concept-form/concept-form-dialog/concept-form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ConceptService } from '../concept.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-defineconcept',
  templateUrl: './defineconcept.component.html',
  styleUrls: ['./defineconcept.component.scss']
})
export class DefineconceptComponent implements OnInit {
  @ViewChild(AdComponentDirective, { static: true }) adComponent: AdComponentDirective;

  formComponents =[];
  currentAdIndex = 0;
  conceptId:any = null;
  isNewRecord = true;
  //conceptDetails: Concept;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private conceptService: ConceptService,
  ) { }

  ngOnInit(): void {
    this.conceptId = this.route.snapshot.params.id;

    if (this.conceptId) this.getUIConfig();

  }

  renderConceptDefinitionForm(definition){
    if (definition){
      definition.forEach(item => {
        this.loadComponent(item)
      });
    }
  }

  getUIConfig(){

    this.conceptService.getUIInputConfig(this.conceptId)
      .subscribe((res:any) =>{
        //.conceptDetails = res;
        if (res && res.config_id){
          this.renderConceptDefinitionForm(res.config_json.form_def);
          this.isNewRecord = false;
        }else{
          this.isNewRecord = true;
        }
      },
      err=>{
        this.isNewRecord = true;
      });
  }

  previewForm(){
    const dialogRef = this.dialog.open(ConceptFormDialogComponent, {
      width: '500px',
      data: this.getConceptDefinition()
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  removeComponent(){
   /*  const viewComponentRef = this.adComponent.viewContainerRef;
    if (this.viewComponentRef.length < 1) return;
    let componentRef = this.componentsReferences.find(x => x.instance.uniqueKey == uniqueKey);
    let vcrIndex: number = this.viewComponentRef.indexOf(componentRef.hostView);

    this.viewComponentRef.remove(vcrIndex);

    // removing component from the list
    this.componentsReferences = this.componentsReferences.filter(
      x => x.instance.uniqueKey !== uniqueKey
    ); */
  }

  loadComponent(data?:any){
    this.currentAdIndex++;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ConceptFormBuilderComponent);
    const viewComponentRef = this.adComponent.viewContainerRef;
    const componentRef = viewComponentRef.createComponent<ConceptFormBuilderComponent>(componentFactory);
    componentRef.instance.data = Object.assign({ count: this.currentAdIndex}, {prefills:data});
    this.formComponents.push(componentRef);
  }

  saveDefnition(){
    let uiConfig:UIInputConfig = {
      form_def : this.getConceptDefinition()
    }

    if(this.isNewRecord){
      this.conceptService.createUIInputConfig(this.conceptId, uiConfig).subscribe(
        res=>{
          this.isNewRecord = false;
        }
      );
    }else{
      this.conceptService.updateUIInputConfig(this.conceptId, uiConfig).subscribe();
    }
   // this.formComponents
  }

  getConceptDefinition(){
    let controlsDef:ConceptDefnition[] = [];
    this.formComponents.forEach(component => {
      controlsDef.push(component.instance.getData());
    });

    return controlsDef;
  }

}
