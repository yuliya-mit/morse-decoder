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
    '     ': ' ',
};

function decode(expr) {
    function split(text) {
        return text.match(/..?/g);
    }
    
    
    const sign = {
      '10':'.',
      '11':'-',
      '00':'',
      '**':' ',
    }
        let arr=split(expr);
        let arr1=arr.map(item => sign[item]);
        let newArr=[];
        let word='';
        for (i=0; i<arr1.length; i=i+5) {
          if (arr1[i]==='**') {
            i=i+5};
          let tmp=arr1.slice(i, i+5);
          word=tmp.join('');
          newArr.push(word);
        }
        let arrResult=newArr.map(item => MORSE_TABLE[item]);
        return arrResult.join('');
}

module.exports = {
    decode
}