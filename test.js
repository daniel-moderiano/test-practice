import { capitalise } from './capitalise.js'; 
import { reverseString } from './reverseString.js';
import { calculator } from './calculator.js';
import { caesar } from './caesar.js';
import { analyse } from './analyse.js';


// ### CAPITALISE ###

test('capitalises first letter of all lowercase string', () => {
  expect(capitalise('apple')).toMatch('Apple');
});

test('leaves empty string untouched', () => {
  expect(capitalise('')).toMatch('');
});

test('leaves all caps string untouched', () => {
  expect(capitalise('APPLE')).toMatch('APPLE');
});

test('capitalises single lowercase letter string', () => {
  expect(capitalise('a')).toMatch('A');
});


// ### REVERSE STRING ###

test('reverses single lowercase word with no spaces', () => {
  expect(reverseString('apple')).toMatch('elppa');
});

test('reverses single word while maintaining capital letters', () => {
  expect(reverseString('Apple')).toMatch('elppA');
});

test('leaves empty string untouched', () => {
  expect(reverseString('')).toMatch('');
});

test('reverses a string containing multiple words', () => {
  expect(reverseString('Apple a day')).toMatch('yad a elppA');
});


// ### CALCULATOR ###

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test('divides 20 / 5 to equal 4', () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test('limits decimal result to 2 places for irrational numbers', () => {
  expect(calculator.divide(10, 3)).toEqual(3.33);
});

test('returns error message if user tries to divide by zero', () => {
  expect(calculator.divide(3, 0)).toBe('Error: cannot divide by zero!');
});


// ### CAESAR CIPHER ###

test('encrypts string that requires no alphabet wrapping', () => {
  expect(caesar('apple', 1)).toMatch('bqqmf');
});

test('encrypts string that requires alphabet wrapping', () => {
  expect(caesar('apple', 12)).toMatch('mbbxq');
});

test('encrypts string with shift > 26', () => {
  expect(caesar('apple', 30)).toMatch('ettpi');
});

test('preserves punctuation, including spaces and letter case', () => {
  expect(caesar("Apples, are tasty!", 10)).toMatch('Kzzvoc, kbo dkcdi!');
});


// ### ARRAY ANALYSIS ###

test('rejects empty arrays with an error message', () => {
  expect(analyse([])).toMatch('Error: cannot analyse an empty array!');
});

test('rejects array with non-number values', () => {
  expect(analyse([1, 2, 'a'])).toMatch('Error: array must only contain numbers!');
});

test('produces object with identical values for every entry on an array with a single element', () => {
  expect(analyse([1])).toEqual({ average: 1, min: 1, max: 1, length: 1 });
});

test('finds correct values on array with length > 1', () => {
  expect(analyse([2, 4, 6])).toEqual({ average: 4, min: 2, max: 6, length: 3 });
});

test('finds correct values on array with all identical values', () => {
  expect(analyse([2, 2, 2])).toEqual({ average: 2, min: 2, max: 2, length: 3 });
});

test('finds correct values on array with some negative values, producing to 2 decimal places where required', () => {
  expect(analyse([2, -1, 4])).toEqual({ average: 1.67, min: -1, max: 4, length: 3 });
});

test('finds correct values, producing to 2 decimal places where required', () => {
  expect(analyse([2, 4, 4])).toEqual({ average: 3.33, min: 2, max: 4, length: 3 });
});

