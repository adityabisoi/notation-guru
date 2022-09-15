function infixToPrefix(inputString) {
  const expression = inputString.split('').reverse().join('');
  var stack = [];
  var convertedExpression = [];
  const alphanumeric = /^[0-9a-zA-Z]+$/
  const weightage = {
      '^': 4,
      '*': 3,
      '/': 3,
      '+': 2,
      '-': 2,
      '(': 0,
      ')': 0,
  };
  var result = []
  result.push(['', '', '', `Reverse the infix expression: ${expression}`])
  for (var i = 0; i < expression.length; i++) {
      var token = expression[i];
      var arr = []
      var msg = ''
      if (token == ' ') {
          continue
      }
      if (token.match(alphanumeric)) {
          msg = 'Add operand directly to output'
          convertedExpression.push(token);
      } else if (token === ')') {
          msg = 'Add ) to stack'
          stack.push(token);
      } else if (token === '(') {
          msg = 'Pop operator(s) from stack and add to output until a ) is found'
          while (stack[stack.length - 1] !== ')') {
              top = stack.pop();
              convertedExpression.push(top);
          }
          stack.pop();
      } else {
          if (stack.length == 0) {
              msg = 'Add operator to empty stack'
          } else {
              msg = 'Add operator to stack since last element in stack has lower/equal precedence.'
          }
          while (weightage[token] < weightage[stack[stack.length - 1]]) {
              msg = 'Pop from stack and add to output, since the last operator in stack has higher precedence'
              top = stack.pop();
              convertedExpression.push(top);
          }
          stack.push(token);
      }
      arr.push(token)
      arr.push(stack.join(''))
      arr.push(convertedExpression.join(''))
      arr.push(msg)
      result.push(arr)
  }
  if ((stack.length != 0)) {
      while (stack.length != 0) {
          top = stack.pop();
          convertedExpression.push(top);
      }
      result.push(['', '', convertedExpression.join(''), 'Pop remaining operators from stack and add to output'])
  }
  var ans = convertedExpression.reverse().join('');
  result.push(['', '', ans, 'Reverse the output'])
  return {
    data:result,
    output:ans
  };
}

module.exports = {
  infixToPrefix: infixToPrefix,
};
