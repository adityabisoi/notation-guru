// Javascript Program to convert prefix to postfix
// function to check if character is operator or not
function isOperator(x) {
    switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true
    }
    return false
}

// Convert prefix to Postfix expression
function prefixToPostfix(pre_exp) {
    let s = []
    // length of expression
    let length = pre_exp.length

    // reading from right to left
    for (let i = length - 1; i >= 0; i--) {
        // check if symbol is operator
        if (isOperator(pre_exp[i])) {
            // pop two operands from stack
            let op1 = s.pop()
            let op2 = s.pop()
            // concat the operands and operator
            let temp = op1 + op2 + pre_exp[i]

            // Push String temp back to stack
            s.push(temp)
        }

        // if symbol is an operand
        else {
            // push the operand to the stack
            s.push(pre_exp[i] + '')
        }
    }

    // stack contains only the Postfix expression
    if (s && s.length === 1) {
        return s.pop()
    } else {
        throw new Error('Please enter a valid string')
    }
}

module.exports = {
    prefixToPostfix: prefixToPostfix,
}
