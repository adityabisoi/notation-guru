var expression = 'A* B *C'
expression = expression.split(' ').join('')
var stack = []
var convertedExpression = []
var alphanumeric = /^[0-9a-zA-Z]+$/
const weightage = {
    '*': 4,
    '/': 3,
    '+': 2,
    '-': 1,
    '(': 0,
    ')': 0
}
for (var i = 0; i < expression.length; i++) {
    var token = expression[i]
    if (token.match(alphanumeric)) { // if alphanumeric push into final array
        convertedExpression.push(token)
    } else {
        if (weightage[token] >= weightage[stack[stack.length - 1]] || stack.length === 0 || token === '(') { // check weightage, push if more wightage than top
            stack.push(token)
        } else if (token === ')') {
            while (stack[stack.length - 1] != '(') {
                el = stack.pop()
                convertedExpression.push(el)
            }
            stack.pop()
        } else {
            while (stack.length != 0) {
                if (weightage[token] <= weightage[stack[stack.length - 1]]) {
                    top = stack.pop()
                    convertedExpression.push(top)
                }
            }
            stack.push(token)
        }
    }
}
while (stack.length != 0) {
    top = stack.pop()
    convertedExpression.push(top)
}
console.log(convertedExpression.join(''))