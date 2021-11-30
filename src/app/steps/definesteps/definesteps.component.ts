import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CreatestepComponent } from '../createstep/createstep.component';
import { StepService } from '../step.service';
import { ConditionalStep, EvalStep, StepSuite } from '../steps';

@Component({
  selector: 'app-definesteps',
  templateUrl: './definesteps.component.html',
  styleUrls: ['./definesteps.component.scss']
})
export class DefinestepsComponent implements OnInit {
  conceptId: string;
  stepSuitId: string;
  stepSuitDetails: StepSuite;
  steps = [];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private stepService: StepService,
  ) {}

  ngOnInit() {
    this.conceptId = this.route.snapshot.paramMap.get('id');
    this.checkForStepSuiteAndProceed();
  }

  checkForStepSuiteAndProceed() {
    this.stepService.getStepSuite(this.conceptId)
      .subscribe((data: StepSuite) => {
        if(data) {
          this.stepSuitDetails = data;
          this.stepSuitId = data.step_suite_id;
        }
      });
  }

  createStepSuiteAndAddNewStep() {
    if(this.stepSuitId && this.stepSuitId.length) {
      this.openDialogNewSteps();
      return;
    }

    this.stepService.createStepSuite(this.conceptId)
      .subscribe((data) => {
        if(data['status'].toLowerCase() === "success") {
          this.stepSuitId = data['suite_id'] || '';
        
          if(this.stepSuitId && this.stepSuitId.length) {
            this.openDialogNewSteps();
          }
        }
      });
  }

  openDialogNewSteps(): void {
    const dialogRef = this.dialog.open(CreatestepComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(!result) {return;}

      if(result.type === 'evaluation') {
        this.createEvaluationStep(result);
      } else {
        this.createConditionalStep(result);
      }
    });
  }

  createEvaluationStep(step: EvalStep) {
    let funcArgs = {};

    for(const arg of step.arguments) {
      funcArgs[arg.argKey] = funcArgs[arg.argValue];
    }

    this.stepService.createNewStepEval(this.conceptId, {
      "step_name": step.name,
      "step_desc": step.description,
      "eval_func_id": step.evalFunction.func_id,
      "func_args": funcArgs,
      "return_args": {},
      "expose": true,
      "entry_desc": step.entryDesc,
      "exit_desc": step.exitDesc
    }).subscribe(data => {
      if(data['status'].toLowerCase() === 'success') {
        this.checkForStepSuiteAndProceed();
      }
    });
  }

  createConditionalStep(step: ConditionalStep) {
    this.stepService.createNewStepConditional(this.conceptId, {
      "step_name": step.name,
      "step_desc": step.description,
      "eval_func_id": step.evalFunction.func_id,
      "lhs_value": step.lhs,
      "rhs_value": step.rhs,
      "true_index": step.trueIndex,
      "false_index": step.falseIndex,
      "expose": true,
      "entry_desc": step.entryDesc,
      "exit_desc": step.exitDesc,
    }).subscribe(data => {
      if(data['status'].toLowerCase() === 'success') {
        this.checkForStepSuiteAndProceed();
      }
    });
  }

}
