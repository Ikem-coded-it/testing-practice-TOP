const identifier = [
    {letter:"a", number:0}, {letter:"b", number:1}, {letter:"c", number:2}, {letter:"d", number:3},
    {letter:"e", number:4}, {letter:"f", number:5}, {letter:"g", number:6}, {letter:"h", number:7},
    {letter:"i", number:8}, {letter:"j", number:9}, {letter:"k", number:10}, {letter:"l", number:11},
    {letter:"m", number:12}, {letter:"n", number:13}, {letter:"o", number:14}, {letter:"p", number:15},
    {letter:"q", number:16}, {letter:"r", number:17}, {letter:"s", number:18}, {letter:"t", number:19},
    {letter:"u", number:20}, {letter:"v", number:21}, {letter:"w", number:22}, {letter:"x", number:23},
    {letter:"y", number:24}, {letter:"z", number:25},
]

function getNextLetter(letter, shift) {
    let nextNumber
    let nextLetter
    for (let id = 0; id < identifier.length; id++) {
        if (identifier[id].letter == letter.toLowerCase()) {
            nextNumber = identifier[id].number + shift;
            if (nextNumber > 25) nextNumber = nextNumber - 25 - 1;
        }
    }
    for (let id = 0; id < identifier.length; id++) {
        if (identifier[id].number == nextNumber) 
            nextLetter = identifier[id].letter
    }
    if (letter == letter.toUpperCase()) return nextLetter.toUpperCase();
    return nextLetter;
}

function caesarCipher(string, shift) {
    const stringArr = string.split('');
    let resultArr = [];

    stringArr.forEach(element => {
        if (element == " ") resultArr.push(" ");
        else resultArr.push(getNextLetter(element, shift))
    });
    return resultArr.join('');
}

export {caesarCipher};