import { Term } from '../terms/term';

export interface Function {
    func_id?: string;
    subject_id: string;
    part_id: string;
    concept_id: string;
    name: string;
    ftype: string;
    symbol: string;
    terms: string[];
    constraints: string[];
    author: string;
    termsDetails?: Term[];
    constraintsDetails?: any[];
}