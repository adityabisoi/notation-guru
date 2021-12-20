const infixToPrefix = require('./infixToPrefix');

// eslint-disable-next-line no-undef
test('Returns Postfix expression for an infix input', () => {
  // eslint-disable-next-line no-undef
  expect(infixToPrefix.infixToPrefix('1+2*3')).toBe('+1*23');
});
