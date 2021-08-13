const calculator = {
  add: function(a, b) {
    return a + b;
  },

  subtract: function(a, b) {
    return a - b;
  },

  multiply: function(a, b) {
    return a * b;
  },

  divide: function(a, b) {
    if (b === 0) {
      return 'Error: cannot divide by zero!';
    }
    return parseFloat((a / b).toFixed(2));
  },
}


export { calculator };