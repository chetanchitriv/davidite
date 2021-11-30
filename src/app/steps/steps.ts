import { EvalFunction } from 'src/app/evalfunctions/evalfunction';

export interface StepSuite {
  concept_id: string;
  input_type: string;
  step_suite_id: string;
  subject_id: string;
  steps: {
    [stepno: number]: any
  };
}

export interface Arguments {
  argValue: string;
  argKey: string;
}

export interface EvalStep {
  type: string;
  name: string;
  description: string;
  arguments: Arguments[];
  entryDesc: string;
  evalFunction: EvalFunction;
  exitDesc: string;
}

export interface ConditionalStep {
  type: string;
  name: string;
  description: string;
  arguments: Arguments[];
  entryDesc: string;
  evalFunction: EvalFunction;
  exitDesc: string;
  trueIndex: string;
  falseIndex: string;
  lhs: string;
  rhs: string;
}