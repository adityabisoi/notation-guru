
	// Javascript Program to convert postfix to prefix

	// function to check if character is operator or not
	function isOperator(x)
	{

		switch (x) {
		case '+':
		case '-':
		case '/':
		case '*':
			return true;
		}
		return false;
	}

	// Convert postfix to Prefix expression
	function postfixToPrefix(pre_exp)
	{
		let s = [];

		// length of expression
		let length = pre_exp.length;

		// reading from right to left
		for (let i = 0; i < length; i++) {

			// check if symbol is operator
			if (isOperator(pre_exp[i])) {

				// Pop two operands from stack
				let op1 = s[s.length - 1];
				s.pop();
				let op2 = s[s.length - 1];
				s.pop();

				// concat the operands and operator
				let temp = pre_exp[i] + op2 + op1;

				// Push String temp back to stack
				s.push(temp);
			}

			// if symbol is an operand
			else {

				// Push the operand to the stack
				s.push(pre_exp[i] + "");
			}
		}

		let ans = "";
		while (s.length > 0)
			ans += s.pop();
		return ans;
	}
	
	module.exports = {
        postfixToPrefix: postfixToPrefix
    }
