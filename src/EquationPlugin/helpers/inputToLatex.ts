const ESCAPE_SYMBOL = '$'

const OPERATORS_TO_LATEX_TRANSFORMER_MAP: Record<string, (value: string) => string> = {
    '/': (value: string) => `\\frac{${value}}{\\placeholder{}}`,
    '^': (value: string) => `${value}^\\placeholder{}`,
}

export const inputToLatex = (value: string, operator: string, fullString: string): string => {
    const transformer = OPERATORS_TO_LATEX_TRANSFORMER_MAP[operator]

    let result
    if (transformer) {
        result = transformer(value)
    } else {
        result = fullString
    }

    return `${ESCAPE_SYMBOL}${result}${ESCAPE_SYMBOL}`
}
