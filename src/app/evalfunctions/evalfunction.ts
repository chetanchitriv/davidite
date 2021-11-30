export interface EvalFunction {
  func_id: string;
  func_name: string;
  func_signature?: string;
  func_args: Object;
  func_return_args: Object;
  func_source?: string;
  func_group_id: string;
}

export interface FunctionArguments {
  [key: string]: string
}