
function capitalise(str) {
  const firstLetter = str.slice(0, 1);
  const remainingLetters = str.slice(1, str.length);
  return firstLetter.toUpperCase() + remainingLetters;
}

export { capitalise };


