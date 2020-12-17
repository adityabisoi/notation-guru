const express = require('express')
const router = express.Router()
const postfixToInfix = require('../core/postfixToInfix')


router.post('/postfixToInfix', (req, res, next) => {
    var inputExpression = req.body.expression
    var result = postfixToInfix.postfixToInfix(inputExpression)
    res.status(200).json({
        'expression': result
    })
})

module.exports = router