export interface Concept {
    concept_id?: string;
    subject_id: string;
    part_id: string;
    name: string;
    meaning: string;
    symbol: string;
    functions: string[];
    tables: string[];
    constants: string[];
    p_concept_id: string;
    author_definitions:any[],
}

export interface ConceptDefnition {
    key?: string;
    label?: string;
    type?: string;
    required?: boolean;
    order?: number;
    options?: { label: string, value: string }[];
    isValid?:boolean;
}

export interface UIInputConfig {
    form_def ?:Object;
}

export interface UIOutputConfig {
    html_template ?: string;
    placeholder_terms ?: Object;
}