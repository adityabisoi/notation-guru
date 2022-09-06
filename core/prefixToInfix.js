function prefixToInfix(inputString) {
    var stack = []
    var convertedExpression = []
    const alphanumeric = /^[0-9a-zA-Z]+$/
    for (var i = inputString.length - 1; i >= 0; i--) {
        var token = inputString[i]
        if (token.match(alphanumeric)) {
            stack.push(token)
        } else {
            var string1 = stack.pop()
            var string2 = stack.pop()
            var newString = ')' + string2 + token + string1 + '('
            stack.push(newString)
        }
    }
    if (stack && stack.length === 1) {
        return stack.pop().split('').reverse().join('')
    } else {
        throw new Error('Please enter a valid string')
    }
}
module.exports = {
    prefixToInfix: prefixToInfix,
}
