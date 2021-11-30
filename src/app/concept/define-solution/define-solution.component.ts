import { Component, OnInit, ViewChild } from '@angular/core';
import { UIOutputConfig } from '../concept';
import { ConceptService } from '../concept.service';
import { ActivatedRoute } from '@angular/router';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-define-solution',
  templateUrl: './define-solution.component.html',
  styleUrls: ['./define-solution.component.scss']
})
export class DefineSolutionComponent implements OnInit {
 // public Editor = ClassicEditor;
  @ViewChild('myEditor') myEditor: any;
  conceptId = null;
  isNewRecord = true;

  uiOutput:UIOutputConfig = {
    html_template: '',
  };


  constructor(
    private route: ActivatedRoute,
    private conceptService: ConceptService,
  ) { }

  ngOnInit(): void {
    this.conceptId = this.route.snapshot.params.id;
    if (this.conceptId) this.getUIConfig();
  }

  getUIConfig(){
    this.conceptService.getUIOutputConfig(this.conceptId)
      .subscribe((res: any) => {
        //.conceptDetails = res;
        if (res && res.config_id) {
          Object.assign(this.uiOutput, res.config_json);
          this.isNewRecord = false;
        } else {
          this.isNewRecord = true;
        }
      },
      err=>{
        this.isNewRecord = true;
      });
  }

  saveSolutionDefinition(){
    let service = this.isNewRecord ? "createUIOutputConfig" : "updateUIOutputConfig";

    this.conceptService[service](this.conceptId, this.uiOutput).subscribe(
      res => {
        this.isNewRecord = false;
      }
    );
  }

  private getContent() {
    if (this.myEditor && this.myEditor.instance) {
      return this.myEditor.instance.getData();
    }

    return '';
  }

}
