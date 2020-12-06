function infixToPostfix (inputString) 
{
    const expression ='(' + inputString.split(' ').join('')+')'
    var stack = []
    var convertedExpression = []
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
	for (var i = 0; i < expression.length; i++) 
	{
        var token = expression[i]
		if (token.match(alphanumeric)) 
		{ 
			convertedExpression.push(token)
		}
		else 
		{
			if(weightage[token]===0)
			{
				if(token==='(') stack.push(token)
				else
				{
					while(stack[stack.length-1]!=='(') 
					{
						top=stack.pop()
						convertedExpression.push(top)
					}
					stack.pop()
				}
			}
			else
			{
				while(weightage[token]<=weightage[stack[stack.length-1]]) 
				{
					top=stack.pop()
					convertedExpression.push(top)
				}
				stack.push(token)
			}
			
			
        }
	}
	var ans=convertedExpression.join('')
	return ans
}
module.exports = {
    infixToPostfix: infixToPostfix
}
