// eslint-disable-next-line import/no-unresolved
const postfixToInfix = require('./postfixToinfix');

// eslint-disable-next-line no-undef
test('Returns infix expression for an postfix input', () => {
  // eslint-disable-next-line no-undef
  expect(postfixToInfix.postfixToInfix('123*+')).toBe('(1+(2*3))');
});
