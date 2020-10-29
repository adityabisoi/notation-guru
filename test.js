const expression = 'A+B*C-D*E'
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
    if (token.match(alphanumeric)) {
        // if alphanumeric push into final array
        convertedExpression.push(token)
    } else {
        // check weightage, push if more wightage than top
        if (weightage[token] > weightage[stack[stack.length-1]] || stack.length === 0) {
            stack.push(token)
        } 
        else {
            while (stack.length != 0) {
                if (weightage[token] < weightage[stack[stack.length-1]]) {
                    x = stack.pop()
                    convertedExpression.push(x)
                }
            }
            stack.push(token)
        }
    }
}
while(stack.length!=0){
    x=stack.pop()
    convertedExpression.push(x)
}
console.log(convertedExpression)
