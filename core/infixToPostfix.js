const res = require("express/lib/response")

function infixToPostfix(inputString) {
	const expression = '(' + inputString.split(' ').join('') + ')'
	console.log(expression)
	var stack = []
	var convertedExpression = []
	var result = []
	const alphanumeric = /^[0-9a-zA-Z]+$/
	const weightage =
	{
		'*': 3,
		'/': 3,
		'+': 2,
		'-': 2,
		'(': 0,
		')': 0
	}
	for (var i = 0; i < expression.length; i++) {
		var token = expression[i]
		if (token.match(alphanumeric)) {
			convertedExpression.push(token)
		}
		else {
			if (weightage[token] === 0) {
				if (token === '('){ 
					stack.push(token)
				}
				else {
					while (stack[stack.length - 1] !== '(') {
						top = stack.pop()
						convertedExpression.push(top)
					}
					stack.pop()
				}
			}
			else {
				while (weightage[token] <= weightage[stack[stack.length - 1]]) {
					top = stack.pop()
					convertedExpression.push(top)
				}
				stack.push(token)
			}
		}
			let tb = new TableObject(expression[i],convertedExpression.toString(),stack.toString())
			result.push(tb)
	}
	var ans = convertedExpression.join('')
	var resultCombine = []
	resultCombine.push(ans)
	resultCombine.push(result)
	return resultCombine
}

function TableObject(input,output,stack){
	this.input=input;
	this.output=output;
	this.stack=stack;
	return this;
}
module.exports = {
	infixToPostfix: infixToPostfix
}
