type FormulaInput = {
    value: string
    index: number
    length: number
    operator: string
    fullMatch: string
}

export const findFormulaInputs = (text: string): FormulaInput[] => {
    // (?<=^|\s) - позитивный просмотр назад: начало строки или пробельный символ
    // (\d+[\/\*\-\+]) - захватывающая группа: число + оператор
    // (?=\s|$) - позитивный просмотр вперед: пробельный символ или конец строки
    const regex = /(?<=^|\s)(\d+)([/*\-+])(?=\s|$)/g

    const matches = []
    let match

    while ((match = regex.exec(text)) !== null) {
        const number = match[1] // Первая группа - число
        const operator = match[2] // Вторая группа - оператор
        const fullMatch = number + operator // Полное совпадение

        matches.push({
            value: number, // Теперь здесь только число
            operator: operator, // Отдельное поле для оператора
            fullMatch: fullMatch, // Полное совпадение
            index: match.index,
            length: fullMatch.length,
        })
    }

    return matches
}
