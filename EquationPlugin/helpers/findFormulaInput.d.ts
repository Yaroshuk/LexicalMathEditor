type FormulaInput = {
    value: string;
    index: number;
    length: number;
    operator: string;
    fullMatch: string;
};
export declare const findFormulaInput: (text: string) => FormulaInput | null;
export {};
