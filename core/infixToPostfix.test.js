const infixToPostfix = require('./infixToPostfix');

// eslint-disable-next-line no-undef
test('Returns Postfix expression for an infix input', () => {
  // eslint-disable-next-line no-undef
  expect(infixToPostfix.infixToPostfix('1+2*3')).toBe('123*+');
});
