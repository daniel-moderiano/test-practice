import { capitalise } from './capitalise.js'; 
import { reverseString } from './reverseString.js';

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


