import { capitalise } from './capitalise.js'; 

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

