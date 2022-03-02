import postfixToInfix from './postfixToInfix';

const input = ' ';

test('if the data is null', done => {
  function callback(input) {
    try {
      expect(input).toBe(' ');
      done();
    } catch (error) {
      done(error);
    }
  }
  
  postfixToInfix(input);
});

const input1 = 'ab+';

test('if the data is (ab+)', done => {
  function callback(input1) {
    try {
      expect(input1).toBe('a+b');
      done();
    } catch (error) {
      done(error);
    }
  }
  
  postfixToInfix(input1);
});