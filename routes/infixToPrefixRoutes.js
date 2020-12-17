const express = require('express')
const router = express.Router()
const infixToPrefix = require('../core/infixToPrefix')


router.post('/infixToPrefix', (req, res, next) => {
    var inputExpression = req.body.expression
    var result = infixToPrefix.infixToPrefix(inputExpression)
    res.status(200).json({
        'expression': result
    })
})

module.exports = router