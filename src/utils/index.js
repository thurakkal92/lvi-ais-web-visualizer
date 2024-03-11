export const fetchData = async (URL) => {
    const response = await fetch(URL);
    const jsonData = await response.text();
    return processData(jsonData);
};

function processData(csvData) {
    var lines = csvData.split('\n');
    var result = [];
    var headers = lines[ 0 ].split(',');
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentLine = lines[ i ].split(',');
        for (var j = 0; j < headers.length; j++) {
            obj[ headers[ j ] ] = currentLine[ j ];
        }
        result.push(obj);
    }


    if (result && result.length > 0) {
        const myJson = result.splice(0, 10)
        return myJson
    }
    return []
}


export const normalizeSize = size => {
    if (typeof size === "number") return `${size}px`
    return `${size}`
}
export const removeAtFromText = (str) => {
    const text = str.replace(/@/g, '');
    if (text) return text
    else return 'Unknown'

}
