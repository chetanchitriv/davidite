import { EvalFunction } from 'src/app/evalfunctions/evalfunction';

export interface SolutionSuite {
  solution: any;
  type: any;
  description: any;
  name: any;
  concept_id: string;
  input_type: string;
  solution_suite_id: string;
  subject_id: string;
  solutions: {
    [solutionno: number]: any
  };
}

// export interface Arguments {
//   argValue: string;
//   argKey: string;
// }

export interface EvalStep {
  name: string;
  description: string;
  type: string;
  solution:string;
  // arguments: Arguments[];
  // entryDesc: string;
  // evalFunction: EvalFunction;
  // exitDesc: string;
}

// export interface ConditionalStep {
//   type: string;
//   name: string;
//   description: string;
//   arguments: Arguments[];
//   entryDesc: string;
//   evalFunction: EvalFunction;
//   exitDesc: string;
//   trueIndex: string;
//   falseIndex: string;
//   lhs: string;
//   rhs: string;
// }