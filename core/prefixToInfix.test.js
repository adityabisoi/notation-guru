// eslint-disable-next-line import/no-unresolved
const prefixToInfix = require('./prefixToinfix');

// eslint-disable-next-line no-undef
test('Returns infix expression for an prefix input', () => {
  // eslint-disable-next-line no-undef
  expect(prefixToInfix.prefixToInfix('+1*23')).toBe('(1+(2*3))');

});
