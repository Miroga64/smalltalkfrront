const wordNormalize = (word: string, count?: number, sex = 'm') => {
    if(count === undefined) {
        return ''
    }
    let end: Array<string> = [];
    if(sex === 'm') {
        end = ['ов', '', 'а', 'а', 'а', 'ов', 'ов', 'ов', 'ов', 'ов', 'ов']
    }
    if(sex === 'v') {
        end = ['о', 'ен', 'о', 'о', 'о', 'о', 'о', 'о', 'о', 'о', 'о']
    }
    
    return `${word}${end[count % 10]}`
}

export default wordNormalize;