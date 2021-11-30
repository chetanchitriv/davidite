export interface Term {
    term_id?: string;
    subject_id: string;
    part_id: string;
    concept_id: string;
    func_id: string;
    name: string;
    symbol: string;
    definition: string;
    location: string;
    constraints: Constraints;
}

export interface Constraints {
    subsymbol: any;
    symbol: any[];
    coefficient: any[];
}