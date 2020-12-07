function postfixToInfix (inputString)
{
	var stack=[]
	var convertedExpression=[]
	const alphanumeric = /^[0-9a-zA-Z]+$/
	for(var i=0; i<inputString.length;i++)
	{
		var token=inputString[i]
		if(token.match(alphanumeric))
		{
			stack.push(token)
		}
		else
		{
			var string1=stack.pop()
			var string2=stack.pop()
			var newString='('+string2+token+string1+')'
			stack.push(newString)
		}
	}
	return stack.pop()
}
module.exports = {
    postfixToInfix: postfixToInfix
}