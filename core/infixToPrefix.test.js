import infixToPrefix from './infixToPrefix';

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
  
  infixToPrefix(input);
});

const input1 = 'a+b';

test('if the data is (a+b)', done => {
  function callback(input1) {
    try {
      expect(input1).toBe('+ab');
      done();
    } catch (error) {
      done(error);
    }
  }
  
  infixToPrefix(input1);
});