const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function shiftLetter(letter, shift) {
  if (!LOWER.includes(letter.toLowerCase())) {
    return letter;
  } else if (letter === letter.toUpperCase()) {
    return UPPER[(UPPER.indexOf(letter) + shift) % 26];
  } else if (letter === letter.toLowerCase()) {
    return LOWER[(LOWER.indexOf(letter) + shift) % 26];
  }  
}

function caesar(str, shift) {
  const cipherArr = str.split("");
  const shifted = cipherArr.map((letter) => {
    return shiftLetter(letter, shift);
  });
  return shifted.join("");
}

export { caesar };