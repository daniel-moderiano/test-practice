import { capitalise } from './capitalise.js'; 
import { reverseString } from './reverseString.js';
import { calculator } from './calculator.js';
import { caesar } from './caesar.js';


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