const isNotNumber = (element) => !Number.isInteger(element);

function analyse(arr) {
  if (arr.length === 0) {
    return 'Error: cannot analyse an empty array!';
  }

  if (arr.some(isNotNumber)) {
    return 'Error: array must only contain numbers!'
  }

  const sorted = arr.sort((a, b) => a - b);
  const sum = arr.reduce((a, b) => a + b);

  return {
    average: parseFloat((sum / arr.length).toFixed(2)),
    min: sorted[0],
    max: sorted[arr.length - 1],
    length: arr.length
  }
}


export { analyse };
