
export function limitString(text, limit, dot = false) {
    const data = text.substr(0, limit);
    const n = data.split(" ");
    const lastWord = n[n.length - 1];
    const newLimit = (data.length - lastWord.length)
    const newText = data.substr(0, newLimit);
    if (dot) {
        return `${newText} ...`;
    } else {
        return newText;
    }
}

export function makeArray(int) {
    let data = []
    for (i = 0; i < int; i++) {
        data.push(i);
    }
    return data;

}