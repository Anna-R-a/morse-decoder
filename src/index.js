const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********':  ' ',
};

function decode(expr) {
    let newExpr = [];
    newExpr = expr.match(/.{1,10}/g);
    let morseExpr = [];
    let result = [];
    for (let i = 0; i<newExpr.length; i++) {
        morseExpr.push(newExpr[i].replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-'));
    }
    for (let j = 0; j < morseExpr.length; j++) {
        result.push(MORSE_TABLE[morseExpr[j]]);
    }
    return result.join('');
}

module.exports = {
    decode
}