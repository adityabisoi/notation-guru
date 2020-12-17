const express = require('express')
const router = express.Router()
const infixToPostfix = require('../core/infixToPostfix')


router.post('/infixToPostfix', (req, res, next) => {
    var inputExpression = req.body.expression
    var result = infixToPostfix.infixToPostfix(inputExpression)
    res.status(200).json({
        'expression': result
    })
})

module.exports = router