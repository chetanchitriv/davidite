export class ConditionalStep<T> {
    formula: string;
    showUser: boolean;
    backendCalculation: boolean;
    x: string;
    y: string;
    prefix: string;
    suffix: string;

    constructor(options: {
        formula?: string;
        showUser?: boolean;
        backendCalculation?: boolean;
        x?: string;
        y?: string;
        prefix?: string;
        suffix?: string;
    } = {}) {
        this.formula = options.formula || '';
        this.showUser = options.showUser || false;
        this.backendCalculation = options.backendCalculation || false;
        this.x = options.x || '';
        this.y = options.y ?? '';
        this.prefix = options.prefix || '';
        this.suffix = options.suffix || '';
    }
}