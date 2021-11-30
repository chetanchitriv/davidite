export class FormulaStep<T> {
    condition: string;
    trueCase: string;
    falseCase: string;

    constructor(options: {
        condition?: string;
        trueCase?: string;
        falseCase?: string;
    } = {}) {
        this.condition = options.condition || '';
        this.trueCase = options.trueCase || '';
        this.falseCase = options.falseCase || '';
    }
}